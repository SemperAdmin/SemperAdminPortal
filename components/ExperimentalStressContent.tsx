"use client";
import { useState } from "react";

type Ref = { title: string; desc: string; url: string; type: string };
type Factor = { title: string; desc: string };
type Rule = { title: string; desc: string };
type Doc = { name: string; detail: string };
type QA = { q: string; a: string };
type TypeItem = { title: string; desc: string };

export default function ExperimentalStressContent({ stressData }: { stressData: { factors: Factor[]; rules: Rule[]; types: TypeItem[]; docs: { start: Doc[]; maintenance: Doc[] }; qa: QA[]; references: Ref[] } }) {
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
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Experimental Stress Duty (HDIP)</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Hazardous Duty Incentive Pay for service members required by competent orders to perform as human test subjects in approved research and development protocols.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {stressData.factors.map((f) => (
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
              <p className="mt-2 text-sm opacity-90">$150/month, performance‑based for months you participate in designated experimental stress duty. Only one HDIP can be received per month.</p>
            </div>
            <div className="mt-6 rounded-xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
              <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Qualifying Duty Types</h3>
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                {stressData.types.map((t) => (
                  <div key={t.title} className="flex gap-4 rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                    <div className="rounded-lg bg-white p-2 shadow-sm dark:bg-black/60">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><circle cx="12" cy="12" r="4"/><path d="M3 12h3M18 12h3M12 3v3M12 18v3"/></svg>
                    </div>
                    <div>
                      <div className="font-bold text-sm text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{t.title}</div>
                      <div className="text-xs text-zinc-700 dark:text-zinc-300">{t.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {tab === "eligibility" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Am I Eligible?</h2>
            <div className="mt-3 space-y-6">
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Primary Duty Requirements</h3>
                <ul className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Competent written orders for experimental stress duty.</li>
                  <li>Active participation as subject or designated observer in approved protocols.</li>
                  <li>Current medical clearance for high‑risk human subject operations.</li>
                </ul>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-blue-200 bg-blue-50 p-4 text-left dark:border-white/15 dark:bg-white/10">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-blue-700 dark:text-[var(--sa-cream)]"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                <p className="text-xs text-blue-800 dark:text-[var(--sa-cream)]">Routine operational decompression, maintenance operations, patient treatment, and training/proficiency tests do not qualify for this HDIP.</p>
              </div>
            </div>
          </section>
        )}

        {tab === "documents" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Document Checklist</h2>
            <div className="mt-4 space-y-6">
              <div>
                <h3 className="text-xs font-black uppercase text-zinc-600 dark:text-zinc-400 tracking-widest mb-3">To Start HDIP</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {stressData.docs.start.map((doc) => (
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
                <h3 className="text-xs font-black uppercase text-zinc-600 dark:text-zinc-400 tracking-widest mb-3">Monthly Maintenance</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {stressData.docs.maintenance.map((doc) => (
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
              <div className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-left">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-amber-600"><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"/></svg>
                <p className="text-xs text-amber-800">Retain performance logs, protocol approvals, and orders for 24 months for pay audits.</p>
              </div>
            </div>
          </section>
        )}

        {tab === "process" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">The HDIP Pipeline</h2>
            <div className="mt-4 space-y-4">
              {["01", "02", "03", "04", "05"].map((step, idx) => (
                <div key={step} className="flex items-center gap-6">
                  <div className="w-12 text-4xl font-black text-zinc-300">{step}</div>
                  <div className="flex-1 rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                    <h4 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{["Orders & Assignment", "Qualifications", "Participation", "Unit Diary", "LES Verification"][idx]}</h4>
                    <p className="mt-1 text-xs text-zinc-700 dark:text-zinc-300">{[
                      "Receive orders assigning you to a research facility or protocol.",
                      "Validate medical clearance and required qualifications for stress duty type.",
                      "Participate in designated experiments; facility logs document performance.",
                      "S‑1 processes HDIP based on orders and participation dates.",
                      "Verify $150 HDIP on LES; processing is typically 1–2 pay periods.",
                    ][idx]}</p>
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
              {stressData.qa.map((item) => (
                <div key={item.q} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:border-[var(--sa-navy)] dark:border-white/15 dark:bg-black/60">
                  <h4 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{item.q}</h4>
                  <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{item.a}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-amber-50 p-8 text-amber-900 border border-amber-200">
              <h3 className="text-xl font-bold">Protocol Completion</h3>
              <p className="mt-2 text-sm opacity-90">Entitlement stops when a protocol ends unless new orders are issued for subsequent testing.</p>
            </div>
          </section>
        )}

        {tab === "references" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">References</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Use official sources for policy and eligibility.</p>
            <div className="mt-4 grid grid-cols-1 gap-4">
              {stressData.references.map((ref) => (
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
            {stressData.rules.map((r) => (
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
