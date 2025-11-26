/**
 * SEO Configuration - Locale-aware
 * Central place for all SEO-related metadata
 */

import { PERSONAL_INFO } from "@/constants/personal-info";
import { getTranslations } from "@/lib/i18n";
import type { Locale } from "@/types";
import { siteConfig } from "./site";

/**
 * Get SEO configuration for a specific locale
 */
export function getSeoConfig(locale: Locale) {
  const t = getTranslations(locale);

  return {
    title: {
      default: t.seo.title,
      template: `%s | ${PERSONAL_INFO.username}`,
    },
    description: t.seo.description,
    keywords: t.seo.keywords,
    authors: [
      {
        name: PERSONAL_INFO.fullName.join(" "),
        url: siteConfig.url,
      },
    ],
    creator: PERSONAL_INFO.fullName.join(" "),
    publisher: PERSONAL_INFO.fullName.join(" "),
    openGraph: {
      type: "website" as const,
      locale: locale === "en" ? "en_US" : "pt_BR",
      url: `${siteConfig.url}/${locale}`,
      title: t.seo.ogTitle,
      description: t.seo.ogDescription,
      siteName: PERSONAL_INFO.username,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: t.seo.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: t.seo.twitterTitle,
      description: t.seo.twitterDescription,
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
}

/**
 * Get Person structured data for a specific locale (JSON-LD)
 */
export function getPersonStructuredData(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: `${PERSONAL_INFO.fullName.join(" ")}`,
    alternateName: PERSONAL_INFO.username,
    url: `${siteConfig.url}/${locale}`,
    image: siteConfig.ogImage,
    jobTitle: locale === "en" ? "Software Engineer" : "Engenheiro de Software",
    worksFor: {
      "@type": "Organization",
      name: "Alore",
    },
    email: PERSONAL_INFO.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Joinville",
      addressRegion: "SC",
      addressCountry: "BR",
    },
    knowsLanguage: [
      { "@type": "Language", name: "English" },
      { "@type": "Language", name: "Portuguese" },
    ],
    sameAs: [
      siteConfig.links.github,
      siteConfig.links.linkedin,
      siteConfig.url,
    ],
    knowsAbout: [
      "Software Engineering",
      "Rust Programming",
      "TypeScript",
      "JavaScript",
      "Web3",
      "Blockchain",
      "AI Development",
      "Full Stack Development",
      "React",
      "Next.js",
      "API Development",
      "Cryptography",
      "Smart Contracts",
      "CI/CD",
      "Docker",
      "Kubernetes",
      "Node.js",
      "Vue.js",
      "PostgreSQL",
      "Firebase",
      "Cloud Computing",
      "Software Architecture",
      "Security Best Practices",
    ],
    inLanguage: locale === "en" ? "en-US" : "pt-BR",
  };
}

/**
 * Get Website structured data for a specific locale (JSON-LD)
 */
export function getWebsiteStructuredData(locale: Locale) {
  const t = getTranslations(locale);

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${PERSONAL_INFO.username} Portfolio`,
    url: `${siteConfig.url}/${locale}`,
    description: t.seo.description,
    author: {
      "@type": "Person",
      name: PERSONAL_INFO.fullName.join(" "),
    },
    inLanguage: locale === "en" ? "en-US" : "pt-BR",
  };
}

/**
 * Get Professional Service structured data for a specific locale (JSON-LD)
 */
export function getProfessionalServiceStructuredData(locale: Locale) {
  const isEnglish = locale === "en";

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: isEnglish
      ? "Freelance Software Development & Consulting Services"
      : "Serviços Freelance de Desenvolvimento de Software e Consultoria",
    alternateName: isEnglish
      ? "Serviços Freelance de Desenvolvimento de Software e Consultoria"
      : "Freelance Software Development & Consulting Services",
    description: isEnglish
      ? "Freelance software engineering services specializing in Rust, TypeScript, Web3, and AI development. Offering contract work, consulting engagements, and collaborative projects worldwide. Contact for your next project."
      : "Serviços freelance de engenharia de software especializados em Rust, TypeScript, Web3 e desenvolvimento de IA. Oferecendo trabalho por contrato, consultorias e projetos colaborativos no mundo todo. Entre em contato para seu próximo projeto.",
    provider: {
      "@type": "Person",
      name: PERSONAL_INFO.fullName.join(" "),
    },
    serviceType: isEnglish
      ? [
          "Software Engineering",
          "Freelance Development",
          "Software Consulting",
          "Contract Programming",
        ]
      : [
          "Engenharia de Software",
          "Desenvolvimento Freelance",
          "Consultoria de Software",
          "Programação por Contrato",
        ],
    areaServed: [
      {
        "@type": "Country",
        name: isEnglish ? "Worldwide" : "Mundial",
      },
      {
        "@type": "City",
        name: "Joinville",
        addressCountry: "BR",
      },
      {
        "@type": "State",
        name: "Santa Catarina",
        addressCountry: "BR",
      },
    ],
    availableLanguage: [
      { "@type": "Language", name: "English" },
      { "@type": "Language", name: "Portuguese" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: isEnglish
        ? "Freelance Software Development Services"
        : "Serviços Freelance de Desenvolvimento de Software",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isEnglish ? "Rust Development" : "Desenvolvimento Rust",
            description: isEnglish
              ? "Backend development and API services using Rust. Offering freelance and contract work."
              : "Desenvolvimento backend e serviços de API usando Rust. Oferecendo trabalho freelance e por contrato.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isEnglish
              ? "Web3/Blockchain Development"
              : "Desenvolvimento Web3/Blockchain",
            description: isEnglish
              ? "Smart contracts, DApps, and blockchain integration. Freelance consulting for crypto projects."
              : "Smart contracts, DApps e integração blockchain. Consultoria freelance para projetos cripto.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isEnglish
              ? "TypeScript/React Development"
              : "Desenvolvimento TypeScript/React",
            description: isEnglish
              ? "Full-stack web application development with TypeScript and React. Freelance project services."
              : "Desenvolvimento de aplicações web full-stack com TypeScript e React. Serviços de projetos freelance.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isEnglish
              ? "AI Integration Services"
              : "Serviços de Integração de IA",
            description: isEnglish
              ? "AI-powered solutions and integrations for business applications. Contract and consulting work."
              : "Soluções e integrações baseadas em IA para aplicações empresariais. Trabalho por contrato e consultoria.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isEnglish
              ? "Landing Page Development"
              : "Criação de Landing Pages",
            description: isEnglish
              ? "Modern, responsive landing pages built with Next.js and React. Freelance web development services."
              : "Landing pages modernas e responsivas construídas com Next.js e React. Serviços freelance de desenvolvimento web.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isEnglish ? "API Development" : "Desenvolvimento de APIs",
            description: isEnglish
              ? "RESTful and API development with Rust, Node.js, and TypeScript. Backend consulting services."
              : "Desenvolvimento de APIs RESTful com Rust, Node.js e TypeScript. Serviços de consultoria backend.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isEnglish ? "Software Consulting" : "Consultoria de Software",
            description: isEnglish
              ? "Technical consulting for software architecture, security best practices, and Web3 integration."
              : "Consultoria técnica para arquitetura de software, melhores práticas de segurança e integração Web3.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: isEnglish
              ? "Contract Development"
              : "Desenvolvimento por Contrato",
            description: isEnglish
              ? "Short-term and long-term contract software development. Remote work worldwide."
              : "Desenvolvimento de software por contrato de curto e longo prazo. Trabalho remoto no mundo todo.",
          },
        },
      ],
    },
  };
}
