"use client";

import { useState, useMemo, useCallback } from "react";
import { Play, Clock, Search, X } from "lucide-react";
import { Pill } from "@/components/ui/pill";
import { RoleChip } from "@/components/domain/role-chip";
import { LastVerified } from "@/components/domain/last-verified";
import { FilterBar, type FilterChip } from "@/components/domain/filter-bar";
import { classifyFreshness, type FreshnessStatus } from "@/lib/verification";
import type { Role } from "@/lib/roles";

const ALL = "all";

type SortId = "series" | "title" | "newest" | "oldest";

const SORT_OPTIONS: { id: SortId; label: string }[] = [
  { id: "series", label: "Series, then title" },
  { id: "title", label: "Title A to Z" },
  { id: "newest", label: "Recently verified" },
  { id: "oldest", label: "Oldest verified" },
];

const FRESHNESS_LABEL: Record<FreshnessStatus, string> = {
  fresh: "Fresh",
  aging: "Aging",
  stale: "Stale",
};

interface VideoData {
  slug: string;
  title: string;
  summary: string;
  roles: Role[];
  durationSeconds: number;
  lastVerified: string;
  videoUrl?: string;
  youtubeUrl?: string;
  mceleUrl?: string;
  posterUrl?: string;
  source: { title: string; publisher?: string; url?: string };
}

function resolveMceleUrl(v: VideoData): string | undefined {
  if (v.mceleUrl) return v.mceleUrl;
  if (v.videoUrl && v.videoUrl.includes("mcele")) return v.videoUrl;
  return undefined;
}

function fmt(s: number): string {
  if (!s || isNaN(s)) return "--:--";
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${r.toString().padStart(2, "0")}`;
}

function VideoCard({ v }: { v: VideoData }) {
  const mceleUrl = resolveMceleUrl(v);

  // Only render cards with MCeLE links
  if (!mceleUrl) return null;

  return (
    <a
      href={mceleUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] transition-[transform,box-shadow,border-color] duration-[120ms] ease-out [border-left:3px_solid_transparent] hover:border-[var(--color-usmc-scarlet)]/40 hover:[border-left-color:var(--color-usmc-scarlet)] hover:shadow-lg motion-safe:hover:-translate-y-0.5"
    >
      {/* Ambient bloom on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-[var(--radius-md)] bg-[radial-gradient(ellipse_at_50%_0%,color-mix(in_srgb,var(--color-usmc-scarlet)_8%,transparent)_0%,transparent_70%)] opacity-0 transition-opacity duration-[180ms] group-hover:opacity-100" />

      {/* Thumbnail zone */}
      <div className="relative flex h-24 shrink-0 items-center justify-center overflow-hidden bg-[var(--color-bg-sunken)]">
        {v.posterUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={v.posterUrl}
            alt=""
            width={400}
            height={96}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />
        )}

        {!v.posterUrl && (
          <div className="absolute inset-0 bg-[linear-gradient(var(--color-foreground)_1px,transparent_1px),linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04]" />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-sunken)]/80 via-transparent to-transparent" />

        {/* Play button */}
        <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-usmc-scarlet)] shadow-[0_2px_12px_color-mix(in_srgb,var(--color-usmc-scarlet)_45%,transparent)] transition-[transform,background] duration-[120ms] ease-out group-hover:bg-[var(--color-usmc-scarlet-700)] motion-safe:group-hover:scale-110">
          <Play className="ml-0.5 size-4 fill-white text-white" />
        </div>

        {/* Duration — bottom left. Hidden when the catalog has no runtime,
            which is 370 of 375 videos today. A row of "--:--" badges reads
            as broken rather than as missing data. */}
        {v.durationSeconds > 0 && (
          <Pill
            variant="neutral"
            size="xs"
            className="absolute bottom-2 left-2.5 font-mono tabular-nums"
          >
            <Clock className="size-3" aria-hidden="true" />
            {fmt(v.durationSeconds)}
          </Pill>
        )}

        {/* Verified — top right */}
        <LastVerified
          date={v.lastVerified}
          className="absolute top-2 right-2.5 text-[11px]"
        />
      </div>

      {/* Body */}
      <div className="flex flex-col gap-2 px-4 pt-3 pb-0">
        {/* Series label */}
        {v.source?.title && (
          <p className="truncate text-[10px] font-bold tracking-widest text-[var(--color-brass-700)] uppercase dark:text-[var(--color-brass-300)]">
            {v.source.title}
          </p>
        )}

        {/* Title — plain text, not a link */}
        <p className="text-[14px] leading-snug font-bold text-[var(--color-foreground)]">
          {v.title}
        </p>

        {/* Role chips */}
        <div className="flex flex-wrap gap-1">
          {v.roles.map((r) => (
            <RoleChip key={r} role={r} size="sm" />
          ))}
        </div>
      </div>
    </a>
  );
}

function VideoGrid({ items }: { items: VideoData[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((v) => (
        <VideoCard key={v.slug} v={v} />
      ))}
    </div>
  );
}

export default function VideosIndex() {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const rawItems = require("@/generated/videos.json") as VideoData[];
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const thumbMap = require("@/generated/thumbnails.json") as Record<
    string,
    string
  >;

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const allItems = rawItems.map((v) => ({
    ...v,
    posterUrl: thumbMap[v.slug] ? `${basePath}${thumbMap[v.slug]}` : undefined,
  }));
  const [query, setQuery] = useState("");
  const [series, setSeries] = useState<string>(ALL);
  const [freshness, setFreshness] = useState<string>(ALL);
  const [sortBy, setSortBy] = useState<SortId>("series");

  // One reference date for the whole render. Calling new Date() inside a
  // sort comparator would let the clock move mid-sort.
  const now = useMemo(() => new Date(), []);

  const withStatus = useMemo(
    () =>
      allItems.map((v) => ({
        ...v,
        status: classifyFreshness(v.lastVerified, now),
      })),
    [allItems, now]
  );

  // Series options carry counts against the freshness and search filters, so
  // the number next to a series is what selecting it actually returns.
  const searchAndFreshness = useMemo(() => {
    const q = query.trim().toLowerCase();
    return withStatus.filter((v) => {
      if (freshness !== ALL && v.status !== freshness) return false;
      if (!q) return true;
      return (
        v.title.toLowerCase().includes(q) ||
        v.summary?.toLowerCase().includes(q) ||
        v.source?.title?.toLowerCase().includes(q)
      );
    });
  }, [withStatus, query, freshness]);

  const seriesOptions = useMemo(() => {
    const counts = new Map<string, number>();
    for (const v of searchAndFreshness) {
      const name = v.source?.title || "Uncategorized";
      counts.set(name, (counts.get(name) ?? 0) + 1);
    }
    return [...counts.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  }, [searchAndFreshness]);

  // Freshness counts ignore the freshness filter itself, so every chip keeps
  // showing what it would return rather than collapsing to zero once one is on.
  const freshnessChips = useMemo<FilterChip[]>(() => {
    const q = query.trim().toLowerCase();
    const pool = withStatus.filter((v) => {
      if (series !== ALL && (v.source?.title || "Uncategorized") !== series)
        return false;
      if (!q) return true;
      return (
        v.title.toLowerCase().includes(q) ||
        v.summary?.toLowerCase().includes(q) ||
        v.source?.title?.toLowerCase().includes(q)
      );
    });
    const counts: Record<FreshnessStatus, number> = {
      fresh: 0,
      aging: 0,
      stale: 0,
    };
    for (const v of pool) counts[v.status]++;
    return [
      { id: ALL, label: "All", count: pool.length },
      ...(["fresh", "aging", "stale"] as FreshnessStatus[])
        .filter((k) => counts[k] > 0)
        .map((k) => ({ id: k, label: FRESHNESS_LABEL[k], count: counts[k] })),
    ];
  }, [withStatus, query, series]);

  const filtered = useMemo(() => {
    const rows = searchAndFreshness.filter(
      (v) => series === ALL || (v.source?.title || "Uncategorized") === series
    );
    const byTitle = (a: VideoData, b: VideoData) =>
      a.title.localeCompare(b.title);
    const byDate = (a: VideoData, b: VideoData) =>
      Date.parse(a.lastVerified) - Date.parse(b.lastVerified);
    const sorted = [...rows];
    if (sortBy === "title") sorted.sort(byTitle);
    else if (sortBy === "newest")
      sorted.sort((a, b) => byDate(b, a) || byTitle(a, b));
    else if (sortBy === "oldest")
      sorted.sort((a, b) => byDate(a, b) || byTitle(a, b));
    else
      sorted.sort(
        (a, b) =>
          (a.source?.title || "").localeCompare(b.source?.title || "") ||
          byTitle(a, b)
      );
    return sorted;
  }, [searchAndFreshness, series, sortBy]);

  const clearQuery = useCallback(() => setQuery(""), []);
  const filtersActive = query !== "" || series !== ALL || freshness !== ALL;
  const clearAll = useCallback(() => {
    setQuery("");
    setSeries(ALL);
    setFreshness(ALL);
  }, []);

  return (
    <div className="flex flex-col gap-0">
      <header className="mb-4 shrink-0">
        <h1
          className="text-4xl font-bold tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Videos
        </h1>
        <p className="text-[var(--color-muted-foreground)]">
          Walkthroughs with chapters and transcripts. Click any title for the
          full player.
        </p>
      </header>

      {/* Search bar */}
      <div className="relative mb-4 shrink-0">
        <Search
          className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-[var(--color-muted-foreground)]"
          aria-hidden="true"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search videos…"
          aria-label="Search videos by title or series"
          className="w-full rounded-[var(--radius-button)] border border-[var(--color-border)] bg-[var(--color-surface)] py-2.5 pr-9 pl-9 text-[14px] text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)] focus:border-[var(--color-usmc-scarlet)] focus:ring-1 focus:ring-[var(--color-usmc-scarlet)] focus:outline-none"
        />
        {query && (
          <button
            onClick={clearQuery}
            aria-label="Clear search"
            className="absolute top-1/2 right-3 -translate-y-1/2 text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]"
          >
            <X className="size-4" />
          </button>
        )}
      </div>

      {/* Series and sort */}
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <label className="flex items-center gap-2">
          <span className="text-[10px] font-bold tracking-[0.1em] text-[var(--color-subtle-foreground)] uppercase">
            Series
          </span>
          <select
            value={series}
            onChange={(e) => setSeries(e.target.value)}
            className="h-8 max-w-[16rem] rounded-[var(--radius-sm)] border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-2 text-[13px] font-medium text-[var(--color-foreground)] focus:border-[var(--color-usmc-scarlet)] focus:ring-1 focus:ring-[var(--color-usmc-scarlet)] focus:outline-none"
          >
            <option value={ALL}>
              All series ({searchAndFreshness.length})
            </option>
            {seriesOptions.map(([name, count]) => (
              <option key={name} value={name}>
                {name} ({count})
              </option>
            ))}
          </select>
        </label>

        <label className="flex items-center gap-2">
          <span className="text-[10px] font-bold tracking-[0.1em] text-[var(--color-subtle-foreground)] uppercase">
            Sort
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortId)}
            className="h-8 rounded-[var(--radius-sm)] border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-2 text-[13px] font-medium text-[var(--color-foreground)] focus:border-[var(--color-usmc-scarlet)] focus:ring-1 focus:ring-[var(--color-usmc-scarlet)] focus:outline-none"
          >
            {SORT_OPTIONS.map((o) => (
              <option key={o.id} value={o.id}>
                {o.label}
              </option>
            ))}
          </select>
        </label>

        {filtersActive && (
          <button
            type="button"
            onClick={clearAll}
            className="ml-auto text-[12px] font-semibold text-[var(--color-muted-foreground)] underline underline-offset-2 hover:text-[var(--color-foreground)]"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Freshness */}
      <FilterBar
        label="Verified"
        chips={freshnessChips}
        activeId={freshness}
        onChange={setFreshness}
        className="mb-3"
      />

      {/* Result count */}
      <p className="mb-3 shrink-0 text-[12px] text-[var(--color-muted-foreground)] tabular-nums">
        {filtered.length === allItems.length
          ? `${allItems.length} videos`
          : `${filtered.length} of ${allItems.length} videos`}
      </p>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-2 py-16 text-[var(--color-muted-foreground)]">
          <p className="text-[15px] font-semibold">
            {query
              ? `No videos match \u201C${query}\u201D`
              : "No videos match these filters"}
          </p>
          <button
            onClick={clearAll}
            className="text-[13px] text-[var(--color-primary)] underline underline-offset-2"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <VideoGrid items={filtered} />
      )}
    </div>
  );
}
