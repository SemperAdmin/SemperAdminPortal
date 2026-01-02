"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { FlaskConical, AlertTriangle, Clock, Calendar } from "lucide-react";

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
  { id: "types", label: "Test Types" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Monthly Requirement", value: "Unit must test a minimum percentage of personnel each month (typically 10%)" },
  { label: "Random Selection", value: "The majority of tests must be truly random, using an approved selection method (e.g., MCTFS random sweep)" },
  { label: "Probable Cause", value: "Commanders can order a test based on reasonable suspicion or after an incident (e.g., DUI, positive field test)" },
];

const TEST_TYPES = [
  { type: "Random (Inspection)", description: "Routine testing of randomly selected Marines", frequency: "Monthly", authority: "CO" },
  { type: "Probable Cause", description: "Based on reasonable suspicion of drug use", frequency: "As needed", authority: "CO" },
  { type: "Consent", description: "Marine voluntarily agrees to be tested", frequency: "As needed", authority: "CO" },
  { type: "Command-Directed", description: "Ordered by CO for specific reasons (rehabilitation, incident)", frequency: "As needed", authority: "CO" },
  { type: "Medical", description: "Ordered by medical officer for treatment purposes", frequency: "As needed", authority: "Medical Officer" },
];

const PROCESS_STEPS = [
  "Selection: Use MCTFS or another approved random selection method to generate the list of Marines to be tested",
  "Notification: UUC notifies Marines discreetly and ensures they report promptly to the collection site",
  "Collection: Follow strict chain-of-custody procedures—witness, seal, label, and document each specimen",
  "Submission: Submit specimens to the approved Drug Testing Laboratory within required timeframes",
  "Tracking: UUC logs all tests in the unit ledger and tracks pending results",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "Monthly", action: "Test minimum percentage of unit strength (typically 10%)" },
  { requirement: "Annually", action: "Every member of the unit should be tested at least once per fiscal year" },
  { requirement: "72 Hours", action: "Specimens must be shipped to the lab within 72 hours of collection" },
];

const COMMON_ISSUES = [
  { issue: "Predictable Testing Patterns", solution: "Marines know when 'random' tests will occur. Vary testing days and times to maintain unpredictability." },
  { issue: "Missed Monthly Requirement", solution: "Unit fails to meet the monthly testing percentage. Track testing metrics and schedule additional sweeps if behind." },
  { issue: "Chain of Custody Errors", solution: "Improper labeling or witnessing invalidates results. Ensure UUC is properly trained and follows checklist procedures." },
];

export function TestingRequirementsContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={FlaskConical} title="Testing Requirements" variant="info">
          The Marine Corps Biochemical Testing Program requires units to conduct regular urinalysis testing to deter drug use and identify Marines who violate the Corps&apos; zero-tolerance drug policy. Testing must be random, unpredictable, and procedurally correct to ensure valid results.
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
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Types of Urinalysis Tests</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Type</th>
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Description</th>
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Frequency</th>
                  <th className="py-3 text-left font-medium text-zinc-900 dark:text-zinc-100">Authority</th>
                </tr>
              </thead>
              <tbody>
                {TEST_TYPES.map((item) => (
                  <tr key={item.type} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.type}</td>
                    <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                    <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{item.frequency}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.authority}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <InfoCard icon={Calendar} title="Random Selection" variant="default">
          Random tests must use an approved selection method (MCTFS random sweep) to ensure true randomness. <strong>Never</strong> allow predictable patterns.
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Testing Process</h2>
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
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Chain of Custody Requirements</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Direct observation of specimen collection</li>
            <li>&bull; Proper sealing and labeling of specimen containers</li>
            <li>&bull; Documentation of all personnel handling specimens</li>
            <li>&bull; Secure storage until shipment to laboratory</li>
            <li>&bull; Shipping within 72 hours of collection</li>
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
        <InfoCard icon={AlertTriangle} title="Chain of Custody is Critical" variant="warning">
          Any break in the chain of custody can <strong>invalidate</strong> a positive result. Ensure your UUC follows proper procedures for every single test.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
