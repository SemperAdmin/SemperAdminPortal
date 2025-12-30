"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "lead-times", label: "Lead Times" },
  { id: "pcs-season", label: "PCS Season" },
  { id: "leader-duties", label: "Leader Duties" },
  { id: "common-mistakes", label: "Common Mistakes" },
  { id: "references", label: "References", type: "references" as const },
];

export function AwardTimelineManagementContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Plan Ahead for Awards</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Awards take time to process. If you wait until departure is imminent, the award will not be ready for
            presentation. Plan ahead.
          </p>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Critical Point</h4>
          <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
            The award must be complete and uploaded to OMPF before it officially counts. Action dates too late for
            MCTFS processing will delay entry into the record.
          </p>
        </div>
      </section>
    ),
    "lead-times": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Recommended Lead Times</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            These timelines account for drafting, routing through the chain of command, approval authority review,
            and MCTFS processing.
          </p>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200">NAM/NCM</h4>
              <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
                60-90 days prior to ceremony or detachment
              </p>
            </div>
            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200">MSM</h4>
              <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
                90-120 days prior
              </p>
            </div>
            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200">Legion of Merit</h4>
              <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
                120+ days prior
              </p>
            </div>
            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200">Retirement Awards</h4>
              <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
                90-120 days minimum (some commands require more)
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <h4 className="font-semibold text-red-800 dark:text-red-200">Late Submissions</h4>
          <p className="mt-2 text-sm text-red-700 dark:text-red-300">
            If submitting late, include a justification letter explaining the delay. For LA and CE with end dates
            outside 3 years, submit to MMPB-3.
          </p>
        </div>
      </section>
    ),
    "pcs-season": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">PCS Season Best Practices</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            PCS season brings a surge of award packages. Leaders must be proactive and organized to ensure Marines
            receive awards before departure.
          </p>
          <ol className="mt-4 space-y-3 text-sm text-zinc-700 dark:text-zinc-300 list-decimal list-inside">
            <li className="pl-2">
              At the start of PCS season, download the outbound roster from MOL Outbound Interview Module
            </li>
            <li className="pl-2">
              Publish the outbound list to command leadership
            </li>
            <li className="pl-2">
              Identify which Marines are recommended for awards
            </li>
            <li className="pl-2">
              Create a tracking spreadsheet with Marine name, award level, submission date, and current status
            </li>
            <li className="pl-2">
              Brief the status of pending awards to the unit commander regularly
            </li>
          </ol>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Tracking Spreadsheet Columns</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Marine name and rank</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>PCS or EAS date</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Award level recommended</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Date submitted to iAPS</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Current status (draft, routing, approved, presented, uploaded)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Notes or blockers</span></li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Pro Tip</h4>
          <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
            Do not wait until Marines are checking out to start the award package. By then it is too late for timely processing.
          </p>
        </div>
      </section>
    ),
    "leader-duties": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Your Responsibilities</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Track all Marines' PCS and EAS dates well in advance</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Start award packages 120 days out for retirements, 90 days out for PCS</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Follow up with S-1 monthly on the status of submitted awards</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Ensure the signed certificate is uploaded to OMPF after presentation</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Account for chain of command review time when planning timelines</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Timeline Coordination</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Work backwards from the Marine's departure date to ensure all steps are completed on time:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>OMPF upload (after presentation)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Presentation ceremony (before departure)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Approval authority decision (1-2 weeks)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Chain of command routing (2-4 weeks)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Initial submission to iAPS (your deadline)</span></li>
          </ul>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Remember</h4>
          <p className="mt-2 text-sm text-blue-700 dark:text-blue-300">
            The award must be complete and uploaded to OMPF before it officially counts. Processing delays can affect
            promotion eligibility or board timing.
          </p>
        </div>
      </section>
    ),
    "common-mistakes": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Mistakes to Avoid</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">Starting Packages Too Late</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                Beginning the award process with insufficient lead time results in awards that are not ready before
                the Marine departs or transfers. This is the most common and most preventable mistake.
              </p>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">Not Accounting for Chain of Command Review Time</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                Submitting to iAPS is only the first step. The package must route through multiple levels of review,
                each of which takes time. Assume 2-4 weeks minimum for routing.
              </p>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">Failing to Upload Signed Certificate After Presentation</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                The award does not officially count until the signed certificate is uploaded to OMPF. Do not assume
                S-1 will handle this automatically.
              </p>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">Mismatched Dates Between iAPS and Certificate</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                If action dates in iAPS do not match the dates printed on the certificate, processing errors occur.
                Verify dates before submission and again before presentation.
              </p>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-800 dark:text-red-200">No Follow-Up with S-1</h4>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                Submitting to iAPS and then forgetting about the award is a common mistake. Follow up monthly to ensure
                the package is moving through the system.
              </p>
            </div>
          </div>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
