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
import { ThemeToggle } from "@/components/theme-toggle";
// import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Background Effects - Scrolls with content */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        {/* <ShootingStars /> */}
        <StarsBackground />
      </div>

      {/* Theme Toggle - Fixed Position */}
      {/* <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div> */}

      {/* Main Content */}
      <main className="relative z-10 w-full">
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
