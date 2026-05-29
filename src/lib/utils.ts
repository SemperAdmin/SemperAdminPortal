import type { CSSProperties } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ROLE_META, type Role } from "@/lib/roles";

/**
 * Merge Tailwind class names with clsx semantics and tailwind-merge dedupe.
 * Canonical shadcn helper. Use everywhere a className is composed.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Returns the CSS variable string for a role's accent color. e.g. "var(--color-role-marine)" */
export function roleAccentVar(role: Role): string {
  return ROLE_META[role].cssVar;
}

/** Returns a CSSProperties object setting color to the role's accent. Use for simple color-only style props. */
export function roleAccentStyle(role: Role): CSSProperties {
  return { color: ROLE_META[role].cssVar };
}

/** Convert a URL segment to title-cased display text. "pay-and-entitlements" → "Pay And Entitlements" */
export function humanizeSegment(segment: string): string {
  return segment
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

/** Format an ISO date string as "Jan 1, 2025". Returns the original string on parse failure. */
export function formatVerified(date: string): string {
  const d = new Date(date);
  if (isNaN(d.getTime())) return date;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
