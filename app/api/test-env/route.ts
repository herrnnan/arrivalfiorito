import { NextResponse } from "next/server";

export async function GET() {
  const emailPass = process.env.EMAIL_PASS || "No definido";
  return NextResponse.json({ emailPass });
}
