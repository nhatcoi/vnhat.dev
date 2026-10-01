import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "../globals.css";
import { Navbar, Footer } from "@/components/studio/Shell";
import { getDict } from "@/lib/dict";
import { alternates, locales } from "@/lib/i18n";
import { resolveLang, type LangParams } from "@/lib/lang";

const font = Space_Grotesk({
  subsets: ["latin", "vietnamese"],
  variable: "--font-display",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(props: LangParams): Promise<Metadata> {
  const { lang, t } = await resolveLang(props);
  return {
    metadataBase: new URL("https://vnhat.dev"),
    title: { default: t.meta.siteTitle, template: "%s | Nhat" },
    description: t.meta.siteDescription,
    alternates: {
      ...alternates(lang),
      types: { "application/rss+xml": `/${lang}/feed.xml` },
    },
    openGraph: { locale: lang === "vi" ? "vi_VN" : "en_US" },
  };
}

export default async function RootLayout({
  children,
  params,
}: LangParams & { children: React.ReactNode }) {
  const { lang } = await resolveLang({ params });
  const t = getDict(lang);
  return (
    <html lang={lang} className={font.variable}>
      <body>
        <a className="skip" href="#main">
          {t.skip}
        </a>
        <Navbar lang={lang} t={t} />
        <main id="main">{children}</main>
        <Footer lang={lang} t={t} />
      </body>
    </html>
  );
}
