"use client";
import { useState } from "react";

export default function ContinuationPayContent() {
  const [tab, setTab] = useState<
    | "overview"
    | "what"
    | "eligibility"
    | "amount"
    | "apply"
    | "rules"
    | "special"
    | "problems"
    | "references"
  >("overview");

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center gap-2 overflow-x-auto [&>button]:whitespace-nowrap [&>button]:shrink-0">
          <button onClick={() => setTab("overview")} className={`rounded-md px-3 py-2 text-sm ${tab === "overview" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Overview</button>
          <button onClick={() => setTab("what")} className={`rounded-md px-3 py-2 text-sm ${tab === "what" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>What is CP?</button>
          <button onClick={() => setTab("eligibility")} className={`rounded-md px-3 py-2 text-sm ${tab === "eligibility" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Eligibility</button>
          <button onClick={() => setTab("amount")} className={`rounded-md px-3 py-2 text-sm ${tab === "amount" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Amount</button>
          <button onClick={() => setTab("apply")} className={`rounded-md px-3 py-2 text-sm ${tab === "apply" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>How to Apply</button>
          <button onClick={() => setTab("rules")} className={`rounded-md px-3 py-2 text-sm ${tab === "rules" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Rules</button>
          <button onClick={() => setTab("special")} className={`rounded-md px-3 py-2 text-sm ${tab === "special" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Special Situations</button>
          <button onClick={() => setTab("problems")} className={`rounded-md px-3 py-2 text-sm ${tab === "problems" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Problems & Solutions</button>
          <button onClick={() => setTab("references")} className={`rounded-md px-3 py-2 text-sm ${tab === "references" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>References</button>
        </div>

        {tab === "overview" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Continuation Pay (CP)</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">One-time midcareer bonus for Marines enrolled in the Blended Retirement System (BRS). Election at 12 years of service in exchange for a 4-year service obligation in the same component.</p>
            <div className="mt-6 rounded-2xl bg-[var(--sa-navy)] p-6 text-[var(--sa-cream)]">
              <div className="flex items-center gap-2 text-xl font-bold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
                BLUF
              </div>
              <p className="mt-2 text-sm opacity-90">CY25: AC/AR 5.0× monthly basic pay (over 12), RC 1.0×. Must sign Statement of Understanding before reaching 12 YOS. Choose lump sum or 2–4 annual installments. 4-year obligation begins at 12 YOS. Taxable unless in a combat zone on election.</p>
            </div>
          </section>
        )}

        {tab === "what" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What is Continuation Pay?</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Continuation Pay is a one-time midcareer cash bonus for BRS participants, paid at 12 years of service in exchange for a 4-year service obligation.</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Election window centered on 12 years of service (PEBD-based).</li>
              <li>Payment option: lump sum or 2–4 equal annual installments.</li>
              <li>Decision is final after S‑1 processes the election.</li>
            </ul>
          </section>
        )}

        {tab === "eligibility" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Eligibility</h2>
            <ul className="mt-3 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Enrolled in BRS</div>
                <div className="mt-1">Joined on/after 1 Jan 2018 (auto) or opted in during 2018.</div>
              </li>
              <li className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">12 Years of Service</div>
                <div className="mt-1">Measured from PEBD; must reach during eligibility window.</div>
              </li>
              <li className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Good Standing</div>
                <div className="mt-1">No orders to separate; able to serve 4 additional years.</div>
              </li>
              <li className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Component‑Specific Obligation</div>
                <div className="mt-1">Serve in the same component where CP is accepted: AC, AR, or Selected Reserve.</div>
              </li>
            </ul>
          </section>
        )}

        {tab === "amount" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Amount & Payment Options</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">CY25 Multipliers</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-zinc-700 dark:text-zinc-300">
                  <li>Active Component (AC): 5.0× monthly basic pay (over 12).</li>
                  <li>Active Reserve (AR): 5.0× monthly basic pay (over 12).</li>
                  <li>Reserve Component (RC) excluding AR: 1.0× monthly basic pay (over 12).</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Examples</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-zinc-700 dark:text-zinc-300">
                  <li>E‑6 over 12: ~$3,600/month → AC/AR CP ≈ $18,000.</li>
                  <li>E‑6 over 12: ~$3,600/month → RC CP ≈ $3,600.</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Payment Options</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Lump sum within 30 days of reaching 12 YOS.</li>
                  <li>2, 3, or 4 equal annual installments (anniversary dates).</li>
                  <li>Choice is final after SOU is processed.</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Tax</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Taxable income with federal/state withholding.</li>
                  <li>Combat Zone Tax Exclusion applies if in CZ at 12 YOS; applies to all installments.</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "apply" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">How to Apply</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Step 1: Notifications</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>LES, MOL message, and S‑1 via UDMIPS.</li>
                  <li>Begin ~180 days before 12 YOS; monthly until election.</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Step 2: Financial Training</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Complete CP financial awareness with Personal Financial Manager.</li>
                  <li>Available in person or virtual; contact installation PFM.</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Step 3: Statement of Understanding</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>NAVMC 11905 (AC) and NAVMC 11908 (AR/RC).</li>
                  <li>Accept/decline CP, payment option, 4‑year obligation, signatures.</li>
                  <li>Must be signed and witnessed before reaching 12 YOS.</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Step 4: Submit to S‑1</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>EPAR via MOL or encrypted email if EPAR unavailable.</li>
                  <li>S‑1 reviews, processes unit diary, uploads to OMPF via ODI/RMS.</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Step 5: Payment</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Within 30 days of completing 12 YOS via EFT during normal pay cycle.</li>
                  <li>Check status in MOL &gt; Personal Information &gt; BRS/TSP Report &gt; BRS‑CP.</li>
                  <li>Obligation begins at 12 YOS; runs concurrently when allowed.</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "rules" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Important Rules</h2>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Deadline</div>
              <div className="mt-1 text-xs">Must sign before 12 YOS; cannot elect on/after 12 YOS. MCTFS locks at 23:59 the day prior; submit early—EPAR accepted and processed ≥30 days before 12 YOS.</div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">One Chance</div>
                <div className="mt-1 text-xs">Cannot receive CP twice; payment choice is final.</div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">4‑Year Obligation</div>
                <div className="mt-1 text-xs">Must serve in the same component where CP was accepted.</div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Repayment</div>
                <div className="mt-1 text-xs">Separate/transfer early → repay unearned portion; waivers via DD 2789 to HQMC.</div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Tax</div>
                <div className="mt-1 text-xs">Taxable; CZTE applies if in combat zone at 12 YOS.</div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Retirement</div>
                <div className="mt-1 text-xs">Does not reduce pension (unlike legacy CSB).</div>
              </div>
            </div>
          </section>
        )}

        {tab === "special" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Special Situations</h2>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Deployed at 12 YOS</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>May elect via encrypted email; payment processed when received.</li>
                  <li>CZTE may apply.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Medical or Legal Hold</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Election still permitted; potential repayment if separated.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Reenlistment Not Required</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Obligation runs concurrent with enlistment; can elect without contract time remaining.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Change Election Before 12 YOS</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Submit a new SOU; most recent prior to 12 YOS is final.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Transfers Between Components</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>AC→Reserve or Reserve→AC triggers prorated repayment of the unearned portion (e.g., 50% if 2 of 4 years served).</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Missed Deadline</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>No retroactive election; lose eligibility permanently.</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 grid gap-4">
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Stacking with SRB</div>
                <div className="mt-1 text-xs">CP may run concurrently with SRB obligations when eligible; the service window is double‑locked by both programs. CP is a fixed 4‑year obligation at 12 YOS; SRB follows reenlistment contract terms.</div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">CP vs SRB</div>
                <div className="mt-2 overflow-x-auto">
                  <table className="w-full text-xs text-zinc-700 dark:text-zinc-300">
                    <thead>
                      <tr className="text-left">
                        <th className="py-2 pr-3">Feature</th>
                        <th className="py-2 pr-3">CP</th>
                        <th className="py-2">SRB</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-black/10 dark:border-white/15">
                        <td className="py-2 pr-3">Trigger</td>
                        <td className="py-2 pr-3">12 YOS (PEBD‑based)</td>
                        <td className="py-2">Reenlistment</td>
                      </tr>
                      <tr className="border-t border-black/10 dark:border-white/15">
                        <td className="py-2 pr-3">Obligation</td>
                        <td className="py-2 pr-3">4 years, same component</td>
                        <td className="py-2">Per contract/MARADMIN</td>
                      </tr>
                      <tr className="border-t border-black/10 dark:border-white/15">
                        <td className="py-2 pr-3">Payment</td>
                        <td className="py-2 pr-3">Lump or 2–4 installments</td>
                        <td className="py-2">Program‑defined (often lump)</td>
                      </tr>
                      <tr className="border-t border-black/10 dark:border-white/15">
                        <td className="py-2 pr-3">Eligibility</td>
                        <td className="py-2 pr-3">BRS participants</td>
                        <td className="py-2">MOS/zone‑specific (enlisted)</td>
                      </tr>
                      <tr className="border-t border-black/10 dark:border-white/15">
                        <td className="py-2 pr-3">Repayment</td>
                        <td className="py-2 pr-3">Prorated if fail/transfer</td>
                        <td className="py-2">Program rules; typically prorated</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        )}

        {tab === "problems" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Problems & Solutions</h2>
            <div className="mt-3 space-y-4">
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">11y10m and not submitted</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Submit immediately; SOU must be signed/witnessed before 12 YOS.</li>
                  <li>Use EPAR or encrypted email.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Not sure if in BRS</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Check MOL/myPay; joined after 1 Jan 2018 or opt‑in in 2018.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Reached 12 YOS, no notification</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Too late to elect; document and notify chain; use admin channels.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Change lump sum ↔ installments</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Submit new SOU before 12 YOS; cannot change after processing.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">PCS overlaps 12 YOS</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Submit SOU before PCS; coordinate with losing/gaining S‑1; can submit up to 6 months early.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Deployed and unable to visit S‑1</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Use encrypted email; witness may be any commissioned officer.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Tax implications unclear</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Complete PFM training; consider CZTE and tax brackets.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Plan to separate at 16 YOS</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Repayment equals unserved portion; consult PFM for analysis.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Transfer AC↔Reserve after CP</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Prorated repayment; may request waiver via DD 2789 if hardship.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Career Designated Captains</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Officers do not reenlist; still must sign NAVMC 11905 and have S‑1 process CP before 12 YOS.</li>
                  <li>Ensure EPAR is accepted and processed ≥30 days before 12 YOS to avoid the MCTFS lock.</li>
                  <li>Planned AC→Reserve affiliation during the 4‑year window triggers prorated repayment.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Payment not received</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Check MOL BRS‑CP report, verify unit diary, contact finance.</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "references" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">References</h2>
            <div className="mt-4 grid grid-cols-1 gap-4">
              <a href="https://www.marines.mil/News/Messages/Messages-Display/Article/3783014/calendar-year-2025-continuation-pay-program-for-blended-retirement-system-parti/" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4 rounded-xl border border-black/10 bg-white p-5 transition hover:border-[var(--sa-navy)] hover:shadow-md dark:border-white/15 dark:bg-black/60">
                <div className="rounded-lg bg-zinc-100 p-3 transition group-hover:bg-[var(--sa-cream)]/60 group-hover:text-[var(--sa-red)] dark:bg-black/40">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6"><path d="M4 19.5V6a2 2 0 0 1 2-2h9l5 5v10.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="M13 3v6h6"/></svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2"><h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">MARADMIN 229/24 (CY2025)</h4><span className="text-[10px] font-bold uppercase text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-black/40 rounded px-2 py-0.5">Policy</span></div>
                  <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Continuation Pay multipliers and guidance by component.</p>
                </div>
              </a>
              <a href="https://www.marines.mil/Portals/1/Publications/MCBul%201800%20DTD%2015%20JUN%202021%20(SECURED).pdf?ver=fMvUu5zlLicXEajb_xVMUg%3d%3d" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4 rounded-xl border border-black/10 bg-white p-5 transition hover:border-[var(--sa-navy)] hover:shadow-md dark:border-white/15 dark:bg-black/60">
                <div className="rounded-lg bg-zinc-100 p-3 transition group-hover:bg-[var(--sa-cream)]/60 group-hover:text-[var(--sa-red)] dark:bg-black/40">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6"><path d="M4 4h16v16H4z"/><path d="M8 8h8M8 12h8M8 16h8"/></svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2"><h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">MCBul 1800</h4><span className="text-[10px] font-bold uppercase text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-black/40 rounded px-2 py-0.5">Order</span></div>
                  <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Retirement and career incentives baseline guidance.</p>
                </div>
              </a>
              <a href="#" className="group flex items-start gap-4 rounded-xl border border-black/10 bg-white p-5 transition hover:border-[var(--sa-navy)] hover:shadow-md dark:border-white/15 dark:bg-black/60">
                <div className="rounded-lg bg-zinc-100 p-3 transition group-hover:bg-[var(--sa-cream)]/60 group-hover:text-[var(--sa-red)] dark:bg-black/40">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6"><path d="M4 19.5V6a2 2 0 0 1 2-2h9l5 5v10.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="M13 3v6h6"/></svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2"><h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">NAVMC 11905 / 11908</h4><span className="text-[10px] font-bold uppercase text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-black/40 rounded px-2 py-0.5">Form</span></div>
                  <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Statement of Understanding (AC) and (AR/RC).</p>
                </div>
              </a>
              <a href="https://comptroller.defense.gov/Portals/45/documents/fmr/current/07a/07a_66.pdf" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4 rounded-xl border border-black/10 bg-white p-5 transition hover:border-[var(--sa-navy)] hover:shadow-md dark:border-white/15 dark:bg-black/60">
                <div className="rounded-lg bg-zinc-100 p-3 transition group-hover:bg-[var(--sa-cream)]/60 group-hover:text-[var(--sa-red)] dark:bg-black/40">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6"><path d="M4 19.5V6a2 2 0 0 1 2-2h9l5 5v10.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="M13 3v6h6"/></svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2"><h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DoD FMR Vol. 7A, Ch. 66</h4><span className="text-[10px] font-bold uppercase text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-black/40 rounded px-2 py-0.5">Policy</span></div>
                  <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Continuation Pay authority, calculation, and repayment.</p>
                </div>
              </a>
              <a href="https://www.marines.mil/Portals/1/Publications/MCO%201800.11A.pdf?ver=2020-03-31-081717-407" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4 rounded-xl border border-black/10 bg-white p-5 transition hover:border-[var(--sa-navy)] hover:shadow-md dark:border-white/15 dark:bg-black/60">
                <div className="rounded-lg bg-zinc-100 p-3 transition group-hover:bg-[var(--sa-cream)]/60 group-hover:text-[var(--sa-red)] dark:bg-black/40">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6"><path d="M4 4h16v16H4z"/><path d="M8 8h8M8 12h8M8 16h8"/></svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2"><h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">MCO 1800.11A</h4><span className="text-[10px] font-bold uppercase text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-black/40 rounded px-2 py-0.5">Order</span></div>
                  <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">USMC career planning timelines; CP submission lead‑times.</p>
                </div>
              </a>
              <a href="https://www.manpower.usmc.mil/Divisions/Plans-and-Policies/Manpower-Plans-and-Policy/Manpower-Military-Policy-MPO/Military-Compensation/" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4 rounded-xl border border-black/10 bg-white p-5 transition hover:border-[var(--sa-navy)] hover:shadow-md dark:border-white/15 dark:bg-black/60">
                <div className="rounded-lg bg-zinc-100 p-3 transition group-hover:bg-[var(--sa-cream)]/60 group-hover:text-[var(--sa-red)] dark:bg-black/40">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2"><h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">M&RA MPO BRS</h4><span className="text-[10px] font-bold uppercase text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-black/40 rounded px-2 py-0.5">Website</span></div>
                  <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Official Continuation Pay program updates and guidance.</p>
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
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Election Window</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">Must sign SOU before 12 YOS; system locks at 23:59 the day prior.</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Obligation</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">4 years in the same component (AC/AR/Selected Reserve).</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">CY25 Rates</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">AC/AR 5.0×; RC 1.0× of monthly basic pay (over 12).</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Payment Options</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">Lump sum or 2–4 annual installments; choice is final.</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Tax</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">Taxable; CZTE if in a combat zone at 12 YOS.</div>
            </li>
          </ul>
        </section>
      </aside>
    </div>
  );
}
