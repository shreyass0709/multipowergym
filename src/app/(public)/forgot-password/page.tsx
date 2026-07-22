"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  KeyRound,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import FloatingInput from "@/components/ui/FloatingInput";
import PasswordInput from "@/components/ui/PasswordInput";
import OtpInput from "@/components/ui/OtpInput";
import Button from "@/components/ui/Button";

type RecoveryStep = "EMAIL" | "OTP" | "NEW_PASSWORD" | "SUCCESS";

export default function ForgotPasswordPage() {
  const [step, setStep] = useState<RecoveryStep>("EMAIL");
  const [email, setEmail] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [successBanner, setSuccessBanner] = useState("");

  // Step 1: Handle Send OTP
  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid registered email address.");
      return;
    }

    setIsLoading(true);
    // Simulate sending OTP via mail service
    await new Promise((res) => setTimeout(res, 900));
    setIsLoading(false);
    setSuccessBanner("Verification code sent! Check your inbox.");
    setStep("OTP");
  };

  // Step 2: Handle OTP Submit
  const handleVerifyOtp = async (otpVal?: string) => {
    const valToTest = otpVal || otpCode;
    setError("");
    if (!valToTest || valToTest.length < 6) {
      setError("Please enter the complete 6-digit OTP code.");
      return;
    }

    setIsLoading(true);
    await new Promise((res) => setTimeout(res, 800));
    setIsLoading(false);
    setSuccessBanner("OTP verified successfully! Set your new password.");
    setStep("NEW_PASSWORD");
  };

  // Step 3: Handle Reset Password Submit
  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!newPassword || newPassword.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match. Please verify.");
      return;
    }

    setIsLoading(true);
    await new Promise((res) => setTimeout(res, 1000));
    setIsLoading(false);
    setStep("SUCCESS");
  };

  return (
    <div className="min-h-screen bg-[#050505] pt-28 pb-20 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden selection:bg-[#C6FF00] selection:text-black">
      {/* Background ambient neon glows */}
      <div className="pointer-events-none absolute top-1/4 right-10 h-96 w-96 rounded-full bg-[#C6FF00]/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 left-10 h-96 w-96 rounded-full bg-[#C6FF00]/5 blur-[150px]" />

      <div className="w-full max-w-lg relative z-10">
        
        {/* Page Title Header */}
        <div className="text-center space-y-2 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#101010] border border-[#C6FF00]/30 text-xs font-extrabold text-[#C6FF00] uppercase tracking-wider">
            <KeyRound className="h-3.5 w-3.5" />
            <span>Account Security</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Forgot <span className="text-[#C6FF00]">Password?</span>
          </h1>

          <p className="text-xs sm:text-sm text-[#A0A0A0] max-w-sm mx-auto">
            {step === "EMAIL" && "Enter your email to receive a 6-digit verification OTP."}
            {step === "OTP" && `Enter the 6-digit OTP code sent to ${email}.`}
            {step === "NEW_PASSWORD" && "Create a secure new password for your gym account."}
            {step === "SUCCESS" && "Your password has been successfully updated!"}
          </p>
        </div>

        {/* Glassmorphic Recovery Card */}
        <GlassCard className="w-full">
          
          {/* Error Banner */}
          {error && (
            <div className="mb-5 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2 animate-in fade-in">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Success Banner */}
          {successBanner && step !== "SUCCESS" && (
            <div className="mb-5 p-3.5 rounded-xl bg-[#C6FF00]/10 border border-[#C6FF00]/30 text-[#C6FF00] text-xs flex items-center gap-2 animate-in fade-in">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              <span>{successBanner}</span>
            </div>
          )}

          {/* STEP 1: EMAIL */}
          {step === "EMAIL" && (
            <form onSubmit={handleSendOtp} className="space-y-4 animate-in fade-in">
              <FloatingInput
                id="recovery-email"
                type="email"
                label="Registered Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                icon={<Mail className="h-4 w-4" />}
              />

              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                isLoading={isLoading}
              >
                <span>Send OTP Code</span>
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>

              <div className="text-center pt-3 border-t border-white/10">
                <Link
                  href="/login"
                  className="text-xs font-bold text-[#A0A0A0] hover:text-[#C6FF00] inline-flex items-center gap-1.5 transition-colors"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Back to Login</span>
                </Link>
              </div>
            </form>
          )}

          {/* STEP 2: OTP VERIFICATION */}
          {step === "OTP" && (
            <div className="space-y-4 animate-in fade-in">
              <OtpInput
                length={6}
                isLoading={isLoading}
                onComplete={(otp) => {
                  setOtpCode(otp);
                  handleVerifyOtp(otp);
                }}
                onResend={() => {
                  setSuccessBanner("A fresh OTP code has been sent to your email.");
                }}
              />

              <Button
                type="button"
                variant="primary"
                size="lg"
                fullWidth
                isLoading={isLoading}
                onClick={() => handleVerifyOtp()}
              >
                <span>Verify OTP Code</span>
                <ShieldCheck className="h-4 w-4 ml-1" />
              </Button>

              <div className="flex justify-between items-center pt-3 border-t border-white/10 text-xs">
                <button
                  type="button"
                  onClick={() => setStep("EMAIL")}
                  className="text-[#A0A0A0] hover:text-white flex items-center gap-1 font-semibold"
                >
                  <ArrowLeft className="h-3.5 w-3.5" /> Change Email
                </button>

                <Link href="/login" className="text-[#A0A0A0] hover:text-[#C6FF00]">
                  Cancel
                </Link>
              </div>
            </div>
          )}

          {/* STEP 3: CREATE NEW PASSWORD */}
          {step === "NEW_PASSWORD" && (
            <form onSubmit={handleResetPassword} className="space-y-4 animate-in fade-in">
              <PasswordInput
                id="forgot-new-pass"
                label="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                showStrengthMeter
              />

              <PasswordInput
                id="forgot-confirm-pass"
                label="Confirm New Password"
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
                <span>Reset Password</span>
                <CheckCircle2 className="h-4 w-4 ml-1" />
              </Button>
            </form>
          )}

          {/* STEP 4: SUCCESS */}
          {step === "SUCCESS" && (
            <div className="text-center space-y-5 py-4 animate-in zoom-in-95 duration-300">
              <div className="mx-auto h-16 w-16 rounded-full bg-[#C6FF00]/20 border border-[#C6FF00] flex items-center justify-center text-[#C6FF00] shadow-[0_0_30px_rgba(198,255,0,0.4)]">
                <CheckCircle2 className="h-8 w-8 stroke-[3]" />
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-black text-white">Password Reset Complete!</h3>
                <p className="text-xs text-[#A0A0A0]">
                  You can now log in using your new credentials.
                </p>
              </div>

              <Link href="/login" className="block w-full">
                <Button variant="primary" size="lg" fullWidth>
                  <span>Continue to Login</span>
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>
          )}

        </GlassCard>

      </div>
    </div>
  );
}
