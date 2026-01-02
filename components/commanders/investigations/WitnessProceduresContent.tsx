"use client";

import { TabbedContentLayout } from "../../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "who-interview", label: "Who to Interview" },
  { id: "witness-rights", label: "Witness Rights" },
  { id: "warnings", label: "Required Warnings" },
  { id: "compelling", label: "Compelling Testimony" },
  { id: "problem-witnesses", label: "Problem Witnesses" },
  { id: "commander-actions", label: "Commander Actions" },
  { id: "references", label: "References", type: "references" as const },
];

export function WitnessProceduresContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Witness Procedures for Commanders</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            As the convening authority, you oversee the IO&apos;s witness interviews but generally
            do not conduct them yourself. Your role is to ensure proper procedures are followed,
            witnesses are properly protected, and the IO has access to needed witnesses.
          </p>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Authority:</strong> JAGMAN Sections 0209-0211 govern witness procedures
            in administrative investigations.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Commander&apos;s Role</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Ensure IO has access to necessary witnesses</li>
            <li>• Address requests for witnesses outside the command</li>
            <li>• Verify proper warnings are administered</li>
            <li>• Protect witnesses from retaliation</li>
            <li>• Address uncooperative witnesses</li>
            <li>• Coordinate with other commands as needed</li>
          </ul>
        </div>
      </section>
    ),
    "who-interview": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Who Should Be Interviewed</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The IO determines who to interview, but you may suggest witnesses in the
            convening order or through subsequent guidance.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Types of Witnesses</h3>
          <ul className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Eyewitnesses:</strong> Anyone who directly observed the incident</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Subject(s):</strong> The person(s) whose conduct is under review</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Supervisory Chain:</strong> Supervisors who may have relevant knowledge</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Expert Witnesses:</strong> Subject matter experts when technical issues are involved</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Character Witnesses:</strong> Generally NOT appropriate for factual investigations</span></li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Consideration:</strong> If a key witness is about to PCS, deploy, or
            separate, alert the IO to prioritize that interview.
          </p>
        </div>
      </section>
    ),
    "witness-rights": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Witness Rights</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Ensure the IO understands and respects witness rights. Violations can
            compromise the investigation and create legal issues.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Rights of All Witnesses</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Right against self-incrimination (Article 31/Fifth Amendment)</li>
            <li>• Right to consult with counsel before answering</li>
            <li>• Right to have attorney present during questioning</li>
            <li>• Right to not answer questions that may incriminate</li>
            <li>• Protection from retaliation for testimony</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Subject Rights</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            When a witness becomes a &quot;subject&quot; of the investigation (their conduct is at issue):
          </p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Must be notified of subject status</li>
            <li>• Article 31(b) rights warning required</li>
            <li>• Right to counsel before and during questioning</li>
            <li>• Should be interviewed last when possible</li>
          </ul>
        </div>
        <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <p className="text-sm text-red-800 dark:text-red-200">
            <strong>Critical:</strong> A witness who was not a subject initially can become
            one during the investigation. The IO must recognize this and provide appropriate warnings.
          </p>
        </div>
      </section>
    ),
    warnings: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Required Warnings</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Ensure your IO understands and properly administers required warnings.
            Failure to warn can make statements inadmissible.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Article 31(b) Warning</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Required before questioning a military member suspected of an offense:
          </p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Inform of nature of accusation</li>
            <li>• Inform of right to remain silent</li>
            <li>• Inform that statements can be used against them</li>
            <li>• Inform of right to consult with counsel</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">10 U.S.C. § 1219 Warning</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Required before questioning about the origin of an injury or illness for LOD purposes:
          </p>
          <div className="mt-2 rounded-lg bg-zinc-100 p-3 dark:bg-zinc-800">
            <p className="text-sm text-zinc-700 dark:text-zinc-300 font-mono">
              &quot;You are being questioned about the origin of a disease or injury that
              you may have. You may not be required to furnish evidence that may tend
              to incriminate you.&quot;
            </p>
          </div>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Civilian Witnesses:</strong> Article 31 does not apply to civilians, but
            Fifth Amendment rights still apply. Miranda warnings may be required if the
            civilian is in custody and suspected of a crime.
          </p>
        </div>
      </section>
    ),
    compelling: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Compelling Testimony</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            In administrative investigations, you have authority to compel military members
            to provide testimony. This creates an important trade-off.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Order to Testify</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            You may order a military witness to answer questions truthfully:
          </p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Order overcomes Article 31 right to remain silent</li>
            <li>• Witness must answer or face UCMJ action for disobedience</li>
            <li>• However, compelled statements have immunity protections</li>
            <li>• Statements cannot be used against the witness in court-martial</li>
          </ul>
        </div>
        <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <p className="text-sm text-red-800 dark:text-red-200">
            <strong>Critical:</strong> Consult SJA before ordering testimony. Compelled
            statements grant testimonial immunity—the statement and evidence derived from
            it cannot be used against the witness at court-martial.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">When to Compel</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• When administrative truth-finding outweighs prosecution interest</li>
            <li>• When witness is not the primary target of potential prosecution</li>
            <li>• When other evidence makes the witness&apos;s statement not critical to prosecution</li>
            <li>• When SJA advises prosecution is unlikely</li>
          </ul>
        </div>
      </section>
    ),
    "problem-witnesses": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Problem Witnesses</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Address witness challenges the IO brings to your attention.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Uncooperative Witnesses</h3>
          <ul className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Military Members:</strong> May be ordered to cooperate; refusal is a UCMJ offense</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Civilians:</strong> Cannot be compelled in command investigations; consider upgrading to court/board of inquiry if testimony essential</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>In Other Commands:</strong> Request cooperation through that member&apos;s command</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Unavailable Witnesses</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Deployed: Use VTC/phone interview, or request IO travel</li>
            <li>• PCS&apos;d: Coordinate with gaining command</li>
            <li>• Separated: Voluntary interview only (unless court/board)</li>
            <li>• Deceased: Prior statements may be usable if properly documented</li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Documentation:</strong> If a witness is unavailable or refuses to
            cooperate, have the IO document this in the report with attempts made.
          </p>
        </div>
      </section>
    ),
    "commander-actions": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Commander Actions</h2>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Facilitating Access</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Direct subordinate commands to make witnesses available</li>
            <li>• Coordinate with external commands for their members</li>
            <li>• Authorize IO travel if witnesses are at other locations</li>
            <li>• Provide administrative support for scheduling</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Protecting Witnesses</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Emphasize zero tolerance for retaliation</li>
            <li>• Consider separating witnesses from subjects if needed</li>
            <li>• Address any reported intimidation immediately</li>
            <li>• Protect confidentiality of witness statements to extent possible</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Review of Statements</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            When reviewing the completed investigation:
          </p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Verify proper warnings were given and documented</li>
            <li>• Ensure key witnesses were interviewed</li>
            <li>• Check that statements are signed</li>
            <li>• Review for consistency between witness accounts</li>
            <li>• Identify any credibility issues the IO flagged</li>
          </ul>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} content={content} data={data} />;
}
