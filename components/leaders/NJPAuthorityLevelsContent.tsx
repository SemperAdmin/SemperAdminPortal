"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "authority-levels", label: "Authority Levels" },
  { id: "key-rules", label: "Key Rules" },
  { id: "leader-duties", label: "Leader Duties" },
  { id: "references", label: "References", type: "references" as const },
];

export function NJPAuthorityLevelsContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What is NJP?</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Non-Judicial Punishment (NJP), called "Office Hours" in the Marine Corps, allows commanders to address
            minor UCMJ violations without a court-martial. Only commanding officers and designated officers-in-charge
            can impose NJP. As a leader, you recommend NJP to the commander. You do not impose it yourself.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Your Role</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            NJP authority depends on the commander's grade and billet. Punishment limits increase with rank.
            Understanding these limits helps you provide accurate recommendations and set appropriate expectations.
          </p>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Key Point:</strong> Marine Corps NCOs (E-6 to E-9) cannot be reduced in grade at NJP. This differs from other services.
          </p>
        </div>
      </section>
    ),
    "authority-levels": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Company Grade Commanders (O-3 and Below) and OICs</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Punishment</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Maximum</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800"><td className="py-2 pr-4">Restriction</td><td className="py-2">14 days</td></tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800"><td className="py-2 pr-4">Extra duties</td><td className="py-2">14 days</td></tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800"><td className="py-2 pr-4">Forfeiture of pay</td><td className="py-2">7 days</td></tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800"><td className="py-2 pr-4">Reduction in grade</td><td className="py-2">1 grade (only if commander has promotion authority)</td></tr>
                <tr><td className="py-2 pr-4">Correctional custody</td><td className="py-2">7 days (E-3 and below only)</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Field Grade Commanders (O-4 to O-6)</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Punishment</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Maximum</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800"><td className="py-2 pr-4">Restriction</td><td className="py-2">60 days</td></tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800"><td className="py-2 pr-4">Extra duties</td><td className="py-2">45 days</td></tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800"><td className="py-2 pr-4">Forfeiture of pay</td><td className="py-2">Half of one month's pay for 2 months</td></tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800"><td className="py-2 pr-4">Reduction in grade</td><td className="py-2">1 grade</td></tr>
                <tr><td className="py-2 pr-4">Correctional custody</td><td className="py-2">30 days (E-3 and below only)</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Flag/General Officers</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Same as Field Grade with additional options for officers</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Arrest in quarters: 30 days (officers only)</span></li>
          </ul>
        </div>
      </section>
    ),
    "key-rules": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Important Limitations</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>SNCO Protection:</strong> Marine Corps NCOs (E-6 to E-9) cannot be reduced in grade at NJP.</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>OIC Limitation:</strong> Officers-in-Charge can only impose NJP on enlisted personnel, not officers.</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Warrant Officer Limitation:</strong> Warrant Officers do not have authority to reduce Marines in grade.</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Concurrent Punishments:</strong> Restriction and extra duties can run concurrently but cannot exceed the maximum for extra duties.</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Double Jeopardy:</strong> Once NJP is imposed for an offense, punishment cannot be imposed again for the same offense.</span></li>
          </ul>
        </div>
        <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <h4 className="font-semibold text-red-800 dark:text-red-200">Do Not:</h4>
          <ul className="mt-2 space-y-1 text-sm text-red-700 dark:text-red-300">
            <li>• Promise outcomes or discuss potential punishment with the accused</li>
            <li>• Direct subordinates to impose NJP or specific punishments</li>
            <li>• Each commander must make an independent determination</li>
          </ul>
        </div>
      </section>
    ),
    "leader-duties": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Your Responsibilities</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Gather facts and evidence before recommending NJP</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Prepare a written statement documenting the offense</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Attend Office Hours as a witness if requested</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>After NJP, help the Marine understand punishment and appeal rights</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Before Office Hours</h3>
          <ol className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300 list-decimal list-inside">
            <li>Document all facts surrounding the incident</li>
            <li>Gather witness statements</li>
            <li>Compile evidence (photos, documents, etc.)</li>
            <li>Prepare a chronological summary for the commander</li>
            <li>Ensure the Marine understands the process and their rights</li>
          </ol>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
