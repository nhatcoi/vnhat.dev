import type { Project } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <ScrollReveal className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </ScrollReveal>
  );
}
