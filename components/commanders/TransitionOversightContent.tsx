"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { LogOut, AlertTriangle, Clock, CheckCircle } from "lucide-react";

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
  { label: "TRS", value: "Transition Readiness Seminar - A mandatory five-day course covering resume building, VA benefits, and financial planning" },
  { label: "Capstone Review", value: "The final 'check' where the CO (or designee) verifies the Marine has a viable post-service plan" },
  { label: "Early Initiation", value: "Transitioning is a process, not a single event; it should begin at least 12 months prior to EAS" },
];

const TIMELINE_REQUIREMENTS = [
  { milestone: "12 Months Prior", action: "Begin transition planning; initial meeting with Transition Counselor" },
  { milestone: "365-180 Days Prior", action: "Complete Individual Transition Plan (ITP)" },
  { milestone: "180 Days Prior", action: "All Marines must have completed TRS" },
  { milestone: "90 Days Prior", action: "Capstone Review must be completed; CO signs DD Form 2648" },
];

const CAREER_READINESS_STANDARDS = [
  { standard: "Viable Resume", description: "Completed and reviewed resume meeting industry standards" },
  { standard: "12-Month Budget", description: "Financial plan covering first year post-separation" },
  { standard: "VA Benefits Enrollment", description: "Registered with VA for applicable benefits (GI Bill, disability, etc.)" },
  { standard: "Employment/Education Plan", description: "Job offer, school acceptance, or documented career pathway" },
];

const PROCESS_STEPS = [
  "Pre-Separation Counseling: Marine meets with the Transition Counselor to identify goals",
  "TRS Attendance: Unit ensures the Marine is 'off-duty' to attend the full 5-day seminar",
  "Verification: The CO reviews the Marine's Individual Transition Plan (ITP) and Career Readiness Standards (CRS)",
  "Capstone: CO signs off on the DD Form 2648, certifying the Marine is ready for separation",
];

const COMMON_ISSUES = [
  { issue: "Critical Mission Conflict", solution: "Commanders refusing to let a Marine attend TRS because of a field exercise. Transition requirements are federally mandated and must be prioritized." },
  { issue: "Last-Minute Capstone", solution: "Waiting until the final weeks to conduct the Capstone Review. Schedule Capstone at least 90 days prior to EAS." },
];

export function TransitionOversightContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={LogOut} title="Transition Readiness Oversight" variant="info">
          Transition Readiness Oversight ensures that Marines leaving the service (EAS) or retiring are prepared for civilian life. The Commander&apos;s role is to ensure the Marine has the time and resources to complete mandatory transition requirements.
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
            <Clock className="h-5 w-5" />Critical Timelines
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <tbody>
                {TIMELINE_REQUIREMENTS.map((item) => (
                  <tr key={item.milestone} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.milestone}</td>
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
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Career Readiness Standards (CRS)</h2>
          <div className="mt-4 space-y-3">
            {CAREER_READINESS_STANDARDS.map((item) => (
              <div key={item.standard} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.standard}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
        <InfoCard icon={CheckCircle} title="Capstone Verification" variant="default">
          The Commander (or designee) must verify the Marine has met all Career Readiness Standards before signing the DD Form 2648.
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Transition Process</h2>
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
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Commander Responsibilities</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Ensure Marines are released for TRS attendance</li>
            <li>&bull; Review Individual Transition Plan (ITP)</li>
            <li>&bull; Verify Career Readiness Standards are met</li>
            <li>&bull; Conduct or delegate Capstone Review</li>
            <li>&bull; Sign DD Form 2648 certifying readiness</li>
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
        <InfoCard icon={AlertTriangle} title="Federal Mandate" variant="warning">
          TRS and transition requirements are <strong>federally mandated</strong>. Mission requirements do not supersede a Marine&apos;s right to attend transition programs.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
