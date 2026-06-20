"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const sports = [
  { emoji: "⚽", label: "Football" },
  { emoji: "🏏", label: "Cricket" },
  { emoji: "🏸", label: "Badminton" },
  { emoji: "🎾", label: "Tennis" },
  { emoji: "🏊", label: "Swimming" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function Hero() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Sportify Arena — premium sports facility at night"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#020617]/75 to-[#020617]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/30" />
      </div>

      {/* Animated Background Orbs */}
      <div className="absolute inset-0 z-1 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-emerald-600/20 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 -right-32 w-[400px] h-[400px] rounded-full bg-orange-600/15 blur-[80px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Tag */}
          <motion.div variants={fadeUpVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Premium Multi-Sports Arena
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUpVariants}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Your Ultimate{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
              Sports
            </span>{" "}
            <br className="hidden sm:block" />
            Destination
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeUpVariants}
            className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-xl"
          >
            Book world-class sports facilities, join coaching programs, compete in tournaments, and become part of an active sports community.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUpVariants} className="flex flex-col sm:flex-row gap-4 mb-14">
            <motion.button
              onClick={() => handleScroll("contact")}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(16,185,129,0.35)" }}
              whileTap={{ scale: 0.97 }}
              id="hero-book-now"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold text-base shadow-xl cursor-pointer relative overflow-hidden group"
            >
              <span className="relative z-10">🏟️ Book Now</span>
              <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
            </motion.button>

            <motion.button
              onClick={() => handleScroll("membership")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              id="hero-become-member"
              className="px-8 py-4 rounded-xl border-2 border-white/25 text-white font-bold text-base hover:border-emerald-500/60 hover:text-emerald-300 transition-all duration-300 cursor-pointer backdrop-blur-sm"
            >
              Become a Member →
            </motion.button>
          </motion.div>

          {/* Sports Icons */}
          <motion.div variants={fadeUpVariants}>
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4 font-medium">Sports Available</p>
            <div className="flex flex-wrap gap-3">
              {sports.map((sport, i) => (
                <motion.div
                  key={sport.label}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-emerald-500/30 hover:bg-emerald-500/10 transition-all duration-300 cursor-default"
                >
                  <span className="text-xl">{sport.emoji}</span>
                  <span className="text-sm font-medium text-slate-300">{sport.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl"
        >
          {[
            { value: "5+", label: "Sports Facilities" },
            { value: "500+", label: "Happy Members" },
            { value: "15+", label: "Pro Coaches" },
            { value: "30+", label: "Tournaments Hosted" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="px-4 py-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-center"
            >
              <div className="text-2xl font-extrabold text-emerald-400 mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() => handleScroll("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
}
