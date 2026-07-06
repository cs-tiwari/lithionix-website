"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import {
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
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-lg text-slate-600">
              Comprehensive software solutions tailored to your business needs. From AI to cloud, we cover every aspect of modern technology.
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
                  <Card className="h-full border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 group cursor-pointer">
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                        {Icon && <Icon className="h-6 w-6" />}
                      </div>
                      <CardTitle className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 leading-relaxed">
                        {service.description}
                      </p>
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