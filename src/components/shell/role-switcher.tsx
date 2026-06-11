"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { ROLES, ROLE_META, ROLE_HOME, type Role } from "@/lib/roles";
import { useRoleStore } from "@/lib/store/role-store";
import { useMounted } from "@/hooks/use-mounted";
import { cn } from "@/lib/utils";

export interface RoleSwitcherProps {
  className?: string;
  /**
   * Navigates to the selected role's landing page after switching.
   * Defaults to true so a switch always lands the user in matching context.
   */
  navigateOnSwitch?: boolean;
  /** Fires after a successful switch. The mobile drawer closes through this. */
  onSwitched?: () => void;
}

/**
 * RoleSwitcher - segmented control for the active role.
 *
 * The single role-switching surface per the redesign spec: rendered in the
 * topbar on desktop and at the top of the drawer on mobile. The sidebar
 * "Viewing as" header stays read-only. Buttons carry aria-pressed, matching
 * the FilterBar chip pattern.
 */
export function RoleSwitcher({
  className,
  navigateOnSwitch = true,
  onSwitched,
}: RoleSwitcherProps) {
  const router = useRouter();
  const mounted = useMounted();
  const role = useRoleStore((s) => s.role);
  const setRole = useRoleStore((s) => s.setRole);

  const active = mounted ? role : null;

  function select(next: Role) {
    if (next === active) return;
    setRole(next);
    if (navigateOnSwitch) router.push(ROLE_HOME[next]);
    onSwitched?.();
  }

  return (
    <div
      role="group"
      aria-label="Switch role view"
      className={cn(
        "flex h-8 items-center gap-0.5 rounded-[var(--radius-pill)] border border-[var(--color-border)] bg-[var(--color-bg-sunken)] p-0.5",
        className
      )}
    >
      {ROLES.map((r) => {
        const meta = ROLE_META[r];
        const isActive = active === r;
        return (
          <button
            key={r}
            type="button"
            onClick={() => select(r)}
            disabled={!mounted}
            aria-pressed={isActive}
            title={meta.description}
            className={cn(
              "flex h-full items-center gap-1.5 rounded-[var(--radius-pill)] px-2.5 text-[12px] font-medium transition-colors duration-[120ms]",
              isActive
                ? "text-[var(--color-foreground)] shadow-[var(--shadow-sm)]"
                : "text-[var(--color-muted-foreground)] hover:bg-[var(--color-surface-2)] hover:text-[var(--color-foreground)]"
            )}
            style={
              isActive
                ? {
                    backgroundColor: `color-mix(in srgb, ${meta.cssVar} 16%, transparent)`,
                  }
                : undefined
            }
          >
            <span
              aria-hidden="true"
              className={cn(
                "size-1.5 rounded-full transition-opacity duration-[120ms]",
                isActive ? "opacity-100" : "opacity-35"
              )}
              style={{ backgroundColor: meta.cssVar }}
            />
            {meta.shortLabel}
          </button>
        );
      })}
    </div>
  );
}
