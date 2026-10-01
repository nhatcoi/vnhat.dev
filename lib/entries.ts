import type { Locale } from "./i18n";
import type { Section } from "./sections";

export type Status = "published" | "scheduled" | "draft";
export type Category =
  | "AI News"
  | "AI Research"
  | "AI"
  | "Engineering"
  | "Building";

export type Copy = { title: string; excerpt: string; sections: Section[] };
export type EntrySource = { url: string; label: Record<Locale, string> };

/** A post with every language, as stored. `origin` says where it lives. */
export type Entry = {
  slug: string;
  category: Category;
  status: Status;
  publishedAt: string;
  visual: string;
  tags: string[];
  sources: EntrySource[];
  en: Copy;
  vi?: Copy;
  origin: "static" | "db";
  /** Fact-check findings from the agent, shown to the admin. */
  warnings: string[];
};
