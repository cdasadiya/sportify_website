"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import Badge from "../ui/Badge";

const testimonials = [
  {
    name: "Rohan Sharma",
    role: "State Badminton Player",
    image: "/images/avatar1.png",
    rating: 5,
    sport: "Badminton",
    text: "The BWF-approved courts here are by far the best in the city. The non-slip mats and direct vertical lighting make training sessions super productive. Highly recommend the badminton coaching sessions too!",
  },
  {
    name: "Dr. Ananya Goel",
    role: "Corporate Executive & Member",
    image: "/images/avatar2.png",
    rating: 5,
    sport: "Swimming",
    text: "Being a regular swimmer, I am extremely particular about pool hygiene. Sportify keeps the water clean, crystal clear, and temperature-controlled. The separate slots for members are extremely convenient.",
  },
  {
    name: "Kabir Mehta",
    role: "Amateur Footballer",
    image: "/images/avatar3.png",
    rating: 5,
    sport: "Football",
    text: "Our weekend group regularly bookings the 7-a-side football turf. The shock-absorption is amazing, and we've noticed way fewer ankle strains. The floodlights are bright and give a professional match feel.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const active = testimonials[index];

  return (
    <section className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-600/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="primary" className="mb-4">
            Testimonials
          </Badge>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-white mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            What Our{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
              Athletes
            </span>{" "}
            Say
          </h2>
        </div>

        {/* Carousel Area */}
        <div className="relative p-8 sm:p-12 rounded-3xl bg-[#0F172A] border border-slate-800/80 shadow-2xl">
          {/* Quote Icon */}
          <div className="absolute top-6 right-8 text-emerald-500/10 pointer-events-none">
            <Quote size={80} className="fill-emerald-500/5" />
          </div>

          <div className="min-h-[220px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6 text-yellow-500">
                  {Array.from({ length: active.rating }).map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-500" />
                  ))}
                </div>

                {/* Testimonial text */}
                <blockquote className="text-lg sm:text-xl text-slate-300 leading-relaxed italic mb-8">
                  &ldquo;{active.text}&rdquo;
                </blockquote>

                {/* Profile Card */}
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-emerald-500/50">
                    <Image
                      src={active.image}
                      alt={active.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base leading-snug">{active.name}</h3>
                    <p className="text-xs text-slate-400 font-medium">
                      {active.role} • <span className="text-emerald-400 font-semibold">{active.sport}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Row */}
            <div className="flex justify-between items-center mt-8 pt-8 border-t border-slate-800/80">
              {/* Dot Indicators */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === i ? "bg-emerald-500 w-6" : "bg-slate-700 hover:bg-slate-600"
                    }`}
                  />
                ))}
              </div>

              {/* Prev / Next buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-700/50 cursor-pointer"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-700/50 cursor-pointer"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
