import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { DatabaseSync } from "node:sqlite";
import type { Category, Copy, Entry, EntrySource, Status } from "./entries";

const g = globalThis as unknown as { __blogDb?: DatabaseSync };

function db() {
  if (g.__blogDb) return g.__blogDb;
  const file = resolve(process.env.DATABASE_PATH || ".data/blog.sqlite");
  mkdirSync(dirname(file), { recursive: true });
  const d = new DatabaseSync(file);
  d.exec(`
    CREATE TABLE IF NOT EXISTS posts (
      slug TEXT PRIMARY KEY,
      category TEXT NOT NULL,
      status TEXT NOT NULL,
      published_at TEXT NOT NULL,
      visual TEXT NOT NULL,
      tags TEXT NOT NULL,
      sources TEXT NOT NULL,
      en TEXT NOT NULL,
      vi TEXT,
      warnings TEXT NOT NULL,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );
  `);
  return (g.__blogDb = d);
}

type Row = Record<string, string | number | bigint | null | Uint8Array>;

function toEntry(r: Row): Entry {
  return {
    slug: String(r.slug),
    category: String(r.category) as Category,
    status: String(r.status) as Status,
    publishedAt: String(r.published_at),
    visual: String(r.visual),
    tags: JSON.parse(String(r.tags)),
    sources: JSON.parse(String(r.sources)) as EntrySource[],
    en: JSON.parse(String(r.en)) as Copy,
    vi: r.vi ? (JSON.parse(String(r.vi)) as Copy) : undefined,
    origin: "db",
    warnings: JSON.parse(String(r.warnings)),
  };
}

export function listDbEntries(): Entry[] {
  return db().prepare("SELECT * FROM posts ORDER BY published_at DESC").all().map(toEntry);
}

export function getDbEntry(slug: string): Entry | undefined {
  const r = db().prepare("SELECT * FROM posts WHERE slug = ?").get(slug);
  return r ? toEntry(r) : undefined;
}

export function slugExistsInDb(slug: string) {
  return !!db().prepare("SELECT 1 FROM posts WHERE slug = ?").get(slug);
}

export function saveDbEntry(e: Omit<Entry, "origin">) {
  const now = new Date().toISOString();
  db()
    .prepare(
      `INSERT INTO posts (slug, category, status, published_at, visual, tags, sources, en, vi, warnings, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
       ON CONFLICT(slug) DO UPDATE SET
         category=excluded.category, status=excluded.status, published_at=excluded.published_at,
         visual=excluded.visual, tags=excluded.tags, sources=excluded.sources, en=excluded.en,
         vi=excluded.vi, warnings=excluded.warnings, updated_at=excluded.updated_at`,
    )
    .run(
      e.slug,
      e.category,
      e.status,
      e.publishedAt,
      e.visual,
      JSON.stringify(e.tags),
      JSON.stringify(e.sources),
      JSON.stringify(e.en),
      e.vi ? JSON.stringify(e.vi) : null,
      JSON.stringify(e.warnings),
      now,
      now,
    );
}

export function deleteDbEntry(slug: string) {
  db().prepare("DELETE FROM posts WHERE slug = ?").run(slug);
}
