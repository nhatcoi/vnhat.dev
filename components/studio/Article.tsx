import Link from "next/link";
import type { Post } from "@/data/posts";
import type { Dict } from "@/lib/dict";
import { path, type Locale } from "@/lib/i18n";
import { formatDate, readTime } from "@/lib/posts";
import { paragraphs } from "@/lib/sections";

/** The public article layout; the admin preview renders the same component. */
export function Article({
  post: p,
  lang,
  t,
  home = true,
}: {
  post: Post;
  lang: Locale;
  t: Dict["writing"];
  home?: boolean;
}) {
  const id = (i: number) => `section-${i + 1}`;
  return (
    <article className="wrap prose">
      <div className="page-intro">
        {home && <Link href={path(lang, "/writing")}>{t.back}</Link>}
        <h1 className="article-title">{p.title}</h1>
        <div className="article-meta">
          {t.topics[p.category] ?? p.category} / {formatDate(p.publishedAt, lang)} /{" "}
          {readTime(p.sections.map((s) => s.body).join(" "))} {t.minRead}
        </div>
        {!!p.tags?.length && (
          <div className="article-tags">
            {p.tags.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
        )}
        <p>{p.excerpt}</p>
      </div>
      {p.sections.length > 2 && (
        <nav className="article-toc" aria-label={t.toc}>
          <b>{t.toc}</b>
          <ol>
            {p.sections.map((s, i) => (
              <li key={i}>
                <a href={`#${id(i)}`}>{s.heading}</a>
              </li>
            ))}
          </ol>
        </nav>
      )}
      {p.sections.map((s, i) => (
        <section key={i} id={id(i)}>
          <h2>{s.heading}</h2>
          {paragraphs(s.body).map((para, j) => (
            <p key={j}>{para}</p>
          ))}
        </section>
      ))}
      {!!p.sources.length && (
        <div className="article-refs">
          {t.projects}
          {p.sources.map((s) => (
            <a href={s.url} key={s.url}>
              {s.label} ↗
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
