"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Play, Clock } from "lucide-react";
import { RoleChip } from "@/components/domain/role-chip";
import { LastVerified } from "@/components/domain/last-verified";
import { RoleFilterBar } from "@/components/domain/role-filter-bar";
import { useRoleStore } from "@/lib/store/role-store";
import { useMounted } from "@/hooks/use-mounted";
import type { Role } from "@/lib/roles";

interface VideoData {
  slug: string;
  title: string;
  summary: string;
  roles: Role[];
  durationSeconds: number;
  lastVerified: string;
  source: { title: string; publisher?: string; url?: string };
}

function fmt(s: number) {
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${r.toString().padStart(2, "0")}`;
}

export default function VideosIndex() {
  const role = useRoleStore((s) => s.role);
  const mounted = useMounted();
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const data = require("@/generated/videos.json") as VideoData[];
  const items = mounted && role ? data.filter((v) => v.roles.includes(role)) : data;
  return (
    <div>
      <header className="mb-6">
        <h1 className="text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          Videos
        </h1>
        <p className="text-[var(--color-muted-foreground)]">
          Walkthroughs with chapters and transcripts. Click into any title for the full player.
        </p>
      </header>
      <RoleFilterBar />
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {items.map((v) => (
          <Card key={v.slug}>
            <CardHeader>
              <div className="flex items-center justify-between gap-2">
                <Badge variant="muted">
                  <Clock className="size-3.5" />
                  <span className="ml-1">{fmt(v.durationSeconds)}</span>
                </Badge>
                <LastVerified date={v.lastVerified} />
              </div>
              <CardTitle className="text-lg">
                <Link href={`/videos/${v.slug}`} className="underline-offset-2 hover:underline">
                  {v.title}
                </Link>
              </CardTitle>
              <CardDescription>{v.summary}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1.5">
                {v.roles.map((r) => <RoleChip key={r} role={r} size="sm" />)}
              </div>
            </CardContent>
            <CardFooter>
              <Link href={`/videos/${v.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)] underline-offset-2 hover:underline">
                <Play className="size-3.5" /> Watch
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
