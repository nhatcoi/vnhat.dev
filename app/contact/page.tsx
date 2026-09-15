import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export const metadata: Metadata = {
  title: `Contact — ${profile.fullName}`,
  description: "Get in touch.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about your next project"
          className="mx-auto"
        />
        <p className="mx-auto max-w-xl text-balance text-muted">
          The fastest way to reach me is email. Happy to talk about freelance
          work, full-time roles, or just to say hi.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href={`mailto:${profile.email}`}>{profile.email}</Button>
        </div>
        <div className="mt-8 flex justify-center gap-6">
          {profile.socials
            .filter((s) => s.label !== "Email")
            .map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs uppercase tracking-wide text-muted hover:text-accent"
              >
                {social.label}
              </a>
            ))}
        </div>
      </ScrollReveal>
    </div>
  );
}
