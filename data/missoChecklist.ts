// MISSO Site Visit Checklist Categories and Items
// Based on MISSO-06 Field Support Team Site Visit Checklist

export type MISSOCategory = {
  id: string;
  name: string;
  shortName: string;
  description: string;
  icon: string;
  items: MISSOChecklistItem[];
};

export type MISSOChecklistItem = {
  id: string;
  question: string;
  trainingCode?: string;
  notes?: string;
};

export const missoCategories: MISSOCategory[] = [
  {
    id: "network-systems",
    name: "Network & Systems",
    shortName: "Network",
    description: "MISSA/MISSO portal access, Teams notifications, and system connectivity",
    icon: "globe",
    items: [
      { id: "1.1", question: "Does the command know/have access to MISSA/MISSO portal and navigate it?" },
      { id: "1.1a", question: "Can they find Software Release Briefs?" },
      { id: "1.1b", question: "Can they find MCTFS cycle calendar?" },
      { id: "1.1c", question: "Can they access Application and Training Information?" },
      { id: "1.1d", question: "Can they access SAAR Downloads?" },
      { id: "1.1e", question: "Can they find PAAs?" },
      { id: "1.1f", question: "Can they access MIO System Change Request?" },
      { id: "1.1g", question: "Can they find MISSO Training Events?" },
      { id: "1.1h", question: "Can they find Contact information?" },
      { id: "1.2", question: "Is the command part of the MISSO Teams page and understand the use of notifications?" },
    ],
  },
  {
    id: "mctfs",
    name: "MCTFS",
    shortName: "MCTFS",
    description: "Marine Corps Total Force System access, commands, and navigation",
    icon: "terminal",
    items: [
      { id: "2.1", question: "Is command accessing MCTFS through Reflection 3270 via software center or via DISA?" },
      { id: "2.2", question: "Does command have an ACID with access to the SF (Kansas City) domain?" },
      { id: "2.3", question: "Does command understand how to find prime data with PRIM command in MCTFS?" },
      { id: "2.4", question: "Does command understand how to use the FIND command in MCTFS?" },
      { id: "2.5", question: "Does command understand how to use HELP DISPLAY MCTFS SYSTEM (F1)?" },
      { id: "2.6", question: "Does command understand how to load multiple productions with shift F11?" },
      { id: "2.7", question: "Does the command understand how to switch between productions with shift F12?" },
      { id: "2.8", question: "Does the command request training concerning MCTFS?", trainingCode: "YT" },
    ],
  },
  {
    id: "mol-management",
    name: "MOL Management",
    shortName: "MOL",
    description: "Organization structure, permissions, user management, and account settings",
    icon: "users",
    items: [
      // Organization Structure
      { id: "3.1.1", question: "Does the command have a current assumption of command letter on file, and is the CO/I-I assigned in MOL?" },
      { id: "3.1.2", question: "Has TTC 444-000 (assigned CO) been ran on the CO/I-I?" },
      { id: "3.1.3", question: "Is the command information correct? Is the command set to the correct time zone in MOL?" },
      { id: "3.1.4", question: "Does command maintain the integrity of the 'By Dir' template and is a signed copy of the By Dir letter on file?" },
      { id: "3.1.5", question: "Is an Acting Manager assigned? If so, is that member still in the command?" },
      // Manage Permissions
      { id: "3.2.1", question: "Who in the command is assigned as the MOL Coordinator? If not, why not? If not the Adjutant or Admin Chief, why not?" },
      { id: "3.2.2", question: "Have the MOL Coordinator pull the external permissions report. Are there any personnel listed on this report? Do they need this access?" },
      { id: "3.2.3", question: "Does the command have any custom templates? Are there any personnel assigned to these templates?" },
      // User Management
      { id: "3.3.1", question: "Are former or retired Marines identified as civilians via sponsored account? Is the sponsored account set up as their primary account?" },
      { id: "3.3.2", question: "Does the command have access to and understand the requirement for joining their command supported Non-Marines?" },
      { id: "3.3.3", question: "Have the command navigate to and show that they are familiar with the process of joining a Non-Marine." },
      { id: "3.3.4", question: "Does the command request additional training on the joining Non-Marines into MCTFS via MOL?", trainingCode: "YV" },
      // My Account
      { id: "3.4.1", question: "Within Edit Account, is the members email current for member." },
      { id: "3.4.2", question: "If member has multiple accounts, do they know how to switch between them?" },
      { id: "3.4.3", question: "Is member using Change Password to change their password or update their account recovery options." },
      { id: "3.4.4", question: "Is member using Notification Settings to change their MOL Notification Settings." },
      // My Messages
      { id: "3.5.1", question: "Has users checked Send Emails and selected a working email address for notifications?" },
      { id: "3.5.2", question: "Does the user have any unread messages and understand how to view messages?" },
      // My Permissions
      { id: "3.6.1", question: "Can the user find their permissions assigned within MOL?" },
      { id: "3.6.2", question: "Is the user missing any permissions needed for their role?" },
      { id: "3.6.3", question: "Are the users utilizing the content sensitive 'help' button which brings forward only the information pertinent to the page?" },
      { id: "3.6.4", question: "Does the command request training concerning MOL Coordinator?", trainingCode: "ZA" },
    ],
  },
  {
    id: "leave-liberty",
    name: "Leave & Liberty",
    shortName: "Leave",
    description: "Leave/Liberty module usage, leave types, and request tracking",
    icon: "calendar",
    items: [
      { id: "4.1", question: "Does the command utilize the Leave/Liberty module?" },
      { id: "4.2", question: "Does the command utilize the proper Leave types for their request?" },
      { id: "4.3", question: "Does the command know how to find pending and completed requests?" },
    ],
  },
  {
    id: "promotions",
    name: "Promotions",
    shortName: "Promo",
    description: "Promotion recommendations, calendar key dates, and approval workflow",
    icon: "trending-up",
    items: [
      { id: "5.1", question: "Does the command utilize the promotion module?" },
      { id: "5.2", question: "Is the CO the only individual approving promotion recommendations and will not promotes?" },
      { id: "5.3", question: "Does the command understand how to read the Calendar Key dates?" },
      { id: "5.4", question: "Is the command aware that will not promotes have been discontinued and will require not recommendations after select grade?" },
    ],
  },
  {
    id: "bic",
    name: "BIC Management",
    shortName: "BIC",
    description: "Billet Identification Code management, TFSMS access, and excess BICs",
    icon: "briefcase",
    items: [
      { id: "6.1", question: "Does the command report BICs in MOL via the BIC Module?" },
      { id: "6.2", question: "Does the command have access to the TFSMS website in order to obtain the unit's T/O?" },
      { id: "6.3", question: "Does the command understand how to assign excess BICs?" },
    ],
  },
  {
    id: "epar",
    name: "EPAR",
    shortName: "EPAR",
    description: "Electronic Personnel Action Request forms and instructions",
    icon: "file-text",
    items: [
      { id: "7.1", question: "Does the command utilize the EPAR?" },
      { id: "7.2", question: "Are there any EPARs in the command scope awaiting action?" },
      { id: "7.3", question: "Does the command understand the use of Forms and Instructions?" },
    ],
  },
  {
    id: "tts",
    name: "Trouble Ticket Service",
    shortName: "TTS",
    description: "Trouble ticket creation, training requests, and forms",
    icon: "help-circle",
    items: [
      { id: "8.1", question: "Does the command utilize the TTS?" },
      { id: "8.2", question: "Are there any TTSs in the command scope awaiting action?" },
      { id: "8.3", question: "Does the command understand the use of Forms and Instructions?" },
      { id: "8.4", question: "Does the command understand how to request training for all FoS via a TTS?" },
    ],
  },
  {
    id: "travel",
    name: "Travel",
    shortName: "Travel",
    description: "Outbound and inbound interview modules for PCS/PCA/Separations",
    icon: "map",
    items: [
      // Outbound Interview
      { id: "9.1.1", question: "Does the command have access to the Outbound Interview Module?" },
      { id: "9.1.2", question: "Has the command prepared any orders within this module? If yes, review a copy." },
      { id: "9.1.3", question: "Does the command utilize the Outbound Interview Process for PCS/PCA/Separations?" },
      { id: "9.1.4", question: "Are there any interviews in the command scope awaiting action?" },
      { id: "9.1.5", question: "Does the command request training on the Outbound Interview Module?", trainingCode: "YW" },
      // Inbound Interview
      { id: "9.2.1", question: "Does the command have access to the Inbound Interview Module?" },
      { id: "9.2.2", question: "Has the command properly onboarded all available personnel?" },
      { id: "9.2.3", question: "Has the command ensured that all Inbound Interview are approved with the correct report date?" },
      { id: "9.2.4", question: "Are there any interviews in the command scope awaiting action?" },
      { id: "9.2.5", question: "Are there any Inbound Interviews with Travel Vouchers awaiting member?" },
      { id: "9.2.6", question: "Does the command request training on the Inbound Interview Module?", trainingCode: "YZ" },
    ],
  },
  {
    id: "umsr",
    name: "UMSR",
    shortName: "UMSR",
    description: "Unit Management Status Report, morning reports, and personnel accountability",
    icon: "clipboard-list",
    items: [
      { id: "10.1.1", question: "Does the command utilize the UMSR for their morning report?" },
      { id: "10.1.2", question: "Does the command publish the UMSR daily?" },
      { id: "10.1.3", question: "Does the command understand the additional duty elements and ensure they are not outdated?" },
      { id: "10.1.4", question: "Does the command work the UMSR reports (Leave/PTAD/Special Liberty, Join/Drop, Loss/Gain Activity, Duplicate Join)?" },
      { id: "10.1.5", question: "Does the command have access to and understand the requirement for updating their personnel's personnel accountability in the event of a disaster?" },
      { id: "10.1.6", question: "Have the command navigate to and show that they can input data on behalf of one of their personnel." },
      { id: "10.1.7", question: "Does the command request additional training on the personnel accountability?" },
      { id: "10.1.8", question: "Does the unit coordinate Personnel Accountability through the MISSO (including exercises and natural disasters)?" },
    ],
  },
  {
    id: "cla-adsep",
    name: "Command Legal Action",
    shortName: "CLA",
    description: "CLA/ADSEP preparers, certifiers, endorsers, and SJA coordination",
    icon: "shield",
    items: [
      { id: "11.1.1", question: "Is the command utilizing CLA?" },
      { id: "11.1.2", question: "Who is the command's POC at SJA?" },
      { id: "11.1.3", question: "Does the command request training on the Command Legal Action Module?", trainingCode: "ZB" },
    ],
  },
  {
    id: "family-programs",
    name: "Family Programs",
    shortName: "Family",
    description: "Family Readiness Module and Family Care Plans",
    icon: "home",
    items: [
      { id: "12.1", question: "Does the command know where to reference the Family Readiness Module training material via the MISSA/MISSO portal?" },
      { id: "13.1", question: "Does the command know where to reference the Family Care Plan Module training material via the MISSA/MISSO portal?" },
      { id: "13.2", question: "Does the command request training on the Family Care Plan Module?", trainingCode: "ZC" },
    ],
  },
  {
    id: "jepes",
    name: "JEPES",
    shortName: "JEPES",
    description: "Junior Enlisted Performance Evaluation System - Admin Dashboard, Tools, SER",
    icon: "star",
    items: [
      // Admin Dashboard
      { id: "14.1.1", question: "Does the command know how to create a new occasion?" },
      { id: "14.1.2", question: "Does the command know how to assign contributors?" },
      { id: "14.1.3", question: "Does the command know how to Modify an occasion?" },
      { id: "14.1.4", question: "Does the command know how to delete an occasion?" },
      { id: "14.1.5", question: "Does the command understand how to use the Reporting Chain view?" },
      { id: "14.1.6", question: "Does the command understand how to use the promotion submodules (Grade Select, Remedial, Restricted, Rec/Non-Rec)?" },
      { id: "14.1.7", question: "Does the command have conflicting Rec/Non from what's in the Promotion Recommendations?" },
      { id: "14.1.8", question: "Does the command understand how to view Archived Occasions and JEPES Worksheets?" },
      { id: "14.1.9", question: "Does the command understand how to make command corrections?" },
      { id: "14.1.10", question: "Does the command understand how to export JEPES lists to Excel and utilize filters?" },
      // Tools
      { id: "14.2.1", question: "Does the command know how to utilize the MRO Search Org Scope?" },
      { id: "14.2.2", question: "Does the command know how to utilize the MRO Search Occasion Summary?" },
      { id: "14.2.3", question: "Does the command know how to utilize the MRO Search Modifying the Reporting Chain?" },
      { id: "14.2.4", question: "Does the command know how to utilize the MRO Search Global Scope?" },
      { id: "14.2.5", question: "Does the command know how to utilize the MRO Search Create Occasion?" },
      { id: "14.2.6", question: "Does the command know how to utilize the Delinquent Occasions?" },
      { id: "14.2.7", question: "Does the command know how to utilize the Organization Settings?" },
      // Senior Enlisted Reviewer/Command Reviewer
      { id: "14.3.1", question: "Does the command know how to Processing a Requested Review?" },
      { id: "14.3.2", question: "Does the command know how to Processing a Self Initiated Review?" },
      { id: "14.3.3", question: "Does the command know how to Viewing a completed SER as the Reporting Chain?" },
      { id: "14.3.4", question: "Does the command know how to View a Marine's Heat Map?" },
      { id: "14.3.5", question: "Does the command request training on the JEPES Module?", trainingCode: "YS" },
    ],
  },
  {
    id: "command-profile",
    name: "Command Profile",
    shortName: "Profile",
    description: "Command Profile access and navigation",
    icon: "building",
    items: [
      { id: "15.1", question: "Is the command aware of and have access to the Command Profile?" },
      { id: "15.2", question: "Does the command request training on the Command Profile?", trainingCode: "YX" },
    ],
  },
  {
    id: "cognos",
    name: "Cognos Analytics",
    shortName: "Cognos",
    description: "Cognos Analytics access, reports, and training levels",
    icon: "bar-chart",
    items: [
      { id: "16.1", question: "Does the command have access to and utilize Cognos Analytics? How many accounts? And what package? (Enterprise or Unit)" },
      { id: "16.2", question: "Have the command pull the following reports: Alpha roster, Payday roster, Find MISSO toolbox" },
      { id: "16.3", question: "How many members in the command have attended Cognos Analytics training (Beginner, Intermediate, Advanced)?" },
      { id: "16.4", question: "Does the command request training on the Cognos Analytics Module?", trainingCode: "Z4/Z5/Z6" },
    ],
  },
];

// Training Event Codes Reference
export const trainingEventCodes = [
  { code: "YS", module: "JEPES" },
  { code: "YT", module: "MCTFS" },
  { code: "YV", module: "Joining Non-Marines" },
  { code: "YW", module: "Outbound Interview" },
  { code: "YX", module: "Command Profile" },
  { code: "YZ", module: "Inbound Interview" },
  { code: "ZA", module: "MOL Coordinator" },
  { code: "ZB", module: "Command Legal Action" },
  { code: "ZC", module: "Family Care Plan" },
  { code: "Z4", module: "Cognos Beginner" },
  { code: "Z5", module: "Cognos Intermediate" },
  { code: "Z6", module: "Cognos Advanced" },
];

// Key MISSO Links
export const missoLinks = {
  portal: "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/dcmra_mra_mi_missa",
  disa: "https://miap.csd.disa.mil/portal.html",
  tfsms: "https://tfsms.mceits.usmc.mil/",
  commandProfile: "https://www2.manpower.usmc.mil/ncp/",
  mol: "https://mol.tfs.usmc.mil/",
};

// Helper functions
export function getCategoryById(id: string): MISSOCategory | undefined {
  return missoCategories.find((cat) => cat.id === id);
}

export function getTotalChecklistItems(): number {
  return missoCategories.reduce((sum, cat) => sum + cat.items.length, 0);
}

export function getItemsWithTrainingCodes(): MISSOChecklistItem[] {
  return missoCategories.flatMap((cat) => cat.items.filter((item) => item.trainingCode));
}
