import * as React from "react";
import { ExternalLink, FileText, Newspaper } from "lucide-react";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const NEWS = require("@/generated/igmc-news.json") as News;

interface News {
  lastUpdated: string;
  trendsReport: { title: string; url: string; publisher: string };
  checklistsLanding: { title: string; url: string };
  fy26Schedule: { number: string; title: string; url: string };
  maradmins: Array<{ number: string; title: string; url: string }>;
}

/**
 * Latest from IGMC. Renders below the program grid because the grid is the
 * primary action surface. The strip surfaces the FY25 Trends report at the
 * top, then a 2-column grid of the current MARADMINs. Links open in a new
 * tab with rel="noopener" because every target is an external Marine Corps
 * site outside the portal.
 */
export function IgmcNewsStrip() {
  return (
    <section
      aria-label="Latest from IGMC"
      className="mt-8 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-2)] p-5"
    >
      <header className="mb-4 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Newspaper
            className="size-4 text-[var(--color-usmc-scarlet)]"
            aria-hidden="true"
          />
          <h2 className="text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--color-foreground)]">
            Latest from IGMC
          </h2>
        </div>
        <span className="font-mono text-[11px] text-[var(--color-subtle-foreground)]">
          Updated {formatShortDate(NEWS.lastUpdated)}
        </span>
      </header>

      <a
        href={NEWS.trendsReport.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group mb-4 flex items-start gap-3 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-3 transition-colors hover:border-[var(--color-usmc-scarlet)]"
      >
        <FileText
          className="mt-0.5 size-4 shrink-0 text-[var(--color-usmc-scarlet)]"
          aria-hidden="true"
        />
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[var(--color-subtle-foreground)]">
            Annual report
          </p>
          <p className="mt-0.5 text-sm font-semibold leading-snug text-[var(--color-foreground)]">
            {NEWS.trendsReport.title}
          </p>
          <p className="mt-0.5 text-[11px] text-[var(--color-muted-foreground)]">
            {NEWS.trendsReport.publisher}
          </p>
        </div>
        <ExternalLink
          className="mt-0.5 size-3 shrink-0 text-[var(--color-muted-foreground)] group-hover:text-[var(--color-usmc-scarlet)]"
          aria-hidden="true"
        />
      </a>

      <div className="grid gap-2 md:grid-cols-2">
        {NEWS.maradmins.map((m) => (
          <a
            key={m.number}
            href={m.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-2 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-3 transition-colors hover:border-[var(--color-usmc-scarlet)]"
          >
            <span className="shrink-0 rounded-[var(--radius-xs)] border border-[var(--color-border-strong)] bg-[var(--color-surface-2)] px-1.5 py-0.5 font-mono text-[10px] font-bold tracking-wider text-[var(--color-foreground)]">
              {m.number}
            </span>
            <span className="min-w-0 flex-1 text-[13px] leading-snug text-[var(--color-foreground)] group-hover:text-[var(--color-usmc-scarlet)]">
              {m.title}
            </span>
            <ExternalLink
              className="mt-0.5 size-3 shrink-0 text-[var(--color-muted-foreground)] group-hover:text-[var(--color-usmc-scarlet)]"
              aria-hidden="true"
            />
          </a>
        ))}
      </div>

      <p className="mt-4 text-[11px] text-[var(--color-subtle-foreground)]">
        Source list and links are maintained at{" "}
        <a
          href={NEWS.checklistsLanding.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline-offset-2 hover:underline"
        >
          {NEWS.checklistsLanding.title}
        </a>
        .
      </p>
    </section>
  );
}

function formatShortDate(iso: string): string {
  return new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
