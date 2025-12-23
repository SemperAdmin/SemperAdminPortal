// IGMC FAC Checklist Questions Data
import type { FACSlug } from "./igmcFacs";

// Types for FAC Checklist structure
export interface FACResource {
  title: string;
  url: string;
}

export interface FACVideoResource extends FACResource {
  source: "marinenet" | "youtube";
}

export interface FACSME {
  name: string;
  email: string;
  phone?: string;
}

export interface FACQuestion {
  number: string;
  text: string;
  note?: string;
  reference: {
    text: string;
    url?: string;
  };
  video?: FACVideoResource;
}

export interface FACSubsection {
  id: string;
  title: string;
  questions: FACQuestion[];
}

export interface FACChecklistData {
  slug: FACSlug;
  applicabilityNote?: string;
  revisedDate?: string;
  sme?: FACSME;
  resources?: {
    directives?: FACResource[];
    sharepoints?: FACResource[];
    teams?: FACResource[];
    videos?: FACVideoResource[];
    other?: FACResource[];
  };
  subsections: FACSubsection[];
}

// PES Checklist Data
export const pesChecklist: FACChecklistData = {
  slug: "pes",
  applicabilityNote: "This checklist is applicable to all commands.",
  revisedDate: "April 18, 2025",
  sme: {
    name: "Maj Deborah L. Queen",
    email: "deborah.queen@usmc.mil",
    phone: "(703) 432-0514",
  },
  resources: {
    directives: [
      {
        title: "MCO 1610.7B (Performance Evaluation System)",
        url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899222/mco-16107b/",
      },
      {
        title: "MCO 1616.1 Ch 1 (JEPES)",
        url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899290/mco-16161/",
      },
    ],
    sharepoints: [
      {
        title: "PES SharePoint",
        url: "https://usmc.sharepoint-mil.us/sites/HQMC_MMRP",
      },
    ],
    other: [
      {
        title: "MOL APES / MMRP Tools",
        url: "https://mol.tfs.usmc.mil/",
      },
    ],
  },
  subsections: [
    {
      id: "01",
      title: "Performance Evaluations System",
      questions: [
        {
          number: "0101",
          text: "Is the command annually educating MROs on the responsibilities and provisions of the PES to adequately prepare them to execute duties as an MRO?",
          note: "Generally, this includes a review of the appropriate way to submit an MROW and a MBS audit. This requires a review of chapters 2, 3 and 4 of the PES, with special attention on section A data.",
          reference: {
            text: "MCO 1610.7B, Paragraph 4 (Execution)b., Chapter 8 paragraph 4, Chapter 9 paragraph 5.d.",
            url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899222/mco-16107b/",
          },
        },
        {
          number: "0102",
          text: "Is the command annually educating RSs on the responsibilities and provisions of the PES to adequately prepare them to execute duties as an RS?",
          note: "Generally, this includes a verification of sections A, B, and C, review the requirements for high mark and adverse justifications, and a review of the performance anchored rating scale and marking philosophy. This requires a review of chapters 1-4, and 8 of the PES.",
          reference: {
            text: "MCO 1610.7B, Paragraph 4 (Execution).b., Chapter 8 paragraph 4, Chapter 9 paragraph 5.d.",
            url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899222/mco-16107b/",
          },
        },
        {
          number: "0103",
          text: "Is the command annually educating ROs on the responsibilities and provisions of the PES to adequately prepare them to execute duties as an RO?",
          note: "Generally, this includes the supervision of the verification of sections A through C, a review of the RS's markings in sections D-H, requirements for high mark and adverse justifications, a review of section I, and a review of the RO's profile. This requires a review of chapters 1-4, and 8 of the PES.",
          reference: {
            text: "MCO 1610.7B, Paragraph 4 (Execution).b., Chapter 8 paragraph 4, Chapter 9 paragraph 5.d.",
            url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899222/mco-16107b/",
          },
        },
        {
          number: "0104",
          text: "Is the command annually educating reporting officials on adverse report procedures?",
          note: "This requires a review of chapter 5.",
          reference: {
            text: "MCO 1610.7B, Paragraph 4 (Execution).b., Chapter 5, paragraph 1.a., Chapter 8 paragraph 4, Chapter 9 paragraph 5.d.",
            url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899222/mco-16107b/",
          },
        },
        {
          number: "0105",
          text: "Based on a comparison of the command's non-judicial punishment (NJP) and court martial files against the Fitness Report Inventory of applicable Marines, is the command submitting \"Directed by the Commandant of the Marine Corps\" (DC) or \"Grade Change\" (GC) reports when significant administrative or adverse action on the Marines that requires immediate reporting to the CMC?",
          note: "\"FITREP Inventory\" tool is located in MOL under Resources, APES, MMRP.",
          reference: {
            text: "MCO 1610.7B, Chapter 3, paragraphs 4.a. and 4.b, Chapter 5.",
            url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899222/mco-16107b/",
          },
        },
        {
          number: "0106",
          text: "Is the command maintaining quarterly copies whether digital or hard copy of the Commander's Timeliness Report (CTR) that cover the previous 12 months?",
          note: "CTRs must be requested by submitting an email to the organizational email at smb.manpower.mmrp-31@usmc.mil along with the RUC and MCC of the command.",
          reference: {
            text: "MCO 1610.7B, Chapter 9, paragraph 5.f.",
            url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899222/mco-16107b/",
          },
        },
        {
          number: "0107",
          text: "Is the commander using the CTR to reduce or eliminate the number of late and outstanding reports?",
          note: "Reports must be submitted to HQMC within 30 days of the end of the reporting period for normal reports and 60 days for adverse reports.",
          reference: {
            text: "MCO 1610.7B, Chapter 1, paragraph 3.c., Chapter 9 paragraph 5.d. and paragraph 5.f.(1).",
            url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899222/mco-16107b/",
          },
        },
        {
          number: "0108",
          text: "Is the command maintaining quarterly copies whether digital or hard copy of the Missing Last Annual Report that cover the previous 12 months?",
          note: "Missing last annual queries are available in MOL under Resources, APES, MMRP web tool. Missing last annual must be pulled by RUC/MCC and grade for all E5-O6.",
          reference: {
            text: "MCO 1610.7B, Chapter 9, paragraph 5.f.",
            url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899222/mco-16107b/",
          },
        },
        {
          number: "0109",
          text: "Is the command maintaining quarterly copies whether digital or hard copy of the Date Gap Query Report that cover the previous 12 months?",
          note: "Date gap queries are available in MOL under Resources, APES, MMRP web tool. Date gaps can be pulled by RUC/MCC.",
          reference: {
            text: "MCO 1610.7B, Chapter 9 paragraph 5.f.",
            url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899222/mco-16107b/",
          },
        },
        {
          number: "0110",
          text: "Does a review of the Missing Last Annual Reports and Date Gap Queries reveal proactive efforts by the command notifying and assisting the Marine written on to ensure record discrepancies are corrected?",
          note: "For example, correcting date gaps, overlaps, or correcting occasion codes.",
          reference: {
            text: "MCO 1610.7B, chapter 9, par 5.a.(1), Chapter 9 paragraph 5.d.",
            url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899222/mco-16107b/",
          },
        },
        {
          number: "0111",
          text: "Is the command maintaining a record log that annotates the Fitness Report Inventory check for every E-5 through O-5 who has checked into the command within the preceding 12 months?",
          note: "A record log can consist of an excel spreadsheet, a logbook, or another format that shows a proactive effort in verifying FITREPs are processed/completed including the FITREP Inventory which is maintained for a minimum of 12 months.",
          reference: {
            text: "MCO 1610.7B, Chapter 9, paragraph 5.f.(2).",
            url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899222/mco-16107b/",
          },
        },
      ],
    },
    {
      id: "02",
      title: "Junior Enlisted Performance Evaluation System",
      questions: [
        {
          number: "0201",
          text: "Does every Marine in the grades E-1 through E-4 have a reporting chain established within 30 days of checking into the unit, and all omitted roles are marked \"N/A\" instead of \"unassigned\"?",
          reference: {
            text: "MCO 1616.1 Ch 1, chap 1, para 6.a).",
            url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899290/mco-16161/",
          },
        },
        {
          number: "0202",
          text: "Does the unit use the correct JEPES occasion types and effective dates?",
          reference: {
            text: "MCO 1616.1 Ch 1, chap 2, para 2, 2.a, & 2.b",
            url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899290/mco-16161/",
          },
        },
        {
          number: "0203",
          text: "Does the unit effectively manage JEPES reporting chain, Senior Enlisted Reviewer, Command Reviewer, and Unit Admin permissions within the unit organizational scopes?",
          reference: {
            text: "MCO 1616.1 Ch 1, chap 1, para 5.h",
            url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899290/mco-16161/",
          },
        },
        {
          number: "0204",
          text: "Does the unit have a process to ensure that first-line supervisors provide initial counselling's to each MRO within 30 days?",
          reference: {
            text: "MCO 1616.1 Ch 1, chap 1, para 6.b & chap 2, para 1.b",
            url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899290/mco-16161/",
          },
        },
        {
          number: "0205",
          text: "Does the unit ensure that all JEPES occasions are approved within 30 days of the effective \"TO DATE\"?",
          reference: {
            text: "MCO 1616.1 Ch 1, chap 2, para 2.h.(3)",
            url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899290/mco-16161/",
          },
        },
        {
          number: "0206",
          text: "Does the unit ensure that JEPES occasions are approved by the appropriate promotion authority, with an \"Acting Letter\" on file when required?",
          reference: {
            text: "MCO 1616.1 Ch 1, chap 1, para 5.g & chap 2, para 1.f",
            url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899290/mco-16161/",
          },
        },
        {
          number: "0207",
          text: "Can the unit show correctly processed examples of, or demonstrate the ability to process command corrections for JEPES occasions when required?",
          reference: {
            text: "MCO 1616.1 Ch 1, chap 2, para 4",
            url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899290/mco-16161/",
          },
        },
        {
          number: "0208",
          text: "Does the unit ensure that high and low command input marks are receiving appropriate justifications?",
          reference: {
            text: "MCO 1616.1 Ch 1, chap 2, para 3.a.(1) & (5)",
            url: "https://www.marines.mil/News/Publications/MCPEL/Electronic-Library-Display/Article/899290/mco-16161/",
          },
        },
      ],
    },
  ],
};

// Map of all FAC checklists
const facChecklists: Partial<Record<FACSlug, FACChecklistData>> = {
  pes: pesChecklist,
};

// Helper functions
export function getFACChecklistBySlug(slug: FACSlug): FACChecklistData | undefined {
  return facChecklists[slug];
}

export function hasFACChecklist(slug: FACSlug): boolean {
  return slug in facChecklists;
}

export function getTotalQuestionCount(checklist: FACChecklistData): number {
  return checklist.subsections.reduce((total, section) => total + section.questions.length, 0);
}

export function getSubsectionQuestionCount(subsection: FACSubsection): number {
  return subsection.questions.length;
}
