"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, LayoutGrid, Wrench, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * BottomTabs - v1.2.
 * Mobile-only bottom navigation bar. Five primary entry points.
 * Active tab uses scarlet text and icon. Always visible at < lg.
 *
 * Browse opens the side-nav drawer (one-thumb access).
 */
export interface BottomTabsProps {
  /** Triggered when the Browse tab is tapped. */
  onBrowse?: () => void;
}

interface TabSpec {
  id: string;
  label: string;
  icon: typeof Home;
  href?: string;
  action?: "browse";
  matchPrefix?: string[];
}

const TABS: TabSpec[] = [
  { id: "home", label: "Home", icon: Home, href: "/", matchPrefix: [] },
  { id: "search", label: "Search", icon: Search, href: "/search" },
  { id: "browse", label: "Browse", icon: LayoutGrid, action: "browse" },
  { id: "tools", label: "Tools", icon: Wrench, href: "/tools" },
  { id: "recent", label: "Recent", icon: Clock, href: "/recent" },
];

export function BottomTabs({ onBrowse }: BottomTabsProps) {
  const pathname = usePathname() ?? "/";

  const isActive = (tab: TabSpec): boolean => {
    if (tab.action === "browse") return false;
    if (!tab.href) return false;
    if (tab.href === "/") return pathname === "/";
    return pathname === tab.href || pathname.startsWith(tab.href + "/");
  };

  return (
    <nav
      aria-label="Primary mobile navigation"
      className={cn(
        "fixed inset-x-0 bottom-0 z-30 grid grid-cols-5 border-t border-[var(--color-border)]",
        "bg-[color-mix(in_srgb,var(--color-bg-elev)_94%,transparent)] backdrop-blur-md",
        "pb-[env(safe-area-inset-bottom,0)] lg:hidden"
      )}
    >
      {TABS.map((tab) => {
        const Icon = tab.icon;
        const active = isActive(tab);
        const className = cn(
          "flex flex-col items-center justify-center gap-0.5 py-2 text-[10px] font-bold uppercase tracking-[0.04em] transition-colors",
          active
            ? "text-[var(--color-usmc-scarlet)]"
            : "text-[var(--color-subtle-foreground)] hover:text-[var(--color-foreground)]"
        );

        if (tab.action === "browse") {
          return (
            <button
              key={tab.id}
              type="button"
              onClick={onBrowse}
              aria-label="Open browse drawer"
              className={className}
            >
              <Icon className="size-5" aria-hidden="true" />
              {tab.label}
            </button>
          );
        }

        return (
          <Link
            key={tab.id}
            href={tab.href ?? "/"}
            aria-current={active ? "page" : undefined}
            className={className}
          >
            <Icon className="size-5" aria-hidden="true" />
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
