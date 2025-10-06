/**
 * SEO Configuration
 * Central place for all SEO-related metadata
 */

import { PERSONAL_INFO } from "@/constants/personal-info";
import { siteConfig } from "./site";

export const seoConfig = {
  title: {
    default: `${PERSONAL_INFO.username} | ${PERSONAL_INFO.title}`,
    template: `%s | ${PERSONAL_INFO.username}`,
  },
  description:
    "Experienced Software Engineer specializing in Rust, TypeScript, Web3, and AI. Building secure, scalable, and performant web applications. Expert in full-stack development, blockchain, and modern web technologies.",
  keywords: [
    // Personal branding
    "cadunass",
    "Carlos Eduardo Nass",
    "Software Engineer",
    "Full Stack Developer",

    // Technical skills
    "Rust Developer",
    "TypeScript Developer",
    "React Developer",
    "Next.js Developer",
    "Web3 Developer",
    "Blockchain Developer",

    // Technologies
    "Rust",
    "TypeScript",
    "JavaScript",
    "Next.js",
    "React",
    "Node.js",
    "Vue.js",
    "Java",
    "Spring",
    "SQL",

    // Specializations
    "Web3",
    "Blockchain",
    "AI Development",
    "Wallet-as-a-Service",
    "Cryptography",
    "CI/CD",
    "Authentication Systems",

    // Industry
    "Software Engineering",
    "Web Development",
    "Full Stack Development",
    "Backend Development",
    "Frontend Development",

    // Location
    "Software Engineer Brazil",
    "Developer Santa Catarina",
    "Remote Developer",

    // Portfolio related
    "Portfolio",
    "Projects",
    "Open Source",
  ],
  authors: [
    {
      name: PERSONAL_INFO.username,
      url: siteConfig.url,
    },
  ],
  creator: PERSONAL_INFO.username,
  openGraph: {
    type: "website" as const,
    locale: "en_US",
    url: siteConfig.url,
    title: `${PERSONAL_INFO.username} | ${PERSONAL_INFO.title}`,
    description:
      "Experienced Software Engineer specializing in Rust, TypeScript, Web3, and AI. Building secure, scalable, and performant applications.",
    siteName: PERSONAL_INFO.username,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${PERSONAL_INFO.username} - Software Engineer Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: `${PERSONAL_INFO.username} | ${PERSONAL_INFO.title}`,
    description:
      "Experienced Software Engineer specializing in Rust, TypeScript, Web3, and AI.",
    images: [siteConfig.ogImage],
    creator: "@cadunass",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
  verification: {
    google: "ckCzENLTSKC4gyK3B3nyPNBfWWjfMmDdb0BvcJVHlQo", // Google Search Console
    // yandex: "", // Yandex Webmaster
    // bing: "", // Bing Webmaster Tools
  },
};

// Structured Data for Person (JSON-LD)
export const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: `${PERSONAL_INFO.fullName.join(" ")}`,
  alternateName: PERSONAL_INFO.username,
  url: siteConfig.url,
  image: siteConfig.ogImage,
  jobTitle: PERSONAL_INFO.title,
  worksFor: {
    "@type": "Organization",
    name: "Alore",
  },
  email: PERSONAL_INFO.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: PERSONAL_INFO.location,
    addressCountry: "BR",
  },
  sameAs: [siteConfig.links.github, siteConfig.links.linkedin, siteConfig.url],
  knowsAbout: [
    "Software Engineering",
    "Rust Programming",
    "TypeScript",
    "Web3",
    "Blockchain",
    "AI Development",
    "Full Stack Development",
    "React",
    "Next.js",
  ],
};

// Structured Data for Website (JSON-LD)
export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${PERSONAL_INFO.username} Portfolio`,
  url: siteConfig.url,
  description: seoConfig.description,
  author: {
    "@type": "Person",
    name: PERSONAL_INFO.fullName.join(" "),
  },
  inLanguage: "en-US",
};
