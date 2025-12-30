"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";

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

const KEY_POINTS = [
  { label: "Authority", value: "SECNAVINST 1650.1H (Navy/Marine Corps Awards Manual)" },
  { label: "Unit Awards", value: "Process through S-1/Admin" },
  { label: "Personal Awards", value: "Recommended by CO or senior leadership" },
  { label: "Time Limit", value: "3 years from act (2 years for combat)" },
  { label: "Documentation", value: "NAVMC 11533 (Personal Award Recommendation)" },
  { label: "Tracking", value: "MOL Awards Summary" },
];

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "types", label: "Award Types" },
  { id: "recommending", label: "Recommending Awards" },
  { id: "processing", label: "Processing & Tracking" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const PERSONAL_AWARDS = [
  { award: "Medal of Honor", criteria: "Conspicuous gallantry at risk of life above and beyond call of duty" },
  { award: "Navy Cross", criteria: "Extraordinary heroism in combat" },
  { award: "Silver Star", criteria: "Gallantry in action against enemy" },
  { award: "Bronze Star", criteria: "Heroic or meritorious achievement in combat" },
  { award: "Purple Heart", criteria: "Wounds received in action against enemy" },
  { award: "Meritorious Service Medal", criteria: "Outstanding non-combat meritorious achievement" },
  { award: "Navy/Marine Corps Commendation Medal", criteria: "Meritorious service or achievement" },
  { award: "Navy/Marine Corps Achievement Medal", criteria: "Professional or leadership achievement" },
];

const UNIT_AWARDS = [
  { award: "Presidential Unit Citation", criteria: "Extraordinary heroism in action against armed enemy" },
  { award: "Navy Unit Commendation", criteria: "Outstanding heroism or extremely meritorious service" },
  { award: "Meritorious Unit Commendation", criteria: "Meritorious service or achievement" },
  { award: "Battle Efficiency Award (Battle E)", criteria: "Unit excellence in all warfare areas" },
];

const CAMPAIGN_SERVICE = [
  "Combat Action Ribbon - Active participation in ground or surface combat",
  "Sea Service Deployment Ribbon - 90+ days deployed on sea duty",
  "Global War on Terrorism Service Medal - Designated GWOT operations",
  "Afghanistan Campaign Medal - Designated Afghanistan operations",
  "Iraqi Campaign Medal - Designated Iraqi operations",
  "Humanitarian Service Medal - Designated humanitarian operations",
];

const REQUIRED_ELEMENTS = [
  "Full name, rank, MOS, and unit of nominee",
  "Specific dates and locations of actions",
  "Detailed narrative of actions/achievements",
  "Impact and significance of actions",
  "Supporting witness statements (for valor awards)",
  "Chain of command endorsements",
];

const CITATION_TIPS = [
  "Begin with full name and rank",
  "Include specific dates and location",
  "Describe actions in third person",
  "Quantify achievements when possible",
  "Show impact on mission/unit",
  "End with statement of merit",
];

const COMMON_ISSUES = [
  { issue: "Vague narrative", solution: "Include specific dates, numbers, and measurable results" },
  { issue: "Missing endorsements", solution: "Route through complete chain of command" },
  { issue: "Incorrect form version", solution: "Use current NAVMC 11533" },
  { issue: "Time limit exceeded", solution: "Include justification for delay" },
  { issue: "Award level mismatch", solution: "Ensure criteria matches recommendation" },
  { issue: "Citation format errors", solution: "Follow SECNAVINST 1650.1H template" },
];

const PROCESSING_TIMELINE = [
  { stage: "Recommendation submitted", timeframe: "Day 0" },
  { stage: "S-1/Admin review", timeframe: "1-5 days" },
  { stage: "Command endorsement", timeframe: "5-15 days" },
  { stage: "Awards board review", timeframe: "15-30 days" },
  { stage: "Approval authority decision", timeframe: "30-90 days" },
  { stage: "Certificate/Medal procurement", timeframe: "30-60 days after approval" },
  { stage: "Presentation", timeframe: "Upon receipt" },
];

export function AwardsDecorationsContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Awards and Decorations Overview
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Awards and decorations recognize exceptional service, achievement, and sacrifice. As an admin,
            you play a critical role in ensuring Marines receive proper recognition for their contributions.
            This includes recommending awards, processing recommendations, updating records, and ensuring
            timely presentation.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Points
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Element</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody>
                {KEY_POINTS.map((point) => (
                  <tr key={point.label} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{point.label}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{point.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Award Categories
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Personal Awards</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Valor awards (combat heroism)</li>
                <li>• Meritorious awards (service/achievement)</li>
                <li>• Campaign/service medals</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Unit Awards</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Presidential Unit Citation</li>
                <li>• Navy Unit Commendation</li>
                <li>• Meritorious Unit Commendation</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Service Awards</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Good Conduct Medal</li>
                <li>• Sea Service Deployment Ribbon</li>
                <li>• Campaign/Expeditionary medals</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Admin Responsibility</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            Ensure recommendations are complete and accurate before submission. Track all pending awards
            and follow up on processing delays. Verify entries in MOL/MCTFS match official records.
          </p>
        </section>
      </div>
    ),

    types: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Personal Awards
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Award</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Criteria</th>
                </tr>
              </thead>
              <tbody>
                {PERSONAL_AWARDS.map((row) => (
                  <tr key={row.award} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{row.award}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{row.criteria}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Unit Awards
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Award</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Criteria</th>
                </tr>
              </thead>
              <tbody>
                {UNIT_AWARDS.map((row) => (
                  <tr key={row.award} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{row.award}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{row.criteria}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Campaign and Service Awards
          </h3>
          <ul className="mt-4 space-y-2">
            {CAMPAIGN_SERVICE.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Award Devices
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Common Devices</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Gold Star - 2nd-5th award (in lieu of medal)</li>
                <li>• Silver Star - 6th award (in lieu of 5 gold stars)</li>
                <li>• Combat "V" - Valor in combat</li>
                <li>• Bronze Star - Additional awards of ribbons</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Campaign Stars</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Bronze Service Star - One campaign phase</li>
                <li>• Silver Service Star - Five campaign phases</li>
                <li>• Arrowhead - Amphibious assault participation</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    ),

    recommending: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Award Recommendation Process
          </h3>
          <ol className="mt-4 space-y-2">
            {[
              "Identify deserving Marine and appropriate award level",
              "Complete NAVMC 11533 (Personal Award Recommendation)",
              "Write detailed narrative/citation",
              "Obtain witness statements if required (valor awards)",
              "Submit through chain of command",
              "Track status through awards system",
            ].map((step, index) => (
              <li key={step} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">
                  {index + 1}
                </span>
                <span className="text-sm text-zinc-700 dark:text-zinc-300">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Required Elements
          </h3>
          <ul className="mt-4 space-y-2">
            {REQUIRED_ELEMENTS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-[var(--sa-red)] mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Citation Writing Tips
          </h3>
          <ul className="mt-4 space-y-2">
            {CITATION_TIPS.map((tip) => (
              <li key={tip} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Time Limits
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Standard Awards</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                3 years from date of act, achievement, or service
              </p>
            </div>
            <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
              <h4 className="font-medium text-amber-800 dark:text-amber-200">Combat Awards</h4>
              <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
                2 years from date of action (may be waived with justification)
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Common Issues</h4>
          <div className="mt-2 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-amber-200 dark:border-amber-700">
                  <th className="py-2 pr-4 text-left font-semibold text-amber-900 dark:text-amber-100">Issue</th>
                  <th className="py-2 text-left font-semibold text-amber-900 dark:text-amber-100">Solution</th>
                </tr>
              </thead>
              <tbody>
                {COMMON_ISSUES.map((row) => (
                  <tr key={row.issue} className="border-b border-amber-100 dark:border-amber-800">
                    <td className="py-2 pr-4 font-medium text-amber-700 dark:text-amber-300">{row.issue}</td>
                    <td className="py-2 text-amber-600 dark:text-amber-400">{row.solution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    ),

    processing: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Processing Timeline
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Stage</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Timeframe</th>
                </tr>
              </thead>
              <tbody>
                {PROCESSING_TIMELINE.map((row) => (
                  <tr key={row.stage} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{row.stage}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{row.timeframe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Tracking Awards
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">MOL Awards Summary</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• View current awards in record</li>
                <li>• Check for missing entries</li>
                <li>• Verify award dates and citations</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Unit Tracker</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Maintain local spreadsheet</li>
                <li>• Track submission dates</li>
                <li>• Monitor approval status</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Updating Records
          </h3>
          <ol className="mt-4 space-y-1 list-decimal list-inside text-sm text-zinc-700 dark:text-zinc-300">
            <li>Receive approved award package</li>
            <li>Update SRB/OQR with award entry</li>
            <li>Submit Unit Diary entry for MCTFS update</li>
            <li>Verify MOL reflects award</li>
            <li>File copy of citation in record</li>
            <li>Schedule presentation ceremony</li>
          </ol>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Missing Awards
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            If a Marine is missing authorized awards:
          </p>
          <ol className="mt-4 space-y-1 list-decimal list-inside text-sm text-zinc-700 dark:text-zinc-300">
            <li>Verify eligibility from service record</li>
            <li>Gather supporting documentation</li>
            <li>Submit correction request to S-1</li>
            <li>S-1 processes Unit Diary</li>
            <li>For OMPF corrections, use ORMA</li>
          </ol>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Order of Precedence</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            Awards are worn and recorded in order of precedence per SECNAVINST 1650.1H. Ensure proper
            sequence when updating records. Medal of Honor is highest precedence, followed by other
            personal decorations, then unit awards, then service awards.
          </p>
        </section>
      </div>
    ),

    checklist: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Award Recommendation
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Identify appropriate award level",
              "Complete NAVMC 11533",
              "Write detailed narrative",
              "Include specific dates and locations",
              "Quantify achievements",
              "Obtain witness statements (if required)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Submission
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Review package for completeness",
              "Obtain chain of command endorsements",
              "Submit to S-1/Admin",
              "Retain copy for tracking",
              "Log in unit awards tracker",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            After Approval
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Receive approved package",
              "Update SRB/OQR",
              "Submit Unit Diary entry",
              "Verify MOL update",
              "Order medal/ribbon if needed",
              "Schedule presentation ceremony",
              "File citation copy in record",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Record Verification
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Review MOL Awards Summary",
              "Compare to SRB/OQR entries",
              "Identify any missing awards",
              "Verify order of precedence",
              "Check for correct devices",
              "Submit corrections as needed",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
