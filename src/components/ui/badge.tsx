import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-[var(--radius-chip)] px-2.5 py-0.5 text-xs font-semibold tracking-wide transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--color-primary)] text-[var(--color-primary-foreground)]",
        secondary:
          "bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)]",
        outline:
          "border border-[var(--color-border)] text-[var(--color-foreground)]",
        muted:
          "bg-[var(--color-muted)] text-[var(--color-muted-foreground)]",
        accent:
          "bg-[var(--color-accent)] text-[var(--color-accent-foreground)]",
        success: "bg-[var(--color-status-fresh)] text-white",
        warning: "bg-[var(--color-status-aging)] text-[var(--color-neutral-950)]",
        danger: "bg-[var(--color-status-stale)] text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
