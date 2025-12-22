"use client";
import { useState } from "react";

export default function CZTEContent() {
  const [tab, setTab] = useState<
    | "overview"
    | "eligibility"
    | "exclusion"
    | "designations"
    | "tips"
    | "references"
  >("overview");

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center gap-2 overflow-x-auto [&>button]:whitespace-nowrap [&>button]:shrink-0">
          <button onClick={() => setTab("overview")} className={`rounded-md px-3 py-2 text-sm ${tab === "overview" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Overview</button>
          <button onClick={() => setTab("eligibility")} className={`rounded-md px-3 py-2 text-sm ${tab === "eligibility" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Eligibility</button>
          <button onClick={() => setTab("exclusion")} className={`rounded-md px-3 py-2 text-sm ${tab === "exclusion" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Exclusion Amount</button>
          <button onClick={() => setTab("designations")} className={`rounded-md px-3 py-2 text-sm ${tab === "designations" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Designations</button>
          <button onClick={() => setTab("tips")} className={`rounded-md px-3 py-2 text-sm ${tab === "tips" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Critical Rules & Tips</button>
          <button onClick={() => setTab("references")} className={`rounded-md px-3 py-2 text-sm ${tab === "references" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>References</button>
        </div>

        {tab === "overview" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Combat Zone Tax Exclusion (CZTE)</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">The Combat Zone Tax Exclusion is a provision that recognizes the extraordinary sacrifices of Service members. If you serve in a designated combat zone, all or a portion of your military pay is excluded from federal income tax, often resulting in an immediate increase in take‑home pay.</p>
          </section>
        )}

        {tab === "eligibility" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Who Qualifies</h2>
            <div className="mt-3 space-y-4">
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">One‑Day Rule</div>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">If you serve in a designated combat zone for even one day (or one hour) in a calendar month, your entire month’s qualifying pay is tax‑exempt.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                  <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Combat Zone (CZ)</div>
                  <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Physically present in an area designated by Executive Order.</p>
                </div>
                <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                  <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Qualified Hazardous Duty Area (QHDA)</div>
                  <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Serving in an area designated by Congress that also qualifies you for Hostile Fire Pay or Imminent Danger Pay.</p>
                </div>
                <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                  <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Direct Support</div>
                  <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Serving outside a CZ or QHDA but directly supporting operations within one, while receiving Hostile Fire Pay or Imminent Danger Pay.</p>
                </div>
                <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                  <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Hospitalized</div>
                  <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">If hospitalized due to wounds or injury incurred in a CZ or QHDA, pay remains tax‑excluded for up to two years after combat activities end.</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {tab === "exclusion" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">How Much Pay Is Excluded</h2>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Enlisted & Warrant Officers</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>100% of military compensation excluded from federal income tax</li>
                  <li>Includes basic pay, special pays, and eligible bonuses earned during the month</li>
                </ul>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Commissioned Officers</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Exclusion capped at the highest enlisted basic pay rate plus HFP/IDP received that month</li>
                  <li>For 2025, the cap is approximately $10,983 per month</li>
                </ul>
              </div>
            </div>
            <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800 dark:border-white/15 dark:bg-white/10 dark:text-[var(--sa-cream)]">
              <div className="text-xs font-semibold">FICA Still Applies</div>
              <div className="mt-1 text-xs">Social Security and Medicare taxes on basic pay are still collected.</div>
            </div>
          </section>
        )}

        {tab === "designations" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Designated Areas (2025)</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Locations are added and removed based on global threat levels. As of May 2025, examples include:</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Direct Support Areas</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Israel</li>
                  <li>Gaza Strip (Territorial Seas/Airspace)</li>
                  <li>Jordan</li>
                  <li>Djibouti</li>
                  <li>Kenya (Manda Bay)</li>
                </ul>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Combat Zones</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Afghanistan</li>
                  <li>Iraq</li>
                  <li>Syria</li>
                  <li>Arabian Peninsula (including Persian Gulf and Red Sea)</li>
                </ul>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">QHDAs</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Kosovo</li>
                  <li>Egypt (Sinai Peninsula)</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "tips" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Critical Rules & Pro‑Tips</h2>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Automatic Application: Finance usually stops tax withholding once your unit is properly coded in theater; verify your LES.</li>
              <li>Leave/TAD Impact: If you take leave outside the zone, pay remains tax‑exempt as long as absence is not the entire calendar month.</li>
              <li>TSP Supercharging: In CZTE, TSP limits increase. You can contribute up to the Annual Addition Limit ($70,000 for 2025) rather than the standard $23,500.</li>
              <li>Tax Filing Extension: The IRS grants an automatic 180‑day extension to file and pay after leaving the combat zone.</li>
            </ul>
          </section>
        )}

        

        {tab === "references" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">References</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.irs.gov/publications/p3" target="_blank" rel="noopener noreferrer">IRS Publication 3: Armed Forces’ Tax Guide</a></li>
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.irs.gov/newsroom/combat-zones" target="_blank" rel="noopener noreferrer">IRS Combat Zones</a></li>
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.dfas.mil/militarymembers/payentitlements/" target="_blank" rel="noopener noreferrer">DFAS Pay Entitlements</a></li>
            </ul>
          </section>
        )}
      </div>

      <aside className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.irs.gov/publications/p3" target="_blank" rel="noopener noreferrer">IRS Publication 3</a></li>
            <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.irs.gov/newsroom/combat-zones" target="_blank" rel="noopener noreferrer">IRS Combat Zones</a></li>
            <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.dfas.mil/militarymembers/payentitlements/" target="_blank" rel="noopener noreferrer">DFAS Pay Entitlements</a></li>
          </ul>
        </section>
      </aside>
    </div>
  );
}
