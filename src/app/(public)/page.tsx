"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Dumbbell,
  Zap,
  Star,
  Users,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Flame,
  Award,
  Calendar,
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Play,
  HeartPulse,
  Activity,
  UserCheck,
  CreditCard,
  Target,
  ChevronRight,
  MessageSquare,
  Compass,
} from "lucide-react";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("all");
  const [beforeAfterPos, setBeforeAfterPos] = useState(50);
  const [activeFeature, setActiveFeature] = useState(1); // Expert Trainers (Index 1) default active
  const [activeStep, setActiveStep] = useState(0); // Auto-cycling onboarding step

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 6);
      setActiveStep((prev) => (prev + 1) % 5);
    }, 2600);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-white selection:bg-[#C6FF00] selection:text-black overflow-x-hidden">
      
      {/* ================================================================================= */}
      {/* SECTION 1: HERO SECTION (FINE-TUNED COMMERCIAL LUXURY FITNESS) */}
      {/* ================================================================================= */}
      <section className="relative min-h-[90vh] lg:min-h-screen w-full pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden bg-[#050505]">
        
        {/* HERO GYM BACKDROP LAYER (Silhouette equipment darkened, center bars illuminated, ambient neon haze) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <Image
            src="/hero-bg-custom.png"
            alt="Luxury Dark Gym Hero Background"
            fill
            priority
            className="object-cover object-right lg:object-center filter brightness-[0.72] contrast-125 saturate-[0.80]"
          />

          {/* Pure #050505 Black Left Column + Soft Radial Transition into Gym Background */}
          <div className="absolute inset-y-0 left-0 w-full md:w-3/5 lg:w-[48%] bg-gradient-to-r from-[#050505] via-[#050505] to-transparent z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_#050505_38%,_transparent_72%)] z-10 pointer-events-none" />

          {/* Focused Cinematic Overhead Spotlight Beam Perfectly Aligned Over Bodybuilder's Head (Moved ~90px Right) */}
          <div className="absolute top-0 right-[6%] lg:right-[10%] w-[320px] h-[460px] bg-gradient-to-b from-[#C6FF00]/26 via-[#C6FF00]/6 to-transparent blur-2xl z-10" />

          {/* Floating Dust Particles inside the Spotlight Beam */}
          <div className="absolute top-12 right-[8%] lg:right-[12%] w-[160px] h-60 bg-[radial-gradient(#C6FF00_1.5px,transparent_1.5px)] [background-size:14px_14px] opacity-30 blur-[0.5px] pointer-events-none z-10" />

          {/* Floor Level Smoke & Haze Transition into pitch black #050505 */}
          <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent z-15" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[500px] lg:min-h-[640px]">
            
            {/* LEFT COLUMN (45% Width -> 5 Cols Desktop: Pure #050505 Black Background) */}
            <div className="lg:col-span-5 flex flex-col gap-6 text-left z-30">
              
              {/* Kicker Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#101010] border border-white/10 w-fit">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C6FF00]">
                  BUILD STRENGTH • BUILD CONFIDENCE
                </span>
              </div>

              {/* Large Display Heading */}
              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white">
                Sculpt{" "}
                <span className="text-[#C6FF00] drop-shadow-[0_0_10px_rgba(198,255,0,0.20)]">
                  YOUR BODY
                </span>
                ,<br />
                Elevate{" "}
                <span className="text-[#C6FF00] drop-shadow-[0_0_10px_rgba(198,255,0,0.20)]">
                  YOUR SPIRIT
                </span>
                .
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-[#A0A0A0] leading-relaxed max-w-xl font-normal">
                Transform your fitness journey with premium equipment, certified master trainers, custom athletic coaching, and an elite fitness community.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="#memberships"
                  className="glow-btn px-8 py-4 rounded-full text-sm font-black uppercase tracking-wider flex items-center gap-3 group"
                >
                  <span>Join Now</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="#memberships"
                  className="px-7 py-4 rounded-full bg-[#101010] border border-white/10 hover:border-[#C6FF00]/40 text-sm font-bold text-white hover:text-[#C6FF00] transition-all"
                >
                  Explore Memberships
                </Link>
              </div>

              {/* Member Social Proof */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="flex -space-x-3">
                  <div className="h-10 w-10 rounded-full border-2 border-[#050505] bg-neutral-800 overflow-hidden relative">
                    <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center font-bold text-xs text-[#C6FF00]">M1</div>
                  </div>
                  <div className="h-10 w-10 rounded-full border-2 border-[#050505] bg-neutral-800 overflow-hidden relative">
                    <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center font-bold text-xs text-[#C6FF00]">M2</div>
                  </div>
                  <div className="h-10 w-10 rounded-full border-2 border-[#050505] bg-neutral-800 overflow-hidden relative">
                    <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center font-bold text-xs text-[#C6FF00]">M3</div>
                  </div>
                  <div className="h-10 w-10 rounded-full border-2 border-[#050505] bg-[#C6FF00] text-black font-extrabold text-xs flex items-center justify-center">
                    200+
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1 text-[#C6FF00]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                    <span className="text-xs font-black text-white ml-1">4.9★</span>
                  </div>
                  <span className="text-xs text-[#A0A0A0] font-medium">
                    200+ Active Members • Top Rated Gym
                  </span>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: BODYBUILDER SIZE INCREASED 6%, MOVED 30px UPWARD, PERFECT SPOTLIGHT ALIGNMENT */}
            <div className="lg:col-span-7 relative flex items-end justify-center h-[520px] sm:h-[600px] lg:h-[660px] z-20 group">
              
              {/* Soft Ambient Neon Glow behind bodybuilder */}
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 sm:w-[380px] sm:h-[380px] bg-[#C6FF00]/12 rounded-full blur-[140px] pointer-events-none z-0" />

              {/* Realistic Contact Shadow beneath feet */}
              <div className="absolute bottom-6 sm:bottom-8 lg:bottom-10 left-1/2 translate-x-4 sm:translate-x-8 lg:translate-x-10 w-72 h-6 bg-black/95 blur-md rounded-full pointer-events-none z-10" />
              
              {/* Floor Level Haze near feet */}
              <div className="absolute bottom-8 sm:bottom-10 lg:bottom-12 left-1/2 translate-x-4 sm:translate-x-8 lg:translate-x-10 w-80 h-10 bg-gradient-to-t from-[#C6FF00]/6 via-black/30 to-transparent blur-md pointer-events-none z-15" />

              {/* Subtle Wet Floor Reflection Glow */}
              <div className="absolute bottom-5 sm:bottom-7 lg:bottom-9 left-1/2 translate-x-4 sm:translate-x-8 lg:translate-x-10 w-64 h-3 bg-[#C6FF00]/8 blur-xl rounded-full pointer-events-none z-10" />

              {/* BODYBUILDER TRANSPARENT PNG (Shifted slightly downward for sweet-spot spotlight alignment) */}
              <div className="relative w-full h-[96%] max-w-lg sm:max-w-xl z-20 flex items-end justify-center translate-x-4 sm:translate-x-8 lg:translate-x-10 -translate-y-6 sm:-translate-y-8 lg:-translate-y-10">
                <Image
                  src="/hero-athlete-biceps.png"
                  alt="Multi Power Gym Navunda Bodybuilder Athlete Standing in Gym"
                  fill
                  priority
                  className="object-contain object-bottom filter brightness-[0.82] saturate-[0.88] contrast-115 drop-shadow-[0_0_22px_rgba(198,255,0,0.26)] group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================================================================================= */}
      {/* SECTION 2: ANIMATED BOTTOM FEATURE BAR */}
      {/* ================================================================================= */}
      <section className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-20">
        <div className="relative glass-card p-6 border border-white/10 rounded-2xl shadow-2xl overflow-hidden group/container">
          
          {/* Animated Neon Light Beam along top border */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#C6FF00] to-transparent opacity-50 animate-pulse pointer-events-none" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            
            {[
              { icon: Dumbbell, title: "Modern Equipment", desc: "Top Import Heavy Gear" },
              { icon: Award, title: "Expert Trainers", desc: "Certified Masters" },
              { icon: Activity, title: "Fat Loss & Shred", desc: "High Calorie Burn" },
              { icon: HeartPulse, title: "Nutrition Guidance", desc: "Custom Meal Plans" },
              { icon: Clock, title: "Official Timings", desc: "6-10 AM & 4-9 PM" },
              { icon: ShieldCheck, title: "Secure Membership", desc: "Digital Entry Pass" },
            ].map((item, idx) => {
              const isActive = activeFeature === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveFeature(idx)}
                  className={`relative flex flex-col items-center text-center gap-2 p-4 rounded-xl cursor-pointer transition-all duration-500 group select-none ${
                    isActive
                      ? "bg-[#141414] border border-[#C6FF00]/60 shadow-[0_0_25px_rgba(198,255,0,0.25)] scale-[1.04] z-10"
                      : "bg-[#0a0a0a]/60 border border-white/5 hover:border-white/20 hover:bg-white/5 hover:scale-[1.02]"
                  }`}
                >
                  {/* Glowing Icon Container */}
                  <div
                    className={`h-11 w-11 rounded-xl flex items-center justify-center transition-all duration-500 ${
                      isActive
                        ? "bg-[#C6FF00]/15 border border-[#C6FF00] text-[#C6FF00] shadow-[0_0_15px_rgba(198,255,0,0.5)] scale-110"
                        : "bg-[#121212] border border-white/10 text-[#A0A0A0] group-hover:text-[#C6FF00] group-hover:border-[#C6FF00]/50"
                    }`}
                  >
                    <item.icon
                      className={`h-5 w-5 transition-transform duration-500 ${
                        isActive ? "scale-110 rotate-6" : "group-hover:scale-110"
                      }`}
                    />
                  </div>

                  {/* Feature Title */}
                  <h3
                    className={`text-xs font-bold transition-colors duration-300 ${
                      isActive ? "text-[#C6FF00] font-extrabold" : "text-white group-hover:text-[#C6FF00]"
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* Feature Description */}
                  <p className="text-[11px] text-[#A0A0A0] leading-tight">{item.desc}</p>

                  {/* Active Neon Glow Accent Line */}
                  {isActive && (
                    <div className="absolute bottom-0 inset-x-4 h-[2px] bg-[#C6FF00] shadow-[0_0_8px_#C6FF00] rounded-full animate-pulse" />
                  )}
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* ================================================================================= */}
      {/* SECTION 3: ABOUT SECTION */}
      {/* ================================================================================= */}
      <section id="about" className="py-24 relative border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* About Image / Visual Banner */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group min-h-[400px]">
              <Image
                src="/hero-athlete.jpg"
                alt="Gym Interior Equipment"
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass-card p-5 border border-white/15">
                <div className="text-xs font-bold text-[#C6FF00] uppercase tracking-widest mb-1">
                  ESTABLISHED 2019 • NAVUNDA
                </div>
                <div className="text-xl font-black text-white">
                  The Premier Destination for Athletic Excellence
                </div>
              </div>
            </div>

            {/* Narrative & Stats */}
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101010] border border-white/10 w-fit">
                <span className="text-xs font-bold text-[#C6FF00] uppercase tracking-wider">
                  ABOUT MULTI POWER GYM NAVUNDA
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                Where Luxury Meets Uncompromising Performance.
              </h2>

              <p className="text-base text-[#A0A0A0] leading-relaxed">
                Multi Power Gym Navunda was founded with a singular vision: to create an uncompromised sanctuary for individuals committed to forging their peak physical capabilities. We combine state-of-the-art biomechanical machinery with elite athletic programming.
              </p>

              {/* Animated Mission & Vision Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {/* Our Mission Card */}
                <div className="relative p-5 rounded-2xl bg-[#101010] border border-[#C6FF00]/30 shadow-[0_0_20px_rgba(198,255,0,0.12)] hover:border-[#C6FF00] hover:shadow-[0_0_30px_rgba(198,255,0,0.30)] transition-all duration-500 group overflow-hidden hover:-translate-y-1">
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#C6FF00] to-transparent opacity-80 animate-pulse" />
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-1.5 rounded-lg bg-[#C6FF00]/15 border border-[#C6FF00]/40 text-[#C6FF00] group-hover:scale-110 transition-transform">
                      <Target className="h-4 w-4" />
                    </div>
                    <div className="text-xs font-black text-[#C6FF00] uppercase tracking-wider">OUR MISSION</div>
                  </div>
                  <p className="text-xs text-[#A0A0A0] leading-relaxed">
                    Deliver world-class coaching, scientific nutrition, and heavy compound training environments.
                  </p>
                </div>

                {/* Our Vision Card */}
                <div className="relative p-5 rounded-2xl bg-[#101010] border border-[#C6FF00]/30 shadow-[0_0_20px_rgba(198,255,0,0.12)] hover:border-[#C6FF00] hover:shadow-[0_0_30px_rgba(198,255,0,0.30)] transition-all duration-500 group overflow-hidden hover:-translate-y-1">
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#C6FF00] to-transparent opacity-80 animate-pulse" />
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-1.5 rounded-lg bg-[#C6FF00]/15 border border-[#C6FF00]/40 text-[#C6FF00] group-hover:scale-110 transition-transform">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <div className="text-xs font-black text-[#C6FF00] uppercase tracking-wider">OUR VISION</div>
                  </div>
                  <p className="text-xs text-[#A0A0A0] leading-relaxed">
                    Build the most disciplined, supportive, and transformative fitness community in Karnataka.
                  </p>
                </div>
              </div>

              {/* Animated Live Counter Grid (Updated Stats: 200+ Members, 2+ Trainers, 10+ Machines) */}
              <div className="grid grid-cols-4 gap-4 pt-6 border-t border-white/10">
                <div className="flex flex-col">
                  <div className="text-2xl sm:text-3xl font-black text-[#C6FF00]">200+</div>
                  <div className="text-xs font-medium text-[#A0A0A0]">Members</div>
                </div>
                <div className="flex flex-col">
                  <div className="text-2xl sm:text-3xl font-black text-white">2+</div>
                  <div className="text-xs font-medium text-[#A0A0A0]">Trainers</div>
                </div>
                <div className="flex flex-col">
                  <div className="text-2xl sm:text-3xl font-black text-white">10+</div>
                  <div className="text-xs font-medium text-[#A0A0A0]">Machines</div>
                </div>
                <div className="flex flex-col">
                  <div className="text-2xl sm:text-3xl font-black text-[#C6FF00]">7+</div>
                  <div className="text-xs font-medium text-[#A0A0A0]">Years Exp</div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================================================================================= */}
      {/* SECTION 4: MEMBERSHIP PLANS */}
      {/* ================================================================================= */}
      <section id="memberships" className="py-24 relative bg-[#0a0a0a] border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101010] border border-white/10 mb-4">
            <span className="text-xs font-bold text-[#C6FF00] uppercase tracking-wider">
              PRICING TIERS
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Invest In Your Ultimate Transformation
          </h2>
          <p className="text-base text-[#A0A0A0] max-w-2xl mx-auto mb-16">
            Transparent pricing with zero hidden fees. Choose your duration and unlock total access to Multi Power Gym Navunda.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            
            {[
              {
                title: "Monthly",
                price: "₹3,500",
                period: "per month",
                popular: false,
                features: ["Full Gym Floor Access", "Locker Room & Showers", "Free Fitness Assessment", "Mobile App Access"],
              },
              {
                title: "Quarterly",
                price: "₹9,000",
                period: "per 3 months",
                popular: false,
                features: ["All Monthly Features", "Steam Bath Access", "1 Personal Trainer Session", "Nutrition Consultation"],
              },
              {
                title: "Half-Yearly",
                price: "₹16,000",
                period: "per 6 months",
                popular: true,
                features: ["All Quarterly Features", "Customized Diet Chart", "3 Personal Trainer Sessions", "Guest Pass (2/mo)", "Multi Power Gym T-Shirt"],
              },
              {
                title: "Yearly VIP",
                price: "₹28,000",
                period: "per year",
                popular: false,
                features: ["Unlimited VIP Access", "Dedicated Locker", "Weekly Body Analysis", "Unlimited Steam Bath", "Free Supplement Stack Pass"],
              },
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col justify-between p-8 rounded-3xl transition-all duration-500 group overflow-hidden ${
                  plan.popular
                    ? "bg-[#141414] border-2 border-[#C6FF00] scale-105 shadow-[0_0_30px_rgba(198,255,0,0.25)] hover:scale-[1.08] hover:shadow-[0_0_45px_rgba(198,255,0,0.40)] z-20"
                    : "glass-card border border-white/10 hover:border-[#C6FF00] hover:bg-[#121212] hover:scale-[1.03] hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(198,255,0,0.28)] z-10"
                }`}
              >
                {/* Animated Top Neon Light Beam on Hover */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#C6FF00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse pointer-events-none" />
                
                {/* Radial Glow Overlay on Hover */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#C6FF00]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#C6FF00] text-black font-extrabold text-[11px] uppercase tracking-wider shadow-[0_0_15px_rgba(198,255,0,0.5)] group-hover:scale-105 transition-transform">
                    MOST POPULAR
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#C6FF00] transition-colors">
                    {plan.title}
                  </h3>
                  <div className="flex items-baseline gap-1 my-4">
                    <span className="text-4xl font-black text-white group-hover:text-[#C6FF00] transition-colors">
                      {plan.price}
                    </span>
                    <span className="text-xs text-[#A0A0A0]">{plan.period}</span>
                  </div>

                  <ul className="flex flex-col gap-3 my-6 text-left border-t border-white/10 pt-6">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs text-[#A0A0A0] group-hover:text-white transition-colors">
                        <CheckCircle2 className="h-4 w-4 text-[#C6FF00] shrink-0 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_#C6FF00] transition-all" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/register"
                  className={`w-full py-3.5 rounded-full text-xs uppercase tracking-wider font-extrabold text-center transition-all duration-300 ${
                    plan.popular
                      ? "glow-btn group-hover:scale-105"
                      : "bg-[#181818] border border-white/10 text-white group-hover:bg-[#C6FF00] group-hover:text-black group-hover:border-[#C6FF00] group-hover:shadow-[0_0_20px_rgba(198,255,0,0.4)] group-hover:scale-105"
                  }`}
                >
                  Choose Plan
                </Link>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================================================================================= */}
      {/* SECTION 5: HOW IT WORKS (TIMELINE) */}
      {/* ================================================================================= */}
      <section className="py-24 relative border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-[#C6FF00] uppercase tracking-widest">
              SIMPLE ONBOARDING
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-2">
              Start Your Journey In 5 Simple Steps
            </h2>
          </div>

          <div className="relative">
            {/* Desktop Connecting Neon Flow Line */}
            <div className="hidden md:block absolute top-[52%] left-12 right-12 h-[2px] bg-gradient-to-r from-[#C6FF00]/10 via-[#C6FF00]/50 to-[#C6FF00]/10 z-0 pointer-events-none" />
            <div className="hidden md:block absolute top-[52%] left-12 right-12 h-[2px] bg-gradient-to-r from-transparent via-[#C6FF00] to-transparent w-1/3 animate-pulse pointer-events-none z-0" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
              {[
                { step: "01", icon: UserCheck, title: "Register Online", desc: "Fill basic details on website" },
                { step: "02", icon: ShieldCheck, title: "Admin Approval", desc: "Instant verification pass" },
                { step: "03", icon: Target, title: "Choose Membership", desc: "Select tier & duration" },
                { step: "04", icon: CreditCard, title: "Online Payment", desc: "100% Secure gateway" },
                { step: "05", icon: Flame, title: "Start Training", desc: "Begin your transformation" },
              ].map((st, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`relative flex flex-col items-center text-center gap-4 p-6 rounded-2xl cursor-pointer transition-all duration-500 group select-none ${
                      isActive
                        ? "bg-[#141414] border border-[#C6FF00] shadow-[0_0_30px_rgba(198,255,0,0.30)] scale-[1.06] -translate-y-2 z-20"
                        : "glass-card border border-white/10 hover:border-[#C6FF00]/60 hover:bg-[#121212] hover:scale-[1.04] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(198,255,0,0.20)] z-10"
                    }`}
                  >
                    {/* Animated Top Light Beam on Active Card */}
                    {isActive && (
                      <div className="absolute top-0 inset-x-0 h-[2px] bg-[#C6FF00] shadow-[0_0_10px_#C6FF00] rounded-full animate-pulse" />
                    )}

                    {/* Step Badge */}
                    <div
                      className={`text-xs font-black px-3.5 py-1 rounded-full transition-all duration-500 ${
                        isActive
                          ? "bg-[#C6FF00] text-black font-extrabold shadow-[0_0_12px_#C6FF00] scale-105"
                          : "bg-[#C6FF00]/10 text-[#C6FF00] border border-[#C6FF00]/20 group-hover:bg-[#C6FF00] group-hover:text-black"
                      }`}
                    >
                      STEP {st.step}
                    </div>

                    {/* Glowing Icon Box */}
                    <div
                      className={`h-13 w-13 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                        isActive
                          ? "bg-[#C6FF00]/20 border border-[#C6FF00] text-[#C6FF00] shadow-[0_0_18px_#C6FF00] scale-110 rotate-6"
                          : "bg-[#101010] border border-white/10 text-[#A0A0A0] group-hover:text-[#C6FF00] group-hover:border-[#C6FF00]/50 group-hover:scale-110"
                      }`}
                    >
                      <st.icon className="h-6 w-6" />
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3
                        className={`text-sm font-bold transition-colors duration-300 ${
                          isActive ? "text-[#C6FF00] font-extrabold" : "text-white group-hover:text-[#C6FF00]"
                        }`}
                      >
                        {st.title}
                      </h3>
                      <p className="text-xs text-[#A0A0A0] mt-1 leading-relaxed">{st.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================================= */}
      {/* SECTION 7: GYM EQUIPMENT SHOWCASE */}
      {/* ================================================================================= */}
      <section id="equipment" className="py-24 relative border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-[#C6FF00] uppercase tracking-widest">
              HEAVY DUTY MACHINERY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-2">
              Imported Biomechanical Equipment
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Olympic Bench Press",
                muscle: "CHEST / TRICEPS",
                desc: "Precision angled heavy steel bench for maximum pectoral engagement.",
                image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80",
              },
              {
                name: "Smith Machine",
                muscle: "FULL BODY COMPOUND",
                desc: "Guided counter-balanced barbell for safe isolated lifts.",
                image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
              },
              {
                name: "45° Leg Press",
                muscle: "QUADRICEPS / GLUTES",
                desc: "500kg capacity heavy plate-loaded leg press machine.",
                image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
              },
              {
                name: "Dual Cable Crossover",
                muscle: "CHEST / BACK / ARMS",
                desc: "Multi-pulley system with smooth 360-degree range.",
                image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
              },
              {
                name: "Commercial Treadmill",
                muscle: "CARDIO VASCULAR",
                desc: "High-grade shock absorption deck with decline incline.",
                image: "https://images.unsplash.com/photo-1576678927484-cc909957088c?auto=format&fit=crop&w=800&q=80",
              },
              {
                name: "Lat Pulldown Machine",
                muscle: "LATISSIMUS DORSI",
                desc: "Ergonomic wide-grip cable isolation for back width.",
                image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80",
              },
              {
                name: "Dumbbell Rack (5-60kg)",
                muscle: "UNIVERSAL STRENGTH",
                desc: "Solid urethane pro-style dumbbells in 2.5kg increments.",
                image: "https://images.unsplash.com/photo-1637666062717-1c6bcfa4a4df?auto=format&fit=crop&w=800&q=80",
              },
              {
                name: "Spin Exercise Bike",
                muscle: "LOWER BODY CARDIO",
                desc: "Magnetic resistance flywheel for high cadence cardio.",
                image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=800&q=80",
              },
            ].map((eq, idx) => (
              <div
                key={idx}
                className="relative rounded-3xl overflow-hidden bg-[#101010] border border-white/10 hover:border-[#C6FF00] shadow-xl hover:shadow-[0_0_35px_rgba(198,255,0,0.25)] hover:-translate-y-2 transition-all duration-500 group flex flex-col justify-between"
              >
                {/* Animated Top Neon Light Beam on Hover */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#C6FF00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse pointer-events-none z-20" />

                {/* Equipment Image Banner with Smooth Zoom */}
                <div className="relative h-48 w-full overflow-hidden bg-neutral-900">
                  <Image
                    src={eq.image}
                    alt={eq.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out filter brightness-[0.85] group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-black/30 to-transparent" />
                  
                  {/* Floating Icon Badge */}
                  <div className="absolute top-3 left-3 h-9 w-9 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-[#C6FF00] group-hover:bg-[#C6FF00] group-hover:text-black group-hover:scale-110 transition-all duration-300">
                    <Dumbbell className="h-4 w-4" />
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-[#C6FF00] transition-colors duration-300">
                      {eq.name}
                    </h3>
                    <p className="text-xs text-[#A0A0A0] mt-2 leading-relaxed font-normal">
                      {eq.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10">
                    <span className="text-[10px] font-black text-[#C6FF00] tracking-widest uppercase bg-[#C6FF00]/10 px-2.5 py-1 rounded-md border border-[#C6FF00]/20 group-hover:bg-[#C6FF00] group-hover:text-black transition-all">
                      TARGET: {eq.muscle}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>



      {/* ================================================================================= */}
      {/* SECTION 9: TRAINERS */}
      {/* ================================================================================= */}
      <section className="py-24 relative border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-[#C6FF00] uppercase tracking-widest">
              MASTER COACHES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-2">
              Certified Professional Trainers
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Vikram Shetty",
                exp: "10+ Years Exp",
                image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=80",
              },
              {
                name: "Rahul Verma",
                exp: "7+ Years Exp",
                image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&w=800&q=80",
              },
              {
                name: "Ananya Hegde",
                exp: "5+ Years Exp",
                image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
              },
              {
                name: "Karan Naik",
                exp: "6+ Years Exp",
                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
              },
            ].map((tr, idx) => (
              <div
                key={idx}
                className="relative rounded-3xl overflow-hidden bg-[#101010] border border-white/10 hover:border-[#C6FF00] shadow-xl hover:shadow-[0_0_35px_rgba(198,255,0,0.25)] hover:-translate-y-2 transition-all duration-500 group flex flex-col justify-between"
              >
                {/* Animated Top Neon Light Beam on Hover */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#C6FF00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse pointer-events-none z-20" />

                {/* Trainer Photo Banner with Smooth Zoom */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-900">
                  <Image
                    src={tr.image}
                    alt={tr.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out filter brightness-[0.88] group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-black/30 to-transparent" />
                  
                  {/* Floating Experience Badge */}
                  <span className="absolute top-3 right-3 text-[11px] font-black text-[#C6FF00] bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-[#C6FF00]/30 shadow-md group-hover:bg-[#C6FF00] group-hover:text-black transition-all duration-300">
                    {tr.exp}
                  </span>
                </div>

                {/* Content Info (Clean Name Only) */}
                <div className="p-5 flex items-center justify-between">
                  <h3 className="text-xl font-black text-white group-hover:text-[#C6FF00] transition-colors duration-300">
                    {tr.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================================================================================= */}
      {/* SECTION 10: TRANSFORMATION GALLERY */}
      {/* ================================================================================= */}
      <section id="gallery" className="py-24 relative bg-[#0a0a0a] border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[#C6FF00] uppercase tracking-widest">
              PROVEN RESULTS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-2">
              Transformation Gallery
            </h2>
          </div>

          {/* Before / After Interactive Slider Showcase */}
          <div className="max-w-4xl mx-auto glass-card p-6 sm:p-8 border border-white/10 rounded-3xl relative overflow-hidden mb-12 shadow-2xl group/slider">
            
            {/* Top Header Badge */}
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[#C6FF00] animate-ping" />
                <span className="text-xs font-black text-[#C6FF00] uppercase tracking-widest">
                  90-DAY ATHLETIC TRANSFORMATION
                </span>
              </div>
              <span className="text-xs font-semibold text-[#A0A0A0] hidden sm:inline-block">
                ↔ Slide left/right to reveal transformation
              </span>
            </div>

            {/* Interactive Image Slider Container */}
            <div className="relative h-[380px] sm:h-[480px] rounded-2xl overflow-hidden select-none border border-white/10 shadow-2xl">
              
              {/* AFTER IMAGE LAYER (Day 90 Sculpted) */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80"
                  alt="After 90 Days Transformation - Sculpted Athlete"
                  fill
                  priority
                  className="object-cover object-center filter brightness-105 contrast-110"
                />
                <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-xl border border-[#C6FF00]/40 shadow-lg z-10">
                  <span className="text-xs font-black text-[#C6FF00] uppercase tracking-wider">
                    AFTER (DAY 90 — SCULPTED)
                  </span>
                </div>
              </div>

              {/* BEFORE IMAGE LAYER (Day 0 Baseline) clipped dynamically */}
              <div
                className="absolute top-0 bottom-0 left-0 overflow-hidden z-10 border-r-2 border-[#C6FF00] shadow-[0_0_20px_#C6FF00]"
                style={{ width: `${beforeAfterPos}%` }}
              >
                <div className="absolute inset-0 w-[800px] sm:w-[1000px] h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80"
                    alt="Before Day 0 Baseline"
                    fill
                    priority
                    className="object-cover object-center filter brightness-90 contrast-100 grayscale-[30%]"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 shadow-lg">
                    <span className="text-xs font-black text-white uppercase tracking-wider">
                      BEFORE (DAY 0 — BASELINE)
                    </span>
                  </div>
                </div>
              </div>

              {/* Animated Floating Handle Bar on Split Line */}
              <div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-[#C6FF00] text-black border-2 border-black flex items-center justify-center font-black text-lg shadow-[0_0_25px_#C6FF00] z-20 pointer-events-none transition-transform group-hover/slider:scale-110"
                style={{ left: `${beforeAfterPos}%` }}
              >
                ↔
              </div>

              {/* Range Input Overlay for Dragging */}
              <input
                type="range"
                min="0"
                max="100"
                value={beforeAfterPos}
                onChange={(e) => setBeforeAfterPos(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4 text-xs text-[#A0A0A0]">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white">Client:</span> Karthik S. (Lost 16kg Fat, Gained 4.5kg Muscle)
              </div>
              <div className="flex items-center gap-2 text-[#C6FF00] font-bold">
                ✓ Verified 90-Day Coach Program Result
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================================================================================= */}
      {/* SECTION 11: TESTIMONIALS (AUTO SCROLLING MARQUEE) */}
      {/* ================================================================================= */}
      <section className="py-24 relative overflow-hidden border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-16">
          <span className="text-xs font-bold text-[#C6FF00] uppercase tracking-widest">
            REAL MEMBER STORIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-2">
            Trusted By 200+ Fitness Enthusiasts
          </h2>
        </div>

        {/* Marquee Row with Auto-Scroll & Hover-Pause Animation */}
        <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing py-4">
          {[
            { name: "Prashanth K.", rating: "5.0", text: "Multi Power Gym Navunda is easily the cleanest and most well-equipped gym in the district. The trainers are IFBB level!" },
            { name: "Sneha Rao", rating: "5.0", text: "Lost 14kg in 4 months with Coach Vikram's custom diet chart and personal training split. Incredible community." },
            { name: "Karthik Bhat", rating: "5.0", text: "The heavy strength section and Olympic racks are unmatched. Best investment for serious powerlifters." },
            { name: "Divya Shetty", rating: "5.0", text: "Clean locker rooms, steam bath, and flexible timing from 5 AM. Fits perfectly into my corporate schedule." },
            { name: "Prashanth K.", rating: "5.0", text: "Multi Power Gym Navunda is easily the cleanest and most well-equipped gym in the district. The trainers are IFBB level!" },
            { name: "Sneha Rao", rating: "5.0", text: "Lost 14kg in 4 months with Coach Vikram's custom diet chart and personal training split. Incredible community." },
          ].map((t, idx) => (
            <div
              key={idx}
              className="relative w-80 shrink-0 bg-[#101010] p-6 rounded-2xl border border-white/10 hover:border-[#C6FF00] hover:shadow-[0_0_30px_rgba(198,255,0,0.25)] hover:-translate-y-2 hover:scale-[1.03] transition-all duration-500 flex flex-col justify-between gap-4 group overflow-hidden"
            >
              {/* Animated Top Neon Light Beam on Hover */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#C6FF00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse pointer-events-none z-20" />

              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-[#C6FF00] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_#C6FF00] transition-all" />
                  ))}
                </div>
                <p className="text-xs text-[#A0A0A0] leading-relaxed italic group-hover:text-white transition-colors duration-300">
                  "{t.text}"
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-white/10 pt-3">
                <span className="text-xs font-bold text-white group-hover:text-[#C6FF00] transition-colors duration-300">
                  {t.name}
                </span>
                <span className="text-[10px] font-extrabold text-[#C6FF00] bg-[#C6FF00]/10 px-2 py-0.5 rounded border border-[#C6FF00]/20 group-hover:bg-[#C6FF00] group-hover:text-black transition-all">
                  VERIFIED MEMBER
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================================================================================= */}
      {/* SECTION 12: GYM LOCATION & CONTACT */}
      {/* ================================================================================= */}
      <section id="contact" className="py-24 relative bg-[#0a0a0a] border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Interactive Embedded Google Map Container */}
            <div className="relative h-[420px] sm:h-[480px] rounded-3xl overflow-hidden glass-card border border-white/10 shadow-2xl group/map">
              {/* Google Maps Embedded iframe */}
              <iframe
                title="Multi Power Gym Navunda Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.495!2d74.6391191!3d13.7443231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc8b872b5b50bd%3A0x990b0f83ef2abef3!2sMulti%20Power%20gym%20Navunda!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-3xl opacity-90 group-hover/map:opacity-100 transition-opacity duration-500"
              />

              {/* Floating Map Overlay Badge */}
              <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#C6FF00]/40 shadow-xl flex items-center gap-3 z-10">
                <div className="h-3 w-3 rounded-full bg-[#C6FF00] animate-ping" />
                <div>
                  <div className="text-xs font-black text-[#C6FF00] uppercase tracking-wider">
                    MULTI POWER GYM NAVUNDA
                  </div>
                  <div className="text-[10px] text-[#A0A0A0]">
                    Highway Junction, Navunda, Karnataka 576224
                  </div>
                </div>
              </div>

              {/* Direct Open in Google Maps Button */}
              <a
                href="https://www.google.com/maps/place/Multi+Power+gym+Navunda/@13.7443231,74.6391191,18z"
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-4 right-4 px-5 py-3 rounded-full bg-[#C6FF00] text-black font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-[0_0_20px_#C6FF00] hover:scale-105 transition-transform z-10"
              >
                <span>Get Directions</span>
                <MapPin className="h-4 w-4" />
              </a>
            </div>

            {/* Quick Contact & Info */}
            <div className="flex flex-col gap-6">
              <span className="text-xs font-bold text-[#C6FF00] uppercase tracking-widest">
                VISIT MULTI POWER GYM NAVUNDA
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white">
                Get In Touch With Us
              </h2>

              <div className="flex flex-col gap-4 pt-2">
                <a
                  href="tel:+918296931409"
                  className="flex items-center gap-4 p-4 rounded-2xl glass-card border border-white/10 hover:border-[#C6FF00] hover:shadow-[0_0_20px_rgba(198,255,0,0.20)] transition-all group"
                >
                  <Phone className="h-5 w-5 text-[#C6FF00] group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-xs font-bold text-white group-hover:text-[#C6FF00] transition-colors">
                      Phone Support
                    </div>
                    <div className="text-xs text-[#A0A0A0] font-mono group-hover:text-white transition-colors">
                      +91 82969 31409
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl glass-card">
                  <Mail className="h-5 w-5 text-[#C6FF00]" />
                  <div>
                    <div className="text-xs font-bold text-white">Email Address</div>
                    <div className="text-xs text-[#A0A0A0]">contact@multipowergym.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl glass-card">
                  <Clock className="h-5 w-5 text-[#C6FF00]" />
                  <div>
                    <div className="text-xs font-bold text-white">Official Gym Timings</div>
                    <div className="text-xs text-[#A0A0A0] mt-0.5">
                      <span className="text-[#C6FF00] font-semibold">Morning:</span> 6:00 AM to 10:00 AM
                      <span className="mx-2">•</span>
                      <span className="text-[#C6FF00] font-semibold">Afternoon:</span> 4:00 PM to 9:00 PM
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/918296931409"
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 rounded-full bg-[#25D366] text-black font-black text-xs uppercase tracking-widest text-center shadow-lg hover:scale-[1.02] transition-transform"
              >
                💬 Instant WhatsApp Chat
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================================================= */}
      {/* SECTION 13: FINAL CTA SECTION */}
      {/* ================================================================================= */}
      <section className="py-28 relative overflow-hidden bg-gradient-to-b from-[#050505] to-[#101010] border-t border-white/10 text-center">
        <div className="absolute inset-0 bg-[#C6FF00]/5 blur-[160px] pointer-events-none" />

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-black text-[#C6FF00] uppercase tracking-widest bg-[#C6FF00]/10 px-4 py-1.5 rounded-full border border-[#C6FF00]/20">
            TAKE THE FIRST STEP TODAY
          </span>

          <h2 className="text-4xl sm:text-6xl font-black text-white mt-6 mb-6 leading-tight">
            Ready To Transform Your Life?
          </h2>

          <p className="text-base text-[#A0A0A0] max-w-2xl mx-auto mb-10">
            Step into Karnataka's premier luxury fitness arena. Join 200+ active athletes and sculpt your dream physique with master guidance.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#memberships"
              className="glow-btn px-10 py-5 rounded-full text-sm font-black uppercase tracking-wider"
            >
              Join Multi Power Gym Now
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
