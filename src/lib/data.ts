export const profile = {
  name: "Ronnel James Yacunas",
  title: "Full-Stack Engineer",
  tagline:
    "I build reliable, large-scale systems and AI-powered products — from database to UI.",
  about:
    "Full-Stack Engineer with 4+ years building reliable, large-scale web platforms and AI-powered products end-to-end, across fintech, creator commerce, and B2B SaaS. I’m equally comfortable owning features from database to UI, leading small teams, and turning complex requirements into products people actually use.",
  location: "Philippines · Remote",
  email: "yronneljames@gmail.com",
  socials: {
    github: "https://github.com/yacunas",
    // TODO: replace with your real LinkedIn URL
    linkedin: "https://www.linkedin.com/in/ronnel-james-yacunas",
  },
  resumes: {
    fullstack: "/Ronnel-James-Yacunas-Fullstack-Engineer-Resume.pdf",
    backend: "/Ronnel-James-Yacunas-Backend-Engineer-Resume.pdf",
  },
};

// Impact across the systems I've helped build (not personal vanity metrics).
export const stats = [
  { value: "4+", label: "Years building software" },
  { value: "35K+", label: "Weekly users on systems I've built" },
  { value: "₱30M+", label: "Weekly turnover processed" },
  { value: "18+", label: "Microservices shipped" },
];

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  blurb: string;
  highlights: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    company: "ZampaAI",
    role: "Full-Stack Engineer",
    location: "San Francisco, USA · Remote",
    period: "Jan 2026 — Present",
    current: true,
    blurb:
      "Working closely with a small team and directly with the CEO on an early-stage AI platform that helps construction firms find opportunities and write winning proposals.",
    highlights: [
      "Designed a provider-agnostic AI engine across 5 providers (OpenAI, Google, Anthropic, Mistral, Cohere) with cost controls and automatic failover.",
      "Built a Retrieval-Augmented Generation pipeline that grounds every AI proposal in the client’s own documents.",
      "Created a real-time collaborative editor with live AI drafting, highlighting, and one-click Word/Excel export.",
    ],
    stack: ["Python", "FastAPI", "Next.js", "React", "MongoDB", "Pinecone", "Redis", "LangGraph"],
  },
  {
    company: "MySchool Suite",
    role: "Backend Engineer · Contract",
    location: "Iloilo, Philippines · Remote",
    period: "Feb 2026 — Present",
    current: true,
    blurb:
      "Backend services for a global platform where fans buy personalized, AI-generated merchandise from the creators they follow.",
    highlights: [
      "Designed and built the “Drops” system powering limited-time, high-demand product launches.",
      "Engineered scarcity rules to cap inventory, enforce launch windows, and prevent overselling.",
      "Built an event-driven AI image-generation pipeline that streams real-time progress to creators.",
    ],
    stack: ["NestJS", "Prisma", "PostgreSQL", "Redis", "BullMQ", "Vendure", "GitHub Spec Kit"],
  },
  {
    company: "ScaleForge",
    role: "Software Engineer",
    location: "Singapore · Remote",
    period: "Jul 2023 — Jan 2026",
    blurb:
      "Owned performance and reliability of a high-volume iGaming wallet serving 35,000+ weekly users and PHP 30M+ in weekly turnover.",
    highlights: [
      "Re-architected core services with CQRS and event-driven design on Kubernetes for zero-downtime deploys.",
      "Led the Retention team of five engineers, shipping features that measurably improved player retention.",
      "Integrated GCash, Maya, and game providers (JILI, FaChai, Pragmatic Play) with idempotent webhooks.",
    ],
    stack: ["NestJS", "GraphQL", "Kafka", "MongoDB", "ScyllaDB", "Redis", "Kubernetes", "Next.js"],
  },
  {
    company: "Syntactics Inc.",
    role: "Full-Stack Developer",
    location: "Cagayan de Oro, Philippines",
    period: "Oct 2021 — Jun 2023",
    blurb:
      "Modernized and re-architected healthcare software, mentoring a small team along the way.",
    highlights: [
      "Boosted legacy EMR (v3) performance by 70% with ReactJS, CodeIgniter, and Webpack.",
      "Migrated EMR (v4) from a monolith to microservices using Next.js, Laravel, Docker, and RabbitMQ.",
      "Led and mentored a team of 3 developers, instituting best practices and code reviews.",
    ],
    stack: ["React", "Next.js", "Laravel", "Docker", "RabbitMQ", "Webpack"],
  },
  {
    company: "WELA School Systems",
    role: "Web Developer Intern",
    location: "Cagayan de Oro, Philippines",
    period: "Mar 2021 — May 2021",
    blurb:
      "Built features for a Learning Management System used by schools and universities nationally and internationally.",
    highlights: [
      "Shipped client-focused features with JavaScript, Python, the Frappe Framework, and GitLab in an agile team.",
    ],
    stack: ["JavaScript", "Python", "Frappe", "GitLab"],
  },
];

export type SkillGroup = { category: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL"] },
  { category: "Backend", items: ["Node.js", "NestJS", "Express", "FastAPI", "GraphQL", "REST APIs"] },
  { category: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "shadcn/ui"] },
  { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "ScyllaDB", "Pinecone"] },
  { category: "Infrastructure", items: ["Kafka", "RabbitMQ", "Redis", "Docker", "Kubernetes", "AWS", "GitHub Actions"] },
  { category: "AI & LLM", items: ["OpenAI", "Anthropic", "Google Gemini", "RAG", "LangGraph"] },
  { category: "Practices", items: ["Microservices", "Event-Driven Architecture", "Spec-Driven Development", "GitHub Spec Kit"] },
  { category: "Testing", items: ["Jest", "Vitest", "K6"] },
];

export const education = {
  school: "University of Science and Technology of Southern Philippines",
  degree: "B.S. in Computer Engineering",
  period: "Graduated August 2021",
  location: "Cagayan de Oro, Philippines",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
