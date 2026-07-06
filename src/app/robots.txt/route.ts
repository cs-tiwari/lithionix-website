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

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay
Crawl-delay: 10

# Important pages to index
Allow: /about
Allow: /services
Allow: /solutions
Allow: /industries
Allow: /portfolio
Allow: /case-studies
Allow: /technologies
Allow: /careers
Allow: /blog
Allow: /contact`;

  return new Response(robots, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}