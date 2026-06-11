import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Skeleton - v1.2.
 * Shimmer placeholder for loading states. Used by lazy-loaded tools and async lists.
 * Honors prefers-reduced-motion via the global guard in globals.css.
 */
export type SkeletonProps = React.HTMLAttributes<HTMLDivElement>;

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-[var(--radius-sm)] bg-[var(--color-surface-2)]",
          "after:absolute after:inset-0 after:-translate-x-full motion-safe:after:animate-[shimmer_1.6s_infinite]",
          "after:bg-gradient-to-r after:from-transparent after:via-[color-mix(in_srgb,var(--color-foreground)_5%,transparent)] after:to-transparent",
          className
        )}
        aria-busy="true"
        aria-live="polite"
        {...props}
      />
    );
  }
);
Skeleton.displayName = "Skeleton";

/**
 * SkeletonText - paragraph-style skeleton with N lines.
 */
export interface SkeletonTextProps {
  lines?: number;
  className?: string;
}

export function SkeletonText({ lines = 3, className }: SkeletonTextProps) {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className="h-3"
          style={{ width: i === lines - 1 ? "60%" : "100%" }}
        />
      ))}
    </div>
  );
}
