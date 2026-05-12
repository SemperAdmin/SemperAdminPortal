"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { useRoleStore } from "@/lib/store/role-store";

/**
 * RecentsTracker - v1.2.
 * Listens to pathname changes and registers each detail-route view as a recent entry.
 * Drops index pages (/, /search, /styleguide) per the store exclude list.
 *
 * Title is read from document.title after Next.js sets metadata.
 */
export function RecentsTracker() {
  const pathname = usePathname();
  const addRecent = useRoleStore((s) => s.addRecent);

  React.useEffect(() => {
    if (!pathname) return;
    // Skip top-level role landings - too noisy. Track deeper detail routes only.
    const segmentCount = pathname.split("/").filter(Boolean).length;
    if (segmentCount < 2) return;

    // Defer one tick so document.title is up-to-date with route metadata.
    const id = window.setTimeout(() => {
      const title = document.title.replace(/\s+\|\s+Semper Admin Portal\s*$/, "").trim();
      if (!title) return;
      addRecent({ href: pathname, title });
    }, 50);

    return () => window.clearTimeout(id);
  }, [pathname, addRecent]);

  return null;
}
