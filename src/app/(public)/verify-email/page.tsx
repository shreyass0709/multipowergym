"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen bg-[#050505] pt-28 pb-20 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden selection:bg-[#C6FF00] selection:text-black">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-[#C6FF00]/15 blur-[160px]" />

      <div className="w-full max-w-lg text-center space-y-6 relative z-10">
        
        {/* Large Animated Success Icon */}
        <div className="mx-auto h-24 w-24 rounded-3xl bg-[#C6FF00]/15 border-2 border-[#C6FF00] flex items-center justify-center text-[#C6FF00] shadow-[0_0_50px_rgba(198,255,0,0.5)] animate-pulse">
          <CheckCircle2 className="h-12 w-12 stroke-[2.5]" />
        </div>

        {/* Title */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#101010] border border-[#C6FF00]/30 text-xs font-extrabold text-[#C6FF00] uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Verification Confirmed</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Email Verified <span className="text-[#C6FF00]">Successfully.</span>
          </h1>

          <p className="text-sm sm:text-base text-[#A0A0A0] max-w-md mx-auto leading-relaxed">
            Your email address has been authenticated. Your Multi Power Gym account security is verified and ready for access.
          </p>
        </div>

        {/* Card */}
        <GlassCard className="text-left space-y-4">
          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-white/5 border border-white/10">
            <ShieldCheck className="h-6 w-6 text-[#C6FF00] shrink-0" />
            <div className="text-xs">
              <p className="font-bold text-white">Security Status: Active</p>
              <p className="text-[#A0A0A0] mt-0.5">
                Your email is linked to your Multi Power Gym member profile.
              </p>
            </div>
          </div>

          <Link href="/login" className="block w-full pt-2">
            <Button variant="primary" size="lg" fullWidth>
              <span>Continue to Login</span>
              <ArrowRight className="h-4 w-4 ml-1.5" />
            </Button>
          </Link>
        </GlassCard>

      </div>
    </div>
  );
}
