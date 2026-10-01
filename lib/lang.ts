import { notFound } from "next/navigation";
import { getDict } from "./dict";
import { hasLocale } from "./i18n";

export type LangParams = { params: Promise<{ lang: string }> };

/** Resolve the `[lang]` segment to a supported locale and its dictionary, or 404. */
export async function resolveLang({ params }: LangParams) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return { lang, t: getDict(lang) };
}
