import { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: `404 - Page Not Found | ${COMPANY_INFO.name}`,
  description: "Page not found. Return to homepage.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-4">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            Page Not Found
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
            >
              Go Back Home
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}