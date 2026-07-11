import * as z from "zod";

// ---- Session payload stored (encrypted) in the cookie ----
export type SessionPayload = {
  userId: string;
  role: "USER" | "ADMIN";
  expiresAt: Date;
};

// ---- Auth form schemas ----
export const LoginSchema = z.object({
  email: z.email({ error: "Please enter a valid email." }).trim(),
  password: z.string().min(1, { error: "Password is required." }),
});

// Members activate an account the admin already created (lookup by email or phone).
export const RegisterLookupSchema = z.object({
  identifier: z
    .string()
    .min(3, { error: "Enter the email or phone you gave the gym." })
    .trim(),
});

export const ActivateSchema = z
  .object({
    identifier: z.string().trim(),
    otp: z.string().length(6, { error: "OTP is a 6-digit code." }),
    password: z
      .string()
      .min(8, { error: "Password must be at least 8 characters." })
      .regex(/[a-zA-Z]/, { error: "Include at least one letter." })
      .regex(/[0-9]/, { error: "Include at least one number." }),
    confirmPassword: z.string(),
  })
  .refine((d) => d.password === d.confirmPassword, {
    error: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export type FormState =
  | { errors?: Record<string, string[]>; message?: string }
  | undefined;
