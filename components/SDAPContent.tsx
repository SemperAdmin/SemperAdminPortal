"use client";
import { useState } from "react";

type Ref = { title: string; desc: string; url: string; type: string };
type Factor = { title: string; desc: string };
type Rule = { title: string; desc: string };
type Doc = { name: string; detail: string };
type Step = { title: string; detail: string };
type QA = { q: string; a: string };
type Level = { level: number; amount: number };

export default function SDAPContent({ sdapData }: { sdapData: { intro: string; factors: Factor[]; rules: Rule[]; levels: Level[]; docs: { start: Doc[]; stop: Doc[] }; steps: Step[]; qa: QA[]; references: Ref[] } }) {
  const [tab, setTab] = useState<"overview" | "eligibility" | "documents" | "process" | "troubleshooter" | "references">("overview");

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center gap-2 overflow-x-auto [&>button]:whitespace-nowrap [&>button]:shrink-0">
          <button onClick={() => setTab("overview")} className={`rounded-md px-3 py-2 text-sm ${tab === "overview" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Overview</button>
          <button onClick={() => setTab("eligibility")} className={`rounded-md px-3 py-2 text-sm ${tab === "eligibility" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Eligibility</button>
          <button onClick={() => setTab("documents")} className={`rounded-md px-3 py-2 text-sm ${tab === "documents" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Documents</button>
          <button onClick={() => setTab("process")} className={`rounded-md px-3 py-2 text-sm ${tab === "process" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Process</button>
          <button onClick={() => setTab("troubleshooter")} className={`rounded-md px-3 py-2 text-sm ${tab === "troubleshooter" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Troubleshooter</button>
          <button onClick={() => setTab("references")} className={`rounded-md px-3 py-2 text-sm ${tab === "references" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>References</button>
        </div>

        {tab === "overview" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">SDAP</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{sdapData.intro}</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {sdapData.factors.map((f) => (
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
              <p className="mt-2 text-sm opacity-90">Monthly incentive pay for enlisted members in designated special duty billets. Levels 1–6 pay $75–$450 per month. One SDAP at a time. Tax‑free in CZTE.</p>
            </div>
            <div className="mt-6">
              <h3 className="text-xs font-black uppercase text-zinc-600 dark:text-zinc-400 tracking-widest mb-3">Rates</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-zinc-100 dark:bg-black/40">
                      <th className="p-2 text-left font-semibold text-zinc-700 dark:text-zinc-300">Level</th>
                      <th className="p-2 text-left font-semibold text-zinc-700 dark:text-zinc-300">Monthly Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sdapData.levels.map((lv, i) => (
                      <tr key={lv.level} className={i % 2 === 1 ? "bg-zinc-50 dark:bg-black/20" : ""}>
                        <td className="p-2">SDAP Level {lv.level}</td>
                        <td className="p-2">${lv.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-3 rounded-lg border border-black/10 bg-white p-4 text-[10px] text-zinc-700 shadow-sm dark:border-white/15 dark:bg-black/60 dark:text-zinc-300">
              Marine Corps may apply monthly installment variations for SDA billets. Recruiters and Drill Instructors can shift between levels (e.g., 4–5) based on role and local policy. Check current MARADMIN for billet‑specific levels.
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Tax</h3>
                <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Taxable in normal duty; excluded in designated combat zones.</div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">One SDAP</h3>
                <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Only one SDAP payment per month; receive the higher eligible rate.</div>
              </div>
            </div>
          </section>
        )}

        {tab === "eligibility" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Am I Eligible?</h2>
            <div className="mt-3 space-y-6">
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Requirements</h3>
                <ul className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Enlisted status (E‑1 to E‑9).</li>
                  <li>Assigned to an authorized SDAP billet on the current list.</li>
                  <li>Competent orders to the billet.</li>
                  <li>Meet billet qualifications.</li>
                  <li>Actually perform the special duty assignment.</li>
                </ul>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-left">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-amber-600"><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"/></svg>
                <p className="text-xs text-amber-800">SDAP continues during TDY, hospitalization, or authorized leave for up to 90 days. Terminate on the 91st consecutive day away from the special duty billet.</p>
              </div>
            </div>
          </section>
        )}

        {tab === "documents" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Document Checklist</h2>
            <div className="mt-4 space-y-6">
              <div>
                <h3 className="text-xs font-black uppercase text-zinc-600 dark:text-zinc-400 tracking-widest mb-3">To Start SDAP</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {sdapData.docs.start.map((doc) => (
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
                <h3 className="text-xs font-black uppercase text-zinc-600 dark:text-zinc-400 tracking-widest mb-3">To Stop SDAP</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {sdapData.docs.stop.map((doc) => (
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
                <p className="text-xs text-amber-800">Admin should retain orders and authorization references for 24 months for pay audits.</p>
              </div>
            </div>
          </section>
        )}

        {tab === "process" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">How SDAP Works</h2>
            <div className="mt-4 space-y-4">
              {sdapData.steps.map((s, idx) => (
                <div key={`${s.title}-${idx}`} className="flex items-center gap-6">
                  <div className="w-12 text-4xl font-black text-zinc-300">{String(idx + 1).padStart(2, "0")}</div>
                  <div className="flex-1 rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                    <h4 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{s.title}</h4>
                    <p className="mt-1 text-xs text-zinc-700 dark:text-zinc-300">{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <h3 className="text-xs font-black uppercase text-zinc-600 dark:text-zinc-400 tracking-widest mb-3">Decision Flowchart</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-black/10 bg-white p-4 text-sm shadow-sm dark:border-white/15 dark:bg-black/60">
                  <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Standard Annual Leave</div>
                  <div className="mt-1 text-[10px] text-green-700 dark:text-green-400">YES</div>
                  <div className="mt-1 text-[11px] text-zinc-700 dark:text-zinc-300">No limit as long as you return to the SDA billet.</div>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white p-4 text-sm shadow-sm dark:border-white/15 dark:bg-black/60">
                  <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Hospitalization</div>
                  <div className="mt-1 text-[10px] text-green-700 dark:text-green-400">YES</div>
                  <div className="mt-1 text-[11px] text-zinc-700 dark:text-zinc-300">Up to 90 days; terminate on day 91 away from SDA duties.</div>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white p-4 text-sm shadow-sm dark:border-white/15 dark:bg-black/60">
                  <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Attending PME (School)</div>
                  <div className="mt-1 text-[10px] text-green-700 dark:text-green-400">YES</div>
                  <div className="mt-1 text-[11px] text-zinc-700 dark:text-zinc-300">If required for the SDA and duration is under 90 days.</div>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white p-4 text-sm shadow-sm dark:border-white/15 dark:bg-black/60">
                  <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Non‑Judicial Punishment</div>
                  <div className="mt-1 text-[10px] text-red-700 dark:text-red-400">NO</div>
                  <div className="mt-1 text-[11px] text-zinc-700 dark:text-zinc-300">If removed from the SDA billet by the CO, SDAP stops.</div>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white p-4 text-sm shadow-sm dark:border-white/15 dark:bg-black/60">
                  <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Terminal Leave</div>
                  <div className="mt-1 text-[10px] text-green-700 dark:text-green-400">YES</div>
                  <div className="mt-1 text-[11px] text-zinc-700 dark:text-zinc-300">Continues until the date of separation.</div>
                </div>
              </div>
            </div>
          </section>
        )}

        {tab === "troubleshooter" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Troubleshooter</h2>
            <div className="mt-4 space-y-4">
              {sdapData.qa.map((item) => (
                <div key={item.q} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:border-[var(--sa-navy)] dark:border-white/15 dark:bg-black/60">
                  <h4 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{item.q}</h4>
                  <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{item.a}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-[var(--sa-red)] p-8 text-white text-center">
              <h3 className="text-xl font-bold">One SDAP Per Month</h3>
              <p className="mt-2 text-sm opacity-90">Only one SDAP payment is authorized at a time. Receive the higher eligible rate when multiple assignments apply.</p>
            </div>
          </section>
        )}

        {tab === "references" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">References</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Use official sources for rates, eligibility, and policy.</p>
            <div className="mt-4 grid grid-cols-1 gap-4">
              {sdapData.references.map((ref) => (
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
            {sdapData.rules.map((r) => (
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
