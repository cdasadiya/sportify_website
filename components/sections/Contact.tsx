"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Clock, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    sport: "Select Sport",
  });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || formData.sport === "Select Sport") {
      setStatus("error");
      return;
    }

    setStatus("success");
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      sport: "Select Sport",
    });

    // Reset status after 5 seconds
    setTimeout(() => {
      setStatus("idle");
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-600/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          {/* Contact Details (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <Badge variant="primary" className="mb-4">
                Get In Touch
              </Badge>
              <h2
                className="text-3xl sm:text-4xl font-extrabold text-white mb-6"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Ready to{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
                  Start Your Game?
                </span>
              </h2>
              <p className="text-slate-400 text-base leading-relaxed mb-8">
                Contact our booking front desk to reserve a slot, ask about membership tiers, or enroll in a coaching academy batch.
              </p>

              {/* Info Items */}
              <div className="space-y-6 mb-8">
                {[
                  { icon: Phone, title: "Phone", details: "+91 98765 43210 / +91 99887 76655", color: "text-emerald-400" },
                  { icon: Mail, title: "Email", details: "bookings@sportify.com / support@sportify.com", color: "text-blue-400" },
                  { icon: Clock, title: "Hours", details: "Mon - Sun: 5:00 AM - 11:00 PM", color: "text-orange-400" },
                  { icon: MapPin, title: "Location", details: "Sportify Arena, Outer Ring Road, Sector 5, Bengaluru, India", color: "text-yellow-400" },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className={`p-3 rounded-xl bg-[#1E293B] shrink-0 ${item.color}`}>
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-0.5">{item.title}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Embedded Mini Google Map */}
            <div className="h-48 rounded-2xl overflow-hidden border border-slate-800 relative bg-[#0F172A]">
              <iframe
                title="Sportify Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15553.486245648835!2d77.62534571932314!3d12.94819777553556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144e3e3b7db5%3A0x6a084c0c169229f6!2sKoramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, opacity: 0.8 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Contact Form (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 p-8 rounded-3xl bg-[#0F172A] border border-slate-800/80 shadow-2xl flex flex-col justify-between"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-2">Book a Facility or Slot</h3>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#1E293B] border border-slate-800 text-white text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#1E293B] border border-slate-800 text-white text-sm"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#1E293B] border border-slate-800 text-white text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="sport" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Select Facility</label>
                  <select
                    id="sport"
                    value={formData.sport}
                    onChange={(e) => setFormData({ ...formData, sport: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#1E293B] border border-slate-800 text-slate-300 text-sm appearance-none"
                  >
                    <option disabled>Select Sport</option>
                    <option>Football Turf</option>
                    <option>Cricket Nets</option>
                    <option>Badminton Courts</option>
                    <option>Tennis Cushion Courts</option>
                    <option>Olympic Swimming Pool</option>
                    <option>Tournament Hosting / Event Space</option>
                    <option>General Membership Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Message (Optional)</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Specify date, slot timing, or any specific coaching requirement..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#1E293B] border border-slate-800 text-white text-sm resize-none"
                />
              </div>

              {/* Status Alert */}
              {status === "success" && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3 text-emerald-400 text-sm">
                  <CheckCircle size={18} />
                  <span>Thank you! Your inquiry was sent successfully. Our team will contact you shortly.</span>
                </div>
              )}

              {status === "error" && (
                <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center gap-3 text-orange-400 text-sm">
                  <AlertCircle size={18} />
                  <span>Please fill out all required fields and select a facility.</span>
                </div>
              )}

              <Button
                variant="primary"
                type="submit"
                className="w-full justify-center py-4"
              >
                Send Booking Inquiry
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
