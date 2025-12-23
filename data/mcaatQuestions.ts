// MCAAT Inspection Questions Data
// Organized by Category and Unit Type

export type UnitType = "REPORTING" | "IPAC" | "SUPPORTING";

export type CategorySlug =
  | "audit"
  | "defense-travel-system"
  | "deployments-exercises-operations"
  | "inbound-management-gains"
  | "legal"
  | "milpay"
  | "outbound-management"
  | "promotions"
  | "reserve-pay"
  | "special-hazardous-duty-pay"
  | "systems-management"
  | "training";

export interface MCCATQuestion {
  id: number;
  question: string;
  reference: string;
  link?: string;
  video?: string;
}

export interface MCCATUnitSection {
  unitType: UnitType;
  questions: MCCATQuestion[];
}

export interface MCCATCategory {
  slug: CategorySlug;
  name: string;
  description: string;
  sections: MCCATUnitSection[];
}

// Category metadata for display
export const categoryMeta: Record<CategorySlug, { name: string; description: string }> = {
  "audit": {
    name: "Audit",
    description: "Verify compliance with audit procedures for member-to-member pay, dependent documentation, and required audits."
  },
  "defense-travel-system": {
    name: "Defense Travel System",
    description: "DTS compliance including travel vouchers, per diem, BAS/DMR entitlements, and Personnel Tempo reporting."
  },
  "deployments-exercises-operations": {
    name: "Deployments / Exercises / Operations",
    description: "Entitlements and reporting for FSA, HDP, IDP/HFP, Per Diem, Combat Zone Tax Exclusion, and Flight Deck Duty Pay."
  },
  "inbound-management-gains": {
    name: "Inbound Management / Gains",
    description: "Join processing, inbound interviews, PCS travel claims, and OMPF document requirements."
  },
  "legal": {
    name: "Legal",
    description: "NJP reporting, courts-martial, confinement orders, UA/desertion, appellate leave, and legal hold procedures."
  },
  "milpay": {
    name: "MilPay",
    description: "Pay and allowances including BAH, COLA, FSA, commuted rations, BNA, and contractual documents."
  },
  "outbound-management": {
    name: "Outbound Management",
    description: "Separation processing, DD-214 preparation, terminal leave, SkillBridge, and STR submission."
  },
  "promotions": {
    name: "Promotions",
    description: "Meritorious promotions, CRB reporting, JEPES occasions, and promotion recommendation procedures."
  },
  "reserve-pay": {
    name: "Reserve Pay",
    description: "SMCR pay processing, drill certification, AT/ADOS audits, travel claims, and muster management."
  },
  "special-hazardous-duty-pay": {
    name: "Special & Hazardous Duty Pay",
    description: "SDA, AIP, VSI, flight pay, dive pay, jump pay, and demolition duty pay certification and reporting."
  },
  "systems-management": {
    name: "Systems Management",
    description: "UDMIPS, DTMS, DMM certifying officials, COL training, DFR certification, and OMPF access."
  },
  "training": {
    name: "Training",
    description: "PFT, CFT, rifle qualification, MCMAP, schools, and Body Composition Program reporting."
  }
};

// Main questions data - Add your questions here
export const mcaatQuestions: MCCATCategory[] = [
  {
    slug: "audit",
    name: "Audit",
    description: "Verify compliance with audit procedures for member-to-member pay, dependent documentation, and required audits.",
    sections: [
      {
        unitType: "REPORTING",
        questions: [
          {
            id: 1,
            question: "Does the reporting unit have access to other service LES, via DFAS MilPay Repository (DMR), in order to assist member married to non Marine member audits?",
            reference: "MCTFSPRIUM 12-120103",
            link: "https://dmoapps.csd.disa.mil/MilPayRepository/Warning.aspx?DFAS=bbd7d645-5487-4bec-9871-b73f079c1fc9",
            video: "https://www.marinenet.usmc.mil/mvs/watchVideo.aspx?Id=6218A6BECBEC"
          },
          {
            id: 2,
            question: "Is the Travel Flag changed to 'N' and are other entitlements adjusted, as needed, NLT the 15th day, when a member fails to provide the required documents to claim child(ren) over the age of 21 as a dependent?",
            reference: "DoDFMR Vol. 7A, Chap 26, par. 3.1.1.2; MCO 1751.3 CH-1, par. 6; MCTFSPRIUM, 12-120103",
            link: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders%2FEnterprise%2BUser%2BReports%2FHQMC%2FSemper%2BAdmin%2FMCAAT%2FDependent%2BOver%2B21"
          },
          {
            id: 3,
            question: "Is a current Member to Member data sheet filed in OMPF? Note: Data sheet must correspond with the current household status and spouse's current military status. Additionally, marriage certificate and birth certificate for children whether or not claimed for BAH or travel purposes must be resident in each member's OMPF.",
            reference: "MCTFSPRIUM, 12-120103 and Table 12-4, MARADMIN 015/20",
            link: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders%2FEnterprise%2BUser%2BReports%2FHQMC%2FSemper%2BAdmin%2FMCAAT%2FMember%2BMarried%2BTo%2BMember%2528M2M%2529%2BAudit"
          },
          {
            id: 4,
            question: "Are member married to member (M2M) pay and entitlements audited for accuracy upon the occasion outlined in the reference?",
            reference: "MCTFSPRIUM, 12-120103",
            link: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/MISSA%252C%2BHQMC/MISSO%2B6/Dashboards/Semper%2BAdmin/MCAAT/MCAAT%2BReports/01.%2BAudit/Member%2BMarried%2BTo%2BMember%2528M2M%2529%2BAudit"
          },
          {
            id: 5,
            question: "Does the organization maintain and retain supporting documents on file for audit and to validate the completion of the member married to member audit in accordance with retention policies?",
            reference: "MCTFSPRIUM, 12-120103; MARADMIN 601/24",
            link: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/MISSA%252C%2BHQMC/MISSO%2B6/Dashboards/Semper%2BAdmin/MCAAT/MCAAT%2BReports/01.%2BAudit/Member%2BMarried%2BTo%2BMember%2528M2M%2529%2BAudit"
          },
          {
            id: 7,
            question: "Is the NAVMC 10922 properly completed and are key supporting documents that validate dependents (i.e. NAVMC 10922, Marriage Cert, Birth Cert, Divorce Decree) filed in OMPF within 10 working days from the effective date?",
            reference: "MCO 1751.3; MARADMIN 015/20; MARADMIN 661/19",
            link: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders%2FEnterprise%2BUser%2BReports%2FHQMC%2FSemper%2BAdmin%2FMCAAT%2F10922%2BMONTHLY%2BVERIFICATION"
          },
          {
            id: 8,
            question: "Is the unit completing member married to member (M2M) audits, either in person or telephonically, within 60 days of the join date, and that telephonic audits are verified by an E6 or above?",
            reference: "MCTFSPRIUM, 12-120103",
            link: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/MISSA%252C%2BHQMC/MISSO%2B6/Dashboards/Semper%2BAdmin/MCAAT/MCAAT%2BReports/01.%2BAudit/Member%2BMarried%2BTo%2BMember%2528M2M%2529%2BAudit"
          },
          {
            id: 9,
            question: "Is the NAVMC 10922 properly completed and are key supporting documents that validate dependents (i.e. NAVMC 10922, Marriage Cert, Birth Cert, Divorce Decree) filed in OMPF within 10 working days from the effective date?",
            reference: "MCO 1751.3 w/Ch-1 par. 1f; MARADMIN 015/20; MARADMIN 661/19",
            link: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders%2FEnterprise%2BUser%2BReports%2FHQMC%2FSemper%2BAdmin%2FMCAAT%2F10922%2BMONTHLY%2BVERIFICATION"
          }
        ]
      },
      {
        unitType: "IPAC",
        questions: [
          {
            id: 6,
            question: "Is the NAVMC 10922 properly completed and are key supporting documents that validate dependents (i.e. NAVMC 10922, Marriage Cert, Birth Cert, Divorce Decree) filed in OMPF within 10 working days from the date reported on unit diary?",
            reference: "MCO 1751.3; MARADMIN 015/20; MARADMIN 661/19",
            link: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders%2FEnterprise%2BUser%2BReports%2FHQMC%2FSemper%2BAdmin%2FMCAAT%2F10922%2BMONTHLY%2BVERIFICATION"
          },
          {
            id: 10,
            question: "Is the unit completing member married to member (M2M) audits, either in person or telephonically, within 60 days of the join date, and that telephonic audits are verified by an E6 or above?",
            reference: "MCTFSPRIUM, 12-120103",
            link: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/MISSA%252C%2BHQMC/MISSO%2B6/Dashboards/Semper%2BAdmin/MCAAT/MCAAT%2BReports/01.%2BAudit/Member%2BMarried%2BTo%2BMember%2528M2M%2529%2BAudit"
          },
          {
            id: 11,
            question: "Is the Travel Flag changed to 'N' and are other entitlements adjusted, as needed, NLT the 15th day, when a member fails to provide the required documents to claim child(ren) over the age of 21 as a dependent?",
            reference: "DoDFMR Vol. 7A, Chap 26, par. 3.1.1.2; MCO 1751.3 CH-1, par. 6; MCTFSPRIUM, 12-120103",
            link: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders%2FEnterprise%2BUser%2BReports%2FHQMC%2FSemper%2BAdmin%2FMCAAT%2FDependent%2BOver%2B21"
          },
          {
            id: 12,
            question: "Are member married to member (M2M) pay and entitlements audited for accuracy upon the occasion outlined in the reference?",
            reference: "MCTFSPRIUM, 12-120103",
            link: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/MISSA%252C%2BHQMC/MISSO%2B6/Dashboards/Semper%2BAdmin/MCAAT/MCAAT%2BReports/01.%2BAudit/Member%2BMarried%2BTo%2BMember%2528M2M%2529%2BAudit"
          },
          {
            id: 13,
            question: "Is a current Member to Member data sheet filed in OMPF? Note: Data sheet must correspond with the current household status and spouse's current military status. Additionally, marriage certificate and birth certificate for children whether or not claimed for BAH or travel purposes must be resident in each member's OMPF.",
            reference: "MARADMIN 015/20; MCTFSPRIUM, 12-120103, Table 12-4",
            link: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/MISSA%252C%2BHQMC/MISSO%2B6/Dashboards/Semper%2BAdmin/MCAAT/MCAAT%2BReports/01.%2BAudit/Member%2BMarried%2BTo%2BMember%2528M2M%2529%2BAudit"
          },
          {
            id: 14,
            question: "Does the organization maintain and retain supporting documents on file for audit and to validate the completion of the member married to member audit in accordance with retention policies?",
            reference: "MCTFSPRIUM, 12-120103; MARADMIN 601/24",
            link: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders/Unit%2BUser%2BReports/MISSA%252C%2BHQMC/MISSO%2B6/Dashboards/Semper%2BAdmin/MCAAT/MCAAT%2BReports/01.%2BAudit/Member%2BMarried%2BTo%2BMember%2528M2M%2529%2BAudit"
          },
          {
            id: 15,
            question: "Does the reporting unit have access to other service LES, via DFAS MilPay Repository (DMR), in order to assist member to non Marine member audits?",
            reference: "MCTFSPRIUM 12-120103",
            link: "https://dmoapps.csd.disa.mil/MilPayRepository/Warning.aspx?DFAS=bbd7d645-5487-4bec-9871-b73f079c1fc9",
            video: "https://www.marinenet.usmc.mil/mvs/watchVideo.aspx?Id=6218A6BECBEC"
          }
        ]
      },
      {
        unitType: "SUPPORTING",
        questions: []
      }
    ]
  },
  {
    slug: "defense-travel-system",
    name: "Defense Travel System",
    description: "DTS compliance including travel vouchers, per diem, BAS/DMR entitlements, and Personnel Tempo reporting.",
    sections: [
      { unitType: "REPORTING", questions: [] },
      { unitType: "IPAC", questions: [] },
      { unitType: "SUPPORTING", questions: [] }
    ]
  },
  {
    slug: "deployments-exercises-operations",
    name: "Deployments / Exercises / Operations",
    description: "Entitlements and reporting for FSA, HDP, IDP/HFP, Per Diem, Combat Zone Tax Exclusion, and Flight Deck Duty Pay.",
    sections: [
      { unitType: "REPORTING", questions: [] },
      { unitType: "IPAC", questions: [] },
      { unitType: "SUPPORTING", questions: [] }
    ]
  },
  {
    slug: "inbound-management-gains",
    name: "Inbound Management / Gains",
    description: "Join processing, inbound interviews, PCS travel claims, and OMPF document requirements.",
    sections: [
      { unitType: "REPORTING", questions: [] },
      { unitType: "IPAC", questions: [] },
      { unitType: "SUPPORTING", questions: [] }
    ]
  },
  {
    slug: "legal",
    name: "Legal",
    description: "NJP reporting, courts-martial, confinement orders, UA/desertion, appellate leave, and legal hold procedures.",
    sections: [
      { unitType: "REPORTING", questions: [] },
      { unitType: "IPAC", questions: [] },
      { unitType: "SUPPORTING", questions: [] }
    ]
  },
  {
    slug: "milpay",
    name: "MilPay",
    description: "Pay and allowances including BAH, COLA, FSA, commuted rations, BNA, and contractual documents.",
    sections: [
      { unitType: "REPORTING", questions: [] },
      { unitType: "IPAC", questions: [] },
      { unitType: "SUPPORTING", questions: [] }
    ]
  },
  {
    slug: "outbound-management",
    name: "Outbound Management",
    description: "Separation processing, DD-214 preparation, terminal leave, SkillBridge, and STR submission.",
    sections: [
      { unitType: "REPORTING", questions: [] },
      { unitType: "IPAC", questions: [] },
      { unitType: "SUPPORTING", questions: [] }
    ]
  },
  {
    slug: "promotions",
    name: "Promotions",
    description: "Meritorious promotions, CRB reporting, JEPES occasions, and promotion recommendation procedures.",
    sections: [
      { unitType: "REPORTING", questions: [] },
      { unitType: "IPAC", questions: [] },
      { unitType: "SUPPORTING", questions: [] }
    ]
  },
  {
    slug: "reserve-pay",
    name: "Reserve Pay",
    description: "SMCR pay processing, drill certification, AT/ADOS audits, travel claims, and muster management.",
    sections: [
      { unitType: "REPORTING", questions: [] },
      { unitType: "IPAC", questions: [] },
      { unitType: "SUPPORTING", questions: [] }
    ]
  },
  {
    slug: "special-hazardous-duty-pay",
    name: "Special & Hazardous Duty Pay",
    description: "SDA, AIP, VSI, flight pay, dive pay, jump pay, and demolition duty pay certification and reporting.",
    sections: [
      { unitType: "REPORTING", questions: [] },
      { unitType: "IPAC", questions: [] },
      { unitType: "SUPPORTING", questions: [] }
    ]
  },
  {
    slug: "systems-management",
    name: "Systems Management",
    description: "UDMIPS, DTMS, DMM certifying officials, COL training, DFR certification, and OMPF access.",
    sections: [
      { unitType: "REPORTING", questions: [] },
      { unitType: "IPAC", questions: [] },
      { unitType: "SUPPORTING", questions: [] }
    ]
  },
  {
    slug: "training",
    name: "Training",
    description: "PFT, CFT, rifle qualification, MCMAP, schools, and Body Composition Program reporting.",
    sections: [
      { unitType: "REPORTING", questions: [] },
      { unitType: "IPAC", questions: [] },
      { unitType: "SUPPORTING", questions: [] }
    ]
  }
];

// Helper function to get category by slug
export function getCategoryBySlug(slug: string): MCCATCategory | undefined {
  return mcaatQuestions.find(cat => cat.slug === slug);
}

// Helper function to get total question count for a category
export function getCategoryQuestionCount(category: MCCATCategory): number {
  return category.sections.reduce((total, section) => total + section.questions.length, 0);
}

// Helper function to get question count by unit type
export function getUnitQuestionCount(category: MCCATCategory, unitType: UnitType): number {
  const section = category.sections.find(s => s.unitType === unitType);
  return section?.questions.length ?? 0;
}
