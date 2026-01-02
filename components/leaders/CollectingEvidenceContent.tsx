"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "types", label: "Types of Evidence" },
  { id: "documentary", label: "Documentary Evidence" },
  { id: "physical", label: "Physical Evidence" },
  { id: "chain-of-custody", label: "Chain of Custody" },
  { id: "best-practices", label: "Best Practices" },
  { id: "references", label: "References", type: "references" as const },
];

export function CollectingEvidenceContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Evidence Collection Overview</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Evidence forms the foundation of any investigation. The IO must gather, preserve, and document
            all relevant evidence to establish facts and support findings. Evidence should be collected
            systematically and preserved carefully to maintain its integrity.
          </p>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Key Principle:</strong> Collect more evidence than you think you need. It is better to have
            evidence that turns out to be unnecessary than to need evidence you did not collect.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Goals of Evidence Collection</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Determine what happened</li>
            <li>• Establish facts that answer the convening order questions</li>
            <li>• Support or refute claims and allegations</li>
            <li>• Provide a complete record for review</li>
            <li>• Ensure due process for all parties</li>
          </ul>
        </div>
      </section>
    ),
    types: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Types of Evidence</h2>
        </div>
        <div className="space-y-4">
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Testimonial Evidence</h3>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              Statements from witnesses with personal knowledge of relevant facts.
            </p>
            <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• Witness interviews and statements</li>
              <li>• Subject statements (with appropriate warnings)</li>
              <li>• Expert opinions</li>
            </ul>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Documentary Evidence</h3>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              Written or recorded materials that are relevant to the investigation.
            </p>
            <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• Official records (SRB, medical, training)</li>
              <li>• Orders, directives, and instructions</li>
              <li>• Emails, messages, and correspondence</li>
              <li>• Photos, videos, and audio recordings</li>
              <li>• Log books and journals</li>
            </ul>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Physical Evidence</h3>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              Tangible objects related to the incident or matter under investigation.
            </p>
            <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• Equipment and gear</li>
              <li>• Weapons</li>
              <li>• Contraband or prohibited items</li>
              <li>• Damaged property</li>
            </ul>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Demonstrative Evidence</h3>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              Items created to explain or illustrate other evidence.
            </p>
            <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• Diagrams and sketches</li>
              <li>• Maps and layouts</li>
              <li>• Timelines</li>
              <li>• Charts and graphs</li>
            </ul>
          </div>
        </div>
      </section>
    ),
    documentary: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Documentary Evidence Collection</h2>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Documents to Collect</h3>
          <ul className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Personnel Records:</strong> SRB, OMPF entries, fitness reports, counseling entries</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Medical Records:</strong> Treatment records, sick call logs, line of duty determinations</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Training Records:</strong> Training jackets, course completions, qualification records</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Orders and Directives:</strong> Standing orders, SOPs, relevant MCOs/NavAdmins</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Electronic Communications:</strong> Emails, text messages, social media posts</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Reports:</strong> Police reports, incident reports, mishap reports</span></li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Important:</strong> Always request certified copies of official records.
            Note the source, date obtained, and custodian on each document.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Electronic Evidence Considerations</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Preserve metadata when possible</li>
            <li>• Screenshot or print electronic records</li>
            <li>• Note date/time of collection</li>
            <li>• Coordinate with legal on collection methods</li>
            <li>• Consider privacy and search/seizure requirements</li>
          </ul>
        </div>
      </section>
    ),
    physical: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Physical Evidence Collection</h2>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Scene Documentation</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Photograph the scene from multiple angles</li>
            <li>• Create a sketch or diagram of the area</li>
            <li>• Note environmental conditions</li>
            <li>• Document exact locations of evidence</li>
            <li>• Record date, time, and who was present</li>
          </ul>
        </div>
        <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <p className="text-sm text-red-800 dark:text-red-200">
            <strong>Warning:</strong> If physical evidence may be related to a criminal investigation,
            coordinate with NCIS or other law enforcement BEFORE collecting or handling evidence.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Handling Physical Evidence</h3>
          <ul className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Minimize handling to prevent contamination</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Use gloves when appropriate</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Package and label items separately</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Store in appropriate conditions</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Photograph items before and after collection</span></li>
          </ul>
        </div>
      </section>
    ),
    "chain-of-custody": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Chain of Custody</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Chain of custody is the documented record of who has possessed evidence from collection
            through final disposition. It establishes the integrity and authenticity of evidence.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Documentation Requirements</h3>
          <ul className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Description:</strong> Detailed description of the item</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Collection:</strong> Who collected it, when, and where</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Transfers:</strong> Every transfer recorded (from/to, date/time, purpose)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Storage:</strong> Where and how stored when not in use</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Condition:</strong> Note any changes in condition</span></li>
          </ul>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Best Practice:</strong> Limit the number of people who handle evidence.
            Each transfer creates another link in the chain that may need to be verified.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Evidence Log Template</h3>
          <div className="mt-2 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Item #</th>
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Description</th>
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Collected By</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Date/Time</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">1</td>
                  <td className="py-2 pr-4">[Description]</td>
                  <td className="py-2 pr-4">[Name/Rank]</td>
                  <td className="py-2">[DDMMMYYYY/HHMM]</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    ),
    "best-practices": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Evidence Collection Best Practices</h2>
        </div>
        <div className="space-y-4">
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Do:</h3>
            <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• Collect evidence as soon as possible after the incident</li>
              <li>• Make copies of all documentary evidence</li>
              <li>• Document the source of every piece of evidence</li>
              <li>• Take detailed notes during evidence collection</li>
              <li>• Photograph evidence in place before moving</li>
              <li>• Secure evidence in a locked location</li>
              <li>• Consult with JA on sensitive collection issues</li>
            </ul>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Don&apos;t:</h3>
            <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• Conduct searches without proper authority</li>
              <li>• Handle evidence more than necessary</li>
              <li>• Mark or write on original documents</li>
              <li>• Delay evidence collection when time-sensitive</li>
              <li>• Assume evidence will still be available later</li>
              <li>• Ignore exculpatory evidence</li>
            </ul>
          </div>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Remember:</strong> The goal is to find the truth, not to prove a predetermined conclusion.
            Collect all relevant evidence, including evidence that may contradict initial assumptions.
          </p>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} content={content} data={data} />;
}
