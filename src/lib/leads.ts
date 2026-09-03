import "server-only";
import { execute } from "@/lib/db";

export interface LeadInput {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export async function createLead(input: LeadInput): Promise<void> {
  const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const now = new Date().toISOString().slice(0, 19).replace("T", " ");

  await execute(
    `INSERT INTO leads
      (id, source_project, form_type, first_name, email, phone, message, extra_fields, status, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      id,
      "oneplace",
      "contact",
      input.fullName,
      input.email,
      input.phone || "",
      input.message,
      "{}",
      "not_done",
      now,
    ]
  );
}
