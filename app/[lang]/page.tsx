import Link from "next/link";
import { ArrowUpRight, CodeXml } from "lucide-react";
import { BuilderArt } from "@/components/studio/Artwork";
import { Projects } from "@/components/studio/Projects";
import { WritingList } from "@/components/studio/WritingList";
import { ContactForm } from "@/components/studio/ContactForm";
import { Lines } from "@/components/studio/Lines";
import { alternates, path } from "@/lib/i18n";
import { resolveLang, type LangParams } from "@/lib/lang";
import { getProjects } from "@/lib/projects";

export const dynamic = "force-dynamic";

export async function generateMetadata(props: LangParams) {
  const { lang } = await resolveLang(props);
  return { alternates: alternates(lang) };
}

export default async function Home(props: LangParams) {
  const { lang, t } = await resolveLang(props);
  const h = t.home;
  return (
    <>
      <section className="hero wrap">
        <div className="hero-copy">
          <div className="hello">
            <span className="hello-dot" /> {h.hello}{" "}
            <span className="wave">✳︎</span>
          </div>
          <h1>
            <Lines text={h.title} />
          </h1>
          <div className="hero-actions">
            <a className="button primary" href="#work">
              {h.explore} <ArrowUpRight size={18} />
            </a>
            <a className="text-link" href="https://github.com/nhatcoi">
              <CodeXml size={17} /> {h.github}
            </a>
          </div>
        </div>
        <BuilderArt t={t.art} />
      </section>
      <section className="section wrap" id="work">
        <div className="section-head">
          <h2>{t.work.title}</h2>
        </div>
        <Projects projects={getProjects(lang)} t={t.work} />
      </section>
      <section className="section wrap" id="writing">
        <div className="section-head">
          <h2>{t.writing.title}</h2>
          <Link className="text-link" href={path(lang, "/writing")}>
            {t.writing.all} <ArrowUpRight size={18} />
          </Link>
        </div>
        <WritingList
          lang={lang}
          limit={3}
          empty={t.writing.empty}
          topics={t.writing.topics}
        />
      </section>
      <section className="section wrap contact-section" id="contact">
        <h2>{t.contact.title}</h2>
        <ContactForm
          placeholder={t.contact.placeholder}
          send={t.contact.send}
        />
      </section>
    </>
  );
}
