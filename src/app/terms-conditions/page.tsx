import { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${COMPANY_INFO.name}`,
  description: `Terms and conditions for ${COMPANY_INFO.name}. Please read these terms carefully before using our services.`,
};

export default function TermsPage() {
  return (
    <main className="pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Terms & Conditions</h1>
          
          <div className="text-slate-600 space-y-6">
            <p>
              <strong>Last Updated:</strong> {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the services of {COMPANY_INFO.name}, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Services</h2>
            <p>
              {COMPANY_INFO.name} provides software development services including but not limited to web development, mobile app development, AI/ML solutions, cloud services, and consulting. The specific scope of services will be outlined in individual project agreements.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Client Responsibilities</h2>
            <p>Clients are expected to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete information necessary for project execution</li>
              <li>Respond to inquiries and provide feedback in a timely manner</li>
              <li>Make payments according to the agreed schedule</li>
              <li>Not use our services for any illegal or unauthorized purpose</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Intellectual Property</h2>
            <p>
              Upon full payment, clients receive ownership of custom code and deliverables created specifically for their project. {COMPANY_INFO.name} retains the right to use general methodologies, frameworks, and knowledge gained during the project.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Payment Terms</h2>
            <p>
              Payment terms will be specified in project proposals. Typically, projects require an upfront deposit, with subsequent payments tied to milestones. Late payments may incur additional charges.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. Confidentiality</h2>
            <p>
              Both parties agree to maintain confidentiality of proprietary information shared during the course of the project. This obligation survives termination of the agreement.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">7. Limitation of Liability</h2>
            <p>
              {COMPANY_INFO.name} shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability shall not exceed the total amount paid by the client for the specific service giving rise to the claim.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">8. Termination</h2>
            <p>
              Either party may terminate the agreement with written notice. In case of termination by the client, payment will be due for all work completed up to the termination date.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">9. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the jurisdiction of courts in India.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">10. Contact Information</h2>
            <p>For questions about these Terms & Conditions, please contact us:</p>
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