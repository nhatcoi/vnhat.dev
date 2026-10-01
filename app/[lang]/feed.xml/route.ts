import { notFound } from "next/navigation";
import { getDict } from "@/lib/dict";
import { hasLocale, path } from "@/lib/i18n";
import { publishedPosts, SITE_URL } from "@/lib/posts";

export const dynamic = "force-dynamic";

function xml(text: string) {
  return text.replace(
    /[<>&"']/g,
    (c) =>
      ({
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        '"': "&quot;",
        "'": "&apos;",
      })[c]!,
  );
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ lang: string }> },
) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDict(lang).meta;
  const root = SITE_URL;
  const posts = publishedPosts(lang);
  const items = posts
    .map((p) => {
      const url = root + path(lang, "/writing/" + p.slug);
      return `<item><title>${xml(p.title)}</title><link>${url}</link><guid>${url}</guid><description>${xml(p.excerpt)}</description><pubDate>${new Date(p.publishedAt).toUTCString()}</pubDate></item>`;
    })
    .join("");
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>${xml(t.rssTitle)}</title><link>${root}${path(lang)}</link><atom:link href="${root}${path(lang, "/feed.xml")}" rel="self" type="application/rss+xml"/><description>${xml(t.rssDescription)}</description><language>${lang}</language><lastBuildDate>${new Date(posts[0]?.publishedAt ?? 0).toUTCString()}</lastBuildDate>${items}</channel></rss>`,
    {
      headers: {
        "Content-Type": "application/rss+xml; charset=utf-8",
        "Cache-Control": "no-store",
      },
    },
  );
}
