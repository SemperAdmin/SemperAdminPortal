"use client";
import { useState } from "react";

export default function DebtManagementContent() {
  const [tab, setTab] = useState<
    | "overview"
    | "repayment"
    | "charges"
    | "waivers"
    | "education"
    | "support"
    | "references"
  >("overview");

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center gap-2 overflow-x-auto [&>button]:whitespace-nowrap [&>button]:shrink-0">
          <button onClick={() => setTab("overview")} className={`rounded-md px-3 py-2 text-sm ${tab === "overview" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Overview</button>
          <button onClick={() => setTab("repayment")} className={`rounded-md px-3 py-2 text-sm ${tab === "repayment" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Repayment Options</button>
          <button onClick={() => setTab("charges")} className={`rounded-md px-3 py-2 text-sm ${tab === "charges" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Interest & Penalties</button>
          <button onClick={() => setTab("waivers")} className={`rounded-md px-3 py-2 text-sm ${tab === "waivers" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Waivers & Remissions</button>
          <button onClick={() => setTab("education")} className={`rounded-md px-3 py-2 text-sm ${tab === "education" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Education Debts</button>
          <button onClick={() => setTab("support")} className={`rounded-md px-3 py-2 text-sm ${tab === "support" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Contact & Support</button>
          <button onClick={() => setTab("references")} className={`rounded-md px-3 py-2 text-sm ${tab === "references" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>References</button>
        </div>

        {tab === "overview" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Military Debt Management</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Debts typically occur due to erroneous payments such as receiving an allowance after eligibility ended or not fulfilling a service obligation tied to an education bonus. Act quickly to avoid interest, penalties, and collection fees.</p>
          </section>
        )}

        {tab === "repayment" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Debt Repayment Options</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>30‑Day Clock begins on the Demand (Debt) Notification Letter date</li>
              <li>Pay in Full within 30 days settles the account with no added charges</li>
              <li>Installment Payments available if you cannot pay in full</li>
              <li>Voluntary Repayment Agreement for standard repayment over time</li>
              <li>Financial Hardship Application to lower monthly payments based on documented distress</li>
              <li>Online Payments via Pay.gov; allow up to nine days to reflect on DFAS account</li>
              <li>Salary Offset generally capped at 15% of disposable pay unless you consent higher</li>
              <li>Priority of Collection may apply when multiple debts exist (oldest first)</li>
            </ul>
          </section>
        )}

        {tab === "charges" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">The Cost of Delay</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>If not paid within 30 days, DFAS must add interest and penalties</li>
              <li>Referral to private collection agencies can add fees exceeding 30% of the balance</li>
            </ul>
          </section>
        )}

        {tab === "waivers" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Waivers vs. Remissions</h2>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Waiver</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Government relinquishes claim due to erroneous payment</li>
                  <li>You must acknowledge the debt is valid before applying</li>
                </ul>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Remission</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Cancellation by the Secretary of your Military Department</li>
                  <li>Considers hardship, member’s value to the service, and good faith</li>
                  <li>Eligible only for debts incurred while on Active Duty</li>
                </ul>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Hearings & Disputes</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Request a hearing or review within 30 days of the notification</li>
                  <li>If the 30‑day window is missed, the debt is collected by offset</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "education" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Education Debts</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Educational assistance is an advance tied to your contract</li>
              <li>If you fail to fulfill service obligation or separate for misconduct, you must reimburse</li>
              <li>Student Deferment allows deferral until 90 days after graduation</li>
              <li>Some branches permit Active Duty in lieu of cash repayment</li>
            </ul>
          </section>
        )}

        {tab === "support" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Contact & Support</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>In‑Service Debts: contact your local finance or disbursing office</li>
              <li>DFAS manages Out‑of‑Service debts directly</li>
              <li>Use AskDFAS or a CAC‑enabled status tool to check balances</li>
              <li>Customer Care Center: 1‑866‑912‑6488, Monday–Friday, 0730–1600 EST</li>
            </ul>
          </section>
        )}


        {tab === "references" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">References</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.dfas.mil/militarymembers/debtandclaims/" target="_blank" rel="noopener noreferrer">DFAS Debt and Claims</a></li>
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.pay.gov/" target="_blank" rel="noopener noreferrer">Pay.gov</a></li>
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.dfas.mil/askdfas/" target="_blank" rel="noopener noreferrer">AskDFAS</a></li>
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.dfas.mil/militarymembers/payentitlements/" target="_blank" rel="noopener noreferrer">DFAS Pay Entitlements</a></li>
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://comptroller.war.gov/Portals/45/documents/fmr/current/16/16_01.pdf" target="_blank" rel="noopener noreferrer">DoD FMR Vol 16, Ch 1: General Provisions</a></li>
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://comptroller.war.gov/Portals/45/documents/fmr/current/16/16_02.pdf" target="_blank" rel="noopener noreferrer">DoD FMR Vol 16, Ch 2: General Instructions for Collection</a></li>
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://comptroller.war.gov/Portals/45/documents/fmr/current/16/16_03.pdf" target="_blank" rel="noopener noreferrer">DoD FMR Vol 16, Ch 3: Collection of Debts Owed by Individuals</a></li>
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://comptroller.war.gov/Portals/45/documents/fmr/current/16/16_04.pdf" target="_blank" rel="noopener noreferrer">DoD FMR Vol 16, Ch 4: Hearings, Disputes, Waivers & Remissions</a></li>
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://comptroller.war.gov/Portals/45/documents/fmr/current/16/16_05.pdf" target="_blank" rel="noopener noreferrer">DoD FMR Vol 16, Ch 5: Collection of Debts Owed by Contractors</a></li>
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title31-section3711" target="_blank" rel="noopener noreferrer">31 U.S.C. § 3711 (Collection and Compromise)</a></li>
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.esd.whs.mil/Directives/issuances/dodi/" target="_blank" rel="noopener noreferrer">DoDI 7000.14</a></li>
            </ul>
          </section>
        )}
      </div>

      <aside className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.dfas.mil/militarymembers/debtandclaims/" target="_blank" rel="noopener noreferrer">DFAS Debt and Claims</a></li>
            <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.pay.gov/" target="_blank" rel="noopener noreferrer">Pay.gov</a></li>
            <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.dfas.mil/askdfas/" target="_blank" rel="noopener noreferrer">AskDFAS</a></li>
          </ul>
        </section>
      </aside>
    </div>
  );
}
