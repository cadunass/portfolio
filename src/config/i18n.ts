/**
 * i18n Configuration (Preparation for Future Implementation)
 *
 * This file provides the foundation for internationalization.
 * When ready to implement full i18n, use this config with next-intl or next-i18next.
 *
 * Implementation steps (future):
 * 1. Install i18n library: pnpm add next-intl
 * 2. Create translation files in /locales/en.json and /locales/pt-BR.json
 * 3. Add language switcher component
 * 4. Update routing to support /pt prefix
 * 5. Create separate sitemaps for each language
 */

export const i18nConfig = {
  // Default language for the site
  defaultLocale: "en",

  // Supported locales
  locales: ["en", "pt-BR"],

  // Locale labels for UI display
  localeLabels: {
    en: "English",
    "pt-BR": "Português",
  },

  // Locale detection strategy (for future implementation)
  localeDetection: true,

  // URL structure preferences
  localePrefix: "as-needed", // Don't prefix default locale in URL
} as const;

export type Locale = (typeof i18nConfig.locales)[number];
