"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/utils";
import { cn } from "@/lib/utils";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay applied when this wraps multiple direct children. */
  stagger?: number;
  y?: number;
};

/**
 * Fades + slides its direct children up into view as they cross the
 * viewport. Reused across every route so scroll motion feels like one
 * consistent system rather than a per-page one-off.
 */
export function ScrollReveal({
  children,
  className,
  stagger = 0.08,
  y = 32,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const targets = el.children.length > 0 ? Array.from(el.children) : [el];

    const ctx = gsap.context(() => {
      gsap.set(targets, { opacity: 0, y });

      ScrollTrigger.batch(targets, {
        start: "top 85%",
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger,
          }),
        once: true,
      });
    }, el);

    return () => ctx.revert();
  }, [stagger, y]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
