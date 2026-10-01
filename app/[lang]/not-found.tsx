import Link from "next/link";
import { cookies } from "next/headers";
import { getDict } from "@/lib/dict";
import { LOCALE_COOKIE, defaultLocale, hasLocale, path } from "@/lib/i18n";

export default async function NotFound() {
  const saved = (await cookies()).get(LOCALE_COOKIE)?.value;
  const lang = hasLocale(saved) ? saved : defaultLocale;
  const t = getDict(lang).notFound;
  return (
    <section className="notfound wrap">
      <span className="eyebrow">404</span>
      <h1>{t.title}</h1>
      <p>{t.text}</p>
      <Link className="button primary" href={path(lang)}>
        {t.back}
      </Link>
    </section>
  );
}
