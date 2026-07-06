import { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/constants";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Eye, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: `About Us | ${COMPANY_INFO.name}`,
  description: `Learn about ${COMPANY_INFO.name}, our mission, vision, and journey. We are a team of passionate technologists dedicated to transforming businesses through innovative software solutions.`,
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Us</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8">
                {COMPANY_INFO.tagline}. We are a team of passionate technologists dedicated to transforming businesses through innovative software solutions.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="text-center p-8 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mb-6">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-slate-600">
                  To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation in the digital age.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="text-center p-8 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mb-6">
                  <Eye className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
                <p className="text-slate-600">
                  To be the global leader in software innovation, recognized for excellence, reliability, and transformative digital solutions.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="text-center p-8 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mb-6">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Values</h3>
                <p className="text-slate-600">
                  Integrity, innovation, excellence, and client success are at the core of everything we do. We build lasting partnerships based on trust.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal direction="up">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-center">
                Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Story</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="prose prose-lg max-w-none text-slate-600 space-y-6">
                <p>
                  {COMPANY_INFO.name} was founded with a vision to bridge the gap between innovative technology and real-world business challenges. Starting as a small team of passionate developers, we have grown into a full-service software development company serving clients across multiple industries.
                </p>
                <p>
                  Our journey has been marked by continuous learning, adaptation, and a commitment to excellence. We have successfully delivered over 50 projects, ranging from simple web applications to complex enterprise-level AI systems. Each project has strengthened our expertise and reinforced our belief in the power of technology to transform businesses.
                </p>
                <p>
                  Today, we specialize in a wide range of services including AI/ML solutions, cloud architecture, full-stack web development, mobile applications, and enterprise software. Our team stays at the forefront of technological advancements, ensuring our clients receive solutions that are not just current, but future-ready.
                </p>
                <p>
                  What sets us apart is our client-centric approach. We don't just write code; we understand your business, align with your goals, and work as an extension of your team. This collaborative approach has resulted in long-term partnerships and numerous success stories.
                </p>
                <p>
                  As we continue to grow, our commitment remains unchanged: to deliver exceptional quality, innovate relentlessly, and create value for our clients. We invite you to join us on this exciting journey of digital transformation.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Let's discuss your project and explore how we can help you achieve your business goals.
              </p>
              <a href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                >
                  Get in Touch
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