import { Metadata } from "next";
import {
  HeroSection,
  ServicesSection,
  IndustriesSection,
  TechnologiesSection,
  WhyChooseUs,
  ProcessSection,
  TestimonialsSection,
  LatestBlogsSection,
  CTASection,
  FAQSection,
} from "@/components/sections";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${COMPANY_INFO.name} - ${COMPANY_INFO.tagline}`,
  description: `${COMPANY_INFO.name} is a leading software development company specializing in AI, ML, Cloud Solutions, Web Development, Mobile Apps, and Enterprise Software. Transform your ideas into intelligent digital solutions.`,
  keywords: [
    "software development",
    "web development",
    "mobile app development",
    "AI solutions",
    "machine learning",
    "generative AI",
    "LLM development",
    "RAG applications",
    "chatbot development",
    "computer vision",
    "ERP development",
    "CRM development",
    "SaaS development",
    "cloud solutions",
    "DevOps",
    "MLOps",
    "data engineering",
    "API development",
    "UI/UX design",
    "software consulting",
    "Lithionix Software",
    "Lithionix Software LLP",
    "software company India",
    "enterprise software",
    "digital transformation",
  ],
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <IndustriesSection />
      <TechnologiesSection />
      <WhyChooseUs />
      <ProcessSection />
      <TestimonialsSection />
      <LatestBlogsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}