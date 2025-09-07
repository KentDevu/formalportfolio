import { Profile, Project, Achievement, BlogPost } from '@/types';
import dp from "@/assets/dp.jpg"
import fitup from "@/assets/fitup.png"

export const profile: Profile = {
  name: "Kent Harold Belen",
  title: "Full Stack Developer, Cloud Specialist & Cybersecurity Enthusiast",
  bio: "Passionate developer with expertise in modern web technologies, cloud computing, and cybersecurity. I love building scalable applications and exploring cutting-edge technologies.",
  avatar: dp.src,
  location: "Dinalupihan, Bataan",
  email: "belenkentharold@gmail.com",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/kentdevu",
      icon: "github"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/kent-harold-belen-492601328",
      icon: "linkedin"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/kent.h.b",
      icon: "instagram"
    },
    {
      name: "Facebook",
      url: "https://facebook.com/harold.belen.92",
      icon: "facebook"
    }
  ]
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Fitup",
    description: "An exercise planner and tracker application powered by AI.",
    image: fitup.src,
    technologies: ["React", "TypeScript", "Node.js", "Groq API", "PostgreSQL"],
    liveUrl: "https://fit-up-dun.vercel.app/",
    githubUrl: "https://github.com/kentdevu/fitup",
    featured: true
  },
  {
    id: "2", 
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with real-time inventory, payment processing, and analytics dashboard.",
    image: "/project-2.jpg",
    technologies: ["Next.js", "Stripe", "Prisma", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://your-ecommerce.com",
    githubUrl: "https://github.com/yourusername/ecommerce",
    featured: true
  },
  {
    id: "3",
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for data analysis with real-time charts and customizable widgets.",
    image: "/project-3.jpg",
    technologies: ["React", "D3.js", "Python", "FastAPI", "Redis"],
    liveUrl: "https://your-dashboard.com",
    featured: false
  }
];

export const achievements: Achievement[] = [
  {
    id: "1",
    title: "AWS Certified Solutions Architect",
    description: "Achieved AWS Solutions Architect certification, demonstrating expertise in cloud architecture and best practices.",
    date: "2024",
    icon: "award",
    category: "Certification"
  },
  {
    id: "2",
    title: "Tech Conference Speaker",
    description: "Presented on 'Building Scalable React Applications' at Tech Summit 2024.",
    date: "2024",
    icon: "presentation",
    category: "Speaking"
  },
  {
    id: "3",
    title: "Open Source Contributor",
    description: "Contributed to major open source projects with 1000+ GitHub stars combined.",
    date: "2023-2024",
    icon: "code",
    category: "Open Source"
  },
  {
    id: "4",
    title: "Hackathon Winner",
    description: "First place in AI/ML category at Global Hackathon 2023.",
    date: "2023",
    icon: "trophy",
    category: "Competition"
  }
];

export const visionMission = {
  vision: "To leverage technology as a force for positive change, creating innovative solutions that enhance human capabilities and improve lives globally.",
  mission: "Building scalable, user-centric applications while staying at the forefront of emerging technologies. I strive to write clean, maintainable code and foster collaborative development environments."
};

// This would typically come from an external API
export const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "TryHackMe Pre-Security learning journey",
    excerpt: "I'm currently learning about cybersecurity and I'm using TryHackMe to learn about the basics of cybersecurity.",
    publishedAt: "2025-09-07",
    readTime: "8 min read",
    tags: ["CyberSecurity", "TryHackMe", "Learning"],
    url: "https://learncybersecwithme.blogspot.com/2025/09/tryhackme-pre-security-learning-journey.html",
    image: "/blog-1.jpg"
  },
  {
    id: "2",
    title: "AI Integration in Modern Web Apps",
    excerpt: "Exploring practical ways to integrate AI capabilities into web applications using modern APIs.",
    publishedAt: "2024-01-08",
    readTime: "12 min read", 
    tags: ["AI", "API", "Web Development"],
    url: "https://learncybersecwithme.blogspot.com/2025/09/tryhackme-pre-security-learning-journey.html",
    image: "/blog-2.jpg"
  },
  {
    id: "3",
    title: "The Future of TypeScript",
    excerpt: "A deep dive into upcoming TypeScript features and how they'll shape the future of web development.",
    publishedAt: "2024-01-01",
    readTime: "6 min read",
    tags: ["TypeScript", "JavaScript", "Future"],
    url: "https://learncybersecwithme.blogspot.com/2025/09/tryhackme-pre-security-learning-journey.html"
  }
];
