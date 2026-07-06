"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CheckCircle2, Zap, Shield, Clock, Users, Award } from "lucide-react";

const features = [
  {
    icon: CheckCircle2,
    title: "Quality Assurance",
    description: "Rigorous testing and quality checks ensure flawless, production-ready solutions.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Agile methodology and optimized processes for on-time project delivery.",
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description: "Enterprise-grade security standards and compliance with global regulations.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance for your applications.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled professionals with years of experience in cutting-edge technologies.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Successfully delivered 50+ projects across various industries worldwide.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Us</span>
            </h2>
            <p className="text-lg text-slate-600">
              We deliver excellence through innovation, expertise, and unwavering commitment to our clients.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <ScrollReveal key={feature.title} direction="up" delay={idx * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white rounded-xl p-8 border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 h-full"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mb-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}