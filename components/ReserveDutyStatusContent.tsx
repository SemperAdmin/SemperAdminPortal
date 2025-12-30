"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "status-categories", label: "Status Categories" },
  { id: "pay-groups", label: "Pay Groups" },
  { id: "transfers", label: "Transfers" },
  { id: "references", label: "References", type: "references" as const },
];

export function ReserveDutyStatusContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Understanding Reserve Duty Status
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Your Reserve duty status determines your training requirements, pay eligibility, promotion opportunities, and mobilization liability. The Marine Corps Reserve consists of three main categories: Ready Reserve, Standby Reserve, and Retired Reserve.
          </p>
          <div className="mt-4 rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>Important:</strong> Military Service Obligation (MSO) is 8 years from date of enlistment or commissioning. Your duty status affects which requirements apply throughout your career.
            </p>
          </div>
        </div>
      </section>
    ),
    "status-categories": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Reserve Status Categories
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Status Category</th>
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Sub-Category</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Description</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Ready Reserve</td>
                  <td className="py-2 pr-4">Selected Reserve (SelRes)</td>
                  <td className="py-2">SMCR units, IMAs, AR Marines, IADT Marines</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Ready Reserve</td>
                  <td className="py-2 pr-4">Individual Ready Reserve (IRR)</td>
                  <td className="py-2">Trained manpower pool with MSO remaining or voluntary</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Standby Reserve</td>
                  <td className="py-2 pr-4">Active Status List (ASL)</td>
                  <td className="py-2">Active status for promotion but no paid training</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Standby Reserve</td>
                  <td className="py-2 pr-4">Inactive Status List (ISL)</td>
                  <td className="py-2">No participation, pay, or promotion eligibility</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Retired Reserve</td>
                  <td className="py-2 pr-4">Gray Area</td>
                  <td className="py-2">20+ qualifying years but under age 60</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Retired Reserve</td>
                  <td className="py-2 pr-4">Receiving Pay</td>
                  <td className="py-2">Age 60+ and receiving retired pay</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Facts by Status
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>SelRes Marines</strong> must maintain a satisfactory participation record</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>IRR Marines</strong> must maintain current address, civilian employment info, and dependency status with MCIRSA</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>ISL Marines</strong> are not eligible for promotion, participation, or retirement point credit</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>ASL Marines</strong> are eligible for promotion but receive no pay for training</span>
            </li>
          </ul>
        </div>
      </section>
    ),
    "pay-groups": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Pay Group Categories
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Pay Group</th>
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Assignment</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Training Requirement</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">A</td>
                  <td className="py-2 pr-4">SMCR unit personnel</td>
                  <td className="py-2">48 IDT + 14 days AT per year</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">B</td>
                  <td className="py-2 pr-4">IMAs</td>
                  <td className="py-2">Up to 48 IDT + 12-30 days AT per year</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">F</td>
                  <td className="py-2 pr-4">SelRes attending IADT</td>
                  <td className="py-2">Initial training pipeline</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Q</td>
                  <td className="py-2 pr-4">Active Reserve (AR)</td>
                  <td className="py-2">Full-time active duty status</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    ),
    transfers: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Status Transfers
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Transfer requests between categories require command approval and HQMC processing.
          </p>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">How It Works</h4>
              <ol className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300 list-decimal list-inside">
                <li>Your initial accession program agreement establishes your Mandatory Drill Participation Stop Date (MDPSD)</li>
                <li>You remain in your assigned category until transfer, separation, or retirement</li>
                <li>If your unit receives activation approval before your MDPSD, you mobilize with the unit</li>
                <li>Transfer requests between categories require command approval and HQMC processing</li>
              </ol>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Special Situations</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Transfer to IRR before MDPSD requires approval</li>
                <li>• Transfer to Standby Reserve requires specific qualifying conditions</li>
                <li>• Key Federal Employees transfer to ASL to prevent mobilization conflicts</li>
                <li>• Transfer to ISL occurs for officers failing 27-point minimum or 50-point minimum if retirement eligible</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
