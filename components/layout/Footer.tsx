"use client";

import { motion } from "framer-motion";
import { Zap, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const TwitterIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const FacebookIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const YoutubeIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/>
    <polygon points="10 15 15 12 10 9"/>
  </svg>
);

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Facilities", href: "#services" },
  { label: "Membership", href: "#membership" },
  { label: "Coaching", href: "#coaching" },
  { label: "Tournament", href: "#tournaments" },
  { label: "Contact", href: "#contact" },
];

const facilities = [
  "Cricket Ground",
  "Football Turf",
  "Tennis Courts",
  "Badminton Courts",
  "Swimming Pool",
  "Athlete Canteen",
];

const socialLinks = [
  { icon: InstagramIcon, href: "#", label: "Instagram", color: "hover:text-pink-400" },
  { icon: TwitterIcon, href: "#", label: "Twitter", color: "hover:text-sky-400" },
  { icon: FacebookIcon, href: "#", label: "Facebook", color: "hover:text-blue-400" },
  { icon: YoutubeIcon, href: "#", label: "YouTube", color: "hover:text-red-400" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-[#020617] border-t border-[rgba(16,185,129,0.12)]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <button onClick={() => handleNavClick("#home")} className="flex items-center gap-2 mb-5 cursor-pointer">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center">
                <Zap size={20} className="text-white" fill="white" />
              </div>
              <span className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
                <span className="text-white">Sport</span>
                <span className="text-emerald-400">ify</span>
              </span>
            </button>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Your ultimate multi-sports destination. Premium facilities, professional coaching, exciting tournaments, and a vibrant community — all under one roof.
            </p>
            <div className="flex items-center gap-1.5 text-sm text-slate-400 mb-3">
              <Phone size={14} className="text-emerald-400 shrink-0" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-slate-400 mb-3">
              <Mail size={14} className="text-emerald-400 shrink-0" />
              <span>hello@sportify.in</span>
            </div>
            <div className="flex items-start gap-1.5 text-sm text-slate-400">
              <MapPin size={14} className="text-emerald-400 shrink-0 mt-1" />
              <span>Sector 18, Noida, Uttar Pradesh, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-emerald-400 transition-colors duration-200 group cursor-pointer"
                  >
                    <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-emerald-400" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Facilities */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Facilities</h3>
            <ul className="space-y-2.5">
              {facilities.map((facility) => (
                <li key={facility}>
                  <button
                    onClick={() => handleNavClick("#services")}
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-emerald-400 transition-colors duration-200 group cursor-pointer"
                  >
                    <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-emerald-400" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{facility}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Stay Updated</h3>
            <p className="text-sm text-slate-400 mb-4">
              Subscribe to get the latest on tournaments, offers, and events.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address for newsletter subscription"
                className="w-full px-4 py-2.5 rounded-lg bg-[#1E293B] border border-slate-700 text-sm text-white placeholder-slate-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full py-2.5 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 cursor-pointer"
              >
                Subscribe
              </motion.button>
            </form>

            {/* Social */}
            <div className="mt-6">
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">Follow Us</p>
              <div className="flex items-center gap-3">
                {socialLinks.map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    aria-label={label}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-9 h-9 rounded-lg bg-[#1E293B] border border-slate-700 flex items-center justify-center text-slate-400 ${color} hover:border-current transition-all duration-200`}
                  >
                    <Icon size={16} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-[rgba(30,41,59,0.8)] py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Sportify. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Play. Train. Compete.</span>
            <span className="text-emerald-400 font-semibold ml-1">Belong.</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
