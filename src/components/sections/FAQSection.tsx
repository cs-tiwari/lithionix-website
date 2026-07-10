"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sparkles } from "lucide-react";

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
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50/10 to-slate-50 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600/10 border border-blue-400/20 rounded-full mb-6">
                <Sparkles className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-700">Got Questions?</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Find answers to common questions about our services and processes. Can't find what you're looking for? Feel free to reach out.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="max-w-3xl mx-auto">
              <Card className="border-slate-200 shadow-2xl bg-white/80 backdrop-blur-sm relative overflow-hidden">
                {/* Gradient Top Border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600" />
                
                <Accordion className="w-full">
                  {faqs.map((faq, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`} className="border-slate-200/50 px-2">
                      <AccordionTrigger className="text-left hover:no-underline hover:text-blue-600 transition-all duration-300 px-4 py-4 rounded-lg hover:bg-blue-50/50 group">
                        <span className="font-semibold text-slate-900 group-hover:text-blue-700 flex items-center">
                          <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                            {idx + 1}
                          </span>
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-600 px-4 pb-4 pl-16 leading-relaxed">
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
