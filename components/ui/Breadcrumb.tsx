"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type Props = {
  items: BreadcrumbItem[];
};

/**
 * Breadcrumb navigation component for showing location context.
 * Helps users understand where they are in the site hierarchy.
 *
 * @example
 * <Breadcrumb items={[
 *   { label: "Leaders", href: "/roles/leaders" },
 *   { label: "Performance Evaluation", href: "/roles/leaders/leaders-performance-evaluation" },
 *   { label: "JEPES Overview" }
 * ]} />
 */
export function Breadcrumb({ items }: Props) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-zinc-600 dark:text-zinc-400">
        {/* Home link */}
        <li className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-1 rounded-md px-2 py-1 transition hover:bg-[var(--sa-cream)]/60 hover:text-[var(--sa-navy)] dark:hover:bg-white/10 dark:hover:text-[var(--sa-cream)]"
            aria-label="Home"
          >
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.label} className="flex items-center">
              <ChevronRight className="h-4 w-4 flex-shrink-0 text-zinc-400 dark:text-zinc-600" aria-hidden="true" />
              {isLast || !item.href ? (
                <span
                  className="ml-1.5 font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]"
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="ml-1.5 rounded-md px-2 py-1 transition hover:bg-[var(--sa-cream)]/60 hover:text-[var(--sa-navy)] dark:hover:bg-white/10 dark:hover:text-[var(--sa-cream)]"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
