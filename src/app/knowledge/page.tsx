"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RoleChip } from "@/components/domain/role-chip";
import { LastVerified } from "@/components/domain/last-verified";
import { SourceCitation } from "@/components/domain/source-citation";
import { RoleFilterBar } from "@/components/domain/role-filter-bar";
import { useRoleStore } from "@/lib/store/role-store";
import { useMounted } from "@/hooks/use-mounted";
import type { Role } from "@/lib/roles";

interface SnippetData {
  slug: string;
  title: string;
  summary: string;
  roles: Role[];
  topic: string;
  bullets: string[];
  lastVerified: string;
  source: { title: string; publisher?: string; url?: string };
}

export default function KnowledgePage() {
  // Snippets passed via the layout pattern would be ideal, but the App Router
  // does not pass props to client components directly. We import a JSON catalog instead.
  return (
    <div>
      <header className="mb-6">
        <h1 className="text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          Knowledge hub
        </h1>
        <p className="text-[var(--color-muted-foreground)]">
          Three-bullet summaries by topic. Filter by your role.
        </p>
      </header>
      <KnowledgeBody />
    </div>
  );
}

function KnowledgeBody() {
  const role = useRoleStore((s) => s.role);
  const mounted = useMounted();
  // Static import via JSON shipped at build (see Phase 4 loader bridge).
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const data = require("@/generated/snippets.json") as SnippetData[];
  const filtered = mounted && role ? data.filter((s) => s.roles.includes(role)) : data;
  const byTopic = new Map<string, SnippetData[]>();
  for (const s of filtered) {
    const list = byTopic.get(s.topic) ?? [];
    list.push(s);
    byTopic.set(s.topic, list);
  }
  return (
    <>
      <RoleFilterBar />
      {filtered.length === 0 ? (
        <p className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-muted)]/40 p-6 text-sm">
          No snippets match this role yet.
        </p>
      ) : (
        Array.from(byTopic.entries()).map(([topic, list]) => (
          <section key={topic} className="mb-8">
            <h2 className="mb-3 text-xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              {topic}
            </h2>
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {list.map((s) => (
                <Card key={s.slug}>
                  <CardHeader>
                    <div className="flex items-center justify-between gap-2">
                      <Badge variant="muted">{s.topic}</Badge>
                      <LastVerified date={s.lastVerified} />
                    </div>
                    <CardTitle className="text-lg">{s.title}</CardTitle>
                    <CardDescription>{s.summary}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc space-y-1 pl-5 text-sm">
                      {s.bullets.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {s.roles.map((r) => <RoleChip key={r} role={r} size="sm" />)}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <SourceCitation title={s.source.title} publisher={s.source.publisher} url={s.source.url} />
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        ))
      )}
    </>
  );
}
