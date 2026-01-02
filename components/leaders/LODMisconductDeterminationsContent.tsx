"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "lod-basics", label: "LOD Basics" },
  { id: "misconduct", label: "Misconduct" },
  { id: "investigation", label: "Investigation Steps" },
  { id: "consequences", label: "Consequences" },
  { id: "references", label: "References", type: "references" as const },
];

export function LODMisconductDeterminationsContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">LOD/Misconduct Determinations</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Line of Duty (LOD) and misconduct determinations are crucial administrative
            decisions that affect a service member&apos;s entitlement to benefits and career.
            An investigation is often required to establish the circumstances of an
            injury, disease, or death.
          </p>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Key Question:</strong> Was the injury or illness incurred or aggravated
            &quot;in line of duty&quot; and was misconduct involved?
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">When Required</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Injury, disease, or death when misconduct may be involved</li>
            <li>• Injury during unauthorized absence</li>
            <li>• Self-inflicted injury</li>
            <li>• Injury while intoxicated</li>
            <li>• Injury during commission of offense</li>
            <li>• Injury in vehicle accident</li>
            <li>• Any case where LOD is not apparent</li>
          </ul>
        </div>
      </section>
    ),
    "lod-basics": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Line of Duty Basics</h2>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">LOD Determination Categories</h3>
          <div className="mt-2 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
            <div className="rounded-lg bg-green-50 p-3 dark:bg-green-900/20">
              <p className="font-semibold text-green-800 dark:text-green-200">&quot;In Line of Duty&quot;</p>
              <p className="text-green-700 dark:text-green-300">
                Injury/disease occurred while member was performing military duties or
                was otherwise not due to member&apos;s own misconduct.
              </p>
            </div>
            <div className="rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
              <p className="font-semibold text-red-800 dark:text-red-200">&quot;Not in Line of Duty - Due to Own Misconduct&quot;</p>
              <p className="text-red-700 dark:text-red-300">
                Injury/disease was the proximate result of the member&apos;s own misconduct.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Presumption of LOD</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            There is a presumption that injury or disease was incurred in line of duty.
            This presumption can be rebutted by evidence of misconduct.
          </p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Presumption applies unless rebutted</li>
            <li>• Standard is &quot;preponderance of the evidence&quot;</li>
            <li>• Burden is on the government to prove misconduct</li>
          </ul>
        </div>
      </section>
    ),
    misconduct: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Understanding Misconduct</h2>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What Constitutes Misconduct</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Misconduct is conduct that involves:
          </p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Deliberate wrongdoing with knowledge of likely consequences, OR</li>
            <li>• Persistent and deliberate disregard of expected standards of behavior</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Examples of Misconduct</h3>
          <ul className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Injuries incurred while intoxicated (BAC 0.10+ or higher)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Injuries during unauthorized absence</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Self-inflicted injuries (not resulting from mental disease)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Injuries while committing an offense</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Injuries due to driving violations (speeding, reckless driving)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Injuries from drug use</span></li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Important:</strong> Simple negligence is NOT misconduct. There must be
            a deliberate act or willful disregard of known dangers.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Proximate Cause</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The misconduct must be the &quot;proximate cause&quot; of the injury—the direct
            and immediate cause. Intervening factors may break the chain of causation.
          </p>
        </div>
      </section>
    ),
    investigation: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Investigation Steps for LOD</h2>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key Areas to Investigate</h3>
          <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
            <li><strong>Circumstances:</strong> What exactly happened and when?</li>
            <li><strong>Duty Status:</strong> Was the member on duty, leave, liberty, or UA?</li>
            <li><strong>Intoxication:</strong> Was alcohol or drugs involved? What was BAC?</li>
            <li><strong>Conduct:</strong> What was the member doing immediately before the incident?</li>
            <li><strong>Causation:</strong> What directly caused the injury?</li>
            <li><strong>Prior History:</strong> Any previous misconduct or warnings?</li>
          </ol>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Evidence to Collect</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Medical records and treatment records</li>
            <li>• Blood alcohol/toxicology results</li>
            <li>• Police reports (if any)</li>
            <li>• Witness statements</li>
            <li>• Leave/liberty documentation</li>
            <li>• Vehicle damage reports (if applicable)</li>
            <li>• Photos of scene and injuries</li>
          </ul>
        </div>
        <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <p className="text-sm text-red-800 dark:text-red-200">
            <strong>10 U.S.C. 1219 Warning:</strong> Before interviewing the injured member
            about the origin of their injury, provide the 1219 warning.
          </p>
        </div>
      </section>
    ),
    consequences: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Consequences of LOD Determinations</h2>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">&quot;In Line of Duty&quot; Finding</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Full medical care entitlement</li>
            <li>• Disability retirement eligibility (if applicable)</li>
            <li>• VA disability compensation eligibility</li>
            <li>• No forfeiture of pay during hospitalization</li>
            <li>• Death benefits for survivors (if death case)</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">&quot;Not in Line of Duty - Due to Own Misconduct&quot; Finding</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• May still receive medical care (but potential recoupment)</li>
            <li>• Ineligible for disability retirement for that condition</li>
            <li>• Ineligible for VA disability compensation for that condition</li>
            <li>• Possible forfeiture of pay during hospitalization</li>
            <li>• Reduced or no death benefits (if death case)</li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Appeal Rights:</strong> Members have the right to rebut findings and
            appeal LOD/misconduct determinations. Ensure due process is provided.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Review Authority</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            LOD/misconduct determinations are typically reviewed by:
          </p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Staff Judge Advocate (legal sufficiency)</li>
            <li>• Medical Officer (medical aspects)</li>
            <li>• Commanding Officer (final determination)</li>
            <li>• Higher headquarters (if required by regulation)</li>
          </ul>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} content={content} data={data} />;
}
