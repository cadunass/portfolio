// Core type definitions for the portfolio application

export interface Skill {
  name: string;
  category?: string;
  proficiency?: "beginner" | "intermediate" | "advanced" | "expert";
}

export interface SocialLink {
  title: string;
  icon: React.ReactNode;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  github?: string;
  demo?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate?: string | "Present";
  summary: string;
  technologies?: string[];
  links?: { label: string; url: string }[];
}

export interface PersonalInfo {
  username: string;
  fullName: string[];
  title: string;
  bioStart: string;
  bioEnd: string;
  email?: string;
  location?: string;
  avatar?: string;
}
