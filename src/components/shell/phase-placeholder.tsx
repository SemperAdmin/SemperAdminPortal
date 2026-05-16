import Link from "next/link";
import { Construction, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pill } from "@/components/ui/pill";

export interface PhasePlaceholderProps {
  title: string;
  phase: number;
  summary: string;
  bullets: string[];
}

export function PhasePlaceholder({
  title,
  phase,
  summary,
  bullets,
}: PhasePlaceholderProps) {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-6 flex items-center gap-3">
        <Pill variant="neutral">Phase {phase}</Pill>
        <span className="text-xs text-[var(--color-muted-foreground)]">
          Coming online as the phase ships.
        </span>
      </div>
      <h1
        className="text-4xl font-bold tracking-tight"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h1>
      <p className="mt-2 text-[var(--color-muted-foreground)]">{summary}</p>
      <Card className="mt-6">
        <CardContent className="space-y-3 p-6">
          <div className="flex items-center gap-2">
            <Construction
              className="size-4 text-[var(--color-status-aging)]"
              aria-hidden="true"
            />
            <p className="text-sm font-semibold">What this surface ships</p>
          </div>
          <ul className="list-disc space-y-1.5 pl-5 text-sm">
            {bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 pt-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="/styleguide">
                <Sparkles className="size-4" />
                Style guide
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">Home</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
