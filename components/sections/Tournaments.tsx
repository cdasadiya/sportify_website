"use client";

import { motion } from "framer-motion";
import { Trophy, Calendar, Users, Award, ShieldCheck, ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

const features = [
  {
    icon: Calendar,
    title: "Fixture Scheduling",
    description: "Automatic round-robin and knockout match scheduling for stress-free management.",
  },
  {
    icon: Users,
    title: "Team Registration",
    description: "Accept registrations, process team details, and generate rosters online.",
  },
  {
    icon: Award,
    title: "Live Leaderboards",
    description: "Real-time updates of points table, top scorers, and tournament standing.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Referees",
    description: "Qualified, neutral referees and officials to coordinate professional matches.",
  },
];

export default function Tournaments() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="tournaments" className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-600/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text area */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <Badge variant="orange" className="mb-4">
              <Trophy size={12} className="inline mr-1" /> Tournaments & Events
            </Badge>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Host Your Next{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                Championship
              </span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Elevate your tournament experience. Sportify provides state-of-the-art infrastructure, live statistics management, and official referee support.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Whether you're organizing a corporate cricket cup, an inter-college football derby, or a community badminton tournament, we ensure a seamless and professional setup.
            </p>
            <Button variant="primary" onClick={scrollToContact} className="!bg-gradient-to-r !from-orange-600 !to-orange-500 hover:shadow-orange-500/25">
              Book Arena for Event <ArrowRight size={16} />
            </Button>
          </motion.div>

          {/* Features Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -6, borderColor: "rgba(249,115,22,0.3)" }}
                className="p-6 rounded-2xl bg-[#1E293B] border border-slate-700/60 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
