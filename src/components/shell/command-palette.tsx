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
  Hash,
  CornerDownLeft,
} from "lucide-react";
import { useRoleStore } from "@/lib/store/role-store";
import { ROLES, ROLE_META } from "@/lib/roles";
import { NAV_ITEMS } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const router = useRouter();
  const setRole = useRoleStore((s) => s.setRole);
  const { setTheme } = useTheme();

  const run = React.useCallback(
    (action: () => void) => {
      action();
      onOpenChange(false);
    },
    [onOpenChange]
  );

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          aria-label="Command palette"
          className="fixed left-1/2 top-[20%] z-50 w-full max-w-xl -translate-x-1/2 overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-popover)] text-[var(--color-popover-foreground)] shadow-[var(--shadow-card-strong)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        >
          <DialogPrimitive.Title className="sr-only">
            Command palette
          </DialogPrimitive.Title>
          <DialogPrimitive.Description className="sr-only">
            Type to search routes, change role, or toggle theme.
          </DialogPrimitive.Description>
          <Command label="Command palette" className="flex flex-col">
            <div className="flex items-center gap-2 border-b border-[var(--color-border)] px-3">
              <Search className="size-4 shrink-0 opacity-60" aria-hidden="true" />
              <Command.Input
                autoFocus
                placeholder="Type a command or search."
                className="flex h-12 w-full bg-transparent text-sm outline-none placeholder:text-[var(--color-muted-foreground)]"
              />
            </div>
            <Command.List className="max-h-80 overflow-y-auto p-2">
              <Command.Empty className="py-6 text-center text-sm text-[var(--color-muted-foreground)]">
                No matches.
              </Command.Empty>

              <Command.Group
                heading="Navigate"
                className="px-1 pb-2 pt-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-muted-foreground)]"
              >
                {NAV_ITEMS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Command.Item
                      key={item.href}
                      value={`${item.label} ${item.description}`}
                      onSelect={() => run(() => router.push(item.href))}
                      className="group flex cursor-pointer items-center gap-2 rounded-[var(--radius-button)] px-2 py-1.5 text-sm aria-selected:bg-[var(--color-muted)]"
                    >
                      <Icon className="size-4 shrink-0 opacity-70" aria-hidden="true" />
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

              <Command.Group
                heading="Switch role"
                className="px-1 pb-2 pt-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-muted-foreground)]"
              >
                {ROLES.map((r) => {
                  const meta = ROLE_META[r];
                  return (
                    <Command.Item
                      key={r}
                      value={`role ${meta.label} ${meta.description}`}
                      onSelect={() => run(() => setRole(r))}
                      className="flex cursor-pointer items-center gap-2 rounded-[var(--radius-button)] px-2 py-1.5 text-sm aria-selected:bg-[var(--color-muted)]"
                    >
                      <Hash className="size-4 shrink-0 opacity-70" aria-hidden="true" />
                      <span className="flex-1 truncate">
                        Role: {meta.label}
                      </span>
                      <span className="truncate text-xs text-[var(--color-muted-foreground)]">
                        {meta.description}
                      </span>
                    </Command.Item>
                  );
                })}
              </Command.Group>

              <Command.Group
                heading="Theme"
                className="px-1 pb-1 pt-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-muted-foreground)]"
              >
                <Command.Item
                  value="theme light"
                  onSelect={() => run(() => setTheme("light"))}
                  className="flex cursor-pointer items-center gap-2 rounded-[var(--radius-button)] px-2 py-1.5 text-sm aria-selected:bg-[var(--color-muted)]"
                >
                  <Sun className="size-4 opacity-70" aria-hidden="true" />
                  Light
                </Command.Item>
                <Command.Item
                  value="theme dark"
                  onSelect={() => run(() => setTheme("dark"))}
                  className="flex cursor-pointer items-center gap-2 rounded-[var(--radius-button)] px-2 py-1.5 text-sm aria-selected:bg-[var(--color-muted)]"
                >
                  <Moon className="size-4 opacity-70" aria-hidden="true" />
                  Dark
                </Command.Item>
                <Command.Item
                  value="theme system"
                  onSelect={() => run(() => setTheme("system"))}
                  className="flex cursor-pointer items-center gap-2 rounded-[var(--radius-button)] px-2 py-1.5 text-sm aria-selected:bg-[var(--color-muted)]"
                >
                  <Monitor className="size-4 opacity-70" aria-hidden="true" />
                  System
                </Command.Item>
              </Command.Group>
            </Command.List>
            <div
              className={cn(
                "flex items-center justify-between border-t border-[var(--color-border)] px-3 py-2 text-[10px] text-[var(--color-muted-foreground)]"
              )}
            >
              <span>Esc to close</span>
              <span>
                <kbd className="rounded border border-[var(--color-border)] px-1 font-mono">
                  Ctrl K
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
