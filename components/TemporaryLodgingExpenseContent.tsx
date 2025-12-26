"use client";
import { useState } from "react";

type Ref = { title: string; desc: string; url: string; type: string };
type ReimbursementRate = { persons: string; percentage: string };
type Tab = "overview" | "eligibility" | "steps" | "special" | "troubleshooter" | "references";

const TABS: { key: Tab; label: string }[] = [
  { key: "overview", label: "Overview" },
  { key: "eligibility", label: "Eligibility" },
  { key: "steps", label: "Steps" },
  { key: "special", label: "Special" },
  { key: "troubleshooter", label: "Troubleshooter" },
  { key: "references", label: "References" },
];

export default function TemporaryLodgingExpenseContent({ data }: { data: { reimbursementRates: ReimbursementRate[]; references: Ref[] } }) {
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
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What Is TLE?</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">TLE partially reimburses you for hotel and meal expenses when you occupy temporary housing during a PCS move within the Continental United States (CONUS). TLE covers the transition period near your old or new Permanent Duty Station (PDS) when Government quarters are unavailable.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Daily Cap</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">$290</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Maximum per day</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">CONUS to CONUS</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">21 Days</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Effective Nov 27, 2024</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">CONUS to OCONUS</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">7 Days</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">At old PDS only</p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl bg-[var(--sa-navy)] p-6 text-[var(--sa-cream)]">
              <div className="flex items-center gap-2 text-xl font-bold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
                BLUF
              </div>
              <p className="mt-2 text-sm opacity-90">TLE partially reimburses temporary lodging and meals during CONUS PCS moves. Maximum $290/day for up to 21 days. Reimbursement is based on locality per diem rates and the number of occupants. You cannot receive TLE and per diem on the same day.</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">$290 Daily Cap</span>
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">21 Days Max (CONUS)</span>
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">Check Govt Quarters First</span>
              </div>
            </div>
            <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800 dark:border-white/15 dark:bg-white/10 dark:text-[var(--sa-cream)]">
              <div className="text-xs font-semibold">OCONUS Temporary Lodging</div>
              <div className="mt-1 text-xs">OCONUS temporary lodging uses a different allowance called Temporary Lodging Allowance (TLA). Contact your local pay office for TLA guidance.</div>
            </div>
          </section>
        )}

        {tab === "eligibility" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Who Qualifies for TLE?</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">You qualify if you meet ALL of these requirements:</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>You execute PCS orders involving a CONUS PDS</li>
              <li>You stay in the vicinity of your old PDS, new PDS, home of record, initial technical school, or designated place</li>
              <li>Government quarters are unavailable at your location (except designated places)</li>
            </ul>
            <div className="mt-6">
              <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Reimbursement Percentages</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-black/10 dark:border-white/15">
                      <th className="py-2 pr-4 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Persons Occupying Temporary Quarters</th>
                      <th className="py-2 text-left font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Percentage Applied</th>
                    </tr>
                  </thead>
                  <tbody className="text-zinc-700 dark:text-zinc-300">
                    {data.reimbursementRates.map((r) => (
                      <tr key={r.persons} className="border-b border-black/5 dark:border-white/10">
                        <td className="py-2 pr-4">{r.persons}</td>
                        <td className="py-2 font-semibold">{r.percentage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-zinc-600 dark:text-zinc-400">Single members without dependents during approved TLE extension periods receive 100% lodging (per diem remains 65%).</p>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h4 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">CONUS to CONUS</h4>
                <div className="mt-1 text-2xl font-bold text-[var(--sa-red)]">21 days</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Effective Nov 27, 2024</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h4 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">OCONUS to CONUS</h4>
                <div className="mt-1 text-2xl font-bold text-[var(--sa-red)]">21 days</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">At new CONUS PDS</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                <h4 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">CONUS to OCONUS</h4>
                <div className="mt-1 text-2xl font-bold text-[var(--sa-red)]">7 days</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">At old CONUS PDS</p>
              </div>
            </div>
          </section>
        )}

        {tab === "steps" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">How TLE Works</h2>
            <div className="mt-4 space-y-4">
              {[
                { title: "Confirm Eligibility", desc: "Verify your PCS orders involve a CONUS PDS. Determine your authorized TLE days based on move type." },
                { title: "Check Government Quarters", desc: "Contact billeting at your old and new PDS. Obtain a certificate of nonavailability if quarters are full. Note: Government quarters check not required at designated places." },
                { title: "Book Temporary Lodging", desc: "Stay in the vicinity of your PDS, home of record, or designated place. Track all lodging receipts with itemized charges and taxes." },
                { title: "Submit Your Claim", desc: "Complete DD Form 1351-2 and DFAS Form 9098. Attach itemized zero-balance lodging receipts and PCS orders. Submit with your travel voucher." },
                { title: "Receive Reimbursement", desc: "DFAS calculates your entitlement using locality per diem rates. Reimbursement equals the lesser of actual cost or calculated ceiling. Maximum daily reimbursement is $290." },
              ].map((step, index) => (
                <div key={index} className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">{index + 1}</div>
                    <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{step.title}</h3>
                  </div>
                  <p className="mt-2 pl-11 text-sm text-zinc-700 dark:text-zinc-300">{step.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
              <h3 className="font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Important Things to Know</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                <li>TLE is not authorized for house hunting trips</li>
                <li>You cannot claim TLE and per diem for the same day</li>
                <li>You must use Government quarters before claiming commercial lodging at your PDS</li>
                <li>Designated places are exempt from the Government quarters requirement</li>
                <li>TLE reimbursement is the lesser of your actual costs or the calculated ceiling based on locality rates</li>
                <li>If your claimed expenses exceed authorized TLE reimbursement, you pay the difference</li>
              </ul>
            </div>
          </section>
        )}

        {tab === "special" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Special Situations</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Dual Military Couples</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Both service members receive up to 21 days TLE each (maximum $6,090 per member). Claim periods cannot overlap.</p>
                <div className="mt-2 rounded-lg bg-[var(--sa-cream)]/60 p-3 text-xs text-zinc-700 dark:bg-white/10 dark:text-zinc-300">
                  <strong>Example:</strong> Service Member 1 claims 1-21 April. Service Member 2 claims 22 April - 12 May.
                </div>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">TLE Extensions</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">In approved extension locations, you request additional TLE in 10-day increments up to 60 total days. An installation commander-designated official approves extensions upon verifying you continue seeking permanent housing and the extension prevents undue financial hardship.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">First PCS from Home of Record</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Marines reporting to their first CONUS PDS from home of record or initial technical school receive up to 21 days TLE.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Unaccompanied Tour Dependents</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">If you serve an unaccompanied or dependent-restricted tour OCONUS, your dependents at a designated place in CONUS are eligible for TLE. You are not required to use Government quarters at the designated place.</p>
              </div>
            </div>
          </section>
        )}

        {tab === "troubleshooter" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Problems & Solutions</h2>
            <div className="mt-3 space-y-4">
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Claimed TLE exceeds $290 daily cap</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300"><strong>Solution:</strong> You receive only $290 per day maximum. Budget for additional costs if staying in high-cost areas.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">No certificate of nonavailability for Government quarters</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300"><strong>Solution:</strong> Contact billeting before occupying commercial lodging. Document the nonavailability. If billeting was full but you forgot to get the certificate, request one retroactively with dates of nonavailability.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">TLE claim rejected for overlapping per diem</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300"><strong>Solution:</strong> You cannot receive TLE and per diem on the same day. Adjust your claim dates to separate TLE and per diem periods.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Lodging receipt is not itemized</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300"><strong>Solution:</strong> Request a detailed folio from the hotel showing nightly rate, taxes, and zero balance.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Dual military couple submitted overlapping TLE claims</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300"><strong>Solution:</strong> Coordinate claim periods so they do not overlap. Refile with corrected dates.</p>
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
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DFAS Customer Service</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">1-888-332-7411</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Local Disbursing Office</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">Contact your installation finance office</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DTMO Travel Assistance</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">travel.dod.mil/Support</div>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Facts</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="rounded-md border border-red-200 bg-red-50 p-3 dark:border-white/15 dark:bg-white/10">
              <div className="font-medium text-red-700 dark:text-[var(--sa-cream)]">$290/Day</div>
              <div className="text-xs text-red-600 dark:text-zinc-300">Maximum daily reimbursement</div>
            </li>
            <li className="rounded-md border border-amber-200 bg-amber-50 p-3 dark:border-white/15 dark:bg-white/10">
              <div className="font-medium text-amber-700 dark:text-[var(--sa-cream)]">21 Days</div>
              <div className="text-xs text-amber-600 dark:text-zinc-300">CONUS PCS maximum</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">60 Days</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">Maximum with extensions</div>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Required Forms</h3>
          <ul className="mt-3 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li><strong>DD 1351-2</strong> - Travel Voucher</li>
            <li><strong>DFAS 9098</strong> - TLE Worksheet</li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Links</h3>
          <ul className="mt-3 space-y-1 text-sm">
            <li><a href="https://www.dfas.mil/MilitaryMembers/travelpay/armypcs/tle/" target="_blank" rel="noopener noreferrer" className="text-[var(--sa-red)] underline hover:no-underline">DFAS TLE Information</a></li>
            <li><a href="https://www.gsa.gov/travel/plan-book/per-diem-rates" target="_blank" rel="noopener noreferrer" className="text-[var(--sa-red)] underline hover:no-underline">GSA Per Diem Rates</a></li>
            <li><a href="https://www.dfas.mil/Portals/98/Documents/Military%20Members/travelpay/Locations%20with%20Approved%20TLE%20Extensions.pdf" target="_blank" rel="noopener noreferrer" className="text-[var(--sa-red)] underline hover:no-underline">TLE Extension Locations</a></li>
          </ul>
        </section>
      </aside>
    </div>
  );
}
