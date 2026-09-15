import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-muted">
          &copy; {new Date().getFullYear()} {profile.fullName}. Built with
          Next.js, GSAP &amp; React Flow.
        </p>
        <div className="flex gap-4">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target={social.url.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="font-mono text-xs uppercase tracking-wide text-muted transition-colors hover:text-accent"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
