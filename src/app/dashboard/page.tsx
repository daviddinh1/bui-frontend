// Example protected component
"use client";
import { useAuth } from "@/context/AuthContext";
import { apiClient } from "@/lib/api-client";

export default function Dashboard() {
  const { user, loading } = useAuth();

  const fetchUserData = async () => {
    try {
      // This will automatically include JWT
      const data = await apiClient.get("/user");
      console.log(data);
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>Please log in</div>;

  return (
    <div>
      <h1>Welcome, {user.email}</h1>
      <button onClick={fetchUserData}>Fetch My Data</button>
    </div>
  );
}
