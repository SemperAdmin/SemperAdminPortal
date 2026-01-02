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
  { id: "requirements", label: "Requirements" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Privacy", value: "The report is sent using the SARC-provided Case Control Number (CCN) to protect the victim's PII" },
  { label: "Command Accountability", value: "Documents that the victim was advised of their rights, offered a Special Victim Counsel (SVC), and that safety measures were considered" },
  { label: "Continuous Updates", value: "After the initial report, commanders must provide 30-day updates until the case is adjudicated or closed" },
];

const REPORT_ELEMENTS = [
  { element: "Case Control Number (CCN)", description: "Protects victim PII while tracking the case" },
  { element: "Victim Rights Notification", description: "Confirmation victim was informed of all available resources" },
  { element: "SVC Offer", description: "Documentation that Special Victim Counsel was offered" },
  { element: "Safety Measures", description: "Actions taken to ensure victim safety (MPO, separation, etc.)" },
  { element: "Investigation Status", description: "Current status of any law enforcement investigation" },
];

const PROCESS_STEPS = [
  "Notification: Receive notification of an Unrestricted Report from the SARC",
  "Liaison: Coordinate with the SARC to ensure all initial advocacy and medical steps were offered",
  "Drafting: Complete the standardized report template found in MCO 1752.5C",
  "Submission: Route the report through the chain of command to the first GO within the 8-day window",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "8 Calendar Days", action: "The report must reach the first GO within 8 days of the report date" },
  { requirement: "30-Day Updates", action: "Provide status updates every 30 days until case is closed" },
];

const COMMON_ISSUES = [
  { issue: "Late Submissions", solution: "Failing to track the 8-day clock, which begins the moment the DD Form 2910 is signed. Set a calendar reminder immediately upon notification." },
];

export function EightDayReportContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={FileText} title="8-Day Incident Report" variant="info">
          The 8-Day Incident Report is a mandatory notification provided to the first General Officer (GO) in the chain of command following an Unrestricted Report of sexual assault. It ensures high-level oversight of the initial response and victim care.
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
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Report Elements</h2>
          <div className="mt-4 space-y-3">
            {REPORT_ELEMENTS.map((item) => (
              <div key={item.element} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.element}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
        <InfoCard icon={Shield} title="Privacy Protection" variant="default">
          Always use the <strong>Case Control Number (CCN)</strong> instead of the victim&apos;s name in all reports to protect their personally identifiable information.
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">8-Day Report Process</h2>
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
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Ongoing Requirements</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Submit 30-day updates to the GO until case closure</li>
            <li>&bull; Track all victim services provided</li>
            <li>&bull; Document any changes to safety measures</li>
            <li>&bull; Note investigation milestones and final disposition</li>
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
        <InfoCard icon={AlertTriangle} title="Clock Starts at DD 2910 Signature" variant="warning">
          The 8-day window begins when the DD Form 2910 is signed—<strong>not</strong> when you receive notification. Track this date carefully to avoid late submissions.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
