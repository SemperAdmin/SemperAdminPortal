import { ExternalLink, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { getCitationById } from "@/lib/references/resolve";

/**
 * SourceCitation - v1.3.
 * Inline source attribution rendered in page meta and detail footers.
 *
 * Phase 2 adds optional registry enrichment via citationId. When set, the
 * component pulls publisher and url defaults from content/citations. Inline
 * props remain valid for non-registry surfaces and override registry values.
 */
export interface SourceCitationProps {
  /** Display title for the source. Required. */
  title: string;
  /** Direct URL to the source document. Overrides the registry externalUrl. */
  url?: string;
  /** Publisher line. Overrides the registry publisher. */
  publisher?: string;
  /**
   * When set, only the publisher text becomes a link. Use when the
   * publisher carries a stable reference page distinct from the source
   * document. Ignored if url is also set.
   */
  publisherUrl?: string;
  /**
   * Citation registry id. When provided, defaults publisher to the registry
   * publisher and url to the registry externalUrl. Inline props win when
   * both are present.
   */
  citationId?: string;
  className?: string;
}

export function SourceCitation({
  title,
  url,
  publisher,
  publisherUrl,
  citationId,
  className,
}: SourceCitationProps) {
  const entry = getCitationById(citationId);
  const resolvedUrl = url ?? entry?.externalUrl;
  const resolvedPublisher = publisher ?? entry?.publisher;

  const publisherNode =
    resolvedPublisher && publisherUrl && !resolvedUrl ? (
      <a
        href={publisherUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-[var(--color-muted-foreground)] underline-offset-2 hover:text-[var(--color-foreground)] hover:underline"
      >
        - {resolvedPublisher}
        <ExternalLink className="size-3 opacity-70" aria-hidden="true" />
      </a>
    ) : resolvedPublisher ? (
      <span className="text-[var(--color-muted-foreground)]">
        - {resolvedPublisher}
      </span>
    ) : null;

  const content = (
    <>
      <BookOpen className="size-4 shrink-0 opacity-70" aria-hidden="true" />
      <span className="font-medium">{title}</span>
      {publisherNode}
      {resolvedUrl && <ExternalLink className="size-3.5 opacity-70" aria-hidden="true" />}
    </>
  );
  return (
    <cite
      className={cn(
        "inline-flex items-center gap-1.5 text-xs not-italic",
        className
      )}
    >
      <span className="sr-only">Source: </span>
      {resolvedUrl ? (
        <a
          href={resolvedUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 underline-offset-2 hover:underline"
        >
          {content}
        </a>
      ) : (
        <span className="inline-flex items-center gap-1.5">{content}</span>
      )}
    </cite>
  );
}
