import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { MicrosoftClarity } from "@/components/analytics/MicrosoftClarity";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { COMPANY_INFO } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY_INFO.name,
  url: "https://lithionixgroup.in",
  logo: "https://lithionixgroup.in/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    email: COMPANY_INFO.email.support,
    telephone: COMPANY_INFO.phone,
    contactType: "Customer Service",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY_INFO.address.street,
    addressLocality: COMPANY_INFO.address.city,
    addressRegion: COMPANY_INFO.address.state,
    postalCode: COMPANY_INFO.address.pincode,
    addressCountry: COMPANY_INFO.address.country,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: COMPANY_INFO.name,
  image: "https://lithionixgroup.in/logo.png",
  "@id": "https://lithionixgroup.in/#organization",
  url: "https://lithionixgroup.in",
  telephone: COMPANY_INFO.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY_INFO.address.street,
    addressLocality: COMPANY_INFO.address.city,
    addressRegion: COMPANY_INFO.address.state,
    postalCode: COMPANY_INFO.address.pincode,
    addressCountry: COMPANY_INFO.address.country,
  },
  openingHours: "Mo-Sa 09:00-18:00",
  priceRange: "$$",
  description: COMPANY_INFO.tagline,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: COMPANY_INFO.name,
  url: "https://lithionixgroup.in",
  description: COMPANY_INFO.tagline,
  publisher: COMPANY_INFO.name,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://lithionixgroup.in/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: COMPANY_INFO.name,
  description: COMPANY_INFO.tagline,
  url: "https://lithionixgroup.in",
  isPartOf: {
    "@type": "WebSite",
    url: "https://lithionixgroup.in",
    name: COMPANY_INFO.name,
  },
  about: {
    "@type": "Organization",
    name: COMPANY_INFO.name,
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://lithionixgroup.in",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does Lithionix Software LLP offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer a comprehensive range of software development services including Custom Software Development, Web Development, Mobile App Development, AI & Machine Learning solutions, Cloud Services, DevOps, ERP/CRM Development, and more.",
      },
    },
    {
      "@type": "Question",
      name: "How do you ensure project quality?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We follow industry best practices including Agile methodology, continuous testing, code reviews, and automated CI/CD pipelines. Our quality assurance team conducts rigorous testing at every stage of development.",
      },
    },
    {
      "@type": "Question",
      name: "What is your typical project timeline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Project timelines vary based on complexity and scope. A typical web application takes 3-6 months, while enterprise solutions may take 6-12 months. We provide detailed timelines during the planning phase.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide post-launch support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer comprehensive post-launch support and maintenance services including bug fixes, security updates, feature enhancements, and 24/7 technical support to ensure your application runs smoothly.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies do you specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialize in modern technologies including React, Next.js, Node.js, Python, TensorFlow, PyTorch, AWS, Azure, Docker, Kubernetes, and many more. We choose the right tech stack based on your specific requirements.",
      },
    },
    {
      "@type": "Question",
      name: "How do you handle project communication?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We maintain transparent communication through regular status updates, weekly meetings, and dedicated project management tools. You will have direct access to our team throughout the project.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: {
    default: `${COMPANY_INFO.name} - ${COMPANY_INFO.tagline}`,
    template: `%s | ${COMPANY_INFO.name}`,
  },
  description:
    `${COMPANY_INFO.name} is a leading software development company specializing in AI, ML, Cloud Solutions, Web Development, Mobile Apps, and Enterprise Software. Transform your ideas into intelligent digital solutions.`,
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
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://lithionixgroup.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://lithionixgroup.in",
    title: `${COMPANY_INFO.name} - ${COMPANY_INFO.tagline}`,
    description:
      `${COMPANY_INFO.name} is a leading software development company specializing in AI, ML, Cloud Solutions, Web Development, Mobile Apps, and Enterprise Software.`,
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: COMPANY_INFO.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_INFO.name} - ${COMPANY_INFO.tagline}`,
    description:
      `${COMPANY_INFO.name} - Transform your ideas into intelligent digital solutions with our expert software development services.`,
    images: ["/og-image.png"],
    creator: "@lithionix",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <GoogleAnalytics />
        <MicrosoftClarity />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}