"use client";

import Link from "next/link";
import { Clock, Trash2, ArrowRight } from "lucide-react";
import { useRoleStore, useRecents } from "@/lib/store/role-store";
import { useMounted } from "@/hooks/use-mounted";
import { formatDistanceToNow } from "date-fns";

export default function RecentPage() {
  const recents = useRecents();
  const clearRecents = useRoleStore((s) => s.clearRecents);
  const mounted = useMounted();

  if (!mounted) {
    return (
      <div className="flex flex-col gap-4 px-4 pt-6">
        <div className="h-6 w-32 animate-pulse rounded-[var(--radius-sm)] bg-[var(--color-surface-2)]" />
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-16 animate-pulse rounded-[var(--radius-md)] bg-[var(--color-surface-2)]"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-0 px-4 pt-6 pb-24">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock className="size-5 text-[var(--color-usmc-scarlet)]" aria-hidden="true" />
          <h1 className="text-xl font-bold tracking-tight">Recently viewed</h1>
        </div>
        {recents.length > 0 && (
          <button
            type="button"
            onClick={clearRecents}
            aria-label="Clear recent history"
            className="inline-flex items-center gap-1.5 rounded-[var(--radius-sm)] px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[var(--color-muted-foreground)] transition-colors hover:bg-[var(--color-surface-2)] hover:text-[var(--color-foreground)]"
          >
            <Trash2 className="size-3.5" aria-hidden="true" />
            Clear
          </button>
        )}
      </div>

      {recents.length === 0 ? (
        <div className="flex flex-col items-center gap-3 py-16 text-center">
          <Clock className="size-10 text-[var(--color-subtle-foreground)]" aria-hidden="true" />
          <p className="text-[15px] font-semibold text-[var(--color-foreground)]">No pages yet</p>
          <p className="text-[13px] text-[var(--color-muted-foreground)]">
            Pages appear here after you visit them.
          </p>
          <Link
            href="/"
            className="mt-2 inline-flex items-center gap-1.5 rounded-[var(--radius-sm)] bg-[var(--color-usmc-scarlet)] px-4 py-2 text-[13px] font-bold text-white transition-colors hover:bg-[color-mix(in_srgb,var(--color-usmc-scarlet)_85%,#000)]"
          >
            Go to Home
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </Link>
        </div>
      ) : (
        <ol className="flex flex-col gap-2" aria-label="Recently viewed pages">
          {recents.map((entry, idx) => (
            <li key={entry.href}>
              <Link
                href={entry.href}
                className="group flex items-center justify-between gap-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-1)] px-4 py-3.5 transition-[border-color,box-shadow] hover:border-[var(--color-usmc-scarlet)]/40 hover:shadow-sm"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-surface-2)] font-mono text-[10px] font-bold text-[var(--color-muted-foreground)]">
                    {idx + 1}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-[14px] font-semibold text-[var(--color-foreground)] leading-snug">
                      {entry.title}
                    </p>
                    <p className="mt-0.5 text-[11px] text-[var(--color-muted-foreground)]">
                      {formatDistanceToNow(new Date(entry.viewedAt), { addSuffix: true })}
                    </p>
                  </div>
                </div>
                <ArrowRight
                  className="size-4 shrink-0 text-[var(--color-muted-foreground)] transition-colors group-hover:text-[var(--color-usmc-scarlet)]"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
