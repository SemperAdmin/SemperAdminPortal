"use client";

import { TabbedContentLayout } from "../../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "ncis-cid", label: "NCIS/CID" },
  { id: "sja", label: "SJA Coordination" },
  { id: "other-commands", label: "Other Commands" },
  { id: "external-agencies", label: "External Agencies" },
  { id: "parallel-investigations", label: "Parallel Investigations" },
  { id: "information-sharing", label: "Information Sharing" },
  { id: "references", label: "References", type: "references" as const },
];

export function InvestigationCoordinationContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Investigation Coordination</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Many investigations require coordination with other agencies, commands,
            or organizations. As the convening authority, you orchestrate this
            coordination to ensure a complete investigation without compromising
            other ongoing efforts.
          </p>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Key Principle:</strong> Coordinate early and often. Establish
            clear communication channels and points of contact at the start.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Coordination Partners</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• NCIS / Army CID / AFOSI (criminal investigations)</li>
            <li>• Staff Judge Advocate (legal review)</li>
            <li>• Other commands (for witnesses, evidence, jurisdiction)</li>
            <li>• Inspector General (overlapping IG matters)</li>
            <li>• Medical (for injuries, mental health, autopsies)</li>
            <li>• Safety (for mishap investigations)</li>
            <li>• Civil authorities (local law enforcement, OSHA)</li>
          </ul>
        </div>
      </section>
    ),
    "ncis-cid": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">NCIS/CID Coordination</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            When criminal investigation agencies are involved, careful coordination
            is essential to avoid compromising either investigation.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">When They Are Involved</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• All deaths</li>
            <li>• Suspected serious crimes (felonies)</li>
            <li>• Matters affecting national security</li>
            <li>• Complex financial crimes</li>
            <li>• Senior official misconduct</li>
            <li>• Child abuse/sexual assault cases</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Coordination Points</h3>
          <ul className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Scene/Evidence:</strong> NCIS controls scene; do not disturb until released</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Witness Access:</strong> Coordinate interviews to avoid duplication/conflict</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Information Sharing:</strong> Request updates for your investigation</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Timing:</strong> Consider delaying command investigation if it might compromise criminal case</span></li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Important:</strong> NCIS operates independently. You cannot direct
            their investigation, but you can request information and coordination.
          </p>
        </div>
      </section>
    ),
    sja: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">SJA Coordination</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Your Staff Judge Advocate is a critical partner throughout the
            investigation process.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">SJA Support Throughout</h3>
          <ul className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Before:</strong> Advice on type of investigation, scope, IO selection</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>During:</strong> Guidance to IO on legal issues, witness rights, evidence</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>After:</strong> Legal sufficiency review, advice on actions</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Litigation-Report Investigations</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            For litigation-report (Type Two) investigations:
          </p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• SJA supervises the investigation</li>
            <li>• JAG attorney works directly with IO</li>
            <li>• Report forwarded through SJA to OJAG Code 15</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">When to Consult SJA</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Determining investigation type needed</li>
            <li>• Drafting convening orders</li>
            <li>• Questions about witness rights or immunity</li>
            <li>• Reviewing completed investigation</li>
            <li>• Deciding on actions based on findings</li>
            <li>• Any time you&apos;re unsure</li>
          </ul>
        </div>
      </section>
    ),
    "other-commands": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Coordination with Other Commands</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Investigations often involve witnesses, subjects, or evidence from
            other commands.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Witness Access</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Request through official channels (CO to CO)</li>
            <li>• Provide details on purpose and expected duration</li>
            <li>• Coordinate timing to minimize operational impact</li>
            <li>• Consider VTC/phone if travel impractical</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Jurisdictional Issues</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Determine who has primary jurisdiction</li>
            <li>• Consider joint investigations for complex matters</li>
            <li>• Higher command may need to direct coordination</li>
            <li>• Document jurisdictional decisions</li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Deployed Witnesses:</strong> For witnesses in deployed locations,
            coordinate with deployed command early. Use VTC when possible.
            Consider whether IO travel is necessary and feasible.
          </p>
        </div>
      </section>
    ),
    "external-agencies": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">External Agency Coordination</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Some investigations require coordination with civilian agencies.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Local Law Enforcement</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• May have jurisdiction for off-base incidents</li>
            <li>• Request reports and cooperation through official channels</li>
            <li>• Coordinate witness access if civilian witnesses involved</li>
            <li>• SJA can assist with formal requests</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">OSHA / Safety Agencies</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• OSHA may have jurisdiction for certain workplace incidents</li>
            <li>• Coordinate with Safety Officer on mishap investigations</li>
            <li>• Safety privilege may protect some information</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Federal Agencies</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• FBI (certain federal crimes, counterintelligence)</li>
            <li>• EPA (environmental incidents)</li>
            <li>• Other federal inspectors general</li>
          </ul>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Public Affairs:</strong> When external agencies are involved,
            coordinate with PAO on public statements and media inquiries.
          </p>
        </div>
      </section>
    ),
    "parallel-investigations": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Managing Parallel Investigations</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Multiple investigations into the same incident can proceed
            simultaneously, but require careful management.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Parallel Investigations</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• NCIS criminal + command administrative</li>
            <li>• Safety mishap + command investigation</li>
            <li>• IG complaint + command investigation</li>
            <li>• Multiple commands investigating same incident</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Deconfliction Strategies</h3>
          <ul className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Timing:</strong> Stagger witness interviews when possible</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Communication:</strong> Establish POCs and regular updates</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Scope:</strong> Clearly define each investigation&apos;s scope</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span><strong>Evidence:</strong> Coordinate evidence handling and sharing</span></li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Priority:</strong> Criminal investigations generally take
            priority. Consult SJA if your administrative investigation might
            compromise a criminal case.
          </p>
        </div>
      </section>
    ),
    "information-sharing": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Information Sharing</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Sharing investigation information requires balancing transparency
            with protection of the process.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What Can Be Shared</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• General status updates to chain of command</li>
            <li>• Specific information to agencies with need to know</li>
            <li>• Final findings after investigation complete</li>
            <li>• Information authorized by SJA for release</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What Should NOT Be Shared</h3>
          <ul className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Preliminary findings before investigation complete</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Witness statements to other witnesses</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Information that could compromise criminal investigation</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Privacy Act protected information without authorization</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">FOIA Considerations</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Investigation reports may be subject to FOIA requests:
          </p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Coordinate with FOIA office on requests</li>
            <li>• Certain exemptions may apply (privacy, law enforcement)</li>
            <li>• SJA reviews FOIA responses</li>
          </ul>
        </div>
        <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <p className="text-sm text-red-800 dark:text-red-200">
            <strong>Media:</strong> All media inquiries go through PAO. Do not
            discuss ongoing investigations with media.
          </p>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} content={content} data={data} />;
}
