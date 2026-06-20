"use client";

import { motion } from "framer-motion";
import { Trophy, Users, Star, Shield } from "lucide-react";

const stats = [
  { icon: Trophy, value: "30+", label: "Tournaments Hosted", color: "text-orange-400" },
  { icon: Users, value: "500+", label: "Active Members", color: "text-emerald-400" },
  { icon: Star, value: "15+", label: "Pro Coaches", color: "text-yellow-400" },
  { icon: Shield, value: "5+", label: "Sports Disciplines", color: "text-blue-400" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-600/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 tracking-wider uppercase">
                About Us
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6 text-white"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Where Champions{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
                Are Made
              </span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Sportify is a modern multi-sports arena offering premium sports infrastructure, professional coaching, tournaments, memberships, and athlete-friendly facilities under one roof.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              We believe every athlete deserves access to world-class facilities and guidance. Whether you're a weekend warrior or a competitive athlete, Sportify is your home ground. Our certified coaches, state-of-the-art facilities, and vibrant community make us the ultimate sports destination.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              {["Premium Facilities", "Pro Coaching", "Easy Booking", "Vibrant Community", "Tournaments"].map((f) => (
                <span
                  key={f}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium bg-[#1E293B] border border-slate-700 text-slate-300"
                >
                  ✓ {f}
                </span>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                const el = document.getElementById("services");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-8 px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-semibold text-sm shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 cursor-pointer"
            >
              Explore Facilities →
            </motion.button>
          </motion.div>

          {/* Right: Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 rounded-2xl bg-[#1E293B] border border-slate-700/60 hover:border-emerald-500/30 transition-all duration-300 group"
              >
                <div className={`mb-4 p-3 rounded-xl bg-slate-800 inline-flex ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon size={24} />
                </div>
                <div
                  className={`text-4xl font-extrabold mb-1 ${stat.color}`}
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}

            {/* Extra Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="col-span-2 p-6 rounded-2xl relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(16,185,129,0.12) 0%, rgba(249,115,22,0.08) 100%)",
                border: "1px solid rgba(16,185,129,0.2)",
              }}
            >
              <div className="text-4xl mb-3 opacity-30">&ldquo;</div>
              <p className="text-slate-300 text-base italic leading-relaxed">
                The best investment you can make is in yourself — and your health. Sportify makes that investment easy, accessible, and world-class.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white text-xs font-bold">S</div>
                <div>
                  <div className="text-sm font-semibold text-white">Sportify Team</div>
                  <div className="text-xs text-slate-500">Since 2020</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
