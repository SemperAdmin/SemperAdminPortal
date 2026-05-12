import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { LastVerified } from "./last-verified";
import { PolicyBadge, type PolicyKind } from "./policy-badge";
import { SourceCitation } from "./source-citation";
import { RoleChip } from "./role-chip";
import type { Role } from "@/lib/roles";

export interface ContentCardProps {
  href: string;
  title: string;
  summary: string;
  roles: Role[];
  lastVerified: string;
  source: { title: string; publisher?: string; url?: string };
  policyBadge?: { kind: PolicyKind; number: string };
  topRight?: React.ReactNode;
}

export function ContentCard({
  href,
  title,
  summary,
  roles,
  lastVerified,
  source,
  policyBadge,
  topRight,
}: ContentCardProps) {
  return (
    <Card className="flex h-full flex-col transition-shadow hover:shadow-[var(--shadow-card-strong)]">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            {policyBadge && (
              <PolicyBadge kind={policyBadge.kind} number={policyBadge.number} />
            )}
            {topRight}
          </div>
          <LastVerified date={lastVerified} />
        </div>
        <CardTitle className="mt-2 text-lg">
          <Link
            href={href}
            className="inline-flex items-start gap-1 underline-offset-2 hover:underline"
          >
            {title}
            <ArrowUpRight className="size-4 shrink-0 opacity-70" aria-hidden="true" />
          </Link>
        </CardTitle>
        <CardDescription>{summary}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex flex-wrap gap-1.5">
          {roles.map((r) => (
            <RoleChip key={r} role={r} size="sm" />
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <SourceCitation
          title={source.title}
          publisher={source.publisher}
          url={source.url}
        />
      </CardFooter>
    </Card>
  );
}
