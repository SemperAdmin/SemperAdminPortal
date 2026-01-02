"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Activity, AlertTriangle, Clock, FileText } from "lucide-react";

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
  { id: "tracking", label: "Tracking Categories" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Tracking", value: "Monitors Marines on Light Duty, Pregnancy/Postpartum, and formal Limited Duty" },
  { label: "Liaison", value: "Bridge between unit, medical treatment facility (MTF), and Manpower office" },
  { label: "Readiness Impact", value: "Directly affects the 'P-Level' (Personnel) in DRRS-MC readiness report" },
  { label: "Monthly Reconciliation", value: "100% reconciliation of LIMDU roster with medical providers monthly" },
];

const TRACKING_CATEGORIES = [
  {
    category: "Light Duty",
    description: "Temporary duty restrictions from medical providers",
    duration: "Usually 30 days or less",
    impact: "Limited impact on P-Level if short-term",
  },
  {
    category: "Pregnancy/Postpartum",
    description: "Marines on pregnancy or postpartum status",
    duration: "Varies per medical guidance",
    impact: "Non-deployable; affects readiness calculations",
  },
  {
    category: "Limited Duty (LIMDU)",
    description: "Formal Medically Restricted Status requiring medical board",
    duration: "Initial 6 months, extendable",
    impact: "Significant P-Level impact; may lead to PEB",
  },
  {
    category: "Temporary Limited Duty (TLD)",
    description: "Short-term formal restriction",
    duration: "Up to 6 months",
    impact: "Affects deployability and assignment eligibility",
  },
];

const PROCESS_STEPS = [
  "Appointment: CO appoints a LIMDU Coordinator (usually in S-1 or Medical section)",
  "Case Review: Coordinator maintains a roster of all Marines with medical exemptions",
  "FPC Input: Provides updates during Force Preservation Councils on recovering Marines",
  "MTF Coordination: Monthly contact with medical treatment facilities to verify status",
  "Administrative Action: Ensures LIMDU extensions or returns to full duty are documented in MCTFS",
  "Reporting: Updates DRRS-MC data to reflect accurate personnel readiness",
];

const COMMON_ISSUES = [
  {
    issue: "'Lost' Marines",
    solution: "Marines remaining on the LIMDU roster long after their medical exemption has expired leads to inaccurate readiness reporting. Conduct monthly reconciliation with MTF and verify each Marine's current status.",
  },
  {
    issue: "Missed Extensions",
    solution: "Failing to submit extension requests before LIMDU expiration can result in Marines being involuntarily separated. Track all expiration dates and initiate extension paperwork 60 days prior.",
  },
  {
    issue: "MCTFS Discrepancies",
    solution: "MCTFS data not matching actual medical status. Verify MCTFS entries against medical records monthly and correct discrepancies immediately.",
  },
];

export function LIMDUCoordinatorContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Activity} title="LIMDU Coordinator" variant="info">
          The Limited Duty (LIMDU) Coordinator tracks Marines who are temporarily unable to
          perform their duties due to medical reasons. Proper oversight ensures Marines receive
          necessary care while the command maintains an accurate picture of its deployable strength.
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

        <InfoCard icon={Clock} title="Monthly Reconciliation Required" variant="warning">
          100% reconciliation of the LIMDU roster with medical providers is required <strong>monthly</strong>.
        </InfoCard>
      </div>
    ),

    tracking: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Tracking Categories
          </h2>
          <div className="mt-4 space-y-4">
            {TRACKING_CATEGORIES.map((item) => (
              <div key={item.category} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.category}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  <div>
                    <span className="text-xs font-medium text-blue-600 dark:text-blue-400">Duration: </span>
                    <span className="text-sm text-zinc-700 dark:text-zinc-300">{item.duration}</span>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-amber-600 dark:text-amber-400">Impact: </span>
                    <span className="text-sm text-zinc-700 dark:text-zinc-300">{item.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <InfoCard icon={FileText} title="DRRS-MC Impact" variant="default">
          All LIMDU categories affect the unit&apos;s P-Level (Personnel) in DRRS-MC
          readiness reporting. Accurate tracking is essential for honest readiness assessment.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            LIMDU Coordination Process
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

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Tracking Data
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Marine's name, rank, and MOS</li>
            <li>&bull; LIMDU start date and expiration date</li>
            <li>&bull; Nature of medical condition (general category)</li>
            <li>&bull; Treating MTF and POC</li>
            <li>&bull; Next follow-up appointment date</li>
            <li>&bull; Extension request status (if applicable)</li>
            <li>&bull; Projected return to full duty date</li>
          </ul>
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
