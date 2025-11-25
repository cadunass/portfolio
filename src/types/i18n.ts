// i18n type definitions

export type Locale = "en" | "pt";

export const locales: Locale[] = ["en", "pt"];

export const defaultLocale: Locale = "en";

// Translation structure interface
export interface Translations {
  // Common UI elements
  common: {
    and: string;
    present: string;
    comingSoon: string;
    updateDataIn: string;
  };

  // Navigation & Accessibility
  nav: {
    skipToContent: string;
    home: string;
    about: string;
    skills: string;
    projects: string;
    experience: string;
    contact: string;
  };

  // Theme
  theme: {
    toggle: string;
    light: string;
    dark: string;
    system: string;
  };

  // Language Switcher
  language: {
    toggle: string;
    english: string;
    portuguese: string;
  };

  // Hero Section
  hero: {
    title: string;
    bioWords: string[];
    openResume: string;
  };

  // About Section
  about: {
    heading: string;
    paragraph1: string;
    paragraph2: string;
  };

  // Skills Section
  skills: {
    heading: string;
    technologies: string;
  };

  // Projects Section
  projects: {
    heading: string;
    featured: string;
    emptyState: string;
    emptyStateHint: string;
    code: string;
    demo: string;
  };

  // Experience Section
  experience: {
    heading: string;
    work: string;
    emptyState: string;
    emptyStateHint: string;
    present: string;
  };

  // Contact Section
  contact: {
    heading: string;
    sendEmail: string;
    location: string;
  };

  // Footer
  footer: {
    copyright: string;
    viewSource: string;
  };

  // Social Links
  social: {
    home: string;
    email: string;
    linkedin: string;
    github: string;
  };

  // SEO
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
    ogImageAlt: string;
    twitterTitle: string;
    twitterDescription: string;
  };

  // Experience Data (translations for summaries)
  experienceData: {
    [key: string]: {
      title: string;
      summary: string;
    };
  };

  // Project Data (translations for projects)
  projectsData: {
    [key: string]: {
      title: string;
      description: string;
    };
  };

  // Personal Info translations
  personalInfo: {
    title: string;
    bioStart: string;
    bioEnd: string;
  };
}

// Helper type for nested key paths (for type-safe translations)
export type TranslationKey = keyof Translations;
