import { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Disclaimer | ${COMPANY_INFO.name}`,
  description: `Disclaimer for ${COMPANY_INFO.name}. Important information about the use of our website and services.`,
};

export default function DisclaimerPage() {
  return (
    <main className="pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Disclaimer</h1>
          
          <div className="text-slate-600 space-y-6">
            <p>
              <strong>Last Updated:</strong> {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. No Professional Advice</h2>
            <p>
              The information provided on this website is for general informational purposes only. {COMPANY_INFO.name} does not warrant the accuracy, completeness, or usefulness of this information. Any reliance you place on such information is strictly at your own risk.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. No Warranty</h2>
            <p>
              This website and its content are provided "as is" without warranty of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Limitation of Liability</h2>
            <p>
              In no event shall {COMPANY_INFO.name}, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. External Links</h2>
            <p>
              Our website may contain links to third-party websites or services that are not owned or controlled by {COMPANY_INFO.name}. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Project Results</h2>
            <p>
              While we strive to deliver high-quality solutions, we cannot guarantee specific results or outcomes from our services. Project success depends on various factors including client collaboration, requirements clarity, and market conditions.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. Technology Changes</h2>
            <p>
              The technology landscape evolves rapidly. Information about technologies, frameworks, and best practices on our website may become outdated. We recommend consulting with our team for the most current advice.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">7. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and images, is the property of {COMPANY_INFO.name} and is protected by intellectual property laws. Unauthorized use is prohibited.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">8. GOVERNING LAW</h2>
            <p>
              This disclaimer shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in India.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">9. Changes to This Disclaimer</h2>
            <p>
              We reserve the right to make changes to this disclaimer at any time. We will notify users of any changes by updating the modification date at the top of this page.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">10. Contact Us</h2>
            <p>If you have any questions about this Disclaimer, please contact us:</p>
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