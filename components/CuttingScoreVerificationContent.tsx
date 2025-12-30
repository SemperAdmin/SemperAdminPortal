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
  { label: "Publication", value: "Monthly MARADMIN" },
  { label: "Applies To", value: "E-4 (Corporal) and E-5 (Sergeant) promotions" },
  { label: "Basis", value: "JEPES composite score vs. MOS cutting score" },
  { label: "Verification", value: "MOL/MCTFS" },
  { label: "Contact", value: "Unit S-1/Admin or IPAC" },
];

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "monthly-process", label: "Monthly Process" },
  { id: "score-verification", label: "Score Verification" },
  { id: "discrepancies", label: "Discrepancies" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const MONTHLY_TIMELINE = [
  { day: "1st of month", action: "Previous month data closes for cutting score calculation" },
  { day: "Mid-month", action: "MARADMIN published with cutting scores by MOS" },
  { day: "Upon publication", action: "Selected Marines notified by command" },
  { day: "Following month", action: "Promotions executed per allocation" },
];

const MARADMIN_ELEMENTS = [
  { element: "MOS Code", description: "Primary MOS for promotion" },
  { element: "Cutting Score", description: "Minimum composite score required" },
  { element: "Status", description: "Open, Closed, or score value" },
  { element: "Allocations", description: "Number of promotions available" },
];

const VERIFICATION_STEPS = [
  "Log into MOL (Marine Online)",
  "Navigate to JEPES section",
  "Review your composite score breakdown",
  "Compare to published cutting score for your MOS",
  "Verify all data elements are current",
  "Check for any pending updates",
];

const COMMON_DISCREPANCIES = [
  { issue: "Missing PME", cause: "Course completion not entered in MCTFS", fix: "Provide completion certificate to S-1" },
  { issue: "Wrong PFT/CFT score", cause: "Score not updated after recent test", fix: "Verify with S-3, update in MCTFS" },
  { issue: "Missing rifle score", cause: "Qualification not recorded", fix: "Provide scorecard to S-1 for entry" },
  { issue: "Incorrect MOS", cause: "Primary MOS wrong in system", fix: "Request MOS correction via Unit Diary" },
  { issue: "Command input missing", cause: "Evaluation not entered", fix: "Request supervisor enter current eval" },
];

const SCORE_STATUS_TYPES = [
  { status: "Open", meaning: "Promotions available, cutting score published", action: "Meet or exceed score to promote" },
  { status: "Closed", meaning: "No promotions available this month", action: "Wait for next month; continue improving" },
  { status: "Numeric Score", meaning: "Minimum score needed for promotion", action: "Compare to your composite score" },
];

export function CuttingScoreVerificationContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Cutting Score Verification
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Cutting scores determine which Marines are promoted to Corporal (E-4) and Sergeant (E-5) each month.
            Published via MARADMIN, cutting scores vary by MOS based on manning levels and promotion allocations.
            Marines must verify their composite score meets or exceeds the cutting score to be selected for promotion.
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
            Score Status Types
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Status</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Meaning</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Action</th>
                </tr>
              </thead>
              <tbody>
                {SCORE_STATUS_TYPES.map((item) => (
                  <tr key={item.status} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.status}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{item.meaning}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Monthly Vigilance</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            Cutting scores change monthly based on Marine Corps manning needs. Check the MARADMIN
            each month to see where your MOS stands. A closed MOS one month may open the next,
            or an open MOS may suddenly require a higher score.
          </p>
        </section>
      </div>
    ),

    "monthly-process": (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Monthly Timeline
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Timing</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Action</th>
                </tr>
              </thead>
              <tbody>
                {MONTHLY_TIMELINE.map((item) => (
                  <tr key={item.day} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.day}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            MARADMIN Contents
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
                {MARADMIN_ELEMENTS.map((item) => (
                  <tr key={item.element} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.element}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            How Selections Work
          </h3>
          <ol className="mt-4 space-y-2">
            {[
              "HQMC determines promotion allocations by MOS",
              "Cutting scores calculated to meet allocation",
              "Marines meeting score are identified in MCTFS",
              "Commands notified of selected Marines",
              "Promotion warrants issued",
              "Marines promoted effective date per warrant",
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
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Data Cutoff</h4>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            Ensure all data (PFT, CFT, rifle qual, PME) is entered in MCTFS before the 1st of the month
            to be reflected in that month&apos;s cutting score calculation. Data entered after the cutoff
            won&apos;t be considered until the following month.
          </p>
        </section>
      </div>
    ),

    "score-verification": (
      <div className="space-y-6">
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
            What to Verify
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">JEPES Components</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Mission performance score</li>
                <li>• Individual character score</li>
                <li>• Warrior skills score</li>
                <li>• PME completion score</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Source Data</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Current PFT score and date</li>
                <li>• Current CFT score and date</li>
                <li>• Rifle qualification and date</li>
                <li>• PME courses completed</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Comparing to Cutting Score
          </h3>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <h4 className="font-medium text-green-800 dark:text-green-200">Your Score ≥ Cutting Score</h4>
              <p className="mt-1 text-sm text-green-700 dark:text-green-300">
                You&apos;re eligible for promotion! Await notification from your command and promotion warrant.
              </p>
            </div>
            <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
              <h4 className="font-medium text-amber-800 dark:text-amber-200">Your Score &lt; Cutting Score</h4>
              <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
                Not selected this month. Focus on improving your composite score for future months.
              </p>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-medium text-red-800 dark:text-red-200">MOS is &quot;CLOSED&quot;</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                No promotions available regardless of score. Continue improving while awaiting allocations.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Tie-Breaker Rules</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            When multiple Marines have the same composite score, tie-breakers include: time in grade,
            time in service, and date of birth. If you&apos;re near the cutting score, every point matters.
          </p>
        </section>
      </div>
    ),

    discrepancies: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common Discrepancies
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Issue</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Cause</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Fix</th>
                </tr>
              </thead>
              <tbody>
                {COMMON_DISCREPANCIES.map((item) => (
                  <tr key={item.issue} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.issue}</td>
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
            {[
              "Identify specific discrepancy in MOL/MCTFS",
              "Gather supporting documentation (certificates, scorecards, etc.)",
              "Submit correction request to S-1/Admin",
              "S-1 processes Unit Diary entry (if required)",
              "IPAC/MCTFS updates record",
              "Verify correction reflected in system",
              "Allow time for next cutting score calculation",
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

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Retroactive Promotions
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            If a discrepancy caused you to miss promotion, you may be entitled to a retroactive promotion
            once the error is corrected. This requires:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Documentation that error was not your fault",
              "Proof you would have met cutting score",
              "Command endorsement of retroactive promotion",
              "MMEA/HQMC approval for retroactive date",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Time Sensitivity</h4>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            Report discrepancies immediately. Corrections can take days or weeks to process.
            If discovered near a cutting score publication date, the correction may not be reflected
            until the following month.
          </p>
        </section>
      </div>
    ),

    checklist: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Monthly Verification Checklist
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Check MARADMIN for cutting score publication",
              "Find your MOS cutting score",
              "Log into MOL JEPES portal",
              "Review your composite score",
              "Compare score to cutting score",
              "Verify all data elements current",
              "Report any discrepancies to S-1",
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
            Before Data Cutoff (1st of Month)
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Ensure recent PFT entered in MCTFS",
              "Ensure recent CFT entered in MCTFS",
              "Verify rifle qualification recorded",
              "Confirm PME completion entered",
              "Check commander input is current",
              "Resolve any pending corrections",
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
              "Document the discrepancy",
              "Gather supporting evidence",
              "Contact S-1/Admin office",
              "Submit formal correction request",
              "Follow up on correction status",
              "Verify correction in system",
              "Request retroactive promotion if applicable",
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
