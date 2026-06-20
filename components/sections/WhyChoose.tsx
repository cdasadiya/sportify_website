"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Coffee, Compass, Moon, Smile, Sparkles, UserCheck, HeartHandshake, Eye } from "lucide-react";
import Badge from "../ui/Badge";

const reasons = [
  {
    icon: ShieldCheck,
    title: "International Standards",
    desc: "FIFA, BWF, and ITF certified premium turf and courts.",
  },
  {
    icon: Zap,
    title: "HD Floodlights",
    desc: "Broadcast-quality LED lighting for night play with zero shadow areas.",
  },
  {
    icon: UserCheck,
    title: "Certified Coaching",
    desc: "Learn from players and coaches with state and national credentials.",
  },
  {
    icon: Coffee,
    title: "Healthy Canteen",
    desc: "Nutrition-focused dining options designed for athletes' post-workout recovery.",
  },
  {
    icon: Compass,
    title: "Ample Parking",
    desc: "Large secure underground parking space free for members.",
  },
  {
    icon: Moon,
    title: "Flexible Timings",
    desc: "Early morning to late night slots (5 AM - 11 PM) to fit your schedule.",
  },
  {
    icon: Sparkles,
    title: "Modern Lockers",
    desc: "High-security digital lockers, hot shower facilities, and dry saunas.",
  },
  {
    icon: HeartHandshake,
    title: "Community Driven",
    desc: "Regular mixers, fun weekend events, and interactive social meets.",
  },
  {
    icon: Eye,
    title: "Live Match Recording",
    desc: "Action-cameras on turf to record and playback your games (Upon Request).",
  },
  {
    icon: Smile,
    title: "Family Friendly",
    desc: "Dedicated kids play arena and safe family lounge spaces.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-600/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="primary" className="mb-4">
            Advantages
          </Badge>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Why Play At{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
              Sportify
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We provide more than just courts. Explore our end-to-end amenities crafted to deliver the best athletic experience.
          </p>
        </div>

        {/* Reasons Grid (5x2 layout on desktop, responsive) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ y: -5, borderColor: "rgba(16,185,129,0.25)", backgroundColor: "rgba(30,41,59,0.8)" }}
              className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800 transition-all duration-300 flex flex-col justify-start"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 shrink-0">
                <item.icon size={20} />
              </div>
              <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
