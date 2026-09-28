"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { Command } from "cmdk";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import {
  Search,
  Moon,
  Sun,
  Monitor,
  CornerDownLeft,
  FileText,
  ArrowRight,
} from "lucide-react";
import { NAV_ITEMS } from "@/lib/navigation";
import { useRoleStore } from "@/lib/store/role-store";
import {
  loadSearchIndex,
  searchEntries,
  MIN_QUERY_LENGTH,
  type IndexEntry,
} from "@/lib/search/score";
import { cn } from "@/lib/utils";

/** Page hits shown in the palette before the hand-off to /search. */
const PALETTE_PAGE_LIMIT = 8;

const THEME_ITEMS = [
  {
    value: "light",
    label: "Light",
    keywords: "theme light mode parchment",
    icon: Sun,
  },
  {
    value: "dark",
    label: "Dark",
    keywords: "theme dark mode navy",
    icon: Moon,
  },
  {
    value: "system",
    label: "System",
    keywords: "theme system auto os",
    icon: Monitor,
  },
] as const;

/**
 * Every query term appears somewhere in the haystack. Replaces the cmdk
 * fuzzy scorer, which matched "OTEIP" against Admin and Videos letter by
 * letter.
 */
function matchesAll(haystack: string, query: string): boolean {
  const text = haystack.toLowerCase();
  return query
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .every((term) => text.includes(term));
}

export interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const router = useRouter();
  const { setTheme } = useTheme();
  // Hydration-safe platform read for the shortcut hint.
  const modKey = React.useSyncExternalStore(
    () => () => {},
    () => (/mac|iphone|ipad|ipod/i.test(navigator.userAgent) ? "⌘" : "Ctrl"),
    () => "Ctrl"
  );

  const role = useRoleStore((s) => s.role);
  const [query, setQuery] = React.useState("");
  const [index, setIndex] = React.useState<IndexEntry[] | null>(null);

  React.useEffect(() => {
    if (!open || index) return;
    let live = true;
    loadSearchIndex().then((loaded) => {
      if (live) setIndex(loaded);
    });
    return () => {
      live = false;
    };
  }, [open, index]);

  const handleOpenChange = React.useCallback(
    (next: boolean) => {
      if (!next) setQuery("");
      onOpenChange(next);
    },
    [onOpenChange]
  );

  const run = React.useCallback(
    (action: () => void) => {
      action();
      handleOpenChange(false);
    },
    [handleOpenChange]
  );

  const trimmed = query.trim();
  const searching = trimmed.length >= MIN_QUERY_LENGTH;
  const pages =
    index && searching
      ? searchEntries(index, trimmed, role, PALETTE_PAGE_LIMIT)
      : [];
  const navItems = trimmed
    ? NAV_ITEMS.filter((item) =>
        matchesAll(`${item.label} ${item.description}`, trimmed)
      )
    : NAV_ITEMS;
  const themeItems = trimmed
    ? THEME_ITEMS.filter((item) => matchesAll(item.keywords, trimmed))
    : THEME_ITEMS;

  return (
    <DialogPrimitive.Root open={open} onOpenChange={handleOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="motion-safe:data-[state=open]:animate-in motion-safe:data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" />
        <DialogPrimitive.Content
          aria-label="Command palette"
          className="motion-safe:data-[state=open]:animate-in motion-safe:data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed top-[20%] left-1/2 z-50 w-full max-w-xl -translate-x-1/2 overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-popover)] text-[var(--color-popover-foreground)] shadow-[var(--shadow-md)]"
        >
          <DialogPrimitive.Title className="sr-only">
            Command palette
          </DialogPrimitive.Title>
          <DialogPrimitive.Description className="sr-only">
            Type to search pages, jump to a section, or change the theme. Role
            switching lives in the topbar segmented control.
          </DialogPrimitive.Description>
          <Command
            label="Command palette"
            shouldFilter={false}
            className="flex flex-col"
          >
            <div className="flex items-center gap-2 border-b border-[var(--color-border)] px-3">
              <Search
                className="size-4 shrink-0 opacity-60"
                aria-hidden="true"
              />
              <Command.Input
                autoFocus
                value={query}
                onValueChange={setQuery}
                placeholder="Search pages, policies, and codes."
                className="flex h-12 w-full bg-transparent text-sm outline-none placeholder:text-[var(--color-muted-foreground)]"
              />
            </div>
            <Command.List className="max-h-80 overflow-y-auto p-2">
              <Command.Empty className="py-6 text-center text-sm text-[var(--color-muted-foreground)]">
                No matches.
              </Command.Empty>

              {searching && !index && (
                <Command.Loading>
                  <p className="px-2 py-3 text-sm text-[var(--color-muted-foreground)]">
                    Loading the search index.
                  </p>
                </Command.Loading>
              )}

              {pages.length > 0 && (
                <Command.Group
                  heading="Pages"
                  className="px-1 pt-1 pb-2 text-xs font-semibold tracking-wider text-[var(--color-muted-foreground)] uppercase"
                >
                  {pages.map((page) => (
                    <Command.Item
                      key={page.url}
                      value={`page ${page.url}`}
                      onSelect={() => run(() => router.push(page.url))}
                      className="group flex cursor-pointer items-start gap-2 rounded-[var(--radius-button)] px-2 py-1.5 text-sm tracking-normal normal-case aria-selected:bg-[var(--color-muted)]"
                    >
                      <FileText
                        className="mt-0.5 size-4 shrink-0 opacity-70"
                        aria-hidden="true"
                      />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate font-medium text-[var(--color-foreground)]">
                          {page.title}
                        </span>
                        <span className="block truncate text-xs font-normal text-[var(--color-muted-foreground)]">
                          {page.category}
                        </span>
                      </span>
                      <CornerDownLeft className="mt-0.5 size-3.5 opacity-0 group-aria-selected:opacity-60" />
                    </Command.Item>
                  ))}
                  <Command.Item
                    value={`search all ${trimmed}`}
                    onSelect={() =>
                      run(() =>
                        router.push(`/search?q=${encodeURIComponent(trimmed)}`)
                      )
                    }
                    className="group flex cursor-pointer items-center gap-2 rounded-[var(--radius-button)] px-2 py-1.5 text-sm tracking-normal normal-case aria-selected:bg-[var(--color-muted)]"
                  >
                    <ArrowRight
                      className="size-4 shrink-0 opacity-70"
                      aria-hidden="true"
                    />
                    <span className="flex-1 truncate">
                      See all results for &quot;{trimmed}&quot;
                    </span>
                  </Command.Item>
                </Command.Group>
              )}

              {navItems.length > 0 && (
                <Command.Group
                  heading="Navigate"
                  className="px-1 pt-1 pb-2 text-xs font-semibold tracking-wider text-[var(--color-muted-foreground)] uppercase"
                >
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Command.Item
                        key={item.href}
                        value={`${item.label} ${item.description}`}
                        onSelect={() => run(() => router.push(item.href))}
                        className="group flex cursor-pointer items-center gap-2 rounded-[var(--radius-button)] px-2 py-1.5 text-sm aria-selected:bg-[var(--color-muted)]"
                      >
                        <Icon
                          className="size-4 shrink-0 opacity-70"
                          aria-hidden="true"
                        />
                        <span className="flex-1 truncate">{item.label}</span>
                        {!item.ready && (
                          <span className="text-xs text-[var(--color-muted-foreground)]">
                            Phase {item.phase}
                          </span>
                        )}
                        <CornerDownLeft className="size-3.5 opacity-0 group-aria-selected:opacity-60" />
                      </Command.Item>
                    );
                  })}
                </Command.Group>
              )}

              {themeItems.length > 0 && (
                <Command.Group
                  heading="Theme"
                  className="px-1 pt-1 pb-1 text-xs font-semibold tracking-wider text-[var(--color-muted-foreground)] uppercase"
                >
                  {themeItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Command.Item
                        key={item.value}
                        value={`theme ${item.value}`}
                        onSelect={() => run(() => setTheme(item.value))}
                        className="flex cursor-pointer items-center gap-2 rounded-[var(--radius-button)] px-2 py-1.5 text-sm aria-selected:bg-[var(--color-muted)]"
                      >
                        <Icon
                          className="size-4 opacity-70"
                          aria-hidden="true"
                        />
                        {item.label}
                      </Command.Item>
                    );
                  })}
                </Command.Group>
              )}
            </Command.List>
            <div
              className={cn(
                "flex items-center justify-between border-t border-[var(--color-border)] px-3 py-2 text-[10px] text-[var(--color-muted-foreground)]"
              )}
            >
              <span>Esc to close</span>
              <span>
                <kbd className="rounded border border-[var(--color-border)] px-1 font-mono">
                  {modKey} K
                </kbd>{" "}
                to toggle
              </span>
            </div>
          </Command>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
