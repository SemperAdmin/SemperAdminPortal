"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Home, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Raw URL for window.location and the meta refresh, which bypass the
 * router. next/link prepends basePath on its own, so Link hrefs below stay
 * root-relative. Feeding PORTAL_ROOT to Link doubled the prefix.
 */
const PORTAL_ROOT = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/`;

/**
 * Hybrid not-found / root redirect.
 *
 * Bare root (e.g. `localhost:3000` in dev, outside the configured basePath)
 * auto-redirects to the portal home so users always land on the overview.
 * Real unmatched routes inside the portal render the branded 404.
 */
export default function NotFound() {
  const pathname = usePathname() ?? "/";
  const atBareRoot = pathname === "/" || pathname === "";

  // Redirect bare root to the portal home.
  React.useEffect(() => {
    if (atBareRoot && typeof window !== "undefined") {
      window.location.replace(PORTAL_ROOT);
    }
  }, [atBareRoot]);

  if (atBareRoot) return <Redirecting />;
  return <FourOhFour />;
}

function Redirecting() {
  return (
    <>
      {/* Meta-refresh fallback for clients with JS disabled. */}
      <noscript>
        <meta httpEquiv="refresh" content={`0; url=${PORTAL_ROOT}`} />
      </noscript>
      <main
        id="main"
        className="mx-auto flex min-h-[60dvh] max-w-md flex-col items-center justify-center px-4 text-center"
      >
        <p
          className="font-display text-3xl tracking-wide"
          style={{ fontFamily: "var(--font-display)" }}
        >
          LOADING <span className="gradient-accent">SEMPER ADMIN</span>
        </p>
        <p className="mt-3 text-sm text-[var(--color-muted-foreground)]">
          Taking you to the portal home.
        </p>
        <noscript>
          <p className="mt-4 text-sm">
            <a
              href={PORTAL_ROOT}
              className="font-semibold text-[var(--color-usmc-scarlet)] underline-offset-2 hover:underline"
            >
              Continue manually
            </a>
          </p>
        </noscript>
      </main>
    </>
  );
}

function FourOhFour() {
  return (
    <main
      id="main"
      data-not-found=""
      className="mx-auto flex min-h-[60dvh] max-w-2xl flex-col items-center justify-center px-4 text-center"
    >
      <p className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--color-usmc-scarlet)]">
        <span
          aria-hidden="true"
          className="h-0.5 w-5 bg-[var(--color-usmc-scarlet)]"
        />
        404
      </p>
      <h1
        className="font-display text-6xl tracking-wide leading-tight"
        style={{ fontFamily: "var(--font-display)" }}
      >
        PAGE NOT <span className="gradient-accent">FOUND</span>
      </h1>
      <p className="mt-4 max-w-prose text-md text-[var(--color-muted-foreground)]">
        The page you tried to reach does not exist on this build, has been moved,
        or has not been authored yet. Pick a path below to recover.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <Button asChild variant="primary" size="lg">
          <Link href="/">
            <Home className="size-4" aria-hidden="true" />
            Home
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/search">
            <Search className="size-4" aria-hidden="true" />
            Search
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/citations">
            <Compass className="size-4" aria-hidden="true" />
            Citations index
          </Link>
        </Button>
      </div>
    </main>
  );
}
