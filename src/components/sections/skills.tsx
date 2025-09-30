"use client";

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function Skills() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-center text-neutral-800 dark:text-white mb-4">
          Skills & Technologies
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-center max-w-2xl mx-auto">
          Technologies and skills I work with
        </p>
      </div>
      <InfiniteMovingCards items={skills} direction="right" speed="slow" />
    </div>
  );
}

const skills = [
  {
    quote: "Rust",
  },
  {
    quote: "TypeScript",
  },
  {
    quote: "Web Development",
  },
  {
    quote: "React.js",
  },
  {
    quote: "Web3",
  },
  {
    quote: "Next.js",
  },
  {
    quote: "Tailwind",
  },
  {
    quote: "Software Development Life Cycle",
  },
  {
    quote: "Prompt Engineering",
  },
  {
    quote: "Cypress",
  },
  {
    quote: "Docker",
  },
  {
    quote: "REST API",
  },
  {
    quote: "Git",
  },
  {
    quote: "Blockchain",
  },
  {
    quote: "JavaScript",
  },
  {
    quote: "HTML",
  },
  {
    quote: "CSS",
  },
  {
    quote: "SQL",
  },

  {
    quote: "Python",
  },
  {
    quote: "Java",
  },
  {
    quote: "Artificial Intelligence (AI)",
  },
  {
    quote: "Vue.js",
  },
  {
    quote: "Node.js",
  },
  {
    quote: "C",
  },
  {
    quote: "C++",
  },
  {
    quote: "DevOps",
  },
  {
    quote: "Full Stack Development",
  },
  {
    quote: "Google Cloud Platform (GCP)",
  },
  {
    quote: "Kubernetes",
  },
  {
    quote: "Firebase",
  },
];
