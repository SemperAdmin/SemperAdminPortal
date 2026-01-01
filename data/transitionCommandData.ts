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
