import * as z from "zod";

export const EnquirySchema = z.object({
  name: z.string().min(2, { error: "Name must be at least 2 characters." }).trim(),
  email: z.union([z.email({ error: "Enter a valid email." }), z.literal("")]).optional(),
  phone: z.string().min(7, { error: "Enter a valid phone number." }).trim(),
  message: z.string().min(5, { error: "Message must be at least 5 characters." }).trim(),
});
