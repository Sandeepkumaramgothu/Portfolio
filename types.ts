export interface Project {
  title: string;
  period: string;
  description: string[];
  tags: string[];
  link?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  details: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
