import Image from "next/image";
import { COMPANY_INFO, FOOTER_LINKS } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ExternalLink,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/logo.png"
                alt={`${COMPANY_INFO.name} Logo`}
                width={40}
                height={40}
                className="w-10 h-10 object-contain rounded-lg"
              />
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight text-white">
                  {COMPANY_INFO.name}
                </span>
                <span className="text-xs text-slate-400">Software LLP</span>
              </div>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              {COMPANY_INFO.tagline}. We specialize in delivering innovative software solutions that drive business growth and digital transformation.
            </p>
            <div className="flex space-x-3">
              <a
                href={COMPANY_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg bg-white/5 hover:bg-blue-600 text-slate-400 hover:text-white transition-all duration-300"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
              <a
                href={COMPANY_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-lg bg-white/5 hover:bg-blue-600 text-slate-400 hover:text-white transition-all duration-300"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
              <a
                href={COMPANY_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-lg bg-white/5 hover:bg-pink-600 text-slate-400 hover:text-white transition-all duration-300"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
              <a
                href={COMPANY_INFO.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg bg-white/5 hover:bg-slate-700 text-slate-400 hover:text-white transition-all duration-300"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-blue-400 transition-colors text-sm hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-blue-400 transition-colors text-sm hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-blue-400 transition-colors text-sm hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 md:my-12 bg-slate-700/50" />

        {/* Contact Info & Business Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex items-start space-x-3">
            <Mail className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-white">Email</p>
              <a
                href={`mailto:${COMPANY_INFO.email.support}`}
                className="text-sm text-slate-300 hover:text-blue-400 transition-colors"
              >
                {COMPANY_INFO.email.support}
              </a>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Phone className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-white">Phone</p>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="text-sm text-slate-300 hover:text-blue-400 transition-colors"
              >
                {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-white">Address</p>
              <p className="text-sm text-slate-300">
                {COMPANY_INFO.address.street}, {COMPANY_INFO.address.city},{" "}
                {COMPANY_INFO.address.state} - {COMPANY_INFO.address.pincode}
              </p>
            </div>
          </div>
        </div>

        <Separator className="mb-8 bg-slate-700/50" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-slate-400">
            &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <span className="text-xs text-slate-400">
              GST: {COMPANY_INFO.gst}
            </span>
            <span className="text-xs text-slate-400">
              LLPIN: {COMPANY_INFO.llpin}
            </span>
            <div className="flex items-center space-x-1 text-xs text-slate-400">
              <Clock className="h-3 w-3" />
              <span>{COMPANY_INFO.officeHours}</span>
            </div>
          </div>
        </div>

        {/* KYC Compliance Section */}
        <div className="mt-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
          <h3 className="font-semibold text-white mb-4 text-sm">
            Business Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
            <div>
              <span className="block font-medium text-slate-200 mb-1">Company Name</span>
              {COMPANY_INFO.name}
            </div>
            <div>
              <span className="block font-medium text-slate-200 mb-1">GSTIN</span>
              {COMPANY_INFO.gst}
            </div>
            <div>
              <span className="block font-medium text-slate-200 mb-1">LLPIN</span>
              {COMPANY_INFO.llpin}
            </div>
            <div>
              <span className="block font-medium text-slate-200 mb-1">Business Email</span>
              {COMPANY_INFO.email.support}
            </div>
            <div>
              <span className="block font-medium text-slate-200 mb-1">Sales Email</span>
              {COMPANY_INFO.email.sales}
            </div>
            <div>
              <span className="block font-medium text-slate-200 mb-1">Office Hours</span>
              {COMPANY_INFO.officeHours}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}