"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/utils";
import { HeroFlowBackground } from "@/components/hero/HeroFlowBackground";
import { HeroIntro } from "@/components/hero/HeroIntro";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    if (!section || !bg || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.to(bg, {
        yPercent: 20,
        opacity: 0.3,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div ref={bgRef} className="absolute inset-0">
        <HeroFlowBackground />
      </div>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 0%, var(--background) 75%)",
        }}
      />
      <HeroIntro />
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs uppercase tracking-widest text-muted">
        Scroll
      </div>
    </section>
  );
}
