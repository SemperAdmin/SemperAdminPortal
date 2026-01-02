"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Scale, AlertTriangle, Users, FileText } from "lucide-react";

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
  { id: "authority", label: "Separation Authority" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const SEPARATION_AUTHORITIES = [
  { condition: "OTH characterization", authority: "GCMCA" },
  { condition: "PTSD/TBI with general characterization", authority: "GCMCA" },
  { condition: "Sexual misconduct cases", authority: "GCMCA" },
  { condition: "Personality disorder separations", authority: "GCMCA" },
  { condition: "Board recommends retention but CA disagrees", authority: "Secretary of the Navy" },
  { condition: "18+ years of service", authority: "DC M&RA" },
];

const BOARD_REQUIREMENTS = [
  "6 or more years of service when OTH is authorized",
  "Marine has not waived the right to a board",
  "Cases where required by regulation",
];

const PROCESS_STEPS = [
  "Commander determines basis for separation exists",
  "Commander notifies Marine of proposed separation",
  "Marine acknowledges receipt and exercises rights",
  "Marine consults with counsel",
  "Marine requests or waives administrative board",
  "Board convened if requested and required",
  "Board makes findings and recommendations",
  "Convening authority endorses board report",
  "Separation authority takes final action",
  "Marine separated or retained per decision",
];

const COMMON_ISSUES = [
  {
    issue: "Marine has PTSD/TBI and OTH recommended",
    solution: "GCMCA is separation authority with medical screening requirements.",
  },
  {
    issue: "Board recommends retention but commander disagrees",
    solution: "Forward to Secretary of the Navy for final decision.",
  },
];

export function AdminSepAuthorityContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Scale} title="Administrative Separation Authority" variant="info">
          Administrative separation authority varies based on the basis for separation,
          characterization of service, and the Marine&apos;s grade and years of service.
          Commanding officers initiate separation processing; separation authority approves
          or disapproves discharge.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Points
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li className="flex items-start gap-2">
              <span className="text-amber-500">&bull;</span>
              <span>Commanding officers <strong>initiate</strong> separation processing</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500">&bull;</span>
              <span>Separation authority <strong>approves or disapproves</strong> discharge</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500">&bull;</span>
              <span>Board required for 6+ years service when OTH authorized</span>
            </li>
          </ul>
        </section>

        <InfoCard icon={AlertTriangle} title="GCMCA Required" variant="warning">
          GCMCA is required for OTH characterization, PTSD/TBI cases with general characterization,
          sexual misconduct cases, and personality disorder separations.
        </InfoCard>
      </div>
    ),

    authority: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Separation Authorities by Condition
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Condition</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Separation Authority</th>
                </tr>
              </thead>
              <tbody>
                {SEPARATION_AUTHORITIES.map((item) => (
                  <tr key={item.condition} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{item.condition}</td>
                    <td className="py-3 font-medium text-zinc-700 dark:text-zinc-300">{item.authority}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            When Board is Required
          </h3>
          <ul className="mt-3 space-y-2">
            {BOARD_REQUIREMENTS.map((req) => (
              <li key={req} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="text-green-500">&#10003;</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Administrative Separation Process
          </h2>
          <div className="mt-6 space-y-4">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Timeline Requirements
          </h3>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between border-b border-zinc-200 pb-2 dark:border-zinc-700">
              <span className="font-medium text-zinc-700 dark:text-zinc-300">Response Time:</span>
              <span className="text-zinc-600 dark:text-zinc-400">At least 2 working days to respond</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-zinc-700 dark:text-zinc-300">Board Convening:</span>
              <span className="text-zinc-600 dark:text-zinc-400">Within 15 working days of notification</span>
            </div>
          </div>
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
