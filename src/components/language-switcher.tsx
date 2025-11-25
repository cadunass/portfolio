"use client";

import { IconChevronDown } from "@tabler/icons-react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { saveLocalePreference } from "@/lib/detect-locale";
import { getTranslations, localeMetadata } from "@/lib/i18n";
import type { Locale } from "@/types";
import { locales } from "@/types";

interface LanguageSwitcherProps {
  lang: Locale;
}

/**
 * Language Switcher Component
 * Dropdown menu to switch between English and Portuguese
 * Shows current language with flag and name
 * Saves preference to localStorage and navigates to the appropriate route
 */
export function LanguageSwitcher({ lang }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const t = getTranslations(lang);

  const handleLanguageChange = (newLocale: Locale) => {
    if (newLocale === lang) return;

    // Save the preference
    saveLocalePreference(newLocale);

    // Navigate to the new locale route
    // Replace current locale in pathname (e.g., /en/... -> /pt/...)
    const newPath = pathname.replace(`/${lang}`, `/${newLocale}`);
    router.push(newPath);
  };

  const currentMeta = localeMetadata[lang];

  return (
    <div className="fixed top-4 left-4 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex items-center gap-2 text-sm font-medium"
          >
            <span>{currentMeta.flag}</span>
            <span className="hidden md:inline">
              {currentMeta.code.toUpperCase()}
            </span>
            <IconChevronDown size={16} className="opacity-50" />
            <span className="sr-only">{t.language.toggle}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="z-[9999]">
          {locales.map((locale) => {
            const meta = localeMetadata[locale];
            return (
              <DropdownMenuItem
                key={locale}
                onClick={() => handleLanguageChange(locale)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <span>{meta.flag}</span>
                <span>{meta.name}</span>
                {locale === lang && (
                  <span className="ml-auto text-xs opacity-50">✓</span>
                )}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
