"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { FileX, AlertTriangle, Clock, Scale } from "lucide-react";

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
  { id: "actions", label: "Actions" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Mandatory ADSEP", value: "Per the MARCORSEPMAN, any Marine with a confirmed 'Wrongful Use' of a controlled substance must be processed for separation" },
  { label: "Characterization", value: "Wrongful drug use often results in an 'Other Than Honorable' (OTH) discharge, though the final decision rests with the Separation Authority" },
  { label: "Loss of Benefits", value: "An OTH characterization for drug use typically leads to the loss of the GI Bill and other VA benefits" },
];

const DISCHARGE_CHARACTERIZATIONS = [
  { type: "Honorable", likelihood: "Rare", description: "Almost never granted for drug offenses", benefits: "Full benefits" },
  { type: "General (Under Honorable)", likelihood: "Uncommon", description: "May be granted for first-time offenders with strong records", benefits: "Most benefits retained" },
  { type: "Other Than Honorable", likelihood: "Most Common", description: "Standard characterization for drug offenses", benefits: "Most benefits lost (including GI Bill)" },
];

const PROCESS_STEPS = [
  "NJP/Judicial Action: Commander imposes NJP or refers the Marine to a Court-Martial for the UCMJ violation (Article 112a)",
  "Notification: The Marine is formally notified of the intent to separate them from the service",
  "Board Entitlement: If the Marine has 6+ years of service or an OTH is recommended, they are entitled to an ADSEP Board",
  "Final Recommendation: The CO forwards the package to the General Court-Martial Convening Authority (GCMCA) for final action",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "30 Days", action: "Target for initiating ADSEP paperwork following a confirmed positive result" },
];

const COMMON_ISSUES = [
  { issue: "Retention Requests", solution: "Commanders attempting to 'keep' a high-performing Marine who popped positive. While a CO can recommend retention, the threshold for approval at the HQMC level is extremely high and rarely granted for drugs." },
];

export function SubstanceAdminActionsContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={FileX} title="Substance Abuse Administrative Actions" variant="info">
          The Marine Corps maintains a &quot;Zero Tolerance&quot; policy regarding the illegal use of controlled substances. While the Commander has discretion in some areas of discipline, administrative separation (ADSEP) processing is <strong>mandatory</strong> for all drug-related offenses.
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
    actions: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Discharge Characterizations</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Type</th>
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Likelihood</th>
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Description</th>
                  <th className="py-3 text-left font-medium text-zinc-900 dark:text-zinc-100">Benefits</th>
                </tr>
              </thead>
              <tbody>
                {DISCHARGE_CHARACTERIZATIONS.map((item) => (
                  <tr key={item.type} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.type}</td>
                    <td className="py-3 pr-4">
                      <span className={`rounded-full px-2 py-1 text-xs font-medium ${item.likelihood === "Most Common" ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300" : item.likelihood === "Uncommon" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" : "bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300"}`}>
                        {item.likelihood}
                      </span>
                    </td>
                    <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.benefits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <InfoCard icon={Scale} title="Zero Tolerance Policy" variant="warning">
          ADSEP processing is <strong>mandatory</strong> for confirmed drug offenses. The only question is the characterization of service, not whether separation will occur.
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Administrative Action Process</h2>
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
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Board Entitlement</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Marines with 6+ years of service are entitled to an ADSEP Board</li>
            <li>&bull; Marines facing OTH characterization are entitled to a Board</li>
            <li>&bull; The Board can recommend retention (rarely approved for drugs)</li>
            <li>&bull; Final authority rests with the GCMCA</li>
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
        <InfoCard icon={AlertTriangle} title="Retention is Rarely Approved" variant="warning">
          While a CO can recommend retention, HQMC approval for drug offenses is <strong>extremely rare</strong>. Do not give the Marine false hope—focus on ensuring a fair process.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
