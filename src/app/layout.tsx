import type { Metadata, Viewport } from "next";
import { Caveat, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/config";
import {
  personStructuredData,
  professionalServiceStructuredData,
  seoConfig,
  websiteStructuredData,
} from "@/config/seo";

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
  preload: false, // Not used above fold
  adjustFontFallback: true,
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: false, // Not used above fold
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

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: seoConfig.title,
  description: seoConfig.description,
  keywords: seoConfig.keywords,
  authors: seoConfig.authors,
  creator: seoConfig.creator,
  openGraph: {
    ...seoConfig.openGraph,
    type: "profile",
  },
  twitter: seoConfig.twitter,
  robots: seoConfig.robots,
  verification: seoConfig.verification,
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      "pt-BR": "/pt",
    },
  },
  category: "technology",
  other: {
    "og:locale:alternate": "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="cadunass" />
        <meta name="format-detection" content="telephone=no" />

        {/* Canonical and hreflang tags for i18n preparation */}
        <link rel="canonical" href={siteConfig.url} />
        <link rel="alternate" hrefLang="en" href={siteConfig.url} />
        <link rel="alternate" hrefLang="pt-BR" href={`${siteConfig.url}/pt`} />
        <link rel="alternate" hrefLang="x-default" href={siteConfig.url} />

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

        {/* 
          Structured Data (JSON-LD) for SEO
          Note: dangerouslySetInnerHTML is safe here as we're using JSON.stringify on our own data
          This is the standard way to add structured data in Next.js
        */}
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: safe
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: safe
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: safe
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceStructuredData),
          }}
        />
      </head>
      <body
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
      </body>
    </html>
  );
}
