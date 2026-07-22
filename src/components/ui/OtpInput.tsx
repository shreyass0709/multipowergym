"use client";

import React, { useState, useRef, useEffect } from "react";
import { RefreshCw } from "lucide-react";

interface OtpInputProps {
  length?: number;
  onComplete: (otp: string) => void;
  onResend?: () => void;
  isLoading?: boolean;
}

export default function OtpInput({
  length = 6,
  onComplete,
  onResend,
  isLoading = false,
}: OtpInputProps) {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
  const [timer, setTimer] = useState<number>(45);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (isNaN(Number(value))) return;

    const newOtp = [...otp];
    // Take the last entered character
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) {
      onComplete(combinedOtp);
    }

    // Move to next field if value is entered
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").trim();
    if (!/^\d+$/.test(pasteData)) return;

    const pasteDigits = pasteData.slice(0, length).split("");
    const newOtp = [...otp];
    pasteDigits.forEach((digit, idx) => {
      newOtp[idx] = digit;
      if (inputRefs.current[idx]) {
        inputRefs.current[idx]!.value = digit;
      }
    });
    setOtp(newOtp);

    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) {
      onComplete(combinedOtp);
    }

    // Focus last pasted element
    const nextIndex = Math.min(pasteDigits.length, length - 1);
    inputRefs.current[nextIndex]?.focus();
  };

  const handleResendClick = () => {
    if (timer === 0) {
      setTimer(45);
      setOtp(new Array(length).fill(""));
      inputRefs.current[0]?.focus();
      if (onResend) onResend();
    }
  };

  return (
    <div className="flex flex-col items-center my-6 space-y-5">
      <div className="flex gap-2.5 sm:gap-3 justify-center">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            disabled={isLoading}
            className="w-11 h-13 sm:w-13 sm:h-15 text-center text-xl font-black bg-[#080808] text-[#C6FF00] border border-white/15 rounded-xl focus:border-[#C6FF00] focus:ring-2 focus:ring-[#C6FF00]/30 outline-none transition-all duration-200 shadow-inner"
          />
        ))}
      </div>

      {/* Resend Section */}
      <div className="flex items-center gap-2 text-xs">
        <span className="text-[#A0A0A0]">Didn&apos;t receive the code?</span>
        <button
          type="button"
          onClick={handleResendClick}
          disabled={timer > 0 || isLoading}
          className={`font-bold flex items-center gap-1.5 transition-colors ${
            timer > 0
              ? "text-[#A0A0A0]/50 cursor-not-allowed"
              : "text-[#C6FF00] hover:underline"
          }`}
        >
          <RefreshCw className={`h-3 w-3 ${isLoading ? "animate-spin" : ""}`} />
          {timer > 0 ? `Resend OTP in ${timer}s` : "Resend OTP"}
        </button>
      </div>
    </div>
  );
}
