import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Hero } from "@/components/sections";
import { SkipToContent } from "@/components/skip-to-content";
import { StarsBackground } from "@/components/ui/stars-background";
import { isValidLocale } from "@/lib/i18n";
import { type Locale, locales } from "@/types";

// Lazy load below-fold sections to reduce initial bundle
const About = dynamic(
  () => import("@/components/sections").then((mod) => ({ default: mod.About })),
  {
    loading: () => <div className="min-h-screen" />,
  },
);

const Skills = dynamic(
  () =>
    import("@/components/sections").then((mod) => ({ default: mod.Skills })),
  {
    loading: () => <div className="min-h-[40rem]" />,
  },
);

const Experience = dynamic(
  () =>
    import("@/components/sections").then((mod) => ({
      default: mod.Experience,
    })),
  {
    loading: () => <div className="min-h-screen" />,
  },
);

const SocialLinks = dynamic(
  () =>
    import("@/components/sections").then((mod) => ({
      default: mod.SocialLinks,
    })),
  {
    loading: () => null,
  },
);

const Footer = dynamic(
  () =>
    import("@/components/sections").then((mod) => ({ default: mod.Footer })),
  {
    loading: () => null,
  },
);

// Generate static params for both languages
export function generateStaticParams() {
  return locales.map((locale) => ({
    lang: locale,
  }));
}

interface PageProps {
  params: Promise<{
    lang: string;
  }>;
}

export default async function Home({ params }: PageProps) {
  const { lang: langParam } = await params;

  // Return 404 for invalid locales
  if (!isValidLocale(langParam)) {
    notFound();
  }

  const lang = langParam as Locale;

  return (
    <div className="min-h-screen relative">
      {/* Skip to Content Link for Accessibility */}
      <SkipToContent lang={lang} />

      {/* Language Switcher */}
      <LanguageSwitcher lang={lang} />

      {/* Background Effects - Scrolls with content */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        {/* <ShootingStars /> */}
        <StarsBackground />
      </div>

      {/* Main Content */}
      <main id="main-content" className="relative z-10 w-full">
        <Hero lang={lang} />
        <About lang={lang} />
        <Skills lang={lang} />
        {/* <Projects lang={lang} /> */}
        <Experience lang={lang} />
        {/* <Contact lang={lang} /> */}
      </main>

      {/* Floating Social Links - Fixed Position */}
      <SocialLinks lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}
