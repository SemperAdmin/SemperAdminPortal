import Link from "next/link";
import { Search, Home, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60dvh] max-w-2xl flex-col items-center justify-center px-4 text-center">
      <p className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--color-usmc-scarlet)]">
        <span aria-hidden="true" className="h-0.5 w-5 bg-[var(--color-usmc-scarlet)]" />
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
