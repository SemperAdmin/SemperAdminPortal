"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { UserCheck, AlertTriangle, Shield, ClipboardCheck } from "lucide-react";

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
  { id: "requirements", label: "Requirements" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Appointment", value: "Must be appointed in writing by the Commanding Officer" },
  { label: "Rank Requirement", value: "Usually E-5 or above; E-4 may be used with a waiver for smaller units" },
  { label: "Integrity", value: "Cannot have history of substance abuse or drug-related conviction" },
  { label: "Training", value: "Must complete installation UUC certification course" },
];

const UUC_QUALIFICATIONS = [
  "No history of substance abuse incidents",
  "No drug-related disciplinary actions",
  "High attention to detail",
  "Zero disciplinary issues recommended",
  "Ability to maintain strict chain of custody",
  "Available to execute testing on short notice",
];

const UUC_RESPONSIBILITIES = [
  "Maintain all urinalysis supplies and equipment",
  "Execute random and directed testing as ordered",
  "Ensure proper chain of custody documentation",
  "Train and supervise observers",
  "Package and ship samples to NDSL",
  "Maintain testing logs and records",
  "Report supply shortages to SACO",
];

const PROCESS_STEPS = [
  "Selection: CO identifies a Marine with high attention to detail and zero disciplinary issues",
  "Training: Marine completes local installation's UUC certification course",
  "Appointment: CO signs formal Appointment Letter and files for IG inspections",
  "Oversight: CO or SACO regularly audits UUC's logs and supply levels",
  "Alternate: Ensure at least one alternate UUC is also appointed and trained",
];

const COMMON_ISSUES = [
  {
    issue: "Chain of custody breaks",
    solution: "Failure to properly seal bottles or document the 'hand-off' of samples to the lab. Train UUCs on exact procedures and conduct regular audits of documentation.",
  },
  {
    issue: "Expired materials",
    solution: "Using testing kits or bottles that have passed their shelf life. Implement a supply tracking system and conduct monthly inventory checks.",
  },
  {
    issue: "Untrained alternates",
    solution: "Alternate UUC not properly trained or certified. Ensure alternates complete the same certification course as the primary UUC.",
  },
];

export function UUCContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={UserCheck} title="Unit Urinalysis Coordinator (UUC)" variant="info">
          The UUC is the commander&apos;s primary agent for executing the Biochemical Test
          Program. Because drug testing involves the collection of <strong>forensic evidence</strong>,
          the UUC must be a Marine of impeccable integrity who is meticulously trained to
          avoid procedural errors that could invalidate positive results.
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

        <InfoCard icon={Shield} title="Continuous Requirement" variant="warning">
          A unit must have at least <strong>one primary and one alternate UUC</strong>
          at all times. Do not allow gaps in coverage due to PCS, leave, or TAD.
        </InfoCard>
      </div>
    ),

    requirements: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            UUC Qualifications
          </h2>
          <ul className="mt-4 space-y-2">
            {UUC_QUALIFICATIONS.map((qual) => (
              <li key={qual} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--sa-navy)]" />
                {qual}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            UUC Responsibilities
          </h3>
          <ul className="mt-4 space-y-2">
            {UUC_RESPONSIBILITIES.map((resp) => (
              <li key={resp} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="mt-1 h-2 w-2 rounded-full bg-green-500" />
                {resp}
              </li>
            ))}
          </ul>
        </section>

        <InfoCard icon={ClipboardCheck} title="Appointment Letter Required" variant="default">
          The UUC must be appointed <strong>in writing</strong> by the Commanding Officer.
          This letter must be kept on file for IG inspections.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            UUC Appointment Process
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
            SACO Oversight
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Regular audits of UUC logs and documentation</li>
            <li>&bull; Verify supply levels and expiration dates</li>
            <li>&bull; Observe collection procedures periodically</li>
            <li>&bull; Ensure training certifications are current</li>
            <li>&bull; Review chain of custody procedures</li>
          </ul>
        </section>

        <InfoCard icon={AlertTriangle} title="Certification Required" variant="warning">
          The UUC <strong>must complete</strong> the local installation&apos;s UUC certification
          course before conducting any testing. Uncertified personnel cannot execute
          the urinalysis program.
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
