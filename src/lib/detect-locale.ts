/**
 * Language detection utilities for automatic locale routing
 */

import type { Locale } from "@/types/i18n";
import { defaultLocale } from "@/types/i18n";
import { getLocaleFromBrowser, isValidLocale } from "./i18n";

const LOCALE_STORAGE_KEY = "preferred-locale";

/**
 * Detect the user's preferred locale based on:
 * 1. Previously saved preference (localStorage)
 * 2. Browser language
 * 3. Default locale (fallback)
 */
export function detectLocale(): Locale {
  // Check if we're in a browser environment
  if (typeof window === "undefined") {
    return defaultLocale;
  }

  // 1. Check for saved preference
  try {
    const saved = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (saved && isValidLocale(saved)) {
      return saved;
    }
  } catch {
    // localStorage might not be available
  }

  // 2. Detect from browser language
  try {
    const browserLang =
      navigator.language ||
      (navigator as { userLanguage?: string }).userLanguage;
    if (browserLang) {
      const detected = getLocaleFromBrowser(browserLang);
      if (detected) {
        return detected;
      }
    }
  } catch {
    // navigator might not be available
  }

  // 3. Fall back to default locale
  return defaultLocale;
}

/**
 * Save the user's locale preference to localStorage
 */
export function saveLocalePreference(locale: Locale): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    // localStorage might not be available
  }
}

/**
 * Get the saved locale preference from localStorage
 */
export function getSavedLocalePreference(): Locale | null {
  if (typeof window === "undefined") return null;

  try {
    const saved = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (saved && isValidLocale(saved)) {
      return saved;
    }
  } catch {
    // localStorage might not be available
  }

  return null;
}
