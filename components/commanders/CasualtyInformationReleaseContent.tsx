"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Clock, AlertTriangle, Shield, Users } from "lucide-react";

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
  { id: "timeline", label: "24-Hour Rule" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "24-Hour Rule", value: "Identity not released until 24 hours after PNOK notification" },
  { label: "Internal Control", value: "Commanders must prevent social media posts before official HQMC announcement" },
  { label: "Coordination", value: "All casualty releases coordinated through HQMC Office of Marine Corps Communication" },
  { label: "Basic Decency", value: "Family must not learn of a casualty via news or social media" },
];

const RELEASABLE_INFO = [
  "Marine's name",
  "Age",
  "Hometown",
  "Basic service history (rank, MOS, unit)",
  "General circumstances (if approved)",
];

const NOT_RELEASABLE = [
  "Details that could identify other casualties before notification",
  "Specific location of incident (if operationally sensitive)",
  "Details of ongoing investigation",
  "Family member names or contact information",
  "Graphic details of injuries or death",
];

const PROCESS_STEPS = [
  "Confirmation: Verify that the Casualty Assistance Calls Officer (CACO) has completed notification",
  "Clock Starts: The 24-hour clock begins when PNOK signature is obtained or CACO confirms notification",
  "Social Media Blackout: Immediately implement unit-wide social media blackout",
  "Draft Release: Include only Marine's name, age, hometown, and basic service history",
  "Coordination: Submit draft to HQMC Office of Marine Corps Communication for approval",
  "Release: Only after the 24-hour window has expired and HQMC approval received",
];

const BLACKOUT_ACTIONS = [
  "Announce to all hands: no social media posts about the incident",
  "Monitor unit social media pages and accounts",
  "Brief families on the importance of not sharing information",
  "Coordinate with chaplain and CACO for family support",
  "Document any violations for potential disciplinary action",
];

const COMMON_ISSUES = [
  {
    issue: "'Digital leak'",
    solution: "Fellow Marines posting 'RIP [Name]' on Facebook before the CACO has reached the family's house. Commanders must conduct an immediate 'social media blackout' following a casualty and brief all hands.",
  },
  {
    issue: "Media pressure",
    solution: "Journalists pressing for early release of names. All queries must be directed to HQMC Public Affairs. The 24-hour rule is non-negotiable.",
  },
  {
    issue: "Incomplete notification",
    solution: "Assuming notification is complete when only one family member has been reached. Verify PNOK notification is officially confirmed by CACO before starting the clock.",
  },
];

export function CasualtyInformationReleaseContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Shield} title="Casualty Information Release" variant="info">
          The release of a Marine&apos;s name following a casualty is <strong>strictly controlled</strong>
          to ensure the family is not informed via the news or social media. This is a matter
          of <strong>basic decency</strong> and command responsibility.
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

        <InfoCard icon={Clock} title="24-Hour Minimum" variant="warning">
          The identity of a deceased Marine will <strong>not be released</strong> by the
          Marine Corps until <strong>24 hours after</strong> the Primary Next of Kin (PNOK)
          has been notified. This is absolute.
        </InfoCard>
      </div>
    ),

    timeline: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            The 24-Hour Rule
          </h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                The clock starts the moment the <strong>PNOK signature</strong> is obtained or the
                <strong> CACO confirms notification</strong>. Not when the incident occurs.
              </p>
            </div>
          </div>
        </section>

        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-green-700 dark:text-green-400">
              Releasable After 24 Hours
            </h3>
            <ul className="mt-4 space-y-2">
              {RELEASABLE_INFO.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="mt-1 h-2 w-2 rounded-full bg-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-red-700 dark:text-red-400">
              Never Releasable
            </h3>
            <ul className="mt-4 space-y-2">
              {NOT_RELEASABLE.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="mt-1 h-2 w-2 rounded-full bg-red-500" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Social Media Blackout Actions
          </h3>
          <ul className="mt-4 space-y-2">
            {BLACKOUT_ACTIONS.map((action) => (
              <li key={action} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--sa-navy)]" />
                {action}
              </li>
            ))}
          </ul>
        </section>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Casualty Release Process
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

        <InfoCard icon={Users} title="HQMC Coordination Required" variant="default">
          All casualty releases must be coordinated through the <strong>HQMC Office of
          Marine Corps Communication</strong>. Do not release any information without
          their explicit approval.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Release Statement Template
          </h3>
          <div className="mt-3 rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
            <p className="text-sm italic text-zinc-600 dark:text-zinc-400">
              &quot;The Department of Defense announced today the death of [Rank] [Name], [Age],
              of [Hometown, State], who died [Date] in [General Location]. [He/She] was assigned
              to [Unit], [Base Location]. The incident is under investigation.&quot;
            </p>
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

        <InfoCard icon={AlertTriangle} title="Immediate Action Required" variant="warning">
          Upon notification of a casualty, <strong>immediately</strong> implement a social media
          blackout. Brief all hands personally. The consequences of a leak are devastating
          to the family and unacceptable.
        </InfoCard>
      </div>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
