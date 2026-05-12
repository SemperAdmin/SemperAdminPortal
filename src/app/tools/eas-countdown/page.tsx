"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calendar, Flag, AlertTriangle } from "lucide-react";

export default function EasCountdownPage() {
  const [date, setDate] = React.useState<string>("");
  const today = new Date();
  const targetDate = date ? new Date(date) : null;
  const days = targetDate
    ? Math.max(0, Math.ceil((targetDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)))
    : null;

  const gates = [
    { label: "TAP curriculum", days: 270 },
    { label: "Capstone review", days: 90 },
    { label: "Final pay audit", days: 30 },
    { label: "DD-214 issue", days: 0 },
  ];

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
        EAS countdown
      </h1>
      <p className="mt-1 text-[var(--color-muted-foreground)]">
        Pick your EAS date. The portal counts down and flags upcoming gates.
      </p>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="size-4" /> Your EAS
          </CardTitle>
          <CardDescription>Stored in this session only.</CardDescription>
        </CardHeader>
        <CardContent>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="h-10 w-full rounded-[var(--radius-button)] border border-[var(--color-border)] bg-[var(--color-background)] px-3"
            aria-label="Pick EAS date"
          />
          {days !== null && (
            <div className="mt-4 rounded-[var(--radius-card)] border border-[var(--color-primary)] bg-[var(--color-primary)]/10 p-4 text-center">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-muted-foreground)]">
                Days remaining
              </p>
              <p className="font-bold text-5xl text-[var(--color-primary)]" style={{ fontFamily: "var(--font-display)" }}>
                {days}
              </p>
            </div>
          )}
          {days !== null && (
            <ul className="mt-4 space-y-2">
              {gates.map((g) => {
                const reached = days <= g.days;
                return (
                  <li
                    key={g.label}
                    className="flex items-center justify-between gap-2 rounded-[var(--radius-button)] border border-[var(--color-border)] p-3 text-sm"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Flag className="size-4 opacity-70" />
                      {g.label}
                    </span>
                    <span
                      className={
                        reached
                          ? "text-[var(--color-status-stale)] font-semibold"
                          : "text-[var(--color-muted-foreground)]"
                      }
                    >
                      {reached ? (
                        <span className="inline-flex items-center gap-1">
                          <AlertTriangle className="size-3.5" />
                          Inside window
                        </span>
                      ) : (
                        `at ${g.days} days out`
                      )}
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
