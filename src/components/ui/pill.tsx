import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Pill primitive - v1.2.
 * Replaces Badge. Variants for role accents, status, and neutral tags.
 * Tints use color-mix for theme parity. No hex tints.
 */
const pillVariants = cva(
  "inline-flex items-center gap-1 whitespace-nowrap rounded-[var(--radius-chip)] border font-semibold uppercase tracking-wider transition-colors",
  {
    variants: {
      variant: {
        marine:
          "border-[color-mix(in_srgb,var(--color-role-marine)_28%,transparent)] bg-[color-mix(in_srgb,var(--color-role-marine)_10%,transparent)] text-[var(--color-usmc-scarlet)]",
        leader:
          "border-[color-mix(in_srgb,var(--color-role-leader)_35%,transparent)] bg-[color-mix(in_srgb,var(--color-role-leader)_14%,transparent)] text-[var(--color-brass-700)] dark:text-[var(--color-brass-300)]",
        commander:
          "border-[color-mix(in_srgb,var(--color-role-commander)_28%,transparent)] bg-[color-mix(in_srgb,var(--color-role-commander)_10%,transparent)] text-[var(--color-marine-blue)] dark:text-[#B5C4DC]",
        admin:
          "border-[color-mix(in_srgb,var(--color-role-admin)_28%,transparent)] bg-[color-mix(in_srgb,var(--color-role-admin)_10%,transparent)] text-[#1F6940] dark:text-[#8FD4A8]",
        success:
          "border-[color-mix(in_srgb,var(--color-status-fresh)_30%,transparent)] bg-[color-mix(in_srgb,var(--color-status-fresh)_10%,transparent)] text-[#1F6940] dark:text-[#8FD4A8]",
        warning:
          "border-[color-mix(in_srgb,var(--color-status-aging)_32%,transparent)] bg-[color-mix(in_srgb,var(--color-status-aging)_12%,transparent)] text-[#8A4F12] dark:text-[var(--color-brass-300)]",
        danger:
          "border-[color-mix(in_srgb,var(--color-status-stale)_30%,transparent)] bg-[color-mix(in_srgb,var(--color-status-stale)_10%,transparent)] text-[#8A2424] dark:text-[#E68A93]",
        info:
          "border-[color-mix(in_srgb,var(--color-status-info)_28%,transparent)] bg-[color-mix(in_srgb,var(--color-status-info)_10%,transparent)] text-[var(--color-status-info)]",
        neutral:
          "border-[var(--color-border-strong)] bg-[var(--color-surface-2)] text-[var(--color-muted-foreground)]",
        outline:
          "border-[var(--color-border-strong)] bg-transparent text-[var(--color-foreground)]",
        accent:
          "border-[color-mix(in_srgb,var(--color-brass)_35%,transparent)] bg-[color-mix(in_srgb,var(--color-brass)_14%,transparent)] text-[var(--color-brass-700)] dark:text-[var(--color-brass-300)]",
      },
      size: {
        xs: "h-5 px-1.5 text-[9.5px]",
        sm: "h-6 px-2 text-[10.5px]",
        md: "h-7 px-2.5 text-[11px]",
      },
    },
    defaultVariants: {
      variant: "neutral",
      size: "sm",
    },
  }
);

export interface PillProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof pillVariants> {}

const Pill = React.forwardRef<HTMLSpanElement, PillProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(pillVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);
Pill.displayName = "Pill";

export { Pill, pillVariants };
