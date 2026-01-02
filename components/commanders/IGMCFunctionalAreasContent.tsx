"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { FileText, AlertTriangle, Download, FolderOpen } from "lucide-react";

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
  { id: "structure", label: "FAC Structure" },
  { id: "process", label: "Implementation" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "CoRE", value: "Common Readiness Events - mandatory items every command is inspected on" },
  { label: "CoRE+", value: "Discretionary items a CG may choose based on unit mission" },
  { label: "Question Set", value: "Specific questions, reference (order), and suggested source document" },
  { label: "The Answer Key", value: "FACs are the standard to which all units are held" },
];

const FAC_STRUCTURE = [
  { element: "Question", description: "The specific compliance requirement being checked" },
  { element: "Reference", description: "The MCO or instruction that establishes the requirement" },
  { element: "Source Document", description: "Suggested evidence to prove compliance" },
  { element: "Compliance Rating", description: "Compliant, Non-Compliant, or Not Applicable" },
];

const PROCESS_STEPS = [
  "Download: Access IGMC website to get most current FACs",
  "Assign Ownership: Every FAC should have a Primary and Alternate owner",
  "Build Folders: Create digital or physical folders that mirror checklist questions",
  "Gather Evidence: Populate folders with source documents that answer each question",
  "Verification: Owners verify documents actually answer the specific question asked",
  "Update Regularly: Refresh when new MCOs are published for functional areas",
];

const OWNERSHIP_EXAMPLES = [
  { fac: "Training FAC", owner: "S-3/Operations" },
  { fac: "Admin FAC", owner: "S-1/Administration" },
  { fac: "Supply FAC", owner: "S-4/Logistics" },
  { fac: "Legal FAC", owner: "Command Legal" },
  { fac: "Safety FAC", owner: "Safety Officer" },
  { fac: "EO FAC", owner: "EOA/EOR" },
];

const COMMON_ISSUES = [
  {
    issue: "Reference mismatch",
    solution: "Providing a document correct under an old order but non-compliant with updated version. Always check that your evidence references the current MCO.",
  },
  {
    issue: "Volume over quality",
    solution: "Providing hundreds of pages that don't answer the specific question. Match your evidence precisely to what the checklist asks.",
  },
  {
    issue: "Outdated FACs",
    solution: "Using last year's checklist. Download fresh FACs from IGMC portal whenever preparing for inspection or when orders change.",
  },
];

export function IGMCFunctionalAreasContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={FileText} title="IGMC Functional Area Checklists" variant="info">
          The Inspector General of the Marine Corps (IGMC) maintains standardized Functional Area
          Checklists (FACs) for every major program in the Corps. These checklists are the
          <strong> &quot;answer key&quot;</strong> to every inspection and the standard to which all units are held.
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

        <InfoCard icon={Download} title="Always Use Current FACs" variant="warning">
          Checklists should be updated whenever a new MCO is published for that functional area.
          <strong> Always download the latest version</strong> from the IGMC website.
        </InfoCard>
      </div>
    ),

    structure: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            FAC Structure
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Each Functional Area Checklist contains these elements:
          </p>
          <div className="mt-4 space-y-3">
            {FAC_STRUCTURE.map((item) => (
              <div key={item.element} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.element}</h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            FAC Ownership Assignments
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">FAC</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Typical Owner</th>
                </tr>
              </thead>
              <tbody>
                {OWNERSHIP_EXAMPLES.map((item) => (
                  <tr key={item.fac} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.fac}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.owner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            FAC Implementation Process
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

        <InfoCard icon={FolderOpen} title="Source Document Folders" variant="default">
          Build <strong>digital or physical folders</strong> that mirror the checklist questions.
          Each folder should contain the exact evidence needed to prove compliance for that item.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Primary & Alternate Owners
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Every FAC should have a Primary and Alternate owner</li>
            <li>&bull; Owners are responsible for maintaining source documents</li>
            <li>&bull; Owners verify documents answer specific checklist questions</li>
            <li>&bull; Alternates ensure continuity during turnover</li>
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
