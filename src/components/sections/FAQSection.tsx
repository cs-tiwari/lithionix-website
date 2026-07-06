"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does Lithionix Software LLP offer?",
    answer: "We offer a comprehensive range of software development services including Custom Software Development, Web Development, Mobile App Development, AI & Machine Learning solutions, Cloud Services, DevOps, ERP/CRM Development, and more.",
  },
  {
    question: "How do you ensure project quality?",
    answer: "We follow industry best practices including Agile methodology, continuous testing, code reviews, and automated CI/CD pipelines. Our quality assurance team conducts rigorous testing at every stage of development.",
  },
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary based on complexity and scope. A typical web application takes 3-6 months, while enterprise solutions may take 6-12 months. We provide detailed timelines during the planning phase.",
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Yes, we offer comprehensive post-launch support and maintenance services including bug fixes, security updates, feature enhancements, and 24/7 technical support to ensure your application runs smoothly.",
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in modern technologies including React, Next.js, Node.js, Python, TensorFlow, PyTorch, AWS, Azure, Docker, Kubernetes, and many more. We choose the right tech stack based on your specific requirements.",
  },
  {
    question: "How do you handle project communication?",
    answer: "We maintain transparent communication through regular status updates, weekly meetings, and dedicated project management tools. You'll have direct access to our team throughout the project.",
  },
];

export function FAQSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-lg text-slate-600">
              Find answers to common questions about our services and processes.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <Card className="border-slate-200 shadow-lg">
              <Accordion className="w-full">
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-slate-200">
                    <AccordionTrigger className="text-left hover:no-underline hover:text-blue-600 transition-colors px-6">
                      <span className="font-semibold text-slate-900">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 px-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}