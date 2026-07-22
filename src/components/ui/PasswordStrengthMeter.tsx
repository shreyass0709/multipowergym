"use client";

import React from "react";
import { Check, X } from "lucide-react";

interface PasswordStrengthMeterProps {
  password: string;
}

export default function PasswordStrengthMeter({
  password,
}: PasswordStrengthMeterProps) {
  const hasMinLength = password.length >= 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);

  const requirements = [
    { label: "8+ Characters", met: hasMinLength },
    { label: "Uppercase Letter (A-Z)", met: hasUpper },
    { label: "Lowercase Letter (a-z)", met: hasLower },
    { label: "Number (0-9)", met: hasNumber },
    { label: "Special Character (!@#$)", met: hasSpecial },
  ];

  const score = requirements.filter((r) => r.met).length;

  const getStrengthInfo = () => {
    if (!password) return { label: "", color: "bg-white/10", width: "w-0" };
    if (score <= 2) return { label: "Weak", color: "bg-red-500", width: "w-1/3" };
    if (score <= 4)
      return { label: "Medium", color: "bg-yellow-400", width: "w-2/3" };
    return { label: "Strong", color: "bg-[#C6FF00]", width: "w-full" };
  };

  const strength = getStrengthInfo();

  return (
    <div className="w-full mt-2 mb-4 p-4 rounded-xl bg-[#0B0B0B] border border-white/10 space-y-3">
      {/* Strength Bar */}
      <div className="space-y-1.5">
        <div className="flex justify-between text-xs font-semibold">
          <span className="text-[#A0A0A0]">Password Strength:</span>
          <span
            className={`${
              score <= 2
                ? "text-red-400"
                : score <= 4
                ? "text-yellow-400"
                : "text-[#C6FF00]"
            } font-bold`}
          >
            {strength.label || "None"}
          </span>
        </div>
        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-500 rounded-full ${strength.color} ${strength.width}`}
          />
        </div>
      </div>

      {/* Requirement List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
        {requirements.map((req, idx) => (
          <div key={idx} className="flex items-center gap-2 text-xs">
            <div
              className={`h-4 w-4 rounded-full flex items-center justify-center transition-colors ${
                req.met
                  ? "bg-[#C6FF00]/20 text-[#C6FF00]"
                  : "bg-white/5 text-[#A0A0A0]"
              }`}
            >
              {req.met ? (
                <Check className="h-3 w-3" />
              ) : (
                <X className="h-3 w-3 opacity-40" />
              )}
            </div>
            <span
              className={
                req.met ? "text-white font-medium" : "text-[#A0A0A0]/70"
              }
            >
              {req.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
