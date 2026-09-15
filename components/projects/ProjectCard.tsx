import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  /** "grid" = compact card for listing pages. "feature" = large tile for the home showcase. */
  variant?: "grid" | "feature";
};

function ProjectCover({ project }: { project: Project }) {
  if (project.cover) {
    return (
      <Image
        src={project.cover}
        alt=""
        fill
        className="object-cover"
        sizes="(min-width: 640px) 640px, 100vw"
      />
    );
  }

  const initials = project.title
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="dot-grid absolute inset-0 flex items-center justify-center bg-background">
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/25 blur-3xl" />
      <div className="absolute -bottom-14 -left-10 h-40 w-40 rounded-full bg-accent-2/20 blur-3xl" />
      <span className="font-mono text-7xl font-bold text-foreground/10">{initials}</span>
    </div>
  );
}

/** "Sticky note" style project card: canvas-inspired, slight offset shadow, tilts on hover. */
export function ProjectCard({ project, variant = "grid" }: ProjectCardProps) {
  const isFeature = variant === "feature";

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group block rounded-2xl border border-border bg-surface shadow-[6px_6px_0_0_var(--border)] transition-shadow duration-300 hover:shadow-[10px_10px_0_0_var(--accent)]",
        isFeature ? "p-8" : "p-6"
      )}
    >
      {isFeature && (
        <div className="relative mb-6 h-56 overflow-hidden rounded-xl border border-border md:h-64">
          <ProjectCover project={project} />
        </div>
      )}

      <div className="mb-4 flex items-center justify-between">
        <span className="font-mono text-xs text-muted">{project.year}</span>
        {project.featured && <Badge className="border-accent text-accent">Featured</Badge>}
      </div>

      <h3 className={cn("font-bold group-hover:text-accent", isFeature ? "text-3xl" : "text-xl")}>
        {project.title}
      </h3>
      <p className={cn("mt-2 text-muted", isFeature ? "text-base" : "text-sm")}>
        {project.summary}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
    </Link>
  );
}
