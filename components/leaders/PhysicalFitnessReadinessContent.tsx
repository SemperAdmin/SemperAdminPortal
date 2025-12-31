"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "requirements", label: "Requirements" },
  { id: "consequences", label: "Failure Consequences" },
  { id: "leader-role", label: "Leader Role" },
  { id: "references", label: "References", type: "references" as const },
];

export function PhysicalFitnessReadinessContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Physical Fitness Readiness for Deployment</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Marines must maintain physical fitness readiness to deploy. Per MCO 6100.13A, passing PFT and CFT scores
            are required for reenlistment and affect deployability. Marines who fail to meet fitness standards face
            administrative consequences.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Semi-Annual Periods</h3>
          <div className="mt-3 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Event</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Period</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">PFT</td>
                  <td className="py-2">January to June</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">CFT</td>
                  <td className="py-2">July to December</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Deployment Exemptions</h4>
          <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
            Per MCO 6100.13A, Marines are exempt from the annual PFT/CFT requirement for 60 days following their
            departure from a combat zone where they were in receipt of hostile fire pay. Routine deployments (UDP, MEU)
            without hostile fire pay do NOT exempt Marines from semi-annual PFT/CFT requirements.
          </p>
        </div>
      </section>
    ),
    requirements: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">PFT/CFT Requirements</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Marines must have a passing PFT and CFT within the current semi-annual period</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Marines who fail a PFT or CFT are not eligible for reenlistment and face administrative actions</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Medical Considerations</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Marines on light/limited duty are NOT exempt from the semi-annual requirement</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Marines must perform events not affected by their condition unless excused by a PHCP</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Marines who cannot perform certain events must perform a Partial PFT (PPFT) or Partial CFT (PCFT)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Repeated excusal without MEB determination is not authorized</span></li>
          </ul>
        </div>
      </section>
    ),
    consequences: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Administrative Actions for PFT/CFT Failure</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Per MCO 6100.13A Table 1-1:</p>
          <div className="mt-3 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Action</th>
                  <th className="py-2 pr-4 text-center font-semibold text-zinc-900 dark:text-zinc-100">1st PFT Fail</th>
                  <th className="py-2 pr-4 text-center font-semibold text-zinc-900 dark:text-zinc-100">2nd PFT Fail</th>
                  <th className="py-2 pr-4 text-center font-semibold text-zinc-900 dark:text-zinc-100">1st CFT Fail</th>
                  <th className="py-2 text-center font-semibold text-zinc-900 dark:text-zinc-100">2nd CFT Fail</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Page 11 6105 Entry</td>
                  <td className="py-2 pr-4 text-center">Yes</td>
                  <td className="py-2 pr-4 text-center">Yes</td>
                  <td className="py-2 pr-4 text-center">Yes</td>
                  <td className="py-2 text-center">Yes</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Adverse Fitness Report</td>
                  <td className="py-2 pr-4 text-center">Yes</td>
                  <td className="py-2 pr-4 text-center">Yes</td>
                  <td className="py-2 pr-4 text-center">Yes</td>
                  <td className="py-2 text-center">Yes</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Substandard Proficiency Mark</td>
                  <td className="py-2 pr-4 text-center">Yes</td>
                  <td className="py-2 pr-4 text-center">Yes</td>
                  <td className="py-2 pr-4 text-center">Yes</td>
                  <td className="py-2 text-center">Yes</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Promotion Restriction</td>
                  <td className="py-2 pr-4 text-center">Yes</td>
                  <td className="py-2 pr-4 text-center">Yes</td>
                  <td className="py-2 pr-4 text-center">Yes</td>
                  <td className="py-2 text-center">Yes</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Eligible for PCS Transfer</td>
                  <td className="py-2 pr-4 text-center">Yes</td>
                  <td className="py-2 pr-4 text-center">Yes</td>
                  <td className="py-2 pr-4 text-center">Yes</td>
                  <td className="py-2 text-center">Yes</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Eligible for Reenlistment</td>
                  <td className="py-2 pr-4 text-center text-red-600 dark:text-red-400">No</td>
                  <td className="py-2 pr-4 text-center text-red-600 dark:text-red-400">No</td>
                  <td className="py-2 pr-4 text-center text-red-600 dark:text-red-400">No</td>
                  <td className="py-2 text-center text-red-600 dark:text-red-400">No</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Eligible for Special School</td>
                  <td className="py-2 pr-4 text-center text-red-600 dark:text-red-400">No</td>
                  <td className="py-2 pr-4 text-center text-red-600 dark:text-red-400">No</td>
                  <td className="py-2 pr-4 text-center text-red-600 dark:text-red-400">No</td>
                  <td className="py-2 text-center text-red-600 dark:text-red-400">No</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Process for AdSep</td>
                  <td className="py-2 pr-4 text-center">No</td>
                  <td className="py-2 pr-4 text-center text-red-600 dark:text-red-400">Yes</td>
                  <td className="py-2 pr-4 text-center">No</td>
                  <td className="py-2 text-center text-red-600 dark:text-red-400">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    ),
    "leader-role": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Leader Responsibilities</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Track PFT/CFT status of all Marines</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Identify Marines at risk of failing and provide remediation</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Schedule unit PFT/CFT events to allow Marines to meet semi-annual requirements before deployment</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Ensure Marines on limited duty are properly documented</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Report fitness trends to the Commander</span></li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Remedial Training</h4>
          <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
            Identify Marines at risk of failing early and implement remedial training programs. Prevention is
            more effective than dealing with the administrative consequences of failure.
          </p>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
