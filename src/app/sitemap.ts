import type { MetadataRoute } from "next";
import { siteConfig } from "@/config";
import { locales } from "@/types";

// Required for static export
export const dynamic = "force-static";

/**
 * Generate sitemap with locale-aware entries
 * Includes both /en and /pt routes with hreflang alternates
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Generate entries for each locale
  const localeEntries = locales.flatMap((locale) => [
    {
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          "pt-BR": `${baseUrl}/pt`,
        },
      },
    },
  ]);

  // Add root redirect entry
  const rootEntry = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
    alternates: {
      languages: {
        en: `${baseUrl}/en`,
        "pt-BR": `${baseUrl}/pt`,
      },
    },
  };

  return [rootEntry, ...localeEntries];
}
