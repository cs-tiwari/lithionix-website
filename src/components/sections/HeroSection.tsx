"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { COMPANY_INFO, STATS } from "@/lib/constants";
import { TypingAnimation } from "@/components/animations/TypingAnimation";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/button";
import { CountAnimation } from "@/components/animations/CountAnimation";

const phrases = [
  "Custom Software Development",
  "AI & Machine Learning Solutions",
  "Web & Mobile Applications",
  "Cloud & DevOps Services",
  "Enterprise Software Solutions",
];

export function HeroSection() {
  return (
    <section className="relative pt-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-32 md:pb-36">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <ScrollReveal direction="up">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600/10 border border-blue-400/20 rounded-full">
                <Sparkles className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-blue-300 font-medium">
                  Leading Software Innovation
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                {COMPANY_INFO.name}
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="text-xl sm:text-2xl md:text-3xl text-blue-200 font-medium h-[2em] flex items-center">
                <TypingAnimation phrases={phrases} />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl">
                {COMPANY_INFO.tagline}. We specialize in delivering cutting-edge software solutions 
                that transform businesses and drive digital innovation.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact">
                  <Button
                    size="lg"
                    className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <a href="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white w-full sm:w-auto"
                  >
                    Explore Services
                  </Button>
                </a>
              </div>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal direction="up" delay={0.5}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-700/50">
                {STATS.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                      <CountAnimation target={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column - Visual */}
          <ScrollReveal direction="left" delay={0.3}>
            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {/* Abstract Visual Representation */}
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Central Code Block */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-8"
                  animate={{
                    rotateY: [0, 5, 0],
                    rotateX: [0, -5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="bg-slate-900 rounded-lg p-6 font-mono text-sm shadow-inner">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="space-y-2 text-slate-300">
                      <div>
                        <span className="text-purple-400">const</span>{" "}
                        <span className="text-blue-400">solution</span> = {"{"}
                      </div>
                      <div className="pl-4">
                        <span className="text-green-400">innovation</span>:{" "}
                        <span className="text-yellow-300">"AI-Powered"</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-green-400">technology</span>:{" "}
                        <span className="text-yellow-300">"Cutting-edge"</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-green-400">results</span>:{" "}
                        <span className="text-yellow-300">"Exceptional"</span>
                      </div>
                      <div>{"}"};</div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-white rounded-lg shadow-xl p-4"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="text-2xl mb-1">🚀</div>
                  <div className="text-xs font-semibold text-slate-700">Fast Delivery</div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-xl p-4"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="text-2xl mb-1">⚡</div>
                  <div className="text-xs font-semibold text-slate-700">High Performance</div>
                </motion.div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}