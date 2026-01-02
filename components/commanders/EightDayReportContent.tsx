"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { FileText, AlertTriangle, Clock, Shield } from "lucide-react";

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
  { id: "content", label: "Report Content" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Non-Identifiable", value: "Names not used; SARC-provided tracking number protects victim privacy" },
  { label: "Purpose", value: "Documents that victim received all required services and command took safety actions" },
  { label: "Updates", value: "Must be updated every 30 days until case is closed" },
  { label: "Visibility", value: "Ensures General Officer oversight of case management" },
];

const REQUIRED_ELEMENTS = [
  "Case tracking number (from SARC)",
  "Date of incident and date reported",
  "Confirmation victim was offered SARC/VA services",
  "Confirmation victim was offered Special Victims' Counsel (SVC)",
  "Confirmation victim was offered medical care",
  "Confirmation victim was offered chaplain services",
  "Safety measures implemented",
  "Status of any Military Protective Order (MPO)",
  "NCIS case status",
];

const PROCESS_STEPS = [
  "Notification: Commander is notified of an Unrestricted report",
  "Liaison: Coordinate with SARC to obtain case tracking number",
  "Drafting: Complete the 8-Day Report template from MCO 1752.5C",
  "Review: Ensure all required elements are addressed",
  "Submission: Route through chain of command to first General Officer",
  "Updates: Submit 30-day updates until case closure",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "Within 8 Days", action: "Initial report must be submitted after Unrestricted report filed" },
  { requirement: "Every 30 Days", action: "Update reports required until case is closed" },
  { requirement: "Case Closure", action: "Final report documenting case resolution" },
];

const COMMON_ISSUES = [
  {
    issue: "Missing components",
    solution: "Failing to confirm in the report that the victim was offered a Special Victims' Counsel (SVC). Use the checklist in MCO 1752.5C Appendix D to ensure all elements are covered.",
  },
  {
    issue: "Late submission",
    solution: "The 8-day clock is a 'hard' deadline monitored by the Inspector General. Build internal tracking to ensure reports are drafted and routed with time to spare.",
  },
  {
    issue: "Identifying information",
    solution: "Including victim's name or other identifying information in the report. Always use the SARC-provided tracking number only.",
  },
];

export function EightDayReportContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={FileText} title="8-Day Incident Report" variant="info">
          Upon receiving an Unrestricted report of sexual assault, the Commander is required
          to submit a detailed report through the chain of command to the <strong>first
          General Officer</strong>. This ensures high-level visibility and oversight of
          the case management process.
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

        <InfoCard icon={Clock} title="Hard Deadline" variant="warning">
          The 8-day deadline is monitored by the <strong>Inspector General</strong>.
          Late submissions reflect poorly on command climate and may trigger additional scrutiny.
        </InfoCard>
      </div>
    ),

    content: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Required Report Elements
          </h2>
          <ul className="mt-4 space-y-2">
            {REQUIRED_ELEMENTS.map((element) => (
              <li key={element} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--sa-navy)]" />
                {element}
              </li>
            ))}
          </ul>
        </section>

        <InfoCard icon={Shield} title="Privacy Protection" variant="default">
          To protect the victim&apos;s privacy, <strong>names are never used</strong> in the
          8-Day report. Use only the tracking number provided by the SARC.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            30-Day Update Requirements
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Current status of NCIS investigation</li>
            <li>&bull; Any changes to safety measures</li>
            <li>&bull; Victim services utilization updates</li>
            <li>&bull; Legal proceedings status (if applicable)</li>
            <li>&bull; Any expedited transfer requests/actions</li>
          </ul>
        </section>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            8-Day Report Process
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

        <InfoCard icon={AlertTriangle} title="Template Location" variant="warning">
          The 8-Day Report template is found in <strong>MCO 1752.5C, Appendix D</strong>.
          Use the current template—outdated versions may be missing required elements.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Routing
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Commander signs the report</li>
            <li>&bull; Routes through each echelon in the chain of command</li>
            <li>&bull; Each level may add comments but may not delay</li>
            <li>&bull; Final destination: First General Officer in chain</li>
            <li>&bull; Maintain copies at each level for tracking</li>
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
