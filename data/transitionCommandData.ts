// Transition of Command Item Data
// Used by individual item content components

export interface TransitionReference {
  title: string;
  url: string;
  isQuickLink?: boolean;
}

export interface KeyPoint {
  label: string;
  value: string;
}

// ============================================================================
// CORNERSTONE ATTENDANCE
// ============================================================================

export const CORNERSTONE_DATA = {
  title: "Cornerstone: The Commandant's Combined Commandership Course",
  subtitle: "Complete Cornerstone Course before assuming command",
  keyPoints: [
    { label: "Timeline", value: "Complete before assuming command" },
    { label: "Duration", value: "Two weeks (10 training days)" },
    { label: "Location", value: "Marine Corps University, Quantico, VA" },
    { label: "Authority", value: "Annual MARADMIN (currently MARADMIN 545/24)" },
    { label: "Executive Agent", value: "President of Marine Corps University" },
  ] as KeyPoint[],
  whoMustAttend: [
    "Board-selected Colonels (O-6) and Lieutenant Colonels (O-5)",
    "Lieutenant Colonel-selects slated for command",
    "Sergeants Major (E-9) serving as Senior Enlisted Advisor to board-selected commanders",
    "Navy Officers and Command Master Chiefs in equivalent Marine Corps command billets",
    "Spouses (encouraged but optional) - Spouses Workshop runs during second week",
  ],
  topicsCovered: [
    "Command Legal Authorities (NJP, administrative separations, UCMJ)",
    "Unit Readiness & Resilience (UPFRP, SAPR)",
    "Ethics & Leadership discussions with CMC and SMMC",
    "Organizational Behavior and Command Climate",
    "Warfighting & Strategy aligned with Commandant's Planning Guidance",
  ],
  registrationProcess: [
    "Register no later than 45 days prior to course start date",
    "Registration via online portal managed by Lejeune Leadership Institute (Microsoft Forms link in MARADMIN)",
    "Travel on non-reporting orders funded by parent command",
    "Use Defense Travel System (DTS) for travel authorizations",
  ],
  waiverInfo: {
    authority: "Director of the Lejeune Leadership Institute (LLI)",
    process: "Route through Chain of Command to LLI Director",
    grounds: "Operational necessity (unit deployed) or extreme personal hardship",
    note: "If waiver granted, must attend very next available iteration",
  },
  references: [
    { title: "MARADMIN 545/24 (Current FY)", url: "https://www.marines.mil/News/Messages/MARADMINS/", isQuickLink: true },
    { title: "Lejeune Leadership Institute", url: "https://www.usmcu.edu/Academic-Programs/Lejeune-Leadership-Institute/", isQuickLink: true },
    { title: "Cornerstone Resources", url: "https://www.usmcu.edu/Academic-Programs/Lejeune-Leadership-Institute/Commandants-Combined-Commandership-Course/Resources/" },
  ] as TransitionReference[],
};

// ============================================================================
// CERTIFICATE OF RELIEF (INCOMING)
// ============================================================================

export const COR_INCOMING_DATA = {
  title: "Certificate of Relief (Incoming Commander)",
  subtitle: "Property accountability transfer procedures before assuming command",
  keyPoints: [
    { label: "Timeline", value: "Joint inventories begin T-30 days; CoR signed on Change of Command day" },
    { label: "Review Window", value: "60 calendar days after CoC to report discrepancies" },
    { label: "Primary Authority", value: "MCO 4400.201 (Volumes 1, 3, and 13)" },
    { label: "Procedural Guide", value: "NAVMC 4000.5 (Supply Officer's Internal Controls Handbook)" },
  ] as KeyPoint[],
  propertyToInspect: [
    { category: "Consolidated Memorandum Receipt (CMR)", items: "Radios, vehicles, weapons, optics - all organic equipment" },
    { category: "Garrison Property (GP)", items: "Office furniture, computers, base-owned equipment" },
    { category: "Individual Clothing & Equipment (ICE)", items: "Gear in unit supply warehouse" },
    { category: "Ammunition", items: "Accounted via Total Ammunition Management Information System (TAMIS)" },
    { category: "COMSEC", items: "Classified cryptographic material (requires separate regulated audit)" },
    { category: "Fuel/Credit Cards", items: "Logs and card security" },
    { category: "Non-Appropriated Funds (NAF)", items: "Unit 'cup' or 'mess' funds" },
  ],
  requiredSignatures: [
    { role: "Outgoing Commander", responsibility: "Certifies status and accuracy of accounts at time of relief" },
    { role: "Incoming Commander", responsibility: "Acknowledges status and accepts full responsibility" },
    { role: "Supply Officer (SupO)", responsibility: "Verifies physical inventory was conducted" },
    { role: "Responsible Officers (ROs)", responsibility: "Sign for their specific portions of the CMR" },
  ],
  discrepancyHandling: [
    { method: "Statement of Charges", description: "If Marine admits to losing gear - voluntary payroll deduction" },
    { method: "FLIPL", description: "Financial Liability Investigation of Property Loss - for unknown cause or negligence" },
    { method: "60-Day Review Window", description: "Incoming CO has 60 days to conduct wall-to-wall inventory and report newly discovered discrepancies" },
  ],
  timeline: [
    { time: "T-30 Days", action: "Joint inventories begin" },
    { time: "T-10 Days", action: "Outgoing CO submits Status of Command letter (including CoR) to higher commander" },
    { time: "T-3 Days", action: "Formal Status of Command briefing with higher commander" },
    { time: "Day of CoC", action: "Certificate of Relief officially dated and final signatures applied" },
  ],
  references: [
    { title: "MCO 4400.201 (Property Management)", url: "https://www.marines.mil/News/Publications/MCPEL/", isQuickLink: true },
    { title: "NAVMC 4000.5 (Supply Officer's Internal Controls Handbook)", url: "https://www.marines.mil/News/Publications/MCPEL/" },
  ] as TransitionReference[],
};

// ============================================================================
// STATUS OF COMMAND LETTER
// ============================================================================

export const STATUS_COMMAND_LETTER_DATA = {
  title: "Status of Command Letter",
  subtitle: "Required turnover documentation from outgoing to incoming commander",
  keyPoints: [
    { label: "Purpose", value: "Summarizes overall state of unit for incoming commander" },
    { label: "Requirement", value: "Outgoing CO must brief next higher commander prior to CoC" },
    { label: "Authority", value: "CMC White Letter 3-17 dtd 2 May 2017" },
    { label: "Related Document", value: "Certificate of Relief (supply account specific)" },
  ] as KeyPoint[],
  contentAreas: [
    {
      area: "Personnel Status",
      items: [
        "Current manning strength vs authorized",
        "Personnel readiness (deployability)",
        "Key billet vacancies",
        "Pending PCS gains and losses",
        "Problem Marines (legal holds, admin actions pending)",
        "Marines on limited/light duty",
        "Personnel in training pipeline",
      ],
    },
    {
      area: "Readiness Issues",
      items: [
        "Current DRRS-MC status",
        "METL assessment and training deficiencies",
        "Equipment readiness rates",
        "Critical equipment shortfalls",
        "Deployment status and upcoming deployments",
      ],
    },
    {
      area: "Ongoing Investigations",
      items: [
        "JAGMAN investigations (type, status, subject)",
        "NCIS investigations involving command personnel",
        "IG complaints or inspections pending",
        "EO complaints",
        "SAPR cases (Unrestricted Reports only)",
      ],
    },
    {
      area: "Fiscal Status",
      items: [
        "Status of funds report",
        "Budget execution to date",
        "Outstanding obligations",
        "Unfunded requirements",
        "GTCC delinquencies",
      ],
    },
    {
      area: "Supply and Property",
      items: [
        "Status from Certificate of Relief",
        "Results of most recent inventories",
        "Pending property investigations",
        "Equipment loaned to/from other units",
        "SL-3 shortages",
      ],
    },
    {
      area: "Command Climate",
      items: [
        "Most recent DEOCS results and CAP status",
        "EO/Prohibited Activities concerns",
        "Hazing incidents",
        "Unit morale assessment",
        "Family readiness status",
      ],
    },
  ],
  formatOptions: [
    { format: "Formal Letter", description: "Standard naval letter with enclosures. Best for formal commands where documentation is critical." },
    { format: "Briefing Slides + Binder", description: "PowerPoint covering key areas with supporting documents. Best for complex commands." },
    { format: "Turnover Binder/Folder", description: "Comprehensive binder organized by functional area. Best for detailed reference." },
    { format: "Combination", description: "Formal letter + slides + binder. Best for most commands." },
  ],
  incomingCOPriorities: {
    immediate: [
      "Marines in crisis (suicidal ideation, family emergency, legal hold)",
      "Pending time-sensitive decisions",
      "Safety issues requiring immediate attention",
      "Ongoing operations or exercises",
      "Media or public affairs issues",
    ],
    firstWeek: [
      "Meet with key staff (XO, SgtMaj, primary staff)",
      "Review ongoing investigations",
      "Understand fiscal posture",
      "Review readiness status",
    ],
    first30Days: [
      "Complete required commander training",
      "Publish required policy letters",
      "Conduct initial assessment of all programs",
      "Meet with subordinate commanders/leaders",
    ],
    first60Days: [
      "Review and accept supply account (60-day window)",
      "Complete spot inventories as needed",
      "Publish UPFRP policy statement",
      "Identify issues not disclosed in turnover",
    ],
  },
  references: [
    { title: "CMC White Letter 3-17", url: "https://www.usmcu.edu/Portals/218/CMC%20White%20Letter%203-17%20-%20FINAL.PDF", isQuickLink: true },
    { title: "MCO 4400.201 Volume 3", url: "https://www.marines.mil/News/Publications/MCPEL/" },
    { title: "IGMC Functional Area Checklists", url: "https://www.hqmc.marines.mil/igmc/Units/Inspections-Division/Functional-Area-Checklists-FACs/" },
  ] as TransitionReference[],
};

// ============================================================================
// AVIATION REFRESHER
// ============================================================================

export const AVIATION_REFRESHER_DATA = {
  title: "Aviation Commander Refresher Training",
  subtitle: "Required flight and command training for officers assuming command of flying squadrons",
  keyPoints: [
    { label: "Timeline", value: "Arrive at gaining command 6 months prior to CoC" },
    { label: "Authority", value: "CMC Green Letter 03-05; MARADMIN 270/05" },
    { label: "Waiver Authority", value: "Manpower and Reserve Affairs (M&RA)" },
    { label: "Applies To", value: "Flying squadrons only (VMFA, HMH, VMM, etc.)" },
  ] as KeyPoint[],
  commandsCovered: {
    fixedWing: ["VMFA (Fighter Attack)", "VMGR (Aerial Refueler Transport)", "VMU (Unmanned Aerial Vehicle)"],
    rotaryWing: ["HMH (Heavy Helicopter)", "HMLA (Light Attack Helicopter)", "VMM (Medium Tiltrotor)", "HMX-1"],
    training: ["VMAT (Marine Aviation Training Squadron)", "FRS/RAG equivalent units"],
    notCovered: ["MAGs", "MAWs", "MALS", "H&HS", "ATC units", "Non-flying support squadrons"],
  },
  requiredTraining: [
    {
      name: "Flight Refresher Training",
      purpose: "Restore tactical flight proficiency in aircraft type",
      duration: "4-12 weeks depending on currency",
      location: "Parent squadron or Fleet Replacement Squadron",
      notes: "T/M/S specific syllabus; MAW standardization determines requirements",
    },
    {
      name: "Aviation Commanders Safety Course",
      purpose: "Prepare commanders for aviation safety responsibilities",
      duration: "Approximately 1 week",
      location: "Naval Safety Center, NAS Norfolk, VA",
      notes: "Covers mishap prevention, risk management, safety program management",
    },
    {
      name: "Aviation Commander's Course (MAWTS-1)",
      purpose: "Prepare aviation officers for squadron command",
      duration: "Approximately 1 week",
      location: "MCAS Yuma, AZ",
      notes: "Squadron command responsibilities, maintenance management, resource management",
    },
  ],
  recommendedSequence: [
    "FIRST: Flight Refresher Training - Begin immediately upon arrival",
    "SECOND: Aviation Commanders Safety Course - Complete as soon as seat available",
    "THIRD: Aviation Commander's Course - Schedule closer to Change of Command",
  ],
  references: [
    { title: "MARADMIN 270/05", url: "https://www.marines.mil/News/Messages/Messages-Display/Article/894638/aviation-commanders-preparation-program/", isQuickLink: true },
    { title: "MCO 5100.29C (Safety Program)", url: "https://www.marines.mil/News/Publications/MCPEL/" },
    { title: "MAWTS-1", url: "https://www.3rdmaw.marines.mil/Units/MAWTS-1/" },
    { title: "Naval Safety Center", url: "https://www.safety.navy.mil/" },
  ] as TransitionReference[],
};

// ============================================================================
// SAFETY POLICY STATEMENT (30-DAY)
// ============================================================================

export const SAFETY_POLICY_DATA = {
  title: "Safety Policy Statement",
  subtitle: "30-Day Post Change of Command Requirement",
  keyPoints: [
    { label: "Timeline", value: "Within 30 days of Change of Command" },
    { label: "Authority", value: "MCO 5100.29C, Chapter 2, Para 0204" },
    { label: "IG Inspection", value: "FAC 5100.29, Question 0102" },
    { label: "Purpose", value: "Communicate commitment to Marine Corps Safety Management System" },
  ] as KeyPoint[],
  requiredElements: [
    "Command Commitment - Personal commitment to safety as priority",
    "MCSMS Engagement - All personnel (military and civilian) must actively engage",
    "Risk Management Integration - Applies to all operations",
    "Reporting Expectations - Report hazards, near misses, mishaps without reprisal",
    "Safety Program Structure - Identify Safety Officer, outline responsibilities",
  ],
  distributionRequirements: [
    "Post prominently in common areas",
    "Include in new-join briefs",
    "Brief at all-hands formations",
    "Post on command SharePoint/intranet",
    "Include in unit SOPs",
  ],
  postingLocations: [
    "Unit headquarters building entrance",
    "Common areas (break rooms, gyms, duty huts)",
    "Motor pool",
    "Armory",
    "Work spaces",
    "Flight line (aviation units)",
    "Maintenance bays",
  ],
  aviationAdditional: {
    requirement: "Aviation commands must also initiate CSA, MCAS, and ASPA surveys within 30 days",
    reference: "MCO 5100.29C, Vol-1, Chap 6, Para 060403",
  },
  references: [
    { title: "MCO 5100.29C (Safety Program)", url: "https://www.marines.mil/News/Publications/MCPEL/", isQuickLink: true },
    { title: "IGMC FAC 5100.29", url: "https://www.hqmc.marines.mil/igmc/Units/Inspections-Division/Functional-Area-Checklists-FACs/", isQuickLink: true },
    { title: "Marine Corps Safety Division", url: "https://www.safety.marines.mil/" },
  ] as TransitionReference[],
};

// ============================================================================
// COMMAND TEAM TRAINING (30-DAY)
// ============================================================================

export const COMMAND_TEAM_TRAINING_DATA = {
  title: "Command Team Training",
  subtitle: "30-Day Post Change of Command Requirement",
  keyPoints: [
    { label: "Timeline", value: "Within 30 days of Change of Command" },
    { label: "Authority", value: "MCO 1754.9B, Chapter 2, Para 2.A.(2)" },
    { label: "Coordinator", value: "Family Readiness Officer (FRO) through MCFTB" },
    { label: "Duration", value: "Typically 2-4 hours" },
  ] as KeyPoint[],
  requiredAttendees: [
    "Commanding Officer",
    "Executive Officer",
    "Sergeant Major / Senior Enlisted Leader",
    "Chaplain",
    "Family Readiness Officer (FRO)",
    "Single Marine Representative",
  ],
  encouragedAttendees: [
    "Commanding Officer's Spouse",
    "Senior Enlisted Spouse",
    "Family Readiness Command Team Advisor (FRCTA)",
  ],
  topicsCovered: [
    "Unit Personal and Family Readiness Program (UPFRP) Overview",
    "Communication Strategies (official channels, social media, crisis)",
    "Deployment Support (pre-deployment, sustainment, reintegration)",
    "Volunteer Management",
    "Resources and Referrals (MCCS, Military OneSource)",
    "Crisis Response and Casualty Assistance",
    "Special Circumstances (EFMP, dual-military, geographic bachelors)",
  ],
  schedulingSteps: [
    "Step 1: Contact your FRO (or S-1 if no FRO assigned)",
    "Step 2: FRO contacts Marine Corps Family Team Building (MCFTB)",
    "Step 3: Coordinate schedules for entire command team",
    "Step 4: Complete training and document for IG inspection",
  ],
  relatedRequirements: [
    { timeline: "Within 30 Days", requirement: "Request MCCS representative brief on local services" },
    { timeline: "Within 60 Days", requirement: "Publish UPFRP SOP" },
    { timeline: "Within 90 Days", requirement: "Complete child abuse and domestic abuse training" },
  ],
  references: [
    { title: "MCO 1754.9B (UPFRP)", url: "https://www.marines.mil/portals/1/Publications/MCO%201754.9B.pdf", isQuickLink: true },
    { title: "MCCS Family Programs", url: "https://www.usmc-mccs.org/", isQuickLink: true },
    { title: "Military OneSource", url: "https://www.militaryonesource.mil/" },
  ] as TransitionReference[],
};

// ============================================================================
// SARC BRIEF (30-DAY)
// ============================================================================

export const SARC_BRIEF_DATA = {
  title: "SARC Resource Brief",
  subtitle: "30-Day Post Change of Command Requirement",
  keyPoints: [
    { label: "Timeline", value: "Within 30 days of Change of Command" },
    { label: "Authority", value: "MCO 1752.5C, Chapter 3, Para 8.a" },
    { label: "Who Provides", value: "Installation SARC or supporting command SARC" },
    { label: "Duration", value: "Typically 1-2 hours" },
  ] as KeyPoint[],
  briefTopics: [
    "SAPR Program Overview (Restricted vs Unrestricted reporting)",
    "Commander Responsibilities and non-delegable duties",
    "Your SAPR Personnel (SARC and VAs)",
    "Reporting Procedures",
    "Response Requirements (6-hour, 8-day, 30-day timelines)",
    "Support Resources (VLC, counseling, Safe Helpline)",
    "Special Procedures (MPO, Expedited Transfer, HRRT)",
    "What NOT to Do",
    "Prevention Programs",
    "Local Resources and contacts",
  ],
  keyQuestionsToAsk: [
    "How many SAPR VAs do I currently have appointed? (Minimum: 2)",
    "Are there any open cases in my command?",
    "What is my command's sexual assault reporting history?",
    "What is the 24/7 number for my installation?",
    "Who is my assigned SARC and how do I contact them?",
    "How do I access the 8-Day Incident Report portal (Gear Locker)?",
    "When are CMG meetings held?",
  ],
  nonDelegableDuties: [
    "Submit 8-Day Incident Report (within 8 calendar days)",
    "Attend CMG every 30 days while case is open",
    "Provide monthly updates to victim within 72 hours of CMG",
  ],
  prohibitedActions: [
    "Do NOT conduct command-directed investigation (only MCIO investigates)",
    "Do NOT question alleged offender about the assault",
    "Do NOT attempt to assess credibility of report",
    "Do NOT delay contacting MCIO",
    "Do NOT release victim information",
    "Do NOT discourage reporting",
  ],
  relatedTimelines: [
    { timeline: "30 Days", requirement: "Receive SARC Command Resource Brief" },
    { timeline: "90 Days", requirement: "Publish SAPR Command Policy Statement" },
    { timeline: "Upon Report", requirement: "Notify SARC and MCIO immediately" },
    { timeline: "6 Hours", requirement: "Submit OPREP-3/SIR" },
    { timeline: "8 Days", requirement: "Submit 8-Day Incident Report" },
  ],
  references: [
    { title: "MCO 1752.5C (SAPR Program)", url: "https://www.marines.mil/portals/1/Publications/MCO%201752.5C.pdf", isQuickLink: true },
    { title: "SAPR Gear Locker", url: "https://hqmcportal.hqi.usmc.mil/sites/family/mfb/SitePages/Home.aspx", isQuickLink: true },
    { title: "DoD Safe Helpline", url: "https://safehelpline.org" },
  ] as TransitionReference[],
};

// ============================================================================
// METL REVIEW (30-DAY)
// ============================================================================

export const METL_REVIEW_DATA = {
  title: "Mission Essential Task List (METL) Review",
  subtitle: "30-Day Post Change of Command Requirement",
  keyPoints: [
    { label: "Timeline", value: "Within 30 days of CoC (or 15 days of new mission)" },
    { label: "Authority", value: "MCO 1553.3B, Para 4.b.(3)(a)" },
    { label: "Annual Requirement", value: "METL review and submission also required annually" },
    { label: "System", value: "MCTIMS (Marine Corps Training Information Management System)" },
  ] as KeyPoint[],
  missionTypes: [
    {
      type: "Core Mission",
      description: "Unit's designed capabilities",
      notes: "Core METs from MCTL, incorporated into T&R manuals, generally stable",
    },
    {
      type: "Assigned Mission",
      description: "Specific mission assigned by higher headquarters",
      notes: "Can be modified with HHQ approval, changes based on operational requirements",
    },
  ],
  validationSteps: [
    "Access MCTIMS and review current Core and Assigned Mission METs",
    "Check T&R Manual to ensure METs match community standards",
    "Assess task relevance - do METs accurately reflect unit capabilities?",
    "Conduct Mission Analysis - What is unit designed to do? What has HHQ assigned?",
    "Update as needed (Core METs generally don't change; Assigned METs can be modified with approval)",
  ],
  metAssessments: [
    { rating: "Y (Yes)", meaning: "Unit can accomplish task to established standards. High confidence. Pre-deployment cert complete." },
    { rating: "Q (Qualified Yes)", meaning: "Can achieve output standards, meets most resource/training standards. Specific shortfalls detailed." },
    { rating: "N (No)", meaning: "Unable to accomplish task to prescribed standards at this time." },
  ],
  drrsRequirements: [
    "MET Assessment (Y/Q/N) for each task",
    "Training Remarks - Status of training for each MET",
    "Assessment Remarks - Required for Q or N ratings, explain shortfall and forecast",
    "Forecast - Required when not at Level 1, project when readiness will improve",
  ],
  systems: [
    { name: "MCTIMS", purpose: "Houses METL data", url: "https://mctims.usmc.mil/" },
    { name: "MSHARP", purpose: "Tracks T&R event completion", url: "https://msharp.usmc.mil/" },
    { name: "DRRS-MC", purpose: "Readiness reporting system", url: "Via GCSS-MC or DRRS portal" },
  ],
  references: [
    { title: "MCO 1553.3B (Unit Training Management)", url: "https://www.marines.mil/News/Publications/MCPEL/", isQuickLink: true },
    { title: "MCO 3500.110 (METL Policy)", url: "https://www.marines.mil/News/Publications/MCPEL/" },
    { title: "MCO 3000.13 (Readiness Reporting)", url: "https://www.marines.mil/News/Publications/MCPEL/" },
  ] as TransitionReference[],
};

// ============================================================================
// FUND CONTROL TRAINING (30-DAY)
// ============================================================================

export const FUND_CONTROL_DATA = {
  title: "Fund Control Training",
  subtitle: "Required Within Two Weeks of Assuming Command",
  keyPoints: [
    { label: "Timeline", value: "Within TWO WEEKS of Change of Command" },
    { label: "Authority", value: "SECNAVINST 7000.27D" },
    { label: "Why Two Weeks", value: "CO authority to approve obligating documents cannot be withdrawn" },
    { label: "Refresh Requirement", value: "Appropriations law refresh every 3 years" },
  ] as KeyPoint[],
  requiredCourses: [
    {
      name: "Funds Control for Commanding Officers (FMF8454)",
      requirement: "Required within two weeks of assuming command",
      purpose: "Satisfies Fiscal Law requirement",
    },
    {
      name: "DON Budget Execution (FMF7606)",
      requirement: "Required once in career (not every tour)",
      purpose: "Budget execution fundamentals",
    },
    {
      name: "Appropriations Law Refresh",
      requirement: "Every 3 years for Fund Control Personnel",
      purpose: "Options: FMF8456 or FMF7040 (Fiscal Law 301)",
    },
  ],
  trainingLocations: [
    { name: "PBISweb", url: "https://fmbweb1.nmci.navy.mil/pbis/training/pbisweb_training.cfm", notes: "Primary - requires .mil access" },
    { name: "DoD FM Online (FM myLearn)", url: "https://fmonline.ousdc.osd.mil/Default.aspx", notes: "Alternative option" },
  ],
  threePartTest: {
    description: "Before spending funds, verify:",
    parts: [
      { test: "Necessary", meaning: "Expenditure necessary to accomplish appropriation object, OR contributes materially" },
      { test: "Not Prohibited", meaning: "Not prohibited by law - review legislation for restrictions" },
      { test: "Not Otherwise Provided For", meaning: "Not provided by another appropriation - use most specific" },
    ],
  },
  keyTerms: [
    { term: "Appropriation", definition: "Legal authority to incur obligations and make payments" },
    { term: "Obligation", definition: "Binding agreement that will result in outlays" },
    { term: "Commitment", definition: "Administrative reservation of funds for specific purpose" },
    { term: "Unauthorized Commitment", definition: "Agreement not binding because representative lacked authority" },
  ],
  unauthorizedCommitmentExamples: [
    "Supplies/services ordered by someone not on purchase card or contract",
    "Contractor starts work before contractual document issued",
    "Invoice received but no purchase order or contract exists",
    "Purchase cardholder exceeds single purchase limitation",
    "Purchase that could be obtained from UIF/IIF but purchased commercially",
  ],
  references: [
    { title: "SECNAVINST 7000.27D", url: "https://www.secnav.navy.mil/doni/", isQuickLink: true },
    { title: "DON Financial Management Policy Manual", url: "https://portal.secnav.navy.mil/orgs/FMC/FMC_KM_Library/CurrentFMPM.pdf" },
    { title: "NAVMC 2664 (Financial Guidebook)", url: "https://www.marines.mil/News/Publications/MCPEL/" },
  ] as TransitionReference[],
};

// ============================================================================
// AVIATION SURVEYS (30-DAY)
// ============================================================================

export const AVIATION_SURVEYS_DATA = {
  title: "Aviation Safety Climate Surveys",
  subtitle: "30-Day Post Change of Command Requirement (Aviation Units Only)",
  keyPoints: [
    { label: "Timeline", value: "Within 30 days of CoC, then annually" },
    { label: "Authority", value: "MCO 5100.29C, Vol-1, Chap 6, Para 060403" },
    { label: "IG Inspection", value: "FAC 3750 (Aviation Safety), Question 0103" },
    { label: "Applies To", value: "Flying squadrons, UAS units, MALS, aviation detachments" },
  ] as KeyPoint[],
  surveys: [
    {
      name: "Command Safety Assessment (CSA)",
      purpose: "Addresses squadron safety from aircrew vantage point",
      whoTakes: "Aircrew - pilots, NFOs, aircrew members, anyone who flies",
      measures: "Aircrew perception of safety climate, CRM effectiveness, flight ops safety",
    },
    {
      name: "Maintenance Climate Assessment Survey (MCAS)",
      purpose: "Obtains feedback on safety climate from aircraft maintainers",
      whoTakes: "Plane captains, maintenance control, QA reps, all maintenance personnel",
      measures: "Maintenance safety culture, tool/FOD control, supervision, training",
    },
    {
      name: "Administrative Support Personnel Assessment (ASPA)",
      purpose: "Assesses safety climate for non-aircrew, non-maintenance personnel",
      whoTakes: "S-shop and support personnel (S-1, S-2, S-3 ops staff, S-4, S-6)",
      measures: "General safety awareness, ground safety, motor vehicle safety, off-duty safety",
    },
  ],
  administrationSteps: [
    "DOSS registers command on survey website",
    "Establish survey window (typically 2-4 weeks)",
    "Notify personnel which survey to complete",
    "Monitor participation rates",
    "Retrieve and analyze results after window closes",
    "Brief commander on findings",
  ],
  respondingToFindings: [
    "Review results with DOSS - identify top concerns and lowest scores",
    "Categorize by priority (High: immediate risk; Medium: 30-60 days; Lower: 90+ days)",
    "Develop action plan with root cause, corrective action, timeline, success measure",
    "Communicate to command - thank for participation, share themes, explain actions",
    "Track progress monthly, re-survey annually",
  ],
  surveyWebsite: "https://www.safetyclimatesurveys.org/",
  references: [
    { title: "MCO 5100.29C (Safety Program)", url: "https://www.marines.mil/News/Publications/MCPEL/", isQuickLink: true },
    { title: "Aviation Safety Climate Surveys", url: "https://www.safetyclimatesurveys.org/", isQuickLink: true },
    { title: "Naval Safety Center", url: "https://safetycenter.navy.mil/" },
  ] as TransitionReference[],
};

// ============================================================================
// FAP TRAINING (90-DAY)
// ============================================================================

export const FAP_TRAINING_DATA = {
  title: "Family Advocacy Program (FAP) Commander Training",
  subtitle: "90-Day Post Change of Command Requirement",
  keyPoints: [
    { label: "Timeline", value: "Within 90 days of Change of Command" },
    { label: "Authority", value: "MCO 1754.11A, page 9, par 3b(7)(b)" },
    { label: "IG Inspection", value: "Functional Area Checklist 1754.11 (Family Advocacy Program)" },
    { label: "Duration", value: "Typically 1-2 hours" },
  ] as KeyPoint[],
  overview: "All commanders must be trained on the prevention and response to child abuse and domestic abuse within 90 days of assuming command. This training is provided through the Family Advocacy Program (FAP).",
  requiredAttendees: ["Commanding Officer"],
  recommendedAttendees: [
    "Executive Officer",
    "Sergeant Major / Senior Enlisted Leader",
    "Legal Officer / SJA representative",
  ],
  trainingTopics: [
    "Child abuse prevention and response",
    "Domestic abuse prevention and response",
    "Commander responsibilities under MCO 1754.11A",
    "FAP services and resources",
    "Reporting requirements",
    "Case Management Team (CMT) process",
    "Incident Determination Committee (IDC)",
    "Military Protective Orders (MPO) for domestic abuse",
    "Coordination with MCIO and legal",
  ],
  schedulingSteps: [
    "Contact Installation FAP (located at MCCS)",
    "Request Commander Training - explain you are a new commander needing FAP training within 90 days",
    "Coordinate schedule - training typically requires 1-2 hours",
    "Complete training and obtain documentation (certificate or memo)",
    "File documentation for IG inspection",
  ],
  childAbuseInfo: {
    types: ["Physical abuse", "Sexual abuse", "Emotional abuse", "Neglect"],
    reportingRequirements: [
      "Mandatory reporting obligations",
      "Who to report to",
      "Timeline for reporting",
    ],
    investigationProcess: [
      "FAP role in investigation",
      "MCIO role",
      "Child Protective Services coordination",
    ],
  },
  domesticAbuseInfo: {
    types: ["Physical abuse", "Sexual abuse", "Emotional abuse", "Economic abuse"],
    reportingOptions: [
      "How victims report",
      "Restricted vs. Unrestricted reporting (for domestic abuse)",
      "Safety planning",
    ],
    mpoInfo: [
      "When to issue Military Protective Orders",
      "Contents and enforcement",
      "Coordination with civilian authorities",
    ],
  },
  fapServices: {
    prevention: [
      "New Parent Support Program (NPSP)",
      "Parenting classes",
      "Relationship education",
    ],
    victimServices: [
      "24/7 victim advocacy",
      "Safety planning",
      "Counseling and support",
      "Referrals to other services",
    ],
    offenderIntervention: [
      "Treatment programs",
      "Monitoring",
      "Coordination with command",
    ],
  },
  commanderResponsibilities: {
    prevention: [
      "Promote awareness of FAP services",
      "Ensure Marines know how to get help",
      "Support family readiness programs",
      "Address risk factors (stress, financial issues, etc.)",
    ],
    response: [
      "Take all reports seriously",
      "Ensure immediate safety of victims",
      "Coordinate with FAP and MCIO",
      "Issue MPO when appropriate",
      "Support investigation process",
      "Hold offenders accountable",
    ],
    ongoing: [
      "Participate in Case Management Team (CMT) as required",
      "Monitor command climate for risk factors",
      "Refer Marines to FAP for prevention services",
      "Support families affected by family violence",
    ],
  },
  commonInspectionFindings: [
    "Commander training not completed within 90 days",
    "No documentation of training",
    "Commander unaware of FAP services",
    "MPO procedures not understood",
    "FAP contact information not readily available",
  ],
  keyContacts: [
    { name: "Installation Family Advocacy Program", info: "Contact through MCCS", url: "https://www.usmc-mccs.org/" },
    { name: "National Domestic Violence Hotline", info: "1-800-799-SAFE (7233)", url: "https://www.thehotline.org/" },
    { name: "Military OneSource", info: "1-800-342-9647", url: "https://www.militaryonesource.mil/" },
    { name: "Safe Helpline (for sexual assault)", info: "1-877-995-5247 - Note: For domestic sexual abuse, coordinate with FAP", url: "" },
  ],
  references: [
    { title: "MCO 1754.11A (FAP Program)", url: "https://www.marines.mil/News/Publications/MCPEL/", isQuickLink: true },
    { title: "IGMC Functional Area Checklists", url: "https://www.hqmc.marines.mil/igmc/Units/Inspections-Division/Functional-Area-Checklists-FACs/", isQuickLink: true },
    { title: "MCCS (to find FAP)", url: "https://www.usmc-mccs.org/" },
    { title: "Military OneSource Family Violence", url: "https://www.militaryonesource.mil/health-and-wellness/family-violence" },
    { title: "National Domestic Violence Hotline", url: "https://www.thehotline.org/" },
  ] as TransitionReference[],
};

// ============================================================================
// SAPR COMMAND POLICY STATEMENT (60-DAY)
// ============================================================================

export const SAPR_POLICY_DATA = {
  title: "SAPR Command Policy Statement",
  subtitle: "60-Day and 90-Day Post Change of Command Requirements",
  keyPoints: [
    { label: "60-Day Requirement", value: "Publish SAPR policy statement (MCO 1752.5C, Chap 3, Para 5.a)" },
    { label: "90-Day Requirement", value: "Prominently post command policy statement" },
    { label: "Primary Authority", value: "MCO 1752.5C (Sexual Assault Prevention and Response Program)" },
    { label: "IG Inspection", value: "IGMC Functional Area Checklist (SAPR)" },
  ] as KeyPoint[],
  overview: "You have two SAPR policy requirements: Within 60 Days - Publish a policy statement on sexual assault prevention and response. Within 90 Days - Publish and prominently post a command policy statement that supports SAPR program objectives. These requirements overlap. You should develop one comprehensive SAPR policy that meets both requirements, publish within 60 days, and post prominently within 90 days.",
  requiredElements: [
    {
      element: "Command Commitment to Prevention",
      details: [
        "State your personal commitment to preventing sexual assault",
        "Sexual assault prevention is a command priority",
        "Prevention is everyone's responsibility",
      ],
    },
    {
      element: "Zero Tolerance Statement",
      details: [
        "Sexual assault will not be tolerated",
        "Applies to all personnel in your AOR",
        "Offenders will be held accountable",
      ],
    },
    {
      element: "Reporting Options",
      details: [
        "Explain both Restricted and Unrestricted reporting",
        "Identify where to report (SARC, SAPR VA, MCIO)",
        "Provide 24/7 contact information",
      ],
    },
    {
      element: "Victim Support Commitment",
      details: [
        "Victims will be treated with dignity and respect",
        "Victims will receive appropriate care and services",
        "Protection from retaliation",
      ],
    },
    {
      element: "Retaliation Prohibition",
      details: [
        "Retaliation against victims, reporters, witnesses is prohibited",
        "Applies to coercion, ostracism, discrimination",
        "Command will investigate and address retaliation",
      ],
    },
    {
      element: "SAPR Personnel Identification",
      details: [
        "Identify your SARC (or command-level SARC)",
        "Identify your SAPR VAs",
        "Provide contact information",
      ],
    },
    {
      element: "Training Expectation",
      details: [
        "All personnel will complete annual SAPR training",
        "Training will be conducted by credentialed SAPR VA or SARC",
      ],
    },
    {
      element: "Command Climate Statement",
      details: [
        "Foster environment encouraging prevention and reporting",
        "No fear of retaliation, reprisal, ostracism, or maltreatment",
      ],
    },
  ],
  postingLocations: {
    commonAreas: [
      "Unit headquarters entrance",
      "Break rooms",
      "Duty huts",
      "Gyms/fitness areas",
    ],
    highTrafficAreas: [
      "Barracks common areas",
      "Mess halls",
      "Work centers",
      "Training areas",
    ],
    digitalDistribution: [
      "Unit SharePoint",
      "Unit shared drives",
      "Email distribution to all hands",
    ],
  },
  distributionSteps: [
    "Post hard copies in all required locations",
    "Brief at all-hands formations",
    "Include in new-join package",
    "Brief during annual SAPR training",
    "Post on unit electronic platforms",
  ],
  sarcCoordination: {
    beforePublishing: [
      "Review draft with SARC - ensures policy meets all requirements",
      "Verify SARC and SAPR VA contact information is current",
      "Request SARC input on local resources and procedures",
    ],
    afterPublishing: [
      "Provide copy to SARC for compliance records",
      "Coordinate posting - SARC may assist with locations",
    ],
  },
  additionalRequirements: [
    { requirement: "Appoint SAPR VAs", details: "Minimum 2 per battalion/squadron level, current D-SAACP certification" },
    { requirement: "Publish SAPR SOP", details: "Standard Operating Procedure for SAPR functions in your AOR" },
    { requirement: "Include SAPR VAs in Check-In/Out", details: "New-join brief includes SAPR VA introduction" },
    { requirement: "Maintain SAPR Documentation", details: "Current appointment letters, training certifications, DD Form 2950" },
    { requirement: "Ensure Annual Training Completion", details: "All personnel complete rank-appropriate training" },
  ],
  commonInspectionFindings: [
    "Policy not published within timeline",
    "Policy not posted in prominent locations",
    "Policy missing required elements",
    "Contact information outdated",
    "Personnel unaware of policy",
    "No evidence of SARC coordination",
  ],
  keyContacts: [
    { name: "HQMC SAPR", info: "SMB.Manpower.SAPR@usmc.mil", url: "" },
    { name: "DoD Safe Helpline", info: "1-877-995-5247", url: "https://safehelpline.org" },
  ],
  references: [
    { title: "MCO 1752.5C (SAPR Program)", url: "https://www.marines.mil/portals/1/Publications/MCO%201752.5C.pdf", isQuickLink: true },
    { title: "SAPR Gear Locker", url: "https://hqmcportal.hqi.usmc.mil/sites/family/mfb/SitePages/Home.aspx", isQuickLink: true },
    { title: "DoD SAPR", url: "https://www.sapr.mil" },
    { title: "IGMC Functional Area Checklists", url: "https://www.hqmc.marines.mil/igmc/Units/Inspections-Division/Functional-Area-Checklists-FACs/" },
  ] as TransitionReference[],
};

// ============================================================================
// UPFRP SOP (60-DAY)
// ============================================================================

export const UPFRP_SOP_DATA = {
  title: "Unit, Personal and Family Readiness Program (UPFRP) SOP",
  subtitle: "60-Day Post Change of Command Requirement",
  keyPoints: [
    { label: "Timeline", value: "Within 60 days of Change of Command" },
    { label: "Authority", value: "MCO 1754.9B, Para 4.b" },
    { label: "IG Inspection", value: "Functional Area Checklist 1754.9 (UPFRP)" },
    { label: "Col-Level Note", value: "Must include DRC and URC roles and responsibilities" },
  ] as KeyPoint[],
  overview: "You must publish a Unit, Personal and Family Readiness Program (UPFRP) SOP within 60 days of assuming command. This SOP outlines roles and responsibilities specific to your unit for each UPFRP requirement.",
  requiredElements: [
    "Program Purpose and Scope",
    "Command Team Responsibilities (CO, XO, SgtMaj, Chaplain)",
    "Family Readiness Officer (FRO) Responsibilities",
    "Unit Readiness Coordinator (URC) Role (if applicable)",
    "Deployment Readiness Coordinator (DRC) Role (Col-level commands)",
    "Single Marine Representative Responsibilities",
    "Family Readiness Command Team Advisor (FRCTA) Role",
    "Communication Plan (official channels, social media, crisis)",
    "Deployment Cycle Support (pre-deployment, sustainment, reintegration)",
    "Volunteer Management (recruitment, training, recognition)",
    "Resource Referral Procedures",
    "Privacy and Information Security",
  ],
  lCodes: [
    { code: "FRO", title: "Family Readiness Officer", description: "Assigned to designated billet, responsible for UPFRP coordination" },
    { code: "DRC", title: "Deployment Readiness Coordinator", description: "Col-level commands, communication link between commander and Marines/families" },
    { code: "URC", title: "Unit Readiness Coordinator", description: "Battalion/Squadron level, coordinates unit family readiness activities" },
  ],
  drcAppointmentSteps: [
    "Identify Candidate - select qualified individual (typically Maj/CWO3 and above)",
    "Prepare Appointment Letter - formal appointment by commander",
    "Provide Training - MCFTB training, UPFRP policy familiarization",
    "Notify Subordinate Commands - establish communication protocols",
    "Document in SOP - include DRC role with authorities and limitations",
  ],
  relatedRequirements: [
    { timeline: "30 Days", requirement: "Attend Command Team Training with MCFTB" },
    { timeline: "60 Days", requirement: "Publish UPFRP SOP" },
    { timeline: "90 Days", requirement: "Request comprehensive MCCS brief on local services" },
  ],
  commonInspectionFindings: [
    "UPFRP SOP not published within 60 days",
    "SOP missing required elements",
    "Roles and responsibilities not clearly defined",
    "DRC/URC roles not addressed (Col-level)",
    "Communication plan not established",
    "Volunteer management procedures missing",
    "SOP not updated after personnel changes",
  ],
  references: [
    { title: "MCO 1754.9B (UPFRP)", url: "https://www.marines.mil/portals/1/Publications/MCO%201754.9B.pdf", isQuickLink: true },
    { title: "IGMC Functional Area Checklists", url: "https://www.hqmc.marines.mil/igmc/Units/Inspections-Division/Functional-Area-Checklists-FACs/", isQuickLink: true },
    { title: "MCCS Family Programs", url: "https://www.usmc-mccs.org/" },
    { title: "Military OneSource", url: "https://www.militaryonesource.mil/" },
  ] as TransitionReference[],
};

// ============================================================================
// COMMAND PHILOSOPHY (60-DAY OPTIONAL)
// ============================================================================

export const COMMAND_PHILOSOPHY_DATA = {
  title: "Command Philosophy",
  subtitle: "60-Day Post Change of Command (Optional)",
  keyPoints: [
    { label: "Timeline", value: "Within 60 days (optional but recommended)" },
    { label: "Authority", value: "No specific MCO requirement - listed as optional in New CO Checklist" },
    { label: "Length", value: "1-2 pages maximum" },
    { label: "Purpose", value: "Sets tone, establishes expectations, guides decision-making" },
  ] as KeyPoint[],
  overview: "Publishing a command philosophy or command guidance is optional but strongly recommended. Your command philosophy communicates your expectations, priorities, and leadership approach to all personnel.",
  purposes: [
    { purpose: "Communicate Your Intent", details: "What you expect from your Marines, how you will lead, what success looks like" },
    { purpose: "Establish Priorities", details: "What matters most to you, how to allocate time and resources" },
    { purpose: "Set Standards", details: "Standards for conduct and professionalism, expectations for discipline" },
    { purpose: "Guide Decision-Making", details: "Framework for subordinate decisions, when to act without asking" },
    { purpose: "Build Culture", details: "Define command climate you want, reinforce core values" },
  ],
  recommendedTopics: {
    coreLeadership: ["Mission Focus", "Taking Care of Marines", "Standards and Discipline", "Communication", "Decision-Making Authority"],
    operational: ["Training", "Safety", "Maintenance and Readiness"],
    leadershipDevelopment: ["Professional Development", "Mentorship"],
    cultureAndClimate: ["Integrity and Ethics", "Respect and Dignity", "Accountability"],
  },
  distributionMethods: {
    initial: [
      "All-Hands Formation - read or brief key points personally",
      "Written Distribution - printed copies to all hands, post in common areas",
      "Electronic Distribution - post on SharePoint, email to all hands",
      "Leadership Briefings - brief officers and SNCOs in detail",
    ],
    ongoing: [
      "Reference in decision-making - cite philosophy when making decisions",
      "New Personnel - brief to all new joins, include in check-in process",
      "Periodic Review - reference at safety stand-downs, quarterly training",
    ],
  },
  bestPractices: {
    doThis: [
      "Be authentic - write in your voice",
      "Be specific - avoid generic statements",
      "Be concise - 1-2 pages maximum",
      "Be memorable - include key phrases Marines will remember",
      "Connect to core values",
      "Include your Commander's Intent for operations",
    ],
    avoidThis: [
      "Copy another commander's philosophy verbatim",
      "Make promises you cannot keep",
      "Include so much detail it becomes unreadable",
      "Contradict published policies",
      "Change it frequently (undermines credibility)",
    ],
  },
  commonMistakes: [
    "Too Long - keep to 1-2 pages, Marines will not read a 10-page document",
    "Too Generic - include specific expectations, not just 'be a good Marine'",
    "Copied from Another Commander - write your own authentic philosophy",
    "Inconsistent with Actions - only include things you will actually do",
    "Never Referenced Again - use it in decision-making and communication",
    "Contradicts Policies - review against published orders and regulations",
  ],
  references: [
    { title: "Lejeune Leadership Institute Resources", url: "https://www.usmcu.edu/Academic-Programs/Lejeune-Leadership-Institute/Commandants-Combined-Commandership-Course/Resources/", isQuickLink: true },
    { title: "MCDP 1 (Warfighting)", url: "https://www.marines.mil/News/Publications/MCPEL/" },
    { title: "MCDP 6 (Command and Control)", url: "https://www.marines.mil/News/Publications/MCPEL/" },
  ] as TransitionReference[],
};

// ============================================================================
// PAC POLICY (90-DAY)
// ============================================================================

export const PAC_POLICY_DATA = {
  title: "Prohibited Activities and Conduct (PAC) Policy",
  subtitle: "90-Day Post Change of Command Requirement",
  keyPoints: [
    { label: "Timeline", value: "Within 90 days of Change of Command" },
    { label: "Authority", value: "MCO P5354.1E w/CH 1, Para 020306" },
    { label: "IG Inspection", value: "IGMC Functional Area Checklist (Equal Opportunity/PAC)" },
    { label: "Requirement", value: "Publish AND prominently post" },
  ] as KeyPoint[],
  overview: "You must publish and prominently post a written command policy that implements MCO 5354.1E (Prohibited Activities and Conduct Prevention and Response Policy) within 90 days of assuming command. This policy addresses discrimination, harassment, hazing, bullying, and other prohibited conduct that undermines good order and discipline.",
  requiredElements: [
    "Commander's Commitment (zero tolerance, positive command climate)",
    "Definition of Prohibited Conduct",
    "Reporting Procedures (chain of command, IG, EEO channels)",
    "Investigation Procedures",
    "Protection from Retaliation",
    "Accountability Measures",
    "Training Requirements",
    "Resources and Points of Contact",
  ],
  prohibitedActivities: [
    { activity: "Discrimination", definition: "Treating someone unfavorably because of race, color, religion, sex (including pregnancy), national origin, age, disability, genetic information, sexual orientation, or gender identity." },
    { activity: "Harassment", definition: "Unwelcome conduct based on protected characteristics that creates an intimidating, hostile, or offensive environment." },
    { activity: "Sexual Harassment", definition: "Unwelcome sexual advances, requests for sexual favors, and deliberate or repeated offensive comments or gestures of a sexual nature that affect terms/conditions of employment or create a hostile environment." },
    { activity: "Hazing", definition: "Any conduct whereby someone causes another to suffer or be exposed to any activity that is cruel, abusive, humiliating, oppressive, demeaning, or harmful. Consent does not negate hazing." },
    { activity: "Bullying", definition: "An act of aggression with intent of harming a targeted service member, either physically or psychologically. Includes repeated verbal abuse, social isolation, threatening behavior, cyberbullying." },
    { activity: "Stalking", definition: "Engaging in a course of conduct directed at a specific person that would cause a reasonable person to fear for safety or suffer substantial emotional distress." },
    { activity: "Retaliation", definition: "Taking or threatening to take an adverse action against someone because they reported prohibited conduct or participated in an investigation." },
  ],
  postingRequirements: {
    locations: ["Unit headquarters building", "Common areas (break rooms, duty huts)", "Barracks common areas", "Workspaces", "High traffic areas"],
    standards: ["Eye level, easily readable", "Not hidden among other postings", "Clean, current copy (not faded or torn)", "Framed or protected"],
  },
  commonInspectionFindings: [
    "PAC policy not published within 90 days",
    "Policy not prominently posted",
    "Policy missing required prohibited conduct categories",
    "Outdated policy (previous commander)",
    "Personnel unaware of reporting procedures",
    "Retaliation protections not clearly stated",
  ],
  keyContacts: [
    { name: "IGMC Hotline", info: "1-866-243-3887", url: "https://www.hqmc.marines.mil/igmc/" },
  ],
  references: [
    { title: "MCO P5354.1E w/CH 1 (PAC Policy)", url: "https://www.marines.mil/News/Publications/MCPEL/", isQuickLink: true },
    { title: "IGMC Functional Area Checklists", url: "https://www.hqmc.marines.mil/igmc/Units/Inspections-Division/Functional-Area-Checklists-FACs/", isQuickLink: true },
    { title: "DEOCS", url: "https://www.defenseculture.mil/Assessment-to-Solutions/A2S-Home/" },
  ] as TransitionReference[],
};

// ============================================================================
// SAFETY CLIMATE SURVEY (90-DAY)
// ============================================================================

export const SAFETY_CLIMATE_SURVEY_DATA = {
  title: "Safety Climate Survey (GCASS)",
  subtitle: "90-Day Post Change of Command Requirement (O5/O6 Commands)",
  keyPoints: [
    { label: "Timeline", value: "Within 90 days of CoC, then annually (365 days after results)" },
    { label: "Applies To", value: "O5 and O6-level commands" },
    { label: "Authority", value: "MCO 5100.29C, Para 060402" },
    { label: "IG Inspection", value: "FAC 5100.29, Question 0113" },
  ] as KeyPoint[],
  overview: "O5 and O6-level commanders must complete the appropriate safety climate survey within 90 days of assuming command to establish a baseline for the new commander. This survey is then required annually thereafter.",
  surveyInfo: {
    name: "Ground Climate Assessment Survey (GCASS)",
    website: "https://www.semperfisurveys.org/",
    managedBy: "CMC Safety Division",
    whoTakes: "All military and civilian personnel assigned to command",
    responseType: "Anonymous",
  },
  initiationSteps: [
    "Contact your Safety Officer to initiate GCASS within first 30 days",
    "Register on Semper Fi Surveys website",
    "Set survey window (typically 2-4 weeks)",
    "Notify all hands of survey purpose and dates",
    "Monitor participation rates",
    "Retrieve results after window closes",
  ],
  actionPlanRequirements: {
    steps: [
      "Review results with Safety Officer",
      "Identify priority issues (High/Medium/Lower)",
      "Develop action plan with root cause, corrective action, timeline",
      "Communicate results and actions to command",
      "Track progress monthly",
    ],
    priorityCategories: [
      { priority: "High", description: "Safety hazards creating immediate risk - address immediately" },
      { priority: "Medium", description: "Training deficiencies, communication gaps - address within 30-60 days" },
      { priority: "Lower", description: "Culture changes, resource requests - long-term" },
    ],
  },
  documentationRequirements: [
    "Survey registration date and window",
    "Participation data (total, responses, rate)",
    "Survey results summary and detailed findings",
    "Action plan with issues, actions, completion dates",
    "Progress tracking and evidence of corrective actions",
  ],
  commonInspectionFindings: [
    "Survey not completed within 90 days of CoC",
    "Low participation rates",
    "No documented action plan",
    "Results not communicated to command",
    "No evidence of corrective actions",
    "Annual survey not completed",
  ],
  keyContacts: [
    { name: "CMC Safety Division", info: "(703) 614-1895 / DSN 224-1895", url: "https://www.safety.marines.mil/" },
    { name: "Semper Fi Surveys (GCASS)", info: "For technical issues", url: "https://www.semperfisurveys.org/" },
  ],
  references: [
    { title: "MCO 5100.29C (Safety Program)", url: "https://www.marines.mil/News/Publications/MCPEL/", isQuickLink: true },
    { title: "IGMC Functional Area Checklists", url: "https://www.hqmc.marines.mil/igmc/Units/Inspections-Division/Functional-Area-Checklists-FACs/", isQuickLink: true },
    { title: "Semper Fi Surveys", url: "https://www.semperfisurveys.org/" },
    { title: "Naval Safety Center", url: "https://safetycenter.navy.mil/" },
  ] as TransitionReference[],
};

// ============================================================================
// DEOCS (90-DAY PRIOR TO RELINQUISHING)
// ============================================================================

export const DEOCS_DATA = {
  title: "Defense Equal Opportunity Climate Survey (DEOCS)",
  subtitle: "90 Days Prior to Relinquishing Command / Annual Requirement",
  keyPoints: [
    { label: "Timeline", value: "90 days prior to relinquishing command, then annually" },
    { label: "Authority", value: "MARADMIN 291/19, MCO P5354.1E w/CH 1, Para 0103" },
    { label: "IG Inspection", value: "IGMC Functional Area Checklist (Equal Opportunity)" },
    { label: "Note", value: "Tied to RELINQUISHING command, not assuming" },
  ] as KeyPoint[],
  overview: "You must initiate a Defense Equal Opportunity Climate Survey (DEOCS) 90 days prior to relinquishing command and annually thereafter. DEOCS assesses your command climate regarding equal opportunity, harassment, and organizational effectiveness.",
  surveyInfo: {
    website: "https://www.defenseculture.mil/Assessment-to-Solutions/A2S-Home/",
    surveyWindow: "Minimum 2 weeks for small commands, 3-4 weeks for larger commands",
    responseType: "Anonymous",
    customization: "Limited customization allowed - can add unit-specific questions",
  },
  requestSteps: [
    "Access DEOCS portal at defenseculture.mil",
    "Register your command with unit name, UIC, commander info",
    "Designate Survey Administrator (typically EO representative)",
    "Select survey window dates",
    "Customize survey with tailored questions (optional)",
    "Submit request",
  ],
  timeline: {
    relinquishing: [
      { timing: "90 Days Prior", action: "Initiate DEOCS, open survey window" },
      { timing: "60 Days Prior", action: "Close survey window, retrieve results" },
      { timing: "30-60 Days Prior", action: "Analyze results, develop action plan, brief command" },
      { timing: "At Change of Command", action: "Include DEOCS in turnover materials" },
    ],
    annual: "Complete DEOCS annually, compare results year-over-year, track improvement",
  },
  whatItMeasures: [
    { dimension: "Organizational Climate", areas: "Unit cohesion, trust in leadership, communication, job satisfaction" },
    { dimension: "Equal Opportunity Climate", areas: "Perceptions of discrimination, fair treatment, diversity and inclusion" },
    { dimension: "Harassment Indicators", areas: "Sexual harassment climate, fear of retaliation, confidence in reporting" },
    { dimension: "Leadership Effectiveness", areas: "Trust in supervisors and senior leadership, communication, accessibility" },
    { dimension: "Organizational Effectiveness", areas: "Mission focus, teamwork, resources and support" },
    { dimension: "Work-Life Balance", areas: "Workload management, family support, stress levels" },
  ],
  actionPlanSteps: [
    "Review results - examine overall scores, areas of concern, specific issues",
    "Brief key leaders (XO, SgtMaj, section heads, EO rep)",
    "Develop action plan for each issue (root cause, corrective action, timeline)",
    "Communicate to command - thank for participation, share themes, explain actions",
    "Implement and track progress monthly",
    "Document for turnover to incoming commander",
  ],
  commonInspectionFindings: [
    "DEOCS not initiated 90 days prior to relinquishing command",
    "Annual DEOCS not completed",
    "Low participation rates",
    "No documented action plan",
    "Results not briefed to command",
    "No evidence of corrective actions",
    "DEOCS results not included in turnover",
  ],
  references: [
    { title: "DEOCS Portal", url: "https://www.defenseculture.mil/Assessment-to-Solutions/A2S-Home/", isQuickLink: true },
    { title: "MCO P5354.1E w/CH 1 (PAC Policy)", url: "https://www.marines.mil/News/Publications/MCPEL/", isQuickLink: true },
    { title: "IGMC Functional Area Checklists", url: "https://www.hqmc.marines.mil/igmc/Units/Inspections-Division/Functional-Area-Checklists-FACs/" },
  ] as TransitionReference[],
};

// ============================================================================
// ANNUAL DEOCS
// ============================================================================

export const ANNUAL_DEOCS_DATA = {
  title: "Annual DEOCS",
  subtitle: "Annual Requirement - Command Climate Assessment",
  keyPoints: [
    { label: "Timeline", value: "Annually (within 365 days of previous survey closing)" },
    { label: "Authority", value: "MCO P5354.1E w/CH 1, Para 0103" },
    { label: "IG Inspection", value: "IGMC Functional Area Checklist (Equal Opportunity)" },
    { label: "Applies To", value: "All commands with O5/O6 commanders" },
  ] as KeyPoint[],
  overview: "DEOCS is required annually to maintain awareness of command climate. Annual surveys allow year-over-year comparison to track improvement and identify emerging issues. The annual requirement runs from when your previous survey closes, not from when you assumed command.",
  annualCycle: {
    description: "The annual cycle begins when your survey window closes:",
    steps: [
      "Survey window closes (e.g., March 1)",
      "Next survey must be initiated within 365 days (by following February 28)",
      "Plan to initiate 30 days before deadline to allow for survey window",
      "Recommend consistent annual timing (same time each year)",
    ],
  },
  requestSteps: [
    "Access DEOCS portal at defenseculture.mil",
    "Log in with administrator credentials",
    "Select 'Request New Survey'",
    "Verify/update command information",
    "Set survey window dates (minimum 2 weeks)",
    "Add tailored questions if desired",
    "Submit request (approval typically within 48 hours)",
    "Receive confirmation with survey access codes",
  ],
  whatItMeasures: [
    { dimension: "Organizational Climate", areas: "Unit cohesion, trust in leadership, communication, job satisfaction" },
    { dimension: "Equal Opportunity Climate", areas: "Perceptions of discrimination, fair treatment, diversity and inclusion" },
    { dimension: "Harassment Indicators", areas: "Sexual harassment climate, fear of retaliation, confidence in reporting" },
    { dimension: "Leadership Effectiveness", areas: "Trust in supervisors and senior leadership, communication, accessibility" },
    { dimension: "Organizational Effectiveness", areas: "Mission focus, teamwork, resources and support" },
    { dimension: "Connectedness", areas: "Unit belonging, peer relationships, isolation indicators" },
  ],
  actionPlanRequirements: {
    steps: [
      "Review results with EO representative and key leaders",
      "Compare to previous year - identify trends",
      "Identify priority issues (scores below benchmark, declining scores)",
      "Develop action plan with specific actions, owners, timelines",
      "Communicate results and planned actions to command",
      "Track progress quarterly",
    ],
    priorityCategories: [
      { priority: "High", description: "Issues indicating harassment, discrimination, or significant morale problems - address immediately" },
      { priority: "Medium", description: "Communication gaps, trust issues, leadership accessibility - address within 60 days" },
      { priority: "Lower", description: "Minor culture improvements, suggestions - long-term" },
    ],
  },
  yearOverYearComparison: [
    "Review each dimension against previous year's score",
    "Identify significant changes (positive or negative)",
    "Investigate root causes for declining scores",
    "Document what interventions worked for improving scores",
    "Adjust action plan based on trends",
  ],
  igDocumentation: [
    "Survey registration and window dates",
    "Participation data (total eligible, responses, participation rate)",
    "Survey results (summary and detailed reports)",
    "Action plan with specific corrective actions",
    "Evidence of command communication (meeting notes, emails)",
    "Progress tracking (quarterly updates on action items)",
    "Year-over-year comparison analysis",
  ],
  commonInspectionFindings: [
    "Annual DEOCS not completed within 365 days",
    "Low participation rates (below 50%)",
    "No documented action plan",
    "Results not communicated to command",
    "No evidence of corrective actions implemented",
    "No year-over-year comparison or trend analysis",
    "Action items not tracked or updated",
  ],
  references: [
    { title: "DEOCS Portal", url: "https://www.defenseculture.mil/Assessment-to-Solutions/A2S-Home/", isQuickLink: true },
    { title: "MCO P5354.1E w/CH 1 (PAC Policy)", url: "https://www.marines.mil/News/Publications/MCPEL/", isQuickLink: true },
    { title: "IGMC Functional Area Checklists", url: "https://www.hqmc.marines.mil/igmc/Units/Inspections-Division/Functional-Area-Checklists-FACs/" },
  ] as TransitionReference[],
};

// ============================================================================
// ANNUAL SAFETY SURVEY
// ============================================================================

export const ANNUAL_SAFETY_SURVEY_DATA = {
  title: "Annual Safety Climate Survey",
  subtitle: "Annual Requirement - Safety Program Assessment",
  keyPoints: [
    { label: "Timeline", value: "Annually (within 365 days of previous survey results)" },
    { label: "Ground Units", value: "Ground Climate Assessment Survey (GCASS)" },
    { label: "Aviation Units", value: "CSA, MCAS, ASPA surveys" },
    { label: "Authority", value: "MCO 5100.29C, Para 060402-060403" },
  ] as KeyPoint[],
  overview: "Safety climate surveys are required annually to maintain awareness of safety culture. Ground units use GCASS; aviation units use CSA, MCAS, and ASPA surveys. The annual requirement runs from the previous survey results, creating a continuous assessment cycle.",
  groundUnitsSurvey: {
    name: "Ground Climate Assessment Survey (GCASS)",
    website: "https://www.semperfisurveys.org/",
    whoTakes: "All military and civilian personnel",
    annualCycle: [
      "Survey results received (e.g., April 1)",
      "Next survey must be initiated within 365 days",
      "Recommend same time each year for consistency",
      "Coordinate with Safety Officer to schedule",
    ],
  },
  aviationUnitsSurveys: {
    surveys: [
      { name: "Command Safety Assessment (CSA)", whoTakes: "Aircrew (pilots, NFOs, aircrewmen)" },
      { name: "Maintenance Climate Assessment Survey (MCAS)", whoTakes: "All maintenance personnel" },
      { name: "Administrative Support Personnel Assessment (ASPA)", whoTakes: "S-shop and support personnel" },
    ],
    website: "https://www.safetyclimatesurveys.org/",
    note: "All three surveys should be conducted during same window for comprehensive assessment",
  },
  initiationSteps: [
    "Coordinate with Safety Officer/DOSS 30 days before deadline",
    "Register on appropriate survey website (GCASS or aviation surveys)",
    "Set survey window (typically 2-4 weeks)",
    "Notify all hands of survey purpose and timeline",
    "Monitor participation rates daily during window",
    "Retrieve and analyze results after window closes",
  ],
  actionPlanRequirements: {
    steps: [
      "Review results with Safety Officer",
      "Compare to previous year - identify trends",
      "Prioritize issues by risk level",
      "Develop action plan with specific actions, responsible parties, timelines",
      "Brief commander on findings and plan",
      "Communicate to command (what you learned, what you're doing)",
      "Track progress monthly",
    ],
    priorityCategories: [
      { priority: "High", description: "Safety hazards creating immediate risk - address immediately" },
      { priority: "Medium", description: "Training gaps, procedural issues - address within 30-60 days" },
      { priority: "Lower", description: "Culture changes, resource requests - long-term action" },
    ],
  },
  igDocumentation: [
    "Survey registration date and window",
    "Participation data (total eligible, responses, rate)",
    "Survey results (summary and detailed findings)",
    "Year-over-year comparison analysis",
    "Action plan with issues, actions, responsible parties, completion dates",
    "Progress tracking (monthly updates)",
    "Evidence of command communication (briefs, emails, formations)",
    "Evidence of corrective actions implemented",
  ],
  commonInspectionFindings: [
    "Annual survey not completed within 365 days",
    "Low participation rates",
    "No documented action plan",
    "Results not compared to previous year",
    "No evidence of corrective actions",
    "Results not communicated to command",
    "Action items not tracked or updated",
  ],
  keyContacts: [
    { name: "CMC Safety Division", info: "(703) 614-1895 / DSN 224-1895", url: "https://www.safety.marines.mil/" },
    { name: "Semper Fi Surveys (GCASS)", info: "For ground units", url: "https://www.semperfisurveys.org/" },
    { name: "Aviation Safety Climate Surveys", info: "For aviation units", url: "https://www.safetyclimatesurveys.org/" },
  ],
  references: [
    { title: "MCO 5100.29C (Safety Program)", url: "https://www.marines.mil/News/Publications/MCPEL/", isQuickLink: true },
    { title: "Semper Fi Surveys (GCASS)", url: "https://www.semperfisurveys.org/", isQuickLink: true },
    { title: "Aviation Safety Climate Surveys", url: "https://www.safetyclimatesurveys.org/" },
    { title: "Naval Safety Center", url: "https://safetycenter.navy.mil/" },
  ] as TransitionReference[],
};

// ============================================================================
// ANNUAL T/E REVIEW
// ============================================================================

export const ANNUAL_TE_REVIEW_DATA = {
  title: "Annual Table of Equipment (T/E) Review",
  subtitle: "Annual Requirement - Equipment Authorization Validation",
  keyPoints: [
    { label: "Timeline", value: "Annually" },
    { label: "Authority", value: "MCO 4400.150 (Equipment Allowances)" },
    { label: "System", value: "Table of Authorized Material and Control Number System (TAMCN) / TFSMS" },
    { label: "Applies To", value: "All commands with assigned equipment" },
  ] as KeyPoint[],
  overview: "The annual T/E review ensures your unit's equipment authorizations match your mission requirements and that your on-hand equipment aligns with authorizations. This review identifies over-authorizations, under-authorizations, and equipment that should be redistributed.",
  teTypes: [
    { type: "Type I Allowance", description: "Minimum essential equipment required to accomplish mission. Automatically issued." },
    { type: "Type II Allowance", description: "Equipment that enhances capability. Issued based on availability and priority." },
    { type: "Type III Allowance", description: "Equipment for special missions or contingencies. Requires specific approval." },
  ],
  annualReviewProcess: [
    "Obtain current T/E from TFSMS or G-4/S-4",
    "Compare T/E authorizations to mission requirements",
    "Validate on-hand equipment against T/E",
    "Identify shortfalls and excesses",
    "Submit change requests through appropriate channels",
    "Document review for IG inspection",
  ],
  tfsmsValidation: {
    description: "Total Force Structure Management System (TFSMS) is the system of record:",
    steps: [
      "Access TFSMS through appropriate portal",
      "Review current T/E for your UIC",
      "Validate each line item (authorized vs on-hand)",
      "Identify discrepancies between T/E and CMR",
      "Submit exception requests for mission-essential variances",
      "Save/print documentation for records",
    ],
  },
  commonIssues: [
    { issue: "Over-authorization", action: "Unit has more authorization than needed - coordinate with HHQ for T/E adjustment" },
    { issue: "Under-authorization", action: "Mission requires more than T/E allows - submit authorization increase request" },
    { issue: "Excess equipment", action: "On-hand exceeds T/E - coordinate redistribution or turn-in" },
    { issue: "Equipment shortfall", action: "On-hand less than T/E - submit requisition or coordinate with HHQ" },
    { issue: "Mission change", action: "New mission requires different equipment - submit T/E modification request" },
  ],
  igDocumentation: [
    "Current T/E printout or TFSMS extract",
    "Annual review documentation (signed by commander)",
    "Comparison of T/E to on-hand (CMR reconciliation)",
    "Change requests submitted (with status)",
    "Exception approvals for variances",
    "Evidence of review completion date",
  ],
  commonInspectionFindings: [
    "Annual T/E review not completed or documented",
    "T/E does not match current mission",
    "On-hand equipment not reconciled with T/E",
    "Excess equipment not reported or redistributed",
    "Shortfalls not requisitioned or documented",
    "Change requests not submitted for known mismatches",
  ],
  references: [
    { title: "MCO 4400.150 (Equipment Allowances)", url: "https://www.marines.mil/News/Publications/MCPEL/", isQuickLink: true },
    { title: "TFSMS", url: "https://tfsms.mccdc.usmc.mil/", isQuickLink: true },
    { title: "MCO 4400.201 (Property Management)", url: "https://www.marines.mil/News/Publications/MCPEL/" },
  ] as TransitionReference[],
};

// ============================================================================
// ANNUAL INVENTORY
// ============================================================================

export const ANNUAL_INVENTORY_DATA = {
  title: "Annual Wall-to-Wall Inventory",
  subtitle: "Annual Requirement - Property Accountability",
  keyPoints: [
    { label: "Timeline", value: "Annually (within 12 months of previous inventory)" },
    { label: "Authority", value: "MCO 4400.201 Volume 3, Chapter 5" },
    { label: "Applies To", value: "All CMR items, GP items, ammunition, COMSEC" },
    { label: "Critical Note", value: "Must be 100% hands-on inventory" },
  ] as KeyPoint[],
  overview: "The annual wall-to-wall inventory is a complete physical inventory of all property assigned to your command. This is not a sampling - it requires hands-on verification of every item on your CMR, Garrison Property account, and other accountable property.",
  propertyToInventory: [
    { category: "Consolidated Memorandum Receipt (CMR)", items: "All organic equipment: vehicles, weapons, radios, optics, etc." },
    { category: "Garrison Property (GP)", items: "Base-owned equipment: furniture, computers, appliances" },
    { category: "Ammunition", items: "All ammunition accounted in TAMIS" },
    { category: "COMSEC", items: "Cryptographic material (separate regulated inventory procedures)" },
    { category: "ICE", items: "Individual Clothing and Equipment in unit supply warehouse" },
    { category: "Fuel/HAZMAT", items: "Fuel logs, HAZMAT inventory" },
    { category: "Non-Appropriated Funds (NAF) Property", items: "Unit fund property" },
  ],
  inventoryProcedures: {
    preparation: [
      "Obtain current CMR/property records",
      "Schedule inventory (allow adequate time for 100% coverage)",
      "Assign inventory teams (recommend mixed teams)",
      "Prepare inventory sheets (serial number, nomenclature, location)",
      "Brief all Responsible Officers on their areas",
    ],
    execution: [
      "Conduct hands-on count of every item",
      "Verify serial numbers against records",
      "Check condition and serviceability",
      "Document discrepancies immediately",
      "Photograph damaged or missing items",
      "Complete all areas before declaring complete",
    ],
    postInventory: [
      "Reconcile inventory results with property records",
      "Initiate FLIPL for missing items",
      "Update records for any discrepancies found",
      "Submit completed inventory to Supply Officer",
      "Commander signs inventory completion certification",
    ],
  },
  cmrVerification: {
    description: "The Consolidated Memorandum Receipt (CMR) requires special attention:",
    requirements: [
      "100% serial number verification",
      "CRANE reconciliation (for serialized items in CRANE)",
      "Verify all items in correct location",
      "Confirm all items are serviceable or properly identified as NMC",
      "Validate Responsible Officer assignments",
    ],
  },
  discrepancyHandling: [
    { type: "Missing Items", action: "Initiate Financial Liability Investigation of Property Loss (FLIPL)" },
    { type: "Damaged Items", action: "Document condition, initiate repair or survey as appropriate" },
    { type: "Found Items", action: "Document and add to property records, investigate source" },
    { type: "Serial Number Mismatch", action: "Investigate and correct records, may require research" },
    { type: "Location Discrepancy", action: "Update records to reflect actual location" },
  ],
  igDocumentation: [
    "Inventory completion certification (signed by commander)",
    "Inventory date and scope (what was inventoried)",
    "Inventory results (complete, discrepancies found, corrective actions)",
    "FLIPL documentation for any missing items",
    "Reconciliation with CMR and other property records",
    "Evidence of previous inventory date (to verify annual compliance)",
  ],
  commonInspectionFindings: [
    "Annual inventory not completed within 12 months",
    "Inventory not comprehensive (some areas/items missed)",
    "Serial numbers not verified",
    "Discrepancies not investigated or documented",
    "Missing items not processed through FLIPL",
    "Inventory not signed by commander",
    "CMR not reconciled with inventory results",
  ],
  references: [
    { title: "MCO 4400.201 Volume 3 (Property Management)", url: "https://www.marines.mil/News/Publications/MCPEL/", isQuickLink: true },
    { title: "NAVMC 4000.5 (Supply Officer's Internal Controls Handbook)", url: "https://www.marines.mil/News/Publications/MCPEL/", isQuickLink: true },
    { title: "IGMC Functional Area Checklists (Supply)", url: "https://www.hqmc.marines.mil/igmc/Units/Inspections-Division/Functional-Area-Checklists-FACs/" },
  ] as TransitionReference[],
};

// ============================================================================
// ANNUAL METL REVIEW
// ============================================================================

export const ANNUAL_METL_REVIEW_DATA = {
  title: "Annual METL Review",
  subtitle: "Annual Requirement - Mission Essential Task List Assessment",
  keyPoints: [
    { label: "Timeline", value: "Annually" },
    { label: "Authority", value: "MCO 1553.3B, Para 4.b.(3)(a)" },
    { label: "System", value: "MCTIMS (Marine Corps Training Information Management System)" },
    { label: "Reporting", value: "Feeds into DRRS-MC readiness reporting" },
  ] as KeyPoint[],
  overview: "The annual METL review ensures your unit's Mission Essential Task List remains aligned with your core and assigned missions. This review validates task applicability, updates MET assessments, and feeds directly into readiness reporting through DRRS-MC.",
  metlComponents: [
    { component: "Core Mission Essential Tasks", description: "Tasks based on unit's designed capabilities (from T&R Manual). Generally stable, based on unit type." },
    { component: "Assigned Mission Essential Tasks", description: "Tasks assigned by higher headquarters for specific mission. Can change based on operational requirements." },
    { component: "Supporting Tasks", description: "Tasks that enable accomplishment of METs. Tracked in training but not assessed in DRRS." },
  ],
  annualReviewProcess: [
    "Access MCTIMS and export current METL",
    "Review T&R Manual for any updates to Core METs",
    "Validate Core METs match current T&R guidance",
    "Review Assigned METs with HHQ for continued applicability",
    "Assess each MET (Y/Q/N) based on current training status",
    "Update MCTIMS with any changes",
    "Submit to HHQ for approval (if changes made)",
    "Update DRRS-MC to reflect current assessments",
  ],
  metAssessments: [
    { rating: "Y (Yes)", meaning: "Unit can accomplish task to established standards. High confidence. Pre-deployment certification complete." },
    { rating: "Q (Qualified Yes)", meaning: "Can achieve output standards, meets most resource/training standards. Specific shortfalls exist and are documented." },
    { rating: "N (No)", meaning: "Unable to accomplish task to prescribed standards at this time. Significant training or resource gaps exist." },
  ],
  mctimsProcedures: {
    accessingMetl: [
      "Log into MCTIMS with CAC credentials",
      "Navigate to your unit's METL",
      "Export current METL for offline review",
    ],
    updatingMetl: [
      "Review each MET for continued applicability",
      "Update assessment (Y/Q/N) based on training status",
      "Add assessment remarks for Q or N ratings",
      "Include forecast for returning to Y status",
      "Submit changes for approval",
    ],
    validation: [
      "Verify METs match T&R Manual requirements",
      "Confirm all applicable METs are listed",
      "Ensure assessments reflect actual training status",
      "Cross-reference with DRRS-MC reporting",
    ],
  },
  drrsConnection: {
    description: "METL assessments directly feed DRRS-MC readiness reporting:",
    requirements: [
      "MET assessments must be current (updated within reporting period)",
      "Training remarks explain current assessment",
      "Assessment remarks required for Q or N ratings (explain shortfall)",
      "Forecast required for Q or N ratings (when will return to Y)",
      "DRRS-MC must reflect current MCTIMS data",
    ],
  },
  igDocumentation: [
    "Current METL printout or MCTIMS extract",
    "Annual review documentation (signed by commander)",
    "MET assessments with supporting rationale",
    "Training remarks for each MET",
    "Forecast for METs not at Y rating",
    "Correlation to DRRS-MC reporting",
    "HHQ approval for any METL changes",
  ],
  commonInspectionFindings: [
    "Annual METL review not completed or documented",
    "METL not aligned with current T&R Manual",
    "MET assessments outdated or not realistic",
    "No training remarks or assessment remarks for Q/N ratings",
    "No forecast for returning to Y status",
    "DRRS-MC not updated to reflect current assessments",
    "MCTIMS data not matching commander's assessment",
  ],
  references: [
    { title: "MCO 1553.3B (Unit Training Management)", url: "https://www.marines.mil/News/Publications/MCPEL/", isQuickLink: true },
    { title: "MCO 3500.110 (METL Policy)", url: "https://www.marines.mil/News/Publications/MCPEL/", isQuickLink: true },
    { title: "MCTIMS", url: "https://mctims.usmc.mil/" },
    { title: "MCO 3000.13 (Readiness Reporting)", url: "https://www.marines.mil/News/Publications/MCPEL/" },
  ] as TransitionReference[],
};
