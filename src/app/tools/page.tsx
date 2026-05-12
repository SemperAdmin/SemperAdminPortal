"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  FileText,
  FileDown,
  ClipboardList,
  type LucideIcon,
} from "lucide-react";
import { RoleChip } from "@/components/domain/role-chip";
import { PageHeader } from "@/components/domain/page-header";
import { MetaRow } from "@/components/domain/meta-row";
import { FilterBar, type FilterChip } from "@/components/domain/filter-bar";
import { StatusPill } from "@/components/ui/status-pill";
import { useRoleStore } from "@/lib/store/role-store";
import { useMounted } from "@/hooks/use-mounted";
import type { Role } from "@/lib/roles";
import { cn } from "@/lib/utils";

interface ToolData {
  slug: string;
  title: string;
  summary: string;
  roles: Role[];
  outputType: "pdf" | "docx" | "calculator" | "checklist";
  routeSlug: string;
  lastVerified: string;
}

const ICON: Record<ToolData["outputType"], LucideIcon> = {
  pdf: FileText,
  docx: FileDown,
  calculator: Calculator,
  checklist: ClipboardList,
};

const TYPE_LABEL: Record<ToolData["outputType"], string> = {
  pdf: "PDF",
  docx: "DOCX",
  calculator: "Calculator",
  checklist: "Checklist",
};

const TYPE_ACCENT: Record<ToolData["outputType"], string> = {
  pdf: "var(--color-usmc-scarlet)",
  docx: "var(--color-marine-blue)",
  calculator: "var(--color-status-info)",
  checklist: "var(--color-role-admin)",
};

function classify(date: string): "fresh" | "aging" | "stale" {
  const months =
    (Date.now() - new Date(date).getTime()) / (1000 * 60 * 60 * 24 * 30);
  if (months >= 24) return "stale";
  if (months >= 12) return "aging";
  return "fresh";
}

export default function ToolsIndex() {
  const role = useRoleStore((s) => s.role);
  const mounted = useMounted();
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const data = require("@/generated/tools.json") as ToolData[];

  const [typeFilter, setTypeFilter] = React.useState<string>("all");

  const visible = React.useMemo(() => {
    let list = data;
    if (mounted && role) {
      list = list.filter((t) => t.roles.includes(role));
    }
    if (typeFilter !== "all") {
      list = list.filter((t) => t.outputType === typeFilter);
    }
    return list;
  }, [data, mounted, role, typeFilter]);

  const counts: Record<string, number> = {
    all: data.length,
    calculator: data.filter((t) => t.outputType === "calculator").length,
    pdf: data.filter((t) => t.outputType === "pdf").length,
    docx: data.filter((t) => t.outputType === "docx").length,
    checklist: data.filter((t) => t.outputType === "checklist").length,
  };

  const chips: FilterChip[] = [
    { id: "all", label: "All", count: counts.all },
    { id: "calculator", label: "Calculator", count: counts.calculator },
    { id: "pdf", label: "PDF", count: counts.pdf },
    { id: "docx", label: "DOCX", count: counts.docx },
    { id: "checklist", label: "Checklist", count: counts.checklist },
  ];

  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader
        eyebrow="Interactive"
        tags={<StatusPill status="fresh" label={`${data.length} tools available`} />}
        title="TOOLS"
        summary="Calculators, PDF builders, DOCX exporters, and checklists. All run client-side. No data leaves your browser."
      >
        <MetaRow
          items={[
            { label: "Tools", value: data.length },
            {
              label: "Output types",
              value: "PDF, DOCX, Calc, Checklist",
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

      {visible.length === 0 ? (
        <div className="rounded-[var(--radius-md)] border border-dashed border-[var(--color-border-strong)] bg-[var(--color-surface-2)] p-8 text-center">
          <p className="text-sm text-[var(--color-muted-foreground)]">
            No tools match the current filter.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {visible.map((t) => {
            const Icon = ICON[t.outputType];
            const accent = TYPE_ACCENT[t.outputType];
            const status = classify(t.lastVerified);
            return (
              <Link
                key={t.slug}
                href={`/tools/${t.routeSlug}`}
                className={cn(
                  "group relative flex flex-col gap-3 overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-card)] p-5 transition-all",
                  "hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-md)]"
                )}
              >
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
                      {TYPE_LABEL[t.outputType]}
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
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
