import type { Metadata } from "next";
import { siteConfig } from "@/config";
import { getSeoConfig } from "@/config/seo";
import { PERSONAL_INFO } from "@/constants/personal-info";
import { defaultLocale } from "@/types";
import { RootPageClient } from "./page-client";

/**
 * Root Page Metadata
 *
 * This metadata applies ONLY to the root URL (https://cadunass.com).
 * Locale-specific routes (/en, /pt) use generateMetadata from [lang]/layout.tsx
 * which takes precedence and prevents conflicts.
 *
 * This ensures social media previews work when sharing the root URL.
 */
export const metadata: Metadata = (() => {
  const seoConfig = getSeoConfig(defaultLocale);

  return {
    metadataBase: new URL(siteConfig.url),
    title: seoConfig.title,
    description: seoConfig.description,
    keywords: seoConfig.keywords,
    authors: seoConfig.authors,
    creator: seoConfig.creator,
    publisher: seoConfig.publisher,
    openGraph: {
      ...seoConfig.openGraph,
      url: siteConfig.url,
    },
    twitter: seoConfig.twitter,
    robots: seoConfig.robots,
    alternates: {
      canonical: siteConfig.url,
      languages: {
        en: `${siteConfig.url}/en`,
        "pt-BR": `${siteConfig.url}/pt`,
        "x-default": `${siteConfig.url}/en`,
      },
    },
  };
})();

/**
 * Root page that detects user's language preference and redirects
 * to the appropriate locale route (/en or /pt)
 *
 * This is a server component wrapper that provides metadata,
 * while the actual redirect logic is in the client component.
 */
export default function RootPage() {
  return (
    <>
      <meta name="author" content={PERSONAL_INFO.fullName.join(" ")} />
      <RootPageClient />
    </>
  );
}
