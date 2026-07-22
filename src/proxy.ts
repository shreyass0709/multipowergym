import { NextResponse, type NextRequest } from "next/server";
import { decrypt } from "@/lib/session";

// Next.js 16 Proxy / Middleware
const adminPrefix = "/admin";
const memberPrefix = "/dashboard";

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const cookie = req.cookies.get("session")?.value;
  const session = await decrypt(cookie);

  const isLoggedIn = !!session?.userId;
  const isAdmin = session?.role === "ADMIN";

  // Server-side protection check if session cookie is used
  if (pathname.startsWith(adminPrefix) && isLoggedIn && !isAdmin) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
};
