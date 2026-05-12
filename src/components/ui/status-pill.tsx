import * as React from "react";
import { Pill, type PillProps } from "./pill";
import { cn } from "@/lib/utils";

/**
 * StatusPill - v1.2.
 * Verified-status pill with colored leading dot.
 * Wraps Pill primitive. Used for verified, aging, stale, fresh content states.
 */
type StatusVariant = "fresh" | "aging" | "stale" | "info";

const STATUS_TO_VARIANT: Record<StatusVariant, NonNullable<PillProps["variant"]>> = {
  fresh: "success",
  aging: "warning",
  stale: "danger",
  info: "info",
};

const DOT_COLOR: Record<StatusVariant, string> = {
  fresh: "var(--color-status-fresh)",
  aging: "var(--color-status-aging)",
  stale: "var(--color-status-stale)",
  info: "var(--color-status-info)",
};

export interface StatusPillProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "children"> {
  status: StatusVariant;
  label: string;
  size?: PillProps["size"];
}

export const StatusPill = React.forwardRef<HTMLSpanElement, StatusPillProps>(
  ({ status, label, size = "sm", className, ...props }, ref) => {
    return (
      <Pill
        ref={ref}
        variant={STATUS_TO_VARIANT[status]}
        size={size}
        className={cn("normal-case tracking-tight", className)}
        {...props}
      >
        <span
          aria-hidden="true"
          className="inline-block h-1.5 w-1.5 rounded-full"
          style={{ background: DOT_COLOR[status] }}
        />
        {label}
      </Pill>
    );
  }
);
StatusPill.displayName = "StatusPill";
