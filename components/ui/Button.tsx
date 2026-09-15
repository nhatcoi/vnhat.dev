import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  external,
  className,
}: ButtonProps) {
  const styles = cn(
    "inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-sm uppercase tracking-wide transition-transform duration-200 hover:-translate-y-0.5",
    variant === "primary"
      ? "bg-accent text-background"
      : "border border-border text-foreground hover:border-accent",
    className
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={styles}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  );
}
