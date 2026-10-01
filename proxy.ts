import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { LOCALE_COOKIE, hasLocale, matchLocale } from "@/lib/i18n";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // The admin area is not localised and is gated by its own session check.
  if (pathname === "/admin" || pathname.startsWith("/admin/")) return;
  // Static assets (but not the RSS feed) are never localised.
  if (pathname.startsWith("/images/") || /\.(?!xml$)[a-z0-9]+$/i.test(pathname))
    return;

  const first = pathname.split("/")[1];
  if (hasLocale(first)) {
    const res = NextResponse.next();
    if (request.cookies.get(LOCALE_COOKIE)?.value !== first)
      res.cookies.set(LOCALE_COOKIE, first, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
        sameSite: "lax",
      });
    return res;
  }

  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale = hasLocale(saved)
    ? saved
    : matchLocale(request.headers.get("accept-language"));
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = { matcher: ["/((?!_next|api).*)"] };

