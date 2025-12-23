// Finance MCAAT Inspection Questions Data
// Organized by Section and Category

export type FinanceSection = "Disbursing" | "Finance";

export type FinanceCategorySlug =
  | "administrative-management"
  | "travel-processes"
  | "pay-processes"
  | "internal-audit-processes"
  | "fiscal-processes"
  | "separations-processes";

export interface FinanceCategory {
  slug: FinanceCategorySlug;
  name: string;
}

export const financeCategories: FinanceCategory[] = [
  { slug: "administrative-management", name: "Administrative Management" },
  { slug: "travel-processes", name: "Travel Processes" },
  { slug: "pay-processes", name: "Pay Processes" },
  { slug: "internal-audit-processes", name: "Internal Audit Processes" },
  { slug: "fiscal-processes", name: "Fiscal Processes" },
  { slug: "separations-processes", name: "Separations Processes" },
];

export interface FinanceMCAATQuestion {
  id: string; // Format: "SECTION-CATEGORY-NUMBER" e.g., "FIN-AM-01"
  section: FinanceSection;
  category: FinanceCategorySlug;
  number: number;
  question: string;
  reference: string;
  applicability: {
    DO: boolean; // Disbursing Officer
    FO: boolean; // Finance Officer
    outsideAgency: boolean;
  };
  fiscalYears: {
    FY23: boolean;
    FY22: boolean;
    FY21: boolean;
    FY20: boolean;
    FY19: boolean;
  };
}

export const financeMcaatQuestions: FinanceMCAATQuestion[] = [
  // ============================================
  // DISBURSING - ADMINISTRATIVE MANAGEMENT
  // ============================================
  {
    id: "DIS-AM-14",
    section: "Disbursing",
    category: "administrative-management",
    number: 14,
    question: "Were all deputies, agents, cashiers, custodians, and certifying officers properly appointed and given written operating instructions regarding their duties and responsibilities in accordance with the references? NOTE: This includes adherence to Certifying Officer Legislation and all applicable waivers.",
    reference: "DoDFMR Vol. 5 Ch. 2 & 5, FPM Vol 4 Ch.2, and MCO 4650.39A Ch. 2",
    applicability: { DO: true, FO: true, outsideAgency: true },
    fiscalYears: { FY23: false, FY22: false, FY21: false, FY20: false, FY19: false },
  },

  // ============================================
  // FINANCE - ADMINISTRATIVE MANAGEMENT
  // ============================================
  {
    id: "FIN-AM-01",
    section: "Finance",
    category: "administrative-management",
    number: 1,
    question: "Were all deputies, agents, cashiers, custodians, and certifying officers properly appointed and given written operating instructions regarding their duties and responsibilities in accordance with the references? NOTE: This includes adherence to Certifying Officer Legislation and all applicable waivers.",
    reference: "DoDFMR Vol. 5 Ch. 2 & 5 and FPM Vol 3 Ch.2 & MCO 4650.39A Ch. 2",
    applicability: { DO: true, FO: true, outsideAgency: true },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-AM-02",
    section: "Finance",
    category: "administrative-management",
    number: 2,
    question: "Are TFS Forms 3023 (specimen signature card) submitted in accordance with the references?",
    reference: "DoDFMR Vol. 5 Ch. 2 & FPM Vol 3 Ch. 2",
    applicability: { DO: true, FO: false, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-AM-03",
    section: "Finance",
    category: "administrative-management",
    number: 3,
    question: "Is the DO's request to hold cash at personal risk submitted semi-annually or as needed to the approving authority? NOTE: The total cash accountability of all appointed agents combined must not exceed the cash accountability of DO.",
    reference: "DoDFMR Vol. 5 Ch. 3",
    applicability: { DO: true, FO: false, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-AM-04",
    section: "Finance",
    category: "administrative-management",
    number: 4,
    question: "Are the facility, safeguarding of public funds, security equipment (i.e. alarm system), and security procedures inspected in accordance with the reference?",
    reference: "DoDFMR Vol. 5 Ch. 3 par 030302.B and MCO 5530.14A Ch. 3",
    applicability: { DO: true, FO: true, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-AM-05",
    section: "Finance",
    category: "administrative-management",
    number: 5,
    question: "Are online unit diaries processed and maintained in accordance with the reference?",
    reference: "FPM Vol 1 Ch. 1",
    applicability: { DO: true, FO: true, outsideAgency: true },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-AM-06",
    section: "Finance",
    category: "administrative-management",
    number: 6,
    question: "Does the office maintain the required accesses and / or separation of duties for the Document Tracking and Management System (DTMS)?",
    reference: "DoDFMR Vol 5 Ch.1, FPM Vol 1 Ch. 2 & 16",
    applicability: { DO: true, FO: true, outsideAgency: true },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-AM-07",
    section: "Finance",
    category: "administrative-management",
    number: 7,
    question: "Does the office maintain the required accesses and / or separation of duties for the Integrated Automated Travel System (IATS)?",
    reference: "DoDFMR Vol 5 Ch. 1, FPM Vol 2 Ch. 8 & Appendix G, FPM Vol 1 Ch. 16",
    applicability: { DO: true, FO: true, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-AM-08",
    section: "Finance",
    category: "administrative-management",
    number: 8,
    question: "Are MCTFS ELSIGs properly maintained to include the MELSIG and are the ELSIG reports posted to the RFF-KCI SharePoint in accordance with the references?",
    reference: "FPM Vol 1 Ch. 1",
    applicability: { DO: true, FO: true, outsideAgency: true },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-AM-09",
    section: "Finance",
    category: "administrative-management",
    number: 9,
    question: "Does the office maintain the required accesses and/or separation of duties for the CAPS-W System?",
    reference: "FPM Vol 1 Ch. 16, FPM Vol 3 Ch. 12, RFF Policy Letter 1-16",
    applicability: { DO: true, FO: false, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-AM-10",
    section: "Finance",
    category: "administrative-management",
    number: 10,
    question: "Does the office maintain the required accesses and / or separation of duties for the Defense Travel System (DTS)?",
    reference: "DoDFMR Vol 5 Ch. 1, MCO 4650.39A Ch. 2, FPM Vol 2 Ch. 8",
    applicability: { DO: true, FO: true, outsideAgency: true },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-AM-11",
    section: "Finance",
    category: "administrative-management",
    number: 11,
    question: "Does the office maintain separation of duties for ITS.gov and OTC.net?",
    reference: "DoDFMR Vol 5 Ch. 5 & 11, FPM Vol 1 Ch. 16, FPM Vol 3 Ch. 18.",
    applicability: { DO: true, FO: true, outsideAgency: true },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-AM-12",
    section: "Finance",
    category: "administrative-management",
    number: 12,
    question: "Are revocations issued to deputies, agents, cashiers, custodians, or certifying officers when their job assignment has been terminated in accordance with the references?",
    reference: "DoDFMR Vol. 5 Ch. 2 & 5 and FPM Vol 3 Ch.2 & MCO 4650.39A Ch. 2",
    applicability: { DO: true, FO: true, outsideAgency: true },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-AM-13",
    section: "Finance",
    category: "administrative-management",
    number: 13,
    question: "Does the office maintain the required accesses and / or separation of duties for the Deployable Disbursing System (DDS)?",
    reference: "DoDFMR Vol 5 Ch. 1, FPM Vol 1 Ch. 16, FPM Vol 3 Ch. 18, DDS User Manual",
    applicability: { DO: true, FO: true, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },

  // ============================================
  // FINANCE - TRAVEL PROCESSES
  // ============================================
  {
    id: "FIN-TP-01",
    section: "Finance",
    category: "travel-processes",
    number: 1,
    question: "Are travel advances paid accurately in accordance with the references (PCS/SEPS, TDY, DITY)?",
    reference: "JTR, DoDFMR Vol. 9 & 5 and FPM Vol 2 Ch.1, Ch. 2, Ch. 3, Ch. 4",
    applicability: { DO: true, FO: true, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-TP-02",
    section: "Finance",
    category: "travel-processes",
    number: 2,
    question: "Are PCS travel claims paid accurately and in accordance with the references?",
    reference: "JTR, DoDFMR Vol. 9 & FPM Vol. 2 Ch. 2 & 3",
    applicability: { DO: true, FO: true, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-TP-03",
    section: "Finance",
    category: "travel-processes",
    number: 3,
    question: "Is leave taken in conjunction with TDY charged against the Marines leave account and reported in accordance with the references?",
    reference: "FPM Vol. 2 Ch. 2 & 4, MCO 1050.3J",
    applicability: { DO: true, FO: true, outsideAgency: true },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-TP-04",
    section: "Finance",
    category: "travel-processes",
    number: 4,
    question: "Have all the MCTIR files for travel payments been uploaded to MCTFS and posted within the required time frame in accordance with the reference?",
    reference: "FPM Vol. 2 Ch. 1",
    applicability: { DO: true, FO: true, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-TP-05",
    section: "Finance",
    category: "travel-processes",
    number: 5,
    question: "Is the DDS reject report processed in accordance with the references?",
    reference: "FPM Vol. 2 Ch. 1",
    applicability: { DO: true, FO: true, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-TP-06",
    section: "Finance",
    category: "travel-processes",
    number: 6,
    question: "Is the DO/FO properly processing all DDS Travel diaries within the required time frame and validating to ensure all checkages are reported in MCTFS in accordance with the reference?",
    reference: "FPM Vol. 2 Ch. 1",
    applicability: { DO: true, FO: true, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-TP-07",
    section: "Finance",
    category: "travel-processes",
    number: 7,
    question: "Is the Disbursing Summary Report (DSR) being certified by an authorized Certifying Official prior to processing the travel business in accordance with the reference? NOTE: Previously the Vouchers Awaiting Payment (VAP)",
    reference: "FPM Vol. 3 Ch. 9",
    applicability: { DO: true, FO: true, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: false },
  },
  {
    id: "FIN-TP-08",
    section: "Finance",
    category: "travel-processes",
    number: 8,
    question: "Are classified payments processed correctly and in accordance with the reference? Note: Personnel must be appointed IAW the reference and ensure verification from the Security Manager is on file.",
    reference: "FPM Vol. 2 Ch. 1",
    applicability: { DO: true, FO: true, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-TP-09",
    section: "Finance",
    category: "travel-processes",
    number: 9,
    question: "Are non-DTS TDY Travel Claims paid accurately and in accordance with the references?",
    reference: "JTR, DoDFMR Vol. 9, FPM Vol 2 Ch. 4",
    applicability: { DO: true, FO: true, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-TP-10",
    section: "Finance",
    category: "travel-processes",
    number: 10,
    question: "Are travel advances paid within the required time frame (PCS/SEPS, TDY, DITY)?",
    reference: "JTR, DoDFMR Vol. 9 and FPM Vol. 2 Ch.2, Ch. 3, and Ch. 4",
    applicability: { DO: true, FO: true, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-TP-11",
    section: "Finance",
    category: "travel-processes",
    number: 11,
    question: "Are DTS Travel Claims paid accurately and in accordance with the references?",
    reference: "JTR, DoDFMR Vol. 9, MCO 4650.39A, FPM Vol. 2 Ch. 2 and DoDI 5154.31",
    applicability: { DO: true, FO: true, outsideAgency: true },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-TP-12",
    section: "Finance",
    category: "travel-processes",
    number: 12,
    question: "Are travel vouchers processed within the required time frame? (Non-DTS TDY, PCS, and DTS)",
    reference: "FPM Vol. 2 Ch. 2 & 4",
    applicability: { DO: true, FO: true, outsideAgency: true },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },

  // ============================================
  // FINANCE - PAY PROCESSES
  // ============================================
  {
    id: "FIN-PP-01",
    section: "Finance",
    category: "pay-processes",
    number: 1,
    question: "Are Final Join Audits accurately processed in accordance with the references? Note: Elapsed time entry and all necessary adjustments will be reviewed.",
    reference: "FPM Vol. 1 Ch. 17, FPM Vol. 2 Ch. 3, JTR Ch. 5, DoDFMR Vol 7a",
    applicability: { DO: true, FO: true, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-PP-02",
    section: "Finance",
    category: "pay-processes",
    number: 2,
    question: "Are waivers/remissions of indebtedness processed accurately in accordance with the reference?",
    reference: "FPM Vol. 1, Ch. 13",
    applicability: { DO: true, FO: true, outsideAgency: true },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-PP-03",
    section: "Finance",
    category: "pay-processes",
    number: 3,
    question: "Are the Diary Feedback Module (DFM) reports processed accurately in accordance with the references?",
    reference: "FPM Vol. 1 Ch. 1, App F & G.",
    applicability: { DO: true, FO: true, outsideAgency: true },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-PP-04",
    section: "Finance",
    category: "pay-processes",
    number: 4,
    question: "Are Final Join Audits conducted within the required time frame?",
    reference: "FPM Vol. 1 Ch. 17",
    applicability: { DO: true, FO: true, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-PP-05",
    section: "Finance",
    category: "pay-processes",
    number: 5,
    question: "Are Line of Duty Payments processed accurately in accordance with the references?",
    reference: "FPM Vol. 1 Ch. 21, DoDFMR Vol 7a",
    applicability: { DO: false, FO: false, outsideAgency: true },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-PP-06",
    section: "Finance",
    category: "pay-processes",
    number: 6,
    question: "Are the Diary Feedback Module (DFM) reports processed within the required time frame?",
    reference: "FPM Vol. 1 Ch. 1, App F & G.",
    applicability: { DO: true, FO: true, outsideAgency: true },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-PP-07",
    section: "Finance",
    category: "pay-processes",
    number: 7,
    question: "Are waivers/remissions of indebtedness processed within the required time frame?",
    reference: "FPM Vol. 1, Ch. 13",
    applicability: { DO: true, FO: true, outsideAgency: true },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-PP-08",
    section: "Finance",
    category: "pay-processes",
    number: 8,
    question: "Are Line of Duty Payments processed within the required time frame?",
    reference: "FPM Vol. 1 Ch. 21, DoDFMR Vol 7a",
    applicability: { DO: false, FO: false, outsideAgency: true },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-PP-09",
    section: "Finance",
    category: "pay-processes",
    number: 9,
    question: "Are NAVMC 11116 reported and processed accurately in accordance with the references?",
    reference: "FPM Vol. 1 Ch. 5, 6, 7, 8, 9, 11, 12, & 17, DoDFMR Vol 7a.",
    applicability: { DO: true, FO: true, outsideAgency: true },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-PP-10",
    section: "Finance",
    category: "pay-processes",
    number: 10,
    question: "Are Miscellaneous Action Notices processed in accordance with the reference?",
    reference: "FPM Vol. 1, Ch. 1",
    applicability: { DO: true, FO: true, outsideAgency: true },
    fiscalYears: { FY23: true, FY22: false, FY21: false, FY20: false, FY19: false },
  },
  {
    id: "FIN-PP-11",
    section: "Finance",
    category: "pay-processes",
    number: 11,
    question: "Does the office properly process unliquidated PCS/PPM advances in accordance with the reference?",
    reference: "FPM Vol. 1, Appendix G",
    applicability: { DO: true, FO: true, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: false, FY21: false, FY20: false, FY19: false },
  },
  {
    id: "FIN-PP-12",
    section: "Finance",
    category: "pay-processes",
    number: 12,
    question: "Are NAVMC 11116 processed within the required time frame?",
    reference: "FPM Vol. 1 Ch. 2",
    applicability: { DO: true, FO: true, outsideAgency: true },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },

  // ============================================
  // FINANCE - INTERNAL AUDIT PROCESSES
  // ============================================
  {
    id: "FIN-IA-01",
    section: "Finance",
    category: "internal-audit-processes",
    number: 1,
    question: "Is alternate EFT account information for travelers that are not resident in MCTFS being input accurately and validated by those personnel who have been appointed in writing in accordance with the references?",
    reference: "DoDFMR Vol 5 Ch. 9, FPM Vol. 2 Ch.1 and Appendices E. & G., MARADMINs 465/13 and 257/21.",
    applicability: { DO: true, FO: true, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-IA-02",
    section: "Finance",
    category: "internal-audit-processes",
    number: 2,
    question: "Are the ICMPRA transactions being accurately audited on a monthly basis by the DO/FO or designated representative to include the corrective action taken in accordance with the references?",
    reference: "DoDFMR Vol 5 Ch. 6 and 12, DoDFMR Vol 4 Ch. 14, and FPM Vol 1 Ch. 16",
    applicability: { DO: true, FO: true, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-IA-03",
    section: "Finance",
    category: "internal-audit-processes",
    number: 3,
    question: "Is the office conducting monthly audits effectively and ensuring appropriate corrective action has been taken in accordance with the references?",
    reference: "OMB Circular A-123, FPM Vol. 1 Ch. 16, FPM Vol. 2 080202",
    applicability: { DO: true, FO: true, outsideAgency: true },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-IA-04",
    section: "Finance",
    category: "internal-audit-processes",
    number: 4,
    question: "Is the office properly completing the DFAS Post Payment Review report and submitting it within the required time frame to include corrective action?",
    reference: "DoDFMR Vol 4 Ch. 14, FPM Vol. 2 Ch. 8",
    applicability: { DO: true, FO: true, outsideAgency: true },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-IA-05",
    section: "Finance",
    category: "internal-audit-processes",
    number: 5,
    question: "Have the monthly DTS PRA vouchers been properly reviewed and are they on file in accordance with the references? Note: Documentation of review must be uploaded to the RFF SharePoint.",
    reference: "DoDFMR Vol 5 Ch.12, DoDFMR Vol 4 Ch. 14, and FPM Vol 1 Ch. 16",
    applicability: { DO: true, FO: true, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-IA-06",
    section: "Finance",
    category: "internal-audit-processes",
    number: 6,
    question: "Does the office have a written training program that addresses fraud and/or deficiencies that are discovered and is the office implementing controls to mitigate those deficiencies while also conducting training in accordance with the training program and/or the references? Note: Documentation of training must be uploaded to the RFF SharePoint.",
    reference: "OMB Circular A-123, NAVMC 3500.69 C, and FPM Vol. 1 Ch. 16",
    applicability: { DO: true, FO: true, outsideAgency: true },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-IA-07",
    section: "Finance",
    category: "internal-audit-processes",
    number: 7,
    question: "Is the office properly conducting quarterly audits in accordance with the references?",
    reference: "OMB Circular A-123, FPM Vol. 1 Ch. 16 and FPM Vol. 2 080202",
    applicability: { DO: true, FO: true, outsideAgency: true },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-IA-08",
    section: "Finance",
    category: "internal-audit-processes",
    number: 8,
    question: "Has corrective action been properly completed in conjunction with the prior MCAAT analysis?",
    reference: "FPM, JTR, DoDFMR",
    applicability: { DO: true, FO: true, outsideAgency: true },
    fiscalYears: { FY23: true, FY22: true, FY21: false, FY20: false, FY19: false },
  },

  // ============================================
  // FINANCE - FISCAL PROCESSES
  // ============================================
  {
    id: "FIN-FP-01",
    section: "Finance",
    category: "fiscal-processes",
    number: 1,
    question: "Is a blank check control log maintained for each series of checks used in accordance with the references?",
    reference: "DoDFMR Vol. 5 Ch. 7 and FPM Vol. 3 Ch. 7",
    applicability: { DO: true, FO: false, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-FP-02",
    section: "Finance",
    category: "fiscal-processes",
    number: 2,
    question: "Are all U.S. Treasury checks issued reported via the PIR the day in which the check was produced in accordance with the references?",
    reference: "DoDFMR Vol. 5 Ch. 7 and FPM Vol. 3 Ch. 7",
    applicability: { DO: true, FO: false, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-FP-03",
    section: "Finance",
    category: "fiscal-processes",
    number: 3,
    question: "Is the DO following the proper guidelines when exchanging for and disposing of foreign currency and accurately recording to either the DD2663 or DD2664 in accordance with the references?",
    reference: "DoDFMR Vol. 5 Ch. 13 and FPM Vol. 3 Ch. 13",
    applicability: { DO: true, FO: false, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-FP-04",
    section: "Finance",
    category: "fiscal-processes",
    number: 4,
    question: "Has the DO/FO conducted proper Stored Value Card inventories monthly and in accordance with the references? NOTE: DO/FO must also ensure they keep records of all inventories and reports submitted to the Treasury/RFF-KCI.",
    reference: "DoDFMR Vol. 5 Ch. 10 and FPM Vol 3 Ch. 10",
    applicability: { DO: true, FO: true, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-FP-05",
    section: "Finance",
    category: "fiscal-processes",
    number: 5,
    question: "Has the DO/FO conducted proper Treasury check inventories at a minimum of every 90 days in accordance with the references?",
    reference: "DoDFMR Vol. 5 Ch. 7 and FPM Vol. 3 Ch. 7",
    applicability: { DO: true, FO: false, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-FP-06",
    section: "Finance",
    category: "fiscal-processes",
    number: 6,
    question: "Have all cross disbursement payments been processed correctly and in accordance with the reference?",
    reference: "FPM Vol. 3 Ch. 9",
    applicability: { DO: true, FO: true, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-FP-07",
    section: "Finance",
    category: "fiscal-processes",
    number: 7,
    question: "Does the Fiscal section correctly process regular and special payroll transactions in accordance with the reference?",
    reference: "FPM Vol. 3 Ch. 9",
    applicability: { DO: true, FO: true, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-FP-08",
    section: "Finance",
    category: "fiscal-processes",
    number: 8,
    question: "Are irregularities being reported to include reporting overages, conducting investigations, and accounting for losses incurred in accordance with the references?",
    reference: "DoDFMR Vol. 5 Ch. 3, 6, 15 and FPM Vol. 3 Ch. 6, 15",
    applicability: { DO: true, FO: true, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-FP-09",
    section: "Finance",
    category: "fiscal-processes",
    number: 9,
    question: "Does the Fiscal section correctly report negotiable instrument transactions in accordance with the references? NOTE: This includes a complete record of negotiable instruments mailed or presented to depositaries.",
    reference: "DoDFMR Vol. 5 Ch. 4, 11 and FPM Vol. 3 Ch. 4, 8, 11",
    applicability: { DO: true, FO: true, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-FP-10",
    section: "Finance",
    category: "fiscal-processes",
    number: 10,
    question: "Are all entries related to collections and disbursements being reported in the applicable pay entitlement and accounting system within the same business day of being reported on the office's business in DDS (DD 2657/DD 2665)?",
    reference: "DoDFMR Vol. 4 Ch. 1 and FPM Vol. 3 Ch. 8",
    applicability: { DO: true, FO: true, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-FP-11",
    section: "Finance",
    category: "fiscal-processes",
    number: 11,
    question: "Has the Disbursing office properly established, maintained and closed Limited Depositary Checking Account's as applicable and in accordance with the references?",
    reference: "DoDFMR Vol. 5 Ch. 14 and FPM Vol. 3 Ch. 14",
    applicability: { DO: true, FO: false, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-FP-12",
    section: "Finance",
    category: "fiscal-processes",
    number: 12,
    question: "Has all corrective action on Unmatched Transaction reports been posted within the required time frame?",
    reference: "FPM Vol. 3 Ch. 19",
    applicability: { DO: true, FO: true, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-FP-13",
    section: "Finance",
    category: "fiscal-processes",
    number: 13,
    question: "Are Debit Vouchers (SF 5515) received from a servicing depositary immediately recorded on the Daily Statement of Accountability (DD2657) on the day received and reported on the Statement of Accountability (SF 1219) for the month in which received?",
    reference: "DoDFMR Vol. 5 Ch. 4, 11 and FPM Vol. 3 Ch. 4, 11",
    applicability: { DO: true, FO: false, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-FP-14",
    section: "Finance",
    category: "fiscal-processes",
    number: 14,
    question: "Have all Disbursing payment, adjustment, and report records, that are not required to be recorded to CEDMS or DTMS, been safeguarded to enable retrieval over the full 10 years in accordance with the references?",
    reference: "SECNAVINST M-5210.1 and DoDFMR Vol 1. CH. 9",
    applicability: { DO: true, FO: true, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-FP-15",
    section: "Finance",
    category: "fiscal-processes",
    number: 15,
    question: "Are all Unit Paying Agents properly appointed, trained, and have been provided written operating instructions regarding their duties and responsibilities in accordance with the references?",
    reference: "DoDFMR Vol. 5 Ch. 2 and FPM Vol. 3 Ch. 17",
    applicability: { DO: true, FO: false, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-FP-16",
    section: "Finance",
    category: "fiscal-processes",
    number: 16,
    question: "Have all fiscal vouchers properly posted in the Corporate Electronic Document Management System (CEDMS) within the required time frame?",
    reference: "FPM Vol. 3 Ch. 18",
    applicability: { DO: true, FO: true, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-FP-17",
    section: "Finance",
    category: "fiscal-processes",
    number: 17,
    question: "Are the CIR, PIR and OTCnet reports accurately reconciled daily and in accordance with the references?",
    reference: "DoDFMR Vol. 5 Ch.11 and FPM Vol. 3 Ch. 11",
    applicability: { DO: true, FO: false, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-FP-18",
    section: "Finance",
    category: "fiscal-processes",
    number: 18,
    question: "Is the DD2657/DD2665 (statement of accountability) correctly balanced daily and in accordance with the references? Note: DDS generated DD 1081/2657 and 2665",
    reference: "DoDFMR Vol. 5 Ch. 15 and FPM Vol. 3 Ch. 15",
    applicability: { DO: true, FO: true, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-FP-19",
    section: "Finance",
    category: "fiscal-processes",
    number: 19,
    question: "Are spoiled and/or voided checks properly reported and accounted for in accordance with the references? NOTE: This includes properly canceling checks as well.",
    reference: "DoDFMR Vol. 5 Ch. 7 and FPM Vol. 3 Ch. 7",
    applicability: { DO: true, FO: false, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-FP-20",
    section: "Finance",
    category: "fiscal-processes",
    number: 20,
    question: "Are the Unmatched Transaction reports being researched, completed and posted to the RFF-KCI Portal in accordance with the reference?",
    reference: "FPM Vol. 3 Ch. 19",
    applicability: { DO: true, FO: true, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-FP-21",
    section: "Finance",
    category: "fiscal-processes",
    number: 21,
    question: "Are returned checks/returned electronic fund payments processed correctly and in accordance with the references?",
    reference: "DoDFMR Volume 5 Ch. 9 and FPM Vol. 3 Ch. 9",
    applicability: { DO: true, FO: false, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-FP-22",
    section: "Finance",
    category: "fiscal-processes",
    number: 22,
    question: "Are PIR files loaded within the required time frame?",
    reference: "FPM Vol. 3 Ch. 5",
    applicability: { DO: true, FO: false, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: true, FY21: false, FY20: false, FY19: false },
  },
  {
    id: "FIN-FP-23",
    section: "Finance",
    category: "fiscal-processes",
    number: 23,
    question: "Are Collection Vouchers properly reported in accordance with the references?",
    reference: "DoDFMR Vol. 5 Ch. 8 & 9, DoDFMR Vol. 10 Ch. 7, and FPM Vol. 3 Ch. 8, 9, & 12, and RFF Policy Letters",
    applicability: { DO: true, FO: true, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: false, FY21: false, FY20: false, FY19: false },
  },
  {
    id: "FIN-FP-24",
    section: "Finance",
    category: "fiscal-processes",
    number: 24,
    question: "Are Public vouchers properly reported in accordance with the references?",
    reference: "DoDFMR Vol. 5 Ch. 8 & 9, DoDFMR Vol. 10 Ch. 7, and FPM Vol. 3 Ch. 8, 9, & 12, and RFF Policy Letters",
    applicability: { DO: true, FO: true, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: false, FY21: false, FY20: false, FY19: false },
  },
  {
    id: "FIN-FP-25",
    section: "Finance",
    category: "fiscal-processes",
    number: 25,
    question: "Are Deposit Tickets properly reported in accordance with the references?",
    reference: "DoDFMR Vol. 5 Ch. 8 & 9, DoDFMR Vol. 10 Ch. 7, and FPM Vol. 3 Ch. 8, 9, & 12, and RFF Policy Letters",
    applicability: { DO: true, FO: true, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: false, FY21: false, FY20: false, FY19: false },
  },
  {
    id: "FIN-FP-26",
    section: "Finance",
    category: "fiscal-processes",
    number: 26,
    question: "Are the appropriate CARS/PIR/CIR/TCIS accounts and accesses created for the Fiscal User in accordance with the references?",
    reference: "FPM Vol. 3 Ch. 5",
    applicability: { DO: true, FO: false, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: true, FY21: false, FY20: false, FY19: false },
  },
  {
    id: "FIN-FP-27",
    section: "Finance",
    category: "fiscal-processes",
    number: 27,
    question: "Are all SF215's and/or SF5515's that post to Treasury Suspense (BCAF3500) reclassed within the appropriate accounting period and in accordance with the references?",
    reference: "FPM Vol. 3 Ch. 5",
    applicability: { DO: true, FO: false, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: true, FY21: false, FY20: false, FY19: false },
  },
  {
    id: "FIN-FP-28",
    section: "Finance",
    category: "fiscal-processes",
    number: 28,
    question: "Have all CTA Bulk files been loaded in CARS in accordance with the references?",
    reference: "FPM Vol. 3 Ch. 5",
    applicability: { DO: true, FO: false, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: true, FY21: false, FY20: false, FY19: false },
  },

  // ============================================
  // FINANCE - SEPARATIONS PROCESSES
  // ============================================
  {
    id: "FIN-SP-01",
    section: "Finance",
    category: "separations-processes",
    number: 1,
    question: "Has the FO established effective control measures to ensure MCCS returns unused prepaid services in a timely manner in order to prevent out of balance accounts in accordance with the reference?",
    reference: "FPM Vol. 1 Ch. 9",
    applicability: { DO: false, FO: true, outsideAgency: false },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-SP-02",
    section: "Finance",
    category: "separations-processes",
    number: 2,
    question: "Are Out of Balance (OOB) reports/documents processed in accordance with the reference?",
    reference: "FPM Vol. 1 Ch. 9 & 21",
    applicability: { DO: true, FO: true, outsideAgency: true },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-SP-03",
    section: "Finance",
    category: "separations-processes",
    number: 3,
    question: "Are the Monthly DSSN Audit Reports (MDARS) processed in accordance with the reference?",
    reference: "FPM Vol. 1 Ch. 3",
    applicability: { DO: true, FO: true, outsideAgency: true },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-SP-04",
    section: "Finance",
    category: "separations-processes",
    number: 4,
    question: "Are the Reserve Positive Carried Forward amounts from the IMR's being processed accurately and in accordance with the reference?",
    reference: "FPM Vol. 1 Ch. 21",
    applicability: { DO: false, FO: false, outsideAgency: true },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-SP-05",
    section: "Finance",
    category: "separations-processes",
    number: 5,
    question: "Is the Reserve Positive Carried Forward IMR being completed within the required time frame and in accordance with the reference?",
    reference: "FPM Vol. 1 Ch. 21",
    applicability: { DO: false, FO: false, outsideAgency: true },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-SP-06",
    section: "Finance",
    category: "separations-processes",
    number: 6,
    question: "Are NAVMC 11060 processed accurately in accordance with the references?",
    reference: "FPM Vol. 1 Ch. 5, 6, 7, 9, 11, 12, & 17, DoDFMR Vol 7a",
    applicability: { DO: true, FO: true, outsideAgency: true },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-SP-07",
    section: "Finance",
    category: "separations-processes",
    number: 7,
    question: "Are NAVMC 11060 processed within the required time frame?",
    reference: "FPM Vol. 1 Ch. 2 & 9",
    applicability: { DO: true, FO: true, outsideAgency: true },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-SP-08",
    section: "Finance",
    category: "separations-processes",
    number: 8,
    question: "Are Restorations processed accurately and in accordance with the references?",
    reference: "DoDFMR Volume 7a Ch. 1 & 48",
    applicability: { DO: false, FO: false, outsideAgency: true },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-SP-09",
    section: "Finance",
    category: "separations-processes",
    number: 9,
    question: "Are Out of Service Debts processed accurately and in accordance with the reference?",
    reference: "FPM Vol. 1 Ch. 9 & 21",
    applicability: { DO: true, FO: true, outsideAgency: true },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
  {
    id: "FIN-SP-10",
    section: "Finance",
    category: "separations-processes",
    number: 10,
    question: "Are Out of Service Debts processed within the required time frame?",
    reference: "FPM Vol. 1 Ch. 9 & 21",
    applicability: { DO: true, FO: true, outsideAgency: true },
    fiscalYears: { FY23: true, FY22: true, FY21: true, FY20: true, FY19: true },
  },
];

// Helper function to get questions by category
export function getFinanceQuestionsByCategory(category: FinanceCategorySlug): FinanceMCAATQuestion[] {
  return financeMcaatQuestions.filter((q) => q.category === category);
}

// Helper function to get questions by section
export function getFinanceQuestionsBySection(section: FinanceSection): FinanceMCAATQuestion[] {
  return financeMcaatQuestions.filter((q) => q.section === section);
}

// Helper function to get questions applicable to DO
export function getDOQuestions(): FinanceMCAATQuestion[] {
  return financeMcaatQuestions.filter((q) => q.applicability.DO);
}

// Helper function to get questions applicable to FO
export function getFOQuestions(): FinanceMCAATQuestion[] {
  return financeMcaatQuestions.filter((q) => q.applicability.FO);
}

// Helper function to get questions by fiscal year
export function getQuestionsByFiscalYear(year: keyof FinanceMCAATQuestion["fiscalYears"]): FinanceMCAATQuestion[] {
  return financeMcaatQuestions.filter((q) => q.fiscalYears[year]);
}

// Get category counts
export function getFinanceCategoryCounts(): Record<FinanceCategorySlug, number> {
  const counts: Record<FinanceCategorySlug, number> = {
    "administrative-management": 0,
    "travel-processes": 0,
    "pay-processes": 0,
    "internal-audit-processes": 0,
    "fiscal-processes": 0,
    "separations-processes": 0,
  };

  for (const question of financeMcaatQuestions) {
    counts[question.category]++;
  }

  return counts;
}
