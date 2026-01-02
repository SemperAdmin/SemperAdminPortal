"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "types", label: "Types of Investigations" },
  { id: "why-coordinate", label: "Why Coordinate" },
  { id: "how-to-check", label: "How to Check" },
  { id: "criminal-activity", label: "Criminal Activity" },
  { id: "references", label: "References", type: "references" as const },
];

export function CoordinateOtherInvestigationsContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Coordinate Before You Start</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Before beginning your investigation, determine if other investigations are ongoing or planned. Multiple
            investigations into the same incident must be coordinated to avoid interference, protect evidence, and
            ensure proper handling of criminal matters.
          </p>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Authority:</strong> JAGMAN Section 0201
          </p>
        </div>
      </section>
    ),
    "types": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Types of Parallel Investigations</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">1. NCIS</h3>
            <ul className="mt-3 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• Criminal investigations</li>
              <li>• Felony-level offenses</li>
              <li>• Death investigations (non-natural causes)</li>
              <li>• Serious security matters</li>
            </ul>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">2. Safety Investigations</h3>
            <ul className="mt-3 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• Mishap investigations (aviation, ground)</li>
              <li>• Safety privilege applies</li>
              <li>• Separate from JAGMAN investigations</li>
              <li>• Cannot use safety investigation evidence in disciplinary actions</li>
            </ul>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">3. Inspector General (IG)</h3>
            <ul className="mt-3 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• Fraud, waste, abuse allegations</li>
              <li>• Command climate issues</li>
              <li>• Reprisal allegations</li>
              <li>• Systemic problems</li>
            </ul>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">4. Other JAGMAN Investigations</h3>
            <ul className="mt-3 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• Another command may already be investigating</li>
              <li>• Higher headquarters may be investigating</li>
              <li>• Multiple aspects may have separate investigations</li>
            </ul>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">5. Civilian Law Enforcement</h3>
            <ul className="mt-3 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• Off-base incidents</li>
              <li>• Joint jurisdiction matters</li>
              <li>• Foreign country investigations (overseas)</li>
            </ul>
          </div>
        </div>
      </section>
    ),
    "why-coordinate": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Why Coordination Matters</h2>
        </div>
        <div className="space-y-4">
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">1. Protect Criminal Investigations</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Your actions could compromise criminal evidence</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Premature interviews could affect prosecution</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Evidence handling must preserve chain of custody</span></li>
            </ul>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">2. Avoid Conflicting Findings</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Multiple investigations should not reach conflicting conclusions</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Coordination ensures consistent fact-finding</span></li>
            </ul>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">3. Prevent Duplication</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>No need to duplicate what others have already done</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Use existing evidence and statements where appropriate</span></li>
            </ul>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">4. Protect Privileges</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Safety investigation privilege cannot be breached</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Medical records have special protections</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Attorney-client privilege must be respected</span></li>
            </ul>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">5. Meet Legal Requirements</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>JAGMAN requires coordination with law enforcement</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Failure to coordinate could invalidate your investigation</span></li>
            </ul>
          </div>
        </div>
      </section>
    ),
    "how-to-check": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">How to Check for Existing Investigations</h2>
        </div>
        <div className="space-y-4">
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 1: Ask the Convening Authority</h3>
            <ul className="mt-3 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• The CA should know of other investigations</li>
              <li>• Ask specifically about NCIS involvement</li>
            </ul>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 2: Contact NCIS</h3>
            <ul className="mt-3 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• Verify if they have opened an investigation</li>
              <li>• Ask about their timeline and coordination needs</li>
            </ul>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 3: Contact Safety (for mishaps)</h3>
            <ul className="mt-3 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• Determine if a safety investigation is ongoing</li>
              <li>• Understand what you can and cannot access</li>
            </ul>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 4: Contact IG</h3>
            <ul className="mt-3 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• Check if IG is investigating related matters</li>
              <li>• Coordinate to avoid duplication</li>
            </ul>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 5: Check with Legal</h3>
            <ul className="mt-3 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• Legal may be aware of other investigations</li>
              <li>• They can help identify coordination requirements</li>
            </ul>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Deconfliction When Parallel Investigations Exist</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Establish Primary POC:</strong> Identify POC for each investigation; establish communication method</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Coordinate Timing:</strong> Determine sequence of interviews; criminal investigation generally has priority</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Share Information Appropriately:</strong> Document what information was shared</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Coordinate Access to Evidence:</strong> Request copies of documents; avoid disturbing crime scenes</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Report Conflicts to CA:</strong> Document conflicts and resolutions</span></li>
          </ul>
        </div>
      </section>
    ),
    "criminal-activity": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What to Do If You Discover Criminal Activity</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            If during your investigation you discover evidence of criminal activity:
          </p>
        </div>
        <div className="space-y-4">
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <p className="font-semibold text-red-800 dark:text-red-200">1. STOP</p>
            <p className="mt-1 text-sm text-red-700 dark:text-red-300">
              Stop the interview or evidence collection that relates to the criminal matter
            </p>
          </div>
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <p className="font-semibold text-red-800 dark:text-red-200">2. DO NOT Continue</p>
            <p className="mt-1 text-sm text-red-700 dark:text-red-300">
              Do not continue questioning the potential suspect
            </p>
          </div>
          <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
            <p className="font-semibold text-amber-800 dark:text-amber-200">3. CONTACT Legal</p>
            <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
              Contact your servicing judge advocate immediately
            </p>
          </div>
          <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
            <p className="font-semibold text-amber-800 dark:text-amber-200">4. NOTIFY NCIS</p>
            <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
              Notify NCIS of the potential criminal matter
            </p>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <p className="font-semibold text-blue-800 dark:text-blue-200">5. COORDINATE</p>
            <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
              Coordinate with legal on how to proceed
            </p>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <p className="font-semibold text-blue-800 dark:text-blue-200">6. REPORT to CA</p>
            <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
              Report to the CA that criminal matters have been discovered
            </p>
          </div>
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <p className="font-semibold text-green-800 dark:text-green-200">7. PRESERVE Evidence</p>
            <p className="mt-1 text-sm text-green-700 dark:text-green-300">
              Do not destroy, alter, or return evidence that may be relevant
            </p>
          </div>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Key Rule from JAGMAN:</strong> "If evidence suggests a crime may have been committed, the
            investigation is to cease and the national authorities of the individuals involved are to be notified."
          </p>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} content={content} data={data} />;
}
