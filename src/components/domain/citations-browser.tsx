"use client";

import * as React from "react";
import Link from "next/link";
import {
  Search,
  ChevronRight,
  ExternalLink,
  Lock,
  ArrowUpDown,
  Calendar,
  Clock,
} from "lucide-react";
import { Pill } from "@/components/ui/pill";
import { cn } from "@/lib/utils";
import type { Citation } from "@/lib/content/schemas";
import type { Role } from "@/lib/roles";

export interface CitationRow {
  citation: Citation;
  citationCount: number;
}

export interface CitationsBrowserProps {
  rows: CitationRow[];
  typeOptions: string[];
  roleOptions: Role[];
}

type UrlFilter = "any" | "has-url" | "no-url" | "gated";
type UsageFilter = "any" | "in-use" | "unused";
type SortKey =
  | "id"
  | "recent"
  | "effective-newest"
  | "effective-oldest"
  | "most-cited";

function timeOf(value: string | undefined): number {
  if (!value) return 0;
  const t = new Date(value).getTime();
  return isNaN(t) ? 0 : t;
}

function formatDate(value: string | undefined): string {
  if (!value) return "Not set";
  const d = new Date(value);
  if (isNaN(d.getTime())) return value;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/**
 * CitationsBrowser - client-side filter, sort, and search over the citations
 * registry. Filters on type, role, URL presence, and usage. Sorts by ID,
 * recently added (lastVerified proxy), effective date, or citation count.
 * Static export safe.
 */
export function CitationsBrowser({
  rows,
  typeOptions,
  roleOptions,
}: CitationsBrowserProps) {
  const [query, setQuery] = React.useState("");
  const [typeFilter, setTypeFilter] = React.useState<string | "all">("all");
  const [roleFilter, setRoleFilter] = React.useState<Role | "all">("all");
  const [urlFilter, setUrlFilter] = React.useState<UrlFilter>("any");
  const [usageFilter, setUsageFilter] = React.useState<UsageFilter>("any");
  const [sortKey, setSortKey] = React.useState<SortKey>("id");

  const filtered = React.useMemo(() => {
    const q = query.trim().toUpperCase();
    const list = rows.filter((row) => {
      const cit = row.citation;
      if (typeFilter !== "all" && cit.type !== typeFilter) return false;
      if (roleFilter !== "all" && !cit.roles.includes(roleFilter)) return false;
      if (urlFilter === "has-url" && !cit.externalUrl) return false;
      if (urlFilter === "no-url" && (cit.externalUrl || cit.gatedSource))
        return false;
      if (urlFilter === "gated" && !cit.gatedSource) return false;
      if (usageFilter === "in-use" && row.citationCount === 0) return false;
      if (usageFilter === "unused" && row.citationCount > 0) return false;
      if (!q) return true;
      if (cit.title.toUpperCase().includes(q)) return true;
      if (cit.number.toUpperCase().includes(q)) return true;
      if (cit.aliases.some((a) => a.toUpperCase().includes(q))) return true;
      return false;
    });

    const sorted = [...list];
    switch (sortKey) {
      case "recent":
        sorted.sort(
          (a, b) =>
            timeOf(b.citation.lastVerified) - timeOf(a.citation.lastVerified)
        );
        break;
      case "effective-newest":
        sorted.sort(
          (a, b) =>
            timeOf(b.citation.effectiveDate) - timeOf(a.citation.effectiveDate)
        );
        break;
      case "effective-oldest":
        sorted.sort((a, b) => {
          const ta = timeOf(a.citation.effectiveDate);
          const tb = timeOf(b.citation.effectiveDate);
          // Push entries without an effective date to the bottom for the
          // ascending sort so missing data does not crowd the top.
          if (ta === 0 && tb === 0) return 0;
          if (ta === 0) return 1;
          if (tb === 0) return -1;
          return ta - tb;
        });
        break;
      case "most-cited":
        sorted.sort((a, b) => b.citationCount - a.citationCount);
        break;
      case "id":
      default:
        sorted.sort((a, b) => a.citation.id.localeCompare(b.citation.id));
    }
    return sorted;
  }, [
    rows,
    query,
    typeFilter,
    roleFilter,
    urlFilter,
    usageFilter,
    sortKey,
  ]);

  const totalCitations = rows.length;
  const visible = filtered.length;

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
        <label className="relative block">
          <span className="sr-only">Search citations</span>
          <Search
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[var(--color-muted-foreground)]"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search title, number, or alias"
            className="w-full rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface-2)] py-2 pl-9 pr-3 text-sm placeholder:text-[var(--color-muted-foreground)] focus:border-[var(--color-usmc-scarlet)] focus:outline-none"
          />
        </label>

        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--color-subtle-foreground)]">
            Type
          </span>
          <FilterChip
            label="All"
            active={typeFilter === "all"}
            onClick={() => setTypeFilter("all")}
          />
          {typeOptions.map((t) => (
            <FilterChip
              key={t}
              label={t}
              active={typeFilter === t}
              onClick={() => setTypeFilter(t)}
            />
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--color-subtle-foreground)]">
            Role
          </span>
          <FilterChip
            label="All"
            active={roleFilter === "all"}
            onClick={() => setRoleFilter("all")}
          />
          {roleOptions.map((r) => (
            <FilterChip
              key={r}
              label={r}
              active={roleFilter === r}
              onClick={() => setRoleFilter(r)}
            />
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--color-subtle-foreground)]">
            URL
          </span>
          <FilterChip
            label="Any"
            active={urlFilter === "any"}
            onClick={() => setUrlFilter("any")}
          />
          <FilterChip
            label="Has URL"
            active={urlFilter === "has-url"}
            onClick={() => setUrlFilter("has-url")}
          />
          <FilterChip
            label="No URL yet"
            active={urlFilter === "no-url"}
            onClick={() => setUrlFilter("no-url")}
          />
          <FilterChip
            label="Gated source"
            active={urlFilter === "gated"}
            onClick={() => setUrlFilter("gated")}
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--color-subtle-foreground)]">
            Usage
          </span>
          <FilterChip
            label="Any"
            active={usageFilter === "any"}
            onClick={() => setUsageFilter("any")}
          />
          <FilterChip
            label="In use"
            active={usageFilter === "in-use"}
            onClick={() => setUsageFilter("in-use")}
          />
          <FilterChip
            label="Unused"
            active={usageFilter === "unused"}
            onClick={() => setUsageFilter("unused")}
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 border-t border-[var(--color-border)] pt-3">
          <span className="mr-1 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--color-subtle-foreground)]">
            <ArrowUpDown className="size-3" aria-hidden="true" />
            Sort
          </span>
          <FilterChip
            label="Default"
            active={sortKey === "id"}
            onClick={() => setSortKey("id")}
          />
          <FilterChip
            label="Recently added"
            active={sortKey === "recent"}
            onClick={() => setSortKey("recent")}
            icon={<Clock className="size-3" aria-hidden="true" />}
          />
          <FilterChip
            label="Effective: newest"
            active={sortKey === "effective-newest"}
            onClick={() => setSortKey("effective-newest")}
            icon={<Calendar className="size-3" aria-hidden="true" />}
          />
          <FilterChip
            label="Effective: oldest"
            active={sortKey === "effective-oldest"}
            onClick={() => setSortKey("effective-oldest")}
            icon={<Calendar className="size-3" aria-hidden="true" />}
          />
          <FilterChip
            label="Most cited"
            active={sortKey === "most-cited"}
            onClick={() => setSortKey("most-cited")}
          />
        </div>
      </div>

      <p className="text-xs text-[var(--color-muted-foreground)]">
        Showing {visible} of {totalCitations} citations.
        {usageFilter === "unused" && visible > 0 && (
          <span className="ml-2 text-[var(--color-status-aging)]">
            These citations sit in the registry but no portal page links to them
            yet.
          </span>
        )}
      </p>

      <ul className="space-y-2">
        {filtered.map(({ citation, citationCount }) => {
          const showEffective =
            sortKey === "effective-newest" || sortKey === "effective-oldest";
          const showRecent = sortKey === "recent";
          return (
            <li key={citation.id}>
              <Link
                href={`/citations/${citation.id}`}
                className="group block rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 transition-colors hover:border-[var(--color-usmc-scarlet)]"
              >
                <div className="flex flex-wrap items-start gap-3">
                  <Pill variant="accent" size="xs">
                    {citation.type}
                  </Pill>
                  <span className="font-mono text-xs font-semibold text-[var(--color-muted-foreground)]">
                    {citation.number}
                  </span>
                  <span className="flex-1 text-sm font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-usmc-scarlet)]">
                    {citation.title}
                  </span>
                  <ChevronRight
                    className="size-4 shrink-0 text-[var(--color-muted-foreground)] transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--color-usmc-scarlet)]"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[var(--color-muted-foreground)]">
                  <span>{citation.publisher}</span>
                  <span
                    className={
                      citationCount === 0
                        ? "text-[var(--color-status-aging)]"
                        : ""
                    }
                  >
                    {citationCount === 0
                      ? "Unused"
                      : `Cited by ${citationCount} ${citationCount === 1 ? "page" : "pages"}`}
                  </span>
                  {showEffective && (
                    <span className="inline-flex items-center gap-1 font-mono">
                      <Calendar className="size-3" aria-hidden="true" />
                      Effective {formatDate(citation.effectiveDate)}
                    </span>
                  )}
                  {showRecent && (
                    <span className="inline-flex items-center gap-1 font-mono">
                      <Clock className="size-3" aria-hidden="true" />
                      Updated {formatDate(citation.lastVerified)}
                    </span>
                  )}
                  {citation.externalUrl ? (
                    <span className="inline-flex items-center gap-1 text-[var(--color-status-info)]">
                      <ExternalLink className="size-3" aria-hidden="true" />
                      External URL
                    </span>
                  ) : citation.gatedSource ? (
                    <span className="inline-flex items-center gap-1 text-[var(--color-status-info)]">
                      <Lock className="size-3" aria-hidden="true" />
                      Gated source
                    </span>
                  ) : (
                    <span className="text-[var(--color-status-aging)]">
                      No external URL yet
                    </span>
                  )}
                </div>
              </Link>
            </li>
          );
        })}
        {filtered.length === 0 && (
          <li className="rounded-[var(--radius-md)] border border-dashed border-[var(--color-border)] p-6 text-center text-sm text-[var(--color-muted-foreground)]">
            No citations match the current filters.
          </li>
        )}
      </ul>
    </div>
  );
}

interface FilterChipProps {
  label: string;
  active: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
}

function FilterChip({ label, active, onClick, icon }: FilterChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex h-7 items-center gap-1.5 rounded-[var(--radius-chip)] border px-2.5 text-[11px] font-semibold uppercase tracking-wider transition-colors",
        active
          ? "border-[var(--color-usmc-scarlet)] bg-[color-mix(in_srgb,var(--color-usmc-scarlet)_12%,transparent)] text-[var(--color-usmc-scarlet)]"
          : "border-[var(--color-border-strong)] bg-transparent text-[var(--color-muted-foreground)] hover:border-[var(--color-usmc-scarlet)] hover:text-[var(--color-foreground)]"
      )}
    >
      {icon}
      {label}
    </button>
  );
}
