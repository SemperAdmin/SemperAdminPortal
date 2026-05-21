import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ExternalLink, ChevronRight } from "lucide-react";
import { PageHeader } from "@/components/domain/page-header";
import { MetaRow } from "@/components/domain/meta-row";
import { Pill } from "@/components/ui/pill";
import { RoleChip } from "@/components/domain/role-chip";
import { LastVerified } from "@/components/domain/last-verified";
import { MdxContent } from "@/components/domain/mdx-content";
import { Callout } from "@/components/domain/callout";
import { getCitations, findCitationById } from "@/lib/content/loader";
import reverseIndex from "@/generated/citations-reverse.json";

// Build-time anchor for content-freshness math. Hoisted out of the
// render function so React Compiler purity rule does not flag Date.now
// at render time. Static export resolves this once at build, which is
// the same moment the page HTML is generated.
const BUILD_TIME_MS = Date.now();

interface ReverseEntry {
  title: string;
  url: string;
  collection: string;
}

const REVERSE = reverseIndex as Record<string, ReverseEntry[]>;

const COLLECTION_LABEL: Record<string, string> = {
  admin: "Admin",
  marines: "Marines",
  leader: "Leader",
  commander: "Commander",
  policies: "Policy briefs",
  situations: "Situations",
  inspections: "Inspections",
};

export async function generateStaticParams() {
  return getCitations().map((c) => ({ id: c.frontmatter.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const entry = findCitationById(id);
  if (!entry) return { title: "Citation" };
  return {
    title: entry.frontmatter.title,
    description:
      "Parent policy reference. " +
      entry.frontmatter.publisher +
      ". Number " +
      entry.frontmatter.number +
      ".",
  };
}

export default async function CitationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const entry = findCitationById(id);
  if (!entry) notFound();
  const cit = entry.frontmatter;
  const citingPages = REVERSE[cit.id] ?? [];

  const grouped = citingPages.reduce<Record<string, ReverseEntry[]>>((acc, page) => {
    const bucket = acc[page.collection] ?? [];
    bucket.push(page);
    acc[page.collection] = bucket;
    return acc;
  }, {});
  const groupOrder = Object.keys(grouped).sort((a, b) => {
    const order = ["inspections", "admin", "leader", "commander", "marines", "policies", "situations"];
    return order.indexOf(a) - order.indexOf(b);
  });

  const verifiedDate = new Date(cit.lastVerified);
  const monthsOld =
    (BUILD_TIME_MS - verifiedDate.getTime()) / (1000 * 60 * 60 * 24 * 30);
  const isStale = monthsOld >= 24;
  const isAging = monthsOld >= 12 && monthsOld < 24;

  return (
    <article className="mx-auto max-w-4xl">
      <PageHeader
        compact
        eyebrow="Citation"
        tags={
          <>
            <Pill variant="accent" size="sm">
              {cit.type}
            </Pill>
            <span className="font-mono text-xs text-[var(--color-muted-foreground)]">
              {cit.number}
            </span>
            {cit.roles.map((r) => (
              <RoleChip key={r} role={r} size="sm" />
            ))}
            <LastVerified date={cit.lastVerified} />
          </>
        }
        title={cit.title}
        summary={cit.publisher}
        actions={
          cit.externalUrl ? (
            <a
              href={cit.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-[var(--radius-sm)] border border-[var(--color-usmc-scarlet)] bg-[color-mix(in_srgb,var(--color-usmc-scarlet)_8%,transparent)] px-3 py-1.5 text-xs font-semibold text-[var(--color-usmc-scarlet)] transition-colors hover:bg-[color-mix(in_srgb,var(--color-usmc-scarlet)_16%,transparent)]"
            >
              Open source
              <ExternalLink className="size-3.5" aria-hidden="true" />
            </a>
          ) : null
        }
      >
        <MetaRow
          items={[
            ...(cit.effectiveDate
              ? [{ label: "Effective", value: cit.effectiveDate }]
              : []),
            { label: "Publisher", value: cit.publisher, mono: false },
            { label: "Pages citing", value: String(citingPages.length), mono: false },
          ]}
        />
      </PageHeader>

      {(isStale || isAging) && (
        <Callout
          variant={isStale ? "danger" : "warning"}
          title={isStale ? "Stale source" : "Aging source"}
        >
          You last verified this citation {Math.round(monthsOld)} months ago.
          Confirm the URL and metadata against the current authority before
          relying on the entry.
        </Callout>
      )}

      {!cit.externalUrl && (
        <Callout variant="info" title="No external URL">
          The registry has no public URL for this document yet. Pull the
          working copy from MOL or the relevant agency portal. Update this
          entry when a stable URL surfaces.
        </Callout>
      )}

      {entry.body.trim() && <MdxContent source={entry.body} />}

      {cit.aliases.length > 0 && (
        <section className="mt-8 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-2)] p-4">
          <h2 className="mb-2 text-sm font-bold uppercase tracking-wider text-[var(--color-subtle-foreground)]">
            Aliases the resolver matches
          </h2>
          <ul className="flex flex-wrap gap-1.5">
            {cit.aliases.map((a) => (
              <li key={a}>
                <Pill variant="outline" size="xs">
                  {a}
                </Pill>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold tracking-tight">
          Cited by {citingPages.length}{" "}
          {citingPages.length === 1 ? "page" : "pages"}
        </h2>
        {citingPages.length === 0 && (
          <p className="rounded-[var(--radius-md)] border border-dashed border-[var(--color-border)] p-6 text-center text-sm text-[var(--color-muted-foreground)]">
            No pages in the portal reference this citation yet.
          </p>
        )}
        {groupOrder.map((collection) => (
          <div key={collection} className="mb-6">
            <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-[var(--color-subtle-foreground)]">
              {COLLECTION_LABEL[collection] ?? collection} ({grouped[collection]?.length ?? 0})
            </h3>
            <ul className="space-y-1.5">
              {grouped[collection]?.map((p) => (
                <li key={`${collection}-${p.url}`}>
                  <Link
                    href={p.url}
                    className="group flex items-start gap-2 rounded-[var(--radius-sm)] px-2 py-1.5 text-sm transition-colors hover:bg-[var(--color-surface-2)]"
                  >
                    <span className="flex-1 text-[var(--color-foreground)] group-hover:text-[var(--color-usmc-scarlet)]">
                      {p.title}
                    </span>
                    <ChevronRight
                      className="mt-0.5 size-3 shrink-0 text-[var(--color-muted-foreground)] transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </article>
  );
}
