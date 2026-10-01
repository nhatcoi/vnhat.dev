import { notFound } from "next/navigation";
import { Article } from "@/components/studio/Article";
import { publishedPosts } from "@/lib/posts";
import { alternates } from "@/lib/i18n";
import { resolveLang } from "@/lib/lang";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ lang: string; slug: string }> };

export async function generateMetadata(props: Props) {
  const { lang, t } = await resolveLang(props);
  const slug = (await props.params).slug;
  const post = publishedPosts(lang).find((p) => p.slug === slug);
  return {
    title: post?.title ?? t.writing.notFound,
    description: post?.excerpt,
    alternates: alternates(lang, "/writing/" + slug),
  };
}

export default async function Page(props: Props) {
  const { lang, t } = await resolveLang(props);
  const slug = (await props.params).slug;
  const p = publishedPosts(lang).find((p) => p.slug === slug);
  if (!p) notFound();
  return <Article post={p} lang={lang} t={t.writing} />;
}
