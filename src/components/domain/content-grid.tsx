"use client";

import * as React from "react";
import { useRoleStore } from "@/lib/store/role-store";
import { ContentCard } from "./content-card";
import { RoleFilterBar } from "./role-filter-bar";
import { useMounted } from "@/hooks/use-mounted";
import type { Role } from "@/lib/roles";
import type { PolicyKind } from "./policy-badge";

export interface ContentGridItem {
  slug: string;
  href: string;
  title: string;
  summary: string;
  roles: Role[];
  lastVerified: string;
  source: { title: string; publisher?: string; url?: string };
  policyBadge?: { kind: PolicyKind; number: string };
}

export function ContentGrid({ items }: { items: ContentGridItem[] }) {
  const role = useRoleStore((s) => s.role);
  const mounted = useMounted();
  const filtered =
    mounted && role ? items.filter((i) => i.roles.includes(role)) : items;
  return (
    <>
      <RoleFilterBar />
      {filtered.length === 0 ? (
        <p className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-muted)]/40 p-6 text-sm">
          No entries match your role yet. Clear the filter or check back soon.
        </p>
      ) : (
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((it) => (
            <ContentCard key={it.slug} {...it} />
          ))}
        </div>
      )}
    </>
  );
}
