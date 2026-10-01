import type { Locale } from "@/lib/i18n";
import { en, type Dict } from "./en";
import { vi } from "./vi";

const dicts: Record<Locale, Dict> = { en, vi };

export const getDict = (lang: Locale) => dicts[lang];
export type { Dict };
