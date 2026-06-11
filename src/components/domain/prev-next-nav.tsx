import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface PrevNextItem {
  title: string;
  url: string;
}

interface PrevNextNavProps {
  prev?: PrevNextItem;
  next?: PrevNextItem;
  topicLabel?: string;
}

export function PrevNextNav({ prev, next, topicLabel }: PrevNextNavProps) {
  if (!prev && !next) return null;

  return (
    <nav
      aria-label={topicLabel ? `Navigation within ${topicLabel}` : "Topic navigation"}
      className="mt-8 grid gap-3 sm:grid-cols-2"
    >
      {prev ? (
        <Link
          href={prev.url}
          className="group flex items-start gap-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-card)] p-4 transition-colors hover:border-[var(--color-primary)] hover:bg-[var(--color-muted)]/40"
        >
          <ChevronLeft
            className="mt-1 size-4 shrink-0 opacity-60 transition-opacity group-hover:opacity-100"
            aria-hidden="true"
          />
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-muted-foreground)]">
              Previous in topic
            </p>
            <p className="mt-1 text-sm font-medium">{prev.title}</p>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={next.url}
          className="group flex items-start justify-end gap-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-card)] p-4 text-right transition-colors hover:border-[var(--color-primary)] hover:bg-[var(--color-muted)]/40"
        >
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-muted-foreground)]">
              Next in topic
            </p>
            <p className="mt-1 text-sm font-medium">{next.title}</p>
          </div>
          <ChevronRight
            className="mt-1 size-4 shrink-0 opacity-60 transition-opacity group-hover:opacity-100"
            aria-hidden="true"
          />
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
