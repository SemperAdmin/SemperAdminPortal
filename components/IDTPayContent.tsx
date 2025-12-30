"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "idt-types", label: "IDT Types" },
  { id: "travel-reimbursement", label: "Travel Reimbursement" },
  { id: "appropriate-duty", label: "Appropriate Duty" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "references", label: "References", type: "references" as const },
];

export function IDTPayContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Understanding IDT Pay
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Inactive Duty for Training (IDT) is authorized training performed by Ready Reserve members not on active duty. You earn one day of pay and one retirement point for each IDT period completed. IDT includes regular unit drills, additional training periods, and equivalent training.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Pay Calculation</h4>
              <ul className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• 1 IDT period = 1/30th of monthly base pay</li>
                <li>• 1 IDT period = 1 retirement point</li>
                <li>• Pay rates update annually (DFAS)</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">How It Works</h4>
              <ol className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 list-decimal list-inside">
                <li>Report to scheduled drill</li>
                <li>Complete minimum 4 hours per period</li>
                <li>Unit records attendance in Drill Manager</li>
                <li>Pay processes through MCTFS</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    ),
    "idt-types": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            IDT Types and Limits
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">IDT Type</th>
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Min Duration</th>
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Max Per Day</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Max Per FY</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Regular IDT</td>
                  <td className="py-2 pr-4">4 hours</td>
                  <td className="py-2 pr-4">2 periods</td>
                  <td className="py-2">48 periods</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Additional Training Period (ATP)</td>
                  <td className="py-2 pr-4">4 hours</td>
                  <td className="py-2 pr-4">2 periods</td>
                  <td className="py-2">36 periods</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Additional Flight Training Period (AFTP)</td>
                  <td className="py-2 pr-4">4 hours</td>
                  <td className="py-2 pr-4">2 periods</td>
                  <td className="py-2">72 periods</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Readiness Management Period (RMP)</td>
                  <td className="py-2 pr-4">4 hours</td>
                  <td className="py-2 pr-4">1 period</td>
                  <td className="py-2">36 periods</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Equivalent Training (EDP) - Paid</td>
                  <td className="py-2 pr-4">4 hours</td>
                  <td className="py-2 pr-4">2 periods</td>
                  <td className="py-2">4 per FY</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Equivalent Training (EDP) - Unpaid</td>
                  <td className="py-2 pr-4">4 hours</td>
                  <td className="py-2 pr-4">2 periods</td>
                  <td className="py-2">Unlimited</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Combined Limits
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Non-aircrew:</strong> ATP + RMP combined max 72 per FY</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Aircrew:</strong> ATP + AFTP + RMP combined max 84 per FY</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>SECNAV waiver:</strong> Up to 96 additional IDT periods for aircrew in extreme circumstances</span>
            </li>
          </ul>
        </div>
      </section>
    ),
    "travel-reimbursement": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            IDT Travel Reimbursement (MARADMIN 157/25)
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Requirement</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Detail</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Distance</td>
                  <td className="py-2">150+ miles from Primary Residence Address to unit</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">BIC Match</td>
                  <td className="py-2">PMOS/AMOS match or approved exception</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Assignment</td>
                  <td className="py-2">Critical staffing shortfalls, command screened billets, or GO/RSLB</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Max Reimbursement</td>
                  <td className="py-2">$750 per round trip (effective 27 Dec 2024)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Max Trips</td>
                  <td className="py-2">11 per FY (22 for DIFOP aviators)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    ),
    "appropriate-duty": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Appropriate Duty (MARADMIN 571/25 - Effective Nov 2025)
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Non-paid IDT for retirement points only. MROWS orders no longer required. Authorized activities include:
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-zinc-700 dark:text-zinc-300 sm:grid-cols-2">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Recruiting support for MCRC</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Public affairs duties benefiting the Marine Corps</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Instructor duty for SMCR/MTU units</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Physical training (PFT, CFT, Martial Arts)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Annual admin functions (PHA, medical requirements)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Pre-drill meetings for key personnel</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Commander-assigned projects (in-person or telecommuting)</span>
            </li>
          </ul>
        </div>
      </section>
    ),
    troubleshooting: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common Problems and Solutions
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Problem</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Solution</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Missed drill due to emergency</td>
                  <td className="py-2">Request EDP within 60 days, attach supporting documentation</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">IDT not showing on pay statement</td>
                  <td className="py-2">Verify attendance marked in Drill Manager, contact unit admin</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Travel reimbursement denied</td>
                  <td className="py-2">Confirm you meet all MARADMIN 157/25 eligibility criteria</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Points not posting to CRCR</td>
                  <td className="py-2">Submit correction request to MCIRSA with supporting muster sheets</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Important Things to Know
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Paid EDPs must be performed within 60 calendar days of missed IDT</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Paid EDPs must be performed in same FY as the missed IDT</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>IDT points count toward your 50-point annual minimum for retirement</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>IDT is covered under UCMJ and medical benefits during duty period</span>
            </li>
          </ul>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
