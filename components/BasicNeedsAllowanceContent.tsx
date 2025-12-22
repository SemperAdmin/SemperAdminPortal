"use client";
import { useState } from "react";

export default function BasicNeedsAllowanceContent() {
  const [tab, setTab] = useState<
    | "overview"
    | "eligibility"
    | "clock"
    | "apply"
    | "rules"
    | "videos"
    | "references"
  >("overview");

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center gap-2 overflow-x-auto [&>button]:whitespace-nowrap [&>button]:shrink-0">
          <button onClick={() => setTab("overview")} className={`rounded-md px-3 py-2 text-sm ${tab === "overview" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Overview</button>
          <button onClick={() => setTab("eligibility")} className={`rounded-md px-3 py-2 text-sm ${tab === "eligibility" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Eligibility</button>
          <button onClick={() => setTab("clock")} className={`rounded-md px-3 py-2 text-sm ${tab === "clock" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>180‑Day Clock</button>
          <button onClick={() => setTab("apply")} className={`rounded-md px-3 py-2 text-sm ${tab === "apply" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Apply via MOL</button>
          <button onClick={() => setTab("rules")} className={`rounded-md px-3 py-2 text-sm ${tab === "rules" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Policy Facts</button>
          <button onClick={() => setTab("videos")} className={`rounded-md px-3 py-2 text-sm ${tab === "videos" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Videos</button>
          <button onClick={() => setTab("references")} className={`rounded-md px-3 py-2 text-sm ${tab === "references" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>References</button>
        </div>

        {tab === "overview" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Basic Needs Allowance (BNA): Marine Corps Implementation</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">BNA is a supplemental monthly payment to help Marines and their families afford essential needs. DoD sets the program rules; the Marine Corps executes with specific screening windows and submission protocols.</p>
          </section>
        )}

        {tab === "eligibility" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Eligibility & 2025 200% Rule</h2>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Threshold</div>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Prior year GHI and current annualized GHI must both be below 200% of the Federal Poverty Guidelines for your location and household size.</p>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Initial Entry Training</div>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Eligible only after arriving at your first Permanent Duty Station (PDS).</p>
              </div>
            </div>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Active Duty Status</div>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Open to active‑duty Marines and Reserve/Guard members on active‑duty orders.</p>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DEERS Requirement</div>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">At least one qualifying dependent in DEERS and reported in MCTFS.</p>
              </div>
            </div>
            <div className="mt-3 rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
              <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Gross Household Income (GHI)</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Military Pay: basic pay, special/incentive pays, bonuses</li>
                <li>Allowances: include BAH, OHA, BAS, FSA, COLA</li>
                <li>Civilian Income: spouse or dependent income required to file a tax return</li>
              </ul>
            </div>
          </section>
        )}

        {tab === "clock" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Marine Corps 180‑Day Clock</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Monthly screening: HQMC identifies potentially eligible Marines and notifies via MOL Page 11 and S‑1</li>
              <li>Submission window: exactly 180 days from Page 11 notification to submit your package</li>
              <li>Failure to submit: ineligible until next annual screening or qualifying recertification event</li>
            </ul>
          </section>
        )}

        {tab === "apply" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Apply in MOL MyEPAR</h2>
            <div className="mt-3 space-y-4">
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Digital Process</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Access MOL and open EPAR</li>
                  <li>Create record: Pay → Basic Needs Allowance (BNA)</li>
                </ul>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Required Documentation</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Current LES</li>
                  <li>Previous year’s filed tax return and W‑2s</li>
                  <li>Recent civilian pay stubs for household income earners</li>
                </ul>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Adjudication</div>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Package routes to your O‑5 Commanding Officer (or Special Courts‑Martial Convening Authority) for certification.</p>
              </div>
            </div>
          </section>
        )}

        {tab === "rules" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Critical Policy Facts</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Taxable income: expect withholdings on BNA payments</li>
              <li>No retroactive pay: begins on the date of certified approval</li>
              <li>Recertification: reapply annually; report changes within 60 days</li>
            </ul>
          </section>
        )}

        {tab === "videos" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Semper Admin Master Class: BNA</h2>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li>
                <a
                  className="text-[var(--sa-red)] hover:underline"
                  href="https://youtu.be/-tK3Sh1xePs?si=jgOrdNFqFzIuBT70"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Basic Needs Allowance (BNA) - Eligibility Determination
                </a>
              </li>
              <li>
                <a
                  className="text-[var(--sa-red)] hover:underline"
                  href="https://youtu.be/uYnVjXMWoBs?si=lqn3cgnU8teWZrcA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Basic Needs Allowance (BNA) - Application Submission Process
                </a>
              </li>
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
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://mol.tfs.usmc.mil/mol/UserHomeEntry.do" target="_blank" rel="noopener noreferrer">Marine Online (MOL)</a></li>
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.dfas.mil/militarymembers/payentitlements/" target="_blank" rel="noopener noreferrer">DFAS Pay Entitlements</a></li>
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/134115p.PDF?ver=6kkn3I0e1Lkas_dUpX_esg%3D%3D" target="_blank" rel="noopener noreferrer">DoD Instruction 1341.15</a></li>
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.marines.mil/News/Messages/Messages-Display/Article/4271216/update-to-eligibility-for-and-administration-of-the-basic-needs-allowance-bna-f/" target="_blank" rel="noopener noreferrer">MARADMIN 369/25</a></li>
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.marines.mil/News/Messages/Messages-Display/Article/3451885/change-1-of-the-implementation-and-administration-of-the-basic-needs-allowance/" target="_blank" rel="noopener noreferrer">MARADMIN 345/23</a></li>
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.marines.mil/News/Messages/Messages-Display/Article/3252929/implementation-and-administration-of-the-basic-needs-allowance-for-active-duty/" target="_blank" rel="noopener noreferrer">MARADMIN 673/22</a></li>
            </ul>
          </section>
        )}
      </div>

      <aside className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="text-[var(--sa-red)] hover:underline" href="https://mol.tfs.usmc.mil/mol/UserHomeEntry.do" target="_blank" rel="noopener noreferrer">MOL MyEPAR</a></li>
            <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.dfas.mil/militarymembers/payentitlements/" target="_blank" rel="noopener noreferrer">DFAS Pay Entitlements</a></li>
          </ul>
        </section>
      </aside>
    </div>
  );
}
