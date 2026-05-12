"use client";

import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ClipboardList, Calculator, FileText, ExternalLink } from "lucide-react";
import { LastVerified } from "@/components/domain/last-verified";
import { SourceCitation } from "@/components/domain/source-citation";
import { RoleChip } from "@/components/domain/role-chip";
import { RoleFilterBar } from "@/components/domain/role-filter-bar";
import { useRoleStore } from "@/lib/store/role-store";
import { useMounted } from "@/hooks/use-mounted";
import type { Role } from "@/lib/roles";

interface ReferenceData {
  slug: string;
  title: string;
  summary: string;
  roles: Role[];
  type: "form" | "calculator" | "checklist";
  link?: string;
  lastVerified: string;
  source: { title: string; publisher?: string; url?: string };
}

const ICONS = {
  form: FileText,
  calculator: Calculator,
  checklist: ClipboardList,
} as const;

export default function ReferencesIndex() {
  const role = useRoleStore((s) => s.role);
  const mounted = useMounted();
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const data = require("@/generated/references.json") as ReferenceData[];
  const items = mounted && role ? data.filter((v) => v.roles.includes(role)) : data;
  return (
    <div>
      <header className="mb-6">
        <h1 className="text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          References
        </h1>
        <p className="text-[var(--color-muted-foreground)]">
          Forms, calculators, and checklists.
        </p>
      </header>
      <RoleFilterBar />
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {items.map((r) => {
          const Icon = ICONS[r.type];
          const linkOut = r.link;
          return (
            <Card key={r.slug}>
              <CardHeader>
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="secondary"><Icon className="size-3.5" /><span className="ml-1 capitalize">{r.type}</span></Badge>
                  <LastVerified date={r.lastVerified} />
                </div>
                <CardTitle className="text-lg">{r.title}</CardTitle>
                <CardDescription>{r.summary}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {r.roles.map((role) => <RoleChip key={role} role={role} size="sm" />)}
                </div>
                {linkOut && (
                  <Link href={linkOut} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)] underline-offset-2 hover:underline">
                    <ExternalLink className="size-3.5" /> Open form
                  </Link>
                )}
              </CardContent>
              <CardFooter>
                <SourceCitation title={r.source.title} publisher={r.source.publisher} url={r.source.url} />
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
