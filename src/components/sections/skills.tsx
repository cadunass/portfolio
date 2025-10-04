"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { SKILLS_FOR_DISPLAY } from "@/constants";

export function Skills() {
  return (
    <section
      id="skills"
      className="h-[40rem] rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-center text-neutral-800 dark:text-white mb-4">
          Skills & Technologies
        </h2>
        <p className="text-center text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          A comprehensive toolkit of technologies and frameworks I use to build
          modern applications
        </p>
      </div>
      <InfiniteMovingCards
        items={SKILLS_FOR_DISPLAY}
        direction="right"
        speed="slow"
      />
    </section>
  );
}
