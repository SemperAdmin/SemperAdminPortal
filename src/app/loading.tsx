import { Skeleton, SkeletonText } from "@/components/ui/skeleton";

/**
 * Default route-level loading state. Renders during navigation transitions.
 */
export default function RouteLoading() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div>
        <Skeleton className="h-3 w-24" />
        <Skeleton className="mt-2 h-12 w-3/4" />
        <SkeletonText lines={2} className="mt-4" />
      </div>
      <Skeleton className="h-px w-full" />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-card)] p-5"
          >
            <Skeleton className="mb-3 size-9" />
            <Skeleton className="h-4 w-2/3" />
            <SkeletonText lines={2} className="mt-3" />
          </div>
        ))}
      </div>
    </div>
  );
}
