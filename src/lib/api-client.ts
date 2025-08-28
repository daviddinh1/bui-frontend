// src/lib/api-client.ts
import { supabase } from "./supabase";

export class ApiClient {
  private baseURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

  async request(endpoint: string, options: RequestInit = {}) {
    // Get current session
    const {
      data: { session },
    } = await supabase.auth.getSession();

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      ...((options.headers as Record<string, string>) || {}),
    };

    // Add JWT if user is logged in
    if (session?.access_token) {
      headers["Authorization"] = `Bearer ${session.access_token}`;
    }

    const response = await fetch(`${this.baseURL}${endpoint}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    return response.json();
  }

  // Convenience methods so do apiClient then .get or whatever endpoint
  get(endpoint: string) {
    return this.request(endpoint, { method: "GET" });
  }

  post(endpoint: string, data: unknown) {
    return this.request(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
    });
  }
}

export const apiClient = new ApiClient();
