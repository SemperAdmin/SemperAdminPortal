import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { resolveReference } from "@/lib/references/resolve";

/**
 * Citation - v1.4.
 * Inline superscript chip. Mono font. Color-mix tint.
 * Use next to a claim in body prose to anchor authority.
 *
 * Phase 3 wires the chip through the citations registry. Click behavior.
 *   1. Explicit href prop wins. Use for one-off authored anchors.
 *   2. Registry hit with externalUrl. Opens the source PDF in a new tab.
 *   3. Registry hit without externalUrl. Routes to /citations/<id>.
 *   4. No registry hit. Plain chip.
 */
export interface CitationProps {
  /** Source label, e.g. "MCO 1900.16" or "MARADMIN 022/25". */
  source: string;
  /**
   * Optional explicit href. When set, overrides the resolver lookup. Use for
   * one-off citations not yet authored into the registry, or when an inline
   * surface needs a different destination than the canonical authority.
   */
  href?: string;
  className?: string;
}

export function Citation({ source, href, className }: CitationProps) {
  const inner = (
    <span
      className={cn(
        "inline-flex items-center rounded-[var(--radius-xs)] border px-1 py-px font-mono text-[10px] font-bold align-super leading-none transition-colors",
        className
      )}
      style={{
        backgroundColor: "color-mix(in srgb, var(--color-usmc-scarlet) 8%, var(--color-surface))",
        color: "var(--color-usmc-scarlet)",
        borderColor: "color-mix(in srgb, var(--color-usmc-scarlet) 25%, transparent)",
      }}
    >
      {source}
    </span>
  );

  // Explicit prop wins. Skip the resolver.
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="no-underline hover:opacity-80"
        aria-label={`Citation: ${source}`}
      >
        {inner}
      </a>
    );
  }

  const entry = resolveReference(source);

  // Registry hit with an external URL. Open the source in a new tab.
  if (entry?.externalUrl) {
    return (
      <a
        href={entry.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="no-underline hover:opacity-80"
        aria-label={`Citation: ${entry.title}`}
        title={entry.title}
      >
        {inner}
      </a>
    );
  }

  // Registry hit without an external URL. Route to the in-portal detail page.
  if (entry) {
    return (
      <Link
        href={`/citations/${entry.id}`}
        className="no-underline hover:opacity-80"
        aria-label={`Citation: ${entry.title}`}
        title={entry.title}
      >
        {inner}
      </Link>
    );
  }

  // No registry hit. Plain chip.
  return inner;
}
