"use client";
import { useState } from "react";

export default function AllotmentsContent() {
  const [tab, setTab] = useState<
    | "overview"
    | "discretionary"
    | "nonDiscretionary"
    | "manage"
    | "dd2558"
    | "rules"
    | "videos"
    | "references"
  >("overview");

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center gap-2 overflow-x-auto [&>button]:whitespace-nowrap [&>button]:shrink-0">
          <button onClick={() => setTab("overview")} className={`rounded-md px-3 py-2 text-sm ${tab === "overview" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Overview</button>
          <button onClick={() => setTab("discretionary")} className={`rounded-md px-3 py-2 text-sm ${tab === "discretionary" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Discretionary Allotments</button>
          <button onClick={() => setTab("nonDiscretionary")} className={`rounded-md px-3 py-2 text-sm ${tab === "nonDiscretionary" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Non‑Discretionary Allotments</button>
          <button onClick={() => setTab("manage")} className={`rounded-md px-3 py-2 text-sm ${tab === "manage" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Manage in myPay</button>
          <button onClick={() => setTab("dd2558")} className={`rounded-md px-3 py-2 text-sm ${tab === "dd2558" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>DD Form 2558</button>
          <button onClick={() => setTab("rules")} className={`rounded-md px-3 py-2 text-sm ${tab === "rules" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Technical Rules</button>
          <button onClick={() => setTab("videos")} className={`rounded-md px-3 py-2 text-sm ${tab === "videos" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Videos</button>
          <button onClick={() => setTab("references")} className={`rounded-md px-3 py-2 text-sm ${tab === "references" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>References</button>
        </div>

        {tab === "overview" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Allotments: Managing Your Payroll Deductions</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">An allotment is an automatic distribution from your pay to a person, institution, or agency. It functions like a payroll deduction to simplify your financial planning so essential bills, savings, and obligations are paid before the remainder of your pay reaches your bank.</p>
          </section>
        )}

        {tab === "discretionary" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Discretionary Allotments (Rule of 6)</h2>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Control</div>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Voluntary payments you can start, stop, or change at will.</p>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Maximum</div>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">No more than six (6) discretionary allotments per month.</p>
              </div>
            </div>
            <div className="mt-3 rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
              <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Uses</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Savings accounts or investment firms</li>
                <li>Commercial life insurance premiums</li>
                <li>Mortgage or rent payments</li>
                <li>Voluntary support for dependents or relatives</li>
              </ul>
            </div>
            <div className="mt-3 rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
              <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Restriction</div>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Active Duty members cannot use discretionary allotments to purchase, lease, or rent personal property (vehicles, appliances, electronics).</p>
            </div>
          </section>
        )}

        {tab === "nonDiscretionary" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Non‑Discretionary Allotments</h2>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Control</div>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Payments to government‑related agencies or for legal/financial obligations. Generally cannot be started or stopped solely at your discretion.</p>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Maximum</div>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">No limit on non‑discretionary allotments, provided total allotments do not exceed 15.</p>
              </div>
            </div>
            <div className="mt-3 rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
              <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Uses</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Purchase of U.S. Savings Bonds</li>
                <li>Relief society loan repayments (NMCRS, AER, AFAS)</li>
                <li>Charitable contributions to NMCRS or CFC</li>
                <li>Delinquent federal, state, or local tax payments</li>
                <li>Court‑ordered child or spousal support</li>
              </ul>
            </div>
          </section>
        )}

        {tab === "manage" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Manage Allotments in myPay</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Log in and select Allotments</li>
              <li>To start a new allotment, have bank routing and account numbers ready</li>
              <li>Enter the amount in whole dollars</li>
              <li>Allow time for the transaction to post; duplicate entries may cause double‑deduction</li>
            </ul>
          </section>
        )}

        {tab === "dd2558" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DD Form 2558</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Use DD Form 2558 (Authorization to Start, Stop, or Change an Allotment) when myPay is unavailable or for specific institutional allotments.</p>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Submission may be completed via the askDFAS online tool for faster processing and status notifications.</p>
          </section>
        )}

        {tab === "rules" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Critical Technical Rules</h2>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">30‑Day Month</div>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Allotments are calculated on a 30‑day month. Half is deducted mid‑month and half at end‑of‑month.</p>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Disposable Pay</div>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Verify sufficient disposable pay after taxes and mandatory deductions. If pay is reduced, some allotments may automatically discontinue.</p>
              </div>
            </div>
            <div className="mt-3 rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
              <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Power of Attorney</div>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">A general Power of Attorney cannot change allotments; a Special Power of Attorney specifically granting this authority is required.</p>
            </div>
          </section>
        )}

        {tab === "videos" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Semper Admin Master Class: Managing Pay</h2>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li>How to Start an Allotment in myPay</li>
              <li>Understanding Your Marine Corps LES</li>
            </ul>
            <div className="mt-3 text-sm">
              <a href="/videos" className="text-[var(--sa-red)] hover:underline">Explore more videos</a>
            </div>
          </section>
        )}

        {tab === "references" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">References</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://mypay.dfas.mil/" target="_blank" rel="noopener noreferrer">DFAS myPay</a></li>
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.esd.whs.mil/Portals/54/Documents/DD/forms/dd/dd2558.pdf" target="_blank" rel="noopener noreferrer">DD Form 2558 (Authorization to Start, Stop, or Change an Allotment)</a></li>
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.dfas.mil/askdfas/" target="_blank" rel="noopener noreferrer">askDFAS</a></li>
            </ul>
          </section>
        )}
      </div>

      <aside className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="text-[var(--sa-red)] hover:underline" href="https://mypay.dfas.mil/" target="_blank" rel="noopener noreferrer">DFAS myPay</a></li>
            <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.esd.whs.mil/Portals/54/Documents/DD/forms/dd/dd2558.pdf" target="_blank" rel="noopener noreferrer">DD Form 2558</a></li>
          </ul>
        </section>
      </aside>
    </div>
  );
}

