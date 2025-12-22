"use client";
import { useState } from "react";

export default function OverpaymentRepaymentPlansContent() {
  const [tab, setTab] = useState<
    | "overview"
    | "civilian"
    | "military"
    | "waiver"
    | "specialized"
    | "references"
  >("overview");

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center gap-2 overflow-x-auto [&>button]:whitespace-nowrap [&>button]:shrink-0">
          <button onClick={() => setTab("overview")} className={`rounded-md px-3 py-2 text-sm ${tab === "overview" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Overview</button>
          <button onClick={() => setTab("civilian")} className={`rounded-md px-3 py-2 text-sm ${tab === "civilian" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Civilian Procedures</button>
          <button onClick={() => setTab("military")} className={`rounded-md px-3 py-2 text-sm ${tab === "military" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Military Recoupment</button>
          <button onClick={() => setTab("waiver")} className={`rounded-md px-3 py-2 text-sm ${tab === "waiver" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Waiver Authority</button>
          <button onClick={() => setTab("specialized")} className={`rounded-md px-3 py-2 text-sm ${tab === "specialized" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Specialized Waivers</button>
          <button onClick={() => setTab("references")} className={`rounded-md px-3 py-2 text-sm ${tab === "references" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>References</button>
        </div>

        {tab === "overview" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Overpayment Repayment Plans</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Overpayments occur when pay or allowances exceed legal entitlement. They are often identified during retroactive audits of timecards, personnel actions (SF‑50s), or enlistment contracts. This page explains how repayment is handled for civilians and Service members, including waiver options.</p>
          </section>
        )}

        {tab === "civilian" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Civilian Overpayment Procedures</h2>
            <div className="mt-3 space-y-4">
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">$50 Threshold & Four‑Pay‑Period Rule</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>If the debt is $50 or less, or discovered within four pay periods, deductions occur immediately from the next paycheck.</li>
                  <li>LES Remarks will show collection activity consistent with the Debt Collection Improvement Act of 1996.</li>
                </ul>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Debts Over $50 or Discovered Late</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Receive a formal Debt Notification Letter with rights and options.</li>
                  <li>Respond within 30 days (45 for overseas) to repay in full or establish a voluntary repayment agreement.</li>
                </ul>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Involuntary Deductions</div>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">If no response, payroll begins involuntary deductions of up to 15% of net disposable pay.</p>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Tax Implications</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Current‑year debt repaid in the same calendar year: system adjusts to net amount received.</li>
                  <li>Prior‑year debt: IRS rules require repayment of the gross amount; withholding adjustments are not made retroactively.</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "military" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Military Recoupment: General Rules</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Repayment may be waived when failure to complete a service obligation is beyond the member’s control.</li>
              <li>Common non‑recoup scenarios:</li>
            </ul>
            <div className="mt-2 grid gap-4 sm:grid-cols-2">
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <ul className="list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Death (not due to misconduct)</li>
                  <li>Combat‑related disability separation/retirement</li>
                  <li>Immediate reenlistment/appointment in same Military Department</li>
                </ul>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <ul className="list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Force structure changes (specialty phased out)</li>
                  <li>Extreme hardship</li>
                  <li>Sole survivor status</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "waiver" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Waiver Authority (5 U.S.C. § 5584)</h2>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Criteria</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Collection is against equity and good conscience</li>
                  <li>Not in the best interest of the United States</li>
                </ul>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Disqualifiers</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Fraud, misrepresentation, fault, or lack of good faith</li>
                  <li>Knowledge of overpayment without timely reporting</li>
                </ul>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Deadlines & Refunds</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Apply within 3 years of discovery</li>
                  <li>Refunds for amounts already collected may be requested within 2 years of the waiver date</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "specialized" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Specialized Waiver Scopes</h2>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Student Loan Repayments</div>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Agencies may waive recovery when failure to complete service is against the public interest.</p>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Recruitment & Relocation Incentives</div>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">OPM allows waivers in limited circumstances when recovery is against equity and good conscience.</p>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Physician Comparability Allowances</div>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Liability may be waived if failure to serve one year was due to circumstances beyond the physician’s control.</p>
              </div>
            </div>
          </section>
        )}

        {tab === "references" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">References</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.dfas.mil/militarymembers/debtandclaims/" target="_blank" rel="noopener noreferrer">DFAS Debt and Claims</a></li>
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.dfas.mil/militarymembers/payentitlements/" target="_blank" rel="noopener noreferrer">DFAS Pay Entitlements</a></li>
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title5-section5584" target="_blank" rel="noopener noreferrer">5 U.S.C. § 5584</a></li>
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title31-section3711" target="_blank" rel="noopener noreferrer">31 U.S.C. § 3711</a></li>
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title31-section3716" target="_blank" rel="noopener noreferrer">31 U.S.C. § 3716 (Administrative Offset)</a></li>
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.opm.gov/policy-data-oversight/pay-leave/recruitment-relocation-retention-incentives/" target="_blank" rel="noopener noreferrer">OPM: Recruitment/Relocation Incentives</a></li>
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.opm.gov/policy-data-oversight/pay-leave/pay-administration/fact-sheets/physician-comparability-allowances/" target="_blank" rel="noopener noreferrer">OPM: Physician Comparability Allowances</a></li>
            </ul>
          </section>
        )}
      </div>

      <aside className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.dfas.mil/militarymembers/debtandclaims/" target="_blank" rel="noopener noreferrer">DFAS Debt and Claims</a></li>
            <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.dfas.mil/militarymembers/payentitlements/" target="_blank" rel="noopener noreferrer">DFAS Pay Entitlements</a></li>
          </ul>
        </section>
      </aside>
    </div>
  );
}

