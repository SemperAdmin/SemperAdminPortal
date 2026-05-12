/**
 * Canonical role registry for content tagging and filtering.
 * Phase 5 hooks the persisted role state through Zustand.
 */
export const ROLES = ["marine", "leader", "commander", "admin"] as const;

export type Role = (typeof ROLES)[number];

export interface RoleMeta {
  id: Role;
  label: string;
  description: string;
  cssVar: string;
  iconName: "Shield" | "Star" | "Award" | "ClipboardList";
}

export const ROLE_META: Record<Role, RoleMeta> = {
  marine: {
    id: "marine",
    label: "Marine",
    description: "Junior enlisted. Quick policy, pay, leave, admin facts.",
    cssVar: "var(--color-role-marine)",
    iconName: "Shield",
  },
  leader: {
    id: "leader",
    label: "Leader",
    description: "NCO and SNCO. How-to guides and decision aids.",
    cssVar: "var(--color-role-leader)",
    iconName: "Star",
  },
  commander: {
    id: "commander",
    label: "Commander",
    description: "Officer. Policy summaries, signing authorities, discipline.",
    cssVar: "var(--color-role-commander)",
    iconName: "Award",
  },
  admin: {
    id: "admin",
    label: "Administrator",
    description: "S-1 and admin specialist. Forms, systems, process flows.",
    cssVar: "var(--color-role-admin)",
    iconName: "ClipboardList",
  },
};

export const ROLE_LABEL: Record<Role, string> = Object.fromEntries(
  Object.entries(ROLE_META).map(([k, v]) => [k, v.label])
) as Record<Role, string>;
