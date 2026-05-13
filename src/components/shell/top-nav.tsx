"use client";

import * as React from "react";
import { Menu, Command as CommandIcon, HelpCircle } from "lucide-react";
import { Logo } from "./logo";
import { SearchBox } from "./search-box";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
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
