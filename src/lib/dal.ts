import "server-only";
import { cache } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { decrypt } from "@/lib/session";
import { db } from "@/lib/db";

/**
 * Verify the session cookie. Memoized per render pass.
 * Returns the session payload or null (does NOT redirect) so callers can decide.
 */
export const getSession = cache(async () => {
  const cookie = (await cookies()).get("session")?.value;
  return decrypt(cookie);
});

/** Require any logged-in user. Redirects to /login otherwise. */
export const verifySession = cache(async () => {
  const session = await getSession();
  if (!session?.userId) redirect("/login");
  return session;
});

/** Require an ADMIN. Redirects members to their dashboard, guests to /login. */
export const verifyAdmin = cache(async () => {
  const session = await getSession();
  if (!session?.userId) redirect("/login");
  if (session.role !== "ADMIN") redirect("/dashboard");
  return session;
});

/** Fetch the current user (safe columns only). */
export const getCurrentUser = cache(async () => {
  const session = await getSession();
  if (!session?.userId) return null;

  return db.user.findUnique({
    where: { id: session.userId },
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      role: true,
      status: true,
    },
  });
});
