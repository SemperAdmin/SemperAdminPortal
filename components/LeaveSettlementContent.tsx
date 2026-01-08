"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";
import { MCO_URLS } from "@/data/references";

const MCOLink = ({ mco, url }: { mco: string; url: string }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="font-medium text-[var(--sa-navy)] underline decoration-1 underline-offset-2 hover:text-[var(--sa-gold)] dark:text-[var(--sa-cream)] dark:hover:text-[var(--sa-gold)]"
  >
    {mco}
  </a>
);

interface Reference {
  title: string;
  url: string;
  isQuickLink?: boolean;
}

interface Props {
  data: {
    references: Reference[];
  };
}

const KEY_POINTS: { label: string; value: string; url?: string }[] = [
  { label: "Leave System", value: "MOL Leave Management" },
  { label: "Leave En Route", value: "Authorized on PCS orders" },
  { label: "Proceed Time", value: "Separate from leave, based on distance" },
  { label: "Maximum Accrual", value: "60 days (excess lost Oct 1)" },
  { label: "Leave Earning Rate", value: "2.5 days per month" },
  { label: "Authority", value: "MCO 1050.3J", url: MCO_URLS.LEAVE_LIBERTY },
];

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "enroute", label: "Leave En Route" },
  { id: "proceed", label: "Proceed Time" },
  { id: "issues", label: "Issues" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const TRAVEL_STATUS = [
  { component: "Travel days", status: "Duty status, per diem authorized" },
  { component: "Leave en route", status: "Leave status, no per diem" },
  { component: "Proceed time", status: "Duty status, no per diem" },
];

const PROCEED_TIME = [
  { distance: "0-400 miles", days: "1 day" },
  { distance: "401-900 miles", days: "2 days" },
  { distance: "901-1400 miles", days: "3 days" },
  { distance: "1401+ miles", days: "4 days" },
];

const EXAMPLE_TIMELINE = [
  { day: "Day 1", status: "Detach, begin travel", perDiem: "Yes" },
  { day: "Day 2-3", status: "Travel (proceed time)", perDiem: "Yes" },
  { day: "Day 4-10", status: "Leave en route (7 days)", perDiem: "No" },
  { day: "Day 11", status: "Report to new duty station", perDiem: "N/A" },
];

const COMMON_ISSUES = [
  {
    issue: "Leave Balance Discrepancy",
    cause: "Records not updated, leave not posted",
    resolution: ["Provide leave documentation to S-1", "Request MCTFS correction", "Verify correction on next LES"],
  },
  {
    issue: "Leave En Route Not Approved",
    cause: "Not requested before departure, orders not annotated",
    resolution: ["Leave en route must be on orders", "Cannot be added after departure", "Take leave at new duty station instead"],
  },
  {
    issue: "Incorrect Leave Charged",
    cause: "Travel days charged as leave",
    resolution: ["Review orders for authorized travel time", "Request correction through S-1", "Provide travel documentation"],
  },
];

const CHECKLIST_BEFORE = [
  "Verify leave balance in MOL",
  "Request leave en route (if desired)",
  "Ensure leave en route on orders",
  "Reconcile any balance discrepancies",
  "Print leave balance documentation",
];

const CHECKLIST_DURING = [
  "Track travel days vs. leave days",
  "Keep travel documentation",
  "Do not exceed authorized leave",
];

const CHECKLIST_ARRIVAL = [
  "Verify leave balance at new command",
  "Report discrepancies immediately",
  "Provide documentation if needed",
];

const REQUESTING_LEAVE_STEPS = [
  "Request through command before departure",
  "Annotated on PCS orders",
  "Specify number of days",
  "Identify leave location",
];

const PCS_TIMELINE_COMPONENTS = [
  "Detachment date (last duty day)",
  "Travel days (proceed time)",
  "Leave en route (if authorized)",
  "Report date (first duty day at new station)",
];

export function LeaveSettlementContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Leave Settlement Overview
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Leave settlement for PCS ensures your leave balance is accurately calculated and any leave
            taken during your transfer is properly documented. Unlike terminal leave for separation,
            PCS leave settlement involves reconciling your leave balance between commands and potentially
            using leave en route during travel. Proper documentation prevents leave balance discrepancies
            at your new duty station.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Requirements
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Element</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Requirement</th>
                </tr>
              </thead>
              <tbody>
                {KEY_POINTS.map((point) => (
                  <tr key={point.label} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{point.label}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">
                      {point.url ? <MCOLink mco={point.value} url={point.url} /> : point.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Leave Balance During PCS
          </h3>
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Before Departure</h4>
              <ol className="mt-2 space-y-1 list-decimal list-inside text-sm text-zinc-700 dark:text-zinc-300">
                <li>Check leave balance in MOL</li>
                <li>Verify all leave properly documented</li>
                <li>Reconcile any discrepancies with S-1</li>
                <li>Determine if taking leave en route</li>
              </ol>
            </div>
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <h4 className="font-medium text-green-800 dark:text-green-200">Leave Transfer</h4>
              <p className="mt-1 text-sm text-green-700 dark:text-green-300">
                Your leave balance transfers with your MCTFS record:
              </p>
              <ul className="mt-2 space-y-1 text-sm text-green-700 dark:text-green-300">
                <li>• Balance carries to new duty station</li>
                <li>• No settlement or payout for PCS</li>
                <li>• Verify balance correct upon arrival</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    ),

    enroute: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            What Is Leave En Route
          </h3>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Leave taken during PCS travel between duty stations:
          </p>
          <ul className="mt-4 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Must be authorized on orders</li>
            <li>• Added to travel time</li>
            <li>• Uses accrued leave balance</li>
            <li>• No per diem during leave period</li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Requesting Leave En Route
          </h3>
          <ol className="mt-4 space-y-2">
            {REQUESTING_LEAVE_STEPS.map((step, index) => (
              <li key={step} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">
                  {index + 1}
                </span>
                <span className="text-sm text-zinc-700 dark:text-zinc-300">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Impact on Travel Time
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Component</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Status</th>
                </tr>
              </thead>
              <tbody>
                {TRAVEL_STATUS.map((row) => (
                  <tr key={row.component} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{row.component}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{row.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            MOL Leave Management
          </h3>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Checking Balance</h4>
              <ol className="mt-2 space-y-1 list-decimal list-inside text-sm text-zinc-700 dark:text-zinc-300">
                <li>Log into MOL</li>
                <li>Navigate to Leave/Liberty</li>
                <li>View current balance</li>
                <li>Review leave history</li>
              </ol>
            </div>
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Submitting Leave Requests</h4>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">For leave en route:</p>
              <ol className="mt-2 space-y-1 list-decimal list-inside text-sm text-zinc-700 dark:text-zinc-300">
                <li>Submit leave request in MOL</li>
                <li>Specify as leave en route</li>
                <li>Coordinate with S-1 for orders annotation</li>
                <li>Obtain approval before departure</li>
              </ol>
            </div>
          </div>
        </section>
      </div>
    ),

    proceed: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            What Is Proceed Time
          </h3>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Authorized travel time based on distance:
          </p>
          <ul className="mt-4 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Not charged as leave</li>
            <li>• Based on official distance</li>
            <li>• Calculated per JTR</li>
            <li>• Separate from leave en route</li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Proceed Time Calculation
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Distance</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Authorized Days</th>
                </tr>
              </thead>
              <tbody>
                {PROCEED_TIME.map((row) => (
                  <tr key={row.distance} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{row.distance}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{row.days}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Proper Sequencing
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Typical PCS travel sequence:
          </p>
          <ol className="mt-4 space-y-2">
            {PCS_TIMELINE_COMPONENTS.map((step, index) => (
              <li key={step} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">
                  {index + 1}
                </span>
                <span className="text-sm text-zinc-700 dark:text-zinc-300">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Example Timeline
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Day</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Status</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Per Diem</th>
                </tr>
              </thead>
              <tbody>
                {EXAMPLE_TIMELINE.map((row) => (
                  <tr key={row.day} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{row.day}</td>
                    <td className="py-2 pr-4 text-zinc-600 dark:text-zinc-400">{row.status}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{row.perDiem}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Special Leave Situations</h4>
          <div className="mt-2 space-y-3">
            <div>
              <p className="text-sm font-medium text-amber-700 dark:text-amber-300">Approaching 60-Day Limit</p>
              <ul className="mt-1 space-y-1 text-sm text-amber-600 dark:text-amber-400">
                <li>• Use leave before PCS if possible</li>
                <li>• Request leave en route</li>
                <li>• Apply for Special Leave Accrual if eligible</li>
                <li>• Leave over 60 days lost on Oct 1</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium text-amber-700 dark:text-amber-300">OCONUS PCS Leave</p>
              <ul className="mt-1 space-y-1 text-sm text-amber-600 dark:text-amber-400">
                <li>• May be authorized additional travel time</li>
                <li>• Environmental and Morale Leave (EML) may apply at new station</li>
                <li>• Coordinate with gaining command for leave policies</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    ),

    issues: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common Leave Issues
          </h3>
          <div className="mt-4 space-y-4">
            {COMMON_ISSUES.map((item) => (
              <div key={item.issue} className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                <h4 className="font-medium text-red-700 dark:text-red-400">{item.issue}</h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="font-medium">Cause:</span> {item.cause}
                </p>
                <div className="mt-2">
                  <span className="text-sm font-medium text-green-700 dark:text-green-400">Resolution:</span>
                  <ul className="mt-1 space-y-1">
                    {item.resolution.map((step) => (
                      <li key={step} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <span className="text-green-600 mt-0.5">•</span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Leave Balance Verification
          </h3>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">At Current Command</h4>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Before departure:</p>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Print leave balance from MOL</li>
                <li>• Verify with S-1</li>
                <li>• Document any pending leave requests</li>
                <li>• Reconcile discrepancies</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">At Gaining Command</h4>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Upon arrival:</p>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Verify leave balance transferred correctly</li>
                <li>• Report discrepancies to S-1</li>
                <li>• Provide documentation if balance incorrect</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Resources
          </h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">MOL Leave Management</h4>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">https://mol.tfs.usmc.mil</p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Unit S-1/Admin</h4>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Leave requests, balance verification</p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">IPAC</h4>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">MCTFS corrections</p>
            </div>
            <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">JTR</h4>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Travel and leave regulations</p>
            </div>
          </div>
        </section>
      </div>
    ),

    checklist: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Before Departure
          </h3>
          <ul className="mt-4 space-y-2">
            {CHECKLIST_BEFORE.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            During PCS
          </h3>
          <ul className="mt-4 space-y-2">
            {CHECKLIST_DURING.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Upon Arrival
          </h3>
          <ul className="mt-4 space-y-2">
            {CHECKLIST_ARRIVAL.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
