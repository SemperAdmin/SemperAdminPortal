"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Heart, AlertTriangle, Clock, Users } from "lucide-react";

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
  { id: "duties", label: "CACO Duties" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Primary Duty", value: "Sole point of contact for NOK regarding funeral arrangements, benefits, and personal effects" },
  { label: "Support", value: "Must be a Marine of high maturity (typically SNCO or Officer)" },
  { label: "Command Support", value: "Commander must relieve CACO of all other duties while assigned to a case" },
  { label: "Duration", value: "Typically stays with family for 9-12 months or until all benefits are settled" },
];

const CACO_DUTIES = [
  "Serve as sole point of contact for the Next of Kin (NOK)",
  "Coordinate funeral arrangements and military honors",
  "Process survivor benefits (SGLI, DIC, SBP)",
  "Work with S-1, HQMC, and VA on benefit claims",
  "Oversee inventory of Marine's personal effects",
  "Coordinate return of personal property to eligible recipient",
  "Provide ongoing support and referrals to family",
  "Document all contacts and actions in case file",
];

const PROCESS_STEPS = [
  "Assignment: Upon notification from HQMC (MPC), the CO assigns a CACO",
  "Initial Contact: CACO makes first call to the family after official death notification is complete",
  "Benefits Processing: CACO works with S-1, HQMC, and VA to process all survivor benefits",
  "Personal Effects: CACO oversees inventory and return of Marine's property to eligible recipient",
  "Ongoing Support: Continue regular contact with family throughout the process",
  "Case Closure: Close case only after all benefits are settled (typically 9-12 months)",
];

const CACO_SELECTION = [
  "Officer or SNCO of high maturity and emotional intelligence",
  "Strong communication and interpersonal skills",
  "Ability to navigate complex administrative processes",
  "Availability to be fully dedicated to the case",
  "Geographic proximity to the NOK (when possible)",
  "No personal relationship with the deceased that would impair judgment",
];

const COMMON_ISSUES = [
  {
    issue: "Lack of Supervision",
    solution: "Assuming the CACO 'has it' and failing to check on their well-being. This is a high-trauma duty that requires command attention. Schedule regular check-ins with the assigned CACO.",
  },
  {
    issue: "Competing Duties",
    solution: "Leaving the CACO on the watch bill or assigning additional duties. The CACO must be fully relieved to provide proper support to the family.",
  },
  {
    issue: "Premature Case Closure",
    solution: "Closing the case before all benefits are settled leaves families without support at critical moments. Maintain contact until SGLI, DIC, and all entitlements are received.",
  },
];

export function CACOOversightContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Heart} title="CACO Oversight" variant="info">
          The Casualty Assistance Calls Officer (CACO) is the face of the Marine Corps to
          a grieving family. The Commander&apos;s oversight ensures the officer is properly
          supported, trained, and resourced to perform this high-stress mission.
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

        <InfoCard icon={Clock} title="24-Hour Initial Contact" variant="warning">
          The CACO must make initial contact with the NOK within <strong>24 hours</strong>
          after the death notification is complete.
        </InfoCard>
      </div>
    ),

    duties: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            CACO Responsibilities
          </h2>
          <ul className="mt-4 space-y-2">
            {CACO_DUTIES.map((duty) => (
              <li key={duty} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="mt-1 h-2 w-2 rounded-full bg-green-500" />
                {duty}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            <Users className="h-5 w-5" />
            CACO Selection Criteria
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            {CACO_SELECTION.map((criteria) => (
              <li key={criteria} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                {criteria}
              </li>
            ))}
          </ul>
        </section>

        <InfoCard icon={Heart} title="High-Trauma Duty" variant="default">
          CACO duty is emotionally demanding. Commanders must monitor the CACO&apos;s
          well-being and provide access to counseling resources as needed.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            CACO Process
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
            Key Benefits to Process
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Servicemembers' Group Life Insurance (SGLI)</li>
            <li>&bull; Dependency and Indemnity Compensation (DIC)</li>
            <li>&bull; Survivor Benefit Plan (SBP)</li>
            <li>&bull; Death Gratuity ($100,000)</li>
            <li>&bull; Unpaid pay and allowances</li>
            <li>&bull; Travel and transportation allowances</li>
            <li>&bull; Social Security survivor benefits</li>
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
