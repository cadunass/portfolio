import {
  Hero,
  About,
  Skills,
  Projects,
  Experience,
  // Contact,
  SocialLinks,
} from "@/components/sections";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Theme Toggle - Fixed Position */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Main Content */}
      <main className="w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        {/* <Contact /> */}
      </main>

      {/* Floating Social Links - Fixed Position */}
      <SocialLinks />
    </div>
  );
}
