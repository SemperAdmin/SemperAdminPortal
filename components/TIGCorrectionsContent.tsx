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
  { label: "Full Name", value: "Time in Grade" },
  { label: "Definition", value: "Time spent at current rank" },
  { label: "System", value: "MCTFS (Marine Corps Total Force System)" },
  { label: "Verification", value: "MOL, SRB, Unit Diary" },
  { label: "Correction", value: "Unit Diary entry via S-1" },
];

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "verification", label: "Verification" },
  { id: "corrections", label: "Corrections" },
  { id: "impact", label: "Impact" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const TIG_SOURCES = [
  { source: "Promotion Warrant", description: "Official document showing promotion date" },
  { source: "Unit Diary", description: "Administrative transaction showing grade change" },
  { source: "MCTFS", description: "Master record showing current TIG" },
  { source: "MOL", description: "Online access to TIG data" },
  { source: "SRB/OQR", description: "Service Record Book entries" },
];

const COMMON_ERRORS = [
  { error: "Wrong promotion date", cause: "Data entry error on Unit Diary", fix: "Submit corrected Unit Diary" },
  { error: "Missing promotion", cause: "Promotion not entered in system", fix: "Submit Unit Diary with warrant" },
  { error: "Incorrect grade", cause: "Typographical error", fix: "Corrective Unit Diary entry" },
  { error: "Retroactive adjustment missed", cause: "DOR correction not applied", fix: "Recalculate with correct DOR" },
];

const VERIFICATION_STEPS = [
  "Log into MOL (Marine Online)",
  "Navigate to personal data section",
  "Review current grade and date of rank",
  "Calculate TIG based on current date",
  "Compare to MCTFS data",
  "Review SRB/OQR for discrepancies",
];

const CORRECTION_PROCESS = [
  "Identify discrepancy between records and actual TIG",
  "Gather supporting documentation (warrants, orders)",
  "Submit request to S-1/Admin",
  "S-1 prepares corrective Unit Diary entry",
  "IPAC processes Unit Diary",
  "MCTFS updated with correct information",
  "Verify correction in MOL",
];

const TIG_IMPACT_AREAS = [
  { area: "Promotion Eligibility", impact: "TIG determines when eligible to compete" },
  { area: "Cutting Score Calculation", impact: "TIG may be tie-breaker in JEPES" },
  { area: "Selection Board", impact: "TIG reviewed as part of record" },
  { area: "Pay", impact: "Longevity pay based on grade/time" },
  { area: "Retirement", impact: "High-3 calculation includes TIG" },
  { area: "Separation", impact: "Sanctuary rules tied to TIG/TIS" },
];

export function TIGCorrectionsContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Time in Grade (TIG) Corrections
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Time in Grade (TIG) represents the time a Marine has served at their current rank. TIG
            is critical for promotion eligibility, cutting score calculations, and career progression.
            Errors in TIG can delay promotions or cause pay issues. Accurate TIG in MCTFS is essential.
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
            TIG vs. Date of Rank (DOR)
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Time in Grade (TIG)</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Calculated value representing months/years at current rank. Changes daily as time passes.
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Date of Rank (DOR)</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Fixed date when promotion to current grade became effective. Used to calculate TIG.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Why TIG Matters</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            TIG determines when you&apos;re eligible to compete for the next higher grade. It&apos;s also used
            as a tie-breaker when Marines have the same composite score. An error of even one month
            can affect your promotion competitiveness.
          </p>
        </section>
      </div>
    ),

    verification: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            TIG Source Documents
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Source</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody>
                {TIG_SOURCES.map((item) => (
                  <tr key={item.source} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.source}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Verification Steps
          </h3>
          <ol className="mt-4 space-y-2">
            {VERIFICATION_STEPS.map((step, index) => (
              <li key={step} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">
                  {index + 1}
                </span>
                <span className="text-sm text-zinc-700 dark:text-zinc-300">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            What to Check
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Current Grade</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Matches your actual rank</li>
                <li>• Consistent across all systems</li>
                <li>• Pay grade correct</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Date of Rank</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Matches promotion warrant</li>
                <li>• Correct day, month, year</li>
                <li>• Same in MCTFS and SRB</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Regular Verification</h4>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            Review your TIG/DOR data regularly, especially before cutting score publication dates
            and selection board convening. Catching errors early allows time for corrections.
          </p>
        </section>
      </div>
    ),

    corrections: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common TIG Errors
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Error</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Cause</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Fix</th>
                </tr>
              </thead>
              <tbody>
                {COMMON_ERRORS.map((item) => (
                  <tr key={item.error} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.error}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{item.cause}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Correction Process
          </h3>
          <ol className="mt-4 space-y-2">
            {CORRECTION_PROCESS.map((step, index) => (
              <li key={step} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">
                  {index + 1}
                </span>
                <span className="text-sm text-zinc-700 dark:text-zinc-300">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Required Documentation
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Copy of promotion warrant showing correct DOR",
              "Previous Unit Diary entries (if available)",
              "Statement explaining discrepancy",
              "Any other supporting documents",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Processing Time</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            TIG corrections typically take 2-4 weeks to process through the Unit Diary system and
            update in MCTFS. Submit correction requests well before any promotion-related deadlines.
          </p>
        </section>
      </div>
    ),

    impact: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            TIG Impact Areas
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Area</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Impact</th>
                </tr>
              </thead>
              <tbody>
                {TIG_IMPACT_AREAS.map((item) => (
                  <tr key={item.area} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.area}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Promotion Impact
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Eligibility</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Must meet minimum TIG to be eligible for promotion to the next grade. Incorrect TIG
                can make you appear ineligible when you actually qualify.
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Tie-Breaker</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                When Marines have equal composite scores, TIG is used as a tie-breaker. More TIG
                can mean the difference between promotion and waiting another month.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Pay Impact
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            TIG affects pay in several ways:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Base pay increases with longevity (TIS/TIG combination)",
              "Incorrect DOR can result in underpayment",
              "Corrections may result in back pay",
              "Early promotion due to corrected TIG may trigger pay adjustment",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Retroactive Adjustments</h4>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            If a TIG error caused you to miss a promotion, you may be entitled to a retroactive
            promotion with back pay. Work with S-1 and IPAC to document the error and request
            appropriate relief.
          </p>
        </section>
      </div>
    ),

    checklist: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            TIG Verification Checklist
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Log into MOL and check current grade",
              "Verify date of rank displayed",
              "Compare to promotion warrant",
              "Check SRB/OQR matches",
              "Calculate TIG manually to verify",
              "Document any discrepancies found",
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
            Correction Request Checklist
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Identify specific error",
              "Gather promotion warrant",
              "Document correct DOR",
              "Submit request to S-1",
              "Provide supporting documentation",
              "Follow up on correction status",
              "Verify correction in MOL/MCTFS",
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
            After Correction
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Verify correction in MCTFS/MOL",
              "Check promotion eligibility updated",
              "Verify JEPES score reflects correct TIG",
              "Check pay for any adjustments needed",
              "Retain documentation of correction",
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
