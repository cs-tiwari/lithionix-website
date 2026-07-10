import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/terms",
        destination: "/terms-conditions",
        permanent: true,
      },
      {
        source: "/refund-policy",
        destination: "/refund-cancellation-policy",
        permanent: true,
      },
      {
        source: "/shipping-delivery",
        destination: "/shipping-delivery-policy",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
