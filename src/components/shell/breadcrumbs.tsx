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

function humanize(segment: string): string {
  if (SEGMENT_LABEL_OVERRIDES[segment]) return SEGMENT_LABEL_OVERRIDES[segment];
  return segment
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

/**
 * Drop intermediate path segments that carry no real page. The crumb
 * disappears entirely so the trail reads cleanly.
 *
 * /inspections/igmc/<programNumber> has no index page. Only the leaf at
 * /inspections/igmc/<programNumber>/<slug> renders, so the program-number
 * crumb is hidden.
 */
const HIDDEN_SEGMENT_PATTERNS: RegExp[] = [
  /^\/inspections\/igmc\/[^/]+$/,
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
  const pathname = pathnameOverride ?? real ?? "/";
  if (pathname === "/" || pathname === "") return null;

  const segments = pathname.split("/").filter(Boolean);
  const trail = segments
    .map((seg, i) => ({
      label: humanize(seg),
      href: "/" + segments.slice(0, i + 1).join("/"),
    }))
    .filter((c) => !isHidden(c.href));

  // Always render Home as first crumb. Last item is non-link "current".
  const crumbs = [{ label: "Home", href: "/" }, ...trail];
  const last = crumbs.length - 1;

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
          const _isLast = idx === visible.length - 1 && crumbs.length === visible.length;
          const isLastFromCrumbs =
            !truncated && idx === visible.length - 1 && idx === last;
          const isCurrent = isLastFromCrumbs;
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
