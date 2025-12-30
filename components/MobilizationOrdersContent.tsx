"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "authorities", label: "Activation Authorities" },
  { id: "processing", label: "Processing" },
  { id: "dde", label: "Delay/Deferment/Exemption" },
  { id: "references", label: "References", type: "references" as const },
];

export function MobilizationOrdersContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Understanding Mobilization
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Mobilization is involuntary active duty in support of military operations when the President or Congress determines Reserve forces are needed. MCO 3061.1 (TFMDP) governs Total Force mobilization and deployment policy.
          </p>
          <div className="mt-4 rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>Important:</strong> Ready Reserve Marines are subject to mobilization. Standby Reserve is mobilized only when Ready Reserve is insufficient. Delay, Deferment, or Exemption (DD&E) requests are processed through chain of command.
            </p>
          </div>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Total Force Mobilization and Deployment Plan (MCO 3061.1)
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Volume</th>
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Title</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Content</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">1</td>
                  <td className="py-2 pr-4">Command and Control</td>
                  <td className="py-2">Governance and task summary</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">2</td>
                  <td className="py-2 pr-4">Force Deployment Planning and Execution</td>
                  <td className="py-2">FDP&E process (MCO 3000.18B)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">3</td>
                  <td className="py-2 pr-4">Reserve Activation, Integration and Deactivation</td>
                  <td className="py-2">MAID-P (MCO 3000.19B)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    ),
    authorities: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Activation Authorities
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Authority</th>
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Legal Basis</th>
                  <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Scope</th>
                  <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Duration</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700 dark:text-zinc-300">
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Full Mobilization</td>
                  <td className="py-2 pr-4">10 U.S.C. 12301</td>
                  <td className="py-2 pr-4">Congressional Declaration</td>
                  <td className="py-2">Duration of war + 6 months</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Partial Mobilization</td>
                  <td className="py-2 pr-4">10 U.S.C. 12302</td>
                  <td className="py-2 pr-4">Presidential Authority</td>
                  <td className="py-2">Up to 24 months</td>
                </tr>
                <tr className="border-b border-zinc-100 dark:border-zinc-800">
                  <td className="py-2 pr-4 font-medium">Presidential Reserve Call-Up</td>
                  <td className="py-2 pr-4">10 U.S.C. 12304</td>
                  <td className="py-2 pr-4">Presidential Authority</td>
                  <td className="py-2">Up to 365 days</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Preplanned CCDR Support</td>
                  <td className="py-2 pr-4">10 U.S.C. 12304b</td>
                  <td className="py-2 pr-4">SecDef Authority</td>
                  <td className="py-2">Up to 365 days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    ),
    processing: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Processing Locations
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>DPC/RSU East:</strong> Camp Lejeune, NC</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>DPC/RSU West:</strong> Camp Pendleton, CA</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Staffed by AR and AC personnel</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Augmented with RC personnel during mobilization</span>
            </li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            How It Works
          </h3>
          <ol className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300 list-decimal list-inside">
            <li>Combatant Commander identifies force requirement</li>
            <li>CMC approves activation through DC PP&O</li>
            <li>COMMARFORRES issues activation orders to units/individuals</li>
            <li>Marines report to Deployment Processing Center</li>
            <li>Administrative and medical screening completed</li>
            <li>Integration with gaining command</li>
            <li>Deployment to operational area</li>
          </ol>
        </div>
      </section>
    ),
    dde: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Delay, Deferment, and Exemption (DD&E)
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Request through chain of command per MCO 3000.19B (MAID-P). Categories include:
          </p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Extreme personal or community hardship</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Key Federal Employee status</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Medical conditions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Educational requirements (limited circumstances)</span>
            </li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Special Situations
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Unit activation:</strong> Entire unit activated for deployment</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Individual activation:</strong> Marines sourced individually for specific requirements</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Volunteer activations:</strong> Reserve Marines may volunteer for contingency support</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Post-activation stabilization:</strong> Limited personnel actions during activation period</span>
            </li>
          </ul>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
