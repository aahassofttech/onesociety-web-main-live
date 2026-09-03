import { NextRequest, NextResponse } from "next/server";
import { createLead } from "@/lib/leads";

export async function POST(request: NextRequest) {
  let body: { name?: string; email?: string; phone?: string; message?: string } = {};
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const fullName = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  const errors: Record<string, string> = {};
  if (!fullName) errors.name = "Full name is required";
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address";
  }
  if (!phone || !/^\+?[\d\s\-()]{10,}$/.test(phone)) {
    errors.phone = "Please enter a valid phone number";
  }
  if (!message || message.length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: "Validation failed", fields: errors }, { status: 400 });
  }

  try {
    await createLead({ fullName, email, phone, message });
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Lead save error:", error);
    return NextResponse.json({ error: "Could not save your message." }, { status: 500 });
  }
}
