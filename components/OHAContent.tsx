"use client";
import { useState } from "react";

type Ref = { title: string; desc: string; url: string; type: string };
type Factor = { name: string; detail: string };
type Doc = { name: string; detail: string };
type Step = { title: string; detail: string };
type Issue = { title: string; bullets: string[] };

export default function OHAContent({ ohaData }: { ohaData: { factors: Factor[]; authorized: string[]; notAuthorized: string[]; docs: Doc[]; steps: Step[]; issues: Issue[]; references: Ref[] } }) {
  const [tab, setTab] = useState<"overview" | "authorization" | "documents" | "process" | "troubleshooter" | "references">("overview");

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center gap-2 overflow-x-auto [&>button]:whitespace-nowrap [&>button]:shrink-0">
          <button onClick={() => setTab("overview")} className={`rounded-md px-3 py-2 text-sm ${tab === "overview" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Overview</button>
          <button onClick={() => setTab("authorization")} className={`rounded-md px-3 py-2 text-sm ${tab === "authorization" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Authorization</button>
          <button onClick={() => setTab("documents")} className={`rounded-md px-3 py-2 text-sm ${tab === "documents" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Documents</button>
          <button onClick={() => setTab("process")} className={`rounded-md px-3 py-2 text-sm ${tab === "process" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Process</button>
          <button onClick={() => setTab("troubleshooter")} className={`rounded-md px-3 py-2 text-sm ${tab === "troubleshooter" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Troubleshooter</button>
          <button onClick={() => setTab("references")} className={`rounded-md px-3 py-2 text-sm ${tab === "references" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>References</button>
        </div>

        {tab === "overview" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Overseas Housing Allowance (OHA)</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">OHA is a non‑taxable allowance paid to Marines stationed outside the continental United States to help cover the cost of private housing. The rate is based on local market ceilings, your dependency status, currency exchange, and your actual rent.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {ohaData.factors.map((f) => (
                <div key={f.name} className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                  <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Factor</div>
                  <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{f.name}</div>
                  <p className="mt-1 text-xs text-zinc-700 dark:text-zinc-300">{f.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-[var(--sa-navy)] p-6 text-[var(--sa-cream)]">
              <div className="flex items-center gap-2 text-xl font-bold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
                BLUF
              </div>
              <p className="mt-2 text-sm opacity-90">OHA pays up to a local ceiling and is adjusted for exchange rates. You are reimbursed for actual rent and a fixed utility allowance. It is separate from COLA and BAH.</p>
            </div>
          </section>
        )}

        {tab === "authorization" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Who Gets OHA?</h2>
            <div className="mt-3 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Authorized</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  {ohaData.authorized.map((a) => (<li key={a}>{a}</li>))}
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Not Authorized</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  {ohaData.notAuthorized.map((n) => (<li key={n}>{n}</li>))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "documents" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Required Documents</h2>
            <div className="mt-3 grid grid-cols-1 gap-4">
              {ohaData.docs.map((doc) => (
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
            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-left dark:border-white/15 dark:bg-white/10">
              <div className="flex items-center gap-2 text-amber-800">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                <span className="font-semibold">Translations</span>
              </div>
              <p className="mt-2 text-sm text-amber-800">If your lease is not in English, provide an official translation showing monthly rent, currency, and landlord details.</p>
            </div>
          </section>
        )}

        {tab === "process" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">How OHA Is Started</h2>
            <div className="mt-4 space-y-4">
              {ohaData.steps.map((s) => (
                <div key={s.title} className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                  <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{s.title}</h3>
                  <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{s.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-blue-200 bg-blue-50 p-4 text-left dark:border-white/15 dark:bg-white/10">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-blue-700 dark:text-[var(--sa-cream)]"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              <p className="text-xs text-blue-800 dark:text-[var(--sa-cream)]"><strong>Admin Note:</strong> OHA reimburses actual rent up to the ceiling. Changes to rent or address must be reported within 30 days.</p>
            </div>
          </section>
        )}

        {tab === "troubleshooter" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Problems & Solutions</h2>
            <div className="mt-3 space-y-4">
              {ohaData.issues.map((issue) => (
                <div key={issue.title} className="rounded-2xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                  <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{issue.title}</h3>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                    {issue.bullets.map((b, i) => (<li key={`${issue.title}-${i}`}>{b}</li>))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
              <h3 className="font-bold text-red-900">Still Need Help?</h3>
              <p className="mt-2 text-sm text-red-800 opacity-80">If OHA is incorrect after two pay cycles, visit S‑1 or IPAC with your lease, orders, and current LES for a pay audit.</p>
              <a href="https://www.travel.dod.mil/Allowances/Overseas-Housing-Allowance/OHA-Rate-Lookup/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[var(--sa-red)] px-6 py-3 font-bold text-white transition hover:bg-[var(--sa-red-dark)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="M18 3h3v3"/><path d="M21 3l-9 9"/><path d="M21 21H3V3"/></svg>
                Official OHA Lookup
              </a>
            </div>
          </section>
        )}

        {tab === "references" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">References</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Use official sources for eligibility, ceilings, and currency conversion.</p>
            <div className="mt-4 grid grid-cols-1 gap-4">
              {ohaData.references.map((ref) => (
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

      <aside className="space-y-6 lg:mt-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.travel.dod.mil/Allowances/Overseas-Housing-Allowance/" target="_blank" rel="noopener noreferrer">Official OHA Overview</a></li>
            <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.travel.dod.mil/Allowances/Overseas-Housing-Allowance/OHA-Rate-Lookup/" target="_blank" rel="noopener noreferrer">OHA Rate Lookup</a></li>
            <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.dfas.mil/militarymembers/payentitlements/" target="_blank" rel="noopener noreferrer">DFAS Pay Entitlements</a></li>
          </ul>
        </section>
      </aside>
    </div>
  );
}
