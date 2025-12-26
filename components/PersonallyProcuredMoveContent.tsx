"use client";
import { useState } from "react";

type Ref = { title: string; desc: string; url: string; type: string };

export default function PersonallyProcuredMoveContent({ data }: { data: { references: Ref[] } }) {
  const [tab, setTab] = useState<"overview" | "expenses" | "weighttickets" | "documents" | "steps" | "claim" | "troubleshooter" | "references">("overview");

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center gap-2 overflow-x-auto [&>button]:whitespace-nowrap [&>button]:shrink-0">
          <button onClick={() => setTab("overview")} className={`rounded-md px-3 py-2 text-sm ${tab === "overview" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Overview</button>
          <button onClick={() => setTab("expenses")} className={`rounded-md px-3 py-2 text-sm ${tab === "expenses" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Expenses</button>
          <button onClick={() => setTab("weighttickets")} className={`rounded-md px-3 py-2 text-sm ${tab === "weighttickets" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Weight Tickets</button>
          <button onClick={() => setTab("documents")} className={`rounded-md px-3 py-2 text-sm ${tab === "documents" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Documents</button>
          <button onClick={() => setTab("steps")} className={`rounded-md px-3 py-2 text-sm ${tab === "steps" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Steps</button>
          <button onClick={() => setTab("claim")} className={`rounded-md px-3 py-2 text-sm ${tab === "claim" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Claim</button>
          <button onClick={() => setTab("troubleshooter")} className={`rounded-md px-3 py-2 text-sm ${tab === "troubleshooter" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Troubleshooter</button>
          <button onClick={() => setTab("references")} className={`rounded-md px-3 py-2 text-sm ${tab === "references" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>References</button>
        </div>

        {tab === "overview" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What Is a PPM (Personally Procured Move)?</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">A Personally Procured Move (PPM), formerly called DITY (Do-It-Yourself) move, allows you to move your household goods yourself and receive an incentive payment based on the government&apos;s cost to move that weight. You can do a full PPM or a partial PPM in combination with a government HHG shipment.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Incentive</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">100% GCC</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Government Constructed Cost paid to you</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Tax Rate</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">22%</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Federal withholding on incentive</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Advance</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">60% AOA</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Advance Operating Allowance available</p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl bg-[var(--sa-navy)] p-6 text-[var(--sa-cream)]">
              <div className="flex items-center gap-2 text-xl font-bold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
                BLUF
              </div>
              <p className="mt-2 text-sm opacity-90">Get certified weight tickets before AND after loading. Keep ALL receipts for authorized expenses. Submit your claim within 30 days of delivery. PPM incentive is 100% of the Government Constructed Cost (GCC) - taxed at 22% federal withholding. You profit if your actual costs are less than the GCC.</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">30-Day Deadline</span>
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">Weight Tickets Required</span>
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">22% Tax</span>
              </div>
            </div>
            <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800 dark:border-white/15 dark:bg-white/10 dark:text-[var(--sa-cream)]">
              <div className="text-xs font-semibold">PPM Types</div>
              <div className="mt-2 grid gap-2 sm:grid-cols-2 text-xs">
                <div><strong>Full PPM:</strong> You move 100% of your HHG yourself</div>
                <div><strong>Partial PPM:</strong> Government moves some, you move some</div>
              </div>
            </div>
          </section>
        )}

        {tab === "expenses" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Authorized vs. Unauthorized Expenses</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Keep receipts for all authorized expenses. These can be claimed against your taxable incentive to reduce tax liability. Unauthorized expenses will NOT be reimbursed.</p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-green-200 bg-green-50 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="flex items-center gap-2 font-bold text-green-800 dark:text-green-400">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
                  Authorized Expenses
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-green-800 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">+</span>
                    <span><strong>Truck/Trailer Rental:</strong> U-Haul, Penske, Budget, etc.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">+</span>
                    <span><strong>Packing Materials:</strong> Boxes, tape, bubble wrap, padding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">+</span>
                    <span><strong>Fuel:</strong> For the rental truck/tow vehicle only</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">+</span>
                    <span><strong>Tolls:</strong> Road tolls during the move</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">+</span>
                    <span><strong>Hired Labor:</strong> Two Men and a Truck, TaskRabbit, etc.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">+</span>
                    <span><strong>PODS/Containers:</strong> Portable storage containers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">+</span>
                    <span><strong>Weighing Fees:</strong> CAT scale tickets</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-red-200 bg-red-50 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="flex items-center gap-2 font-bold text-red-800 dark:text-red-400">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>
                  NOT Authorized
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-red-800 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">-</span>
                    <span><strong>Auto Transporter:</strong> POV shipping is separate entitlement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">-</span>
                    <span><strong>Meals:</strong> Not reimbursable for PPM</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">-</span>
                    <span><strong>Lodging:</strong> Not reimbursable for PPM</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">-</span>
                    <span><strong>Storage:</strong> SIT is separate entitlement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">-</span>
                    <span><strong>Hitch/Tow Equipment:</strong> Not reimbursable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">-</span>
                    <span><strong>Insurance:</strong> Optional coverage not reimbursable</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-white/15 dark:bg-white/10">
              <p className="text-xs text-blue-800 dark:text-[var(--sa-cream)]"><strong>Tax Tip:</strong> Authorized expenses can be deducted from your taxable PPM incentive. Keep detailed receipts to reduce your tax liability. The 22% federal withholding is applied to the incentive payment.</p>
            </div>
          </section>
        )}

        {tab === "weighttickets" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Weight Ticket Requirements</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Weight tickets are CRITICAL for your PPM claim. Without proper weight tickets, your claim will be delayed or denied. Follow these requirements exactly.</p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Empty Weight</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Weigh vehicle BEFORE loading any HHG</li>
                  <li>Driver and passengers should be in vehicle</li>
                  <li>Full fuel tank recommended</li>
                  <li>Same vehicle configuration as loaded weight</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Loaded Weight</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Weigh vehicle AFTER loading all HHG</li>
                  <li>Same driver/passengers as empty weight</li>
                  <li>Net weight = Loaded - Empty</li>
                  <li>Multiple trips require multiple weight ticket sets</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
              <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Weight Ticket Must Include:</h3>
              <div className="mt-3 grid gap-2 sm:grid-cols-2 text-sm text-zinc-700 dark:text-zinc-300">
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-green-600"><path d="M9 12l2 2 4-4"/></svg>
                  Date and time of weighing
                </div>
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-green-600"><path d="M9 12l2 2 4-4"/></svg>
                  Scale location/address
                </div>
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-green-600"><path d="M9 12l2 2 4-4"/></svg>
                  Vehicle identification (plate or description)
                </div>
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-green-600"><path d="M9 12l2 2 4-4"/></svg>
                  Weight in pounds
                </div>
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-green-600"><path d="M9 12l2 2 4-4"/></svg>
                  Printed ticket (not handwritten)
                </div>
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-green-600"><path d="M9 12l2 2 4-4"/></svg>
                  Certified scale (CAT scales preferred)
                </div>
              </div>
            </div>
            <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800 dark:border-white/15 dark:bg-white/10 dark:text-[var(--sa-cream)]">
              <div className="text-xs font-semibold">Where to Get Weight Tickets</div>
              <div className="mt-1 text-xs">CAT Scales at truck stops are the most common and reliable option. Visit <strong>catscale.com</strong> to find locations. Cost is typically $12-15 per weigh. Some moving truck rental companies also offer weighing services.</div>
            </div>
            <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-red-800 dark:border-white/15 dark:bg-white/10 dark:text-[var(--sa-cream)]">
              <div className="text-xs font-semibold">Common Weight Ticket Mistakes</div>
              <ul className="mt-1 list-disc pl-4 text-xs">
                <li>Different drivers for empty vs. loaded (changes weight)</li>
                <li>Using uncertified or home scales</li>
                <li>Handwritten weight tickets</li>
                <li>Missing date or scale location</li>
                <li>Forgetting to weigh trailer separately if applicable</li>
              </ul>
            </div>
          </section>
        )}

        {tab === "documents" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Required Documents</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Gather ALL required documents before submitting your claim. Missing documents will delay payment.</p>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key Forms</h3>
                <div className="mt-3 space-y-3">
                  <div className="rounded-lg border border-black/10 bg-[var(--sa-cream)]/40 p-3 dark:border-white/15 dark:bg-white/10">
                    <div className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">PPM Checklist</div>
                    <div className="text-xs text-zinc-700 dark:text-zinc-300">Master checklist of all required documents - download from MilMove</div>
                  </div>
                  <div className="rounded-lg border border-black/10 bg-[var(--sa-cream)]/40 p-3 dark:border-white/15 dark:bg-white/10">
                    <div className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DD Form 2278</div>
                    <div className="text-xs text-zinc-700 dark:text-zinc-300">Application for Do-It-Yourself Move and Counseling Checklist</div>
                  </div>
                  <div className="rounded-lg border border-black/10 bg-[var(--sa-cream)]/40 p-3 dark:border-white/15 dark:bg-white/10">
                    <div className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DD Form 1351-2</div>
                    <div className="text-xs text-zinc-700 dark:text-zinc-300">Travel Voucher or Subvoucher</div>
                  </div>
                  <div className="rounded-lg border border-black/10 bg-[var(--sa-cream)]/40 p-3 dark:border-white/15 dark:bg-white/10">
                    <div className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DD Form 1299</div>
                    <div className="text-xs text-zinc-700 dark:text-zinc-300">Application for Shipment and/or Storage of Personal Property</div>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                  <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Weight Documentation</h3>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                    <li>Empty weight ticket(s)</li>
                    <li>Loaded weight ticket(s)</li>
                    <li>Pro-gear weight tickets (if separate)</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                  <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Orders & Receipts</h3>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                    <li>Copy of PCS orders</li>
                    <li>All expense receipts</li>
                    <li>Rental agreements</li>
                    <li>Bank info for direct deposit</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {tab === "steps" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">PPM Process Steps</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">1</div>
                  <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Get Counseling at PPO</h3>
                </div>
                <p className="mt-2 pl-11 text-sm text-zinc-700 dark:text-zinc-300">Visit the Personal Property Office (PPO) for PPM counseling. Understand weight allowances, requirements, and process. Receive DD Form 2278.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">2</div>
                  <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Create PPM in MilMove</h3>
                </div>
                <p className="mt-2 pl-11 text-sm text-zinc-700 dark:text-zinc-300">Log into my.move.mil and create your PPM shipment. Enter estimated weight, pickup/delivery dates, and upload your orders.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">3</div>
                  <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Request AOA (Optional)</h3>
                </div>
                <p className="mt-2 pl-11 text-sm text-zinc-700 dark:text-zinc-300">Request an Advance Operating Allowance (up to 60% of estimated incentive) through MilMove to cover upfront costs like truck rental and packing supplies.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">4</div>
                  <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Get Empty Weight Tickets</h3>
                </div>
                <p className="mt-2 pl-11 text-sm text-zinc-700 dark:text-zinc-300">BEFORE loading any household goods, weigh your empty vehicle at a certified scale (CAT scale). Get a printed weight ticket.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">5</div>
                  <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Pack, Load, and Move</h3>
                </div>
                <p className="mt-2 pl-11 text-sm text-zinc-700 dark:text-zinc-300">Pack your belongings and load your vehicle. Keep ALL receipts for authorized expenses. Drive to your new duty station.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">6</div>
                  <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Get Loaded Weight Tickets</h3>
                </div>
                <p className="mt-2 pl-11 text-sm text-zinc-700 dark:text-zinc-300">AFTER loading, weigh your loaded vehicle at a certified scale. Your net weight = loaded weight - empty weight. This determines your incentive.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--sa-red)] text-sm font-bold text-white">7</div>
                  <h3 className="font-bold text-[var(--sa-red)] dark:text-[var(--sa-cream)]">Submit Claim Within 30 Days</h3>
                </div>
                <p className="mt-2 pl-11 text-sm text-zinc-700 dark:text-zinc-300">Upload all documentation to MilMove within 30 days of delivery. Include weight tickets, receipts, and completed forms. Claim goes to TVCB for processing.</p>
              </div>
            </div>
          </section>
        )}

        {tab === "claim" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">PPM Claim & Payment</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">How Your Incentive Is Calculated</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">You receive <strong>100% of the Government Constructed Cost (GCC)</strong> - what it would have cost the government to move your goods using a TSP. This is calculated based on your net weight and the distance between duty stations.</p>
                <div className="mt-3 rounded-lg border border-black/10 bg-white p-3 dark:border-white/15 dark:bg-black/60">
                  <div className="text-xs text-zinc-600 dark:text-zinc-400">Example Calculation:</div>
                  <div className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">3,000 lbs moved 1,500 miles = ~$3,500 GCC incentive (varies by rates)</div>
                </div>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Tax Implications</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li><strong>22% federal withholding</strong> applied to incentive payment</li>
                  <li>Authorized expenses can be deducted to reduce taxable amount</li>
                  <li>File Form 3903 with your taxes for moving expense deduction (if applicable)</li>
                  <li>Consult a tax professional for your specific situation</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Advance Operating Allowance (AOA)</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Request up to <strong>60%</strong> of estimated incentive before your move</li>
                  <li>Helps cover upfront costs like truck rental and supplies</li>
                  <li>AOA is deducted from final incentive payment</li>
                  <li>If actual weight is less than estimated, you may owe money back</li>
                </ul>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800 dark:border-white/15 dark:bg-white/10 dark:text-[var(--sa-cream)]">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                  TVCB Processing Time
                </div>
                <div className="mt-1 text-xs">The Travel Voucher Certification Branch (TVCB) at LOGCOM processes PPM claims. Current backlog is <strong>60+ days</strong> for processing. Ensure all documentation is complete to avoid additional delays.</div>
              </div>
            </div>
          </section>
        )}

        {tab === "troubleshooter" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Problems & Solutions</h2>
            <div className="mt-3 space-y-4">
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Lost or missing weight tickets</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Contact the scale location - most keep electronic records</li>
                  <li>CAT Scales can reprint tickets via catscale.com</li>
                  <li>Without weight tickets, claim will be denied or reduced</li>
                  <li>Self-certified weights are NOT accepted</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Missed 30-day submission deadline</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Submit as soon as possible with written explanation</li>
                  <li>Contact TVCB for guidance on late submissions</li>
                  <li>Command endorsement may be required</li>
                  <li>Significantly late claims may be denied</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Exceeded weight allowance</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>You are only paid for weight up to your allowance</li>
                  <li>Combined HHG + PPM cannot exceed your authorized weight</li>
                  <li>Excess weight is at your own expense</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">AOA exceeds final entitlement</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>You must repay the difference</li>
                  <li>This happens when actual weight is less than estimated</li>
                  <li>Collection may be deducted from pay</li>
                  <li>Be conservative with weight estimates</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Claim stuck in processing</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Current TVCB backlog is 60+ days</li>
                  <li>Check MilMove for status updates</li>
                  <li>Contact TVCB directly: 229-639-6575</li>
                  <li>Email: logcom.g8tvcbclaims@usmc.mil</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">OCONUS PPM issues</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>OCONUS PPMs have additional restrictions</li>
                  <li>POV shipping is handled separately</li>
                  <li>Consult with your PPO for specific requirements</li>
                  <li>Some OCONUS locations do not authorize PPM</li>
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
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">TVCB Claims</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">229-639-6575</div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400">logcom.g8tvcbclaims@usmc.mil</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">HHG Helpline</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">855-HHG-MOVE (444-6683)</div>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key Deadlines</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="rounded-md border border-red-200 bg-red-50 p-3 dark:border-white/15 dark:bg-white/10">
              <div className="font-medium text-red-700 dark:text-[var(--sa-cream)]">30 Days</div>
              <div className="text-xs text-red-600 dark:text-zinc-300">Submit claim after delivery</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">60+ Days</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">Current TVCB processing time</div>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Facts</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Incentive</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">100% of GCC</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Tax Withholding</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">22% federal</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Advance Available</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">Up to 60% AOA</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Portal</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">my.move.mil</div>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Links</h3>
          <ul className="mt-3 space-y-1 text-sm">
            <li><a href="https://my.move.mil" target="_blank" rel="noopener noreferrer" className="text-[var(--sa-red)] underline hover:no-underline">MilMove Portal</a></li>
            <li><a href="https://catscale.com" target="_blank" rel="noopener noreferrer" className="text-[var(--sa-red)] underline hover:no-underline">CAT Scale Locator</a></li>
            <li><a href="https://www.defensetravel.dod.mil/site/travelreg.cfm" target="_blank" rel="noopener noreferrer" className="text-[var(--sa-red)] underline hover:no-underline">JTR (Chapter 5)</a></li>
          </ul>
        </section>
      </aside>
    </div>
  );
}
