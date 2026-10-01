import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import type { Dict } from "@/lib/dict";
import { ProjectArt } from "./Artwork";

export function Projects({
  projects,
  t,
}: {
  projects: Project[];
  t: Dict["work"];
}) {
  return (
    <div className="work-grid">
      {projects.map((p) => {
        const links: [string, string | undefined][] = [
          [t.live, p.links.demo],
          [t.source, p.links.repo],
          [t.docs, p.links.docs],
        ];
        return (
          <article className="work-card" key={p.slug}>
            <ProjectArt slug={p.slug} />
            <h3>{p.title}</h3>
            <p>{p.tagline}</p>
            <div className="tags">
              {p.stack.slice(0, 3).map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
            <div className="proj-links">
              {links.map(
                ([label, href]) =>
                  href && (
                    <a key={label} href={href}>
                      {label} <ArrowUpRight size={14} />
                    </a>
                  ),
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
