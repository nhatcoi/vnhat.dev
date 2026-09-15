"use client";

import { useEffect, useRef } from "react";
import type { Project } from "@/data/projects";
import { MiroProjectCard } from "@/components/home/MiroProjectCard";
import { SpotlightProjectShowcase } from "@/components/home/SpotlightProjectShowcase";
import { Button } from "@/components/ui/Button";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/utils";
import { Sparkles, ArrowRight, Play, Maximize2, MoreVertical, Presentation } from "lucide-react";

export function HorizontalProjects({ projects }: { projects: Project[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const pinnedContainerRef = useRef<HTMLDivElement>(null);
  const trackWrapperRef = useRef<HTMLDivElement>(null);
  const pinnedTrackRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  // The flagship project for the zoom-in climax, and all projects for the horizontal stream
  const spotlightProject = projects.find((p) => p.spotlight) || projects[0];

  useEffect(() => {
    const section = sectionRef.current;
    const pinnedContainer = pinnedContainerRef.current;
    const trackWrapper = trackWrapperRef.current;
    const pinnedTrack = pinnedTrackRef.current;
    const spotlight = spotlightRef.current;

    if (!section || !pinnedContainer || !trackWrapper || !pinnedTrack || !spotlight || prefersReducedMotion()) {
      return;
    }

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop & Tablet (min-width: 768px): Miro Pinned Horizontal Scroll + Spotlight Zoom
      mm.add("(min-width: 768px)", () => {
        const VELOCITY = 0.75;
        const trackFadeDist = 380; // Slower, smoother fade out
        const transitionGapDist = 220; // Breathing room / spacing between out and in
        const spotlightZoomDist = 700; // Slower, more cinematic zoom-in
        const spotlightDwellDist = 500; // Comfortable dwell time for interaction
        const spotlightClimaxBudget = trackFadeDist + transitionGapDist + spotlightZoomDist + spotlightDwellDist;

        const getMetrics = () => {
          const totalD = Math.max(0, pinnedTrack.scrollWidth - trackWrapper.clientWidth + 140);
          const slideV = Math.round(totalD / VELOCITY);
          const budget = slideV + spotlightClimaxBudget;
          return { totalD, slideV, budget };
        };

        let m = getMetrics();

        const onRefreshInit = () => {
          m = getMetrics();
        };
        ScrollTrigger.addEventListener("refreshInit", onRefreshInit);

        // PINNED TIMELINE:
        // We pin pinnedContainer (which is INSIDE section) so the root <section> is never reparented
        // into .pin-spacer in React's DOM, preventing removeChild errors when navigating routes!
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${m.budget}`,
            scrub: true,
            pin: pinnedContainer,
            invalidateOnRefresh: true,
          },
        });

        // Prepare spotlight initially hidden and scaled down
        gsap.set(spotlight, {
          opacity: 0,
          scale: 0.65,
          y: 60,
          filter: "blur(12px)",
          pointerEvents: "none",
        });

        // PHASE 1: Horizontal slide from right to left gradually
        tl.to(
          pinnedTrack,
          {
            x: () => -m.totalD,
            ease: "none",
            duration: m.slideV,
          },
          0
        );

        // PHASE 2: Track Fade Out (chậm hơn, mượt mà hơn)
        tl.to(
          trackWrapper,
          {
            opacity: 0,
            scale: 0.94,
            y: -25,
            filter: "blur(10px)",
            pointerEvents: "none",
            ease: "power2.inOut",
            duration: trackFadeDist,
          },
          m.slideV
        );

        // PHASE 3: Spotlight Zoom-In Climax (xuất hiện sau khoảng đệm, zoom chậm và điện ảnh hơn)
        const spotlightStart = m.slideV + trackFadeDist + transitionGapDist;
        tl.to(
          spotlight,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            filter: "blur(0px)",
            pointerEvents: "auto",
            ease: "power2.out",
            duration: spotlightZoomDist,
          },
          spotlightStart
        );

        // PHASE 4: Spotlight Dwell / Hold
        tl.to(
          spotlight,
          {
            scale: 1.01,
            ease: "none",
            duration: spotlightDwellDist,
          },
          spotlightStart + spotlightZoomDist
        );

        return () => {
          ScrollTrigger.removeEventListener("refreshInit", onRefreshInit);
        };
      });

      document.fonts?.ready.then(() => ScrollTrigger.refresh());
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-transparent"
    >
      {/* ========================================================================= */}
      {/* DESKTOP PINNED VIEW (min-width: 768px)                                    */}
      {/* Inner container is pinned so the root <section> never gets detached       */}
      {/* ========================================================================= */}
      <div
        ref={pinnedContainerRef}
        className="relative hidden h-screen w-full flex-col items-center justify-center overflow-hidden md:flex"
      >
        <div
          ref={trackWrapperRef}
          className="h-full w-full items-center overflow-hidden flex -mt-4 lg:-mt-6"
          style={{ willChange: "transform, opacity, filter" }}
        >
          {/* Horizontal Track: Heading aligned with 'A quick introduction' (max-w-6xl container) */}
          <div
            ref={pinnedTrackRef}
            className="flex items-start pt-4 lg:pt-6 gap-8 lg:gap-10"
            style={{
              paddingLeft: "max(1.5rem, calc((100vw - 72rem) / 2 + 1.5rem))",
              willChange: "transform",
            }}
          >
            {/* 1. Left Intro Block: Clean, compact 3-line heading aligned with 'A quick introduction' */}
            <div className="relative flex shrink-0 flex-col justify-start pt-3 lg:pt-4 pr-4">
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.08] max-w-[260px] sm:max-w-[300px] lg:max-w-[340px]">
                Experience
                <br />
                the Innovation
                <br />
                Workspace
              </h2>
            </div>

            {/* 2. THE BIG CARD CONTAINER (Thẻ lớn dark theme, nằm lệch trái hiển thị cả Card 1 và Card 2) */}
            <div className="relative flex flex-col rounded-[2.5rem] bg-[#121216]/90 p-6 lg:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.7)] border border-white/10 shrink-0 backdrop-blur-md">
              {/* Top Toolbar directly inside the Big Card */}
              <div className="relative z-20 mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-muted">check this out ⤴</span>
                  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-surface/90 px-3 py-1.5 text-xs text-muted shadow-lg backdrop-blur">
                    <span className="flex items-center gap-1.5 font-semibold text-foreground">
                      <Presentation className="h-3.5 w-3.5 text-rose-400" />
                      <span>Slides</span>
                    </span>
                    <span className="text-white/20">|</span>
                    <Play className="h-3 w-3 hover:text-foreground cursor-pointer transition-colors" />
                    <Maximize2 className="h-3 w-3 hover:text-foreground cursor-pointer transition-colors" />
                    <MoreVertical className="h-3 w-3 hover:text-foreground cursor-pointer transition-colors" />
                  </div>
                </div>

                {/* Collaborator Cursor Badge above Card 2 */}
                <div className="flex items-center gap-1.5 rounded-full border border-accent/40 bg-surface/90 px-3 py-1 shadow-lg backdrop-blur">
                  <div className="h-2 w-2 rounded-full bg-accent animate-ping" />
                  <span className="font-mono text-xs font-semibold text-accent">Brie</span>
                </div>
              </div>

              {/* Cards row inside the big card */}
              <div className="flex items-start gap-6 lg:gap-8">
                {projects.map((project) => (
                  <div
                    key={project.slug}
                    className="w-[420px] sm:w-[460px] lg:w-[500px] xl:w-[540px] shrink-0"
                  >
                    <MiroProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>

            {/* Spacer at the end of track */}
            <div aria-hidden className="w-16 shrink-0" />
          </div>
        </div>

        {/* SPOTLIGHT PROJECT OVERLAY (Zoom-In Climax "Xuất hiện to dần lên") */}
        <div
          ref={spotlightRef}
          className="pointer-events-none absolute inset-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden px-4 md:px-8"
          style={{ willChange: "transform, opacity, filter" }}
        >
          {spotlightProject && <SpotlightProjectShowcase project={spotlightProject} />}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE VIEW (Screens < 768px: smooth natural stack with featured climax)    */}
      {/* ========================================================================= */}
      <div className="flex flex-col gap-10 px-6 py-16 md:hidden">
        {/* Mobile Header */}
        <div>
          <div className="mb-2 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            <Sparkles className="h-3.5 w-3.5" />
            <span>SELECTED WORK</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground">
            Experience the Innovation Workspace
          </h2>
          <p className="mt-2 text-sm text-muted">
            High-performance web architecture, real-time multiplayer canvases, and intelligent tools.
          </p>
        </div>

        {/* Mobile Big Card Container in Dark Theme */}
        <div className="rounded-3xl bg-[#121216] p-5 shadow-xl border border-white/10">
          <div className="flex flex-col gap-6">
            {projects.map((project) => (
              <div key={project.slug} className="w-full">
                <MiroProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Spotlight Project */}
        {spotlightProject && (
          <div className="pt-8 border-t border-border/60">
            <SpotlightProjectShowcase project={spotlightProject} />
          </div>
        )}

        <div className="text-center pt-2">
          <Button href="/projects" variant="ghost">
            View all projects &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
}
