import { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Cookie Policy | ${COMPANY_INFO.name}`,
  description: `Cookie policy for ${COMPANY_INFO.name}. Learn about how we use cookies and similar technologies on our website.`,
};

export default function CookiePolicyPage() {
  return (
    <main className="pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Cookie Policy</h1>
          
          <div className="text-slate-600 space-y-6">
            <p>
              <strong>Last Updated:</strong> {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the website owners.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. How We Use Cookies</h2>
            <p>{COMPANY_INFO.name} uses cookies for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly. These cannot be disabled.</li>
              <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website by collecting anonymous information.</li>
              <li><strong>Functionality Cookies:</strong> Allow the website to provide enhanced functionality and personalization.</li>
              <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and track the effectiveness of marketing campaigns.</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Types of Cookies We Use</h2>
            <p><strong>Session Cookies:</strong> Temporary cookies that are deleted when you close your browser.</p>
            <p><strong>Persistent Cookies:</strong> Cookies that remain on your device for a specified period or until you delete them.</p>
            <p><strong>First-Party Cookies:</strong> Cookies set by our website.</p>
            <p><strong>Third-Party Cookies:</strong> Cookies set by external services we use, such as analytics and advertising partners.</p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Third-Party Cookies</h2>
            <p>
              We may use third-party services that set cookies on your device. These may include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Google Analytics for website analytics</li>
              <li>Marketing and advertising platforms</li>
              <li>Social media integration services</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Managing Cookies</h2>
            <p>
              You can control and manage cookies in various ways. Most browsers allow you to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>View and delete cookies</li>
              <li>Block cookies from specific websites</li>
              <li>Block third-party cookies</li>
              <li>Clear all cookies when you close your browser</li>
            </ul>
            <p>
              Please note that removing or blocking cookies may negatively impact your user experience and some features may no longer function properly.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in technology or regulations. We encourage you to review this policy periodically.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">7. Contact Us</h2>
            <p>If you have questions about our use of cookies, please contact us:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Email:</strong> {COMPANY_INFO.email.support}</li>
              <li><strong>Phone:</strong> {COMPANY_INFO.phone}</li>
              <li><strong>Address:</strong> {COMPANY_INFO.address.street}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} - {COMPANY_INFO.address.pincode}</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}