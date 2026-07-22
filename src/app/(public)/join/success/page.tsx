"use client";

import React from "react";
import Link from "next/link";
import {
  Clock,
  CheckCircle2,
  Mail,
  ShieldAlert,
  ArrowRight,
  Home,
  Dumbbell,
  Sparkles,
  UserCheck,
} from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

export default function JoinSuccessPage() {
  const applicationId = "MPG-APP-2026-" + Math.floor(1000 + Math.random() * 9000);
  const timestamp = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="min-h-screen bg-[#050505] pt-28 pb-20 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden selection:bg-[#C6FF00] selection:text-black">
      {/* Background neon glows */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-[#C6FF00]/10 blur-[150px]" />

      <div className="w-full max-w-xl text-center space-y-6 relative z-10">
        
        {/* Animated Checkmark Icon Badge */}
        <div className="mx-auto h-20 w-20 rounded-3xl bg-[#C6FF00]/15 border border-[#C6FF00]/50 flex items-center justify-center text-[#C6FF00] shadow-[0_0_40px_rgba(198,255,0,0.4)] animate-bounce duration-1000">
          <CheckCircle2 className="h-10 w-10 stroke-[2.5]" />
        </div>

        {/* Title */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#101010] border border-[#C6FF00]/30 text-xs font-bold text-[#C6FF00] uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Application Received</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Application Submitted <span className="text-[#C6FF00]">Successfully</span>
          </h1>

          <p className="text-sm sm:text-base text-[#A0A0A0] max-w-md mx-auto">
            Your membership registration details have been securely delivered to the Multi Power Gym Owner.
          </p>
        </div>

        {/* Animated Status Card */}
        <GlassCard className="text-left space-y-5 border-[#C6FF00]/30">
          
          {/* Status Header */}
          <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center">
                <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-[#C6FF00] opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C6FF00]" />
              </div>
              <div>
                <p className="text-[10px] text-[#A0A0A0] font-bold uppercase tracking-wider">Current Application Status</p>
                <p className="text-sm font-extrabold text-[#C6FF00]">Pending Approval</p>
              </div>
            </div>

            <div className="px-3 py-1 rounded-lg bg-[#C6FF00]/10 border border-[#C6FF00]/40 text-xs font-bold text-[#C6FF00] flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 animate-spin" />
              <span>Under Review</span>
            </div>
          </div>

          {/* Details list */}
          <div className="space-y-3 text-xs">
            <div className="flex justify-between py-2 border-b border-white/5">
              <span className="text-[#A0A0A0]">Application Reference:</span>
              <span className="font-mono font-bold text-white">{applicationId}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-white/5">
              <span className="text-[#A0A0A0]">Submitted On:</span>
              <span className="font-bold text-white">{timestamp}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-[#A0A0A0]">Expected Review Time:</span>
              <span className="font-bold text-[#C6FF00]">Within 24 Hours</span>
            </div>
          </div>

          {/* Mail Notification Info Box */}
          <div className="p-4 rounded-xl bg-[#080808] border border-white/10 flex items-start gap-3 text-xs text-[#A0A0A0] leading-relaxed">
            <Mail className="h-5 w-5 text-[#C6FF00] shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-white mb-0.5">Next Steps</p>
              <p>
                You will receive an email confirmation and activation link once the Gym Owner approves your profile. Make sure to check your inbox!
              </p>
            </div>
          </div>

        </GlassCard>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link href="/" className="w-full sm:w-auto">
            <Button variant="outline" size="md" fullWidth>
              <Home className="h-4 w-4 mr-1.5" />
              <span>Return to Homepage</span>
            </Button>
          </Link>

          <Link href="/login" className="w-full sm:w-auto">
            <Button variant="primary" size="md" fullWidth>
              <span>Go to Login Page</span>
              <ArrowRight className="h-4 w-4 ml-1.5" />
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
