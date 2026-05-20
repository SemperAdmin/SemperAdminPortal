import * as React from "react";
import Link from "next/link";
import { Layers } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Inspection } from "@/lib/content/schemas";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const TAXONOMY = require("@/generated/igmc-core-taxonomy.json") as Taxonomy;

type TaxonomyItem = string | { label: string; programKey?: string };

interface Bucket {
  id: string;
  label: string;
  description: string;
  items: TaxonomyItem[];
}
interface Taxonomy {
  lastUpdated: string;
  buckets: Bucket[];
}

/**
 * Explains the CoRE / CoRE+ designation system that drives inspection scope.
 * Collapsed by default. The trigger surfaces the total counts and the last
 * IGMC update date. Expanding the accordion reveals the four buckets in a
 * column grid. Each entry that matches an Inspection title in the catalog
 * renders as a Link to the detail page so the user can pivot from the
 * taxonomy to the checklist in one click.
 */
export function CoreTaxonomyExplainer({
  inspections,
}: {
  inspections: Inspection[];
}) {
  // Build a lookup from lower-cased title to inspection so we can link items
  // that ship in the catalog. The match is fuzzy on word boundaries because
  // the IGMC taxonomy and the inspection titles sometimes differ in trailing
  // qualifiers (e.g. "Casualty Affairs" vs "Casualty Affairs Program").
  const titleIndex = React.useMemo(() => {
    const m = new Map<string, Inspection>();
    for (const p of inspections) {
      m.set(normalize(p.title), p);
    }
    return m;
  }, [inspections]);

  const keyIndex = React.useMemo(() => {
    const m = new Map<string, Inspection>();
    for (const p of inspections) {
      m.set(`${p.programNumber}-${p.slug}`, p);
    }
    return m;
  }, [inspections]);

  const totalCore = TAXONOMY.buckets.find((b) => b.id === "core")?.items.length ?? 0;
  const totalPlus = TAXONOMY.buckets
    .filter((b) => b.id !== "core")
    .reduce((n, b) => n + b.items.length, 0);

  return (
    <section
      aria-label="CoRE and CoRE+ designation"
      className="mt-4"
    >
      <Accordion type="single" collapsible className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-2)] px-4">
        <AccordionItem value="core" className="border-0">
          <AccordionTrigger className="py-3 text-left">
            <span className="flex items-center gap-2">
              <Layers className="size-4 text-[var(--color-usmc-scarlet)]" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--color-foreground)]">
                CoRE and CoRE+ designation
              </span>
              <span className="text-[11px] font-medium text-[var(--color-subtle-foreground)]">
                {totalCore} CoRE plus {totalPlus} CoRE+ functional areas. Updated {formatShortDate(TAXONOMY.lastUpdated)}.
              </span>
            </span>
          </AccordionTrigger>
          <AccordionContent className="pb-5 pt-1">
            <p className="mb-4 text-sm text-[var(--color-muted-foreground)]">
              IGMC Independent and Comprehensive Command Inspections focus on CoRE and CoRE+ functional areas. Commanders running a CGIP may inspect beyond these areas to meet command-specific needs.
            </p>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {TAXONOMY.buckets.map((b) => (
                <div key={b.id} className="rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-3">
                  <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--color-usmc-scarlet)]">
                    {b.label}
                  </p>
                  <p className="mt-0.5 text-[11px] text-[var(--color-muted-foreground)]">
                    {b.items.length} {b.items.length === 1 ? "area" : "areas"}
                  </p>
                  <p className="mt-2 text-[11px] leading-snug text-[var(--color-subtle-foreground)]">
                    {b.description}
                  </p>
                  <ul className="mt-3 space-y-1 text-[13px]">
                    {b.items.map((item) => {
                      const label = typeof item === "string" ? item : item.label;
                      const explicitKey = typeof item === "string" ? undefined : item.programKey;
                      const hit = explicitKey ? keyIndex.get(explicitKey) : titleIndex.get(normalize(label));
                      return (
                        <li key={label}>
                          {hit ? (
                            <Link
                              href={`/inspections/igmc/${hit.programNumber}/${hit.slug}`}
                              className="text-[var(--color-foreground)] underline-offset-2 hover:text-[var(--color-usmc-scarlet)] hover:underline"
                            >
                              {label}
                            </Link>
                          ) : (
                            <span className="text-[var(--color-muted-foreground)]">{label}</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function formatShortDate(iso: string): string {
  return new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
