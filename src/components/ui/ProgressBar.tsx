"use client";

import React from "react";
import { Check } from "lucide-react";

interface Step {
  title: string;
  subtitle: string;
}

interface ProgressBarProps {
  steps: Step[];
  currentStep: number; // 1-indexed
}

export default function ProgressBar({ steps, currentStep }: ProgressBarProps) {
  return (
    <div className="w-full mb-8">
      {/* Step Numbers & Connection Lines */}
      <div className="relative flex items-center justify-between">
        {/* Background Connecting Line */}
        <div className="absolute top-5 left-8 right-8 h-1 bg-white/10 -z-0" />
        
        {/* Active Connecting Line */}
        <div
          className="absolute top-5 left-8 h-1 bg-[#C6FF00] transition-all duration-500 -z-0"
          style={{
            width: `${((currentStep - 1) / (steps.length - 1)) * 90}%`,
          }}
        />

        {steps.map((step, idx) => {
          const stepNum = idx + 1;
          const isCompleted = stepNum < currentStep;
          const isActive = stepNum === currentStep;

          return (
            <div
              key={idx}
              className="flex flex-col items-center relative z-10 group"
            >
              <div
                className={`h-10 w-10 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 ${
                  isCompleted
                    ? "bg-[#C6FF00] text-black shadow-[0_0_15px_rgba(198,255,0,0.5)] scale-105"
                    : isActive
                    ? "bg-[#101010] text-[#C6FF00] border-2 border-[#C6FF00] shadow-[0_0_20px_rgba(198,255,0,0.4)] scale-110"
                    : "bg-[#101010] text-[#A0A0A0] border border-white/20"
                }`}
              >
                {isCompleted ? <Check className="h-5 w-5 stroke-[3]" /> : stepNum}
              </div>

              <div className="text-center mt-3 hidden sm:block">
                <p
                  className={`text-xs font-bold transition-colors ${
                    isActive || isCompleted ? "text-white" : "text-[#A0A0A0]/60"
                  }`}
                >
                  {step.title}
                </p>
                <p className="text-[10px] text-[#A0A0A0] mt-0.5 max-w-[100px]">
                  {step.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Step Header */}
      <div className="sm:hidden text-center mt-4 pt-2 border-t border-white/5">
        <span className="text-xs font-extrabold text-[#C6FF00] uppercase tracking-wider">
          Step {currentStep} of {steps.length}
        </span>
        <h4 className="text-sm font-bold text-white mt-0.5">
          {steps[currentStep - 1]?.title}
        </h4>
      </div>
    </div>
  );
}
