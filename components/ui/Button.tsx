"use client";

import { motion } from "framer-motion";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}

export default function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const variants = {
    primary: "bg-gradient-to-r from-emerald-600 to-emerald-500 text-white hover:shadow-emerald-500/35 hover:shadow-2xl",
    secondary: "border-2 border-white/25 text-white hover:border-emerald-500/60 hover:text-emerald-300 backdrop-blur-sm",
    ghost: "text-slate-300 hover:text-emerald-400 hover:bg-white/5",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 ${variants[variant]} ${className}`}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
}
