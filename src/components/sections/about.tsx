"use client";

import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { useInView } from "@/hooks/use-in-view";

export function About() {
  const { ref, isInView } = useInView();

  const words = [
    { text: "About", className: "text-neutral-800 dark:text-white" },
    { text: "Me", className: "text-neutral-800 dark:text-white" },
  ];

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
            {/* i18n-ready: about-paragraph-1 */}
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Security-conscious and performance-driven Software Engineer with
              over 6 years of experience in full-stack web development,
              specializing in the design, development, and optimization of
              secure, scalable systems across the entire software development
              lifecycle.
            </p>
            {/* i18n-ready: about-paragraph-2 */}
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              I have the ability to architect robust solutions, manage projects
              from start to production, implement comprehensive security best
              practices, and lead the development of complex applications. My
              expertise spans frontend and backend development (including Rust,
              TypeScript, Next.js, React), API development, software security
              principles, repository management, and CI/CD pipeline
              implementation.
            </p>
            {/* <div className="pt-4">
              {PERSONAL_INFO.location && (
                <p className="text-neutral-600 dark:text-neutral-400">
                  <span className="font-semibold">Location:</span>{" "}
                  {PERSONAL_INFO.location}
                </p>
              )}
              {PERSONAL_INFO.email && (
                <p className="text-neutral-600 dark:text-neutral-400">
                  <span className="font-semibold">Email:</span>{" "}
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="hover:text-neutral-800 dark:hover:text-white transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </p>
              )}
            </div> */}
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
