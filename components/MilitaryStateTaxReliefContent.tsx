"use client";
import { useState } from "react";

export default function MilitaryStateTaxReliefContent() {
  const [tab, setTab] = useState<
    | "overview"
    | "activeDuty"
    | "retirees"
    | "property"
    | "msrra"
    | "videos"
    | "references"
  >("overview");

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center gap-2 overflow-x-auto [&>button]:whitespace-nowrap [&>button]:shrink-0">
          <button onClick={() => setTab("overview")} className={`rounded-md px-3 py-2 text-sm ${tab === "overview" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Overview</button>
          <button onClick={() => setTab("activeDuty")} className={`rounded-md px-3 py-2 text-sm ${tab === "activeDuty" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Active Duty State Income Tax</button>
          <button onClick={() => setTab("retirees")} className={`rounded-md px-3 py-2 text-sm ${tab === "retirees" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Retiree Tax Relief</button>
          <button onClick={() => setTab("property")} className={`rounded-md px-3 py-2 text-sm ${tab === "property" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Property Tax Relief</button>
          <button onClick={() => setTab("msrra")} className={`rounded-md px-3 py-2 text-sm ${tab === "msrra" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>MSRRA</button>
          <button onClick={() => setTab("videos")} className={`rounded-md px-3 py-2 text-sm ${tab === "videos" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Videos</button>
          <button onClick={() => setTab("references")} className={`rounded-md px-3 py-2 text-sm ${tab === "references" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>References</button>
        </div>

        {tab === "overview" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Military State Tax Relief (2025–2026)</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">State tax treatment varies widely. Understanding domicile rules, military retiree exemptions, disabled veteran property relief, and MSRRA can massively impact take‑home pay and retirement income.</p>
          </section>
        )}

        {tab === "activeDuty" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Active Duty State Income Tax</h2>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">No‑Tax States</div>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Legal residence in these states means $0 state income tax on your pay, regardless of duty station:</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Alaska</li>
                  <li>Florida</li>
                  <li>Nevada</li>
                  <li>New Hampshire (as of 2025)</li>
                  <li>South Dakota</li>
                  <li>Tennessee</li>
                  <li>Texas</li>
                  <li>Washington</li>
                  <li>Wyoming</li>
                </ul>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Stationed‑Outside‑State Rule</div>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Some states only tax military pay if you are physically stationed inside the state (examples include New York, Connecticut, and Idaho).</p>
              </div>
            </div>
            <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800 dark:border-white/15 dark:bg-white/10 dark:text-[var(--sa-cream)]">
              <div className="text-xs font-semibold">Combat Zone Exception</div>
              <div className="mt-1 text-xs">States typically honor federal CZTE; if excluded on your W‑2, it’s usually excluded for state tax.</div>
            </div>
          </section>
        )}

        {tab === "retirees" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Military Retiree Tax Relief (2025–2026)</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">More than 30 states now fully exempt military retirement pay. Recent changes provide significant savings.</p>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">New for 2025</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>South Carolina: 100% exemption on military retirement pay</li>
                  <li>New Hampshire: Eliminated remaining income taxes; now a no‑tax haven</li>
                </ul>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Tiered/Partial Exemptions</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Virginia: $40,000 exemption in 2025 and beyond</li>
                  <li>Maryland: First $12,500 exempt; increases to $20,000 at age 55</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "property" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Property Tax Relief for Disabled Veterans</h2>
            <div className="mt-3 space-y-4">
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Full Exemption (100% Disability)</div>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">States such as Texas, Florida, Oklahoma, and Alabama offer a 100% property tax exemption for veterans with a 100% VA disability rating.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                  <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">New for 2026</div>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                    <li>Arizona: Full property tax exemption begins in 2026</li>
                    <li>Indiana: Homestead credit revamp provides deeper relief</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {tab === "msrra" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Military Spouse Residency Relief Act (MSRRA)</h2>
            <div className="mt-3 space-y-4">
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">The Triple Option</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Use the Service member’s legal residence</li>
                  <li>Use the spouse’s legal residence</li>
                  <li>Use the state of the Service member’s permanent duty station</li>
                </ul>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Why It Matters</div>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Example: Spouse works in California, Marine’s domicile is Texas — spouse can elect Texas and pay $0 CA income tax.</p>
              </div>
            </div>
          </section>
        )}

        {tab === "videos" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Semper Admin Master Class: State Taxes</h2>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li>How to Change Your State of Legal Residence (Legal Way)</li>
              <li>Top 5 Best States to Retire in 2025</li>
              <li>Military Spouse Tax Secrets: The MSRRA Update</li>
            </ul>
            <div className="mt-3 text-sm">
              <a href="/videos" className="text-[var(--sa-red)] hover:underline">Explore more videos</a>
            </div>
          </section>
        )}

        {tab === "references" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">References</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.dfas.mil/militarymembers/payentitlements/" target="_blank" rel="noopener noreferrer">DFAS Pay Entitlements</a></li>
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.irs.gov/publications/p3" target="_blank" rel="noopener noreferrer">IRS Publication 3: Armed Forces’ Tax Guide</a></li>
            </ul>
          </section>
        )}
      </div>

      <aside className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.dfas.mil/militarymembers/payentitlements/" target="_blank" rel="noopener noreferrer">DFAS Pay Entitlements</a></li>
            <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.irs.gov/publications/p3" target="_blank" rel="noopener noreferrer">IRS Publication 3</a></li>
          </ul>
        </section>
      </aside>
    </div>
  );
}

