"use client";

import { getTranslations } from "@/lib/i18n";
import type { Locale } from "@/types";

/**
 * Skip to Content Link
 * Provides keyboard users a way to skip navigation and jump directly to main content
 * Improves accessibility and SEO
 */
interface SkipToContentProps {
  lang: Locale;
}

export function SkipToContent({ lang }: SkipToContentProps) {
  const t = getTranslations(lang);

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      {t.nav.skipToContent}
    </a>
  );
}
