"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { SKILLS_FOR_DISPLAY } from "@/constants";
import { useInView } from "@/hooks/use-in-view";

export function Skills() {
  const { ref, isInView } = useInView();

  const words = [
    { text: "Skills", className: "text-neutral-800 dark:text-white" },
    { text: "&", className: "text-neutral-800 dark:text-white" },
    { text: "Technologies", className: "text-neutral-800 dark:text-white" },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="h-[40rem] rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"
      aria-labelledby="skills-heading"
    >
      <div className="mb-8">
        <h2 id="skills-heading" className="text-3xl font-bold text-center mb-4">
          {isInView && <TypewriterEffect words={words} />}
        </h2>
      </div>
      <div
        className={`relative transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        style={{ transitionDelay: "0.5s" }}
      >
        {/* Fade gradient overlays - visual only, doesn't block interactions */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-white dark:from-[#030712] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-white dark:from-[#030712] to-transparent z-10 pointer-events-none" />

        <InfiniteMovingCards
          items={SKILLS_FOR_DISPLAY}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
}
