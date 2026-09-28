"use client";

import * as React from "react";
import Link from "next/link";
import { Search, ChevronRight } from "lucide-react";
import searchIndexData from "@/generated/search-index.json";
import { useRoleStore } from "@/lib/store/role-store";
import { useMounted } from "@/hooks/use-mounted";
import { searchEntries, type IndexEntry } from "@/lib/search/score";

const INDEX: IndexEntry[] = searchIndexData as IndexEntry[];

function subscribeToNothing(): () => void {
  return () => {};
}

/** Reads ?q= once on the client. The static build renders an empty query. */
function getUrlQuery(): string {
  return new URLSearchParams(window.location.search).get("q") ?? "";
}

function getServerUrlQuery(): string {
  return "";
}

/**
 * Mirrors the query into ?q= so a result list is linkable and the command
 * palette hands off with /search?q=. replaceState keeps typing out of the
 * back-button history.
 */
function writeUrlQuery(q: string) {
  const url = new URL(window.location.href);
  if (q) url.searchParams.set("q", q);
  else url.searchParams.delete("q");
  window.history.replaceState(window.history.state, "", url);
}

export function ClientSearch() {
  const urlQuery = React.useSyncExternalStore(
    subscribeToNothing,
    getUrlQuery,
    getServerUrlQuery
  );
  // null until the reader types, so an incoming ?q= seeds the box.
  const [typed, setTyped] = React.useState<string | null>(null);
  const query = typed ?? urlQuery;
  const setQuery = React.useCallback((q: string) => {
    setTyped(q);
    writeUrlQuery(q.trim());
  }, []);
  const mounted = useMounted();
  const role = useRoleStore((s) => s.role);
  const activeRole = mounted ? role : null;
  const results = React.useMemo(
    () => searchEntries(INDEX, query, activeRole),
    [query, activeRole]
  );

  return (
    <div className="mx-auto max-w-3xl">
      <div className="flex h-12 items-center gap-3 rounded-[var(--radius-button)] border border-[var(--color-border)] bg-[var(--color-muted)]/40 px-3">
        <Search className="size-4 opacity-70" aria-hidden="true" />
        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search BAH, NAVMC 10922, IDT, TRICARE, etc."
          className="flex-1 bg-transparent outline-none"
          aria-label="Search query"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="text-xs text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]"
          >
            Clear
          </button>
        )}
      </div>

      <div aria-live="polite" role="status">
        {query.trim().length > 0 && query.trim().length < 2 && (
          <p className="mt-4 text-sm text-[var(--color-muted-foreground)]">
            Type at least 2 characters to search.
          </p>
        )}

        {query.trim().length >= 2 && results.length === 0 && (
          <p className="mt-4 text-sm text-[var(--color-muted-foreground)]">
            No results found for &quot;{query}&quot;. Try different keywords or
            check spelling.
          </p>
        )}

        {results.length > 0 && (
          <p className="mt-4 text-sm text-[var(--color-muted-foreground)]">
            {results.length} {results.length === 1 ? "result" : "results"} for
            &quot;{query}&quot;
          </p>
        )}
      </div>

      <ul className="mt-4 space-y-3">
        {results.map((r, i) => (
          <li key={`${r.url}-${i}`}>
            <Link
              href={r.url}
              className="group flex items-start justify-between gap-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-card)] p-4 transition-colors hover:border-[var(--color-primary)] hover:bg-[var(--color-muted)]/40"
            >
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="rounded-sm bg-[var(--color-primary)]/10 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--color-primary)]">
                    {r.category}
                  </span>
                  {r.badges.map((b, bi) => (
                    <span
                      key={bi}
                      className="rounded-sm bg-[var(--color-muted)] px-1.5 py-0.5 text-[10px] font-semibold text-[var(--color-muted-foreground)]"
                    >
                      {b}
                    </span>
                  ))}
                </div>
                <p className="mt-1.5 font-semibold">{r.title}</p>
                <p className="mt-1 text-sm text-[var(--color-muted-foreground)]">
                  {r.summary}
                </p>
                <p className="mt-1 font-mono text-[10px] text-[var(--color-muted-foreground)]">
                  {r.url}
                </p>
              </div>
              <ChevronRight
                className="mt-1 size-4 shrink-0 opacity-40 transition-opacity group-hover:opacity-100"
                aria-hidden="true"
              />
            </Link>
          </li>
        ))}
      </ul>

      {!query && (
        <section className="mt-8 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-muted)]/40 p-4">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-muted-foreground)]">
            Try these searches
          </p>
          <ul className="mt-2 grid gap-1.5 text-sm sm:grid-cols-2">
            {[
              "BAH",
              "NAVMC 10922",
              "IDT pay",
              "TRICARE",
              "MCRAMM",
              "promotion",
              "mobilization",
              "0111-PERA-1001",
              "retirement",
              "GI Bill",
            ].map((q) => (
              <li key={q}>
                <button
                  type="button"
                  onClick={() => setQuery(q)}
                  className="text-[var(--color-primary)] hover:underline"
                >
                  {q}
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
