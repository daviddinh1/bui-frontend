import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // server-side only!
);

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const path = searchParams.get("path"); // e.g. "reports/q1-2025.pdf"
  const expiresIn = Number(searchParams.get("expiresIn") ?? 60); // seconds

  if (!path) {
    return NextResponse.json({ error: "Missing path" }, { status: 400 });
  }

  // Optional: add auth here (e.g. verify cookie/session/JWT) to restrict who can get URLs.

  const { data, error } = await supabaseAdmin.storage
    .from("documents")
    .createSignedUrl(path, expiresIn);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ url: data.signedUrl });
}
