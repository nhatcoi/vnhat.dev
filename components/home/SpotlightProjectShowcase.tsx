"use client";

import { useState } from "react";
import Link from "next/link";
import type { Project } from "@/data/projects";
import {
  Play,
  RotateCcw,
  Volume2,
  VolumeX,
  Maximize2,
  Sparkles,
  ExternalLink,
  ArrowRight,
  Bot,
  GitBranch,
  Database,
} from "lucide-react";

export function SpotlightProjectShowcase({
  project,
}: {
  project: Project;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [activeTab, setActiveTab] = useState<"flow" | "architecture" | "specs">("flow");

  const title = project.spotlightHeadline || project.title;
  const subtitle =
    project.spotlightSubheadline ||
    project.summary ||
    "Move beyond individual productivity to team and cross-team collaboration with autonomous agents.";

  return (
    <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-4 sm:px-6">
      {/* Centered Top Heading (Image 3) */}
      <div className="text-center">
        <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {title}
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-balance text-sm text-muted sm:text-base lg:text-lg">
          {subtitle}
        </p>

        {/* Primary CTA Button */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black shadow-[0_0_24px_rgba(214,255,61,0.35)] transition-all duration-200 hover:scale-105 hover:bg-accent/90"
          >
            <span>Explore the solution</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          {project.links?.repo && (
            <Link
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/80 px-5 py-3 text-sm font-medium text-foreground backdrop-blur transition-all duration-200 hover:border-accent/50 hover:text-accent"
            >
              <span>Source code</span>
              <ExternalLink className="h-3.5 w-3.5 text-muted" />
            </Link>
          )}
        </div>
      </div>

      {/* Centerpiece Showcase Player Frame (Image 3 reference) */}
      <div className="relative mt-8 w-full overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d10] shadow-[0_25px_60px_rgba(0,0,0,0.7)] backdrop-blur-xl">
        {/* Top Player Chrome */}
        <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-5 py-3.5 text-xs text-muted">
          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent text-black font-bold text-xs">
              M
            </div>
            <div>
              <span className="font-semibold text-foreground">{project.title}</span>
              <span className="ml-2 font-mono text-[11px] text-muted">Multiplayer Live Demo</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Interactive Tabs */}
            <div className="hidden sm:flex items-center rounded-lg border border-white/10 bg-white/5 p-0.5 text-[11px]">
              <button
                type="button"
                onClick={() => setActiveTab("flow")}
                className={`rounded-md px-2.5 py-1 transition-colors ${activeTab === "flow" ? "bg-accent/20 text-accent font-medium" : "text-muted hover:text-foreground"
                  }`}
              >
                Canvas Flow
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("architecture")}
                className={`rounded-md px-2.5 py-1 transition-colors ${activeTab === "architecture"
                    ? "bg-accent/20 text-accent font-medium"
                    : "text-muted hover:text-foreground"
                  }`}
              >
                Architecture
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("specs")}
                className={`rounded-md px-2.5 py-1 transition-colors ${activeTab === "specs" ? "bg-accent/20 text-accent font-medium" : "text-muted hover:text-foreground"
                  }`}
              >
                Tech Stack
              </button>
            </div>

            <button
              type="button"
              onClick={() => setIsMuted(!isMuted)}
              aria-label={isMuted ? "Unmute audio" : "Mute audio"}
              className="rounded-lg p-1.5 hover:bg-white/5 hover:text-foreground transition-colors"
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4 text-accent" />}
            </button>
            <Link
              href={`/projects/${project.slug}`}
              aria-label="Full screen project details"
              className="rounded-lg p-1.5 hover:bg-white/5 hover:text-foreground transition-colors"
            >
              <Maximize2 className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Showcase Canvas Body */}
        <div className="relative min-h-[340px] sm:min-h-[440px] lg:min-h-[480px] w-full dot-grid p-6 sm:p-10 flex flex-col items-center justify-center overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div className="pointer-events-none absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 right-1/4 h-80 w-80 rounded-full bg-accent-2/15 blur-3xl" />

          {activeTab === "flow" && (
            <div className="relative z-10 w-full max-w-4xl">
              {/* Central Video Replay / Action Overlay */}
              <div className="relative mx-auto my-4 flex flex-col items-center justify-center">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="group relative flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-surface/90 text-foreground shadow-2xl backdrop-blur transition-all duration-300 hover:scale-110 hover:border-accent hover:text-accent"
                >
                  <RotateCcw className="h-7 w-7 transition-transform duration-300 group-hover:rotate-180" />
                </button>
                <span className="mt-2 font-mono text-[11px] text-muted">Click to replay canvas workflow</span>
              </div>

              {/* High-Fidelity Canvas Flow Diagram (Matching Miro reference Image 3) */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {/* Node 1: Input / Discovery */}
                <div className="rounded-2xl border border-white/10 bg-surface/80 p-4 shadow-lg backdrop-blur">
                  <div className="flex items-center justify-between text-xs text-muted mb-3">
                    <span className="flex items-center gap-1.5 font-semibold text-foreground">
                      <Bot className="h-3.5 w-3.5 text-accent" />
                      1. Agent Input
                    </span>
                    <span className="rounded bg-accent/10 px-1.5 py-0.5 font-mono text-[10px] text-accent">Active</span>
                  </div>
                  <div className="space-y-2">
                    <div className="rounded-lg bg-background/60 p-2.5 text-xs text-foreground/80 font-mono">
                      &gt; Multi-modal prompt
                    </div>
                    <div className="rounded-lg bg-background/60 p-2.5 text-xs text-foreground/80 font-mono">
                      &gt; CRDT session binding
                    </div>
                  </div>
                </div>

                {/* Node 2: Core Processing / CRDT */}
                <div className="rounded-2xl border border-accent/40 bg-accent/[0.04] p-4 shadow-lg backdrop-blur ring-1 ring-accent/20">
                  <div className="flex items-center justify-between text-xs text-muted mb-3">
                    <span className="flex items-center gap-1.5 font-semibold text-accent">
                      <GitBranch className="h-3.5 w-3.5" />
                      2. Canvas Engine
                    </span>
                    <span className="font-mono text-[10px] text-accent">60 FPS</span>
                  </div>
                  <div className="space-y-2">
                    <div className="rounded-lg border border-accent/20 bg-accent/10 p-2.5 text-xs font-semibold text-foreground">
                      Concurrent Vector Render
                    </div>
                    <div className="rounded-lg bg-background/60 p-2.5 text-xs text-muted">
                      Sub-16ms peer resolution
                    </div>
                  </div>
                </div>

                {/* Node 3: Output & State Store */}
                <div className="rounded-2xl border border-white/10 bg-surface/80 p-4 shadow-lg backdrop-blur">
                  <div className="flex items-center justify-between text-xs text-muted mb-3">
                    <span className="flex items-center gap-1.5 font-semibold text-foreground">
                      <Database className="h-3.5 w-3.5 text-accent-2" />
                      3. State Sync
                    </span>
                    <span className="font-mono text-[10px] text-muted">E2E</span>
                  </div>
                  <div className="space-y-2">
                    <div className="rounded-lg bg-background/60 p-2.5 text-xs text-foreground/80 font-mono">
                      &gt; PostgreSQL + Vector
                    </div>
                    <div className="rounded-lg bg-background/60 p-2.5 text-xs text-foreground/80 font-mono">
                      &gt; WebSocket telemetry
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "architecture" && (
            <div className="relative z-10 w-full max-w-3xl rounded-2xl border border-white/10 bg-surface/90 p-6 text-sm">
              <h4 className="font-mono text-xs uppercase tracking-wider text-accent mb-4">
                Architecture Blueprint
              </h4>
              <p className="leading-relaxed text-muted mb-4">
                Designed for extreme low-latency collaborative editing, combining local-first state
                caches with an authoritative distributed event log.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 font-mono text-xs">
                <div className="rounded-xl border border-border bg-background/80 p-3">
                  <span className="text-muted block text-[10px]">THROUGHPUT</span>
                  <span className="font-bold text-foreground mt-1 block">100k events/s</span>
                </div>
                <div className="rounded-xl border border-border bg-background/80 p-3">
                  <span className="text-muted block text-[10px]">SYNC LATENCY</span>
                  <span className="font-bold text-accent mt-1 block">&lt; 16ms</span>
                </div>
                <div className="rounded-xl border border-border bg-background/80 p-3">
                  <span className="text-muted block text-[10px]">CONSISTENCY</span>
                  <span className="font-bold text-foreground mt-1 block">Strict CRDT</span>
                </div>
                <div className="rounded-xl border border-border bg-background/80 p-3">
                  <span className="text-muted block text-[10px]">UPTIME</span>
                  <span className="font-bold text-green-400 mt-1 block">99.99%</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "specs" && (
            <div className="relative z-10 w-full max-w-3xl rounded-2xl border border-white/10 bg-surface/90 p-6">
              <h4 className="font-mono text-xs uppercase tracking-wider text-accent mb-4">
                Core Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-xl border border-accent/20 bg-accent/5 px-4 py-2 font-mono text-xs text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted leading-relaxed">
                Full production build featuring type safety, automated end-to-end integration tests, and containerized cloud deployment.
              </p>
            </div>
          )}
        </div>

        {/* Bottom Scrubber Bar (Faithfully replicating Image 3) */}
        <div className="border-t border-white/10 bg-surface/95 px-5 py-3">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause demo" : "Play demo"}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-foreground transition-colors hover:bg-accent hover:text-black"
            >
              {isPlaying ? <RotateCcw className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
            </button>

            {/* Timecode indicator */}
            <span className="font-mono text-xs text-muted">1:36 / 1:36</span>

            {/* Progress Scrub Bar */}
            <div className="relative flex-1 cursor-pointer py-2">
              <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                <div className="h-full w-full rounded-full bg-gradient-to-r from-red-500 via-rose-500 to-accent" />
              </div>
              {/* Scrub handle dot */}
              <div className="absolute right-0 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-2 border-surface bg-accent shadow" />
            </div>

            <Link
              href={`/projects/${project.slug}`}
              className="font-mono text-xs font-semibold text-accent hover:underline"
            >
              Open Project &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
