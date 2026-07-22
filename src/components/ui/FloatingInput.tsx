"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";

interface FloatingInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  error?: string;
  isValid?: boolean;
  icon?: React.ReactNode;
}

export default function FloatingInput({
  label,
  id,
  error,
  isValid,
  icon,
  value,
  onChange,
  onFocus,
  onBlur,
  placeholder = " ",
  type = "text",
  className = "",
  ...props
}: FloatingInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value !== undefined && value !== null && String(value).length > 0;

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
        {/* Leading Icon if provided */}
        {icon && (
          <div className="absolute left-4 text-[#A0A0A0] group-focus-within:text-[#C6FF00] transition-colors pointer-events-none z-10">
            {icon}
          </div>
        )}

        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          className={`peer w-full rounded-xl bg-[#080808]/90 text-white text-sm px-4 py-3.5 ${
            icon ? "pl-11" : "pl-4"
          } pr-10 border transition-all duration-300 outline-none ${
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
          className={`absolute pointer-events-none transition-all duration-200 ease-out text-xs font-semibold ${
            icon ? "left-11" : "left-4"
          } ${
            isFocused || hasValue
              ? "-top-2.5 bg-[#0A0A0A] px-2 text-[#C6FF00] scale-90 rounded"
              : "top-3.5 text-[#A0A0A0] scale-100"
          } ${error ? "text-red-400" : ""}`}
        >
          {label}
        </label>

        {/* Status Indicator Icon (Success or Error) */}
        <div className="absolute right-3.5 flex items-center pointer-events-none z-10">
          {error ? (
            <AlertCircle className="h-4 w-4 text-red-500 animate-pulse" />
          ) : isValid ? (
            <CheckCircle2 className="h-4 w-4 text-[#C6FF00]" />
          ) : null}
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-medium pl-1 animate-in fade-in slide-in-from-top-1">
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}
