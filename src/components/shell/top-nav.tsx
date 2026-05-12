"use client";

import * as React from "react";
import { Menu, Command as CommandIcon, HelpCircle } from "lucide-react";
import { Logo } from "./logo";
import { SearchBox } from "./search-box";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { useRoleStore } from "@/lib/store/role-store";
import { ROLES, ROLE_META, type Role } from "@/lib/roles";
import { useMounted } from "@/hooks/use-mounted";
import { cn } from "@/lib/utils";

export interface TopNavProps {
  onOpenPalette: () => void;
  onOpenSideNav: () => void;
}

/**
 * TopNav - v1.2.
 * 56px floating pill chrome. Backdrop blur. Scarlet underline accent.
 * Search dominant at center. Segmented role switcher is the only role-switching surface.
 */
export function TopNav({ onOpenPalette, onOpenSideNav }: TopNavProps) {
  return (
    <div className="sticky top-0 z-40 px-3 pt-3 sm:px-4 lg:px-6">
      <header
        role="banner"
        className={cn(
          "relative mx-auto flex h-[var(--topbar-h)] max-w-screen-2xl items-center gap-3 px-3 sm:gap-4 sm:px-4",
          "rounded-[var(--radius-lg)] border border-[var(--color-border)] shadow-[var(--shadow-md)]",
          "bg-[color-mix(in_srgb,var(--color-bg-elev)_92%,transparent)]",
          "backdrop-blur-md supports-[backdrop-filter]:bg-[color-mix(in_srgb,var(--color-bg-elev)_82%,transparent)]"
        )}
      >
        {/* Scarlet underline accent */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-px left-6 h-0.5 w-20 rounded-sm bg-[var(--color-usmc-scarlet)] opacity-90"
        />

        <Button
          variant="ghost"
          size="icon"
          onClick={onOpenSideNav}
          aria-label="Open navigation"
          className="lg:hidden"
        >
          <Menu className="size-5" />
        </Button>

        <Logo />

        <div className="ml-auto flex items-center gap-2">
          <div className="hidden sm:block">
            <SearchBox onOpenPalette={onOpenPalette} className="w-56 md:w-72 lg:w-96" />
          </div>

          <RoleSegmented />

          <Button
            variant="ghost"
            size="icon"
            onClick={onOpenPalette}
            aria-label="Open command palette, Ctrl K or Cmd K"
            title="Command palette"
            className="hidden md:inline-flex"
          >
            <CommandIcon className="size-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            aria-label="Help"
            className="hidden md:inline-flex"
          >
            <HelpCircle className="size-4" />
          </Button>

          <ThemeToggle />
        </div>
      </header>
    </div>
  );
}

/**
 * RoleSegmented - v1.2.
 * The only role-switching surface. Visible at md+.
 * Active state: marine blue background with parchment text (matches logo banner).
 */
function RoleSegmented() {
  const role = useRoleStore((s) => s.role);
  const setRole = useRoleStore((s) => s.setRole);
  const mounted = useMounted();

  if (!mounted) {
    return (
      <div
        aria-hidden="true"
        className="hidden h-8 w-[260px] rounded-[var(--radius-sm)] bg-[var(--color-surface-2)] md:block"
      />
    );
  }

  const ROLE_LABEL_SHORT: Record<Role, string> = {
    marine: "Marine",
    leader: "Leader",
    commander: "CDR",
    admin: "Admin",
  };

  return (
    <div
      role="group"
      aria-label="Switch role"
      className="hidden h-8 items-center overflow-hidden rounded-[var(--radius-sm)] border border-[var(--color-border-strong)] md:flex"
    >
      {ROLES.map((r) => {
        const active = role === r;
        const meta = ROLE_META[r];
        return (
          <button
            key={r}
            type="button"
            onClick={() => setRole(r)}
            aria-pressed={active}
            aria-label={`Switch to ${meta.label} view`}
            className={cn(
              "h-full whitespace-nowrap border-r border-[var(--color-border-strong)] px-2.5 text-[11px] font-bold uppercase tracking-[0.06em] transition-colors last:border-r-0",
              active
                ? "bg-[var(--color-marine-blue)] text-[var(--color-parchment)]"
                : "bg-transparent text-[var(--color-muted-foreground)] hover:bg-[var(--color-surface-2)] hover:text-[var(--color-foreground)]"
            )}
          >
            {ROLE_LABEL_SHORT[r]}
          </button>
        );
      })}
    </div>
  );
}
