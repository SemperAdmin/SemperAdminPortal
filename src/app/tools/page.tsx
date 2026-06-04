"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  FileText,
  FileDown,
  ClipboardList,
  Activity,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { RoleChip } from "@/components/domain/role-chip";
import { PageHeader } from "@/components/domain/page-header";
import { MetaRow } from "@/components/domain/meta-row";
import { FilterBar, type FilterChip } from "@/components/domain/filter-bar";
import { StatusPill } from "@/components/ui/status-pill";
import { ROLES, ROLE_LABEL, type Role } from "@/lib/roles";
import { cn } from "@/lib/utils";

type OutputType = "pdf" | "docx" | "calculator" | "checklist";
type ToolType = "calculator" | "monitor" | "aggregator" | "generator";

interface InternalTool {
  slug: string;
  title: string;
  summary: string;
  roles: Role[];
  outputType: OutputType;
  routeSlug: string;
  lastVerified: string;
  isExternal: false;
}

interface ExternalTool {
  slug: string;
  title: string;
  summary: string;
  roles: Role[];
  toolType: ToolType;
  externalUrl: string;
  lastVerified: string;
  isExternal: true;
}

type ToolData = InternalTool | ExternalTool;

const OUTPUT_ICON: Record<OutputType, LucideIcon> = {
  pdf: FileText,
  docx: FileDown,
  calculator: Calculator,
  checklist: ClipboardList,
};

const TOOL_ICON: Record<ToolType, LucideIcon> = {
  calculator: Calculator,
  monitor: Activity,
  aggregator: Zap,
  generator: FileText,
};

const OUTPUT_LABEL: Record<OutputType, string> = {
  pdf: "PDF",
  docx: "DOCX",
  calculator: "Calculator",
  checklist: "Checklist",
};

const TOOL_LABEL: Record<ToolType, string> = {
  calculator: "Calculator",
  monitor: "Monitor",
  aggregator: "Aggregator",
  generator: "Generator",
};

const OUTPUT_ACCENT: Record<OutputType, string> = {
  pdf: "var(--color-usmc-scarlet)",
  docx: "var(--color-marine-blue)",
  calculator: "var(--color-status-info)",
  checklist: "var(--color-role-admin)",
};

const TOOL_ACCENT: Record<ToolType, string> = {
  calculator: "var(--color-status-info)",
  monitor: "var(--color-usmc-scarlet)",
  aggregator: "var(--color-leader-brass)",
  generator: "var(--color-marine-blue)",
};

function getIcon(tool: ToolData): LucideIcon {
  return tool.isExternal ? TOOL_ICON[tool.toolType] : OUTPUT_ICON[tool.outputType];
}

function getLabel(tool: ToolData): string {
  return tool.isExternal ? TOOL_LABEL[tool.toolType] : OUTPUT_LABEL[tool.outputType];
}

function getAccent(tool: ToolData): string {
  return tool.isExternal ? TOOL_ACCENT[tool.toolType] : OUTPUT_ACCENT[tool.outputType];
}

function classify(date: string): "fresh" | "aging" | "stale" {
  const months =
    (Date.now() - new Date(date).getTime()) / (1000 * 60 * 60 * 24 * 30);
  if (months >= 24) return "stale";
  if (months >= 12) return "aging";
  return "fresh";
}

export default function ToolsIndex() {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const internalTools = (require("@/generated/tools.json") as InternalTool[]).map((t) => ({ ...t, isExternal: false as const }));
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const externalTools = (require("@/generated/external-tools.json") as ExternalTool[]).map((t) => ({ ...t, isExternal: true as const }));
  const data: ToolData[] = [...internalTools, ...externalTools];

  const [typeFilter, setTypeFilter] = React.useState<string>("all");
  const [roleFilter, setRoleFilter] = React.useState<string>("all");

  // Role filter is opt-in. Default "all" shows every tool regardless of role.
  const roleFiltered = React.useMemo(() => {
    if (roleFilter === "all") return data;
    return data.filter((t) => t.roles.includes(roleFilter as Role));
  }, [data, roleFilter]);

  const visible = React.useMemo(() => {
    let list = roleFiltered;
    if (typeFilter !== "all") {
      list = list.filter((t) => {
        if (t.isExternal) {
          return t.toolType === typeFilter;
        } else {
          return t.outputType === typeFilter;
        }
      });
    }
    return list;
  }, [roleFiltered, typeFilter]);

  const counts: Record<string, number> = {
    all: roleFiltered.length,
    calculator: roleFiltered.filter((t) => (t.isExternal ? t.toolType === "calculator" : t.outputType === "calculator")).length,
    pdf: roleFiltered.filter((t) => !t.isExternal && t.outputType === "pdf").length,
    docx: roleFiltered.filter((t) => !t.isExternal && t.outputType === "docx").length,
    checklist: roleFiltered.filter((t) => !t.isExternal && t.outputType === "checklist").length,
    monitor: roleFiltered.filter((t) => t.isExternal && t.toolType === "monitor").length,
    aggregator: roleFiltered.filter((t) => t.isExternal && t.toolType === "aggregator").length,
    generator: roleFiltered.filter((t) => t.isExternal && t.toolType === "generator").length,
  };

  const roleCounts: Record<string, number> = {
    all: data.length,
    ...Object.fromEntries(
      ROLES.map((r) => [r, data.filter((t) => t.roles.includes(r)).length])
    ),
  };

  const chips: FilterChip[] = [
    { id: "all", label: "All", count: counts.all },
    { id: "calculator", label: "Calculator", count: counts.calculator },
    { id: "generator", label: "Generator", count: counts.generator },
    { id: "aggregator", label: "Aggregator", count: counts.aggregator },
    { id: "monitor", label: "Monitor", count: counts.monitor },
    { id: "pdf", label: "PDF", count: counts.pdf },
    { id: "docx", label: "DOCX", count: counts.docx },
    { id: "checklist", label: "Checklist", count: counts.checklist },
  ];

  const roleChips: FilterChip[] = [
    { id: "all", label: "All roles", count: roleCounts.all },
    ...ROLES.map((r) => ({ id: r, label: ROLE_LABEL[r], count: roleCounts[r] })),
  ];

  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader
        eyebrow="Interactive"
        tags={<StatusPill status="fresh" label={`${counts.all} tools available`} />}
        title="TOOLS"
        summary="Client-side calculators, external cloud.gov apps, and document generators. No data leaves your browser."
      >
        <MetaRow
          items={[
            { label: "Tools", value: counts.all },
            {
              label: "Types",
              value: "Calculator, Generator, Aggregator, Monitor, PDF, DOCX, Checklist",
              mono: false,
            },
          ]}
        />
      </PageHeader>

      <FilterBar
        label="Type"
        chips={chips}
        activeId={typeFilter}
        onChange={setTypeFilter}
      />

      <FilterBar
        label="Role"
        chips={roleChips}
        activeId={roleFilter}
        onChange={setRoleFilter}
      />

      {visible.length === 0 ? (
        <div className="rounded-[var(--radius-md)] border border-dashed border-[var(--color-border-strong)] bg-[var(--color-surface-2)] p-8 text-center">
          <p className="text-sm text-[var(--color-muted-foreground)]">
            No tools match the current filter.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {visible.map((t) => {
            const Icon = getIcon(t);
            const label = getLabel(t);
            const accent = getAccent(t);
            const status = classify(t.lastVerified);
            const commonClasses = cn(
              "group relative flex flex-col gap-3 overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-card)] p-5 transition-all",
              "hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-md)]"
            );
            const commonContent = (
              <>
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-full w-1 opacity-0 transition-opacity group-hover:opacity-100"
                  style={{ backgroundColor: accent }}
                />
                <div className="flex items-center justify-between gap-2">
                  <div
                    className="grid size-9 place-items-center rounded-[var(--radius-sm)]"
                    style={{
                      backgroundColor: `color-mix(in srgb, ${accent} 12%, transparent)`,
                      color: accent,
                    }}
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span
                      className="rounded-[var(--radius-xs)] border px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase"
                      style={{
                        color: accent,
                        backgroundColor: `color-mix(in srgb, ${accent} 8%, transparent)`,
                        borderColor: `color-mix(in srgb, ${accent} 25%, transparent)`,
                      }}
                    >
                      {label}
                    </span>
                    <StatusPill
                      status={status}
                      label={status === "fresh" ? "Verified" : status === "aging" ? "Aging" : "Stale"}
                      size="xs"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-bold tracking-tight">{t.title}</h3>
                  <p className="mt-1 text-sm text-[var(--color-muted-foreground)] leading-snug">
                    {t.summary}
                  </p>
                </div>
                <div className="mt-auto flex items-center justify-between border-t border-[var(--color-border)] pt-3">
                  <div className="flex flex-wrap gap-1">
                    {t.roles.map((r) => (
                      <RoleChip key={r} role={r} size="xs" icon={false} />
                    ))}
                  </div>
                  <span
                    className="inline-flex items-center gap-1 text-xs font-semibold"
                    style={{ color: accent }}
                  >
                    Open
                    <ArrowRight className="size-3" aria-hidden="true" />
                  </span>
                </div>
              </>
            );

            if (t.isExternal) {
              return (
                <a
                  key={t.slug}
                  href={t.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={commonClasses}
                >
                  {commonContent}
                </a>
              );
            } else {
              return (
                <Link
                  key={t.slug}
                  href={`/tools/${t.routeSlug}`}
                  className={commonClasses}
                >
                  {commonContent}
                </Link>
              );
            }
          })}
        </div>
      )}
    </div>
  );
}
