"use client";

import { EXPERIENCE } from "@/constants";

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

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-neutral-800 dark:text-white mb-12 text-center">
          Work Experience
        </h2>
        <div className="space-y-8">
          {EXPERIENCE.map((exp) => (
            <div
              key={exp.id}
              className="border-l-4 border-neutral-800 dark:border-white pl-6 pb-8"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-2xl font-bold text-neutral-800 dark:text-white">
                  {exp.title}
                </h3>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  {exp.startDate} - {exp.endDate || "Present"}
                </span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
                <h4 className="text-lg font-semibold text-neutral-700 dark:text-neutral-300">
                  {exp.company}
                </h4>
                {exp.location && (
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">
                    • {exp.location}
                  </span>
                )}
              </div>
              <ul className="space-y-2 mb-4">
                {exp.description.map((desc) => (
                  <li
                    key={`${exp.id}-${desc.slice(0, 20)}`}
                    className="text-neutral-600 dark:text-neutral-300 list-disc list-inside"
                  >
                    {desc}
                  </li>
                ))}
              </ul>
              {exp.technologies && exp.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
