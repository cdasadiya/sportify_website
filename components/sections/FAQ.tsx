"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import Badge from "../ui/Badge";

const faqs = [
  {
    question: "How do I book a court or turf at Sportify?",
    answer: "You can book directly by visiting the arena or calling our support line. You can also send a request through our online contact form, and our front desk will immediately assist you to confirm your slot.",
  },
  {
    question: "What are the timings of the sports facilities?",
    answer: "Most of our facilities (Football turf, Badminton courts, Cricket nets) are open from 6:00 AM to 11:00 PM daily. The swimming pool operates in split slots: 6:00 AM to 10:00 AM in the morning and 4:00 PM to 9:00 PM in the evening.",
  },
  {
    question: "Are non-marking shoes mandatory for Badminton?",
    answer: "Yes, to protect our high-performance BWF-approved synthetic courts, non-marking shoes are strictly mandatory. Clean non-marking shoes are also available on rent at the front desk.",
  },
  {
    question: "Can I host corporate events or tournaments at Sportify?",
    answer: "Absolutely! We offer full event management, referee coordination, fixture scheduling, points-table management, and exclusive access to the fields for private or corporate tournaments.",
  },
  {
    question: "Is swimming access included in the Basic membership?",
    answer: "No, swimming access is exclusive to our Elite and Premium membership plans due to capacity limits and safety guidelines.",
  },
  {
    question: "Can I get personal training or coaching at the arena?",
    answer: "Yes! We run professional coaching academies for Cricket, Badminton, and Swimming. The Premium membership includes 2 complimentary personal coaching sessions per month.",
  },
  {
    question: "Do you have locker and shower facilities?",
    answer: "Yes, we have separate, fully-equipped locker rooms for men and women with secure digital lockers, hot shower facilities, changing spaces, and dry saunas.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="primary" className="mb-4">
            Help Center
          </Badge>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-white mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Got questions? We've got answers. Browse our FAQ to learn more about bookings, memberships, and coaching.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-800 bg-[#1E293B]/60 hover:bg-[#1E293B]/80 transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 flex justify-between items-center text-left text-white font-bold cursor-pointer"
                >
                  <span className="flex items-center gap-3 pr-4">
                    <HelpCircle size={18} className="text-emerald-400 shrink-0" />
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-slate-400"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-sm text-slate-400 leading-relaxed border-t border-slate-800/60">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
