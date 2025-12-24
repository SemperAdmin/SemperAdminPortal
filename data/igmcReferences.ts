// IGMC Reference Document Registry
// Centralized registry of all documents referenced in FAC checklists

export type ReferenceCategory =
  | "mco"      // Marine Corps Orders
  | "dodi"     // DoD Instructions
  | "dodm"     // DoD Manuals
  | "dodr"     // DoD Regulations
  | "secnav"   // SECNAV Instructions & Manuals
  | "maradmin" // Marine Administrative Messages
  | "navmc"    // NAVMC Forms/Publications
  | "usc"      // US Code
  | "mpm"      // Military Postal Manual
  | "usps"     // USPS Publications
  | "other";

export interface ReferenceDocument {
  id: string;
  title: string;
  fullTitle?: string;
  url?: string;
  category: ReferenceCategory;
}

// Document registry - keyed by document ID
export const referenceDocuments: Record<string, ReferenceDocument> = {
  // Marine Corps Orders (MCO)
  "mco-1040-31": {
    id: "mco-1040-31",
    title: "MCO 1040.31",
    fullTitle: "Marine Corps Enlisted Retention and Career Development Program",
    url: "https://www.marines.mil/portals/1/Publications/MCO%201040.31.pdf?ver=2012-10-11-163756-583",
    category: "mco",
  },
  "mco-1050-3j": {
    id: "mco-1050-3j",
    title: "MCO 1050.3J",
    fullTitle: "Regulations for Leave, Liberty, and Administrative Absence",
    category: "mco",
  },
  "mco-1050-16a": {
    id: "mco-1050-16a",
    title: "MCO 1050.16A",
    fullTitle: "Permissive Temporary Additional Duty",
    category: "mco",
  },
  "mco-1320-11h": {
    id: "mco-1320-11h",
    title: "MCO 1320.11H",
    fullTitle: "Marine Corps Sponsorship Program",
    category: "mco",
  },
  "mco-1500-60a": {
    id: "mco-1500-60a",
    title: "MCO 1500.60A",
    fullTitle: "Force Preservation Council Program",
    category: "mco",
  },
  "mco-1610-7b": {
    id: "mco-1610-7b",
    title: "MCO 1610.7B",
    fullTitle: "Performance Evaluation System",
    url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899222/mco-16107b/",
    category: "mco",
  },
  "mco-1616-1": {
    id: "mco-1616-1",
    title: "MCO 1616.1",
    fullTitle: "Marine Corps Enlisted Promotion System",
    url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899290/mco-16161/",
    category: "mco",
  },
  "mco-1650-1j": {
    id: "mco-1650-1j",
    title: "MCO 1650.1J",
    fullTitle: "Marine Corps Personal Awards Manual",
    category: "mco",
  },
  "mco-1650-19j": {
    id: "mco-1650-19j",
    title: "MCO 1650.19J",
    fullTitle: "Marine Corps Awards Manual",
    category: "mco",
  },
  "mco-1700-31": {
    id: "mco-1700-31",
    title: "MCO 1700.31",
    fullTitle: "Transition Readiness Program",
    category: "mco",
  },
  "mco-1741-8": {
    id: "mco-1741-8",
    title: "MCO 1741.8",
    fullTitle: "Casualty Reporting",
    category: "mco",
  },
  "mco-1741-11d": {
    id: "mco-1741-11d",
    title: "MCO 1741.11D",
    fullTitle: "Casualty Assistance Program",
    category: "mco",
  },
  "mco-1742-1c": {
    id: "mco-1742-1c",
    title: "MCO 1742.1C",
    fullTitle: "Voting Assistance Program",
    url: "https://www.marines.mil/Portals/1/Publications/MCO%201742.1C.pdf?ver=-5MApH5dZdP2C5Aie9D_OA%3d%3d",
    category: "mco",
  },
  "mco-1900-16": {
    id: "mco-1900-16",
    title: "MCO 1900.16",
    fullTitle: "Separation and Retirement Manual",
    url: "https://www.marines.mil/Portals/1/Publications/MCO%201900.16%20ADMIN%20CH-3%20(SECURED).pdf?ver=SZptuAh1jjvolL-Gf5s5CQ%3d%3d",
    category: "mco",
  },
  "mco-3040-4": {
    id: "mco-3040-4",
    title: "MCO 3040.4",
    fullTitle: "Marine Corps Combat Readiness Evaluation System",
    url: "https://www.marines.mil/portals/1/Publications/MCO%203040.4.pdf",
    category: "mco",
  },
  "mco-4400-201": {
    id: "mco-4400-201",
    title: "MCO 4400.201",
    fullTitle: "Management of Property in the Possession of the Marine Corps",
    category: "mco",
  },
  "mco-4600-40b": {
    id: "mco-4600-40b",
    title: "MCO 4600.40B",
    fullTitle: "Government Travel Charge Card Program",
    category: "mco",
  },
  "mco-4650-39a": {
    id: "mco-4650-39a",
    title: "MCO 4650.39A",
    fullTitle: "Defense Travel System",
    url: "https://www.marines.mil/portals/1/Publications/MCO%204650.39A.pdf",
    category: "mco",
  },
  "mco-5110-4b": {
    id: "mco-5110-4b",
    title: "MCO 5110.4B",
    fullTitle: "Postal Affairs and Official Mail Management",
    category: "mco",
  },
  "mco-5210-11f": {
    id: "mco-5210-11f",
    title: "MCO 5210.11F",
    fullTitle: "Records Management Program",
    category: "mco",
  },
  "mco-5214-2g": {
    id: "mco-5214-2g",
    title: "MCO 5214.2G",
    fullTitle: "Reports Management",
    url: "https://www.marines.mil/portals/1/Publications/MCO%205214%202G.pdf?ver=2018-08-06-130852-213",
    category: "mco",
  },
  "mco-5215-1k": {
    id: "mco-5215-1k",
    title: "MCO 5215.1K",
    fullTitle: "Directives Management",
    category: "mco",
  },
  "mco-5750-1h": {
    id: "mco-5750-1h",
    title: "MCO 5750.1H",
    fullTitle: "Historical Program",
    category: "mco",
  },
  "mco-5800-16": {
    id: "mco-5800-16",
    title: "MCO 5800.16",
    fullTitle: "Legal Administration Manual",
    category: "mco",
  },
  "mco-6110-3a": {
    id: "mco-6110-3a",
    title: "MCO 6110.3A",
    fullTitle: "Marine Corps Body Composition and Military Appearance Program",
    url: "https://www.marines.mil/Portals/1/Publications/MCO%206110.3A%20W%20ADMIN%20CH-4%20(SECURED).pdf?ver=7XYc4AD_PjViwRYVmHjkpw%3d%3d",
    category: "mco",
  },

  // DoD Instructions
  "dodi-1000-04": {
    id: "dodi-1000-04",
    title: "DoDI 1000.04",
    fullTitle: "Federal Voting Assistance Program",
    url: "https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/100004p.pdf?ver=2019-11-12-130718-750",
    category: "dodi",
  },
  "dodi-1327-06": {
    id: "dodi-1327-06",
    title: "DoDI 1327.06",
    fullTitle: "Leave and Liberty Policy and Procedures",
    category: "dodi",
  },
  "dodi-1332-35": {
    id: "dodi-1332-35",
    title: "DoDI 1332.35",
    fullTitle: "Transition Assistance Program for Military Personnel",
    category: "dodi",
  },
  "dodi-1332-42": {
    id: "dodi-1332-42",
    title: "DoDI 1332.42",
    fullTitle: "Survivor Assistance Programs",
    category: "dodi",
  },
  "dodi-1348-33": {
    id: "dodi-1348-33",
    title: "DoDI 1348.33",
    fullTitle: "Military Awards Program",
    category: "dodi",
  },
  "dodi-4525-09": {
    id: "dodi-4525-09",
    title: "DoDI 4525.09",
    fullTitle: "DoD Official Mail Management",
    category: "dodi",
  },
  "dodi-8500-01": {
    id: "dodi-8500-01",
    title: "DoDI 8500.01",
    fullTitle: "Cybersecurity",
    category: "dodi",
  },

  // DoD Manuals and Regulations
  "dod-fmr": {
    id: "dod-fmr",
    title: "DoD FMR",
    fullTitle: "DoD Financial Management Regulation (7000.14-R)",
    category: "dodr",
  },
  "dod-gtcc-regs": {
    id: "dod-gtcc-regs",
    title: "DoD GTCC Regulations",
    fullTitle: "Government Travel Charge Card Regulations",
    category: "dodr",
  },
  "dod-dts-regs": {
    id: "dod-dts-regs",
    title: "DoD DTS Regulations",
    fullTitle: "Defense Travel System Regulations",
    category: "dodr",
  },
  "dod-5200-2r": {
    id: "dod-5200-2r",
    title: "DoD 5200.2-R",
    fullTitle: "DoD Personnel Security Program",
    category: "dodr",
  },

  // SECNAV Instructions and Manuals
  "secnavinst-1050-1a": {
    id: "secnavinst-1050-1a",
    title: "SECNAVINST 1050.1A",
    fullTitle: "Leave, Liberty, and Administrative Absence",
    category: "secnav",
  },
  "secnavinst-1650-1j": {
    id: "secnavinst-1650-1j",
    title: "SECNAVINST 1650.1J",
    fullTitle: "Navy and Marine Corps Awards Manual",
    category: "secnav",
  },
  "secnavinst-5210-8f": {
    id: "secnavinst-5210-8f",
    title: "SECNAVINST 5210.8F",
    fullTitle: "Department of the Navy Records Management Program",
    category: "secnav",
  },
  "secnavinst-5210-16": {
    id: "secnavinst-5210-16",
    title: "SECNAVINST 5210.16",
    fullTitle: "Essential Records Program",
    category: "secnav",
  },
  "secnav-m-1650-1": {
    id: "secnav-m-1650-1",
    title: "SECNAV M-1650.1",
    fullTitle: "Navy and Marine Corps Awards Manual",
    url: "https://www.marines.mil/Portals/1/Publications/SECNAV%20M-1650.1.pdf?ver=2019-08-23-121307-600",
    category: "secnav",
  },
  "secnav-m-5210-1": {
    id: "secnav-m-5210-1",
    title: "SECNAV M-5210.1",
    fullTitle: "Department of the Navy Records Management Manual",
    category: "secnav",
  },
  "secnav-m-5210-2": {
    id: "secnav-m-5210-2",
    title: "SECNAV M-5210.2",
    fullTitle: "Department of the Navy Standard Subject Identification Codes",
    category: "secnav",
  },
  "secnav-m-5216-5": {
    id: "secnav-m-5216-5",
    title: "SECNAV M-5216.5",
    fullTitle: "Department of the Navy Correspondence Manual",
    category: "secnav",
  },

  // MARADMINs
  "maradmin-042-08": {
    id: "maradmin-042-08",
    title: "MARADMIN 042/08",
    category: "maradmin",
  },
  "maradmin-051-23": {
    id: "maradmin-051-23",
    title: "MARADMIN 051/23",
    category: "maradmin",
  },
  "maradmin-076-22": {
    id: "maradmin-076-22",
    title: "MARADMIN 076/22",
    category: "maradmin",
  },
  "maradmin-099-18": {
    id: "maradmin-099-18",
    title: "MARADMIN 099/18",
    category: "maradmin",
  },
  "maradmin-115-19": {
    id: "maradmin-115-19",
    title: "MARADMIN 115/19",
    category: "maradmin",
  },
  "maradmin-129-23": {
    id: "maradmin-129-23",
    title: "MARADMIN 129/23",
    category: "maradmin",
  },
  "maradmin-200-25": {
    id: "maradmin-200-25",
    title: "MARADMIN 200/25",
    category: "maradmin",
  },
  "maradmin-220-23": {
    id: "maradmin-220-23",
    title: "MARADMIN 220/23",
    category: "maradmin",
  },
  "maradmin-427-23": {
    id: "maradmin-427-23",
    title: "MARADMIN 427/23",
    category: "maradmin",
  },
  "maradmin-500-10": {
    id: "maradmin-500-10",
    title: "MARADMIN 500/10",
    category: "maradmin",
  },
  "maradmin-632-19": {
    id: "maradmin-632-19",
    title: "MARADMIN 632/19",
    category: "maradmin",
  },

  // NAVMC Forms/Publications
  "navmc-10030": {
    id: "navmc-10030",
    title: "NAVMC 10030",
    fullTitle: "Records Management Self-Assessment Checklist",
    category: "navmc",
  },
  "navmc-10132": {
    id: "navmc-10132",
    title: "NAVMC 10132",
    fullTitle: "Unit Punishment Book",
    category: "navmc",
  },
  "navmc-10274": {
    id: "navmc-10274",
    title: "NAVMC 10274",
    fullTitle: "Administrative Action Form",
    category: "navmc",
  },
  "navmc-11030": {
    id: "navmc-11030",
    title: "NAVMC 11030",
    fullTitle: "Records Management Paper Waiver Request",
    category: "navmc",
  },
  "navmc-11791": {
    id: "navmc-11791",
    title: "NAVMC 11791",
    fullTitle: "Sponsorship Program Questionnaire",
    category: "navmc",
  },
  "navmc-11799": {
    id: "navmc-11799",
    title: "NAVMC 11799",
    fullTitle: "Sponsor Assignment Form",
    category: "navmc",
  },
  "navmc-118": {
    id: "navmc-118",
    title: "NAVMC 118",
    fullTitle: "Service Record Book",
    category: "navmc",
  },
  "navmc-1500": {
    id: "navmc-1500",
    title: "NAVMC 1500",
    fullTitle: "Training and Readiness Manual",
    category: "navmc",
  },

  // US Code
  "usc-10": {
    id: "usc-10",
    title: "10 USC",
    fullTitle: "Title 10, United States Code - Armed Forces",
    category: "usc",
  },
  "usc-41": {
    id: "usc-41",
    title: "41 USC",
    fullTitle: "Title 41, United States Code - Public Contracts",
    category: "usc",
  },

  // Military Postal Manual
  "mpm": {
    id: "mpm",
    title: "MPM",
    fullTitle: "Military Postal Manual (DoD 4525.6-M)",
    category: "mpm",
  },

  // USPS Publications
  "usps-dmm": {
    id: "usps-dmm",
    title: "USPS DMM",
    fullTitle: "Domestic Mail Manual",
    category: "usps",
  },
  "usps-asm": {
    id: "usps-asm",
    title: "USPS ASM",
    fullTitle: "Administrative Support Manual",
    category: "usps",
  },
  "usps-f-101": {
    id: "usps-f-101",
    title: "USPS Handbook F-101",
    fullTitle: "Field Accounting Procedures",
    category: "usps",
  },

  // Marine Corps Bulletins
  "mcbul-5810": {
    id: "mcbul-5810",
    title: "MCBUL 5810",
    fullTitle: "Legal Services Support Section Bulletin",
    category: "mco",
  },

  // Other/Miscellaneous
  "mol": {
    id: "mol",
    title: "MOL",
    fullTitle: "Marine Online",
    url: "https://mol.tfs.usmc.mil/",
    category: "other",
  },
  "hqmc-mmrp": {
    id: "hqmc-mmrp",
    title: "HQMC MMRP",
    fullTitle: "Manpower Management Records and Performance",
    url: "https://usmc.sharepoint-mil.us/sites/HQMC_MMRP",
    category: "other",
  },
};

// Helper function to get document by ID
export function getDocumentById(id: string): ReferenceDocument | undefined {
  return referenceDocuments[id];
}

// Helper function to get document URL by ID
export function getDocumentUrl(id: string): string | undefined {
  return referenceDocuments[id]?.url;
}

// Helper function to get all documents by category
export function getDocumentsByCategory(category: ReferenceCategory): ReferenceDocument[] {
  return Object.values(referenceDocuments).filter((doc) => doc.category === category);
}

// Helper function to find a document URL by matching reference text
// This allows auto-resolution without requiring documentId on every reference
export function findDocumentUrlByText(referenceText: string): string | undefined {
  // Try to match document titles in the reference text
  for (const doc of Object.values(referenceDocuments)) {
    if (doc.url && referenceText.includes(doc.title)) {
      return doc.url;
    }
  }
  return undefined;
}
