import { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/constants";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Users, TrendingUp, Award } from "lucide-react";


const jobOpenings = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    location: "Remote / India",
    type: "Full-time",
    experience: "5+ years",
  },
  {
    id: 2,
    title: "AI/ML Engineer",
    location: "Remote / India",
    type: "Full-time",
    experience: "3+ years",
  },
  {
    id: 3,
    title: "React Native Developer",
    location: "Remote / India",
    type: "Full-time",
    experience: "3+ years",
  },
  {
    id: 4,
    title: "DevOps Engineer",
    location: "Remote / India",
    type: "Full-time",
    experience: "4+ years",
  },
];

const benefits = [
  {
    icon: Briefcase,
    title: "Flexible Work",
    description: "Work from anywhere with flexible hours and remote-first culture.",
  },
  {
    icon: Users,
    title: "Great Team",
    description: "Collaborate with talented professionals who are passionate about technology.",
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description: "Continuous learning, skill development, and career advancement paths.",
  },
  {
    icon: Award,
    title: "Competitive Benefits",
    description: "Attractive compensation, health insurance, and performance bonuses.",
  },
];

export const metadata: Metadata = {
  title: `Careers | ${COMPANY_INFO.name}`,
  description: `Join ${COMPANY_INFO.name}. Explore career opportunities in software development, AI/ML, DevOps, and more.`,
};

export default function CareersPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                Join Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Team</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8">
                Be part of an innovative team that's shaping the future of technology. We're always looking for talented individuals.
              </p>
              <a href="#openings">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                >
                  View Openings
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Why Work <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">With Us</span>
              </h2>
              <p className="text-lg text-slate-600">
                We offer a supportive environment where you can grow, innovate, and make an impact.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <ScrollReveal key={benefit.title} direction="up" delay={idx * 0.1}>
                  <div className="text-center p-6 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="w-14 h-14 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-slate-600">{benefit.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Open <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Positions</span>
              </h2>
              <p className="text-lg text-slate-600">
                Explore our current job openings and find the perfect role for you.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-4">
            {jobOpenings.map((job, idx) => (
              <ScrollReveal key={job.id} direction="up" delay={idx * 0.1}>
                <div className="bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
                        <span>{job.location}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{job.type}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{job.experience}</span>
                      </div>
                    </div>
                    <a href={`mailto:${COMPANY_INFO.email.sales}?subject=Application for ${job.title}`}>
                      <Button
                        className="mt-4 sm:mt-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                      >
                        Apply Now
                      </Button>
                    </a>
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
                Don't See a Perfect Fit?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <a href={`mailto:${COMPANY_INFO.email.sales}?subject=General Application`}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                >
                  Send Resume
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