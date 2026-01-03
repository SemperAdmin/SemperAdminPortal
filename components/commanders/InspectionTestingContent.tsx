"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { ClipboardCheck, AlertTriangle, Clock, Shield } from "lucide-react";

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
  { id: "requirements", label: "Requirements" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Non-Punitive Intent", value: "To be legally valid as an 'inspection,' the primary purpose must be unit readiness and security, not a search for evidence for a specific criminal prosecution" },
  { label: "Selection", value: "The Commander must decide the scope (e.g., 'all of Echo Company' or 'the entire barracks')" },
  { label: "Unit Inspections", value: "Results can be used for both administrative actions (ADSEP) and judicial actions (NJP/Court-Martial) provided the inspection was not a 'subterfuge' for a search" },
];

const INSPECTION_VS_SEARCH = [
  { aspect: "Purpose", inspection: "Unit readiness and security", search: "Finding evidence of a specific crime" },
  { aspect: "Scope", inspection: "Entire unit or sub-unit", search: "Specific individual(s)" },
  { aspect: "Authorization", inspection: "Commander's authority", search: "Probable cause required" },
  { aspect: "Documentation", inspection: "Inspection code (IU)", search: "Search authorization/warrant" },
];

const PROCESS_STEPS = [
  "Commander's Intent: Define the purpose and scope of the inspection in writing",
  "Coordination: Work with the UUC and SACO to ensure sufficient testing supplies are on hand",
  "Execution: Conduct the sweep; ensure 100% of the designated population is accounted for and tested",
  "Documentation: Clearly document the 'Inspection' code (usually IU) on the urinalysis ledger",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "Random Timing", action: "Inspections should be conducted at various times to prevent predictability" },
];

const COMMON_ISSUES = [
  { issue: "Subterfuge", solution: "Testing a specific group because you suspect them of drug use but labeling it an 'inspection' to bypass probable cause. This will result in the evidence being suppressed in court." },
  { issue: "Incomplete Testing", solution: "Failing to test Marines who are on leave or TAD upon their return, creating 'holes' in the unit's 100% inspection goal." },
];

export function InspectionTestingContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={ClipboardCheck} title="Inspection Testing" variant="info">
          Inspection testing (often conducted during &quot;Health and Welfare&quot; inspections) is a command-wide sweep used to ensure the security, military fitness, and good order and discipline of the unit. Unlike random testing, an inspection is typically directed at an entire sub-unit or the entire command.
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
    requirements: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Inspection vs. Search</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Aspect</th>
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Inspection</th>
                  <th className="py-3 text-left font-medium text-zinc-900 dark:text-zinc-100">Search</th>
                </tr>
              </thead>
              <tbody>
                {INSPECTION_VS_SEARCH.map((item) => (
                  <tr key={item.aspect} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.aspect}</td>
                    <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{item.inspection}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.search}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <InfoCard icon={Shield} title="Legal Validity" variant="warning">
          For an inspection to be legally valid, the <strong>primary purpose</strong> must be unit readiness—not targeting a specific Marine suspected of drug use.
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Inspection Testing Process</h2>
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
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">100% Accountability</h3>
          <ul className="mt-3 list-disc list-inside space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>Account for all Marines in the designated population</li>
            <li>Track Marines on leave, TAD, or hospitalized</li>
            <li>Test absent Marines upon their return</li>
            <li>Document any exceptions with justification</li>
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
        <InfoCard icon={AlertTriangle} title="Subterfuge Will Be Suppressed" variant="warning">
          If a court determines the &quot;inspection&quot; was actually a targeted search without probable cause, <strong>all evidence will be suppressed</strong> and cannot be used for prosecution.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
