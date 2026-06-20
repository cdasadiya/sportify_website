"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Trophy, GraduationCap, Waves, UtensilsCrossed, ArrowRight } from "lucide-react";

const services = [
  {
    id: "turf-booking",
    icon: Calendar,
    emoji: "🏟️",
    title: "Turf & Court Booking",
    description: "Instantly book premium surfaces for your game. Football turf, cricket ground, badminton courts, and tennis courts — all available online.",
    features: ["⚽ Football Turf", "🏏 Cricket Ground", "🏸 Badminton Courts", "🎾 Tennis Courts"],
    cta: "Book Now",
    ctaHref: "contact",
    gradient: "from-emerald-600/20 to-emerald-800/10",
    borderColor: "border-emerald-500/20",
    hoverBorder: "hover:border-emerald-500/50",
    glowColor: "rgba(16,185,129,0.15)",
    image: "/images/gallery_football.png",
    tag: "Most Booked",
  },
  {
    id: "tournament-hosting",
    icon: Trophy,
    emoji: "🏆",
    title: "Host Your Tournament",
    description: "Organize professional tournaments with full facility support — from fixtures and team management to live leaderboards.",
    features: ["🗓️ Match Scheduling", "👥 Team Management", "📊 Leaderboards", "🔴 Live Scores (Soon)"],
    cta: "Host Tournament",
    ctaHref: "tournaments",
    gradient: "from-orange-600/20 to-orange-800/10",
    borderColor: "border-orange-500/20",
    hoverBorder: "hover:border-orange-500/50",
    glowColor: "rgba(249,115,22,0.15)",
    image: "/images/gallery_tournament.png",
    tag: "New",
  },
  {
    id: "coaching",
    icon: GraduationCap,
    emoji: "🎓",
    title: "Professional Coaching",
    description: "Train under certified professional coaches. Flexible batches for beginners to advanced athletes in Badminton and Cricket.",
    features: ["🥇 Certified Coaches", "🌅 6 AM – 9 PM Slots", "📈 Beginner to Advanced", "🏸 Cricket & Badminton"],
    cta: "Enroll Now",
    ctaHref: "contact",
    gradient: "from-blue-600/20 to-blue-800/10",
    borderColor: "border-blue-500/20",
    hoverBorder: "hover:border-blue-500/50",
    glowColor: "rgba(59,130,246,0.15)",
    image: "/images/gallery_badminton.png",
    tag: "Popular",
  },
  {
    id: "swimming",
    icon: Waves,
    emoji: "🏊",
    title: "Olympic Swimming Pool",
    description: "Dive into our Olympic-size swimming pool with certified lifeguards, separate timings, and a family-friendly environment.",
    features: ["🛟 Certified Lifeguards", "🚪 Locker Rooms", "👨‍👩‍👧 Family Friendly", "⏰ Separate Timings"],
    cta: "Become a Member",
    ctaHref: "membership",
    gradient: "from-cyan-600/20 to-cyan-800/10",
    borderColor: "border-cyan-500/20",
    hoverBorder: "hover:border-cyan-500/50",
    glowColor: "rgba(6,182,212,0.15)",
    image: "/images/gallery_swimming.png",
    tag: "Members Only",
  },
  {
    id: "canteen",
    icon: UtensilsCrossed,
    emoji: "🥗",
    title: "Athlete Canteen",
    description: "Fuel your performance with our athlete-focused menu — protein shakes, fresh juices, high-protein meals, and energy snacks.",
    features: ["🥤 Protein Shakes", "🍊 Fresh Juices", "🍱 High-Protein Meals", "⚡ Energy Snacks"],
    cta: "View Menu",
    ctaHref: "contact",
    gradient: "from-yellow-600/15 to-yellow-800/10",
    borderColor: "border-yellow-500/20",
    hoverBorder: "hover:border-yellow-500/50",
    glowColor: "rgba(234,179,8,0.12)",
    image: "/images/gallery_canteen.png",
    tag: "Healthy",
  },
];

export default function Services() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 bg-[#020617] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-600/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 tracking-wider uppercase mb-4">
            What We Offer
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Everything a{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
              Champion Needs
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From booking a court to hosting a tournament, we have everything under one roof.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`group relative rounded-2xl overflow-hidden border ${service.borderColor} ${service.hoverBorder} bg-[#0F172A] transition-all duration-400 flex flex-col ${i === 0 ? "lg:col-span-2 lg:row-span-1" : ""}`}
              style={{ transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease" }}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${i === 0 ? "h-56" : "h-44"}`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/30 to-transparent" />
                {/* Tag */}
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-sm text-white border border-white/10">
                    {service.tag}
                  </span>
                </div>
                {/* Icon */}
                <div className="absolute bottom-3 left-4 text-3xl">{service.emoji}</div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">{service.description}</p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-1.5 mb-5">
                  {service.features.map((f) => (
                    <div key={f} className="text-xs text-slate-300 bg-[#1E293B] rounded-lg px-2.5 py-1.5 truncate">
                      {f}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => scrollTo(service.ctaHref)}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white text-sm font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 cursor-pointer group/btn"
                >
                  {service.cta}
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
