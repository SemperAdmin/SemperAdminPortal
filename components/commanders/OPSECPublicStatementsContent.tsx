"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { ShieldAlert, AlertTriangle, Eye, Lock } from "lucide-react";

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
  { id: "cil", label: "Critical Info List" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Critical Information List (CIL)", value: "Commanders must identify specific details (troop movements, specific capabilities, future dates) that are never releasable" },
  { label: "The Mosaic Effect", value: "Multiple pieces of seemingly harmless unclassified information can be combined by an adversary to reveal a classified picture" },
  { label: "Public Domain is Permanent", value: "Once a statement is made or a photo is posted, it cannot be truly 'deleted' from the digital world" },
];

const CIL_EXAMPLES = [
  { category: "Personnel", examples: "Exact numbers, names of key leaders, personnel vulnerabilities" },
  { category: "Operations", examples: "Specific dates, times, routes, and objectives of future operations" },
  { category: "Capabilities", examples: "Specific equipment quantities, technical specifications, maintenance status" },
  { category: "Locations", examples: "Exact grid coordinates, detailed facility layouts, security procedures" },
];

const PROCESS_STEPS = [
  "Define the CIL: Establish what information is sensitive for the specific mission or unit",
  "Review Protocol: Every press release, speech, or social media post must be reviewed by the Unit OPSEC Officer or PAO",
  "Think Like the Adversary: Ask: 'How could a competitor use this information to hurt my unit?'",
  "Sanitization: Remove specific dates, numbers, or technical specs that fall on the CIL before release",
];

const COMMON_ISSUES = [
  { issue: "Background Hazards", solution: "Releasing a 'human interest' photo where a map, white-board, or computer screen with sensitive data is visible in the background. Always check backgrounds before posting." },
  { issue: "Over-Sharing Specifics", solution: "Using exact numbers of personnel or equipment rather than general terms. Say 'a platoon-sized element' instead of '34 Marines.'" },
];

export function OPSECPublicStatementsContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={ShieldAlert} title="OPSEC in Public Statements" variant="info">
          Operational Security (OPSEC) in public statements ensures that while the command is transparent, it does not inadvertently reveal &quot;critical information&quot; that could be exploited by adversaries. Every public release must undergo a security review.
        </InfoCard>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key Points</h2>
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
        <InfoCard icon={Eye} title="Continuous Vigilance" variant="warning">
          OPSEC reviews must happen for <strong>every single public engagement</strong>—not just major announcements.
        </InfoCard>
      </div>
    ),
    cil: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Critical Information List Categories</h2>
          <div className="mt-4 space-y-3">
            {CIL_EXAMPLES.map((item) => (
              <div key={item.category} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.category}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.examples}</p>
              </div>
            ))}
          </div>
        </section>
        <InfoCard icon={Lock} title="The Mosaic Effect" variant="default">
          Individual pieces of information may seem harmless, but when combined with other public data, they can reveal sensitive operational details. Think holistically about what your unit has already released.
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">OPSEC Review Process</h2>
          <div className="mt-6 space-y-4">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">{index + 1}</span>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{step}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Pre-Release Checklist</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Does this contain any CIL items?</li>
            <li>&bull; Could this be combined with other public info to reveal something sensitive?</li>
            <li>&bull; Are there any identifiable backgrounds, screens, or documents in photos?</li>
            <li>&bull; Have exact numbers been replaced with general terms?</li>
            <li>&bull; Has the OPSEC Officer or PAO reviewed this?</li>
          </ul>
        </section>
      </div>
    ),
    issues: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Problems & Solutions</h2>
          <div className="mt-4 space-y-4">
            {COMMON_ISSUES.map((item) => (
              <div key={item.issue} className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
                <h4 className="font-medium text-amber-800 dark:text-amber-200">Problem: {item.issue}</h4>
                <p className="mt-2 text-sm text-amber-700 dark:text-amber-300"><strong>Solution:</strong> {item.solution}</p>
              </div>
            ))}
          </div>
        </section>
        <InfoCard icon={AlertTriangle} title="Once Posted, Always Public" variant="warning">
          The internet never forgets. Even &quot;deleted&quot; posts may have been archived, screenshot, or cached. Review BEFORE posting.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
