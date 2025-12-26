"use client";
import { useState } from "react";

type Ref = { title: string; desc: string; url: string; type: string; isQuickLink?: boolean };
type Tab = "overview" | "steps" | "important" | "special" | "troubleshooter" | "references";

const TABS: { key: Tab; label: string }[] = [
  { key: "overview", label: "Overview" },
  { key: "steps", label: "Steps" },
  { key: "important", label: "Important" },
  { key: "special", label: "Special" },
  { key: "troubleshooter", label: "Troubleshooter" },
  { key: "references", label: "References" },
];

const PCS_ORDERS_STEPS = [
  { title: "Receive and Access Your Orders", desc: "Log into MOL (Marine Online). Navigate to the Outbound Interview (OBI) module. View your PCA/PCS Basic Orders. Unit leaders with Outbound Management access view orders through Outbound Tracker." },
  { title: "Verify Your Information", desc: "Confirm all dependents are correct in MOL. If incorrect, submit an EPAR through MOL or visit your IPAC/RPAC. Verify TAD or FAP status with your S-1. Check obligated service for OCONUS orders." },
  { title: "Attend the Mandatory PCS Workshop", desc: "Contact your installation's IRR Program. Sign up for the PCS Workshop (MCO 1754.10B). Receive briefs from DMO, IPAC, TRICARE, School Liaison, Travel, and Personal Financial Management." },
  { title: "Request Unit Approval in MOL", desc: "Your unit S-1 approves the OBI in MOL. CONUS PCS: NLT 14 days prior. OCONUS Unaccompanied: NLT 30 days prior. OCONUS Accompanied: NLT 60 days prior." },
  { title: "Submit Required Documents to IPAC/RPAC", desc: "OCONUS moves: Area Clearance, Medical Suitability, JKO Anti-Terrorism certificate for dependents 16+. Vehicle Processing Letter (if POV). DD Form 1056 for no-fee passports." },
  { title: "IPAC/RPAC Processes Your Package", desc: "Admin clerk works your package. RPAC submits Area Clearance requests (OCONUS). RPAC submits Port Call requests to DMO. IPAC/RPAC certifies OBI within 5-10 business days." },
  { title: "Complete Unit Checkout", desc: "Obtain your battalion/unit checkout sheet. Complete all checkout requirements (supply, armory, S-1, etc.). Requested detach date is the day you pick up endorsed orders." },
  { title: "Pick Up Endorsed Orders", desc: "Collect original orders and endorsement from IPAC, RPAC, Satellite Support Center, or S-1. Basic Orders are NOT valid without proper IPAC/RPAC endorsement." },
  { title: "Register for HHG Shipment", desc: "Go to move.mil. Upload orders and create shipment requests (HHG, UB, NTS, PPM). Contact local DMO early. Peak season: May-August." },
];

export default function PCSOrdersProcessingContent({ data }: { data: { references: Ref[] } }) {
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
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What Is PCS Orders Processing?</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">PCS orders processing is the administrative workflow for receiving, endorsing, and executing your Permanent Change of Station orders. You access your Basic Orders through the Outbound Interview (OBI) module in Marine Online (MOL). Your supporting IPAC or RPAC endorses the orders and provides final authorization to detach from your current command.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">Orders System</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">BOS/MOL</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Basic Orders System in MOL</p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <div className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">HHG System</div>
                <div className="mt-1 text-lg font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">move.mil</div>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Defense Personal Property</p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl bg-[var(--sa-navy)] p-6 text-[var(--sa-cream)]">
              <div className="flex items-center gap-2 text-xl font-bold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
                BLUF
              </div>
              <p className="mt-2 text-sm opacity-90">Access orders through MOL OBI module. Get IPAC/RPAC endorsement before detaching. Register on move.mil for HHG shipment. Basic Orders are NOT valid without proper endorsement.</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">MOL OBI Access</span>
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">IPAC Endorsement Required</span>
                <span className="rounded-lg border border-white/30 bg-white/10 px-3 py-1">Register move.mil</span>
              </div>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-green-200 bg-green-50 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-green-800 dark:text-green-400">Who Receives PCS Orders?</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-green-800 dark:text-zinc-300">
                  <li>HQMC monitors assign you to a new PDS</li>
                  <li>Complete initial training with orders to operating forces</li>
                  <li>Transfer between CONUS and OCONUS</li>
                  <li>Humanitarian, hardship, or approved reassignment</li>
                </ul>
              </div>
              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-blue-800 dark:text-blue-400">Key Systems</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-blue-800 dark:text-zinc-300">
                  <li><strong>BOS:</strong> Basic Orders System in MOL</li>
                  <li><strong>OBI:</strong> Outbound Interview module</li>
                  <li><strong>DPS/move.mil:</strong> HHG shipment registration</li>
                  <li><strong>MROWS:</strong> Reserve Component orders</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "steps" && (
          <section className="w-full rounded-xl border border-black/5 bg-white p-4 sm:p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">How PCS Orders Processing Works</h2>
            <div className="mt-4 space-y-4">
              {PCS_ORDERS_STEPS.map((step, index) => (
                <div key={step.title} className="rounded-xl border border-black/10 bg-[var(--sa-cream)]/40 p-4 dark:border-white/15 dark:bg-white/10">
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
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">OBI Status Meanings</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li><strong>MOL Approved:</strong> S-1 approved. RPAC/IPAC ready to work on your package.</li>
                  <li><strong>Admin Being Worked:</strong> Admin clerks processing your package.</li>
                  <li><strong>Admin Finalized:</strong> Package prepared and ready for certification.</li>
                  <li><strong>Certified:</strong> Package complete. Pick up on your detach date.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Order Modifications</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Requests to modify or cancel orders go through your Chain of Command</li>
                  <li>IPAC/RPAC does not modify orders—your parent command submits requests</li>
                  <li>OBI modifications go back to unit for approval. RPAC certifies within 2 days.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800 dark:border-white/15 dark:bg-white/10 dark:text-[var(--sa-cream)]">
                <div className="text-xs font-semibold">Timing Requirements</div>
                <ul className="mt-1 list-disc space-y-1 pl-5 text-xs">
                  <li><strong>CONUS to CONUS:</strong> Unit approval NLT 14 days prior</li>
                  <li><strong>OCONUS Unaccompanied:</strong> Unit approval NLT 30 days prior</li>
                  <li><strong>OCONUS Accompanied:</strong> Unit approval NLT 60 days prior</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Obligated Service</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Must have sufficient obligated service to complete prescribed tour length</li>
                  <li>Extensions or reenlistment resolve obligations before orders execute</li>
                  <li>Request extensions through your Career Planner</li>
                </ul>
              </div>
              <div className="rounded-xl border border-red-200 bg-red-50 p-4 dark:border-white/15 dark:bg-white/10">
                <h3 className="font-bold text-red-800 dark:text-red-400">PCA Orders (Local Moves)</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-red-800 dark:text-zinc-300">
                  <li>Executed same day</li>
                  <li>Checkout at 0800, report by 2359</li>
                  <li>No travel days, leave in conjunction, or travel entitlements</li>
                  <li>Bring completed checkout sheet on departure day</li>
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
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">OCONUS Accompanied Tours</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Complete Area Clearance/Dependent Entry Approval (DEA)</li>
                  <li>Submit Medical Suitability screening for all dependents</li>
                  <li>Obtain no-fee passports (DD Form 1056)</li>
                  <li>Complete JKO Anti-Terrorism certificate for dependents over 16</li>
                  <li>IPAC/RPAC coordinates Port Call through DMO</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">EFMP Families</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>All PCS orders for EFMP-enrolled sponsors route to HQMC EFMP for screening (MCO 1754.4C)</li>
                  <li>Orders reviewed for medical and educational suitability at proposed location</li>
                  <li>EFMP enrollment does not prevent deployments or IA assignments</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">TAD or FAP Status</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Verify with your S-1</li>
                  <li>Provide a detaching endorsement to IPAC/RPAC before you detach</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Dual-Military Couples</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Coordinate detach dates with your spouse&apos;s command</li>
                  <li>Submit spouse&apos;s travel claim copy with your travel voucher</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Reserve Component</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>ADOS or mobilization orders over 180 days use MROWS</li>
                  <li>Contact your I-I staff for Reserve-specific procedures</li>
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
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Dependents incorrect in MOL</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300"><strong>Solution:</strong> Submit an EPAR through MOL or visit your IPAC/RPAC with supporting documentation (birth certificates, marriage license) to correct MCTFS records before your package processes.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Insufficient obligated service for OCONUS tour</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300"><strong>Solution:</strong> Contact your Career Planner to extend or reenlist. Orders require sufficient service to complete the prescribed tour length.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">OBI not approved by unit</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300"><strong>Solution:</strong> Contact your S-1 to approve the OBI in MOL. IPAC/RPAC cannot process your package until the unit approves.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Picked up orders without endorsement</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300"><strong>Solution:</strong> Return to IPAC/RPAC. Basic Orders are not valid for travel without proper endorsement. You are not authorized to detach without endorsed orders.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">DMO has no availability during peak season</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300"><strong>Solution:</strong> Contact DMO early. Register on move.mil as soon as you receive orders. Scheduling is first-come, first-served. Peak season runs May through August.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Area Clearance delayed for OCONUS move</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300"><strong>Solution:</strong> Submit all required documents (Medical Suitability, JKO certificates) to IPAC/RPAC as early as possible. Area Clearances take time to process.</p>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">No sponsor assigned at gaining command</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300"><strong>Solution:</strong> Contact your IRR program. MCO 1320.11H mandates sponsor assignment. IRR connects you to gaining installation POCs and Welcome Aboard Packet.</p>
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
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">HQMC BOS Support</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">DSN 278-9971</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Local IPAC/RPAC</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">Contact your installation</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Local DMO</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">Transportation Office</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">IRR Program</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">Marine & Family Programs</div>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Approval Timelines</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="rounded-md border border-red-200 bg-red-50 p-3 dark:border-white/15 dark:bg-white/10">
              <div className="font-medium text-red-700 dark:text-[var(--sa-cream)]">OCONUS Accompanied</div>
              <div className="text-xs text-red-600 dark:text-zinc-300">NLT 60 days prior</div>
            </li>
            <li className="rounded-md border border-amber-200 bg-amber-50 p-3 dark:border-white/15 dark:bg-white/10">
              <div className="font-medium text-amber-700 dark:text-[var(--sa-cream)]">OCONUS Unaccompanied</div>
              <div className="text-xs text-amber-600 dark:text-zinc-300">NLT 30 days prior</div>
            </li>
            <li className="rounded-md border border-black/10 bg-white p-3 shadow-sm dark:border-white/15 dark:bg-black/60">
              <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">CONUS PCS</div>
              <div className="text-xs text-zinc-700 dark:text-zinc-300">NLT 14 days prior</div>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Links</h3>
          <ul className="mt-3 space-y-1 text-sm">
            {data.references.filter((ref) => ref.isQuickLink).map((ref) => (
              <li key={ref.title}><a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-[var(--sa-red)] underline hover:no-underline">{ref.title}</a></li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-white/15 dark:bg-white/10">
          <h3 className="font-semibold text-amber-800 dark:text-amber-400">Peak Season</h3>
          <p className="mt-1 text-xs text-amber-700 dark:text-zinc-300">May through August. Contact DMO and register on move.mil as early as possible for HHG scheduling.</p>
        </section>
      </aside>
    </div>
  );
}
