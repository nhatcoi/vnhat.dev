"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/utils";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";

export function HeroIntro() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    if (prefersReducedMotion()) {
      gsap.set(root.querySelectorAll("[data-reveal]"), { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from("[data-reveal='eyebrow']", { opacity: 0, y: 16, duration: 0.6 })
        .from(
          "[data-reveal='word']",
          { opacity: 0, y: 40, duration: 0.8, stagger: 0.06 },
          "-=0.3"
        )
        .from(
          "[data-reveal='sub']",
          { opacity: 0, y: 20, duration: 0.6 },
          "-=0.4"
        )
        .from(
          "[data-reveal='cta']",
          { opacity: 0, y: 20, duration: 0.6 },
          "-=0.4"
        );
    }, root);

    return () => ctx.revert();
  }, []);

  const headlineWords = "Human software, built with intent.".split(" ");

  return (
    <div ref={rootRef} className="relative z-10 mx-auto max-w-3xl px-6 text-center">
      <p
        data-reveal="eyebrow"
        className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-accent"
      >
        {profile.role} · {profile.location}
      </p>
      <h1 className="text-balance text-4xl font-bold leading-tight sm:text-6xl">
        {headlineWords.map((word, i) => (
          <span key={i} data-reveal="word" className="mr-3 inline-block">
            {word}
          </span>
        ))}
      </h1>
      <p data-reveal="sub" className="mx-auto mt-6 max-w-xl text-balance text-muted">
        {profile.tagline}
      </p>
      <div data-reveal="cta" className="mt-10 flex items-center justify-center gap-4">
        <Button href="/projects">View projects</Button>
        <Button href="/resume" variant="ghost">
          See resume
        </Button>
      </div>
    </div>
  );
}
