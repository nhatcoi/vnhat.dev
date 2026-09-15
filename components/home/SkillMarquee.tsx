"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/utils";
import { skills } from "@/data/skills";

export function SkillMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tween = gsap.to(track, {
        xPercent: -50,
        duration: 30,
        ease: "linear",
        repeat: -1,
      });

      const pause = () => tween.pause();
      const resume = () => tween.resume();
      track.addEventListener("mouseenter", pause);
      track.addEventListener("mouseleave", resume);

      return () => {
        track.removeEventListener("mouseenter", pause);
        track.removeEventListener("mouseleave", resume);
      };
    }, track);

    return () => ctx.revert();
  }, []);

  const loop = [...skills, ...skills];

  return (
    <div className="no-scrollbar overflow-hidden border-y border-border py-6">
      <div ref={trackRef} className="flex w-max gap-10">
        {loop.map((skill, i) => (
          <span
            key={`${skill.name}-${i}`}
            className="font-mono text-sm uppercase tracking-wide text-muted"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}
