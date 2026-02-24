import { Profile, Project, Achievement, BlogPost, Certification } from '@/types';
import dp from "@/assets/dp.jpg"
import fitup from "@/assets/fitup.png"
import { blogContent1, blogContent2, blogContent3, blogContent4, blogContent5 } from './blog-contents';
import auralis from "@/assets/auralis.png"
import phishguard from "@/assets/phishguard.png"

export const profile: Profile = {
  name: "Kent Harold Belen",
  title: "Software Engineer | Tech Lead | Cybersecurity Specialist",
  bio: "Tech Lead at Catalyx Solutions and Software Engineer at Lujo PH. I architect security automation platforms, build scalable full-stack applications, and bridge the gap between software engineering and cybersecurity. Top 4% globally on TryHackMe, Base PH Hackathon Winner, and AWS Cloud Club committee member — I ship products that solve real problems.",
  avatar: dp.src,
  location: "Olongapo, Philippines",
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
    id: "0",
    title: "PhishGuard",
    description: "A serverless SaaS platform re-architected from Auralis for scalable phishing detection and threat intelligence. Aggregates multi-source CTI from VirusTotal, AbuseIPDB, IPQualityScore, Shodan, URLhaus, and OTX with AI-assisted verdict generation and confidence scoring.",
    image: phishguard.src,
    technologies: ["AWS Lambda", "DynamoDB", "Cloudflare R2", "Gmail API", "IMAP", "VirusTotal", "AbuseIPDB", "IPQualityScore", "Shodan", "OTX", "URLhaus", "AI/ML"],
    liveUrl: "https://phishguard-chi.vercel.app/",
    githubUrl: "https://github.com/kentdevu",
    featured: true,
    highlight: true,
    features: [
      "Automated email ingestion via Gmail API and IMAP (IDLE) for real-time phishing analysis",
      "CTI aggregation from VirusTotal, AbuseIPDB, IPQualityScore, Shodan, URLhaus, and OTX",
      "AI-based multi-source correlation with unified verdicts and confidence scoring",
      "Serverless microservice architecture with horizontal scaling and tenant-based isolation",
      "DynamoDB for threat storage, Cloudflare R2 for artifacts, Vercel for frontend"
    ],
    outcome: "Reduced manual phishing triage by over 80% through automated CTI aggregation and AI-assisted decision logic."
  },
  {
    id: "1",
    title: "Auralis",
    description: "An end-to-end automated phishing detection & threat intelligence platform that reduced manual phishing analysis workload by 70–75%. Features automated email ingestion, multi-source CTI aggregation, AI-based verdict generation, and an interactive SOC-style analyst dashboard.",
    image: auralis.src,
    technologies: ["AI", "Security Automation", "n8n", "VirusTotal API", "Gmail API", "IMAP", "SOC Dashboard"],
    liveUrl: "#",
    githubUrl: "https://github.com/kentdevu",
    featured: true,
    details: "Presented at the First AI Regional Conference (GDG) at Holy Angel University.",
    features: [
      "Automated email ingestion via IMAP and Gmail API",
      "Multi-source CTI aggregation (VirusTotal, URL/attachment analysis)",
      "AI-driven phishing verdict and risk scoring",
      "Interactive analyst dashboard for threat visualization",
      "n8n workflow orchestration for email triage"
    ],
    outcome: "Reduced manual phishing analysis workload by 70–75% through AI-assisted automation."
  },
  {
    id: "2",
    title: "Avitus IMS",
    description: "A nationwide centralized inventory management system supporting multiple Avitus branches across the Philippines with real-time tracking, stock movement logging, and branch-level visibility.",
    image: "/assets/icon/avitus.png",
    technologies: ["Django", "Next.js", "MySQL", "REST API", "MUI", "TanStack"],
    liveUrl: "#",
    githubUrl: "https://github.com/kentdevu",
    featured: true,
    features: [
      "Real-time inventory tracking across branches",
      "Stock movement logging and branch-level visibility",
      "Scalable REST API for products, suppliers & transactions",
      "Responsive admin dashboard with advanced reporting"
    ],
    outcome: "Improved inventory accuracy and operational efficiency across multiple branches nationwide."
  },
  {
    id: "3",
    title: "FitUp",
    description: "An AI-powered fitness planner that generates structured workout programs based on user goals, body metrics, and experience level. Features progress tracking, analytics, and adaptive recommendations.",
    image: fitup.src,
    technologies: ["React", "TypeScript", "Node.js", "Groq API", "PostgreSQL"],
    liveUrl: "https://fit-up-dun.vercel.app/",
    githubUrl: "https://github.com/kentdevu/fitup",
    featured: true,
    features: [
      "AI-driven personalized workout program generation",
      "Progress tracking and fitness analytics",
      "Adaptive recommendations based on user performance",
      "Natural language reasoning via OpenAI API"
    ],
    outcome: "Increased user engagement by 40% through personalized AI recommendations."
  },
  {
    id: "4",
    title: "AckAI",
    description: "A real-time AI legal assistance platform built for the AWS Cloud Club PH Innovation Cup 2025 hackathon. Features conversational AI, intelligent document retrieval, and secure cloud-native architecture.",
    image: "/assets/icon/ackai-placeholder.svg",
    technologies: ["Agora AI", "React", "Express", "DynamoDB", "Amazon Kendra", "S3"],
    liveUrl: "#",
    githubUrl: "https://github.com/kentdevu",
    featured: false,
    features: [
      "Real-time AI conversational legal assistant",
      "Intelligent document retrieval via Amazon Kendra",
      "Scalable backend with DynamoDB and S3",
      "Secure context storage and search"
    ],
    outcome: "Built and presented at AWS Cloud Club PH Innovation Cup 2025."
  },
  {
    id: "5",
    title: "TryHackMe Labs",
    description: "Completed extensive hands-on security labs covering SIEM, threat detection, incident response, and privilege escalation. Consistently ranked in the Top 4% globally.",
    image: "/assets/badge/tryhackme_logo.jpg",
    technologies: ["SIEM", "Threat Detection", "Incident Response", "Privilege Escalation", "SOC"],
    liveUrl: "https://tryhackme.com/p/belenkentharold",
    featured: false
  },
  {
    id: "6",
    title: "Security Tools Practice",
    description: "Conducted penetration testing, vulnerability assessments, and intelligence-driven investigations using industry-standard offensive and defensive security tools.",
    image: "/assets/icon/security-placeholder.svg",
    technologies: ["Burp Suite", "Wireshark", "Metasploit", "Hashcat", "MISP", "OpenCTI"],
    liveUrl: "#",
    featured: false
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
    title: "Software Engineer Intern at Kloudtech",
    description: "Developed high-performance, secure backend and frontend components for SaaS applications. Optimized CI/CD workflows, reducing deployment times by 20%.",
    date: "March 2025",
    icon: "code",
    category: "Professional"
  },
  {
    id: "4",
    title: "AWS Cloud Club PH Innovation Cup 2025",
    description: "Built AckAI — a real-time AI legal assistance platform using Agora AI, Amazon Kendra, DynamoDB, and S3 for the national hackathon.",
    date: "June 2025",
    icon: "trophy",
    category: "Competition"
  },
  {
    id: "5",
    title: "First AI Regional Conference Hackathon",
    description: "Presented Auralis — an automated phishing detection platform at the GDG First AI Regional Conference at Holy Angel University.",
    date: "August 2025",
    icon: "presentation",
    category: "Competition"
  },
  {
    id: "6",
    title: "Top 4% Global on TryHackMe",
    description: "Achieved a consistent Top 4% global ranking on TryHackMe through hands-on SIEM, threat detection, incident response, and privilege escalation labs.",
    date: "August 2025",
    icon: "trophy",
    category: "Education"
  },
  {
    id: "7",
    title: "Cofounded Catalyx Solutions — Tech Lead",
    description: "Cofounded Catalyx Solutions and took on the Tech Lead role. Architected security automation platforms improving phishing detection efficiency by 70% and engineered scalable APIs cutting manual triage by 10 hrs/week.",
    date: "October 2025",
    icon: "entrepreneurship",
    category: "Entrepreneurship"
  },
  {
    id: "8",
    title: "Winner — Base PH Hackathon",
    description: "Won the Base PH Hackathon, demonstrating innovation and technical excellence in a competitive national event.",
    date: "October 2025",
    icon: "trophy",
    category: "Competition"
  },
  {
    id: "9",
    title: "Software Engineer at Lujo PH",
    description: "Developing and maintaining scalable web applications and backend services. Building optimized REST APIs for improved system reliability and performance across production workloads.",
    date: "November 2025",
    icon: "code",
    category: "Professional"
  }
];

export const certifications: Certification[] = [
  {
    id: "1",
    title: "AWS Cloud Essentials",
    issuer: "Amazon Web Services",
    date: "2025",
    expiryDate: "2028",
    credentialId: "AWS-SA-123456",
    credentialUrl: "https://www.credly.com/badges/6584f3ec-0d4c-4a14-a5ff-5aef1420fc46/linked_in_profile",
    badge: "/assets/badge/awsbadge.png",
    description: "Validates expertise in designing distributed systems on AWS with emphasis on scalability, elasticity, security, and cost-optimization.",
    skills: ["AWS", "Cloud Architecture", "EC2", "S3", "RDS", "VPC", "CloudFormation"]
  },
  {
    id: "2",
    title: "Cisco CCNA ITN - Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "2025",
    expiryDate: "2028",
    credentialId: "CCNA-ITN-001",
    credentialUrl: "https://www.credly.com/badges/74a559a7-755c-4584-98f8-fd03ea9eb594",
    badge: "/assets/badge/CCNAITN__1_.png",
    description: "Foundational networking concepts including network protocols, LAN switching technologies, and basic router configurations.",
    skills: ["Networking", "TCP/IP", "Ethernet", "Switching", "Routing Fundamentals"]
  },
  {
    id: "3",
    title: "Cisco CCNA ITN - Cyber Threat Management",
    issuer: "Cisco Networking Academy",
    date: "2025",
    expiryDate: "2028",
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
    expiryDate: "2028",
    credentialId: "CCNA-ITN-003",
    credentialUrl: "https://www.credly.com/badges/8ad03ffd-8812-46cb-8971-b375e7806b8c",
    badge: "/assets/badge/CCNAITN__3_.png",
    description: "Enterprise networking concepts, WAN technologies, QoS, network security, and network automation.",
    skills: ["WAN Technologies", "QoS", "Network Security", "Network Automation", "SDN"]
  },
  {
    id: "5",
    title: "Cloud Computing Fundamentals",
    issuer: "Data Camp",
    date: "2025",
    expiryDate: "2028",
    credentialId: "CCF-2023-001",
    credentialUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/course/c2d5ba4bbb9d4c68c90f860038558564fc73b203",
    badge: "/assets/badge/cloudcom.png",
    description: "Comprehensive understanding of cloud computing models, deployment strategies, and cloud service management.",
    skills: ["Cloud Computing", "IaaS", "PaaS", "SaaS", "Cloud Security", "Migration Strategies"]
  },
  {
    id: "6",
    title: "Understanding Data Engineering",
    issuer: "Data Camp",
    date: "2025",
    expiryDate: "2028",
    credentialId: "DEP-2024-001",
    credentialUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/course/74f98fc4970e6a69148bc646a17aef7f16e5f4ac",
    badge: "/assets/badge/dataengr.png",
    description: "Advanced skills in designing, building, and maintaining data pipelines and data infrastructure systems.",
    skills: ["Data Pipelines", "ETL/ELT", "Big Data", "Apache Spark", "Data Warehousing", "Stream Processing"]
  },
  {
    id: "7",
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
    id: "8",
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
    id: "9",
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
    id: "10",
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
    id: "11",
    title: "Understanding Machine Learning",
    issuer: "Data Camp",
    date: "2025",
    credentialId: "MLF-2025-001",
    credentialUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/course/8a83c587ba8245e23846ac43ddf49a733ef19c05",
    badge: "/assets/badge/ml.png",
    description: "Core machine learning concepts including supervised and unsupervised learning, model evaluation, and deployment.",
    skills: ["Machine Learning", "Supervised Learning", "Unsupervised Learning", "Model Evaluation", "Feature Engineering", "TensorFlow"]
  },
  {
    id: "12",
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
    id: "13",
    title: "Cyber Security 101",
    issuer: "TryHackMe",
    date: "2025",
    credentialId: "THM-EWBPJEGR50",
    credentialUrl: "https://tryhackme.com/certificate/THM-EWBPJEGR50",
    badge: "/assets/badge/tryhackme_logo.jpg",
    description: "Comprehensive introduction to cybersecurity principles and practices.",
    skills: ["Cybersecurity Fundamentals", "Threat Analysis", "Vulnerability Assessment", "Network Security", "Incident Response"]
  }
];

export const visionMission = {
  vision: "To bridge the gap between software engineering and cybersecurity, building intelligent systems that protect and empower organizations at scale — while mentoring the next generation of engineers.",
  mission: "Architecting secure, scalable applications and AI-driven automation that solve real-world problems. From threat intelligence platforms to nationwide inventory systems, I ship products that make measurable impact — with clean code, 99.9% uptime, and relentless curiosity."
};

// This would typically come from an external API
export const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "TryHackMe Pre-Security Learning Journey",
    excerpt: "My journey through TryHackMe's Pre-Security path, covering the fundamentals of cybersecurity from networking to Linux and Windows.",
    publishedAt: "2025-09-07",
    readTime: "8 min read",
    tags: ["CyberSecurity", "TryHackMe", "Learning"],
    url: "https://github.com/KentDevu/CyberSecurity-Related-Blogs/blob/master/tryhackme-presecurity-journey.md",
    image: "/blog-1.jpg",
    content: blogContent1
  },
  {
    id: "2",
    title: "Cybersecurity 101: Room 1 - Start Your Journey",
    excerpt: "Exploring offensive security, defensive security, and essential research skills to kickstart my cybersecurity journey.",
    publishedAt: "2024-01-08",
    readTime: "12 min read", 
    tags: ["CyberSecurity", "TryHackMe", "Learning"],
    url: "https://github.com/KentDevu/CyberSecurity-Related-Blogs/blob/master/cybersecurity101-room1.md",
    image: "/blog-2.jpg",
    content: blogContent2
  },
  {
    id: "3",
    title: "Cybersecurity 101: Room 2 - Linux Fundamentals",
    excerpt: "Mastering the Linux command line through three comprehensive parts, from basics to power user utilities.",
    publishedAt: "2024-01-01",
    readTime: "6 min read",
    tags: ["CyberSecurity", "TryHackMe", "Linux"],
    url: "https://github.com/KentDevu/CyberSecurity-Related-Blogs/blob/master/cybersecurity101-room2.md",
    content: blogContent3
  },
  {
    id: "4",
    title: "Cybersecurity 101: Room 3 - Windows & Active Directory",
    excerpt: "Diving into Windows security fundamentals and Active Directory basics for enterprise environments.",
    publishedAt: "2024-01-01",
    readTime: "6 min read",
    tags: ["CyberSecurity", "TryHackMe", "Windows"],
    url: "https://github.com/KentDevu/CyberSecurity-Related-Blogs/blob/master/cybersecurity101-room3.md",
    content: blogContent4
  },
  {
    id: "5",
    title: "Cybersecurity 101: Room 4 - Command Line Mastery",
    excerpt: "Learning essential command-line skills across Windows and Linux for effective system administration.",
    publishedAt: "2024-01-01",
    readTime: "6 min read",
    tags: ["CyberSecurity", "TryHackMe", "CommandLine"],
    url: "https://github.com/KentDevu/CyberSecurity-Related-Blogs/blob/master/cybersecurity101-room4.md",
    content: blogContent5
  },
];
