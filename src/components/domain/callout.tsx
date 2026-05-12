import * as React from "react";
import {
  ShieldCheck,
  AlertTriangle,
  Info,
  Lightbulb,
  ShieldAlert,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Callout - v1.2.
 * Variants: source-check (scarlet), warning (aging amber), info (marine blue),
 * tip (status info), danger (stale red).
 * Left-border accent matching status color.
 */
export type CalloutVariant = "source-check" | "warning" | "info" | "tip" | "danger";

export interface CalloutProps {
  variant?: CalloutVariant;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const VARIANT_CONFIG: Record<
  CalloutVariant,
  { color: string; defaultTitle: string; icon: LucideIcon }
> = {
  "source-check": {
    color: "var(--color-usmc-scarlet)",
    defaultTitle: "Source check",
    icon: ShieldCheck,
  },
  warning: {
    color: "var(--color-status-aging)",
    defaultTitle: "Heads up",
    icon: AlertTriangle,
  },
  info: {
    color: "var(--color-status-info)",
    defaultTitle: "Note",
    icon: Info,
  },
  tip: {
    color: "var(--color-brass)",
    defaultTitle: "Tip",
    icon: Lightbulb,
  },
  danger: {
    color: "var(--color-status-stale)",
    defaultTitle: "Critical",
    icon: ShieldAlert,
  },
};

export function Callout({
  variant = "source-check",
  title,
  children,
  className,
}: CalloutProps) {
  const cfg = VARIANT_CONFIG[variant];
  const Icon = cfg.icon;
  return (
    <aside
      role="note"
      className={cn(
        "my-5 rounded-r-[var(--radius-sm)] border-l-4 px-4 py-3 text-sm",
        className
      )}
      style={{
        borderLeftColor: cfg.color,
        backgroundColor: `color-mix(in srgb, ${cfg.color} 6%, var(--color-surface))`,
      }}
    >
      <div
        className="mb-1 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.08em]"
        style={{ color: cfg.color }}
      >
        <Icon className="size-3.5" aria-hidden="true" />
        {title ?? cfg.defaultTitle}
      </div>
      <div className="text-[var(--color-foreground)] leading-relaxed">
        {children}
      </div>
    </aside>
  );
}
