"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { UserCheck, AlertTriangle, FileText, Package } from "lucide-react";

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
  { id: "duties", label: "Duties" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Fiduciary Authority", value: "Authorized to sign requisitions and obligate command funds within CO's limits" },
  { label: "Accountability", value: "Maintains the Consolidated Memorandum Receipt (CMR) and stock records" },
  { label: "Oversight", value: "Provides Commander with regular reports on supply health and property accountability" },
  { label: "Legal Requirement", value: "Formal appointment establishes specific authorities and liabilities" },
];

const SUPPLY_OFFICER_DUTIES = [
  "Sign requisitions and obligate funds within delegated authority",
  "Maintain the Consolidated Memorandum Receipt (CMR)",
  "Oversee all stock records and property accountability",
  "Manage the Government Purchase Card (GPC) program",
  "Coordinate with the Comptroller on fiscal matters",
  "Brief the Commander on supply health and readiness",
  "Supervise Responsible Officers (ROs) and property custodians",
  "Conduct periodic inventories and reconciliations",
];

const APPOINTMENT_REQUIREMENTS = [
  {
    document: "Appointment Letter",
    purpose: "Formal letter from CO outlining specific duties and authorities",
    content: "Consumer Level Supply, GPC oversight, dollar limits",
  },
  {
    document: "DD Form 577",
    purpose: "Appointment/Termination Record - Authorized Signature",
    content: "Required for interaction with fiscal systems",
  },
  {
    document: "DD Form 200",
    purpose: "Financial Liability Investigation of Property Loss",
    content: "Understanding of liability procedures",
  },
];

const PROCESS_STEPS = [
  "Selection: CO selects a qualified Supply Officer (typically MOS 3002)",
  "Training Verification: Verify completion of required supply and fiscal training",
  "Appointment Letter: CO signs formal letter outlining specific duties (Consumer Level Supply, GPC Oversight, etc.)",
  "DD Form 577: Commander signs the DD Form 577 for fiscal system access",
  "Integration: Supply Officer integrated into 'Small Staff' and participates in all readiness boards",
  "Turnover: Conduct formal inventory and CMR review if relieving a predecessor",
];

const COMMON_ISSUES = [
  {
    issue: "Authority Overlap",
    solution: "Failing to clearly define the boundaries between the Supply Officer and Responsible Officers (ROs). The appointment letter should explicitly state what authorities are delegated to ROs versus retained by the Supply Officer.",
  },
  {
    issue: "Dollar Limit Confusion",
    solution: "Unclear spending authority limits. Specify exact dollar thresholds for single purchases, monthly limits, and types of purchases authorized.",
  },
  {
    issue: "Delayed DD 577",
    solution: "Supply Officer cannot access fiscal systems without a signed DD 577. Complete this form as part of the appointment process, not after.",
  },
];

export function SupplyOfficerAppointmentContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={UserCheck} title="Supply Officer Appointment" variant="info">
          The Supply Officer is the Commander&apos;s designated agent for the requisition,
          custody, and accounting of all government property. Their formal appointment is
          a legal requirement that establishes the specific authorities and liabilities
          of the role.
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

        <InfoCard icon={AlertTriangle} title="Immediate Requirement" variant="warning">
          Appointment must be completed <strong>before</strong> the officer can legally
          sign for property or obligate funds.
        </InfoCard>
      </div>
    ),

    duties: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Supply Officer Duties
          </h2>
          <ul className="mt-4 space-y-2">
            {SUPPLY_OFFICER_DUTIES.map((duty) => (
              <li key={duty} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="mt-1 h-2 w-2 rounded-full bg-green-500" />
                {duty}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            <FileText className="h-5 w-5" />
            Required Documents
          </h3>
          <div className="mt-4 space-y-3">
            {APPOINTMENT_REQUIREMENTS.map((doc) => (
              <div key={doc.document} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">{doc.document}</h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{doc.purpose}</p>
                <div className="mt-2">
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400">Content: </span>
                  <span className="text-sm text-zinc-700 dark:text-zinc-300">{doc.content}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <InfoCard icon={Package} title="CMR Accountability" variant="default">
          The Supply Officer is personally accountable for all items on the Consolidated
          Memorandum Receipt (CMR). Conduct a thorough inventory before accepting accountability.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Appointment Process
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
            Appointment Letter Elements
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Full name and rank of the appointee</li>
            <li>&bull; Effective date of appointment</li>
            <li>&bull; Specific duties and responsibilities</li>
            <li>&bull; Dollar limits for single purchases</li>
            <li>&bull; Monthly spending authority</li>
            <li>&bull; Types of purchases authorized</li>
            <li>&bull; GPC program oversight responsibilities</li>
            <li>&bull; Reporting requirements to the CO</li>
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
