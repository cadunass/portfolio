import {
  About,
  // Projects,
  Experience,
  Footer,
  Hero,
  Skills,
  // Contact,
  SocialLinks,
} from "@/components/sections";
import { SkipToContent } from "@/components/skip-to-content";
import { StarsBackground } from "@/components/ui/stars-background";

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
