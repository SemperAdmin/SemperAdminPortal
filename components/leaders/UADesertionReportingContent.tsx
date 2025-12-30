"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "timeline", label: "Reporting Timeline" },
  { id: "leader-actions", label: "Leader Actions" },
  { id: "key-points", label: "Key Points" },
  { id: "references", label: "References", type: "references" as const },
];

export function UADesertionReportingContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Understanding UA and Desertion</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            When a Marine fails to report for duty, you must act immediately. Unauthorized Absence (UA) becomes
            desertion after 30 days. Your timely reporting protects the command and ensures proper accountability.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Unauthorized Absence (UA)</h3>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              Absence without authority. The Marine did not report as required but may not intend to remain away permanently.
            </p>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Desertion</h3>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              Requires intent to remain away permanently or to avoid hazardous duty. Automatically declared after 30 days of UA.
            </p>
          </div>
        </div>
      </section>
    ),
    timeline: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Day 1 - Immediate Actions</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Attempt to locate the Marine</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Contact next-of-kin and emergency contacts</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Begin daily absentee muster reporting</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Secure personal effects using NAVSUP Form 29</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Secure any weapons, classified materials, or access credentials</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Day 5</h3>
          <div className="mt-3 rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
            <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
              Stop pay and allotments per DFAS requirements. Coordinate with S-1 for unit diary entries.
            </p>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Day 31</h3>
          <div className="mt-3 rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <ul className="space-y-2 text-sm text-red-700 dark:text-red-300">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>Marine is automatically declared a deserter</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>Federal warrant is issued and entered into NCIC</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>Prepare DD Form 553 (Deserter/Absentee Wanted by Armed Forces)</span></li>
            </ul>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">180+ Days</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Deserters absent more than 180 days may be processed for administrative separation at the
            nearest non-operating force major command.
          </p>
        </div>
      </section>
    ),
    "leader-actions": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Your Responsibilities</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Report UA to the commander immediately</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Document the date and time the Marine was last seen or accounted for</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Maintain accurate records of all attempts to locate the Marine</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Coordinate with S-1 for unit diary entries</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Prepare the DD Form 553 for deserter declaration</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Location Attempts</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Document all attempts to locate:</p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Phone calls to Marine and emergency contacts (date, time, result)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Visits to known addresses</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Contacts with family members</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Social media checks (if appropriate)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Hospital and jail checks (local jurisdiction)</span></li>
          </ul>
        </div>
      </section>
    ),
    "key-points": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Important Considerations</h2>
          <ul className="mt-3 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Law Enforcement:</strong> Any law enforcement encounter after Day 31 will result in
                apprehension due to the federal warrant in NCIC.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Voluntary Return:</strong> Marines who return voluntarily face less severe consequences
                than those apprehended.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Fitness Reports:</strong> Do not submit a fitness report for a Marine in UA status until
                they are declared a deserter or return.</span>
            </li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Property Security</h3>
          <div className="mt-3 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200">Secure Immediately:</h4>
            <ul className="mt-2 space-y-2 text-sm text-blue-700 dark:text-blue-300">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Weapons (personal and issued)</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Classified materials</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>CAC and access credentials</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Government property</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Personal effects (inventory using NAVSUP Form 29)</span></li>
            </ul>
          </div>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
