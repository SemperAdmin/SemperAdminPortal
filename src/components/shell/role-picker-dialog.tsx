"use client";

import * as React from "react";
import { Shield, Star, Award, ClipboardList, type LucideIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRoleStore } from "@/lib/store/role-store";
import { ROLES, ROLE_META, type Role } from "@/lib/roles";
import { useMounted } from "@/hooks/use-mounted";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, LucideIcon> = {
  Shield,
  Star,
  Award,
  ClipboardList,
};

/**
 * RolePickerDialog - v1.2.
 * First-visit role picker. Renders only after mount and only when no role is set.
 * Visual refresh: parchment surface, scarlet hover edge, marine-blue active treatment.
 * Phase 5 will add an analytics ping and an in-app rerun trigger.
 */
export function RolePickerDialog() {
  const role = useRoleStore((s) => s.role);
  const setRole = useRoleStore((s) => s.setRole);
  const mounted = useMounted();
  const open = mounted && role === null;

  const choose = (r: Role) => {
    setRole(r);
  };

  return (
    <Dialog open={open}>
      <DialogContent
        showClose={false}
        className="max-w-2xl"
        onEscapeKeyDown={(e) => e.preventDefault()}
        onPointerDownOutside={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-usmc-scarlet)]">
            Welcome
          </p>
          <DialogTitle className="font-display text-3xl tracking-wide">
            PICK YOUR ROLE
          </DialogTitle>
          <DialogDescription className="text-md">
            Select the role that fits your current work. The portal filters
            content for you. Switch any time from the topbar role switcher or
            the command palette.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-3 sm:grid-cols-2">
          {ROLES.map((r) => {
            const meta = ROLE_META[r];
            const Icon = ICON_MAP[meta.iconName];
            return (
              <button
                key={r}
                type="button"
                onClick={() => choose(r)}
                data-role={r}
                className={cn(
                  "group relative flex flex-col items-start gap-2 overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-card)] p-5 text-left transition-all",
                  "hover:border-[var(--color-usmc-scarlet)] hover:shadow-[var(--shadow-md)]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2"
                )}
              >
                {/* Per-role left edge accent */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-full w-1 opacity-0 transition-opacity group-hover:opacity-100"
                  style={{ backgroundColor: meta.cssVar }}
                />
                <span
                  className="grid size-10 place-items-center rounded-[var(--radius-sm)] text-white"
                  style={{ backgroundColor: meta.cssVar }}
                  aria-hidden="true"
                >
                  {Icon && <Icon className="size-5" />}
                </span>
                <span className="font-display text-xl tracking-wide uppercase">
                  {meta.label}
                </span>
                <span className="text-sm text-[var(--color-muted-foreground)]">
                  {meta.description}
                </span>
              </button>
            );
          })}
        </div>
        <p className="text-xs text-[var(--color-subtle-foreground)]">
          Your selection saves locally. No account required.
        </p>
      </DialogContent>
    </Dialog>
  );
}
