"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "your-role", label: "Your Role" },
  { id: "key-points", label: "Key Points" },
  { id: "common-mistakes", label: "Common Mistakes" },
  { id: "ncis-matters", label: "NCIS Matters" },
  { id: "references", label: "References", type: "references" as const },
];

export function LegalHoldInvestigationsContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Understanding Legal Hold</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            When a Marine is under investigation or pending legal action, your role is to support the process,
            maintain accountability, and protect the integrity of the investigation. You do not conduct the
            investigation yourself for serious offenses.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">How Legal Hold Works</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>The commander places a Marine on legal hold when separation or transfer must be delayed pending investigation or court-martial</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Legal hold prevents the Marine from transferring, separating, or retiring until the matter is resolved</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>NCIS investigates serious offenses (felonies, drug trafficking, sexual assault, etc.)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Command investigations handle less serious matters</span></li>
          </ul>
        </div>
      </section>
    ),
    "your-role": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Leader Responsibilities</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Report suspected misconduct to the commander immediately</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Secure and preserve evidence until investigators arrive</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Maintain accountability of the Marine on legal hold</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Ensure the Marine has access to legal counsel</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Do not question the Marine about the offense without proper Article 31(b) advisement</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Evidence Preservation</h3>
          <div className="mt-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200">Preserve Immediately:</h4>
            <ul className="mt-2 space-y-2 text-sm text-blue-700 dark:text-blue-300">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Physical evidence (do not touch or move if possible)</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Documents related to the incident</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Digital evidence (texts, emails, social media)</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Video/photo evidence</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Witness contact information</span></li>
            </ul>
          </div>
        </div>
      </section>
    ),
    "key-points": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Important Things to Know</h2>
          <ul className="mt-3 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Do not discuss investigation details with the accused Marine or other unit members</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Preserve all evidence. Do not allow destruction of documents, messages, or physical items</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>The Marine retains full rights during legal hold, including pay and allowances</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Legal hold can extend a Marine's EAS. The Marine may be administratively separated during the extended period</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Do not interfere with witness testimony or coach witnesses</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Marine Rights During Legal Hold</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Full pay and allowances continue</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Access to legal counsel</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Right against self-incrimination (Article 31(b))</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Due process rights</span></li>
          </ul>
        </div>
      </section>
    ),
    "common-mistakes": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Mistakes to Avoid</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">Informal Questioning</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                Conducting informal questioning that constitutes interrogation can compromise the case.
              </p>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">Discussing the Case</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                Discussing the case with other Marines can taint witness testimony and compromise the investigation.
              </p>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">Failing to Preserve Digital Evidence</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                Texts, emails, and social media posts can be deleted. Secure devices and accounts immediately.
              </p>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">Promising Outcomes</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                Never promise the Marine a favorable outcome in exchange for cooperation.
              </p>
            </div>
          </div>
        </div>
      </section>
    ),
    "ncis-matters": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">NCIS Investigates</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Felonies</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Drug trafficking</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Sexual assault</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Serious assault</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Death investigations</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>National security matters</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Fraud over certain thresholds</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">When NCIS Takes Over</h3>
          <div className="mt-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <p className="text-sm text-blue-700 dark:text-blue-300">Your role becomes:</p>
            <ul className="mt-2 space-y-2 text-sm text-blue-700 dark:text-blue-300">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Provide NCIS access to the Marine and witnesses</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Maintain accountability of the Marine</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Preserve evidence as directed by NCIS</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Keep the commander informed of status</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Do not conduct parallel investigations</span></li>
            </ul>
          </div>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
