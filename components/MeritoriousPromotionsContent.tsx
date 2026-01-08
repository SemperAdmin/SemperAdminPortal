"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";
import { MCO_URLS } from "@/data/references";

const MCOLink = ({ mco, url }: { mco: string; url: string }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="font-medium text-[var(--sa-navy)] underline decoration-1 underline-offset-2 hover:text-[var(--sa-gold)] dark:text-[var(--sa-cream)] dark:hover:text-[var(--sa-gold)]"
  >
    {mco}
  </a>
);

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

const KEY_POINTS: { label: string; value: string; url?: string }[] = [
  { label: "Purpose", value: "Promote exceptional Marines ahead of peers" },
  { label: "Authority", value: "MCO 1400.32 (Enlisted Promotions)", url: MCO_URLS.PROMOTION_MANUAL },
  { label: "Process", value: "Command nomination → Board → Selection" },
  { label: "Frequency", value: "Quarterly (typically)" },
  { label: "Eligibility", value: "Meet TIG/TIS minimums" },
];

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "eligibility", label: "Eligibility" },
  { id: "board-process", label: "Board Process" },
  { id: "nomination", label: "Nomination Package" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const ELIGIBILITY_REQUIREMENTS = [
  { requirement: "Time in Grade", description: "Meet minimum TIG for next higher grade" },
  { requirement: "Time in Service", description: "Meet minimum TIS requirements" },
  { requirement: "Physical Fitness", description: "Current PFT/CFT within standards" },
  { requirement: "Rifle Qualification", description: "Current rifle qualification" },
  { requirement: "Conduct", description: "No pending adverse actions" },
  { requirement: "PME", description: "Completed required PME for current grade" },
  { requirement: "Commander Endorsement", description: "Nominated by chain of command" },
];

const BOARD_COMPOSITION = [
  { member: "Board President", description: "Senior officer (typically Major or above)" },
  { member: "Recorder", description: "Documents proceedings" },
  { member: "Board Members", description: "Typically 3-5 SNCOs/Officers" },
];

const BOARD_PHASES = [
  { phase: "Package Review", description: "Board reviews nomination packages" },
  { phase: "Appearance", description: "Marine appears before board for interview" },
  { phase: "Deliberation", description: "Board discusses and votes on candidates" },
  { phase: "Recommendation", description: "Board recommends selectees to CG/CO" },
  { phase: "Approval", description: "CG/CO approves final selections" },
];

const NOMINATION_ELEMENTS = [
  "NAVMC 118(11) - Administrative Remarks documenting nomination",
  "Commander's endorsement letter",
  "Copy of JEPES/performance evaluations",
  "PFT/CFT scores",
  "Rifle qualification scores",
  "PME completion documentation",
  "Awards and achievements",
  "Letter from Marine (if required locally)",
];

const BOARD_QUESTIONS = [
  "Tell us about yourself and your Marine Corps career",
  "Why do you deserve to be promoted ahead of your peers?",
  "What leadership challenges have you faced?",
  "What are your career goals?",
  "How do you embody Marine Corps values?",
  "What would you do differently as an NCO/SNCO?",
  "Current events and Marine Corps knowledge questions",
];

export function MeritoriousPromotionsContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Meritorious Promotions
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Meritorious promotion is a commander&apos;s tool to promote exceptional Marines ahead of their peers.
            Unlike regular promotions based on cutting scores or selection boards, meritorious promotions
            recognize Marines who demonstrate outstanding performance, leadership, and potential for
            increased responsibility.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Points
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Element</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody>
                {KEY_POINTS.map((point) => (
                  <tr key={point.label} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{point.label}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">
                      {point.url ? <MCOLink mco={point.value} url={point.url} /> : point.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Who Gets Promoted Meritoriously?
          </h3>
          <div className="mt-4 space-y-4">
            <p className="text-sm text-zinc-700 dark:text-zinc-300">
              Meritorious promotion candidates typically demonstrate:
            </p>
            <ul className="space-y-2">
              {[
                "Exceptional job performance beyond peers",
                "Strong leadership abilities",
                "Outstanding physical fitness",
                "Professional appearance and bearing",
                "Initiative and self-improvement",
                "Community involvement and volunteerism",
                "Mentorship of junior Marines",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Allocations</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            Meritorious promotions are limited by allocations. Commands receive a certain number of
            meritorious promotion slots based on their authorized strength. Competition can be intense,
            with many qualified Marines competing for limited positions.
          </p>
        </section>
      </div>
    ),

    eligibility: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Eligibility Requirements
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Requirement</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody>
                {ELIGIBILITY_REQUIREMENTS.map((item) => (
                  <tr key={item.requirement} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.requirement}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Minimum TIG Requirements
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">To Corporal (E-4)</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• 8 months TIG as LCpl</li>
                <li>• Lance Corporal&apos;s Seminar (recommended)</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">To Sergeant (E-5)</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• 12 months TIG as Cpl</li>
                <li>• Corporal&apos;s Course completed</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">To Staff Sergeant (E-6)</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• 24 months TIG as Sgt</li>
                <li>• Sergeant&apos;s Course completed</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Higher Grades</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Per <MCOLink mco="MCO 1400.32" url={MCO_URLS.PROMOTION_MANUAL} /></li>
                <li>• Increasing TIG requirements</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Disqualifying Factors</h4>
          <ul className="mt-2 space-y-1 text-sm text-amber-700 dark:text-amber-300">
            <li>• Pending NJP, court-martial, or administrative action</li>
            <li>• Body composition failure</li>
            <li>• Overdue for PFT, CFT, or rifle qualification</li>
            <li>• Previous pass-over for meritorious promotion</li>
            <li>• Missing required PME</li>
          </ul>
        </section>
      </div>
    ),

    "board-process": (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Board Composition
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Member</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody>
                {BOARD_COMPOSITION.map((item) => (
                  <tr key={item.member} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.member}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Board Phases
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Phase</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody>
                {BOARD_PHASES.map((item) => (
                  <tr key={item.phase} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.phase}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common Board Questions
          </h3>
          <ul className="mt-4 space-y-2">
            {BOARD_QUESTIONS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Board Preparation</h4>
          <ul className="mt-2 space-y-1 text-sm text-blue-700 dark:text-blue-300">
            <li>• Practice board questions with peers or mentors</li>
            <li>• Know your MOS technical knowledge</li>
            <li>• Study current events and Marine Corps news</li>
            <li>• Review your own service record</li>
            <li>• Prepare uniform to inspection standards</li>
          </ul>
        </section>
      </div>
    ),

    nomination: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Nomination Package Elements
          </h3>
          <ul className="mt-4 space-y-2">
            {NOMINATION_ELEMENTS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Commander&apos;s Endorsement
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The commander&apos;s endorsement letter should address:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Specific examples of exceptional performance",
              "Leadership accomplishments",
              "Impact on unit mission",
              "Comparison to peers",
              "Recommendation for promotion",
              "Potential for increased responsibility",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Package Submission Timeline
          </h3>
          <ol className="mt-4 space-y-2">
            {[
              "Commander identifies candidate for nomination",
              "Marine notified and begins preparation",
              "Supporting documents gathered",
              "Commander endorsement written",
              "Package submitted to S-1",
              "S-1 verifies eligibility and forwards",
              "Board convenes and reviews packages",
            ].map((step, index) => (
              <li key={step} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">
                  {index + 1}
                </span>
                <span className="text-sm text-zinc-700 dark:text-zinc-300">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Package Quality</h4>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            A well-prepared nomination package significantly improves selection chances. Ensure all
            documents are current, accurate, and professionally presented. Missing or incomplete
            items may disqualify the package.
          </p>
        </section>
      </div>
    ),

    checklist: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Eligibility Verification
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Meet TIG requirement for next grade",
              "Meet TIS requirement",
              "Current PFT within standards",
              "Current CFT within standards",
              "Current rifle qualification",
              "Required PME completed",
              "No pending adverse actions",
              "Body composition in standards",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Nomination Package
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Administrative remarks (NAVMC 118(11))",
              "Commander endorsement letter",
              "Performance evaluations/JEPES",
              "PFT scorecard",
              "CFT scorecard",
              "Rifle qualification scorecard",
              "PME certificates",
              "Awards documentation",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Board Preparation
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Uniform inspected and ready",
              "Haircut current",
              "Practice board questions",
              "Study MOS technical knowledge",
              "Review current events",
              "Know your service record",
              "Prepare personal statement",
              "Get adequate rest before board",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
