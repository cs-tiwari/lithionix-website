"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const blogs = [
  {
    title: "The Future of AI in Enterprise Software",
    excerpt: "Exploring how artificial intelligence is revolutionizing business operations and decision-making processes.",
    date: "2025-01-15",
    category: "AI & ML",
  },
  {
    title: "Building Scalable Cloud Architectures",
    excerpt: "Best practices for designing cloud-native applications that can scale with your business needs.",
    date: "2025-01-10",
    category: "Cloud",
  },
  {
    title: "Why React and Next.js Dominate Modern Web Development",
    excerpt: "Understanding the advantages of modern React frameworks for building high-performance web applications.",
    date: "2025-01-05",
    category: "Web Development",
  },
];

export function LatestBlogsSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Latest from Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Blog</span>
            </h2>
            <p className="text-lg text-slate-600">
              Stay updated with the latest insights, trends, and innovations in technology.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {blog.category}
                      </span>
                      <div className="flex items-center text-slate-500 text-xs">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(blog.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {blog.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4 line-clamp-3">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center text-blue-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={0.3}>
          <div className="text-center mt-12">
            <a href="/blog">
              <Button
                variant="outline"
                size="lg"
                className="border-slate-300 text-slate-700 hover:bg-slate-50"
              >
                View All Posts
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}