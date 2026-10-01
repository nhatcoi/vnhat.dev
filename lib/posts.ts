import { posts, type Post } from "@/data/posts";
import { postsVi } from "@/data/posts.vi";
import { listDbEntries } from "./db";
import type { Entry } from "./entries";
import { TOPICS } from "./topics";
import { isPublished } from "./publication";
import type { Locale } from "./i18n";

export const SITE_URL = "https://vnhat.dev";
export { TOPICS };

/** Posts that ship in the repo (`data/posts.ts`), shaped like stored entries. */
function staticEntries(): Entry[] {
  return posts.map((p) => {
    const v = postsVi[p.slug];
    return {
      slug: p.slug,
      category: p.category,
      status: p.status,
      publishedAt: p.publishedAt,
      visual: p.visual,
      tags: p.tags ?? [],
      sources: p.sources.map((s, i) => ({
        url: s.url,
        label: { en: s.label, vi: v?.sourceLabels[i] ?? s.label },
      })),
      en: { title: p.title, excerpt: p.excerpt, sections: p.sections },
      vi: v && { title: v.title, excerpt: v.excerpt, sections: v.sections },
      origin: "static" as const,
      warnings: [],
    };
  });
}

/** Static posts first, then database posts (static wins on a slug clash). */
export function allEntries(): Entry[] {
  const s = staticEntries();
  const taken = new Set(s.map((e) => e.slug));
  return [...s, ...listDbEntries().filter((e) => !taken.has(e.slug))];
}

export function localize(e: Entry, lang: Locale): Post {
  const c = lang === "vi" && e.vi ? e.vi : e.en;
  return {
    slug: e.slug,
    title: c.title,
    excerpt: c.excerpt,
    category: e.category,
    publishedAt: e.publishedAt,
    status: e.status,
    visual: e.visual,
    tags: e.tags,
    sections: c.sections,
    sources: e.sources.map((s) => ({ url: s.url, label: s.label[lang] || s.label.en })),
  };
}

export function publishedPosts(lang: Locale, now = new Date()): Post[] {
  return allEntries()
    .filter((e) => isPublished(e, now))
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))
    .map((e) => localize(e, lang));
}

export function formatDate(date: string, lang: Locale = "en") {
  return new Intl.DateTimeFormat(lang, {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "Asia/Ho_Chi_Minh",
  }).format(new Date(date));
}

export function readTime(text: string) {
  return Math.max(1, Math.ceil(text.split(/\s+/).filter(Boolean).length / 200));
}
