"use client";
import { useState } from "react";

type Ref = { title: string; desc: string; url: string; type: string };
type Factor = { title: string; desc: string };
type Rule = { title: string; desc: string };
type Doc = { name: string; detail: string };
type Step = { title: string; detail: string };
type QA = { q: string; a: string };

type TempoRule = { title: string; desc: string };
type TempoChecklist = { item: string };
type TempoScenario = { name: string; counts: boolean };

export default function HDPContent({ hdpData }: { hdpData: { intro: string; factors: Factor[]; rules: Rule[]; docs: { start: Doc[]; maintenance: Doc[]; stop: Doc[] }; steps: Step[]; qa: QA[]; references: Ref[]; tempo?: { intro: string; rate: string; rules: TempoRule[]; checklist: TempoChecklist[]; scenarios: TempoScenario[] } } }) {
  const [tab, setTab] = useState<"overview" | "eligibility" | "documents" | "process" | "troubleshooter" | "references" | "tempo">("overview");

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
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Hardship Duty Pay (HDP)</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{hdpData.intro}</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {hdpData.factors.map((f) => (
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
              <p className="mt-2 text-sm opacity-90">$50–$150 per month for HDP‑Location levels; HDP‑Mission typically pays $150 for designated missions. HDP‑Tempo pays $495/month ($16.50/day) when away from home station &gt; 220 days in 365. HDP‑L and HDP‑M are mutually exclusive for the same period. Total HDP cap across types is $1,500/month.</p>
            </div>
            <div className="mt-6">
              <h3 className="text-xs font-black uppercase text-zinc-600 dark:text-zinc-400 tracking-widest mb-3">Rates</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-zinc-100 dark:bg-black/40">
                      <th className="p-2 text-left font-semibold text-zinc-700 dark:text-zinc-300">Type</th>
                      <th className="p-2 text-left font-semibold text-zinc-700 dark:text-zinc-300">Level</th>
                      <th className="p-2 text-left font-semibold text-zinc-700 dark:text-zinc-300">Monthly Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2">HDP‑Location</td>
                      <td className="p-2">Level 1</td>
                      <td className="p-2">$50</td>
                    </tr>
                    <tr className="bg-zinc-50 dark:bg-black/20">
                      <td className="p-2">HDP‑Location</td>
                      <td className="p-2">Level 2</td>
                      <td className="p-2">$100</td>
                    </tr>
                    <tr>
                      <td className="p-2">HDP‑Location</td>
                      <td className="p-2">Level 3</td>
                      <td className="p-2">$150</td>
                    </tr>
                    <tr className="bg-zinc-50 dark:bg-black/20">
                      <td className="p-2">HDP‑Mission</td>
                      <td className="p-2">Typical</td>
                      <td className="p-2">$150</td>
                    </tr>
                    <tr>
                      <td className="p-2">HDP‑Tempo</td>
                      <td className="p-2">220+ Days</td>
                      <td className="p-2">$495 ($16.50/day)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Tax</h3>
                <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Taxable in normal duty; excluded in designated combat zones.</div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Proration</h3>
                <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Prorated for partial months based on days at HDP location or mission.</div>
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Cap</h3>
                <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Total monthly cap across HDP types is $1,500.</div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Stacking</h3>
                <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">HDP can be received with Hostile Fire/Imminent Danger Pay when eligible.</div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-xs font-black uppercase text-zinc-600 dark:text-zinc-400 tracking-widest mb-3">HDP vs HFP</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-zinc-100 dark:bg-black/40">
                      <th className="p-2 text-left font-semibold text-zinc-700 dark:text-zinc-300">Feature</th>
                      <th className="p-2 text-left font-semibold text-zinc-700 dark:text-zinc-300">HDP</th>
                      <th className="p-2 text-left font-semibold text-zinc-700 dark:text-zinc-300">HFP/IDP</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2">Purpose</td>
                      <td className="p-2">Hardship conditions</td>
                      <td className="p-2">Physical danger</td>
                    </tr>
                    <tr className="bg-zinc-50 dark:bg-black/20">
                      <td className="p-2">Automatic</td>
                      <td className="p-2">Location designation or mission orders</td>
                      <td className="p-2">Designated threat area</td>
                    </tr>
                    <tr>
                      <td className="p-2">Rate</td>
                      <td className="p-2">$50–$150 (L) / $150 (M) / $495 (T)</td>
                      <td className="p-2">$225</td>
                    </tr>
                    <tr className="bg-zinc-50 dark:bg-black/20">
                      <td className="p-2">Stackable</td>
                      <td className="p-2">Yes, within HDP cap</td>
                      <td className="p-2">Yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {tab === "eligibility" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Am I Eligible?</h2>
            <div className="mt-3 space-y-6">
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">HDP‑Location</h3>
                <ul className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Assigned to a station designated on the official HDP‑L list.</li>
                  <li>Hardship conditions exist at the location.</li>
                  <li>Entitled to basic pay under competent orders.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">HDP‑Mission</h3>
                <ul className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Assigned to a qualifying mission by competent orders.</li>
                  <li>Mission involves unusual hardship beyond normal duties.</li>
                  <li>Commanding officer certifies hardship and rate.</li>
                </ul>
              </div>
            <div className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-left">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-amber-600"><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"/></svg>
              <p className="text-xs text-amber-800">TDY to an HDP‑L location becomes entitled after 30 consecutive days and pays from day 1; living in adequate government quarters may reduce HDP‑L at some locations.</p>
            </div>
            </div>
          </section>
        )}

        {tab === "documents" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Document Checklist</h2>
            <div className="mt-4 space-y-6">
              <div>
                <h3 className="text-xs font-black uppercase text-zinc-600 dark:text-zinc-400 tracking-widest mb-3">To Start HDP‑Location</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {hdpData.docs.start.filter(d => d.name.startsWith("HDP‑L:")).map((doc) => (
                    <div key={doc.name} className="flex items-start gap-4 rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-white/15 dark:bg-black/60">
                      <div className="rounded-lg bg-zinc-100 p-3 dark:bg-black/40">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-[var(--sa-navy)] dark:text-[var(--sa-cream)]"><path d="M4 4h16v16H4z"/><path d="M8 8h8M8 12h8M8 16h8"/></svg>
                      </div>
                      <div>
                        <div className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)] text-sm">{doc.name.replace("HDP‑L:", "").trim()}</div>
                        <div className="text-[10px] text-zinc-700 dark:text-zinc-300">{doc.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs font-black uppercase text-zinc-600 dark:text-zinc-400 tracking-widest mb-3">To Start HDP‑Mission</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {hdpData.docs.start.filter(d => d.name.startsWith("HDP‑M:")).map((doc) => (
                    <div key={doc.name} className="flex items-start gap-4 rounded-xl border border-black/10 bg-white p-5 shadow-sm dark:border-white/15 dark:bg-black/60">
                      <div className="rounded-lg bg-zinc-100 p-3 dark:bg-black/40">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-[var(--sa-navy)] dark:text-[var(--sa-cream)]"><path d="M4 4h16v16H4z"/><path d="M8 8h8M8 12h8M8 16h8"/></svg>
                      </div>
                      <div>
                        <div className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)] text-sm">{doc.name.replace("HDP‑M:", "").trim()}</div>
                        <div className="text-[10px] text-zinc-700 dark:text-zinc-300">{doc.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs font-black uppercase text-zinc-600 dark:text-zinc-400 tracking-widest mb-3">To Stop HDP</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {hdpData.docs.stop.map((doc) => (
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
                <p className="text-xs text-amber-800">Admin should retain orders and certification memos for 24 months for pay audits.</p>
              </div>
            </div>
          </section>
        )}

        {tab === "process" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">How HDP Works</h2>
            <div className="mt-4 space-y-4">
              {hdpData.steps.map((s, idx) => (
                <div key={`${s.title}-${idx}`} className="flex items-center gap-6">
                  <div className="w-12 text-4xl font-black text-zinc-300">{String(idx + 1).padStart(2, "0")}</div>
                  <div className="flex-1 rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                    <h4 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{s.title}</h4>
                    <p className="mt-1 text-xs text-zinc-700 dark:text-zinc-300">{s.detail}</p>
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
              {hdpData.qa.map((item) => (
                <div key={item.q} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:border-[var(--sa-navy)] dark:border-white/15 dark:bg-black/60">
                  <h4 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{item.q}</h4>
                  <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{item.a}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-[var(--sa-red)] p-8 text-white text-center">
              <h3 className="text-xl font-bold">One HDP Per Month</h3>
              <p className="mt-2 text-sm opacity-90">HDP‑L and HDP‑M cannot be received simultaneously for the same period. HDP‑T may be paid concurrently when eligible; total monthly cap is $1,500.</p>
            </div>
          </section>
        )}

        {tab === "tempo" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Hardship Duty Pay – Tempo (HDP‑T)</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{hdpData.tempo?.intro ?? "Compensates for excessive time away from home station due to high operational tempo."}</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Rate</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{hdpData.tempo?.rate ?? "$495/month ($16.50/day)"}</div>
                <p className="mt-1 text-xs text-zinc-700 dark:text-zinc-300">Prorated daily once threshold is met.</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Threshold</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">220 Days</div>
                <p className="mt-1 text-xs text-zinc-700 dark:text-zinc-300">More than 220 days away within the previous 365 days.</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Counting</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Orders Based</div>
                <p className="mt-1 text-xs text-zinc-700 dark:text-zinc-300">Deployment, field exercises, and ordered absences count.</p>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-xs font-black uppercase text-zinc-600 dark:text-zinc-400 tracking-widest mb-3">Rules</h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {(hdpData.tempo?.rules ?? [
                  { title: "Eligibility", desc: "Paid once away from home station exceeds 220 days in the previous 365." },
                  { title: "Proration", desc: "Pays $16.50 per qualifying day past the threshold." },
                  { title: "Documentation", desc: "Requires orders and travel vouchers to validate days away." },
                ]).map((r) => (
                  <li key={r.title} className="rounded-md border border-black/10 bg-white p-4 text-sm shadow-sm dark:border-white/15 dark:bg-black/60">
                    <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{r.title}</div>
                    <div className="text-xs text-zinc-700 dark:text-zinc-300">{r.desc}</div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <h3 className="text-xs font-black uppercase text-zinc-600 dark:text-zinc-400 tracking-widest mb-3">Quick Eligibility</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-zinc-100 dark:bg-black/40">
                      <th className="p-2 text-left font-semibold text-zinc-700 dark:text-zinc-300">Scenario</th>
                      <th className="p-2 text-left font-semibold text-zinc-700 dark:text-zinc-300">Counts?</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(hdpData.tempo?.scenarios ?? [
                      { name: "Fleet Deployment", counts: true },
                      { name: "Field Exercise away from station", counts: true },
                      { name: "Annual Leave", counts: false },
                      { name: "Medical transit from qualifying mission", counts: true },
                    ]).map((s, i) => (
                      <tr key={s.name} className={i % 2 === 1 ? "bg-zinc-50 dark:bg-black/20" : ""}>
                        <td className="p-2">{s.name}</td>
                        <td className="p-2">{s.counts ? "Yes" : "No"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Checklist</h3>
                <ul className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                  {(hdpData.tempo?.checklist ?? [
                    { item: "Count days away using orders and vouchers" },
                    { item: "Start payment on day 221 at $16.50/day" },
                    { item: "Verify LES shows HDP‑T" },
                    { item: "Retain documentation for audits" },
                  ]).map((c) => (
                    <li key={c.item}>{c.item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Citations</h3>
                <ul className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>DoD FMR Vol. 7A, Ch. 17</li>
                  <li>37 U.S.C. § 305</li>
                  <li>Service guidance (e.g., MARADMIN updates)</li>
                </ul>
              </div>
            </div>
          </section>
        )}
        {tab === "references" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">References</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Use official sources for rates, eligibility, and policy.</p>
            <div className="mt-4 grid grid-cols-1 gap-4">
              {hdpData.references.map((ref) => (
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
            {hdpData.rules.map((r) => (
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
