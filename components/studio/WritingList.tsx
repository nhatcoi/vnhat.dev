import Link from "next/link";
import { publishedPosts, formatDate } from "@/lib/posts";
import { path, type Locale } from "@/lib/i18n";

export function WritingList({
  lang,
  empty,
  topics,
  limit,
  category,
}: {
  lang: Locale;
  empty: string;
  topics: Record<string, string>;
  limit?: number;
  category?: string;
}) {
  const all = publishedPosts(lang);
  const posts = all
    .filter((p) => !category || p.category === category)
    .slice(0, limit);
  return posts.length ? (
    <div className="writing-list">
      {posts.map((p) => (
        <Link
          className="writing-card"
          href={path(lang, "/writing/" + p.slug)}
          key={p.slug}
        >
          <div
            className={"writing-art art-" + (all.indexOf(p) % 3)}
            aria-hidden="true"
          >
            <span>{p.visual}</span>
          </div>
          <div className="writing-meta">
            <span>{topics[p.category] ?? p.category}</span>
            <time dateTime={p.publishedAt}>
              {formatDate(p.publishedAt, lang)}
            </time>
          </div>
          <h3>{p.title}</h3>
          <p>{p.excerpt}</p>
        </Link>
      ))}
    </div>
  ) : (
    <p className="empty">{empty}</p>
  );
}
