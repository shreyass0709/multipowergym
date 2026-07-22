import Link from "next/link";
import Image from "next/image";
import { Dumbbell, Send, ShieldCheck, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-20 pb-10 text-[#A0A0A0]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/5">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/logo.png"
                alt="Multi Power Gym Navunda Logo"
                width={52}
                height={52}
                className="h-13 w-13 object-contain rounded-full border border-[#C6FF00]/40 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(198,255,0,0.3)]"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold tracking-tight text-white">
                  Fit<span className="text-[#C6FF00]">Fusion</span>
                </span>
                <span className="text-[10px] font-bold tracking-widest text-[#A0A0A0] uppercase -mt-1">
                  Multi Power Gym Navunda
                </span>
              </div>
            </Link>
            
            <p className="text-sm leading-relaxed text-[#A0A0A0] max-w-sm">
              Sculpt your body and elevate your spirit. FitFusion delivers elite fitness experiences with state-of-the-art machinery, master trainers, and custom athletic conditioning.
            </p>

            {/* Newsletter Input */}
            <div className="flex flex-col gap-2 max-w-md">
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                Subscribe to VIP Updates
              </span>
              <div className="flex items-center gap-2 p-1.5 rounded-full bg-[#101010] border border-white/10 focus-within:border-[#C6FF00]/50 transition-colors">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent px-4 py-2 text-xs text-white placeholder-[#666666] outline-none"
                />
                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C6FF00] text-black font-bold hover:scale-105 transition-transform">
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm font-medium">
              <li><Link href="/" className="hover:text-[#C6FF00] transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-[#C6FF00] transition-colors">About Story</Link></li>
              <li><Link href="#memberships" className="hover:text-[#C6FF00] transition-colors">Membership Plans</Link></li>
              <li><Link href="#facilities" className="hover:text-[#C6FF00] transition-colors">Gym Facilities</Link></li>
              <li><Link href="#equipment" className="hover:text-[#C6FF00] transition-colors">Import Machines</Link></li>
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white">
              Programs
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm font-medium">
              <li><Link href="#workout-plans" className="hover:text-[#C6FF00] transition-colors">Weight Loss & Shred</Link></li>
              <li><Link href="#workout-plans" className="hover:text-[#C6FF00] transition-colors">Hypertrophy Gain</Link></li>
              <li><Link href="#workout-plans" className="hover:text-[#C6FF00] transition-colors">Pure Powerlifting</Link></li>
              <li><Link href="#workout-plans" className="hover:text-[#C6FF00] transition-colors">Bodybuilding Prep</Link></li>
              <li><Link href="#workout-plans" className="hover:text-[#C6FF00] transition-colors">Personal Training</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact & Socials */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white">
              Location & Contact
            </h4>
            <div className="flex flex-col gap-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#C6FF00] shrink-0 mt-0.5" />
                <span>Multi Power Gym, Navunda Highway Junction, Karnataka</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#C6FF00] shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#C6FF00] shrink-0" />
                <span>contact@fitfusiongym.com</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#101010] border border-white/10 text-white hover:text-[#C6FF00] hover:border-[#C6FF00]/40 transition-all" aria-label="Instagram">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#101010] border border-white/10 text-white hover:text-[#C6FF00] hover:border-[#C6FF00]/40 transition-all" aria-label="Facebook">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.592 9 4.415V8z"/>
                </svg>
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#101010] border border-white/10 text-white hover:text-[#C6FF00] hover:border-[#C6FF00]/40 transition-all" aria-label="YouTube">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs font-medium text-[#666666]">
          <p>© {new Date().getFullYear()} FitFusion / Multi Power Gym. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <span className="flex items-center gap-1 text-[#C6FF00]">
              <ShieldCheck className="h-3.5 w-3.5" /> 100% Verified Facility
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
