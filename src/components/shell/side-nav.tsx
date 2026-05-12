"use client";

import * as React from "react";
import Link from "next/link";
import { Clock } from "lucide-react";
import { TreeNav } from "./tree-nav";
import { useRoleStore, useRecents } from "@/lib/store/role-store";
import { ROLE_META } from "@/lib/roles";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useMounted } from "@/hooks/use-mounted";

export interface SideNavProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/**
 * SideNav - v1.2.
 * Desktop: persistent sticky left sidebar (272px). Mintlify deep tree.
 * Mobile: drawer (handled by AppShell, BottomTabs handles primary nav).
 *
 * Top of sidebar shows "Viewing as ROLE" context label. Role switching
 * lives in TopNav (not here). Last viewed section reads from role-store recents.
 */
export function SideNav({ open, onOpenChange }: SideNavProps) {
  const role = useRoleStore((s) => s.role);
  const recents = useRecents();
  const mounted = useMounted();
  const activeRole = mounted ? role : null;
  const meta = activeRole ? ROLE_META[activeRole] : null;

  const renderTree = (onItemClick?: () => void) => (
    <>
      {meta ? (
        <div className="mb-3 flex items-center gap-2.5 border-b border-[var(--color-border)] pb-3">
          <span
            aria-hidden="true"
            className="size-2 rounded-full bg-[var(--color-usmc-scarlet)]"
          />
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--color-subtle-foreground)]">
              Viewing as
            </div>
            <div
              className="font-display text-base tracking-wide"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {meta.label.toUpperCase()}
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-3 border-b border-[var(--color-border)] pb-3">
          <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--color-subtle-foreground)]">
            Pick a role to filter
          </div>
        </div>
      )}
      <TreeNav role={activeRole} onItemClick={onItemClick} />

      {mounted && recents.length > 0 && (
        <div className="mt-5">
          <p className="px-3 pb-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--color-subtle-foreground)]">
            Last viewed
          </p>
          <ul className="flex flex-col gap-0.5">
            {recents.map((r) => (
              <li key={r.href}>
                <Link
                  href={r.href}
                  onClick={onItemClick}
                  className="group flex items-center gap-2 rounded-[var(--radius-sm)] px-3 py-1.5 text-[12.5px] text-[var(--color-muted-foreground)] transition-colors hover:bg-[var(--color-surface-2)] hover:text-[var(--color-foreground)]"
                >
                  <Clock className="size-3 shrink-0 opacity-60" aria-hidden="true" />
                  <span className="truncate">{r.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );

  return (
    <>
      {/* Desktop sticky sidebar */}
      <aside
        aria-label="Primary navigation"
        className="sticky top-[calc(var(--topbar-h)+24px)] hidden h-[calc(100dvh-var(--topbar-h)-32px)] w-[var(--tree-w)] shrink-0 lg:block"
      >
        <div className="h-full overflow-y-auto rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg-sunken)] p-3">
          {renderTree()}
        </div>
      </aside>

      {/* Mobile drawer */}
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent side="left" className="w-80 p-0">
          <SheetHeader className="border-b border-[var(--color-border)] px-4 py-3">
            <SheetTitle className="font-display text-lg tracking-wide">
              SEMPER ADMIN
            </SheetTitle>
          </SheetHeader>
          <div className="overflow-y-auto px-3 pb-6 pt-3">
            {renderTree(() => onOpenChange(false))}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
