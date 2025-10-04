"use client";

import { PROJECTS } from "@/constants";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";

export function Projects() {
  if (PROJECTS.length === 0) {
    return (
      <section
        id="projects"
        className="py-20 px-4 bg-neutral-50 dark:bg-neutral-900/50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-neutral-800 dark:text-white mb-12 text-center">
            Featured Projects
          </h2>
          <div className="text-center text-neutral-600 dark:text-neutral-400">
            <p>Projects coming soon! Check back later to see my work.</p>
            <p className="mt-2 text-sm">
              Update the projects data in{" "}
              <code className="px-2 py-1 bg-neutral-200 dark:bg-neutral-800 rounded">
                src/constants/projects.ts
              </code>
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-neutral-50 dark:bg-neutral-900/50"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-neutral-800 dark:text-white mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              {project.image && (
                <div className="w-full h-48 bg-neutral-200 dark:bg-neutral-700 rounded-lg mb-4 overflow-hidden relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <h3 className="text-xl font-bold text-neutral-800 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-white transition-colors"
                  >
                    <IconBrandGithub size={20} />
                    <span className="text-sm">Code</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-white transition-colors"
                  >
                    <IconExternalLink size={20} />
                    <span className="text-sm">Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
