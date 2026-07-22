"use client";

import React, { useState } from "react";
import { Eye, EyeOff, Lock, CheckCircle2, AlertCircle } from "lucide-react";
import PasswordStrengthMeter from "./PasswordStrengthMeter";

interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  error?: string;
  isValid?: boolean;
  showStrengthMeter?: boolean;
}

export default function PasswordInput({
  label = "Password",
  id,
  error,
  isValid,
  showStrengthMeter = false,
  value = "",
  onChange,
  onFocus,
  onBlur,
  className = "",
  ...props
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const strValue = String(value || "");
  const hasValue = strValue.length > 0;

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  };

  return (
    <div className="relative w-full mb-5 group">
      <div className="relative flex items-center">
        {/* Leading Lock Icon */}
        <div className="absolute left-4 text-[#A0A0A0] group-focus-within:text-[#C6FF00] transition-colors pointer-events-none z-10">
          <Lock className="h-4 w-4" />
        </div>

        <input
          id={id}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder=" "
          className={`peer w-full rounded-xl bg-[#080808]/90 text-white text-sm pl-11 pr-20 py-3.5 border transition-all duration-300 outline-none ${
            error
              ? "border-red-500/70 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
              : isValid
              ? "border-[#C6FF00]/60 focus:border-[#C6FF00] focus:ring-2 focus:ring-[#C6FF00]/20"
              : "border-white/10 focus:border-[#C6FF00] focus:ring-2 focus:ring-[#C6FF00]/20 hover:border-white/25"
          } ${className}`}
          {...props}
        />

        {/* Floating Label */}
        <label
          htmlFor={id}
          className={`absolute left-11 pointer-events-none transition-all duration-200 ease-out text-xs font-semibold ${
            isFocused || hasValue
              ? "-top-2.5 bg-[#0A0A0A] px-2 text-[#C6FF00] scale-90 rounded"
              : "top-3.5 text-[#A0A0A0] scale-100"
          } ${error ? "text-red-400" : ""}`}
        >
          {label}
        </label>

        {/* Action Controls: Show/Hide Toggle & Status Icon */}
        <div className="absolute right-3.5 flex items-center gap-2 z-10">
          {error ? (
            <AlertCircle className="h-4 w-4 text-red-500 animate-pulse pointer-events-none" />
          ) : isValid ? (
            <CheckCircle2 className="h-4 w-4 text-[#C6FF00] pointer-events-none" />
          ) : null}

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-[#A0A0A0] hover:text-[#C6FF00] transition-colors p-1 rounded-lg hover:bg-white/5 focus:outline-none"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4 transition-transform scale-110" />
            ) : (
              <Eye className="h-4 w-4 transition-transform hover:scale-110" />
            )}
          </button>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-medium pl-1 animate-in fade-in slide-in-from-top-1">
          <span>{error}</span>
        </p>
      )}

      {/* Optional Password Strength Meter */}
      {showStrengthMeter && strValue.length > 0 && (
        <PasswordStrengthMeter password={strValue} />
      )}
    </div>
  );
}
