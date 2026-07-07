import { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/constants";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Solutions | ${COMPANY_INFO.name}`,
  description: `Industry-specific software solutions by ${COMPANY_INFO.name}. Custom solutions for healthcare, education, finance, retail, and more.`,
};

export default function SolutionsPage() {
  const solutions = [
    {
      title: "Digital Transformation",
      description: "End-to-end digital transformation solutions to modernize your business processes and accelerate growth.",
      benefits: ["Process Automation", "Legacy System Migration", "Cloud Integration", "Data Analytics"],
    },
    {
      title: "Enterprise Solutions",
      description: "Scalable enterprise software solutions designed to handle complex business operations efficiently.",
      benefits: ["ERP Systems", "CRM Solutions", "HR Management", "Business Intelligence"],
    },
    {
      title: "AI-Powered Solutions",
      description: "Leverage artificial intelligence and machine learning to gain insights and automate decision-making.",
      benefits: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Recommendation Systems"],
    },
    {
      title: "Cloud & DevOps",
      description: "Comprehensive cloud solutions and DevOps practices for agile development and seamless deployment.",
      benefits: ["Cloud Migration", "CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Logging"],
    },
    {
      title: "Mobile-First Solutions",
      description: "Native and cross-platform mobile applications that provide exceptional user experiences.",
      benefits: ["iOS & Android Apps", "React Native", "Flutter Development", "Mobile Strategy"],
    },
    {
      title: "Data & Analytics",
      description: "Turn your data into actionable insights with our data engineering and analytics solutions.",
      benefits: ["Data Lakes", "Real-Time Analytics", "Business Intelligence", "Data Visualization"],
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
                Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Solutions</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8">
                Industry-specific solutions designed to address your unique business challenges and drive measurable results.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, idx) => (
              <ScrollReveal key={solution.title} direction="up" delay={idx * 0.1}>
                <div className="h-full p-6 md:p-8 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 bg-white">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mb-6">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    {solution.description}
                  </p>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
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
                Need a Custom Solution?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                We understand that every business is unique. Let's discuss how we can tailor our solutions to meet your specific needs.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                >
                  Contact Us
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