"use client";

import { EXPERIENCE } from "@/constants";
import { Timeline } from "@/components/ui/timeline";

export function Experience() {
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
        <div>
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

          <div className="mb-6">
            {exp.description.map((desc, index) => (
              <p
                key={`${exp.id}-desc-${index}`}
                className="mb-3 text-xs md:text-sm font-normal text-neutral-700 dark:text-neutral-300"
              >
                • {desc}
              </p>
            ))}
          </div>

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
    <section id="experience" className="relative w-full overflow-clip">
      <Timeline
        data={timelineData}
        title="Work Experience"
        // description="My professional journey and contributions to various organizations."
      />
    </section>
  );
}
