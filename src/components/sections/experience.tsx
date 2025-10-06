"use client";

import { IconExternalLink } from "@tabler/icons-react";
import { Timeline } from "@/components/ui/timeline";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { EXPERIENCE } from "@/constants";
import { useInView } from "@/hooks/use-in-view";

export function Experience() {
  const { ref, isInView } = useInView();

  const words = [
    { text: "Work", className: "text-black dark:text-white" },
    { text: "Experience", className: "text-black dark:text-white" },
  ];

  const titleComponent = (
    <h2 className="text-lg md:text-4xl font-bold">
      {isInView && <TypewriterEffect words={words} />}
    </h2>
  );

  if (EXPERIENCE.length === 0) {
    return (
      <section id="experience" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-neutral-800 dark:text-white mb-12 text-center">
            Work Experience
          </h2>
          <div className="text-center text-neutral-600 dark:text-neutral-400">
            <p>Experience section coming soon!</p>
            <p className="mt-2 text-sm">
              Update the experience data in{" "}
              <code className="px-2 py-1 bg-neutral-200 dark:bg-neutral-800 rounded">
                src/constants/experience.ts
              </code>
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Transform experience data to timeline format
  const timelineData = EXPERIENCE.map((exp) => {
    // Extract year from startDate (format: YYYY-MM or YYYY)
    const year = exp.startDate.split("-")[0];
    const endYear =
      exp.endDate && exp.endDate !== "Present"
        ? exp.endDate.split("-")[0]
        : "Present";

    const dateRange = year === endYear ? year : `${year} - ${endYear}`;

    return {
      title: dateRange,
      content: (
        <div className="group rounded-lg p-4 -m-4 transition-all duration-300 hover:bg-neutral-50/50 dark:hover:bg-neutral-800/30">
          <div className="mb-4">
            <h3 className="text-lg md:text-2xl font-bold text-neutral-800 dark:text-white mb-2">
              {exp.title}
            </h3>
            <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
              <h4 className="text-base md:text-lg font-semibold text-neutral-700 dark:text-neutral-300">
                {exp.company}
              </h4>
              {exp.location && (
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  • {exp.location}
                </span>
              )}
            </div>
          </div>

          <p className="mb-6 text-sm md:text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
            {exp.summary}
          </p>

          {exp.links && exp.links.length > 0 && (
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {exp.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                >
                  <IconExternalLink size={16} />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          )}

          {exp.technologies && exp.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full border border-neutral-200 dark:border-neutral-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      ),
    };
  });

  return (
    <section
      id="experience"
      className="relative w-full overflow-clip"
      ref={ref}
      aria-labelledby="experience-heading"
    >
      <Timeline
        data={timelineData}
        titleComponent={titleComponent}
        // description="My professional journey and contributions to various organizations."
      />
    </section>
  );
}
