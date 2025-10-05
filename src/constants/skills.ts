import type { Skill } from "@/types";

// Skills data organized by category for better maintainability
export const SKILLS: Skill[] = [
  // Programming Languages
  { name: "Rust", category: "language", proficiency: "advanced" },
  { name: "TypeScript", category: "language", proficiency: "expert" },
  { name: "JavaScript", category: "language", proficiency: "expert" },
  { name: "Python", category: "language", proficiency: "advanced" },
  { name: "Java", category: "language", proficiency: "intermediate" },
  { name: "C", category: "language", proficiency: "intermediate" },
  { name: "C++", category: "language", proficiency: "intermediate" },
  { name: "SQL", category: "language", proficiency: "advanced" },

  // Frontend
  { name: "React.js", category: "frontend", proficiency: "expert" },
  { name: "Next.js", category: "frontend", proficiency: "expert" },
  { name: "Vue.js", category: "frontend", proficiency: "advanced" },
  { name: "HTML", category: "frontend", proficiency: "expert" },
  { name: "CSS", category: "frontend", proficiency: "expert" },
  { name: "Tailwind", category: "frontend", proficiency: "expert" },

  // Backend & APIs
  { name: "Node.js", category: "backend", proficiency: "advanced" },
  { name: "REST API", category: "backend", proficiency: "advanced" },

  // DevOps & Tools
  { name: "Docker", category: "devops", proficiency: "advanced" },
  { name: "Kubernetes", category: "devops", proficiency: "intermediate" },
  { name: "Git", category: "devops", proficiency: "expert" },
  { name: "GCP", category: "devops", proficiency: "advanced" },
  { name: "Firebase", category: "devops", proficiency: "advanced" },

  // Testing
  { name: "Cypress", category: "testing", proficiency: "advanced" },

  // Specialized
  { name: "Web3", category: "specialized", proficiency: "advanced" },
  { name: "Blockchain", category: "specialized", proficiency: "advanced" },
  { name: "AI/ML", category: "specialized", proficiency: "advanced" },
  {
    name: "Prompt Engineering",
    category: "specialized",
    proficiency: "advanced",
  },

  // General
  { name: "Web Development", category: "general", proficiency: "expert" },
  { name: "Full Stack", category: "general", proficiency: "expert" },
  { name: "DevOps", category: "general", proficiency: "advanced" },
  { name: "SDLC", category: "general", proficiency: "expert" },
];

// For the infinite scroll component, convert to the format it expects
export const SKILLS_FOR_DISPLAY = SKILLS.map((skill) => ({
  quote: skill.name,
}));
