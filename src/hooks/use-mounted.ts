"use client";

import * as React from "react";

/**
 * SSR-safe mounted flag. Use to gate client-only rendering and avoid hydration mismatches.
 */
export function useMounted() {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return mounted;
}
