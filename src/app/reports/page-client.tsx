"use client";

import * as React from "react";
import {
  FileText,
  ExternalLink,
  Users,
  Award,
  GraduationCap,
  FileCheck,
  DollarSign,
  ClipboardCheck,
  ArrowLeftRight,
  Wrench,
  LayoutDashboard,
  PlayCircle,
  AlertTriangle,
} from "lucide-react";
import { PageHeader } from "@/components/domain/page-header";
import { MetaRow } from "@/components/domain/meta-row";
import { StatusPill } from "@/components/ui/status-pill";
import { RoleChip } from "@/components/domain/role-chip";
import { useRoleStore } from "@/lib/store/role-store";
import { useMounted } from "@/hooks/use-mounted";
import type { Role } from "@/lib/roles";
import {
  REPORT_CATEGORIES,
  type ReportCategory,
  type ReportCadence,
  type ReportAudience,
  type ReportEntryType,
  type ReportDevStatus,
} from "@/lib/content/schemas";
import { cn } from "@/lib/utils";
import { classifyFreshness } from "@/lib/verification";

interface ReportData {
  slug: string;
  title: string;
  summary: string;
  roles: Role[];
  lastVerified: string;
  entryType?: ReportEntryType;
  category?: ReportCategory;
  cadence?: ReportCadence;
  audience?: ReportAudience;
  devStatus?: ReportDevStatus;
  externalUrl?: string;
  videoUrl?: string;
  mceleUrl?: string;
  durationSeconds?: number;
  relatedReports?: string[];
  // Legacy fields. Tolerated for old entries.
  reportType?: string;
  url?: string;
}


const CATEGORY_META: Record<
  ReportCategory,
  { label: string; description: string; icon: React.ComponentType<{ className?: string }> }
> = {
  manpower: {
    label: "Manpower Management",
    description: "Track who is on rolls, in billets, inbound, outbound, separating.",
    icon: Users,
  },
  promotions: {
    label: "Promotions",
    description: "JEPES, select grade, non-recommended, passed for promotion.",
    icon: Award,
  },
  training: {
    label: "Training and PME",
    description: "CPTR, PME completion, weapons quals, training failures.",
    icon: GraduationCap,
  },
  "ompf-verification": {
    label: "OMPF Verification",
    description: "Monthly OMPF audit reports for S-1. Run the 1st of every month.",
    icon: FileCheck,
  },
  entitlements: {
    label: "Entitlements and Pay",
    description: "BAH, BNA, COLA-related entitlements, SBP, MGIB, MBR-to-MBR, pay errors.",
    icon: DollarSign,
  },
  "records-audits": {
    label: "Records Audits",
    description: "Compliance audits for OMPF and admin records. Most run weekly on Mondays.",
    icon: ClipboardCheck,
  },
  ttc: {
    label: "TTC and Transactions",
    description: "Transaction review, certifier stats, TTC errors and lookups.",
    icon: ArrowLeftRight,
  },
  tools: {
    label: "Tools",
    description: "Builders and utilities supporting the report catalog.",
    icon: Wrench,
  },
};

const CADENCE_LABEL: Record<ReportCadence, string> = {
  "non-routine": "Non-routine",
  mondays: "Mondays",
  "1st-of-month": "1st of month",
  "15th-of-month": "15th of month",
  "u-and-e": "U&E",
};

const AUDIENCE_LABEL: Record<ReportAudience, string> = {
  enterprise: "Enterprise",
  unit: "Unit",
  both: "Both",
};

function getResolvedUrl(r: ReportData): string | undefined {
  return r.externalUrl ?? r.videoUrl ?? r.mceleUrl ?? r.url;
}

function isExternal(url: string | undefined): boolean {
  return !!url && url.startsWith("http");
}

function Pill({
  label,
  tone = "default",
}: {
  label: string;
  tone?: "default" | "accent" | "muted";
}) {
  const toneStyles: Record<typeof tone, string> = {
    default:
      "border-[var(--color-border-strong)] text-[var(--color-muted-foreground)]",
    accent: "border-[var(--color-usmc-scarlet)] text-[var(--color-usmc-scarlet)]",
    muted: "border-[var(--color-border)] text-[var(--color-muted-foreground)]",
  } as const;
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[var(--radius-xs)] border px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wide",
        toneStyles[tone]
      )}
    >
      {label}
    </span>
  );
}

function ReportCard({ r }: { r: ReportData }) {
  const url = getResolvedUrl(r);
  const external = isExternal(url);
  const status = classifyFreshness(r.lastVerified);
  const inDev = r.devStatus === "in-development";

  return (
    <a
      href={url || "#"}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "group relative flex flex-col gap-3 overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-card)] p-5 transition-all",
        !url && "cursor-default",
        url &&
          "hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-md)]"
      )}
    >
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-1 opacity-0 transition-opacity group-hover:opacity-100"
        style={{ backgroundColor: "var(--color-usmc-scarlet)" }}
      />
      <div className="flex items-center justify-between gap-2">
        <div
          className="grid size-9 place-items-center rounded-[var(--radius-sm)]"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--color-usmc-scarlet) 12%, transparent)",
            color: "var(--color-usmc-scarlet)",
          }}
        >
          <FileText className="size-4" aria-hidden="true" />
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          {r.audience && (
            <Pill label={AUDIENCE_LABEL[r.audience]} tone="accent" />
          )}
          {r.cadence && r.cadence !== "non-routine" && (
            <Pill label={CADENCE_LABEL[r.cadence]} />
          )}
          {inDev ? (
            <StatusPill status="aging" label="In dev" size="xs" />
          ) : (
            <StatusPill
              status={status}
              label={
                status === "fresh" ? "Verified" : status === "aging" ? "Aging" : "Stale"
              }
              size="xs"
            />
          )}
        </div>
      </div>
      <div>
        <h3 className="text-base font-bold tracking-tight">{r.title}</h3>
        <p className="mt-1 text-sm leading-snug text-[var(--color-muted-foreground)]">
          {r.summary}
        </p>
      </div>
      <div className="mt-auto flex items-center justify-between border-t border-[var(--color-border)] pt-3">
        <div className="flex flex-wrap gap-1">
          {r.roles.map((role) => (
            <RoleChip key={role} role={role} size="xs" icon={false} />
          ))}
        </div>
        {url && (
          <span
            className="inline-flex items-center gap-1 text-xs font-semibold"
            style={{ color: "var(--color-usmc-scarlet)" }}
          >
            {external ? "Open" : "View"}
            <ExternalLink className="size-3" aria-hidden="true" />
          </span>
        )}
      </div>
    </a>
  );
}

function VideoCard({ r }: { r: ReportData }) {
  const url = getResolvedUrl(r);
  const external = isExternal(url);
  return (
    <a
      href={url || "#"}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-start gap-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-card)] p-5 transition-all hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-md)]"
    >
      <div
        className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-[var(--radius-sm)]"
        style={{
          backgroundColor:
            "color-mix(in srgb, var(--color-usmc-scarlet) 14%, transparent)",
          color: "var(--color-usmc-scarlet)",
        }}
      >
        <PlayCircle className="size-5" aria-hidden="true" />
      </div>
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="rounded-[var(--radius-xs)] border border-[var(--color-border-strong)] px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase text-[var(--color-muted-foreground)]">
            Video
          </span>
          {r.audience && (
            <Pill label={AUDIENCE_LABEL[r.audience]} tone="accent" />
          )}
        </div>
        <h3 className="mt-1 text-base font-bold tracking-tight">{r.title}</h3>
        <p className="mt-0.5 text-sm leading-snug text-[var(--color-muted-foreground)]">
          {r.summary}
        </p>
      </div>
    </a>
  );
}

function PortalCard({ r }: { r: ReportData }) {
  const url = getResolvedUrl(r);
  const external = isExternal(url);
  const inDev = r.devStatus === "in-development";
  return (
    <a
      href={url || "#"}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "group flex flex-col gap-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-card)] p-6 transition-all",
        !url && "cursor-default",
        url &&
          "hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-md)]"
      )}
    >
      <div className="flex items-center justify-between">
        <div
          className="grid size-11 place-items-center rounded-[var(--radius-md)]"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--color-brass) 14%, transparent)",
            color: "var(--color-brass)",
          }}
        >
          <LayoutDashboard className="size-5" aria-hidden="true" />
        </div>
        {inDev && <StatusPill status="aging" label="In development" size="xs" />}
      </div>
      <div>
        <h3 className="text-lg font-bold tracking-tight">{r.title}</h3>
        <p className="mt-1 text-sm leading-snug text-[var(--color-muted-foreground)]">
          {r.summary}
        </p>
      </div>
    </a>
  );
}

export default function ReportsIndex() {
  const role = useRoleStore((s) => s.role);
  const mounted = useMounted();
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const data = require("@/generated/reports.json") as ReportData[];

  const visible = React.useMemo(() => {
    let list = data;
    if (mounted && role) {
      list = list.filter((r) => r.roles.includes(role));
    }
    return list;
  }, [data, mounted, role]);

  const videos = visible.filter((r) => r.entryType === "video");
  const portals = visible.filter((r) => r.entryType === "portal");
  const reports = visible.filter(
    (r) => !r.entryType || r.entryType === "report"
  );

  const reportsByCategory = React.useMemo(() => {
    const grouped: Record<ReportCategory, ReportData[]> = {
      manpower: [],
      promotions: [],
      training: [],
      "ompf-verification": [],
      entitlements: [],
      "records-audits": [],
      ttc: [],
      tools: [],
    };
    for (const r of reports) {
      const cat = (r.category ?? "tools") as ReportCategory;
      if (grouped[cat]) grouped[cat].push(r);
    }
    return grouped;
  }, [reports]);

  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader
        eyebrow="Reference"
        tags={
          <StatusPill
            status="fresh"
            label={`${visible.length} entries`}
          />
        }
        title="REPORTS"
        summary="Authoritative report catalog for S-1 shops and command teams. Function-based grouping with cadence and audience as filters."
      >
        <MetaRow
          items={[
            { label: "Reports", value: reports.length },
            { label: "Portals", value: portals.length },
            { label: "Videos", value: videos.length },
          ]}
        />
      </PageHeader>

      <div
        className="mb-8 flex items-start gap-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-2)] p-4"
        role="note"
      >
        <AlertTriangle
          className="mt-0.5 size-4 shrink-0 text-[var(--color-warning)]"
          aria-hidden="true"
        />
        <p className="text-sm text-[var(--color-foreground)]">
          Log into Reports before opening any link. Confirm your SAAR is current.
        </p>
      </div>

      {videos.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-bold tracking-tight">Access tutorials</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {videos.map((v) => (
              <VideoCard key={v.slug} r={v} />
            ))}
          </div>
        </section>
      )}

      {portals.length > 0 && (
        <section className="mb-14">
          <h2 className="mb-4 text-xl font-bold tracking-tight">Portals</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {portals.map((p) => (
              <PortalCard key={p.slug} r={p} />
            ))}
          </div>
        </section>
      )}

      {REPORT_CATEGORIES.map((cat) => {
        const items = reportsByCategory[cat];
        if (!items || items.length === 0) return null;
        const meta = CATEGORY_META[cat];
        const Icon = meta.icon;
        return (
          <section key={cat} className="mb-14">
            <div className="mb-4 flex items-start gap-3">
              <div
                className="mt-0.5 grid size-9 place-items-center rounded-[var(--radius-sm)]"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--color-usmc-scarlet) 10%, transparent)",
                  color: "var(--color-usmc-scarlet)",
                }}
              >
                <Icon className="size-4" />
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-tight">{meta.label}</h2>
                <p className="text-sm text-[var(--color-muted-foreground)]">
                  {meta.description}
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {items.map((r) => (
                <ReportCard key={r.slug} r={r} />
              ))}
            </div>
          </section>
        );
      })}

      {visible.length === 0 && (
        <div className="rounded-[var(--radius-md)] border border-dashed border-[var(--color-border-strong)] bg-[var(--color-surface-2)] p-8 text-center">
          <p className="text-sm text-[var(--color-muted-foreground)]">
            No reports match your current role.
          </p>
        </div>
      )}
    </div>
  );
}
