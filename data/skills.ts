export type Skill = {
  name: string;
  category: "frontend" | "backend" | "infra" | "tools";
};

export const skills: Skill[] = [
  { name: "TypeScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "GSAP", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "NestJS", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "Redis", category: "backend" },
  { name: "Docker", category: "infra" },
  { name: "AWS", category: "infra" },
  { name: "CI/CD", category: "infra" },
  { name: "Figma", category: "tools" },
  { name: "Git", category: "tools" },
];
