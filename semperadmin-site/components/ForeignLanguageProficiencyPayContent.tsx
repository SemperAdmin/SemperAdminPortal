"use client";
import { useState } from "react";

type Ref = { title: string; desc: string; url: string; type: string };
type Factor = { title: string; desc: string };
type Rule = { title: string; desc: string };
type Tier = { title: string; desc: string };
type Doc = { name: string; detail: string };
type Step = { title: string; detail: string };
type QA = { q: string; a: string };

export default function ForeignLanguageProficiencyPayContent({ flppData }: { flppData: { intro: string; factors: Factor[]; tiers: Tier[]; rules: Rule[]; docs: { start: Doc[]; maintenance: Doc[]; stop: Doc[] }; steps: Step[]; qa: QA[]; references: Ref[] } }) {
  const [tab, setTab] = useState<"overview" | "eligibility" | "documents" | "process" | "troubleshooter" | "references">("overview");

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center gap-2">
          <button onClick={() => setTab("overview")} className={`rounded-md px-3 py-2 text-sm ${tab === "overview" ? "bg-[var(--sa-navy)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Overview</button>
          <button onClick={() => setTab("eligibility")} className={`rounded-md px-3 py-2 text-sm ${tab === "eligibility" ? "bg-[var(--sa-navy)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Eligibility</button>
          <button onClick={() => setTab("documents")} className={`rounded-md px-3 py-2 text-sm ${tab === "documents" ? "bg-[var(--sa-navy)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Documents</button>
          <button onClick={() => setTab("process")} className={`rounded-md px-3 py-2 text-sm ${tab === "process" ? "bg-[var(--sa-navy)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Process</button>
          <button onClick={() => setTab("troubleshooter")} className={`rounded-md px-3 py-2 text-sm ${tab === "troubleshooter" ? "bg-[var(--sa-navy)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Troubleshooter</button>
          <button onClick={() => setTab("references")} className={`rounded-md px-3 py-2 text-sm ${tab === "references" ? "bg-[var(--sa-navy)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>References</button>
        </div>

        {tab === "overview" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Foreign Language Proficiency Bonus (FLPB)</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{flppData.intro}</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {flppData.factors.map((f) => (
                <div key={f.title} className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                  <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Factor</div>
                  <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{f.title}</div>
                  <p className="mt-1 text-xs text-zinc-700 dark:text-zinc-300">{f.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-[var(--sa-navy)] p-6 text-[var(--sa-cream)]">
              <div className="flex items-center gap-2 text-xl font-bold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
                BLUF
              </div>
              <p className="mt-2 text-sm opacity-90">Paid monthly per qualifying language based on DLPT/OPI results and language priority. Investment languages may pay regardless of billet; Required/Enduring languages generally require a language‑coded billet. Up to two languages may be paid when within statutory caps.</p>
            </div>
            <div className="mt-6">
              <h3 className="text-xs font-black uppercase text-zinc-600 dark:text-zinc-400 tracking-widest mb-3">Payment Tiers</h3>
              <div className="grid gap-4 sm:grid-cols-3">
                {flppData.tiers.map((t) => (
                  <div key={t.title} className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm dark:border-white/15 dark:bg-black/60">
                    <div className="text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{t.title}</div>
                    <p className="mt-1 text-xs text-zinc-700 dark:text-zinc-300">{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-xs font-black uppercase text-zinc-600 dark:text-zinc-400 tracking-widest mb-3">Rates Table</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-zinc-100 dark:bg-black/40">
                      <th className="p-2 text-left font-semibold text-zinc-700 dark:text-zinc-300">Proficiency (L/R/S)</th>
                      <th className="p-2 text-left font-semibold text-zinc-700 dark:text-zinc-300">Monthly Rate (Standard)</th>
                      <th className="p-2 text-left font-semibold text-zinc-700 dark:text-zinc-300">Monthly Rate (Priority)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2">1/1</td>
                      <td className="p-2">$0 (Usually)</td>
                      <td className="p-2">$100</td>
                    </tr>
                    <tr className="bg-zinc-50 dark:bg-black/20">
                      <td className="p-2">2/2</td>
                      <td className="p-2">$150</td>
                      <td className="p-2">$200</td>
                    </tr>
                    <tr>
                      <td className="p-2">2+/2+</td>
                      <td className="p-2">$200</td>
                      <td className="p-2">$300</td>
                    </tr>
                    <tr className="bg-zinc-50 dark:bg-black/20">
                      <td className="p-2">3/3</td>
                      <td className="p-2">$300</td>
                      <td className="p-2">$400</td>
                    </tr>
                    <tr>
                      <td className="p-2">3/3/3 (with OPI)</td>
                      <td className="p-2">$400</td>
                      <td className="p-2">$500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-[10px] text-zinc-600 dark:text-zinc-400">Payment for 1/1 is rare and generally limited to the most critical immediate needs languages.</p>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Tax</h3>
                <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Taxable in normal duty; excluded in designated combat zones.</div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Reserve Component</h3>
                <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Prorated by day (1/30) for drills/active duty; paid for qualifying periods.</div>
              </div>
            </div>
          </section>
        )}

        {tab === "eligibility" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Am I Eligible?</h2>
            <div className="mt-3 space-y-6">
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Eligibility Checklist</h3>
                <ul className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Pass DLPT/OPI or approved tests with minimum scores.</li>
                  <li>Hold valid certification within the required period.</li>
                  <li>Use the language in duties or qualify under investment category; command certifies status.</li>
                  <li>Entitled to basic pay under competent orders.</li>
                </ul>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-blue-200 bg-blue-50 p-4 text-left dark:border-white/15 dark:bg-white/10">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-blue-700 dark:text-[var(--sa-cream)]"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                <p className="text-xs text-blue-800 dark:text-[var(--sa-cream)]">Language Categories (A/B/C) often replace SLL terminology. Investment (priority) languages may be paid regardless of billet; Required/Enduring languages generally require language‑coded billets. OPI may be required to reach top tiers.</p>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-left">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-amber-600"><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"/></svg>
                <p className="text-xs text-amber-800">Not entitled if minimum scores are not met, certification expired, language not used in duties, or command does not certify use.</p>
              </div>
            </div>
          </section>
        )}

        {tab === "documents" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Document Checklist</h2>
            <div className="mt-4 space-y-6">
              <div>
                <h3 className="text-xs font-black uppercase text-zinc-600 dark:text-zinc-400 tracking-widest mb-3">To Start FLPB</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {flppData.docs.start.map((doc) => (
                    <div key={doc.name} className="flex items-start gap-4 rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-white/15 dark:bg-black/60">
                      <div className="rounded-lg bg-zinc-100 p-3 dark:bg-black/40">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-[var(--sa-navy)] dark:text-[var(--sa-cream)]"><path d="M4 4h16v16H4z"/><path d="M8 8h8M8 12h8M8 16h8"/></svg>
                      </div>
                      <div>
                        <div className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)] text-sm">{doc.name}</div>
                        <div className="text-[10px] text-zinc-700 dark:text-zinc-300">{doc.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs font-black uppercase text-zinc-600 dark:text-zinc-400 tracking-widest mb-3">To Maintain FLPB</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {flppData.docs.maintenance.map((doc) => (
                    <div key={doc.name} className="flex items-start gap-4 rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-white/15 dark:bg-black/60">
                      <div className="rounded-lg bg-zinc-100 p-3 dark:bg-black/40">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-green-700"><path d="M9 12l2 2 4-4"/><path d="M4 4h16v16H4z"/></svg>
                      </div>
                      <div>
                        <div className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)] text-sm">{doc.name}</div>
                        <div className="text-[10px] text-zinc-700 dark:text-zinc-300">{doc.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs font-black uppercase text-zinc-600 dark:text-zinc-400 tracking-widest mb-3">To Stop FLPB</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {flppData.docs.stop.map((doc) => (
                    <div key={doc.name} className="flex items-start gap-4 rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-white/15 dark:bg-black/60">
                      <div className="rounded-lg bg-zinc-100 p-3 dark:bg-black/40">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-red-700"><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M4 4h16v16H4z"/></svg>
                      </div>
                      <div>
                        <div className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)] text-sm">{doc.name}</div>
                        <div className="text-[10px] text-zinc-700 dark:text-zinc-300">{doc.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-left">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-amber-600"><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"/></svg>
                <p className="text-xs text-amber-800">Admin should retain DLPT reports and certification memos for 24 months for pay audits.</p>
              </div>
            </div>
          </section>
        )}

        {tab === "process" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">How FLPB Works</h2>
            <div className="mt-4 space-y-4">
              {["01", "02", "03", "04", "05", "06"].map((num, idx) => (
                <div key={num} className="flex items-center gap-6">
                  <div className="w-12 text-4xl font-black text-zinc-300">{num}</div>
                  <div className="flex-1 rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                    <h4 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{flppData.steps[idx]?.title ?? "Step"}</h4>
                    <p className="mt-1 text-xs text-zinc-700 dark:text-zinc-300">{flppData.steps[idx]?.detail ?? ""}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {tab === "troubleshooter" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Troubleshooter</h2>
            <div className="mt-4 space-y-4">
              {flppData.qa.map((item) => (
                <div key={item.q} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:border-[var(--sa-navy)] dark:border-white/15 dark:bg-black/60">
                  <h4 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{item.q}</h4>
                  <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{item.a}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-[var(--sa-red)] p-8 text-white text-center">
              <h3 className="text-xl font-bold">Maximum Two Languages</h3>
              <p className="mt-2 text-sm opacity-90">You can receive payment for up to two languages at the same time.</p>
            </div>
          </section>
        )}

        {tab === "references" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">References</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Use official sources for rules, rates, and eligibility.</p>
            <div className="mt-4 grid grid-cols-1 gap-4">
              {flppData.references.map((ref) => (
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
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-zinc-300 transition group-hover:text-[var(--sa-red)]"><path d="M18 3h3v3"/><path d="M21 3l-9 9"/><path d="M21 21H3V3"/></svg>
                </a>
              ))}
            </div>
          </section>
        )}
      </div>

      <aside className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Notes</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {flppData.rules.map((r) => (
              <li key={r.title} className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{r.title}</div>
                <div className="text-xs text-zinc-700 dark:text-zinc-300">{r.desc}</div>
              </li>
            ))}
          </ul>
        </section>
      </aside>
    </div>
  );
}
