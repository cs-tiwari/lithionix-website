"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const emailjsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      subject: formData.get("subject") as string,
      service: formData.get("service") as string,
      message: formData.get("message") as string,
    };

    if (!emailjsConfig.serviceId || !emailjsConfig.templateId || !emailjsConfig.publicKey) {
      // Environment variables not configured
      setMessage({ type: "error", text: "Contact form is not configured. Please contact us directly at support@lithionixgroup.in" });
      setIsSubmitting(false);
      return;
    }

    try {
      // Dynamic import to avoid bundling on server
      const emailjs = await import("@emailjs/browser");
      await emailjs.default.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          subject: data.subject,
          service: data.service,
          message: data.message,
        },
        emailjsConfig.publicKey
      );
      setMessage({ type: "success", text: "Thank you for your message! We will get back to you soon." });
      (e.target as HTMLFormElement).reset();
    } catch {
      setMessage({ type: "error", text: "Failed to send message. Please try again or contact us directly at support@lithionixgroup.in" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {message && (
        <div
          className={`p-4 rounded-md text-sm ${
            message.type === "success"
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {message.text}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-slate-900">
            Full Name *
          </label>
          <Input
            id="name"
            name="name"
            placeholder="John Doe"
            required
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-900">
            Email Address *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            required
            className="w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-slate-900">
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91-XXXXXXXXXX"
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium text-slate-900">
            Subject *
          </label>
          <Input
            id="subject"
            name="subject"
            placeholder="Project Inquiry"
            required
            className="w-full"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="service" className="text-sm font-medium text-slate-900">
          Service Interested In
        </label>
        <select
          id="service"
          name="service"
          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="">Select a service</option>
          <option value="web-development">Web Development</option>
          <option value="mobile-app">Mobile App Development</option>
          <option value="ai-ml">AI/ML Solutions</option>
          <option value="cloud">Cloud Solutions</option>
          <option value="erp-crm">ERP/CRM Development</option>
          <option value="consulting">Software Consulting</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-slate-900">
          Message *
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your project..."
          rows={6}
          required
          className="w-full"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}