export function TimelineItem({
  period,
  title,
  org,
  bullets,
}: {
  period: string;
  title: string;
  org: string;
  bullets?: string[];
}) {
  return (
    <div className="relative border-l border-border pl-6">
      <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
      <p className="font-mono text-xs uppercase tracking-wide text-muted">{period}</p>
      <h3 className="mt-1 text-lg font-bold">{title}</h3>
      <p className="text-sm text-muted">{org}</p>
      {bullets && (
        <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-foreground/80">
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
