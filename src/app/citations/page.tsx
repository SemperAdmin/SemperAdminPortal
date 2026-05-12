import type { Metadata } from "next";
import { BookOpen, Globe, Link2 } from "lucide-react";
import { PageHeader } from "@/components/domain/page-header";
import { StatTile } from "@/components/domain/stat-tile";
import {
  CitationsBrowser,
  type CitationRow,
} from "@/components/domain/citations-browser";
import { getCitations } from "@/lib/content/loader";
import { ROLES, type Role } from "@/lib/roles";
import reverseIndex from "@/generated/citations-reverse.json";

export const metadata: Metadata = {
  title: "Citations",
  description:
    "Registry of parent policies and authority documents referenced across the portal.",
};

interface ReverseEntry {
  title: string;
  url: string;
  collection: string;
}

const REVERSE = reverseIndex as Record<string, ReverseEntry[]>;

export default function CitationsIndexPage() {
  // Filter out hidden placeholder entries. Locator stubs that exist only to
  // hold a filename slot pending Windows-side deletion carry hidden: true and
  // should not surface in the index.
  const citations = getCitations()
    .map((c) => c.frontmatter)
    .filter((c) => !c.hidden);

  const rows: CitationRow[] = citations.map((citation) => ({
    citation,
    citationCount: REVERSE[citation.id]?.length ?? 0,
  }));
  // Alphabetical by id. Groups by type prefix (ALMAR, DODFMR, MARADMIN, MCO,
  // NAVMC, SECNAV) then by document number within each type. Matches USMC
  // filing convention.
  rows.sort((a, b) => a.citation.id.localeCompare(b.citation.id));

  const totalCitations = citations.length;
  const withoutUrl = citations.filter((c) => !c.externalUrl).length;
  const referencedAtLeastOnce = rows.filter((r) => r.citationCount > 0).length;

  const typeOptions = Array.from(
    new Set(citations.map((c) => c.type))
  ).sort();
  const roleOptions: Role[] = [...ROLES];

  return (
    <div className="mx-auto max-w-5xl">
      <PageHeader
        eyebrow="Reference"
        title="Citations"
        summary="Every parent policy and authority document referenced across the portal. One entry per source. Fix a URL here and every citing page picks it up."
      />

      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatTile
          icon={BookOpen}
          value={totalCitations}
          label="Registry entries"
          meta="Authored parent documents"
        />
        <StatTile
          icon={Link2}
          value={referencedAtLeastOnce}
          label="In active use"
          meta={`${referencedAtLeastOnce} of ${totalCitations} cited by at least one page`}
        />
        <StatTile
          icon={Globe}
          value={withoutUrl}
          label="No external URL"
          meta="Pending source link"
        />
      </div>

      <CitationsBrowser
        rows={rows}
        typeOptions={typeOptions}
        roleOptions={roleOptions}
      />
    </div>
  );
}
