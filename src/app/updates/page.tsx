import type { Metadata } from "next";
import { getUpdatesInWindow } from "@/lib/content/loader";
import { UPDATES_WINDOW_DAYS } from "@/lib/content/schemas";
import citationsIndex from "@/generated/citations.json";
import UpdatesClient, { type UpdateRow } from "./page-client";

/**
 * Build-time anchor for the trailing window. Static export resolves this
 * once, at the moment the HTML is generated, so the cutoff is stable for
 * the life of the deploy and the React Compiler purity rule stays happy.
 */
const BUILD_TIME_MS = Date.now();

export const metadata: Metadata = {
  title: "What changed",
  description:
    "Policy changes, corrections, and new coverage from the last 90 days, with the authority behind each one.",
};

interface CitationRecord {
  id: string;
  title: string;
  type: string;
  number: string;
  externalUrl?: string;
}

const BY_ID = (
  citationsIndex as { byId: Record<string, CitationRecord> }
).byId;

/**
 * Resolve a registry id to a chip. A source with a public landing page
 * opens the source. A source without one routes to its portal entry.
 * Ids are validated during content sync, so a miss here is impossible in
 * a built tree, and the fallback keeps a broken chip from breaking a page.
 */
function chipFor(id: string) {
  const record = BY_ID[id];
  if (!record) return { id, label: id, href: null, external: false };
  return {
    id,
    label: `${record.type} ${record.number}`.trim(),
    href: record.externalUrl ?? `/citations/${record.id}`,
    external: Boolean(record.externalUrl),
  };
}

export default function UpdatesPage() {
  const rows: UpdateRow[] = getUpdatesInWindow(BUILD_TIME_MS).map((entry) => ({
    ...entry.frontmatter,
    citationChips: entry.frontmatter.citations.map(chipFor),
  }));

  const windowStart = new Date(
    BUILD_TIME_MS - UPDATES_WINDOW_DAYS * 24 * 60 * 60 * 1000
  )
    .toISOString()
    .slice(0, 10);
  const buildDate = new Date(BUILD_TIME_MS).toISOString().slice(0, 10);

  return (
    <UpdatesClient
      rows={rows}
      windowDays={UPDATES_WINDOW_DAYS}
      windowStart={windowStart}
      buildDate={buildDate}
    />
  );
}
