"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Plane,
  CheckCircle2,
  Circle,
  Clock,
  FileText,
  AlertTriangle,
  ExternalLink,
  ChevronLeft,
  Printer,
} from "lucide-react";

type Step = {
  id: string;
  title: string;
  description: string;
  timeline: string;
  details: string[];
  documents?: string[];
  links?: { title: string; href: string }[];
  warning?: string;
  tip?: string;
};

const STEPS: Step[] = [
  {
    id: "receive-orders",
    title: "Receive and Review Orders",
    description: "Get your orders and understand your entitlements",
    timeline: "60-90 days before PCS",
    details: [
      "Obtain your PCS orders from your admin section",
      "Review the orders for accuracy (name, SSN, duty station, report date)",
      "Note your entitlements (DLA, travel days, advance pay eligibility)",
      "Identify if you're authorized TLE, PTDY, or house hunting leave",
    ],
    documents: ["PCS Orders"],
    tip: "Request orders as early as possible. The earlier you start, the smoother your move will be.",
  },
  {
    id: "schedule-hhg",
    title: "Schedule Household Goods Move",
    description: "Arrange for your belongings to be shipped",
    timeline: "45-60 days before PCS",
    details: [
      "Log into move.mil and create your shipment request",
      "Choose between a Government-arranged move (HHG) or Personally Procured Move (PPM/DITY)",
      "Schedule your pack and pickup dates with the TSP",
      "Arrange for storage if needed (NTS for long-term, SIT for temporary)",
    ],
    documents: ["PCS Orders", "Inventory of high-value items"],
    links: [
      { title: "Move.mil", href: "https://move.mil/" },
      { title: "PPM Calculator", href: "https://www.move.mil/resources/ppm-estimator" },
    ],
    warning: "Book early! Peak PCS season (May-August) has limited availability. Late booking may delay your move.",
  },
  {
    id: "transportation",
    title: "Arrange Personal Transportation",
    description: "Plan how you and your family will travel",
    timeline: "30-45 days before PCS",
    details: [
      "Decide: drive POV, ship POV, or fly and rent",
      "If shipping POV, schedule through the Vehicle Processing Center (VPC)",
      "Book airline tickets through SATO/CTO if flying",
      "For OCONUS moves, schedule POV drop-off at VPC",
    ],
    documents: ["Vehicle registration", "Driver's license"],
    links: [
      { title: "VPC Locations", href: "https://www.ustranscom.mil/cmd/associated/sddc/pub/pcs/vpc.cfm" },
    ],
    tip: "OCONUS POV shipment can take 4-8 weeks. Plan accordingly.",
  },
  {
    id: "outbound-interview",
    title: "Complete Outbound Interview (OBI)",
    description: "Process your PCS travel entitlements through IPAC",
    timeline: "30 days before PCS",
    details: [
      "Schedule your Outbound Interview (OBI) with IPAC",
      "Bring your PCS orders and dependent documentation",
      "Verify all entitlements (DLA, mileage, per diem, TLE)",
      "Receive your advance pay if requested",
    ],
    documents: ["PCS Orders", "Dependent documentation"],
    warning: "Complete your OBI before departing. Failure to process may delay your travel entitlements.",
  },
  {
    id: "medical-dental",
    title: "Complete Medical/Dental Checkout",
    description: "Transfer your medical records",
    timeline: "30 days before PCS",
    details: [
      "Schedule a PCS medical appointment at your base clinic",
      "Request medical records transfer to new duty station",
      "Complete dental checkout and request records transfer",
      "For dependents on EFMP, coordinate with EFMP office at both locations",
    ],
    links: [
      { title: "TRICARE Moving", href: "https://www.tricare.mil/Moving" },
    ],
    tip: "EFMP families should contact the gaining installation's EFMP coordinator early to ensure services are available.",
  },
  {
    id: "housing",
    title: "Arrange Housing",
    description: "Secure housing at your new duty station",
    timeline: "30-45 days before PCS",
    details: [
      "Research housing options (base housing, off-base rentals)",
      "Contact the Housing Service Office at your new base",
      "Apply for base housing if desired (wait lists may apply)",
      "If eligible, use PTDY/house hunting leave to find housing",
    ],
    links: [
      { title: "Military Housing", href: "https://www.militaryonesource.mil/moving-pcs/moving-and-housing/housing-options" },
      { title: "BAH Calculator", href: "https://www.defensetravel.dod.mil/site/bahCalc.cfm" },
    ],
    tip: "Check BAH rates for your new ZIP code. Off-base housing costs vary significantly by location.",
  },
  {
    id: "checkout",
    title: "Complete Installation Checkout",
    description: "Clear all base obligations before departing",
    timeline: "10-14 days before PCS",
    details: [
      "Obtain checkout sheet from admin/IPAC",
      "Clear all required offices (supply, armory, finance, legal, etc.)",
      "Turn in any assigned equipment and gear",
      "Clear housing/barracks and schedule final inspection",
      "Return library books, gym equipment, etc.",
    ],
    documents: ["Checkout sheet", "PCS Orders"],
    warning: "Failure to properly check out can result in debt and delays at your new command.",
  },
  {
    id: "travel-advance",
    title: "Request Travel Advance",
    description: "Get advance funds for PCS travel",
    timeline: "5-10 days before PCS",
    details: [
      "Request DLA (Dislocation Allowance) advance during your OBI if needed",
      "Request travel advance pay through your disbursing office",
      "Ensure funds are deposited before departure",
      "Keep all receipts during travel for voucher submission",
    ],
    tip: "DLA is automatic for most PCS moves. Advance pay must be specifically requested during your OBI.",
  },
  {
    id: "execute-move",
    title: "Execute Your Move",
    description: "Pack out, travel, and check in",
    timeline: "PCS execution dates",
    details: [
      "Be present during pack-out; inventory all items with the movers",
      "Note any pre-existing damage on inventory sheets",
      "Travel to your new duty station per your orders",
      "Claim TLE if staying in temporary lodging en route",
    ],
    warning: "ALWAYS be present during pack-out. Sign the inventory only after reviewing it. Note all high-value items.",
  },
  {
    id: "checkin",
    title: "Check In and Complete Inbound Interview (IBI)",
    description: "Report to your new duty station",
    timeline: "Report date on orders",
    details: [
      "Report to your new command on or before your report date",
      "Complete check-in process with admin/S-1/IPAC",
      "Complete your Inbound Interview (IBI) to verify pay and entitlements",
      "Register in MCTFS at new unit",
      "In-process through required offices (medical, dental, security, etc.)",
    ],
    documents: ["PCS Orders", "Service Record Book", "Medical/Dental Records"],
  },
  {
    id: "receive-hhg",
    title: "Receive Household Goods",
    description: "Accept delivery and inspect items",
    timeline: "Within 30 days of arrival (typically)",
    details: [
      "Be present for HHG delivery",
      "Inspect all items as they are unpacked",
      "Document ANY damage on the delivery inventory",
      "File damage claims within 75 days of delivery",
    ],
    links: [
      { title: "File Claims", href: "https://www.move.mil/customer/claims" },
    ],
    warning: "You have only 75 days to file damage claims. Document everything with photos and the written inventory.",
  },
  {
    id: "travel-voucher",
    title: "Complete Travel Voucher Interview (TVI)",
    description: "Get reimbursed for your PCS expenses",
    timeline: "Within 5 days of arrival",
    details: [
      "Schedule your Travel Voucher Interview (TVI) with IPAC at your new command",
      "Bring all receipts (lodging, fuel, tolls, etc.)",
      "Include mileage and per diem documentation",
      "IPAC will process your claim for payment",
    ],
    documents: ["All travel receipts", "Lodging receipts", "Fuel receipts", "PCS Orders"],
    tip: "Complete your TVI promptly to avoid delays. Most vouchers are paid within 30 days of processing.",
  },
];

export default function PCSMovePage() {
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());

  const toggleStep = (stepId: string) => {
    setCompletedSteps((prev) => {
      const next = new Set(prev);
      if (next.has(stepId)) {
        next.delete(stepId);
      } else {
        next.add(stepId);
      }
      return next;
    });
  };

  const progress = (completedSteps.size / STEPS.length) * 100;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Link
            href="/life-events"
            className="mb-4 inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Life Events
          </Link>
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-amber-100 p-2 dark:bg-amber-900/30">
              <Plane className="h-6 w-6 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                PCS Move
              </h1>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Complete checklist for your permanent change of station
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={() => window.print()}
          className="hidden sm:flex items-center gap-2 rounded-lg border border-zinc-200 px-3 py-2 text-sm text-zinc-600 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
        >
          <Printer className="h-4 w-4" />
          Print
        </button>
      </div>

      {/* Progress Bar */}
      <div className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-zinc-900 dark:text-zinc-100">
            Your Progress
          </span>
          <span className="text-zinc-500 dark:text-zinc-400">
            {completedSteps.size} of {STEPS.length} steps complete
          </span>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
          <div
            className="h-full rounded-full bg-amber-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Key Info */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
          <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400">
            <Clock className="h-4 w-4" />
            <span className="font-medium">Start Early</span>
          </div>
          <p className="mt-1 text-sm text-amber-600 dark:text-amber-300">
            Begin 60-90 days before your report date for smoothest transition
          </p>
        </div>
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
          <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400">
            <FileText className="h-4 w-4" />
            <span className="font-medium">Key Systems</span>
          </div>
          <p className="mt-1 text-sm text-blue-600 dark:text-blue-300">
            Move.mil for HHG, OBI/IBI/TVI through IPAC for travel processing
          </p>
        </div>
        <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
          <div className="flex items-center gap-2 text-green-700 dark:text-green-400">
            <CheckCircle2 className="h-4 w-4" />
            <span className="font-medium">Entitlements</span>
          </div>
          <p className="mt-1 text-sm text-green-600 dark:text-green-300">
            DLA, travel pay, per diem, mileage, TLE (up to 14 days)
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-4">
        {STEPS.map((step, index) => {
          const isCompleted = completedSteps.has(step.id);

          return (
            <div
              key={step.id}
              className={`rounded-xl border bg-white shadow-sm transition dark:bg-black/40 ${
                isCompleted
                  ? "border-green-200 dark:border-green-800"
                  : "border-black/5 dark:border-white/15"
              }`}
            >
              <button
                onClick={() => toggleStep(step.id)}
                className="flex w-full items-start gap-4 p-4 text-left"
              >
                <div className="mt-0.5">
                  {isCompleted ? (
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                  ) : (
                    <Circle className="h-6 w-6 text-zinc-300 dark:text-zinc-600" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500">
                      Step {index + 1}
                    </span>
                    <span className="text-xs text-zinc-400 dark:text-zinc-500">•</span>
                    <span className="text-xs text-zinc-400 dark:text-zinc-500">
                      {step.timeline}
                    </span>
                  </div>
                  <h3
                    className={`mt-1 font-semibold ${
                      isCompleted
                        ? "text-green-700 dark:text-green-400 line-through"
                        : "text-[var(--sa-navy)] dark:text-[var(--sa-cream)]"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    {step.description}
                  </p>
                </div>
              </button>

              <div className="border-t border-zinc-100 px-4 pb-4 pt-3 dark:border-zinc-800">
                <div className="ml-10 space-y-4">
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {step.documents && (
                    <div>
                      <h4 className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                        Documents Needed
                      </h4>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {step.documents.map((doc) => (
                          <span
                            key={doc}
                            className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                          >
                            {doc}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {step.links && (
                    <div className="flex flex-wrap gap-3">
                      {step.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-[var(--sa-red)] hover:underline"
                        >
                          {link.title}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ))}
                    </div>
                  )}

                  {step.warning && (
                    <div className="flex items-start gap-2 rounded-lg bg-amber-50 p-3 dark:bg-amber-900/20">
                      <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600 dark:text-amber-400" />
                      <p className="text-sm text-amber-700 dark:text-amber-300">{step.warning}</p>
                    </div>
                  )}

                  {step.tip && (
                    <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        <span className="font-medium">Tip:</span> {step.tip}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Completion */}
      {completedSteps.size === STEPS.length && (
        <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center dark:border-green-800 dark:bg-green-900/20">
          <CheckCircle2 className="mx-auto h-12 w-12 text-green-500" />
          <h2 className="mt-4 text-xl font-semibold text-green-800 dark:text-green-200">
            PCS Complete!
          </h2>
          <p className="mt-2 text-green-700 dark:text-green-300">
            Welcome to your new duty station. Good luck at your new command!
          </p>
        </div>
      )}

      {/* Related Links */}
      <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
        <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          Related Topics
        </h3>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/roles/marines/travel-transportation/pcs-orders-processing"
            className="text-sm text-[var(--sa-red)] hover:underline"
          >
            PCS Orders Processing
          </Link>
          <Link
            href="/roles/marines/travel-transportation/household-goods-shipment"
            className="text-sm text-[var(--sa-red)] hover:underline"
          >
            Household Goods Shipment
          </Link>
          <Link
            href="/roles/marines/travel-transportation/dislocation-allowance"
            className="text-sm text-[var(--sa-red)] hover:underline"
          >
            Dislocation Allowance (DLA)
          </Link>
        </div>
      </div>
    </div>
  );
}
