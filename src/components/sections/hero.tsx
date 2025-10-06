"use client";

import { IconArrowUpRight } from "@tabler/icons-react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { PERSONAL_INFO } from "@/constants";
import { FlipWords } from "../ui/flip-words";
// import { NameAnnotation } from "../ui/name-annotation";
import { Spotlight } from "../ui/spotlight-new";

export function Hero() {
  const nameWords = PERSONAL_INFO.fullName.map((word) => ({
    text: word,
    className: "text-neutral-800 dark:text-white",
  }));

  const bioWords = ["secure", "scalable", "performant"];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden antialiased"
      aria-label="Hero section"
    >
      <Spotlight />
      <div className="max-w-4xl mx-auto text-center px-4 relative">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
          {/* <NameAnnotation /> */}
          <TypewriterEffect words={nameWords} />
        </h1>
        <p className="text-2xl md:text-3xl text-neutral-600 dark:text-neutral-300 mb-8 opacity-0 animate-[fadeIn_0.5s_ease-in_0.5s_forwards]">
          {PERSONAL_INFO.title}
        </p>
        <div className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-12 opacity-0 animate-[fadeIn_0.5s_ease-in_1s_forwards]">
          {PERSONAL_INFO.bioStart}
          <FlipWords words={bioWords} />
          {PERSONAL_INFO.bioEnd}
        </div>
        <div className="flex flex-wrap gap-4 justify-center opacity-0 animate-[fadeIn_0.5s_ease-in_1.5s_forwards]">
          <button
            type="button"
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:bg-slate-950/90 transition-all duration-300"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl hover:bg-slate-950/90 transition-all duration-300"
            >
              Open Resume
              <IconArrowUpRight size={20} />
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
