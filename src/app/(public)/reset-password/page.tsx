"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { KeyRound, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import PasswordInput from "@/components/ui/PasswordInput";
import Button from "@/components/ui/Button";

export default function ResetPasswordPage() {
  const router = useRouter();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!newPassword || newPassword.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match. Please re-enter.");
      return;
    }

    setIsLoading(true);
    await new Promise((res) => setTimeout(res, 1000));
    setIsLoading(false);
    setIsSuccess(true);
  };

  return (
    <div className="min-h-screen bg-[#050505] pt-28 pb-20 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden selection:bg-[#C6FF00] selection:text-black">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute top-1/4 left-1/3 h-96 w-96 rounded-full bg-[#C6FF00]/10 blur-[140px]" />

      <div className="w-full max-w-md relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-2 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#101010] border border-[#C6FF00]/30 text-xs font-extrabold text-[#C6FF00] uppercase tracking-wider">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Secure Password Reset</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Reset Your <span className="text-[#C6FF00]">Password</span>
          </h1>

          <p className="text-xs sm:text-sm text-[#A0A0A0]">
            Enter a new strong password below to update your account credentials.
          </p>
        </div>

        <GlassCard className="w-full">
          {isSuccess ? (
            <div className="text-center space-y-5 py-4 animate-in zoom-in-95 duration-300">
              <div className="mx-auto h-16 w-16 rounded-full bg-[#C6FF00]/20 border border-[#C6FF00] flex items-center justify-center text-[#C6FF00] shadow-[0_0_30px_rgba(198,255,0,0.4)]">
                <CheckCircle2 className="h-8 w-8 stroke-[3]" />
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-black text-white">Password Updated!</h3>
                <p className="text-xs text-[#A0A0A0]">
                  Your password has been changed. You may now log in.
                </p>
              </div>

              <Link href="/login" className="block w-full">
                <Button variant="primary" size="lg" fullWidth>
                  <span>Go to Login</span>
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              
              {error && (
                <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2 animate-in fade-in">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <PasswordInput
                id="reset-new-password"
                label="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                showStrengthMeter
              />

              <PasswordInput
                id="reset-confirm-password"
                label="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                isValid={!!confirmPassword && confirmPassword === newPassword}
              />

              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                isLoading={isLoading}
              >
                <span>Update Password</span>
                <CheckCircle2 className="h-4 w-4 ml-1" />
              </Button>

              <div className="text-center pt-3 border-t border-white/10">
                <Link
                  href="/login"
                  className="text-xs font-bold text-[#A0A0A0] hover:text-[#C6FF00] transition-colors"
                >
                  Return to Login
                </Link>
              </div>
            </form>
          )}
        </GlassCard>

      </div>
    </div>
  );
}
