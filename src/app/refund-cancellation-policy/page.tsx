import { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Refund & Cancellation Policy | ${COMPANY_INFO.name}`,
  description: `Refund and cancellation policy for ${COMPANY_INFO.name}. Learn about our refund process and terms.`,
};

export default function RefundPolicyPage() {
  return (
    <main className="pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Refund & Cancellation Policy</h1>
          
          <div className="text-slate-600 space-y-6">
            <p>
              <strong>Last Updated:</strong> {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Cancellation Policy</h2>
            <p>
              Clients may cancel a project at any time with written notice. Upon cancellation:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>If cancelled within 7 days of project start: Full refund of any upfront payment</li>
              <li>If cancelled after 7 days: Payment will be due for all work completed up to the cancellation date</li>
              <li>No further obligations will be incurred by either party after cancellation</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Refund Eligibility</h2>
            <p>Refunds may be requested in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Project is cancelled as per the cancellation policy</li>
              <li>We fail to deliver agreed-upon services within the specified timeline</li>
              <li>Quality issues are not resolved within a reasonable timeframe after notification</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Refund Process</h2>
            <p>To request a refund:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact us at {COMPANY_INFO.email.support} with your project details</li>
              <li>Provide specific reasons for the refund request</li>
              <li>Allow 5-7 business days for review and response</li>
              <li>Approved refunds will be processed within 10-15 business days</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Non-Refundable Items</h2>
            <p>The following are non-refundable:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Third-party software licenses or services purchased on your behalf</li>
              <li>Work that has been delivered and accepted</li>
              <li>Services rendered beyond the agreed project scope</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Milestone Payments</h2>
            <p>
              For projects with milestone-based payments, each milestone payment is non-refundable once the milestone has been delivered and accepted by the client.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. Dispute Resolution</h2>
            <p>
              If you have concerns about our services, please contact us directly. We are committed to resolving issues amicably and will work with you to find a satisfactory solution before any refund is processed.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">7. Contact Us</h2>
            <p>For refund requests or questions about this policy:</p>
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