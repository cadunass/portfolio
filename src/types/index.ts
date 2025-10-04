// Core type definitions for the portfolio application

export interface Skill {
  name: string;
  category?: string;
  proficiency?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
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
  endDate?: string | 'Present';
  description: string[];
  technologies?: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  email?: string;
  location?: string;
  avatar?: string;
}


