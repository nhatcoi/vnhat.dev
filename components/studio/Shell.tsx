"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X, CodeXml } from "lucide-react";
import { locales, localeNames, path as href, type Locale } from "@/lib/i18n";
import type { Dict } from "@/lib/dict";

export function Navbar({ lang, t }: { lang: Locale; t: Dict }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  // Locale-free path of the current page, e.g. /vi/projects/necom -> /projects/necom
  const rest = pathname.replace(new RegExp(`^/${lang}(?=/|$)`), "") || "/";
  const items: [string, string][] = [
    ["/#work", t.nav.work],
    ["/writing", t.nav.writing],
  ];
  return (
    <header className="header">
      <Link
        href={href(lang)}
        className="wordmark"
        aria-label={t.nav.homeLabel}
      >
        n<span>↗</span>
      </Link>
      <nav aria-label={t.nav.main} className={open ? "nav open" : "nav"}>
        {items.map(([url, label]) => {
          const current = rest === url || rest.startsWith(url + "/");
          return (
            <Link
              onClick={() => setOpen(false)}
              aria-current={current ? "page" : undefined}
              key={url}
              href={href(lang, url)}
            >
              {label}
            </Link>
          );
        })}
      </nav>
      <div className="lang-switch" role="group" aria-label={t.language}>
        {locales.map((l) => (
          <Link
            key={l}
            href={href(l, rest)}
            hrefLang={l}
            lang={l}
            title={localeNames[l]}
            aria-current={l === lang ? "true" : undefined}
          >
            {l.toUpperCase()}
          </Link>
        ))}
      </div>
      <Link className="nav-contact" href={href(lang, "/#contact")}>
        {t.nav.talk} <ArrowUpRight size={16} />
      </Link>
      <button
        className="menu"
        aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
export function Footer({ lang, t }: { lang: Locale; t: Dict }) {
  return (
    <footer className="footer">
      <Link href={href(lang)} className="footer-brand">
        nhat<span>.builds</span>
      </Link>
      <p>{t.footer.tagline}</p>
      <div>
        <a href="https://github.com/nhatcoi" aria-label="GitHub">
          <CodeXml size={18} />
        </a>
        <a href="mailto:vnhat.dev@gmail.com">
          {t.footer.email} <ArrowUpRight size={14} />
        </a>
        <Link href={href(lang, "/feed.xml")}>{t.footer.rss}</Link>
      </div>
    </footer>
  );
}
