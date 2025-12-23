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
