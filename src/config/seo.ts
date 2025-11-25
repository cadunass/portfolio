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
    "Carlos Eduardo Nass - Senior Software Engineer specializing in Rust, TypeScript, Web3, and AI development. 6+ years building secure, scalable applications for clients worldwide and in Joinville, SC. Contact me for consulting engagements and collaborative projects.",
  descriptionPt:
    "Carlos Eduardo Nass - Engenheiro de Software Sênior especializado em Rust, TypeScript, Web3 e IA. 6+ anos desenvolvendo aplicações seguras e escaláveis para clientes no mundo todo e em Joinville, SC. Entre em contato para consultorias e projetos colaborativos.",
  keywords: [
    // Personal branding
    "cadunass",
    "Carlos Eduardo Nass",
    "Software Engineer",
    "Full Stack Developer",
    "Senior Software Engineer",

    // === ENGLISH KEYWORDS (International Market - Primary) ===

    // Hiring Intent Keywords
    "hire rust developer",
    "hire typescript developer",
    "hire software engineer",
    "rust developer for hire",
    "typescript developer for hire",
    "web3 developer for hire",
    "blockchain developer for hire",
    "freelance software engineer",
    "freelance rust developer",
    "freelance typescript developer",
    "freelance web3 developer",
    "contract software engineer",
    "contract developer",
    "software engineering consultant",
    "rust consultant",
    "typescript consultant",
    "blockchain consultant",

    // Long-Tail Combinations
    "experienced rust engineer",
    "senior typescript developer",
    "senior rust developer",
    "full stack rust developer",
    "blockchain engineer hire",
    "remote rust developer brazil",
    "freelance web3 engineer",
    "rust api development expert",
    "typescript full stack freelance",
    "experienced blockchain developer",
    "senior full stack engineer",

    // Service-Oriented Keywords
    "rust development services",
    "blockchain development services",
    "web3 consulting",
    "typescript consulting services",
    "api development rust",
    "smart contract development",
    "blockchain consulting services",
    "web3 development services",
    "software consulting services",
    "api development services",

    // Technical Skills (Hiring Context)
    "Rust Developer",
    "TypeScript Developer",
    "React Developer",
    "Next.js Developer",
    "Web3 Developer",
    "Blockchain Developer",
    "Full Stack Developer",

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
    "Web3",
    "Blockchain",

    // Specializations
    "AI Development",
    "Wallet-as-a-Service",
    "Cryptography",
    "CI/CD",
    "Authentication Systems",
    "Smart Contracts",
    "DApp Development",
    "API Development",

    // Industry Terms
    "Software Engineering",
    "Web Development",
    "Full Stack Development",
    "Backend Development",
    "Frontend Development",

    // Location-Based (English)
    "software engineer brazil",
    "developer santa catarina",
    "software engineer joinville",
    "developer joinville brazil",
    "remote software engineer brazil",
    "brazil timezone developer",
    "developer utc-3",
    "software engineer utc-3",
    "offshore rust developer",
    "latin america developer",
    "remote blockchain engineer brazil",
    "freelance developer latin america",

    // === PORTUGUESE KEYWORDS (Brazilian Market - Secondary) ===

    // Core Professional Terms (PT)
    "desenvolvedor de software",
    "engenheiro de software",
    "engenheiro de software sênior",
    "desenvolvedor full stack",
    "desenvolvedor sênior",
    "programador",
    "programador sênior",
    "desenvolvedor rust",
    "desenvolvedor typescript",
    "desenvolvedor react",
    "desenvolvedor next.js",
    "desenvolvedor web3",
    "desenvolvedor blockchain",
    "desenvolvedor node.js",
    "desenvolvedor vue.js",
    "desenvolvedor javascript",

    // Hiring Intent (PT) - Enhanced with specific technologies
    "contratar desenvolvedor",
    "contratar desenvolvedor rust",
    "contratar desenvolvedor typescript",
    "contratar desenvolvedor web3",
    "contratar desenvolvedor blockchain",
    "contratar programador",
    "desenvolvedor freelance",
    "freelance desenvolvedor rust",
    "freelance desenvolvedor typescript",
    "freelance desenvolvedor web3",
    "desenvolvedor para contratar",
    "freelancer programador",
    "freelancer desenvolvedor",
    "consultor de software",
    "consultor desenvolvimento",
    "desenvolvedor remoto",
    "programador freelancer",
    "consultor rust",
    "consultor typescript",
    "consultor blockchain",
    "consultor web3",
    "desenvolvedor contrato",
    "programador contrato",

    // Long-Tail Combinations (PT)
    "desenvolvedor rust experiente",
    "desenvolvedor typescript sênior",
    "desenvolvedor web3 experiente",
    "desenvolvedor blockchain sênior",
    "desenvolvedor full stack rust",
    "desenvolvedor full stack typescript",
    "engenheiro rust remoto",
    "engenheiro typescript remoto",

    // Service-Oriented (PT)
    "serviços desenvolvimento rust",
    "serviços desenvolvimento typescript",
    "serviços desenvolvimento web3",
    "serviços desenvolvimento blockchain",
    "consultoria rust",
    "consultoria typescript",
    "consultoria web3",
    "consultoria blockchain",
    "desenvolvimento de api rust",
    "desenvolvimento smart contracts",
    "consultoria desenvolvimento software",
    "serviços freelance desenvolvimento",

    // Regional Keywords (Joinville/SC)
    "desenvolvedor joinville",
    "programador joinville",
    "desenvolvedor joinville sc",
    "desenvolvedor santa catarina",
    "desenvolvedor sc",
    "programador santa catarina",
    "desenvolvedor sul do brasil",
    "tech joinville",
    "desenvolvedor remoto brasil",
    "freelancer brasil",
    "freelancer joinville",
    "consultor joinville",
    "desenvolvedor typescript joinville",
    "desenvolvedor rust joinville",
    "programador rust brasil",
    "desenvolvedor web joinville",
    "desenvolvedor freelance joinville",
    "programador freelance santa catarina",

    // Technology-Specific (PT)
    "desenvolvimento rust",
    "desenvolvimento typescript",
    "desenvolvimento web3",
    "desenvolvimento blockchain",
    "desenvolvedor frontend",
    "desenvolvedor backend",
    "desenvolvimento fullstack",
    "desenvolvedor react",
    "desenvolvedor next.js",
    "criação de landing pages",
    "desenvolvimento de apis",
    "desenvolvimento de aplicações web",
    "integração blockchain",
    "desenvolvimento dapps",

    // Service Terms (PT)
    "serviços desenvolvimento software",
    "serviços desenvolvimento web",
    "consultoria desenvolvimento",
    "desenvolvimento de aplicações",
    "desenvolvimento web",
    "criação de sites",
    "desenvolvimento de sistemas",
    "consultoria técnica",
    "consultoria tecnologia",

    // Portfolio & Professional
    "Portfolio",
    "Projects",
    "Open Source",
    "Remote Work",
    "Trabalho Remoto",
    "Freelancer",
    "Consultor",
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
      "Senior Software Engineer specializing in Rust, TypeScript, Web3, and AI. 6+ years building secure, scalable applications. Based in Joinville, SC, Brazil. Contact me for freelance projects and consulting.",
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
      "Senior Software Engineer | Rust, TypeScript, Web3, AI specialist | Freelance & consulting | Get in touch for your next project",
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
    addressLocality: "Joinville",
    addressRegion: "SC",
    addressCountry: "BR",
  },
  knowsLanguage: ["English", "Portuguese"],
  sameAs: [siteConfig.links.github, siteConfig.links.linkedin, siteConfig.url],
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

// Structured Data for Professional Service (JSON-LD)
export const professionalServiceStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Freelance Software Development & Consulting Services",
  alternateName:
    "Serviços Freelance de Desenvolvimento de Software e Consultoria",
  description:
    "Freelance software engineering services specializing in Rust, TypeScript, Web3, and AI development. Offering contract work, consulting engagements, and collaborative projects worldwide. Contact for your next project.",
  provider: {
    "@type": "Person",
    name: PERSONAL_INFO.fullName.join(" "),
  },
  serviceType: [
    "Software Engineering",
    "Freelance Development",
    "Software Consulting",
    "Contract Programming",
  ],
  areaServed: [
    {
      "@type": "Country",
      name: "Worldwide",
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
  availableLanguage: ["English", "Portuguese"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Freelance Software Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Rust Development",
          alternateName: "Desenvolvimento Rust",
          description:
            "Backend development and API services using Rust. Offering freelance and contract work.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web3/Blockchain Development",
          alternateName: "Desenvolvimento Web3/Blockchain",
          description:
            "Smart contracts, DApps, and blockchain integration. Freelance consulting for crypto projects.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "TypeScript/React Development",
          alternateName: "Desenvolvimento TypeScript/React",
          description:
            "Full-stack web application development with TypeScript and React. Freelance project services.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Integration Services",
          alternateName: "Serviços de Integração de IA",
          description:
            "AI-powered solutions and integrations for business applications. Contract and consulting work.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Landing Page Development",
          alternateName: "Criação de Landing Pages",
          description:
            "Modern, responsive landing pages built with Next.js and React. Freelance web development services.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "API Development",
          alternateName: "Desenvolvimento de APIs",
          description:
            "RESTful and API development with Rust, Node.js, and TypeScript. Backend consulting services.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Software Consulting",
          alternateName: "Consultoria de Software",
          description:
            "Technical consulting for software architecture, security best practices, and Web3 integration.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Contract Development",
          alternateName: "Desenvolvimento por Contrato",
          description:
            "Short-term and long-term contract software development. Remote work worldwide.",
        },
      },
    ],
  },
};
