"use client";
import { useState } from "react";

type Ref = { title: string; desc: string; url: string; type: string };
type WeightAllowance = { rank: string; withDependents: number; withoutDependents: number };
type Tab = "overview" | "weights" | "options" | "steps" | "oconus" | "troubleshooter" | "references";

const TABS: { key: Tab; label: string }[] = [
  { key: "overview", label: "Overview" },
  { key: "weights", label: "Weight Allowances" },
  { key: "options", label: "Move Options" },
  { key: "steps", label: "Steps" },
  { key: "oconus", label: "OCONUS" },
  { key: "troubleshooter", label: "Troubleshooter" },
  { key: "references", label: "References" },
];

export default function HouseholdGoodsShipmentContent({ data }: { data: { weightAllowances: WeightAllowance[]; references: Ref[] } }) {
  const [tab, setTab] = useState<Tab>("overview");

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center gap-2 overflow-x-auto [&>button]:whitespace-nowrap [&>button]:shrink-0">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`rounded-md px-3 py-2 text-sm ${tab === t.key ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What Are Household Goods?</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Your Household Goods include furniture, appliances, clothing, and personal items the Government ships during your PCS move. Your weight allowance depends on your rank and whether you have dependents. You pay for all weight exceeding your authorized allowance.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Submit Request</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">90 Days</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Before pickup date</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Peak Season</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">15 May - 31 Aug</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Book early</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Move Systems</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DPS / MilMove</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Sort Tool assigns</p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl bg-[var(--sa-navy)] p-6 text-[var(--sa-cream)]">
              <div className="flex items-center gap-2 text-xl font-bold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
                BLUF
              </div>
              <p className="mt-2 text-sm opacity-90">Submit your shipment request at least 90 days before pickup. Pro Gear ships separately from your weight allowance (2,000 lbs Marine, 500 lbs Spouse). You have 180 days from delivery to identify loss or damage and 9 months to file your claim. TSP max liability is $75,000.</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">90-Day Advance</span>
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">180 Days to Identify</span>
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">9 Months to File</span>
              </div>
            </div>
          </section>
        )}

        {tab === "weights" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Weight Allowances (JTR Table 5-37)</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Your authorized weight allowance depends on your rank and dependency status. Exceeding your weight allowance results in excess cost charges to you.</p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-zinc-600 dark:text-zinc-400">
                    <th className="py-2 pr-4">Grade</th>
                    <th className="py-2 pr-4">Without Dependents</th>
                    <th className="py-2">With Dependents</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-700 dark:text-zinc-300">
                  {data.weightAllowances.map((w) => (
                    <tr key={w.rank} className="border-t border-black/5 dark:border-white/10">
                      <td className="py-2 pr-4 font-medium">{w.rank}</td>
                      <td className="py-2 pr-4">{w.withoutDependents.toLocaleString()} lbs</td>
                      <td className="py-2">{w.withDependents.toLocaleString()} lbs</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Pro Gear Allowances</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Professional Books, Papers, and Equipment ships separately from your HHG allowance.</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li><strong>Marine:</strong> Up to 2,000 lbs (mark M-PRO)</li>
                  <li><strong>Spouse:</strong> Up to 500 lbs for employment or community support (mark S-PRO)</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">7-Day Spread Rule</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Your requested pickup date is the last day your HHG must be ready. The mover selects the actual pickup date from any of the 7 calendar days ending on your requested date. Once confirmed, the pickup date drives all other move dates.</p>
              </div>
            </div>
          </section>
        )}

        {tab === "options" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Move Options</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Government-Arranged Move</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">The Government hires a Transportation Service Provider (TSP) or HomeSafe Alliance to pack, ship, and deliver your HHG. This is the most common option.</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Full pack and unpack service included</li>
                  <li>Full replacement value protection</li>
                  <li>TSP contacts you within 3 days of award</li>
                  <li>Complete Customer Satisfaction Survey within 7 days of delivery</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Personally Procured Move (PPM)</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">You move your own HHG and receive 100% of the Government&apos;s cost to move the same weight.</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Use your GTCC for all PPM expenses</li>
                  <li>Set GTCC to PCS Mission Critical status 10 days before departure</li>
                  <li>Obtain certified empty and full weight tickets</li>
                  <li>Submit claim via MOL (DPS) or MilMove (GHC) within 45 days if you received an Advance Operating Allowance</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800 dark:border-white/15 dark:bg-white/10 dark:text-[var(--sa-cream)]">
              <div className="text-xs font-semibold">Required Counseling</div>
              <div className="mt-1 text-xs">First-time movers, separatees, retirees, and mobile home shippers must receive in-person counseling at the local DMO before submitting their application.</div>
            </div>
          </section>
        )}

        {tab === "steps" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Government-Arranged Move Steps</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 1: Create Account & Self-Counsel</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Create an account or log in at dps.move.mil. Complete self-counseling in DPS. The Sort Tool determines if you use DPS or GHC MilMove.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 2: Upload Orders & Submit Request</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Upload your PCS orders and endorsements. Submit your requested pickup date (90 days in advance when possible). Avoid the first two and last two days of any month.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 3: Pre-Move Survey</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">TSP or HomeSafe contacts you within 3 days of award with confirmed dates. Complete pre-move survey (in-person or virtual) to estimate weight and supplies.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 4: Pack-Out Day</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Be present during packing to verify inventory. Review condition codes. Mark Pro Gear as M-PRO (Marine) or S-PRO (Spouse). Note any concerns before signing.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 5: Delivery & Inspection</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Inspect all items at delivery and document any damage on the inventory form. Take photos immediately. Do not sign that everything is satisfactory if it is not.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 6: Survey & Claims</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Complete Customer Satisfaction Survey within 7 days of delivery. You have 180 days from delivery to identify lost or damaged items and 9 months to file your claim.</p>
              </div>
            </div>
          </section>
        )}

        {tab === "oconus" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">OCONUS Moves & Special Situations</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">OCONUS Moves</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">All OCONUS moves use the legacy DPS system until late 2025. Many OCONUS locations have reduced weight allowances due to housing size limits.</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li><strong>Okinawa (unaccompanied, barracks):</strong> 600 lbs unaccompanied baggage only</li>
                  <li><strong>MCAS Iwakuni (unaccompanied):</strong> 600 lbs UB only, or 10% if approved for off-base housing</li>
                  <li><strong>Embassy Duty (MCESG):</strong> 25% of full allowance or 2,500 lbs, whichever is greater</li>
                </ul>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Contact your DMO for location-specific weight restrictions.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Short Fuse Orders</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">If you receive orders with limited time before your departure date, contact your local DMO immediately. Standard timelines do not apply, but capacity limitations during peak season affect your options.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Dual Military (Member-to-Member)</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Both members maintain separate weight allowances. Coordinate with your DMO to determine how to structure your shipments.</p>
              </div>
            </div>
          </section>
        )}

        {tab === "troubleshooter" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Problems & Solutions</h2>
            <div className="mt-3 space-y-4">
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">TSP missed the confirmed pickup date</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Contact the Quality Assurance Section at your origin DMO</li>
                  <li>File an Inconvenience Claim with the TSP or HomeSafe</li>
                  <li>Document all additional expenses incurred</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Items arrived damaged or missing</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Document damage on the inventory form at delivery</li>
                  <li>You have 180 days from delivery to identify lost or damaged items</li>
                  <li>File your claim within 9 months of delivery</li>
                  <li>TSP max liability is $75,000</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Exceeded weight allowance</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>You pay for excess weight</li>
                  <li>Request a reweigh before delivery if you believe the weight is incorrect</li>
                  <li>Contact your DMO for the reweigh process</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Peak season pickup issues</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Submit your request as early as possible (90 days)</li>
                  <li>Consider a PPM for more control over your dates</li>
                  <li>Avoid the first two and last two days of any month</li>
                  <li>Late May through mid-July is the peak of peak season</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">GTCC declined during PPM</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Contact your APC at least 10 days before departure</li>
                  <li>Request PCS Mission Critical status</li>
                  <li>Request credit limit increase if needed</li>
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
              <div className="text-xs text-zinc-700 dark:text-zinc-300">855-HHG-MOVE (855-444-6683)</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">GHC / HomeSafe Issues</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">(904) 567-6033</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DPS System Help</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">(800) 462-2176</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Email</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">usmcpersonalproperty@usmc.mil</div>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key Deadlines</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Submit Request</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">90 days before pickup</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Identify Loss/Damage</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">180 days from delivery</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">File Claim</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">9 months from delivery</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">TSP Max Liability</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">$75,000</div>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Links</h3>
          <ul className="mt-3 space-y-1 text-sm">
            <li><a href="https://dps.move.mil" target="_blank" rel="noopener noreferrer" className="text-[var(--sa-red)] hover:underline">DPS Landing Page</a></li>
            <li><a href="https://www.ustranscom.mil/dp3/weightestimator.cfm" target="_blank" rel="noopener noreferrer" className="text-[var(--sa-red)] hover:underline">Weight Estimator Tool</a></li>
            <li><a href="https://www.logcom.marines.mil/Marines/Personally-Procured-Move/" target="_blank" rel="noopener noreferrer" className="text-[var(--sa-red)] hover:underline">PPM Claims Settlement</a></li>
            <li><a href="https://www.pcsmypov.com" target="_blank" rel="noopener noreferrer" className="text-[var(--sa-red)] hover:underline">POV Shipment Scheduling</a></li>
            <li><a href="https://www.ustranscom.mil/dp3/tspinformation.cfm" target="_blank" rel="noopener noreferrer" className="text-[var(--sa-red)] hover:underline">TSP Ratings Lookup</a></li>
          </ul>
        </section>
      </aside>
    </div>
  );
}
