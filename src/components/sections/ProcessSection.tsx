"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-lg text-slate-600">
              A proven methodology that ensures successful project delivery from concept to launch.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {PROCESS_STEPS.map((step, idx) => (
              <ScrollReveal key={step.step} direction="up" delay={idx * 0.15}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative"
                >
                  <div className="bg-white rounded-xl p-8 border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 h-full relative z-10">
                    {/* Step Number */}
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6 mx-auto lg:mx-0">
                      {step.step}
                    </div>

                    <h3 className="text-xl font-semibold text-slate-900 mb-3 text-center lg:text-left">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-center lg:text-left">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}