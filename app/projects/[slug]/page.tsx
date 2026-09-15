import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProjectBySlug } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <Link href="/projects" className="font-mono text-xs uppercase tracking-wide text-muted hover:text-accent">
        &larr; All projects
      </Link>

      <ScrollReveal className="mt-8">
        <div>
          <span className="font-mono text-xs text-muted">{project.year}</span>
          <h1 className="mt-2 text-4xl font-bold">{project.title}</h1>
          <p className="mt-4 text-balance text-lg text-muted">{project.summary}</p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <p className="mt-10 whitespace-pre-line text-balance text-foreground/90">
          {project.description}
        </p>

        {project.links && (
          <div className="mt-10 flex gap-4">
            {project.links.demo && (
              <Button href={project.links.demo} external>
                Live demo
              </Button>
            )}
            {project.links.repo && (
              <Button href={project.links.repo} variant="ghost" external>
                Source code
              </Button>
            )}
          </div>
        )}
      </ScrollReveal>
    </div>
  );
}
