/**
 * i18n utilities for translation and locale handling
 */

// Import translation files
import enTranslations from "@/locales/en.json";
import ptTranslations from "@/locales/pt.json";
import type { Locale, Translations } from "@/types/i18n";
import { defaultLocale, locales } from "@/types/i18n";

// Type-safe translations object
const translations: Record<Locale, Translations> = {
  en: enTranslations as Translations,
  pt: ptTranslations as Translations,
};

/**
 * Get translations for a specific locale
 * @param locale - The locale to get translations for
 * @returns The translations object for the locale
 */
export function getTranslations(locale: Locale): Translations {
  return translations[locale] || translations[defaultLocale];
}

/**
 * Validate if a string is a valid locale
 * @param locale - The string to validate
 * @returns True if valid locale
 */
export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

/**
 * Get a valid locale from a string, with fallback to default
 * @param locale - The locale string to validate
 * @returns A valid locale
 */
export function getValidLocale(locale: string | undefined): Locale {
  if (!locale) return defaultLocale;
  return isValidLocale(locale) ? locale : defaultLocale;
}

/**
 * Get the opposite locale (for language switcher)
 * @param currentLocale - The current locale
 * @returns The opposite locale
 */
export function getOppositeLocale(currentLocale: Locale): Locale {
  return currentLocale === "en" ? "pt" : "en";
}

/**
 * Get locale from browser language
 * @param browserLang - The browser language string (e.g., "en-US", "pt-BR")
 * @returns A valid locale or undefined
 */
export function getLocaleFromBrowser(browserLang: string): Locale | undefined {
  const lang = browserLang.toLowerCase().split("-")[0];
  if (lang === "pt") return "pt";
  if (lang === "en") return "en";
  return undefined;
}

/**
 * Get locale metadata
 */
export const localeMetadata: Record<
  Locale,
  {
    code: string;
    name: string;
    flag: string;
    htmlLang: string;
    ogLocale: string;
  }
> = {
  en: {
    code: "en",
    name: "English",
    flag: "🇺🇸",
    htmlLang: "en",
    ogLocale: "en_US",
  },
  pt: {
    code: "pt",
    name: "Português",
    flag: "🇧🇷",
    htmlLang: "pt-BR",
    ogLocale: "pt_BR",
  },
};

/**
 * Get hreflang value for a locale
 */
export function getHreflang(locale: Locale): string {
  return locale === "pt" ? "pt-BR" : "en";
}
