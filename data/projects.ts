export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  stack: string[];
  year: number;
  featured?: boolean;
  cover?: string;
  category?: string;
  previewType?: "canvas" | "system" | "security" | "integrations" | "analytics";
  spotlight?: boolean;
  spotlightHeadline?: string;
  spotlightSubheadline?: string;
  links?: { demo?: string; repo?: string };
};

export const projects: Project[] = [
  {
    slug: "ai",
    title: "AI",
    category: "AI Workflows",
    previewType: "canvas",
    summary: "Accelerate your team with collaborative AI workflows",
    description:
      "A next-generation collaborative workspace uniting AI agents and human teams on an infinite canvas. Built with custom CRDT state synchronization, high-performance node graph rendering, and streaming LLM orchestrators.",
    stack: ["Next.js", "TypeScript", "GSAP", "WebSockets"],
    year: 2025,
    featured: true,
    spotlight: true,
    spotlightHeadline: "The AI platform for teamwork",
    spotlightSubheadline:
      "Move beyond individual AI productivity to team and cross-team collaboration with autonomous agents.",
    links: { demo: "#demo", repo: "https://github.com/vnhat-dev" },
  },
  {
    slug: "intelligent-canvas",
    title: "Intelligent Canvas",
    category: "Multiplayer Engine",
    previewType: "system",
    summary: "Empower teamwork on one, infinite, multiplayer canvas",
    description:
      "Real-time multiplayer canvas engine supporting thousands of simultaneous nodes, cursor presence, vector rendering, and conflict-free replicated data types (CRDTs).",
    stack: ["TypeScript", "WebRTC", "Canvas API", "Rust"],
    year: 2024,
    featured: true,
    links: { demo: "#demo", repo: "https://github.com/vnhat-dev" },
  },
  {
    slug: "formats",
    title: "Formats",
    category: "Structured Workspaces",
    previewType: "analytics",
    summary: "Move quickly from ideas to structured projects Docs, Tables, Slides, Diagrams and more.",
    description:
      "Dynamic document conversion engine turning freeform whiteboard drawings into structured markdown documents, interactive slides, and production-ready tickets.",
    stack: ["React", "Node.js", "GraphQL", "Tailwind CSS"],
    year: 2024,
    featured: true,
    links: { demo: "#demo", repo: "https://github.com/vnhat-dev" },
  },
  {
    slug: "enterprise-security-scale",
    title: "Enterprise Security & Scale",
    category: "Cloud Infrastructure",
    previewType: "security",
    summary: "Secure and scalable collaboration on an enterprise-grade platform you can trust.",
    description:
      "Zero-trust security layer offering granular RBAC, end-to-end data encryption, automated compliance guardrails, and audit streaming for enterprise deployments.",
    stack: ["Go", "gRPC", "Kubernetes", "PostgreSQL"],
    year: 2024,
    featured: true,
    links: { demo: "#demo", repo: "https://github.com/vnhat-dev" },
  },
  {
    slug: "integrations",
    title: "Integrations",
    category: "Developer Platform",
    previewType: "integrations",
    summary: "Connects with 250+ apps so teams stay aligned and productive in one workspace.",
    description:
      "Extensible integration gateway featuring bidirectional webhooks, OAuth2 brokering, schema transformation pipelines, and SDKs for GitHub, Figma, Slack, and Linear.",
    stack: ["Node.js", "GraphQL", "Kafka", "Docker"],
    year: 2023,
    featured: true,
    links: { demo: "#demo", repo: "https://github.com/vnhat-dev" },
  },
  {
    slug: "project-three",
    title: "Project Three",
    summary: "A short one-liner describing what this project does.",
    description:
      "Longer write-up of the problem, the approach taken, and the outcome. Replace with real project details.",
    stack: ["NestJS", "Docker", "AWS"],
    year: 2024,
    featured: true,
    links: { demo: "#" },
  },
  {
    slug: "project-four",
    title: "Project Four",
    summary: "A short one-liner describing what this project does.",
    description:
      "Longer write-up of the problem, the approach taken, and the outcome. Replace with real project details.",
    stack: ["Vue", "Nuxt", "MongoDB"],
    year: 2023,
    featured: true,
    links: { demo: "#", repo: "#" },
  },
  {
    slug: "project-five",
    title: "Project Five",
    summary: "A short one-liner describing what this project does.",
    description:
      "Longer write-up of the problem, the approach taken, and the outcome. Replace with real project details.",
    stack: ["React Native", "GraphQL", "AWS"],
    year: 2023,
    featured: true,
    links: { repo: "#" },
  },
  {
    slug: "project-six",
    title: "Project Six",
    summary: "A short one-liner describing what this project does.",
    description:
      "Longer write-up of the problem, the approach taken, and the outcome. Replace with real project details.",
    stack: ["Go", "gRPC", "Kubernetes"],
    year: 2022,
    featured: true,
    links: { demo: "#" },
  },
  {
    slug: "project-seven",
    title: "Project Seven",
    summary: "A short one-liner describing what this project does.",
    description:
      "Longer write-up of the problem, the approach taken, and the outcome. Replace with real project details.",
    stack: ["Python", "FastAPI", "Redis"],
    year: 2022,
    featured: false,
    links: { repo: "#" },
  },
  {
    slug: "project-eight",
    title: "Project Eight",
    summary: "A short one-liner describing what this project does.",
    description:
      "Longer write-up of the problem, the approach taken, and the outcome. Replace with real project details.",
    stack: ["Svelte", "Tailwind CSS", "Vercel"],
    year: 2021,
    featured: false,
    links: { demo: "#" },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
