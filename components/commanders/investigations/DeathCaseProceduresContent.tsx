"use client";

import { TabbedContentLayout } from "../../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "immediate-actions", label: "Immediate Actions" },
  { id: "investigation-types", label: "Investigation Types" },
  { id: "coordination", label: "Coordination" },
  { id: "nok-notification", label: "NOK Notification" },
  { id: "reviewing-report", label: "Reviewing Report" },
  { id: "common-issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

export function DeathCaseProceduresContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Death Case Procedures for Commanders</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Death cases require immediate and careful handling. As the commander,
            you are responsible for ensuring proper investigation, coordination with
            multiple agencies, and compassionate care for the family while preserving
            the integrity of the investigation.
          </p>
        </div>
        <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <p className="text-sm text-red-800 dark:text-red-200">
            <strong>Critical:</strong> Death investigations are highly scrutinized.
            Errors can cause immense additional pain to families and create legal
            liability. Take your time and get it right.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Commander Responsibilities</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Initiate immediate notifications</li>
            <li>• Preserve evidence and scene</li>
            <li>• Convene appropriate investigation</li>
            <li>• Coordinate with NCIS, medical examiner, and others</li>
            <li>• Ensure proper NOK notification</li>
            <li>• Appoint Casualty Assistance Calls Officer (CACO)</li>
            <li>• Review investigation and make LOD determination</li>
          </ul>
        </div>
      </section>
    ),
    "immediate-actions": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Immediate Actions</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Upon notification of a death, take these immediate steps.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">First 24 Hours</h3>
          <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
            <li><strong>Notify chain of command</strong> - Report up immediately</li>
            <li><strong>Notify NCIS</strong> - Required for all deaths, they determine jurisdiction</li>
            <li><strong>Preserve scene</strong> - Secure area until NCIS clears</li>
            <li><strong>Notify medical examiner</strong> - Armed Forces Medical Examiner has jurisdiction</li>
            <li><strong>Begin casualty notification process</strong> - Do NOT notify NOK until properly coordinated</li>
            <li><strong>Appoint CACO</strong> - Casualty Assistance Calls Officer</li>
            <li><strong>Secure personal effects</strong> - Inventory and safeguard</li>
          </ol>
        </div>
        <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <p className="text-sm text-red-800 dark:text-red-200">
            <strong>Warning:</strong> Do NOT allow unofficial notification to NOK.
            Brief all personnel that NO ONE contacts family until official notification.
            This includes social media restrictions.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Notifications</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• NCIS (all deaths)</li>
            <li>• Chain of command</li>
            <li>• SJA</li>
            <li>• Chaplain</li>
            <li>• Medical officer</li>
            <li>• Public affairs (anticipate media interest)</li>
            <li>• Inspector General (suicide cases)</li>
          </ul>
        </div>
      </section>
    ),
    "investigation-types": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Types of Death Investigations</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Multiple investigations may run concurrently.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Criminal Investigation (NCIS)</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• NCIS has jurisdiction over all deaths</li>
            <li>• They determine if criminal investigation needed</li>
            <li>• Coordinate with them—do not interfere with their investigation</li>
            <li>• They will release scene and body when done</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Command Investigation (You Convene)</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Required for all deaths</li>
            <li>• Determines LOD and misconduct</li>
            <li>• Examines circumstances and contributing factors</li>
            <li>• Can proceed parallel to NCIS investigation</li>
            <li>• Coordinate with NCIS on witness access</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Medical Examination</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Armed Forces Medical Examiner determines cause of death</li>
            <li>• Autopsy required for most military deaths</li>
            <li>• Results inform your command investigation</li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Special Cases:</strong> Suicide cases may also require IG review
            and mental health records review. Hostile action deaths have additional
            reporting requirements.
          </p>
        </div>
      </section>
    ),
    coordination: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Agency Coordination</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Death cases require coordination with multiple agencies. Establish
            clear communication channels early.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">NCIS Coordination</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• They control the scene initially</li>
            <li>• Coordinate witness interviews to avoid duplication</li>
            <li>• Request their findings to inform your investigation</li>
            <li>• Do not release information that could compromise their investigation</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Medical Examiner</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Request preliminary findings for your investigation</li>
            <li>• Final autopsy report may take weeks/months</li>
            <li>• Preliminary findings usually sufficient for LOD determination</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Casualty Assistance</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Work with Casualty Assistance on family communications</li>
            <li>• CACO is family&apos;s primary point of contact</li>
            <li>• Coordinate what information can be shared with family</li>
            <li>• Family may request briefing on investigation findings</li>
          </ul>
        </div>
      </section>
    ),
    "nok-notification": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Next of Kin Notification</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Proper notification is one of the most important things you can do
            for the family. It must be done right.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Notification Requirements</h3>
          <ul className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>In Person:</strong> NOK must be notified in person whenever possible</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Uniformed Officer:</strong> Notification made by uniformed officer (O-4+)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Chaplain:</strong> Should accompany notification officer when possible</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Timing:</strong> During reasonable hours unless confirmed through other means</span></li>
          </ul>
        </div>
        <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <p className="text-sm text-red-800 dark:text-red-200">
            <strong>Critical:</strong> Verify NOK information from official records.
            Notify Primary NOK first. Brief notification team on what CAN and
            CANNOT be said about circumstances.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">CACO Assignment</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Assign a qualified CACO immediately</li>
            <li>• CACO serves as family liaison throughout the process</li>
            <li>• Ensure CACO is trained and has resources</li>
            <li>• CACO assists with benefits, remains disposition, personal effects</li>
          </ul>
        </div>
      </section>
    ),
    "reviewing-report": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Reviewing Death Investigation Reports</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Death investigation reports receive heightened scrutiny. Ensure
            thoroughness before making your determination.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key Questions</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Is cause of death established?</li>
            <li>• Are circumstances fully documented?</li>
            <li>• Was misconduct involved?</li>
            <li>• Was death in line of duty?</li>
            <li>• Are there systemic issues to address?</li>
            <li>• Is evidence sufficient to support findings?</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">LOD Determination</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Your LOD determination affects survivor benefits significantly:
          </p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• &quot;In Line of Duty&quot;: Full death benefits</li>
            <li>• &quot;Not in Line of Duty - Misconduct&quot;: Reduced or no benefits</li>
            <li>• Ensure due process before adverse determination</li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Family Briefing:</strong> Families often request to be briefed
            on investigation findings. Coordinate with SJA on what can be shared
            and when.
          </p>
        </div>
      </section>
    ),
    "common-issues": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Issues in Death Cases</h2>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Notification Errors</h3>
          <ul className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Unofficial notification via social media or rumors</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Notifying wrong person as Primary NOK</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Sharing unconfirmed details with family</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Investigation Errors</h3>
          <ul className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Disturbing scene before NCIS clears</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Inadequate preservation of evidence</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Incomplete investigation of circumstances</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Failure to interview key witnesses</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Handling Errors</h3>
          <ul className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Mishandling of personal effects</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Delays in remains disposition</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Poor communication with family</span></li>
          </ul>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Prevention:</strong> Brief your team on procedures BEFORE
            a death occurs. Have checklists ready. Conduct periodic training.
          </p>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} content={content} data={data} />;
}
