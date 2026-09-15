"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/utils";
import { profile } from "@/data/profile";

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const counters = el.querySelectorAll<HTMLElement>("[data-count]");

    if (prefersReducedMotion()) {
      counters.forEach((c) => {
        c.textContent = c.dataset.count ?? "0";
      });
      return;
    }

    const ctx = gsap.context(() => {
      counters.forEach((counter) => {
        const target = Number(counter.dataset.count);
        const value = { n: 0 };
        ScrollTrigger.create({
          trigger: counter,
          start: "top 90%",
          once: true,
          onEnter: () =>
            gsap.to(value, {
              n: target,
              duration: 1.2,
              ease: "power2.out",
              onUpdate: () => {
                counter.textContent = Math.round(value.n).toString();
              },
            }),
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-1 gap-8 sm:grid-cols-3">
      {profile.stats.map((stat) => (
        <div key={stat.label} className="text-center sm:text-left">
          <p className="font-mono text-4xl font-bold text-accent">
            <span data-count={stat.value}>0</span>
            <span>+</span>
          </p>
          <p className="mt-2 text-sm text-muted">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
