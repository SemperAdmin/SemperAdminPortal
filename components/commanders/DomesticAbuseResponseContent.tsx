"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Shield, AlertTriangle, Clock, FileText } from "lucide-react";

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
  { id: "mpo", label: "Military Protective Order" },
  { id: "process", label: "Response Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "MPO Authority", value: "Commander can issue DD Form 2873 ordering Marine to stay away from victim" },
  { label: "Victim Advocacy", value: "Victims have right to a Victim Advocate (VA) for safety planning" },
  { label: "Restricted Reports", value: "Unlike SAPR, domestic abuse restricted reports are limited if immediate threat exists" },
  { label: "Priority", value: "Immediate priority is safety of the victim and stability of the unit" },
];

const MPO_ELEMENTS = [
  "Order to stay away from the victim",
  "Prohibition from victim's residence",
  "Prohibition from victim's workplace",
  "No contact provisions (phone, text, email, third-party)",
  "Firearms restrictions if applicable",
  "Duration and review date",
];

const PROCESS_STEPS = [
  "Immediate Restraint: Determine if Marine needs to be moved to barracks or different work section",
  "Issue MPO: If threat exists, CO signs DD Form 2873",
  "Liaison with PMO: Ensure MPO is entered into system so civilian law enforcement is aware",
  "Victim Notification: Notify victim of rights and available resources within 24 hours",
  "Monitor Compliance: Any MPO violation is a violation of Article 90, UCMJ",
  "72-Hour Review: CO reviews MPO to determine if it should be extended or rescinded",
];

const TIMELINE_ITEMS = [
  { requirement: "Immediate", action: "Issue MPO if safety is at risk" },
  { requirement: "24 Hours", action: "Notify victim of rights and available resources" },
  { requirement: "72 Hours", action: "MPO must be reviewed by CO (extend or rescind)" },
];

const COMMON_ISSUES = [
  {
    issue: "Confusion between civilian and military orders",
    solution: "An MPO is only enforceable on base or against the service member. If the victim has a civilian CPO (Civilian Protective Order), the command must enforce it on the installation as well.",
  },
  {
    issue: "Failure to enter MPO into system",
    solution: "Coordinate with PMO to ensure MPO is entered into NCIC/law enforcement systems. This protects the victim off-base as well.",
  },
  {
    issue: "Not reviewing MPO at 72 hours",
    solution: "Set a calendar reminder. MPOs require CO review within 72 hours to determine if conditions have changed.",
  },
];

export function DomesticAbuseResponseContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Shield} title="Domestic Abuse Response" variant="info">
          When a domestic abuse incident occurs, the Commander&apos;s immediate priority is the
          <strong> safety of the victim</strong> and the stability of the unit. Commanders have
          unique authorities, such as the Military Protective Order (MPO), to mitigate immediate risk.
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

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Timeline Requirements
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Requirement</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Action</th>
                </tr>
              </thead>
              <tbody>
                {TIMELINE_ITEMS.map((item) => (
                  <tr key={item.requirement} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.requirement}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <InfoCard icon={AlertTriangle} title="Safety First" variant="warning">
          If there is an <strong>immediate threat to safety</strong>, issue the MPO first and
          document later. Victim safety takes priority over administrative processes.
        </InfoCard>
      </div>
    ),

    mpo: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Military Protective Order (DD Form 2873)
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            A Commander can issue a written order to a Marine to stay away from a victim,
            their residence, and their workplace. Key elements include:
          </p>
          <ul className="mt-4 space-y-2">
            {MPO_ELEMENTS.map((element) => (
              <li key={element} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                {element}
              </li>
            ))}
          </ul>
        </section>

        <InfoCard icon={FileText} title="DD Form 2873" variant="default">
          Use <strong>DD Form 2873</strong> for all Military Protective Orders. Ensure the form
          is complete and coordinates with PMO for system entry.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            MPO Enforcement
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; <strong>Article 90 UCMJ:</strong> Any violation of an MPO is a violation of a lawful order</li>
            <li>&bull; <strong>On-Base:</strong> PMO can enforce immediately</li>
            <li>&bull; <strong>Off-Base:</strong> Must be entered into law enforcement systems</li>
            <li>&bull; <strong>Civilian CPO:</strong> Command must also enforce civilian orders on installation</li>
          </ul>
        </section>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Response Process
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

        <InfoCard icon={Clock} title="72-Hour Review" variant="warning">
          MPOs must be reviewed by the CO within <strong>72 hours</strong> to determine if they
          should be extended or rescinded based on current threat assessment.
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
