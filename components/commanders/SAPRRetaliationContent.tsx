"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { ShieldAlert, AlertTriangle, Clock, Eye } from "lucide-react";

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
  { id: "types", label: "Retaliation Types" },
  { id: "process", label: "Prevention" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Forms of Retaliation", value: "Includes reprisal (adverse FITREPs/marks), social ostracism (being excluded from unit functions), and maltreatment" },
  { label: "Command Climate", value: "The commander must set the tone that reporting is a sign of strength and the victim remains a valued team member" },
  { label: "Monitoring", value: "CO is required to monitor the victim's career progression and unit integration for at least 12 months following a report" },
];

const RETALIATION_TYPES = [
  { type: "Reprisal", description: "Adverse personnel actions such as negative FITREPs, unfair duty assignments, or denial of opportunities", severity: "High" },
  { type: "Social Ostracism", description: "Exclusion from unit functions, being shunned by peers, or isolation from the team", severity: "High" },
  { type: "Maltreatment", description: "Cruel or harsh treatment, bullying, or creating a hostile work environment", severity: "High" },
  { type: "Professional Sabotage", description: "Undermining work performance, withholding information, or setting up for failure", severity: "Medium" },
];

const PROCESS_STEPS = [
  "Counseling: Formally counsel the subject and the work section on the prohibition of retaliation",
  "Climate Assessments: Use the SARC and VAs to gauge the 'shop level' atmosphere",
  "Review: Personally review any marks or FITREPs for the victim to ensure they are objective and fair",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "12 Months", action: "Monitor victim's career progression and unit integration" },
  { requirement: "Ongoing", action: "Regular climate assessments through SARC/VA" },
  { requirement: "Immediately", action: "Address any reported retaliation incidents" },
];

const COMMON_ISSUES = [
  { issue: "Subtle Retaliation", solution: "Social ostracism can be harder to identify than overt reprisal. Actively engage with the victim and use trusted NCOs to assess the work environment." },
  { issue: "Unintentional Exclusion", solution: "Victim may be 'protected' out of unit activities. Ensure the victim remains included in normal operations unless they request otherwise." },
  { issue: "Biased Evaluations", solution: "FITREPs or proficiency marks may unconsciously reflect bias. Personally review all evaluations for victims during the monitoring period." },
];

export function SAPRRetaliationContent({ data }: Props) {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "High": return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
      case "Medium": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300";
    }
  };

  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={ShieldAlert} title="SAPR Retaliation Prevention" variant="info">
          Retaliation against a victim or witness is a violation of the UCMJ. Commanders must proactively monitor the unit climate to ensure that a report of sexual assault does not result in professional reprisal or social ostracism.
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
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            <Clock className="h-5 w-5" />Timeline Requirements
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <tbody>
                {TIMELINE_REQUIREMENTS.map((item) => (
                  <tr key={item.requirement} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.requirement}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    ),
    types: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Types of Retaliation</h2>
          <div className="mt-4 space-y-3">
            {RETALIATION_TYPES.map((item) => (
              <div key={item.type} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.type}</h3>
                  <span className={"rounded-full px-2 py-1 text-xs font-medium " + getSeverityColor(item.severity)}>
                    {item.severity} Severity
                  </span>
                </div>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
        <InfoCard icon={Eye} title="Watch for Subtle Signs" variant="default">
          Social ostracism can be as damaging as overt reprisal. Watch for the victim being <strong>excluded, isolated, or treated differently</strong> by their peers.
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Retaliation Prevention</h2>
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
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Monitoring Actions</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Regular check-ins with the victim (through appropriate channels)</li>
            <li>&bull; Review all FITREPs and proficiency marks for objectivity</li>
            <li>&bull; Monitor duty assignments for fairness</li>
            <li>&bull; Assess inclusion in unit activities and functions</li>
            <li>&bull; Track career progression milestones</li>
            <li>&bull; Engage SARC/VA for climate assessments</li>
          </ul>
        </section>
      </div>
    ),
    issues: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Problems &amp; Solutions</h2>
          <div className="mt-4 space-y-4">
            {COMMON_ISSUES.map((item) => (
              <div key={item.issue} className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
                <h4 className="font-medium text-amber-800 dark:text-amber-200">Problem: {item.issue}</h4>
                <p className="mt-2 text-sm text-amber-700 dark:text-amber-300"><strong>Solution:</strong> {item.solution}</p>
              </div>
            ))}
          </div>
        </section>
        <InfoCard icon={AlertTriangle} title="12-Month Monitoring Required" variant="warning">
          Commanders are required to monitor the victim&apos;s career progression and unit integration for <strong>at least 12 months</strong> following a report. Document your monitoring efforts.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
