"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import {
  ArrowRight,
  Code2,
  Globe,
  Smartphone,
  Brain,
  TrendingUp,
  Sparkles,
  MessageSquare,
  Database,
  Bot,
  Eye,
  Scan,
  Package,
  Users,
  Cloud,
  CloudCog,
  GitBranch,
  Workflow,
  BarChart3,
  Puzzle,
  Palette,
  Lightbulb,
} from "lucide-react";

const iconMap = {
  Code2,
  Globe,
  Smartphone,
  Brain,
  TrendingUp,
  Sparkles,
  MessageSquare,
  Database,
  Bot,
  Eye,
  Scan,
  Package,
  Users,
  Cloud,
  CloudCog,
  GitBranch,
  Workflow,
  BarChart3,
  Puzzle,
  Palette,
  Lightbulb,
};

  export function ServicesSection() {
    return (
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-50 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.03]" />
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600/10 border border-blue-400/20 rounded-full mb-6">
                <Sparkles className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-700">What We Offer</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Our Premium <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Comprehensive software solutions tailored to your business needs. From AI to cloud, we cover every aspect of modern technology with expertise and innovation.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {SERVICES.map((service, idx) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              return (
                <ScrollReveal key={service.id} direction="up" delay={idx * 0.05}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="h-full border-slate-200 hover:border-blue-400 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer bg-white/80 backdrop-blur-sm relative overflow-hidden">
                      {/* Hover Gradient Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <CardHeader className="relative">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-blue-600/30">
                          {Icon && <Icon className="h-7 w-7" />}
                        </div>
                        <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="relative">
                        <p className="text-slate-600 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="mt-4 flex items-center text-blue-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Learn more
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
