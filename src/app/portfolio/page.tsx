import { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/constants";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "AI-Powered Healthcare Platform",
    category: "Healthcare",
    description: "Complete digital health platform with AI diagnostics, patient management, and telemedicine features.",
    technologies: ["React", "Node.js", "TensorFlow", "AWS"],
    image: "🏥",
  },
  {
    id: 2,
    title: "E-Learning Management System",
    category: "Education",
    description: "Comprehensive online learning platform with video streaming, assessments, and progress tracking.",
    technologies: ["Next.js", "PostgreSQL", "Redis", "Docker"],
    image: "📚",
  },
  {
    id: 3,
    title: "E-Commerce Analytics Dashboard",
    category: "Retail",
    description: "Real-time analytics and inventory management system for a multi-vendor e-commerce platform.",
    technologies: ["React", "Python", "PostgreSQL", "Kubernetes"],
    image: "🛒",
  },
  {
    id: 4,
    title: "Smart Factory IoT Platform",
    category: "Manufacturing",
    description: "IoT-based monitoring and automation system for industrial equipment and production lines.",
    technologies: ["IoT", "Python", "MQTT", "Grafana"],
    image: "🏭",
  },
  {
    id: 5,
    title: "Digital Banking Solution",
    category: "Finance",
    description: "Secure mobile banking application with biometric authentication and real-time transactions.",
    technologies: ["React Native", "Node.js", "MongoDB", "AWS"],
    image: "🏦",
  },
  {
    id: 6,
    title: "Smart City Management System",
    category: "Government",
    description: "Integrated platform for urban management including traffic, utilities, and citizen services.",
    technologies: ["Vue.js", "Python", "PostgreSQL", "Azure"],
    image: "🏙️",
  },
];

export const metadata: Metadata = {
  title: `Portfolio | ${COMPANY_INFO.name}`,
  description: `Explore our portfolio of successful projects. We have delivered 50+ projects across various industries including healthcare, education, finance, and more.`,
};

export default function PortfolioPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Portfolio</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8">
                Showcasing our best work. Explore successful projects we've delivered for clients across diverse industries.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <ScrollReveal key={project.id} direction="up" delay={idx * 0.1}>
                <div className="h-full rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 bg-white overflow-hidden group">
                  {/* Project Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">
                    {project.image}
                  </div>

                  <div className="p-6">
                    <div className="mb-3">
                      <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-600 text-sm mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-blue-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
                      View Details
                      <ArrowRight className="ml-1 h-4 w-4" />
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
                Ready to Build Something Amazing?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Let's discuss your project and create something exceptional together.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}