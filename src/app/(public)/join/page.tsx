"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Activity,
  Target,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  CheckCircle2,
  FileText,
} from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import FloatingInput from "@/components/ui/FloatingInput";
import FileUpload from "@/components/ui/FileUpload";
import ProgressBar from "@/components/ui/ProgressBar";
import Button from "@/components/ui/Button";
import { useAuth } from "@/lib/auth-context";

export default function JoinGymPage() {
  const router = useRouter();
  const { submitJoinApplication } = useAuth();

  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // Step 1 Form Data
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("male");
  const [address, setAddress] = useState("");

  // Step 2 Form Data
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [fitnessGoal, setFitnessGoal] = useState("Muscle Gain");
  const [experience, setExperience] = useState("Beginner");
  const [medicalConditions, setMedicalConditions] = useState("");
  const [emergencyContactName, setEmergencyContactName] = useState("");
  const [emergencyContactPhone, setEmergencyContactPhone] = useState("");

  // Step 3 Form Data
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [govtId, setGovtId] = useState<File | null>(null);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  // Errors state
  const [errors, setErrors] = useState<Record<string, string>>({});

  const wizardSteps = [
    { title: "Personal Info", subtitle: "Basic details" },
    { title: "Fitness Profile", subtitle: "Goals & metrics" },
    { title: "Profile & Legal", subtitle: "Verification & Submit" },
  ];

  // Real-time validation for Step 1
  const validateStep1 = () => {
    const errs: Record<string, string> = {};

    if (!fullName.trim()) errs.fullName = "Full Name is required.";
    if (!email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errs.email = "Please enter a valid email address.";
    }

    if (!phone.trim()) {
      errs.phone = "Phone number is required.";
    } else if (phone.length < 10) {
      errs.phone = "Please enter a valid phone number.";
    }

    if (!dob) errs.dob = "Date of Birth is required.";
    if (!address.trim()) errs.address = "Address is required.";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Real-time validation for Step 2
  const validateStep2 = () => {
    const errs: Record<string, string> = {};

    if (!height.trim() || isNaN(Number(height))) {
      errs.height = "Please enter a valid height in cm.";
    }
    if (!weight.trim() || isNaN(Number(weight))) {
      errs.weight = "Please enter a valid weight in kg.";
    }
    if (!emergencyContactName.trim()) {
      errs.emergencyContactName = "Emergency contact name is required.";
    }
    if (!emergencyContactPhone.trim()) {
      errs.emergencyContactPhone = "Emergency contact phone is required.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Real-time validation for Step 3
  const validateStep3 = () => {
    const errs: Record<string, string> = {};

    if (!acceptedTerms) {
      errs.terms = "You must accept the Terms & Conditions to submit your application.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNextStep = () => {
    if (currentStep === 1) {
      if (validateStep1()) {
        setErrors({});
        setCurrentStep(2);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else if (currentStep === 2) {
      if (validateStep2()) {
        setErrors({});
        setCurrentStep(3);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const handlePrevStep = () => {
    setErrors({});
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep3()) return;

    setIsLoading(true);
    try {
      await submitJoinApplication({
        fullName,
        email,
        phone,
        dob,
        gender,
        address,
        height,
        weight,
        fitnessGoal,
        experience,
        medicalConditions,
        emergencyContactName,
        emergencyContactPhone,
        profileImage,
        govtId,
      });

      router.push("/join/success");
    } catch (error) {
      setErrors({ submit: "Failed to submit application. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] pt-24 pb-20 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden selection:bg-[#C6FF00] selection:text-black">
      {/* Background neon glows */}
      <div className="pointer-events-none absolute top-10 right-10 h-96 w-96 rounded-full bg-[#C6FF00]/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-10 left-10 h-96 w-96 rounded-full bg-[#C6FF00]/5 blur-[150px]" />

      <div className="w-full max-w-3xl relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#101010] border border-[#C6FF00]/30">
            <Sparkles className="h-4 w-4 text-[#C6FF00]" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#C6FF00]">
              Multi Power Gym Onboarding
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Join Our <span className="text-[#C6FF00] text-shadow">Gym</span>
          </h1>
          <p className="text-sm sm:text-base text-[#A0A0A0] max-w-lg mx-auto font-medium">
            Complete your multi-step membership application. Our team will review your profile and send approval instructions.
          </p>
        </div>

        {/* Step Progress Bar */}
        <ProgressBar steps={wizardSteps} currentStep={currentStep} />

        {/* Glassmorphic Form Container */}
        <GlassCard className="w-full">
          <form onSubmit={handleSubmit} noValidate>
            
            {/* ========================================================================= */}
            {/* STEP 1: PERSONAL INFORMATION */}
            {/* ========================================================================= */}
            {currentStep === 1 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right duration-300">
                <div className="border-b border-white/10 pb-4 mb-4">
                  <h3 className="text-lg font-black text-white flex items-center gap-2">
                    <User className="h-5 w-5 text-[#C6FF00]" />
                    <span>Personal Details</span>
                  </h3>
                  <p className="text-xs text-[#A0A0A0]">
                    Enter your contact details so the gym owner can reach you.
                  </p>
                </div>

                <FloatingInput
                  id="join-name"
                  label="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  error={errors.fullName}
                  isValid={!!fullName && !errors.fullName}
                  icon={<User className="h-4 w-4" />}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FloatingInput
                    id="join-email"
                    type="email"
                    label="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={errors.email}
                    isValid={!!email && !errors.email && /\S+@\S+\.\S+/.test(email)}
                    icon={<Mail className="h-4 w-4" />}
                  />

                  <FloatingInput
                    id="join-phone"
                    type="tel"
                    label="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    error={errors.phone}
                    isValid={!!phone && !errors.phone && phone.length >= 10}
                    icon={<Phone className="h-4 w-4" />}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FloatingInput
                    id="join-dob"
                    type="date"
                    label="Date of Birth"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    error={errors.dob}
                    isValid={!!dob && !errors.dob}
                    icon={<Calendar className="h-4 w-4" />}
                  />

                  {/* Gender Selector */}
                  <div className="relative w-full mb-5">
                    <label className="block text-xs font-semibold text-[#A0A0A0] mb-2">
                      Gender
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {["male", "female", "other"].map((g) => (
                        <button
                          key={g}
                          type="button"
                          onClick={() => setGender(g)}
                          className={`py-3 rounded-xl border text-xs font-bold uppercase transition-all ${
                            gender === g
                              ? "bg-[#C6FF00] text-black border-[#C6FF00] shadow-[0_0_15px_rgba(198,255,0,0.3)]"
                              : "bg-[#080808] text-[#A0A0A0] border-white/10 hover:border-white/20"
                          }`}
                        >
                          {g}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <FloatingInput
                  id="join-address"
                  label="Residential Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  error={errors.address}
                  isValid={!!address && !errors.address}
                  icon={<MapPin className="h-4 w-4" />}
                />
              </div>
            )}

            {/* ========================================================================= */}
            {/* STEP 2: FITNESS INFORMATION */}
            {/* ========================================================================= */}
            {currentStep === 2 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right duration-300">
                <div className="border-b border-white/10 pb-4 mb-4">
                  <h3 className="text-lg font-black text-white flex items-center gap-2">
                    <Activity className="h-5 w-5 text-[#C6FF00]" />
                    <span>Fitness Profile & Health</span>
                  </h3>
                  <p className="text-xs text-[#A0A0A0]">
                    Help our certified trainers tailor your fitness routine.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FloatingInput
                    id="join-height"
                    type="number"
                    label="Height (in cm)"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    error={errors.height}
                    isValid={!!height && !isNaN(Number(height))}
                  />

                  <FloatingInput
                    id="join-weight"
                    type="number"
                    label="Weight (in kg)"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    error={errors.weight}
                    isValid={!!weight && !isNaN(Number(weight))}
                  />
                </div>

                {/* Fitness Goal Dropdown */}
                <div className="mb-5">
                  <label className="block text-xs font-bold text-[#A0A0A0] uppercase tracking-wider mb-2">
                    Primary Fitness Goal
                  </label>
                  <select
                    value={fitnessGoal}
                    onChange={(e) => setFitnessGoal(e.target.value)}
                    className="w-full rounded-xl bg-[#080808] text-white text-sm px-4 py-3.5 border border-white/15 focus:border-[#C6FF00] focus:ring-2 focus:ring-[#C6FF00]/20 outline-none transition-all cursor-pointer"
                  >
                    <option value="Weight Loss">Weight Loss</option>
                    <option value="Muscle Gain">Muscle Gain</option>
                    <option value="Strength">Strength Training</option>
                    <option value="Bodybuilding">Bodybuilding</option>
                    <option value="General Fitness">General Fitness</option>
                  </select>
                </div>

                {/* Experience Level Selector */}
                <div className="mb-5">
                  <label className="block text-xs font-bold text-[#A0A0A0] uppercase tracking-wider mb-2">
                    Fitness Experience Level
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {["Beginner", "Intermediate", "Advanced"].map((exp) => (
                      <button
                        key={exp}
                        type="button"
                        onClick={() => setExperience(exp)}
                        className={`py-3 px-2 rounded-xl border text-xs font-bold uppercase transition-all ${
                          experience === exp
                            ? "bg-[#C6FF00] text-black border-[#C6FF00] shadow-[0_0_15px_rgba(198,255,0,0.3)]"
                            : "bg-[#080808] text-[#A0A0A0] border-white/10 hover:border-white/20"
                        }`}
                      >
                        {exp}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Medical Conditions */}
                <div className="mb-5">
                  <label className="block text-xs font-bold text-[#A0A0A0] uppercase tracking-wider mb-2">
                    Medical Conditions / Previous Injuries (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={medicalConditions}
                    onChange={(e) => setMedicalConditions(e.target.value)}
                    placeholder="List any medical issues, asthma, joint injuries, or heart conditions..."
                    className="w-full rounded-xl bg-[#080808] text-white text-sm p-4 border border-white/15 focus:border-[#C6FF00] focus:ring-2 focus:ring-[#C6FF00]/20 outline-none transition-all placeholder:text-[#A0A0A0]/40"
                  />
                </div>

                {/* Emergency Contact */}
                <div className="pt-2 border-t border-white/10">
                  <p className="text-xs font-extrabold text-[#C6FF00] uppercase tracking-wider mb-3">
                    Emergency Contact Person
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FloatingInput
                      id="join-emergency-name"
                      label="Contact Name"
                      value={emergencyContactName}
                      onChange={(e) => setEmergencyContactName(e.target.value)}
                      error={errors.emergencyContactName}
                      isValid={!!emergencyContactName}
                    />

                    <FloatingInput
                      id="join-emergency-phone"
                      type="tel"
                      label="Contact Phone"
                      value={emergencyContactPhone}
                      onChange={(e) => setEmergencyContactPhone(e.target.value)}
                      error={errors.emergencyContactPhone}
                      isValid={!!emergencyContactPhone}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* ========================================================================= */}
            {/* STEP 3: PROFILE & VERIFICATION */}
            {/* ========================================================================= */}
            {currentStep === 3 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right duration-300">
                <div className="border-b border-white/10 pb-4 mb-4">
                  <h3 className="text-lg font-black text-white flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-[#C6FF00]" />
                    <span>Profile Photo & Terms</span>
                  </h3>
                  <p className="text-xs text-[#A0A0A0]">
                    Upload profile details for your gym membership card.
                  </p>
                </div>

                <FileUpload
                  label="Upload Profile Photo"
                  sublabel="Clear headshot image for member card (Max 5MB)"
                  onFileSelect={(file) => setProfileImage(file)}
                />

                <FileUpload
                  label="Government ID Proof"
                  sublabel="Aadhaar, Driving License, or Passport (Optional)"
                  optional
                  onFileSelect={(file) => setGovtId(file)}
                />

                {/* Terms and Conditions Checkbox */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 my-4">
                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={acceptedTerms}
                      onChange={(e) => setAcceptedTerms(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded bg-[#080808] border border-white/20 text-[#C6FF00] focus:ring-[#C6FF00]/30 accent-[#C6FF00] cursor-pointer shrink-0"
                    />
                    <span className="text-xs text-[#A0A0A0] leading-relaxed">
                      I agree to the{" "}
                      <Link href="/terms" className="text-[#C6FF00] font-bold hover:underline">
                        Gym Terms & Conditions
                      </Link>{" "}
                      and safety policies of Multi Power Gym Navunda. I confirm that all submitted details are accurate.
                    </span>
                  </label>

                  {errors.terms && (
                    <p className="text-xs text-red-400 font-semibold pl-7">
                      {errors.terms}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Navigation & Action Buttons */}
            <div className="flex items-center justify-between pt-6 border-t border-white/10 gap-4">
              {currentStep > 1 ? (
                <Button
                  type="button"
                  variant="outline"
                  size="md"
                  onClick={handlePrevStep}
                >
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  <span>Previous</span>
                </Button>
              ) : (
                <Link href="/login">
                  <Button type="button" variant="ghost" size="md">
                    <span>Already a member?</span>
                  </Button>
                </Link>
              )}

              {currentStep < 3 ? (
                <Button
                  type="button"
                  variant="primary"
                  size="md"
                  onClick={handleNextStep}
                >
                  <span>Next Step</span>
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  isLoading={isLoading}
                >
                  <span>Submit Application</span>
                  <CheckCircle2 className="h-4 w-4 ml-1" />
                </Button>
              )}
            </div>

          </form>
        </GlassCard>

      </div>
    </div>
  );
}
