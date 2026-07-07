import { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/constants";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Technologies | ${COMPANY_INFO.name}`,
  description: `Explore the technology stack used by ${COMPANY_INFO.name}. We use cutting-edge technologies including React, Next.js, Python, AI/ML, Cloud, and more.`,
};

export default function TechnologiesPage() {
  const categories = [
    {
      name: "Frontend",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      color: "from-blue-600 to-cyan-600",
    },
    {
      name: "Backend",
      technologies: ["Node.js", "Python", "Django", "FastAPI"],
      color: "from-purple-600 to-pink-600",
    },
    {
      name: "AI & ML",
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "LangChain"],
      color: "from-green-600 to-emerald-600",
    },
    {
      name: "Database",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "GraphQL"],
      color: "from-orange-600 to-red-600",
    },
    {
      name: "Cloud & DevOps",
      technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"],
      color: "from-indigo-600 to-blue-600",
    },
    {
      name: "Mobile",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
      color: "from-pink-600 to-rose-600",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                Technology <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Stack</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8">
                We leverage cutting-edge technologies to build robust, scalable, and future-ready solutions.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, idx) => (
              <ScrollReveal key={category.name} direction="up" delay={idx * 0.1}>
                <div className="h-full p-6 md:p-8 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 bg-white">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mb-6">
                    <Cpu className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
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
                Ready to Build with Modern Tech?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Let's discuss which technologies are best suited for your project.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                >
                  Get in Touch
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