import * as React from "react";
import { Shield, Star, Award, ClipboardList, type LucideIcon } from "lucide-react";
import { Pill, type PillProps } from "@/components/ui/pill";
import { ROLE_META, type Role } from "@/lib/roles";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<RoleIconName, LucideIcon> = {
  Shield,
  Star,
  Award,
  ClipboardList,
};

type RoleIconName = "Shield" | "Star" | "Award" | "ClipboardList";

const ROLE_TO_VARIANT: Record<Role, NonNullable<PillProps["variant"]>> = {
  marine: "marine",
  leader: "leader",
  commander: "commander",
  admin: "admin",
};

export interface RoleChipProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, "children"> {
  role: Role;
  size?: PillProps["size"];
  selected?: boolean;
  /** Show icon. Default true. */
  icon?: boolean;
}

/**
 * RoleChip - v1.2.
 * Wraps Pill with role-specific variant and icon.
 * Selected state adds ring outline.
 */
export function RoleChip({
  role,
  size = "sm",
  selected = false,
  icon = true,
  className,
  ...props
}: RoleChipProps) {
  const meta = ROLE_META[role];
  const Icon = ICON_MAP[meta.iconName];
  return (
    <Pill
      variant={ROLE_TO_VARIANT[role]}
      size={size}
      data-role={role}
      data-selected={selected ? "true" : "false"}
      aria-label={`Role: ${meta.label}`}
      className={cn(
        selected && "ring-2 ring-offset-2 ring-offset-[var(--color-background)] ring-current",
        className
      )}
      {...props}
    >
      {icon && Icon && <Icon className="size-3" aria-hidden="true" />}
      {meta.label}
    </Pill>
  );
}
