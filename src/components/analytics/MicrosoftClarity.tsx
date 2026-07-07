"use client";

import Script from "next/script";

export function MicrosoftClarity() {
  const projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

  if (!projectId || process.env.NODE_ENV === "development") {
    return null;
  }

  return (
    <Script
      src={`https://cdn.clarity.ms/tag/${projectId}`}
      strategy="afterInteractive"
    />
  );
}