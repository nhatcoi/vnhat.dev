export type ExperienceItem = {
  period: string;
  title: string;
  org: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    period: "2024 — Present",
    title: "Software Engineer",
    org: "Freelance / Contract",
    bullets: [
      "Design and ship full-stack web products end to end.",
      "Own architecture decisions across frontend, backend and infra.",
      "Work directly with clients to scope and iterate on product.",
    ],
  },
  {
    period: "2022 — 2024",
    title: "Backend Engineer",
    org: "Previous Company",
    bullets: [
      "Built and maintained core API services in Node.js.",
      "Improved system reliability and observability.",
      "Mentored junior engineers on code quality and testing.",
    ],
  },
];

export type EducationItem = {
  period: string;
  title: string;
  org: string;
};

export const education: EducationItem[] = [
  {
    period: "2018 — 2022",
    title: "B.Eng. Computer Science",
    org: "University",
  },
];
