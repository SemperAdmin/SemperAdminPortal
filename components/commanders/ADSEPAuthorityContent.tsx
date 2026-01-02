"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Gavel, AlertTriangle, Clock, Users } from "lucide-react";

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
  { id: "authorities", label: "Authority Levels" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "GCMCA", value: "General Court-Martial Convening Authority (typically the first General Officer) - the only authority that can approve an 'Other Than Honorable' (OTH) discharge" },
  { label: "SPCMCA", value: "Special Court-Martial Convening Authority (Battalion/Regiment level) - can approve 'Honorable' or 'General' discharges for specific bases" },
  { label: "Board Entitlement", value: "If a Marine has 6+ years of service or an OTH is being recommended, a board must hear the case first" },
];

const AUTHORITY_LEVELS = [
  { authority: "General Court-Martial Convening Authority (GCMCA)", characterizations: "Honorable, General, Other Than Honorable", notes: "Required for OTH characterizations" },
  { authority: "Special Court-Martial Convening Authority (SPCMCA)", characterizations: "Honorable, General", notes: "Limited to specific separation bases (e.g., weight control, PFT failure)" },
  { authority: "Summary Court-Martial Convening Authority", characterizations: "Limited", notes: "Rarely used for ADSEP purposes" },
];

const PROCESS_STEPS = [
  "Initiation: The immediate commander recommends separation and identifies the basis",
  "Legal Review: The SJA reviews the package for procedural compliance",
  "Board Proceeding: If required, a board of three members hears the case and makes a recommendation",
  "Action by SA: The Separation Authority (SA) reviews the entire record and the board's recommendation (if applicable)",
  "Decision: The SA directs retention or separation and determines the final characterization",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "15 Working Days", action: "Standard processing time for cases not requiring a board" },
  { requirement: "5 Working Days", action: "Timeframe for a Marine to acknowledge notification and elect/waive rights" },
];

const COMMON_ISSUES = [
  { issue: "Authority Mismatch", solution: "An SPCMCA attempting to finalize a discharge with an OTH characterization; this will result in the discharge being voided by HQMC. Always verify the SA has authority for the recommended characterization." },
  { issue: "Board Waivers", solution: "Failing to properly document a Marine's waiver of their board rights, which can stall the process at the SJA level. Ensure all waivers are in writing and properly witnessed." },
];

export function ADSEPAuthorityContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Gavel} title="ADSEP Authority" variant="info">
          Administrative Separation (ADSEP) authority identifies which level of command has the legal power to finalize a discharge. Understanding these levels is critical to ensuring the separation is legally binding and the characterization of service is authorized.
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
    authorities: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Separation Authority Levels</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Authority</th>
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Characterizations</th>
                  <th className="py-3 text-left font-medium text-zinc-900 dark:text-zinc-100">Notes</th>
                </tr>
              </thead>
              <tbody>
                {AUTHORITY_LEVELS.map((item) => (
                  <tr key={item.authority} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.authority}</td>
                    <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{item.characterizations}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <InfoCard icon={Users} title="Board Entitlement" variant="default">
          A Marine is entitled to an Administrative Discharge Board if:
          <ul className="mt-2 space-y-1">
            <li>&bull; They have 6 or more years of total military service</li>
            <li>&bull; An OTH characterization is being recommended</li>
          </ul>
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">ADSEP Process</h2>
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
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Marine&apos;s Rights</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Consult with counsel</li>
            <li>&bull; Submit statements on their own behalf</li>
            <li>&bull; Present witnesses and evidence</li>
            <li>&bull; Board hearing (if entitled)</li>
            <li>&bull; Waive rights in writing</li>
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
        <InfoCard icon={AlertTriangle} title="OTH Requires GCMCA" variant="warning">
          Only the General Court-Martial Convening Authority (typically a General Officer) can approve an Other Than Honorable discharge. Lower authorities attempting to do so will have the discharge voided.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
