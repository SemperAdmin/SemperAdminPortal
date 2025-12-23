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

// Government Travel Charge Card Program (GTCCP) Checklist Data
export const gtccChecklist: FACChecklistData = {
  slug: "gtcc",
  applicabilityNote:
    "This checklist applies to all levels and types of commands. It is divided into 3 subsections: Individually Billed Account (IBA), Centrally Billed Account/Unit Travel Card (CBA/UTC), and Visa IntelliLink Compliance Management (VICM).",
  revisedDate: "November 3, 2025",
  smes: [
    {
      name: "MSgt Andrea M. Davis",
      email: "andrea.davis@usmc.mil",
      phone: "(703) 784-9191",
    },
    {
      name: "Jeffrey S. Lee",
      email: "Jeffrey.s.lee.civ@usmc.mil",
      phone: "(703) 432-9319",
    },
  ],
  subsections: [
    {
      id: "01",
      title: "GTCCP Individually Billed Account (IBA)",
      questions: [
        {
          number: "0101",
          text: "Has the commander appointed a primary and alternate Agency Program Coordinator (APC) for the GTCC program in writing, using the required APC Appointment Letter template outlined in the DoD GTCC Regulations, and provided a copy to the next higher-level APC to grant access to CitiManager EAS?",
          note: "Current APC appointment letters must be updated using this template no later than December 31, 2025, and renewed every three years thereafter or whenever there is a change in the appointing official. The APC must retain copies of the Delegation of Authority letters or \"By Direction\" documentation granting appointing authority from the commander.",
          reference: {
            text: "DoD GTCC Regulations (April 2025), par. 040204C, Annex 10; MCO 4600.40B, par. 4b(2)(c) and appendix B par. 10(a).",
          },
        },
        {
          number: "0102",
          text: 'Has the mandatory APC training, "Travel Card Program Management (APC Course)," been completed prior to appointment and retained on file for all appointed APCs? Has refresher training been completed every three years thereafter?',
          reference: {
            text: "DoD GTCC Regulations (April 2025), par. 040801; MCO 4600.40B, encl 1, appendix B, par 13.",
          },
        },
        {
          number: "0103",
          text: "Are all Read-Only Access (ROA) account holders for GTCC information properly appointed using the required ROA Appointment Letter template outlined in the DoD GTCC Regulations, and validated every six months by the designated personnel?",
          note: "ROA appointment letters must be updated as of June 30, 2025, and renewed every three years thereafter or whenever there is a change in the appointing official.",
          reference: {
            text: "DoD GTCC Regulations (April 2025), par. 040204D; Annex 12",
          },
        },
        {
          number: "0104",
          text: "Do the primary and alternate APCs have access to the card provider's Electronic Access System (EAS) and the reporting module?",
          note: "All APCs must demonstrate the ability to log in to and utilize the EAS and reporting module.",
          reference: {
            text: "DoD GTCC Regulations (April 2025), par. 041101",
          },
        },
        {
          number: "0105",
          text: "Are non-cardholder accounts (APC and ROA) deactivated in CitiManager and removed from hierarchy-level access in Transaction Management immediately upon transfer, separation, or reassignment of duties?",
          reference: {
            text: "DoD GTCC Regulations (April 2025), par. 040204C; MCO 4600.40B, par. 4b.(3)(f).",
          },
        },
        {
          number: "0106",
          text: "Has the command implemented standardized check-in and check-out procedures to ensure that all personnel check in and out with the APC?",
          note: "APCs must demonstrate the check-in and check-out process by ensuring cardholder accounts are transferred in immediately upon check-in, account status is verified during check-out, and cardholders are informed of proper card use while executing PCS.",
          reference: {
            text: "DoD GTCC Regulations (April 2025), par. 041104; par 041105; MCO 4600.40B, par. 4b(2)(e); appendix B, par. 9a(1); par. 9(2).",
          },
        },
        {
          number: "0107",
          text: "Has the APC closed travel card accounts upon a cardholder's retirement, separation, termination, or death?",
          note: "APCs must demonstrate that the cardholder's supervisor was notified of any outstanding balance prior to final separation.",
          reference: {
            text: "DoD GTCC Regulations (April 2025), par. 041106; MCO 4600.40B, encl 1, appendix B, par. 9b(2); par. 9b(3).",
          },
        },
        {
          number: "0108",
          text: "Does the APC maintain a Statement of Understanding (SOU, DD Form 3120) for all cardholders? The SOU is required upon initial card issuance, upon arrival at a new command, and every three years thereafter.",
          note: "A properly completed DD Form 3120 SOU must include all blocks initialed or checked, the APC's name and phone number, the applicant's printed name and signature, the supervisor's printed name and signature, and the date. Digital signatures may be used in place of manual signatures and dates.",
          reference: {
            text: "DoD GTCC Regulations (April 2025), par. 040802; par. 040901; MCO 4600.40B, encl 1, appendix B, par. 9(2)a(3)b.",
          },
        },
        {
          number: "0109",
          text: 'Does the APC maintain a "Programs & Policies – Travel Card Program (Travel Card 101)" training certificate on file for all cardholders with an open account within their hierarchy level?',
          note: "Travel Card 101 training is required prior to the initial issuance of a card and every three years thereafter.",
          reference: {
            text: "DoD GTCC Regulations (April 2025), par. 040802; MCO 4600.40B, encl 1, appendix B, par. 13.",
          },
        },
        {
          number: "0110",
          text: "Is the APC extracting, properly working, and retaining the required monthly DoD Travel IBA Aging Analysis Summary Report immediately following the monthly cycle and briefing the commander on the command's Dollars Delinquency metrics and program health?",
          note: "Report cycle-based subscription available (NA-06).",
          reference: {
            text: "DoD GTCC Regulations (April 2025), Vol 4, par. 041004; par. 041003; par. 041402E; MCO 4600.40B encl 1, appendix B, par. 4b(4); Ch 1, par. 1, par. 2.",
          },
        },
        {
          number: "0111",
          text: "Is the APC extracting, annotating, and maintaining the required monthly Account Listing Report, ensuring proper accountability of cardholder accounts, accurate profile information, active account status, justification for credit and cash limit increases, notification of credit balances, and review of mission-critical status?",
          note: "Personnel rosters assist in identifying cardholder accounts that need to be added to or removed from the hierarchy.",
          reference: {
            text: "DoD GTCC Regulations (April 2025), par. 041103; par 041402B; par. 041104; par 041306; MCO 4600.40B, encl 1, appendix B, par. 4b(1).",
          },
        },
        {
          number: "0112",
          text: "Is the APC extracting, properly working, and maintaining the required monthly Delinquency Report-Hierarchy?",
          note: "APCs must demonstrate how they reconcile this report. It must include annotations of actions taken to resolve delinquencies, including cardholder notifications and responses with dates, the status of any travel claims contributing to the delinquency, and the estimated resolution date. It is recommended that this report be updated weekly to track progress.",
          reference: {
            text: "DoD GTCC Regulations (April 2025), par. 041402D; MCO 4600.40B encl 1, appendix B, par. 4b(3).",
          },
        },
        {
          number: "0113",
          text: "Has the APC provided the Delinquency Report-Hierarchy (excluding account numbers) to the command security manager to facilitate personnel screening? Additionally, any personnel who have been screened and confirmed by the commanding officer to have misused, abused, or committed fraud must also be reported to the command security manager.",
          reference: {
            text: "DoD Manual 5200.2-R par 11.2; DoD GTCC Regulations (April 2025), par. 040103.",
          },
        },
        {
          number: "0114",
          text: "Does the APC complete and properly distribute all required delinquency notifications at 45, 61, 91, and 121 days past billing to the cardholder and the appropriate supervisor or commander based on the stage of delinquency, and ensure that the cardholder signs and returns the endorsement acknowledging receipt and understanding of the notification?",
          reference: {
            text: "DoD GTCC Regulations (April 2025), par. 041301; par. 041103; MCO 4600.40B, encl 1, chap 2, par. 6b(3); appendix B, par. 5.",
          },
        },
        {
          number: "0115",
          text: "Is the APC extracting, properly working, and maintaining the required monthly Account Activity Text Report, and filing it for the current month plus two years?",
          note: "APCs must annotate the report to demonstrate how it is being reviewed. The unit commander or designated representative (APC) must review at least 25% of accounts with activity to verify that charges were made in conjunction with official travel. The sample size must increase to 50% if any misuse or abuse is suspected.",
          reference: {
            text: "MCO 4600.40B, encl 1, appendix B, par. 4b(2).",
          },
        },
        {
          number: "0116",
          text: "Is the APC notifying the cardholder's supervisor of suspected misuse, abuse, or fraud, and informing the commander as required?",
          note: "APCs must be able to provide the inspector with official documentation of these notifications.",
          reference: {
            text: "DoD GTCC Regulations (April 2025), par. 041005; par. 040103a; MCO 4600.40B, par. 4b(2)(j).",
          },
        },
        {
          number: "0117",
          text: "Is the APC extracting, properly working, and maintaining the required monthly Declined Authorizations Report?",
          note: "APCs must annotate on the report corrective action taken to resolve the decline and follow action taken for attempted misuse, abuse, or fraud.",
          reference: {
            text: "DoD GTCC Regulations (April 2025), par. 041402C.",
          },
        },
        {
          number: "0118",
          text: "Has the command conducted a GTCC program review within the past two years in accordance with applicable regulations, documented and reported any significant weaknesses to the commander and CPM?",
          note: "The current USMC IGMC checklist meets the requirement for the program review.",
          reference: {
            text: "41 USC 1909 (Public Law 112-194), DoD GTCC Regulations (April 2025), par. 041004; MCO 4600.40B, encl 1, ch 1, par. 2.",
          },
        },
        {
          number: "0119",
          text: "Does the APC ensure that all cardholders, command leadership, and subordinate HL APCs are informed of policy and procedure changes to the GTCC Program?",
          note: "The APC must provide proof to the inspector demonstrating how the information is being distributed.",
          reference: {
            text: "MCO 4600.40B, par. 4b(3)(d); par. 4a(2); encl 1, appendix B, par. 13.",
          },
        },
        {
          number: "0120",
          text: "Are GTCC program records, whether in hardcopy, secure electronic format, or an authorized document management system, maintained in a secure location that prevents unauthorized access, clearly marked and protected in accordance with the Privacy Act?",
          reference: {
            text: "DoD GTCC Regulations (April 2025), par. 041103; MCO 4600.40B, par. 4b(2)(k); Appendix B, par. 1b.",
          },
        },
      ],
    },
    {
      id: "02",
      title: "Centrally Billed Account (CBA)/Unit Travel Card (UTC)",
      questions: [
        {
          number: "0201",
          text: "Has the commander appointed a primary and alternate Agency Program Coordinator (APC) for the GTCC program in writing, using the required APC Appointment Letter template outlined in the DoD GTCC Regulations, and provided a copy to the next higher-level APC to grant access to CitiManager EAS?",
          note: "Current APC appointment letters must be updated using this template no later than December 31, 2025, and renewed every three years thereafter or whenever there is a change in the appointing official. The APC must retain copies of the Delegation of Authority letters or \"By Direction\" documentation granting appointing authority from the commander.",
          reference: {
            text: "DoD GTCC Regulations (April 2025), par. 040205, Annex 11",
          },
        },
        {
          number: "0202",
          text: "Has the commander designated Unit Travel Cardholders (UTC) in writing, including the mailing address, telephone number, email address, Centrally Billed Account Number, hierarchy number, and hierarchy level?",
          reference: {
            text: "MCO 4600.40B, ch 3, par. 1b",
          },
        },
        {
          number: "0203",
          text: 'Has the mandatory APC training, "Travel Card Program Management (APC Course)," been completed prior to appointment and retained on file for all appointed APCs? Has refresher training been completed every three years thereafter?',
          reference: {
            text: "DoD GTCC Regulations (April 2025), par. 040801; MCO 4600.40B, encl 1, appendix B, par. 13.",
          },
        },
        {
          number: "0204",
          text: "Does the APC notify the CPM immediately upon the transfer, separation, or reassignment of APCs or cardholders who are no longer assigned to the command?",
          note: "The APC must be able to provide the inspector with proof of notification.",
          reference: {
            text: "MCO 4600.40B, encl 1, appendix C, par. 18.",
          },
        },
        {
          number: "0205",
          text: "Is the commander notified of cardholders suspected of misuse, abuse, or fraud on their account?",
          note: "The APC must be able to provide the inspector with official written proof of notification.",
          reference: {
            text: "DoD GTCC Regulations (April 2025), par. 040103A; MCO 4600.40B, par. 4b(2)(j).",
          },
        },
        {
          number: "0206",
          text: "Are GTCC program records, whether in hardcopy, secure electronic format, or an authorized document management system, maintained in a secure location that prevents unauthorized access, clearly marked and protected in accordance with the Privacy Act?",
          note: "Plastic cards must be stored in a limited access safe when not in use.",
          reference: {
            text: "DoD GTCC Regulations (April 2025), par. 041103; MCO 4600.40B, par. 4b(2)(k); MCO 4600.40B, encl 1, appendix C, par. 20b.",
          },
        },
        {
          number: "0207",
          text: 'Are Approving/Certifying Officials (AO/CO) properly appointed using a DD Form 577, "Appointment/Termination Record – Authorized Signature," signed by the commander or designee and maintained on file?',
          note: "The appointment must specify which CBA accounts the AO/CO is responsible for certifying.",
          reference: {
            text: "DOD 7000.14-R, Vol 5, ch 5, par. 4.1; MCO 4600.40B, encl 1, appendix C, par. 4.",
          },
        },
        {
          number: "0208",
          text: "Does the commander or appointed designee maintain proper separation of duties among CBA charge card program officials (AO/CO, APC, and cardholders)?",
          note: "The APC and AO/CO cannot also serve as the cardholder.",
          reference: {
            text: "MCO 4600.40B, encl 1, appendix C, par. 20a; MCO 4600.40B, encl 1, appendix C, par. 21.",
          },
        },
        {
          number: "0209",
          text: "Does the commander or appointed designee retain all required payment records and substantiating documents, including travel orders, itemized receipts, certified statements, contractor invoices, dispute documentation, and any audit-supporting materials, for a minimum of two years to support official travel and payment verification?",
          reference: {
            text: "MCO 4600.40B, encl 1, appendix C, par. 17; MCO 4600.40B, encl 1, appendix C, par. 7(a-c)",
          },
        },
        {
          number: "0210",
          text: "Does the commander or appointed designee ensure that all charges placed on a CBA are authorized and comply with DoD travel regulations?",
          note: "The inspector will review a sample of the cardholder's statements to verify that the charges align with DoD travel regulations.",
          reference: {
            text: "MCO 4600.40B, encl 1, appendix C, par. 7(a-c).",
          },
        },
        {
          number: "0211",
          text: "Is the APC extracting, properly working, and maintaining the required monthly Declined Authorization Report, pulled after the completion of all account billing cycles (cycle load complete on the 28th of each month), with annotated corrective actions for authorized transactions and documentation of any attempted misuse, abuse, or fraud, and retaining copies for the current year plus the previous two years?",
          reference: {
            text: "DoD GTCC Regulations (April 2025), par. 041403A; MCO 4600.40B, encl 1, appendix B, par. 10b",
          },
        },
        {
          number: "0212",
          text: "Is the APC extracting, properly working, and maintaining the required monthly CBA Delinquency Report, pulled after the completion of all account billing cycles (cycle load complete on the 28th of each month), with annotated reasons for each delinquency and documented steps taken to resolve them, and retaining copies for the current year plus the previous two years?",
          reference: {
            text: "DoD GTCC Regulations (April 2025), par. 041403B; MCO 4600.40B, encl 1, appendix B, par. 10b",
          },
        },
        {
          number: "0213",
          text: "Is the APC extracting, analyzing, and maintaining the required monthly DoD Travel CBA Aging Analysis Summary Report, pulled after the completion of all account billing cycles (cycle load complete on the 28th of each month), identifying summary-level delinquency data that contributes to Component performance metrics (GREEN: 0.00%–1.00%, YELLOW: 1.01%–2.00%, RED: >2.00%), and retaining copies for the current year plus the previous two years?",
          reference: {
            text: "DoD GTCC Regulations (April 2025), par. 041403C, par. 041003B; MCO 4600.40B, encl 1, appendix B, par. 10b;",
          },
        },
        {
          number: "0214",
          text: "Has the command conducted a GTCC program review within the past two years in accordance with applicable regulations, documented and reported any significant weaknesses to the commander and CPM?",
          note: "The current USMC IGMC checklist meets the requirement for the program review.",
          reference: {
            text: "DoD GTCC Regulations (April 2025), par. 041403C, 041003B; MCO 4600.40B, encl 1, appendix B, par. 10b;",
          },
        },
      ],
    },
    {
      id: "03",
      title: "Visa IntelliLink Compliance Management (VICM)",
      questions: [
        {
          number: "0301",
          text: 'Has the GTCC APC at HL3 and HL4 obtained access to Visa IntelliLink Compliance Management (VICM) and completed the "Programs & Policies – VICM" training in TraX, as required?',
          note: "Refresher training is required every three years.",
          reference: {
            text: "DoD GTCC Regulations (April 2025), par. 0410502.",
          },
        },
        {
          number: "0302",
          text: "Is the APC at HL3 and HL4 conducting monthly reviews in Visa IntelliLink Compliance Management (VICM) by using the Analytics Module to evaluate chart results and initiate cases for any flagged transactions that indicate potential misuse, abuse, or fraud?",
          reference: {
            text: "DoD GTCC Regulations (April 2025), par. 0410502A and B; MARADMIN 115/19.",
          },
        },
        {
          number: "0303",
          text: "Is the APC forwarding the Visa IntelliLink transaction questionnaire to the appropriate cardholder or lowest-level APC based on hierarchy, and ensuring its accurate and complete response, either via the VICM email function or manually when automation is unavailable?",
          note: "If the VICM email function is not operational, a manual questionnaire may be used to coordinate with the cardholder or document the APC's response.",
          reference: {
            text: "MARADMIN 115/19",
          },
        },
        {
          number: "0304",
          text: "Has the APC documented the commander's actions or planned response in Question 7 of the VICM questionnaire and related comments and ensured the commander is notified of suspected misuse or abuse?",
          note: "During routing, HL3 or HL4 APCs must confirm that Question 7 is answered and ensure all comments in VICM are accurate. Responses must note whether the commander was notified, and if not why, and detail any resulting or planned actions.",
          reference: {
            text: "DoD GTCC Regulations (April 2025), par. 041005; par. 040103a; MCO 4600.40B, par. 4b(2)(j). MARADMIN 115/19",
          },
        },
        {
          number: "0305",
          text: "Is the APC at HL3 and HL4 conducting monthly follow-up and closing all pending actions related to flagged transactions and open cases from the previous month within VICM?",
          note: "The Case Statuses chart in the Compliance Case Search module is a key tool for tracking and managing these actions.",
          reference: {
            text: "DoD GTCC Regulations (April 2025), par. 0410502C",
          },
        },
        {
          number: "0306",
          text: "Is the APC at HL3 and HL4 entering case notes and disposition decisions into VICM for any misuse or potential misuse transaction activity reported by subordinate levels or identified outside of VICM?",
          note: "APCs must ensure that all suspected misuse, abuse, or fraud identified outside of VICM is properly documented and dispositioned within the system.",
          reference: {
            text: "DoD GTCC Regulations (April 2025), par. 0410502D",
          },
        },
        {
          number: "0307",
          text: "Has the APC notified their HL3 APC or CPM when VICM access is no longer required due to transfer, resignation, separation, retirement, or termination?",
          note: "VICM user access will be validated against the current APC roster to ensure proper deactivation.",
          reference: {
            text: "DODI 8500.01 encl 3, sec 21.",
          },
        },
      ],
    },
  ],
};

// Leave, Liberty and Administrative Absence Checklist Data
export const leaveLibertyChecklist: FACChecklistData = {
  slug: "leave-liberty",
  applicabilityNote: "This checklist is applicable to all O-5 and O-6 Level Commands.",
  revisedDate: "September 3, 2025",
  smes: [
    {
      name: "Capt Marquale Coleman",
      email: "SMB_HQMC_MPO@usmc.mil",
      phone: "(703) 784-9371",
    },
    {
      name: "CWO5 Wojciech Faryniarz",
      email: "SMB_HQMC_MPO@usmc.mil",
      phone: "(703) 432-9083",
    },
  ],
  subsections: [
    {
      id: "01",
      title: "Leave and Liberty",
      questions: [
        {
          number: "0101",
          text: "Has the command published a directive or established a program on leave and liberty?",
          reference: {
            text: "DoDI 1327.06 Sect 3.1; MCO 1050.3J, chap 4, par 1",
          },
        },
        {
          number: "0102",
          text: "Is lost leave restored as special leave accrual (SLA) when Marines were eligible and approved for SLA?",
          reference: {
            text: "DoDI 1327.06 Sect 3.8; MCO 1050.3J, chap 2, par 9",
          },
        },
        {
          number: "0103",
          text: "Have internal controls for check-out and check-in procedures been established to ensure requests, approvals, execution, and close out of all leave/PTAD is completed in MOL?",
          reference: {
            text: "MCO 1050.3J, chap 2, par 5; chap 3, par 1a and 1b; chap 4, par 8",
          },
        },
        {
          number: "0104",
          text: "Are Marines granted PTAD only for the purposes permitted in the reference?",
          reference: {
            text: "DoDI 1327.06 Sect 4.4",
          },
        },
        {
          number: "0105",
          text: "Are periods of absence over leave and absent without leave, when excused as unavoidable, charged as annual leave when appropriate?",
          reference: {
            text: "DoDI 1327.06 Sect 5.2; MCO 1050.3J, chap 2, par 20",
          },
        },
        {
          number: "0106",
          text: "Are chargeable leave periods being reported on MOL or UD? (check morning reports for individuals marked as on leave with no corresponding approved leave request in MOL and that check-out and check-in were completed)",
          reference: {
            text: "MCO 1050.3J, chap 4, par 7b; MCTFSPRIUM, par 70101",
          },
        },
        {
          number: "0107",
          text: "Does the command have procedures to ensure Marines are not being approved for Active-Duty Parental Leave for no more than 84 days?",
          reference: {
            text: "DoDI 1327.06 Sect 3.11.c, and MARADMIN 051/23",
          },
        },
        {
          number: "0108",
          text: "Is the command ensuring that Marines are executing their Active-Duty Parental Leave periods in increments not less than 7 days?",
          reference: {
            text: "DoDI 1327.06 Sect 3.11.c.(7)(a); and MARADMIN 051/23",
          },
        },
        {
          number: "0109",
          text: "Are Marines being charged for leave when they check out on a non-duty day?",
          reference: {
            text: "DoDI 1327.06 Sect 5.1.b.(1)",
          },
        },
        {
          number: "0110",
          text: "Does the command have procedures in place for convalescent leave following childbirth or perinatal loss?",
          reference: {
            text: "DoDI 1327.06 Sect 3.11.c.(13), BUMED NOTE 6000, and MARADMIN 129/23",
          },
        },
        {
          number: "0111",
          text: "Does the command have established procedures and requirements in place for managing the allocation of bereavement leave?",
          reference: {
            text: "DoDI 1327.06 Sect 3.11.j.(5); MARADMIN 220/23",
          },
        },
      ],
    },
  ],
};

// Legal Administration Checklist Data
export const legalAdministrationChecklist: FACChecklistData = {
  slug: "legal-administration",
  applicabilityNote:
    "This checklist applies to all Commanders/Commanding Generals at the Air, Ground, Logistics, and Installation level but is not intended to inspect legal support functions within the Office of the Staff Judge Advocate.",
  revisedDate: "September 17, 2025",
  smes: [
    {
      name: "CWO4 Jeremy M. Burns",
      email: "jeremy.m.burns@usmc.mil",
      phone: "(703) 614-8661",
    },
    {
      name: "MGySgt Walter J. Blagg",
      email: "walter.blagg@usmc.mil",
      phone: "(703) 614-8661",
    },
  ],
  subsections: [
    {
      id: "01",
      title: "Non-Judicial Punishment",
      note: "Questions apply to all NJPs conducted during the last 24 months.",
      questions: [
        {
          number: "0101",
          text: "Is the current version of the UPB (NAVMC 10132 (REV. 08-2023)) being utilized in each instance where NJP is imposed on Marine enlisted personnel with a separate binder or digital file folder for each calendar year?",
          reference: {
            text: "MCO 5800.16, V-14, par 011101 and 011110",
          },
        },
        {
          number: "0102",
          text: "Are UPBs maintained alphabetically for 3 full years in either a loose-leaf binder or an electronic file folder with disposal instructions?",
          reference: {
            text: "MCO 5800.16, V-14, par 011110.A and B and SECNAV M 5210.1 (2019), pg. III-1, par 2.b., electronic file – Schedules Cross Walked by Chapter",
          },
        },
        {
          number: "0103",
          text: "Does the UPB file consist of original (if hard copy) UPB including attached pages, appeals and summary transcript or digital file IAW the command's file plan?",
          reference: {
            text: "MCO 5800.16, V-14, par 011110.A",
          },
        },
        {
          number: "0104",
          text: "Are original (if hard copy) letters of appeal and allied papers (e.g., statements, investigative reports, documents, records, photographs, etc.) filed with the UPB files of the unit that conducted the NJP?",
          reference: {
            text: "MCO 5800.16, V-14, par 011107",
          },
        },
        {
          number: "0105",
          text: "Is a copy of the UPB (NAVMC 10132) provided to IPAC/Admin Section and are all NJPs run on unit diary, with the exception of non-punitive measures, and are entries recorded on the UPB consistent with entries recorded on the unit diary?",
          reference: {
            text: "MCO 5800.16, V-14, par 011109",
          },
        },
        {
          number: "0106",
          text: "Are punishments imposed in compliance with allowable maximum punishments?",
          reference: {
            text: "Manual for Courts-Martial (2024), Part V, par 5, pg. V-4 to V-7; JAGINST 5800.7G w/CH 1, Chap 1, par 0111",
          },
        },
        {
          number: "0107",
          text: "Are appeals requesting stays of punishment involving restriction/extra duties acted on within five days? If not are punishments stayed?",
          reference: {
            text: "Manual for Courts-Martial (2024), Part V, par 7d, pg. V-8",
          },
        },
        {
          number: "0108",
          text: "Are all the appropriate blocks of each UPB for the past 3 calendar years filled out in accordance with the reference? (a) Item 1: Does this include article(s) of the UCMJ violated and a summary of each offense alleged to include date, time, and place of the alleged offense. (b) Item 2: Requires advising the accused in accordance with Article 31, UCMJ. Did the accused indicate intentions by selecting from drop-down choices or by manually writing in their intentions? Did the accused date and sign? If accused refused to sign, is the \"refused to sign\" box checked and did the CO sign in this block instead? (c) Item 3: Completed upon ensuring that the individual has been informed of rights enumerated in item 2. Did the immediate commanding officer date and sign item 3 prior to imposition of NJP. (d) Item 4: Does this block contain current and previous UAs in excess of 24 hours and current and previous desertions recorded? (e) Item 5: Is the correct drop down selected for each charge or written in for each charge? (f) Item 6: Record complete and accurate punishment(s) imposed followed by date of imposition. (g) Item 7: Record date of suspension followed by complete and accurate description of all or parts of punishment being suspended. If none, is the word \"NONE\" recorded? (h) Item 8, 8A, and 8B: Is complete name, rank/grade, title, and EDIPI of the officer imposing punishment listed? (i) Item 9: Is this block signed by the officer imposing punishment? (j) Item 10: Does this block properly reflect the date of notification? (k) Item 11: Is this block signed and dated by the officer imposing punishment? (l) Item 12: Did the accused select a choice from the drop-down selections and sign? (m) Item 13: Is this block dated? If not appealed, is the \"Not appealed\" box checked? (n) Item 14: Has the officer who acted on the appeal completed this block or has it been left blank (no appeal). (o) Item 15: Is there a date of notification of appeal decision listed or has it been left blank (no appeal)? (p) Item 16: Has the officer responsible for required administrative action initialed? Must be complete; cannot be left blank. (q) Item 17: Correctly reflect complete unit. (r) Item 18: Correctly reflect last name, first name, middle initial. (s) Item 19: Correctly reflect rank/grade. (t) Item 20: Correctly reflect EDIPI. (u) Item 21: Correctly reflect amplifying remarks. (v) Item 22: Are victim demographic information entries made in cases with victims, \"unknown\" if victim declines to answer, or left blank if there are no victims?",
          reference: {
            text: "MCO 5800.16, V-14, par 011105",
          },
        },
        {
          number: "0109",
          text: "Can the unit confirm a copy of the UPB (NAVMC 10132) is provided to IPAC/Admin Section for Inclusion into Marine's OMPF?",
          reference: {
            text: "MCO 5800.16, V-14, par 011103 and par 011109",
          },
        },
        {
          number: "0110",
          text: "Explain the processes in place to ensure the Marine is provided a copy of the UPB once proceedings are completed and filed.",
          reference: {
            text: "MCO 5800.16, V-14, par 011109",
          },
        },
        {
          number: "0111",
          text: "Are signatures on the UPB that of the Commander or as authorized by the references?",
          reference: {
            text: "MCO P1070.12K W/CH 1, par 4007.2a and MCO 5800.16, V-14, par 011105.Q",
          },
        },
        {
          number: "0112",
          text: "If a Commander intends for an oral reprimand to be non-punitive, is the UPB being retained or disposed?",
          reference: {
            text: "MCO P1070.12K w/CH 1, par 4007.2b(1)",
          },
        },
        {
          number: "0113",
          text: "If a hearing of NJP results in no punishment imposed, is the UPB being retained or disposed?",
          reference: {
            text: "MCO 5800.16, V-14, par 011110.C",
          },
        },
        {
          number: "0114",
          text: "When an officer receives NJP, is the UPB entry, acknowledgement of the opportunity to submit matters, and any response provided to the local personnel administration center for inclusion into the officer's OMPF?",
          reference: {
            text: "MARADMIN 427/23",
          },
        },
        {
          number: "0115",
          text: "Are processes in place to ensure that victims are notified of any decision to dispose of an alleged offense at non-judicial punishment?",
          reference: {
            text: "MCO 5800.16-V16, para. 040401.Y",
          },
        },
        {
          number: "0116",
          text: "Are processes in place to ensure that victims are notified of the time and location of any NJP?",
          reference: {
            text: "MCO 5800.16-V16, para. 040401.Y",
          },
        },
        {
          number: "0117",
          text: "Are processes in place to ensure that victims are notified of the findings and sentence imposed at NJP?",
          reference: {
            text: "MCO 5800.16-V16, para. 040401.Y",
          },
        },
      ],
    },
    {
      id: "02",
      title: "Courts-Martial",
      note: "Questions apply to all Summary, Special, and General Courts-martial conducted during the last 24 months.",
      questions: [
        {
          number: "0201",
          text: "Does the unit forward all summary courts-martial to a Judge Advocate for the required post-trial review?",
          reference: {
            text: "Manual for Courts Martial (2024), Article 64, pg. A2-28 to A2-29",
          },
        },
        {
          number: "0202",
          text: "Does the unit maintain copies of all summary courts-martial cases, to include a copy of the record of trial and Judge Advocate Review, for 2 years?",
          reference: {
            text: "SECNAV M 5210.1 (2019), pg. III-1, par 2.b., electronic file – Schedules Cross Walked by Chapter",
          },
        },
        {
          number: "0203",
          text: "Does the unit maintain copies of all special/general courts-martial cases, to include a copy of the record of trial and Judge Advocate Review, for two years after completion of appellate review or are the case files maintained by the servicing Legal Services Support Section (if the command's legal services is provided by another Service (e.g. Navy, Army, Air Force) then the command must retain copies of all courts-martial cases for two years after appellate review)?",
          reference: {
            text: "SECNAV M 5210.1 (2019), pg. III-1, par 2.b., electronic file – Schedules Cross Walked by Chapter",
          },
        },
      ],
    },
    {
      id: "03",
      title: "Files",
      note: "Question applies to all legal files accumulated by the command regarding all legal matters, to include but not limited to, Investigations, Administrative Separations, and Courts-Martial.",
      questions: [
        {
          number: "0301",
          text: "Is each legal file folder labeled with appropriate standard subject identification codes, open/close dates, and disposal instructions on the outside of the file folder?",
          reference: {
            text: "SECNAV M-5210.2, Part I, Chap 2, par 2-2(a)-(c)",
          },
        },
      ],
    },
    {
      id: "04",
      title: "Administrative Investigations",
      questions: [
        {
          number: "0401",
          text: "Does the unit have complete file copies (to include all endorsements) of each Administrative Investigation processed during the past two years? [Must include endorsement from HHQ as appropriate]",
          reference: {
            text: "SECNAV M 5210.1 (2019), pg. III-1, par 2.b., electronic file – Schedules Cross Walked by Chapter; JAGINST 5800.7G w/Ch.1, Chap II, sect 0209f(3)",
          },
        },
        {
          number: "0402",
          text: "Do Administrative Investigations comply with time limitations set for completing, reviewing and forwarding? If not, has an explanation of the delay been provided in the Commanding Officer's endorsement or in the IO's preliminary statement, or have extensions been properly requested and approved?",
          reference: {
            text: "JAGINST 5800.7G w/CH 1, Chap II, sect 0203e, 0206c(9), 0209f, 0210c(7), 0210f(1) and 0225e",
          },
        },
        {
          number: "0403",
          text: "Do Command Investigation convening orders contain all relevant elements identified in the reference?",
          reference: {
            text: "JAGINST 5800.7G w/CH 1, Chap II, sect 0206c",
          },
        },
        {
          number: "0404",
          text: "When photographs or video recordings are included as part of the investigation are they marked properly?",
          reference: {
            text: "JAGINST 5800.7G w/CH 1, Chap II, sect 0207b(4)",
          },
        },
        {
          number: "0405",
          text: "Has the commander properly endorsed all Command Investigations to include investigations closed at the unit level to file?",
          reference: {
            text: "JAGINST 5800.7G w/CH 1, Chap II, sect 0204d",
          },
        },
        {
          number: "0406",
          text: "Has the commander forwarded all Command Investigations (except those Command Investigations that meet the criteria under section 0209(f)(1)) to the General Court-Martial Convening Authority for review?",
          reference: {
            text: "JAGINST 5800.7G w/CH 1, Chap II, sect 0209g(1)",
          },
        },
        {
          number: "0407",
          text: "Has the command convened or conducted any Litigation-Report Investigations over the past two years? (If not, proceed to 0410). Do Litigation-Report Investigation convening orders contain all relevant elements identified in the reference?",
          reference: {
            text: "JAGINST 5800.7G w/CH 1, Chap II, sect 0210c",
          },
        },
        {
          number: "0408",
          text: 'Do Litigation-Report Investigations state specifically: "This investigation is being convened and your report is being prepared in contemplation of litigation and for the express purpose of assisting attorneys representing the interests of the United States in the matter"?',
          reference: {
            text: "JAGINST 5800.7G w/CH 1, Chap II, sect 0210c(3)",
          },
        },
        {
          number: "0409",
          text: 'Are all Litigation-Report Investigation files kept in a file marked "FOR OFFICIAL USE ONLY: LITIGATION/ATTORNEY WORK PRODUCT"?',
          reference: {
            text: "JAGINST 5800.7G w/CH 1, Chap II, sect 0210f(2)",
          },
        },
        {
          number: "0410",
          text: "In the event of a service member's death, did the commander initially order a Preliminary Inquiry into the circumstances surrounding the incident? At the conclusion of the Preliminary Inquiry, what option listed in section 0204 of the reference did the commander exercise?",
          reference: {
            text: "JAGINST 5800.7G w/CH 1, Chap II, sect 0226",
          },
        },
        {
          number: "0411",
          text: "Was a line of duty determination recommendation made in each case and forwarded to the first GCMCA in the chain of command with an assigned judge advocate.",
          reference: {
            text: "JAGINST 5800.7G w/CH 1, Chap II, sect 0229d",
          },
        },
      ],
    },
    {
      id: "05",
      title: "Enlisted Involuntary Administrative Separations",
      questions: [
        {
          number: "0501",
          text: "Does the unit have a complete file copy (to include a copy of the separation authority's endorsement) of each Enlisted Involuntary Administrative Discharge processed during the past 3 years?",
          reference: {
            text: "SECNAV M 5210.1 (2019), pg. III-1, par 2.b., electronic file – Schedules Cross Walked by Chapter",
          },
        },
        {
          number: "0502",
          text: "Are activity copies of Administrative Discharge Records destroyed when 3 years old?",
          reference: {
            text: "SECNAV M 5210.1 (2019), pg. III-1, par 2.b., electronic file – Schedules Cross Walked by Chapter",
          },
        },
        {
          number: "0503",
          text: 'Are notification letters and command recommendations signed personally by the commanding officer, or during the commanding officer\'s official absence, are these letters signed "Acting" by the officer temporarily succeeding to command?',
          reference: {
            text: "MCO 1900.16 w/CH 2, Chap 6, par 6302.3",
          },
        },
        {
          number: "0504",
          text: "If there is evidence of alcohol or drug abuse/dependence, is the respondent being screened at a SACC or an equivalent facility (i.e., military MTF, or other DOD counseling facility) and offered treatment before the case is referred to a board or forwarded to the separation authority?",
          reference: {
            text: "MCO 1900.16 w/CH 2, Chap 6, par 6303.3",
          },
        },
        {
          number: "0505",
          text: "Are all Enlisted Involuntary Administrative Separations processed for a Personality Disorder in compliance with the procedural requirements?",
          reference: {
            text: "MCO 1900.16 w/CH 2, Chap 6, 6203.2",
          },
        },
        {
          number: "0506",
          text: "Are all Enlisted Involuntary Administrative Separations processed for Sexual Misconduct procedurally compliant?",
          reference: {
            text: "MCO 1900.16 w/CH 2, Chap 6, sect 6210.4",
          },
        },
      ],
    },
    {
      id: "06",
      title: "Criminal Justice Information Reporting",
      questions: [
        {
          number: "0601",
          text: "In any case where a member of the command is subject to a civilian court-issued restraining order or is convicted at SPCM, GCM, or in a civilian court of a crime of domestic violence, did the commanding officer provide supporting documentation to and direct the member to report to the servicing law enforcement agency, (NCIS, CID, PMO or other) within five working days of notification?",
          reference: {
            text: "MCBUL 5810 of 22 May 2024, encl (2)",
          },
        },
        {
          number: "0602",
          text: "In any case where a member of the command is determined, via a finding at an NJP, SCM, SPCM, or Admin Separation Proceedings to have wrongfully used any controlled substance in violation of Article 112a, UCMJ, did the commanding officer provide supporting documentation to and direct the member to report to the servicing law enforcement agency (NCIS, CID, PMO or other) within five working days of disposition?",
          reference: {
            text: "MCBUL 5810 of 22 May 2024, encl (2)",
          },
        },
        {
          number: "0603",
          text: "In any case where a member of the command is either: 1. Subject to charges referred to a GCM; 2. Is convicted by a GCM of any offense punishable by more than one year confinement, regardless of the amount of confinement actually awarded or imposed; 3. Is found guilty at trial by SPCM or GCM of any offense of domestic violence as defined in the reference regardless of the punishment awarded; 4. Is found incompetent to stand trial or found not guilty by reason of lack of mental responsibility at trial by SPCM or GCM; or 5. Enters an unauthorized absence or deserter status following preferral of charges; Did the commanding officer provide supporting documentation to and direct the member to report to the servicing law enforcement agency (NCIS, CID, PMO or other) within five working days of disposition?",
          reference: {
            text: "MCBUL 5810 of 22 May 2024, encl (2)",
          },
        },
        {
          number: "0604",
          text: 'Did the commanding officer counsel in writing a "prohibited person" to abide by Federal law pertaining to restricted access to personally owned firearms and ammunition and to make arrangements to dispose of all such items?',
          reference: {
            text: "MCBUL 5810 of 22 May 2024, encl (2)",
          },
        },
        {
          number: "0605",
          text: 'Does the command have a procedure in place to ensure a "prohibited person" is not permitted access to privately owned firearms stored in unit armories? If yes, what is the procedure?',
          reference: {
            text: "MCBUL 5810 of 22 May 2024, encl (2)",
          },
        },
      ],
    },
    {
      id: "07",
      title: "General",
      questions: [
        {
          number: "0701",
          text: "What system is in effect for placing an accused on legal hold for a court-martial?",
          reference: {
            text: "MCO 1900.16, par 1008.1(c)",
          },
        },
        {
          number: "0702",
          text: "What procedures are implemented to ensure a member is processed for appellate leave, if applicable? Describe briefly.",
          reference: {
            text: "SECNAVINST 1050.1A; MCO 1050.16A",
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
  gtcc: gtccChecklist,
  "leave-liberty": leaveLibertyChecklist,
  "legal-administration": legalAdministrationChecklist,
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
