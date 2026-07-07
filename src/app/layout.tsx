import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
    google: "google-site-verification-code",
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}