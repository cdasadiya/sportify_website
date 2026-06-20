"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Flame } from "lucide-react";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

const plans = [
  {
    name: "Basic",
    priceMonthly: 1499,
    priceYearly: 1199,
    description: "Ideal for casual weekend sports enthusiasts.",
    features: [
      "Access to 1 Sport Facility",
      "2 Bookings per Week",
      "Shared Locker Room Access",
      "Standard Booking Support",
    ],
    popular: false,
    cta: "Start Basic",
  },
  {
    name: "Elite",
    priceMonthly: 3499,
    priceYearly: 2799,
    description: "Our most popular tier. Perfect for regular athletes.",
    features: [
      "Unlimited Access to All Facilities",
      "Priority Booking Times",
      "Private Locker & Sauna Access",
      "2 Guest Passes per Month",
      "10% Discount on In-house Tournaments",
    ],
    popular: true,
    cta: "Join Elite Plan",
  },
  {
    name: "Premium",
    priceMonthly: 5999,
    priceYearly: 4799,
    description: "Ultimate training package with personalized perks.",
    features: [
      "All Elite Benefits Included",
      "2 Personal Coaching Sessions / Month",
      "Complimentary Athlete Meals (4 / Month)",
      "Free Entry to All Tournaments",
      "Premium Gear & Racquet Demos",
    ],
    popular: false,
    cta: "Go Premium",
  },
];

export default function MembershipPlans() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="membership" className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-emerald-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="primary" className="mb-4">
            Pricing Plans
          </Badge>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Flexible{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
              Membership
            </span>{" "}
            Options
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
            Choose a plan that fits your sports lifestyle. Save up to 20% by choosing our annual billing cycle.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center bg-[#0F172A] border border-slate-700/80 p-1.5 rounded-xl">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                billingPeriod === "monthly"
                  ? "bg-emerald-600 text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                billingPeriod === "yearly"
                  ? "bg-emerald-600 text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Yearly Billing
              <span className="ml-1 text-[10px] bg-orange-500 text-white px-1.5 py-0.5 rounded-full font-bold">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => {
            const price = billingPeriod === "monthly" ? plan.priceMonthly : plan.priceYearly;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? "bg-[#0F172A] border-2 border-emerald-500 shadow-2xl shadow-emerald-950/40 scale-105 z-10"
                    : "bg-[#0F172A]/70 border border-slate-700/60 hover:border-slate-600"
                }`}
              >
                {/* Popular Ribbon */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-black px-4 py-1.5 rounded-full text-xs font-black tracking-wider uppercase flex items-center gap-1 shadow-lg">
                    <Flame size={12} className="fill-black" /> Most Popular
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-sm text-slate-400 mb-6">{plan.description}</p>

                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-slate-400 text-lg font-semibold">₹</span>
                    <span className="text-4xl sm:text-5xl font-black text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      {price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-slate-400 text-sm font-medium">/ month</span>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-slate-700/60 mb-8" />

                  {/* Features List */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mt-0.5 shrink-0">
                          <Check size={12} strokeWidth={3} />
                        </span>
                        <span className="text-sm text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant={plan.popular ? "primary" : "secondary"}
                  onClick={scrollToContact}
                  className="w-full justify-center mt-auto"
                >
                  {plan.cta}
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
