"use client";

import Link from "next/link";
import type { Project } from "@/data/projects";
import { Sparkles, ShieldCheck, Smartphone, Presentation, Layers } from "lucide-react";

function CardVisualPreview({ project }: { project: Project }) {
  const type = project.previewType || "canvas";

  if (project.slug === "ai" || type === "canvas") {
    return (
      <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl bg-[#18181d] p-5 text-foreground border border-white/5 shadow-inner">
        {/* Subtle dot background */}
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-20" />

        {/* Top heading with avatars */}
        <div className="relative z-10 text-center pt-2">
          <h4 className="text-base sm:text-lg font-extrabold tracking-tight text-foreground">
            Bring <span className="text-accent underline decoration-wavy decoration-accent/50 font-black">TEAM</span>{" "}
            <span className="inline-flex -space-x-1.5 align-middle mx-1">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-rose-500/30 text-[10px] border border-rose-400/40">👩</span>
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/30 text-[10px] border border-amber-400/40">👨</span>
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/30 text-[10px] border border-cyan-400/40">🧔</span>
            </span>{" "}
            & artificial intelligence together
          </h4>
        </div>

        {/* AI Canvas Center Pill */}
        <div className="relative z-10 my-auto flex flex-col gap-2 py-1">
          <div className="mx-auto rounded-full border border-accent/30 bg-accent/10 px-6 py-1 text-center font-mono text-[11px] font-bold text-accent shadow-sm">
            AI CANVAS
          </div>

          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="rounded-xl border border-white/5 bg-surface/90 p-2.5">
              <span className="block font-bold text-[11px] text-foreground">SIDEKICKS</span>
              <span className="text-[10px] leading-tight text-muted mt-1 block">
                chat-based AI agents to collaborate with
              </span>
            </div>
            <div className="rounded-xl border border-white/5 bg-surface/90 p-2.5">
              <span className="block font-bold text-[11px] text-accent-2">FLOWS</span>
              <span className="text-[10px] leading-tight text-muted mt-1 block">
                streamline processes with visual workflows
              </span>
            </div>
            <div className="rounded-xl border border-white/5 bg-surface/90 p-2.5">
              <span className="block font-bold text-[11px] text-foreground">KNOWLEDGE</span>
              <span className="text-[10px] leading-tight text-muted mt-1 block">
                bring in enterprise knowledge base
              </span>
            </div>
          </div>
        </div>

        {/* Trust pill footer */}
        <div className="relative z-10 rounded-lg border border-white/5 bg-background/50 px-3 py-1.5 text-center font-mono text-[9px] text-muted">
          <span className="font-bold text-accent">AI TRUST</span>{" "}
          <span className="mx-1">Security</span> | <span className="mx-1">Governance</span> |{" "}
          <span className="mx-1">Privacy</span>
        </div>
      </div>
    );
  }

  if (project.slug === "intelligent-canvas" || type === "system") {
    return (
      <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl bg-[#181824] p-5 text-foreground border border-white/5 shadow-inner">
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-20" />

        <div className="absolute left-6 top-6 text-muted/40">
          <Sparkles className="h-4 w-4" />
        </div>
        <div className="absolute right-12 top-6 text-muted/40">
          <Sparkles className="h-4 w-4" />
        </div>

        {/* Dynamic Infinity Ribbon in Dark Mode */}
        <div className="relative z-10 my-auto flex flex-col items-center justify-center py-4">
          <div className="relative flex h-32 w-full items-center justify-center">
            {/* Dark glowing gradient wave */}
            <div className="absolute h-24 w-4/5 rounded-[50px] bg-gradient-to-r from-accent/20 via-accent-2/30 to-purple-500/20 opacity-80 blur-xl" />
            <div className="relative z-10 flex flex-col items-center justify-center text-center">
              <h4 className="text-xl sm:text-2xl font-black italic tracking-wider text-foreground">
                DISCOVER, DEFINE & DELIVER
              </h4>
              <p className="mt-2 text-xs font-semibold text-muted">
                as one team on one canvas
              </p>
            </div>

            {/* Avatars on ribbon */}
            <div className="absolute left-10 bottom-2 z-20 flex h-7 w-7 items-center justify-center rounded-full border border-border bg-surface text-xs shadow">
              👩
            </div>
            <div className="absolute right-20 top-2 z-20 flex h-7 w-7 items-center justify-center rounded-full border border-accent/40 bg-surface text-xs shadow">
              👨
            </div>
            <div className="absolute right-8 bottom-4 z-20 flex h-7 w-7 items-center justify-center rounded-full border border-border bg-surface text-xs shadow">
              🧔
            </div>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between border-t border-white/5 pt-2 text-[10px] text-muted font-mono">
          <span>Infinite Canvas</span>
          <span className="text-accent-2">Multiplayer Sync &lt;16ms</span>
        </div>
      </div>
    );
  }

  if (project.slug === "formats") {
    return (
      <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl bg-[#1b1822] p-5 text-foreground border border-white/5 shadow-inner">
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-20" />

        <div className="relative z-10 text-center pt-2">
          <h4 className="text-base sm:text-lg font-extrabold tracking-tight text-foreground">
            Move work to <span className="text-purple-400 italic font-black">FORMATS</span>
          </h4>
        </div>

        {/* Big Format Card Icons in Dark Theme */}
        <div className="relative z-10 my-auto flex items-center justify-center gap-4 py-3">
          <div className="flex h-28 w-24 flex-col items-center justify-center rounded-2xl border border-white/10 bg-surface/80 p-2 shadow-sm transition-transform hover:scale-105">
            <Smartphone className="h-8 w-8 text-purple-400 mb-1" />
            <span className="text-[11px] font-bold text-foreground">Prototype</span>
          </div>

          <div className="flex h-28 w-24 flex-col items-center justify-center rounded-2xl border border-white/10 bg-surface/80 p-2 shadow-sm transition-transform hover:scale-105">
            <Presentation className="h-8 w-8 text-rose-400 mb-1" />
            <span className="text-[11px] font-bold text-foreground">Slides</span>
          </div>

          <div className="flex h-28 w-24 flex-col items-center justify-center rounded-2xl border border-white/10 bg-surface/80 p-2 shadow-sm transition-transform hover:scale-105">
            <Layers className="h-8 w-8 text-accent-2 mb-1" />
            <span className="text-[11px] font-bold text-foreground">Docs</span>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between border-t border-white/5 pt-2 text-[10px] text-muted font-mono">
          <span>Tables • Slides • Diagrams</span>
          <span className="text-purple-400">Structured</span>
        </div>
      </div>
    );
  }

  if (project.slug === "enterprise-security-scale" || type === "security") {
    return (
      <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl bg-[#181a17] p-5 text-foreground border border-white/5 shadow-inner">
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-20" />

        <div className="relative z-10 text-center pt-2">
          <h4 className="text-base sm:text-lg font-extrabold tracking-tight text-foreground">
            Your data is <span className="text-green-400 italic font-black">SECURED</span>. Period.
          </h4>
        </div>

        <div className="relative z-10 my-auto flex flex-col items-center justify-center py-3">
          <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-green-500/30 bg-green-500/10 shadow-md">
            <ShieldCheck className="h-12 w-12 text-green-400" />
          </div>
          <p className="mt-2 font-mono text-[10px] text-muted">
            SOC2 Type II • Zero Trust • End-to-End Encryption
          </p>
        </div>

        <div className="relative z-10 flex items-center justify-between border-t border-white/5 pt-2 text-[10px] text-muted font-mono">
          <span>Enterprise Guardrail</span>
          <span className="text-green-400">100% Verified</span>
        </div>
      </div>
    );
  }

  // Integrations fallback
  return (
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl bg-[#191920] p-5 text-foreground border border-white/5 shadow-inner">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-20" />

      <div className="relative z-10 text-center pt-2">
        <h4 className="text-base sm:text-lg font-extrabold tracking-tight text-foreground">
          Connect to <span className="text-accent italic font-black">250+</span> of your top tools
        </h4>
      </div>

      <div className="relative z-10 my-auto grid grid-cols-4 gap-2 py-3">
        {["GitHub", "Linear", "Figma", "Slack", "Postgres", "Docker", "Kafka", "AWS"].map((tool) => (
          <div
            key={tool}
            className="flex items-center justify-center rounded-xl border border-white/10 bg-surface/80 p-2 text-center text-[10px] font-bold text-muted hover:text-foreground hover:border-accent/40 transition-colors shadow-sm"
          >
            {tool}
          </div>
        ))}
      </div>

      <div className="relative z-10 flex items-center justify-between border-t border-white/5 pt-2 text-[10px] text-muted font-mono">
        <span>2-way Webhooks</span>
        <span className="text-accent">Developer APIs</span>
      </div>
    </div>
  );
}

export function MiroProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex h-full flex-col justify-between">
      {/* Top Visual Preview Box (Dark rounded card matching theme) */}
      <div className="relative h-60 sm:h-64 lg:h-72 w-full shrink-0 overflow-hidden rounded-2xl">
        <CardVisualPreview project={project} />
      </div>

      {/* Bottom Minimal Info Section (Clean & uncluttered, matching portfolio dark colors) */}
      <div className="mt-4 flex flex-1 flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl transition-colors hover:text-accent">
            {project.title}
          </h3>

          <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-muted line-clamp-2">
            {project.summary}
          </p>
        </div>

        {/* Clean Pill Button in Theme: Background accent button */}
        <div className="mt-4">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center justify-center rounded-xl bg-foreground px-5 py-2.5 text-xs font-semibold text-background shadow-sm transition-all duration-200 hover:bg-accent hover:text-black hover:scale-[1.02]"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
}
