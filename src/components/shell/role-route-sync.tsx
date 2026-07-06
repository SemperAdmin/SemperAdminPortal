"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { useRoleStore } from "@/lib/store/role-store";
import { type Role } from "@/lib/roles";

const PATH_ROLE_MAP: Record<string, Role> = {
  marines: "marine",
  leader: "leader",
  commander: "commander",
  admin: "admin",
};

/**
 * RoleRouteSync - infers the active role from role-scoped URLs.
 *
 * Keeps the topbar role switcher aligned with direct navigation, deep links,
 * and home-page role cards. Role switching still persists through the shared
 * role store so the sidebar, search boosts, and dialog all read one source of
 * truth.
 */
export function RoleRouteSync() {
  const pathname = usePathname();
  const role = useRoleStore((s) => s.role);
  const setRole = useRoleStore((s) => s.setRole);

  React.useEffect(() => {
    if (!pathname) return;
    const firstSegment = pathname.split("/").filter(Boolean)[0];
    const mapped = firstSegment ? PATH_ROLE_MAP[firstSegment] : undefined;
    if (mapped && mapped !== role) setRole(mapped);
  }, [pathname, role, setRole]);

  return null;
}
