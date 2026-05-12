"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * TableOfContents - v1.2.
 * Sticky right rail. Renders h2/h3 headings extracted from MDX (or any prose container).
 * Active item via IntersectionObserver on the underlying heading elements.
 *
 * Strategy: read the DOM after mount, find all h2/h3 inside the target container
 * (default: the first <article> in the document), build the TOC, then watch them.
 */
export interface TocProps {
  /** CSS selector for the prose container holding headings. Default: "article". */
  containerSelector?: string;
  /** Minimum heading count before the TOC renders. Default 3. */
  minHeadings?: number;
  className?: string;
  /** Optional title shown above the list. Default "On this page". */
  title?: string;
}

interface TocEntry {
  id: string;
  text: string;
  level: 2 | 3;
}

export function TableOfContents({
  containerSelector = "article",
  minHeadings = 3,
  className,
  title = "On this page",
}: TocProps) {
  const [entries, setEntries] = React.useState<TocEntry[]>([]);
  const [activeId, setActiveId] = React.useState<string>("");

  React.useEffect(() => {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const found: TocEntry[] = [];
    const headings = container.querySelectorAll<HTMLElement>("h2, h3");
    headings.forEach((h) => {
      if (!h.id) {
        // rehype-slug is on, but defensively fall back to a slug
        h.id = h.textContent?.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") ?? "";
      }
      if (!h.id) return;
      const level = h.tagName === "H2" ? 2 : 3;
      found.push({ id: h.id, text: h.textContent ?? "", level });
    });
    setEntries(found);

    if (found.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.target as HTMLElement).offsetTop - (b.target as HTMLElement).offsetTop);
        if (visible[0]) {
          setActiveId((visible[0].target as HTMLElement).id);
        }
      },
      { rootMargin: "-80px 0px -65% 0px", threshold: [0, 1] }
    );
    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [containerSelector]);

  if (entries.length < minHeadings) return null;

  return (
    <nav
      aria-label="Table of contents"
      className={cn(
        "sticky top-[calc(var(--topbar-h)+24px)] hidden h-[calc(100dvh-var(--topbar-h)-32px)] w-[var(--toc-w)] shrink-0 overflow-y-auto py-2 lg:block",
        className
      )}
    >
      <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--color-subtle-foreground)]">
        {title}
      </p>
      <ul className="flex flex-col gap-0.5">
        {entries.map((entry) => {
          const active = activeId === entry.id;
          return (
            <li key={entry.id}>
              <a
                href={`#${entry.id}`}
                className={cn(
                  "block rounded-[var(--radius-sm)] border-l-2 px-3 py-1 text-[12.5px] leading-snug transition-colors",
                  entry.level === 3 && "pl-6 text-[12px]",
                  active
                    ? "border-[var(--color-usmc-scarlet)] font-semibold text-[var(--color-foreground)]"
                    : "border-transparent text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]"
                )}
              >
                {entry.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
