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
  { label: "Definition", value: "Date of Rank (DOR) - effective date of current grade" },
  { label: "Impact", value: "TIG, promotion eligibility, seniority, pay" },
  { label: "System", value: "MCTFS, Unit Diary" },
  { label: "Documentation", value: "Promotion warrant, orders" },
  { label: "Contact", value: "S-1/Admin, IPAC, MMEA" },
];

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "verification", label: "Verification" },
  { id: "correction-process", label: "Correction Process" },
  { id: "impact", label: "Impact" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const DOR_SOURCES = [
  { source: "Promotion Warrant", description: "Official document showing promotion date", authority: "HQMC" },
  { source: "MCTFS", description: "Master personnel record", authority: "System of record" },
  { source: "MOL", description: "Online access to personal data", authority: "Derived from MCTFS" },
  { source: "SRB/OQR", description: "Service Record Book entries", authority: "Unit-maintained" },
  { source: "LES", description: "Leave and Earnings Statement", authority: "DFAS" },
];

const COMMON_DOR_ERRORS = [
  { error: "Typographical error", cause: "Data entry mistake", evidence: "Promotion warrant shows different date" },
  { error: "Wrong year", cause: "Year transposition", evidence: "Orders/warrant documentation" },
  { error: "Missing promotion", cause: "Promotion not entered", evidence: "Warrant exists but no MCTFS entry" },
  { error: "Incorrect retroactive date", cause: "Retroactive adjustment missed", evidence: "Correction order documentation" },
];

const VERIFICATION_SOURCES = [
  "MOL (Marine Online) - Personal data section",
  "LES - Check grade and DOR block",
  "MCTFS printout from S-1",
  "Original promotion warrant",
  "Unit Diary entries",
];

const CORRECTION_STEPS = [
  "Identify specific DOR error",
  "Gather supporting documentation (warrant, orders)",
  "Submit request to S-1/Admin",
  "S-1 prepares corrective Unit Diary",
  "IPAC processes Unit Diary",
  "MCTFS updated with correct DOR",
  "Verify correction in MOL/LES",
  "Request back pay if applicable",
];

const DOR_IMPACT_AREAS = [
  { area: "Time in Grade", impact: "TIG calculated from DOR; affects promotion eligibility" },
  { area: "Seniority", impact: "DOR determines precedence among same-grade Marines" },
  { area: "Promotion Eligibility", impact: "Must meet TIG minimums based on DOR" },
  { area: "Pay", impact: "Longevity increases may be affected" },
  { area: "Selection Boards", impact: "Year groups and eligibility zones based on DOR" },
  { area: "Retirement", impact: "High-3 calculation uses grades and time at each" },
];

export function DateOfRankCorrectionsContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Date of Rank (DOR) Corrections
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Date of Rank (DOR) is the effective date of your promotion to your current grade. It
            determines your Time in Grade (TIG), seniority among peers, and promotion eligibility.
            An incorrect DOR can delay promotions or affect pay. Corrections must be made promptly
            when errors are discovered.
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
            DOR Sources
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Source</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Authority</th>
                </tr>
              </thead>
              <tbody>
                {DOR_SOURCES.map((item) => (
                  <tr key={item.source} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.source}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.authority}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Promotion Warrant is Primary</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            The promotion warrant is the authoritative document for your DOR. If MCTFS shows a
            different date than your warrant, the warrant is generally correct and MCTFS needs
            to be corrected to match.
          </p>
        </section>
      </div>
    ),

    verification: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Where to Verify DOR
          </h3>
          <ul className="mt-4 space-y-2">
            {VERIFICATION_SOURCES.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common DOR Errors
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Error</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Cause</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Evidence</th>
                </tr>
              </thead>
              <tbody>
                {COMMON_DOR_ERRORS.map((item) => (
                  <tr key={item.error} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.error}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{item.cause}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.evidence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            What to Check
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Compare Sources</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Warrant vs. MCTFS</li>
                <li>• MCTFS vs. LES</li>
                <li>• MOL display vs. warrant</li>
                <li>• All sources should match</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Each Promotion</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Check DOR for each grade held</li>
                <li>• Verify promotion sequence</li>
                <li>• Confirm dates are logical</li>
                <li>• No gaps in history</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Regular Verification</h4>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            Check your DOR regularly, especially after each promotion and before any selection
            board convening. Catching errors early makes correction easier and prevents
            downstream problems with eligibility or pay.
          </p>
        </section>
      </div>
    ),

    "correction-process": (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Correction Steps
          </h3>
          <ol className="mt-4 space-y-2">
            {CORRECTION_STEPS.map((step, index) => (
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
              "Current MCTFS printout showing error",
              "Statement explaining discrepancy",
              "Any supporting orders or documents",
              "Request for correction (memo/form)",
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
            Processing Levels
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Unit Level</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                S-1 can correct simple data entry errors via Unit Diary
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">IPAC</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Processes Unit Diary and updates MCTFS
              </p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">MMEA</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                For complex issues requiring HQMC action
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Processing Time</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            Simple corrections processed at unit level typically take 2-4 weeks. More complex
            issues requiring MMEA involvement may take longer. Submit requests well before
            any deadlines (selection boards, promotion eligibility dates).
          </p>
        </section>
      </div>
    ),

    impact: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            DOR Impact Areas
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
                {DOR_IMPACT_AREAS.map((item) => (
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
            Promotion Eligibility Example
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            If your DOR is recorded as one month later than actual:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "You appear to have one month less TIG than you actually have",
              "You may appear ineligible when you should be eligible",
              "Could miss a cutting score cycle or selection board",
              "May affect seniority among peers promoted same month",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-red-600 mt-0.5">!</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Pay Implications
          </h3>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <h4 className="font-medium text-green-800 dark:text-green-200">If DOR Should Be Earlier</h4>
              <p className="mt-1 text-sm text-green-700 dark:text-green-300">
                You may be entitled to back pay for the period between the correct DOR and
                when you actually started receiving pay at the higher grade.
              </p>
            </div>
            <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
              <h4 className="font-medium text-amber-800 dark:text-amber-200">If DOR Should Be Later</h4>
              <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
                You may have been overpaid and could owe money back. Discuss with finance
                for repayment options.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Retroactive Corrections</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            If a DOR error caused you to miss a promotion, you may be entitled to a retroactive
            promotion adjustment. Work with S-1, IPAC, and MMEA to document the error and
            request appropriate relief.
          </p>
        </section>
      </div>
    ),

    checklist: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            DOR Verification Checklist
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Locate promotion warrant(s)",
              "Log into MOL and check DOR",
              "Compare warrant to MOL display",
              "Review LES for grade and DOR",
              "Request MCTFS printout from S-1",
              "Compare all sources for consistency",
              "Note any discrepancies found",
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
            If Discrepancy Found
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Document the specific error",
              "Make copies of warrant showing correct date",
              "Prepare statement explaining discrepancy",
              "Submit request to S-1/Admin",
              "Request corrective Unit Diary",
              "Follow up on processing",
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
              "Verify correction in MCTFS",
              "Check MOL shows correct DOR",
              "Verify LES reflects correction",
              "Check TIG calculation updated",
              "Request back pay if applicable",
              "Verify promotion eligibility status",
              "Retain all documentation",
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
