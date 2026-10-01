import Link from "next/link";
import { TOPICS, publishedPosts } from "@/lib/posts";
import { alternates, path } from "@/lib/i18n";
import { resolveLang, type LangParams } from "@/lib/lang";
import { WritingList } from "@/components/studio/WritingList";

export const dynamic = "force-dynamic";

export async function generateMetadata(props: LangParams) {
  const { lang, t } = await resolveLang(props);
  return {
    title: t.writing.title,
    description: t.writing.description,
    alternates: alternates(lang, "/writing"),
  };
}

export default async function Page(
  props: LangParams & { searchParams: Promise<{ topic?: string }> },
) {
  const { lang, t } = await resolveLang(props);
  const { topic: raw } = await props.searchParams;
  // Only offer topics that have at least one published post.
  const used = new Set(publishedPosts(lang).map((p) => p.category));
  const topics = TOPICS.filter((x) => used.has(x));
  const topic = topics.find((x) => x === raw);
  const w = t.writing;
  return (
    <>
      <section className="page-intro wrap">
        <h1>{w.title}</h1>
      </section>
      <section className="wrap writing-page">
        <nav className="topic-nav" aria-label={w.topicsLabel}>
          {["All", ...topics].map((x) => (
            <Link
              className={(x === "All" ? !topic : topic === x) ? "active" : ""}
              key={x}
              href={path(lang, x === "All" ? "/writing" : "/writing?topic=" + x)}
            >
              {w.topics[x]}
            </Link>
          ))}
          <Link href={path(lang, "/feed.xml")}>{w.rss}</Link>
        </nav>
        <WritingList
          lang={lang}
          category={topic}
          empty={w.empty}
          topics={w.topics}
        />
      </section>
    </>
  );
}
