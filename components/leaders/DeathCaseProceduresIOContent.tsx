"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "types", label: "Investigation Types" },
  { id: "required-findings", label: "Required Findings" },
  { id: "evidence", label: "Evidence Collection" },
  { id: "notifications", label: "Notifications" },
  { id: "special-considerations", label: "Special Considerations" },
  { id: "references", label: "References", type: "references" as const },
];

export function DeathCaseProceduresIOContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Death Case Investigation Overview</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Deaths of service members require thorough investigation to determine the
            circumstances, line of duty status, and any contributing factors. These
            investigations serve multiple purposes including benefits determination,
            historical record, and potential corrective action.
          </p>
        </div>
        <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <p className="text-sm text-red-800 dark:text-red-200">
            <strong>Critical:</strong> Death cases require a COMMAND INVESTIGATION, never a
            litigation-report investigation. JAGMAN Section 0203 mandates command investigation
            for all deaths of active-duty military personnel.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Deaths Requiring Investigation</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Active duty military members</li>
            <li>• Reserve/Guard members on active duty</li>
            <li>• Civilians killed while accompanying military forces</li>
            <li>• Deaths in combat or hostile areas</li>
            <li>• Deaths from accidents</li>
            <li>• Deaths from suicide or suspected suicide</li>
            <li>• Deaths from natural causes (abbreviated investigation)</li>
          </ul>
        </div>
      </section>
    ),
    types: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Types of Death Investigations</h2>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Full Command Investigation</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Required for deaths that are:
          </p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Combat/hostile action related</li>
            <li>• Suicide or suspected suicide</li>
            <li>• Accident-related</li>
            <li>• Under suspicious circumstances</li>
            <li>• Homicide</li>
            <li>• Any death where misconduct may be involved</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Abbreviated Investigation</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            May be appropriate for deaths due to natural causes when:
          </p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Death certificate shows natural causes</li>
            <li>• No indication of misconduct or negligence</li>
            <li>• No questions regarding line of duty</li>
            <li>• Family has no concerns requiring investigation</li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>When in Doubt:</strong> Conduct a full investigation. It is better to
            over-investigate than to leave questions unanswered.
          </p>
        </div>
      </section>
    ),
    "required-findings": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Required Findings</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Death investigations must address specific questions to enable benefits
            determinations and provide a complete historical record.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Essential Findings</h3>
          <ul className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Identity:</strong> Full identification of the deceased</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Date/Time:</strong> When death occurred</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Location:</strong> Where death occurred</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Cause:</strong> Medical cause of death</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Circumstances:</strong> How the death occurred</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Line of Duty:</strong> Was death in line of duty?</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Misconduct:</strong> Was misconduct involved?</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Additional Findings (as applicable)</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Contributing factors</li>
            <li>• Systemic issues identified</li>
            <li>• Recommendations for prevention</li>
            <li>• Disciplinary action warranted (if misconduct by others)</li>
            <li>• Equipment or procedural failures</li>
          </ul>
        </div>
      </section>
    ),
    evidence: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Evidence Collection</h2>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key Evidence Sources</h3>
          <ul className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Death Certificate:</strong> From medical authority</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Autopsy Report:</strong> If performed (may need to wait)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Toxicology Results:</strong> Blood alcohol, drug screening</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Medical Records:</strong> Treatment, history, mental health</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Police/NCIS Reports:</strong> If law enforcement investigated</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Witness Statements:</strong> Those present or with knowledge</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Personnel Records:</strong> SRB, counseling, evaluations</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Suicide Cases - Additional Evidence</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Suicide notes or messages</li>
            <li>• Mental health treatment records</li>
            <li>• Recent communications (emails, texts, social media)</li>
            <li>• Interviews with family, friends, chain of command</li>
            <li>• Command climate assessment (if warranted)</li>
            <li>• Recent life stressors (financial, relationship, legal)</li>
          </ul>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Note:</strong> Coordinate with NCIS or other investigating agencies.
            Do not interfere with criminal investigations.
          </p>
        </div>
      </section>
    ),
    notifications: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Notifications and Coordination</h2>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Required Notifications</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• HQMC (Casualty Section)</li>
            <li>• NCIS (if suspicious circumstances)</li>
            <li>• Staff Judge Advocate</li>
            <li>• Chain of Command</li>
            <li>• Medical/Mental Health (if suicide)</li>
          </ul>
        </div>
        <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <p className="text-sm text-red-800 dark:text-red-200">
            <strong>Family Notification:</strong> The IO does NOT make initial death notification
            to the family. This is done through official casualty notification channels.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Coordination with Family</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Family may be interviewed as part of investigation</li>
            <li>• Be sensitive and compassionate</li>
            <li>• Explain purpose of investigation</li>
            <li>• Family is entitled to a copy of the completed report</li>
            <li>• Coordinate through Casualty Assistance Officer (CAO)</li>
          </ul>
        </div>
      </section>
    ),
    "special-considerations": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Special Considerations</h2>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Suicide Cases</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Handle with extreme sensitivity</li>
            <li>• Focus on circumstances, not assigning blame to deceased</li>
            <li>• Identify systemic issues or warning signs missed</li>
            <li>• Consult with mental health professionals</li>
            <li>• Consider command climate factors</li>
            <li>• Report required to Suicide Prevention Office</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Combat Deaths</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Coordinate with unit in theater</li>
            <li>• May require classified handling</li>
            <li>• Obtain operational reports and patrol logs</li>
            <li>• Interview surviving unit members</li>
            <li>• Document tactical situation</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Media/Public Interest Cases</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Coordinate all communications through Public Affairs</li>
            <li>• Do NOT release information to media</li>
            <li>• Protect privacy of deceased and family</li>
            <li>• Be aware of congressional interest</li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Time Sensitivity:</strong> Death investigations should be initiated within
            24-72 hours and completed as expeditiously as possible to support benefits processing.
          </p>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} content={content} data={data} />;
}
