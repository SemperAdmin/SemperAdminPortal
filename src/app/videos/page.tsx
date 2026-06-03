"use client";

import { useState, useMemo, useCallback } from "react";
import { Play, Clock, Search, X } from "lucide-react";
import { Pill } from "@/components/ui/pill";
import { RoleChip } from "@/components/domain/role-chip";
import { LastVerified } from "@/components/domain/last-verified";
import type { Role } from "@/lib/roles";

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
      className="group relative flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface-1)] transition-[transform,box-shadow,border-color] duration-[120ms] ease-out motion-safe:hover:-translate-y-0.5 hover:shadow-lg hover:border-[var(--color-usmc-scarlet)]/40 hover:[border-left-color:var(--color-usmc-scarlet)] [border-left:3px_solid_transparent]"
    >

      {/* Ambient bloom on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-[var(--radius-card)] opacity-0 transition-opacity duration-[180ms] group-hover:opacity-100 bg-[radial-gradient(ellipse_at_50%_0%,color-mix(in_srgb,var(--color-usmc-scarlet)_8%,transparent)_0%,transparent_70%)]" />

      {/* Thumbnail zone */}
      <div className="relative flex h-24 shrink-0 items-center justify-center bg-[var(--color-surface-sunken)] overflow-hidden">
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
          <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(var(--color-foreground)_1px,transparent_1px),linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)] [background-size:24px_24px]" />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface-sunken)]/80 via-transparent to-transparent" />

        {/* Play button */}
        <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-usmc-scarlet)] shadow-[0_2px_12px_color-mix(in_srgb,var(--color-usmc-scarlet)_45%,transparent)] transition-[transform,background] duration-[120ms] ease-out motion-safe:group-hover:scale-110 group-hover:bg-[color-mix(in_srgb,var(--color-usmc-scarlet)_85%,#000)]">
          <Play className="size-4 fill-white text-white ml-0.5" />
        </div>

        {/* Duration — bottom left */}
        <Pill
          variant="neutral"
          size="xs"
          className="absolute bottom-2 left-2.5 font-mono tabular-nums"
        >
          <Clock className="size-3" aria-hidden="true" />
          {fmt(v.durationSeconds)}
        </Pill>

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
          <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-brass-700)] dark:text-[var(--color-brass-300)] truncate">
            {v.source.title}
          </p>
        )}

        {/* Title — plain text, not a link */}
        <p className="text-[14px] font-bold leading-snug text-[var(--color-foreground)]">
          {v.title}
        </p>

        {/* Role chips */}
        <div className="flex flex-wrap gap-1">
          {v.roles.map((r) => <RoleChip key={r} role={r} size="sm" />)}
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
  const thumbMap = require("@/generated/thumbnails.json") as Record<string, string>;

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const allItems = rawItems.map((v) => ({
    ...v,
    posterUrl: thumbMap[v.slug] ? `${basePath}${thumbMap[v.slug]}` : undefined,
  }));
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allItems;
    return allItems.filter((v) =>
      v.title.toLowerCase().includes(q) ||
      v.source?.title?.toLowerCase().includes(q)
    );
  }, [allItems, query]);

  const clearQuery = useCallback(() => setQuery(""), []);

  return (
    <div className="flex flex-col gap-0">
      <header className="mb-4 shrink-0">
        <h1 className="text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          Videos
        </h1>
        <p className="text-[var(--color-muted-foreground)]">
          Walkthroughs with chapters and transcripts. Click any title for the full player.
        </p>
      </header>

      {/* Search bar */}
      <div className="relative mb-4 shrink-0">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 size-4 text-[var(--color-muted-foreground)]"
          aria-hidden="true"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search videos…"
          aria-label="Search videos by title or series"
          className="w-full rounded-[var(--radius-button)] border border-[var(--color-border)] bg-[var(--color-surface-1)] py-2.5 pl-9 pr-9 text-[14px] text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)] focus:border-[var(--color-usmc-scarlet)] focus:outline-none focus:ring-1 focus:ring-[var(--color-usmc-scarlet)]"
        />
        {query && (
          <button
            onClick={clearQuery}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]"
          >
            <X className="size-4" />
          </button>
        )}
      </div>

      {/* Result count */}
      <p className="mb-3 shrink-0 text-[12px] text-[var(--color-muted-foreground)] tabular-nums">
        {filtered.length === allItems.length
          ? `${allItems.length} videos`
          : `${filtered.length} of ${allItems.length} videos`}
      </p>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-2 py-16 text-[var(--color-muted-foreground)]">
          <p className="text-[15px] font-semibold">No videos match &ldquo;{query}&rdquo;</p>
          <button onClick={clearQuery} className="text-[13px] text-[var(--color-primary)] underline underline-offset-2">
            Clear search
          </button>
        </div>
      ) : (
        <VideoGrid items={filtered} />
      )}
    </div>
  );
}
