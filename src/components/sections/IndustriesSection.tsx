"use client";

import { motion } from "framer-motion";
import { INDUSTRIES } from "@/lib/constants";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import {
  HeartPulse,
  GraduationCap,
  Building2,
  ShoppingCart,
  Factory,
  Banknote,
  Truck,
  Radio,
  Hospital,
  UtensilsCrossed,
  Home,
} from "lucide-react";

const iconMap = {
  HeartPulse,
  GraduationCap,
  Building2,
  ShoppingCart,
  Factory,
  Banknote,
  Truck,
  Radio,
  Hospital,
  UtensilsCrossed,
  Home,
};

export function IndustriesSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Industries <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">We Serve</span>
            </h2>
            <p className="text-lg text-slate-600">
              Delivering specialized software solutions across diverse industries with deep domain expertise.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {INDUSTRIES.map((industry, idx) => {
            const Icon = iconMap[industry.icon as keyof typeof iconMap];
            return (
              <ScrollReveal key={industry.id} direction="up" delay={idx * 0.05}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 text-center group cursor-pointer h-full">
                    <div className="w-14 h-14 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                      {Icon && <Icon className="h-7 w-7" />}
                    </div>
                    <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {industry.title}
                    </h3>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}