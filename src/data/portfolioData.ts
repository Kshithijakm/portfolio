export type ProjectCategory = 'AI/ML' | 'Full-Stack & DevOps';

export interface NavLinkItem {
  label: string;
  href: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}

export interface PersonalInfo {
  name: string;
  availabilityBadge: string;
  headline: string;
  bio: string;
  resumeUrl: string;
  socials: SocialLinks;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  location?: string;
  period: string;
  highlights: string[];
}

export interface ProjectItem {
  title: string;
  subtitle?: string;
  category: ProjectCategory;
  highlights: string[];
  techStack: string[];
  repoUrl: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
}

export interface AchievementItem {
  title: string;
  description?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
}

export interface PortfolioData {
  navLinks: NavLinkItem[];
  personalInfo: PersonalInfo;
  experiences: ExperienceItem[];
  projectCategories: ('All' | ProjectCategory)[];
  projects: ProjectItem[];
  skillCategories: SkillCategory[];
  education: EducationItem[];
  achievements: AchievementItem[];
  certifications: CertificationItem[];
}

export const portfolioData: PortfolioData = {
  navLinks: [
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ],

  personalInfo: {
    name: 'Kshithija K M',
    availabilityBadge: 'Open to Full-Time Software Engineering Roles (2027 Grad)',
    headline: 'Final-Year CS Undergraduate | Full-Stack, AI/ML & Backend Systems Developer',
    bio: 'Computer Science undergraduate (9.76 CGPA) with strong foundations in backend systems, full-stack development, AI/ML, and automated testing. Experienced in building scalable applications with Python, Java, React, and FastAPI, with hands-on mission planning and validation experience at ISRO (ISTRAC).',
    resumeUrl: '/resume.pdf',
    socials: {
      github: 'https://github.com/Kshithijakm',
      linkedin: 'https://linkedin.com/in/kshithija-km',
      email: 'kshithijakm2005@gmail.com',
    },
  },

  experiences: [
    {
      role: 'Project Intern',
      organization: 'ISRO Telemetry, Tracking and Command Network (ISTRAC)',
      location: 'Bengaluru',
      period: 'Jul 2026 – Aug 2026',
      highlights: [
        'Worked on a mission planning and visualization application using Python and modern dashboard technologies.',
        'Performed functional validation, debugging, and integration testing to improve application reliability and performance.',
      ],
    },
    {
      role: 'Deep Learning & Reinforcement Learning Intern',
      organization: 'E2E Management Services',
      period: 'May 2025 – Jun 2025',
      highlights: [
        'Built a crop yield prediction model using NDVI satellite data achieving ~91% accuracy.',
        'Developed a CNN-based plant disease detection system and integrated a multilingual chatbot for farmer recommendations.',
      ],
    },
  ],

  projectCategories: ['All', 'AI/ML', 'Full-Stack & DevOps'],

  projects: [
    {
      title: 'AI Proof of Execution',
      subtitle: 'Deployed AI Transparency & Audit System',
      category: 'AI/ML',
      highlights: [
        'Built and deployed a full-stack AI transparency platform to track and verify AI decision workflows.',
        'Integrated fairness evaluation, bias detection models, and secure proof-of-execution logging for auditable ML outputs.',
      ],
      techStack: ['React', 'FastAPI', 'Python'],
      repoUrl: 'https://github.com/Kshithijakm',
    },
    {
      title: 'Medicine Exchange Platform',
      category: 'Full-Stack & DevOps',
      highlights: [
        'Designed a scalable healthcare platform for managing medicine donations, exchanges, and reservations.',
        'Integrated secure authentication, REST APIs, and OCR-based medicine recognition with end-to-end workflow validation.',
      ],
      techStack: ['React', 'FastAPI', 'Python', 'MongoDB'],
      repoUrl: 'https://github.com/Kshithijakm',
    },
    {
      title: 'Budget Tracker Web Application',
      subtitle: 'DevOps CI/CD Pipeline',
      category: 'Full-Stack & DevOps',
      highlights: [
        'Built and deployed a full-stack personal finance tracker with an automated GitHub Actions CI/CD pipeline, Jest unit testing, and Docker containerization.',
        'Integrated Trivy vulnerability scanning to block insecure builds prior to cloud deployment.',
      ],
      techStack: ['Node.js', 'Express', 'JavaScript', 'Docker', 'GitHub Actions', 'Trivy'],
      repoUrl: 'https://github.com/Kshithijakm',
    },
    {
      title: 'AI Disaster Decision Support System',
      category: 'AI/ML',
      highlights: [
        'Developed an AI-powered disaster management platform integrating ML models, real-time weather data, and rule-based advisories to predict climate risks and support preparedness.',
      ],
      techStack: ['React', 'FastAPI', 'Python'],
      repoUrl: 'https://github.com/Kshithijakm',
    },
  ],

  skillCategories: [
    {
      title: 'Languages & Core CS',
      skills: ['Java', 'Python', 'JavaScript', 'DSA', 'DBMS', 'OS', 'Computer Networks'],
    },
    {
      title: 'Backend & Web',
      skills: ['Node.js', 'FastAPI', 'REST APIs', 'React.js', 'HTML', 'CSS'],
    },
    {
      title: 'AI / ML',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'YOLOv5'],
    },
    {
      title: 'Databases & DevOps Tools',
      skills: ['SQL', 'MongoDB', 'Firebase', 'Git', 'GitHub', 'Docker', 'Jenkins', 'Postman', 'Trivy'],
    },
  ],

  education: [
    {
      degree: 'B.E. in Computer Science',
      institution: 'BNM Institute of Technology',
      period: '2023 – 2027',
      score: 'CGPA: 9.76',
    },
    {
      degree: 'Class XII (PUC)',
      institution: 'Sri Kumaran Composite PU College',
      period: '2023',
      score: '97.4%',
    },
    {
      degree: 'SSLC',
      institution: 'M.M.V.S',
      period: '2021',
      score: '98.4%',
    },
  ],

  achievements: [
    {
      title: 'Runner Up at Eureka 2025 — IIT Bombay',
    },
    {
      title: 'Student EMC Committee Member',
      description: 'Assisted in planning and organizing college events and student activities',
    },
  ],

  certifications: [
    {
      title: 'Red Hat System Administration (RH124)',
      issuer: 'Red Hat',
    },
    {
      title: 'MongoDB Basics',
      issuer: 'MongoDB University',
    },
    {
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco Networking Academy',
    },
    {
      title: 'Fundamentals of IoT Security',
      issuer: 'Infosys Springboard',
    },
    {
      title: 'Prompt Design in Vertex AI Skill Badge',
      issuer: 'Google',
    },
  ],
};
