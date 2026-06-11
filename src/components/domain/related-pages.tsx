import Link from "next/link";
import { Link2 } from "lucide-react";
import adminData from "@/generated/admin.json";
import marinesData from "@/generated/marines.json";
import commanderData from "@/generated/commander.json";

interface BaseEntry {
  title: string;
  slug: string;
  summary: string;
  topic?: string;
  unitType?: string;
  function?: string;
  trEventCode?: string;
  sourcePolicy?: string;
  sourceChapter?: string;
  references?: string[];
  mosPerforming?: string[];
  skillLevel?: number;
}

interface RelatedItem {
  title: string;
  url: string;
  category: string;
  reason: string;
  score: number;
}

const ADMIN: BaseEntry[] = adminData as BaseEntry[];
const MARINES: BaseEntry[] = marinesData as BaseEntry[];
const COMMANDER: BaseEntry[] = commanderData as BaseEntry[];

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

function calculateRelevance(
  current: BaseEntry,
  candidate: BaseEntry
): { score: number; reason: string } {
  let score = 0;
  const reasons: string[] = [];

  // Same topic - strong signal
  if (current.topic && candidate.topic === current.topic) {
    score += 50;
    reasons.push("same topic");
  }

  // Same unit type - moderate signal for admin pages
  if (current.unitType && candidate.unitType === current.unitType) {
    score += 20;
  }

  // Same MCAP function
  if (current.function && candidate.function === current.function) {
    score += 30;
    reasons.push("same function");
  }

  // Same source policy chapter
  if (
    current.sourcePolicy &&
    candidate.sourcePolicy === current.sourcePolicy
  ) {
    score += 40;
    if (
      current.sourceChapter &&
      candidate.sourceChapter === current.sourceChapter
    ) {
      score += 30;
      reasons.push(`${current.sourcePolicy} Ch ${current.sourceChapter}`);
    } else {
      reasons.push(current.sourcePolicy);
    }
  }

  // Shared T&R event code
  if (
    current.trEventCode &&
    candidate.trEventCode === current.trEventCode
  ) {
    score += 60;
    reasons.push("same T&R event");
  }

  // Shared references (count overlapping)
  if (current.references && candidate.references) {
    const currentRefs = new Set(current.references);
    let overlap = 0;
    for (const ref of candidate.references) {
      if (currentRefs.has(ref)) overlap += 1;
    }
    if (overlap > 0) {
      score += overlap * 15;
      if (overlap >= 2) reasons.push(`${overlap} shared references`);
    }
  }

  // Shared MOSs
  if (current.mosPerforming && candidate.mosPerforming) {
    const currentMos = new Set(current.mosPerforming);
    let overlap = 0;
    for (const mos of candidate.mosPerforming) {
      if (currentMos.has(mos)) overlap += 1;
    }
    if (overlap > 0) {
      score += overlap * 10;
    }
  }

  return {
    score,
    reason: reasons.length > 0 ? reasons.join(" - ") : "related content",
  };
}

function findRelatedAdmin(current: BaseEntry, exclude: string): RelatedItem[] {
  const candidates: RelatedItem[] = [];
  for (const entry of ADMIN) {
    if (entry.slug === exclude) continue;
    const { score, reason } = calculateRelevance(current, entry);
    if (score < 30) continue;
    candidates.push({
      title: entry.title,
      url: buildAdminUrl(entry),
      category: "Admin",
      reason,
      score,
    });
  }
  return candidates;
}

function findRelatedMarines(current: BaseEntry): RelatedItem[] {
  const candidates: RelatedItem[] = [];
  for (const entry of MARINES) {
    const { score, reason } = calculateRelevance(current, entry);
    if (score < 30) continue;
    candidates.push({
      title: entry.title,
      url: buildMarinesUrl(entry),
      category: "Marines",
      reason,
      score,
    });
  }
  return candidates;
}

function findRelatedCommander(current: BaseEntry): RelatedItem[] {
  const candidates: RelatedItem[] = [];
  for (const entry of COMMANDER) {
    const { score, reason } = calculateRelevance(current, entry);
    if (score < 30) continue;
    candidates.push({
      title: entry.title,
      url: buildCommanderUrl(entry),
      category: "Commander",
      reason,
      score,
    });
  }
  return candidates;
}

interface RelatedPagesProps {
  /** Current page slug to exclude from results */
  currentSlug: string;
  /** Frontmatter of current page */
  current: BaseEntry;
  /** Maximum results to show. Default 5. */
  limit?: number;
}

export function RelatedPages({
  currentSlug,
  current,
  limit = 5,
}: RelatedPagesProps) {
  const all: RelatedItem[] = [
    ...findRelatedAdmin(current, currentSlug),
    ...findRelatedMarines(current),
    ...findRelatedCommander(current),
  ];

  // Filter out self
  const filtered = all.filter((item) => !item.url.endsWith(`/${currentSlug}`));

  // Sort by score and limit
  filtered.sort((a, b) => b.score - a.score);
  const top = filtered.slice(0, limit);

  if (top.length === 0) return null;

  return (
    <section className="mt-8 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-card)] p-4">
      <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[var(--color-muted-foreground)]">
        <Link2 className="size-3" aria-hidden="true" />
        Related Pages
      </p>
      <ul className="mt-3 space-y-2">
        {top.map((item, i) => (
          <li key={`${item.url}-${i}`}>
            <Link
              href={item.url}
              className="flex items-start gap-3 rounded-[var(--radius-button)] px-2 py-1.5 transition-colors hover:bg-[var(--color-muted)]/40"
            >
              <span className="mt-0.5 rounded-sm bg-[var(--color-primary)]/10 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--color-primary)]">
                {item.category}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-[var(--color-foreground)] hover:text-[var(--color-primary)]">
                  {item.title}
                </p>
                <p className="text-xs text-[var(--color-muted-foreground)]">
                  {item.reason}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
