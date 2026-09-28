"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Breadcrumbs - v1.2.
 * Auto-derives a crumb trail from the current pathname.
 * Truncates the middle on deep routes so the head and tail stay readable.
 */
export interface BreadcrumbsProps {
  className?: string;
  /** Override pathname for testing. */
  pathnameOverride?: string;
  /** How many segments to keep before truncating the middle. Default 4. */
  maxSegments?: number;
}

const SEGMENT_LABEL_OVERRIDES: Record<string, string> = {
  "s1-g1": "S-1 / G-1",
  "i-and-i": "I&I",
  pac: "PAC",
  pft: "PFT",
  pcs: "PCS",
  les: "LES",
  bah: "BAH",
  bas: "BAS",
  navmc: "NAVMC",
  mco: "MCO",
  almar: "ALMAR",
  maradmin: "MARADMIN",
  dts: "DTS",
  gtcc: "GTCC",
  njp: "NJP",
  pme: "PME",
  fitrep: "FITREP",
  eas: "EAS",
  oconus: "OCONUS",
  conus: "CONUS",
  red: "RED-S",
  sgli: "SGLI",
  ompf: "OMPF",
  tap: "TAP",
};

/**
 * Acronyms that appear as one word inside a longer slug. Whole-segment
 * overrides above miss them, so "oconus-tour-extension-incentive" rendered
 * as "Oconus Tour Extension Incentive".
 */
const WORD_LABEL_OVERRIDES: Record<string, string> = {
  ...SEGMENT_LABEL_OVERRIDES,
  oconus: "OCONUS",
  perstempo: "PERSTEMPO",
  sbp: "SBP",
  srb: "SRB",
  upb: "UPB",
  dd: "DD",
  va: "VA",
  sgli: "SGLI",
  tricare: "TRICARE",
  deers: "DEERS",
  mol: "MOL",
  mctfs: "MCTFS",
  ipac: "IPAC",
  igmc: "IGMC",
  mcaat: "MCAAT",
  selres: "SELRES",
  smcr: "SMCR",
  irr: "IRR",
  tad: "TAD",
  tdy: "TDY",
  rr: "R&R",
  srr: "SR&R",
  ai: "AI",
  cgip: "CGIP",
  sapr: "SAPR",
  meo: "MEO",
};

/** Joining words stay lowercase unless they open the label. */
const MINOR_WORDS = new Set([
  "a",
  "an",
  "and",
  "as",
  "at",
  "by",
  "for",
  "from",
  "in",
  "of",
  "on",
  "or",
  "the",
  "to",
  "vs",
  "with",
]);

function humanize(segment: string): string {
  if (SEGMENT_LABEL_OVERRIDES[segment]) return SEGMENT_LABEL_OVERRIDES[segment];
  return segment
    .split("-")
    .map((part, i) => {
      const override = WORD_LABEL_OVERRIDES[part];
      if (override) return override;
      if (i > 0 && MINOR_WORDS.has(part)) return part;
      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join(" ");
}

/**
 * Detail templates stamp data-page-title on their article with the
 * frontmatter title. The current crumb reads it so the trail ends on
 * "Overseas Tour Extension Incentive Program (OTEIP)", not a humanized slug.
 * The static HTML carries the humanized slug. The title swaps in at
 * hydration, and the observer catches client-side route changes.
 */
function subscribeToPageTitle(callback: () => void): () => void {
  const root = document.getElementById("main") ?? document.body;
  const observer = new MutationObserver(callback);
  observer.observe(root, { childList: true, subtree: true });
  return () => observer.disconnect();
}

function getPageTitle(): string | null {
  return (
    document
      .querySelector<HTMLElement>("[data-page-title]")
      ?.getAttribute("data-page-title") ?? null
  );
}

function getServerPageTitle(): string | null {
  return null;
}

/**
 * The 404 page builds at /_not-found and serves at whatever URL missed. A
 * trail built from either path is wrong, and the two disagree, which threw
 * a hydration mismatch. not-found.tsx marks its main with data-not-found.
 * The server snapshot reads the DOM on the client too, so hydration sees
 * the same answer the build rendered.
 */
function getOnNotFoundPage(): boolean {
  return document.querySelector("[data-not-found]") !== null;
}

function getServerOnNotFoundPage(): boolean {
  return typeof document !== "undefined" && getOnNotFoundPage();
}

/**
 * Drop intermediate path segments that carry no real page. The crumb
 * disappears entirely so the trail reads cleanly.
 *
 * /inspections/igmc/<programNumber> has no index page. Only the leaf at
 * /inspections/igmc/<programNumber>/<slug> renders, so the program-number
 * crumb is hidden.
 *
 * /legal has no index page. The four legal documents live one level down.
 */
const HIDDEN_SEGMENT_PATTERNS: RegExp[] = [
  /^\/inspections\/igmc\/[^/]+$/,
  /^\/legal$/,
];

function isHidden(href: string): boolean {
  return HIDDEN_SEGMENT_PATTERNS.some((re) => re.test(href));
}

export function Breadcrumbs({
  className,
  pathnameOverride,
  maxSegments = 4,
}: BreadcrumbsProps) {
  const real = usePathname();
  const pageTitle = React.useSyncExternalStore(
    subscribeToPageTitle,
    getPageTitle,
    getServerPageTitle
  );
  const onNotFoundPage = React.useSyncExternalStore(
    subscribeToPageTitle,
    getOnNotFoundPage,
    getServerOnNotFoundPage
  );
  const pathname = pathnameOverride ?? real ?? "/";
  if (pathname === "/" || pathname === "") return null;
  if (onNotFoundPage || pathname.startsWith("/_not-found")) return null;

  const segments = pathname.split("/").filter(Boolean);
  const trail = segments
    .map((seg, i) => ({
      label: humanize(seg),
      href: "/" + segments.slice(0, i + 1).join("/"),
    }))
    .filter((c) => !isHidden(c.href));

  const leaf = trail[trail.length - 1];
  if (leaf && pageTitle) leaf.label = pageTitle;

  // Always render Home as first crumb. Last item is non-link "current".
  const crumbs = [{ label: "Home", href: "/" }, ...trail];

  // Truncate middle if exceeds maxSegments + 1 (Home + N).
  let visible: typeof crumbs;
  let truncated = false;
  if (crumbs.length > maxSegments + 1) {
    const head = crumbs[0];
    visible = head
      ? [head, ...crumbs.slice(crumbs.length - maxSegments)]
      : crumbs;
    truncated = head !== undefined;
  } else {
    visible = crumbs;
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "flex items-center gap-1.5 text-xs text-[var(--color-muted-foreground)]",
        className
      )}
    >
      <ol className="flex flex-wrap items-center gap-1.5">
        {visible.map((crumb, idx) => {
          // Truncation only removes middle crumbs, so the final visible crumb
          // is always the current page. Gating on !truncated rendered the
          // current page as a self-link whenever the trail truncated.
          const isCurrent = idx === visible.length - 1;
          return (
            <React.Fragment key={crumb.href + idx}>
              {idx > 0 && (
                <li aria-hidden="true" className="text-[var(--color-subtle-foreground)]">
                  <ChevronRight className="size-3.5" />
                </li>
              )}
              <li>
                {idx === 1 && truncated ? (
                  <span
                    className="inline-flex items-center gap-1 text-[var(--color-subtle-foreground)]"
                    aria-label="path truncated"
                  >
                    <MoreHorizontal className="size-3.5" />
                  </span>
                ) : isCurrent ? (
                  <span
                    aria-current="page"
                    className="font-semibold text-[var(--color-foreground)]"
                  >
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    href={crumb.href}
                    className="rounded-sm px-0.5 hover:text-[var(--color-foreground)] hover:underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)]"
                  >
                    {crumb.label}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
