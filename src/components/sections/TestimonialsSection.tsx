"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CTO, TechVision Pvt Ltd",
    content: "Lithionix transformed our business with their excellent AI solutions. Their team's expertise and dedication exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "CEO, HealthCare Plus",
    content: "Outstanding work on our healthcare management system. The attention to detail and user experience is remarkable.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "Founder, EduLearn",
    content: "Professional team, timely delivery, and exceptional quality. They understood our vision and brought it to life perfectly.",
    rating: 5,
  },
];

  export function TestimonialsSection() {
    return (
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-50 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600/10 border border-blue-400/20 rounded-full mb-6">
                <Sparkles className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-700">Testimonials</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                What Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Clients Say</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Don't just take our word for it. Here's what our clients have to say about working with us.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="h-full border-slate-200 hover:border-blue-400 shadow-lg hover:shadow-2xl transition-all duration-300 relative bg-white/80 backdrop-blur-sm overflow-hidden group">
                    {/* Hover Gradient Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Gradient Top Border */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                    <CardContent className="pt-8 relative">
                      {/* Quote Icon */}
                      <div className="absolute top-6 right-6 text-blue-600/10 group-hover:text-blue-600/20 transition-colors">
                        <Quote className="h-12 w-12" />
                      </div>

                      {/* Stars */}
                      <div className="flex space-x-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>

                      {/* Content */}
                      <p className="text-slate-700 mb-6 leading-relaxed relative z-10">
                        "{testimonial.content}"
                      </p>

                      {/* Author */}
                      <div className="flex items-center space-x-3 pt-4 border-t border-slate-100">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-semibold shadow-lg shadow-blue-600/30">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900 text-sm">
                            {testimonial.name}
                          </p>
                          <p className="text-xs text-slate-600">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    );
  }
