import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ROLE_META, type Role } from "@/lib/roles";

/**
 * CrossRoleStrip - v1.2.
 * Renders at the bottom of content pages. Surfaces the same topic from up to
 * 3 other roles. Each card shows the role view label and a deep link.
 *
 * Skip rendering if no other-role mapping exists for the page.
 */
export interface CrossRoleLink {
  role: Role;
  title: string;
  href: string;
}

export interface CrossRoleStripProps {
  /** Other-role views of the same topic. Up to 3 typical. */
  links: CrossRoleLink[];
  className?: string;
}

const ROLE_ACCENT: Record<Role, string> = {
  marine: "var(--color-role-marine)",
  leader: "var(--color-role-leader)",
  commander: "var(--color-role-commander)",
  admin: "var(--color-role-admin)",
};

export function CrossRoleStrip({ links, className }: CrossRoleStripProps) {
  if (!links || links.length === 0) return null;

  return (
    <section
      aria-label="Same topic, other role views"
      className={cn(
        "mt-10 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-2)] p-5",
        className
      )}
    >
      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--color-subtle-foreground)]">
        Same topic, other roles
      </p>
      <div
        className={cn(
          "grid gap-2",
          links.length === 1 && "sm:grid-cols-1",
          links.length === 2 && "sm:grid-cols-2",
          links.length >= 3 && "sm:grid-cols-3"
        )}
      >
        {links.map((link) => {
          const meta = ROLE_META[link.role];
          const accent = ROLE_ACCENT[link.role];
          return (
            <Link
              key={link.href}
              href={link.href}
              className="group relative flex flex-col gap-1 overflow-hidden rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface)] p-3 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-full w-1 opacity-0 transition-opacity group-hover:opacity-100"
                style={{ backgroundColor: accent }}
              />
              <p
                className="text-[10px] font-bold uppercase tracking-[0.08em]"
                style={{ color: accent }}
              >
                {meta.label} view
              </p>
              <p className="text-sm font-semibold tracking-tight text-[var(--color-foreground)]">
                {link.title}
              </p>
              <span
                className="mt-1 inline-flex items-center gap-1 text-xs font-semibold"
                style={{ color: accent }}
              >
                Read
                <ArrowRight className="size-3" aria-hidden="true" />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
