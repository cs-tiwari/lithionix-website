import { Metadata } from "next";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Sitemap | ${COMPANY_INFO.name}`,
};

export async function GET() {
  const baseUrl = "https://lithionixgroup.in";
  
  const staticPages = [
    { url: baseUrl, priority: 1.0, changefreq: "daily" },
    { url: `${baseUrl}/about`, priority: 0.8, changefreq: "weekly" },
    { url: `${baseUrl}/services`, priority: 0.9, changefreq: "weekly" },
    { url: `${baseUrl}/portfolio`, priority: 0.7, changefreq: "monthly" },
    { url: `${baseUrl}/blog`, priority: 0.6, changefreq: "daily" },
    { url: `${baseUrl}/contact`, priority: 0.8, changefreq: "monthly" },
    { url: `${baseUrl}/privacy-policy`, priority: 0.3, changefreq: "monthly" },
    { url: `${baseUrl}/terms-conditions`, priority: 0.3, changefreq: "monthly" },
    { url: `${baseUrl}/refund-cancellation-policy`, priority: 0.3, changefreq: "monthly" },
    { url: `${baseUrl}/shipping-delivery-policy`, priority: 0.3, changefreq: "monthly" },
    { url: `${baseUrl}/cookie-policy`, priority: 0.3, changefreq: "monthly" },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map(
      (page) => `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}