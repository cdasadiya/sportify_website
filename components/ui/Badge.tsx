import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "orange";
  className?: string;
}

export default function Badge({ children, variant = "primary", className = "" }: BadgeProps) {
  const baseStyle = "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase";
  const variants = {
    primary: "bg-emerald-500/10 border border-emerald-500/25 text-emerald-400",
    secondary: "bg-white/5 border border-white/10 text-slate-300",
    outline: "border border-slate-700 text-slate-400",
    orange: "bg-orange-500/10 border border-orange-500/25 text-orange-400",
  };

  return (
    <span className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
