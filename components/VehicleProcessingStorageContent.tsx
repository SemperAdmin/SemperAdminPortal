"use client";
import { useState } from "react";

type Ref = { title: string; desc: string; url: string; type: string };
type Tab = "overview" | "steps" | "important" | "special" | "troubleshooter" | "references";

const TABS: { key: Tab; label: string }[] = [
  { key: "overview", label: "Overview" },
  { key: "steps", label: "Steps" },
  { key: "important", label: "Important" },
  { key: "special", label: "Special" },
  { key: "troubleshooter", label: "Troubleshooter" },
  { key: "references", label: "References" },
];

export default function VehicleProcessingStorageContent({ data }: { data: { references: Ref[] } }) {
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
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What Is POV Shipment and Storage?</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">POV shipment and storage is a Government entitlement for moving or holding your personal vehicle during a PCS. You ship your POV when transferring to an OCONUS location where the vehicle is authorized. You store your POV at Government expense when shipping is not permitted or when extensive vehicle modifications would be required at the destination.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Entitlement</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">1 POV</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Per set of orders</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Max Size</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">20 MT</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Measurement tons</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Insurance</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">$20,000</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Govt coverage limit</p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl bg-[var(--sa-navy)] p-6 text-[var(--sa-cream)]">
              <div className="flex items-center gap-2 text-xl font-bold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
                BLUF
              </div>
              <p className="mt-2 text-sm opacity-90">Contact TMO/PPSO before making any plans. Schedule VPC appointments early during peak PCS season. Ensure vehicle meets all requirements before your appointment. Storage is in lieu of shipment—you choose one or the other on the same orders.</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">Contact TMO First</span>
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">1 POV Per Orders</span>
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">Ship OR Store</span>
              </div>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-green-200 bg-green-50 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-green-800 dark:text-green-400">Who Qualifies?</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-green-800 dark:text-zinc-300">
                  <li>PCS orders to, from, or between OCONUS duty stations</li>
                  <li>Vehicle registered in your name (or dependent&apos;s with authorization)</li>
                  <li>Vehicle is self-propelled, licensed for public highways, designed to carry passengers</li>
                  <li>Vehicle does not exceed 20 measurement tons</li>
                </ul>
              </div>
              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-blue-800 dark:text-blue-400">Storage Eligibility</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-blue-800 dark:text-zinc-300">
                  <li>OCONUS location where POVs not authorized or require extensive modification</li>
                  <li>Single Marines, geographic bachelors, or single parents on contingency TAD 30+ days (unit-funded)</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800 dark:border-white/15 dark:bg-white/10 dark:text-[var(--sa-cream)]">
              <div className="text-xs font-semibold">Dual Military Couples</div>
              <div className="mt-1 text-xs">Two service members married to each other: Each receives one POV entitlement on their respective orders.</div>
            </div>
          </section>
        )}

        {tab === "steps" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">How POV Processing Works</h2>
            <div className="mt-4 space-y-4">
              {[
                { title: "Contact Your Transportation Office (TMO/PPSO)", desc: "Visit your local TMO or Personal Property Shipping Office BEFORE making any plans. Obtain a letter authorizing POV shipment or storage. Confirm your destination allows POV entry." },
                { title: "Create a PCSmyPOV Account", desc: "Go to www.pcsmypov.com. Register using a personal device (DoD network restrictions affect functionality). Use the site to locate VPCs, schedule appointments, and track your vehicle." },
                { title: "Schedule a VPC Appointment", desc: "All Vehicle Processing Centers require appointments. Call 1-855-389-9499 for U.S. domestic appointments. Schedule early during peak PCS season (May-August). VPC hours: Monday-Friday, 0800-1600 (arrive by 1500)." },
                { title: "Prepare Your Vehicle", desc: "Fuel tank: 1/4 tank or less. Interior: Clean, dry, free of dirt, sand, food, pet hair. Exterior: Washed. Battery: 11.5-13.2 volts. No unresolved electrical/fire recalls. Alarms disabled. Complete set of keys." },
                { title: "Gather Required Documents", desc: "Complete PCS orders (including amendments), Web Orders for Marines, Military ID, vehicle registration, title or lienholder authorization, Power of Attorney if needed, pre-shipping forms, recall printout." },
                { title: "Turn In Your Vehicle", desc: "Arrive at VPC with all documents. Complete joint inspection with inspector. Sign DD Form 788 (Private Vehicle Shipping Document). Receive copies of all forms. Provide emergency contact and OCONUS address." },
                { title: "Track and Receive Your Vehicle", desc: "Track status through PCSmyPOV using your Shipping Instruction Number. Notify contractor at least 30 days before required delivery date. Complete pickup inspection at destination VPC. Document any damage immediately." },
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
          </section>
        )}

        {tab === "important" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Important Things to Know</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">POV Size Limitations</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li><strong>Maximum:</strong> 20 measurement tons (MT)</li>
                  <li>Oversized vehicles incur excess cost at your expense</li>
                  <li><strong>To calculate MT:</strong> Multiply length x width x height (inches), divide by 1728, then divide by 40</li>
                  <li><strong>Exceptions:</strong> Oversized POV for approved medical reasons or dual-military combining entitlements</li>
                </ul>
              </div>
              <div className="rounded-xl border border-green-200 bg-green-50 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-green-800 dark:text-green-400">What Qualifies as a POV</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-green-800 dark:text-zinc-300">
                  <li>Automobiles, station wagons, trucks, vans, pickups, jeeps</li>
                  <li>Motorcycles and motor scooters (in lieu of a four-wheeled vehicle on same orders)</li>
                  <li>Passenger-carrying multipurpose vehicles (written certification required)</li>
                </ul>
              </div>
              <div className="rounded-xl border border-red-200 bg-red-50 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-red-800 dark:text-red-400">What Does NOT Qualify</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-red-800 dark:text-zinc-300">
                  <li>Trailers</li>
                  <li>Airplanes</li>
                  <li>Vehicles intended for commercial use</li>
                  <li>Non-conforming POVs (less than 25 years old must meet Federal safety standards)</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Insurance While in Storage</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Government insures stored POVs up to <strong>$20,000</strong></li>
                  <li>Coverage above $20,000 is your responsibility</li>
                  <li>No personal insurance or licensing required while in Government storage on private property</li>
                  <li>Contact your state DMV about De-Insured or Non-Use certificates to avoid re-registration penalties</li>
                </ul>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800 dark:border-white/15 dark:bg-white/10 dark:text-[var(--sa-cream)]">
                <div className="text-xs font-semibold">Storage Duration</div>
                <ul className="mt-1 list-disc space-y-1 pl-5 text-xs">
                  <li>POV remains in storage during your entire tour of duty</li>
                  <li>Vehicles stored 90 days after tour termination with no contact become abandoned</li>
                  <li>Once removed from storage, the POV cannot return to Government-funded storage under the same orders</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "special" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Special Situations</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Self-Procured Storage</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">You arrange commercial storage at your own expense and receive Government reimbursement. Requirements:</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Storage must be at a commercial fee-for-service facility open to the public</li>
                  <li>Upon return, the Government does NOT ship the POV to your new PDS VPC</li>
                  <li>You are responsible for picking up and transporting the vehicle</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Contingency Operations (TAD 30+ Days)</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Only single Marines, geographic bachelors, or single parents qualify</li>
                  <li>Unit funds the storage</li>
                  <li>TMO letter required</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Early Release from Storage Without New Orders</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>You forfeit future shipment or storage entitlements under the same orders</li>
                  <li>POV must be picked up at a CONUS VPC or the VPC serving the storage site</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Dual-Military Couples</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Each member has one POV entitlement per set of orders</li>
                  <li>Option to combine the 20-MT limitation and ship one large POV at Government expense (limited to total cost of shipping two separate POVs)</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Leased Vehicles</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>You must provide written authorization from the leasing company to ship or store</li>
                  <li>All lease requirements remain your responsibility</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Alternate VPC Selection</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>You receive travel entitlements to the service-designated VPC only</li>
                  <li>Selecting an alternate VPC does not require CMC approval</li>
                  <li>Orders must identify both the service-designated VPC and the alternate chosen</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "troubleshooter" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Problems & Solutions</h2>
            <div className="mt-3 space-y-4">
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Vehicle rejected at VPC for cleanliness</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300"><strong>Solution:</strong> Clean interior and exterior thoroughly before your appointment. Remove all dirt, food, pet hair, and debris. Ensure the interior is completely dry.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">VPC will not accept vehicle due to open recalls</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300"><strong>Solution:</strong> Check for recalls before your appointment at www.nhtsa.gov. Bring documented proof of no open electrical or fire-related recalls.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Vehicle exceeds 20 measurement tons</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300"><strong>Solution:</strong> Calculate your vehicle&apos;s MT before turn-in. Remove non-essential accessories (ladder, external spare tire, luggage racks) to reduce size. Pay excess costs if oversized.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Battery reading is below 11.5 volts</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300"><strong>Solution:</strong> Replace the battery at your expense before turn-in.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Missing lienholder authorization for financed vehicle</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300"><strong>Solution:</strong> Contact your lender and obtain a letter of authorization on company letterhead with full vehicle description and VIN before your VPC appointment.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Vehicle stored but member needs it back before new orders</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300"><strong>Solution:</strong> Request early release understanding you forfeit remaining storage and shipment entitlements under those orders.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Vehicle abandoned due to no contact after tour</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300"><strong>Solution:</strong> Notify the VPC of your new address and pickup instructions at least 30 days before your required delivery date. Respond to all contractor notifications promptly.</p>
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
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">PCSmyPOV Appointments</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">1-855-389-9499</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Local TMO/PPSO</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">Contact your installation</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">International Auto Logistics</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">www.pcsmypov.com</div>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Facts</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="rounded-md border border-red-200 bg-red-50 p-3 dark:border-white/15 dark:bg-white/10">
              <div className="font-medium text-red-700 dark:text-[var(--sa-cream)]">20 MT Max</div>
              <div className="text-xs text-red-600 dark:text-zinc-300">Size limit for POV</div>
            </li>
            <li className="rounded-md border border-amber-200 bg-amber-50 p-3 dark:border-white/15 dark:bg-white/10">
              <div className="font-medium text-amber-700 dark:text-[var(--sa-cream)]">$20,000</div>
              <div className="text-xs text-amber-600 dark:text-zinc-300">Govt insurance coverage</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">VPC Hours</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">Mon-Fri 0800-1600</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Peak Season</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">May - August</div>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key Forms</h3>
          <ul className="mt-3 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li><strong>DD 788</strong> - Private Vehicle Shipping Document</li>
            <li><strong>Shipper Acknowledgement</strong></li>
            <li><strong>Storage Acknowledgement</strong></li>
            <li><strong>Recall Printout</strong></li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Links</h3>
          <ul className="mt-3 space-y-1 text-sm">
            <li><a href="https://www.pcsmypov.com/" target="_blank" rel="noopener noreferrer" className="text-[var(--sa-red)] underline hover:no-underline">PCSmyPOV Portal</a></li>
            <li><a href="https://www.nhtsa.gov/recalls" target="_blank" rel="noopener noreferrer" className="text-[var(--sa-red)] underline hover:no-underline">NHTSA Recall Check</a></li>
          </ul>
        </section>
      </aside>
    </div>
  );
}
