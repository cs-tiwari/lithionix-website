import { Metadata } from "next";
import { COMPANY_INFO, INDUSTRIES } from "@/lib/constants";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, HeartPulse, GraduationCap, Building2, ShoppingCart, Factory, Banknote, Truck, Radio, Hospital, UtensilsCrossed, Home } from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  HeartPulse,
  GraduationCap,
  Building2,
  ShoppingCart,
  Factory,
  Banknote,
  Truck,
  Radio,
  Hospital,
  UtensilsCrossed,
  Home,
};

export const metadata: Metadata = {
  title: `Industries | ${COMPANY_INFO.name}`,
  description: `Industry-specific software solutions by ${COMPANY_INFO.name}. Serving healthcare, education, finance, retail, manufacturing, and more.`,
};

export default function IndustriesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                Industries <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">We Serve</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8">
                Deep domain expertise across diverse industries. We deliver tailored solutions that understand your unique challenges.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                >
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((industry, idx) => {
              const Icon = iconMap[industry.icon];
              return (
                <ScrollReveal key={industry.id} direction="up" delay={idx * 0.05}>
                  <div className="h-full p-6 md:p-8 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 bg-white group cursor-pointer">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                      {Icon && <Icon className="h-7 w-7" />}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-slate-600">
                      Custom software solutions designed specifically for the {industry.title} industry.
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Ready to Transform Your Industry?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Let's discuss how we can help you leverage technology to stay ahead in your industry.
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