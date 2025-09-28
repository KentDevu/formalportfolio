import { Profile, Project, Achievement, BlogPost, Certification } from '@/types';
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
    },
    {
      name: "TryHackMe",
      url: "https://tryhackme.com/p/belenkentharold",
      icon: "tryhackme"
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
  }
];

export const achievements: Achievement[] = [
  {
    id: "1",
    title: "AWS Student Cloud Club PH Committee Member",
    description: "Became a committee member of AWS Student Cloud Club Philippines, contributing to cloud community initiatives and educational programs.",
    date: "January 2025",
    icon: "award",
    category: "Leadership"
  },
  {
    id: "2",
    title: "DataCamp Scholar",
    description: "Selected as a DataCamp Scholar, gaining access to comprehensive data science and analytics learning resources.",
    date: "February 2025",
    icon: "trophy",
    category: "Education"
  },
  {
    id: "3",
    title: "Kloudtech Internship",
    description: "Started internship at Kloudtech, gaining hands-on experience in cloud technologies and enterprise solutions.",
    date: "March 2025",
    icon: "code",
    category: "Professional"
  },
  {
    id: "4",
    title: "TryHackMe Trainee",
    description: "Became a TryHackMe trainee, diving into cybersecurity fundamentals and hands-on ethical hacking challenges.",
    date: "August 2025",
    icon: "trophy",
    category: "Education"
  },
];

export const certifications: Certification[] = [
  {
    id: "1",
    title: "Pre-Security",
    issuer: "TryHackMe",
    date: "2025",
    credentialId: "THM-FOQIJG66QM",
    credentialUrl: "https://tryhackme.com/certificate/THM-FOQIJG66QM",
    badge: "/assets/badge/tryhackme_logo.jpg",
    description: "Fundamental understanding of networking concepts.",
    skills: ["Cybersecurity", "Networking Basics", "Linux Fundamentals", "Web Security", "Cryptography"]
  },
  {
    id: "2",
    title: "Cyber Security 101",
    issuer: "TryHackMe",
    date: "2025",
    credentialId: "THM-EWBPJEGR50",
    credentialUrl: "https://tryhackme.com/certificate/THM-EWBPJEGR50",
    badge: "/assets/badge/tryhackme_logo.jpg",
    description: "Comprehensive introduction to cybersecurity principles and practices.",
    skills: ["Cybersecurity Fundamentals", "Threat Analysis", "Vulnerability Assessment", "Network Security", "Incident Response"]
  },
  {
    id: "3",
    title: "Cisco CCNA ITN - Cyber Threat Management",
    issuer: "Cisco Networking Academy",
    date: "2025",
    // expiryDate: "2028",
    credentialId: "CCNA-ITN-002",
    credentialUrl: "https://www.credly.com/badges/8bff5203-3bf3-4959-aae5-028a71f825f3",
    badge: "/assets/badge/CCNAITN__2_.png",
    description: "Advanced switching concepts, VLAN configuration, inter-VLAN routing, and wireless networking fundamentals.",
    skills: ["VLAN Configuration", "STP", "EtherChannel", "OSPF", "Wireless Networks"]
  },
  {
    id: "4",
    title: "Cisco CCNA ITN - Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "2025",
    // expiryDate: "2028",
    credentialId: "CCNA-ITN-003",
    credentialUrl: "https://www.credly.com/badges/8ad03ffd-8812-46cb-8971-b375e7806b8c",
    badge: "/assets/badge/CCNAITN__3_.png",
    description: "Enterprise networking concepts, WAN technologies, QoS, network security, and network automation.",
    skills: ["WAN Technologies", "QoS", "Network Security", "Network Automation", "SDN"]
  },
  {
    id: "5",
    title: "Cisco CCNA ITN - Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "2025",
    // expiryDate: "2028",
    credentialId: "CCNA-ITN-001",
    credentialUrl: "https://www.credly.com/badges/74a559a7-755c-4584-98f8-fd03ea9eb594",
    badge: "/assets/badge/CCNAITN__1_.png",
    description: "Foundational networking concepts including network protocols, LAN switching technologies, and basic router configurations.",
    skills: ["Networking", "TCP/IP", "Ethernet", "Switching", "Routing Fundamentals"]
  },
  {
    id: "6",
    title: "AWS Cloud Essentials",
    issuer: "Amazon Web Services",
    date: "2025",
    // expiryDate: "2028",
    credentialId: "AWS-SA-123456",
    credentialUrl: "https://www.credly.com/badges/6584f3ec-0d4c-4a14-a5ff-5aef1420fc46/linked_in_profile",
    badge: "/assets/badge/awsbadge.png",
    description: "Validates expertise in designing distributed systems on AWS with emphasis on scalability, elasticity, security, and cost-optimization.",
    skills: ["AWS", "Cloud Architecture", "EC2", "S3", "RDS", "VPC", "CloudFormation"]
  },
  {
    id: "7",
    title: "Cloud Computing Fundamentals",
    issuer: "Data Camp",
    date: "2025",
    // expiryDate: "2028",
    credentialId: "CCF-2023-001",
    credentialUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/course/c2d5ba4bbb9d4c68c90f860038558564fc73b203",
    badge: "/assets/badge/cloudcom.png",
    description: "Comprehensive understanding of cloud computing models, deployment strategies, and cloud service management.",
    skills: ["Cloud Computing", "IaaS", "PaaS", "SaaS", "Cloud Security", "Migration Strategies"]
  },
  {
    id: "8",
    title: "Understanding Data Engineering",
    issuer: "Data Camp",
    date: "2025",
    // expiryDate: "2028",
    credentialId: "DEP-2024-001",
    credentialUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/course/74f98fc4970e6a69148bc646a17aef7f16e5f4ac",
    badge: "/assets/badge/dataengr.png",
    description: "Advanced skills in designing, building, and maintaining data pipelines and data infrastructure systems.",
    skills: ["Data Pipelines", "ETL/ELT", "Big Data", "Apache Spark", "Data Warehousing", "Stream Processing"]
  },
  {
    id: "9",
    title: "Data Literacy Fundamentals",
    issuer: "Data Camp",
    date: "2025",
    credentialId: "DLC-2025-001",
    credentialUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/track/eb170ac2c08b2c0c5858c7914951a5b29779eb33",
    badge: "/assets/badge/datalitrec.png",
    description: "Fundamental understanding of data concepts, data analysis techniques, and data-driven decision making.",
    skills: ["Data Analysis", "Statistical Thinking", "Data Interpretation", "Business Intelligence", "Data Ethics"]
  },
  {
    id: "10",
    title: "Understanding Data Science",
    issuer: "Data Camp",
    date: "2025",
    credentialId: "DSP-2025-001",
    credentialUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/course/b97120c68c56ae9dd109b9188043f876a894fb45",
    badge: "/assets/badge/datasci.png",
    description: "Comprehensive data science methodologies including machine learning, statistical analysis, and predictive modeling.",
    skills: ["Machine Learning", "Statistical Analysis", "Python", "R", "Data Mining", "Predictive Analytics"]
  },
  {
    id: "11",
    title: "Understanding Data Visualization",
    issuer: "Data Camp",
    date: "2025",
    credentialId: "DVS-2025-001",
    credentialUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/course/c26542d894424f8c16a44838dc6f4fa83974fcaf",
    badge: "/assets/badge/datavis.png",
    description: "Expert-level skills in creating compelling data visualizations and interactive dashboards for business insights.",
    skills: ["Data Visualization", "Tableau", "Power BI", "D3.js", "Dashboard Design", "Visual Analytics"]
  },
  {
    id: "12",
    title: "Introduction to Python Programming",
    issuer: "Data Camp",
    date: "2025",
    credentialId: "PYT-INTRO-2025-001",
    credentialUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/course/9b66a84852a7341d96af39ddd4f61dbd7b409423",
    badge: "/assets/badge/introtopy.png",
    description: "Foundational Python programming skills including syntax, data structures, and basic programming concepts.",
    skills: ["Python Programming", "Object-Oriented Programming", "Data Structures", "Algorithms", "Code Optimization"]
  },
  {
    id: "13",
    title: "Understanding Machine Learning",
    issuer: "Data Camp",
    date: "2025",
    credentialId: "MLF-2025-001",
    credentialUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/course/8a83c587ba8245e23846ac43ddf49a733ef19c05",
    badge: "/assets/badge/ml.png",
    description: "Core machine learning concepts including supervised and unsupervised learning, model evaluation, and deployment.",
    skills: ["Machine Learning", "Supervised Learning", "Unsupervised Learning", "Model Evaluation", "Feature Engineering", "TensorFlow"]
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
    url: "https://github.com/KentDevu/CyberSecurity-Related-Blogs/blob/master/tryhackme-presecurity-journey.md",
    image: "/blog-1.jpg"
  },
  {
    id: "2",
    title: "Tryhackme CyberSecurity-101 Learning Path Room 1",
    excerpt: "Exploring the Tryhackme CyberSecurity-101 Learning Path Room 1",
    publishedAt: "2024-01-08",
    readTime: "12 min read", 
    tags: ["CyberSecurity", "TryHackMe", "Learning"],
    url: "https://github.com/KentDevu/CyberSecurity-Related-Blogs/blob/master/cybersecurity101-room1.md",
    image: "/blog-2.jpg"
  },
  {
    id: "3",
    title: "Tryhackme CyberSecurity-101 Learning Path Room 2",
    excerpt: "Exploring the Tryhackme CyberSecurity-101 Learning Path Room 2",
    publishedAt: "2024-01-01",
    readTime: "6 min read",
    tags: ["CyberSecurity", "TryHackMe", "Learning"],
    url: "https://github.com/KentDevu/CyberSecurity-Related-Blogs/blob/master/cybersecurity101-room2.md"
  },
  {
    id: "4",
    title: "Tryhackme CyberSecurity-101 Learning Path Room 3",
    excerpt: "Exploring the Tryhackme CyberSecurity-101 Learning Path Room 3",
    publishedAt: "2024-01-01",
    readTime: "6 min read",
    tags: ["CyberSecurity", "TryHackMe", "Learning"],
    url: "https://github.com/KentDevu/CyberSecurity-Related-Blogs/blob/master/cybersecurity101-room3.md"
  },
  {
    id: "5",
    title: "Tryhackme CyberSecurity-101 Learning Path Room 4",
    excerpt: "Exploring the Tryhackme CyberSecurity-101 Learning Path Room 4",
    publishedAt: "2024-01-01",
    readTime: "6 min read",
    tags: ["CyberSecurity", "TryHackMe", "Learning"],
    url: "https://github.com/KentDevu/CyberSecurity-Related-Blogs/blob/master/cybersecurity101-room4.md"
  },
];
