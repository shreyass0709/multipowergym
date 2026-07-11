"use server";

import { db } from "@/lib/db";
import { EnquirySchema } from "@/lib/validators/enquiry";
import type { FormState } from "@/lib/definitions";

export async function submitEnquiry(
  _state: FormState,
  formData: FormData,
): Promise<FormState> {
  const validated = EnquirySchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  });

  if (!validated.success) {
    return { errors: validated.error.flatten().fieldErrors };
  }

  const { name, email, phone, message } = validated.data;

  await db.enquiry.create({
    data: { name, email: email || null, phone, message },
  });

  return { message: "Thanks! We've received your enquiry and will get back to you soon." };
}
