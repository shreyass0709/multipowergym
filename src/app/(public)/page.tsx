"use client";

import { useState } from "react";
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

  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-white selection:bg-[#C6FF00] selection:text-black overflow-x-hidden">
      
      {/* ================================================================================= */}
      {/* SECTION 1: HERO SECTION (SPLIT LAYOUT) */}
      {/* ================================================================================= */}
      <section className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden">
        
        {/* Background Volumetric Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C6FF00]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#C6FF00]/5 rounded-full blur-[180px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* LEFT SIDE (45% -> 5 cols desktop) */}
            <div className="lg:col-span-5 flex flex-col gap-6 text-left">
              
              {/* Kicker Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#101010] border border-white/10 w-fit">
                <Sparkles className="h-4 w-4 text-[#C6FF00]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#C6FF00]">
                  BUILD STRENGTH • BUILD CONFIDENCE
                </span>
              </div>

              {/* Large Display Heading */}
              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white">
                Sculpt{" "}
                <span className="text-[#C6FF00] drop-shadow-[0_0_25px_rgba(198,255,0,0.4)]">
                  YOUR BODY
                </span>
                ,<br />
                Elevate{" "}
                <span className="text-[#C6FF00] drop-shadow-[0_0_25px_rgba(198,255,0,0.4)]">
                  YOUR SPIRIT
                </span>
                .
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-[#A0A0A0] leading-relaxed max-w-xl font-normal">
                Transform your fitness journey with premium equipment, certified master trainers, personalized workout plans, and an elite fitness community.
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
                    500+
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
                    500+ Active Members • Top Rated Gym
                  </span>
                </div>
              </div>

            </div>

            {/* RIGHT SIDE (55% -> 7 cols desktop) HERO IMAGE WITH FLOATING CARDS */}
            <div className="lg:col-span-7 relative flex items-center justify-center min-h-[520px] sm:min-h-[640px]">
              
              {/* Athlete Image Container with Edge Vignette Masking */}
              <div className="relative w-full max-w-xl h-[520px] sm:h-[620px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/hero-athlete.jpg"
                  alt="FitFusion Athlete - Sculpted Body"
                  fill
                  priority
                  className="object-cover object-center filter brightness-95 contrast-105"
                />
                
                {/* Radial and Linear Gradient Overlays for Natural Blend into #050505 */}
                <div className="absolute inset-0 bg-radial from-transparent via-[#050505]/40 to-[#050505]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/40" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]/60" />
              </div>

              {/* Floating Card 1: 50+ Gym Machines (Top Left) */}
              <div className="absolute -top-4 left-2 sm:left-4 z-20 glass-card px-4 py-3 flex items-center gap-3 animate-float-slow shadow-xl">
                <div className="h-10 w-10 rounded-xl bg-[#C6FF00]/10 border border-[#C6FF00]/30 flex items-center justify-center text-xl">
                  🏋️
                </div>
                <div>
                  <div className="text-lg font-black text-white leading-none">50+</div>
                  <div className="text-[11px] font-bold text-[#A0A0A0]">Gym Machines</div>
                </div>
              </div>

              {/* Floating Card 2: 20+ Trainers (Middle Left) */}
              <div className="absolute top-1/3 -left-4 sm:left-0 z-20 glass-card px-4 py-3 flex items-center gap-3 animate-float-reverse shadow-xl">
                <div className="h-10 w-10 rounded-xl bg-[#C6FF00]/10 border border-[#C6FF00]/30 flex items-center justify-center text-xl">
                  💪
                </div>
                <div>
                  <div className="text-lg font-black text-white leading-none">20+</div>
                  <div className="text-[11px] font-bold text-[#A0A0A0]">Pro Trainers</div>
                </div>
              </div>

              {/* Floating Card 3: 500+ Active Members (Middle Right) */}
              <div className="absolute top-1/4 -right-2 sm:right-2 z-20 glass-card px-4 py-3 flex items-center gap-3 animate-float-slow shadow-xl">
                <div className="h-10 w-10 rounded-xl bg-[#C6FF00]/10 border border-[#C6FF00]/30 flex items-center justify-center text-xl">
                  🔥
                </div>
                <div>
                  <div className="text-lg font-black text-[#C6FF00] leading-none">500+</div>
                  <div className="text-[11px] font-bold text-white">Active Members</div>
                </div>
              </div>

              {/* Floating Card 4: Open Hours (Bottom Right) */}
              <div className="absolute bottom-6 right-4 sm:right-8 z-20 glass-card px-5 py-3 flex items-center gap-3 animate-float-reverse shadow-xl">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C6FF00] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C6FF00]"></span>
                </div>
                <div>
                  <div className="text-xs font-extrabold text-white uppercase tracking-wider">Open Daily</div>
                  <div className="text-xs font-black text-[#C6FF00]">5:00 AM - 11:00 PM</div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================================================================================= */}
      {/* SECTION 2: BOTTOM FEATURE BAR */}
      {/* ================================================================================= */}
      <section className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-20">
        <div className="glass-card p-6 border border-white/10 rounded-2xl shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            
            {[
              { icon: Dumbbell, title: "Modern Equipment", desc: "Top Import Heavy Gear" },
              { icon: Award, title: "Expert Trainers", desc: "Certified Masters" },
              { icon: Activity, title: "Workout Plans", desc: "Tailored Hypertrophy" },
              { icon: HeartPulse, title: "Nutrition Guidance", desc: "Custom Meal Plans" },
              { icon: Clock, title: "Flexible Timings", desc: "5 AM to 11 PM Daily" },
              { icon: ShieldCheck, title: "Secure Membership", desc: "Digital Entry Pass" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center gap-2 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group"
              >
                <div className="h-10 w-10 rounded-xl bg-[#101010] border border-white/10 group-hover:border-[#C6FF00] flex items-center justify-center text-[#C6FF00] transition-colors">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xs font-bold text-white group-hover:text-[#C6FF00] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] text-[#A0A0A0]">{item.desc}</p>
              </div>
            ))}

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
                  ABOUT FITFUSION
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                Where Luxury Meets Uncompromising Performance.
              </h2>

              <p className="text-base text-[#A0A0A0] leading-relaxed">
                FitFusion was founded with a singular vision: to create an uncompromised sanctuary for individuals committed to forging their peak physical capabilities. We combine state-of-the-art biomechanical machinery with elite athletic programming.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-4 rounded-2xl bg-[#101010] border border-white/10">
                  <div className="text-xs font-bold text-[#C6FF00] uppercase mb-1">OUR MISSION</div>
                  <p className="text-xs text-[#A0A0A0]">
                    Deliver world-class coaching, scientific nutrition, and heavy compound training environments.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#101010] border border-white/10">
                  <div className="text-xs font-bold text-[#C6FF00] uppercase mb-1">OUR VISION</div>
                  <p className="text-xs text-[#A0A0A0]">
                    Build the most disciplined, supportive, and transformative fitness community in Karnataka.
                  </p>
                </div>
              </div>

              {/* Animated Live Counter Grid */}
              <div className="grid grid-cols-4 gap-4 pt-6 border-t border-white/10">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#C6FF00]">500+</div>
                  <div className="text-xs font-medium text-[#A0A0A0]">Members</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">20+</div>
                  <div className="text-xs font-medium text-[#A0A0A0]">Trainers</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">50+</div>
                  <div className="text-xs font-medium text-[#A0A0A0]">Machines</div>
                </div>
                <div>
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
            <Zap className="h-3.5 w-3.5 text-[#C6FF00]" />
            <span className="text-xs font-bold text-[#C6FF00] uppercase tracking-wider">
              PRICING TIERS
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Invest In Your Ultimate Transformation
          </h2>
          <p className="text-base text-[#A0A0A0] max-w-2xl mx-auto mb-16">
            Transparent pricing with zero hidden fees. Choose your duration and unlock total access to FitFusion facilities.
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
                features: ["All Quarterly Features", "Customized Diet Chart", "3 Personal Trainer Sessions", "Guest Pass (2/mo)", "FitFusion T-Shirt"],
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
                className={`relative flex flex-col justify-between p-8 rounded-3xl transition-all duration-300 ${
                  plan.popular
                    ? "bg-[#141414] border-2 border-[#C6FF00] scale-105 shadow-[0_0_30px_rgba(198,255,0,0.2)] z-20"
                    : "glass-card hover:border-white/30 z-10"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#C6FF00] text-black font-extrabold text-[11px] uppercase tracking-wider shadow-md">
                    MOST POPULAR
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{plan.title}</h3>
                  <div className="flex items-baseline gap-1 my-4">
                    <span className="text-4xl font-black text-white">{plan.price}</span>
                    <span className="text-xs text-[#A0A0A0]">{plan.period}</span>
                  </div>

                  <ul className="flex flex-col gap-3 my-6 text-left border-t border-white/10 pt-6">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs text-[#A0A0A0]">
                        <CheckCircle2 className="h-4 w-4 text-[#C6FF00] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/register"
                  className={`w-full py-3.5 rounded-full text-xs uppercase tracking-wider font-extrabold text-center transition-all ${
                    plan.popular
                      ? "glow-btn"
                      : "bg-white/10 hover:bg-[#C6FF00] text-white hover:text-black"
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

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            
            {[
              { step: "01", icon: UserCheck, title: "Register Online", desc: "Fill basic details on website" },
              { step: "02", icon: ShieldCheck, title: "Admin Approval", desc: "Instant verification pass" },
              { step: "03", icon: Target, title: "Choose Membership", desc: "Select tier & duration" },
              { step: "04", icon: CreditCard, title: "Online Payment", desc: "100% Secure gateway" },
              { step: "05", icon: Flame, title: "Start Training", desc: "Begin your transformation" },
            ].map((st, idx) => (
              <div key={idx} className="glass-card p-6 flex flex-col items-center text-center gap-4 relative group hover:border-[#C6FF00]/50 transition-all">
                <div className="text-xs font-black text-[#C6FF00] bg-[#C6FF00]/10 px-3 py-1 rounded-full border border-[#C6FF00]/20">
                  STEP {st.step}
                </div>
                <div className="h-12 w-12 rounded-2xl bg-[#101010] border border-white/10 flex items-center justify-center text-[#C6FF00] group-hover:scale-110 transition-transform">
                  <st.icon className="h-6 w-6" />
                </div>
                <h3 className="text-sm font-bold text-white">{st.title}</h3>
                <p className="text-xs text-[#A0A0A0]">{st.desc}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================================================================================= */}
      {/* SECTION 6: GYM FACILITIES (BENTO GRID) */}
      {/* ================================================================================= */}
      <section id="facilities" className="py-24 relative bg-[#0a0a0a] border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold text-[#C6FF00] uppercase tracking-widest">
                WORLD-CLASS AMENITIES
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white mt-2">
                Designed For Peak Athletic Output
              </h2>
            </div>
            <p className="text-xs text-[#A0A0A0] max-w-md mt-4 md:mt-0">
              Explore 10,000+ sq. ft. of heavy iron, functional crossfit turf, steam recovery suites, and private lockers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Bento Tile 1: Strength Area (Large Tile) */}
            <div className="md:col-span-2 relative h-80 rounded-3xl overflow-hidden glass-card group border border-white/10">
              <Image
                src="/hero-athlete.jpg"
                alt="Strength Area"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-extrabold uppercase text-[#C6FF00] tracking-widest bg-black/60 px-3 py-1 rounded-full border border-white/10">
                  CORE ZONE
                </span>
                <h3 className="text-2xl font-black text-white mt-2">Heavy Strength Area</h3>
                <p className="text-xs text-[#A0A0A0]">Olympic platforms, power racks, and dumbbells up to 60kg.</p>
              </div>
            </div>

            {/* Bento Tile 2: Cardio Zone */}
            <div className="relative h-80 rounded-3xl overflow-hidden glass-card group border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-extrabold uppercase text-[#C6FF00] tracking-widest bg-black/60 px-3 py-1 rounded-full border border-white/10">
                  CARDIO
                </span>
                <h3 className="text-xl font-bold text-white mt-2">Cardio Zone</h3>
                <p className="text-xs text-[#A0A0A0]">Treadmills with interactive screens & heart monitors.</p>
              </div>
            </div>

            {/* Bento Tile 3: CrossFit */}
            <div className="relative h-80 rounded-3xl overflow-hidden glass-card group border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-black" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-extrabold uppercase text-[#C6FF00] tracking-widest bg-black/60 px-3 py-1 rounded-full border border-white/10">
                  FUNCTIONAL
                </span>
                <h3 className="text-xl font-bold text-white mt-2">CrossFit Turf</h3>
                <p className="text-xs text-[#A0A0A0]">Prowler sleds, kettlebells, and battle ropes.</p>
              </div>
            </div>

            {/* Bento Tiles Row 2 */}
            {[
              { title: "Yoga Studio", desc: "Private soundproof space", tag: "RECOVERY" },
              { title: "Steam Bath", desc: "Post-workout detox sauna", tag: "SPA" },
              { title: "Protein Bar", desc: "Fresh shakes & meals", tag: "NUTRITION" },
              { title: "Private Parking", desc: "CCTV Monitored Lot", tag: "SECURITY" },
            ].map((fac, idx) => (
              <div key={idx} className="glass-card p-6 flex flex-col justify-between border border-white/10 hover:border-[#C6FF00]/40 transition-colors group">
                <span className="text-[10px] font-extrabold uppercase text-[#C6FF00] tracking-widest bg-black/40 px-3 py-1 rounded-full border border-white/10 w-fit">
                  {fac.tag}
                </span>
                <div className="mt-8">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#C6FF00] transition-colors">{fac.title}</h3>
                  <p className="text-xs text-[#A0A0A0] mt-1">{fac.desc}</p>
                </div>
              </div>
            ))}

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
              { name: "Olympic Bench Press", muscle: "CHEST / TRICEPS", desc: "Precision angled heavy steel bench for maximum pectoral engagement." },
              { name: "Smith Machine", muscle: "FULL BODY COMPOUND", desc: "Guided counter-balanced barbell for safe isolated lifts." },
              { name: "45° Leg Press", muscle: "QUADRICEPS / GLUTES", desc: "500kg capacity heavy plate-loaded leg press machine." },
              { name: "Dual Cable Crossover", muscle: "CHEST / BACK / ARMS", desc: "Multi-pulley system with smooth 360-degree range." },
              { name: "Commercial Treadmill", muscle: "CARDIO VASCULAR", desc: "High-grade shock absorption deck with decline incline." },
              { name: "Lat Pulldown Machine", muscle: "LATISSIMUS DORSI", desc: "Ergonomic wide-grip cable isolation for back width." },
              { name: "Dumbbell Rack (5-60kg)", muscle: "UNIVERSAL STRENGTH", desc: "Solid urethane pro-style dumbbells in 2.5kg increments." },
              { name: "Spin Exercise Bike", muscle: "LOWER BODY CARDIO", desc: "Magnetic resistance flywheel for high cadence cardio." },
            ].map((eq, idx) => (
              <div key={idx} className="glass-card p-6 flex flex-col justify-between border border-white/10 hover:border-[#C6FF00]/40 transition-all group">
                <div>
                  <div className="h-10 w-10 rounded-xl bg-[#101010] border border-white/10 flex items-center justify-center text-[#C6FF00] mb-4 group-hover:scale-110 transition-transform">
                    <Dumbbell className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#C6FF00] transition-colors">{eq.name}</h3>
                  <p className="text-xs text-[#A0A0A0] mt-2 leading-relaxed">{eq.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <span className="text-[10px] font-extrabold text-[#C6FF00] tracking-wider uppercase">
                    TARGET: {eq.muscle}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================================================================================= */}
      {/* SECTION 8: WORKOUT PLANS */}
      {/* ================================================================================= */}
      <section id="workout-plans" className="py-24 relative bg-[#0a0a0a] border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-[#C6FF00] uppercase tracking-widest">
              CUSTOM ATHLETIC PROGRAMMING
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-2">
              Personalized Workout Plans
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "Weight Loss & Shred", diff: "MODERATE", duration: "12 WEEKS", cal: "600-800 KCAL/SESSION" },
              { name: "Hypertrophy Gain", diff: "INTERMEDIATE", duration: "16 WEEKS", cal: "500-700 KCAL/SESSION" },
              { name: "Pure Powerlifting", diff: "ADVANCED", duration: "20 WEEKS", cal: "400-600 KCAL/SESSION" },
              { name: "Bodybuilding Prep", diff: "PRO ELITE", duration: "24 WEEKS", cal: "700-900 KCAL/SESSION" },
              { name: "Functional Athletic", diff: "BEGINNER+", duration: "8 WEEKS", cal: "550-750 KCAL/SESSION" },
            ].map((wp, idx) => (
              <div key={idx} className="glass-card p-6 flex flex-col justify-between border border-white/10 hover:border-[#C6FF00]/50 transition-all group">
                <div>
                  <span className="text-[10px] font-extrabold text-[#C6FF00] uppercase tracking-widest bg-black/50 px-2.5 py-1 rounded-full border border-white/10">
                    {wp.diff}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-4 group-hover:text-[#C6FF00] transition-colors">{wp.name}</h3>
                  <div className="flex flex-col gap-2 mt-4 text-xs text-[#A0A0A0]">
                    <div className="flex items-center gap-2">
                      <Clock className="h-3.5 w-3.5 text-[#C6FF00]" />
                      <span>Duration: {wp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Flame className="h-3.5 w-3.5 text-[#C6FF00]" />
                      <span>{wp.cal}</span>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-6 py-2.5 rounded-full bg-white/5 hover:bg-[#C6FF00] text-white hover:text-black font-bold text-xs uppercase tracking-wider transition-all">
                  Get Plan
                </button>
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
              { name: "Vikram Shetty", role: "Head Master Coach", exp: "10+ Years Exp", spec: "Contest Prep & Powerlifting" },
              { name: "Rahul Verma", role: "Senior Fitness Coach", exp: "7+ Years Exp", spec: "Hypertrophy & Shredding" },
              { name: "Ananya Hegde", role: "Yoga & Mobility Specialist", exp: "5+ Years Exp", spec: "Postural Rehab & Flex" },
              { name: "Karan Naik", role: "CrossFit Head", exp: "6+ Years Exp", spec: "HIIT & Conditioning" },
            ].map((tr, idx) => (
              <div key={idx} className="glass-card p-6 flex flex-col justify-between border border-white/10 hover:border-[#C6FF00]/40 transition-all group">
                <div>
                  <div className="w-full h-48 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center text-4xl font-black text-[#C6FF00] mb-4">
                    COACH {idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#C6FF00] transition-colors">{tr.name}</h3>
                  <p className="text-xs text-[#C6FF00] font-semibold">{tr.role}</p>
                  <p className="text-xs text-[#A0A0A0] mt-2">{tr.spec}</p>
                  <span className="inline-block text-[11px] font-medium text-white bg-white/10 px-2.5 py-1 rounded-full mt-3">
                    {tr.exp}
                  </span>
                </div>
                <button className="w-full mt-6 py-2.5 rounded-full border border-white/20 hover:border-[#C6FF00] hover:bg-[#C6FF00] text-white hover:text-black font-bold text-xs uppercase tracking-wider transition-all">
                  Book Consultation
                </button>
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
          <div className="max-w-3xl mx-auto glass-card p-6 border border-white/10 rounded-3xl relative overflow-hidden mb-12">
            <div className="text-center mb-4">
              <span className="text-xs font-bold text-[#C6FF00] uppercase">90-DAY TRANSFORMATION (SLIDE TO REVEAL)</span>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden select-none">
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-800 to-zinc-900 flex items-center justify-center text-xl font-black text-white">
                AFTER (DAY 90 — SCULPTED)
              </div>
              <div
                className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-zinc-950 to-zinc-800 border-r-2 border-[#C6FF00] flex items-center justify-center text-xl font-black text-[#A0A0A0] overflow-hidden"
                style={{ width: `${beforeAfterPos}%` }}
              >
                <span className="whitespace-nowrap px-8">BEFORE (DAY 0)</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={beforeAfterPos}
                onChange={(e) => setBeforeAfterPos(Number(e.target.value))}
                className="absolute inset-0 w-full opacity-0 cursor-ew-resize z-30"
              />
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
            Trusted By 500+ Fitness Enthusiasts
          </h2>
        </div>

        {/* Marquee Row */}
        <div className="flex gap-6 animate-marquee">
          {[
            { name: "Prashanth K.", rating: "5.0", text: "FitFusion is easily the cleanest and most well-equipped gym in the district. The trainers are IFBB level!" },
            { name: "Sneha Rao", rating: "5.0", text: "Lost 14kg in 4 months with Coach Vikram's custom diet chart and personal training split. Incredible community." },
            { name: "Karthik Bhat", rating: "5.0", text: "The heavy strength section and Olympic racks are unmatched. Best investment for serious powerlifters." },
            { name: "Divya Shetty", rating: "5.0", text: "Clean locker rooms, steam bath, and flexible timing from 5 AM. Fits perfectly into my corporate schedule." },
            { name: "Prashanth K.", rating: "5.0", text: "FitFusion is easily the cleanest and most well-equipped gym in the district. The trainers are IFBB level!" },
            { name: "Sneha Rao", rating: "5.0", text: "Lost 14kg in 4 months with Coach Vikram's custom diet chart and personal training split. Incredible community." },
          ].map((t, idx) => (
            <div key={idx} className="w-80 shrink-0 glass-card p-6 border border-white/10 flex flex-col justify-between gap-4">
              <div>
                <div className="flex items-center gap-1 text-[#C6FF00] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-[#A0A0A0] leading-relaxed italic">"{t.text}"</p>
              </div>
              <div className="flex items-center justify-between border-t border-white/10 pt-3">
                <span className="text-xs font-bold text-white">{t.name}</span>
                <span className="text-[10px] font-extrabold text-[#C6FF00] bg-[#C6FF00]/10 px-2 py-0.5 rounded">VERIFIED MEMBER</span>
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
            
            {/* Map Placeholder Container */}
            <div className="relative h-96 rounded-3xl overflow-hidden glass-card border border-white/10 flex flex-col items-center justify-center text-center p-8">
              <div className="h-16 w-16 rounded-full bg-[#C6FF00]/10 border border-[#C6FF00]/30 flex items-center justify-center text-[#C6FF00] mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white">Interactive Gym Location</h3>
              <p className="text-xs text-[#A0A0A0] mt-2 max-w-sm">
                Multi Power Gym, Highway Junction, Navunda, Kundapura Taluk, Karnataka 576224
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="mt-6 px-6 py-3 rounded-full bg-white/10 hover:bg-[#C6FF00] text-white hover:text-black font-bold text-xs uppercase tracking-wider transition-all"
              >
                Get Directions ↗
              </a>
            </div>

            {/* Quick Contact & Info */}
            <div className="flex flex-col gap-6">
              <span className="text-xs font-bold text-[#C6FF00] uppercase tracking-widest">
                VISIT FITFUSION
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white">
                Get In Touch With Us
              </h2>

              <div className="flex flex-col gap-4 pt-2">
                <div className="flex items-center gap-4 p-4 rounded-2xl glass-card">
                  <Phone className="h-5 w-5 text-[#C6FF00]" />
                  <div>
                    <div className="text-xs font-bold text-white">Phone Support</div>
                    <div className="text-xs text-[#A0A0A0]">+91 98765 43210</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl glass-card">
                  <Mail className="h-5 w-5 text-[#C6FF00]" />
                  <div>
                    <div className="text-xs font-bold text-white">Email Address</div>
                    <div className="text-xs text-[#A0A0A0]">contact@fitfusiongym.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl glass-card">
                  <Clock className="h-5 w-5 text-[#C6FF00]" />
                  <div>
                    <div className="text-xs font-bold text-white">Operating Hours</div>
                    <div className="text-xs text-[#A0A0A0]">Monday - Sunday: 5:00 AM - 11:00 PM</div>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/919876543210"
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
            Step into Karnataka's premier luxury fitness arena. Join 500+ active athletes and sculpt your dream physique with master guidance.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#memberships"
              className="glow-btn px-10 py-5 rounded-full text-sm font-black uppercase tracking-wider"
            >
              Join FitFusion Now ⚡
            </Link>
            <Link
              href="#contact"
              className="px-8 py-5 rounded-full bg-white/10 hover:bg-white/20 text-sm font-bold text-white transition-all"
            >
              Book Free Trial Session
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
