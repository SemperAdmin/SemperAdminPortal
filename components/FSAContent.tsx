"use client";
import { useState } from "react";

type Ref = { title: string; desc: string; url: string; type: string };

export default function FSAContent({ fsaData }: { fsaData: { references: Ref[] } }) {
  const [tab, setTab] = useState<
    | "overview"
    | "eligibility"
    | "documents"
    | "process"
    | "visits"
    | "troubleshooter"
    | "references"
  >("overview");

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center gap-2">
          <button onClick={() => setTab("overview")} className={`rounded-md px-3 py-2 text-sm ${tab === "overview" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Overview</button>
          <button onClick={() => setTab("eligibility")} className={`rounded-md px-3 py-2 text-sm ${tab === "eligibility" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Eligibility</button>
          <button onClick={() => setTab("documents")} className={`rounded-md px-3 py-2 text-sm ${tab === "documents" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Documents</button>
          <button onClick={() => setTab("process")} className={`rounded-md px-3 py-2 text-sm ${tab === "process" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Process</button>
          <button onClick={() => setTab("visits")} className={`rounded-md px-3 py-2 text-sm ${tab === "visits" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Visits</button>
          <button onClick={() => setTab("troubleshooter")} className={`rounded-md px-3 py-2 text-sm ${tab === "troubleshooter" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Troubleshooter</button>
          <button onClick={() => setTab("references")} className={`rounded-md px-3 py-2 text-sm ${tab === "references" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>References</button>
        </div>

        {tab === "overview" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Family Separation Allowance (FSA)</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Monthly allowance when separated from dependents due to military orders. Recognizes the financial and personal hardship of enforced family separation.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Rate</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">$250/mo (up to $400 authorized)</div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Start</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Day 31 (retro to Day 1)</div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Tax</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Non‑taxable</div>
              </div>
            </div>
            <div className="mt-6 rounded-2xl bg-[var(--sa-navy)] p-6 text-[var(--sa-cream)]">
              <div className="flex items-center gap-2 text-xl font-bold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
                BLUF
              </div>
              <p className="mt-2 text-sm opacity-90">Flat $250/month per member (Services may set up to $400 under FY24 NDAA). Begins on Day 31 of continuous separation and pays retroactively to Day 1. Non‑taxable. Only one FSA type per month.</p>
            </div>
            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-left dark:border-white/15 dark:bg-white/10">
              <div className="flex items-center gap-2 text-amber-800">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                <span className="font-semibold">Policy Update (2023–2024)</span>
              </div>
              <p className="mt-2 text-sm text-amber-800">DoD transitioned from legacy FSA‑R/S/T designations to a unified administrative model using FSA‑Continuous (FSA‑C) and FSA‑Board (FSA‑B) under updated DoDI 1340.24. Many pay systems display simply “FSA” on the LES; eligibility rules below reflect the legacy mapping for clarity.</p>
            </div>
          </section>
        )}

        {tab === "eligibility" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Who Gets FSA?</h2>
            <div className="mt-3 space-y-6">
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">FSA‑R (Unaccompanied PCS)</h3>
                <ul className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Dependents not authorized travel at government expense</li>
                  <li>Dependents do not live within commuting distance</li>
                  <li>Separation exceeds 30 continuous days</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">FSA‑S (Ship)</h3>
                <ul className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Duty aboard ship away from homeport or ordered to remain aboard at homeport</li>
                  <li>More than 30 continuous days</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">FSA‑T (TDY/TAD)</h3>
                <ul className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>TDY/TAD away from PDS beyond commuting distance</li>
                  <li>More than 30 continuous days (permissive TDY does not qualify)</li>
                </ul>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-left">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-amber-600"><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"/></svg>
                <p className="text-xs text-amber-800">Commuting distance generally uses a 50‑mile one‑way standard. Commanders may use onerous travel time determinations (e.g., 1.5+ hours) case‑by‑case; daily actual commuting breaks FSA‑T.</p>
              </div>
            </div>
          </section>
        )}

        {tab === "documents" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Required Documents</h2>
            <div className="mt-3 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DD Form 1561</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Member certification and certifying officer completion</li>
                  <li>Type claimed (FSA‑R/S/T) and dependent addresses</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Orders</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>PCS (FSA‑R), Ship duty (FSA‑S), or TDY/TAD (FSA‑T)</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DEERS</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Dependents enrolled; marriage/birth certificates; DD Form 137 for secondary dependents</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "process" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">How FSA Works</h2>
            <div className="mt-4 space-y-4">
              {["Identify FSA type (R/S/T)", "Update DEERS", "Complete DD Form 1561", "Submit to S‑1/IPAC", "Complete 30 continuous days", "Verify LES shows FSA"].map((step, idx) => (
                <div key={`${step}-${idx}`} className="flex items-center gap-6">
                  <div className="w-12 text-4xl font-black text-zinc-300">{String(idx + 1).padStart(2, "0")}</div>
                  <div className="flex-1 rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                    <h4 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{step}</h4>
                    <p className="mt-1 text-xs text-zinc-700 dark:text-zinc-300">Follow unit admin guidance and retain copies for audits.</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-[var(--sa-red)] p-8 text-white text-center">
              <h3 className="text-xl font-bold">30‑Day Cliff</h3>
              <p className="mt-2 text-sm opacity-90">Returning on Day 30 pays $0; returning on Day 31 pays a full month retroactively to Day 1.</p>
            </div>
          </section>
        )}

        {tab === "visits" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Temporary Visits By Dependents</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-zinc-100 dark:bg-black/40">
                    <th className="p-2 text-left font-semibold text-zinc-700 dark:text-zinc-300">Type</th>
                    <th className="p-2 text-left font-semibold text-zinc-700 dark:text-zinc-300">Allowed Length</th>
                    <th className="p-2 text-left font-semibold text-zinc-700 dark:text-zinc-300">If Exceeded</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2">PCS (Unaccompanied)</td>
                    <td className="p-2">Up to 90 days</td>
                    <td className="p-2">Pay stops on Day 91</td>
                  </tr>
                  <tr className="bg-zinc-50 dark:bg-black/20">
                    <td className="p-2">TDY / Deployment</td>
                    <td className="p-2">Up to 30 days</td>
                    <td className="p-2">Pay stops for entire visit period</td>
                  </tr>
                  <tr>
                    <td className="p-2">Ship (at port)</td>
                    <td className="p-2">Up to 30 days</td>
                    <td className="p-2">Pay stops for entire visit period</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-left">
              <p className="text-xs text-amber-800">Social visits (e.g., hotel stays) generally do not stop FSA. Re‑establishing a household (moving dependents into your quarters) stops FSA immediately.</p>
            </div>
          </section>
        )}

        {tab === "troubleshooter" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Problems & Solutions</h2>
            <div className="mt-4 space-y-4">
              {[
                { q: "Dual‑military with no kids — both paid?", a: "Only one FSA per month without other dependents; overpayments may be recouped." },
                { q: "Separated 45 days — no FSA on LES", a: "Complete DD 1561, verify DEERS, confirm orders and BAH‑WITH status; contact S‑1." },
                { q: "Took leave to visit family — FSA stopped", a: "FSA continues during leave; temporary reunion does not stop payment." },
                { q: "Family visited 2 months — FSA kept paying", a: "FSA‑R allows up to 90 days; FSA‑S/T visits over 30 days stop payment for the visit period." },
                { q: "Family 45 miles away — ‘commuting distance’ denial", a: "Document onerous travel time (&gt; 1.5 hours) for commander determination." },
                { q: "Ship home then redeploy — FSA stopped", a: "If the interim is ≤ 30 days, FSA should continue; &gt; 30 days restarts the clock." },
                { q: "Reserve annual training — FSA?", a: "Annual training (≈ 2 weeks) does not meet the 30‑day threshold." },
                { q: "Receiving BAH‑DIFF — FSA?", a: "FSA is not authorized when receiving BAH‑DIFF for government quarters." },
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
              {fsaData.references.map((ref) => (
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
                      <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{ref.title}</h4>
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
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key Points</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
            <li>Flat $250/month; Services may authorize up to $400</li>
            <li>Starts on Day 31; retroactive to Day 1</li>
            <li>Non‑taxable; one FSA type per month</li>
            <li>Requires DD Form 1561 and DEERS enrollment</li>
          </ul>
        </section>
      </aside>
    </div>
  );
}
