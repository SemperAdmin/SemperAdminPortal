"use client";
import { useState } from "react";

type Ref = { title: string; desc: string; url: string; type: string };

export default function SDPContent({ sdpData }: { sdpData: { references: Ref[] } }) {
  const [tab, setTab] = useState<
    | "overview"
    | "eligibility"
    | "deposits"
    | "interest"
    | "methods"
    | "limits"
    | "withdrawals"
    | "special"
    | "troubleshooter"
    | "references"
  >("overview");

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center gap-2">
          {(
            [
              ["overview", "Overview"],
              ["eligibility", "Eligibility"],
              ["deposits", "Deposits"],
              ["interest", "Interest"],
              ["methods", "Methods"],
              ["limits", "Limits"],
              ["withdrawals", "Withdrawals"],
              ["special", "Special"],
              ["troubleshooter", "Troubleshooter"],
              ["references", "References"],
            ] as const
          ).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setTab(key as typeof tab)}
              className={`rounded-md px-3 py-2 text-sm ${tab === key ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}
            >
              {label}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Savings Deposit Program (SDP)</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Earn 10% annual interest on savings while deployed to eligible areas (combat zones, QHDA, or designated direct support areas). Eligibility requires time in area and pay entitlement.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Rate</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">10% annual</div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Maximum</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">$10,000 principal cap</div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Tax</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Deposits not taxable; interest taxable</div>
              </div>
            </div>
            <div className="mt-6 rounded-2xl bg-[var(--sa-navy)] p-6 text-[var(--sa-cream)]">
              <div className="flex items-center gap-2 text-xl font-bold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
                BLUF
              </div>
              <p className="mt-2 text-sm opacity-90">Qualify after 30 consecutive days in eligible area, or 1 day in each of 3 consecutive months. Only deposit pay earned AFTER eligibility starts. Interest pays at 10% on principal up to $10,000; interest may push the balance above $10,000 but does not itself earn interest beyond the principal cap. Accrual follows deposit date rules and stops 90 days after departure; request withdrawal via myPay on day 91.</p>
            </div>
          </section>
        )}

        {tab === "eligibility" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Who Qualifies</h2>
            <div className="mt-3 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Eligible Areas</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Combat zone (CZ)</li>
                  <li>QHDA with HFP/IDP</li>
                  <li>Designated direct support area</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Time Requirement</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>30 consecutive days in eligible area</li>
                  <li>Or 1 day in each of 3 consecutive months</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Pay Entitlement</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Receiving basic pay for active duty</li>
                  <li>Or compensation for inactive duty</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-left dark:border-white/15 dark:bg-white/10">
                <div className="text-sm font-semibold text-amber-800">Designation Check</div>
                <div className="mt-1 text-xs text-amber-800">Confirm current CZ/QHDA designations and IDP areas in DoD FMR Vol. 7A.</div>
              </div>
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-left dark:border-white/15 dark:bg-white/10">
                <div className="text-sm font-semibold text-amber-800">Three‑Month Path</div>
                <div className="mt-1 text-xs text-amber-800">Presence must occur in months 1, 2, and 3. Missing the third month resets the path; physical presence each of the 3 consecutive months is required.</div>
              </div>
            </div>
          </section>
        )}

        {tab === "deposits" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Deposits</h2>
            <div className="mt-3 space-y-4">
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">When You Can Start</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>After 30 consecutive days, or 1 day in each of 3 consecutive months</li>
                  <li>Initial deposit limited to pay earned AFTER the eligibility date</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What You Can Deposit</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Unallotted current pay and allowances</li>
                  <li>Basic pay, special pays, bonuses</li>
                  <li>Minimum per deposit: $5</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What You Cannot Deposit</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Advance pay</li>
                  <li>Travel allowances (PCS/TDY)</li>
                  <li>Money saved pre‑deployment</li>
                  <li>Allotted pay already committed elsewhere</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "interest" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Interest & Timing</h2>
            <div className="mt-3 space-y-4">
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Rate & Compounding</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>10% annual rate</li>
                  <li>Compounded quarterly; interest paid quarterly</li>
                  <li>Interest paid on principal up to $10,000; interest beyond the cap does not earn interest</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Accrual Rules</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Deposit by 10th: interest from the 1st of that month</li>
                  <li>Deposit after 10th: interest from the 1st of next month</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Timing Strategy</h3>
                <div className="mt-2 grid gap-2 sm:grid-cols-3">
                  <div className="rounded-lg border border-black/10 bg-[var(--sa-cream)]/40 p-3 text-sm dark:border-white/15 dark:bg-white/10">
                    <div className="font-semibold">Deposit</div>
                    <div className="text-zinc-700 dark:text-zinc-300">May 9</div>
                  </div>
                  <div className="rounded-lg border border-black/10 bg-[var(--sa-cream)]/40 p-3 text-sm dark:border-white/15 dark:bg-white/10">
                    <div className="font-semibold">Interest Starts</div>
                    <div className="text-zinc-700 dark:text-zinc-300">May 1</div>
                  </div>
                  <div className="rounded-lg border border-black/10 bg-[var(--sa-cream)]/40 p-3 text-sm dark:border-white/15 dark:bg-white/10">
                    <div className="font-semibold">Impact</div>
                    <div className="text-zinc-700 dark:text-zinc-300">Maximum</div>
                  </div>
                  <div className="rounded-lg border border-black/10 bg-[var(--sa-cream)]/40 p-3 text-sm dark:border-white/15 dark:bg-white/10">
                    <div className="font-semibold">Deposit</div>
                    <div className="text-zinc-700 dark:text-zinc-300">May 11</div>
                  </div>
                  <div className="rounded-lg border border-black/10 bg-[var(--sa-cream)]/40 p-3 text-sm dark:border-white/15 dark:bg-white/10">
                    <div className="font-semibold">Interest Starts</div>
                    <div className="text-zinc-700 dark:text-zinc-300">June 1</div>
                  </div>
                  <div className="rounded-lg border border-black/10 bg-[var(--sa-cream)]/40 p-3 text-sm dark:border-white/15 dark:bg-white/10">
                    <div className="font-semibold">Impact</div>
                    <div className="text-zinc-700 dark:text-zinc-300">Loss of ~20 days</div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">When Interest Stops</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Continues for 90 days after you leave eligible area</li>
                  <li>Stops after the 90‑day period, until withdrawal</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "methods" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Deposit Methods</h2>
            <div className="mt-3 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Payroll Allotment</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Set up at S‑1/finance</li>
                  <li>Automatic deduction; adjustable anytime</li>
                  <li>Army/Navy/Air Force: does not auto‑stop at $10,000</li>
                  <li>Marine Corps: auto‑stops at $10,000 and caps last allotment</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Other Methods</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Eagle Cash card</li>
                  <li>Cash</li>
                  <li>Personal check</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-left dark:border-white/15 dark:bg-white/10">
              <div className="flex items-center gap-2 text-amber-800">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"/></svg>
                <span className="font-semibold">Back‑Calculated Interest</span>
              </div>
              <p className="mt-2 text-sm text-amber-800">If finance systems were down or at a remote FOB without access, a CO letter may authorize interest from the intended deposit date when funds (cash/Eagle Cash) were in hand. Rare; retain documentation.</p>
            </div>
            <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-left dark:border-white/15 dark:bg-white/10">
              <div className="flex items-center gap-2 text-amber-800">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"/></svg>
                <span className="font-semibold">Allotment Caution</span>
              </div>
              <p className="mt-2 text-sm text-amber-800">Army/Navy/Air Force allotments do not auto‑stop at $10,000. Stop manually to avoid non‑interest deposits; USMC allotments auto‑stop and cap the last deduction.</p>
            </div>
          </section>
        )}

        {tab === "limits" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Deposit Limits</h2>
            <div className="mt-3 space-y-4">
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Normal Limit</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Max one month of pay per deposit</li>
                  <li>Combined total of pay from 30 days before deposit date</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Commander Approval Exception</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Deposit more than one month if mission prevented regular deposits</li>
                  <li>Written CO approval required; interest normally not backdated, but rare system‑down/remote exceptions may allow intended‑date interest with documentation</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "withdrawals" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Withdrawals</h2>
            <div className="mt-3 space-y-4">
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Normal Rule</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Cannot withdraw until you leave eligible area</li>
                  <li>Interest continues for 90 days after departure</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Automatic Withdrawal</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Automatic EFT at 120 days after departure (safety net)</li>
                  <li>Request withdrawal via myPay on day 91 when interest stops; relying solely on automation can delay payment, especially with outdated bank info</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Exceptions</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Excess over $10,000: quarterly withdrawal via myPay</li>
                  <li>Emergency withdrawal: CO approval required (health/welfare)</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "special" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Special Situations</h2>
            <div className="mt-3 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Protected Funds</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Not subject to most government debt collection</li>
                  <li>Exception: IRS tax levies</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Missing Status</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Secretary of Military Department may manage account</li>
                  <li>$10,000 limit does not apply; interest accrues from date missing</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Multiple Deployments</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Resume deposits when you return to eligible area</li>
                  <li>Interest resumes per accrual rules</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">TDY Away</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Interest continues for first 90 days away</li>
                  <li>Stops if away 90+ days; resumes on return</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "troubleshooter" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Problems & Solutions</h2>
            <div className="mt-4 space-y-4">
              {[
                { q: "Deployed 30 days — how much can I deposit?", a: "Only pay earned AFTER day 30 (or after meeting 1‑in‑3 months rule)." },
                { q: "Allotment continues past $10,000", a: "Stop manually (Army/Navy/Air Force). USMC auto‑stops at $10,000." },
                { q: "Deposit not showing in myPay after 2 weeks", a: "Normal delay. Wait up to 3 months before inquiry; multiple systems must sync." },
                { q: "Want to deposit pre‑deployment savings", a: "Not authorized. Only current pay and allowances." },
                { q: "Need emergency withdrawal", a: "CO approval required; submit askDFAS ticket with approval letter." },
                { q: "Reached $10,000 — extra deposits?", a: "Stop allotment; excess earns no interest. Withdraw quarterly via myPay." },
                { q: "Left combat zone — when paid?", a: "Automatic EFT at 120 days; interest continues for 90 days." },
                { q: "Deposit rejected", a: "Under $5 or over monthly pay without CO letter. Ensure $5–one‑month of pay and proper documentation." },
                { q: "On R&R — does interest stop?", a: "No. It stops only if away 90+ days from eligible area." },
                { q: "Interest seems wrong", a: "Accrual based on deposit date: by 10th counts from 1st; after 10th counts next month." },
              ].map((item) => (
                <div key={item.q} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:border-[var(--sa-navy)] dark:border-white/15 dark:bg-black/60">
                  <h4 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{item.q}</h4>
                  <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {tab === "references" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">References</h2>
            <div className="mt-4 grid grid-cols-1 gap-4">
              {sdpData.references.map((ref) => (
                <a key={ref.title} href={ref.url} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4 rounded-xl border border-black/10 bg-white p-5 transition hover:border-[var(--sa-navy)] hover:shadow-md dark:border-white/15 dark:bg-black/60">
                  <div className="rounded-lg bg-zinc-100 p-3 transition group-hover:bg-[var(--sa-cream)]/60 group-hover:text-[var(--sa-red)] dark:bg-black/40">
                    {ref.type === "Policy" ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6"><path d="M4 19.5V6a2 2 0 0 1 2-2h9l5 5v10.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="M13 3v6h6"/></svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6"><path d="M4 4h16v16H4z"/><path d="M8 8h8M8 12h8M8 16h8"/></svg>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)] whitespace-nowrap">{ref.title}</h4>
                      <span className="text-[10px] font-bold uppercase text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-black/40 rounded px-2 py-0.5">{ref.type}</span>
                    </div>
                    <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{ref.desc}</p>
                  </div>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-zinc-300 transition group-hover:text-[var(--sa-red)]"><path d="M18 3h3v3M21 3l-9 9"/><path d="M21 21H3V3"/></svg>
                </a>
              ))}
            </div>
          </section>
        )}
      </div>

      <aside className="space-y-6 lg:mt-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Facts</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
            <li>Qualify after 30 consecutive days, or 1 day in 3 months</li>
            <li>Deposit only pay earned after eligibility date</li>
            <li>10% interest up to $10,000; accrual timing matters</li>
            <li>Automatic payout at 120 days; interest stops at 90 days</li>
          </ul>
        </section>
      </aside>
    </div>
  );
}
