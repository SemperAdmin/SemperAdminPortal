"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { GraduationCap, AlertTriangle, Scale, Clock } from "lucide-react";

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
  { id: "pta", label: "PTA Rules" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Purpose", value: "Funds must be used only for the purpose for which they were appropriated" },
  { label: "Time", value: "Funds must be obligated within the period of availability (typically 1 FY for O&M)" },
  { label: "Amount", value: "Obligations cannot exceed the amount authorized by higher headquarters (the 'target')" },
  { label: "Anti-Deficiency Act", value: "Federal law prohibiting obligations before an appropriation is made" },
];

const PTA_RULES = [
  {
    rule: "Purpose",
    description: "Funds must be used only for the purpose for which they were appropriated",
    example: "O&M,MC funds cannot be used for Military Construction (MILCON)",
    violation: "Using O&M funds to build a permanent structure",
  },
  {
    rule: "Time",
    description: "Funds must be obligated within the specific period of availability",
    example: "Operations & Maintenance funds are typically one-year funds",
    violation: "Obligating expired funds from a previous fiscal year",
  },
  {
    rule: "Amount",
    description: "Cannot exceed the amount authorized by higher headquarters",
    example: "If your target is $500K, you cannot obligate $600K",
    violation: "Spending beyond your authorized target",
  },
];

const PROCESS_STEPS = [
  "Certification: Commander and Fiscal Officer complete mandated online training (MC Financial Management Training)",
  "Target Distribution: Comptroller issues a 'Work Center' or 'Target' to the command",
  "Delegation: Commander signs Appointment Letters for Supply Officer and Comptroller with specific spending authority levels",
  "Tracking: Establish a 'Command Commitment Ledger' to track obligations against authorized budget in real-time",
];

const COMMON_ISSUES = [
  {
    issue: "End-of-Year Spiking",
    solution: "Attempting to obligate all remaining funds on the last day of the fiscal year without proper planning often leads to 'Purpose' violations. Plan spending throughout the year with a phased approach.",
  },
  {
    issue: "Unauthorized Commitments",
    solution: "Personnel ordering goods/services without proper contracting authority. Ensure all personnel understand they cannot commit the government to pay without proper delegation.",
  },
  {
    issue: "Delegation Gaps",
    solution: "Appointment letters that don't clearly specify dollar limits or authorities. Use specific dollar thresholds and types of purchases authorized.",
  },
];

export function FundControlTrainingContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={GraduationCap} title="Fund Control Training" variant="info">
          Fund Control Training provides Commanders and designated fiscal officers with
          the legal foundation for managing appropriated funds. It ensures those with
          spending authority understand federal laws—specifically &quot;Purpose, Time,
          and Amount&quot; (PTA)—to avoid violations of the Anti-Deficiency Act.
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

        <InfoCard icon={Scale} title="Anti-Deficiency Act Warning" variant="warning">
          The <strong>Anti-Deficiency Act (31 U.S.C. § 1341)</strong> is a federal law
          that prohibits government employees from involving the government in a contract
          or obligation for payment before an appropriation is made. Violations can result
          in disciplinary action, including removal from office.
        </InfoCard>
      </div>
    ),

    pta: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            PTA Rules
          </h2>
          <div className="mt-4 space-y-4">
            {PTA_RULES.map((item) => (
              <div key={item.rule} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.rule}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  <div className="rounded bg-green-50 p-2 dark:bg-green-900/20">
                    <span className="text-xs font-medium text-green-700 dark:text-green-300">Example: </span>
                    <span className="text-sm text-green-800 dark:text-green-200">{item.example}</span>
                  </div>
                  <div className="rounded bg-red-50 p-2 dark:bg-red-900/20">
                    <span className="text-xs font-medium text-red-700 dark:text-red-300">Violation: </span>
                    <span className="text-sm text-red-800 dark:text-red-200">{item.violation}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <InfoCard icon={AlertTriangle} title="Remember PTA" variant="default">
          Before obligating any funds, always ask: Is this the right <strong>Purpose</strong>?
          Is this within the <strong>Time</strong> period? Is this within my <strong>Amount</strong>?
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Fund Control Process
          </h2>
          <div className="mt-6 space-y-4">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <InfoCard icon={Clock} title="Annual Refresher Required" variant="warning">
          All personnel with fiscal responsibility must complete annual refresher training.
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
