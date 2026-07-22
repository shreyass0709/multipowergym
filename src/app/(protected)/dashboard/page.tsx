"use client";

import React from "react";
import Link from "next/link";
import {
  Dumbbell,
  User,
  Calendar,
  Zap,
  Activity,
  Award,
  LogOut,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Flame,
} from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { useAuth } from "@/lib/auth-context";

export default function MemberDashboard() {
  const { user, logout } = useAuth();

  const userName = user?.name || "Member";
  const userEmail = user?.email || "member@multipowergym.com";

  return (
    <div className="min-h-screen bg-[#050505] pt-24 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-[#C6FF00] selection:text-black">
      
      {/* Top Navbar Header Bar for Dashboard */}
      <div className="max-w-7xl mx-auto mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-[#C6FF00] text-black font-black flex items-center justify-center shadow-[0_0_20px_rgba(198,255,0,0.4)]">
            <Dumbbell className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-black text-white">Member Portal</h1>
              <span className="px-2.5 py-0.5 rounded-full bg-[#C6FF00]/10 border border-[#C6FF00]/30 text-[10px] font-extrabold text-[#C6FF00] uppercase tracking-wider">
                Active Member
              </span>
            </div>
            <p className="text-xs text-[#A0A0A0]">Multi Power Gym Navunda</p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-white">{userName}</p>
            <p className="text-[11px] text-[#A0A0A0]">{userEmail}</p>
          </div>

          <Button variant="outline" size="sm" onClick={logout}>
            <LogOut className="h-4 w-4 mr-1.5" />
            <span>Logout</span>
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Welcome Banner */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#101010] via-[#151515] to-[#0A0A0A] border border-[#C6FF00]/30 p-6 sm:p-10 overflow-hidden shadow-2xl">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#C6FF00]/15 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C6FF00]/10 border border-[#C6FF00]/30 text-xs font-bold text-[#C6FF00]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Welcome Back, Champion</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Ready for Today&apos;s <span className="text-[#C6FF00]">Workout?</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed">
              Your membership status is <strong className="text-[#C6FF00]">Active</strong>. You have unlimited access to all strength zones, cardio decks, and personal coaching sessions.
            </p>
          </div>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          <GlassCard className="p-5">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[10px] font-bold text-[#A0A0A0] uppercase tracking-wider">Membership Status</p>
                <h3 className="text-xl font-black text-[#C6FF00] mt-1 flex items-center gap-1.5">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Active Pro</span>
                </h3>
              </div>
              <div className="h-10 w-10 rounded-xl bg-[#C6FF00]/10 border border-[#C6FF00]/30 flex items-center justify-center text-[#C6FF00]">
                <ShieldCheck className="h-5 w-5" />
              </div>
            </div>
            <p className="text-[11px] text-[#A0A0A0] mt-3">Valid until Dec 31, 2026</p>
          </GlassCard>

          <GlassCard className="p-5">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[10px] font-bold text-[#A0A0A0] uppercase tracking-wider">Check-in Pass</p>
                <h3 className="text-xl font-black text-white mt-1">QR Code Active</h3>
              </div>
              <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C6FF00]">
                <Zap className="h-5 w-5" />
              </div>
            </div>
            <p className="text-[11px] text-[#A0A0A0] mt-3">Scan at gym turnstile</p>
          </GlassCard>

          <GlassCard className="p-5">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[10px] font-bold text-[#A0A0A0] uppercase tracking-wider">Workouts Completed</p>
                <h3 className="text-xl font-black text-white mt-1">24 Sessions</h3>
              </div>
              <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C6FF00]">
                <Flame className="h-5 w-5" />
              </div>
            </div>
            <p className="text-[11px] text-[#C6FF00] mt-3 font-semibold">+4 this week</p>
          </GlassCard>

          <GlassCard className="p-5">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[10px] font-bold text-[#A0A0A0] uppercase tracking-wider">Assigned Trainer</p>
                <h3 className="text-xl font-black text-white mt-1">Master Coach</h3>
              </div>
              <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C6FF00]">
                <Award className="h-5 w-5" />
              </div>
            </div>
            <p className="text-[11px] text-[#A0A0A0] mt-3">Personalized Program</p>
          </GlassCard>

        </div>

        {/* Quick Actions & Navigation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8">
            <GlassCard>
              <h3 className="text-base font-black text-white mb-4">Member Quick Shortcuts</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#C6FF00]/40 transition-all cursor-pointer group">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-bold text-white group-hover:text-[#C6FF00]">My Training Plan</h4>
                    <ChevronRight className="h-4 w-4 text-[#A0A0A0] group-hover:text-[#C6FF00]" />
                  </div>
                  <p className="text-xs text-[#A0A0A0]">View customized strength and hypertrophy workouts.</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#C6FF00]/40 transition-all cursor-pointer group">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-bold text-white group-hover:text-[#C6FF00]">Diet & Nutrition</h4>
                    <ChevronRight className="h-4 w-4 text-[#A0A0A0] group-hover:text-[#C6FF00]" />
                  </div>
                  <p className="text-xs text-[#A0A0A0]">Access high-protein macros and hydration targets.</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#C6FF00]/40 transition-all cursor-pointer group">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-bold text-white group-hover:text-[#C6FF00]">Equipment Catalog</h4>
                    <ChevronRight className="h-4 w-4 text-[#A0A0A0] group-hover:text-[#C6FF00]" />
                  </div>
                  <p className="text-xs text-[#A0A0A0]">Browse machine guides & lifting form tutorials.</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#C6FF00]/40 transition-all cursor-pointer group">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-bold text-white group-hover:text-[#C6FF00]">Payment History</h4>
                    <ChevronRight className="h-4 w-4 text-[#A0A0A0] group-hover:text-[#C6FF00]" />
                  </div>
                  <p className="text-xs text-[#A0A0A0]">Download invoices and renewal receipts.</p>
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="lg:col-span-4">
            <GlassCard className="space-y-4">
              <h3 className="text-base font-black text-white">Member Profile Info</h3>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-[#A0A0A0]">Name:</span>
                  <span className="font-bold text-white">{userName}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-[#A0A0A0]">Email:</span>
                  <span className="font-bold text-white">{userEmail}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-[#A0A0A0]">Member ID:</span>
                  <span className="font-mono font-bold text-[#C6FF00]">MBR-9042</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-[#A0A0A0]">Home Branch:</span>
                  <span className="font-bold text-white">Navunda Main Branch</span>
                </div>
              </div>

              <Link href="/" className="block pt-2">
                <Button variant="secondary" size="md" fullWidth>
                  <span>Visit Homepage</span>
                </Button>
              </Link>
            </GlassCard>
          </div>
        </div>

      </div>
    </div>
  );
}
