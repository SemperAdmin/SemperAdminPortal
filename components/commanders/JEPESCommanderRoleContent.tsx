"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { BarChart3, AlertTriangle, Clock, MessageSquare } from "lucide-react";

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
  { id: "pillars", label: "Command Input" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Command Input", value: "Commanders provide subjective marks in four pillars: Character, MOS/Mission, Leadership, Personal Appearance" },
  { label: "Continuous Feedback", value: "Monthly counseling; scores should reflect entire period, not just the last week" },
  { label: "Transparency", value: "Marines can see their JEPES scores in real-time on MOL for ownership of promotion competitiveness" },
  { label: "Data-Driven", value: "100% objective data (PFT, CFT, Rifle, MCMAP) combined with subjective Command Input" },
];

const COMMAND_INPUT_PILLARS = [
  {
    pillar: "Character",
    description: "Integrity, moral courage, accountability, and adherence to Marine Corps values",
    considerations: ["Trustworthiness", "Ethical behavior", "Personal responsibility", "Bearing and conduct"],
  },
  {
    pillar: "MOS and Mission Accomplishment",
    description: "Technical proficiency and contribution to unit mission success",
    considerations: ["MOS knowledge", "Job performance", "Initiative", "Problem-solving"],
  },
  {
    pillar: "Leadership",
    description: "Ability to lead peers and juniors, influence others, and develop subordinates",
    considerations: ["Leading by example", "Mentorship", "Decision-making", "Team building"],
  },
  {
    pillar: "Personal Appearance",
    description: "Adherence to grooming standards, uniform regulations, and physical fitness",
    considerations: ["Uniform appearance", "Grooming standards", "Physical conditioning", "Professional image"],
  },
];

const PROCESS_STEPS = [
  "Data Validation: Ensure S-3 and S-1 data (PFT, CFT, Rifle, MCMAP) is accurately reflected in MCTFS",
  "Monthly Counseling: NCOs and SNCOs conduct monthly counseling with junior Marines on JEPES standing",
  "Performance Observation: Chain of command observes and documents performance in each pillar",
  "Submit Marks: Commander (or delegated representative) approves Command Input marks in MOL JEPES module",
  "Quarterly Verification: Verify marks are submitted and accurate before promotion cutoff",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "Monthly", action: "Performance counseling should occur with each junior Marine" },
  { requirement: "Quarterly", action: "Command Input marks must be submitted/verified in MOL" },
  { requirement: "Before Cutoff", action: "Objective data must be entered before promotion cutoff date" },
];

const COMMON_ISSUES = [
  {
    issue: "'Average' bias",
    solution: "Automatically giving everyone a '2.5' or '3.0' without looking at individual performance. Evaluate each Marine against the pillar criteria and mark accordingly.",
  },
  {
    issue: "Late data entry",
    solution: "If a Marine runs a 300 PFT but the S-3 doesn't run the unit diary entry before the cutoff, the Marine may miss the promotion window. Build tracking systems for objective data entry.",
  },
  {
    issue: "Infrequent counseling",
    solution: "Waiting until quarterly marks to discuss performance. Monthly counseling ensures no surprises and allows Marines to correct deficiencies before they affect promotion.",
  },
];

export function JEPESCommanderRoleContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={BarChart3} title="JEPES Commander Role" variant="info">
          The Junior Enlisted Performance Evaluation System (JEPES) replaced the old &quot;Pro/Con&quot;
          system for Privates through Corporals. It uses a <strong>100% objective data-driven
          score</strong> (warfighting, physical toughness, mental agility) combined with a
          subjective <strong>Command Input</strong> score.
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

        <InfoCard icon={MessageSquare} title="Transparency is Key" variant="default">
          Marines can see their JEPES scores in <strong>real-time on MOL</strong>. This
          transparency allows them to take ownership of their promotion competitiveness
          and address deficiencies proactively.
        </InfoCard>
      </div>
    ),

    pillars: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Command Input Pillars
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Commanders (via the chain of command) provide marks in four pillars:
          </p>
        </section>

        {COMMAND_INPUT_PILLARS.map((pillar) => (
          <section key={pillar.pillar} className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              {pillar.pillar}
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{pillar.description}</p>
            <div className="mt-4">
              <h4 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Considerations:</h4>
              <ul className="mt-2 grid grid-cols-2 gap-2">
                {pillar.considerations.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <span className="h-2 w-2 rounded-full bg-[var(--sa-navy)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        <InfoCard icon={AlertTriangle} title="Evaluate Individually" variant="warning">
          Each Marine should be evaluated against the pillar criteria individually.
          Avoid &quot;average bias&quot; by taking time to assess actual performance in each area.
        </InfoCard>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            JEPES Process
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

        <InfoCard icon={Clock} title="Monthly Counseling" variant="default">
          JEPES is designed for <strong>monthly counseling</strong>. The scores should
          reflect the Marine&apos;s performance over the entire period, not just the last week.
          Consistent feedback prevents surprises at promotion time.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Data Validation Checklist
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; PFT scores accurately reflected in MCTFS</li>
            <li>&bull; CFT scores entered and current</li>
            <li>&bull; Rifle qualification scores updated</li>
            <li>&bull; MCMAP belt levels current</li>
            <li>&bull; PME completion status verified</li>
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
