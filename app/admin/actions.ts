"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { adminConfigured, adminPassword, adminSecret, requireAdmin } from "@/lib/admin-auth";
import { generateDraft } from "@/lib/agent/pipeline";
import { llmConfigured } from "@/lib/agent/llm";
import { deleteDbEntry, getDbEntry, saveDbEntry } from "@/lib/db";
import type { Category, EntrySource, Status } from "@/lib/entries";
import { TOPICS } from "@/lib/posts";
import { parseSections } from "@/lib/sections";
import {
  SESSION_COOKIE,
  SESSION_TTL_SECONDS,
  checkPassword,
  createToken,
} from "@/lib/session";

export type FormState = { error?: string } | undefined;

export async function login(_: FormState, form: FormData): Promise<FormState> {
  if (!adminConfigured()) return { error: "Set ADMIN_PASSWORD (at least 8 characters) in the environment." };
  if (!checkPassword(String(form.get("password") ?? ""), adminPassword())) {
    await new Promise((r) => setTimeout(r, 800)); // slow down guessing
    return { error: "Wrong password." };
  }
  (await cookies()).set(SESSION_COOKIE, createToken(adminPassword(), adminSecret()), {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/admin",
    maxAge: SESSION_TTL_SECONDS,
  });
  redirect("/admin");
}

export async function logout() {
  (await cookies()).delete({ name: SESSION_COOKIE, path: "/admin" });
  redirect("/admin/login");
}

export async function generate(_: FormState, form: FormData): Promise<FormState> {
  await requireAdmin();
  if (!llmConfigured()) return { error: "Set OPENAI_API_KEY and OPENAI_MODEL (and OPENAI_BASE_URL if not OpenAI) to enable the agent." };
  const input = String(form.get("input") ?? "").trim();
  if (input.length < 10) return { error: "Paste a link or some text first." };
  let slug: string;
  try {
    const { entry } = await generateDraft({
      input: input.slice(0, 60_000),
      hint: String(form.get("hint") ?? ""),
      autoPublish: form.get("auto") === "on",
    });
    saveDbEntry(entry);
    slug = entry.slug;
  } catch (e) {
    return { error: (e as Error).message };
  }
  redirect(`/admin/posts/${slug}`);
}

const toIso = (local: string) => {
  const iso = `${local.trim()}:00+07:00`;
  return Number.isFinite(Date.parse(iso)) ? new Date(iso).toISOString() : null;
};

function parseSources(text: string): EntrySource[] {
  return text
    .split("\n")
    .map((l) => l.split("|").map((p) => p.trim()))
    .filter(([url]) => /^https?:\/\//i.test(url ?? ""))
    .map(([url, en, vi]) => ({ url, label: { en: en || url, vi: vi || en || url } }));
}

export async function savePost(_: FormState, form: FormData): Promise<FormState> {
  await requireAdmin();
  const slug = String(form.get("slug") ?? "");
  const current = getDbEntry(slug);
  if (!current) return { error: "Post not found." };

  const category = TOPICS.find((t) => t === form.get("category")) as Category | undefined;
  const status = (["draft", "scheduled", "published"] as const).find((s) => s === form.get("status")) as Status | undefined;
  const publishedAt = toIso(String(form.get("publishedAt") ?? ""));
  if (!category || !status || !publishedAt) return { error: "Check category, status and date." };

  const copy = (p: "en" | "vi") => ({
    title: String(form.get(`${p}_title`) ?? "").trim(),
    excerpt: String(form.get(`${p}_excerpt`) ?? "").trim(),
    sections: parseSections(String(form.get(`${p}_sections`) ?? "")),
  });
  const en = copy("en");
  const vi = copy("vi");
  if (!en.title || !en.excerpt || en.sections.length < 1) return { error: "English needs a title, excerpt and at least one '## Heading' section." };
  const hasVi = vi.title && vi.excerpt && vi.sections.length;

  saveDbEntry({
    slug,
    category,
    status,
    publishedAt,
    visual: String(form.get("visual") ?? "").trim().slice(0, 14) || current.visual,
    tags: String(form.get("tags") ?? "").split(",").map((t) => t.trim().toLowerCase()).filter(Boolean).slice(0, 8),
    sources: parseSources(String(form.get("sources") ?? "")),
    en,
    vi: hasVi ? vi : undefined,
    warnings: current.warnings,
  });
  redirect(`/admin/posts/${slug}?saved=1`);
}

export async function setStatus(form: FormData) {
  await requireAdmin();
  const slug = String(form.get("slug") ?? "");
  const e = getDbEntry(slug);
  if (!e) return;
  const publish = form.get("to") === "published";
  const { origin, ...rest } = e;
  void origin;
  saveDbEntry({
    ...rest,
    status: publish ? "published" : "draft",
    publishedAt: publish && Date.parse(e.publishedAt) > Date.now() ? new Date().toISOString() : e.publishedAt,
  });
  redirect(`/admin/posts/${slug}`);
}

export async function removePost(form: FormData) {
  await requireAdmin();
  deleteDbEntry(String(form.get("slug") ?? ""));
  redirect("/admin");
}
