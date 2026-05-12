"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

/**
 * Simplified PFT calculator. Real scoring tables vary by age and gender.
 * Phase 9 ships rough mid-bracket linear scoring as a starter.
 */
function score(events: { pullups: number; crunches: number; runMinutes: number; runSeconds: number }) {
  const pullPts = Math.max(0, Math.min(100, events.pullups * 5));
  const crunchPts = Math.max(0, Math.min(100, Math.round(events.crunches * 1.0)));
  const runTimeSec = events.runMinutes * 60 + events.runSeconds;
  // Linear scaling: 18:00 = 100 pts, 27:40 = 60 pts (3-mile run rough male 17-26)
  const runPts =
    runTimeSec <= 18 * 60 ? 100 : runTimeSec >= 27 * 60 + 40 ? 60 : Math.round(100 - ((runTimeSec - 18 * 60) / ((27 * 60 + 40) - 18 * 60)) * 40);
  return { pullPts, crunchPts, runPts, total: pullPts + crunchPts + runPts };
}

export default function PftScorePage() {
  const [pullups, setPullups] = React.useState(0);
  const [crunches, setCrunches] = React.useState(0);
  const [runM, setRunM] = React.useState(22);
  const [runS, setRunS] = React.useState(0);
  const s = score({ pullups, crunches, runMinutes: runM, runSeconds: runS });
  const cls =
    s.total >= 270 ? "1st class" : s.total >= 225 ? "2nd class" : s.total >= 200 ? "3rd class" : "Below standard";
  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
        PFT score calculator
      </h1>
      <p className="mt-1 text-[var(--color-muted-foreground)]">
        Quick estimate. Phase 10 swaps in the full age and gender tables.
      </p>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Inputs</CardTitle>
          <CardDescription>All three events.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3 sm:grid-cols-2">
          <label className="text-sm">
            <span className="mb-1 block font-semibold">Pull-ups</span>
            <input
              type="number"
              min={0}
              max={30}
              value={pullups}
              onChange={(e) => setPullups(Number(e.target.value))}
              className="h-10 w-full rounded-[var(--radius-button)] border border-[var(--color-border)] bg-[var(--color-background)] px-2"
            />
          </label>
          <label className="text-sm">
            <span className="mb-1 block font-semibold">Crunches</span>
            <input
              type="number"
              min={0}
              max={120}
              value={crunches}
              onChange={(e) => setCrunches(Number(e.target.value))}
              className="h-10 w-full rounded-[var(--radius-button)] border border-[var(--color-border)] bg-[var(--color-background)] px-2"
            />
          </label>
          <label className="text-sm">
            <span className="mb-1 block font-semibold">Run minutes</span>
            <input
              type="number"
              min={15}
              max={40}
              value={runM}
              onChange={(e) => setRunM(Number(e.target.value))}
              className="h-10 w-full rounded-[var(--radius-button)] border border-[var(--color-border)] bg-[var(--color-background)] px-2"
            />
          </label>
          <label className="text-sm">
            <span className="mb-1 block font-semibold">Run seconds</span>
            <input
              type="number"
              min={0}
              max={59}
              value={runS}
              onChange={(e) => setRunS(Number(e.target.value))}
              className="h-10 w-full rounded-[var(--radius-button)] border border-[var(--color-border)] bg-[var(--color-background)] px-2"
            />
          </label>
        </CardContent>
      </Card>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Score</CardTitle>
          <CardDescription>Class: {cls}</CardDescription>
        </CardHeader>
        <CardContent>
          <dl className="grid grid-cols-3 gap-3 text-center">
            <div>
              <dt className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-muted-foreground)]">Pull-ups</dt>
              <dd className="text-3xl font-bold" style={{ fontFamily: "var(--font-display)" }}>{s.pullPts}</dd>
            </div>
            <div>
              <dt className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-muted-foreground)]">Crunches</dt>
              <dd className="text-3xl font-bold" style={{ fontFamily: "var(--font-display)" }}>{s.crunchPts}</dd>
            </div>
            <div>
              <dt className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-muted-foreground)]">Run</dt>
              <dd className="text-3xl font-bold" style={{ fontFamily: "var(--font-display)" }}>{s.runPts}</dd>
            </div>
          </dl>
          <div className="mt-4 rounded-[var(--radius-card)] border border-[var(--color-primary)] bg-[var(--color-primary)]/10 p-4 text-center">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-muted-foreground)]">Total</p>
            <p className="text-5xl font-bold text-[var(--color-primary)]" style={{ fontFamily: "var(--font-display)" }}>
              {s.total}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
