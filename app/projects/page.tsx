import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectGrid } from "@/components/projects/ProjectGrid";

export const metadata: Metadata = {
  title: `Projects — ${profile.fullName}`,
  description: "A selection of things I've built.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Work" title="All projects" />
      <ProjectGrid projects={projects} />
    </div>
  );
}
