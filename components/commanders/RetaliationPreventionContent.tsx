"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Shield, AlertTriangle, Eye, Users } from "lucide-react";

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
  { id: "forms", label: "Forms of Retaliation" },
  { id: "prevention", label: "Prevention" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Definition", value: "Any adverse action taken against a Marine for reporting a violation of law or policy" },
  { label: "Protected Reports", value: "PAC, SAPR, EO, IG complaints, and other protected communications" },
  { label: "Protection Scope", value: "Both reporters and witnesses are protected from retaliation" },
  { label: "UCMJ Violation", value: "Retaliation is punishable under Article 132 of the UCMJ" },
];

const RETALIATION_FORMS = [
  {
    form: "Reprisal",
    description: "Official acts taken through the chain of command",
    examples: "Adverse evaluations, denial of privileges, unfavorable assignments, non-selection for schools/training",
  },
  {
    form: "Social Ostracism",
    description: "Exclusion from groups and informal networks",
    examples: "Not invited to unit events, excluded from group chats, 'cold shoulder' treatment, isolation",
  },
  {
    form: "Maltreatment",
    description: "Cruel or abusive treatment",
    examples: "Excessive tasking, public ridicule, threats, harassment by peers",
  },
];

const PREVENTION_STEPS = [
  "Upon receiving a report, counsel ALL involved parties on the prohibition of retaliation",
  "Command Team must actively monitor the complainant's work environment",
  "Check for signs of 'the cold shoulder' or exclusion from unit activities",
  "Maintain regular contact with the complainant throughout the process",
  "Investigate ANY allegation of retaliation as a separate, serious UCMJ violation",
  "Continue monitoring until the case is closed and threat of reprisal has passed",
];

const COMMON_ISSUES = [
  {
    issue: "Subtle Ostracism",
    solution: "The most difficult form to catch—the victim is no longer invited to 'shop lunches' or group chats after filing a report. Commanders must actively look for these patterns through direct conversations with the complainant.",
  },
  {
    issue: "Peer-driven retaliation",
    solution: "Retaliation doesn't only come from leadership. Peers may take it upon themselves to punish the reporter. Leaders at all levels must address this behavior immediately.",
  },
  {
    issue: "Delayed career impact",
    solution: "Retaliation may manifest months later in evaluations or assignment decisions. Track reporter career progression and compare to peers.",
  },
];

export function RetaliationPreventionContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Shield} title="Retaliation Prevention" variant="info">
          Retaliation is any adverse action taken against a Marine for reporting a violation of
          law or policy (specifically PAC, SAPR, or EO). It is the most common reason victims
          remain silent and is a punishable offense under the UCMJ.
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

        <InfoCard icon={AlertTriangle} title="Command Responsibility" variant="warning">
          Commanders are <strong>responsible</strong> for the safety and career progression
          of those who report misconduct. Failure to prevent retaliation is itself a failure
          of command.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Who is Protected
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Marines who file complaints (PAC, SAPR, EO, IG)</li>
            <li>&bull; Witnesses who provide testimony</li>
            <li>&bull; Bystanders who intervene or report</li>
            <li>&bull; Those who assist others in filing complaints</li>
            <li>&bull; Anyone who participates in an investigation</li>
          </ul>
        </section>
      </div>
    ),

    forms: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Forms of Retaliation
          </h2>
          <div className="mt-4 space-y-4">
            {RETALIATION_FORMS.map((item) => (
              <div key={item.form} className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-900/20">
                <h3 className="font-semibold text-red-800 dark:text-red-200">{item.form}</h3>
                <p className="mt-1 text-sm text-red-700 dark:text-red-300">{item.description}</p>
                <div className="mt-2">
                  <span className="text-xs font-medium text-red-600 dark:text-red-400">Examples:</span>
                  <p className="text-sm text-red-700 dark:text-red-300">{item.examples}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <InfoCard icon={Users} title="The Bystander Role" variant="default">
          Witnesses are also protected from retaliation. Marines who come forward to support
          a complaint must be safeguarded just like the primary reporter.
        </InfoCard>
      </div>
    ),

    prevention: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Prevention Process
          </h2>
          <div className="mt-6 space-y-4">
            {PREVENTION_STEPS.map((step, index) => (
              <div key={step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <InfoCard icon={Eye} title="Continuous Monitoring" variant="warning">
          Monitoring must continue until the case is closed <strong>and</strong> the threat
          of reprisal has passed. This may extend well beyond the investigation.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Monitoring Actions
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Regular check-ins with the complainant</li>
            <li>&bull; Review of work assignments and evaluations</li>
            <li>&bull; Monitor social dynamics within the unit</li>
            <li>&bull; Track career progression compared to peers</li>
            <li>&bull; Maintain open door for concerns</li>
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
