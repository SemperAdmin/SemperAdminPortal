"use client";

import * as React from "react";
import Link from "next/link";
import { ShieldAlert, RotateCcw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Global error boundary for the App Router.
 * Catches unhandled exceptions and renders a recoverable surface.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // Log to console for now. Phase 9 wires telemetry.
    console.error("AppShell error boundary caught:", error);
  }, [error]);

  return (
    <main className="mx-auto flex min-h-[60dvh] max-w-2xl flex-col items-center justify-center px-4 text-center">
      <div
        className="mb-4 grid size-14 place-items-center rounded-full bg-[color-mix(in_srgb,var(--color-status-stale)_14%,transparent)] text-[var(--color-status-stale)]"
        aria-hidden="true"
      >
        <ShieldAlert className="size-7" />
      </div>
      <p className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--color-status-stale)]">
        <span aria-hidden="true" className="h-0.5 w-5 bg-[var(--color-status-stale)]" />
        Unrecoverable render error
      </p>
      <h1
        className="font-display text-5xl tracking-wide leading-tight"
        style={{ fontFamily: "var(--font-display)" }}
      >
        SOMETHING <span className="gradient-accent">BROKE</span>
      </h1>
      <p className="mt-4 max-w-prose text-md text-[var(--color-muted-foreground)]">
        A render-time error happened on this route. The portal is still good. Try
        again, head home, or open a new search.
      </p>
      {error.digest && (
        <p className="mt-2 font-mono text-xs text-[var(--color-subtle-foreground)]">
          Error ID: {error.digest}
        </p>
      )}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <Button onClick={reset} variant="primary" size="lg">
          <RotateCcw className="size-4" aria-hidden="true" />
          Try again
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/">
            <Home className="size-4" aria-hidden="true" />
            Home
          </Link>
        </Button>
      </div>
    </main>
  );
}
