import "server-only";
import bcrypt from "bcryptjs";

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(
  password: string,
  hash: string,
): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

/** 6-digit numeric OTP. */
export function generateOtp(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

/** OTP validity window. */
export function otpExpiry(minutes = 10): Date {
  return new Date(Date.now() + minutes * 60 * 1000);
}
