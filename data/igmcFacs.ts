// IGMC Functional Area Checklists (FACs) Data

export type FACCategory = "CoRE" | "Non-CoRE" | "CoRE+";

export type FACSlug =
  | "body-composition"
  | "career-planning"
  | "casualty-affairs"
  | "dts"
  | "directives-management"
  | "force-preservation-council"
  | "gtcc"
  | "leave-liberty"
  | "legal-administration"
  | "sponsorship-program"
  | "military-awards"
  | "pes"
  | "postal-military"
  | "records-management"
  | "reports-management"
  | "separation-retirement"
  | "trp"
  | "voting-assistance";

export interface FunctionalAreaChecklist {
  name: string;
  slug: FACSlug;
  category: FACCategory;
  faNumber: string;
  sponsor: string;
  sponsorAbbrev: string;
  effectiveDate: string;
  externalUrl: string;
}

// Base URL for IGMC FACs - external reference to igmc.marines.mil
const FACS_BASE_URL = "https://www.igmc.marines.mil/Divisions/Inspections-Division/Checklists/";

export const functionalAreaChecklists: FunctionalAreaChecklist[] = [
  {
    name: "Body Composition and Military Appearance Program",
    slug: "body-composition",
    category: "CoRE",
    faNumber: "6110",
    sponsor: "TECOM",
    sponsorAbbrev: "HPB",
    effectiveDate: "5/15/2025",
    externalUrl: FACS_BASE_URL,
  },
  {
    name: "Career Planning Program",
    slug: "career-planning",
    category: "CoRE",
    faNumber: "1040",
    sponsor: "M&RA",
    sponsorAbbrev: "MMEA",
    effectiveDate: "3/7/2024",
    externalUrl: FACS_BASE_URL,
  },
  {
    name: "Casualty Affairs",
    slug: "casualty-affairs",
    category: "CoRE",
    faNumber: "3040",
    sponsor: "M&RA",
    sponsorAbbrev: "MF",
    effectiveDate: "5/15/2025",
    externalUrl: FACS_BASE_URL,
  },
  {
    name: "Defense Travel System (DTS)",
    slug: "dts",
    category: "CoRE",
    faNumber: "4650.39",
    sponsor: "P&R",
    sponsorAbbrev: "RFF",
    effectiveDate: "5/15/2025",
    externalUrl: FACS_BASE_URL,
  },
  {
    name: "Directives Management",
    slug: "directives-management",
    category: "CoRE",
    faNumber: "5215",
    sponsor: "AR",
    sponsorAbbrev: "ARDB",
    effectiveDate: "9/30/2025",
    externalUrl: FACS_BASE_URL,
  },
  {
    name: "Force Preservation Council (FPC) Program",
    slug: "force-preservation-council",
    category: "CoRE",
    faNumber: "1500.6",
    sponsor: "HQMC",
    sponsorAbbrev: "MF",
    effectiveDate: "2/10/2025",
    externalUrl: FACS_BASE_URL,
  },
  {
    name: "Government Travel Charge Card Program (GTCCP)",
    slug: "gtcc",
    category: "CoRE",
    faNumber: "4600.4",
    sponsor: "P&R",
    sponsorAbbrev: "RFF",
    effectiveDate: "11/3/2025",
    externalUrl: FACS_BASE_URL,
  },
  {
    name: "Leave, Liberty and Administrative Absence",
    slug: "leave-liberty",
    category: "Non-CoRE",
    faNumber: "1050",
    sponsor: "M&RA",
    sponsorAbbrev: "MPO",
    effectiveDate: "9/3/2025",
    externalUrl: FACS_BASE_URL,
  },
  {
    name: "Legal Administration",
    slug: "legal-administration",
    category: "CoRE",
    faNumber: "5800.16",
    sponsor: "HQMC",
    sponsorAbbrev: "JAD",
    effectiveDate: "9/23/2025",
    externalUrl: FACS_BASE_URL,
  },
  {
    name: "Marine Corps Sponsorship Program",
    slug: "sponsorship-program",
    category: "Non-CoRE",
    faNumber: "1320",
    sponsor: "HQMC",
    sponsorAbbrev: "MF",
    effectiveDate: "5/15/2025",
    externalUrl: FACS_BASE_URL,
  },
  {
    name: "Military Awards",
    slug: "military-awards",
    category: "CoRE",
    faNumber: "1650",
    sponsor: "M&RA",
    sponsorAbbrev: "MMPB",
    effectiveDate: "6/3/2025",
    externalUrl: FACS_BASE_URL,
  },
  {
    name: "Performance Evaluation System (PES)",
    slug: "pes",
    category: "CoRE",
    faNumber: "1610",
    sponsor: "M&RA",
    sponsorAbbrev: "MMPB",
    effectiveDate: "5/15/2025",
    externalUrl: FACS_BASE_URL,
  },
  {
    name: "Postal Affairs and Official Mail Program - Military Postal Activity",
    slug: "postal-military",
    category: "CoRE+",
    faNumber: "5110.1",
    sponsor: "M&RA",
    sponsorAbbrev: "MF",
    effectiveDate: "6/3/2025",
    externalUrl: FACS_BASE_URL,
  },
  {
    name: "Records Management",
    slug: "records-management",
    category: "CoRE",
    faNumber: "5210",
    sponsor: "AR",
    sponsorAbbrev: "ARD",
    effectiveDate: "9/23/2025",
    externalUrl: FACS_BASE_URL,
  },
  {
    name: "Reports Management",
    slug: "reports-management",
    category: "Non-CoRE",
    faNumber: "5214",
    sponsor: "AR",
    sponsorAbbrev: "ARDB",
    effectiveDate: "4/29/2024",
    externalUrl: FACS_BASE_URL,
  },
  {
    name: "Separation, Retirement and Limited Duty",
    slug: "separation-retirement",
    category: "CoRE",
    faNumber: "1900.16",
    sponsor: "M&RA",
    sponsorAbbrev: "MMSR",
    effectiveDate: "3/24/2025",
    externalUrl: FACS_BASE_URL,
  },
  {
    name: "Transition Readiness Program (TRP)",
    slug: "trp",
    category: "CoRE",
    faNumber: "1700.31",
    sponsor: "M&RA",
    sponsorAbbrev: "MF",
    effectiveDate: "5/15/2025",
    externalUrl: FACS_BASE_URL,
  },
  {
    name: "Voting Assistance Program",
    slug: "voting-assistance",
    category: "CoRE",
    faNumber: "1742.1",
    sponsor: "M&RA",
    sponsorAbbrev: "MF",
    effectiveDate: "5/15/2025",
    externalUrl: FACS_BASE_URL,
  },
];

// Helper functions
export function getFACBySlug(slug: string): FunctionalAreaChecklist | undefined {
  return functionalAreaChecklists.find((fac) => fac.slug === slug);
}

export function getFACsByCategory(category: FACCategory): FunctionalAreaChecklist[] {
  return functionalAreaChecklists.filter((fac) => fac.category === category);
}

export function getFACsBySponsor(sponsor: string): FunctionalAreaChecklist[] {
  return functionalAreaChecklists.filter((fac) => fac.sponsor === sponsor);
}

export function getUniqueSponors(): string[] {
  return [...new Set(functionalAreaChecklists.map((fac) => fac.sponsor))];
}

export function getCategoryCounts(): Record<FACCategory, number> {
  return functionalAreaChecklists.reduce(
    (acc, f) => {
      acc[f.category]++;
      return acc;
    },
    { CoRE: 0, "Non-CoRE": 0, "CoRE+": 0 } as Record<FACCategory, number>
  );
}

export function getAllFACSlugs(): FACSlug[] {
  return functionalAreaChecklists.map((fac) => fac.slug);
}
