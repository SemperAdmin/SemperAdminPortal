"use client";

import { Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRoleStore } from "@/lib/store/role-store";
import { ROLE_META } from "@/lib/roles";
import { useMounted } from "@/hooks/use-mounted";

/**
 * Phase 5 filter bar shown above listings.
 * Reflects the active role and lets the user clear it for a full unfiltered view.
 */
export function RoleFilterBar() {
  const role = useRoleStore((s) => s.role);
  const clear = useRoleStore((s) => s.clearRole);
  const mounted = useMounted();
  if (!mounted || !role) return null;
  const meta = ROLE_META[role];
  return (
    <div className="mb-4 flex items-center justify-between gap-3 rounded-[var(--radius-button)] border border-[var(--color-border)] bg-[var(--color-muted)]/40 px-3 py-2 text-sm">
      <span className="inline-flex items-center gap-2">
        <Filter className="size-4 opacity-70" aria-hidden="true" />
        Filtering for role: <strong>{meta.label}</strong>
      </span>
      <Button variant="ghost" size="sm" onClick={clear}>
        <X className="size-3.5" />
        Show all
      </Button>
    </div>
  );
}
