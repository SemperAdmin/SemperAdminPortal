"use client";
import { useState } from "react";

type Ref = { title: string; desc: string; url: string; type: string };
type Example = { loc: string; rate: string; type: string };
type History = { month: string; trend: string; val: string; reason: string };
type Doc = { name: string; detail: string };

export default function COLAContent({ colaData }: { colaData: { examples: Example[]; history: History[]; docs: Doc[]; references: Ref[] } }) {
  const [tab, setTab] = useState<"overview" | "history" | "documents" | "policy" | "troubleshooter" | "references">("overview");

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center gap-2">
          <button onClick={() => setTab("overview")} className={`rounded-md px-3 py-2 text-sm ${tab === "overview" ? "bg-[var(--sa-navy)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Overview</button>
          <button onClick={() => setTab("history")} className={`rounded-md px-3 py-2 text-sm ${tab === "history" ? "bg-[var(--sa-navy)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Trends</button>
          <button onClick={() => setTab("documents")} className={`rounded-md px-3 py-2 text-sm ${tab === "documents" ? "bg-[var(--sa-navy)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Documents</button>
          <button onClick={() => setTab("policy")} className={`rounded-md px-3 py-2 text-sm ${tab === "policy" ? "bg-[var(--sa-navy)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Policy</button>
          <button onClick={() => setTab("troubleshooter")} className={`rounded-md px-3 py-2 text-sm ${tab === "troubleshooter" ? "bg-[var(--sa-navy)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Troubleshooter</button>
          <button onClick={() => setTab("references")} className={`rounded-md px-3 py-2 text-sm ${tab === "references" ? "bg-[var(--sa-navy)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>References</button>
        </div>

        {tab === "overview" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Cost of Living Allowance (COLA)</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">COLA is a non‑taxable allowance that helps offset higher prices in certain duty locations. It ensures Marines stationed in expensive areas have similar purchasing power as those in lower‑cost areas.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Factor</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Location Type</div>
                <p className="mt-1 text-xs text-zinc-700 dark:text-zinc-300">CONUS vs OCONUS eligibility.</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Factor</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Price Index</div>
                <p className="mt-1 text-xs text-zinc-700 dark:text-zinc-300">Local survey vs national average.</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Factor</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Review Cycle</div>
                <p className="mt-1 text-xs text-zinc-700 dark:text-zinc-300">Annual (CONUS) and quarterly (OCONUS).</p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl bg-[var(--sa-navy)] p-6 text-[var(--sa-cream)]">
              <div className="flex items-center gap-2 text-xl font-bold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
                BLUF
              </div>
              <p className="mt-2 text-sm opacity-90">COLA is non‑taxable and adjusts to local market conditions. Eligibility depends on where you are stationed and your dependency status.</p>
            </div>
            <div className="mt-6 rounded-xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
              <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Illustrative Examples</h3>
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
                {colaData.examples.map((ex) => (
                  <div key={`${ex.type}-${ex.loc}`} className="p-4 rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 dark:border-white/15 dark:bg-white/10">
                    <div className="text-[10px] font-bold uppercase text-zinc-600 dark:text-zinc-400">{ex.type}</div>
                    <div className="mt-1 font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{ex.loc}</div>
                    <div className="mt-2 text-xl font-black text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{ex.rate}</div>
                    <div className="text-[10px] text-zinc-500">Monthly estimate</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {tab === "history" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Fluctuations & History</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">OCONUS COLA is recalculated every 90 days and moves with local inflation and currency strength.</p>
            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              {colaData.history.map((h) => (
                <div key={h.month} className="bg-[var(--sa-cream)]/40 p-4 rounded-xl border border-black/10 hover:border-[var(--sa-navy)] transition-colors dark:border-white/15 dark:bg-white/10">
                  <div className="text-[10px] font-bold uppercase text-zinc-600 dark:text-zinc-400">{h.month}</div>
                  <div className="mt-1 font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)] text-sm">{h.reason}</div>
                  <div className={`mt-4 flex items-center gap-1 font-black text-lg ${h.trend === "up" ? "text-green-600" : h.trend === "down" ? "text-red-600" : "text-zinc-500"}`}>
                    {h.trend === "up" ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="M6 18l12-12"/><path d="M18 6H6V18"/></svg>
                    ) : h.trend === "down" ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="M6 6l12 12"/><path d="M6 6h12v12"/></svg>
                    ) : null}
                    {h.val}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-blue-200 bg-blue-50 p-4 text-left dark:border-white/15 dark:bg-white/10">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-blue-700 dark:text-[var(--sa-cream)]"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              <p className="text-xs text-blue-800 dark:text-[var(--sa-cream)]"><strong>History Note:</strong> During major global economic shifts, OCONUS COLA can change by as much as 20% in a single quarter.</p>
            </div>
          </section>
        )}

        {tab === "documents" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Document Checklist</h2>
            <div className="mt-3 grid grid-cols-1 gap-4">
              {colaData.docs.map((doc) => (
                <div key={doc.name} className="flex items-center gap-4 rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-5 dark:border-white/15 dark:bg-white/10">
                  <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-black/60">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-[var(--sa-navy)] dark:text-[var(--sa-cream)]"><path d="M4 4h16v16H4z"/><path d="M8 8h8M8 12h8M8 16h8"/></svg>
                  </div>
                  <div>
                    <div className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{doc.name}</div>
                    <div className="text-xs text-zinc-700 dark:text-zinc-300">{doc.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {tab === "policy" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Policy Rules</h2>
            <div className="mt-4 space-y-6">
              <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white p-8 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="absolute right-0 top-0 rounded-bl-xl bg-green-100 px-4 py-1 text-[10px] font-bold uppercase text-green-800">Rate Protection</div>
                <h3 className="text-xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Automatic Shield</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">COLA rate protection generally keeps your rate from decreasing mid‑tour when indices fall. Protection resets when you PCS or if dependency status changes.</p>
                <div className="mt-3 flex items-center gap-2 rounded-lg bg-green-50 p-3 text-xs font-bold text-green-700">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
                  Applies to the duty station, not the Marine.
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-2xl bg-zinc-900 p-6 text-white">
                  <h4 className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-500">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"/></svg>
                    Taxes
                  </h4>
                  <p className="text-xs opacity-80">COLA is not taxable and does not appear as wages on your W‑2.</p>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white p-6 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                  <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Base Housing</h4>
                  <p className="text-xs text-zinc-700 dark:text-zinc-300">Living in government quarters does not affect COLA eligibility. Entitlement is based on station, not residence.</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {tab === "troubleshooter" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Troubleshooter</h2>
            <div className="mt-3 space-y-4">
              <div className="rounded-2xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Checked in but don&#39;t see COLA</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Verify your station is COLA‑eligible</li>
                  <li>Allow 1–2 pay periods after check‑in</li>
                  <li>Confirm dependency status in DEERS</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">COLA decreased mid‑month</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>PCS resets rate protection</li>
                  <li>Dependency status changes alter rate</li>
                  <li>Check OCONUS quarterly index updates</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Married and expecting increase</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Submit NAVMC 10922 to S‑1/IPAC</li>
                  <li>Processing typically 5–10 business days</li>
                  <li>With‑dependent rate applies after approval</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
              <h3 className="font-bold text-red-900">Still Need Help?</h3>
              <p className="mt-2 text-sm text-red-800 opacity-80">If COLA is incorrect after two pay cycles, visit S‑1 or IPAC with orders and your current LES for a pay audit.</p>
              <a href="https://www.travel.dod.mil/Allowances/Cost-of-Living-Allowance/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[var(--sa-red)] px-6 py-3 font-bold text-white transition hover:bg-[#b91c1c]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="M18 3h3v3M21 3l-9 9"/><path d="M21 21H3V3"/></svg>
                Official COLA Lookup
              </a>
            </div>
          </section>
        )}

        {tab === "references" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">References</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Use official sources for eligibility, rate lookups, and policy.</p>
            <div className="mt-4 grid grid-cols-1 gap-4">
              {colaData.references.map((ref) => (
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
                      <span className="rounded px-2 py-0.5 text-[10px] font-bold uppercase text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-black/40">{ref.type}</span>
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

      <aside className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.travel.dod.mil/Allowances/Cost-of-Living-Allowance/" target="_blank" rel="noopener noreferrer">Official COLA Lookup</a></li>
            <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.dfas.mil/militarymembers/payentitlements/" target="_blank" rel="noopener noreferrer">DFAS Pay Entitlements</a></li>
          </ul>
        </section>
      </aside>
    </div>
  );
}
