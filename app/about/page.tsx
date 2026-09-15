import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
import { experience, education } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { TimelineItem } from "@/components/resume/TimelineItem";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export const metadata: Metadata = {
  title: `About — ${profile.fullName}`,
  description: profile.bio,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24">
      <ScrollReveal>
        <SectionHeading eyebrow="About me" title={`Hi, I'm ${profile.name}.`} />
        <p className="max-w-2xl text-balance text-lg text-muted">{profile.bio}</p>
      </ScrollReveal>

      <div className="mt-20">
        <SectionHeading eyebrow="Toolbox" title="Skills & tools" />
        <ScrollReveal className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill.name}>{skill.name}</Badge>
          ))}
        </ScrollReveal>
      </div>

      <div className="mt-20">
        <SectionHeading eyebrow="Journey" title="Experience" />
        <ScrollReveal className="space-y-10">
          {experience.map((item) => (
            <TimelineItem key={item.title + item.org} {...item} />
          ))}
        </ScrollReveal>
      </div>

      <div className="mt-20">
        <SectionHeading eyebrow="Background" title="Education" />
        <ScrollReveal className="space-y-10">
          {education.map((item) => (
            <TimelineItem key={item.title} {...item} />
          ))}
        </ScrollReveal>
      </div>
    </div>
  );
}
