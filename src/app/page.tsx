import dynamic from "next/dynamic";
import { Hero } from "@/components/sections";
import { SkipToContent } from "@/components/skip-to-content";
import { StarsBackground } from "@/components/ui/stars-background";

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

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Skip to Content Link for Accessibility */}
      <SkipToContent />

      {/* Background Effects - Scrolls with content */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        {/* <ShootingStars /> */}
        <StarsBackground />
      </div>

      {/* Main Content */}
      <main id="main-content" className="relative z-10 w-full">
        <Hero />
        <About />
        <Skills />
        {/* <Projects /> */}
        <Experience />
        {/* <Contact /> */}
      </main>

      {/* Floating Social Links - Fixed Position */}
      <SocialLinks />
      <Footer />
    </div>
  );
}
