"use client";

import * as React from "react";
import { LayoutGrid, List } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * FilterBar - v1.2.
 * Filter chips with active state + optional grid/list view toggle.
 * Controlled. Parent owns active filter id and view mode.
 */
export type ViewMode = "grid" | "list";

export interface FilterChip {
  id: string;
  label: string;
  /** Optional count appended after label. */
  count?: number;
}

export interface FilterBarProps {
  /** Optional eyebrow label rendered to the left of chips. */
  label?: string;
  chips: FilterChip[];
  activeId: string;
  onChange: (id: string) => void;
  view?: ViewMode;
  onViewChange?: (view: ViewMode) => void;
  className?: string;
}

export function FilterBar({
  label,
  chips,
  activeId,
  onChange,
  view,
  onViewChange,
  className,
}: FilterBarProps) {
  return (
    <div
      className={cn(
        "mb-5 flex flex-wrap items-center gap-2 border-b border-[var(--color-border)] pb-3",
        className
      )}
    >
      {label && (
        <span className="mr-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--color-subtle-foreground)]">
          {label}
        </span>
      )}
      <div className="flex flex-wrap items-center gap-1.5">
        {chips.map((chip) => {
          const active = chip.id === activeId;
          return (
            <button
              key={chip.id}
              type="button"
              onClick={() => onChange(chip.id)}
              aria-pressed={active}
              className={cn(
                "inline-flex h-7 items-center gap-1.5 rounded-[var(--radius-chip)] border px-2.5 text-[12px] font-semibold transition-colors",
                active
                  ? "border-[var(--color-foreground)] bg-[var(--color-foreground)] text-[var(--color-bg-elev)]"
                  : "border-[var(--color-border-strong)] bg-[var(--color-surface)] text-[var(--color-muted-foreground)] hover:border-[var(--color-foreground)] hover:text-[var(--color-foreground)]"
              )}
            >
              {chip.label}
              {typeof chip.count === "number" && (
                <span
                  className={cn(
                    "text-[10px] font-mono",
                    active ? "opacity-80" : "text-[var(--color-subtle-foreground)]"
                  )}
                >
                  {chip.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {view !== undefined && onViewChange && (
        <div className="ml-auto flex items-center gap-1 rounded-[var(--radius-sm)] border border-[var(--color-border-strong)] p-0.5">
          <button
            type="button"
            onClick={() => onViewChange("grid")}
            aria-pressed={view === "grid"}
            aria-label="Grid view"
            className={cn(
              "grid size-7 place-items-center rounded-sm transition-colors",
              view === "grid"
                ? "bg-[var(--color-surface-2)] text-[var(--color-foreground)]"
                : "text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]"
            )}
          >
            <LayoutGrid className="size-3.5" />
          </button>
          <button
            type="button"
            onClick={() => onViewChange("list")}
            aria-pressed={view === "list"}
            aria-label="List view"
            className={cn(
              "grid size-7 place-items-center rounded-sm transition-colors",
              view === "list"
                ? "bg-[var(--color-surface-2)] text-[var(--color-foreground)]"
                : "text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]"
            )}
          >
            <List className="size-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}
