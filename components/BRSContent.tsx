"use client";
import { useState } from "react";

export default function BRSContent() {
  const [tab, setTab] = useState<"overview" | "rules" | "situations" | "timeline" | "solutions" | "references">("overview");

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center gap-2 overflow-x-auto [&>button]:whitespace-nowrap [&>button]:shrink-0">
          <button onClick={() => setTab("overview")} className={`rounded-md px-3 py-2 text-sm ${tab === "overview" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Overview</button>
          <button onClick={() => setTab("rules")} className={`rounded-md px-3 py-2 text-sm ${tab === "rules" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Important Rules</button>
          <button onClick={() => setTab("situations")} className={`rounded-md px-3 py-2 text-sm ${tab === "situations" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Special Situations</button>
          <button onClick={() => setTab("timeline")} className={`rounded-md px-3 py-2 text-sm ${tab === "timeline" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Timeline</button>
          <button onClick={() => setTab("solutions")} className={`rounded-md px-3 py-2 text-sm ${tab === "solutions" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Problems & Solutions</button>
          <button onClick={() => setTab("references")} className={`rounded-md px-3 py-2 text-sm ${tab === "references" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>References</button>
        </div>

        {tab === "overview" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Blended Retirement System (BRS)</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Modern military retirement combining pension and TSP savings.</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Training</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>BRS OPT-IN Course</li>
                  <li>BRS New Accessions Course</li>
                </ul>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Core Elements</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Defined Benefit</li>
                  <li>Defined Contribution (TSP)</li>
                  <li>Continuation Pay</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 rounded-2xl bg-[var(--sa-navy)] p-6 text-[var(--sa-cream)]">
              <div className="flex items-center gap-2 text-xl font-bold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
                BLUF
              </div>
              <p className="mt-2 text-sm opacity-90">Contribute 5% to TSP to receive the full government match (1% automatic + up to 4% matching) once vested at 2 years. USMC Continuation Pay election is at 12 YOS in CY25. Lump sum retired pay is discounted at 6.33% for CY25 and full monthly retired pay resumes at Social Security full retirement age.</p>
            </div>
          </section>
        )}

        {tab === "rules" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Important BRS Rules</h2>
            <div className="mt-3 space-y-4 text-sm text-zinc-700 dark:text-zinc-300">
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Pension Formula</div>
                <div className="mt-1 font-medium">2.0% × Years of Service × High‑3 Average Basic Pay</div>
                <div className="mt-2 text-xs">Legacy system uses 2.5%. At 20 years: Legacy ≈ 50% vs BRS ≈ 40%. The 10% difference is offset by TSP matching.</div>
              </div>

              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Continuation Pay</div>
                <div className="mt-1">Service‑set election window. USMC (CY25): elect at 12 YOS. Other services may set 8–12 YOS. Obligation typically 4 years active (3 years some reserve components).</div>
              </div>

              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Lump Sum Option</div>
                <div className="mt-1">Optional 25% or 50% of retired pay to Social Security full retirement age. CY25 Lump Sum Discount Rate: 6.33%.</div>
                <div className="mt-2 text-xs">Actuarial trade‑off: future checks are discounted to present value. Full monthly retired pay resumes at age 67.</div>
              </div>

              <ul className="list-disc space-y-2 pl-5">
                <li>Eligibility and opt‑in depend on entry date and years of service.</li>
                <li>BRS combines defined benefit pension with TSP defined contribution and matching.</li>
              </ul>
            </div>
          </section>
        )}

        {tab === "situations" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Special Situations</h2>
            <div className="mt-4 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Prior Service Returning</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Re-enroll in TSP at 3% or 5%.</li>
                  <li>Government contributions resume immediately.</li>
                  <li>Previous TSP balance carries over.</li>
                  <li>Matching resumes if previously qualified.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Break In Service</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>TSP account remains open.</li>
                  <li>No contributions during break.</li>
                  <li>Re-enrolled upon return at 3% or 5%.</li>
                  <li>Government contributions restart.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Opted Into BRS (2018)</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Government matching started immediately after opt-in.</li>
                  <li>No matching for contributions before opt-in.</li>
                  <li>Previous TSP balance carries over.</li>
                  <li>Reaffirm contribution percentage after opt-in.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Disability Retirement</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>BRS applies to Chapter 61 disability retirements.</li>
                  <li>2.0% multiplier or disability percentage, whichever is higher.</li>
                  <li>Lump sum not available for disability retirement.</li>
                  <li>TSP continues if remaining on active duty.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Reserve To Active Or Vice Versa</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>BRS follows you.</li>
                  <li>TSP contributions continue.</li>
                  <li>Same contribution rate carries over.</li>
                  <li>No re-enrollment at 3% or 5% for transfers.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Deployment With TSP</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Continue TSP contributions during deployment.</li>
                  <li>Combat zone pay can go to TSP.</li>
                  <li>Government matching continues.</li>
                  <li>Tax-free contributions available in combat zone.</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "timeline" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">TSP Vesting & Matching Timeline</h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-zinc-600 dark:text-zinc-400">
                    <th className="py-2 pr-4">Time in Service</th>
                    <th className="py-2 pr-4">Member Contribution</th>
                    <th className="py-2 pr-4">Gov Auto (1%)</th>
                    <th className="py-2 pr-4">Gov Match (up to 4%)</th>
                    <th className="py-2 pr-4">Total in TSP</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-700 dark:text-zinc-300">
                  <tr>
                    <td className="py-2 pr-4">0–60 Days</td>
                    <td className="py-2 pr-4">5% (Default)</td>
                    <td className="py-2 pr-4">0%</td>
                    <td className="py-2 pr-4">0%</td>
                    <td className="py-2 pr-4">5%</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">61 Days – 2 Years</td>
                    <td className="py-2 pr-4">5%</td>
                    <td className="py-2 pr-4">1%</td>
                    <td className="py-2 pr-4">0%</td>
                    <td className="py-2 pr-4">6%</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">2 Years +</td>
                    <td className="py-2 pr-4">5%</td>
                    <td className="py-2 pr-4">1%</td>
                    <td className="py-2 pr-4">4%</td>
                    <td className="py-2 pr-4">10%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800 dark:border-white/15 dark:bg-white/10 dark:text-[var(--sa-cream)]">
              <div className="text-xs font-semibold">Policy Note</div>
              <div className="mt-1 text-xs">You are vested in the government’s 1% automatic contribution after 2 years. If you separate at 23 months, the 1% and its earnings are forfeited.</div>
            </div>
          </section>
        )}

        {tab === "solutions" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Problems & Solutions</h2>
            <div className="mt-3 space-y-4">
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Contributing 10% But Gov Only 5%</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Government cap is 5% total: 1% automatic plus up to 4% matching.</li>
                  <li>Increase your own savings above 5% if desired; extra amounts are not matched.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Not Sure If In BRS Or Legacy</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Check MOL or myPay.</li>
                  <li>Entered service on/after Jan 1, 2018: BRS.</li>
                  <li>12+ years as of Dec 31, 2017: legacy High-36.</li>
                  <li>Less than 12 years, opted in 2018: BRS.</li>
                  <li>Less than 12 years, did not opt in: legacy High-36.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Not Receiving Government TSP Match</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Must be in BRS.</li>
                  <li>Must have 2+ years of service for matching.</li>
                  <li>Must be contributing from pay.</li>
                  <li>Check TSP contribution percentage in myPay.</li>
                  <li>Verify government contributions in TSP account.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Change TSP Contribution Amount</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Log into myPay.</li>
                  <li>Select TSP options.</li>
                  <li>Change contribution percentage.</li>
                  <li>Takes effect next pay period.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Auto-Enrolled At 3% Or 5%</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Change anytime via myPay.</li>
                  <li>Increase to maximize match.</li>
                  <li>Decrease or stop if needed.</li>
                  <li>Recommend at least 5% for full match.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Missed Continuation Pay Window</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Contact S-1/IPAC immediately.</li>
                  <li>Check if still within eligibility period.</li>
                  <li>Some services have grace periods.</li>
                  <li>Check annual MARADMIN for current policy.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Lump Sum Option Unclear</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Optional; not required.</li>
                  <li>Get financial counseling before deciding.</li>
                  <li>Use BRS calculator on official portals.</li>
                  <li>Consider long-term impact on retirement income.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Separating Before 20 Years: TSP</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Keep your TSP account.</li>
                  <li>Your contributions are always yours.</li>
                  <li>Government contributions vest after 2+ years.</li>
                  <li>Leave funds in TSP or roll over to civilian account.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Contribute More Than 5%</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Allowed up to IRS annual limits.</li>
                  <li>Government matches up to 4% when you contribute 5%.</li>
                  <li>Amounts above 5% are not matched.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Opted Into BRS, Regretting It</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Decision is permanent.</li>
                  <li>Cannot switch back to legacy system.</li>
                  <li>Focus on maximizing BRS benefits.</li>
                  <li>Seek financial counseling to optimize TSP.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">TSP Contributions Stopped</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>May have reached IRS annual limit.</li>
                  <li>Check TSP account for limit notification.</li>
                  <li>Contributions restart January 1.</li>
                  <li>Adjust rate to spread through the year.</li>
                </ul>
              </div>
            </div>
          </section>
        )}
        {tab === "references" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">References</h2>
            <div className="mt-4 grid grid-cols-1 gap-4">
              <a href="https://uscode.house.gov/" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4 rounded-xl border border-black/10 bg-white p-5 transition hover:border-[var(--sa-navy)] hover:shadow-md dark:border-white/15 dark:bg-black/60">
                <div className="rounded-lg bg-zinc-100 p-3 transition group-hover:bg-[var(--sa-cream)]/60 group-hover:text-[var(--sa-red)] dark:bg-black/40">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6"><path d="M4 4h16v16H4z"/><path d="M8 8h8M8 12h8M8 16h8"/></svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2"><h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">10 U.S.C. § 1409</h4><span className="text-[10px] font-bold uppercase text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-black/40 rounded px-2 py-0.5">Statute</span></div>
                  <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Law governing the 2.0% multiplier.</p>
                </div>
              </a>
              <a href="https://comptroller.defense.gov/Portals/45/documents/fmr/current/07b/07b_01.pdf" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4 rounded-xl border border-black/10 bg-white p-5 transition hover:border-[var(--sa-navy)] hover:shadow-md dark:border-white/15 dark:bg-black/60">
                <div className="rounded-lg bg-zinc-100 p-3 transition group-hover:bg-[var(--sa-cream)]/60 group-hover:text-[var(--sa-red)] dark:bg-black/40">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6"><path d="M4 19.5V6a2 2 0 0 1 2-2h9l5 5v10.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="M13 3v6h6"/></svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2"><h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DoD FMR Vol. 7B, Chapter 1</h4><span className="text-[10px] font-bold uppercase text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-black/40 rounded px-2 py-0.5">Policy</span></div>
                  <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Defined benefit pension rules.</p>
                </div>
              </a>
              <a href="https://comptroller.defense.gov/Portals/45/documents/fmr/current/07a/07a_51.pdf" target="_blank" rel="noopener noreferrer" className="group flex items.start gap-4 rounded-xl border border-black/10 bg-white p-5 transition hover:border-[var(--sa-navy)] hover:shadow-md dark:border-white/15 dark:bg-black/60">
                <div className="rounded-lg bg-zinc-100 p-3 transition group-hover:bg-[var(--sa-cream)]/60 group-hover:text-[var(--sa-red)] dark:bg-black/40">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6"><path d="M4 19.5V6a2 2 0 0 1 2-2h9l5 5v10.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="M13 3v6h6"/></svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2"><h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DoD FMR Vol. 7A, Chapter 51</h4><span className="text-[10px] font-bold uppercase text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-black/40 rounded px-2 py-0.5">Policy</span></div>
                  <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Thrift Savings Plan rules.</p>
                </div>
              </a>
              <a href="https://actuary.defense.gov/" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4 rounded-xl border border-black/10 bg-white p-5 transition hover:border-[var(--sa-navy)] hover:shadow-md dark:border-white/15 dark:bg-black/60">
                <div className="rounded-lg bg-zinc-100 p-3 transition group-hover:bg-[var(--sa-cream)]/60 group-hover:text-[var(--sa-red)] dark:bg-black/40">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2"><h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DoD Office of the Actuary</h4><span className="text-[10px] font-bold uppercase text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-black/40 rounded px-2 py-0.5">Memo</span></div>
                  <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">2025 Lump Sum Discount Rate: 6.33%.</p>
                </div>
              </a>
              <a href="https://www.marines.mil/" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4 rounded-xl border border-black/10 bg-white p-5 transition hover:border-[var(--sa-navy)] hover:shadow-md dark:border-white/15 dark:bg-black/60">
                <div className="rounded-lg bg-zinc-100 p-3 transition group-hover:bg-[var(--sa-cream)]/60 group-hover:text-[var(--sa-red)] dark:bg-black/40">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6"><path d="M4 4h16v16H4z"/><path d="M8 8h8M8 12h8M8 16h8"/></svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2"><h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">MARADMIN 231/24</h4><span className="text-[10px] font-bold uppercase text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-black/40 rounded px-2 py-0.5">Policy</span></div>
                  <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">USMC Continuation Pay and election window guidance.</p>
                </div>
              </a>
            </div>
          </section>
        )}
      </div>
      <aside className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Facts</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Pension Formula</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">2.0% × Years of Service × High‑3 Average Basic Pay</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">TSP Automatic 1%</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">Starts at 61 days of service; vests fully at 2 years.</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Matching Up To 4%</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">At 2+ years, contribute 5% to receive the full government match.</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Continuation Pay</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">USMC election window in CY25 occurs at 12 YOS.</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Lump Sum Option</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">CY25 discount rate 6.33%; full retired pay resumes at SS FRA.</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Default Contribution</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">Auto‑enrolled at 5%; adjust in myPay as desired.</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Vesting Rule</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">Your contributions are always yours; gov contributions vest after 2 years.</div>
            </li>
          </ul>
        </section>
      </aside>
    </div>
  );
}
