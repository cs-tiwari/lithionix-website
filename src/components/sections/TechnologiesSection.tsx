"use client";

import { motion } from "framer-motion";
import { TECHNOLOGIES } from "@/lib/constants";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function TechnologiesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Technology <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Stack</span>
            </h2>
            <p className="text-lg text-slate-600">
              We leverage cutting-edge technologies to build robust, scalable, and future-ready solutions.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-6xl mx-auto">
            {TECHNOLOGIES.map((tech, idx) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.03, duration: 0.3 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="px-4 py-2 md:px-6 md:py-3 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all duration-300 cursor-default"
              >
                <span className="text-sm md:text-base font-medium text-slate-700 hover:text-blue-600 transition-colors">
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}