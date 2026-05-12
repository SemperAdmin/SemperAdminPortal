import * as React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { resolveReference } from "@/lib/references/resolve";

/**
 * ReferenceLink - inline anchor that resolves a reference string against
 * the citations registry. Used in detail-page References lists and in the
 * header sourcePolicy chip. Routing matches the Citation component.
 *
 *   1. Registry hit with externalUrl. Opens the source PDF in a new tab.
 *   2. Registry hit without externalUrl. Routes to /citations/<id>.
 *   3. No registry hit. Renders the plain text.
 */
export interface ReferenceLinkProps {
  text: string;
  className?: string;
  /** When true, hide the external-link icon. */
  noIcon?: boolean;
}

export function ReferenceLink({ text, className, noIcon }: ReferenceLinkProps) {
  const entry = resolveReference(text);

  if (entry?.externalUrl) {
    return (
      <a
        href={entry.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-center gap-1 text-[var(--color-usmc-scarlet)] underline-offset-2 hover:underline",
          className
        )}
        title={entry.title}
      >
        {text}
        {!noIcon && (
          <ExternalLink className="size-3 opacity-70" aria-hidden="true" />
        )}
      </a>
    );
  }

  if (entry) {
    return (
      <Link
        href={`/citations/${entry.id}`}
        className={cn(
          "text-[var(--color-usmc-scarlet)] underline-offset-2 hover:underline",
          className
        )}
        title={entry.title}
      >
        {text}
      </Link>
    );
  }

  return <span className={className}>{text}</span>;
}
