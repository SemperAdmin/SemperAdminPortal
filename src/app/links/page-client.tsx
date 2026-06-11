"use client";

import * as React from "react";
import { ExternalLink, Search, X, Link2 } from "lucide-react";
import { PageHeader } from "@/components/domain/page-header";
import { MetaRow } from "@/components/domain/meta-row";
import { StatusPill } from "@/components/ui/status-pill";
import { Pill } from "@/components/ui/pill";
import { RoleChip } from "@/components/domain/role-chip";
import { EmptyState } from "@/components/domain/empty-state";
import { FilterBar, type FilterChip } from "@/components/domain/filter-bar";
import type { Role } from "@/lib/roles";
import { cn } from "@/lib/utils";
import { classifyFreshness } from "@/lib/verification";

type LinkCategory =
  | "semper-admin"
  | "educational"
  | "reference"
  | "system"
  | "ai"
  | "teams-channels"
  | "sharepoints"
  | "more-great-links";

type LinkAccess =
  | "public"
  | "cac"
  | "sharepoint"
  | "teams"
  | "intranet"
  | "unknown";

interface LinkData {
  slug: string;
  title: string;
  summary: string;
  roles: Role[];
  url: string;
  category: LinkCategory;
  additionalCategories?: LinkCategory[];
  audience?: Role;
  access?: LinkAccess;
  needsAccessReview?: boolean;
  requiresCac?: boolean;
  aliases?: string[];
  lastVerified: string;
}

const CATEGORY_ORDER: LinkCategory[] = [
  "semper-admin",
  "educational",
  "reference",
  "system",
  "ai",
  "teams-channels",
  "sharepoints",
  "more-great-links",
];

const CATEGORY_LABEL: Record<LinkCategory, string> = {
  "semper-admin": "Semper Admin",
  educational: "Educational",
  reference: "Reference",
  system: "System",
  ai: "AI",
  "teams-channels": "Teams Channels",
  sharepoints: "SharePoints",
  "more-great-links": "More Great Links",
};

const ACCESS_ORDER: LinkAccess[] = [
  "public",
  "cac",
  "sharepoint",
  "teams",
  "intranet",
  "unknown",
];

const ACCESS_LABEL: Record<LinkAccess, string> = {
  public: "Public",
  cac: "CAC",
  sharepoint: "SharePoint",
  teams: "Teams",
  intranet: "Intranet",
  unknown: "Verify",
};

const ACCESS_PILL_VARIANT: Record<
  LinkAccess,
  "success" | "warning" | "info" | "accent" | "neutral" | "outline"
> = {
  public: "success",
  cac: "warning",
  sharepoint: "info",
  teams: "accent",
  intranet: "neutral",
  unknown: "outline",
};


function matchQuery(link: LinkData, q: string): boolean {
  if (!q) return true;
  const haystack = [
    link.title,
    link.summary,
    link.url,
    ...(link.aliases ?? []),
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(q);
}

function linkInCategory(link: LinkData, cat: LinkCategory): boolean {
  if (link.category === cat) return true;
  return (link.additionalCategories ?? []).includes(cat);
}

export default function LinksIndex() {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const data = require("@/generated/links.json") as LinkData[];

  const [query, setQuery] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState<string>("all");
  const [activeAccess, setActiveAccess] = React.useState<string>("all");

  const trimmed = query.trim().toLowerCase();

  const categoryChips: FilterChip[] = React.useMemo(() => {
    const all = data.filter(
      (l) =>
        matchQuery(l, trimmed) &&
        (activeAccess === "all" || (l.access ?? "unknown") === activeAccess)
    );
    const chips: FilterChip[] = [
      { id: "all", label: "All", count: all.length },
    ];
    for (const cat of CATEGORY_ORDER) {
      chips.push({
        id: cat,
        label: CATEGORY_LABEL[cat],
        count: all.filter((l) => linkInCategory(l, cat)).length,
      });
    }
    return chips;
  }, [data, trimmed, activeAccess]);

  const accessChips: FilterChip[] = React.useMemo(() => {
    const all = data.filter(
      (l) =>
        matchQuery(l, trimmed) &&
        (activeCategory === "all" ||
          linkInCategory(l, activeCategory as LinkCategory))
    );
    const chips: FilterChip[] = [
      { id: "all", label: "All", count: all.length },
    ];
    for (const acc of ACCESS_ORDER) {
      chips.push({
        id: acc,
        label: ACCESS_LABEL[acc],
        count: all.filter((l) => (l.access ?? "unknown") === acc).length,
      });
    }
    return chips;
  }, [data, trimmed, activeCategory]);

  const filtered = React.useMemo(() => {
    return data.filter(
      (l) =>
        matchQuery(l, trimmed) &&
        (activeCategory === "all" ||
          linkInCategory(l, activeCategory as LinkCategory)) &&
        (activeAccess === "all" || (l.access ?? "unknown") === activeAccess)
    );
  }, [data, trimmed, activeCategory, activeAccess]);

  const grouped = React.useMemo(() => {
    const map = new Map<LinkCategory, LinkData[]>();
    for (const cat of CATEGORY_ORDER) map.set(cat, []);
    for (const link of filtered) {
      map.get(link.category)?.push(link);
    }
    return CATEGORY_ORDER.map((cat) => ({
      category: cat,
      items: (map.get(cat) ?? [])
        .slice()
        .sort((a, b) => a.title.localeCompare(b.title)),
    })).filter((g) => g.items.length > 0);
  }, [filtered]);

  const clearAll = React.useCallback(() => {
    setQuery("");
    setActiveCategory("all");
    setActiveAccess("all");
  }, []);

  const anyFilterActive =
    query.length > 0 || activeCategory !== "all" || activeAccess !== "all";

  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader
        eyebrow="Resources"
        tags={
          <StatusPill
            status="fresh"
            label={`${data.length} links available`}
          />
        }
        title="LINKS"
        summary="Curated external resources, tools, and references. Every Marine sees every link. Use search and filters to narrow the view."
      >
        <MetaRow
          items={[
            { label: "Links", value: data.length },
            { label: "Categories", value: CATEGORY_ORDER.length },
          ]}
        />
      </PageHeader>

      <div className="relative mb-4">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 size-4 text-[var(--color-muted-foreground)]"
          aria-hidden="true"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search title, summary, alias, or URL"
          aria-label="Search links"
          className="w-full rounded-[var(--radius-button)] border border-[var(--color-border)] bg-[var(--color-surface)] py-2.5 pl-9 pr-9 text-[14px] text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)] focus:border-[var(--color-usmc-scarlet)] focus:outline-none focus:ring-1 focus:ring-[var(--color-usmc-scarlet)]"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]"
          >
            <X className="size-4" />
          </button>
        )}
      </div>

      <FilterBar
        label="Category"
        chips={categoryChips}
        activeId={activeCategory}
        onChange={setActiveCategory}
      />

      <FilterBar
        label="Access"
        chips={accessChips}
        activeId={activeAccess}
        onChange={setActiveAccess}
      />

      <div className="mb-4 flex items-center justify-between text-[12px] tabular-nums text-[var(--color-muted-foreground)]">
        <span>
          {filtered.length === data.length
            ? `${data.length} links`
            : `${filtered.length} of ${data.length} links`}
        </span>
        {anyFilterActive && (
          <button
            onClick={clearAll}
            className="text-[12px] font-semibold text-[var(--color-usmc-scarlet)] hover:underline"
          >
            Clear all
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          icon={Link2}
          title="No links match your filters"
          description="Adjust the search or category filter, or clear all to start over."
          actions={
            <button
              onClick={clearAll}
              className="rounded-[var(--radius-button)] border border-[var(--color-border-strong)] px-3 py-1.5 text-[12px] font-semibold text-[var(--color-foreground)] hover:bg-[var(--color-surface-2)]"
            >
              Clear all filters
            </button>
          }
        />
      ) : (
        <div className="flex flex-col gap-10">
          {grouped.map((group) => (
            <section key={group.category} className="flex flex-col gap-4">
              <header className="flex items-baseline justify-between border-b border-[var(--color-border)] pb-2">
                <h2 className="text-[17px] font-bold tracking-tight">
                  {CATEGORY_LABEL[group.category]}
                </h2>
                <span className="font-mono text-[11px] text-[var(--color-muted-foreground)]">
                  {group.items.length}
                </span>
              </header>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {group.items.map((l) => (
                  <LinkCard key={l.slug} link={l} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}

function LinkCard({ link }: { link: LinkData }) {
  const access = link.access ?? "unknown";
  const status = classifyFreshness(link.lastVerified);
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative flex flex-col gap-3 overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-card)] p-5 transition-all",
        "hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-md)]"
      )}
    >
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-1 opacity-0 transition-opacity group-hover:opacity-100"
        style={{ backgroundColor: "var(--color-usmc-scarlet)" }}
      />
      <div className="flex items-center justify-between gap-2">
        <div
          className="grid size-9 place-items-center rounded-[var(--radius-sm)]"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--color-usmc-scarlet) 12%, transparent)",
            color: "var(--color-usmc-scarlet)",
          }}
        >
          <ExternalLink className="size-4" aria-hidden="true" />
        </div>
        <div className="flex items-center gap-1.5">
          <Pill variant={ACCESS_PILL_VARIANT[access]} size="xs">
            {link.needsAccessReview ? "Verify access" : ACCESS_LABEL[access]}
          </Pill>
          <StatusPill
            status={status}
            label={
              status === "fresh"
                ? "Verified"
                : status === "aging"
                  ? "Aging"
                  : "Stale"
            }
            size="xs"
          />
        </div>
      </div>
      <div>
        <h3 className="text-base font-bold tracking-tight">{link.title}</h3>
        <p className="mt-1 text-sm leading-snug text-[var(--color-muted-foreground)]">
          {link.summary}
        </p>
      </div>
      <div className="mt-auto flex items-center justify-between border-t border-[var(--color-border)] pt-3">
        <div className="flex flex-wrap gap-1">
          {link.audience && (
            <RoleChip role={link.audience} size="xs" icon={false} />
          )}
        </div>
        <span
          className="inline-flex items-center gap-1 text-xs font-semibold"
          style={{ color: "var(--color-usmc-scarlet)" }}
        >
          Visit
          <ExternalLink className="size-3" aria-hidden="true" />
        </span>
      </div>
    </a>
  );
}
