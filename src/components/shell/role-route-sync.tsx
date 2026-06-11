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
 * RoleRouteSync - infers a role from the URL only when no role is set.
 *
 * Covers the deep-link first visit: landing on /marines/... without a stored
 * role sets the marine role and suppresses the role picker dialog. A user
 * with a chosen role keeps it while reading another role's pages. Explicit
 * switching happens through the RoleSwitcher segmented control only.
 */
export function RoleRouteSync() {
  const pathname = usePathname();
  const role = useRoleStore((s) => s.role);
  const setRole = useRoleStore((s) => s.setRole);

  React.useEffect(() => {
    if (!pathname) return;
    if (role !== null) return;
    const firstSegment = pathname.split("/").filter(Boolean)[0];
    const mapped = firstSegment ? PATH_ROLE_MAP[firstSegment] : undefined;
    if (mapped) setRole(mapped);
  }, [pathname, role, setRole]);

  return null;
}
