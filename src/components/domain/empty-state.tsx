import * as React from "react";
import { type LucideIcon, Inbox } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * EmptyState - v1.2.
 * Friendly empty state for list pages that have no entries.
 * Use when a filter returns zero or content has not been authored yet.
 */
export interface EmptyStateProps {
  icon?: LucideIcon;
  title: string;
  description?: string;
  actions?: React.ReactNode;
  className?: string;
}

export function EmptyState({
  icon: Icon = Inbox,
  title,
  description,
  actions,
  className,
}: EmptyStateProps) {
  return (
    <div
      role="status"
      className={cn(
        "flex flex-col items-center justify-center rounded-[var(--radius-md)] border border-dashed border-[var(--color-border-strong)] bg-[var(--color-surface-2)] px-6 py-12 text-center",
        className
      )}
    >
      <div
        className="mb-4 grid size-12 place-items-center rounded-full bg-[var(--color-surface)] text-[var(--color-muted-foreground)]"
        aria-hidden="true"
      >
        <Icon className="size-5" />
      </div>
      <p className="text-base font-bold tracking-tight">{title}</p>
      {description && (
        <p className="mt-1 max-w-sm text-sm text-[var(--color-muted-foreground)]">
          {description}
        </p>
      )}
      {actions && <div className="mt-4 flex flex-wrap items-center justify-center gap-2">{actions}</div>}
    </div>
  );
}
