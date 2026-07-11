import Link from "next/link";
import { Dumbbell, MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-white">
              <Dumbbell size={18} />
            </span>
            Multi Power Gym
          </div>
          <p className="mt-3 text-sm text-muted">
            Navunda&apos;s home for strength, fitness and community. Train hard,
            live strong.
          </p>
        </div>

        <div className="text-sm">
          <h4 className="mb-3 font-semibold">Explore</h4>
          <ul className="space-y-2 text-muted">
            <li><Link href="/plans" className="hover:text-foreground">Membership Plans</Link></li>
            <li><Link href="/machines" className="hover:text-foreground">Machines</Link></li>
            <li><Link href="/workouts" className="hover:text-foreground">Workout Plans</Link></li>
            <li><Link href="/gallery" className="hover:text-foreground">Gallery</Link></li>
          </ul>
        </div>

        <div className="text-sm">
          <h4 className="mb-3 font-semibold">Visit Us</h4>
          <ul className="space-y-2 text-muted">
            <li className="flex items-center gap-2"><MapPin size={16} /> Navunda, Karnataka</li>
            <li className="flex items-center gap-2"><Phone size={16} /> +91 00000 00000</li>
            <li className="flex items-center gap-2"><Clock size={16} /> Mon–Sat, 6 AM – 10 PM</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} Multi Power Gym Navunda. All rights reserved.
      </div>
    </footer>
  );
}
