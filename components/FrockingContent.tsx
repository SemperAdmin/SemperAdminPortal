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
  { label: "Definition", value: "Wearing insignia of higher grade before official promotion" },
  { label: "Authority", value: "MCO 1430.2 (Frocking Policy)", url: MCO_URLS.FROCKING },
  { label: "Pay", value: "Remains at current grade until official DOR" },
  { label: "Applies To", value: "Selected but not yet promoted Marines" },
  { label: "Commander", value: "Must authorize frocking" },
];

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "eligibility", label: "Eligibility" },
  { id: "process", label: "Process" },
  { id: "limitations", label: "Limitations" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const FROCKING_ELIGIBILITY = [
  { criterion: "Selection", description: "Selected for promotion by cutting score, board, or meritorious" },
  { criterion: "No Pending Actions", description: "No pending NJP, court-martial, or administrative action" },
  { criterion: "Commander Approval", description: "Commander endorses frocking request" },
  { criterion: "Physical Fitness", description: "In standards for PFT/CFT" },
  { criterion: "Conduct", description: "No recent adverse conduct issues" },
];

const WHAT_FROCKING_ALLOWS = [
  "Wear insignia of higher grade",
  "Be addressed by higher grade",
  "Assume duties commensurate with higher grade",
  "Exercise authority of higher grade",
  "Wear uniform of higher grade",
];

const WHAT_FROCKING_DOES_NOT_ALLOW = [
  "Receive pay of higher grade",
  "Accrue TIG at higher grade",
  "BAH at higher grade rate",
  "Precedence based on higher grade",
  "Affect retirement calculations",
];

const COMMON_REASONS = [
  { reason: "Deployment", description: "Promote before deployment for command structure" },
  { reason: "Assumption of Duties", description: "Filling billet requiring higher grade" },
  { reason: "Leadership Requirements", description: "Unit needs require grade authority" },
  { reason: "Ceremony/Event", description: "For promotion ceremony timing" },
];

const TERMINATION_REASONS = [
  "Official promotion date reached (frocking ends, real promotion begins)",
  "Selection cancelled or withdrawn",
  "Adverse action initiated",
  "Commander revokes frocking authority",
  "Marine requests termination",
];

export function FrockingContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Frocking
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Frocking allows Marines who have been selected for promotion to wear the insignia of
            the higher grade before their official promotion date. While frocked, Marines exercise
            the authority of the higher grade but continue to receive pay at their current grade
            until officially promoted.
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
                      {point.url ? (
                        <MCOLink mco={point.value} url={point.url} />
                      ) : (
                        point.value
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Frocking vs. Promotion
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Frocking</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Wear insignia early</li>
                <li>• Exercise grade authority</li>
                <li>• Pay remains at current grade</li>
                <li>• TIG accrues at current grade</li>
                <li>• Temporary until official DOR</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Official Promotion</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Full grade entitlements</li>
                <li>• Pay at new grade</li>
                <li>• TIG begins at new grade</li>
                <li>• Permanent record change</li>
                <li>• Promotion warrant issued</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Why Frock?</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            Frocking allows units to have Marines exercise the authority needed for their duties
            before official promotion dates. It&apos;s particularly useful before deployments,
            when assuming new billets, or when unit leadership structure requires the grade authority.
          </p>
        </section>
      </div>
    ),

    eligibility: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Eligibility Criteria
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Criterion</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody>
                {FROCKING_ELIGIBILITY.map((item) => (
                  <tr key={item.criterion} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.criterion}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common Reasons for Frocking
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Reason</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody>
                {COMMON_REASONS.map((item) => (
                  <tr key={item.reason} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.reason}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Who Can Authorize Frocking
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Commanding Officer (typically O-5 and above)",
              "Commanding General for certain grades",
              "Authority may vary by grade and situation",
              "Check local command policy",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Adverse Actions</h4>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            Marines with pending adverse actions (NJP, court-martial, administrative separation)
            are typically not eligible for frocking. If adverse action is initiated after frocking,
            the frocking may be terminated.
          </p>
        </section>
      </div>
    ),

    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Frocking Process
          </h3>
          <ol className="mt-4 space-y-2">
            {[
              "Marine selected for promotion (cutting score, board, meritorious)",
              "Command identifies need for frocking",
              "Request submitted to appropriate authority",
              "Commander reviews and approves",
              "Frocking letter/order issued",
              "Marine dons insignia of higher grade",
              "Unit Diary annotation (if required by local policy)",
              "Marine exercises authority until official DOR",
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
            Documentation
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Frocking Letter</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• From authorizing commander</li>
                <li>• States frocking effective date</li>
                <li>• Notes expected promotion date</li>
                <li>• Retained in unit files</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Personal Copy</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Marine retains copy</li>
                <li>• Proof of authority</li>
                <li>• In case of questions</li>
                <li>• For personal records</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Transition to Official Promotion
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            When the official promotion date (DOR) arrives:
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Frocking status ends",
              "Official promotion effective",
              "Pay begins at new grade",
              "TIG begins at new grade",
              "Promotion warrant issued",
              "All entitlements of grade apply",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-green-600 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">No Pay Change</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            Remember: While frocked, pay remains at the current (lower) grade. The Marine continues
            to receive pay at their actual grade until the official date of rank. There should be
            no pay change action for frocking itself.
          </p>
        </section>
      </div>
    ),

    limitations: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            What Frocking Allows
          </h3>
          <ul className="mt-4 space-y-2">
            {WHAT_FROCKING_ALLOWS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-green-600 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            What Frocking Does NOT Allow
          </h3>
          <ul className="mt-4 space-y-2">
            {WHAT_FROCKING_DOES_NOT_ALLOW.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-red-600 mt-0.5">✗</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Termination of Frocking
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Frocking ends when:
          </p>
          <ul className="mt-4 space-y-2">
            {TERMINATION_REASONS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-[var(--sa-navy)] dark:text-[var(--sa-cream)] mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Important Limitation</h4>
          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            Frocking is not a guarantee of promotion. If the promotion selection is later
            cancelled (for adverse action, for example), the frocking is terminated and the
            Marine returns to wearing their actual grade insignia.
          </p>
        </section>
      </div>
    ),

    checklist: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Requesting Frocking
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Confirm promotion selection",
              "Identify need/justification for frocking",
              "Verify no pending adverse actions",
              "Request through chain of command",
              "Obtain commander approval",
              "Receive frocking letter",
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
            When Frocked
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Don new grade insignia",
              "Retain frocking letter",
              "Understand limitations",
              "Know expected DOR",
              "Perform duties of higher grade",
              "Maintain standards",
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
            Upon Official Promotion
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Receive promotion warrant",
              "Verify pay adjustment",
              "Verify DOR in MCTFS",
              "Ensure warrant filed in OMPF",
              "Update ID card if needed",
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
