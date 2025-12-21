"use client";
import { useMemo, useState } from "react";

type Rates = Record<number, { enlisted: number; officer: number }>;
type Code = { fid: string; type: string; desc: string };
type Ref = { title: string; desc: string; url: string; type: string };

export default function BASContent({ basData }: { basData: { rates: Rates; codes: Code[]; references: Ref[] } }) {
  const [activeTab, setActiveTab] = useState<"dashboard" | "documents" | "calculator" | "troubleshooter" | "references">("dashboard");
  const [userStatus, setUserStatus] = useState<"enlisted" | "officer">("enlisted");
  const [fieldDays, setFieldDays] = useState<number>(0);

  const dailyRate = useMemo(() => {
    const monthly = basData.rates[2025][userStatus];
    return Math.round((monthly / 30) * 100) / 100;
  }, [userStatus, basData.rates]);

  const fieldLoss = useMemo(() => Math.round(fieldDays * dailyRate * 100) / 100, [fieldDays, dailyRate]);

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center gap-2">
          <button onClick={() => setActiveTab("dashboard")} className={`rounded-md px-3 py-2 text-sm ${activeTab === "dashboard" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Dashboard</button>
          <button onClick={() => setActiveTab("documents")} className={`rounded-md px-3 py-2 text-sm ${activeTab === "documents" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Documents</button>
          <button onClick={() => setActiveTab("calculator")} className={`rounded-md px-3 py-2 text-sm ${activeTab === "calculator" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Loss Calculator</button>
          <button onClick={() => setActiveTab("troubleshooter")} className={`rounded-md px-3 py-2 text-sm ${activeTab === "troubleshooter" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Troubleshooter</button>
          <button onClick={() => setActiveTab("references")} className={`rounded-md px-3 py-2 text-sm ${activeTab === "references" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>References</button>
        </div>

        {activeTab === "dashboard" && (
          <>
            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">BAS Overview</h2>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Basic Allowance for Subsistence (BAS) is a monthly, tax‑free allowance to offset meal costs. It is a fixed rate for enlisted and officers that doesn&#39;t change by ZIP code or dependents and continues while on leave. Select status to view rates.</p>
              <div className="mt-4 flex gap-2">
                <button onClick={() => setUserStatus("enlisted")} className={`rounded-md px-3 py-2 text-sm font-semibold ${userStatus === "enlisted" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Enlisted</button>
                <button onClick={() => setUserStatus("officer")} className={`rounded-md px-3 py-2 text-sm font-semibold ${userStatus === "officer" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Officer</button>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Current 2024 Rate</h3>
                  <div className="mt-2 text-4xl font-black text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">${basData.rates[2024][userStatus].toFixed(2)}<span className="text-lg font-normal text-zinc-500 dark:text-zinc-400">/mo</span></div>
                  <div className="mt-4 flex items-center gap-2 text-green-700 dark:text-green-400">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
                    <span className="text-sm font-medium">100% Tax Free</span>
                  </div>
                </div>
                <div className="rounded-2xl border border-black/10 bg-[var(--sa-navy)] p-6 text-[var(--sa-cream)] shadow-sm dark:border-white/15">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--sa-cream)]/80">Incoming 2025 Rate</h3>
                  <div className="mt-2 text-4xl font-black">${basData.rates[2025][userStatus].toFixed(2)}<span className="text-lg font-normal opacity-70">/mo</span></div>
                  <div className="mt-4 text-xs opacity-80">Effective Jan 1, 2025. Based on USDA Food Cost Index.</div>
                </div>
              </div>
            </section>

            <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-[var(--sa-navy)] dark:text-[var(--sa-cream)]"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                The Rules of the Road
              </h3>
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                  <div className="mb-2 text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="M21 16v-3l-8-5-8 5v3l8-5 8 5z"/><path d="M3 19l9-6 9 6"/></svg>
                  </div>
                  <h4 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Travel (TAD)</h4>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">You get BAS + Per Diem. Submit your travel voucher to ensure reimbursements are correct.</p>
                </div>
                <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                  <div className="mb-2 text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><rect x="3" y="7" width="18" height="10" rx="2"/><path d="M7 11h10"/></svg>
                  </div>
                  <h4 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">On Leave</h4>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">Full BAS continues. Your meal card is disabled, but you get the cash entitlement.</p>
                </div>
                <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                  <div className="mb-2 text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="M10 14l2-2 2-2M12 12l-2-2m2 2l2 2"/><rect x="3" y="5" width="18" height="14" rx="2"/></svg>
                  </div>
                  <h4 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Meal Cards</h4>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">If issued a card, BAS is subtracted back via &quot;FID: DN&quot; on your LES.</p>
                </div>
              </div>
            </section>
          </>
        )}

        {activeTab === "documents" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Document Checklist</h2>
            <div className="mt-4 space-y-6">
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Reinstating BAS</h3>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Command memorandum authorizing reinstatement if BAS was suspended. Use for disciplinary or administrative suspensions.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Stopping BAS (Meal Card)</h3>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">NAVMC 10522 (Commuted Rations form) is required when a meal card is issued and cash allowance is suspended.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Field/Travel Claims</h3>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">TAD orders and travel voucher are required if claiming BAS during TDY/TAD where meals were not provided.</p>
              </div>
            </div>
          </section>
        )}

        {activeTab === "calculator" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Field/Sea Duty Estimator</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Estimate how much will be collected from your LES for government meals during deployments or field ops.</p>
            <div className="mt-4 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Days in the Field / At Sea</label>
                <input type="range" min={0} max={30} value={fieldDays} onChange={(e) => setFieldDays(Math.max(0, Number(e.target.value)))} className="w-full h-2 cursor-pointer rounded-lg bg-zinc-200 accent-red-700" />
                <div className="mt-2 text-center text-2xl font-black text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{fieldDays} Days</div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-black/10 dark:border-white/15">
                <div>
                  <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Daily Entitlement</div>
                  <div className="mt-1 text-xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">${dailyRate.toFixed(2)}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Estimated Loss (FID: DN)</div>
                  <div className="mt-1 text-2xl font-black text-[var(--sa-red)]">-${fieldLoss.toFixed(2)}</div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-blue-200 bg-blue-50 p-4 text-left dark:border-white/15 dark:bg-white/10">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-blue-700 dark:text-[var(--sa-cream)]"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              <p className="text-xs text-blue-800 dark:text-[var(--sa-cream)]"><strong>Admin Note:</strong> These deductions are usually processed 1-2 pay periods after you return from the field. S-1 must input the dates into the Unit Diary system.</p>
            </div>
          </section>
        )}

        {activeTab === "troubleshooter" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">LES Decoder</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Can&#39;t find your BAS? Check these codes on your Statement of Leave and Earnings.</p>
            <div className="mt-4 space-y-3">
              {basData.codes.map((code) => (
                <div key={code.fid} className="flex items-center justify-between rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                  <div>
                    <span className="mr-3 rounded bg-[var(--sa-navy)] px-2 py-1 font-mono text-xs text-[var(--sa-cream)]">FID: {code.fid}</span>
                    <span className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{code.type}</span>
                    <p className="mt-1 text-xs text-zinc-700 dark:text-zinc-300">{code.desc}</p>
                  </div>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-zinc-300 dark:text-zinc-500"><path d="M9 18l6-6-6-6"/></svg>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-r-2xl border-l-4 border-amber-500 bg-amber-50 p-6 text-left">
              <h3 className="mb-2 flex items-center gap-2 font-semibold text-amber-800">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"/></svg>
                The &quot;2-Week Rule&quot;
              </h3>
              <p className="text-sm text-amber-900">Did you just turn in your meal card or check in from PCS? Admin systems take time. If your pay isn&#39;t fixed after <strong>two full pay cycles</strong> (about one month), visit the S-1 with a copy of your signed NAVMC 10522.</p>
            </div>
          </section>
        )}

        {activeTab === "references" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Policy & Documentation</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Access official source material to ensure you have the ground truth on your entitlements.</p>
            <div className="mt-4 grid grid-cols-1 gap-4">
              {basData.references.map((ref) => (
                <a key={ref.title} href={ref.url} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4 rounded-xl border border-black/10 bg-white p-5 transition hover:border-[var(--sa-navy)] hover:shadow-md dark:border-white/15 dark:bg-black/60">
                  <div className="rounded-lg bg-zinc-100 p-3 transition group-hover:bg-[var(--sa-cream)]/60 group-hover:text-[var(--sa-red)] dark:bg-black/40">
                    {ref.type === "Policy" || ref.type === "Order" ? (
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
            <div className="mt-6 rounded-2xl bg-[var(--sa-navy)] p-8 text-[var(--sa-cream)]">
              <h3 className="text-xl font-bold">Official Submission</h3>
              <p className="mt-2 text-sm opacity-80">Most BAS changes require routing NAVMC 10522 through your chain of command to S-1. Keep a stamped copy of every document you submit.</p>
              <a href="#" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[var(--sa-red)] px-6 py-3 text-white transition hover:bg-[var(--sa-red-dark)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="M4 4h16v16H4z"/><path d="M8 8h8M8 12h8M8 16h8"/></svg>
                Download NAVMC 10522 (Sample)
              </a>
            </div>
          </section>
        )}

      </div>

      <aside className="space-y-6 lg:mt-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Codes</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {basData.codes.map((c) => (
              <li key={c.fid} className="flex items-start justify-between gap-2">
                <div>
                  <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{c.fid} <span className="text-xs text-zinc-600 dark:text-zinc-400">{c.type}</span></div>
                  <div className="text-xs text-zinc-700 dark:text-zinc-300">{c.desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </aside>
    </div>
  );
}
