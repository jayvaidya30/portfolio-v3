export const profile = {
  name: "Jay Vaidya",
  tagline: "Full Stack & DevOps Engineer building fast, production-grade web apps",
  location: "Pune, India",
  email: "jayvaidya30@gmail.com",
  links: {
    github: "https://github.com/jayvaidya30",
    linkedin: "https://linkedin.com/in/jayvaidya30",
    x: "https://x.com/jayvaidya30",
    website: "https://jayvaidya.site",
  },
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    company: "Kharedo",
    role: "Full Stack & DevOps Engineer",
    period: "Mar 2026 - Jul 2026",
    location: "Remote",
    highlights: [
      "Built and maintained a production e-commerce platform spanning **20+ core business modules** across backend APIs, frontend workflows, seller operations, authentication, and infrastructure.",
      "Optimized backend logic, API responses, database queries, and Next.js rendering, making core workflows **~40% faster** on the backend and **17-62% faster** on the frontend.",
      "Reduced image payloads from **10-15 MB to under 500 KB** (**95%+ reduction**) through compression and asset optimization.",
      "Developed seller analytics, order management, inventory CRUD, and CSV bulk-import workflows using **React 19, TypeScript, and Ant Design**; implemented real-time notifications and streaming with **Socket.io and AWS IVS**.",
      "Containerized services with Docker and automated AWS EC2 deployments using CI/CD and Nginx, reducing setup effort by **~40%**; implemented JWT/Firebase auth, RBAC, rate limiting, centralized logging, and Jest testing.",
    ],
  },
];

export type Project = {
  name: string;
  stack: string;
  link?: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    name: "Drawly",
    stack: "Next.js · TypeScript · Canvas API · WebSockets · PostgreSQL · Turborepo",
    link: "https://github.com/jayvaidya30/drawly",
    highlights: [
      "Real-time collaborative drawing platform with a custom Canvas API engine, achieving **sub-100ms sync latency** for freehand drawing, shapes, and wireframes.",
      "WebSocket-based real-time synchronization, JWT/Bcrypt authentication, and persistent canvas state with **PostgreSQL**.",
      "Structured as a **Turborepo monorepo** with **80%+ TypeScript coverage**, improving maintainability across shared packages.",
    ],
  },
  {
    name: "FraudEx",
    stack: "Python · FastAPI · React · PostgreSQL · Machine Learning",
    link: "https://github.com/jayvaidya30/fraud-ex-stable",
    highlights: [
      "Full-stack fraud detection platform combining **machine learning** with a FastAPI backend and an interactive React dashboard for transaction analysis and risk assessment.",
      "Designed REST APIs and PostgreSQL data workflows to process transactions and surface **fraud-risk insights** through the web interface.",
    ],
  },
  {
    name: "EziBuilds",
    stack: "Next.js · React · TailwindCSS · Framer Motion",
    link: "https://ezibuilds.com/",
    highlights: [
      "Responsive product studio website showcasing web, mobile, SaaS, AI, and product development services.",
    ],
  },
  {
    name: "AssetFlow",
    stack: "Next.js · React · TypeScript · TailwindCSS",
    link: "https://asset-flow-liard.vercel.app/",
    highlights: [
      "Enterprise asset-management interface for allocation, transfers, bookings, maintenance, audits, RBAC, and real-time tracking.",
    ],
  },
  {
    name: "ONERA",
    stack: "Next.js · React · TypeScript · TailwindCSS",
    link: "https://onera1.vercel.app/",
    highlights: [
      "Polished couture brand website featuring responsive collections, editorial content, and custom-couture enquiry experiences.",
    ],
  },
];

export const skillGroups: { label: string; items: string }[] = [
  { label: "Languages", items: "TypeScript, JavaScript, Python, C, C++, Java, SQL" },
  { label: "Frontend", items: "React, Next.js, TailwindCSS, Ant Design, TanStack Query, Zustand, Shadcn/ui, Canvas API" },
  { label: "Backend", items: "Node.js, Express.js, Hono, FastAPI, REST APIs, WebSockets, JWT, Firebase Auth" },
  { label: "AI / LLM", items: "Prompt Engineering, Agentic AI, LLM Evaluation, Vector Databases" },
  { label: "Databases", items: "PostgreSQL, MongoDB, Prisma, Mongoose" },
  { label: "Cloud / DevOps", items: "AWS (EC2, S3, IVS), Docker, Nginx, CI/CD, Linux, Vercel" },
  { label: "Tools", items: "Git, GitHub, Jest, Postman, Turborepo, Figma, VS Code" },
];

export const hackathons: { name: string; detail: string }[] = [
  {
    name: "RIFT'26",
    detail:
      "Built and presented a full-stack solution under a time-constrained environment, integrating modern web technologies and real-time application workflows.",
  },
  {
    name: "Gemini 3 / Google DeepMind",
    detail:
      "Developed an AI-powered application using Google's Gemini ecosystem, focusing on practical LLM integration and product-oriented workflows.",
  },
];

export const education = {
  school: "Savitribai Phule Pune University",
  location: "Pune, India",
  degree: "Bachelor of Computer Science (BCS)",
  detail: "CGPA: 9.27",
  period: "Aug 2024 - May 2027",
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
  content: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "hi",
    title: "hi",
    excerpt: "",
    date: "Sep 15, 2026",
    readingTime: "1 min read",
    tags: [],
    content: ["jay here"],
  },
];
