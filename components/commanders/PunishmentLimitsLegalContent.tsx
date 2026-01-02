"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Scale, AlertTriangle, Shield } from "lucide-react";

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
  { id: "limits", label: "Punishment Limits" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Reduction Authority", value: "Can only reduce to a rank the commander can promote to" },
  { label: "SNCO Protection", value: "E-6 and above cannot be reduced in rank at NJP" },
  { label: "Concurrent Running", value: "Restriction and Extra Duties run concurrently, not added together" },
  { label: "Immediate Effect", value: "Punishments take effect when announced unless suspended" },
];

const PUNISHMENT_LIMITS = [
  { type: "Forfeiture of Pay", companyGrade: "7 Days Pay", fieldGrade: "1/2 of 1 Month for 2 Months" },
  { type: "Restriction", companyGrade: "14 Days", fieldGrade: "60 Days" },
  { type: "Extra Duties", companyGrade: "14 Days", fieldGrade: "45 Days" },
  { type: "Reduction", companyGrade: "1 Grade (E-4 & below)", fieldGrade: "1 Grade (E-5 & below)" },
];

const REDUCTION_AUTHORITY = [
  { commanderRank: "Company Grade (O-1 to O-3)", canReduce: "E-4 and below", toLowest: "E-1" },
  { commanderRank: "Field Grade (O-4 to O-6)", canReduce: "E-5 and below", toLowest: "E-1" },
];

const PROCESS_STEPS = [
  "Verify Rank: Confirm the imposing officer's rank and Marine's rank",
  "Check Authority: Ensure punishment is within your authority limits",
  "Calculate Forfeitures: Based on base pay at rank AFTER any reduction",
  "Announce Clearly: State punishment during hearing with no ambiguity",
  "Consider Suspension: Decide if any portion should be suspended",
  "Document: Record all punishments in Unit Punishment Book",
];

const COMMON_ISSUES = [
  {
    issue: "Illegal reductions",
    solution: "A Company Commander cannot reduce a Sergeant (E-5). Only Field Grade officers can reduce E-5s. Know your limits before the hearing.",
  },
  {
    issue: "Exceeding forfeiture limits",
    solution: "Company Grade officers are limited to 7 days pay. Calculate carefully based on post-reduction rank if applicable.",
  },
  {
    issue: "Stacking restriction and extra duties",
    solution: "These run concurrently, not consecutively. 14 days restriction + 14 days extra duties = 14 days total, not 28.",
  },
];

export function PunishmentLimitsLegalContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Scale} title="Punishment Limits" variant="info">
          A Commander&apos;s authority to punish is strictly governed by their rank (Company Grade
          vs. Field Grade) and the rank of the Marine being punished. <strong>Exceeding these
          limits is an illegal act</strong> that can result in the punishment being set aside.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Points
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <tbody>
                {KEY_POINTS.map((point) => (
                  <tr key={point.label} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{point.label}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{point.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <InfoCard icon={Shield} title="SNCO Protection" variant="warning">
          Staff Non-Commissioned Officers (<strong>E-6 and above</strong>) cannot be reduced
          in rank at NJP. Reduction requires a court-martial conviction.
        </InfoCard>
      </div>
    ),

    limits: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Maximum Punishment Limits
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Punishment Type</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Company Grade (O-1 to O-3)</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Field Grade (O-4 to O-6)</th>
                </tr>
              </thead>
              <tbody>
                {PUNISHMENT_LIMITS.map((limit) => (
                  <tr key={limit.type} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{limit.type}</td>
                    <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{limit.companyGrade}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{limit.fieldGrade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Reduction Authority by Commander Rank
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Commander Rank</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Can Reduce</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">To Lowest</th>
                </tr>
              </thead>
              <tbody>
                {REDUCTION_AUTHORITY.map((auth) => (
                  <tr key={auth.commanderRank} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{auth.commanderRank}</td>
                    <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{auth.canReduce}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{auth.toLowest}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Punishment Process
          </h2>
          <div className="mt-6 space-y-4">
            {PROCESS_STEPS.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Forfeiture Calculation
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Forfeitures based on <strong>base pay only</strong> (excludes BAH/BAS)</li>
            <li>&bull; Calculate at rank <strong>after reduction</strong> is imposed</li>
            <li>&bull; Cannot exceed maximum for commander&apos;s grade</li>
          </ul>
        </section>

        <InfoCard icon={AlertTriangle} title="Immediate Effect" variant="warning">
          Punishments take effect <strong>the moment they are announced</strong> unless the
          CO chooses to suspend them. Be precise in your announcement.
        </InfoCard>
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
