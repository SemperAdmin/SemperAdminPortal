"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Scale, AlertTriangle } from "lucide-react";

interface Reference {
  title: string;
  url: string;
  isQuickLink?: boolean;
}

interface Props {
  data: {
    references: Reference[];
  };
}

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "field-grade", label: "Field Grade (O-4+)" },
  { id: "company-grade", label: "Company Grade" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const FIELD_GRADE_LIMITS = [
  { punishment: "Correctional Custody", limit: "Up to 30 consecutive days" },
  { punishment: "Forfeiture", limit: "Up to 1/2 of one month's pay for 2 months" },
  { punishment: "Reduction", limit: "To next inferior paygrade (requires promotion authority)" },
  { punishment: "Extra Duties", limit: "Up to 45 consecutive days" },
  { punishment: "Restriction", limit: "Up to 60 consecutive days" },
];

const COMPANY_GRADE_LIMITS = [
  { punishment: "Correctional Custody", limit: "Up to 7 consecutive days" },
  { punishment: "Forfeiture", limit: "Up to 7 days' pay" },
  { punishment: "Reduction", limit: "To next inferior paygrade (requires promotion authority)" },
  { punishment: "Extra Duties", limit: "Up to 14 consecutive days" },
  { punishment: "Restriction", limit: "Up to 14 consecutive days" },
];

const COMMON_ISSUES = [
  {
    issue: "Commander lacks promotion authority for the grade",
    solution: "Request promotion authority from CMC (MMPR-2) via the chain of command before imposing reduction.",
  },
  {
    issue: "Forfeiture exceeds maximum",
    solution: "Calculate maximum by rounding down to whole-dollar amounts based on grade to which reduced.",
  },
  {
    issue: "Company grade commander exceeds limits",
    solution: "Review MCO 5800.16 Vol 14 punishment tables before conducting NJP.",
  },
];

export function PunishmentLimitsContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Scale} title="NJP Punishment Authority" variant="info">
          Punishment authority depends on the imposing commander&apos;s grade. Field grade and above
          commanders impose heavier punishments than company grade commanders. Combinations of
          punishments are authorized within limits.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Rules
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li className="flex items-start gap-2">
              <span className="text-amber-500">&bull;</span>
              <span>Officers-in-charge impose punishments per Part V, MCM regardless of their grade</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500">&bull;</span>
              <span>Reduction in grade requires the commander hold promotion authority per MCO P1400.32D</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500">&bull;</span>
              <span><strong>Marines E-6 and above cannot be reduced in grade by NJP</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500">&bull;</span>
              <span>Navy personnel E-7 and above cannot be reduced in grade by NJP</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500">&bull;</span>
              <span>Warrant officers cannot reduce enlisted personnel under any circumstances</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500">&bull;</span>
              <span>Forfeitures are expressed in whole-dollar amounts only</span>
            </li>
          </ul>
        </section>

        <InfoCard icon={AlertTriangle} title="Forfeiture Calculation" variant="warning">
          Forfeiture amounts are calculated based on the grade to which reduced if reduction
          is also imposed. Round down to whole-dollar amounts.
        </InfoCard>
      </div>
    ),

    "field-grade": (
      <div className="space-y-6">
        <InfoCard icon={Scale} title="Field Grade Commander (O-4 and Above)" variant="info">
          Field grade officers impose the maximum punishments authorized under NJP.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Maximum Punishments
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Punishment</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Maximum</th>
                </tr>
              </thead>
              <tbody>
                {FIELD_GRADE_LIMITS.map((item) => (
                  <tr key={item.punishment} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.punishment}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.limit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Timeline Notes
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; <strong>Forfeiture and reduction:</strong> Take effect immediately upon imposition</li>
            <li>&bull; <strong>Maximum suspension:</strong> Up to 6 months</li>
            <li>&bull; <strong>Extra duty hours:</strong> Up to 2 hours per day (normal)</li>
          </ul>
        </section>
      </div>
    ),

    "company-grade": (
      <div className="space-y-6">
        <InfoCard icon={Scale} title="Company Grade Commander (O-3 and Below)" variant="info">
          Company grade officers exercising company command have reduced punishment authority.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Maximum Punishments
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Punishment</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Maximum</th>
                </tr>
              </thead>
              <tbody>
                {COMPANY_GRADE_LIMITS.map((item) => (
                  <tr key={item.punishment} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.punishment}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.limit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    ),

    issues: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common Problems & Solutions
          </h2>
          <div className="mt-4 space-y-4">
            {COMMON_ISSUES.map((item) => (
              <div key={item.issue} className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
                <h4 className="font-medium text-amber-800 dark:text-amber-200">Problem: {item.issue}</h4>
                <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
                  <strong>Solution:</strong> {item.solution}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
