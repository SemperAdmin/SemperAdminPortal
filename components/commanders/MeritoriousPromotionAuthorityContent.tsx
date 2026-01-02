"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { Award, AlertTriangle, Users, Calendar } from "lucide-react";

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
  { id: "criteria", label: "Criteria" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Performance-Based", value: "Solely based on individual performance and leadership; it is not a 'reward' for longevity" },
  { label: "Quotas", value: "Commands are given specific meritorious promotion allocations (quotas) quarterly or annually based on unit size" },
  { label: "Board Process", value: "Typically involves a formal board where candidates are evaluated on their military appearance, knowledge, and record" },
];

const BOARD_CRITERIA = [
  { criterion: "Military Appearance", description: "Uniform presentation, grooming standards, and bearing" },
  { criterion: "Marine Corps Knowledge", description: "Understanding of history, customs, and current policies" },
  { criterion: "MOS Proficiency", description: "Technical expertise and job performance" },
  { criterion: "Leadership", description: "Demonstrated ability to lead and mentor subordinates" },
  { criterion: "OMPF Review", description: "Overall record including FITREPs/PRO/CONs and awards" },
];

const PROCESS_STEPS = [
  "Nomination: Subordinate leaders nominate Marines who exceed all standards",
  "Boarding: A board of SNCOs or Officers interviews the candidates and reviews their OMPF",
  "Selection: The board provides a prioritized list to the Commander",
  "Authorization: The Commander approves the selection and signs the promotion warrant",
];

const TIMELINE_REQUIREMENTS = [
  { frequency: "Quarterly", action: "Meritorious promotions for Cpl and Sgt are usually conducted on a quarterly cycle" },
  { frequency: "Annual", action: "Meritorious promotions for SNCOs are conducted annually at the HQMC level" },
];

const COMMON_ISSUES = [
  { issue: "Passing the Torch", solution: "Using meritorious promotion for a Marine who is simply 'next in line' rather than the most deserving. Merit should be exceptional, not routine." },
  { issue: "Administrative Errors", solution: "Failing to check if the Marine has the required PME or is in a 'Promotion Restricted' status (e.g., BCP or NJP) before the board." },
];

export function MeritoriousPromotionAuthorityContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Award} title="Meritorious Promotion Authority" variant="info">
          Meritorious promotions are intended to recognize Marines who have demonstrated a degree of proficiency and leadership significantly above that of their peers. These promotions bypass the standard Time in Service (TIS) and Time in Grade (TIG) requirements.
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
            <Calendar className="h-5 w-5" />Timeline Requirements
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <tbody>
                {TIMELINE_REQUIREMENTS.map((item) => (
                  <tr key={item.frequency} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.frequency}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    ),
    criteria: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Board Evaluation Criteria</h2>
          <div className="mt-4 space-y-3">
            {BOARD_CRITERIA.map((item) => (
              <div key={item.criterion} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.criterion}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
        <InfoCard icon={Users} title="Board Composition" variant="default">
          Boards typically consist of SNCOs or Officers who can objectively evaluate candidates. The board president should be senior enough to lend credibility to the process.
        </InfoCard>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Meritorious Promotion Process</h2>
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
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Pre-Board Checks</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; Verify Marine has completed required PME</li>
            <li>&bull; Confirm not in Promotion Restricted status</li>
            <li>&bull; Check for pending adverse actions (NJP, BCP, etc.)</li>
            <li>&bull; Verify PFT/CFT scores are current and passing</li>
            <li>&bull; Review OMPF for disqualifying entries</li>
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
        <InfoCard icon={AlertTriangle} title="Merit, Not Longevity" variant="warning">
          Meritorious promotions should recognize exceptional performance and leadership—not simply reward time in grade.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
