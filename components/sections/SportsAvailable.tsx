"use client";

import { motion } from "framer-motion";
import { ArrowRight, Trophy } from "lucide-react";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

const sportsData = [
  {
    name: "Football",
    emoji: "⚽",
    slots: "6 AM - 11 PM",
    availability: "Available",
    courts: "2 Premium 7-A-Side Turfs",
    description: "International standard FIFA-certified turf with optimal shock absorption and high-intensity LED floodlights.",
  },
  {
    name: "Cricket",
    emoji: "🏏",
    slots: "6 AM - 10 PM",
    availability: "Available",
    courts: "3 Nets (2 Astro, 1 Clay)",
    description: "Equipped with professional bowling machines, concrete/clay wickets, and floodlit practice pitches.",
  },
  {
    name: "Badminton",
    emoji: "🏸",
    slots: "5 AM - 11 PM",
    availability: "Available",
    courts: "4 Synthetic BWF-Approved Courts",
    description: "Equipped with professional non-slip synthetic mats, customized court lighting, and column-free high ceiling.",
  },
  {
    name: "Tennis",
    emoji: "🎾",
    slots: "6 AM - 9 PM",
    availability: "Available",
    courts: "2 Synthetic Cushion Courts",
    description: "Premium ITF-certified synthetic cushion surface that is gentle on joints and offers uniform ball bounce.",
  },
  {
    name: "Swimming",
    emoji: "🏊",
    slots: "6 AM - 10 AM, 4 PM - 9 PM",
    availability: "Members Only",
    courts: "Olympic-Size Pool (8 Lanes)",
    description: "Temperature-controlled water, state-of-the-art filtration system, and professional lifeguard supervision.",
  },
];

export default function SportsAvailable() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="sports" className="py-24 bg-[#0F172A] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="primary" className="mb-4">
            Facilities
          </Badge>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Sports{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
              Available
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Book slots across our high-performance arenas engineered for athletes of all levels.
          </p>
        </div>

        {/* Sports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sportsData.map((sport, i) => (
            <motion.div
              key={sport.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6, borderColor: "rgba(16,185,129,0.3)" }}
              className="p-8 rounded-3xl bg-[#1E293B] border border-slate-700/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Row */}
                <div className="flex justify-between items-start mb-6">
                  <div className="text-4xl">{sport.emoji}</div>
                  <Badge variant={sport.availability === "Available" ? "primary" : "orange"}>
                    {sport.availability}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{sport.name}</h3>
                <p className="text-xs text-emerald-400 font-semibold mb-4">{sport.courts}</p>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">{sport.description}</p>
              </div>

              {/* Slot Details & Action */}
              <div className="pt-6 border-t border-slate-700/60 mt-auto">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Timings</span>
                  <span className="text-xs text-slate-300 font-semibold">{sport.slots}</span>
                </div>

                <Button
                  variant="secondary"
                  onClick={scrollToContact}
                  className="w-full py-2.5 text-xs justify-center gap-1.5"
                >
                  Book Slot <ArrowRight size={12} />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
