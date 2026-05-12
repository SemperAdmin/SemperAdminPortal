import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * MetaRow - v1.2.
 * Inline list of label/value pairs. Used inside PageHeader.
 *
 * Each item: small uppercase label, mono value, both inline.
 * Renders horizontally; wraps on small screens.
 */
export interface MetaItem {
  label: string;
  value: React.ReactNode;
  /** Render value in mono font. Default true (matches design). */
  mono?: boolean;
}

export interface MetaRowProps {
  items: MetaItem[];
  className?: string;
}

export function MetaRow({ items, className }: MetaRowProps) {
  return (
    <dl
      className={cn(
        "flex flex-wrap items-center gap-x-5 gap-y-2",
        className
      )}
    >
      {items.map((item, i) => (
        <div key={i} className="inline-flex items-baseline gap-1.5">
          <dt className="text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--color-subtle-foreground)]">
            {item.label}
          </dt>
          <dd
            className={cn(
              "text-sm font-medium text-[var(--color-foreground)]",
              (item.mono ?? true) && "font-mono"
            )}
          >
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
