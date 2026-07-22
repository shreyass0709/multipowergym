"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Dumbbell,
  Shield,
  UserCheck,
  Sparkles,
  ArrowRight,
  Flame,
  CheckCircle2,
  AlertCircle,
  Zap,
} from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import FloatingInput from "@/components/ui/FloatingInput";
import PasswordInput from "@/components/ui/PasswordInput";
import Button from "@/components/ui/Button";
import { useAuth } from "@/lib/auth-context";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string; general?: string }>({});
  const [successMsg, setSuccessMsg] = useState("");

  // Quick Demo Account Autofill handlers
  const handleQuickDemo = (role: "MEMBER" | "ADMIN") => {
    if (role === "ADMIN") {
      setEmail("admin@multipowergym.com");
      setPassword("Admin#2026!Power");
    } else {
      setEmail("member@multipowergym.com");
      setPassword("Member#2026!Fitness");
    }
    setErrors({});
  };

  const validate = () => {
    const errs: { email?: string; password?: string } = {};

    if (!email) {
      errs.email = "Please enter your registered email address.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errs.email = "Please enter a valid email address.";
    }

    if (!password) {
      errs.password = "Please enter your password.";
    } else if (password.length < 6) {
      errs.password = "Password must be at least 6 characters.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMsg("");
    if (!validate()) return;

    setIsLoading(true);
    try {
      const user = await login(email);
      setSuccessMsg("Authentication successful! Redirecting to dashboard...");

      setTimeout(() => {
        if (user.role === "ADMIN") {
          router.push("/admin/dashboard");
        } else {
          router.push("/dashboard");
        }
      }, 1000);
    } catch (err: any) {
      setErrors({
        general: "Invalid email or password. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] pt-24 pb-16 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden selection:bg-[#C6FF00] selection:text-black">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute top-1/4 left-10 h-96 w-96 rounded-full bg-[#C6FF00]/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-96 w-96 rounded-full bg-[#C6FF00]/5 blur-[140px]" />

      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* LEFT SIDE: Heading, Subtitle & Abstract Premium Gym Card */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6 text-left">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#101010] border border-[#C6FF00]/30 w-fit">
            <Sparkles className="h-4 w-4 text-[#C6FF00]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#C6FF00]">
              Member Portal Access
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
              Welcome <span className="text-[#C6FF00] text-shadow">Back</span>
            </h1>
            <p className="text-base sm:text-lg text-[#A0A0A0] font-medium leading-relaxed max-w-md">
              Continue your fitness journey. Access your personalized training schedules, membership perks, and tracking analytics.
            </p>
          </div>

          {/* Abstract Gym Illustration Card */}
          <div className="relative rounded-2xl bg-[#0D0D0D] border border-white/10 p-6 overflow-hidden hidden sm:block">
            <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-[#C6FF00]/20 blur-2xl pointer-events-none" />

            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 rounded-xl bg-[#C6FF00] text-black flex items-center justify-center font-black shadow-[0_0_20px_rgba(198,255,0,0.4)]">
                <Dumbbell className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-white">Multi Power Gym Navunda</h4>
                <p className="text-xs text-[#A0A0A0]">State-of-the-Art Commercial Training</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <p className="text-[10px] text-[#A0A0A0] uppercase tracking-wider font-bold">Active Members</p>
                <p className="text-lg font-black text-[#C6FF00] mt-0.5">1,420+</p>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <p className="text-[10px] text-[#A0A0A0] uppercase tracking-wider font-bold">Elite Equipment</p>
                <p className="text-lg font-black text-white mt-0.5">Custom Pro Line</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-[#A0A0A0] pt-2">
            <div className="flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-[#C6FF00]" />
              <span>256-Bit SSL Encrypted</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="h-4 w-4 text-[#C6FF00]" />
              <span>Instant Dashboard Sync</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Glassmorphism Login Card */}
        <div className="lg:col-span-6">
          <GlassCard className="w-full">
            
            <div className="text-left mb-6">
              <h2 className="text-2xl font-black text-white">Account Login</h2>
              <p className="text-xs text-[#A0A0A0] mt-1">
                Enter your registered email address and password to sign in.
              </p>
            </div>

            {/* Quick Demo Credentials Assistant */}
            <div className="mb-6 p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <Flame className="h-3.5 w-3.5 text-[#C6FF00]" />
                  <span>Demo Role Quick Login:</span>
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => handleQuickDemo("MEMBER")}
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#C6FF00]/10 border border-white/10 hover:border-[#C6FF00]/40 text-xs font-semibold text-[#A0A0A0] hover:text-[#C6FF00] transition-all text-left flex items-center justify-between"
                >
                  <span>Member Demo</span>
                  <UserCheck className="h-3 w-3" />
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickDemo("ADMIN")}
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#C6FF00]/10 border border-white/10 hover:border-[#C6FF00]/40 text-xs font-semibold text-[#A0A0A0] hover:text-[#C6FF00] transition-all text-left flex items-center justify-between"
                >
                  <span>Admin Demo</span>
                  <Shield className="h-3 w-3 text-[#C6FF00]" />
                </button>
              </div>
            </div>

            {/* General Error Banner */}
            {errors.general && (
              <div className="mb-5 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2 animate-in fade-in">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>{errors.general}</span>
              </div>
            )}

            {/* Success Banner */}
            {successMsg && (
              <div className="mb-5 p-3.5 rounded-xl bg-[#C6FF00]/10 border border-[#C6FF00]/30 text-[#C6FF00] text-xs flex items-center gap-2 animate-in fade-in">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                <span>{successMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              
              {/* Email Input */}
              <FloatingInput
                id="login-email"
                type="email"
                label="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errors.email}
                isValid={!!email && !errors.email && /\S+@\S+\.\S+/.test(email)}
              />

              {/* Password Input */}
              <PasswordInput
                id="login-password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={errors.password}
                isValid={!!password && !errors.password && password.length >= 6}
              />

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between mb-6 text-xs">
                <label className="flex items-center gap-2 cursor-pointer select-none group">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 rounded bg-[#080808] border border-white/20 text-[#C6FF00] focus:ring-[#C6FF00]/30 accent-[#C6FF00] cursor-pointer"
                  />
                  <span className="text-[#A0A0A0] group-hover:text-white transition-colors">
                    Remember Me
                  </span>
                </label>

                <Link
                  href="/forgot-password"
                  className="font-bold text-[#C6FF00] hover:underline transition-all"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                isLoading={isLoading}
                className="mb-4"
              >
                <span>Sign In to Account</span>
              </Button>

              {/* Join Gym Button Link */}
              <div className="pt-4 border-t border-white/10 text-center space-y-2">
                <p className="text-xs text-[#A0A0A0]">
                  Don&apos;t have a gym membership yet?
                </p>
                <Link href="/join" className="block w-full">
                  <Button variant="secondary" size="md" fullWidth>
                    <span>Join Our Gym</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </div>

            </form>
          </GlassCard>
        </div>

      </div>
    </div>
  );
}
