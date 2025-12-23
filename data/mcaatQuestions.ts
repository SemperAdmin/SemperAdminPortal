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
  referenceLinks?: Record<string, string>; // Maps reference text to URL
  link?: string;
  video?: string;
}

// Common reference URLs - add URLs here as they become available
export const commonReferenceUrls: Record<string, string> = {
  // DoDFMR Volumes
  "DoDFMR Vol. 7A": "https://comptroller.defense.gov/FMR/fmrvolumes.aspx",
  "DoDFMR Vol. 1": "https://comptroller.defense.gov/FMR/fmrvolumes.aspx",
  "DoDFMR Vol. 5": "https://comptroller.defense.gov/FMR/fmrvolumes.aspx",

  // JTR
  "JTR": "https://www.travel.dod.mil/Policy-Regulations/Joint-Travel-Regulations/",

  // MCOs - Add specific URLs as available
  "MCO 1070.1": "",
  "MCO 1900.16": "",
  "MCO 6100.13A": "",

  // MCTFSPRIUM - Add specific chapter URLs as available
  "MCTFSPRIUM": "",
};

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
      {
        unitType: "REPORTING",
        questions: [
          {
            id: 1,
            question: "Is Personnel Tempo for Temporarily Additional Duty period(s) reported IAW applicable regulations?",
            reference: "DoDFMR Vol 7A, Chap 65; MCO 4650.39A, para 4.b(7); MCTFSPRIUM 2-20103, 9-91001",
            link: "https://tfsbi.tfs.usmc.mil/bi/?pathRef=.public_folders%2FEnterprise%2BUser%2BReports%2FHQMC%2FSemper%2BAdmin%2FMCAAT%2FPERSTEMPO%2B-%2BReported"
          },
          {
            id: 2,
            question: "Is the proper BAS/DMR entitlement for Temporarily Additional Duty period(s) reported IAW applicable regulations?",
            reference: "DoDFMR Vol 7A, Chap 25, para 2.4.3.2; MCTFSPRIUM 2-20103, 8-80402, 8-80403"
          },
          {
            id: 3,
            question: "Is the unit ensuring the traveler is submitting a completed travel vouchers within 5 working days? (Note: Submitted is identified as created and signed by the traveler within this time period).",
            reference: "FPM Volume 2 - Travel Policies Chapter 2; MCO 4650.39A, encl 1, chap 1, par 5a(2)(d) and par 11d"
          },
          {
            id: 6,
            question: "Is the unit ensuring submission of zero dollar vouchers once an unsubmitted voucher exceeds 30 days past the authorized trip end date?",
            reference: "MARADMIN 359/25"
          }
        ]
      },
      {
        unitType: "IPAC",
        questions: []
      },
      {
        unitType: "SUPPORTING",
        questions: [
          {
            id: 4,
            question: "Is the unit ensuring the traveler is submitting a completed travel vouchers within 5 working days? (Note: Submitted is identified as created and signed by the traveler within this time period).",
            reference: "FPM Volume 2 - Travel Policies Chapter 2; MCO 4650.39A, encl 1, chap 1, par 5a(2)(d) and par 11d"
          },
          {
            id: 5,
            question: "Is the unit ensuring submission of zero dollar vouchers once an unsubmitted voucher exceeds 30 days past the authorized trip end date?",
            reference: "MARADMIN 359/25"
          },
          {
            id: 7,
            question: "Is the unit validating Personnel Tempo was reported correctly for Marines that have completed an applicable period?",
            reference: "DoDFMR Vol. 7A, Chap. 65; MCTFSPRIUM 9-91001"
          },
          {
            id: 8,
            question: "Is the unit validating that Marines are receiving the proper BAS/DMR entitlement when executing TAD?",
            reference: "DoDFMR Vol. 7A, Chap. 25, par. 2.4.3.2; MCTFSPRIUM 8-80402, 8-80403"
          }
        ]
      }
    ]
  },
  {
    slug: "deployments-exercises-operations",
    name: "Deployments / Exercises / Operations",
    description: "Entitlements and reporting for FSA, HDP, IDP/HFP, Per Diem, Combat Zone Tax Exclusion, and Flight Deck Duty Pay.",
    sections: [
      {
        unitType: "REPORTING",
        questions: [
          {
            id: 2,
            question: "Is FSA for Temporarily Additional Duty period(s), deployments, exercises, and operations reported within 5 days of the effective date for periods greater than 30 days?",
            reference: "DoDFMR Vol. 7A, Chap. 18, Tables 18-1, 18-3, MCTFSPRIUM, 9-90601"
          },
          {
            id: 3,
            question: "Is the unit reporting TO TAD entries when periods of TAD exceed 31 days?",
            reference: "MCTFSPRIUM 2-20103, 6-60300"
          },
          {
            id: 4,
            question: "Is Personnel Tempo for Temporarily Additional Duty period(s), deployments, exercises, or operations reported IAW applicable regulations?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 5,
            question: "Is HDP reported IAW applicable regulations?",
            reference: "DoDFMR Vol 7A, Ch 17, par 17.2, Table 17-1 MCTFSPRIUM, 9-90801, 9-90802 and 9-90803, Table 9-8; MARADMIN 092/21; MARADMIN 619/14"
          },
          {
            id: 6,
            question: "Is HDP reported within 5 days of the effective date?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 7,
            question: "Is IDP/HFP reported IAW applicable regulations?",
            reference: "DoDFMR Vol 7A, Ch 10 and Figure 10-1; MCTFSPRIUM, 9-90700, 9-90701, 9-90702, 11-110502"
          },
          {
            id: 8,
            question: "Is IDP/HFP reported within 5 days of the effective date?",
            reference: "MCTFSPRIUM 2-20103"
          },
          {
            id: 9,
            question: "Is Combat Zone Tax Exclusion reported IAW applicable regulations?",
            reference: "DoDFMR Vol 7A, Ch 44, para 2 and Table 44-1 and Table 44-2; MCTFSPRIUM, 8-80604"
          },
          {
            id: 10,
            question: "Is Combat Zone Tax Exclusion reported within 5 days of the effective date?",
            reference: "MCTFSPRIUM 2-20103"
          },
          {
            id: 11,
            question: "Is Per Diem for deployments, exercises, or operations reported IAW applicable regulations?",
            reference: "JTR, Ch 3, Part C, para 0329; MCO P3000.15B, Ch 3, Para 3000; FPM Vol 2 Chap 6, para 0601; MARADMIN 050/03; MCTFSPRIUM, 9-91003 and Table 9-9"
          },
          {
            id: 12,
            question: "Is Per Diem for deployments, exercises, or operations reported within 5 days of the effective date?",
            reference: "MCTFSPRIUM 2-20103"
          },
          {
            id: 13,
            question: "Is Career Sea Time/Pay reported IAW applicable regulations?",
            reference: "DoDFMR Vol 7A, Ch 18, Tables 18-1 and 18-3; MCTFSPRIUM, 9-90601"
          },
          {
            id: 14,
            question: "Is Career Sea Time/Pay reported within 5 days of the effective date?",
            reference: "MCTFSPRIUM 2-20103"
          },
          {
            id: 15,
            question: "Is Discount Meal Rate or Field Rations for Temporarily Additional Duty period(s), deployments, exercises, or operations reported IAW applicable regulations?",
            reference: "DoDFMR Vol 7A, Ch 25, para 2.4; PAA 02-21; MCFTSPRIUM, 8-80402 and 8-80403"
          },
          {
            id: 16,
            question: "Is the unit ensuring key supporting documents for Flight Deck Duty Pay are signed by the appropriate authority (Ship's CO, Squadron CO or Combat Cargo Officer if delegated by the Ship's CO)?",
            reference: "DoDFMR Vol 7A Chap 24, para(s) 2402 and 2404; OPNAVINST 7220.4L para 16; PAA 07-10"
          },
          {
            id: 17,
            question: "Is the reporting unit reporting Flight Deck Duty Pay within 5 days of receiving key supporting documents?",
            reference: "MCTFSPRIUM 2-20103"
          },
          {
            id: 18,
            question: "Is Flight Deck Duty Pay reported IAW applicable regulations?",
            reference: "DoDFMR Vol 7A Chap 24, para(s) 2402 and 2404; OPNAVINST 7220.4L para 6, 7 10.e, and 11; MCO 1000.6, Chap 1, Sect 2, para 15; PAA 07-10; MCTFSPRIUM, 9-90101, Table 9-3"
          },
          {
            id: 19,
            question: "For UDP, is DMR reported correctly IAW applicable regulations and are UDP advance/rear party DMR entitlement reported based on main body's arrival and departure?",
            reference: "MCO P3000.15B; PAA 02-21; MCTFSPRIUM 9-91003"
          },
          {
            id: 20,
            question: "For UDP, is deployed per diem reported correctly IAW applicable regulations and are UDP advance/rear party deployed per diem entitlement reported based on main body's arrival and departure?",
            reference: "MCO P3000.15B; PAA 02-21; PAAN 2-15; MCTFSPRIUM 9-91003"
          },
          {
            id: 21,
            question: "For UDPs, is the unit ensuring payment of per diem via DTS for advance party personnel is stopped the day prior to the main body's arrival? For rear party, is per diem paid via DTS the day after main body's departure?",
            reference: "JTR, para(s) 0327, 0328; MCO P3000.15B, para 3000; PAA 2-21; MCFTSPRIUM, 9-91003.5, Table 9-9"
          },
          {
            id: 36,
            question: "Is the unit reporting FR TAD entries when a Marine returns from a TAD period that exceeded 31 days?",
            reference: "MCTFSPRIUM 2-20103, 6-60300"
          },
          {
            id: 37,
            question: "Is Personnel Tempo for Temporarily Additional Duty period(s), deployments, exercises, or operations reported within 5 days of the effective date?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 39,
            question: "Is FSA reported IAW applicable regulations for Temporarily Additional Duty period(s), deployments, exercises, or operations greater than 30 days?",
            reference: "DoDFMR Vol. 7A, Chap. 27; MCTFSPRIUM, 9-90301"
          }
        ]
      },
      {
        unitType: "IPAC",
        questions: [
          {
            id: 22,
            question: "Is Flight Deck Duty Pay reported IAW applicable regulations?",
            reference: "DoDFMR Vol. 7A Chap. 24, par(s). 2402, 2404; OPNAVINST 7220.4L par(s). 6, 7, 10.e, 11; MCO 1000.6, Chap. 1, Sect. 2, par. 15; PAA 07-10; MCTFSPRIUM, 9-90101, Table 9-3"
          },
          {
            id: 35,
            question: "Is FSA reported IAW applicable regulations for Temporarily Additional Duty period(s), deployments, exercises, or operations greater than 30 days?",
            reference: "DoDFMR Vol. 7A, Chap. 27; MCTFSPRIUM, 9-90301"
          },
          {
            id: 40,
            question: "Is Personnel Tempo reported IAW applicable regulations for Active-Duty Operational Support ADOS and Annual Training AT periods?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 41,
            question: "Is Personnel Tempo for Temporarily Additional Duty period(s), deployments, exercises, or operations reported within 5 days of receiving the key supporting documents?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 42,
            question: "Is Personnel Tempo for Temporarily Additional Duty period(s), deployments, exercises, or operations reported IAW applicable regulations?",
            reference: "DoDFMR Vol. 7A, Chap. 65; MCTFSPRIUM, 9-91001"
          },
          {
            id: 43,
            question: "Is HDP reported within 5 days of receiving key supporting documents?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 44,
            question: "Is HDP reported IAW applicable regulations?",
            reference: "DoDFMR Vol. 7A, Chap. 17, par. 1702, Fig. 17-1, Table 17-1; MARADMIN 092/21; MARAMDIN 619/14; MCTFSPRIUM, 9-90801, 9-90802, 9-90803, Table 9-8"
          },
          {
            id: 45,
            question: "Is IDP/HFP reported within 5 days of receiving key supporting documents?",
            reference: "MCTFSPRIUM 2-20103"
          },
          {
            id: 46,
            question: "Is IDP/HFP reported IAW applicable regulations?",
            reference: "DoDFMR Vol. 7A, Chap. 10 and Fig. 10-1; MCTFSPRIUM, 9-90700, 9-90701, 9-90702, 11-110502"
          },
          {
            id: 47,
            question: "Is Combat Zone Tax Exclusion reported within 5 days of receiving key supporting documents?",
            reference: "MCTFSPRIUM 2-20103"
          },
          {
            id: 48,
            question: "Is Combat Zone Tax Exclusion reported IAW applicable regulations?",
            reference: "DoDFMR Vol. 7A, Chap. 44, par 2, Table 44-1, 44-2; MCTFSPRIUM, 8-80604"
          },
          {
            id: 49,
            question: "Is Per Diem for deployments, exercises, or operations reported within 5 days of receiving key supporting documents?",
            reference: "MCTFSPRIUM 2-20103"
          },
          {
            id: 50,
            question: "Is Per Diem for deployments, exercises, or operations reported IAW applicable regulations?",
            reference: "JTR, Chap. 3, Part C, par. 0329; MCO P3000.15B, Chap. 3, par. 3000; FPM Vol. 2 Chap. 6, par. 0601; MARADMIN 050/03; MCTFSPRIUM, 9-91003 and Table 9-9"
          },
          {
            id: 51,
            question: "Is Career Sea Time/Pay reported within 5 days of receiving key supporting documents?",
            reference: "MCTFSPRIUM 2-20103"
          },
          {
            id: 52,
            question: "Is Career Sea Time/Pay reported IAW applicable regulations?",
            reference: "DoDFMR Vol. 7A, Chap. 18, Tables 18-1, 18-3; MCTFSPRIUM, 9-90601"
          },
          {
            id: 53,
            question: "Is Discount Meal Rate or Field Rations for Temporarily Additional Duty period(s), deployments, exercises, or operations reported IAW applicable regulations?",
            reference: "DoDFMR Vol. 7A, Chap. 25, par. 2.4; PAA 02-21; MCO 10110.47A, enclosure(1), Chapter 1; MCFTSPRIUM, 8-80402 and 8-80403"
          },
          {
            id: 54,
            question: "For UDP, is DMR reported correctly IAW applicable regulations and are UDP advance/rear party DMR entitlement reported based on main body's arrival and departure?",
            reference: "MCO P3000.15B; PAA 02-21; MCTFSPRIUM 9-91003"
          },
          {
            id: 55,
            question: "For UDP, deployed per diem reported correctly IAW applicable regulations and are UDP advance/rear party deployed per diem entitlement reported based on main body's arrival and departure?",
            reference: "MCO P3000.15B; PAA 02-21; PAAN 2-15; MCTFSPRIUM 9-91003"
          },
          {
            id: 56,
            question: "Is the reporting unit reporting Flight Deck Duty Pay within 5 days of receiving key supporting documents?",
            reference: "MCTFSPRIUM 2-20103"
          },
          {
            id: 57,
            question: "Is FSA reported within 5 days of receiving key supporting documents for Temporarily Additional Duty period(s), deployments, exercises, or operations greater than 30 days?",
            reference: "DoDFMR Vol. 7A, Chap. 18, Tables 18-1, 18-3; MCTFSPRIUM, 9-90601"
          }
        ]
      },
      {
        unitType: "SUPPORTING",
        questions: [
          {
            id: 1,
            question: "Is FSA for Temporarily Additional Duty period(s), deployments, exercises, and operations is the unit submitting supporting documents to the reporting within 5 days of the effective date for periods greater than 30 days?",
            reference: "DoDFMR Vol. 7A, Chap. 27 para. 2.3.1.3, Tables 27-1, 27-4, MCTFSPRIUM, 9-90301 instead of DoDFMR Vol. 7A, Chap. 18, Tables 18-1, 18-3, MCTFSPRIUM, 9-90901"
          },
          {
            id: 23,
            question: "Is the unit ensuring key supporting documents to report exercises, operations, or deployments entitlements are submitted to and received by the reporting unit within 5 days from the end of the deployment/exercise/operation period?",
            reference: "MCTFSPRIUM 1-10100.6, 2-20103, 12-120103.6"
          },
          {
            id: 24,
            question: "Is the unit ensuring key supporting documents that validate exercises, operations, or deployments entitlements are maintained on file for audit, and in accordance with retention policies?",
            reference: "DoDFMR, Vol. 1, Chap. 9; SECNAV M-5210.1"
          },
          {
            id: 25,
            question: "Is the unit validating Personnel Tempo for exercises, operations, or deployments are reported IAW applicable regulations by the reporting unit?",
            reference: "DoDFMR Vol. 7A, Chap 65; MCTFSPRIUM, 1-10111, 9-91001, 12-120103"
          },
          {
            id: 26,
            question: "Is the unit validating Per Diem for exercises, operations, or deployments are reported IAW applicable regulations by the reporting unit?",
            reference: "JTR, Chap., 3, Part C, par. 0329; MCO P3000.15B, Chap. 3, par. 3000; FPM Vol. 2 Chap. 6, par. 0601; MARADMIN 050/03; MCTFSPRIUM, 1-10111, 9-91003, Table 9-9"
          },
          {
            id: 27,
            question: "Is the unit validating HDP for exercises, operations, or deployments is reported IAW applicable regulations by the reporting unit?",
            reference: "DoDFMR Vol. 7A, Chap. 17, par. 1702, Fig. 17-1, Table 17-1; MCTFSPRIUM, 1-10111, 9-90801, 9-90802 and 9-90803, Table 9-8; MARADMIN 092/21; MARAMDIN 619/14"
          },
          {
            id: 28,
            question: "Is the unit validating IDP/HFP exercises, operations, or deployments is reported IAW applicable regulations by the reporting unit?",
            reference: "DoDFMR Vol. 7A, Chap. 10, Fig. 10-1; MCTFSPRIUM, 1-10111, 9-90700, 9-90701, 9-90702, 11-110502"
          },
          {
            id: 29,
            question: "Is the unit validating Combat Zone Tax Exclusion for exercises, operations, or deployments is reported IAW applicable regulations by the reporting unit?",
            reference: "DoDFMR Vol. 7A, Chap. 44, par. 4402, Fig. 44-1, Fig. 44-2; MCTFSPRIUM, 1-10111, 8-80604"
          },
          {
            id: 30,
            question: "Is the unit validating that Field Ration deductions for exercises, operations, or deployments are reported IAW applicable regulations by the reporting unit?",
            reference: "DoDFMR Vol. 7A, Chap. 25, par(s). 2.4.3, 2.5; MCFTSPRIUM, 1-10111, 2-20103,8-80402, 8-80403"
          },
          {
            id: 31,
            question: "Is the unit ensuring key supporting documents for Flight Deck Duty Pay are signed by the appropriate authority (Ship's CO, Squadron CO or Combat Cargo Officer if delegated by the Ship's CO)?",
            reference: "DoDFMR Vol. 7A Chap. 24, par(s). 2402, 2404; OPNAVINST 7220.4L par. 16; PAA 07-10"
          },
          {
            id: 32,
            question: "Is the unit ensuring key supporting documents, that substantiates payment of Flight Deck Duty Pay, are submitted to and received by the reporting unit no later than 5 days after the end of the month?",
            reference: "MCTFSPRIUM 1-10100.6, 2-20103"
          },
          {
            id: 33,
            question: "Is the unit validating Flight Deck Duty Pay is reported IAW applicable regulations by the reporting unit?",
            reference: "DoDFMR Vol. 7A Chap. 24 par(s). 2402, 2404; OPNAVINST 7220.4L; MCO 1000.6, Chap. 1, Sect. 2, par. 15; PAA 07-10; MCTFSPRIUM, 1-10111, 2-20103, 9-90101, Table 9-3"
          },
          {
            id: 34,
            question: "For UDPs, is the unit ensuring payment of per diem via DTS for advance party personnel is stopped the day prior to the main body's arrival? For rear party, is per diem paid via DTS the day after main body's departure?",
            reference: "JTR, para(s) 0327, 0328; MCO P3000.15B, par. 3000; PAA 2-21; MCFTSPRIUM, 9-91003.5, Table 9-9"
          },
          {
            id: 38,
            question: "Is the unit validating Career Sea Time/Pay for exercises, operations, or deployments is reported IAW applicable regulations by the reporting unit?",
            reference: "DoDFMR, Vol 7A, Chap. 18, MCTFSPRIUM, Chap. 9, para. 90601"
          },
          {
            id: 58,
            question: "For Marines executing TAD period in excess of 31 days, or Fleet Assistance Program (FAP), is the unit ensuring a copy of the orders are submitted to and received by the reporting unit, NLT 5 days after the Marine's departure?",
            reference: "MCTFSPRIUM 1-10100.6, 2-20103, 12-120103.5"
          },
          {
            id: 59,
            question: "Upon a Marine's return from deployment, TAD in excess of 31 days, or FAP, but not to exceed 5 days from the date of return, is the unit ensuring a copy of the orders returning a Marine from a TAD period in excess of 31 days, or FAP are submitted to and received by the reporting unit?",
            reference: "MCTFSPRIUM 1-10100.6, 2-20103, 12-120103.6"
          }
        ]
      }
    ]
  },
  {
    slug: "inbound-management-gains",
    name: "Inbound Management / Gains",
    description: "Join processing, inbound interviews, PCS travel claims, and OMPF document requirements.",
    sections: [
      {
        unitType: "REPORTING",
        questions: [
          {
            id: 1,
            question: "For joins processed outside of IBI, is the join audit process completed IAW MCTFSPRIUM, 12-120103?",
            reference: "MCTFSPRIUM, 12-120103,12-120104"
          },
          {
            id: 2,
            question: "For joins processed outside of IBI, does the organization maintain and retain supporting documents on file for audit, and in accordance with retention policies?",
            reference: "MCTFSPRIUM, 12-120103; MARADMIN 601/24"
          },
          {
            id: 3,
            question: "For joins processed outside of IBI, is the PCS travel claim submitted in accordance with current regulations?",
            reference: "FPM, Vol 2, para 03050"
          },
          {
            id: 4,
            question: "For joins processed outside of IBI or at DUINS station, is the unit ensuring all required documents are resident in the OMPF? (Contractual documents (i.e. DD Form 4, DD Form 1966), dependent documents (as applicable i.e. NAVMC 10922, Marriage Certificate), and as applicable, Meritorious Promotion Warrants (DD Form 216), Montgomery G.I Bill Form DD Form 2366, etc).",
            reference: "MCO 1070.1; MCTFSPRIUM, 12-120103; MARADMIN 015/20"
          },
          {
            id: 5,
            question: "For Marines arriving to their first Permanent Duty Station (PDS), is a comprehensive review of Pay and Allowance received through the training pipeline completed within 60 days of reporting?",
            reference: "MCTFSPRIUM, 12-120103"
          },
          {
            id: 6,
            question: "Is the Inbound Interview (IBI) set in a 'MOL-Submitted' status within 5 days of the report date?",
            reference: "MCTFSPRIUM, 12-120103"
          },
          {
            id: 7,
            question: "Is the Travel Interview (TVI) submitted within 5 working days of the report date?",
            reference: "FPM Vol 2, para 030102 and 030504; MCTFSPRIUM, 12-120103"
          },
          {
            id: 8,
            question: "Is the Inbound Interview (IBI) set in a 'MOL-Approved' status within 15 days of the report date?",
            reference: "MCTFSPRIUM, 12-120103"
          },
          {
            id: 13,
            question: "Are active duty reporting units validating pay and entitlements for activated reservist attached to their administrative reporting unit code (ARUC)?",
            reference: "DoDFMR VOL 7A, CHAP. 26 PAR 261005; MCTFSPRIUM 9-91800; MARADMIN 015/20"
          }
        ]
      },
      {
        unitType: "IPAC",
        questions: [
          {
            id: 12,
            question: "Are active duty reporting units validating pay and entitlements for activated reservist attached to their administrative reporting unit code (ARUC)?",
            reference: "DoDFMR VOL 7A, CHAP. 26 PAR 261005; MCTFSPRIUM 9-91800; MARADMIN 015/20"
          },
          {
            id: 14,
            question: "For joins processed outside of IBI, is the join audit process completed IAW MCTFSPRIUM, 12-120103?",
            reference: "MCTFSPRIUM, 12-120103, 12-120104"
          },
          {
            id: 15,
            question: "For joins processed outside of IBI, does the organization maintain and retain supporting documents on file for audit, and in accordance with retention policies?",
            reference: "MCTFSPRIUM, 12-120103; MARADMIN 601/24"
          },
          {
            id: 16,
            question: "For joins processed outside of IBI, is the PCS travel claim submitted in accordance with current regulations?",
            reference: "FPM, Vol 2, para 030501"
          },
          {
            id: 17,
            question: "For joins processed outside of IBI or at DUINS station, is the unit ensuring all required documents are resident in the OMPF? (Contractual documents (i.e. DD Form 4, DD Form 1966), dependent documents (as applicable i.e. NAVMC 10922, Marriage Certificate), and as applicable, Meritorious Promotion Warrants (DD Form 216), Montgomery G.I Bill Form DD Form 2366, etc).",
            reference: "MCO 1070.1; MCTFSPRIUM, 12-120103; MARADMIN 015/20"
          },
          {
            id: 18,
            question: "For Marines arriving to their first Permanent Duty Station (PDS), is a comprehensive review of Pay and Allowance received through the training pipeline completed within 60 days of join?",
            reference: "MCTFSPRIUM, 12-120103"
          }
        ]
      },
      {
        unitType: "SUPPORTING",
        questions: [
          {
            id: 9,
            question: "Is the Inbound Interview (IBI) set in a 'MOL-Submitted' status within 5 days of the report date?",
            reference: "MCTFSPRIUM, 12-120103"
          },
          {
            id: 10,
            question: "Is the Travel Interview (TVI) submitted within 5 working days of the report date?",
            reference: "FPM Vol 2, para 030101; MCTFSPRIUM, 12-120103"
          },
          {
            id: 11,
            question: "Is the Inbound Interview (IBI) set in a 'MOL-Approved' status within 15 days of the report date?",
            reference: "MCTFSPRIUM, 12-120103"
          }
        ]
      }
    ]
  },
  {
    slug: "legal",
    name: "Legal",
    description: "NJP reporting, courts-martial, confinement orders, UA/desertion, appellate leave, and legal hold procedures.",
    sections: [
      {
        unitType: "REPORTING",
        questions: [
          {
            id: 2,
            question: "Is the unit ensuring the Good Conduct Medal/Selected Marine Corps Reserve Medal is reported IAW appropriate legal action?",
            reference: "SECNAV M-1650.1, MCO 5800.16 VOL 14"
          },
          {
            id: 4,
            question: "Are NAVMC 10132(s) reported within 5 days of the effective date?",
            reference: "MCTFSPRIUM 2-20103"
          },
          {
            id: 5,
            question: "Are promotion restrictions reported according to the imposed articles and IAW the reference?",
            reference: "MCO 1400.32D Par 1204.4"
          },
          {
            id: 6,
            question: "For Marines in the grades of E4 and below, are JEPES occasions approved by the individual with appropriate promotion authority on the effective date of the grade reduction or Declared Deserter?",
            reference: "MCO P1400.32D, para 1200.3.b; MCO 1616.1, Ch 1, para 5.g; Ch 2, para 1.f"
          },
          {
            id: 8,
            question: "Are NAVMC 10132(s) filed in OMPF within 10 working days from the date reported on unit diary?",
            reference: "MCO 5800.16A, Volume 14, para(s) 0109, 0111; DoDFMR Vol 7A, Chap 49, para 4903; MCTFSPRIUM, 7-70502, 7-70503, 7-70507, Chapter 13 Appendix C; MCO 1070.1"
          },
          {
            id: 9,
            question: "Is the unit ensuring the NAVMC 10132(s) UPB is prepared IAW applicable regulations?",
            reference: "DoDFMR Vol 7A, Chap 49; MCO 5800.16A, Volume 14, para(s) 0109, 0111"
          },
          {
            id: 10,
            question: "In the case of NJP punishments that have been vacated, is the unit ensuring the original NAVMC 10132 UPB is updated with the proper annotations IAW applicable references?",
            reference: "DoDFMR Vol 7A, Chap 49; MCO 5800.16, Volume 14, para 0112, figure 14-1, 011105.P"
          },
          {
            id: 11,
            question: "Are punishments and vacations awarded on the NAVMC 10132(s) reported IAW applicable regulations?",
            reference: "MCO 5800.16 Ch 7, Volume 14, para(s) 0109, 0111; DoDFMR Vol 7A, Chap 49; MCTFSPRIUM, 7-70502, 7-70503, 7-70507"
          },
          {
            id: 12,
            question: "Is TTC 257 000 (Automated Court-Martial) entry reported IAW applicable regulations for Courts-Martial (TTC 283-000 for all Reserve courts-martial)?",
            reference: "MCTFSPRIUM, 7-70501, 7-70502"
          },
          {
            id: 13,
            question: "Are Record of Trial / Results of Trial/Convening Authority's Action filed in OMPF within 10 working days from the date reported on unit diary?",
            reference: "MCTFSPRIUM, Chapter 13, Appendix C; MCO 1070.1"
          },
          {
            id: 14,
            question: "Is TTC 262 000 (CA Action Ordered Executed) reported IAW applicable regulations?",
            reference: "MCTFSPRIUM, 7-70501; MCO 5800.16 Vol 12, 0105"
          },
          {
            id: 15,
            question: "Are Confinement Orders reported IAW applicable regulations?",
            reference: "MCTFSPRIUM 7-70506"
          },
          {
            id: 16,
            question: "Is to and from In Hands of Civilian Authorities (IHCA) / In Hands of Foreign Authorities (IHFA) reported IAW applicable regulations?",
            reference: "MCTFSPRIUM, Table 6-2, 7-70303, 7-70304, 7-70305, 7-70306"
          },
          {
            id: 37,
            question: "Are Unauthorized Absence (UA) reported IAW applicable regulations?",
            reference: "MCO 1620.3A; MCTFS PRIUM, 7-70301, 7-70302"
          },
          {
            id: 38,
            question: "Are Drop Declared Deserter and Join from Desertion reported IAW applicable regulations?",
            reference: "MCTFS PRIUM, 7-70307, 6-60212"
          },
          {
            id: 39,
            question: "Are documents for absentees (DD Form 553 / 616) filed in OMPF within 10 working days from the date reported on unit diary?",
            reference: "MCTFSPRIUM, Chapter 13, Appendix C; MCO 1620.3A; MCO 1070.1"
          },
          {
            id: 40,
            question: "Is the unit ensuring key supporting documents that validate periods of confinement, UA, or desertion are maintained on file for audit, and in accordance with retention policies?",
            reference: "DoDFMR, Vol 1, Ch 9; SECNAV M-5210.1; MCO 1620.3A; MARADMIN 601/24"
          },
          {
            id: 41,
            question: "Are Appellate Leave Orders reported IAW applicable regulations?",
            reference: "MCO 1050.16A; MCTFSPRIUM, 7-70505"
          },
          {
            id: 42,
            question: "Is the unit ensuring Marines that are placed on Legal Hold beyond their Expiration of Active Service date are placed only in IAW applicable regulations? Is the unit tracking the status of Marines held beyond their EAS on legal hold?",
            reference: "MCO 1900.16 CH 2; MCTFSPRIUM, 3-30306, 3-30307"
          },
          {
            id: 44,
            question: "Is TTC 263 000 (Entry of Judgement) reported IAW applicable regulations?",
            reference: "PAA 01-24; MCTFSPRIUM, 7-70501"
          },
          {
            id: 47,
            question: "Is TTC 212 (Courts-Martial and Nonjudicial Punishment Statistical Data) reported IAW applicable regulations?",
            reference: "NDAA FY 2020, Sec 540I; MCTFSPRIUM, 7-70508"
          }
        ]
      },
      {
        unitType: "IPAC",
        questions: [
          {
            id: 1,
            question: "Is the unit ensuring the Good Conduct Medal/Selected Marine Corps Reserve Medal is reported IAW appropriate legal action?",
            reference: "SECNAV M-1650.1, MCO 5800.16 VOL 14"
          },
          {
            id: 36,
            question: "Are promotion restrictions reported according to the imposed articles and IAW the reference?",
            reference: "MCO 1400.32D Par 1204.4"
          },
          {
            id: 45,
            question: "Is TTC 263 000 (Entry of Judgement) reported IAW applicable regulations?",
            reference: "PAA 01-24; MCTFSPRIUM, 7-70501"
          },
          {
            id: 46,
            question: "Is TTC 212 (Courts-Martial and Nonjudicial Punishment Statistical Data) reported IAW applicable regulations?",
            reference: "NDAA FY 2020, Sec 540I; MCTFSPRIUM, 7-70508"
          },
          {
            id: 49,
            question: "Are punishments and vacations awarded on the NAVMC 10132(s) reported IAW applicable regulations?",
            reference: "DoDFMR Vol. 7A, Chap. 49; MCO 5800.16, Vol 14, par(s). 0109, 0111; MCTFSPRIUM, 7-70502, 7-70503, 7-70507"
          },
          {
            id: 50,
            question: "Are NAVMC 10132(s) reported within 5 days of receiving key supporting documents?",
            reference: "MCTFSPRIUM 2-20103"
          },
          {
            id: 51,
            question: "Are NAVMC 10132(s) filed in OMPF within 10 working days from the date reported on unit diary?",
            reference: "MCO 5800.16A, Vol. 14, par(s). 0109, 0111; DoDFMR Vol. 7A, Chap. 49, par. 4903; MCO 1070.1, Chapter 4; MCTFSPRIUM, 7-70502, 7-70503, 7-70507, Chap. 13, Appendix C"
          },
          {
            id: 52,
            question: "Is TTC 257 000 (Automated Court-Martial) entry reported IAW applicable regulations for Courts-Martial (TTC 283-000 for all Reserve courts-martial)?",
            reference: "MCTFSPRIUM, 7-70501, 7-70502"
          },
          {
            id: 53,
            question: "Are Record of Trial / Results of Trial / Convening Authority's Action filed in OMPF within 10 working days from the date reported on unit diary?",
            reference: "MCTFSPRIUM, Chap. 13, Appendix C; MCO 1070.1"
          },
          {
            id: 54,
            question: "Is TTC 262 000 (CA Action Ordered Executed) reported IAW applicable regulations?",
            reference: "MCO 5800.16 Vol. 12, par. 0105; MCTFSPRIUM, 7-70501"
          },
          {
            id: 55,
            question: "Are Appellate Leave Orders reported IAW applicable regulations?",
            reference: "MCO 1050.16A; MCTFSPRIUM, 7-70505"
          },
          {
            id: 56,
            question: "Are Unauthorized Absence (UA) entries reported IAW applicable regulations?",
            reference: "MCO 1620.3A; MCTFS PRIUM, 7-70301, 7-70302"
          },
          {
            id: 57,
            question: "Are Drop Declared Deserter and Joins from Desertion entries reported IAW applicable regulations?",
            reference: "MCTFSPRIUM, 7-70307, 6-60212"
          },
          {
            id: 58,
            question: "Are documents for absentees (DD Form 553 / 616) filed in OMPF within 10 working days from the date reported on unit diary?",
            reference: "MCO 1620.3A; MCTFSPRIUM, Chap. 13, Appendix C; MCO 1070.1"
          },
          {
            id: 59,
            question: "Are Confinement Orders reported IAW applicable regulations?",
            reference: "MCTFSPRIUM 7-70506"
          },
          {
            id: 60,
            question: "Are In Hands of Civilian Authorities / In Hands of Foreign Authorities entries reported IAW applicable regulations?",
            reference: "MCTFSPRIUM, Table 6-2, 7-70303, 7-70304, 7-70305, 7-70306"
          }
        ]
      },
      {
        unitType: "SUPPORTING",
        questions: [
          {
            id: 3,
            question: "Is the unit ensuring the Good Conduct Medal/Selected Marine Corps Reserve Medal is reported IAW appropriate legal action?",
            reference: "SECNAV M-1650.1, MCO 5800.16 VOL 14"
          },
          {
            id: 7,
            question: "For Marines in the grades of E4 and below, are JEPES occasions approved by the individual with appropriate promotion authority on the effective date of the grade reduction or Declared Deserter?",
            reference: "MCO P1400.32D, para 1200.3.b; MCO 1616.1, Ch 1, para 5.g; Ch 2, para 1.f"
          },
          {
            id: 17,
            question: "In the case of NJP punishments that have been vacated, is the unit ensuring the original NAVMC 10132 UPB is updated with the proper annotations IAW applicable references?",
            reference: "DoDFMR Vol. 7A, Chap. 49; MCO 5800.16, Vol. 14, par(s). 0112, 011105, Fig. 14-1"
          },
          {
            id: 18,
            question: "Is the unit ensuring Appellate Leave Orders are submitted to and received by the reporting unit within 5 days of execution?",
            reference: "MCO 1050.16A; MCTFSPRIUM, 1-10100.6"
          },
          {
            id: 19,
            question: "Is the unit validating Appellate Leave is reported IAW applicable regulations by the reporting unit?",
            reference: "MCO 1050.16A; MCTFSPRIUM, 1-10111, 7-70505"
          },
          {
            id: 20,
            question: "Is the unit ensuring Marines that are placed on Legal Hold beyond their Expiration of Active Service date are placed only in IAW applicable regulations? Is the unit tracking the status of Marines held beyond their EAS on legal hold?",
            reference: "MCO 1900.16 CH 2, para 1008; MCTFSPRIUM, 1-10111, 3-30306, 3-30307;"
          },
          {
            id: 21,
            question: "Is the unit ensuring key supporting documents to report or remove a Marine from In Hands of Civilian Authority / In Hands of Foreign Authority, in excess of 24 hours, are submitted to and received by the reporting unit within 5 days of occurrence?",
            reference: "MCO 1620.3A; MCTFSPRIUM, 1-10100.6, 2-20103"
          },
          {
            id: 22,
            question: "Is the unit ensuring key supporting documents to report or remove a Marine from an Unauthorized Absent status, in excess of 24 hours, are submitted to and received by the reporting unit within 5 days of occurrence?",
            reference: "MCO 1620.3A; MCTFSPRIUM, 1-10100.6, 2-20103"
          },
          {
            id: 23,
            question: "Is the unit ensuring key supporting documents (DD Form 553 or DD Form 616) for Marines declared or returned from desertion are submitted to and received by the reporting unit within 5 days of occurrence?",
            reference: "MCO 1620.3A; MCTFSPRIUM 1-10100.6, 2-20103"
          },
          {
            id: 24,
            question: "Is the unit ensuring key supporting documents that validate periods of confinement, UA, or desertion are maintained on file for audit, and in accordance with retention policies?",
            reference: "DoDFMR, Vol. 1, Chap. 9; SECNAV M-5210.1; MCO 1620.3A"
          },
          {
            id: 25,
            question: "Is the unit ensuring the NAVMC 10132(s) UPB is prepared IAW applicable regulations?",
            reference: "DoDFMR Vol. 7A, Chap .49; MCO 5800.16A, Vol. 14, par(s). 0109, 0111"
          },
          {
            id: 26,
            question: "Is the unit ensuring the NAVMC 10132(s) UPB is submitted to and received by the reporting unit within 5 days of occurrence?",
            reference: "MCTFSPRIUM, 1-10100.6, 1-10111, 2-20103"
          },
          {
            id: 27,
            question: "Is the unit ensuring the NAVMC 10132(s) UPB is maintained on file for audit, and in accordance with retention policies?",
            reference: "DoDFMR, Vol. 1, Chap. 9; SECNAV M-5210.1; MCO 5800.16, Vol. 14, par. 011110;"
          },
          {
            id: 28,
            question: "Is the unit ensuring all NJP punishments are reported properly IAW applicable regulations by the reporting unit?",
            reference: "MCO 5800.16 Vol. 14; MCO 1400.32D, par. 6004; MCTFSPRIUM, 1-10111, 7-70502, 7-70503, 7-70507"
          },
          {
            id: 29,
            question: "Is the unit ensuring vacated NJP punishment(s) are reported properly by the reported unit IAW applicable regulations?",
            reference: "MCTFSPRIUM, 1-10111, 7-70502, 7-70504, 7-70507"
          },
          {
            id: 30,
            question: "Is the unit ensuring Confinement Orders are submitted to and received by the reporting unit within 5 days of the effective date?",
            reference: "MCTFSPRIUM 1-10100.6, 2-20103"
          },
          {
            id: 31,
            question: "Is the unit ensuring Court Martial documents (results of trial, convening authority's action) are submitted to and received by the reporting unit within 5 days of occurrence?",
            reference: "MCTFSPRIUM, 1-10100.6, 2-20103"
          },
          {
            id: 32,
            question: "Is the unit validating Court Martial (TTC 257) is reported IAW applicable regulations by the reporting unit?",
            reference: "MCTFSPRIUM, 1-10111, 7-70501, 7-70502, 7-70503"
          },
          {
            id: 33,
            question: "Is the unit validating the Convening Authority's Action (TTC 262) is reported IAW applicable regulations by the reporting unit?",
            reference: "MCTFSPRIUM, 1-10111, 7-70501, 7-70502"
          },
          {
            id: 34,
            question: "Is the unit ensuring Court Martial documents (results of trial and convening authority's action) are maintained on file for audit, and in accordance with retention policies?",
            reference: "DoDFMR, Vol. 1, Chap. 9; SECNAV M-5210.1; MCTFSPRIUM, Chap. 13, Appendix C"
          },
          {
            id: 35,
            question: "Is the unit creating Appellate Leave Orders IAW applicable regulations?",
            reference: "MCO 1050.16A"
          },
          {
            id: 43,
            question: "Is the unit validating Entry of Judgement (TTC 263 000) is reported IAW applicable regulations?",
            reference: "PAA 01-24; MCTFSPRIUM, 7-70501"
          },
          {
            id: 48,
            question: "Is the unit validating Courts-Martial and Nonjudicial Punishment Statistical Data (TTC 212) is reported IAW applicable regulations by the reporting unit?",
            reference: "NDAA FY 2020, Sec 540I; MCTFSPRIUM, 7-70508"
          }
        ]
      }
    ]
  },
  {
    slug: "milpay",
    name: "MilPay",
    description: "Pay and allowances including BAH, COLA, FSA, commuted rations, BNA, and contractual documents.",
    sections: [
      {
        unitType: "REPORTING",
        questions: [
          {
            id: 1,
            question: "Is BAH reported IAW applicable regulations?",
            reference: "DoDFMR Vol. 7A, Chap. 26; JTR Chap. 10; MCTFSPRIUM, 9-90400 and 9-90401"
          },
          {
            id: 2,
            question: "Is BAH reported within 5 days of the effective date?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 3,
            question: "Is OHA reported IAW applicable regulations?",
            reference: "DoDFMR Vol. 7A, Chap. 26; JTR Chap. 10; MCTFSPRIUM, 9-90400 and 9-90401"
          },
          {
            id: 4,
            question: "Is OHA reported within 5 days of the effective date?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 5,
            question: "Is COLA reported IAW applicable regulations?",
            reference: "DoDFMR Vol. 7A, Chap. 26, CONUS; Chap. 58, OCONUS; JTR Chap. 9; MCTFSPRIUM, 9-90500"
          },
          {
            id: 6,
            question: "Is COLA reported within 5 days of the effective date?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 7,
            question: "Is FSA reported IAW applicable regulations for Unaccompanied Tour, Dependent Restricted Station, and/or Ship's Based?",
            reference: "DoDFMR Vol 7A, Chap. 27; MCTFSPRIUM, 9-90301 and 9-90302"
          },
          {
            id: 8,
            question: "Is FSA for Unaccompanied Tours, Dependent Restricted Stations, and/or Ship's Based reported within 5 days of the effective date?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 9,
            question: "Is Commuted Rations reported IAW applicable regulations?",
            reference: "DoDFMR Vol 7A, Chap. 25, par(s). 2.3.3, 2.4.3.2; MCO 10110.47A; MCTFSPRIUM, 8-80401, 8-80402"
          },
          {
            id: 10,
            question: "Is Commuted Rations reported within 5 days of the effective date?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 11,
            question: "Is Discount Meal Rate reported IAW applicable regulations?",
            reference: "DoDFMR Vol 7A, Chap. 25, par. 2.4.3.2; MCO 10110.47A; MCTFSPRIUM, 8-80402, 8-80403"
          },
          {
            id: 12,
            question: "Is Discount Meal Rate reported within 5 days of the effective date?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 13,
            question: "Are dependents that reside in Government housing properly reported as such?",
            reference: "DoDFMR Vol. 7A, Chap. 26; JTR, Chap. 10; MCTFSPRIUM, 9-90401"
          },
          {
            id: 14,
            question: "Is the unit ensuring all required OMPF documents are filed within 10 working days from the date reported on unit diary?",
            reference: "MCTFSPRIUM, Chap. 13, Appendix C; MCO 1070.1"
          },
          {
            id: 15,
            question: "Are contractual documents (DD-4, DD-1966 from this and previous enlistment contracts) resident in OMPF?",
            reference: "MCO 1070.1; MCTFSPRIUM, Chap. 13; MARADMIN 015/20"
          },
          {
            id: 16,
            question: "Is Basic Needs Allowance (BNA) reported within 5 days of the effective date?",
            reference: "DoDFMR Vol. 7A, Chap. 28; MCO 7200.1"
          },
          {
            id: 17,
            question: "Is Basic Needs Allowance reported IAW applicable regulations?",
            reference: "DoDFMR Vol. 7A, Chap. 28; MCO 7200.1"
          },
          {
            id: 18,
            question: "Is the unit using the proper BAH/OHA rate based on location or duty status (i.e. Marines on Appellate Leave)?",
            reference: "DoDFMR Vol. 7A, Chap. 26; JTR Chap. 10; MCO 1050.16A, par. 4; MCTFSPRIUM, 7-70505, 9-90401"
          },
          {
            id: 19,
            question: "Is the reporting unit starting and stopping dependent travel authorized entries within 5 days of the effective date?",
            reference: "MCTFSPRIUM, 2-20103, 6-60504"
          },
          {
            id: 20,
            question: "For members in receipt of GS or GMT, are dependent travel authorized entries reported IAW applicable regulations?",
            reference: "MCTFSPRIUM, 6-60504; DoDFMR, Vol. 7A, Chap. 26; JTR, Chap. 9"
          },
          {
            id: 21,
            question: "For Marines in receipt of Sole Survivorship or Parenthood status, are documents filed in OMPF within 10 working days?",
            reference: "MCO 1070.1; MCTFSPRIUM, 12-120103; MARADMIN 015/20"
          },
          {
            id: 22,
            question: "Is the reporting unit accurately reporting Marines' marital status within 5 days of the effective date?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 23,
            question: "Is the reporting unit ensuring dependent additions/deletions are reported within 5 days of the effective date?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 24,
            question: "Are Continuation Pays/SRBs reported IAW applicable regulations?",
            reference: "DoDFMR Vol. 7A, Chap. 9; MARADMIN(s) 081/18, 082/18, 009/25; MCTFSPRIUM, 9-91701"
          },
          {
            id: 25,
            question: "Are Continuation Pays/SRBs reported within 5 days of the effective date?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 26,
            question: "Are Enlistment bonuses reported IAW applicable regulations?",
            reference: "DoDFMR Vol. 7A, Chap. 9; MCTFSPRIUM, 9-91700"
          },
          {
            id: 27,
            question: "Are Enlistment bonuses reported within 5 days of the effective date?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 44,
            question: "Are HSDIP/SLRP entitlements reported IAW applicable regulations?",
            reference: "HSDIP - MARADMINS 106/24, 107/24, 359/24; SLRP - MARADMINS 0111/20, 0351/24; DoDFMR Vol. 7A, Chap. 9; MCTFSPRIUM, 9-91702"
          },
          {
            id: 45,
            question: "Is the unit ensuring HSDIP/SLRP entitlements are reported within 5 days of the effective date?",
            reference: "MCTFSPRIUM, 2-20103"
          }
        ]
      },
      {
        unitType: "IPAC",
        questions: [
          {
            id: 28,
            question: "Is OHA reported IAW applicable regulations?",
            reference: "DoDFMR Vol. 7A, Chap. 26; JTR, Chap. 10; MCTFSPRIUM, 9-90400, 9-90401"
          },
          {
            id: 29,
            question: "Is OHA reported within 5 days of receiving key supporting documents?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 30,
            question: "Is BAH reported IAW applicable regulations?",
            reference: "DoDFMR Vol. 7A, Chap. 26; JTR Chap. 10; MCTFSPRIUM, 9-90400, 9-90401"
          },
          {
            id: 31,
            question: "Is BAH reported within 5 days of receiving key supporting documents?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 32,
            question: "Is COLA reported IAW applicable regulations?",
            reference: "DoDFMR Vol. 7A, Chap. 26 (CONUS), Chap. 58 (OCONUS); JTR Chap. 9; MCTFSPRIUM, 9-90500"
          },
          {
            id: 33,
            question: "Is COLA reported within 5 days of receiving key supporting documents?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 34,
            question: "Is FSA for Unaccompanied Tour, Dependent Restricted Station, and/or Ship's Based reported IAW applicable regulations?",
            reference: "DoDFMR Vol 7A, Chap. 27; MCTFSPRIUM, 9-90301, 9-90302"
          },
          {
            id: 35,
            question: "Is FSA for Unaccompanied Tours, Dependent Restricted Stations, and/or Ship's Based reported within 5 days of receiving key supporting documents?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 36,
            question: "Is Commuted Rations reported IAW applicable regulations?",
            reference: "DoDFMR Vol 7A, Chap. 25, par(s). 2.3.3, 2.4.3.2; MCO 10110.47A; MCTFSPRIUM, 8-80401, 8-80402"
          },
          {
            id: 37,
            question: "Is Commuted Rations reported within 5 days of receiving key supporting documents?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 38,
            question: "Is Discount Meal Rate reported IAW applicable regulations?",
            reference: "DoDFMR Vol 7A, Chap. 25, par. 2.4.3.2; MCO 10110.47A; MCTFSPRIUM, 8-80402, 8-80403"
          },
          {
            id: 39,
            question: "Is Discount Meal Rate reported within 5 days of receiving key supporting documents?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 40,
            question: "Are Continuation Pays/SRBs reported IAW applicable regulations?",
            reference: "DoDFMR Vol. 7A, Chap. 9; MARADMIN(s) 081/18, 082/18, 009/25; MCTFSPRIUM, 9-91701"
          },
          {
            id: 41,
            question: "Are Continuation Pays/SRBs reported within 5 days of receiving key supporting documents?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 42,
            question: "Are Enlistment bonuses reported IAW applicable regulations?",
            reference: "DoDFMR Vol. 7A, Chap. 9; MCTFSPRIUM, 9-91700"
          },
          {
            id: 43,
            question: "Are Enlistment bonuses reported within 5 days of receiving key supporting documents?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 46,
            question: "Is the unit using the proper BAH/OHA rate based on location or duty status (i.e. Marines on Appellate Leave)?",
            reference: "DoDFMR Vol. 7A, Chap. 26; JTR Chap. 10; MCO 1050.16A, par. 4; MCTFSPRIUM, 7-70505, 9-90401"
          },
          {
            id: 47,
            question: "Are dependents that reside in Government housing properly reported as such?",
            reference: "DoDFMR Vol. 7A, Chap. 26; JTR, Chap. 10; MCTFSPRIUM, 9-90401"
          },
          {
            id: 48,
            question: "Is the unit ensuring all required OMPF documents are filed within 10 working days from the date reported on unit diary?",
            reference: "MCTFSPRIUM, Chap. 13, Appendix C; MCO 1070.1"
          },
          {
            id: 49,
            question: "Are contractual documents (DD-4, DD-1966 from this and previous enlistment contracts) resident in OMPF?",
            reference: "MCO 1070.1; MCTFSPRIUM, Chap. 13; MARADMIN 015/20"
          },
          {
            id: 50,
            question: "Is Basic Needs Allowance (BNA) reported within 5 days of receiving key supporting documents?",
            reference: "DoDFMR Vol. 7A, Chap. 28; MCO 7200.1"
          },
          {
            id: 51,
            question: "Is Basic Needs Allowance reported IAW applicable regulations?",
            reference: "DoDFMR Vol. 7A, Chap. 28; MCO 7200.1"
          },
          {
            id: 52,
            question: "Is the reporting unit starting and stopping dependent travel authorized entries within 5 days of receiving key supporting documents?",
            reference: "MCTFSPRIUM, 2-20103, 6-60504"
          },
          {
            id: 53,
            question: "For members in receipt of GS or GMT, are dependent travel authorized entries reported IAW applicable regulations?",
            reference: "MCTFSPRIUM, 6-60504; DoDFMR, Vol. 7A, Chap. 26; JTR, Chap. 9"
          },
          {
            id: 54,
            question: "For Marines in receipt of Sole Survivorship or Parenthood status, are documents filed in OMPF within 10 working days?",
            reference: "MCO 1070.1; MCTFSPRIUM, 12-120103; MARADMIN 015/20"
          },
          {
            id: 55,
            question: "Is the reporting unit accurately reporting Marines' marital status within 5 days of receiving key supporting documents?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 56,
            question: "Is the reporting unit ensuring dependent additions/deletions are reported within 5 days of receiving key supporting documents?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 68,
            question: "Are HSDIP/SLRP entitlements reported IAW applicable regulations?",
            reference: "HSDIP - MARADMINS 106/24, 107/24, 359/24; SLRP - MARADMINS 0111/20, 0351/24; DoDFMR Vol. 7A, Chap. 9; MCTFSPRIUM, 9-91702"
          },
          {
            id: 69,
            question: "Is the unit ensuring HSDIP/SLRP entitlements are reported within 5 days of receiving key supporting documents?",
            reference: "MCTFSPRIUM, 2-20103"
          }
        ]
      },
      {
        unitType: "SUPPORTING",
        questions: [
          {
            id: 57,
            question: "Is the unit ensuring BAH key supporting documents are submitted to and received by the reporting unit within 5 days of the effective date?",
            reference: "MCTFSPRIUM, 1-10100.6, 2-20103"
          },
          {
            id: 58,
            question: "Is the unit validating BAH is reported IAW applicable regulations by the reporting unit?",
            reference: "DoDFMR Vol. 7A, Chap. 26; JTR Chap. 10; MCTFSPRIUM, 1-10111, 9-90400, 9-90401"
          },
          {
            id: 59,
            question: "Is the unit ensuring OHA key supporting documents are submitted to and received by the reporting unit within 5 days of the effective date?",
            reference: "MCTFSPRIUM, 1-10100.6, 2-20103"
          },
          {
            id: 60,
            question: "Is the unit validating OHA is reported IAW applicable regulations by the reporting unit?",
            reference: "DoDFMR Vol. 7A, Chap. 26; JTR Chap. 10; MCTFSPRIUM, 1-10111, 9-90400, 9-90401"
          },
          {
            id: 61,
            question: "Is the unit ensuring COLA key supporting documents are submitted to and received by the reporting unit within 5 days of the effective date?",
            reference: "MCTFSPRIUM, 1-10100.6, 2-20103"
          },
          {
            id: 62,
            question: "Is the unit validating COLA is reported IAW applicable regulations by the reporting unit?",
            reference: "DoDFMR Vol. 7A, Chap. 26 (CONUS), Chap. 58 (OCONUS); JTR Chap. 9; MCTFSPRIUM, 1-10111, 9-90500"
          },
          {
            id: 63,
            question: "Is the unit ensuring FSA key supporting documents for Unaccompanied Tour, Dependent Restricted Station, and/or Ship's Based are submitted to and received by the reporting unit within 5 days of the effective date?",
            reference: "MCTFSPRIUM, 1-10100.6, 2-20103"
          },
          {
            id: 64,
            question: "Is the unit validating FSA for Unaccompanied Tours, Dependent Restricted Stations, and/or Ship's Based is reported IAW applicable regulations by the reporting unit?",
            reference: "DoDFMR Vol 7A, Chap. 27; MCTFSPRIUM, 1-10111, 9-90301, 9-90302"
          },
          {
            id: 65,
            question: "Is the unit validating Commuted Rations is reported IAW applicable regulations by the reporting unit?",
            reference: "DoDFMR Vol 7A, Chap. 25, par(s). 2.3.3, 2.4.3.2; MCO 10110.47A; MCTFSPRIUM, 1-10111, 8-80401, 8-80402"
          },
          {
            id: 66,
            question: "Is the unit validating Discount Meal Rate is reported IAW applicable regulations by the reporting unit?",
            reference: "DoDFMR Vol 7A, Chap. 25, par. 2.4.3.2; MCO 10110.47A; MCTFSPRIUM, 1-10111, 8-80402, 8-80403"
          },
          {
            id: 67,
            question: "Is the unit ensuring key supporting documents that validate MilPay entitlements are maintained on file for audit, and in accordance with retention policies?",
            reference: "DoDFMR, Vol. 1, Chap. 9; SECNAV M-5210.1; MARADMIN 601/24"
          },
          {
            id: 70,
            question: "Is the unit validating HSDIP/SLRP is reported IAW applicable regulations by the reporting unit?",
            reference: "HSDIP - MARADMINS 106/24, 107/24, 359/24; SLRP - MARADMINS 0111/20, 0351/24; DoDFMR Vol. 7A, Chap. 9; MCTFSPRIUM, 1-10111, 9-91702"
          },
          {
            id: 71,
            question: "Is the unit ensuring HSDIP/SLRP key supporting documents are submitted to and received by the reporting unit within 5 days of the effective date?",
            reference: "MCTFSPRIUM, 1-10100.6, 2-20103"
          },
          {
            id: 72,
            question: "Is the unit ensuring key supporting documents that validate HSDIP/SLRP entitlements are maintained on file for audit, and in accordance with retention policies?",
            reference: "DoDFMR, Vol. 1, Chap. 9; SECNAV M-5210.1; MARADMIN 601/24"
          }
        ]
      }
    ]
  },
  {
    slug: "outbound-management",
    name: "Outbound Management",
    description: "Separation processing, DD-214 preparation, terminal leave, SkillBridge, and STR submission.",
    sections: [
      {
        unitType: "REPORTING",
        questions: [
          {
            id: 1,
            question: "Is the unit using Separation Appointment Scheduler and Tracking (SAST) to schedule and track separating Marines?",
            reference: "MARADMIN 236/22; MCTFSPRIUM, 6-60802"
          },
          {
            id: 2,
            question: "Are separation transactions reported within 5 days of the effective date?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 3,
            question: "Are separation transactions reported IAW applicable regulations?",
            reference: "MCTFSPRIUM, 6-60800, 6-60801, 6-60802"
          },
          {
            id: 4,
            question: "Is the DD-214 prepared accurately and in accordance with applicable regulations?",
            reference: "MCO 1900.16, enclosure (3); MCTFSPRIUM, 6-60802"
          },
          {
            id: 5,
            question: "Is the DD-214 prepared and provided to the Marine on the date of separation (or the last working day prior for those separating on a weekend or holiday)?",
            reference: "MCO 1900.16, enclosure (3), para 2.a; MCTFSPRIUM, 6-60802"
          },
          {
            id: 6,
            question: "Is terminal leave reported IAW applicable regulations?",
            reference: "MCO 1050.3J; MCTFSPRIUM, 8-81302"
          },
          {
            id: 7,
            question: "Is terminal leave reported within 5 days of the effective date?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 8,
            question: "For Marines executing SkillBridge, is the unit ensuring SkillBridge is reported IAW applicable regulations?",
            reference: "MARADMIN 344/22; MCTFSPRIUM, 6-60802"
          },
          {
            id: 9,
            question: "Is the unit ensuring Service Treatment Records (STR) are submitted to DPRIS NLT 30 days prior to separation date?",
            reference: "MCO 1900.16 CH 2, par. 1006.2"
          },
          {
            id: 10,
            question: "Is the unit ensuring the final pay audit is completed prior to separation?",
            reference: "MCTFSPRIUM, 12-120103"
          },
          {
            id: 11,
            question: "Is the unit ensuring that Marines with an established debt have a DD Form 2653 completed prior to separation?",
            reference: "DoDFMR Vol. 7A, Chap. 50, par. 5004; MCO 1900.16"
          },
          {
            id: 12,
            question: "Is the unit ensuring Travel Liquidation Program (TLP) transactions are reported on the same day as the separation entry?",
            reference: "MCTFSPRIUM, 6-60802"
          }
        ]
      },
      {
        unitType: "IPAC",
        questions: [
          {
            id: 13,
            question: "Is the unit using Separation Appointment Scheduler and Tracking (SAST) to schedule and track separating Marines?",
            reference: "MARADMIN 236/22; MCTFSPRIUM, 6-60802"
          },
          {
            id: 14,
            question: "Are separation transactions reported within 5 days of receiving key supporting documents?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 15,
            question: "Are separation transactions reported IAW applicable regulations?",
            reference: "MCTFSPRIUM, 6-60800, 6-60801, 6-60802"
          },
          {
            id: 16,
            question: "Is the DD-214 prepared accurately and in accordance with applicable regulations?",
            reference: "MCO 1900.16, enclosure (3); MCTFSPRIUM, 6-60802"
          },
          {
            id: 17,
            question: "Is the DD-214 prepared and provided to the Marine on the date of separation (or the last working day prior for those separating on a weekend or holiday)?",
            reference: "MCO 1900.16, enclosure (3), para 2.a; MCTFSPRIUM, 6-60802"
          },
          {
            id: 18,
            question: "Is terminal leave reported IAW applicable regulations?",
            reference: "MCO 1050.3J; MCTFSPRIUM, 8-81302"
          },
          {
            id: 19,
            question: "Is terminal leave reported within 5 days of receiving key supporting documents?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 20,
            question: "For Marines executing SkillBridge, is the unit ensuring SkillBridge is reported IAW applicable regulations?",
            reference: "MARADMIN 344/22; MCTFSPRIUM, 6-60802"
          },
          {
            id: 21,
            question: "Is the unit ensuring Service Treatment Records (STR) are submitted to DPRIS NLT 30 days prior to separation date?",
            reference: "MCO 1900.16 CH 2, par. 1006.2"
          },
          {
            id: 22,
            question: "Is the unit ensuring the final pay audit is completed prior to separation?",
            reference: "MCTFSPRIUM, 12-120103"
          },
          {
            id: 23,
            question: "Is the unit ensuring that Marines with an established debt have a DD Form 2653 completed prior to separation?",
            reference: "DoDFMR Vol. 7A, Chap. 50, par. 5004; MCO 1900.16"
          },
          {
            id: 24,
            question: "Is the unit ensuring Travel Liquidation Program (TLP) transactions are reported on the same day as the separation entry?",
            reference: "MCTFSPRIUM, 6-60802"
          }
        ]
      },
      {
        unitType: "SUPPORTING",
        questions: [
          {
            id: 25,
            question: "Is the unit ensuring Marines are scheduled for separation appointments via SAST NLT 180 days prior to separation date?",
            reference: "MARADMIN 236/22; MCTFSPRIUM, 1-10100.6"
          },
          {
            id: 26,
            question: "Is the unit ensuring key supporting documents for separation are submitted to and received by the reporting unit within 5 days of occurrence?",
            reference: "MCTFSPRIUM, 1-10100.6, 2-20103"
          },
          {
            id: 27,
            question: "Is the unit validating separation transactions are reported IAW applicable regulations by the reporting unit?",
            reference: "MCTFSPRIUM, 1-10111, 6-60800, 6-60801, 6-60802"
          },
          {
            id: 28,
            question: "Is the unit ensuring key supporting documents for terminal leave are submitted to and received by the reporting unit within 5 days of occurrence?",
            reference: "MCTFSPRIUM, 1-10100.6, 2-20103"
          },
          {
            id: 29,
            question: "Is the unit validating terminal leave is reported IAW applicable regulations by the reporting unit?",
            reference: "MCO 1050.3J; MCTFSPRIUM, 1-10111, 8-81302"
          },
          {
            id: 30,
            question: "Is the unit ensuring key supporting documents for SkillBridge are submitted to and received by the reporting unit within 5 days of occurrence?",
            reference: "MARADMIN 344/22; MCTFSPRIUM, 1-10100.6, 2-20103"
          },
          {
            id: 31,
            question: "Is the unit validating SkillBridge is reported IAW applicable regulations by the reporting unit?",
            reference: "MARADMIN 344/22; MCTFSPRIUM, 1-10111, 6-60802"
          },
          {
            id: 32,
            question: "Is the unit ensuring the final pay audit worksheet is reviewed and signed by the separating Marine?",
            reference: "MCTFSPRIUM, 12-120103"
          },
          {
            id: 33,
            question: "Is the unit ensuring key supporting documents that validate separation entitlements are maintained on file for audit, and in accordance with retention policies?",
            reference: "DoDFMR, Vol. 1, Chap. 9; SECNAV M-5210.1; MARADMIN 601/24"
          }
        ]
      }
    ]
  },
  {
    slug: "promotions",
    name: "Promotions",
    description: "Meritorious promotions, CRB reporting, JEPES occasions, and promotion recommendation procedures.",
    sections: [
      {
        unitType: "REPORTING",
        questions: [
          {
            id: 1,
            question: "Are meritorious promotions reported IAW applicable regulations?",
            reference: "MCO 1400.32D, Chap. 4; MCTFSPRIUM, 5-50102"
          },
          {
            id: 2,
            question: "Are meritorious promotions reported within 5 days of the effective date?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 3,
            question: "Are Meritorious Promotion Warrants (DD Form 216) filed in OMPF within 10 working days from the date reported on unit diary?",
            reference: "MCO 1400.32D; MCTFSPRIUM, Chap. 13, Appendix C; MCO 1070.1"
          },
          {
            id: 4,
            question: "Are CRB transactions reported IAW applicable regulations?",
            reference: "MCO 1400.32D, Chap. 12; MCTFSPRIUM, 5-50400"
          },
          {
            id: 5,
            question: "Are CRB transactions reported within 5 days of the effective date?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 6,
            question: "Are JEPES occasions approved by the appropriate authority?",
            reference: "MCO 1616.1, Chap. 1, par. 5; Chap. 2, par. 1"
          },
          {
            id: 7,
            question: "Are JEPES occasions reported within 5 days of the effective date?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 8,
            question: "For Marines in the grades of E4 and below, are JEPES occasions approved by the individual with appropriate promotion authority on the effective date of the promotion?",
            reference: "MCO P1400.32D, para 1200.3.b; MCO 1616.1, Ch 1, para 5.g; Ch 2, para 1.f"
          },
          {
            id: 9,
            question: "Are promotion recommendations (TTC 193) reported IAW applicable regulations?",
            reference: "MCO 1400.32D, Chap. 6; MCTFSPRIUM, 5-50200"
          },
          {
            id: 10,
            question: "Are promotion recommendations reported within 5 days of the effective date?",
            reference: "MCTFSPRIUM, 2-20103"
          }
        ]
      },
      {
        unitType: "IPAC",
        questions: [
          {
            id: 11,
            question: "Are meritorious promotions reported IAW applicable regulations?",
            reference: "MCO 1400.32D, Chap. 4; MCTFSPRIUM, 5-50102"
          },
          {
            id: 12,
            question: "Are meritorious promotions reported within 5 days of receiving key supporting documents?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 13,
            question: "Are Meritorious Promotion Warrants (DD Form 216) filed in OMPF within 10 working days from the date reported on unit diary?",
            reference: "MCO 1400.32D; MCTFSPRIUM, Chap. 13, Appendix C; MCO 1070.1"
          },
          {
            id: 14,
            question: "Are CRB transactions reported IAW applicable regulations?",
            reference: "MCO 1400.32D, Chap. 12; MCTFSPRIUM, 5-50400"
          },
          {
            id: 15,
            question: "Are CRB transactions reported within 5 days of receiving key supporting documents?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 16,
            question: "Are JEPES occasions approved by the appropriate authority?",
            reference: "MCO 1616.1, Chap. 1, par. 5; Chap. 2, par. 1"
          },
          {
            id: 17,
            question: "Are JEPES occasions reported within 5 days of receiving key supporting documents?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 18,
            question: "Are promotion recommendations (TTC 193) reported IAW applicable regulations?",
            reference: "MCO 1400.32D, Chap. 6; MCTFSPRIUM, 5-50200"
          },
          {
            id: 19,
            question: "Are promotion recommendations reported within 5 days of receiving key supporting documents?",
            reference: "MCTFSPRIUM, 2-20103"
          }
        ]
      },
      {
        unitType: "SUPPORTING",
        questions: [
          {
            id: 20,
            question: "Is the unit ensuring key supporting documents for meritorious promotions are submitted to and received by the reporting unit within 5 days of occurrence?",
            reference: "MCTFSPRIUM, 1-10100.6, 2-20103"
          },
          {
            id: 21,
            question: "Is the unit validating meritorious promotions are reported IAW applicable regulations by the reporting unit?",
            reference: "MCO 1400.32D, Chap. 4; MCTFSPRIUM, 1-10111, 5-50102"
          },
          {
            id: 22,
            question: "Is the unit ensuring key supporting documents for CRB transactions are submitted to and received by the reporting unit within 5 days of occurrence?",
            reference: "MCTFSPRIUM, 1-10100.6, 2-20103"
          },
          {
            id: 23,
            question: "Is the unit validating CRB transactions are reported IAW applicable regulations by the reporting unit?",
            reference: "MCO 1400.32D, Chap. 12; MCTFSPRIUM, 1-10111, 5-50400"
          },
          {
            id: 24,
            question: "Is the unit ensuring JEPES occasions are approved by the appropriate authority before submission to the reporting unit?",
            reference: "MCO 1616.1, Chap. 1, par. 5; Chap. 2, par. 1"
          },
          {
            id: 25,
            question: "Is the unit ensuring key supporting documents for promotion recommendations are submitted to and received by the reporting unit within 5 days of occurrence?",
            reference: "MCTFSPRIUM, 1-10100.6, 2-20103"
          },
          {
            id: 26,
            question: "Is the unit validating promotion recommendations are reported IAW applicable regulations by the reporting unit?",
            reference: "MCO 1400.32D, Chap. 6; MCTFSPRIUM, 1-10111, 5-50200"
          },
          {
            id: 27,
            question: "Is the unit ensuring key supporting documents that validate promotion entitlements are maintained on file for audit, and in accordance with retention policies?",
            reference: "DoDFMR, Vol. 1, Chap. 9; SECNAV M-5210.1; MARADMIN 601/24"
          }
        ]
      }
    ]
  },
  {
    slug: "reserve-pay",
    name: "Reserve Pay",
    description: "SMCR pay processing, drill certification, AT/ADOS audits, travel claims, and muster management.",
    sections: [
      {
        unitType: "REPORTING",
        questions: [
          {
            id: 1,
            question: "Is the unit ensuring SMCR pay is processed IAW applicable regulations?",
            reference: "DoDFMR Vol. 7A, Chap. 3; MCTFSPRIUM, 9-91800"
          },
          {
            id: 2,
            question: "Is the unit ensuring drill attendance is certified and reported within 5 days of the drill period?",
            reference: "MCTFSPRIUM, 2-20103, 9-91800"
          },
          {
            id: 3,
            question: "Is the unit ensuring AT/ADOS orders are audited for pay and entitlements accuracy?",
            reference: "DoDFMR Vol. 7A, Chap. 3; MCTFSPRIUM, 9-91800, 12-120103"
          },
          {
            id: 4,
            question: "Is the unit ensuring travel claims for AT/ADOS periods are submitted within 5 working days of completion?",
            reference: "FPM Vol 2, para 030102; MCTFSPRIUM, 2-20103"
          }
        ]
      },
      {
        unitType: "IPAC",
        questions: [
          {
            id: 5,
            question: "Is the unit ensuring SMCR pay is processed IAW applicable regulations?",
            reference: "DoDFMR Vol. 7A, Chap. 3; MCTFSPRIUM, 9-91800"
          },
          {
            id: 6,
            question: "Is the unit ensuring drill attendance is certified and reported within 5 days of receiving key supporting documents?",
            reference: "MCTFSPRIUM, 2-20103, 9-91800"
          },
          {
            id: 7,
            question: "Is the unit ensuring AT/ADOS orders are audited for pay and entitlements accuracy?",
            reference: "DoDFMR Vol. 7A, Chap. 3; MCTFSPRIUM, 9-91800, 12-120103"
          },
          {
            id: 8,
            question: "Is the unit ensuring muster reports are processed and reported IAW applicable regulations?",
            reference: "MCO 3040.4; MCTFSPRIUM, 9-91800"
          }
        ]
      },
      {
        unitType: "SUPPORTING",
        questions: [
          {
            id: 9,
            question: "Is the unit ensuring drill attendance rosters are submitted to the reporting unit within 5 days of the drill period?",
            reference: "MCTFSPRIUM, 1-10100.6, 2-20103"
          },
          {
            id: 10,
            question: "Is the unit validating SMCR pay is processed IAW applicable regulations by the reporting unit?",
            reference: "DoDFMR Vol. 7A, Chap. 3; MCTFSPRIUM, 1-10111, 9-91800"
          },
          {
            id: 11,
            question: "Is the unit ensuring key supporting documents for AT/ADOS periods are submitted to the reporting unit within 5 days of occurrence?",
            reference: "MCTFSPRIUM, 1-10100.6, 2-20103"
          },
          {
            id: 12,
            question: "Is the unit ensuring key supporting documents that validate reserve pay entitlements are maintained on file for audit, and in accordance with retention policies?",
            reference: "DoDFMR, Vol. 1, Chap. 9; SECNAV M-5210.1; MARADMIN 601/24"
          }
        ]
      }
    ]
  },
  {
    slug: "special-hazardous-duty-pay",
    name: "Special & Hazardous Duty Pay",
    description: "SDA, AIP, VSI, flight pay, dive pay, jump pay, and demolition duty pay certification and reporting.",
    sections: [
      {
        unitType: "REPORTING",
        questions: [
          {
            id: 1,
            question: "Is Special Duty Assignment Pay (SDA) reported IAW applicable regulations?",
            reference: "DoDFMR Vol. 7A, Chap. 15; MCTFSPRIUM, 9-90200"
          },
          {
            id: 2,
            question: "Is SDA reported within 5 days of the effective date?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 3,
            question: "Is Assignment Incentive Pay (AIP) reported IAW applicable regulations?",
            reference: "DoDFMR Vol. 7A, Chap. 16; MCTFSPRIUM, 9-90201"
          },
          {
            id: 4,
            question: "Is AIP reported within 5 days of the effective date?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 5,
            question: "Is Voluntary Separation Incentive (VSI) reported IAW applicable regulations?",
            reference: "DoDFMR Vol. 7A, Chap. 35; MCTFSPRIUM, 9-91600"
          },
          {
            id: 6,
            question: "Is Aviation Career Incentive Pay (ACIP) / Flight Pay reported IAW applicable regulations?",
            reference: "DoDFMR Vol. 7A, Chap. 22; MCTFSPRIUM, 9-90100"
          },
          {
            id: 7,
            question: "Is Flight Pay reported within 5 days of the effective date?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 8,
            question: "Is Dive Pay reported IAW applicable regulations?",
            reference: "DoDFMR Vol. 7A, Chap. 24; MCTFSPRIUM, 9-90101"
          },
          {
            id: 9,
            question: "Is Dive Pay reported within 5 days of the effective date?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 10,
            question: "Is Parachute / Jump Pay reported IAW applicable regulations?",
            reference: "DoDFMR Vol. 7A, Chap. 24; MCTFSPRIUM, 9-90101"
          },
          {
            id: 11,
            question: "Is Jump Pay reported within 5 days of the effective date?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 12,
            question: "Is Demolition Duty Pay reported IAW applicable regulations?",
            reference: "DoDFMR Vol. 7A, Chap. 24; MCTFSPRIUM, 9-90101"
          },
          {
            id: 13,
            question: "Is Demolition Duty Pay reported within 5 days of the effective date?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 14,
            question: "Is the unit ensuring key supporting documents for hazardous duty pay are signed by the appropriate certifying authority?",
            reference: "DoDFMR Vol. 7A, Chap. 24; MCTFSPRIUM, 9-90101"
          },
          {
            id: 15,
            question: "Are Proficiency Pay entitlements reported IAW applicable regulations?",
            reference: "DoDFMR Vol. 7A, Chap. 19; MCTFSPRIUM, 9-90900"
          },
          {
            id: 16,
            question: "Is Proficiency Pay reported within 5 days of the effective date?",
            reference: "MCTFSPRIUM, 2-20103"
          }
        ]
      },
      {
        unitType: "IPAC",
        questions: [
          {
            id: 17,
            question: "Is Special Duty Assignment Pay (SDA) reported IAW applicable regulations?",
            reference: "DoDFMR Vol. 7A, Chap. 15; MCTFSPRIUM, 9-90200"
          },
          {
            id: 18,
            question: "Is SDA reported within 5 days of receiving key supporting documents?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 19,
            question: "Is Assignment Incentive Pay (AIP) reported IAW applicable regulations?",
            reference: "DoDFMR Vol. 7A, Chap. 16; MCTFSPRIUM, 9-90201"
          },
          {
            id: 20,
            question: "Is AIP reported within 5 days of receiving key supporting documents?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 21,
            question: "Is Aviation Career Incentive Pay (ACIP) / Flight Pay reported IAW applicable regulations?",
            reference: "DoDFMR Vol. 7A, Chap. 22; MCTFSPRIUM, 9-90100"
          },
          {
            id: 22,
            question: "Is Flight Pay reported within 5 days of receiving key supporting documents?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 23,
            question: "Is Dive Pay reported IAW applicable regulations?",
            reference: "DoDFMR Vol. 7A, Chap. 24; MCTFSPRIUM, 9-90101"
          },
          {
            id: 24,
            question: "Is Dive Pay reported within 5 days of receiving key supporting documents?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 25,
            question: "Is Parachute / Jump Pay reported IAW applicable regulations?",
            reference: "DoDFMR Vol. 7A, Chap. 24; MCTFSPRIUM, 9-90101"
          },
          {
            id: 26,
            question: "Is Jump Pay reported within 5 days of receiving key supporting documents?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 27,
            question: "Is Demolition Duty Pay reported IAW applicable regulations?",
            reference: "DoDFMR Vol. 7A, Chap. 24; MCTFSPRIUM, 9-90101"
          },
          {
            id: 28,
            question: "Is Demolition Duty Pay reported within 5 days of receiving key supporting documents?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 29,
            question: "Are Proficiency Pay entitlements reported IAW applicable regulations?",
            reference: "DoDFMR Vol. 7A, Chap. 19; MCTFSPRIUM, 9-90900"
          },
          {
            id: 30,
            question: "Is Proficiency Pay reported within 5 days of receiving key supporting documents?",
            reference: "MCTFSPRIUM, 2-20103"
          }
        ]
      },
      {
        unitType: "SUPPORTING",
        questions: [
          {
            id: 31,
            question: "Is the unit ensuring key supporting documents for SDA are submitted to and received by the reporting unit within 5 days of the effective date?",
            reference: "MCTFSPRIUM, 1-10100.6, 2-20103"
          },
          {
            id: 32,
            question: "Is the unit validating SDA is reported IAW applicable regulations by the reporting unit?",
            reference: "DoDFMR Vol. 7A, Chap. 15; MCTFSPRIUM, 1-10111, 9-90200"
          },
          {
            id: 33,
            question: "Is the unit ensuring key supporting documents for AIP are submitted to and received by the reporting unit within 5 days of the effective date?",
            reference: "MCTFSPRIUM, 1-10100.6, 2-20103"
          },
          {
            id: 34,
            question: "Is the unit validating AIP is reported IAW applicable regulations by the reporting unit?",
            reference: "DoDFMR Vol. 7A, Chap. 16; MCTFSPRIUM, 1-10111, 9-90201"
          },
          {
            id: 35,
            question: "Is the unit ensuring key supporting documents for Flight Pay are submitted to and received by the reporting unit within 5 days of the effective date?",
            reference: "MCTFSPRIUM, 1-10100.6, 2-20103"
          },
          {
            id: 36,
            question: "Is the unit validating Flight Pay is reported IAW applicable regulations by the reporting unit?",
            reference: "DoDFMR Vol. 7A, Chap. 22; MCTFSPRIUM, 1-10111, 9-90100"
          },
          {
            id: 37,
            question: "Is the unit ensuring key supporting documents for Dive Pay are submitted to and received by the reporting unit within 5 days of the effective date?",
            reference: "MCTFSPRIUM, 1-10100.6, 2-20103"
          },
          {
            id: 38,
            question: "Is the unit validating Dive Pay is reported IAW applicable regulations by the reporting unit?",
            reference: "DoDFMR Vol. 7A, Chap. 24; MCTFSPRIUM, 1-10111, 9-90101"
          },
          {
            id: 39,
            question: "Is the unit ensuring key supporting documents for Jump Pay are submitted to and received by the reporting unit within 5 days of the effective date?",
            reference: "MCTFSPRIUM, 1-10100.6, 2-20103"
          },
          {
            id: 40,
            question: "Is the unit validating Jump Pay is reported IAW applicable regulations by the reporting unit?",
            reference: "DoDFMR Vol. 7A, Chap. 24; MCTFSPRIUM, 1-10111, 9-90101"
          },
          {
            id: 41,
            question: "Is the unit ensuring key supporting documents for Demolition Duty Pay are submitted to and received by the reporting unit within 5 days of the effective date?",
            reference: "MCTFSPRIUM, 1-10100.6, 2-20103"
          },
          {
            id: 42,
            question: "Is the unit ensuring key supporting documents that validate special and hazardous duty pay entitlements are maintained on file for audit, and in accordance with retention policies?",
            reference: "DoDFMR, Vol. 1, Chap. 9; SECNAV M-5210.1; MARADMIN 601/24"
          }
        ]
      }
    ]
  },
  {
    slug: "systems-management",
    name: "Systems Management",
    description: "UDMIPS, DTMS, DMM certifying officials, COL training, DFR certification, and OMPF access.",
    sections: [
      {
        unitType: "REPORTING",
        questions: [
          {
            id: 1,
            question: "Does the unit have current UDMIPS access and are users properly trained on UDMIPS functionality?",
            reference: "MCTFSPRIUM, 1-10100"
          },
          {
            id: 2,
            question: "Is the unit utilizing the Defense Travel Management System (DTMS) for travel authorization and voucher processing?",
            reference: "MCO 4650.39A; MCTFSPRIUM, 2-20103"
          },
          {
            id: 3,
            question: "Are Disbursing / Military Money (DMM) certifying officials properly appointed and trained?",
            reference: "DoDFMR Vol. 5; MCTFSPRIUM, 1-10100"
          },
          {
            id: 4,
            question: "Is the unit ensuring personnel complete required Certifying Officer Legislation (COL) training annually?",
            reference: "DoDFMR Vol. 5, Chap. 33; MCTFSPRIUM, 1-10100"
          },
          {
            id: 5,
            question: "Are Defense Finance Reporting (DFR) certifications current and accurate?",
            reference: "MCTFSPRIUM, 1-10100"
          },
          {
            id: 6,
            question: "Does the unit have appropriate OMPF access levels for personnel requiring access?",
            reference: "MCO 1070.1; MCTFSPRIUM, 1-10100"
          },
          {
            id: 7,
            question: "Is the unit ensuring MOL accounts are properly managed and access levels are appropriate?",
            reference: "MCTFSPRIUM, 1-10100"
          },
          {
            id: 8,
            question: "Are unit diary clerks properly trained and certified on unit diary reporting procedures?",
            reference: "MCTFSPRIUM, 1-10100, 2-20103"
          }
        ]
      },
      {
        unitType: "IPAC",
        questions: [
          {
            id: 9,
            question: "Does the unit have current UDMIPS access and are users properly trained on UDMIPS functionality?",
            reference: "MCTFSPRIUM, 1-10100"
          },
          {
            id: 10,
            question: "Are Disbursing / Military Money (DMM) certifying officials properly appointed and trained?",
            reference: "DoDFMR Vol. 5; MCTFSPRIUM, 1-10100"
          },
          {
            id: 11,
            question: "Is the unit ensuring personnel complete required Certifying Officer Legislation (COL) training annually?",
            reference: "DoDFMR Vol. 5, Chap. 33; MCTFSPRIUM, 1-10100"
          },
          {
            id: 12,
            question: "Are Defense Finance Reporting (DFR) certifications current and accurate?",
            reference: "MCTFSPRIUM, 1-10100"
          },
          {
            id: 13,
            question: "Does the unit have appropriate OMPF access levels for personnel requiring access?",
            reference: "MCO 1070.1; MCTFSPRIUM, 1-10100"
          },
          {
            id: 14,
            question: "Is the unit ensuring MOL accounts are properly managed and access levels are appropriate?",
            reference: "MCTFSPRIUM, 1-10100"
          },
          {
            id: 15,
            question: "Are unit diary clerks properly trained and certified on unit diary reporting procedures?",
            reference: "MCTFSPRIUM, 1-10100, 2-20103"
          }
        ]
      },
      {
        unitType: "SUPPORTING",
        questions: [
          {
            id: 16,
            question: "Is the unit ensuring personnel have appropriate system access levels for their duties?",
            reference: "MCTFSPRIUM, 1-10100"
          },
          {
            id: 17,
            question: "Is the unit validating that MOL access requests are processed IAW applicable regulations?",
            reference: "MCTFSPRIUM, 1-10100, 1-10111"
          },
          {
            id: 18,
            question: "Is the unit ensuring personnel complete required systems training before gaining access?",
            reference: "MCTFSPRIUM, 1-10100"
          },
          {
            id: 19,
            question: "Is the unit maintaining a current roster of personnel with system access and their access levels?",
            reference: "MCTFSPRIUM, 1-10100"
          },
          {
            id: 20,
            question: "Is the unit ensuring system access is removed for personnel who no longer require access or have transferred?",
            reference: "MCTFSPRIUM, 1-10100"
          }
        ]
      }
    ]
  },
  {
    slug: "training",
    name: "Training",
    description: "PFT, CFT, rifle qualification, MCMAP, schools, and Body Composition Program reporting.",
    sections: [
      {
        unitType: "REPORTING",
        questions: [
          {
            id: 1,
            question: "Are Physical Fitness Test (PFT) scores reported IAW applicable regulations?",
            reference: "MCO 6100.13A; MCTFSPRIUM, 10-100100"
          },
          {
            id: 2,
            question: "Are PFT scores reported within 5 days of the effective date?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 3,
            question: "Are Combat Fitness Test (CFT) scores reported IAW applicable regulations?",
            reference: "MCO 6100.13A; MCTFSPRIUM, 10-100100"
          },
          {
            id: 4,
            question: "Are CFT scores reported within 5 days of the effective date?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 5,
            question: "Are Rifle Qualification scores reported IAW applicable regulations?",
            reference: "MCO 3574.2L; MCTFSPRIUM, 10-100200"
          },
          {
            id: 6,
            question: "Are Rifle Qualification scores reported within 5 days of the effective date?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 7,
            question: "Are MCMAP belt levels reported IAW applicable regulations?",
            reference: "MCO 1500.59A; MCTFSPRIUM, 10-100300"
          },
          {
            id: 8,
            question: "Are Body Composition Program (BCP) entries reported IAW applicable regulations?",
            reference: "MCO 6110.3A; MCTFSPRIUM, 10-100400"
          }
        ]
      },
      {
        unitType: "IPAC",
        questions: [
          {
            id: 9,
            question: "Are Physical Fitness Test (PFT) scores reported IAW applicable regulations?",
            reference: "MCO 6100.13A; MCTFSPRIUM, 10-100100"
          },
          {
            id: 10,
            question: "Are PFT scores reported within 5 days of receiving key supporting documents?",
            reference: "MCTFSPRIUM, 2-20103"
          },
          {
            id: 11,
            question: "Are Combat Fitness Test (CFT) scores reported IAW applicable regulations?",
            reference: "MCO 6100.13A; MCTFSPRIUM, 10-100100"
          },
          {
            id: 12,
            question: "Are Rifle Qualification scores reported IAW applicable regulations?",
            reference: "MCO 3574.2L; MCTFSPRIUM, 10-100200"
          },
          {
            id: 13,
            question: "Are MCMAP belt levels reported IAW applicable regulations?",
            reference: "MCO 1500.59A; MCTFSPRIUM, 10-100300"
          },
          {
            id: 14,
            question: "Are Body Composition Program (BCP) entries reported IAW applicable regulations?",
            reference: "MCO 6110.3A; MCTFSPRIUM, 10-100400"
          }
        ]
      },
      {
        unitType: "SUPPORTING",
        questions: [
          {
            id: 15,
            question: "Is the unit ensuring PFT/CFT scores are submitted to the reporting unit within 5 days of the event?",
            reference: "MCTFSPRIUM, 1-10100.6, 2-20103"
          },
          {
            id: 16,
            question: "Is the unit validating PFT/CFT scores are reported IAW applicable regulations by the reporting unit?",
            reference: "MCO 6100.13A; MCTFSPRIUM, 1-10111, 10-100100"
          },
          {
            id: 17,
            question: "Is the unit ensuring Rifle Qualification scores are submitted to the reporting unit within 5 days of the event?",
            reference: "MCTFSPRIUM, 1-10100.6, 2-20103"
          },
          {
            id: 18,
            question: "Is the unit ensuring key supporting documents that validate training events are maintained on file for audit, and in accordance with retention policies?",
            reference: "DoDFMR, Vol. 1, Chap. 9; SECNAV M-5210.1; MARADMIN 601/24"
          }
        ]
      }
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
