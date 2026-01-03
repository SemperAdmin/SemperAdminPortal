"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";
import { InfoCard } from "./ui/InfoCard";
import { Truck, Clock, FileText, AlertTriangle, DollarSign, Plane, Ship, MapPin } from "lucide-react";

interface Reference {
  title: string;
  url: string;
  isQuickLink?: boolean;
}

interface Props {
  data: {
    references: Reference[];
  };
}

const KEY_POINTS = [
  { label: "HHG Shipment", value: "Government will ship household goods at no cost to you" },
  { label: "PPM/DITY", value: "Personally Procured Move available as alternative" },
  { label: "TLE", value: "Temporary Lodging Expense authorized for up to 14 days total" },
  { label: "DLA", value: "Dislocation Allowance is one-time payment for moving expenses" },
  { label: "Per Diem", value: "Authorized for travel days" },
  { label: "Weight Limit", value: "Based on pay grade" },
];

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "conus", label: "CONUS to CONUS" },
  { id: "ppm", label: "PPM Moves" },
  { id: "oconus", label: "CONUS to OCONUS" },
  { id: "return", label: "OCONUS to CONUS" },
  { id: "entitlements", label: "Entitlements" },
  { id: "references", label: "References", type: "references" as const },
];

const PROCESS_STEPS = [
  { step: 1, title: "Receive PCS orders", detail: "Orders specify report date, gaining command, and authorized entitlements." },
  { step: 2, title: "Schedule transportation counseling", detail: "Visit Personal Property Office or use move.mil to schedule HHG pickup. Decide between government move or PPM." },
  { step: 3, title: "Complete checkout procedures", detail: "Clear all required offices per installation checkout sheet. Obtain required signatures." },
  { step: 4, title: "Request advance DLA (optional)", detail: "Dislocation Allowance can be advanced before departure. Submit request through admin." },
  { step: 5, title: "Travel to new duty station", detail: "Per diem and mileage authorized for official travel days. Use Defense Table of Official Distances (DTOD) for mileage calculation." },
  { step: 6, title: "Check in at new command", detail: "Report to gaining command by date specified in orders. Complete check-in procedures." },
  { step: 7, title: "Receive HHG delivery", detail: "Inspect all items for damage. Annotate damages on inventory form before signing." },
  { step: 8, title: "File travel claim", detail: "Submit travel voucher within 5 days of completing travel. Include all receipts for lodging and expenses over $75." },
];

const ENTITLEMENTS = [
  { entitlement: "Dislocation Allowance (DLA)", description: "One-time payment for miscellaneous moving expenses", notes: "Amount based on with/without dependents status" },
  { entitlement: "Temporary Lodging Expense (TLE)", description: "Reimburses lodging and meals during transition", notes: "Up to 10 days at old PDS, 14 days at new PDS (combined max 14 days)" },
  { entitlement: "Per Diem", description: "Daily allowance for meals and incidental expenses while traveling", notes: "Rates vary by location" },
  { entitlement: "Mileage", description: "Reimbursement for POV travel", notes: "Based on official distance, not actual miles driven" },
  { entitlement: "HHG Shipment", description: "Government-paid household goods transportation", notes: "Weight limit based on pay grade" },
];

const CONUS_CHECKLIST = [
  { category: "Financial Preparation", items: [
    "Confirm Dislocation Allowance (DLA) eligibility—flat-rate payment for move-in/move-out costs",
    "Submit Travel Advance request if you require funds for fuel, lodging, or food",
  ]},
  { category: "Property & Gear", items: [
    "CIF/IIF: Complete 100% turn-in or 'Gear-to-Gear' transfer if orders allow",
    "CBRN: Return all gas masks and serialized gear to unit armory or warehouse",
  ]},
  { category: "MOL & Admin", items: [
    "Complete Outbound Interview (OBI) on MOL",
    "Obtain Command Departure on MOL before leaving to ensure pay/entitlements transition correctly",
  ]},
];

const PPM_REQUIREMENTS = [
  { requirement: "DD Form 2278 Authorization", description: "You MUST receive an approved DD Form 2278 (Application for Do-It-Yourself Move) from DMO BEFORE you move any gear", critical: true },
  { requirement: "Empty Weight Ticket", description: "Get a certified weight ticket with fuel tank full and no gear/people in the vehicle", critical: true },
  { requirement: "Full Weight Ticket", description: "Get a certified ticket after the vehicle is fully loaded with your HHG", critical: true },
  { requirement: "Ticket Requirements", description: "Must include: Your name, EDIPI, date, location, and signature of the weighmaster", critical: true },
  { requirement: "45-Day Settlement", description: "Submit your claim with all weight tickets and rental receipts to DMO within 45 days of move", critical: false },
  { requirement: "Tax Documentation", description: "PPM profit is taxable income—keep all receipts for packing materials and fuel to offset tax burden", critical: false },
];

const OCONUS_REQUIREMENTS = [
  { category: "Overseas Suitability Screening (OSS)", items: [
    "Start within 10 days of receiving Web Orders",
    "Every dependent must be cleared by a military physician",
    "Ensures destination has medical/educational facilities to support family",
  ]},
  { category: "Pet Transportation - Hawaii", items: [
    "Requires specific rabies blood tests (FAVN)",
    "120-day waiting period to avoid quarantine",
    "Book pet slot on Patriot Express through DMO early",
  ]},
  { category: "Pet Transportation - Japan", items: [
    "Requires microchipping and two rabies shots",
    "180-day blood test waiting period",
    "Patriot Express space is limited—book immediately with orders",
  ]},
  { category: "POV Shipping", items: [
    "Clean interior and exterior until 'spotless' to pass agricultural inspections",
    "Ensure fuel level is at 1/4 tank or less at drop-off",
    "Schedule VPC appointment as early as possible",
  ]},
];

const RETURN_REQUIREMENTS = [
  { category: "Housing & Area Clearance", items: [
    "Schedule 'Pre-Inspection' for government quarters at least 30 days out",
    "Complete Area Clearance for all dependents verifying authorization to return to U.S.",
  ]},
  { category: "U.S. Customs", items: [
    "Ensure no prohibited items (Japanese knives, specific plants, counterfeit goods) in HHG",
    "Provide signed Customs Power of Attorney to the shipping agent",
  ]},
  { category: "Entitlement Changes", items: [
    "Overseas Housing Allowance (OHA) and COLA stop on day you depart overseas station",
    "Basic Allowance for Housing (BAH) restarts at 'Transit' rate until you check into new command",
  ]},
];

export function PCSMoveContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={Truck} title="PCS Move Overview" variant="info">
          A Permanent Change of Station (PCS) involves moving from one duty station to another.
          You are entitled to travel pay, household goods shipment, and temporary lodging
          allowances. The Joint Travel Regulations (JTR) govern all PCS entitlements.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Points
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <tbody>
                {KEY_POINTS.map((point) => (
                  <tr key={point.label} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{point.label}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{point.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Move Types
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-medium text-blue-800 dark:text-blue-200">CONUS to CONUS</h4>
              </div>
              <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
                Standard move within continental United States
              </p>
            </div>
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-green-600 dark:text-green-400" />
                <h4 className="font-medium text-green-800 dark:text-green-200">Personally Procured Move</h4>
              </div>
              <p className="mt-1 text-sm text-green-700 dark:text-green-300">
                You move yourself and keep the profit
              </p>
            </div>
            <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
              <div className="flex items-center gap-2">
                <Plane className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-medium text-purple-800 dark:text-purple-200">CONUS to OCONUS</h4>
              </div>
              <p className="mt-1 text-sm text-purple-700 dark:text-purple-300">
                Moving overseas (Hawaii, Japan, etc.)
              </p>
            </div>
            <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
              <div className="flex items-center gap-2">
                <Ship className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                <h4 className="font-medium text-amber-800 dark:text-amber-200">OCONUS to CONUS</h4>
              </div>
              <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
                Returning from overseas assignment
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Standard PCS Process
          </h3>
          <div className="mt-4 space-y-3">
            {PROCESS_STEPS.slice(0, 4).map((step) => (
              <div key={step.step} className="flex items-start gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">
                  {step.step}
                </span>
                <div>
                  <span className="font-medium text-zinc-900 dark:text-zinc-100">{step.title}</span>
                  <span className="ml-2 text-sm text-zinc-600 dark:text-zinc-400">— {step.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    ),

    conus: (
      <div className="space-y-6">
        <InfoCard icon={MapPin} title="CONUS to CONUS Moves" variant="info">
          This is the standard move within the continental United States. Your focus is on a <strong>clean break</strong> from your current unit and a <strong>smooth transition</strong> to the next.
        </InfoCard>

        {CONUS_CHECKLIST.map((section) => (
          <section key={section.category} className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              {section.category}
            </h3>
            <ul className="mt-4 space-y-3">
              {section.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[var(--sa-red)] mt-0.5">✓</span>
                  <span className="text-sm text-zinc-700 dark:text-zinc-300">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Deadlines
          </h3>
          <div className="mt-4 space-y-3">
            <div className="flex items-start gap-4">
              <Clock className="h-5 w-5 shrink-0 text-[var(--sa-red)]" />
              <div>
                <span className="font-medium text-zinc-900 dark:text-zinc-100">Within 5 days of arrival:</span>
                <span className="ml-2 text-zinc-600 dark:text-zinc-400">File travel claim</span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="h-5 w-5 shrink-0 text-[var(--sa-red)]" />
              <div>
                <span className="font-medium text-zinc-900 dark:text-zinc-100">Within 75 days of delivery:</span>
                <span className="ml-2 text-zinc-600 dark:text-zinc-400">File claims for lost/damaged HHG</span>
              </div>
            </div>
          </div>
        </section>

        <InfoCard icon={AlertTriangle} title="Command Departure Required" variant="warning">
          <strong>Do not leave</strong> your current duty station without obtaining a Command Departure on MOL. Failure to do so can result in pay and entitlement issues at your gaining command.
        </InfoCard>
      </div>
    ),

    ppm: (
      <div className="space-y-6">
        <InfoCard icon={Truck} title="Personally Procured Moves (PPM)" variant="info">
          A PPM puts the responsibility—and the <strong>potential profit</strong>—of the move in your hands. You move your own household goods and receive reimbursement based on what the government would have paid.
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            PPM Requirements
          </h2>
          <div className="mt-4 space-y-3">
            {PPM_REQUIREMENTS.map((req) => (
              <div key={req.requirement} className={"rounded-lg p-4 " + (req.critical ? "border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20" : "bg-zinc-50 dark:bg-zinc-800/50")}>
                <h4 className={"font-medium " + (req.critical ? "text-red-800 dark:text-red-200" : "text-zinc-900 dark:text-zinc-100")}>
                  {req.requirement}
                  {req.critical && <span className="ml-2 text-xs font-bold text-red-600 dark:text-red-400">REQUIRED</span>}
                </h4>
                <p className={"mt-1 text-sm " + (req.critical ? "text-red-700 dark:text-red-300" : "text-zinc-600 dark:text-zinc-400")}>
                  {req.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Weight Ticket Process
          </h3>
          <div className="mt-4 space-y-4">
            {[
              { step: "1", title: "Empty Weight", detail: "Get certified weight ticket with fuel tank FULL and NO gear/people in vehicle" },
              { step: "2", title: "Load Vehicle", detail: "Pack all household goods you are moving yourself" },
              { step: "3", title: "Full Weight", detail: "Get certified weight ticket with vehicle fully loaded" },
              { step: "4", title: "Submit Claim", detail: "Within 45 days, submit claim with all weight tickets and receipts to DMO" },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">
                  {item.step}
                </span>
                <div>
                  <h4 className="font-medium text-zinc-900 dark:text-zinc-100">{item.title}</h4>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <InfoCard icon={DollarSign} title="Tax Implications" variant="warning">
          The profit from a PPM is considered <strong>taxable income</strong>. Keep all receipts for packing materials, truck rental, fuel, and moving equipment to offset the tax burden. You will receive a 1099 for the PPM payment.
        </InfoCard>
      </div>
    ),

    oconus: (
      <div className="space-y-6">
        <InfoCard icon={Plane} title="CONUS to OCONUS Moves" variant="info">
          Moving overseas (or &quot;non-foreign&quot; OCONUS like Hawaii) requires a significantly higher level of <strong>medical and logistical scrutiny</strong>. Start your preparations immediately upon receiving orders.
        </InfoCard>

        {OCONUS_REQUIREMENTS.map((section) => (
          <section key={section.category} className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              {section.category}
            </h3>
            <ul className="mt-4 space-y-2">
              {section.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[var(--sa-red)] mt-0.5">•</span>
                  <span className="text-sm text-zinc-700 dark:text-zinc-300">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Critical Timelines
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
              <h4 className="font-medium text-amber-800 dark:text-amber-200">OSS Screening</h4>
              <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">Start within 10 days of receiving Web Orders</p>
            </div>
            <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
              <h4 className="font-medium text-amber-800 dark:text-amber-200">Hawaii Pets</h4>
              <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">120-day waiting period after FAVN test</p>
            </div>
            <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
              <h4 className="font-medium text-amber-800 dark:text-amber-200">Japan Pets</h4>
              <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">180-day waiting period after blood test</p>
            </div>
            <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
              <h4 className="font-medium text-amber-800 dark:text-amber-200">Patriot Express</h4>
              <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">Book pet slot through DMO ASAP</p>
            </div>
          </div>
        </section>

        <InfoCard icon={AlertTriangle} title="OSS is Critical" variant="warning">
          <strong>Do not delay</strong> your Overseas Suitability Screening. If a dependent cannot be medically cleared, your orders may be modified or cancelled. Start within 10 days of receiving orders.
        </InfoCard>
      </div>
    ),

    return: (
      <div className="space-y-6">
        <InfoCard icon={Ship} title="OCONUS to CONUS (Return from Overseas)" variant="info">
          The return process is heavily focused on <strong>Customs</strong> and the finalization of your overseas entitlements. Plan ahead to avoid delays at your new duty station.
        </InfoCard>

        {RETURN_REQUIREMENTS.map((section) => (
          <section key={section.category} className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              {section.category}
            </h3>
            <ul className="mt-4 space-y-2">
              {section.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[var(--sa-red)] mt-0.5">•</span>
                  <span className="text-sm text-zinc-700 dark:text-zinc-300">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Entitlement Transitions
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-medium text-red-800 dark:text-red-200">Stops on Departure</h4>
              <ul className="mt-2 space-y-1 text-sm text-red-700 dark:text-red-300">
                <li>• Overseas Housing Allowance (OHA)</li>
                <li>• Cost of Living Allowance (COLA)</li>
              </ul>
            </div>
            <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-4 dark:bg-green-900/20">
              <h4 className="font-medium text-green-800 dark:text-green-200">Starts at New PDS</h4>
              <ul className="mt-2 space-y-1 text-sm text-green-700 dark:text-green-300">
                <li>• BAH at &quot;Transit&quot; rate initially</li>
                <li>• Full BAH upon check-in</li>
              </ul>
            </div>
          </div>
        </section>

        <InfoCard icon={AlertTriangle} title="Customs Inspection" variant="warning">
          Ensure <strong>no prohibited items</strong> are in your household goods. Common issues include: Japanese knives over a certain length, plants, seeds, and counterfeit goods. Violations can result in seizure and fines.
        </InfoCard>

        <InfoCard icon={FileText} title="30-Day Pre-Inspection" variant="default">
          Schedule your government quarters pre-inspection <strong>at least 30 days</strong> before your planned move-out date. This gives you time to address any discrepancies before final inspection.
        </InfoCard>
      </div>
    ),

    entitlements: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            PCS Entitlements
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Entitlement</th>
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Notes</th>
                </tr>
              </thead>
              <tbody>
                {ENTITLEMENTS.map((item) => (
                  <tr key={item.entitlement} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.entitlement}</td>
                    <td className="py-3 pr-4 text-zinc-600 dark:text-zinc-400">{item.description}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <InfoCard icon={DollarSign} title="Weight Allowances by Grade" variant="default">
          <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
            <div>E-1 to E-4: 8,000 lbs</div>
            <div>E-5: 9,000 lbs</div>
            <div>E-6: 11,000 lbs</div>
            <div>E-7: 13,000 lbs</div>
            <div>E-8: 14,000 lbs</div>
            <div>E-9: 15,000 lbs</div>
            <div>O-1/O-2: 10,000 lbs</div>
            <div>O-3: 13,000 lbs</div>
            <div>O-4: 14,000 lbs</div>
            <div>O-5: 16,000 lbs</div>
            <div>O-6: 18,000 lbs</div>
            <div>O-7+: 18,000 lbs</div>
          </div>
          <p className="mt-2 text-xs text-zinc-500">With dependents: Add 1,000-2,000 lbs. Check JTR for exact amounts.</p>
        </InfoCard>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common Issues & Solutions
          </h3>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
              <h4 className="font-medium text-amber-800 dark:text-amber-200">Damaged HHG</h4>
              <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">Document damage immediately on delivery inventory. File claim within 75 days.</p>
            </div>
            <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
              <h4 className="font-medium text-amber-800 dark:text-amber-200">Weight Overage</h4>
              <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">You pay for weight exceeding your allowance. Weigh before shipping.</p>
            </div>
            <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
              <h4 className="font-medium text-amber-800 dark:text-amber-200">TLE Limits</h4>
              <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">Cannot exceed combined 14 days (up to 10 at old PDS + 14 at new PDS). Plan accordingly.</p>
            </div>
          </div>
        </section>

        <InfoCard icon={AlertTriangle} title="Inspect Before Signing!" variant="warning">
          When your household goods are delivered, inspect <strong>EVERYTHING</strong> before signing the
          inventory. Once you sign, it&apos;s harder to prove damage occurred during the move.
          Note any damage on the inventory form immediately.
        </InfoCard>
      </div>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
