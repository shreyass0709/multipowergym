"use client";

import React, { useState } from "react";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  fullWidth?: boolean;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  fullWidth = false,
  className = "",
  disabled,
  onClick,
  ...props
}: ButtonProps) {
  const [coords, setCoords] = useState({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setIsRippling(true);
    setTimeout(() => setIsRippling(false), 500);

    if (onClick) onClick(e);
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-xs rounded-xl",
    md: "px-6 py-3 text-sm rounded-xl",
    lg: "px-8 py-4 text-base rounded-2xl",
  };

  const variantClasses = {
    primary:
      "bg-[#C6FF00] text-black font-extrabold shadow-[0_0_20px_rgba(198,255,0,0.3)] hover:shadow-[0_0_35px_rgba(198,255,0,0.65)] hover:-translate-y-0.5 border border-[#C6FF00]",
    secondary:
      "bg-white/10 text-white font-bold hover:bg-white/15 hover:text-[#C6FF00] border border-white/10 hover:border-[#C6FF00]/40",
    outline:
      "bg-transparent text-white font-bold border border-white/20 hover:border-[#C6FF00] hover:text-[#C6FF00] hover:bg-[#C6FF00]/5",
    ghost:
      "bg-transparent text-[#A0A0A0] font-semibold hover:text-white hover:bg-white/5",
  };

  return (
    <button
      disabled={disabled || isLoading}
      onClick={handleClick}
      className={`relative overflow-hidden inline-flex items-center justify-center gap-2 tracking-wide uppercase transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
        sizeClasses[size]
      } ${variantClasses[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
      {...props}
    >
      {/* Ripple Animation Element */}
      {isRippling && (
        <span
          className="absolute bg-white/30 rounded-full animate-ping pointer-events-none"
          style={{
            left: coords.x,
            top: coords.y,
            width: 100,
            height: 100,
            transform: "translate(-50%, -50%)",
          }}
        />
      )}

      {isLoading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>Processing...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}
