"use client";
import { useState } from "react";

type Ref = { title: string; desc: string; url: string; type: string };
type Example = { zip: string; location: string; rates: Record<string, number> };

export default function BAHContent({ bahData }: { bahData: { examples: Example[]; references: Ref[] } }) {
  const [tab, setTab] = useState<"overview" | "eligibility" | "documents" | "apply" | "timeline" | "important" | "troubleshooter" | "references">("overview");

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center gap-2 overflow-x-auto [&>button]:whitespace-nowrap [&>button]:shrink-0">
          <button onClick={() => setTab("overview")} className={`rounded-md px-3 py-2 text-sm ${tab === "overview" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Overview</button>
          <button onClick={() => setTab("eligibility")} className={`rounded-md px-3 py-2 text-sm ${tab === "eligibility" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Eligibility</button>
          <button onClick={() => setTab("documents")} className={`rounded-md px-3 py-2 text-sm ${tab === "documents" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Documents</button>
          <button onClick={() => setTab("apply")} className={`rounded-md px-3 py-2 text-sm ${tab === "apply" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Apply/Update</button>
          <button onClick={() => setTab("timeline")} className={`rounded-md px-3 py-2 text-sm ${tab === "timeline" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Timeline</button>
          <button onClick={() => setTab("important")} className={`rounded-md px-3 py-2 text-sm ${tab === "important" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Important</button>
          <button onClick={() => setTab("troubleshooter")} className={`rounded-md px-3 py-2 text-sm ${tab === "troubleshooter" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Troubleshooter</button>
          <button onClick={() => setTab("references")} className={`rounded-md px-3 py-2 text-sm ${tab === "references" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>References</button>
        </div>

        {tab === "overview" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What Is BAH?</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Basic Allowance for Housing (BAH) is a monthly allowance to help pay for housing when living off-base. The amount depends on pay grade, duty station ZIP code, and dependency status. BAH is not taxable and is paid in addition to basic pay.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Factor</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Pay Grade</div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Factor</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">ZIP Code</div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Factor</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Dependency Status</div>
              </div>
            </div>
            <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-4 text-left dark:border-white/15 dark:bg-white/10">
              <p className="text-xs text-blue-800 dark:text-[var(--sa-cream)]">Rates are updated annually (usually January 1) and vary by location to reflect local housing costs.</p>
            </div>
            <div className="mt-6 rounded-2xl bg-[var(--sa-navy)] p-6 text-[var(--sa-cream)]">
              <div className="flex items-center gap-2 text-xl font-bold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
                BLUF
              </div>
              <p className="mt-2 text-sm opacity-90">BAH is 100% tax‑free income. It is calculated to help you afford a local home based on your rank and family status and is paid on the 1st and 15th of every month.</p>
              <div className="mt-4 flex gap-3 text-sm">
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">ZIP Code Based</span>
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">Non‑Taxable</span>
              </div>
            </div>
          </section>
        )}

        {tab === "eligibility" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Who Gets BAH?</h2>
            <div className="mt-3 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Authorized</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Married or with dependents</li>
                  <li>E-6+ and barracks space not available</li>
                  <li>Command-authorized to live off-base</li>
                  <li>Geographically separated spouse (dual military)</li>
                  <li>Recruiting or special assignments</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Not Authorized</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Single E-5 and below living in barracks</li>
                  <li>Assigned government quarters</li>
                  <li>Receiving legacy BAQ</li>
                  <li>Moved off-base without command memo</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "documents" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Required Documents</h2>
            <div className="mt-3 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Start (With Dependents)</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>NAVMC 10922 signed by you and attesting officer</li>
                  <li>Certified marriage certificate</li>
                  <li>Certified birth certificates for children</li>
                  <li>DD Form 93 updated</li>
                  <li>Adoption/guardianship or custody orders as applicable</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Start (Without Dependents, E-6+)</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Command authorization memo to live off-base</li>
                  <li>NAVMC 10922 indicating without dependents</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Stop BAH</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Orders assigning government quarters</li>
                  <li>Housing checkout documentation</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-left dark:border-white/15 dark:bg-white/10">
              <div className="flex items-center gap-2 text-amber-800">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                <span className="font-semibold">The &quot;Certified&quot; Standard</span>
              </div>
              <p className="mt-2 text-sm text-amber-800">Per MCO 1751.3, administrative personnel cannot accept photocopies of birth or marriage certificates. Present the original or a certified true copy with the state&#39;s raised seal.</p>
            </div>
          </section>
        )}

        {tab === "apply" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">How To Apply or Update BAH</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 1: Update DEERS</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Visit an ID card office with certified marriage and birth certificates. Add dependents within 30 days and bring two forms of ID.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 2: Complete NAVMC 10922</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Fill all sections, list all dependents, obtain attesting officer signature, and keep a copy.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 3: Submit to S-1/IPAC</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Bring NAVMC 10922 and supporting documents. Admin verifies DEERS and processes BAH in MCTFS.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 4: Monitor Your LES</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">BAH starts on the 1st or 16th after approval. Check the next LES and verify rate by ZIP and dependency status.</p>
              </div>
            </div>
          </section>
        )}

        {tab === "timeline" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Timeline</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Submit within 30 days of marriage or birth</li>
              <li>Processing time: 5–10 business days</li>
              <li>Effective date: 1st or 16th of the month following approval</li>
              <li>Retroactive pay: up to 6 months with justification</li>
            </ul>
          </section>
        )}

        {tab === "important" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Important Things To Know</h2>
            <div className="mt-4 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">BAH Rate Protection</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Rates are protected while at the same duty station. Annual decreases do not reduce your protected rate. Increases apply automatically. Protection resets upon PCS.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Dual Military</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Both spouses receive BAH when living together. One receives with dependent rate, the other without dependent rate. Coordinate with IPAC for specific cases.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Geographic Bachelor</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">When dependents live elsewhere by choice, BAH is based on dependent location if command-approved. Additional documentation is required.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Overseas</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Overseas assignments use OHA (Overseas Housing Allowance) instead of BAH. Rules and rates differ.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Fraud</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Falsifying dependency status is punishable. Report divorces or custody changes within 30 days to avoid overpayment debts.</p>
              </div>
            </div>
          </section>
        )}

        {tab === "troubleshooter" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Problems & Solutions</h2>
            <div className="mt-3 space-y-4">
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">BAH didn&#39;t start on LES</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Verify dependents are enrolled in DEERS</li>
                  <li>Confirm NAVMC 10922 and all documents were submitted</li>
                  <li>BAH starts only on 1st or 16th</li>
                  <li>Contact IPAC if submitted over two weeks ago</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Married but BAH didn&#39;t increase</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Submit NAVMC 10922 within 30 days of marriage</li>
                  <li>Update DEERS first</li>
                  <li>On-time submission enables effective date of marriage</li>
                  <li>Late submission starts from submission date</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Wrong BAH amount</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Verify duty station ZIP in MCTFS</li>
                  <li>Confirm dependency status</li>
                  <li>Use official calculator to cross-check expected rate</li>
                  <li>Visit S-1/IPAC with documents</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "references" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">References</h2>
            <div className="mt-4 grid grid-cols-1 gap-4">
              {bahData.references.map((ref) => (
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
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Examples (2024)</h3>
          <div className="mt-3 space-y-4">
            {bahData.examples.map((ex) => (
              <div key={ex.zip} className="rounded-md border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{ex.location} (ZIP {ex.zip})</div>
                <ul className="mt-2 space-y-1 text-xs text-zinc-700 dark:text-zinc-300">
                  {Object.entries(ex.rates).map(([label, amt]) => (
                    <li key={`${ex.zip}-${label}`}>{label}: ${amt.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}/mo</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </aside>
    </div>
  );
}
