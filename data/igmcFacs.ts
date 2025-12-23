// IGMC Functional Area Checklists (FACs) Data

export type FACCategory = "CoRE" | "Non-CoRE" | "CoRE+";

export interface FunctionalAreaChecklist {
  name: string;
  category: FACCategory;
  faNumber: string;
  sponsor: string;
  sponsorAbbrev: string;
  effectiveDate: string;
  href?: string;
}

// Base URL for IGMC FACs - all link to the FACS page on igmc.marines.mil
const FACS_BASE_URL = "https://www.igmc.marines.mil/Divisions/Inspections-Division/Checklists/";

export const functionalAreaChecklists: FunctionalAreaChecklist[] = [
  {
    name: "Body Composition and Military Appearance Program",
    category: "CoRE",
    faNumber: "6110",
    sponsor: "TECOM",
    sponsorAbbrev: "HPB",
    effectiveDate: "5/15/2025",
    href: FACS_BASE_URL,
  },
  {
    name: "Career Planning Program",
    category: "CoRE",
    faNumber: "1040",
    sponsor: "M&RA",
    sponsorAbbrev: "MMEA",
    effectiveDate: "3/7/2024",
    href: FACS_BASE_URL,
  },
  {
    name: "Casualty Affairs",
    category: "CoRE",
    faNumber: "3040",
    sponsor: "M&RA",
    sponsorAbbrev: "MF",
    effectiveDate: "5/15/2025",
    href: FACS_BASE_URL,
  },
  {
    name: "Defense Travel System (DTS)",
    category: "CoRE",
    faNumber: "4650.39",
    sponsor: "P&R",
    sponsorAbbrev: "RFF",
    effectiveDate: "5/15/2025",
    href: FACS_BASE_URL,
  },
  {
    name: "Directives Management",
    category: "CoRE",
    faNumber: "5215",
    sponsor: "AR",
    sponsorAbbrev: "ARDB",
    effectiveDate: "9/30/2025",
    href: FACS_BASE_URL,
  },
  {
    name: "Force Preservation Council (FPC) Program",
    category: "CoRE",
    faNumber: "1500.6",
    sponsor: "HQMC",
    sponsorAbbrev: "MF",
    effectiveDate: "2/10/2025",
    href: FACS_BASE_URL,
  },
  {
    name: "Government Travel Charge Card Program (GTCCP)",
    category: "CoRE",
    faNumber: "4600.4",
    sponsor: "P&R",
    sponsorAbbrev: "RFF",
    effectiveDate: "11/3/2025",
    href: FACS_BASE_URL,
  },
  {
    name: "Leave, Liberty and Administrative Absence",
    category: "Non-CoRE",
    faNumber: "1050",
    sponsor: "M&RA",
    sponsorAbbrev: "MPO",
    effectiveDate: "9/3/2025",
    href: FACS_BASE_URL,
  },
  {
    name: "Legal Administration",
    category: "CoRE",
    faNumber: "5800.16",
    sponsor: "HQMC",
    sponsorAbbrev: "JAD",
    effectiveDate: "9/23/2025",
    href: FACS_BASE_URL,
  },
  {
    name: "Marine Corps Sponsorship Program",
    category: "Non-CoRE",
    faNumber: "1320",
    sponsor: "HQMC",
    sponsorAbbrev: "MF",
    effectiveDate: "5/15/2025",
    href: FACS_BASE_URL,
  },
  {
    name: "Military Awards",
    category: "CoRE",
    faNumber: "1650",
    sponsor: "M&RA",
    sponsorAbbrev: "MMPB",
    effectiveDate: "6/3/2025",
    href: FACS_BASE_URL,
  },
  {
    name: "Performance Evaluation System (PES)",
    category: "CoRE",
    faNumber: "1610",
    sponsor: "M&RA",
    sponsorAbbrev: "MMPB",
    effectiveDate: "5/15/2025",
    href: FACS_BASE_URL,
  },
  {
    name: "Postal Affairs and Official Mail Program - Military Postal Activity",
    category: "CoRE+",
    faNumber: "5110.1",
    sponsor: "M&RA",
    sponsorAbbrev: "MF",
    effectiveDate: "6/3/2025",
    href: FACS_BASE_URL,
  },
  {
    name: "Postal Affairs and Official Mail Program - Organization",
    category: "CoRE",
    faNumber: "5110.2",
    sponsor: "M&RA",
    sponsorAbbrev: "MF",
    effectiveDate: "6/3/2025",
    href: FACS_BASE_URL,
  },
  {
    name: "Records Management",
    category: "CoRE",
    faNumber: "5210",
    sponsor: "AR",
    sponsorAbbrev: "ARD",
    effectiveDate: "9/23/2025",
    href: FACS_BASE_URL,
  },
  {
    name: "Reports Management",
    category: "Non-CoRE",
    faNumber: "5214",
    sponsor: "AR",
    sponsorAbbrev: "ARDB",
    effectiveDate: "4/29/2024",
    href: FACS_BASE_URL,
  },
  {
    name: "Separation, Retirement and Limited Duty",
    category: "CoRE",
    faNumber: "1900.16",
    sponsor: "M&RA",
    sponsorAbbrev: "MMSR",
    effectiveDate: "3/24/2025",
    href: FACS_BASE_URL,
  },
  {
    name: "Transition Readiness Program (TRP)",
    category: "CoRE",
    faNumber: "1700.31",
    sponsor: "M&RA",
    sponsorAbbrev: "MF",
    effectiveDate: "5/15/2025",
    href: FACS_BASE_URL,
  },
  {
    name: "Unit Training Management (UTM)",
    category: "CoRE",
    faNumber: "1553.3",
    sponsor: "TECOM",
    sponsorAbbrev: "SD",
    effectiveDate: "9/23/2025",
    href: FACS_BASE_URL,
  },
  {
    name: "Voting Assistance Program",
    category: "CoRE",
    faNumber: "1742.1",
    sponsor: "M&RA",
    sponsorAbbrev: "MF",
    effectiveDate: "5/15/2025",
    href: FACS_BASE_URL,
  },
];

// Helper functions
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
  return {
    CoRE: functionalAreaChecklists.filter((f) => f.category === "CoRE").length,
    "Non-CoRE": functionalAreaChecklists.filter((f) => f.category === "Non-CoRE").length,
    "CoRE+": functionalAreaChecklists.filter((f) => f.category === "CoRE+").length,
  };
}
