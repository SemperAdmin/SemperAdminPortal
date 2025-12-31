"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "good-examples", label: "Good Examples" },
  { id: "what-not", label: "What NOT to Include" },
  { id: "leader-role", label: "Leader Role" },
  { id: "references", label: "References", type: "references" as const },
];

export function BilletAccomplishmentsContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Billet Accomplishments in JEPES</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Per MCO 1616.1, Section I of the JEPES worksheet allows for billet accomplishments and remarks. Billet
            accomplishments document specific achievements during the reporting period that demonstrate the Marine&apos;s
            performance.
          </p>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Purpose of Billet Accomplishments</h4>
          <ul className="mt-2 space-y-2 text-sm text-blue-700 dark:text-blue-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Document specific achievements during the reporting period</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Provide context for command input marks</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Support promotion board review</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Create a record of the Marine&apos;s contributions</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Who Writes Billet Accomplishments</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>MRO:</strong> May submit billet accomplishments for FLS consideration</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>FLS:</strong> Drafts accomplishments based on observed performance and MRO input</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Evaluator/Reviewer:</strong> May add additional accomplishments or comments</span></li>
          </ul>
        </div>
      </section>
    ),
    "good-examples": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Good Billet Accomplishment Examples</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Effective billet accomplishments are specific, quantifiable, and demonstrate impact. Use the STAR format:
            Situation, Task, Action, Result.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">MOS/Mission Examples</h3>
          <ul className="mt-3 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>&quot;Led 4-Marine fire team during MOUT exercise; cleared 12 buildings with zero simulated casualties. Team rated best in company.&quot;</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>&quot;Processed 247 travel claims with 98% accuracy rate, reducing average processing time from 5 days to 3 days.&quot;</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>&quot;Maintained 100% accountability of $2.3M in organic equipment during 3-month deployment.&quot;</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Leadership Examples</h3>
          <ul className="mt-3 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>&quot;Mentored 3 PFCs in MOS skills; all achieved MOS proficiency qualification ahead of schedule.&quot;</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>&quot;Coordinated PME study group of 8 LCpls; 6 selected for meritorious promotion.&quot;</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>&quot;Assumed squad leader responsibilities during SNCO absence; maintained training schedule and accountability.&quot;</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Individual Character Examples</h3>
          <ul className="mt-3 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>&quot;Volunteered 40 hours at local food bank during holiday season; organized 12-Marine volunteer team.&quot;</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>&quot;Completed 15 college credit hours toward Associate&apos;s degree while maintaining superior duty performance.&quot;</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>&quot;Identified and reported safety hazard in motor pool; prevented potential injury and equipment damage.&quot;</span></li>
          </ul>
        </div>
        <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
          <h4 className="font-semibold text-green-800 dark:text-green-200">Key Elements of Good Accomplishments</h4>
          <ul className="mt-2 space-y-2 text-sm text-green-700 dark:text-green-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" /><span><strong>Specific:</strong> Names exact tasks, not general duties</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" /><span><strong>Quantifiable:</strong> Includes numbers, percentages, dollar values</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" /><span><strong>Impact-focused:</strong> Shows result, not just action</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" /><span><strong>Verifiable:</strong> Can be confirmed through records or witnesses</span></li>
          </ul>
        </div>
      </section>
    ),
    "what-not": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What NOT to Include</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Avoid these common mistakes when writing billet accomplishments:
          </p>
        </div>
        <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <h4 className="font-semibold text-red-800 dark:text-red-200">Poor Accomplishment Examples</h4>
          <ul className="mt-2 space-y-3 text-sm text-red-700 dark:text-red-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
              <div>
                <span className="font-medium">&quot;Performed duties as assigned.&quot;</span>
                <p className="text-red-600 dark:text-red-400">Too vague. This applies to every Marine.</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
              <div>
                <span className="font-medium">&quot;Hard worker with great attitude.&quot;</span>
                <p className="text-red-600 dark:text-red-400">Opinion without supporting facts.</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
              <div>
                <span className="font-medium">&quot;Participated in unit training.&quot;</span>
                <p className="text-red-600 dark:text-red-400">Routine expectation, not an accomplishment.</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
              <div>
                <span className="font-medium">&quot;Best Marine in the platoon.&quot;</span>
                <p className="text-red-600 dark:text-red-400">Superlative without evidence.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Mistakes</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Routine duties:</strong> Don&apos;t document expected job functions as accomplishments</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Vague language:</strong> Avoid &quot;some,&quot; &quot;many,&quot; &quot;various&quot; - use specific numbers</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Subjective opinions:</strong> Support claims with facts and outcomes</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Outside reporting period:</strong> Only include accomplishments from the current period</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Unverifiable claims:</strong> Don&apos;t exaggerate or fabricate accomplishments</span></li>
          </ul>
        </div>
      </section>
    ),
    "leader-role": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Leader Responsibilities</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Track Marine accomplishments throughout the reporting period</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Encourage Marines to submit their accomplishments</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Write specific, quantifiable accomplishments</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Verify accomplishments are accurate and verifiable</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Coach Marines on how to document their own accomplishments</span></li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Best Practice</h4>
          <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
            Keep a running log of Marine accomplishments throughout the reporting period. Don&apos;t wait until the
            evaluation is due to recall what the Marine did. Document achievements as they happen.
          </p>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
