"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Dumbbell, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#facilities", label: "Features" },
  { href: "#workout-plans", label: "Service" },
  { href: "#equipment", label: "Exercise" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050505]/85 backdrop-blur-xl py-3 border-b border-white/10 shadow-2xl"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo: FiTusion */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#B5F200] text-black font-black text-xl shadow-[0_0_15px_rgba(181,242,0,0.4)]">
            ⚡
          </div>
          <span className="text-2xl font-black tracking-tight text-white group-hover:text-[#B5F200] transition-colors">
            Fi<span className="text-[#B5F200]">T</span>usion
          </span>
        </Link>

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs font-semibold text-[#A0A0A0] hover:text-[#B5F200] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Action Buttons: Contact Us & Get Started */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#contact"
            className="px-6 py-2.5 rounded-full bg-[#B5F200] text-black font-bold text-xs hover:bg-[#c5fc19] hover:shadow-[0_0_20px_rgba(181,242,0,0.5)] transition-all"
          >
            Contact Us
          </Link>
          <Link
            href="#memberships"
            className="px-6 py-2.5 rounded-full bg-white/5 border border-white/20 text-white hover:border-[#B5F200] hover:text-[#B5F200] font-semibold text-xs transition-all"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-[#101010] border border-white/10 text-white hover:text-[#B5F200]"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#050505]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 mt-2 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-[#A0A0A0] hover:text-[#B5F200] py-1 border-b border-white/5"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-full bg-[#B5F200] text-black font-bold text-xs uppercase"
            >
              Contact Us
            </Link>
            <Link
              href="#memberships"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-full bg-white/5 border border-white/20 text-white font-semibold text-xs uppercase"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
