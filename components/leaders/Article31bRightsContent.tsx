"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "requirements", label: "Requirements" },
  { id: "when-required", label: "When Required" },
  { id: "leader-duties", label: "Leader Duties" },
  { id: "common-mistakes", label: "Common Mistakes" },
  { id: "references", label: "References", type: "references" as const },
];

export function Article31bRightsContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What is Article 31(b)?</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Article 31(b) of the UCMJ protects service members from compelled self-incrimination. Unlike civilian
            Miranda rights, Article 31(b) applies any time a superior questions a subordinate suspected of an
            offense, not just when in custody. As a leader, you must understand when to provide these rights.
          </p>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Key Difference from Miranda</h4>
          <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
            Unlike Miranda, Article 31(b) does not require the suspect to be in custody. It applies whenever
            you suspect someone of an offense and question them about it.
          </p>
        </div>
      </section>
    ),
    requirements: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Before Questioning</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Before questioning a Marine suspected of an offense, you must inform them of:
          </p>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-[var(--sa-navy)]/20 bg-[var(--sa-cream)]/10 p-4 dark:border-[var(--sa-cream)]/30 dark:bg-[var(--sa-navy)]/20">
              <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">1. Nature of Accusation</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">The specific offense suspected</p>
            </div>
            <div className="rounded-lg border border-[var(--sa-navy)]/20 bg-[var(--sa-cream)]/10 p-4 dark:border-[var(--sa-cream)]/30 dark:bg-[var(--sa-navy)]/20">
              <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">2. Right to Remain Silent</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Their right to remain silent</p>
            </div>
            <div className="rounded-lg border border-[var(--sa-navy)]/20 bg-[var(--sa-cream)]/10 p-4 dark:border-[var(--sa-cream)]/30 dark:bg-[var(--sa-navy)]/20">
              <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">3. Use of Statements</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">That any statement may be used against them at court-martial</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <h4 className="font-semibold text-red-800 dark:text-red-200">Important</h4>
          <p className="mt-2 text-sm text-red-700 dark:text-red-300">
            Unlike Miranda, Article 31(b) does not require you to advise the suspect of their right to an attorney
            before questioning. However, if in custody, you must also provide Miranda warnings.
          </p>
        </div>
      </section>
    ),
    "when-required": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Article 31(b) IS Required When:</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>You suspect the Marine committed an offense</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>You are asking questions or making statements likely to elicit an incriminating response</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>You are acting in a law enforcement or disciplinary capacity</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Article 31(b) is NOT Required When:</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Routine administrative questions not related to suspected offenses</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Questioning witnesses who are not suspected of an offense</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Screening interviews to identify potential suspects (not focused on one individual)</span></li>
          </ul>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Rule of Thumb</h4>
          <p className="mt-2 text-sm text-blue-700 dark:text-blue-300">
            When in doubt, provide the advisement. It protects both the Marine and the integrity of any subsequent action.
          </p>
        </div>
      </section>
    ),
    "leader-duties": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Your Responsibilities</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Provide Article 31(b) advisements verbally and in writing</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Have the Marine acknowledge their rights in writing</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Stop questioning immediately if the Marine invokes their rights</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Do not question a Marine who is under the influence of drugs or alcohol</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>If you suspect a new or different offense during questioning, stop and provide a new advisement for that offense</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>When in doubt, provide the advisement</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">If Rights Are Invoked</h3>
          <div className="mt-3 rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <p className="text-sm text-red-700 dark:text-red-300">
              If a Marine invokes their rights (even vaguely):
            </p>
            <ul className="mt-2 space-y-2 text-sm text-red-700 dark:text-red-300">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span><strong>Stop questioning immediately</strong></span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>Do not try to clarify or continue the conversation</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>Document that rights were invoked</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>Report to the commander</span></li>
            </ul>
          </div>
        </div>
      </section>
    ),
    "common-mistakes": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Mistakes That Invalidate Statements</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">Questioning Without Rights</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                Questioning a suspect without providing rights makes any statement inadmissible at court-martial.
              </p>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">General Warning</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                Providing a general warning without specifying the suspected offense is insufficient.
              </p>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">Continuing After Invocation</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                Continuing to question after the Marine invokes their rights.
              </p>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">Informal Settings</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                Using informal settings to obtain statements without proper advisement does not make them admissible.
              </p>
            </div>
          </div>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
