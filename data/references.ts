/**
 * Centralized reference URLs for common Marine Corps publications and MARADMINs.
 * Use these constants to ensure consistency and ease of maintenance.
 */

// ============================================================================
// Marine Corps Orders (MCOs)
// ============================================================================
export const MCO_URLS = {
  /** MCO 5800.16 Volume 14 - Legal Support and Administration Manual */
  LEGAL_SUPPORT_MANUAL: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899474/mco-580016-vol-14/",

  /** MCO P1070.12K - Individual Records Administration Manual (IRAM) */
  IRAM: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899135/mco-p107012k/",

  /** MCO P1900.16 - Marine Corps Separation and Retirement Manual (MARCORSEPMAN) */
  MARCORSEPMAN: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899390/mco-190016g/",

  /** MCO 1620.3A - Absentee and Deserter Apprehension Program */
  ABSENTEE_DESERTER: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899304/mco-16203a/",

  /** MCO 1610.7 - Performance Evaluation System */
  PES: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899293/mco-16107/",

  /** MCO 1650.19J with CH1 - Administrative and Issue Procedures for Decorations, Medals, and Awards */
  AWARDS_ADMIN: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899334/mco-165019j-wch-1/",
} as const;

// ============================================================================
// Navy/DoD Publications
// ============================================================================
export const NAVY_DOD_URLS = {
  /** SECNAV M-1650.1 - Navy and Marine Corps Awards Manual */
  AWARDS_MANUAL: "https://www.secnav.navy.mil/doni/SECNAV%20Manuals1/1650.1.pdf",

  /** SECNAVINST 1650.1J - Department of the Navy Military Awards Policy */
  AWARDS_POLICY: "https://www.secnav.navy.mil/doni/Directives/01000%20Military%20Personnel%20Support/01-600%20Performance%20and%20Discipline%20Programs/1650.1J.pdf",

  /** JAGMAN - Judge Advocate General Manual */
  JAGMAN: "https://www.jag.navy.mil/library/instructions/JAGINST_5800.7G.pdf",

  /** DoDI 1332.14 - Enlisted Administrative Separations */
  DODI_ADSEP: "https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/133214p.pdf",

  /** Manual for Courts-Martial */
  MCM: "https://jsc.defense.gov/Military-Law/Current-Publications-702-HG/",
} as const;

// ============================================================================
// MARADMINs - Awards Related
// ============================================================================
export const MARADMIN_URLS = {
  /** MARADMIN 077/25 - CMC Delegation of Awarding Authority for Military Awards (21 Feb 2025) */
  DELEGATION_AUTHORITY_077_25: "https://www.marines.mil/News/Messages/Messages-Display/Article/4073209/commandant-of-the-marine-corps-delegation-of-awarding-authority-for-military-aw/",

  /** MARADMIN 093/25 - Military Awards Guidance for PCS Season (Feb 2025) */
  PCS_AWARDS_093_25: "https://www.marines.mil/News/Messages/Messages-Display/Article/4078781/military-awards-guidance-for-permanent-change-of-station-season/",

  /** MARADMIN 042/08 - Implementation of the Improved Awards Processing System (iAPS) */
  IAPS_IMPLEMENTATION_042_08: "https://www.marines.mil/News/Messages/Messages-Display/Article/893622/implementation-of-the-improved-awards-processing-system-iaps/",

  /** MARADMIN 099/18 - Improved Awards Processing System (iAPS) Updates */
  IAPS_UPDATES_099_18: "https://www.marines.mil/News/Messages/Messages-Display/Article/1438860/improved-awards-processing-system-iaps-updates/",
} as const;

// ============================================================================
// Legal References
// ============================================================================
export const LEGAL_URLS = {
  /** 10 U.S.C. 831 - Article 31, UCMJ */
  ARTICLE_31: "https://www.law.cornell.edu/uscode/text/10/831",

  /** HQMC SJA Office */
  HQMC_SJA: "https://www.hqmc.marines.mil/sja/",
} as const;

// ============================================================================
// Helper type for reference objects
// ============================================================================
export type Reference = {
  title: string;
  url: string;
  isQuickLink?: boolean;
};
