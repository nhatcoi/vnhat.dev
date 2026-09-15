import { projects } from "@/data/projects";
import { HorizontalProjects } from "@/components/home/HorizontalProjects";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);
  return <HorizontalProjects projects={featured} />;
}
