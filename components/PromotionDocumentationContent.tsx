"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";

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

const KEY_POINTS = [
  { label: "Primary Authority", value: "MCO 1400.32 (Enlisted Promotions)" },
  { label: "Tracking System", value: "MCTFS (Marine Corps Total Force System)" },
  { label: "Score Verification", value: "Monthly MARADMIN" },
  { label: "Promotion Types", value: "Score-based, Selection Board, Meritorious" },
  { label: "Admin Contact", value: "Unit S-1/Admin or IPAC" },
];

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "eligibility", label: "Eligibility" },
  { id: "jepes-promotions", label: "JEPES Score Promotions" },
  { id: "selection-boards", label: "Selection Boards" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const ELIGIBILITY_FACTORS = [
  { factor: "Time in Grade (TIG)", description: "Minimum time required at current rank" },
  { factor: "Time in Service (TIS)", description: "Total time on active duty" },
  { factor: "Required Training", description: "PME completion (Corporal's Course, Sergeant's Course, etc.)" },
  { factor: "Physical Fitness", description: "Current PFT/CFT scores on record" },
  { factor: "Rifle Qualification", description: "Current rifle score on record" },
  { factor: "Conduct", description: "No pending legal/administrative actions" },
  { factor: "Proficiency Marks", description: "JEPES scores meet minimum requirements" },
];

const TIG_REQUIREMENTS = [
  { currentRank: "PFC (E-2)", promotionTo: "LCpl (E-3)", tig: "8 months" },
  { currentRank: "LCpl (E-3)", promotionTo: "Cpl (E-4)", tig: "8 months" },
  { currentRank: "Cpl (E-4)", promotionTo: "Sgt (E-5)", tig: "12 months" },
  { currentRank: "Sgt (E-5)", promotionTo: "SSgt (E-6)", tig: "24 months" },
  { currentRank: "SSgt (E-6)", promotionTo: "GySgt (E-7)", tig: "36 months" },
];

const JEPES_SCORE_COMPONENTS = [
  { component: "Mission Performance", weight: "50%", description: "Commander's input on job performance" },
  { component: "Individual Character", weight: "25%", description: "Personal conduct and integrity" },
  { component: "Warrior Skills", weight: "15%", description: "PFT, CFT, rifle scores" },
  { component: "PME Completion", weight: "10%", description: "Professional Military Education" },
];

const SELECTION_BOARD_RANKS = [
  { rank: "SSgt (E-6)", board: "Staff Sergeant Selection Board" },
  { rank: "GySgt (E-7)", board: "Gunnery Sergeant Selection Board" },
  { rank: "MSgt (E-8)", board: "Master Sergeant/First Sergeant Selection Board" },
  { rank: "MGySgt (E-9)", board: "Master Gunnery Sergeant/Sergeant Major Selection Board" },
];

const BOARD_PACKAGE_ITEMS = [
  "Complete service record review",
  "Current fitness reports (SNCOs)",
  "PME completion documentation",
  "Awards and decorations",
  "Special duty assignments",
  "Deployment history",
  "Adverse material (if any)",
  "Photo (if required)",
];

const DOCUMENTATION_CHECKLIST = [
  "Verify TIG/TIS in MCTFS",
  "Confirm PME completion recorded",
  "Check PFT/CFT scores current",
  "Verify rifle qualification current",
  "Review OMPF for completeness",
  "Check JEPES scores (E-4/E-5)",
  "Verify no pending adverse actions",
  "Confirm cutting score meets threshold",
];

export function PromotionDocumentationContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Promotion Documentation
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Promotion documentation ensures your eligibility for advancement is properly recorded in official
            systems. Missing or incorrect documentation can delay or prevent promotion. Accurate records in
            MCTFS, OMPF, and unit administrative systems are essential for Marines to compete fairly for
            advancement.
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
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{point.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Promotion Pathways
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">JEPES Score-Based</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                For E-4 and E-5 promotions. Marines compete based on composite scores
                calculated from performance, character, warrior skills, and PME.
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Selection Board</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                For E-6 and above. A board of senior Marines reviews records and
                selects the best qualified candidates for promotion.
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Meritorious</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Available to all enlisted ranks. Commanders nominate exceptional Marines
                for promotion ahead of peers through a meritorious board process.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Admin Responsibility</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            While S-1/Admin offices maintain records, Marines are ultimately responsible for verifying
            their own information is correct. Regularly check MOL, review your SRB, and report
            discrepancies immediately. Don&apos;t wait until promotion season to discover errors.
          </p>
        </section>
      </div>
    ),

    eligibility: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Eligibility Factors
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Factor</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody>
                {ELIGIBILITY_FACTORS.map((item) => (
                  <tr key={item.factor} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.factor}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Time in Grade Requirements
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Current Rank</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Promotion To</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Minimum TIG</th>
                </tr>
              </thead>
              <tbody>
                {TIG_REQUIREMENTS.map((item) => (
                  <tr key={item.currentRank} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.currentRank}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{item.promotionTo}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.tig}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            PME Requirements
          </h3>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
              <span className="font-medium text-zinc-900 dark:text-zinc-100">Lance Corporal → Corporal:</span>
              <span className="ml-2 text-sm text-zinc-700 dark:text-zinc-300">Lance Corporal&apos;s Seminar recommended</span>
            </div>
            <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
              <span className="font-medium text-zinc-900 dark:text-zinc-100">Corporal → Sergeant:</span>
              <span className="ml-2 text-sm text-zinc-700 dark:text-zinc-300">Corporal&apos;s Course required</span>
            </div>
            <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
              <span className="font-medium text-zinc-900 dark:text-zinc-100">Sergeant → Staff Sergeant:</span>
              <span className="ml-2 text-sm text-zinc-700 dark:text-zinc-300">Sergeant&apos;s Course required</span>
            </div>
            <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
              <span className="font-medium text-zinc-900 dark:text-zinc-100">SNCO Promotions:</span>
              <span className="ml-2 text-sm text-zinc-700 dark:text-zinc-300">Career PME requirements per grade</span>
            </div>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Disqualifying Factors</h4>
          <ul className="mt-2 space-y-1 text-sm text-amber-700 dark:text-amber-300">
            <li>• Pending NJP, court-martial, or administrative separation</li>
            <li>• Overdue for PFT, CFT, or rifle qualification</li>
            <li>• Body composition failure</li>
            <li>• Unfavorable fitness report (SNCOs)</li>
            <li>• Missing required PME</li>
          </ul>
        </section>
      </div>
    ),

    "jepes-promotions": (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            JEPES Score Components
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            The Junior Enlisted Performance Evaluation System (JEPES) determines composite scores for E-4 and E-5 promotions.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Component</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Weight</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody>
                {JEPES_SCORE_COMPONENTS.map((item) => (
                  <tr key={item.component} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.component}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{item.weight}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            How Cutting Scores Work
          </h3>
          <div className="mt-4 space-y-4">
            <p className="text-sm text-zinc-700 dark:text-zinc-300">
              Each month, HQMC publishes cutting scores by MOS via MARADMIN. Marines whose composite score
              meets or exceeds the cutting score are selected for promotion, subject to available allocations.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Monthly Publication</h4>
                <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>• Scores published via MARADMIN</li>
                  <li>• Vary by MOS and grade</li>
                  <li>• Subject to manning levels</li>
                  <li>• Check monthly for updates</li>
                </ul>
              </div>
              <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Score Verification</h4>
                <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>• Review on MOL/MCTFS</li>
                  <li>• Report errors to S-1</li>
                  <li>• Ensure all data current</li>
                  <li>• Allow time for corrections</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Commander&apos;s Input
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Command input significantly impacts JEPES scores. Ensure your leadership has accurate information
            about your performance and contributions.
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Mission performance assessments",
              "Individual character evaluations",
              "Leadership potential ratings",
              "Proficiency and conduct marks",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Improving Your Score</h4>
          <ul className="mt-2 space-y-1 text-sm text-blue-700 dark:text-blue-300">
            <li>• Maximize PFT/CFT scores</li>
            <li>• Complete PME early</li>
            <li>• Improve rifle qualification</li>
            <li>• Demonstrate leadership initiative</li>
            <li>• Maintain exemplary conduct</li>
          </ul>
        </section>
      </div>
    ),

    "selection-boards": (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Selection Board Process
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            For promotions to E-6 and above, selection boards convene annually to review eligible Marines.
            The board evaluates the complete service record to identify the best qualified candidates.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Rank</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Selection Board</th>
                </tr>
              </thead>
              <tbody>
                {SELECTION_BOARD_RANKS.map((item) => (
                  <tr key={item.rank} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.rank}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.board}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Board Package Items
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            The board reviews the following elements for each eligible Marine:
          </p>
          <ul className="mt-4 grid gap-2 md:grid-cols-2">
            {BOARD_PACKAGE_ITEMS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Board Timeline
          </h3>
          <ol className="mt-4 space-y-2">
            {[
              "MARADMIN announces board convening date and eligibility criteria",
              "Eligible Marines verify records are current",
              "Submit letters to the board (if desired)",
              "Board convenes and reviews packages",
              "Results announced via MARADMIN",
              "Selected Marines promoted as vacancies occur",
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
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Letters to the Board</h4>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            Marines may submit a letter to the board to provide context or explain circumstances.
            Letters should be professional, factual, and address specific record concerns.
            Personal endorsements from current commanders may also be submitted.
          </p>
        </section>
      </div>
    ),

    checklist: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Promotion Documentation Checklist
          </h3>
          <ul className="mt-4 space-y-2">
            {DOCUMENTATION_CHECKLIST.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            For Selection Board Eligible
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Review OMPF for completeness and accuracy",
              "Ensure all fitness reports filed correctly",
              "Verify awards properly documented",
              "Confirm PME completion recorded",
              "Check for any adverse material",
              "Consider submitting letter to board",
              "Verify photo current (if required)",
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
            Where to Verify
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">MOL (Marine Online)</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Personal data</li>
                <li>• Training records</li>
                <li>• JEPES scores</li>
                <li>• Cutting score verification</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">OMPF (via MOL)</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Official documents</li>
                <li>• Awards</li>
                <li>• Fitness reports</li>
                <li>• Adverse material</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Contact for Issues</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            Report discrepancies to your unit S-1 or IPAC. For OMPF corrections, use ORMA.
            Allow adequate time before board convening or cutting score publication for corrections to process.
          </p>
        </section>
      </div>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
