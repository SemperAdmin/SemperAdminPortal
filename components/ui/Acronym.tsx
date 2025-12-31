"use client";

import { useState, useRef, useEffect } from "react";

type Props = {
  /** The acronym to display (e.g., "MCTFS", "BAH") */
  children: string;
  /** The full meaning of the acronym */
  title: string;
};

/**
 * Acronym component with hover tooltip showing the full meaning.
 * Helps users unfamiliar with military terminology understand acronyms.
 *
 * @example
 * <Acronym title="Marine Corps Total Force System">MCTFS</Acronym>
 * <Acronym title="Basic Allowance for Housing">BAH</Acronym>
 */
export function Acronym({ children, title }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState<"top" | "bottom">("top");
  const triggerRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (isVisible && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      // If too close to top, show tooltip below
      if (rect.top < 60) {
        setPosition("bottom");
      } else {
        setPosition("top");
      }
    }
  }, [isVisible]);

  return (
    <span className="relative inline-block">
      <span
        ref={triggerRef}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
        tabIndex={0}
        className="cursor-help border-b border-dotted border-[var(--sa-navy)]/40 dark:border-[var(--sa-cream)]/40 text-[var(--sa-navy)] dark:text-[var(--sa-cream)] font-medium"
        aria-describedby={isVisible ? "acronym-tooltip" : undefined}
      >
        {children}
      </span>
      {isVisible && (
        <span
          ref={tooltipRef}
          id="acronym-tooltip"
          role="tooltip"
          className={`absolute left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-md bg-[var(--sa-navy)] px-3 py-1.5 text-xs text-[var(--sa-cream)] shadow-lg dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)] ${
            position === "top" ? "bottom-full mb-2" : "top-full mt-2"
          }`}
        >
          {title}
          {/* Arrow */}
          <span
            className={`absolute left-1/2 -translate-x-1/2 border-4 border-transparent ${
              position === "top"
                ? "top-full border-t-[var(--sa-navy)] dark:border-t-[var(--sa-cream)]"
                : "bottom-full border-b-[var(--sa-navy)] dark:border-b-[var(--sa-cream)]"
            }`}
            aria-hidden="true"
          />
        </span>
      )}
    </span>
  );
}

/**
 * Common military acronyms with their definitions.
 * Use with the Acronym component or for reference.
 */
export const ACRONYM_DEFINITIONS: Record<string, string> = {
  // Administrative Systems
  MCTFS: "Marine Corps Total Force System",
  MOL: "Marine Online",
  JEPES: "Junior Enlisted Performance Evaluation System",
  TFRS: "Total Force Retention System",
  MCTIMS: "Marine Corps Training Information Management System",
  DTS: "Defense Travel System",
  GTCC: "Government Travel Charge Card",
  DEERS: "Defense Enrollment Eligibility Reporting System",
  OMPF: "Official Military Personnel File",
  SRB: "Service Record Book",

  // Pay & Allowances
  BAH: "Basic Allowance for Housing",
  BAS: "Basic Allowance for Subsistence",
  COLA: "Cost of Living Allowance",
  OHA: "Overseas Housing Allowance",
  FSA: "Family Separation Allowance",
  HFP: "Hostile Fire Pay",
  IDP: "Imminent Danger Pay",
  SDAP: "Special Duty Assignment Pay",
  ACIP: "Aviation Career Incentive Pay",
  FLPP: "Foreign Language Proficiency Pay",
  TSP: "Thrift Savings Plan",
  BRS: "Blended Retirement System",

  // Personnel
  MRO: "Marine Reported On",
  FLS: "First Line Supervisor",
  SER: "Senior Enlisted Reviewer",
  PME: "Professional Military Education",
  MOS: "Military Occupational Specialty",
  PMOS: "Primary Military Occupational Specialty",
  TIG: "Time in Grade",
  TIS: "Time in Service",
  EAS: "End of Active Service",
  PCS: "Permanent Change of Station",
  TAD: "Temporary Additional Duty",
  UA: "Unauthorized Absence",
  NJP: "Non-Judicial Punishment",
  ADSEP: "Administrative Separation",

  // Programs
  EFMP: "Exceptional Family Member Program",
  FCP: "Family Care Plan",
  UPFRP: "Unit, Personal and Family Readiness Program",
  SGLI: "Servicemembers' Group Life Insurance",
  FSGLI: "Family SGLI",
  TSGLI: "Traumatic Injury SGLI",
  VGLI: "Veterans' Group Life Insurance",
  TRICARE: "Military Health System",

  // Organizations
  IPAC: "Installation Personnel Administration Center",
  PAC: "Personnel Administration Center",
  CMC: "Commandant of the Marine Corps",
  HQMC: "Headquarters Marine Corps",
  BCNR: "Board for Correction of Naval Records",
  PERB: "Performance Evaluation Review Board",
  IGMC: "Inspector General of the Marine Corps",

  // Travel & Transportation
  HHG: "Household Goods",
  PPM: "Personally Procured Move",
  DITY: "Do It Yourself Move",
  DLA: "Dislocation Allowance",
  TLE: "Temporary Lodging Expense",
  POV: "Privately Owned Vehicle",

  // Inspections & Reports
  MCAAT: "Marine Corps Assessment & Assistance Team",
  MISSO: "Manpower Information Systems & Sustainment Operations",
  FAC: "Functional Area Checklist",
};
