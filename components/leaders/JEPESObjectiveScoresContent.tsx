"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "pillars", label: "Objective Pillars" },
  { id: "verification", label: "Verification" },
  { id: "leader-role", label: "Leader Role" },
  { id: "references", label: "References", type: "references" as const },
];

export function JEPESObjectiveScoresContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">JEPES Objective Scores and Verification</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Per MCO 1616.1, 75 percent of the PES score comes from objective data recorded in MCTFS. These scores are
            automatically calculated based on official records. It is critical that Marines and leaders verify the
            accuracy of this data.
          </p>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Score Breakdown</h4>
          <ul className="mt-2 space-y-2 text-sm text-blue-700 dark:text-blue-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span><strong>Warfighting:</strong> 25% (250 points max)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span><strong>Physical Toughness:</strong> 25% (250 points max)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span><strong>Mental Agility:</strong> 25% (250 points max)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span><strong>Command Input:</strong> 25% (250 points max)</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Data Sources</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Objective scores are pulled from MCTFS and other official systems. Marines should verify their data regularly
            through MOL and report discrepancies to their S-1/Admin.
          </p>
        </div>
      </section>
    ),
    pillars: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Objective Pillars</h2>
        </div>
        <div className="space-y-4">
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Warfighting (25%)</h3>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Comprises two equally weighted components:</p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Rifle Qualification (12.5%):</strong> Based on most recent rifle score (Expert, Sharpshooter, Marksman, or Unqualified)</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>MCMAP Belt (12.5%):</strong> Based on highest MCMAP belt achieved (Gray through Black)</span></li>
            </ul>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Physical Toughness (25%)</h3>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Comprises two equally weighted components:</p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>PFT Score (12.5%):</strong> Based on most recent PFT score (0-300)</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>CFT Score (12.5%):</strong> Based on most recent CFT score (0-300)</span></li>
            </ul>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
              Note: PFT/CFT scores are converted to a percentage of max points based on the score achieved.
            </p>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Mental Agility (25%)</h3>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Comprises five components:</p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>MOS Courses/Qualifications (50%):</strong> Formal courses and additional qualifications recorded in MCTFS</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>MarineNet (20%):</strong> Completed MarineNet courses per MARADMIN guidance</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Degrees (10%):</strong> Civilian education degrees (Associate, Bachelor, Master, Doctorate)</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Self-Education In-Grade (10%):</strong> Professional development completed in current grade</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Self-Education In-Service (10%):</strong> Professional development completed during total service</span></li>
            </ul>
          </div>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">MOS Qualifications Update</h4>
          <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
            Per MARADMIN 046/24, updates to JEPES MOS qualifications scoring ensure additional qualifications and formal
            courses are properly credited. Marines should verify their training records are up to date.
          </p>
        </div>
      </section>
    ),
    verification: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Verifying Objective Scores</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Per MCO 1616.1, the MRO and FLS must verify objective scores are accurate. Incorrect scores can significantly
            impact a Marine&apos;s promotion opportunities.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Verification Process</h3>
          <ol className="mt-4 space-y-3">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">1</span>
              <div>
                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">MRO Reviews Scores</p>
                <p className="text-sm text-zinc-700 dark:text-zinc-300">Marine reviews objective scores in MOL/JEPES before reporting occasion</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">2</span>
              <div>
                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Identify Discrepancies</p>
                <p className="text-sm text-zinc-700 dark:text-zinc-300">Compare displayed scores against source records (MCTFS, unit diaries, certificates)</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">3</span>
              <div>
                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Report to S-1/Admin</p>
                <p className="text-sm text-zinc-700 dark:text-zinc-300">Submit discrepancies with supporting documentation to the unit admin section</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">4</span>
              <div>
                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Admin Submits Correction</p>
                <p className="text-sm text-zinc-700 dark:text-zinc-300">S-1 processes unit diary entry or MCTFS correction request</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">5</span>
              <div>
                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Verify Correction</p>
                <p className="text-sm text-zinc-700 dark:text-zinc-300">MRO confirms correction is reflected in JEPES scores</p>
              </div>
            </li>
          </ol>
        </div>
        <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <h4 className="font-semibold text-red-800 dark:text-red-200">Common Data Errors</h4>
          <ul className="mt-2 space-y-2 text-sm text-red-700 dark:text-red-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>PFT/CFT scores not entered or entered incorrectly</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>Rifle qualification not updated after annual qualification</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>MCMAP belt not recorded after training</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>MOS courses completed but not entered in MCTFS</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>Degrees or civilian education not updated</span></li>
          </ul>
        </div>
      </section>
    ),
    "leader-role": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Leader Responsibilities</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Ensure Marines verify their objective scores before each reporting occasion</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Review objective scores as FLS during worksheet preparation</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Assist Marines with discrepancy resolution through S-1</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Track that training and qualifications are entered into MCTFS promptly</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Educate Marines on how objective scores impact their PES score</span></li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Proactive Approach</h4>
          <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
            Don&apos;t wait for reporting occasions to verify data. Marines should check their MOL records monthly and report
            discrepancies immediately. Leaders should build data verification into unit training calendars.
          </p>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
