import { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Shipping & Delivery Policy | ${COMPANY_INFO.name}`,
  description: `Shipping and delivery policy for ${COMPANY_INFO.name}. Information about service delivery timelines.`,
};

export default function ShippingDeliveryPage() {
  return (
    <main className="pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Shipping & Delivery Policy</h1>
          
          <div className="text-slate-600 space-y-6">
            <p>
              <strong>Last Updated:</strong> {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Digital Services Delivery</h2>
            <p>
              {COMPANY_INFO.name} provides digital software development services. There are no physical products to ship. Our services include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Custom software development and deployment</li>
              <li>Web and mobile application development</li>
              <li>AI/ML model development and integration</li>
              <li>Cloud infrastructure setup and configuration</li>
              <li>Consulting and technical documentation</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Project Timeline</h2>
            <p>
              Project delivery timelines vary based on complexity and scope. Typical timelines are:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Small Projects:</strong> 2-4 weeks</li>
              <li><strong>Medium Projects:</strong> 1-3 months</li>
              <li><strong>Large Projects:</strong> 3-6 months</li>
              <li><strong>Enterprise Solutions:</strong> 6+ months</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Milestone-Based Delivery</h2>
            <p>
              Most projects follow a milestone-based delivery approach:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Project kickoff and requirements gathering</li>
              <li>Design and prototype approval</li>
              <li>Development sprints with regular demos</li>
              <li>Testing and quality assurance</li>
              <li>Deployment and launch</li>
              <li>Post-launch support and maintenance</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Digital Delivery Methods</h2>
            <p>Deliverables are provided through:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Source code repositories (GitHub, GitLab, etc.)</li>
              <li>Cloud deployment and infrastructure access</li>
              <li>Comprehensive documentation and technical specifications</li>
              <li>Video tutorials and training materials</li>
              <li>Email communications and project management tools</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Service Availability</h2>
            <p>
              Our services are available worldwide. Digital delivery ensures instant access regardless of your location.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. Delays and Extensions</h2>
            <p>
              Project timelines may be extended due to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Change requests by the client beyond original scope</li>
              <li>Delayed feedback or approvals from the client</li>
              <li>Technical challenges requiring additional time</li>
              <li>Force majeure events beyond our control</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">7. Support and Maintenance</h2>
            <p>
              Post-delivery support is provided as per the maintenance agreement. Standard support includes bug fixes and minor updates. Major feature enhancements may require a separate agreement.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">8. Contact Us</h2>
            <p>For questions about delivery timelines or service delivery:</p>
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