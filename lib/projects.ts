import { projects, type Project } from "@/data/projects";
import { projectsVi } from "@/data/projects.vi";
import type { Locale } from "./i18n";

/** Slugs shown on the home page, in order. */
const SHOWN = ["necom", "openpka", "jkauto", "procman"];

export function getProjects(lang: Locale): Project[] {
  const o = lang === "vi" ? projectsVi : undefined;
  return SHOWN.flatMap((slug) => {
    const p = projects.find((p) => p.slug === slug);
    return p ? [{ ...p, ...o?.[slug] }] : [];
  });
}
