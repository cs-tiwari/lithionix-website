import { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/constants";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";
import Link from "next/link";

const caseStudies = [
  {
    id: 1,
    client: "TechVision Pvt Ltd",
    industry: "Technology",
    challenge: "Needed an AI-powered solution to automate their customer support and reduce response time.",
    solution: "Developed a custom NLP-based chatbot with 95% accuracy in understanding customer queries.",
    results: ["60% reduction in support tickets", "24/7 availability", "90% customer satisfaction"],
    metrics: { value: 60, suffix: "%", label: "Cost Reduction" },
  },
  {
    id: 2,
    client: "HealthCare Plus",
    industry: "Healthcare",
    challenge: "Manual patient record management causing delays and potential errors.",
    solution: "Implemented a comprehensive EHR system with AI-assisted diagnosis support.",
    results: ["50% faster patient processing", "Zero data entry errors", "HIPAA compliant"],
    metrics: { value: 50, suffix: "%", label: "Time Saved" },
  },
  {
    id: 3,
    client: "EduLearn Platform",
    industry: "Education",
    challenge: "Low student engagement and poor learning outcome tracking.",
    solution: "Built an adaptive learning platform with personalized content and analytics.",
    results: ["85% increase in engagement", "40% better retention", "10k+ active users"],
    metrics: { value: 85, suffix: "%", label: "Engagement Increase" },
  },
];

export const metadata: Metadata = {
  title: `Case Studies | ${COMPANY_INFO.name}`,
  description: `Explore our case studies and success stories. See how we've helped businesses transform through innovative software solutions.`,
};

export default function CaseStudiesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                Case <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Studies</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8">
                Real-world success stories. Discover how we've helped businesses achieve their goals through technology.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, idx) => (
              <ScrollReveal key={study.id} direction="up" delay={idx * 0.1}>
                <div className="bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="p-8 md:p-12">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                      <div>
                        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-3 inline-block">
                          {study.industry}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                          {study.client}
                        </h3>
                      </div>
                      <div className="mt-4 md:mt-0 text-center md:text-right">
                        <div className="text-3xl font-bold text-blue-600">
                          {study.metrics.value}{study.metrics.suffix}
                        </div>
                        <div className="text-sm text-slate-600">{study.metrics.label}</div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Challenge</h4>
                        <p className="text-slate-600 text-sm">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Solution</h4>
                        <p className="text-slate-600 text-sm">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((result) => (
                            <li key={result} className="flex items-start space-x-2">
                              <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-slate-600">{result}</span>
                            </li>
                          ))}
                        </ul>
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
                Ready to Create Your Success Story?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Let's discuss how we can help you achieve similar results for your business.
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