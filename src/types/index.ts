export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  icon: string;
  category: string;
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
