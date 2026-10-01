# Writing and morning publication

Posts live in `data/posts.ts`. Add a unique slug, title, excerpt, category, complete sections, source links, and an ISO date with an explicit time zone.

To schedule a reviewed article for 06:00 in Vietnam:

```ts
status: "scheduled",
publishedAt: "2026-10-02T06:00:00+07:00",
```

Deploy the content before its scheduled time. The home page, writing index, topic filters, article route, and RSS feed all use the same publication predicate. They are dynamically rendered: the article becomes available on the first request at or after 06:00 without a cron job or rebuild. An already-open page needs a refresh. Drafts and future articles return 404 through their direct URLs and are excluded from metadata and RSS. Invalid dates remain hidden. Do not place confidential material in this source repository.

This is scheduled publication of prewritten content, not automatic AI generation. To publish every morning, queue one reviewed article per date. No recurring Codex automation or external publishing service has been enabled.

For future automatic writing: add a server-side provider, approved sources, durable content storage, duplicate detection, and a scheduler at 23:00 UTC (06:00 Asia/Ho_Chi_Minh). Generate to draft, validate citations, then schedule. Keep API credentials server-side. Never use deployment-local file writes as persistent storage on serverless hosts.

The three initial articles are newly written starter copy based on the linked projects, not historical posts imported from the owner’s blog. Dates are editorial starter dates and can be adjusted before public deployment.

## Locales (en, vi)

All routes live under `app/[lang]/` (`/en/...`, `/vi/...`). `proxy.ts` redirects unprefixed URLs (including `/feed.xml`) using the `NEXT_LOCALE` cookie, then `Accept-Language`, defaulting to `en`.

- UI strings: `lib/dict/en.ts` is the source of truth; `lib/dict/vi.ts` is typed against it, so a missing key fails `tsc`.
- Posts: add Vietnamese copy to `data/posts.vi.ts` keyed by slug (`sourceLabels` align with `sources` order). A post without an entry shows English.
- Projects: same pattern in `data/projects.vi.ts`.
- Each locale has its own feed at `/{lang}/feed.xml`; pages emit canonical and `hreflang` alternates.
- To add a locale: extend `locales` in `lib/i18n.ts`, add a dictionary and register it in `lib/dict/index.ts`.

## AI News and AI Research topics

Two recurring series sit beside the general topics: `"AI News"` (weekly roundup) and `"AI Research"` (papers and model releases digest). The format was inspired by public AI-news sites, but every post must be written from your own reading of primary sources, not copied or paraphrased closely from another site.

Suggested structure, one `sections` entry each:
- What happened: 3-5 items, each one sentence plus a source link in `sources`.
- Why it matters: your own take for builders.
- What to try: one concrete thing to test this week.

Title pattern: "AI Weekly — Week N, 2026" / "AI Research Digest — YYYY-MM-DD". Use `status: "scheduled"` with a 06:00 +07:00 date. Check every claim against the linked primary source before publishing.

## Admin and the writing agent (`/admin`)

Posts in `data/posts.ts` stay in git. Posts made in the admin live in a SQLite file (`.data/blog.sqlite`, or `DATABASE_PATH`) and show up beside them instantly: no rebuild. This needs a persistent disk, so run on a VPS or container with a volume, not a serverless host. Back up the file. Node 22.5+ is required (`node:sqlite`).

Setup: copy `.env.example` to `.env.local` and set `ADMIN_PASSWORD` (8+ characters, ideally long and random) plus `OPENAI_API_KEY`, `OPENAI_MODEL` and, for a non-OpenAI endpoint, `OPENAI_BASE_URL`. Use HTTPS in production: the session cookie is `secure` there.

Vibe post: paste up to 5 links and/or raw text. The agent runs five steps:
1. Fetch each link (public hosts only: private and loopback addresses are blocked, size and time are capped) and extract readable text.
2. Extract the key facts, pick the category and tags, propose the slug and card label.
3. Outline and write the English post (headings become the table of contents), using only the extracted facts.
4. Translate to Vietnamese with the same structure.
5. Fact-check the English draft against the source text. Any "high" issue is listed on the post and blocks auto-publish.

The result is saved as a draft with a live preview in both languages. Edit anything (sections use `## Heading` blocks), then publish, schedule or delete. "Auto-publish" only publishes when the fact-check finds no high issues. Fetched pages and pasted text are treated as untrusted data; text is always rendered as plain text, never as HTML.

Always read a draft before publishing: the fact-check is a model, not a guarantee.
