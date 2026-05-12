"use client";

import * as React from "react";
import Link from "next/link";
import { Search, ChevronRight, ExternalLink } from "lucide-react";
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

type UrlFilter = "any" | "has-url" | "no-url";

/**
 * CitationsBrowser - client-side filter and search over the citations
 * registry. Filters on type, role, and URL presence. Searches title,
 * number, and aliases. Static export safe.
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

  const filtered = React.useMemo(() => {
    const q = query.trim().toUpperCase();
    return rows.filter((row) => {
      const cit = row.citation;
      if (typeFilter !== "all" && cit.type !== typeFilter) return false;
      if (roleFilter !== "all" && !cit.roles.includes(roleFilter)) return false;
      if (urlFilter === "has-url" && !cit.externalUrl) return false;
      if (urlFilter === "no-url" && cit.externalUrl) return false;
      if (!q) return true;
      if (cit.title.toUpperCase().includes(q)) return true;
      if (cit.number.toUpperCase().includes(q)) return true;
      if (cit.aliases.some((a) => a.toUpperCase().includes(q))) return true;
      return false;
    });
  }, [rows, query, typeFilter, roleFilter, urlFilter]);

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
        </div>
      </div>

      <p className="text-xs text-[var(--color-muted-foreground)]">
        Showing {visible} of {totalCitations} citations.
      </p>

      <ul className="space-y-2">
        {filtered.map(({ citation, citationCount }) => (
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
                <span>
                  Cited by {citationCount}{" "}
                  {citationCount === 1 ? "page" : "pages"}
                </span>
                {citation.externalUrl ? (
                  <span className="inline-flex items-center gap-1 text-[var(--color-status-info)]">
                    <ExternalLink className="size-3" aria-hidden="true" />
                    External URL
                  </span>
                ) : (
                  <span className="text-[var(--color-status-aging)]">
                    No external URL yet
                  </span>
                )}
              </div>
            </Link>
          </li>
        ))}
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
}

function FilterChip({ label, active, onClick }: FilterChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex h-7 items-center rounded-[var(--radius-chip)] border px-2.5 text-[11px] font-semibold uppercase tracking-wider transition-colors",
        active
          ? "border-[var(--color-usmc-scarlet)] bg-[color-mix(in_srgb,var(--color-usmc-scarlet)_12%,transparent)] text-[var(--color-usmc-scarlet)]"
          : "border-[var(--color-border-strong)] bg-transparent text-[var(--color-muted-foreground)] hover:border-[var(--color-usmc-scarlet)] hover:text-[var(--color-foreground)]"
      )}
    >
      {label}
    </button>
  );
}
