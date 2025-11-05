export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
  featured: boolean;
  // Optional extended fields for richer project entries
  details?: string;
  features?: string[];
  responsibilities?: string[];
  outcome?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  icon: string;
  category: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  badge?: string;
  description: string;
  skills: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
  url: string;
  image?: string;
  content?: string; // Full markdown/HTML content for in-site viewing
}

export interface Contact {
  name: string;
  email: string;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Profile {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  location: string;
  email: string;
  socialLinks: SocialLink[];
}
