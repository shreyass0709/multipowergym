"use client";

import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hoverEffect = false,
}: GlassCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-[#101010]/75 backdrop-blur-xl border border-white/10 p-6 md:p-8 shadow-2xl shadow-black/80 transition-all duration-300 ${
        hoverEffect
          ? "hover:border-[#C6FF00]/40 hover:shadow-[0_10px_30px_rgba(198,255,0,0.12)] hover:-translate-y-1"
          : ""
      } ${className}`}
    >
      {/* Background ambient lighting subtle glow */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-[#C6FF00]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-[#C6FF00]/5 blur-3xl" />

      {/* Card Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
