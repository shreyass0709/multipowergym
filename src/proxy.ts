import { NextResponse, type NextRequest } from "next/server";
import { decrypt } from "@/lib/session";

// Next.js 16 renamed Middleware to Proxy (same behavior).
// This does OPTIMISTIC auth checks only (reads the cookie, no DB).
// Real authorization happens in the DAL / server actions.

const adminPrefix = "/admin";
const memberPrefix = "/dashboard";
const authPages = ["/login", "/register"];

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const cookie = req.cookies.get("session")?.value;
  const session = await decrypt(cookie);

  const isLoggedIn = !!session?.userId;
  const isAdmin = session?.role === "ADMIN";

  // Protect member area
  if (pathname.startsWith(memberPrefix) && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // Protect admin area
  if (pathname.startsWith(adminPrefix)) {
    if (!isLoggedIn) return NextResponse.redirect(new URL("/login", req.nextUrl));
    if (!isAdmin) return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  // Keep logged-in users off the auth pages
  if (authPages.includes(pathname) && isLoggedIn) {
    const dest = isAdmin ? "/admin" : "/dashboard";
    return NextResponse.redirect(new URL(dest, req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
};
