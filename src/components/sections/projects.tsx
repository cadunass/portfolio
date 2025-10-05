"use client";

import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { PROJECTS } from "@/constants";
import { useInView } from "@/hooks/use-in-view";

export function Projects() {
  const { ref, isInView } = useInView();

  const words = [
    { text: "Featured", className: "text-neutral-800 dark:text-white" },
    { text: "Projects", className: "text-neutral-800 dark:text-white" },
  ];

  if (PROJECTS.length === 0) {
    return (
      <section id="projects" ref={ref} className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-4xl font-bold mb-12 text-center">
            {isInView && <TypewriterEffect words={words} />}
          </div>
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
      ref={ref}
      className="py-20 px-4 bg-neutral-50 dark:bg-neutral-900/50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-4xl font-bold mb-12 text-center">
          {isInView && <TypewriterEffect words={words} />}
        </div>
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "0.3s" }}
        >
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
