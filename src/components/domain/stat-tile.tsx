import * as React from "react";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * StatTile - v1.2.
 * 32px brass icon top-left, 44px Bebas Neue value, eyebrow label, meta line.
 * Brass-tinted radial gradient on dark, brass linear top on light.
 * Hover lift via shadow-md and translateY.
 */
export interface StatTileProps {
  icon: LucideIcon;
  value: string | number;
  label: string;
  meta?: string;
  className?: string;
}

export const StatTile = React.forwardRef<HTMLDivElement, StatTileProps>(
  ({ icon: Icon, value, label, meta, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] p-5 shadow-[var(--shadow-sm)] transition-all",
          "bg-gradient-to-b from-[color-mix(in_srgb,var(--color-brass)_6%,var(--color-surface))] to-[var(--color-surface)]",
          "dark:bg-[var(--color-surface)] dark:bg-[radial-gradient(120%_80%_at_0%_0%,color-mix(in_srgb,var(--color-brass)_14%,transparent)_0%,transparent_60%)]",
          "hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]",
          className
        )}
      >
        <div
          aria-hidden="true"
          className="mb-3 grid size-8 place-items-center rounded-[var(--radius-sm)] bg-[color-mix(in_srgb,var(--color-brass)_14%,transparent)] text-[var(--color-brass-700)] dark:text-[var(--color-brass-300)]"
        >
          <Icon className="size-4" />
        </div>
        <div
          className="font-display text-4xl leading-none tracking-wide"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {value}
        </div>
        <div className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--color-subtle-foreground)]">
          {label}
        </div>
        {meta && (
          <div className="text-xs text-[var(--color-muted-foreground)]">{meta}</div>
        )}
      </div>
    );
  }
);
StatTile.displayName = "StatTile";
