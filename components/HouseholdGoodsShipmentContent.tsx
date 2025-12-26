"use client";
import { useState } from "react";

type Ref = { title: string; desc: string; url: string; type: string };
type WeightAllowance = { rank: string; withDependents: number; withoutDependents: number };

export default function HouseholdGoodsShipmentContent({ data }: { data: { weightAllowances: WeightAllowance[]; references: Ref[] } }) {
  const [tab, setTab] = useState<"overview" | "weights" | "documents" | "steps" | "timeline" | "troubleshooter" | "references">("overview");

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center gap-2 overflow-x-auto [&>button]:whitespace-nowrap [&>button]:shrink-0">
          <button onClick={() => setTab("overview")} className={`rounded-md px-3 py-2 text-sm ${tab === "overview" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Overview</button>
          <button onClick={() => setTab("weights")} className={`rounded-md px-3 py-2 text-sm ${tab === "weights" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Weight Allowances</button>
          <button onClick={() => setTab("documents")} className={`rounded-md px-3 py-2 text-sm ${tab === "documents" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Documents</button>
          <button onClick={() => setTab("steps")} className={`rounded-md px-3 py-2 text-sm ${tab === "steps" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Steps</button>
          <button onClick={() => setTab("timeline")} className={`rounded-md px-3 py-2 text-sm ${tab === "timeline" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Timeline</button>
          <button onClick={() => setTab("troubleshooter")} className={`rounded-md px-3 py-2 text-sm ${tab === "troubleshooter" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Troubleshooter</button>
          <button onClick={() => setTab("references")} className={`rounded-md px-3 py-2 text-sm ${tab === "references" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>References</button>
        </div>

        {tab === "overview" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What Is HHG Shipment?</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Household Goods (HHG) shipment is a government-arranged service that packs and transports your personal property from your old duty station to your new duty station. The government contracts with moving companies to handle your belongings.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Benefit</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Full Pack</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Movers pack everything</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Benefit</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Insurance</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Full replacement value</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Benefit</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">No Cost</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Government funded</p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl bg-[var(--sa-navy)] p-6 text-[var(--sa-cream)]">
              <div className="flex items-center gap-2 text-xl font-bold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
                BLUF
              </div>
              <p className="mt-2 text-sm opacity-90">Schedule your HHG shipment at least 45 days before your desired pickup date. Document the condition of all items before packing. Report damage within 75 days of delivery to file a claim.</p>
              <div className="mt-4 flex gap-3 text-sm">
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">45-Day Advance</span>
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">Document Everything</span>
              </div>
            </div>
          </section>
        )}

        {tab === "weights" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Weight Allowances by Rank</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Your authorized weight allowance depends on your rank and dependency status. Exceeding your weight allowance results in excess cost charges to you.</p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-zinc-600 dark:text-zinc-400">
                    <th className="py-2 pr-4">Pay Grade</th>
                    <th className="py-2 pr-4">With Dependents (lbs)</th>
                    <th className="py-2">Without Dependents (lbs)</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-700 dark:text-zinc-300">
                  {data.weightAllowances.map((w) => (
                    <tr key={w.rank} className="border-t border-black/5 dark:border-white/10">
                      <td className="py-2 pr-4 font-medium">{w.rank}</td>
                      <td className="py-2 pr-4">{w.withDependents.toLocaleString()}</td>
                      <td className="py-2">{w.withoutDependents.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800 dark:border-white/15 dark:bg-white/10 dark:text-[var(--sa-cream)]">
              <div className="text-xs font-semibold">Weight Allowance Note</div>
              <div className="mt-1 text-xs">Professional Books, Papers, and Equipment (PBP&E) up to 2,000 lbs for officers and 500 lbs for enlisted is in addition to HHG allowance.</div>
            </div>
          </section>
        )}

        {tab === "documents" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Required Documents</h2>
            <div className="mt-3 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">To Schedule Shipment</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Copy of PCS orders</li>
                  <li>DD Form 1299 (Application for Shipment)</li>
                  <li>Government ID</li>
                  <li>POA if spouse is shipping</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">At Pickup</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Inventory sheet (review carefully)</li>
                  <li>High-value inventory form</li>
                  <li>Pre-move photos/videos</li>
                  <li>Sign pickup documents</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">At Delivery</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Check inventory against original</li>
                  <li>Note all damage on delivery form</li>
                  <li>Take photos of damage immediately</li>
                  <li>Sign delivery documents</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">For Claims</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>DD Form 1840/1840R (Loss/Damage)</li>
                  <li>Photos of damage</li>
                  <li>Repair estimates</li>
                  <li>Purchase receipts (if available)</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "steps" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">HHG Shipment Process</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 1: Attend Transportation Brief</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Visit the Personal Property Office (PPO/TMO). Bring your orders. Learn about weight allowances, prohibited items, and your rights.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 2: Schedule in Move.mil</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Create an account at move.mil. Enter your move details, upload orders, and request pickup dates. The system will assign a Transportation Service Provider (TSP).</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 3: Pre-Move Preparation</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Photograph/video all belongings. Create a high-value inventory. Separate items not being shipped. Dispose of hazardous materials.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 4: Pack-Out Day</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Be present during packing. Watch inventory process. Review condition codes on inventory. Note any concerns before signing.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 5: Delivery</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Be present at delivery. Check items against inventory. Note all damage on delivery documents. Do not sign that everything is satisfactory if it is not.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 6: File Claims (if needed)</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">File claims within 75 days of delivery through move.mil. Document all damage with photos. Keep repair estimates and receipts.</p>
              </div>
            </div>
          </section>
        )}

        {tab === "timeline" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">HHG Timeline</h2>
            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-16 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-[var(--sa-cream)]">45+ Days</div>
                <div>
                  <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Schedule Shipment</div>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">Book through move.mil, especially during peak season (May-Aug)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-16 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-[var(--sa-cream)]">7 Days</div>
                <div>
                  <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Pre-Move Survey</div>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">TSP may conduct survey to estimate weight and supplies needed</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-16 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-[var(--sa-cream)]">1-2 Days</div>
                <div>
                  <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Pack-Out</div>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">Movers pack and load your belongings (may take 1-3 days for large shipments)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-16 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-[var(--sa-cream)]">In Transit</div>
                <div>
                  <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Shipment in Transit</div>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">CONUS: 1-3 weeks; OCONUS: 4-12 weeks depending on location</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-16 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-[var(--sa-cream)]">Delivery</div>
                <div>
                  <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Receive Shipment</div>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">Inspect all items, note damage, sign delivery paperwork</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-16 shrink-0 items-center justify-center rounded-full bg-[var(--sa-red)] text-xs font-bold text-[var(--sa-cream)]">75 Days</div>
                <div>
                  <div className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Claims Deadline</div>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">File all damage/loss claims within 75 days of delivery</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {tab === "troubleshooter" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Problems & Solutions</h2>
            <div className="mt-3 space-y-4">
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Exceeded weight allowance</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Review the weight tickets for accuracy</li>
                  <li>Request reweigh if you believe there&apos;s an error</li>
                  <li>Consider PPM for portion of goods to offset</li>
                  <li>You are responsible for excess weight charges</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Items damaged during move</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Note damage on delivery form before signing</li>
                  <li>Take photos immediately</li>
                  <li>File claim within 75 days through move.mil</li>
                  <li>Keep damaged items until claim is resolved</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Missing items</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Verify against original inventory</li>
                  <li>Contact TSP immediately</li>
                  <li>File loss claim through move.mil</li>
                  <li>Provide photos and proof of ownership if available</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Shipment delayed</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Contact TSP for estimated delivery date</li>
                  <li>Request inconvenience claim if significantly delayed</li>
                  <li>Document additional expenses incurred</li>
                  <li>Contact PPO/TMO for assistance</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">No dates available during peak season</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Schedule as early as possible</li>
                  <li>Consider flexible dates</li>
                  <li>Look at partial PPM option</li>
                  <li>Contact PPO for alternative solutions</li>
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
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Facts</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Scheduling Portal</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">move.mil</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Claims Deadline</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">75 days from delivery</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Peak Season</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">May through August</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Full Replacement</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">$6.00 per pound minimum</div>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Prohibited Items</h3>
          <ul className="mt-3 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>Hazardous materials</li>
            <li>Ammunition and explosives</li>
            <li>Perishable food</li>
            <li>Propane tanks</li>
            <li>Gasoline/fuel</li>
            <li>Aerosol cans</li>
          </ul>
        </section>
      </aside>
    </div>
  );
}
