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
  smes?: FACSME[];
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

// Career Planning Program Checklist Data
export const careerPlanningChecklist: FACChecklistData = {
  slug: "career-planning",
  applicabilityNote:
    "This checklist is applicable to all commands from Battalion/Squadron level to Commanding General level, affecting all command unit types.",
  revisedDate: "March 7, 2024",
  smes: [
    {
      name: "MGySgt Bryant Lodge",
      email: "bryant.lodge@usmc.mil",
      phone: "(703) 614-5209",
    },
    {
      name: "MGySgt James Williams",
      email: "james.williams@usmc.mil",
      phone: "(703) 432-9238",
    },
  ],
  subsections: [
    {
      id: "01",
      title: "Command Group",
      questions: [
        {
          number: "0101",
          text: "Is there a current letter designating a Unit Career Planner (UCP) on file?",
          reference: {
            text: "MCO 1040.31, Chapter 2, paragraph 2.b",
          },
        },
        {
          number: "0102",
          text: "Does the UCP hold a secondary MOS 8421?",
          reference: {
            text: "MCO 1040.31, Chapter 2, paragraph 2.a",
          },
        },
        {
          number: "0103",
          text: "Has the UCP completed the Career Retention Specialist Course (CRSC) or does the UCP have an approved waiver on file?",
          reference: {
            text: "MCO 1040.31, Chapter 2, paragraph 2.a",
          },
        },
        {
          number: "0104",
          text: "Is the UCP performing duties commensurate with a full-time career planner?",
          reference: {
            text: "MCO 1040.31, Chapter 2, paragraph 2.a",
          },
        },
        {
          number: "0105",
          text: "Does the UCP have a Career Planning workspace that is accessible during normal working hours and allows for private counseling?",
          reference: {
            text: "MCO 1040.31, Chapter 2, paragraph 2.d",
          },
        },
        {
          number: "0106",
          text: "Is there a current letter designating an Assistant Unit Career Planner (AUCP) on file?",
          note: "If required based on unit size.",
          reference: {
            text: "MCO 1040.31, Chapter 2, paragraph 2.c",
          },
        },
        {
          number: "0107",
          text: "Does the AUCP hold a secondary MOS 8421?",
          reference: {
            text: "MCO 1040.31, Chapter 2, paragraph 2.c",
          },
        },
        {
          number: "0108",
          text: "Has the AUCP completed the Career Retention Specialist Course (CRSC) or does the AUCP have an approved waiver on file?",
          reference: {
            text: "MCO 1040.31, Chapter 2, paragraph 2.c",
          },
        },
        {
          number: "0109",
          text: "Is there a current letter designating a Career Planner SNCOIC on file?",
          note: "Required for commands with multiple UCPs.",
          reference: {
            text: "MCO 1040.31, Chapter 2, paragraph 3",
          },
        },
        {
          number: "0110",
          text: "Are Career Planning briefs being conducted for all newly reporting Marines within 30 days of joining the command?",
          reference: {
            text: "MCO 1040.31, Chapter 3, paragraph 3.a",
          },
        },
        {
          number: "0111",
          text: "Is the command meeting the Career Planning Program objectives and goals as established by higher headquarters?",
          reference: {
            text: "MCO 1040.31, Chapter 1, paragraph 3",
          },
        },
      ],
    },
    {
      id: "02",
      title: "Unit Career Planner Functions",
      questions: [
        {
          number: "0201",
          text: "Is the UCP maintaining a Career Planning continuity book or folder?",
          reference: {
            text: "MCO 1040.31, Chapter 3, paragraph 1.a",
          },
        },
        {
          number: "0202",
          text: "Is the UCP maintaining a Career Planning tracking system for all Marines within the command?",
          reference: {
            text: "MCO 1040.31, Chapter 3, paragraph 1.b",
          },
        },
        {
          number: "0203",
          text: "Is the UCP conducting reenlistment interviews with all Marines between 6-12 months prior to their EAS?",
          reference: {
            text: "MCO 1040.31, Chapter 3, paragraph 3.b",
          },
        },
        {
          number: "0204",
          text: "Is the UCP providing career counseling to Marines on reenlistment options, bonus eligibility, and career progression?",
          reference: {
            text: "MCO 1040.31, Chapter 3, paragraph 3.c",
          },
        },
        {
          number: "0205",
          text: "Is the UCP processing reenlistment packages in a timely manner?",
          reference: {
            text: "MCO 1040.31, Chapter 3, paragraph 4.a",
          },
        },
        {
          number: "0206",
          text: "Is the UCP submitting accurate and complete reenlistment packages?",
          reference: {
            text: "MCO 1040.31, Chapter 3, paragraph 4.b",
          },
        },
        {
          number: "0207",
          text: "Is the UCP maintaining statistics on reenlistment rates and attrition?",
          reference: {
            text: "MCO 1040.31, Chapter 3, paragraph 5.a",
          },
        },
        {
          number: "0208",
          text: "Is the UCP reporting reenlistment statistics to higher headquarters as required?",
          reference: {
            text: "MCO 1040.31, Chapter 3, paragraph 5.b",
          },
        },
        {
          number: "0209",
          text: "Is the UCP attending Career Planner training and meetings as required?",
          reference: {
            text: "MCO 1040.31, Chapter 2, paragraph 2.e",
          },
        },
        {
          number: "0210",
          text: "Is the UCP conducting Career Planning training for unit leadership and SNCOs?",
          reference: {
            text: "MCO 1040.31, Chapter 3, paragraph 2.a",
          },
        },
        {
          number: "0211",
          text: "Is the UCP providing information on lateral move opportunities and programs to eligible Marines?",
          reference: {
            text: "MCO 1040.31, Chapter 3, paragraph 3.d",
          },
        },
      ],
    },
    {
      id: "03",
      title: "Career Planner SNCOIC",
      questions: [
        {
          number: "0301",
          text: "Is the Career Planner SNCOIC supervising and coordinating the activities of all UCPs within the command?",
          reference: {
            text: "MCO 1040.31, Chapter 2, paragraph 3.a",
          },
        },
        {
          number: "0302",
          text: "Is the Career Planner SNCOIC conducting periodic inspections of subordinate unit career planning programs?",
          reference: {
            text: "MCO 1040.31, Chapter 2, paragraph 3.b",
          },
        },
        {
          number: "0303",
          text: "Is the Career Planner SNCOIC consolidating and reporting career planning statistics to higher headquarters?",
          reference: {
            text: "MCO 1040.31, Chapter 2, paragraph 3.c",
          },
        },
        {
          number: "0304",
          text: "Is the Career Planner SNCOIC coordinating training for all UCPs within the command?",
          reference: {
            text: "MCO 1040.31, Chapter 2, paragraph 3.d",
          },
        },
        {
          number: "0305",
          text: "Is the Career Planner SNCOIC acting as the liaison between the command and higher headquarters on career planning matters?",
          reference: {
            text: "MCO 1040.31, Chapter 2, paragraph 3.e",
          },
        },
      ],
    },
    {
      id: "04",
      title: "Reserve Command Group",
      questions: [
        {
          number: "0401",
          text: "Is there a current letter designating a Reserve Unit Career Planner on file?",
          reference: {
            text: "MCO 1040R.31, Chapter 2, paragraph 2.a",
          },
        },
        {
          number: "0402",
          text: "Is the Reserve UCP providing career counseling on reserve-specific programs and opportunities?",
          reference: {
            text: "MCO 1040R.31, Chapter 3, paragraph 3.a",
          },
        },
        {
          number: "0403",
          text: "Is the Reserve UCP coordinating with the Active Component Career Planner as required?",
          reference: {
            text: "MCO 1040R.31, Chapter 2, paragraph 2.c",
          },
        },
      ],
    },
  ],
};

// Body Composition and Military Appearance Program Checklist Data
export const bodyCompositionChecklist: FACChecklistData = {
  slug: "body-composition",
  applicabilityNote: "This checklist applies to all levels and types of commands.",
  revisedDate: "April 2, 2025",
  smes: [
    {
      name: "GySgt Autumn Robancho",
      email: "tecom.forcefitness@usmc.mil",
      phone: "(703) 432-1688",
    },
    {
      name: "GySgt Lexus Schaeffer",
      email: "tecom.forcefitness@usmc.mil",
      phone: "(703) 784-1226",
    },
  ],
  subsections: [
    {
      id: "01",
      title: "General",
      questions: [
        {
          number: "0101",
          text: "Has the unit appointed a Force Fitness Instructor (FFI) or command physical training representative (CPTR) that is responsible to the commander for the development, implementation, management and supervision of the organizational Marine Appearance Program (MAP), Body Composition Program (BCP), and Remedial Conditioning Program (RCP)?",
          reference: {
            text: "MCO 6110.3A with Change 3, encl 1, par 2c(2)",
          },
        },
        {
          number: "0102",
          text: "Do Commanders/Officers in Charge ensure Marines receive a medical evaluation from an authorized medical provider (Independent Duty Corpsman, Nurse Practitioner, Physician, or Physician Assistant) prior to being assigned to BCP or MAP?",
          reference: {
            text: "MCO 6110.3A with Change 3, encl 1, par 2a(2) & 2a(2)(a)-(d)",
          },
        },
        {
          number: "0103",
          text: "Have policies and procedures for a MAP been developed by the unit? Do these cover the uniform application of periodic assessments, assignment, and supervisory procedures?",
          reference: {
            text: "MCO 6110.3A with Change 3, encl 1, par 2a(1)",
          },
        },
        {
          number: "0104",
          text: "Does the unit properly identify and assign Marines who do not meet established military appearance standards to the MAP?",
          reference: {
            text: "MCO 6110.3A with Change 3, encl 1, par 4b(2) & par 4g",
          },
        },
        {
          number: "0105",
          text: "Does the unit properly perform military appearance evaluations for Marines who present an unsuitable military appearance?",
          reference: {
            text: "MCO 6110.3A with Change 3, encl 1, par 3f(5)(d)1-2",
          },
        },
        {
          number: "0106",
          text: "Does the unit properly remove Marines from the MAP who comply with established military appearance standards?",
          reference: {
            text: "MCO 6110.3A with Change 3, encl 1, par 4i",
          },
        },
        {
          number: "0107",
          text: "Does a FFI or CPTR manage and maintain MAP documentation, to include medical evaluation forms?",
          reference: {
            text: "MCO 6110.3A with Change 3, encl 1, par 2c, 11",
          },
        },
        {
          number: "0108",
          text: "Have policies and procedures for a BCP been developed by the unit? Do these cover the uniform application of periodic assessments, assignment, and supervisory procedures?",
          reference: {
            text: "MCO 6110.3A with Change 3, encl 1, par 2a(1)",
          },
        },
        {
          number: "0109",
          text: "Does the unit identify and properly assign Marines who exceed established body composition standards to the BCP?",
          reference: {
            text: "MCO 6110.3A with Change 3, encl 1, par 2a(1) & par 4b(1) & c(1)-(8), 7a&b",
          },
        },
        {
          number: "0110",
          text: "Does the unit properly measure height with an approved, calibrated device?",
          reference: {
            text: "MCO 6110.3A with Change 3, encl 1, par 3f(4), (5)a",
          },
        },
        {
          number: "0111",
          text: "Does the unit properly measure weight with a calibrated digital or balance beam scale?",
          reference: {
            text: "MCO 6110.3A with Change 3, encl 1, par 3f(4), (5)b",
          },
        },
        {
          number: "0112",
          text: "Does the unit properly perform body composition evaluations for Marines who exceed established height/weight standards using a self-tensioning taping device?",
          reference: {
            text: "MCO 6110.3A with Change 3, encl 1, par 3f(5)1-2",
          },
        },
        {
          number: "0113",
          text: "Does the unit conduct weekly weigh in to check the progress of Marines while on BCP?",
          reference: {
            text: "MCO 6110.3A with Change 3, encl 1, par 2c(4)(d)4",
          },
        },
        {
          number: "0114",
          text: "Did all Marines conduct both previous semi-annual weigh-ins for 1 Jan to 30 June and 1 July to 31 December?",
          reference: {
            text: "MCO 6110.3A with Change 3, encl 1, par 3d(1)(3)",
          },
        },
        {
          number: "0115",
          text: "Does the unit have procedures established for Marines who transfer while assigned to BCP?",
          reference: {
            text: "MCO 6110.3A with Change 3, encl 1, par 3d(4)",
          },
        },
        {
          number: "0116",
          text: "When a Marine becomes pregnant while assigned to BCP, does the unit place the Marine on an inactive status for the required time period as outlined in the reference?",
          reference: {
            text: "MCO 6110.3A with Change 3, encl 1, par 7b(3), par 8a(2)",
          },
        },
        {
          number: "0117",
          text: "Does the unit initiate administrative separation procedures for Marines who fail to meet established BCP standards after the first or second six-month BCP assignment?",
          reference: {
            text: "MCO 6110.3A with Change 3, encl 1, par 4f(3)-(5)",
          },
        },
        {
          number: "0118",
          text: "Does the unit properly remove Marines from the BCP who meet established weight or body composition standards?",
          reference: {
            text: "MCO 6110.3A with Change 3, encl 1, par 4f(1)-(2), par 7a&b(5)",
          },
        },
        {
          number: "0119",
          text: "Does an FFI or CPTR manage and maintain Body Composition Evaluation (BCE) documentation, to include medical evaluation forms and SemperFit Basic/Advanced Fitness Course?",
          reference: {
            text: "MCO 6110.3A with Change 3, encl 1, par 2(c)4d, 2c(6)(7)",
          },
        },
      ],
    },
  ],
};

// Casualty Affairs Checklist Data
export const casualtyAffairsChecklist: FACChecklistData = {
  slug: "casualty-affairs",
  applicabilityNote:
    "This checklist is applicable to all commands down to the battalion, squadron, and I&I level.",
  revisedDate: "March 21, 2025",
  sme: {
    name: "Master Sergeant Jenny Cartagena",
    email: "jenny.cartagena@usmc.mil",
    phone: "(703) 784-9512",
  },
  subsections: [
    {
      id: "01",
      title: "General",
      questions: [
        {
          number: "0101",
          text: "Does the command have a Casualty Assistance Command Representative (CACR) appointed in writing?",
          reference: {
            text: "MCO 3040.4, chap 1, par 2g; chap 2, par 3",
          },
        },
        {
          number: "0102",
          text: "Is the CACR maintaining Casualty Assistance Calls Officer (CACO) annual training status rosters of eligible SNCOs and Officers, and training rosters of authorized casualty reporting personnel?",
          reference: {
            text: "MCO 3040.4, chap 2, par 3a(5-6)",
          },
        },
        {
          number: "0103",
          text: "Does the command have a process in place that ensures all personnel have made an election or verified/updated their SGLI beneficiary in SOES?",
          reference: {
            text: "MARADMIN 076/22",
          },
        },
        {
          number: "0104",
          text: "Is the command ensuring that all Marines update information and elections on the DD Form 93/Record of Emergency Data (RED)?",
          reference: {
            text: "MCO 3040.4, par 4.c(8)(b)",
          },
        },
        {
          number: "0105",
          text: "Is the CACR documenting the telephonic contact with the HQMC Casualty Section (MFPC) prior to releasing a Personnel Casualty Report (PCR) and submitting the PCR to MFPC within one hour of the voice notification?",
          reference: {
            text: "MCO 3040.4, chap 2, par 4a and 5a; chap 3, par 1b and 4a",
          },
        },
        {
          number: "0106",
          text: "Is the CACR familiar with and properly submitting PCRs of the type, status, and categories of casualties reported, to include mass casualty incidents and deceased dependents?",
          reference: {
            text: "MCO 3040.4, chap 3, sect 2, figures 3-1 and 3-2",
          },
        },
        {
          number: "0107",
          text: "Is the CACR familiar with and properly submitting both initial and supplemental PCRs regarding the circumstances under which a Marine is DUSTWUN, and the timelines associated with this status?",
          reference: {
            text: "MCO 3040.4, chap 8, figure 3-13",
          },
        },
        {
          number: "0108",
          text: "Is the CACR preparing, submitting, and maintaining progress reports regarding the location and status of hospitalized Marines, if reportable, to HQMC Casualty (MFPC)?",
          reference: {
            text: "MCO 3040.4, chap 3",
          },
        },
        {
          number: "0109",
          text: "Is the CACR familiar and complying with the reference in regards to reporting and classifying Special Patient cases?",
          reference: {
            text: "MCO 3040.4, chap 1, par 2iii",
          },
        },
        {
          number: "0110",
          text: "Can the CACR explain the Accelerated Benefit Option (ABO) and its applicability to Marines who are diagnosed as terminally ill?",
          reference: {
            text: "MCO 3040.4, chap 7, sect 2, par 9; MCO 1741.8, chap 5",
          },
        },
        {
          number: "0111",
          text: "Can the CACR explain the procedures and responsibilities for notification to the next of kin for Marines who are ill/injured?",
          reference: {
            text: "MCO 3040.4, chap 4, sect 2, par 2",
          },
        },
        {
          number: "0112",
          text: "Can the CACR explain the process for initiating Invitational Travel Authorizations (ITAs) for designated individuals traveling to the bedside of a seriously ill or injured Marine and explain who is eligible for ITAs to the burial of a deceased Marine and the limitations on reimbursements?",
          reference: {
            text: "MCO 3040.4, chap 7, sect 2, pars 6 and 28",
          },
        },
        {
          number: "0113",
          text: "Can the CACR explain the process and limitations for issuance of Invitational Travel Authorizations (ITAs) to eligible family members to attend unit memorial services?",
          reference: {
            text: "MCO 3040.4, chap 7, sect 2, par 6b; MARADMIN 500/10",
          },
        },
        {
          number: "0114",
          text: "Can the CACR identify the required documents that must be emailed to HQMC Casualty (MFPC) in all death cases?",
          reference: {
            text: "MCO 3040.4, chap 2, par 5e; chap 8, sect 3, par 1",
          },
        },
        {
          number: "0115",
          text: "Is the command properly forwarding Medical and Dental records for deaths occurring in a theater of combat operations to the Dover Port Mortuary?",
          reference: {
            text: "MCO 3040.4, chap 2, par 5j",
          },
        },
        {
          number: "0116",
          text: 'Can the CACR provide evidence of coordination with the IPAC to properly "drop from the rolls" deceased Marines and validate completion?',
          reference: {
            text: "MCO P1070.12K w/ CH 1, (IRAM) chap 4; table 4-2",
          },
        },
        {
          number: "0117",
          text: "Does the CACR have procedures in place to ensure the maintenance, inventory, and shipping of a deceased Marine's personal effects?",
          reference: {
            text: "MCO 3040.4, chap 8, sect 2, par 5a; chap 8, sect 3, par 4a and MCO 4400.201 Volume 13, chap 15-17",
          },
        },
        {
          number: "0118",
          text: "Is the CACR familiar with death benefits payable to the survivors of deceased Marines, specifically: death gratuity, arrears of pay, life insurance, and burial and interment benefits?",
          reference: {
            text: "MCO 3040.4, chap 4, sect 3, sect 4; chap 7; figure 7-1",
          },
        },
        {
          number: "0119",
          text: "Is the command aware of the benefits and entitlements associated with Marines who have died within 120 days and/or are on the T/PDRL?",
          reference: {
            text: "MCO 3040.4, chap 7, sect 1, par 5a; figure 4-1",
          },
        },
        {
          number: "0120",
          text: "Is the command generating and delivering unit-level commander condolence letters to the appropriate NOK, as required?",
          reference: {
            text: "MCO 3040.4, chap 8, sect 4",
          },
        },
        {
          number: "0121",
          text: "Is the command ensuring the generation of PCS travel orders to authorized family members of deceased Marines?",
          reference: {
            text: "JTR, Chap 5, sect 051104; MCO 3040.4, chap 7, sect 2, par 24; PAA 1-17",
          },
        },
        {
          number: "0122",
          text: "Is the command conducting preliminary inquiries and/or command investigations, when warranted into the deaths and injuries/illnesses of Marines, as well as submitting and maintaining supplemental PCRs upon the initiation of command investigations and monthly supplemental PCRs thereafter until completion?",
          reference: {
            text: "MCO 3040.4, chap 2, par 4g and 5l; chap 3, sect 2, par 2b; JAGINST 5800.7F",
          },
        },
        {
          number: "0123",
          text: "Is the command submitting and maintaining supplemental PCRs regarding the death investigation, including final summaries after the completion of a command investigation within 24 hours, and endorsements to HQMC (MFPC) to ensure delivery to NOK?",
          reference: {
            text: "MCO 3040.4, chap 3, sect 2, par 2e(4); chap 8, sect 3, par 7d",
          },
        },
        {
          number: "0124",
          text: "Is the command archiving copies of PCRs for at least six years in accordance with the Freedom of Information Act (FOIA) requirements?",
          reference: {
            text: "MCO 3040.4, chap 3, sect 2, par 1",
          },
        },
        {
          number: "0125",
          text: "Is the CACR ensuring assigned CACOs are submitting the initial Online CACO Report within 30 days of assignment and briefing the unit commander on the status of the Online CACO Report weekly?",
          note: "https://www2.manpower.usmc.mil/cacov3/",
          reference: {
            text: "MCO 3040.4, chap 3, sect 1; chap 4, sect 1, par 3p",
          },
        },
      ],
    },
  ],
};

// Defense Travel System (DTS) Checklist Data
export const dtsChecklist: FACChecklistData = {
  slug: "dts",
  applicabilityNote: "This checklist applies to all levels and types of commands.",
  revisedDate: "March 1, 2025",
  sme: {
    name: "Mrs. Angela Howard",
    email: "omb_hqmc_pr_rff_dts_gtcc@usmc.mil",
  },
  subsections: [
    {
      id: "01",
      title: "Lead Defense Travel Administrator (LDTA)",
      questions: [
        {
          number: "0101",
          text: "Does the LDTA pull, reconcile and retain the Complete Traveler Information List report monthly as required?",
          note: "Header information must remain unaltered. Reconciliation includes ensuring permissions and accesses align with DD Form 577 appointments, are consistent with separations of duties, and ensuring no duplicate or missing EFT information. Report must be annotated of discrepancies and actions taken. Retention is for current plus previous calendar year.",
          reference: {
            text: "MCO 4650.39A Ch. 1, par 2.f; Ch. 2, par 2; Ch. 6, par 1-2",
          },
        },
        {
          number: "0102",
          text: "Are all necessary or required roles (LDTAs, Organizational Defense Travel Administrators (ODTA), Finance Defense Travel Administrators (FDTA), Budget Defense Travel Administrators (BDTA), Authorizing Officials (AO), Non-DTS Entry Agents (NDEA), Routing Officials (RO), Debt Management Monitors (DMM), and Post Payment Review Officials (PPRO)) appropriately appointed electronically via DD Form 577.",
          note: "Appointments must be completed using the most current DD577 form version at the time of appointment. Pen changes are not authorized. DD Form 577s must be digitally signed by commander or designated representative and the appointee. Personnel with group or organization access outside their designated organization must provide justification. DD Form 577s must be retained for 10 years. Assumption of Command letters and Delegation of Authority documents must be retained on file.",
          reference: {
            text: "DoD DTS Regulations, sect 0303; DoD FMR Vol 5, Ch 1, par 3.5.3; Ch 5, sect 4.0; SECNAV-M 5216.5 Ch 2; MCO 4650.39A, par 4.b.(6)(b); Ch. 2, sects 2-3; Ch. 11, par 2.a.",
          },
        },
        {
          number: "0103",
          text: "Is the LDTA submitting the AO DD577 to DFAS via e-mail?",
          note: "Provide email with the AO name(s) submitted to DFAS.",
          reference: {
            text: "DoD FMR Vol 5, Ch. 5, par 4.2.1.1; MCO 4650.39a, Ch. 1, par 2.c.",
          },
        },
        {
          number: "0104",
          text: "Have by-name standard naval correspondence waiver approval letters been signed by the first O-6 or GS-15 in the supervisory chain for the two authorized waivable items: 1) AOs in a grade lower than SNCO or GS-7; 2) LDTAs and/or ODTAs placed in routing lists?",
          note: "Waiver(s) must be retained and available for review.",
          reference: {
            text: "MCO 4650.39A, par 4.c.",
          },
        },
        {
          number: "0105",
          text: "Have the LDTA and AO completed the initial Certifying Officer Legislation (COL) training prior to appointment and the COL refresher annually?",
          note: "Annual refresher training must be completed by the end of the calendar year. Certificates must be provided to the inspector. LDTAs (except contractors) must complete COL training due to the Approval Override authority.",
          reference: {
            text: "DoD DTS Regulations, par 030301, B; DoD FMR Vol 5, Ch. 5, par 3.4.1.2.",
          },
        },
        {
          number: "0106",
          text: "Does the LDTA ensure the appointees complete the required training within two weeks of their appointment?",
          note: "Appointments may be granted however training completion is mandatory prior to granting system permissions and accesses. Annual refresher training must be completed by the end of the calendar year. Remove permission/accesses for non-compliant personnel. Training certificates must be available for review.",
          reference: {
            text: "DoD DTS Regulations, par 030302.D; sect 0304; DoD FMR Vol 5, Ch. 5, par 3.5.2; MCO 4650.39A Ch. 2, par 3.",
          },
        },
        {
          number: "0107",
          text: "Does the LDTA ensure the Marine Corps Distribution Management Office (DMO) reviewers are inserted into the appropriate DMO authorizations' routing list?",
          note: "The LDTA is responsible for coordinating with DMO when this function is completed externally.",
          reference: {
            text: "MCO 4650.39A Ch. 1, par 2.j.",
          },
        },
        {
          number: "0108",
          text: "Does the LDTA have Marine Corps Read Only Access (ROA) requests for their organizations and revalidate the access once the form expires?",
          note: "The maximum authorized access period is one year. A new form must be submitted for ROA that is required past the expiration period indicated on the form. Forms must be provided for review.",
          reference: {
            text: "MCO 4650.39A Ch.2, par 2.l.",
          },
        },
        {
          number: "0109",
          text: "Does the DMM reconcile and retain the reports for current plus previous calendar year as required: 1) Debt Management Report weekly to identify DTS travel debts requiring their action? 2) Approved Status Report weekly to identify Accounts Receivable (A/R) rejects?",
          note: "1) DMMs must complete follow-on actions to include but not limited to contacting travelers, payroll collections, out of service debt and waiver processing. 2) Reconciliation includes verifying information for accuracy, notification records, report annotations and actions taken to resolve discrepancies. Do not remove system header data from the report.",
          reference: {
            text: "MCO 4650.39A Ch. 6, par 6; Ch. 9.",
          },
        },
        {
          number: "0110",
          text: "Does the FDTA reconcile the Approved Status Report every two weeks (bi-weekly/bi-monthly) and retain the report for current plus previous calendar year as required?",
          note: "Reconciliation includes verifying all rejects, report annotations and actions taken to resolve rejects and associated notification records. Do not remove system header data from the report.",
          reference: {
            text: "MCO 4650.39A Ch. 6, par 4.a.",
          },
        },
      ],
    },
    {
      id: "02",
      title: "Organization Defense Travel Administrators (ODTA)",
      questions: [
        {
          number: "0201",
          text: "Does the ODTA pull, reconcile and retain the Complete Traveler Information List report monthly as required?",
          note: "Reconciliation includes verifying and annotating the following: 1) information for accuracy; Profile information, SSN, address, unit information, GTCC duplication, EFT data, etc. 2) Ensuring permission levels are consistent with DD Form 577 appointments and that appropriate separation of duties are maintained.",
          reference: {
            text: "MCO 4650.39A, Ch. 1, par 3.b.,f.; Ch. 2, par 2; Ch. 6, par 3.d.",
          },
        },
        {
          number: "0202",
          text: "Are all necessary or required roles (ODTAs, FDTAs, BDTAs, AOs, NDEAs, ROs and DMMs) appropriately appointed electronically via DD Form 577?",
          note: "Appointments must be completed using the most current DD577 form version at the time of appointment. Pen changes are not authorized. DD Form 577s must be digitally signed by commander or designated representative and the appointee. Personnel with group or organization access outside their designated organization must provide justification. DD Form 577s must be retained for 10 years. Assumption of Command letters and Delegation of Authority documents must be retained on file.",
          reference: {
            text: "DoD DTS Regulations, 0303; DoD FMR, Vol 5, Ch. 5, par 4.0; SECNAV-M 5216.5 Ch. 2; MCO 4650.39A, par 4.b.(6)(b)",
          },
        },
        {
          number: "0203",
          text: "Is the ODTA inserting the AOs and ROs into the appropriate authorization and voucher routing list?",
          note: "Conduct routing list maintenance during the monthly Complete Traveler Information List review.",
          reference: {
            text: "MCO 4650.39A, Ch.1, par 3.d.",
          },
        },
        {
          number: "0204",
          text: "Has the commander or designated representative signed the by-name standard naval correspondence waiver approval letters for the two authorized waivable items for personnel that are: 1) AOs in a grade lower than SNCO or GS-7; 2) LDTAs and ODTAs placed in routing lists?",
          note: "Waiver(s) must be retained and available for review.",
          reference: {
            text: "MCO 4650.39A, par 4.c.",
          },
        },
        {
          number: "0205",
          text: "Have the AOs completed the initial Certifying Officers Legislation (COL) training prior to appointment and the COL refresher annually?",
          note: "Annual refresher training must be completed by the end of the calendar year. Certificates must be provided for review.",
          reference: {
            text: "DoD DTS Regulations, 030301.B; DoD FMR, Vol 5, Ch. 5, par 3.4.1.2.",
          },
        },
        {
          number: "0206",
          text: "Does the ODTA receive and retain the appointees required training within two weeks of their appointment?",
          note: "DAO annual refresher training must be completed by the end of the calendar year. Notify LDTA to remove permission/accesses for non-compliant personnel. Traveler and NDEA training must be completed every three years. Training certificates must be available for review. This question does not encompass AO initial and refresher COL training.",
          reference: {
            text: "DoD DTS Regulations, par 030302.D, sect 0304; DoD FMR Vol 5, Ch. 5, par 3.5.2",
          },
        },
        {
          number: "0207",
          text: "Has the commander established check-in/check-out procedures to ensure that command personnel are checking-in/out with the ODTA?",
          note: "The ODTA must create or receive DTS profiles into the designated organization(s). Verify command personnel rosters such as alpha rosters, HR civilian rosters, morning reports, inbound rosters, etc. against the DTS profiles. Annotate the differences and any corrective action required. The ODTA must verify there are no outstanding travel advances, unsettled authorizations, vouchers, or debt in DTS prior to transfer/separation.",
          reference: {
            text: "MCO 4650.39A, par 4.b.(6)(d); Ch. 3, par 3.",
          },
        },
        {
          number: "0208",
          text: "Does the ODTA reconcile the Unsubmitted Voucher Report weekly and retain the report for current plus previous calendar year as required? Is the ODTA notifying the traveler, AO and Agency Program Coordinator (APC) to verify travelers are submitting their travel vouchers within five business days after the completion of travel?",
          note: "The ODTA must provide evidence of notifying the AO and APC of outstanding travel vouchers to assist with timely settlement.",
          reference: {
            text: "MCO 4650.39A, Ch.6, par 3.a.; par 5.a.",
          },
        },
        {
          number: "0209",
          text: "Does the FDTA reconcile the Approved Status Report every two weeks (bi-weekly/bi-monthly) and retain the report for current plus previous calendar year as required?",
          note: "Reconciliation includes verifying all rejects, report annotations, actions taken to resolve rejects, correspondence, and notification records. Do not remove system header data from the report. The FDTA must demonstrate the validation process.",
          reference: {
            text: "MCO 4650.39A, Ch.1, par 4.e.; Ch.6, par 4.a.; Ch.11, par 2.b.(5)",
          },
        },
        {
          number: "0210",
          text: "Are travelers submitting their vouchers within 5 business days of return from travel?",
          note: "The voucher must be created and signed within the specified period.",
          reference: {
            text: "MCO 4650.39A, Ch.1, par 5.a.(2)(d); par 11.d",
          },
        },
        {
          number: "0211",
          text: "Are vouchers routed to their servicing Disbursing or Finance Office for approval within three business days after the traveler signs the voucher?",
          note: "The only exceptions are those vouchers routed to Formal School Training Support (FSTS) Office. Commands should use the Route Status Report as a tool to monitor routing and documents pending action over three business days.",
          reference: {
            text: "MCO 4650.39A, Ch.1, par 5.b.2",
          },
        },
      ],
    },
  ],
};

// Directives Management Checklist Data
export const directivesManagementChecklist: FACChecklistData = {
  slug: "directives-management",
  applicabilityNote:
    "This checklist applies to ALL commands. Directives Management is the assurance that promulgation of policy maintains compliance with federal statutes and policy of higher authority, policy maintains currency, and ensures appropriate publication/accessibility by command personnel.",
  revisedDate: "September 30, 2025",
  sme: {
    name: "Ms. Amaya Ashe",
    email: "smb_hqmc_directives@usmc.mil",
    phone: "(703) 695-8927",
  },
  subsections: [
    {
      id: "01",
      title: "Directives Management (applies to all commands)",
      questions: [
        {
          number: "0101",
          text: "Has the command appointed in writing a Directives Control Point (DCP) to manage and administer the command's Directives (Policy) Program?",
          reference: {
            text: "MCO 5215.1K w/Admin CH-3, par 4b(2)(d)9, and Chap 1, par 8",
          },
        },
        {
          number: "0102",
          text: "Has the command established a Directives Management Program (i.e., policy directive or procedures outlining the staffing process and review cycle of directives)?",
          note: "Template directive available on ARDB public website.",
          reference: {
            text: "MCO 5215.1K w/Admin CH-3, par 4a(1)(b)2, par 4a(2)(e), and par 4b(2)(d)9",
          },
        },
        {
          number: "0103",
          text: "Does the command have any directives that have reached their 9-year anniversary without reissuance (i.e., revision)?",
          note: "A full revision of the order in its entirety is required every 9 years; a substantial change and/or administrative change does not restart the length of the lifecycle nor extend the lifecycle of the order. Directives reaching a 9-year anniversary without reissuance may be certified as current for an additional year by the signing authority.",
          reference: {
            text: "MCO 5215.1K w/Admin CH-3, par 4b(2)(d)2",
          },
        },
        {
          number: "0104",
          text: "Is the command using bulletins that are over 12 months old?",
          reference: {
            text: "MCO 5215.1K w/Admin CH-3, Chap 1, par 3c, and Chap 3, par 15g",
          },
        },
        {
          number: "0105",
          text: 'Are command issued directives (orders and bulletins) published in the correct format using the command\'s letterhead and correct paragraph elements ("SMEAC")?',
          reference: {
            text: "MCO 5215.1K w/Admin CH-3, Chap 1, par 18a(2)(a), and Chap 2, par 3-7",
          },
        },
        {
          number: "0106",
          text: 'Are command directives being reviewed annually via NAVMC 10974 form, "Directives Review"?',
          note: "This review is to evaluate necessity, validate currency, track consistency with Marine Corps policy, and ensure laws and statutory authority are being followed.",
          reference: {
            text: "MCO 5215.1K w/Admin CH-3, par 4a(2)(f), par 4b(2)(d)1-10, Chap 1, par 14a-c",
          },
        },
      ],
    },
  ],
};

// Map of all FAC checklists
const facChecklists: Partial<Record<FACSlug, FACChecklistData>> = {
  pes: pesChecklist,
  "career-planning": careerPlanningChecklist,
  "body-composition": bodyCompositionChecklist,
  "casualty-affairs": casualtyAffairsChecklist,
  dts: dtsChecklist,
  "directives-management": directivesManagementChecklist,
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
