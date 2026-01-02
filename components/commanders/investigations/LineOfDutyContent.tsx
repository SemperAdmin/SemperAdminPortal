"use client";

import { TabbedContentLayout } from "../../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "when-required", label: "When Required" },
  { id: "lod-categories", label: "LOD Categories" },
  { id: "misconduct", label: "Misconduct" },
  { id: "convening", label: "Convening Investigation" },
  { id: "making-determination", label: "Making Determination" },
  { id: "consequences", label: "Consequences" },
  { id: "references", label: "References", type: "references" as const },
];

export function LineOfDutyContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Line of Duty Determinations</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Line of Duty (LOD) and misconduct determinations are crucial administrative
            decisions that directly affect a service member&apos;s entitlement to benefits
            and can impact their career. As the approving authority, you make the final
            determination based on the investigation.
          </p>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Key Question:</strong> Was the injury, illness, or death incurred
            &quot;in line of duty&quot; and was misconduct involved?
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Commander&apos;s Role</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Determine when an LOD investigation is required</li>
            <li>• Convene the investigation</li>
            <li>• Review the investigation report</li>
            <li>• Make the LOD/misconduct determination</li>
            <li>• Ensure due process for affected member</li>
            <li>• Forward to higher authority if required</li>
          </ul>
        </div>
      </section>
    ),
    "when-required": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">When LOD Investigation Required</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            An LOD investigation is required whenever the circumstances suggest
            the injury or illness may NOT have been in line of duty.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Mandatory Investigation Situations</h3>
          <ul className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Injury or death when misconduct may be involved</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Injury during unauthorized absence</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Self-inflicted injury</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Injury while intoxicated</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Injury during commission of offense</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Vehicle accident injury</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Any case where LOD is not apparent</span></li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Presumption:</strong> There is a presumption that injury or disease
            was incurred in line of duty. This presumption must be rebutted by
            preponderance of the evidence.
          </p>
        </div>
      </section>
    ),
    "lod-categories": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">LOD Determination Categories</h2>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <div className="space-y-4">
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <p className="font-semibold text-green-800 dark:text-green-200">&quot;In Line of Duty&quot;</p>
              <p className="mt-1 text-sm text-green-700 dark:text-green-300">
                The injury, illness, or death occurred while the member was performing
                military duties or was otherwise not due to the member&apos;s own misconduct.
              </p>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <p className="font-semibold text-red-800 dark:text-red-200">&quot;Not in Line of Duty - Due to Own Misconduct&quot;</p>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                The injury, illness, or death was the proximate result of the
                member&apos;s own misconduct.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Burden of Proof</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Presumption favors &quot;In Line of Duty&quot;</li>
            <li>• Standard is &quot;preponderance of the evidence&quot;</li>
            <li>• Burden is on the government to prove misconduct</li>
            <li>• If evidence is evenly balanced, finding is &quot;In Line of Duty&quot;</li>
          </ul>
        </div>
      </section>
    ),
    misconduct: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Understanding Misconduct</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            To find &quot;Not in Line of Duty - Due to Own Misconduct,&quot; you must
            determine that misconduct was the proximate cause of the injury.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What Constitutes Misconduct</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Misconduct requires:
          </p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Deliberate wrongdoing with knowledge of likely consequences, OR</li>
            <li>• Persistent and deliberate disregard of expected standards of behavior</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Examples of Misconduct</h3>
          <ul className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Injuries while intoxicated (BAC 0.10+ or higher)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Injuries during unauthorized absence</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Self-inflicted injuries (not resulting from mental disease)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Injuries while committing an offense</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Injuries from drug use</span></li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Important:</strong> Simple negligence is NOT misconduct. There must be
            a deliberate act or willful disregard of known dangers. An accident while
            driving slightly over the speed limit is likely not misconduct.
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
    convening: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Convening the Investigation</h2>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Convening Order Elements</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Your convening order for an LOD investigation should address:
          </p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Circumstances of the injury, illness, or death</li>
            <li>• Whether injury/illness was incurred in line of duty</li>
            <li>• Whether misconduct was involved</li>
            <li>• Whether misconduct was the proximate cause</li>
            <li>• Any aggravating or mitigating circumstances</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key Evidence to Direct</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Medical records and treatment documentation</li>
            <li>• Blood alcohol/toxicology results</li>
            <li>• Police reports (if any)</li>
            <li>• Leave/liberty documentation</li>
            <li>• Witness statements</li>
            <li>• Vehicle damage reports (if applicable)</li>
          </ul>
        </div>
        <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <p className="text-sm text-red-800 dark:text-red-200">
            <strong>10 U.S.C. § 1219 Warning:</strong> Direct the IO to provide
            the 1219 warning before interviewing the injured member about the
            origin of their injury.
          </p>
        </div>
      </section>
    ),
    "making-determination": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Making the Determination</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            After reviewing the investigation, you make the LOD/misconduct determination.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Review Considerations</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Are findings of fact supported by evidence?</li>
            <li>• Is misconduct proven by preponderance of evidence?</li>
            <li>• Was misconduct the proximate cause?</li>
            <li>• Were proper warnings given to the member?</li>
            <li>• Did the member have opportunity to respond?</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Due Process Requirements</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Member must be notified of potential adverse finding</li>
            <li>• Member entitled to review evidence</li>
            <li>• Member entitled to submit rebuttal</li>
            <li>• Consider rebuttal before making final determination</li>
            <li>• Document your decision and reasoning</li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>SJA Review:</strong> Have SJA review the investigation and your
            proposed determination before finalizing.
          </p>
        </div>
      </section>
    ),
    consequences: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Consequences of Determinations</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            LOD determinations have significant consequences for service members.
          </p>
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
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Appeal Rights:</strong> Members have the right to appeal LOD/misconduct
            determinations. Ensure they are informed of this right.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Review Authority</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Certain findings must be forwarded to higher authority:
          </p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• &quot;Not in Line of Duty&quot; findings typically require endorsement</li>
            <li>• Death cases may require JAG review</li>
            <li>• Check service-specific regulations for routing requirements</li>
          </ul>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} content={content} data={data} />;
}
