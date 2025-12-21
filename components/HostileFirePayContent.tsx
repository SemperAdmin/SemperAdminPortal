"use client";
import { useState } from "react";

type Ref = { title: string; desc: string; url: string; type: string };

export default function HostileFirePayContent({ hfpData }: { hfpData: { references: Ref[] } }) {
  const [tab, setTab] = useState<
    | "overview"
    | "eligibility"
    | "amount"
    | "certification"
    | "process"
    | "important"
    | "special"
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
          <button onClick={() => setTab("certification")} className={`rounded-md px-3 py-2 text-sm ${tab === "certification" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Certification</button>
          <button onClick={() => setTab("process")} className={`rounded-md px-3 py-2 text-sm ${tab === "process" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Process</button>
          <button onClick={() => setTab("important")} className={`rounded-md px-3 py-2 text-sm ${tab === "important" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Important</button>
          <button onClick={() => setTab("special")} className={`rounded-md px-3 py-2 text-sm ${tab === "special" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Special</button>
          <button onClick={() => setTab("troubleshooter")} className={`rounded-md px-3 py-2 text-sm ${tab === "troubleshooter" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Troubleshooter</button>
          <button onClick={() => setTab("references")} className={`rounded-md px-3 py-2 text-sm ${tab === "references" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>References</button>
        </div>

        {tab === "overview" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Hostile Fire Pay (HFP)</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Special monthly payment for being subjected to hostile fire, explosion of hostile mines, or other hostile action. Compensates for extraordinary danger during combat operations or hostile fire events.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Rate</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">$225/month</div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Payment</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Full month (not prorated)</div>
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
              <p className="mt-2 text-sm opacity-90">Event‑based entitlement. If a hostile fire event occurs in the month, you receive $225 for the entire month, not prorated. HFP takes precedence over IDP for that month. Commander certification is required.</p>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Key Features</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Event‑based trigger</li>
                  <li>Full month $225 payment</li>
                  <li>Not prorated</li>
                  <li>Commander certification</li>
                  <li>Applies to all personnel in area</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Hostile Fire Defined</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Hostile fire from enemy forces</li>
                  <li>Explosion of hostile mines (IEDs, landmines)</li>
                  <li>Other hostile action (rockets, mortars, munitions)</li>
                  <li>Certification by appropriate commander</li>
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
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">On Duty in Hostile Fire Area</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Area where hostile fire event occurred</li>
                  <li>During the month of the event</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Exposed to Hostile Event</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Direct hostile fire or hostile mines</li>
                  <li>Other hostile action, including indirect fire</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Grave Danger</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Specific legal determination: within effective range of the weapon used</li>
                  <li>Command‑level determination; not individual self‑assessment</li>
                  <li>Policy tip: rocket hits north side; south side may remain IDP</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Killed, Injured, or Wounded</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Death or injury due to hostile fire event</li>
                  <li>Documentation may serve as certification</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Applies To</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Active duty members</li>
                  <li>Reserve component on active duty</li>
                  <li>Reserve component on inactive duty with compensation</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Relationship to IDP</h3>
                <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Cannot receive both HFP and IDP for the same month. If a hostile fire event occurs, HFP replaces IDP for that month.</div>
              </div>
            </div>
          </section>
        )}

        {tab === "amount" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">How Much</h2>
            <div className="mt-3 space-y-4">
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Monthly Rate</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">$225 per month.</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Full Month, Not Prorated</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Event on the 1st, 15th, or 31st pays the same full $225.</li>
                  <li>Number of days in area does not affect payment.</li>
                  <li>One payment per month maximum.</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">HFP vs IDP: Upgrade Examples</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>IDP pays $7.50/day; 30 days equals $225 total.</li>
                  <li>Short TDY: 5 days in an IDP area pays $37.50.</li>
                  <li>Hostile event on day 1 upgrades to full $225 HFP for the month.</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Payment Timing</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Appears on LES typically within 1–2 pay periods after certification.</li>
                  <li>Retroactive payment is allowed when certification is delayed.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-[var(--sa-navy)] p-6 text-[var(--sa-cream)]">
                <div className="text-xl font-bold">Annual Amount</div>
                <p className="mt-2 text-sm opacity-90">$2,700/year if entitled every month; HFP is event‑based, not continuous.</p>
              </div>
            </div>
          </section>
        )}

        {tab === "certification" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Commander Certification</h2>
            <div className="mt-3 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Who Certifies</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Lowest level encompassing all affected personnel</li>
                  <li>Vessel CO, unit commander, or operational control commander</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What It Includes</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Names and IDs of entitled members</li>
                  <li>Brief description, date/time, and location of incident</li>
                  <li>Commander signature</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Where It Goes</h3>
                <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Forwarded to servicing financial support office via the geographic Combatant Commander, as applicable.</div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">Substitute Documentation</h3>
                <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Death certificate or injury report may substitute if they establish hostile fire as the cause.</div>
              </div>
            </div>
            <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-left dark:border-white/15 dark:bg-white/10">
              <div className="flex items-center gap-2 text-amber-800">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"/></svg>
                <span className="font-semibold">Determination</span>
              </div>
              <p className="mt-2 text-sm text-amber-800">Commander determination of fact is conclusive unless fraud or gross negligence; may be changed for new evidence or good cause.</p>
            </div>
          </section>
        )}

        {tab === "process" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">How HFP Works</h2>
            <div className="mt-4 space-y-4">
              {[
                "Hostile fire event occurs",
                "Incident documented (what/when/where/who)",
                "Commander determines eligibility and roster",
                "Certification prepared (names, IDs, details)",
                "Certification forwarded to finance",
                "Finance processes $225 for entitled month",
                "Payment appears on LES (1–2 pay periods)",
              ].map((s, idx) => (
                <div key={`${s}-${idx}`} className="flex items-center gap-6">
                  <div className="w-12 text-4xl font-black text-zinc-300">{String(idx + 1).padStart(2, "0")}</div>
                  <div className="flex-1 rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                    <h4 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{s}</h4>
                    <p className="mt-1 text-xs text-zinc-700 dark:text-zinc-300">Follow unit procedures; retroactive certification is allowed when justified.</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {tab === "important" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Important Things To Know</h2>
            <div className="mt-4 space-y-6">
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Full Month Payment</h3>
                <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Never prorated; always $225 for the entire month if an event occurs.</div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">One Payment Per Month</h3>
                <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Multiple events in the same month still pay $225 once.</div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">HFP vs IDP</h3>
                <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">If a hostile fire event occurs, HFP replaces IDP for that month.</div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Must Be Enemy Action</h3>
                <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Friendly fire, accidents, training, and non‑enemy incidents do not qualify.</div>
              </div>
            </div>
          </section>
        )}

        {tab === "special" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Special Situations</h2>
            <div className="mt-3 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Captured or Missing</h3>
                <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">If entitled immediately before captured/missing status, HFP continues monthly while in that status.</div>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Hospitalization (PAC)</h3>
                <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Continuation is not automatic. Requires PAC eligibility entry in the system. Continues up to 12 months while hospitalized for treatment of hostile fire injuries; stops on discharge unless still in a designated zone.</div>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Leave Status</h3>
                <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">On authorized leave at duty station during event may qualify if placed in grave danger; commander determination required.</div>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Training and Friendly Fire</h3>
                <div className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Live‑fire training and friendly fire do not qualify; must be hostile action.</div>
              </div>
            </div>
          </section>
        )}

        {tab === "troubleshooter" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Problems & Solutions</h2>
            <div className="mt-4 space-y-4">
              {[
                { q: "Event occurred but HFP not on LES", a: "Verify commander submitted certification; contact S‑1/finance. Processing typically 1–2 pay cycles." },
                { q: "Only some unit members received HFP", a: "Confirm certification list and presence during event; notify commander if omitted." },
                { q: "Received IDP instead of HFP", a: "HFP takes precedence; request correction with certification." },
                { q: "Multiple events, only $225", a: "Correct. One payment per month." },
                { q: "Event on March 31, partial payment", a: "Incorrect. HFP is never prorated; request correction." },
                { q: "Firefight on June 30 and July 1 — $450?", a: "Yes. Events spanning two calendar months pay $225 for each month when certified." },
                { q: "Wounded but no HFP", a: "Ensure injury report establishes hostile fire as cause or obtain certification." },
                { q: "Commander says event doesn’t qualify", a: "Provide evidence; determinations are final unless new evidence or error." },
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
              {hfpData.references.map((ref) => (
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
            <li>Event‑based; commander certification required</li>
            <li>Full month $225; never prorated</li>
            <li>HFP replaces IDP for the month of the event</li>
            <li>Non‑taxable; appears on LES</li>
          </ul>
        </section>
      </aside>
    </div>
  );
}
