import { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/constants";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Enterprise Software",
    excerpt: "Exploring how artificial intelligence is revolutionizing business operations and decision-making processes across industries.",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "AI & ML",
    author: "Rajesh Kumar",
  },
  {
    id: 2,
    title: "Building Scalable Cloud Architectures",
    excerpt: "Best practices for designing cloud-native applications that can scale with your business needs and handle millions of users.",
    date: "2025-01-10",
    readTime: "10 min read",
    category: "Cloud",
    author: "Priya Sharma",
  },
  {
    id: 3,
    title: "Why React and Next.js Dominate Modern Web Development",
    excerpt: "Understanding the advantages of modern React frameworks for building high-performance web applications with excellent UX.",
    date: "2025-01-05",
    readTime: "7 min read",
    category: "Web Development",
    author: "Amit Patel",
  },
  {
    id: 4,
    title: "Getting Started with Machine Learning in Production",
    excerpt: "A comprehensive guide to deploying machine learning models in production environments with best practices.",
    date: "2024-12-28",
    readTime: "12 min read",
    category: "AI & ML",
    author: "Neha Singh",
  },
  {
    id: 5,
    title: "The Complete Guide to API Design",
    excerpt: "Learn how to design RESTful and GraphQL APIs that are scalable, maintainable, and developer-friendly.",
    date: "2024-12-20",
    readTime: "9 min read",
    category: "Backend",
    author: "Vikash Gupta",
  },
  {
    id: 6,
    title: "DevOps Practices for Modern Development Teams",
    excerpt: "Implementing CI/CD pipelines, infrastructure as code, and monitoring for faster and more reliable deployments.",
    date: "2024-12-15",
    readTime: "11 min read",
    category: "DevOps",
    author: "Sneha Reddy",
  },
];

export const metadata: Metadata = {
  title: `Blog | ${COMPANY_INFO.name}`,
  description: `Stay updated with the latest insights, tutorials, and news from ${COMPANY_INFO.name}. Expert articles on AI, ML, web development, and software engineering.`,
};

export default function BlogPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Blog</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8">
                Insights, tutorials, and thoughts on technology, software development, and digital innovation.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <ScrollReveal key={post.id} direction="up" delay={idx * 0.1}>
                <div className="h-full rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 bg-white overflow-hidden group cursor-pointer">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center text-slate-500 text-xs">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
                          {post.author.charAt(0)}
                        </div>
                        <div>
                          <p className="text-xs font-medium text-slate-900">{post.author}</p>
                          <div className="flex items-center text-xs text-slate-500">
                            <Calendar className="h-3 w-3 mr-1" />
                            {new Date(post.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Stay Updated
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Subscribe to our newsletter to get the latest articles and insights delivered to your inbox.
              </p>
              <a href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                >
                  Subscribe Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}