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
    url: "https://www.marines.mil/portals/1/publications/mco%201050.3j.pdf",
    category: "mco",
  },
  "mco-1050-16a": {
    id: "mco-1050-16a",
    title: "MCO 1050.16A",
    fullTitle: "Permissive Temporary Additional Duty",
    url: "https://www.marines.mil/portals/1/Publications/MCO%201050.16A.pdf?ver=2012-10-11-163555-680",
    category: "mco",
  },
  "mco-1320-11h": {
    id: "mco-1320-11h",
    title: "MCO 1320.11H",
    fullTitle: "Marine Corps Sponsorship Program",
    url: "https://www.marines.mil/Portals/1/Publications/MCO%201320.11H%20Admin%20CH-1%20(SECURED).pdf?ver=6NAyRQJB7f_LtrPgBtHPuQ%3d%3d",
    category: "mco",
  },
  "mco-1500-60a": {
    id: "mco-1500-60a",
    title: "MCO 1500.60A",
    fullTitle: "Force Preservation Council Program",
    url: "https://www.marines.mil/Portals/1/Publications/MCO%201500.60A%20(SECURED).pdf?ver=nvzlA07lE4cFOfdWZjkLQA%3d%3d",
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
  "mco-1650-19j": {
    id: "mco-1650-19j",
    title: "MCO 1650.19J",
    fullTitle: "Marine Corps Awards Manual",
    url: "https://www.marines.mil/Portals/1/Publications/MCO%201650.19J%20W%20CH%201%20(SECURED).pdf?ver=zkGSM_UW7RT34nnQiKYTBA%3d%3d",
    category: "mco",
  },
  "mco-1700-31": {
    id: "mco-1700-31",
    title: "MCO 1700.31",
    fullTitle: "Transition Readiness Program",
    url: "https://www.marines.mil/portals/1/MCO%201700.31.pdf",
    category: "mco",
  },
  "mco-1741-8": {
    id: "mco-1741-8",
    title: "MCO 1741.8",
    fullTitle: "Casualty Reporting",
    url: "https://www.marines.mil/portals/1/MCO%201741.8.PDF",
    category: "mco",
  },
  "mco-1741-11d": {
    id: "mco-1741-11d",
    title: "MCO 1741.11D",
    fullTitle: "Casualty Assistance Program",
    url: "https://www.marines.mil/portals/1/Publications/MCO%201741.11D.pdf",
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
  "mco-4400-201-v13": {
    id: "mco-4400-201-v13",
    title: "MCO 4400.201 Volume 13",
    fullTitle: "Management of Property in the Possession of the Marine Corps - Volume 13",
    url: "https://www.marines.mil/Portals/1/Publications/MCO%204400.201%20Volume%2013%20v2.pdf?ver=2018-07-26-152003-973",
    category: "mco",
  },
  "mco-4600-40b": {
    id: "mco-4600-40b",
    title: "MCO 4600.40B",
    fullTitle: "Government Travel Charge Card Program",
    url: "https://www.marines.mil/portals/1/MCO%204600.40B.pdf",
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
    url: "https://www.marines.mil/Portals/1/Publications/MCO%205110.4B%20(SECURED).pdf?ver=F8tTfDWHjWCTVMb8q0Dsew%3d%3d",
    category: "mco",
  },
  "mco-5210-11f": {
    id: "mco-5210-11f",
    title: "MCO 5210.11F",
    fullTitle: "Records Management Program",
    url: "https://www.marines.mil/portals/1/MCO_5210%2011F_ORIGNAL%20SIGNED_EDD.pdf",
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
    url: "https://www.marines.mil/Portals/1/Publications/MCO%205215.1K%20W%20ADMIN%20CH-3%20(SECURED).pdf?ver=JZUsBjYy6hoHP-ruH12osw%3d%3d",
    category: "mco",
  },
  "mco-5750-1h": {
    id: "mco-5750-1h",
    title: "MCO 5750.1H",
    fullTitle: "Historical Program",
    url: "https://www.marines.mil/portals/1/Publications/MCO%205750.1H.pdf?ver=2012-10-11-163836-987",
    category: "mco",
  },
  "mco-5800-16-v14": {
    id: "mco-5800-16-v14",
    title: "MCO 5800.16, V-14",
    fullTitle: "Legal Administration Manual - Volume 14 (Administrative Investigations)",
    url: "https://www.marines.mil/Portals/1/Publications/MCO%205800.16%20Vol14.pdf?ver=GiRsIU5b8B1FOhzJlbyB2Q%3d%3d",
    category: "mco",
  },
  "mco-5800-16-v16": {
    id: "mco-5800-16-v16",
    title: "MCO 5800.16-V16",
    fullTitle: "Legal Administration Manual - Volume 16 (Non-Judicial Punishment)",
    url: "https://www.marines.mil/Portals/1/Publications/MCO%205800.16%20Vol%2016.pdf?ver=Kw6Bv7bjXXFICy5ujnlk1Q%3d%3d",
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
    url: "https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/132706p.pdf",
    category: "dodi",
  },
  "dodi-1332-35": {
    id: "dodi-1332-35",
    title: "DoDI 1332.35",
    fullTitle: "Transition Assistance Program for Military Personnel",
    url: "https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/133235p.pdf",
    category: "dodi",
  },
  "dodi-1332-42": {
    id: "dodi-1332-42",
    title: "DoDI 1332.42",
    fullTitle: "Survivor Assistance Programs",
    url: "https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/133242p.pdf",
    category: "dodi",
  },
  "dodi-1348-33": {
    id: "dodi-1348-33",
    title: "DoDI 1348.33",
    fullTitle: "Military Awards Program",
    url: "https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/134833p.pdf",
    category: "dodi",
  },
  "dodi-4525-09": {
    id: "dodi-4525-09",
    title: "DoDI 4525.09",
    fullTitle: "DoD Official Mail Management",
    url: "https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/452509p.pdf",
    category: "dodi",
  },
  "dodi-8500-01": {
    id: "dodi-8500-01",
    title: "DoDI 8500.01",
    fullTitle: "Cybersecurity",
    url: "https://www.esd.whs.mil/portals/54/documents/dd/issuances/dodi/850001_2014.pdf",
    category: "dodi",
  },

  // DoD Manuals and Regulations
  "dod-fmr": {
    id: "dod-fmr",
    title: "DoD FMR",
    fullTitle: "DoD Financial Management Regulation (7000.14-R)",
    category: "dodr",
  },
  "dod-fmr-vol5-ch1": {
    id: "dod-fmr-vol5-ch1",
    title: "DoD FMR Vol 5, Ch 1",
    fullTitle: "DoD Financial Management Regulation Volume 5 Chapter 1",
    url: "https://comptroller.war.gov/Portals/45/documents/fmr/current/05/05_01.pdf",
    category: "dodr",
  },
  "dod-fmr-vol5-ch5": {
    id: "dod-fmr-vol5-ch5",
    title: "DoD FMR Vol 5, Ch 5",
    fullTitle: "DoD Financial Management Regulation Volume 5 Chapter 5",
    url: "https://comptroller.war.gov/Portals/45/documents/fmr/current/05/05_05.pdf",
    category: "dodr",
  },
  "dod-gtcc-regs": {
    id: "dod-gtcc-regs",
    title: "DoD GTCC Regulations",
    fullTitle: "Government Travel Charge Card Regulations",
    url: "https://www.travel.dod.mil/Portals/119/Documents/GTCC/GTCC-Regs.pdf",
    category: "dodr",
  },
  "dod-dts-regs": {
    id: "dod-dts-regs",
    title: "DoD DTS Regulations",
    fullTitle: "Defense Travel System Regulations",
    url: "https://www.travel.dod.mil/Portals/119/Documents/DTS/DTS_Regulations.pdf",
    category: "dodr",
  },
  "dod-5200-2r": {
    id: "dod-5200-2r",
    title: "DoD 5200.2-R",
    fullTitle: "DoD Personnel Security Program",
    url: "https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodm/520002m.pdf",
    category: "dodr",
  },

  // SECNAV Instructions and Manuals
  "secnavinst-1050-1a": {
    id: "secnavinst-1050-1a",
    title: "SECNAVINST 1050.1A (Canc)",
    fullTitle: "Leave, Liberty, and Administrative Absence (Cancelled)",
    category: "secnav",
  },
  "secnavinst-1650-1j": {
    id: "secnavinst-1650-1j",
    title: "SECNAVINST 1650.1J",
    fullTitle: "Navy and Marine Corps Awards Manual",
    url: "https://www.mcieast.marines.mil/Portals/33/SECNAVINST%201650_1J_1.pdf",
    category: "secnav",
  },
  "secnavinst-5210-8f": {
    id: "secnavinst-5210-8f",
    title: "SECNAVINST 5210.8F",
    fullTitle: "Department of the Navy Records Management Program",
    url: "https://www.secnav.navy.mil/doni/Directives/05000%20General%20Management%20Security%20and%20Safety%20Services/05-200%20Management%20Program%20and%20Techniques%20Services/5210.8F.pdf",
    category: "secnav",
  },
  "secnavinst-5210-16": {
    id: "secnavinst-5210-16",
    title: "SECNAVINST 5210.16 (Canc)",
    fullTitle: "Essential Records Program (Cancelled)",
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
    url: "https://www.secnav.navy.mil/doni/SECNAV%20Manuals1/5210.1.pdf",
    category: "secnav",
  },
  "secnav-m-5210-2": {
    id: "secnav-m-5210-2",
    title: "SECNAV M-5210.2",
    fullTitle: "Department of the Navy Standard Subject Identification Codes",
    url: "https://www.secnav.navy.mil/doni/SECNAV%20Manuals1/5210.2.pdf",
    category: "secnav",
  },
  "secnav-m-5216-5": {
    id: "secnav-m-5216-5",
    title: "SECNAV M-5216.5",
    fullTitle: "Department of the Navy Correspondence Manual",
    url: "https://www.secnav.navy.mil/doni/SECNAV%20Manuals1/5216.5%20%20CH-1.pdf",
    category: "secnav",
  },

  // MARADMINs
  "maradmin-042-08": {
    id: "maradmin-042-08",
    title: "MARADMIN 042/08",
    url: "https://www.marines.mil/News/Messages/MARADMINS/Article/893622/implementation-of-the-improved-awards-processing-system-iaps/",
    category: "maradmin",
  },
  "maradmin-051-23": {
    id: "maradmin-051-23",
    title: "MARADMIN 051/23",
    url: "https://www.marines.mil/News/Messages/Messages-Display/Article/3281525/expansion-of-the-marine-corps-military-parental-leave-program/",
    category: "maradmin",
  },
  "maradmin-076-22": {
    id: "maradmin-076-22",
    title: "MARADMIN 076/22",
    url: "https://www.marines.mil/News/Messages/Messages-Display/Article/2947041/updated-requirements-regarding-implementation-of-servicemembers-group-life-insu/",
    category: "maradmin",
  },
  "maradmin-099-18": {
    id: "maradmin-099-18",
    title: "MARADMIN 099/18",
    url: "https://www.marines.mil/News/Messages/Messages-Display/Article/1438860/improved-awards-processing-system-iaps-updates/",
    category: "maradmin",
  },
  "maradmin-115-19": {
    id: "maradmin-115-19",
    title: "MARADMIN 115/19",
    url: "https://www.marines.mil/News/Messages/MARADMINS/Article/1766105/use-of-visa-intellilink-data-analytics-and-misuse-case-management-system-for-mo/",
    category: "maradmin",
  },
  "maradmin-129-23": {
    id: "maradmin-129-23",
    title: "MARADMIN 129/23",
    url: "https://www.marines.mil/News/Messages/Messages-Display/Article/3322160/clarification-to-maradmin-05123/",
    category: "maradmin",
  },
  "maradmin-200-25": {
    id: "maradmin-200-25",
    title: "MARADMIN 200/25",
    url: "https://www.marines.mil/News/Messages/Messages-Display/Article/4160984/command-chronology-submission-requirements/",
    category: "maradmin",
  },
  "maradmin-220-23": {
    id: "maradmin-220-23",
    title: "MARADMIN 220/23",
    url: "https://www.marines.mil/News/Messages/Messages-Display/Article/3373144/advance-notification-of-the-establishment-of-bereavement-leave/",
    category: "maradmin",
  },
  "maradmin-427-23": {
    id: "maradmin-427-23",
    title: "MARADMIN 427/23",
    url: "https://www.marines.mil/News/Messages/Messages-Display/Article/3507627/unit-punishment-book-policy-update/",
    category: "maradmin",
  },
  "maradmin-500-10": {
    id: "maradmin-500-10",
    title: "MARADMIN 500/10",
    url: "https://www.marines.mil/News/Messages/Messages-Display/Article/888660/invitational-travel-orders-to-unit-memorial-services/",
    category: "maradmin",
  },
  "maradmin-632-19": {
    id: "maradmin-632-19",
    title: "MARADMIN 632/19",
    url: "https://www.marines.mil/News/Messages/Messages-Display/Article/2015875/transition-readiness/",
    category: "maradmin",
  },

  // NAVMC Forms/Publications
  "navmc-10030": {
    id: "navmc-10030",
    title: "NAVMC 10030",
    fullTitle: "Records Management Self-Assessment Checklist",
    url: "https://www.ar.marines.mil/Portals/137/NAVMC%2010030_1.pdf",
    category: "navmc",
  },
  "navmc-10132": {
    id: "navmc-10132",
    title: "NAVMC 10132",
    fullTitle: "Unit Punishment Book",
    url: "https://www.sja.marines.mil/Portals/135/3%20JMJ/NAVMC%2010132%20Unit%20Punishment%20Book%20(5812)%20(2025%2003).pdf?ver=NTiaGRM-njjPWsGwsSRRoQ%3D%3D",
    category: "navmc",
  },
  "navmc-10274": {
    id: "navmc-10274",
    title: "NAVMC 10274",
    fullTitle: "Administrative Action Form",
    url: "https://www.hqmc.marines.mil/Portals/138/Docs/AA%20Form%20SLDP.pdf",
    category: "navmc",
  },
  "navmc-11030": {
    id: "navmc-11030",
    title: "NAVMC 11030",
    fullTitle: "Records Management Forms Series (Paper Waiver Request, Disposition Extensions)",
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
    url: "https://uscode.house.gov/view.xhtml?path=/prelim@title10/subtitleA&edition=prelim",
    category: "usc",
  },
  "usc-41": {
    id: "usc-41",
    title: "41 USC",
    fullTitle: "Title 41, United States Code - Public Contracts",
    url: "https://uscode.house.gov/view.xhtml?path=/prelim@title41&edition=prelim",
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
    url: "https://www.marines.mil/Portals/1/Publications/MCBul%205810%20DTD%2022%20MAY%202024%20(SECURED).pdf?ver=9jP9WxOlAnuK3mmboToGOA%3d%3d",
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

// Normalize text for matching (remove periods after abbreviations, normalize spacing)
function normalizeForMatch(text: string): string {
  return text
    .replace(/Ch\.\s*/gi, "Ch ")  // "Ch. 5" → "Ch 5"
    .replace(/Vol\.\s*/gi, "Vol ") // "Vol. 5" → "Vol 5"
    .replace(/,\s+/g, " ")         // Remove commas
    .replace(/\s+/g, " ");         // Normalize whitespace
}

// Helper function to find a document URL by matching reference text
// This allows auto-resolution without requiring documentId on every reference
export function findDocumentUrlByText(referenceText: string): string | undefined {
  const normalizedRef = normalizeForMatch(referenceText);

  // Try to match document titles in the reference text
  for (const doc of Object.values(referenceDocuments)) {
    if (doc.url) {
      const normalizedTitle = normalizeForMatch(doc.title);
      if (normalizedRef.includes(normalizedTitle)) {
        return doc.url;
      }
    }
  }
  return undefined;
}
