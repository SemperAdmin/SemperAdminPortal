"use client";

import * as React from "react";
import Link from "next/link";
import { Info, X } from "lucide-react";

/**
 * DisclaimerBanner.
 *
 * Thin status strip pinned to the top of every route. States the
 * Proof-of-Concept posture so a casual reader cannot mistake portal
 * content for authoritative USMC guidance.
 *
 * Dismissible per tab via sessionStorage. Re-appears on a new tab or
 * window, which preserves the policy hygiene goal while reducing
 * chrome friction for the same reader across a session.
 *
 * Uses useSyncExternalStore for the dismiss state. That hook is the
 * React 19 idiom for external state and avoids the
 * react-hooks/set-state-in-effect warning that simpler patterns trigger.
 *
 * Tokens used:
 *   --color-usmc-scarlet for the left accent border and link underline
 *   --color-bg-sunken for the strip background
 *   --color-muted-foreground for the body copy
 *   --color-foreground for the link and emphasis word
 *   --color-border for the bottom rule
 *   --color-bg-elev for the dismiss button hover state
 */

const DISMISS_KEY = "sap.disclaimer.dismissed";

function subscribe(callback: () => void): () => void {
  // The native storage event only fires cross-tab. The dismiss handler below
  // also dispatches a synthetic storage event for same-tab updates.
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot(): boolean {
  try {
    return sessionStorage.getItem(DISMISS_KEY) === "1";
  } catch {
    return false;
  }
}

function getServerSnapshot(): boolean {
  // Always render the banner on the server pass. Client may immediately
  // hide it post-hydration if sessionStorage says dismissed. A brief
  // server-to-client swap is acceptable for a non-interactive disclaimer.
  return false;
}

export function DisclaimerBanner() {
  const dismissed = React.useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  if (dismissed) return null;

  const dismiss = () => {
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
      // Synthetic storage event so useSyncExternalStore re-reads in this tab.
      window.dispatchEvent(new StorageEvent("storage", { key: DISMISS_KEY }));
    } catch {
      // sessionStorage unavailable in some embedded contexts. The banner
      // simply stays visible, which is the safer failure mode.
    }
  };

  return (
    <div
      role="status"
      aria-label="Proof of concept disclaimer"
      className="relative w-full border-b border-[var(--color-border)] bg-[var(--color-bg-sunken)]"
    >
      <div className="absolute inset-y-0 left-0 w-[3px] bg-[var(--color-usmc-scarlet)]" />
      <div className="mx-auto flex max-w-screen-2xl items-center gap-2 px-3 py-1.5 text-[11px] leading-tight sm:px-4 sm:text-xs">
        <Info
          aria-hidden="true"
          className="size-3.5 shrink-0 text-[var(--color-usmc-scarlet)]"
        />
        <p className="min-w-0 flex-1 text-[var(--color-muted-foreground)]">
          <span className="font-semibold uppercase tracking-wide text-[var(--color-foreground)]">
            Proof of Concept.
          </span>{" "}
          Not official USMC content, not authoritative for pay, records, or
          leave decisions. Sourced from public MCO and MARADMIN material.{" "}
          <Link
            href="/about"
            className="whitespace-nowrap font-medium text-[var(--color-foreground)] underline decoration-[var(--color-usmc-scarlet)] decoration-2 underline-offset-2 hover:text-[var(--color-usmc-scarlet)]"
          >
            Read full disclaimer
          </Link>
          .
        </p>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss disclaimer for this tab"
          className="shrink-0 rounded p-1 text-[var(--color-muted-foreground)] transition-colors hover:bg-[var(--color-bg-elev)] hover:text-[var(--color-foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-usmc-scarlet)]"
        >
          <X aria-hidden="true" className="size-3.5" />
        </button>
      </div>
    </div>
  );
}
