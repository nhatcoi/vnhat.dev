import type { Metadata } from "next";
import { Download } from "lucide-react";
import { profile } from "@/data/profile";
import { experience, education } from "@/data/experience";
import { skills } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { TimelineItem } from "@/components/resume/TimelineItem";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export const metadata: Metadata = {
  title: `Resume — ${profile.fullName}`,
  description: `Experience and skills for ${profile.fullName}.`,
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading eyebrow="Resume" title={profile.fullName} />
        <Button href={profile.resumeUrl} external>
          <Download size={16} /> Download PDF
        </Button>
      </div>

      <div className="mt-8">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />
        <ScrollReveal className="space-y-10">
          {experience.map((item) => (
            <TimelineItem key={item.title + item.org} {...item} />
          ))}
        </ScrollReveal>
      </div>

      <div className="mt-20">
        <SectionHeading eyebrow="Education" title="Where I've studied" />
        <ScrollReveal className="space-y-10">
          {education.map((item) => (
            <TimelineItem key={item.title} {...item} />
          ))}
        </ScrollReveal>
      </div>

      <div className="mt-20">
        <SectionHeading eyebrow="Skills" title="What I work with" />
        <ScrollReveal className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill.name}>{skill.name}</Badge>
          ))}
        </ScrollReveal>
      </div>
    </div>
  );
}
