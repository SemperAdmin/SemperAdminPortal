"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "enlisted", label: "Enlisted Promotions" },
  { id: "snco", label: "SNCO Boards" },
  { id: "resources", label: "Career Advisory" },
  { id: "references", label: "References", type: "references" as const },
];

export function ReservePromotionSystemContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Reserve Promotion System
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Reserve promotions follow the same basic structure as Active Component with some unique considerations. Junior enlisted promotions use cutting scores, while SNCO and officer promotions use selection boards.
          </p>
          <div className="mt-4 rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>Key Requirement:</strong> Career Retirement Credit Report (CRCR) is a continuation eligibility determinant for SNCO boards. Ensure it is accurate and certified before board convene date.
            </p>
          </div>
        </div>
      </section>
    ),
    enlisted: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Enlisted Promotions (LCpl/Cpl)
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Requirement</th>
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">LCpl to Cpl</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Cpl to Sgt</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Time in Grade</td>
                  <td className="py-2 pr-4">12 months</td>
                  <td className="py-2">Per cutting score</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Time in Service</td>
                  <td className="py-2 pr-4">Per cutting score</td>
                  <td className="py-2">48 months</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">System</td>
                  <td className="py-2 pr-4">JEPES/Cutting Score</td>
                  <td className="py-2">JEPES/Cutting Score</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Monthly promotion authority released via MARADMIN</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>JEPES score computed in MCTFS using objective scores and command input marks</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Same cutting scores apply to SMCR, IRR, and AR</span>
            </li>
          </ul>
        </div>
      </section>
    ),
    snco: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            SNCO Selection Board Schedule (MARADMIN 373/24)
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            FY25 Selection Board Schedule for SNCO promotions:
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Board</th>
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Convene Date</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Duration</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">SgtMaj through MSgt</td>
                  <td className="py-2 pr-4">15 Oct 2024</td>
                  <td className="py-2">8 weeks</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">GySgt</td>
                  <td className="py-2 pr-4">14 Jan 2025</td>
                  <td className="py-2">8 weeks</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Active Reserve SNCO</td>
                  <td className="py-2 pr-4">04 Feb 2025</td>
                  <td className="py-2">10 days</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">SSgt</td>
                  <td className="py-2 pr-4">08 Apr 2025</td>
                  <td className="py-2">9 weeks</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">SMCR/IRR SNCO</td>
                  <td className="py-2 pr-4">08 Jul 2025</td>
                  <td className="py-2">7 weeks</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Reserve SNCO Board Requirements
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Career Retirement Credit Report (CRCR) must be accurate and certified</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>OMPF audit required (contact RAM-3 Career Advisory Cell)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Eligibility criteria released via MARADMIN 90 days prior</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>PME requirements apply per MARADMIN 474/21</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Once-passed and twice-passed policies exist for SNCOs</span>
            </li>
          </ul>
        </div>
      </section>
    ),
    resources: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Career Advisory Resources
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Resource</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Contact</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">RAM-3 Career Advisory Cell</td>
                  <td className="py-2">(703) 432-9347, smb_manpower_cac@usmc.mil</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Enlisted Promotions</td>
                  <td className="py-2">(703) 784-3440, enlistedpromotions@usmc.mil</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">MCIRSA (CRCR corrections)</td>
                  <td className="py-2">1-800-255-5082</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">MMRP-20 (OMPF)</td>
                  <td className="py-2">smb.manpower.mmrp-20@usmc.mil</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common Problems and Solutions
          </h3>
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
                  <td className="py-2 pr-4">CRCR shows errors</td>
                  <td className="py-2">Submit correction to MCIRSA with supporting documentation</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Missing fitness reports</td>
                  <td className="py-2">Contact MMPB-23 at smb.manpower.mmrp-30@usmc.mil</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4">Unsure of board eligibility</td>
                  <td className="py-2">Contact RAM-3 for record review</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">PME requirement not met</td>
                  <td className="py-2">Complete requirement before board convene date</td>
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
