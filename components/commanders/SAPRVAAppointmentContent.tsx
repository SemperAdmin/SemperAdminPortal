"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { UserCheck, AlertTriangle, Clock, Award } from "lucide-react";

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
  { label: "Selection Criteria", value: "Must be E-5 or above with no history of NJP, court-martial, or adverse administrative action (specifically PAC or SAPR violations)" },
  { label: "Certification", value: "VAs must complete 40 hours of initial training and obtain D-SAACP certification" },
  { label: "Availability", value: "VAs must be accessible 24/7 when on call to respond to a victim in crisis" },
];

const VA_REQUIREMENTS = [
  { requirement: "Rank", description: "Sergeant (E-5) or above", mandatory: true },
  { requirement: "Record", description: "No history of NJP, court-martial, or adverse administrative action", mandatory: true },
  { requirement: "Character", description: "Demonstrated maturity and emotional intelligence", mandatory: true },
  { requirement: "Training", description: "40-hour installation VA course completion", mandatory: true },
  { requirement: "Certification", description: "D-SAACP (Defense Sexual Assault Advocate Certification Program)", mandatory: true },
  { requirement: "Availability", description: "Able to respond 24/7 when on call", mandatory: true },
];

const PROCESS_STEPS = [
  "Screening: CO and SgtMaj personally screen nominees for maturity and emotional intelligence",
  "Training: Nominees attend the 40-hour installation VA course",
  "Appointment: Once certified via D-SAACP, the CO signs a formal Appointment Letter",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "40 Hours", action: "Initial VA training course completion" },
  { requirement: "Biennial", action: "D-SAACP certification renewal required every 2 years" },
  { requirement: "Ongoing", action: "Continuing education and refresher training" },
];

const COMMON_ISSUES = [
  { issue: "Inadequate Screening", solution: "Not thoroughly vetting nominees for character and history. Personally review service records and conduct interviews with the CO and SgtMaj." },
  { issue: "Lapsed Certification", solution: "D-SAACP certification expires without renewal. Track certification dates and schedule renewals before expiration." },
  { issue: "Insufficient Coverage", solution: "Not enough VAs to provide 24/7 coverage. Appoint multiple VAs per unit and establish a duty rotation schedule." },
];

export function SAPRVAAppointmentContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={UserCheck} title="SAPR VA Appointment" variant="info">
          SAPR Victim Advocates (VAs) are the front-line responders. Commanders are responsible for selecting and appointing mature, high-character Marines to serve in this critical collateral duty.
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
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">VA Requirements</h2>
          <div className="mt-4 space-y-3">
            {VA_REQUIREMENTS.map((item) => (
              <div key={item.requirement} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.requirement}</h3>
                  {item.mandatory && (
                    <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800 dark:bg-red-900/30 dark:text-red-300">
                      Mandatory
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
        <InfoCard icon={Award} title="D-SAACP Certification" variant="default">
          D-SAACP certification is the <strong>national standard</strong> for victim advocates. It ensures VAs meet DoD-wide competency requirements.
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">VA Appointment Process</h2>
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
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Screening Considerations</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Review complete service record for adverse actions</li>
            <li>&bull; Assess emotional maturity and interpersonal skills</li>
            <li>&bull; Confirm ability to maintain confidentiality</li>
            <li>&bull; Evaluate stability of current assignment (avoid imminent PCS)</li>
            <li>&bull; Consider operational tempo impact on availability</li>
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
        <InfoCard icon={AlertTriangle} title="24/7 Coverage Required" variant="warning">
          Victims can report at any time. Ensure your unit has <strong>multiple trained VAs</strong> with a duty rotation to provide round-the-clock coverage.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
