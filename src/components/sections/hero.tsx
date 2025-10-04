"use client";

import { PERSONAL_INFO } from "@/constants";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-neutral-800 dark:text-white mb-6 animate-fade-in">
          {PERSONAL_INFO.name}
        </h1>
        <h2 className="text-2xl md:text-3xl text-neutral-600 dark:text-neutral-300 mb-8">
          {PERSONAL_INFO.title}
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-12">
          {PERSONAL_INFO.bio}
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#contact"
            className="px-6 py-3 bg-neutral-800 dark:bg-white text-white dark:text-neutral-800 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="px-6 py-3 border-2 border-neutral-800 dark:border-white text-neutral-800 dark:text-white rounded-lg font-semibold hover:bg-neutral-800 hover:text-white dark:hover:bg-white dark:hover:text-neutral-800 transition-colors"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}

