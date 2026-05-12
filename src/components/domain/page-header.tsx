import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * PageHeader - v1.2.
 * Standard 4-line header used on home, role landings, and content templates.
 *
 * Structure:
 *   eyebrow (optional)
 *   tags row (optional)
 *   display h1
 *   summary (optional)
 *   meta row (optional - children slot)
 */
export interface PageHeaderProps {
  /** Small uppercase label above the title. Reads as the role/section context. */
  eyebrow?: string;
  /** Display h1. Use Bebas Neue automatically. */
  title: React.ReactNode;
  /** One-line summary below the title. */
  summary?: React.ReactNode;
  /** Tag row above the title (PolicyBadge, RoleChip, StatusPill). */
  tags?: React.ReactNode;
  /** Inline meta row below the summary (MetaRow). */
  children?: React.ReactNode;
  /** Right-aligned actions on the same row as the meta. */
  actions?: React.ReactNode;
  /** Pull tighter padding for content templates inside narrow columns. */
  compact?: boolean;
  className?: string;
}

export function PageHeader({
  eyebrow,
  title,
  summary,
  tags,
  children,
  actions,
  compact = false,
  className,
}: PageHeaderProps) {
  return (
    <header
      className={cn(
        "border-b border-[var(--color-border)]",
        compact ? "mb-5 pb-4" : "mb-8 pb-6",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-2 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--color-usmc-scarlet)]">
          <span aria-hidden="true" className="h-0.5 w-4 bg-[var(--color-usmc-scarlet)]" />
          {eyebrow}
        </p>
      )}
      {tags && (
        <div className="mb-3 flex flex-wrap items-center gap-2">{tags}</div>
      )}
      <h1
        className={cn(
          "font-display tracking-wide",
          compact ? "text-4xl" : "text-5xl md:text-6xl",
          "leading-tight"
        )}
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h1>
      {summary && (
        <p
          className={cn(
            "mt-3 max-w-prose text-[var(--color-muted-foreground)]",
            compact ? "text-base" : "text-md"
          )}
        >
          {summary}
        </p>
      )}
      {(children || actions) && (
        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
          {children && <div className="flex flex-wrap items-center gap-x-5 gap-y-2">{children}</div>}
          {actions && <div className="ml-auto flex items-center gap-2">{actions}</div>}
        </div>
      )}
    </header>
  );
}
