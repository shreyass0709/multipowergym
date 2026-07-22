"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Dumbbell, Menu, X, Zap } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#memberships", label: "Membership" },
  { href: "#facilities", label: "Facilities" },
  { href: "#equipment", label: "Equipment" },
  { href: "#workout-plans", label: "Workout Plans" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-nav py-3 shadow-2xl shadow-black/50"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-[#101010] border border-white/10 group-hover:border-[#C6FF00]/50 transition-colors">
            <Dumbbell className="h-5 w-5 text-[#C6FF00] group-hover:rotate-12 transition-transform duration-300" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C6FF00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C6FF00]"></span>
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-[#C6FF00] transition-colors">
              Fit<span className="text-[#C6FF00]">Fusion</span>
            </span>
            <span className="text-[10px] font-bold tracking-widest text-[#A0A0A0] uppercase -mt-1">
              Multi Power Gym
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 bg-[#101010]/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-3 py-1.5 text-xs font-semibold text-[#A0A0A0] hover:text-[#C6FF00] hover:bg-white/5 rounded-full transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="px-5 py-2 text-xs font-bold text-white hover:text-[#C6FF00] transition-colors"
          >
            Login
          </Link>
          <Link
            href="#memberships"
            className="glow-btn flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-extrabold"
          >
            <span>Join Now</span>
            <Zap className="h-3.5 w-3.5 fill-current" />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-[#101010] border border-white/10 text-white hover:text-[#C6FF00]"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-nav border-b border-white/10 px-6 py-6 mt-2 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-[#A0A0A0] hover:text-[#C6FF00] py-1 border-b border-white/5"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-white"
            >
              Login
            </Link>
            <Link
              href="#memberships"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center glow-btn py-3 rounded-xl text-xs uppercase font-extrabold flex items-center justify-center gap-2"
            >
              <span>Join Now</span>
              <Zap className="h-3.5 w-3.5 fill-current" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
