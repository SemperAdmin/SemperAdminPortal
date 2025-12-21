"use client";
import { useState } from "react";

type Ref = { title: string; desc: string; url: string; type: string };

export default function ImminentDangerPayContent({ idpData }: { idpData: { references: Ref[] } }) {
  const [tab, setTab] = useState<
    | "overview"
    | "eligibility"
    | "amount"
    | "process"
    | "troubleshooter"
    | "references"
  >("overview");

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center gap-2">
          <button onClick={() => setTab("overview")} className={`rounded-md px-3 py-2 text-sm ${tab === "overview" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Overview</button>
          <button onClick={() => setTab("eligibility")} className={`rounded-md px-3 py-2 text-sm ${tab === "eligibility" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Eligibility</button>
          <button onClick={() => setTab("amount")} className={`rounded-md px-3 py-2 text-sm ${tab === "amount" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Amount</button>
          <button onClick={() => setTab("process")} className={`rounded-md px-3 py-2 text-sm ${tab === "process" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Process</button>
          <button onClick={() => setTab("troubleshooter")} className={`rounded-md px-3 py-2 text-sm ${tab === "troubleshooter" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Troubleshooter</button>
          <button onClick={() => setTab("references")} className={`rounded-md px-3 py-2 text-sm ${tab === "references" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>References</button>
        </div>

        {tab === "overview" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Imminent Danger Pay (IDP)</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Daily special pay for duty in a designated Imminent Danger area. Compensates for heightened risk due to war, civil insurrection, or other conditions of imminent danger.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Rate</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">$7.50/day</div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Payment</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Prorated by days in area</div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Tax</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Taxable; excluded via CZTE</div>
              </div>
            </div>
            <div className="mt-6 rounded-2xl bg-[var(--sa-navy)] p-6 text-[var(--sa-cream)]">
              <div className="flex items-center gap-2 text-xl font-bold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
                BLUF
              </div>
              <p className="mt-2 text-sm opacity-90">Area‑based entitlement. Paid for each day present in a designated IDP area. If a hostile fire event occurs, HFP replaces IDP for that month at $225.</p>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Key Features</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Area‑based trigger</li>
                  <li>$7.50/day, prorated</li>
                  <li>Requires presence in designated zone</li>
                  <li>HFP replaces IDP if hostile fire occurs</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Designation</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Official IDP area list published by DoD</li>
                  <li>Applies to all personnel present and on duty</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "eligibility" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Who Qualifies</h2>
            <div className="mt-3 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Present in IDP Area</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Physically present within designated geographical boundaries</li>
                  <li>On official duty or orders</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Daily Entitlement</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Entitled for each day present</li>
                  <li>Prorated if present for partial month</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Applies To</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Active duty members</li>
                  <li>Reserve component in a duty status</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Relationship to HFP</h3>
                <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Cannot receive both IDP and HFP for the same month. Hostile fire upgrades to HFP.</div>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Airspace Rules (Feet Dry/Wet)</h3>
                <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Some areas include airspace broadly; others only for personnel supporting operations in the land area. Simply flying overhead may not qualify. Check DoD FMR Vol. 7A, Ch. 10, Table 10‑1 footnotes.</div>
              </div>
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-left dark:border-white/15 dark:bg-white/10">
                <div className="text-sm font-semibold text-amber-800">Check the Footnotes</div>
                <div className="mt-1 text-xs text-amber-800">Footnotes in Table 10‑1 control whether airspace counts and under what conditions.</div>
              </div>
            </div>
          </section>
        )}

        {tab === "amount" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">How Much</h2>
            <div className="mt-3 space-y-4">
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Daily Rate</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">$7.50 per day present in a designated IDP area.</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Proration</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>30 days equals $225 total</li>
                  <li>5 days TDY equals $37.50</li>
                  <li>Partial months pay by day</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Calendar Math (31st Day Rule)</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Pay system uses a 30‑day month: $225 ÷ 30 = $7.50/day</li>
                  <li>March 1–31: $225 (31st day does not add beyond cap)</li>
                  <li>February 1–28: $210</li>
                  <li>Active duty orders under 30 days: the 31st day counts to avoid short‑tour underpayment</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">HFP Upgrade</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Hostile fire event in month pays $225 full HFP</li>
                  <li>IDP for other days in month is replaced</li>
                </ul>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                  <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Routine Patrol</div>
                  <div className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">10 days, no event</div>
                  <div className="mt-2 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">$75.00 (IDP)</div>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                  <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Routine Patrol</div>
                  <div className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">30 days, no event</div>
                  <div className="mt-2 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">$225.00 (IDP)</div>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                  <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">IED/Firefight</div>
                  <div className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">1 day, event occurred</div>
                  <div className="mt-2 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">$225.00 (HFP)</div>
                </div>
              </div>
            </div>
          </section>
        )}

        {tab === "process" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">How IDP Works</h2>
            <div className="mt-4 space-y-4">
              {[
                "Member is present in a designated IDP area",
                "Days present are tracked for the month",
                "Finance computes $7.50/day for qualifying days",
                "If hostile fire occurs, process HFP $225 for that month",
                "Payment appears on LES (1–2 pay periods)",
              ].map((s, idx) => (
                <div key={`${s}-${idx}`} className="flex items-center gap-6">
                  <div className="w-12 text-4xl font-black text-zinc-300">{String(idx + 1).padStart(2, "0")}</div>
                  <div className="flex-1 rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                    <h4 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{s}</h4>
                    <p className="mt-1 text-xs text-zinc-700 dark:text-zinc-300">Follow unit procedures and designated area listings.</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {tab === "troubleshooter" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Problems & Solutions</h2>
            <div className="mt-4 space-y-4">
              {[
                { q: "In IDP area but not paid", a: "Verify designated area status and dates present; contact S‑1/finance." },
                { q: "Received HFP and IDP for same month", a: "Only one is authorized. HFP replaces IDP when hostile fire occurs." },
                { q: "Short TDY not paid", a: "Payment is daily. Submit TDY dates showing presence in IDP area." },
                { q: "Wrong amount for 31‑day month", a: "Check daily count; payment is $7.50 per qualifying day." },
                { q: "15 days in Area A + 15 days in Area B — two payments?", a: "No. The system sums qualifying days across all areas. You receive up to $225 total for the month." },
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
              {idpData.references.map((ref) => (
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
                      <h4 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)] whitespace-nowrap">{ref.title}</h4>
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
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Facts</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
            <li>Area‑based; daily $7.50</li>
            <li>Prorated by days present</li>
            <li>HFP replaces IDP for the month of hostile fire</li>
            <li>Taxable; excluded when CZTE applies</li>
          </ul>
        </section>
      </aside>
    </div>
  );
}
