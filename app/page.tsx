import { HeroSection } from "@/components/hero/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { SkillMarquee } from "@/components/home/SkillMarquee";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className="mx-auto max-w-6xl px-6 py-24">
        <ScrollReveal className="grid gap-12 sm:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeading eyebrow="About" title="A quick introduction" />
            <p className="text-balance text-muted">{profile.bio}</p>
          </div>
          <StatsSection />
        </ScrollReveal>
      </section>

      <SkillMarquee />

      <FeaturedProjects />

      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <ScrollReveal>
          <h2 className="text-balance text-3xl font-bold sm:text-5xl">
            Let&apos;s build something worth shipping.
          </h2>
          <div className="mt-8 flex justify-center gap-4">
            <Button href="/contact">Get in touch</Button>
            <Button href="/about" variant="ghost">
              More about me
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
