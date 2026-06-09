"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  getTreeForRole,
  isBranch,
  type TreeBranch,
  type TreeLeaf,
  type TreeSection,
} from "@/lib/role-trees";
import type { Role } from "@/lib/roles";

/**
 * TreeNav - v1.2.
 * Mintlify-style sidebar tree. Shows the active role's content tree.
 * Collapsible branches. Active leaf marked with scarlet dot.
 */
export interface TreeNavProps {
  role: Role | null;
  className?: string;
  onItemClick?: () => void;
}

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

function isLeafActive(pathname: string, href: string): boolean {
  return pathname === href;
}

export function TreeNav({ role, className, onItemClick }: TreeNavProps) {
  const pathname = usePathname() ?? "/";
  const sections = getTreeForRole(role);

  return (
    <nav
      className={cn("flex flex-col gap-5", className)}
      aria-label="Content navigation"
    >
      {sections.map((section, idx) => (
        <TreeSectionBlock
          key={`${section.label}-${idx}`}
          section={section}
          pathname={pathname}
          onItemClick={onItemClick}
        />
      ))}
    </nav>
  );
}

function TreeSectionBlock({
  section,
  pathname,
  onItemClick,
}: {
  section: TreeSection;
  pathname: string;
  onItemClick?: () => void;
}) {
  return (
    <div>
      {section.label && (
        <p className="px-3 pb-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--color-subtle-foreground)]">
          {section.label}
        </p>
      )}
      <ul className="flex flex-col gap-0.5">
        {section.items.map((item, i) => (
          <li key={(isBranch(item) ? item.label : item.href) + i}>
            {isBranch(item) ? (
              <BranchNode
                branch={item}
                pathname={pathname}
                onItemClick={onItemClick}
              />
            ) : (
              <LeafLink
                leaf={item}
                pathname={pathname}
                onItemClick={onItemClick}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BranchNode({
  branch,
  pathname,
  onItemClick,
}: {
  branch: TreeBranch;
  pathname: string;
  onItemClick?: () => void;
}) {
  const branchActive =
    !!branch.href && isActive(pathname, branch.href);
  const childActive = branch.children.some((c) => isActive(pathname, c.href));
  const [open, setOpen] = React.useState<boolean>(
    branch.defaultOpen || branchActive || childActive
  );

  React.useEffect(() => {
    if (branchActive || childActive) setOpen(true);
  }, [branchActive, childActive]);

  return (
    <div>
      <div className="flex items-center">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={`${open ? "Collapse" : "Expand"} ${branch.label}`}
          className={cn(
            "flex size-6 items-center justify-center rounded-sm text-[var(--color-subtle-foreground)] hover:bg-[var(--color-surface-2)] hover:text-[var(--color-foreground)]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)]"
          )}
        >
          <ChevronRight
            className={cn(
              "size-3.5 transition-transform",
              open && "rotate-90"
            )}
            aria-hidden="true"
          />
        </button>
        {branch.href ? (
          <Link
            href={branch.href}
            onClick={onItemClick}
            aria-current={branchActive ? "page" : undefined}
            className={cn(
              "flex-1 truncate rounded-[var(--radius-sm)] px-2 py-1.5 text-sm font-semibold transition-colors",
              branchActive
                ? "bg-[var(--color-surface-2)] text-[var(--color-foreground)]"
                : "text-[var(--color-foreground)] hover:bg-[var(--color-surface-2)]"
            )}
          >
            {branch.label}
          </Link>
        ) : (
          <span
            onClick={() => setOpen((o) => !o)}
            role="button"
            tabIndex={-1}
            className="flex-1 cursor-pointer truncate rounded-[var(--radius-sm)] px-2 py-1.5 text-sm font-semibold text-[var(--color-foreground)]"
          >
            {branch.label}
          </span>
        )}
      </div>
      {open && (
        <ul className="ml-7 mt-0.5 flex flex-col gap-0.5 border-l border-dashed border-[var(--color-border)] pl-3">
          {branch.children.map((leaf) => (
            <li key={leaf.href}>
              <LeafLink leaf={leaf} pathname={pathname} onItemClick={onItemClick} nested />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function LeafLink({
  leaf,
  pathname,
  onItemClick,
  nested = false,
}: {
  leaf: TreeLeaf;
  pathname: string;
  onItemClick?: () => void;
  nested?: boolean;
}) {
  const active = !leaf.external && (isLeafActive(pathname, leaf.href) || isActive(pathname, leaf.href));
  const sharedClass = cn(
    "relative flex items-center rounded-[var(--radius-sm)] px-2.5 py-1.5 text-[13px] transition-colors",
    nested ? "font-medium" : "ml-8 font-medium",
    active
      ? "bg-[var(--color-surface-2)] text-[var(--color-foreground)] font-semibold"
      : "text-[var(--color-muted-foreground)] hover:bg-[var(--color-surface-2)] hover:text-[var(--color-foreground)]"
  );
  if (leaf.external) {
    return (
      <a
        href={leaf.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onItemClick}
        className={sharedClass}
      >
        <span className="truncate">{leaf.label}</span>
      </a>
    );
  }
  return (
    <Link
      href={leaf.href}
      onClick={onItemClick}
      aria-current={active ? "page" : undefined}
      className={sharedClass}
    >
      {active && (
        <span
          aria-hidden="true"
          className="absolute -left-3.5 top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-[var(--color-usmc-scarlet)]"
        />
      )}
      <span className="truncate">{leaf.label}</span>
    </Link>
  );
}
