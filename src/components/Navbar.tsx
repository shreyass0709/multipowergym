import Link from "next/link";
import { Dumbbell } from "lucide-react";
import { getSession } from "@/lib/dal";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/plans", label: "Plans" },
  { href: "/machines", label: "Machines" },
  { href: "/workouts", label: "Workouts" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default async function Navbar() {
  const session = await getSession();
  const isLoggedIn = !!session?.userId;
  const isAdmin = session?.role === "ADMIN";

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand text-white">
            <Dumbbell size={20} />
          </span>
          <span className="leading-tight">
            Multi Power Gym
            <span className="block text-xs font-normal text-muted">Navunda</span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <Link
              href={isAdmin ? "/admin" : "/dashboard"}
              className="rounded-full bg-brand px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
            >
              {isAdmin ? "Admin" : "Dashboard"}
            </Link>
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-full px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-card"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="rounded-full bg-brand px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
              >
                Join
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
