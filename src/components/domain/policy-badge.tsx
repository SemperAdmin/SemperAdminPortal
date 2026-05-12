import * as React from "react";
import { FileText } from "lucide-react";
import { cn } from "@/lib/utils";

export type PolicyKind = "MARADMIN" | "MCO" | "ALMAR" | "NAVMC" | "DODI";

export interface PolicyBadgeProps {
  kind: PolicyKind;
  number: string;
  href?: string;
  className?: string;
  /** Show the leading file icon. Default true. */
  icon?: boolean;
}

/**
 * PolicyBadge - v1.2.
 * Mono font, tighter padding, color-mix tints for theme parity.
 * Color encodes policy kind: MCO/marine-blue, MARADMIN/scarlet, ALMAR/admin-green, NAVMC/neutral, DODI/neutral.
 */
const KIND_COLOR_VAR: Record<PolicyKind, string> = {
  MARADMIN: "var(--color-usmc-scarlet)",
  MCO: "var(--color-marine-blue)",
  ALMAR: "var(--color-role-admin)",
  NAVMC: "var(--color-neutral-600)",
  DODI: "var(--color-neutral-500)",
};

export function PolicyBadge({
  kind,
  number,
  href,
  className,
  icon = true,
}: PolicyBadgeProps) {
  const color = KIND_COLOR_VAR[kind];
  const Comp = href ? "a" : "span";
  const compProps = href ? { href, rel: "noopener" } : {};
  return (
    <Comp
      className={cn(
        "inline-flex h-6 items-center gap-1.5 rounded-[var(--radius-xs)] border px-1.5 font-mono text-[11px] font-bold leading-none tracking-wide transition-colors",
        href && "underline-offset-2 hover:underline",
        className
      )}
      style={{
        backgroundColor: `color-mix(in srgb, ${color} 10%, transparent)`,
        color,
        borderColor: `color-mix(in srgb, ${color} 28%, transparent)`,
      }}
      aria-label={`${kind} ${number}`}
      {...compProps}
    >
      {icon && <FileText className="size-3" aria-hidden="true" />}
      <span>{kind}</span>
      <span className="opacity-70">{number}</span>
    </Comp>
  );
}
