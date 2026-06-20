"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import Badge from "../ui/Badge";

const images = [
  {
    src: "/images/gallery_football.png",
    alt: "Football turf under floodlights",
    title: "Football Turf",
    category: "Turf",
  },
  {
    src: "/images/gallery_cricket.png",
    alt: "Cricket practice net session",
    title: "Cricket Nets",
    category: "Nets",
  },
  {
    src: "/images/gallery_badminton.png",
    alt: "BWF certified Badminton court",
    title: "Badminton Court",
    category: "Courts",
  },
  {
    src: "/images/gallery_tennis.png",
    alt: "Premium Tennis court area",
    title: "Tennis Arena",
    category: "Courts",
  },
  {
    src: "/images/gallery_swimming.png",
    alt: "Olympic sized swimming pool",
    title: "Olympic Swimming Pool",
    category: "Pool",
  },
  {
    src: "/images/gallery_canteen.png",
    alt: "Healthy Athlete Canteen",
    title: "Athlete Canteen",
    category: "Cafe",
  },
  {
    src: "/images/gallery_tournament.png",
    alt: "Annual tournament prize distribution",
    title: "Tournaments",
    category: "Events",
  },
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Turf", "Courts", "Pool", "Cafe", "Events"];

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-[#0F172A] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="primary" className="mb-4">
            Arena Tour
          </Badge>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Explore Our{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
            A visual walk through our premium, international standard sporting facilities.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-950/40"
                    : "bg-[#1E293B] text-slate-400 hover:text-white border border-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={img.src}
                onClick={() => setSelectedImg(img.src)}
                className="group relative h-72 rounded-2xl overflow-hidden border border-slate-800/80 cursor-pointer shadow-lg hover:shadow-2xl hover:border-emerald-500/30 transition-all duration-300"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  <div className="self-end p-2 bg-white/10 rounded-full text-white backdrop-blur-sm">
                    <ZoomIn size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-emerald-400 font-bold uppercase tracking-widest mb-1.5 block">
                      {img.category}
                    </span>
                    <h3 className="text-lg font-bold text-white leading-snug">{img.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-6 p-3 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors"
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-5xl w-full h-[75vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImg}
                alt="Selected gallery image preview"
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
