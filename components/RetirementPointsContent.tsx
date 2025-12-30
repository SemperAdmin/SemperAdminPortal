"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "point-sources", label: "Point Sources" },
  { id: "reduced-age", label: "Reduced Retirement Age" },
  { id: "pay-calculation", label: "Pay Calculation" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "references", label: "References", type: "references" as const },
];

export function RetirementPointsContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Understanding Retirement Points
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Reserve retirement is based on a point system. You need 50 points per anniversary year to earn a qualifying year, and 20 qualifying years to be eligible for retirement pay at age 60 (or earlier with qualifying active duty).
          </p>
          <div className="mt-4 rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>Key Requirement:</strong> You must be in an eligible status to earn points (not ISL or retired). Review your Career Retirement Credit Report (CRCR) via Marine Online (MOL) annually.
            </p>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            How It Works
          </h3>
          <ol className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300 list-decimal list-inside">
            <li>Your anniversary year starts on your PEBD anniversary</li>
            <li>Earn at least 50 points through drills, AT, and other activities</li>
            <li>Points are recorded on your Career Retirement Credit Report (CRCR)</li>
            <li>Review your CRCR annually via Marine Online (MOL)</li>
            <li>After 20 qualifying years, you become a "Gray Area Retiree"</li>
            <li>At age 60 (or reduced age), apply for retirement pay through DFAS</li>
          </ol>
        </div>
      </section>
    ),
    "point-sources": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Point Sources
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Point Source</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Points Earned</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Annual Membership</td>
                  <td className="py-2">15 points</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">IDT Period (4+ hours)</td>
                  <td className="py-2">1 point each</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Active Duty/AT Day</td>
                  <td className="py-2">1 point each</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Correspondence Courses</td>
                  <td className="py-2">Varies by course</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Funeral Honors Duty</td>
                  <td className="py-2">1 point per ceremony</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Point Caps
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Cap Type</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Maximum</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Inactive Points Per Year</td>
                  <td className="py-2">130</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Active Points Per Year</td>
                  <td className="py-2">365 (366 leap year)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Total Points Per Year</td>
                  <td className="py-2">365 (366 leap year)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    ),
    "reduced-age": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Reduced Retirement Age (Post-January 28, 2008)
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            For qualifying active duty service performed after January 28, 2008, you can reduce your retirement age below 60.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Qualifying Active Duty</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Age Reduction</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">90 days</td>
                  <td className="py-2">3 months earlier</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">180 days</td>
                  <td className="py-2">6 months earlier</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">270 days</td>
                  <td className="py-2">9 months earlier</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">360 days</td>
                  <td className="py-2">12 months earlier</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>Minimum Age:</strong> 50 years old (cannot reduce below age 50)
            </p>
          </div>
        </div>
      </section>
    ),
    "pay-calculation": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Reserve Retired Pay Formula
          </h2>
          <div className="mt-4 rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
            <p className="font-mono text-sm text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Total Career Points ÷ 360 × 2.5% × Base Pay at retirement = Monthly Retired Pay
            </p>
          </div>
          <div className="mt-4 rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
            <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Example Calculation</h4>
            <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              <li>• 4,000 career points ÷ 360 = 11.11 equivalent years</li>
              <li>• 11.11 × 2.5% = 27.78% multiplier</li>
              <li>• 27.78% × applicable base pay = monthly retired pay</li>
            </ul>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Qualifying Year Requirements
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Minimum 50 points required in your anniversary year</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Anniversary year = 12 consecutive months from your Pay Entry Base Date (PEBD)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>20 qualifying years required for Reserve retirement eligibility</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Points earned in excess of 365 in a year do not carry over</span>
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
                  <td className="py-2 pr-4">Points missing from CRCR</td>
                  <td className="py-2">Submit correction to MCIRSA with muster sheets or orders</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Anniversary year shows non-qualifying</td>
                  <td className="py-2">Verify all training is properly recorded in MCTFS</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Unsure of reduced retirement age</td>
                  <td className="py-2">Calculate qualifying active duty after 28 Jan 2008</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">CRCR certification required for board</td>
                  <td className="py-2">Review and certify via MOL before board convene date</td>
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
              <span>Officers beyond MSO must earn 27 points minimum to avoid ISL transfer</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Retirement-eligible officers must earn 50 points minimum</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>CRCR errors must be corrected with supporting documentation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Gray Area Retirees do not receive pay or TRICARE until age 60</span>
            </li>
          </ul>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
