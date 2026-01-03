"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Users, AlertTriangle, Clock, FileText } from "lucide-react";

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
  { id: "responsibilities", label: "Responsibilities" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Standardization", value: "The DOSS ensures that 'the way we train' matches 'the way we fight' and follows all Naval Aviation and Marine Corps technical manuals" },
  { label: "Direct Access", value: "The DOSS should have a direct line to the Commander for safety and standardization concerns that bypass the standard staff hierarchy" },
  { label: "NATOPS/SOP Oversight", value: "Manages the Naval Air Training and Operating Procedures Standardization (NATOPS) program and unit-level Standard Operating Procedures (SOPs)" },
];

const DOSS_RESPONSIBILITIES = [
  { area: "NATOPS Program", description: "Oversee all NATOPS evaluations and ensure aircrew meet annual proficiency standards", frequency: "Continuous" },
  { area: "Unit SOPs", description: "Maintain and review tactical and safety SOPs for currency and compliance", frequency: "Annual" },
  { area: "Safety Council", description: "Chair the Unit Safety Council and provide standardization briefs", frequency: "Monthly" },
  { area: "Trend Analysis", description: "Review Near Miss and HAZREP data to identify SOP modification needs", frequency: "Ongoing" },
  { area: "Training Standards", description: "Ensure training matches tactical doctrine and safety requirements", frequency: "Continuous" },
];

const PROCESS_STEPS = [
  "Selection: CO selects a highly experienced officer (usually an O-4 or O-5) with extensive tactical and safety credentials",
  "Council Integration: The DOSS chairs the Unit Safety Council and provides the 'Standardization' brief during all-hands meetings",
  "Feedback Loop: The DOSS reviews all 'Near Miss' and HAZREP data to determine if unit SOPs need to be modified",
  "Evaluations: Oversees NATOPS evaluations and ensures all aircrew meet the minimum annual proficiency standards",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "Monthly", action: "Meet with the DOSS for a formal review of unit standardization trends" },
  { requirement: "Annual", action: "Review and re-sign unit-level tactical and safety SOPs" },
];

const COMMON_ISSUES = [
  { issue: "Siloing the DOSS", solution: "Treating the DOSS as a 'clerk' for NATOPS jackets rather than a tactical advisor. The DOSS should be engaged in mission planning and tactical discussions." },
  { issue: "Ignoring Deviations", solution: "Allowing 'unit-isms' (customs not found in the order) to override standardized NATOPS procedures, which is a leading indicator of impending mishaps." },
];

export function DOSSRelationshipContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Users} title="DOSS Relationship" variant="info">
          In aviation and high-tempo operational commands, the Director of Safety and Standardization (DOSS) is a specialized advisor. Unlike a general safety officer, the DOSS focuses on the integration of safety protocols directly into tactical standardization and NATOPS compliance.
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
    responsibilities: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DOSS Responsibilities</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Area</th>
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Description</th>
                  <th className="py-3 text-left font-medium text-zinc-900 dark:text-zinc-100">Frequency</th>
                </tr>
              </thead>
              <tbody>
                {DOSS_RESPONSIBILITIES.map((item) => (
                  <tr key={item.area} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.area}</td>
                    <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                    <td className="py-3">
                      <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                        {item.frequency}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <InfoCard icon={FileText} title="NATOPS Program" variant="default">
          The DOSS manages the Naval Air Training and Operating Procedures Standardization (NATOPS) program, ensuring all aircrew maintain currency and proficiency per established standards.
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DOSS Integration Process</h2>
          <div className="mt-6 space-y-4">
            {PROCESS_STEPS.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">{index + 1}</span>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{step}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DOSS Selection Criteria</h3>
          <ul className="mt-3 list-disc list-inside space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>Highly experienced officer (typically O-4 or O-5)</li>
            <li>Extensive tactical qualifications</li>
            <li>Strong safety credentials and training</li>
            <li>Ability to provide direct, candid feedback to CO</li>
            <li>Respected by aircrew and operational personnel</li>
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
        <InfoCard icon={AlertTriangle} title="Unit-isms Are Dangerous" variant="warning">
          Deviations from NATOPS (&quot;unit-isms&quot;) are a <strong>leading indicator of mishaps</strong>. The DOSS must have the authority to identify and eliminate non-standard practices before they cause harm.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
