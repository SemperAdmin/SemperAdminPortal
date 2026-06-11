import * as React from "react";
import {
  CalendarClock,
  ClipboardList,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const RES = require("@/generated/mcaat-resources.json") as Resources;

interface LinkRef { title: string; url: string }
interface Resources {
  sections: Record<string, { checklist: LinkRef; schedule: LinkRef }>;
}

/**
 * Per-section MCAAT resources card. Renders the authoritative checklist and
 * schedule URLs that ship from the M&RA lookup tables for a single section
 * (admin or finance). The card is sourced from the same mcaat-resources.json
 * sidecar that powers the hub card so changes propagate from one file.
 *
 * If the section key has no entry in the resources file the component
 * returns null, leaving the section page unchanged.
 */
export function McaatSectionResources({ sectionKey }: { sectionKey: string }) {
  const entry = RES.sections?.[sectionKey];
  if (!entry) return null;

  return (
    <section
      aria-label={`${sectionKey} resources`}
      className="mt-6 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-2)] p-5"
    >
      <header className="mb-4 flex items-center gap-2">
        <CalendarClock
          className="size-4 text-[var(--color-marine-blue)] dark:text-[var(--color-marine-blue-50)]"
          aria-hidden="true"
        />
        <h2 className="text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--color-foreground)]">
          Authoritative source
        </h2>
      </header>

      <div className="grid gap-2 md:grid-cols-2">
        <SourceLink
          icon={ClipboardList}
          eyebrow="Checklist"
          title={entry.checklist.title}
          url={entry.checklist.url}
        />
        <SourceLink
          icon={CalendarClock}
          eyebrow="Schedule"
          title={entry.schedule.title}
          url={entry.schedule.url}
        />
      </div>

      <p className="mt-3 text-[11px] text-[var(--color-subtle-foreground)]">
        The portal mirrors the lookup table content for offline reading and audience-tagged filtering. The lookup table on M&RA is the authoritative source for the latest item set and inspection schedule.
      </p>
    </section>
  );
}

function SourceLink({
  icon: Icon,
  eyebrow,
  title,
  url,
}: {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  url: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-2 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-3 transition-colors hover:border-[var(--color-marine-blue)]"
    >
      <Icon
        className="mt-0.5 size-4 shrink-0 text-[var(--color-marine-blue)] dark:text-[var(--color-marine-blue-50)]"
        aria-hidden="true"
      />
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[var(--color-subtle-foreground)]">
          {eyebrow}
        </p>
        <p className="mt-0.5 text-[13px] font-semibold leading-snug text-[var(--color-foreground)] group-hover:text-[var(--color-marine-blue)] dark:group-hover:text-[var(--color-marine-blue-50)]">
          {title}
        </p>
      </div>
      <ExternalLink
        className="mt-0.5 size-3 shrink-0 text-[var(--color-muted-foreground)] group-hover:text-[var(--color-marine-blue)]"
        aria-hidden="true"
      />
    </a>
  );
}
