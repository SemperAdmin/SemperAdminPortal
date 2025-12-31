"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "how-it-works", label: "How TFRS Works" },
  { id: "relm-remarks", label: "RELM Remarks" },
  { id: "leader-role", label: "Leader Role" },
  { id: "references", label: "References", type: "references" as const },
];

export function TFRSOverviewContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Total Force Retention System (TFRS)</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Per MCO 1040.31, the Total Force Retention System (TFRS) is the electronic processing system that provides
            automated support for Marine Corps enlisted career development and retention programs. Career Planners use
            TFRS to submit Reenlistment, Extension, and Lateral Move (RELM) requests.
          </p>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">What TFRS Does</h4>
          <ul className="mt-2 space-y-2 text-sm text-blue-700 dark:text-blue-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Processes reenlistment requests</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Processes extension requests</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Processes lateral move requests</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Tracks RELM request status</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" /><span>Provides responses from HQMC (MMEA)</span></li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">What Leaders Need to Know</h4>
          <ul className="mt-2 space-y-2 text-sm text-amber-700 dark:text-amber-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" /><span>TFRS is used by Career Planners, not small unit leaders</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" /><span>RELM requests require accurate MCTFS data</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" /><span>Delayed Unit Diary reporting affects RELM processing</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" /><span>Marines should be referred to the Career Planner for retention actions</span></li>
          </ul>
        </div>
      </section>
    ),
    "how-it-works": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">How TFRS Works</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Per MCO 1040.31:</p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <ol className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">1</span>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">Career Planner initiates RELM request in TFRS</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">2</span>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">Information is derived from MCTFS (may not be current due to delayed reporting)</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">3</span>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">Career Planner adds required remarks and documentation</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">4</span>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">Request is submitted to CMC (MMEA-6)</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">5</span>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">Response is returned via TFRS</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">6</span>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">Commanding Officer reviews and signs response</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">7</span>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">Career Planner completes administrative actions</p>
            </li>
          </ol>
        </div>
      </section>
    ),
    "relm-remarks": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Required RELM Remarks</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Per MCO 1040.31, Career Planners must include the following in TFRS submissions:
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Career Planner&apos;s rank, name, phone, and email</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Deployment status (with PFT code "9" if deployed)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Pregnancy status (with PFT code "15" if pregnant)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>SRBP eligibility by zone (if applicable)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Waiver identification (with scanned documentation)</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Previous RELM requests in past 12 months</span></li>
          </ul>
        </div>
      </section>
    ),
    "leader-role": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Leader Responsibilities</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Refer Marines to the Career Planner for reenlistment and extension questions</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Ensure Marines meet reenlistment prerequisites before Career Planner submits RELM</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Provide accurate command screening on NAVMC 11537</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Support Career Planner with documentation requirements</span></li>
          </ul>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Key Systems and Functions</h4>
          <div className="mt-3 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-blue-200 dark:border-blue-700">
                  <th className="py-2 pr-4 text-left font-semibold text-blue-900 dark:text-blue-100">System</th>
                  <th className="py-2 pr-4 text-left font-semibold text-blue-900 dark:text-blue-100">Purpose</th>
                  <th className="py-2 text-left font-semibold text-blue-900 dark:text-blue-100">Primary Users</th>
                </tr>
              </thead>
              <tbody className="text-blue-700 dark:text-blue-300">
                <tr className="border-b border-blue-100 dark:border-blue-800">
                  <td className="py-2 pr-4 font-medium">MCTFS</td>
                  <td className="py-2 pr-4">Authoritative pay/personnel data</td>
                  <td className="py-2">IPAC, Admin, Career Planners</td>
                </tr>
                <tr className="border-b border-blue-100 dark:border-blue-800">
                  <td className="py-2 pr-4 font-medium">MOL</td>
                  <td className="py-2 pr-4">Web portal for personnel access</td>
                  <td className="py-2">All Marines</td>
                </tr>
                <tr className="border-b border-blue-100 dark:border-blue-800">
                  <td className="py-2 pr-4 font-medium">TFRS</td>
                  <td className="py-2 pr-4">Reenlistment/extension processing</td>
                  <td className="py-2">Career Planners</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Unit Diary</td>
                  <td className="py-2 pr-4">Personnel transaction reporting</td>
                  <td className="py-2">IPAC, S-1/Admin</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
