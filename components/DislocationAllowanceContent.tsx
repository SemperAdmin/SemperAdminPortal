"use client";
import { useState } from "react";

type Ref = { title: string; desc: string; url: string; type: string };
type DLARate = { rank: string; withDependents: number; withoutDependents: number };

export default function DislocationAllowanceContent({ data }: { data: { rates: DLARate[]; references: Ref[] } }) {
  const [tab, setTab] = useState<"overview" | "rates" | "eligibility" | "dualmil" | "notauthorized" | "troubleshooter" | "references">("overview");

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center gap-2 overflow-x-auto [&>button]:whitespace-nowrap [&>button]:shrink-0">
          <button onClick={() => setTab("overview")} className={`rounded-md px-3 py-2 text-sm ${tab === "overview" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Overview</button>
          <button onClick={() => setTab("rates")} className={`rounded-md px-3 py-2 text-sm ${tab === "rates" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>2026 Rates</button>
          <button onClick={() => setTab("eligibility")} className={`rounded-md px-3 py-2 text-sm ${tab === "eligibility" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Eligibility</button>
          <button onClick={() => setTab("dualmil")} className={`rounded-md px-3 py-2 text-sm ${tab === "dualmil" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Dual Military</button>
          <button onClick={() => setTab("notauthorized")} className={`rounded-md px-3 py-2 text-sm ${tab === "notauthorized" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Not Authorized</button>
          <button onClick={() => setTab("troubleshooter")} className={`rounded-md px-3 py-2 text-sm ${tab === "troubleshooter" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Troubleshooter</button>
          <button onClick={() => setTab("references")} className={`rounded-md px-3 py-2 text-sm ${tab === "references" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>References</button>
        </div>

        {tab === "overview" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What Is Dislocation Allowance (DLA)?</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Dislocation Allowance (DLA) partially reimburses you for expenses incurred while relocating your household on a Permanent Change of Station (PCS) move. DLA is a flat-rate payment based on your grade and dependency status, paid in addition to all other PCS allowances.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Primary DLA</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Standard</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">First PCS move in fiscal year</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Secondary DLA</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Reduced</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Orders amended/canceled</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Partial DLA</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">$1,002.71</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Local moves (govt convenience)</p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl bg-[var(--sa-navy)] p-6 text-[var(--sa-cream)]">
              <div className="flex items-center gap-2 text-xl font-bold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
                BLUF
              </div>
              <p className="mt-2 text-sm opacity-90">Only one DLA payment is authorized per fiscal year unless your situation qualifies for an exception. Your rate is based on your grade and dependency status on the PCS order&apos;s effective date. DLA is typically included in your PCS travel voucher settlement.</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">One Per Fiscal Year</span>
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">With Travel Voucher</span>
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">Not Taxable</span>
              </div>
            </div>
            <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-red-800 dark:border-white/15 dark:bg-white/10 dark:text-[var(--sa-cream)]">
              <div className="text-xs font-semibold">Fiscal Year Limitation</div>
              <div className="mt-1 text-xs">Only one DLA payment is authorized per fiscal year. A second or subsequent DLA requires a SecNav finding unless the situation qualifies for an exception (courses of instruction, order amendments, evacuation, BRAC, etc.).</div>
            </div>
            <div className="mt-4 rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
              <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Exceptions to Fiscal Year Limitation (No SecNav Finding Required)</h3>
              <ul className="mt-2 grid gap-1 sm:grid-cols-2 text-xs text-zinc-700 dark:text-zinc-300">
                <li>• PCS to/from/between courses of instruction</li>
                <li>• Orders amended, modified, canceled, or revoked</li>
                <li>• Command-sponsored dependent evacuation</li>
                <li>• National emergency or time of war</li>
                <li>• Base realignment and closure (BRAC)</li>
                <li>• Unit homeport change or commissioning</li>
                <li>• Dependent relocates due to ITDY assignment</li>
                <li>• SecNav determines service exigencies required</li>
              </ul>
            </div>
          </section>
        )}

        {tab === "rates" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">2026 DLA Rates (Effective 1 January 2026)</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Your rate is based on your grade and dependency status on the PCS order&apos;s effective date.</p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-black/10 dark:border-white/15">
                    <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Grade</th>
                    <th className="py-2 pr-4 text-right font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Without Dependent</th>
                    <th className="py-2 text-right font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">With Dependent</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-700 dark:text-zinc-300">
                  {data.rates.map((r) => (
                    <tr key={r.rank} className="border-b border-black/5 dark:border-white/10">
                      <td className="py-2 pr-4 font-medium">{r.rank}</td>
                      <td className="py-2 pr-4 text-right">${r.withoutDependents.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                      <td className="py-2 text-right">${r.withDependents.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-amber-800 dark:text-[var(--sa-cream)]">Partial DLA (2026)</h3>
                <div className="mt-2 text-2xl font-bold text-amber-700 dark:text-[var(--sa-cream)]">$1,002.71</div>
                <p className="mt-1 text-xs text-amber-700 dark:text-zinc-300">For local moves due to government convenience (privatization, renovation, etc.)</p>
              </div>
              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-blue-800 dark:text-[var(--sa-cream)]">Secondary DLA</h3>
                <p className="mt-2 text-xs text-blue-700 dark:text-zinc-300">Reduced rate when orders are amended, modified, canceled, or revoked to direct return to original PDS. Approximately 80% of primary rate.</p>
              </div>
            </div>
            <div className="mt-4 rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
              <p className="text-xs text-zinc-600 dark:text-zinc-400">Rates are updated annually. Check <a href="https://www.travel.dod.mil/Travel-Transportation-Rates/Dislocation-Allowance/" target="_blank" rel="noopener noreferrer" className="text-[var(--sa-red)] underline hover:no-underline">DTMO DLA Rate Lookup</a> for the most current rates.</p>
            </div>
          </section>
        )}

        {tab === "eligibility" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DLA Eligibility</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-green-200 bg-green-50 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-green-800 dark:text-green-400">Service Member WITH a Dependent</h3>
                <p className="mt-1 text-xs text-green-700 dark:text-zinc-300">You are considered to have a dependent if, on the PCS order&apos;s effective date, you have a dependent authorized to travel under that order.</p>
                <p className="mt-2 text-xs font-medium text-green-800 dark:text-zinc-200">You receive DLA at the with-dependent rate when:</p>
                <ul className="mt-1 list-disc space-y-1 pl-5 text-xs text-green-700 dark:text-zinc-300">
                  <li>The dependent relocates in connection with the PCS</li>
                  <li>The dependent relocates before orders to a dependent-restricted area</li>
                  <li>PCS between PDSs not in proximity, but dependent makes a proximity move</li>
                  <li>Dependent moves because Service member is dead or missing 30+ days</li>
                  <li>One or more dependents return early from OCONUS at government expense</li>
                </ul>
              </div>
              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-blue-800 dark:text-blue-400">Service Member WITHOUT a Dependent</h3>
                <p className="mt-1 text-xs text-blue-700 dark:text-zinc-300">You are considered without a dependent when you have no dependents, or have a dependent but that dependent does not relocate.</p>
                <p className="mt-2 text-xs font-medium text-blue-800 dark:text-zinc-200">You receive DLA at the without-dependent rate when:</p>
                <ul className="mt-1 list-disc space-y-1 pl-5 text-xs text-blue-700 dark:text-zinc-300">
                  <li>Ordered to new PDS where government quarters are not assigned</li>
                  <li>Ordered to new PDS where government quarters occupied 60 days or less (extendable to 120)</li>
                  <li>Ordered to and actually move due to a BRAC action</li>
                  <li>Assigned to a two-crew nuclear submarine, not assigned quarters</li>
                </ul>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-amber-800 dark:text-[var(--sa-cream)]">E-7 and Above Own-Right DLA</h3>
                <p className="mt-1 text-xs text-amber-700 dark:text-zinc-300">Personnel in the grade of E-7 and above are the only personnel authorized DLA own-right unless the new duty station lacks adequate government quarters. If quarters are not available, the new command issues a letter of nonavailability.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Dependent Joins Later</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">If the dependent does not move with the Service member (and government quarters are not assigned), DLA is paid at the without-dependent rate. If the dependent later joins and travels at government expense, the Service member receives an additional DLA equal to the difference between the without-dependent and with-dependent rates.</p>
              </div>
            </div>
          </section>
        )}

        {tab === "dualmil" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Dual Military (Married to Another Service Member)</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Both Service members may be eligible for DLA. Neither Service member is considered a dependent of the other. The following table shows who receives DLA based on living situations:</p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-black/10 dark:border-white/15">
                    <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Situation</th>
                    <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Result</th>
                  </tr>
                </thead>
                <tbody className="text-xs text-zinc-700 dark:text-zinc-300">
                  <tr className="border-b border-black/5 dark:border-white/10">
                    <td className="py-3 pr-4">Neither assigned to a ship, occupy same family-type quarters at new PDS</td>
                    <td className="py-3">Senior member paid DLA at without-dependent rate</td>
                  </tr>
                  <tr className="border-b border-black/5 dark:border-white/10">
                    <td className="py-3 pr-4">Same dwelling at old PDS, same dwelling at new PDS</td>
                    <td className="py-3">Either member paid DLA at without-dependent rate, but not both</td>
                  </tr>
                  <tr className="border-b border-black/5 dark:border-white/10">
                    <td className="py-3 pr-4">Same dwelling at old PDS, separate dwellings at new PDS</td>
                    <td className="py-3">Each member paid DLA at without-dependent rate</td>
                  </tr>
                  <tr className="border-b border-black/5 dark:border-white/10">
                    <td className="py-3 pr-4">Separate dwellings at old PDS, same dwelling at new PDS</td>
                    <td className="py-3">Each member paid DLA at without-dependent rate (only one if same govt quarters)</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Separate dwellings at old PDS, separate dwellings at new PDS</td>
                    <td className="py-3">Each member paid DLA at without-dependent rate</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
              <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">One Member Has a Dependent, the Other Does Not</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-black/10 dark:border-white/15">
                      <th className="py-2 pr-4 text-left font-semibold">Situation</th>
                      <th className="py-2 text-left font-semibold">Result</th>
                    </tr>
                  </thead>
                  <tbody className="text-zinc-700 dark:text-zinc-300">
                    <tr className="border-b border-black/5 dark:border-white/10">
                      <td className="py-2 pr-4">Same dwelling at old, same at new</td>
                      <td className="py-2">Either without-dependent rate OR with-dependent rate, but not both</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/10">
                      <td className="py-2 pr-4">Same dwelling at old, separate at new</td>
                      <td className="py-2">Member without: without-dependent rate. Member with: with-dependent rate</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/10">
                      <td className="py-2 pr-4">Separate at old, same at new</td>
                      <td className="py-2">Member without: without-dependent rate. Member with: with-dependent rate</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Separate at old, separate at new</td>
                      <td className="py-2">Member without: without-dependent rate. Member with: with-dependent rate</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {tab === "notauthorized" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">When DLA is NOT Authorized</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-red-200 bg-red-50 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-red-800 dark:text-red-400">DLA is NOT authorized for PCS when:</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-red-800 dark:text-zinc-300">
                  <li>From home or PLEAD to the first PDS (unless a dependent moves to the PDS)</li>
                  <li>Service member does not have a dependent, or dependent does not relocate to new PDS</li>
                  <li>From last PDS to home or PLEAD</li>
                  <li>From last PDS in one period of service to first PDS in another (no ordered PCS between)</li>
                  <li>Service member does not relocate the household</li>
                  <li>Service member is a cadet or midshipman</li>
                  <li>Assigned to a school/installation as a student if course is less than 20 weeks</li>
                  <li>Enlisted RC member called to initial active duty for training for less than 6 months</li>
                  <li>Called to active duty for 140+ days but 139 or fewer days at any one location</li>
                  <li>Dependent travels at personal expense before PCS order is issued</li>
                  <li>Dependent receives other government-funded travel allowances for the travel</li>
                </ul>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-amber-800 dark:text-[var(--sa-cream)]">National Guard and Reserve</h3>
                <p className="mt-2 text-xs text-amber-700 dark:text-zinc-300">National Guard and Reserve Service members coming on or leaving active duty are NOT eligible for DLA. Exception: When you come on active duty for more than 20 weeks at one location and are authorized PCS allowances (not TDY) and you move dependents from home to your new PDS or designated place.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Partial DLA is NOT Authorized For:</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Local moves upon separation or retirement</li>
                  <li>Moves from privatized housing to privatized housing</li>
                  <li>A PCS move</li>
                  <li>Change in family size or bedroom requirements (including promotion)</li>
                  <li>Service member voluntarily decides to move</li>
                  <li>Pending divorce or family separation</li>
                  <li>Service member misconduct</li>
                  <li>Move between unaccompanied housing units</li>
                </ul>
              </div>
              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-blue-800 dark:text-[var(--sa-cream)]">Proximity Move</h3>
                <p className="mt-2 text-xs text-blue-700 dark:text-zinc-300">DLA is NOT authorized due to a PCS to a new PDS that is in proximity to the old PDS, or when reassigned between military installations located within the corporate limits of the same city or town.</p>
              </div>
            </div>
          </section>
        )}

        {tab === "troubleshooter" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Problems & Solutions</h2>
            <div className="mt-3 space-y-4">
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DLA not paid after PCS</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Contact your disbursing office</li>
                  <li>DLA must be claimed on your travel voucher</li>
                  <li>Ensure dependency status is correctly reflected in orders and MCTFS</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Second PCS in same fiscal year - DLA denied</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Review your orders for a SecNav finding</li>
                  <li>If not present and your situation qualifies for an exception, request your command to obtain the required finding before executing the move</li>
                  <li>Exceptions: courses of instruction, order amendments, evacuation, BRAC, homeport change</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Married to another Service member - unsure who claims DLA</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Review Table 5-11 in the JTR</li>
                  <li>In most cases, both may receive DLA at the without-dependent rate</li>
                  <li>If one member has a dependent, that member receives with-dependent rate</li>
                  <li>Contact your disbursing office for your specific situation</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Received partial DLA when expecting full DLA</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Partial DLA ($1,002.71) applies only to local moves for government convenience (not PCS)</li>
                  <li>If you executed a PCS and received only partial DLA, contact your disbursing office to correct the payment</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DLA paid at without-dependent rate when dependent relocated</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Submit documentation showing the dependent relocated (travel voucher, orders endorsement)</li>
                  <li>Request a supplemental payment for the difference between without-dependent and with-dependent rates</li>
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
                    ) : ref.type === "Video" ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6"><polygon points="5 3 19 12 5 21 5 3"/></svg>
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
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DFAS Customer Service</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">1-888-332-7411</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Local Disbursing</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">Contact your installation finance office</div>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key Facts</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="rounded-md border border-red-200 bg-red-50 p-3 dark:border-white/15 dark:bg-white/10">
              <div className="font-medium text-red-700 dark:text-[var(--sa-cream)]">One Per Fiscal Year</div>
              <div className="text-xs text-red-600 dark:text-zinc-300">SecNav finding required for 2nd DLA</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Partial DLA (2026)</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">$1,002.71 for local moves</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Tax Status</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">Not taxable</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Payment Method</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">With travel voucher settlement</div>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Links</h3>
          <ul className="mt-3 space-y-1 text-sm">
            <li><a href="https://www.travel.dod.mil/Travel-Transportation-Rates/Dislocation-Allowance/" target="_blank" rel="noopener noreferrer" className="text-[var(--sa-red)] underline hover:no-underline">DTMO DLA Rate Lookup</a></li>
            <li><a href="https://militarypay.defense.gov/PAY/allowances/dislocation.aspx" target="_blank" rel="noopener noreferrer" className="text-[var(--sa-red)] underline hover:no-underline">Military Pay DLA Info</a></li>
          </ul>
        </section>
      </aside>
    </div>
  );
}
