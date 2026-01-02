"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { DollarSign, AlertTriangle, FileText, Clock } from "lucide-react";

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
  { id: "benefits", label: "Key Benefits" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "TSGLI", value: "Traumatic SGLI; short-term financial assistance for traumatic injuries (loss of limb, sight, severe burns)" },
  { label: "PAC", value: "Pay and Allowance Continuation; keeps Marine's pay at pre-injury level during hospitalization/recovery" },
  { label: "SCAADL", value: "Special Compensation for Assistance with Activities of Daily Living; monthly stipend for caregivers" },
  { label: "Commander Role", value: "May be required to sign certifications regarding circumstances of injury" },
];

const BENEFITS_DETAILS = [
  {
    benefit: "TSGLI (Traumatic SGLI)",
    description: "One-time payment for qualifying traumatic injuries",
    amount: "$25,000 - $100,000 depending on injury severity",
    eligibility: "Loss of limb, sight, speech, hearing; severe burns; paralysis; TBI; coma",
    timeline: "Apply as soon as medical condition is stable; payments within 30 days of approval",
  },
  {
    benefit: "PAC (Pay and Allowance Continuation)",
    description: "Continues full pay and allowances during hospitalization and recovery",
    amount: "100% of pre-injury pay rate",
    eligibility: "Marines hospitalized or convalescing due to combat or combat-related injury",
    timeline: "Automatic for qualifying injuries; requires re-certification at milestones",
  },
  {
    benefit: "SCAADL",
    description: "Monthly stipend to compensate caregiver for assistance with daily living activities",
    amount: "Up to $2,800/month (varies by level of care needed)",
    eligibility: "Catastrophically injured/ill requiring personal caregiver assistance",
    timeline: "Ongoing monthly payment; reassessed periodically",
  },
];

const PROCESS_STEPS = [
  "Identification: S-1 and RCC identify benefit eligibility based on PCR and medical record",
  "Application: Marine (or CACO/RCC) submits application to the appropriate agency (e.g., TSGLI office)",
  "Command Certification: Commander signs certifications regarding circumstances of injury as required",
  "Submission: Complete package submitted to processing office",
  "Verification: Ensure PAC and other entitlements are correctly reflected on Marine's LES",
  "Monitoring: Track application status and follow up on pending claims",
];

const COMMON_ISSUES = [
  {
    issue: "Missing PAC Stop Dates",
    solution: "PAC must be re-certified or stopped upon certain milestones (e.g., return to duty, separation). Failure to do so results in significant pay debts for the Marine. Track all PAC cases and verify stop dates.",
  },
  {
    issue: "TSGLI Denial Due to Documentation",
    solution: "Incomplete medical documentation leads to TSGLI denials. Work with the MTF to ensure all medical records supporting the injury are included in the application package.",
  },
  {
    issue: "Caregiver Burnout without SCAADL",
    solution: "Family caregivers often don't know SCAADL exists. Proactively inform families of catastrophically injured Marines about this benefit to offset caregiver costs.",
  },
];

export function WWBenefitsContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={DollarSign} title="Benefits Coordination" variant="info">
          The Commander ensures that injured Marines are aware of and apply for specialized
          financial benefits designed to offset the costs of serious injuries and recovery.
          Timely application is critical—delays can mean financial hardship for Marines and families.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Benefits
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

        <InfoCard icon={Clock} title="Apply Immediately" variant="warning">
          Applications should be initiated as soon as the medical condition is stable enough
          to allow for paperwork. Delays can result in financial hardship.
        </InfoCard>
      </div>
    ),

    benefits: (
      <div className="space-y-6">
        {BENEFITS_DETAILS.map((item) => (
          <section key={item.benefit} className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              <DollarSign className="h-5 w-5" />
              {item.benefit}
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-green-50 p-3 dark:bg-green-900/20">
                <span className="text-xs font-medium text-green-700 dark:text-green-300">Amount</span>
                <p className="mt-1 text-sm font-medium text-green-800 dark:text-green-200">{item.amount}</p>
              </div>
              <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
                <span className="text-xs font-medium text-blue-700 dark:text-blue-300">Timeline</span>
                <p className="mt-1 text-sm text-blue-800 dark:text-blue-200">{item.timeline}</p>
              </div>
            </div>
            <div className="mt-3">
              <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Eligibility: </span>
              <span className="text-sm text-zinc-700 dark:text-zinc-300">{item.eligibility}</span>
            </div>
          </section>
        ))}
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Benefits Coordination Process
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
          <h3 className="flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            <FileText className="h-5 w-5" />
            Commander's Certification Duties
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Verify circumstances of injury for TSGLI claims</li>
            <li>&bull; Certify combat-related status for PAC eligibility</li>
            <li>&bull; Attest to duty status at time of injury</li>
            <li>&bull; Confirm line of duty determinations</li>
            <li>&bull; Provide supporting documentation as requested</li>
          </ul>
        </section>

        <InfoCard icon={FileText} title="LES Verification" variant="default">
          After benefits are approved, verify the Marine&apos;s Leave and Earnings Statement (LES)
          reflects the correct entitlements. Incorrect LES entries lead to pay issues.
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
