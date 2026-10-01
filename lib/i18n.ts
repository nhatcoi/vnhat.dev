export const locales = ["en", "vi"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const LOCALE_COOKIE = "NEXT_LOCALE";

export const hasLocale = (value: string | undefined): value is Locale =>
  !!value && (locales as readonly string[]).includes(value);

/** Pick a locale from the first matching language in an Accept-Language header. */
export function matchLocale(header: string | null | undefined): Locale {
  for (const part of (header ?? "").split(",")) {
    const tag = part.split(";")[0].trim().toLowerCase().split("-")[0];
    if (hasLocale(tag)) return tag;
  }
  return defaultLocale;
}

export const localeNames: Record<Locale, string> = {
  en: "English",
  vi: "Tiếng Việt",
};

/** Prefix an internal path with its locale: path("vi", "/about") -> "/vi/about". */
export function path(lang: Locale, href = "/") {
  return `/${lang}${href === "/" ? "" : href}`;
}

/** Canonical + hreflang alternates for a locale-free path. */
export function alternates(lang: Locale, href = "/") {
  return {
    canonical: path(lang, href),
    languages: {
      ...Object.fromEntries(locales.map((l) => [l, path(l, href)])),
      "x-default": path(defaultLocale, href),
    },
  };
}
