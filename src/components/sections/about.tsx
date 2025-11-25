"use client";

import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { useInView } from "@/hooks/use-in-view";
import { getTranslations } from "@/lib/i18n";
import type { Locale } from "@/types";

interface AboutProps {
  lang: Locale;
}

export function About({ lang }: AboutProps) {
  const { ref, isInView } = useInView();
  const t = getTranslations(lang);

  const heading = t.about.heading;
  const words = heading.split(" ").map((word) => ({
    text: word,
    className: "text-neutral-800 dark:text-white",
  }));

  return (
    <section
      id="about"
      className="py-20 px-4"
      ref={ref}
      aria-labelledby="about-heading"
    >
      <div className="max-w-4xl mx-auto">
        <h2 id="about-heading" className="text-4xl font-bold mb-8 text-center">
          {isInView && <TypewriterEffect words={words} />}
        </h2>
        <div
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "0.3s" }}
        >
          <div className="space-y-4">
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {t.about.paragraph1}
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {t.about.paragraph2}
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-neutral-200 to-neutral-400 dark:from-neutral-700 dark:to-neutral-900 flex items-center justify-center">
              {/* Add your profile image here */}
              <span className="text-6xl">👨‍💻</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
