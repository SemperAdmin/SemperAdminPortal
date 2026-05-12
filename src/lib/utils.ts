import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind class names with clsx semantics and tailwind-merge dedupe.
 * Canonical shadcn helper. Use everywhere a className is composed.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
