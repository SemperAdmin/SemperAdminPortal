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

// Marine Corps Sponsorship Program Checklist Data
export const sponsorshipProgramChecklist: FACChecklistData = {
  slug: "sponsorship-program",
  applicabilityNote: "This checklist applies to all levels and types of commands.",
  revisedDate: "March 24, 2025",
  sme: {
    name: "Ms. Lucinda Lorei",
    email: "lucinda.lorei@usmc.mil",
    phone: "(703) 784-0518",
  },
  subsections: [
    {
      id: "01",
      title: "Unit-Specific Items (All commands)",
      questions: [
        {
          number: "0101",
          text: "Is a hard copy and an electronic copy of the Sponsorship turnover binder maintained, and does it include all required items per the MCO?",
          reference: {
            text: "MCO 1320.11H, Par 4b(7)(m)",
          },
        },
        {
          number: "0102",
          text: "Have all Sponsorship Coordinators (SC) and Sponsors within the Command completed the required training according to the respective timelines prescribed in the MCO?",
          reference: {
            text: "MCO 1320.11H, Par 4b(7)(a) and Par 4b(7)d",
          },
        },
        {
          number: "0103",
          text: "Does the Command assign a Sponsor to all Service Members executing a PCS, using NAVMC 11799?",
          reference: {
            text: "MCO 1320.11H, Par 4a(2)e; Par 4b(7)g",
          },
        },
        {
          number: "0104",
          text: "Is the SC contact information provided to the installation and supporting Information, Referral and Relocation (IR&R) Manager, and is this information updated when a new SC is assigned?",
          reference: {
            text: "MCO 1320.11H, Par 4b(7)(b); Par 4b(7)(l)",
          },
        },
        {
          number: "0105",
          text: "Does the SC maintain sponsor assignment tracking documentation and program utilization metrics; provide this information to the installation and supporting IR&R Manager at the end of each quarter?",
          reference: {
            text: "MCO 1320.11H, Par 4b(7)(i)",
          },
        },
        {
          number: "0106",
          text: "Does the Unit Commander review NAVMC 11791, Sponsorship Program Questionnaire, periodically to determine trends in order to enhance the Unit's Sponsorship Program?",
          reference: {
            text: "MCO 1320.11H, Par 4b(6)(j)",
          },
        },
      ],
    },
  ],
};

// Military Awards Checklist Data
export const militaryAwardsChecklist: FACChecklistData = {
  slug: "military-awards",
  applicabilityNote:
    "This checklist applies to all commands and activities that have an awarding authority for any awards. All elements of a question must be satisfied to be found compliant.",
  revisedDate: "June 3, 2025",
  sme: {
    name: "Capt Josefina Cisneros",
    email: "smb_hqmc_pers_awards@usmc.mil",
  },
  subsections: [
    {
      id: "01",
      title: "General Military Awards Policy",
      questions: [
        {
          number: "0101",
          text: "Does the command have the pertinent military awards references and are the command's administrative personnel familiar with the requirements of current awards directives? Must have access to the following references either electronically or on-hand: (a) MCO 1650.19J (b) SECNAVINST 1650.1J (c) SECNAV M-1650.1 (d) SECNAV M-5216.5 (e) DoD Instruction 1348.33 (f) DoD Manual 1348.33; Vol 1-4",
          reference: {
            text: "SECNAV M-1650.1, Ch. 1, Para. 1.1.b. (p 1-1); MCO 1650.1J, Encl. 1, Para 1.a.-1.c. (p 1)",
          },
        },
        {
          number: "0102",
          text: "If the command has published local awards instructions or orders, do they comply with the orders and directives established in the references?",
          reference: {
            text: "SECNAVINST 1650.1J, Encl. 7, Para. 3.a.; DoD Instruction 1348.33, Para. 2.9.b. & 2.9.c.",
          },
        },
        {
          number: "0103",
          text: "Are the command's administrative personnel familiar with procedures for processing awards approved by Navy, Joint, and other U.S. Armed Forces (i.e. awards receive validation by MMPB-31 and entry into personnel records)? At a minimum, are personnel familiar with the following: (a) In what situation is a Marine eligible for another Service's award? (b) In what situation is a Marine eligible to receive a Joint award? (c) What actions can a command take if one of their Marines was erroneously presented another service's award or a Joint Award for which the Marine was not eligible?",
          reference: {
            text: "SECNAVINST 1650.1J, Encl. 4, Para. 1",
          },
        },
        {
          number: "0104",
          text: "Are administrative personnel and/or the awarding authority familiar with the requirements for the Military Outstanding Volunteer Service Medal (MOVSM)? Does a review of approved MOVSM's reveal that they were only awarded when the following criteria were clearly met: (a) Three (3) years of sustained service (b) Service cannot have a connection/link to a military mission (i.e. Toys for Tots, military recruiting, etc.)",
          reference: {
            text: "SECNAV M-1650.1, Appendix 4A, TAB 18 MOVSM",
          },
        },
        {
          number: "0105",
          text: "Does the command ensure that only the awards which are authorized to have certificates as part of the award elements have them (i.e. NA, NC, MM, LM, etc) and that those awards which are not authorized to have certificates do not (i.e. CR, OV, HSM, AFSM, Recruiting Ribbon)?",
          reference: {
            text: "SECNAV M-1650.1, see Award Element for guidance per each Award Criteria",
          },
        },
      ],
    },
    {
      id: "02",
      title: "Program Administration and Timeliness",
      questions: [
        {
          number: "0201",
          text: "Originator Timeliness: Are commands/administrative personnel ensuring that ALL awards are submitted within the Secretary of the Navy's timeline? (a) Retirement/Transfer. All Personal Military Decorations (PMD)s must have sufficient time to arrive at the final awarding authority for adjudication at least 60 days prior to the desired presentation date, 90 days prior during the summer months, or 90 days prior for any award that requires approval/endorsement by the Secretary of the Navy. (b) PMD time limits. All PMD nominations, except the Combat Action Ribbon (CR) and Purple Heart Medal (PH), must be officially originated with three (3) years of the distinguishing act or end of the period of service, and a final determination made within two (2) years of that, in no case more than five (5) years after the act. (c) Valor PMDs. All nominations for valor decorations are a priority and warrant special handling. Nominations must be originated and entered into official channels within 45 days of the distinguishing act. (d) Unit decoration submissions. Same as for PMDs. (e) CE&S. Not subject to time limits.",
          reference: {
            text: "SECNAVINST 1650.1J, Para. 5.h (p 3) & Encl. 5 Timeliness Standards; SECNAV M-1650.1, Appendix 1A, (p 1-9); MCO 1650.19J, Encl. 1, Para. 2.f. (p 3); SECNAVINST 1650.1J, Encl. 5. Para. 2; SECNAVINST 1650.1J, Encl. 5 Timeliness Standards; SECNAV M-1650.1, Appendix 1A, Para. 1A.2.b.(1) Valor Time Limits (p 1-9)",
          },
        },
        {
          number: "0202",
          text: "Commander Timeliness: Is the command taking timely action on recommendations for award recognition as verified by a review of all awards currently pending at the command's level or pending approval at a higher level? Timely action is defined as the following: (a) Commands must process all valor award recommendations, to either approve the award or forward via the chain of command to the appropriate awarding authority within 20 days of receipt. (b) Are commands entering explanatory comments when awards submissions are outside of the above time limits? (c) Is the Commander taking action to endorse awards in compliance with references?",
          reference: {
            text: "SECNAV M-1650.1, Appendix 1A, Para. 1A.2.b2. (p 1-10); SECNAVINST 1650.1J, Encl. (5), Para. 7.a; MCO 1650.19J, Encl 1; SECNAVINST 1650.1J, Encl 5; MARADMIN 99/18",
          },
        },
        {
          number: "0203",
          text: "Are the command's administrative personnel processing all awards requiring approval by a Marine Corps awarding authority electronically via the Improved Awards Processing System (iAPS)?",
          reference: {
            text: "SECNAV M-1650.1, Ch3, Para. 3.2a.(1)(b) (p 3-4), MARADMIN 042/08",
          },
        },
        {
          number: "0204",
          text: 'Is the command appropriately approving and delegating iAPS permissions IAW regulations in a timely manner by responding to "Pending" requests within 30 days and removing permissions from personnel who depart the command within 30 days?',
          reference: {
            text: "SECNAVINST 1650.1J Encl (4) 2.a.(3), MARADMIN 99/18",
          },
        },
        {
          number: "0205",
          text: "Is the command ensuring that awards are originated by authorized personnel only (originator must be senior to the nominee by billet or rank and in the same chain of command during the time of action)? Is the command ensuring that awards are endorsed and approved by Commanders and/or Officers in Charge (OIC) in the Chain of Command (CoC)? Is this supported by a review of a random sample of completed awards and current iAPS permissions delegation?",
          reference: {
            text: "SECNAVINST 1650.1J, Encl. 4, Para. 2.a.(3); SECNAV M-1650.1, Ch. 1, Para. 1.2.b.(1)",
          },
        },
      ],
    },
    {
      id: "03",
      title: "Editing and Administrative Processing",
      questions: [
        {
          number: "0301",
          text: "Is the command ensuring that all award recommendations are being routed to the awarding authority whom had jurisdiction over the nominee at the time of the action or service? Is the award nomination being forwarded to the commander who has authority to approve the level of PMD recommended by the originator? Note: The official with award approval authority must be in the awardee's CoC at the time of the distinguishing act, or the end of the meritorious service.",
          reference: {
            text: "SECNAV M-1650.1, Para. 2.2.a.(4) (p 2-5); MCO 1650.19J, Encl. 2, Para. 8.d. (p 3)",
          },
        },
        {
          number: "0302",
          text: 'Is the command ensuring all awards endorsed or approved for a specific achievement satisfy the below: (a) Award has a full detailed SOA within page limit requirement (2 pages). (b) Valor award nominations contains the "Standard Valor Award Key Information" format in SOA. (c) Award information/NAVMC 11533 data is complete and administratively correct (i.e. detachment types/dates, endorsements, geographic location, and awarding authority address, etc.). (d) Award has a properly formatted citation free of grammar or spelling errors. (e) Opening and Closing sentences are correct, IAW references.',
          reference: {
            text: "SECNAV M-1650.1, Appendix 2D.2e. SOA (p 2-68/69/70); SECNAV M-1650.1, Appendix 2D (p 2-72),TAB 1: Nominations for Valor PMD Table 12 (p 2-72) & Table 13 (p 2-73); SECNAV M-1650.1, Appendix 2D, Para. d (p 2-74); SECNAV M-5216.5, Ch. 2, Para. 1.a. (p 2-1); SECNAV M-1650.1, Appendix 2E How to Prepare a PMD; Citation/Certificate; Table 18, p 2-85/86 (Air Medal & Above) and Table 21, p 2-96 (NC & NAM)",
          },
        },
        {
          number: "0303",
          text: "Does the command ensure all formal certificates and citations are correctly produced and that any changes made to the final citation are reflected in iAPS prior to presentation, filing, and forwarding to CMC (MMPB-31) for archiving? (a) Is the command attaching a PDF copy of the award certificate(s) to the Certificates tab in iAPS? (b) Is this confirmed by a review of all formal certificates from an iAPS report of the unit's approved awards in iAPS?",
          reference: {
            text: "SECNAV M-1650.1, Ch. 2, Para. 2.2.e (p 2-8)",
          },
        },
        {
          number: "0304",
          text: "Does the command strictly enforce the SECNAV policy concerning duplication of awards so that only one award will be approved for the same act, achievement, or period of meritorious service for an individual by reviewing the member's records in MCTFS, OMPF, and iAPS to ensure that no material from a previous award is duplicated in a new award submission?",
          reference: {
            text: "DoD Instruction 1348.33, Sect. 3, 3.1.a (p 12); SECNAVINST 1650.1J, Encl. 4, 1.b.3. (p 2) & 1.c.4. (p 3); SECNAV M-1650.1, Ch. 2, 2.1.c. (p 2-1) & Ch. 3, 3.1.d. (p 3-3)",
          },
        },
        {
          number: "0305",
          text: "Does the command submit approved awards to MMPB-31 in iAPS within 10 working days after the summary of action end date or date of presentation (whichever is later)? Is this confirmed by a review of at least five command approved awards in the iAPS archives and all awards currently in processing?",
          reference: {
            text: "SECNAV M-5216.5, Ch. 2, Para. 2.2.8.a. (p 2-6)",
          },
        },
        {
          number: "0306",
          text: "Does the command ensure that no awards are awarded to an individual whose actions are less than honorable in accordance with 10 USC § 1136? Is this supported by a review of the command's Quarterly Criminal Activity Report, Legal Report, and/or Command Legal Action Module against awards approved in iAPS and on Marine Online (i.e. Good Conduct Medal)?",
          reference: {
            text: "DoD Instruction 1348.33, Sect 1, Para. 1.2.c. (p 5) & Sect 8 (p 27); SECNAVINST 1650.1J, Para. 5.k. (p 3); SECNAV M-1650.1, Ch. 2, Para. 2.1.h. (p 2-3)",
          },
        },
        {
          number: "0307",
          text: "Does the command ensure that any casualty reports submitted as a result of hostile enemy action contain sufficient information for the Purple Heart Medal (PH) awarding authority to make a PH determination?",
          reference: {
            text: "SECNAV M-1650.1, Appendix 2B, Para. 2B.5.a. (p 2-59)",
          },
        },
        {
          number: "0308",
          text: "Has the command ensured that any Bronze Star Medal awarded met the requirement that the recipient was in receipt of special pay(s) during the period of action?",
          reference: {
            text: "SECNAV M-1650.1, Appendix 2A, Tab 8, Para. c.(2)",
          },
        },
      ],
    },
  ],
};

// Postal Affairs and Official Mail Program Checklist Data
export const postalAffairsChecklist: FACChecklistData = {
  slug: "postal-affairs",
  applicabilityNote: "",
  revisedDate: "June 3, 2025",
  sme: {
    name: "MGySgt Billy Gillenwater",
    email: "postal.affairs@usmc.mil",
    phone: "(703) 784-9538",
  },
  subsections: [
    {
      id: "01",
      title: "Unit Mail Room",
      questions: [
        {
          number: "0101",
          text: "Has the command published a Unit Mail Handling Order?",
          reference: {
            text: "MCO 5110.4B, Chap 3, par 7",
          },
        },
        {
          number: "0102",
          text: "Has the Commanding Officer appointed in writing a Unit Mail Officer and Assistant Unit Mail Officer?",
          reference: {
            text: "MPM 12.2i, 12.2j, 2.18a and MCO 5110.4B, Chap 1, par 2j(1)",
          },
        },
        {
          number: "0103",
          text: "Are two Unit Mail Clerks/Orderlies appointed at a minimum for each unit/section?",
          reference: {
            text: "MCO 5110.4B, Chap 3, par 3e",
          },
        },
        {
          number: "0104",
          text: "Has the current Commanding Officer designated in writing personnel authorized to receive and open official mail to include accountable mail?",
          reference: {
            text: "MCO 5110.4B, Chap 3, par 20c-f",
          },
        },
        {
          number: "0105",
          text: "Are the designation documents completed and maintained for personnel?",
          reference: {
            text: "MCO 5110.4B, Chap 3, par 3 and 4",
          },
        },
        {
          number: "0106",
          text: "Has the Unit Mail Officer, Assistant Unit Mail Officer, mail clerks, and mail orderlies received mail handling training within the required period?",
          reference: {
            text: "MPM 2.19a, MCO 5110.4B, Chap 1, par 2l(1) and (5)",
          },
        },
        {
          number: "0107",
          text: "Does the UMR meet structural requirements?",
          reference: {
            text: "MCO 5110.4B, Chap 3, par 9",
          },
        },
        {
          number: "0108",
          text: "Has the Commanding Officer provided space and equipment necessary for proper mail handling and security?",
          reference: {
            text: "MCO 5110.4B, Chap 1, par 2j (6) and Chap 3, par 9",
          },
        },
        {
          number: "0109",
          text: "Does the Unit Mail Officer maintain restricted access to the UMR keys?",
          reference: {
            text: "MCO 5110.4B, Chap 3, par 10a",
          },
        },
        {
          number: "0110",
          text: "Are duplicate keys/combinations maintained and secured?",
          reference: {
            text: "USPS Handbook F-101, Chap 3-8, 3-9.1, USPS RE-05, 3-1.12.2, and MCO 5110.4B, Chap 3, par 10c and d",
          },
        },
        {
          number: "0111",
          text: "Is the Unit Mail Clerk returning the UMR key to the Unit Mail Officer daily and annotated on a key control log?",
          reference: {
            text: "USPS ASM, 273.434 and MCO 5110.4B, Chap 3, par 10a",
          },
        },
        {
          number: "0112",
          text: "Does the UMR maintain a separate key control log to transfer the key to another designated Unit Mail Clerk?",
          reference: {
            text: "MCO 5110.4B, Chap 3, par 10b",
          },
        },
        {
          number: "0113",
          text: 'Is a DD Form 1115, Mail Room No Admittance Except to Authorized Personnel, displayed on or near the entrance to the UMR?',
          reference: {
            text: "MCO 5110.4B, Chap 3, par 8h",
          },
        },
        {
          number: "0114",
          text: "Are only authorized personnel allowed to enter the UMR?",
          reference: {
            text: "MCO 5110.4B, Chap 1, par 2m(8) and Chap 3, par 8g",
          },
        },
        {
          number: "0115",
          text: "Is the UMR free of items not related to the delivery or processing of U.S. mail?",
          reference: {
            text: "MCO 5110.4B, Chap 3, par 8a and b",
          },
        },
        {
          number: "0116",
          text: "Are random and unannounced weekly inspections conducted by the Unit Mail Officer or Assistant Unit Mail Officer utilizing the current Inspectors General (IG) checklist?",
          reference: {
            text: "MCO 5110.4B, Chap 3, par 14a-c",
          },
        },
        {
          number: "0117",
          text: "Has the Commanding Officer provided sustained and networked computer access in the UMR to process directory mail?",
          reference: {
            text: "MCO 5110.4B, Chap 1, par 2j(7)",
          },
        },
        {
          number: "0118",
          text: "Does the UMR maintain a copy of the most current edition of the required publications/directives?",
          reference: {
            text: "MCO 5110.4B, Chap 3, par 6",
          },
        },
        {
          number: "0119",
          text: "Do mail clerks and orderlies have in their possession their DD Form 285?",
          reference: {
            text: "MCO 5110.4B, Chap 1, par 2m(1), par 2n(1) and Chap 3 par 8(d)",
          },
        },
        {
          number: "0120",
          text: "Are the required protections given to the mail to/from the serving MPA?",
          reference: {
            text: "MCO 5110.4B, Chap 3, par 11",
          },
        },
        {
          number: "0121",
          text: "Do the mail clerks understand the privileged nature of mail and postal records?",
          reference: {
            text: "MCO 5110.4B, Chap 3, par 12",
          },
        },
        {
          number: "0122",
          text: "Is mail date stamped on reverse side to indicate day of receipt?",
          reference: {
            text: "MCO 5110.4B, Chap 1, par 2m(4) and Chap 3 par15d",
          },
        },
        {
          number: "0123",
          text: "Do Mail Orderlies pick up mail at designated times daily?",
          reference: {
            text: "MCO 5110.4B, Chap 1, par 2n(2) and Chap 3, par 15d-f",
          },
        },
        {
          number: "0124",
          text: "Are Unit Mail Officers providing the serving Post Office timely mobile unit mail routing information?",
          reference: {
            text: "MCO 5110.4B, Chap 3, par 28",
          },
        },
        {
          number: "0125",
          text: "Do mail clerks understand the instructions concerning the receipt and delivery of Balloting material?",
          reference: {
            text: "MPM 19.2.a(1) and MCO 5110.4B, Chap 3, par 21",
          },
        },
        {
          number: "0126",
          text: "Do mail clerks understand the instructions concerning the receipt and delivery of Refused mail?",
          reference: {
            text: "MCO 5110.4B, Chap 3, par 17",
          },
        },
        {
          number: "0127",
          text: "Do mail clerks understand the instructions concerning the receipt and delivery of Open by mistake?",
          reference: {
            text: "MCO 5110.4B, Chap 3, par 18",
          },
        },
        {
          number: "0128",
          text: "Do mail clerks understand the instructions concerning the receipt and delivery of Mail received open, damaged, or missing contents?",
          reference: {
            text: "MCO 5110.4B, Chap 3, par 15b and c",
          },
        },
        {
          number: "0129",
          text: 'Do the mail clerks and orderlies understand the delivery instructions of PS Form 3849, "Delivery Notice/Reminder/Receipt," for personal accountable mail?',
          reference: {
            text: "MCO 5110.4B, Chap 3, par 19",
          },
        },
        {
          number: "0130",
          text: "Is mail addressed to the mail clerks processed by his/her section mail orderly?",
          reference: {
            text: "MCO 5110.4B, Chap 3, par 16e",
          },
        },
        {
          number: "0131",
          text: "Do the mail clerks understand the detection/notification instructions for potential mail bombs and suspicious mail?",
          reference: {
            text: "MPM 7.2b, 8.2j and MCO 5110.4B, Chap 6",
          },
        },
        {
          number: "0132",
          text: "Do the mail delivery receipt log annotations match the assigned section, DD Form 285, and DD Form 2260?",
          reference: {
            text: "MCO 5110.4B, Chap 3, par 15e",
          },
        },
        {
          number: "0133",
          text: "Are mail orderly receipt logs properly completed and maintained?",
          reference: {
            text: "MCO 5110.4B, Chap 3, par 15e",
          },
        },
        {
          number: "0134",
          text: "Is mail delivered to an authorized section Mail Orderly?",
          reference: {
            text: "MCO 5110.4B, Chap 3, par 15e and f",
          },
        },
        {
          number: "0135",
          text: "Is there a chain of receipts for the delivery of official accountable mail to an authorized agent?",
          reference: {
            text: "MCO 5110.4B, Chap 3, par 20g-k",
          },
        },
        {
          number: "0136",
          text: "Is official accountable mail that cannot be delivered or properly secured that day returned to the serving MPA?",
          reference: {
            text: "MCO 5110.4B, Chap 3 par 20j",
          },
        },
        {
          number: "0137",
          text: "Are delivery records for accountable mail properly completed, maintained, and verified by the Unit Mail Officer daily?",
          reference: {
            text: "MCO 5110.4B, Chap 3, par 20h-k",
          },
        },
        {
          number: "0138",
          text: "Does the command require personnel to check in/out of the UMR?",
          reference: {
            text: "MCO 5110.4B, Chap 3, par 23 and 26b",
          },
        },
        {
          number: "0139",
          text: "Are mail delivery receptacles issued to authorized patrons?",
          reference: {
            text: "MCO 5110.4B, Chap 4, par 2a, 2b, 3a, 6d",
          },
        },
        {
          number: "0140",
          text: "Are mail delivery receptacles assigned with required forms and information?",
          reference: {
            text: "MCO 5110.4B, Chap 4, par 2 and 3",
          },
        },
        {
          number: "0141",
          text: "Are mail delivery receptacles correctly closed?",
          reference: {
            text: "MCO 5110.4B, Chap 4, par 9",
          },
        },
        {
          number: "0142",
          text: "Are mail delivery receptacle key lock cylinder/combination procedures followed?",
          reference: {
            text: "MCO 5110.4B, Chap 4, par 7",
          },
        },
        {
          number: "0143",
          text: "Are correct receptacle maintenance and records procedures followed?",
          reference: {
            text: "MCO 5110.4B, Chap 4, par 5",
          },
        },
        {
          number: "0144",
          text: "Is correctly addressed mail placed in assigned receptacles?",
          reference: {
            text: "MCO 5110.4B, Chap 4, par 8",
          },
        },
        {
          number: "0145",
          text: "Are the mail delivery receptacles checked bi-weekly for excessive mail accumulation, old mail, or non-use?",
          reference: {
            text: "MCO 5110.4B, Chap 4, par 6",
          },
        },
        {
          number: "0146",
          text: "Are customers notified of large mail items or excess mail accumulation using a PS Form 3907?",
          reference: {
            text: "MCO 5110.4B, Chap 4, par 8c",
          },
        },
        {
          number: "0147",
          text: "Are DD Form 2258 - Temporary Mail Disposition Instructions used to indicate the status of addressee and proper mail disposition?",
          reference: {
            text: "MCO 5110.4B, Chap 4, par 6b, 8d and 8e",
          },
        },
        {
          number: "0148",
          text: "Is general delivery service provided to mail addressed for members due to arrive?",
          reference: {
            text: "MCO 5110.4B, Chap 3, par 26j and Chap 4 par 4",
          },
        },
        {
          number: "0149",
          text: 'Are NAVMCs 10572 "Directory File Cards" correctly completed, filed, and maintained?',
          reference: {
            text: "MCO 5110.4B, Chap 3, par 24 and 25",
          },
        },
        {
          number: "0150",
          text: "Are mail clerks properly processing directory mail?",
          reference: {
            text: "MCO 5110.4B, Chap 3, par 26",
          },
        },
        {
          number: "0151",
          text: "Do unit Mail Clerks pick up mail daily from the serving MPA?",
          reference: {
            text: "MCO 5110.4B, Chap 1, par 2m(3)",
          },
        },
      ],
    },
    {
      id: "02",
      title: "Command Official Mail Program",
      questions: [
        {
          number: "0201",
          text: "Has the unit, organization, and/or activity that handles command mail established an Official Mail Program (OMP)?",
          reference: {
            text: "MCO 5110.4B, Chap 1, par 2j(10) and Chap 5, par 1",
          },
        },
        {
          number: "0202",
          text: "Has the unit established policy on incoming and outgoing official mail?",
          reference: {
            text: "MCO 5110.4B, Chap 3, par 7p",
          },
        },
        {
          number: "0203",
          text: "Has the unit, organization, and/or activity that handles command mail established an Official Mail Center?",
          reference: {
            text: "MCO 5110.4B, Chap 5, par 10a, b, and d",
          },
        },
        {
          number: "0204",
          text: "Has the Command appointed personnel in writing the grade of E-6/GS-6 or above as the OMM and Assistant OMM?",
          reference: {
            text: "MCO 5110.4B, Chap 5, par 3",
          },
        },
        {
          number: "0205",
          text: "Has the OMM and assistant OMM completed mail handling training?",
          reference: {
            text: "MCO 5110.4B, Chap 5 par 4",
          },
        },
        {
          number: "0206",
          text: "Has the Unit Mail Officers and Unit Mail Clerks signed PS Form 8139 – Your Role in Protecting the Security of the United States Mail?",
          reference: {
            text: "MCO 5110.4B, Chap 1, par 2j(2) and Chap 3, par 3c",
          },
        },
        {
          number: "0207",
          text: "Has the command appointed Unit Mail Clerks for units that do not maintain a UMR to deliver official mail to authorized agents?",
          reference: {
            text: "MPM 41.2.n, MCO 5110.4B, Chap 3, par 3 and Chap 5, par 10c",
          },
        },
        {
          number: "0208",
          text: "Has the current Commanding Officer designated in writing personnel authorized to receive and open official mail, to include official accountable mail?",
          reference: {
            text: "MCO 5110.4B, Chap 3, par 20c-f",
          },
        },
        {
          number: "0209",
          text: "Is there a chain of receipts for the delivery of official accountable mail to an authorized agent?",
          reference: {
            text: "MCO 5110.4B, Chap 3, par 20g-k",
          },
        },
        {
          number: "0210",
          text: "Are delivery records properly completed, maintained, and verified by the OMM?",
          reference: {
            text: "MCO 5110.4B, Chap 3, par 20h-k",
          },
        },
        {
          number: "0211",
          text: "Are official mail addresses verified for accuracy and correctly used?",
          reference: {
            text: "MCO 5110.4B, Chap 5, par 18 and 19",
          },
        },
        {
          number: "0212",
          text: "Does the OMM maintain a copy of the most current edition of the publications/directives?",
          reference: {
            text: "MCO 5110.4B, Chap 5, par 8",
          },
        },
        {
          number: "0213",
          text: "Does the command OMC serve as a control point for outgoing official matter?",
          reference: {
            text: "MCO 5110.4B, Chap 5, par 10e",
          },
        },
        {
          number: "0214",
          text: "Does the OMM understand the provisions for the use of extra services?",
          reference: {
            text: "MPM 41.1.c and MCO 5110.4B, Chap 5, par 17",
          },
        },
        {
          number: "0215",
          text: "Is the maximum consolidation of correspondence applied for official mailings?",
          reference: {
            text: "MCO 5110.4B, Chap 5, par 22b",
          },
        },
        {
          number: "0216",
          text: "Has the OMM completed quarterly OMP inspections?",
          reference: {
            text: "MCO 5110.4B, Chap 1, par 2k(2)",
          },
        },
      ],
    },
    {
      id: "03",
      title: "Official Postage Application",
      questions: [
        {
          number: "0301",
          text: "Are postage meters/stamps correctly secured?",
          reference: {
            text: "MCO 5110.4B, Chap 5, par 28 and 30b",
          },
        },
        {
          number: "0302",
          text: "Are postage meter keys/combinations correctly secured?",
          reference: {
            text: "MCO 5110.4B, Chap 5, par 28 and 30b",
          },
        },
        {
          number: "0303",
          text: "Is a postage stamp inventory maintained for the authorized unit?",
          reference: {
            text: "MCO 5110.4B, Chap 5, par 30a",
          },
        },
        {
          number: "0304",
          text: "Are postage stamp stock audits conducted?",
          reference: {
            text: "DODI 4525.09, 3.11c and MCO 5110.4B, Chap 5, par 30c",
          },
        },
        {
          number: "0305",
          text: "Is a daily record of meter register correctly recorded?",
          reference: {
            text: "MPM Appendix 25A, Table 5, Steps 1-2 and MCO 5110.4B, Chap 5, par 26",
          },
        },
        {
          number: "0306",
          text: "Is PS Forms 3533 Application for Voucher for Refund of Postage and Fees, processed and submitted?",
          reference: {
            text: "USPS DMM 604, 9.3 and MCO 5110.4B, Chap 5, par 27",
          },
        },
        {
          number: "0307",
          text: "Has the OMM analyzed the record of postage expended weekly?",
          reference: {
            text: "MCO 5110.4B, Chap 5, par 31",
          },
        },
        {
          number: "0308",
          text: "Are cost saving measures applied to official mailings?",
          reference: {
            text: "MCO 5110.4B, Chap 5, par 20 and 22b",
          },
        },
        {
          number: "0309",
          text: "Are the Priority Mail Express provisions correctly followed?",
          reference: {
            text: "MPM 41.1c, e, g and MCO 5110.4B, Chap 5, par 17a",
          },
        },
        {
          number: "0310",
          text: "Is the classification of official items correctly endorsed?",
          reference: {
            text: "MCO 5110.4B, Chap 5, par 15",
          },
        },
        {
          number: "0311",
          text: "Are appropriated funds for postage properly used?",
          reference: {
            text: "MPM 41.1.a-b and 41.2.ff and MCO 5110.4B, Chap 5, par 1",
          },
        },
        {
          number: "0312",
          text: "Are postage expenditure reports submitted?",
          reference: {
            text: "DODI 4525.09, 2.2c and MCO 5110.4B, Chap 5, par 32",
          },
        },
        {
          number: "0313",
          text: "Is the OMM conducting regional OMP inspections each fiscal year?",
          reference: {
            text: "MPM 25.1.c. and 41.2.e. and MCO 5110.4B, chap 5, par 6",
          },
        },
      ],
    },
  ],
};

// Force Preservation Council (FPC) Program Checklist Data
export const forcePreservationCouncilChecklist: FACChecklistData = {
  slug: "force-preservation-council",
  applicabilityNote: "This checklist applies to all levels and types of commands.",
  revisedDate: "February 10, 2025",
  sme: {
    name: "LtCol Nathan Harmon",
    email: "nathan.harmon@usmc.mil",
    phone: "(703) 432-5697",
  },
  subsections: [
    {
      id: "01",
      title: "Unit-Specific Items (All commands)",
      questions: [
        {
          number: "0101",
          text: "Has the unit codified its FPC process with a written policy letter or SOP and made it available to all assigned Service Members?",
          reference: {
            text: "MCO 1500.60A, par 4b(3)(n)",
          },
        },
        {
          number: "0102",
          text: "Are FPCs held at least once per month for the active component and not less than semi-annually for the reserve component?",
          reference: {
            text: "MCO 1500.60A, par 4b",
          },
        },
        {
          number: "0103",
          text: "Does the unit SOP discuss how each Service Member is considered through the unit's FPC process?",
          reference: {
            text: "MCO 1500.60A, par 4a(2)(a), 4a(2)(a)1, 4a(2)(a)2, 4b(3)(a)1",
          },
        },
        {
          number: "0104",
          text: "Does the command's profile percentage completion report display an 80% or higher completion rate, showing the command is maintaining each CIRRAS profile in a fully completed state?",
          reference: {
            text: "MCO 1500.60A, par 4a(2)(a)2",
          },
        },
        {
          number: "0105",
          text: "Has the command included procedures within their unit check-in/out processes for the assignment and removal of CIRRAS permissions and to ensure all Marines have an updated CIRRAS profile prior to departing the unit?",
          reference: {
            text: "MCO 1500.60A, par 4b(3)(g)2. NAVMC 1500.50, par 3f, par 5d",
          },
        },
        {
          number: "0106",
          text: 'Does the command\'s policy letter or SOP contain processes to ensure transferred Marines who arrive at the unit with a risk determination of low are assigned to "elevated" for 90 days from their join date and discussed during FPCs while in this status?',
          reference: {
            text: "MCO 1500.60A, par 4b(3)(g)3, NAVMC 1500.50, par 5c",
          },
        },
        {
          number: "0107",
          text: "Are FPC records managed according to National Archives and Records Administration approved dispositions to ensure proper maintenance, accessibility, and preservation, regardless of medium or format?",
          reference: {
            text: "MCO 1500.60A, par 5a; NAVMC 1500.50, par 7b",
          },
        },
        {
          number: "0108",
          text: "Does the command ensure all CIRRAS users have completed annual PII and HIPAA training, as well as the CIRRAS MarineNet training course?",
          reference: {
            text: "MCO 1500.60A, par 4b(3)(c)1e. NAVMC 1500.50, par 3a",
          },
        },
        {
          number: "0109",
          text: "Does the command require and retain appointment letters for all personnel assigned to the FPC Certifier role in CIRRAS?",
          reference: {
            text: "NAVMC 1500.50, par 3h",
          },
        },
        {
          number: "0110",
          text: "Has the command assigned their Higher Headquarters' Commander to the Higher Headquarters Commander user role within the unit's CIRRAS organization?",
          reference: {
            text: "NAVMC 1500.50, par 3j",
          },
        },
        {
          number: "0111",
          text: "Does the unit's policy letter or SOP directly task the Unit Administrator with conducting periodic user role assignment reviews to ensure CIRRAS access is appropriately assigned and unassigned?",
          reference: {
            text: "NAVMC 1500.50, par 3b, par 3c",
          },
        },
      ],
    },
  ],
};

// Records Management Program Checklist Data
export const recordsManagementChecklist: FACChecklistData = {
  slug: "records-management",
  applicabilityNote:
    "This checklist applies to all Marine Corps commands and activities. Records Management (RM) is the responsibility of all Marines in uniform as well as civilian Marines and contractors. In keeping with the Headquarters Marine Corps 3-Phased Approach to electronic records management (ERM), questions within each of the subsections of this checklist lead to compliance in the RM program.",
  revisedDate: "September 16, 2025",
  sme: {
    name: "Mrs. Kristen Meehan",
    phone: "703-571-3927",
  },
  subsections: [
    {
      id: "01",
      title: "Electronic Records Management (ERM)",
      questions: [
        {
          number: "0101",
          text: "Has the command appointed a Command Designated Records Manager (CDRM) in CROSS? Note: Appointed CDRMs must be the rank/grade of E-6/GS-09 or higher. If appointment letters are not generated in CROSS, hardcopy letters can be scanned and uploaded to the 'Documents' and 'Miscellaneous' tabs within CROSS.",
          reference: {
            text: "MCO 5210.11F, par 4b(5)(a) and par 4c(2)(c); MCBul 5210 dtd 29 Aug 25, par 3b(1)(a)1",
          },
        },
        {
          number: "0102",
          text: "Has the commanding officer signed NAVMC 10030, 'Commander's Records Management Acknowledgement Agreement,' within 90 days of assuming command?",
          reference: {
            text: "MCBul 5210 dtd 29 Aug 25, 3b(1)(a)",
          },
        },
        {
          number: "0103",
          text: "Does the CDRM annually monitor Records Management training for the command? Are individual RM training certificates for all CDRM(s) and Staff Section Records Managers (SSRM) uploaded in CROSS? Note: Training events are available at Waypoints, CROSS, or HQMC ARD RM SharePoint homepage. Proof of training is required to be uploaded in CROSS under the 'Documents' tab, 'Training Documents'. For command/block proof of training, CDRMs may upload a signed organizational training roster in CROSS, or a Marine Corps Training Information Management System occasion (MCTIMS) as proof of completion. CDRM and SSRM training certificates are to be uploaded as separate records within the 'Documents' and 'Training Documents' tabs.",
          reference: {
            text: "NARA Bulletin 2017-01, par 3A; SECNAV Instruction 5210.8F, par 5.1, encl(4), par 2b(2) and par 4j; MCO 5210.11F, chap 8, par 5; MCBul 5210 dtd 29 Aug 25, 3b(1)(a)5",
          },
        },
        {
          number: "0104",
          text: "Has the command appointed Staff Section Records Managers (SSRM) in CROSS? Note: SSRMs manage records created and collected separately from the HQ component, i.e., records within sections, directorates, and/or major programs outside of the traditional G1/S1 shops. It is required for each SSRM to upload their individual annual RM training certificate in CROSS.",
          reference: {
            text: "MCO 5210.11F, par 4b(5)(a), par 4c(2)(c), and par 4c(3)(b)",
          },
        },
        {
          number: "0105",
          text: "Has the command identified a file plan in CROSS, and do the identified record schedules correspond with the records maintained in the command's SharePoint Online (SPO) Records Library? UPDATE: It is now the responsibility of the CDRM to account for all command records within one file plan versus multiple command file plans. All separate file plans will \"roll into\" a master command file plan within CROSS. Commands are required to use the new disposition schedule metadata or the available labeling options within Microsoft SPO. Note: If the command has approval to manage paper records, they must be identified on the file plan in CROSS. Locations of the paper records will be annotated in the Excel spreadsheet version.",
          reference: {
            text: "MCO 5210.11F, chap 3, par 3 and Figure 303; ARD's RM SOP, section 3.2.4; SECNAV M-5210.1 Part III, par 2b",
          },
        },
        {
          number: "0106",
          text: "Has the command developed and maintained an updated SOP to govern the creation and maintenance of command records in accordance with ERM practices? Note: A local order, bulletin, or SOP satisfies this requirement. Upload the updated RM SOP into CROSS under the 'Documents' and 'SOP/COOP' tabs.",
          reference: {
            text: "MCO 5210.11F, par 4b(5)(a-c), 4c(2)(a-q), and par 4c(3)(a)",
          },
        },
      ],
    },
    {
      id: "02",
      title: "Paper Records Management",
      questions: [
        {
          number: "0201",
          text: "SKIP TO 0202 IF COMMAND HAS NO PAPER RECORDS ON PREMISE. Does the command have an approved and current NAVMC 10030/1, 'Records Management Paper Waiver Request'? Note: All NAVMC 10030/1s in the Marine Corps have unique expiration dates that are determined by the Records Officer of the Marine Corps. Commands with an approved NAVMC 10030/1 have until the form's expiration date to transition the identified paper records to an electronic format. Failure to do so within the approved timeframe will result in non-compliance. Only under extremely rare circumstances will a NAVMC 10030/1 be approved or renewed. Paper records that are identified as exceptions on an approved NAVMC 11030/1 must be annotated on the command File Plan (Excel version). Add a 'Notes' section (column F) to describe the physical locations of paper records.",
          reference: {
            text: "MCO 5210.11F, Chap 3 par 2a, par 3c, par 5a, Figures 3-1, 3-2, and 3-3",
          },
        },
        {
          number: "0202",
          text: "Does the command have legacy paper records or collections that are being stored off-site at a Federal Records Center that, in some cases, may require access? If so, does the CDRM have an Archives and Records Center Information System (ARCIS) account to submit reference requests when necessary? Note: ARCIS is no longer used to transfer records to FRCs. ARCIS accounts are only provided to primary CDRMs to retrieve records if required for events that require them (legal records holds, discovery, and FOIA requests to name a few). Command records residing in approved ERM systems such as iAPS, DTS, or other enterprise- or government-wide systems of record shall remain resident in their respective systems – no need to transfer them. Annotate types and locations of records residing in ERM systems within the command CROSS file plan.",
          reference: {
            text: "MCO 5210.11F, Chap 3 par 1f(1) and par 3c(3)(b)",
          },
        },
      ],
    },
    {
      id: "03",
      title: "Essential Records",
      questions: [
        {
          number: "0301",
          text: "Has the command developed and maintained an Essential Records (formerly Vital Records) plan? Is it included as part of the command RM SOP? Is it integrated into the command's Continuity of Operations Plan (COOP)? or Does it stand alone? Note: It is recommended that commands adopt their higher headquarters' Continuity of Operations Plans if appropriate. Commands can include their Essential Records and Emergency Action Plans within the adopted COOP. All command sections, directorates, and programs must identify their respective essential records and add that information into the command's master Essential Records inventory. Essential Records inventory must be uploaded to CROSS. Templates and samples are available in CROSS.",
          reference: {
            text: "MCO 5210.11F, par 4a(1)(b)6, par 4b(5)(b-c), par 4c(2)(q), Chap 7; ARD RM SOP, section 5.1",
          },
        },
        {
          number: "0302",
          text: "Has the command conducted an annual inventory of all essential records? Note: Must provide textual and/or electronic evidence than an inventory was conducted. Upload inventory to CROSS.",
          reference: {
            text: "MCO 5210.11F, Chap 7",
          },
        },
        {
          number: "0303",
          text: "Are all essential records current and properly managed throughout their lifecycle? Note: The inspector will take a random sampling of no more than (5) essential records currently being managed. This is to ensure the records are being managed according to the correct Records Schedules and dispositions.",
          reference: {
            text: "MCO 5210.11F, Chap 7",
          },
        },
      ],
    },
    {
      id: "04",
      title: "Capstone",
      note: "This section applies to commands with billets identified in General Records Schedule 6.1.",
      questions: [
        {
          number: "0401",
          text: "Does the command have a Capstone official? If yes, is General Records Schedule 6.1 part of the command file plan? Note: Upload Capstone official information in CROSS. If no, SKIP TO SUBSECTION 5 below.",
          reference: {
            text: "MCO 5210.11F, par 4(b)(12); MCBul 5210 dtd 29 Aug 2025, 3b(1)(a)3.a.",
          },
        },
        {
          number: "0402",
          text: "Has the command responded to the quarterly Capstone reconciliation requirement via the Marine Corps tasker system (ETMS2)? Note: The command task manager must notify the CDRM of this quarterly requirement upon receipt of task. It is an OMB requirement to maintain updates of this information.",
          reference: {
            text: "OMB M-19-21, section 1.1; SECNAVINST 5210.8F, encl(4), par 6.g and encl(5), par 4; SECNAV-M 5210.1, Part 1, par 16.b.(e); MCO 5210.11F Chap 1, 1b(1)(a)",
          },
        },
        {
          number: "0403",
          text: "Upon change of command/rotation/departure of Capstone official, did the CDRM revise the CROSS 'Capstone' tab to reflect changes? Note: If a change of command has occurred, the CDRM must initiate the NAVMC 10030 within 90 days and upload the signed form to CROSS.",
          reference: {
            text: "OMB M-19-21, section 1.1; SECNAVINST 5210.8F, encl(4), par 6.g and encl(5), par 4; SECNAV M-5210.1, Part 1, par 16.b(e); MCBul 5210 dtd 29 Aug 25, par 3b(1)(a)",
          },
        },
      ],
    },
    {
      id: "05",
      title: "Command Chronology Records and Annual Reporting Status",
      questions: [
        {
          number: "0501",
          text: "Has the command submitted command chronologies to the Archives Branch, Marine Corps History Division, by the deadlines provided by receipt of letters and/or emails from the Archives Branch? Command historical summary files include the following elements: Copies of lineage and honors certificates, Copy of streamer entitlement, Copies of past (5) years of command chronologies, Master copy of command/unit insignia and corresponding documentation/correspondence, List of all property, facilities, and/or commemorative sites. Note: Command chronologies are due NLT 90 days after the end of the reporting period. For semiannual submissions, due dates are 30 June and 31 December. For annual submissions, due dates are NLT 31 December.",
          reference: {
            text: "MCO 5750.1H, encl(1), Chap 5; Annex 5 of App A; and MARADMIN 200/25",
          },
        },
      ],
    },
  ],
};

// Reports Management Checklist Data
export const reportsManagementChecklist: FACChecklistData = {
  slug: "reports-management",
  applicabilityNote:
    "This checklist applies to ALL commands. Reports Management is the assurance that information being collected (via a form, request for information, data call, system, etc.) is required by policy, not already available from other sources, is worth the imposition of the burden to collect, and challenged when necessary or no longer needed.",
  revisedDate: "April 29, 2024",
  sme: {
    name: "Mr. Mark A. Kazzi",
    email: "smb_hqmc_reports@usmc.mil",
    phone: "(571) 465-6640",
  },
  subsections: [
    {
      id: "01",
      title: "Reports Management",
      note: "Applies to all commands.",
      questions: [
        {
          number: "0101",
          text: "Has the command designated and appointed, in writing, a Command Reports Manager?",
          reference: {
            text: "MCO 5214.2G, par 4b(4)(b)",
          },
        },
        {
          number: "0102",
          text: "Has the command promulgated command policy (i.e., order or bulletin) for the command's Reports Management Program to ensure organizational reporting requirements are documented, tracked, and in compliance with legal and statutory requirements? Note: Template directive available on ARDB SharePoint site. Reports Management ensures staff agencies are not putting undue burden on staff regarding the completion of reports/surveys, thus taking away from daily tasks. The Reports Management program ensures that reports and reporting systems are compliant with federal mandates (i.e., 5 CFR Part 1320, SSN Reduction Act, etc.) and provide necessary information effectively, efficiently, and economically.",
          reference: {
            text: "MCO 5214.2G, 4b(4)(a), chap 1, par 3a, and SECNAVINST 5210.16, par 5 a-d",
          },
        },
        {
          number: "0103",
          text: "Does the command have a continuity binder for reports management? Note: Recommend continuity binder, to include at minimum: POCs for each section, Marine Corps Order 5214.2G and SECNAV Instruction 5210.16, reports inventory, and documentation of 3-year review.",
          reference: {
            text: "MCO 5214.2G, par 4b(4)(c)",
          },
        },
        {
          number: "0104",
          text: "Has the command published a Reports Inventory of all valid and cancelled recurring reporting requirements? Note: The Reports Inventory is necessary to keep track of what licensed reports are available, eliminates duplication, and can be used as a resource for data that may be needed by other staff sections in the command.",
          reference: {
            text: "MCO 5214.2G, chap 1, par 3a(1), chap 3, par 1, and chap 5, par 2d",
          },
        },
        {
          number: "0105",
          text: "Is the Reports Manager ensuring that information collections are not redundant with forms and information collections of a higher authority? Note: Local forms shall not be used if a higher level form and report (i.e., NAVMC, DD, SF, etc.) already exists for the information being collected.",
          reference: {
            text: "SECNAVINST 5210.16, par 7d-f",
          },
        },
        {
          number: "0106",
          text: "Are reports program managers conducting a review of all existing reports every three years?",
          reference: {
            text: "MCO 5214.2G, chap 1, par 3.a.(4) and chap 5, par 1",
          },
        },
        {
          number: "0107",
          text: "Does the command originate information (reports) requirements (i.e., collection of information is not already mandated by higher authority and not already collected/available by other sources)? Note: Examples of collecting information include, but are not limited to: creation of new forms or duplicative forms; adding additional fields or taking away existing fields; requests for information, data calls, systems, etc. If YES: Complete Section 2. If NO: End of Inspection.",
          reference: {
            text: "MCO 5214.2G",
          },
        },
      ],
    },
    {
      id: "02",
      title: "Commands Who Originate Information Requirements",
      note: "Applies to commands who originate (i.e., not already mandated by higher authority and not already collected/available by other sources) information (reports) requirements such as creation of forms, requests for information, data calls, systems, etc.",
      questions: [
        {
          number: "0201",
          text: "Are all local reporting requirements published within a command directive (i.e., order or bulletin)?",
          reference: {
            text: "MCO 5214.2G, 4b(4)(f)",
          },
        },
        {
          number: "0202",
          text: "Is the Reports Manager ensuring that information collections from 10 or more members of the public (i.e., spouses, contractors, etc.) has OMB approval? Note: Local forms and/or local surveys shall not be used to collect information from members of the public; use of a higher level form approved by OMB is required.",
          reference: {
            text: "MCO 5214.2G, chap 6, par 1d, and 5 CFR Part 1320",
          },
        },
        {
          number: "0203",
          text: "Does the command maintain a case file for all local reporting requirements not covered by higher authority? Note: The case file is required for a report not mandated by higher authority. The case file validates the purpose for the information collection and shows the life of the report, (i.e., what directive required it, when it was required, a sample of the report or snapshot of the database and what Report Control Symbol was assigned to it.",
          reference: {
            text: "MCO 5214.2G, 4b(4)(e), chap 2, par 7a, and Appendix A",
          },
        },
        {
          number: "0204",
          text: "If the command sponsors, or is the program owner of an electronic reports system, is the system registered in Department of Defense Information Technology Portfolio Repository-Department of the Navy (DITPR-DON) to ensure all records within are managed in accordance with SECNAV Note 5210 and SECNAV M-5210.1?",
          reference: {
            text: "MCO 5214.2G, par 5b(2)",
          },
        },
      ],
    },
  ],
};

// Separation, Retirement & Limited Duty Checklist Data
export const separationRetirementChecklist: FACChecklistData = {
  slug: "separation-retirement",
  applicabilityNote:
    "This checklist applies to ALL commands. For inspection purposes, Marine Corps activities effecting separations are accountable for compliance with MCO 1900.16 w/Change 2. Written internal control procedures, i.e., local directives, desktop procedures, checklists, etc., can attribute to a successful functional area and provide continuity.",
  revisedDate: "March 24, 2025",
  sme: {
    name: "Major Cody E. Pennington",
    phone: "(703) 784-9314",
  },
  subsections: [
    {
      id: "01",
      title: "Separation & Retirement Processing",
      questions: [
        {
          number: "0101",
          text: "Are copies of separation documents maintained in (a) command file and as required forwarded to CMC (MMRP) for inclusion in the Marine's OMPF for all cases of discharge, release from active duty, or retirement? To include: Appendix J, MCO 1900.16 w/ch 2, Naval Letter, or NAVMC 10274 (AA form); NAVMC 118(11) Page 11 entries (6105 counseling); DD Form 2648 series including eForm (Pre-separation/transition counseling and career readiness standards Eform)",
          reference: {
            text: "MCO 1900.16 w/ch 2 par 1101.1.b.(2) and c.(3), & par 6105.3.e. Appendix J",
          },
        },
        {
          number: "0102",
          text: "In cases of administrative separation, are copies of separation documents that are resident within the Command Legal Action (CLA) application, or maintained in command files been forwarded to CMC (MMRP) for inclusion in the Marine's OMPF? (CMC (MMRP) will file separation documents in the Marine's OMPF if they are resident in CLA. Otherwise, commands need to manually forward files to CMC (MMRP) for inclusion in the OMPF and validate.)",
          reference: {
            text: "MCO 1900.16 w/ch 2, par 6311.5",
          },
        },
        {
          number: "0103",
          text: 'Does the separation letter for administrative separation cases with a basis of "condition not a disability," not ratable by the Physical Evaluation Board (PEB), endorsed by a Medical Evaluation Board (MEB) Convening Authority?',
          reference: {
            text: "MCO 1900.16 w/ch 2, par 6203.2.b.(1)",
          },
        },
        {
          number: "0104",
          text: 'In cases of administrative separation with a basis of "condition not a disability," is there compliance with the procedures and documentation required per the reference?',
          reference: {
            text: "MCO 1900.16 w/ch 2, par 6203.2f",
          },
        },
        {
          number: "0105",
          text: "Are Marines processed for administrative separation following the first substantiated incident of sexual harassment and wrongful distribution or broadcasting of an intimate image?",
          reference: {
            text: "MCO 1900.16 w/ch 2, par 4103.2.c, and par 6210.8.c",
          },
        },
        {
          number: "0106",
          text: "Are Marines processed for administrative separation once determined to have committed an offense of the following: child abuse, intimate partner abuse, immediate family abuse or any form of domestic abuse?",
          reference: {
            text: "MCO 1900.16 w/ch 2, par 1004.4.f",
          },
        },
      ],
    },
    {
      id: "02",
      title: "Survivor Benefit Plan",
      questions: [
        {
          number: "0201",
          text: 'Does the commander ensure that all retirement eligible Marines complete SBP training via MarineNet prior to retirement and verify that the SBP counseling code "SP" has posted in MCTFS?',
          reference: {
            text: "MCO 1741.11D, pgs 2, 4a-b",
          },
        },
        {
          number: "0202",
          text: 'Does the commander have policies/procedures in place to ensure that spousal concurrence is obtained, and properly notarized on the DD 2656 for all married Marines making an election OTHER than "Spouse Coverage" and any level of coverage OTHER than "Full Gross Pay"?',
          reference: {
            text: "DODI 1332.42 30 Dec 2020, MCO 1741.11D par 4.b.(1) (b)",
          },
        },
        {
          number: "0203",
          text: "Has the command verified that the completed DD Form 2656 was submitted to DFAS at least 30 days prior to a Marine's retirement, transfer to the FMCR, or transfer to TDRL or PDRL? (Command will verify that the TTC training code ZW has been reported in MCTFS reflecting that the DD Form 2656 was sent to DFAS)",
          reference: {
            text: "MCO 1900.16 w/ch 2 par 1406.1, Appendix E, E007.4; MCO 1741.11D par 5.b",
          },
        },
      ],
    },
    {
      id: "03",
      title: "Limited Duty",
      questions: [
        {
          number: "0301",
          text: "Is a Unit Limited Duty Coordinator, SNCO or above, appointed in writing.",
          reference: {
            text: "MCO 1900.16 w/ch 2, par 8110.1b",
          },
        },
        {
          number: "0302",
          text: "Does the Unit Limited Duty Coordinator ensure that Marine-On-Line (MOL) reports, MCTFS and Sailor and Marine Readiness Tracker (SMART) uniformly reflect the status of medically non-deployable, light duty, Temporary Limited Duty (TLD), Permanent Limited Duty (PLD) Marines and those who are processing through the Disability Evaluation System (DES)?",
          reference: {
            text: "MCO 1900.16 w/ch 2, par 8110.1b (1-7)",
          },
        },
        {
          number: "0303",
          text: "Has the unit established internal control procedures for Marines in a non-deployable status over 12 consecutive months to identify, track and initiate administrative or disability separation or submit retention waivers to HQMC (MMSR-2)?",
          reference: {
            text: "MCO 1900.16 w/ch 2, para 1601.3 and 1602.1(a-c)",
          },
        },
        {
          number: "0304",
          text: "Are disabled Marines found unfit to continue naval service by the Navy Physical Evaluation Board (PEB) separated or retired as directed by the CMC (MMSR-4)?",
          reference: {
            text: "MCO 1900.16 w/ch 2, par 8402.2(a-g)",
          },
        },
        {
          number: "0305",
          text: "Are Marines in a Temporary Limited Duty (TLD) status expiring within 60 days scheduled for a reevaluation prior to expiration of the TLD period?",
          reference: {
            text: "MCO 1900.16 w/ch 2, par 8104.4, par 8110.1.b.(7)(e)",
          },
        },
        {
          number: "0306",
          text: "Are all recommendations for periods of Temporary Limited Duty (TLD) exceeding 12 months over the span of a career submitted to the CMC (MMSR-4) for approval with the LDNMA when applicable?",
          reference: {
            text: "MCO 1900.16 w/ch 2, par 8003.24a, par 8104.3a(2), par 8110.2c",
          },
        },
        {
          number: "0307",
          text: "Are Marines with an EAS expiring while on Temporary Limited Duty (TLD) or while going through the Disability Evaluation System (DES) afforded the opportunity to voluntarily extend beyond their current contract until the TLD period or DES process is complete?",
          reference: {
            text: "MCO 1900.16 w/ch 2, par 8111.1",
          },
        },
        {
          number: "0308",
          text: "Are Marines only placed in an involuntary, Convenience of the Government, medical hold status in cases of mental incompetence, physical incapacity, serious contagious disease, or if the Marine poses a hazard to self or others?",
          reference: {
            text: "MCO 1900.16 w/ch 2, par 8003.16",
          },
        },
        {
          number: "0309",
          text: "Are Marines in a light duty status being referred to a Medical Treatment Facility (MTF) for re-evaluation before exceeding 90 days?",
          reference: {
            text: "MCO 1900.16 w/ch 2, par 8103.1-5",
          },
        },
        {
          number: "0310",
          text: 'Do Marines receive approval from the CMC (MMSR-4) before being released "home awaiting orders" while being processed through the Disability Evaluation System?',
          reference: {
            text: "MCO 1900.16 w/ch 2, par 8304.1-2",
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
  "sponsorship-program": sponsorshipProgramChecklist,
  "military-awards": militaryAwardsChecklist,
  "postal-affairs": postalAffairsChecklist,
  "force-preservation-council": forcePreservationCouncilChecklist,
  "records-management": recordsManagementChecklist,
  "reports-management": reportsManagementChecklist,
  "separation-retirement": separationRetirementChecklist,
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
