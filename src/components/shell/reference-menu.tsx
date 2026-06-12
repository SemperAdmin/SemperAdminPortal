"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookMarked, ChevronDown, ExternalLink } from "lucide-react";
import { REFERENCE_LINKS } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

/**
 * ReferenceMenu - topbar dropdown for the role-agnostic reference surfaces.
 *
 * Replaces the Reference section the sidebar trees used to carry. One
 * compact trigger on every breakpoint: label plus chevron at sm and up,
 * icon plus chevron below. The trigger shows the active state while the
 * current route lives under a reference surface.
 */
export function ReferenceMenu({ className }: { className?: string }) {
  const pathname = usePathname() ?? "/";

  const normalized =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;
  const active = REFERENCE_LINKS.some(
    (l) =>
      !l.external &&
      (normalized === l.href || normalized.startsWith(l.href + "/"))
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "inline-flex h-8 items-center gap-1 rounded-[var(--radius-sm)] px-2 text-sm font-medium transition-colors duration-[120ms]",
          "hover:bg-[var(--color-surface-2)] hover:text-[var(--color-foreground)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)]",
          "data-[state=open]:bg-[var(--color-surface-2)]",
          active
            ? "text-[var(--color-foreground)]"
            : "text-[var(--color-muted-foreground)]",
          className
        )}
        aria-label="Reference menu"
      >
        <BookMarked className="size-4 sm:hidden" aria-hidden="true" />
        <span className="hidden sm:inline">Reference</span>
        <ChevronDown className="size-3.5 opacity-70" aria-hidden="true" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {REFERENCE_LINKS.map((link) =>
          link.external ? (
            <DropdownMenuItem
              key={link.href}
              onSelect={() => window.open(link.href, "_blank", "noopener,noreferrer")}
            >
              <span className="flex-1">{link.label}</span>
              <ExternalLink
                className="size-3.5 text-[var(--color-subtle-foreground)]"
                aria-hidden="true"
              />
            </DropdownMenuItem>
          ) : (
            <DropdownMenuItem key={link.href} asChild>
              <Link href={link.href}>
                <span className="flex-1">{link.label}</span>
                {(normalized === link.href ||
                  normalized.startsWith(link.href + "/")) && (
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-[var(--color-usmc-scarlet)]"
                  />
                )}
              </Link>
            </DropdownMenuItem>
          )
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
