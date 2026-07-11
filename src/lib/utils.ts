import { clsx, type ClassValue } from "clsx";

/** Small class-name combiner. */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/** Format paise (integer) as ₹ currency. */
export function formatINR(paise: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(paise / 100);
}

/** Whole days from now until `date` (negative if past). */
export function daysUntil(date: Date | string): number {
  const target = new Date(date).getTime();
  const now = Date.now();
  return Math.ceil((target - now) / (1000 * 60 * 60 * 24));
}
