import { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Robots.txt | ${COMPANY_INFO.name}`,
};

export async function GET() {
  const baseUrl = "https://lithionixgroup.in";
  
  const robots = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /dashboard/
Disallow: /admin/
Disallow: /private/
Disallow: /checkout-page/
Disallow: /solutions/
Disallow: /industries/
Disallow: /case-studies/
Disallow: /technologies/
Disallow: /careers/
Disallow: /disclaimer/
Disallow: /terms/
Disallow: /refund-policy/
Disallow: /shipping-delivery/

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay
Crawl-delay: 10

# Important pages to index
Allow: /about
Allow: /services
Allow: /portfolio
Allow: /blog
Allow: /contact`;

  return new Response(robots, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}