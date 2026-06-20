"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Facilities", href: "#services" },
  { label: "Membership", href: "#membership" },
  { label: "Coaching", href: "#coaching" },
  { label: "Tournament", href: "#tournaments" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[rgba(2,6,23,0.9)] backdrop-blur-xl border-b border-[rgba(16,185,129,0.15)] shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.button
              onClick={() => handleNavClick("#home")}
              className="flex items-center gap-2 group cursor-pointer"
              whileHover={{ scale: 1.03 }}
            >
              <div className="relative">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/40 transition-shadow duration-300">
                  <Zap size={20} className="text-white" fill="white" />
                </div>
                <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-orange-500 rounded-full animate-pulse" />
              </div>
              <span className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
                <span className="text-white">Sport</span>
                <span className="text-emerald-400">ify</span>
              </span>
            </motion.button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="relative px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 group cursor-pointer"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-emerald-400 group-hover:w-4/5 transition-all duration-300 rounded-full" />
                </button>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <motion.button
                onClick={() => handleNavClick("#contact")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="hidden sm:block text-sm font-semibold px-5 py-2.5 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 cursor-pointer"
              >
                Book Now
              </motion.button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-40 w-72 bg-[#0F172A] border-l border-[rgba(16,185,129,0.15)] shadow-2xl lg:hidden"
          >
            <div className="flex flex-col h-full pt-20 pb-8 px-6">
              <nav className="flex flex-col gap-1 flex-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left px-4 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-200 cursor-pointer group"
                  >
                    <span className="group-hover:translate-x-1 inline-block transition-transform duration-200">
                      {link.label}
                    </span>
                  </motion.button>
                ))}
              </nav>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => handleNavClick("#contact")}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-semibold text-sm shadow-lg cursor-pointer"
              >
                Book Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-30 bg-black/60 lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
