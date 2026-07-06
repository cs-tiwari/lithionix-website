import { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/constants";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: `Contact Us | ${COMPANY_INFO.name}`,
  description: `Get in touch with ${COMPANY_INFO.name}. Contact us for software development services, consultations, and support.`,
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                Contact <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Us</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8">
                Have a project in mind? Let's discuss how we can help you achieve your goals.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <ScrollReveal direction="right">
                <Card className="border-slate-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-6">Get in Touch</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Mail className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-slate-900 text-sm">Email</p>
                          <a href={`mailto:${COMPANY_INFO.email.support}`} className="text-sm text-slate-600 hover:text-blue-600 transition-colors">
                            {COMPANY_INFO.email.support}
                          </a>
                          <p className="text-xs text-slate-500 mt-1">Support</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Mail className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-slate-900 text-sm">Sales</p>
                          <a href={`mailto:${COMPANY_INFO.email.sales}`} className="text-sm text-slate-600 hover:text-blue-600 transition-colors">
                            {COMPANY_INFO.email.sales}
                          </a>
                          <p className="text-xs text-slate-500 mt-1">Sales Inquiries</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Phone className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-slate-900 text-sm">Phone</p>
                          <a href={`tel:${COMPANY_INFO.phone}`} className="text-sm text-slate-600 hover:text-blue-600 transition-colors">
                            {COMPANY_INFO.phone}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-slate-900 text-sm">Address</p>
                          <p className="text-sm text-slate-600">
                            {COMPANY_INFO.address.street}, {COMPANY_INFO.address.city},{" "}
                            {COMPANY_INFO.address.state} - {COMPANY_INFO.address.pincode}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Clock className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-slate-900 text-sm">Office Hours</p>
                          <p className="text-sm text-slate-600">{COMPANY_INFO.officeHours}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="left">
                <Card className="border-slate-200 shadow-lg">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h3>
                    <ContactForm />
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="w-full h-96 bg-slate-200 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-600 font-medium">Google Maps Integration</p>
                <p className="text-sm text-slate-500">Address: {COMPANY_INFO.address.street}, {COMPANY_INFO.address.city}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
