export type Section = { heading: string; body: string };

/** Editable text form: "## Heading" followed by the body; paragraphs split on blank lines. */
export function parseSections(text: string): Section[] {
  const out: Section[] = [];
  let cur: { heading: string; lines: string[] } | null = null;
  for (const line of text.replace(/\r\n/g, "\n").split("\n")) {
    const m = /^##\s+(.*)$/.exec(line);
    if (m) {
      if (cur) out.push(finish(cur));
      cur = { heading: m[1].trim(), lines: [] };
    } else if (cur) cur.lines.push(line);
  }
  if (cur) out.push(finish(cur));
  return out.filter((s) => s.heading && s.body);
}

function finish(c: { heading: string; lines: string[] }): Section {
  return { heading: c.heading, body: c.lines.join("\n").trim() };
}

export function serializeSections(sections: Section[]): string {
  return sections.map((s) => `## ${s.heading}\n${s.body}`).join("\n\n");
}

/** Split a section body into paragraphs. */
export function paragraphs(body: string): string[] {
  return body
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}
