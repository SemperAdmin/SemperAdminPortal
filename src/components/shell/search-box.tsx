"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * SearchBox - v1.3.
 * Top-nav search input. Opens the command palette on click or Enter.
 * No onFocus trigger: focus restoration after palette dismissal would
 * re-open it and trap keyboard users in a loop.
 * Shows a platform-aware kbd hint at sm+.
 */
export interface SearchBoxProps {
  onOpenPalette: () => void;
  className?: string;
}

export function SearchBox({ onOpenPalette, className }: SearchBoxProps) {
  // Hydration-safe platform read. Server snapshot stays "Ctrl", Mac clients
  // re-render to the command glyph after hydration.
  const modKey = React.useSyncExternalStore(
    () => () => {},
    () => (/mac|iphone|ipad|ipod/i.test(navigator.userAgent) ? "⌘" : "Ctrl"),
    () => "Ctrl"
  );

  return (
    <button
      type="button"
      onClick={onOpenPalette}
      className={cn(
        "group inline-flex h-9 w-full max-w-md items-center gap-2.5 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface-2)] px-3 text-left text-sm text-[var(--color-muted-foreground)] transition-colors",
        "hover:bg-[var(--color-surface-3)] hover:text-[var(--color-foreground)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2",
        className
      )}
      aria-label="Search the portal, opens command palette"
    >
      <Search className="size-4 shrink-0 opacity-70" aria-hidden="true" />
      <span className="flex-1 truncate">
        Search policies, situations, citations.
      </span>
      <kbd className="hidden shrink-0 items-center gap-0.5 rounded-[var(--radius-xs)] border border-[var(--color-border)] border-b-2 bg-[var(--color-bg-elev)] px-1.5 py-0.5 font-mono text-[10px] font-semibold sm:inline-flex">
        {modKey} K
      </kbd>
    </button>
  );
}
