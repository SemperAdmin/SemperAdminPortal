"use client";
import { useState } from "react";

type Ref = { title: string; desc: string; url: string; type: string };

export default function PCSStorageContent({ data }: { data: { references: Ref[] } }) {
  const [tab, setTab] = useState<"overview" | "sit" | "nts" | "pov" | "steps" | "special" | "troubleshooter" | "references">("overview");

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center gap-2 overflow-x-auto [&>button]:whitespace-nowrap [&>button]:shrink-0">
          <button onClick={() => setTab("overview")} className={`rounded-md px-3 py-2 text-sm ${tab === "overview" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Overview</button>
          <button onClick={() => setTab("sit")} className={`rounded-md px-3 py-2 text-sm ${tab === "sit" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>SIT</button>
          <button onClick={() => setTab("nts")} className={`rounded-md px-3 py-2 text-sm ${tab === "nts" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>NTS</button>
          <button onClick={() => setTab("pov")} className={`rounded-md px-3 py-2 text-sm ${tab === "pov" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>POV Storage</button>
          <button onClick={() => setTab("steps")} className={`rounded-md px-3 py-2 text-sm ${tab === "steps" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Steps</button>
          <button onClick={() => setTab("special")} className={`rounded-md px-3 py-2 text-sm ${tab === "special" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Special</button>
          <button onClick={() => setTab("troubleshooter")} className={`rounded-md px-3 py-2 text-sm ${tab === "troubleshooter" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Troubleshooter</button>
          <button onClick={() => setTab("references")} className={`rounded-md px-3 py-2 text-sm ${tab === "references" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>References</button>
        </div>

        {tab === "overview" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What Is HHG Storage?</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">The government provides storage for your household goods when you cannot immediately receive or transport your belongings during a PCS move. Two primary types exist: Storage-in-Transit (SIT) for short-term needs and Non-Temporary Storage (NTS) for long-term situations.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">SIT</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">90 Days</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Extendable to 180</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">NTS</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Long-Term</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">OCONUS/deployment</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">PPM Storage</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">90 Days</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Self-arranged</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">POV Storage</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Tour Length</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">OCONUS tours</p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl bg-[var(--sa-navy)] p-6 text-[var(--sa-cream)]">
              <div className="flex items-center gap-2 text-xl font-bold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
                BLUF
              </div>
              <p className="mt-2 text-sm opacity-90">Storage entitlements depend on your move type (CONUS/OCONUS), dependent status, and specific situation. SIT is for short-term needs (housing not ready); NTS is for long-term situations (overseas tours). Request extensions BEFORE expiration or storage converts to your expense.</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">Request Extensions Early</span>
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">Weight Limits Apply</span>
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">Keep Contact Info Current</span>
              </div>
            </div>
            <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800 dark:border-white/15 dark:bg-white/10 dark:text-[var(--sa-cream)]">
              <div className="text-xs font-semibold">Weight Limits Apply</div>
              <div className="mt-1 text-xs">Combined weight of all shipments (HHG in transit, SIT, and NTS) cannot exceed your authorized weight allowance. If you exceed your limit, you pay all excess costs.</div>
            </div>
          </section>
        )}

        {tab === "sit" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Storage-in-Transit (SIT)</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">SIT is short-term storage included as part of your HHG transportation. Use SIT when you are in transit to your new duty station or waiting for housing. Items can be stored at origin, destination, or in transit.</p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Time Limits</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li><strong>Initial:</strong> 90 days at government expense</li>
                  <li><strong>Extension:</strong> Up to additional 90 days (180 max)</li>
                  <li><strong>After 180 days:</strong> Your expense unless new orders</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Where Items Are Stored</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Origin (old duty station)</li>
                  <li>Destination (new duty station)</li>
                  <li>In transit between locations</li>
                  <li>Combination of all three</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 rounded-xl border border-green-200 bg-green-50 p-4 dark:border-white/15 dark:bg-white/10">
              <h3 className="font-bold text-green-800 dark:text-green-400">Extension Approval Circumstances</h3>
              <p className="mt-1 text-xs text-green-700 dark:text-zinc-300">Submit DD Form 1857 with supporting documentation BEFORE the 90-day period expires:</p>
              <ul className="mt-2 grid gap-1 sm:grid-cols-2 text-xs text-green-800 dark:text-zinc-300">
                <li>• Serious illness of member or dependent</li>
                <li>• Death of a dependent</li>
                <li>• Impending assignment to government housing</li>
                <li>• TDY after arrival at new PDS</li>
                <li>• Non-availability of suitable housing</li>
                <li>• Acts of God (natural disasters)</li>
              </ul>
            </div>
            <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 dark:border-white/15 dark:bg-white/10">
              <h3 className="font-bold text-red-800 dark:text-red-400">When SIT is NOT Authorized</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-red-800 dark:text-zinc-300">
                <li>Short distance (intra-city) moves within same PDS limits</li>
                <li>TDY moves</li>
                <li>Moves to/from government quarters when no delay exists</li>
                <li>Member elects to have home built while other housing is available</li>
                <li>Member accepts privatized housing too small for their HHG</li>
              </ul>
            </div>
          </section>
        )}

        {tab === "nts" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Non-Temporary Storage (NTS)</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">NTS is long-term storage used when shipping your entire HHG is not practical or not in the government&apos;s best interest. NTS includes packing, crating, transportation to storage, storage itself, and eventual delivery. NTS must be in a facility near the origin location.</p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-green-200 bg-green-50 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-green-800 dark:text-green-400">When NTS IS Authorized</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-green-800 dark:text-zinc-300">
                  <li>PCS from CONUS to OCONUS</li>
                  <li>PCS OCONUS to OCONUS</li>
                  <li>Awaiting Dependent Entry Approval (DEA)</li>
                  <li>Required to vacate government quarters (separation/retirement)</li>
                  <li>Housing authorizes because quarters cannot accommodate all HHG</li>
                  <li>Ordered to remote CONUS location</li>
                </ul>
              </div>
              <div className="rounded-xl border border-red-200 bg-red-50 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-red-800 dark:text-red-400">When NTS is NOT Authorized</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-red-800 dark:text-zinc-300">
                  <li>Requested for member&apos;s convenience</li>
                  <li>Member accepts housing too small to accommodate property</li>
                  <li>Member vacates government quarters for personal reasons</li>
                  <li>Return of dependents from overseas locations</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
              <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">NTS Time Limits</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-black/10 dark:border-white/15">
                      <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Situation</th>
                      <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">NTS Duration</th>
                    </tr>
                  </thead>
                  <tbody className="text-zinc-700 dark:text-zinc-300">
                    <tr className="border-b border-black/5 dark:border-white/10">
                      <td className="py-2 pr-4">CONUS to OCONUS PCS</td>
                      <td className="py-2">Until report date of next CONUS PCS</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/10">
                      <td className="py-2 pr-4">OCONUS to OCONUS PCS</td>
                      <td className="py-2">Until report date of next CONUS PCS</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/10">
                      <td className="py-2 pr-4">PCS with TDY en route</td>
                      <td className="py-2">Until report date at new command</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/10">
                      <td className="py-2 pr-4">Separation</td>
                      <td className="py-2 font-medium">180 days from separation date</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Retirement</td>
                      <td className="py-2 font-medium">1 year from retirement date</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-white/15 dark:bg-white/10">
              <p className="text-xs text-blue-800 dark:text-[var(--sa-cream)]"><strong>Conversions:</strong> SIT can convert to NTS if you receive new orders while in SIT (request through PPSO). NTS converts to SIT when you receive orders authorizing shipment - you are responsible for storage beyond 180 days after conversion.</p>
            </div>
          </section>
        )}

        {tab === "pov" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">POV Storage</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">When ordered to an OCONUS location where your vehicle cannot be shipped, you store it at a government-contracted facility. Only one POV owned or leased by you or your dependent for personal use qualifies for government-funded storage.</p>
            <div className="mt-4 rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
              <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">How to Arrange POV Storage</h3>
              <div className="mt-3 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">1</div>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">Contact <strong>PCSmyPOV.com</strong> or call <strong>855-389-9499</strong></p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">2</div>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">Schedule an appointment at a Vehicle Processing Center (VPC)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">3</div>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">Prepare your vehicle: no more than 1/4 tank fuel, brakes operational, no unresolved recalls</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">4</div>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">Complete <strong>DD Form 788</strong> (Private Vehicle Shipping Document) with VPC inspector</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">5</div>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">Retain all copies for pickup and potential claims</p>
                </div>
              </div>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Duration</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">POV remains in storage during your entire OCONUS tour. When removed, it cannot be returned at government expense without new PCS orders.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Entitlement</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Only ONE POV qualifies. Must be owned or leased by you or your dependent for personal use.</p>
              </div>
            </div>
            <div className="mt-4 rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
              <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">PPM Storage</h3>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">When conducting a Personally Procured Move, you can arrange your own storage at a commercial facility. You receive reimbursement up to the Government Constructive Cost (GCC).</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                <li><strong>Time Limit:</strong> 90 days for military members</li>
                <li>Pre-approval from Transportation Office required BEFORE placing items in storage</li>
                <li>Retain weight tickets, storage contracts, and paid receipts</li>
                <li>Submit documentation with your PPM claim</li>
              </ul>
            </div>
          </section>
        )}

        {tab === "steps" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">How to Arrange Storage</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">1</div>
                  <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Receive Counseling</h3>
                </div>
                <p className="mt-2 pl-11 text-sm text-zinc-700 dark:text-zinc-300">Contact your local Distribution Management Office (DMO) or Personal Property Office (PPO). Discuss your storage needs based on your orders.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">2</div>
                  <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Submit Documentation</h3>
                </div>
                <p className="mt-2 pl-11 text-sm text-zinc-700 dark:text-zinc-300">Complete DD Form 1299 (Application for Shipment and/or Storage of Personal Property) through DPS or MilMove. Your counselor signs the form after reviewing your entitlements.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">3</div>
                  <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Storage is Arranged</h3>
                </div>
                <p className="mt-2 pl-11 text-sm text-zinc-700 dark:text-zinc-300">For government-arranged moves, the TSP handles SIT and NTS arrangements. For PPM, you arrange commercial storage and retain receipts.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">4</div>
                  <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Track Your Shipment</h3>
                </div>
                <p className="mt-2 pl-11 text-sm text-zinc-700 dark:text-zinc-300">Monitor storage status through DPS or MilMove. You receive notifications at <strong>45 and 30 days</strong> before SIT expiration via email.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--sa-red)] text-sm font-bold text-white">5</div>
                  <h3 className="font-bold text-[var(--sa-red)] dark:text-[var(--sa-cream)]">Request Extension (If Needed)</h3>
                </div>
                <p className="mt-2 pl-11 text-sm text-zinc-700 dark:text-zinc-300">Submit written request with <strong>DD Form 1857</strong> and supporting documents to your origin or destination PPSO BEFORE the storage period expires.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">6</div>
                  <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Arrange Delivery</h3>
                </div>
                <p className="mt-2 pl-11 text-sm text-zinc-700 dark:text-zinc-300">Provide delivery instructions to your PPSO. For NTS, keep the original PPO informed of address changes and provide new orders for subsequent PCS moves.</p>
              </div>
            </div>
          </section>
        )}

        {tab === "special" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Special Situations</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Deployment While HHG Are in SIT</h3>
                <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Submit an extension request BEFORE deployment</li>
                  <li>Provide a copy of deployment orders to the PPSO</li>
                  <li>Consider converting SIT to NTS at origin (preferred method)</li>
                </ol>
                <p className="mt-2 text-xs text-red-600 dark:text-red-400">Failure to request an extension before deployment may result in storage charges at your expense.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">New Orders While in SIT</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>SIT continues until the effective date of the new orders</li>
                  <li>Request an extension using the new orders</li>
                  <li>The PPSO uses the new orders to approve or deny the extension</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Cancelled Orders While in SIT</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>SIT continues under original orders until cancellation effective date</li>
                  <li>Request an extension - PPSO approves on a case-by-case basis</li>
                  <li>If you remain at original PDS, coordinate return shipment using original and cancelled orders</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Partial Withdrawals</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>You are authorized ONE partial lot withdrawal from SIT or NTS</li>
                  <li>Request partial withdrawals at the time of counseling</li>
                  <li>A second withdrawal may be authorized for unforeseen circumstances causing hardship</li>
                  <li>Provide inventory numbers in your written request</li>
                  <li>Additional withdrawals may result in excess cost charges</li>
                </ul>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800 dark:border-white/15 dark:bg-white/10 dark:text-[var(--sa-cream)]">
                <div className="text-xs font-semibold">Hawaii Firearms</div>
                <div className="mt-1 text-xs">If moving to Hawaii with firearms: (1) Register firearms with the Honolulu Police Department. (2) If residing in military housing, also register with JBPHH Security.</div>
              </div>
            </div>
          </section>
        )}

        {tab === "troubleshooter" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Problems & Solutions</h2>
            <div className="mt-3 space-y-4">
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">SIT expired and storage converted to member expense</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Submit extension requests BEFORE expiration</li>
                  <li>Monitor your email for 45-day and 30-day notices</li>
                  <li>Update contact information in DPS</li>
                  <li>If you miss the deadline, contact your PPSO immediately to discuss options</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Cannot contact PPSO about storage extension</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>If deployed, have your command contact the PPSO on your behalf</li>
                  <li>Email requests are accepted</li>
                  <li>Include deployment orders and a power of attorney if needed</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">NTS lot cannot be located</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Contact USMC Personal Property at 855-HHG-MOVE</li>
                  <li>Provide your name, EDIPI, and lot number from DD Form 1164</li>
                  <li>The PPSO maintains records of storage locations</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Excess cost bill received for storage</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Review your weight tickets and storage dates</li>
                  <li>If you exceeded authorized SIT/NTS without approval, you owe the costs</li>
                  <li>Submit an appeal with documentation if you believe charges are incorrect</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Items damaged while in storage</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>File a claim with the Military Claims Office</li>
                  <li>Document damage with photos</li>
                  <li>Provide inventory sheet showing item condition at time of storage</li>
                  <li>Claims must be filed within <strong>75 days</strong> of delivery for full replacement value</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "references" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">References</h2>
            <div className="mt-4 grid grid-cols-1 gap-4">
              {data.references.map((ref) => (
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
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key Contacts</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">USMC Personal Property</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">855-HHG-MOVE (444-6683)</div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400">usmcpersonalproperty@usmc.mil</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DPS Help Desk</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">833-MIL-MOVE (645-6683)</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">POV Shipment/Storage</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">855-389-9499</div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400">PCSmyPOV.com</div>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key Deadlines</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="rounded-md border border-red-200 bg-red-50 p-3 dark:border-white/15 dark:bg-white/10">
              <div className="font-medium text-red-700 dark:text-[var(--sa-cream)]">90 Days</div>
              <div className="text-xs text-red-600 dark:text-zinc-300">Initial SIT at government expense</div>
            </li>
            <li className="rounded-md border border-amber-200 bg-amber-50 p-3 dark:border-white/15 dark:bg-white/10">
              <div className="font-medium text-amber-700 dark:text-[var(--sa-cream)]">180 Days Max</div>
              <div className="text-xs text-amber-600 dark:text-zinc-300">Maximum SIT with extension</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">75 Days</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">Damage claims after delivery</div>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key Forms</h3>
          <ul className="mt-3 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li><strong>DD 1299</strong> - Application for Shipment/Storage</li>
            <li><strong>DD 1857</strong> - SIT Extension Request</li>
            <li><strong>DD 1164</strong> - NTS Service Order</li>
            <li><strong>DD 788</strong> - POV Shipping Document</li>
            <li><strong>DD 1797</strong> - Counseling Checklist</li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Links</h3>
          <ul className="mt-3 space-y-1 text-sm">
            <li><a href="https://www.move.mil" target="_blank" rel="noopener noreferrer" className="text-[var(--sa-red)] underline hover:no-underline">MilMove Portal</a></li>
            <li><a href="https://www.pcsmypov.com" target="_blank" rel="noopener noreferrer" className="text-[var(--sa-red)] underline hover:no-underline">PCSmyPOV.com</a></li>
            <li><a href="https://www.ustranscom.mil/dp3/weightestimator.cfm" target="_blank" rel="noopener noreferrer" className="text-[var(--sa-red)] underline hover:no-underline">Weight Estimator</a></li>
          </ul>
        </section>
      </aside>
    </div>
  );
}
