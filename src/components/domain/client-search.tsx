"use client";

import * as React from "react";
import Link from "next/link";
import { Search, ChevronRight } from "lucide-react";
import adminData from "@/generated/admin.json";
import marinesData from "@/generated/marines.json";
import commanderData from "@/generated/commander.json";
import policiesData from "@/generated/policies.json";
import situationsData from "@/generated/situations.json";

interface BaseEntry {
  title: string;
  slug: string;
  summary: string;
  topic?: string;
  unitType?: string;
  function?: string;
  trEventCode?: string;
  sourcePolicy?: string;
  references?: string[];
  mosPerforming?: string[];
  skillLevel?: number;
  roles?: string[];
}

interface SearchResult {
  title: string;
  url: string;
  summary: string;
  category: string;
  badges: string[];
  score: number;
}

const ADMIN: BaseEntry[] = adminData as BaseEntry[];
const MARINES: BaseEntry[] = marinesData as BaseEntry[];
const COMMANDER: BaseEntry[] = commanderData as BaseEntry[];
const POLICIES: BaseEntry[] = policiesData as BaseEntry[];
const SITUATIONS: BaseEntry[] = situationsData as BaseEntry[];

function buildAdminUrl(entry: BaseEntry): string {
  return `/admin/${entry.unitType}/${entry.topic}/${entry.slug}`;
}

function buildMarinesUrl(entry: BaseEntry): string {
  // Leaves under parent groups have topic equal to slug. The single-segment
  // route /marines/[slug] handles them. Avoid generating duplicate-segment
  // URLs like /marines/birth-and-adoption/birth-and-adoption.
  if (!entry.topic || entry.topic === entry.slug) {
    return `/marines/${entry.slug}`;
  }
  return `/marines/${entry.topic}/${entry.slug}`;
}

function buildCommanderUrl(entry: BaseEntry): string {
  return `/commander/${entry.topic}/${entry.slug}`;
}

function scoreEntry(entry: BaseEntry, q: string): number {
  const query = q.toLowerCase().trim();
  if (!query) return 0;
  const terms = query.split(/\s+/).filter(Boolean);

  let score = 0;
  const title = (entry.title || "").toLowerCase();
  const summary = (entry.summary || "").toLowerCase();
  const slug = (entry.slug || "").toLowerCase();
  const topic = (entry.topic || "").toLowerCase();
  const tr = (entry.trEventCode || "").toLowerCase();
  const policy = (entry.sourcePolicy || "").toLowerCase();
  const refs = (entry.references || []).join(" ").toLowerCase();
  const mos = (entry.mosPerforming || []).join(" ").toLowerCase();

  for (const term of terms) {
    if (title.includes(term)) score += 100;
    if (slug.includes(term)) score += 80;
    if (topic.includes(term)) score += 50;
    if (summary.includes(term)) score += 40;
    if (tr.includes(term)) score += 60;
    if (policy.includes(term)) score += 50;
    if (refs.includes(term)) score += 30;
    if (mos.includes(term)) score += 30;
  }

  // Boost exact title matches
  if (title === query) score += 200;
  if (slug === query) score += 200;

  return score;
}

function searchAll(query: string): SearchResult[] {
  if (!query || query.trim().length < 2) return [];

  const results: SearchResult[] = [];

  for (const entry of ADMIN) {
    const score = scoreEntry(entry, query);
    if (score === 0) continue;
    const badges: string[] = [];
    if (entry.unitType) badges.push(entry.unitType.toUpperCase());
    if (entry.function) badges.push(entry.function);
    if (entry.skillLevel) badges.push(`L${entry.skillLevel}`);
    if (entry.trEventCode) badges.push(entry.trEventCode);
    results.push({
      title: entry.title,
      url: buildAdminUrl(entry),
      summary: entry.summary,
      category: "Admin",
      badges,
      score,
    });
  }

  for (const entry of MARINES) {
    const score = scoreEntry(entry, query);
    if (score === 0) continue;
    results.push({
      title: entry.title,
      url: buildMarinesUrl(entry),
      summary: entry.summary,
      category: "Marines",
      badges: entry.topic ? [entry.topic] : [],
      score,
    });
  }

  for (const entry of COMMANDER) {
    const score = scoreEntry(entry, query);
    if (score === 0) continue;
    results.push({
      title: entry.title,
      url: buildCommanderUrl(entry),
      summary: entry.summary,
      category: "Commander",
      badges: entry.topic ? [entry.topic] : [],
      score,
    });
  }

  for (const entry of POLICIES) {
    const score = scoreEntry(entry, query);
    if (score === 0) continue;
    results.push({
      title: entry.title,
      url: `/policy/${entry.slug}`,
      summary: entry.summary,
      category: "Policy",
      badges: [],
      score,
    });
  }

  for (const entry of SITUATIONS) {
    const score = scoreEntry(entry, query);
    if (score === 0) continue;
    results.push({
      title: entry.title,
      url: `/situations/${entry.slug}`,
      summary: entry.summary,
      category: "Situation",
      badges: [],
      score,
    });
  }

  results.sort((a, b) => b.score - a.score);
  return results.slice(0, 50);
}

export function ClientSearch() {
  const [query, setQuery] = React.useState("");
  const results = React.useMemo(() => searchAll(query), [query]);

  const totalContent =
    ADMIN.length + MARINES.length + COMMANDER.length + POLICIES.length + SITUATIONS.length;

  return (
    <div className="mx-auto max-w-3xl">
      <h1
        className="text-4xl font-bold tracking-tight"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Search
      </h1>
      <p className="mt-1 text-[var(--color-muted-foreground)]">
        Searches across {totalContent} content pages by title, topic, T&R event
        code, source policy, and references.
      </p>

      <div className="mt-6 flex h-12 items-center gap-3 rounded-[var(--radius-button)] border border-[var(--color-border)] bg-[var(--color-muted)]/40 px-3">
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

      <ul className="mt-4 space-y-3">
        {results.map((r, i) => (
          <li key={`${r.url}-${i}`}>
            <Link
              href={r.url}
              className="group flex items-start justify-between gap-3 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-card)] p-4 transition-colors hover:border-[var(--color-primary)] hover:bg-[var(--color-muted)]/40"
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
        <section className="mt-8 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-muted)]/40 p-4">
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
