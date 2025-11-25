import type { Metadata, Viewport } from "next";
import { Caveat, Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/config";
import {
  getPersonStructuredData,
  getProfessionalServiceStructuredData,
  getSeoConfig,
  getWebsiteStructuredData,
} from "@/config/seo";
import { getHreflang, isValidLocale, localeMetadata } from "@/lib/i18n";
import { type Locale, locales } from "@/types";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
  adjustFontFallback: true,
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: false,
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{
    lang: string;
  }>;
}

// Generate metadata for each locale
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: langParam } = await params;

  // Return 404 for invalid locales
  if (!isValidLocale(langParam)) {
    notFound();
  }

  const lang = langParam as Locale;
  const seoConfig = getSeoConfig(lang);
  const localeMeta = localeMetadata[lang];

  return {
    metadataBase: new URL(siteConfig.url),
    title: seoConfig.title,
    description: seoConfig.description,
    keywords: seoConfig.keywords,
    authors: seoConfig.authors,
    creator: seoConfig.creator,
    openGraph: {
      ...seoConfig.openGraph,
      type: "profile",
      locale: localeMeta.ogLocale,
    },
    twitter: seoConfig.twitter,
    robots: seoConfig.robots,
    verification: seoConfig.verification,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: "/en",
        "pt-BR": "/pt",
        "x-default": "/en",
      },
    },
    category: "technology",
    other: {
      "og:locale:alternate": lang === "en" ? "pt_BR" : "en_US",
    },
  };
}

// Generate static params for both locales
export function generateStaticParams() {
  return locales.map((locale) => ({
    lang: locale,
  }));
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { lang: langParam } = await params;

  // Return 404 for invalid locales
  if (!isValidLocale(langParam)) {
    notFound();
  }

  const lang = langParam as Locale;
  const localeMeta = localeMetadata[lang];
  const personData = getPersonStructuredData(lang);
  const websiteData = getWebsiteStructuredData(lang);
  const serviceData = getProfessionalServiceStructuredData(lang);

  return (
    <>
      {/* Set lang attribute via script - executes before React hydration */}
      <script
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Safe - setting HTML lang attribute
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang="${localeMeta.htmlLang}";`,
        }}
      />

      {/* Meta tags for PWA */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="cadunass" />
      <meta name="format-detection" content="telephone=no" />

      {/* Canonical and hreflang tags for i18n */}
      <link rel="canonical" href={`${siteConfig.url}/${lang}`} />
      <link
        rel="alternate"
        hrefLang={getHreflang("en")}
        href={`${siteConfig.url}/en`}
      />
      <link
        rel="alternate"
        hrefLang={getHreflang("pt")}
        href={`${siteConfig.url}/pt`}
      />
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${siteConfig.url}/en`}
      />

      {/* Geo tags for regional SEO */}
      <meta name="geo.region" content="BR-SC" />
      <meta name="geo.placename" content="Joinville" />
      <meta name="geo.position" content="-26.3045;-48.8487" />
      <meta name="ICBM" content="-26.3045, -48.8487" />

      {/* Preconnect to Google Fonts for faster font loading */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />

      {/* Structured Data (JSON-LD) for SEO */}
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: safe
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personData),
        }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: safe
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData),
        }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: safe
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceData),
        }}
      />

      {/* Font variables and theme wrapper */}
      <div
        className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </div>
    </>
  );
}
