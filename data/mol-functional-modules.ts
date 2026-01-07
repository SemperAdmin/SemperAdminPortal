// MOL Functional Modules Data
// Extracted from app/roles/[role]/[section]/[item]/page.tsx for better maintainability

export type GuideStep = {
  step: string;
  details?: string[];
};

export type GuideSection = {
  title: string;
  steps: GuideStep[];
};

export type MOLModuleData = {
  title: string;
  description: string;
  capabilities: string[];
  userTypes: string[];
  electronicRecords?: string[];
  selfCertifiedTransactions?: string[];
  guide?: GuideSection[];
  useCases?: string[];
};

export type MOLReference = {
  title: string;
  url: string;
  isQuickLink?: boolean;
};

export const MOL_DATA: { references: MOLReference[] } = {
  references: [
    { title: "Marine Online (MOL)", url: "https://mol.tfs.usmc.mil/", isQuickLink: true },
    { title: "MOL Help & User Guide", url: "https://mol.tfs.usmc.mil/mol/help.html", isQuickLink: true },
    { title: "MISSO Support", url: "https://www.manpower.usmc.mil/webcenter/portal/MCIRSA", isQuickLink: true },
    { title: "LES Explained", url: "https://www.dfas.mil/militarymembers/payentitlements/aboutpay/", isQuickLink: false },
  ],
};

export const MOL_FUNCTIONAL_MODULES: Record<string, MOLModuleData> = {
  "mol-awards-module": {
    title: "Awards Module",
    description: "Provides authorized command representatives the ability to recommend or approve personnel for the Marine Corps Good Conduct Medal (MCGCM) and Selected Marine Corps Reserve Medal (SMCRM). Upon approval, the respective certificate is generated for hard-copy print as well as the corresponding transactions for reporting to the MCTFS.",
    capabilities: ["Recommend personnel for MCGCM/SMCRM", "Approve award recommendations", "Generate award certificates for printing", "Report transactions to MCTFS"],
    userTypes: ["Command Representatives", "Unit Leaders"],
  },
  "mol-basic-orders-system": {
    title: "Basic Orders System (BOS)",
    description: "Provides individual members and authorized unit leaders the ability to view Permanent Change of Assignment (PCA) and Permanent Change of Station (PCS) Basic Orders.",
    capabilities: ["View PCA orders", "View PCS orders", "Access for individual members", "Access for unit leaders"],
    userTypes: ["Individual Members", "Unit Leaders"],
  },
  "mol-bic-assignment": {
    title: "BIC Assignment",
    description: "Provides authorized command representatives the ability to manage Billet Identification Code (BIC) assignments for Active Duty (AD) and Fleet Assistance Program (FAP) personnel for reporting to the MCTFS. BIC assignments for Reserve Component (RC) personnel may be viewed but reporting has been delegated to an external system.",
    capabilities: ["Manage BIC assignments for AD personnel", "Manage BIC assignments for FAP personnel", "View RC BIC assignments (reporting delegated externally)", "Report to MCTFS"],
    userTypes: ["Command Representatives"],
  },
  "mol-commanders-messaging": {
    title: "Commanders Messaging",
    description: "Provides authorized command representatives the ability to disseminate messages to subordinate unit personnel. Messages are displayed on the MOL home page for 1-5 days at the author's discretion. This capability is available at the battalion unit level by default all the way up to CMC/HQMC level organizations.",
    capabilities: ["Create command messages", "Disseminate to subordinate personnel", "Display on MOL home page for 1-5 days", "Available battalion level through CMC/HQMC"],
    userTypes: ["Command Representatives", "Commanders"],
  },
  "mol-tt-vs-epar": {
    title: "Trouble Ticket vs. EPAR: Which One to Use?",
    description: "While both tools are used to request actions on MOL, they serve very different purposes. Choosing the correct one ensures your request reaches the right office and is processed without delay.",
    capabilities: ["Identify correct request method", "Route requests to proper office", "Avoid processing delays", "Understand system vs. personnel actions"],
    userTypes: ["All Marines", "Unit Leaders"],
    guide: [
      {
        title: "Use a Trouble Ticket (TT) For",
        steps: [
          {
            step: "Technical Issues",
            details: [
              "Problems with specific MOL modules, such as Awards, Leave/Absence, or EPAR modules themselves",
              "Application or system-level errors within MOL, COGNOS, or MCTFS",
              "Features not working as expected or displaying errors",
            ],
          },
          {
            step: "Access Requests",
            details: [
              "Requesting specific permissions or access levels through your chain of command",
              "Requesting elevated permissions for MOL modules",
              "Unit template or role assignment issues",
            ],
          },
          {
            step: "Administrative Appointments",
            details: [
              "Submitting an Assumption of Command",
              "New Commanding Officer appointment",
              "Organizational structure changes that affect MOL access",
            ],
          },
        ],
      },
      {
        title: "Use an EPAR For",
        steps: [
          {
            step: "Personnel Actions",
            details: [
              "Submitting requests related to your personal career and record",
              "Any action that changes your official personnel file",
            ],
          },
          {
            step: "Contract Changes",
            details: [
              "Re-enlistments",
              "Extensions",
              "Changes to your End of Current Contract (ECC) date",
            ],
          },
          {
            step: "Pay and Benefits",
            details: [
              "Actions regarding Bonuses",
              "Survivor Benefit Program (SBP) elections",
              "Career Status Bonuses (CSB)",
            ],
          },
          {
            step: "Record Corrections",
            details: [
              "Requesting updates or corrections to existing information in your personnel record",
              "MOS changes, award corrections, or other administrative updates",
            ],
          },
        ],
      },
      {
        title: "Quick Comparison",
        steps: [
          {
            step: "Trouble Ticket (TT)",
            details: [
              "Primary Focus: System, Application, and Access issues",
              "Common Examples: Software bugs, module errors, access requests",
              "Supporting Office: Often MISSO/MISSA or Unit Leaders",
              "Route: Technical support chain",
            ],
          },
          {
            step: "EPAR",
            details: [
              "Primary Focus: Personnel and Administrative actions",
              "Common Examples: Re-enlistments, extensions, bonus requests",
              "Supporting Office: Unit Admin or Personnel Admin Center (PAC)",
              "Route: Chain of command",
            ],
          },
        ],
      },
      {
        title: "Common Mistakes to Avoid",
        steps: [
          {
            step: "Using EPAR for System Issues",
            details: [
              "If MOL is not working correctly, don't submit an EPAR",
              "EPARs for system issues will be returned and delay resolution",
              "System issues require a Trouble Ticket to reach the technical team",
            ],
          },
          {
            step: "Using Trouble Ticket for Career Actions",
            details: [
              "Re-enlistment requests submitted as Trouble Tickets will not be processed",
              "Personnel actions must route through your chain of command via EPAR",
              "Only your leadership can approve personnel actions, not technical support",
            ],
          },
        ],
      },
    ],
  },
  "mol-epar": {
    title: "Electronic Personnel Administrative Request (EPAR)",
    description: "Provides individual members and authorized unit leaders the ability to submit and route administrative requests through the chain of command.",
    capabilities: ["Submit administrative requests", "Route requests through chain of command", "Track request status", "Approve/disapprove requests"],
    userTypes: ["Individual Members", "Unit Leaders"],
    guide: [
      {
        title: "Initial Setup and Navigation",
        steps: [
          { step: "Log into your Marine Online account at https://mol.usmc.mil" },
          { step: "Navigate to MyEPAR" },
          { step: "Select \"Create Record\"" },
        ],
      },
      {
        title: "Drafting Your EPAR",
        steps: [
          { step: "Verify the shown unit information is correct" },
          { step: "Select the \"Subject\" from the dropdown menu" },
          { step: "Review the \"Instructions\" section for additional EPAR guidance" },
          { step: "Type the request into the \"Notes\" section" },
          {
            step: "Click the \"Save and Attach Files (if applicable)\" button",
            details: [
              "Required only for EPAR subjects that require supporting documentation",
              "If no attachments are required, you may skip uploading any",
            ],
          },
        ],
      },
      {
        title: "Final Review and Submission",
        steps: [
          {
            step: "Navigate to the \"My EPARs\" grid",
            details: ["Here, you can view your \"History\" within the MOL System"],
          },
          { step: "Click \"Submit\" to send to your Chain of Command" },
        ],
      },
      {
        title: "What Happens After Submission",
        steps: [
          { step: "Your EPAR will route through your chain of command for review" },
          { step: "Unit leaders can approve, disapprove, or return the request" },
          { step: "You can track the status of your EPAR in the \"My EPARs\" grid" },
        ],
      },
    ],
    useCases: [
      "Personnel Actions: Submitting requests related to your personal career and record",
      "Contract Changes: Re-enlistments, Extensions, or changes to your End of Current Contract (ECC) date",
      "Pay and Benefits: Actions regarding Bonuses, Survivor Benefit Program (SBP), or Career Status Bonuses (CSB)",
      "Record Corrections: Requesting updates or corrections to existing information in your personnel record",
    ],
  },
  "mol-family-care-plan": {
    title: "Family Care Plan",
    description: "Provides members and authorized unit leaders the ability to manage caregiver designations for member dependents. Members may create/update their caregiver designations and submit to a unit representative (Validating Official) for review. Upon acceptance by the Validating Official, changes to caregiver designations trigger transactional updates to the MCTFS. Unit leaders are provided dashboard functionality to see what is pending their action, what has been sent back to the member, and who will need an update within the next 30 days or is already delinquent.",
    capabilities: ["Create/update caregiver designations", "Submit for validation", "Dashboard for pending actions", "Track 30-day update requirements", "Report to MCTFS"],
    userTypes: ["Individual Members", "Unit Leaders", "Validating Officials"],
  },
  "mol-family-readiness": {
    title: "Family Readiness",
    description: "Provides members and authorized unit leaders the ability to manage contact information for the purposes of the unit Family Readiness program. Designated Family Readiness Officers (FRO) may generate email correspondence to member contacts directly through the application for the purpose of disseminating information on organizational news, events, or unit deployment updates.",
    capabilities: ["Manage family contact information", "Generate email correspondence", "Disseminate organizational news", "Share event information", "Provide deployment updates"],
    userTypes: ["Individual Members", "Unit Leaders", "Family Readiness Officers (FRO)"],
  },
  "mol-inbound-interview": {
    title: "Inbound Interview (IBI)",
    description: "Provides members and authorized unit leaders the ability to onboard incoming personnel. Through this workflow, transactional updates to the MCTFS are generated to include the join of the member to the command, Billet Identification Code (BIC), and Co/Plt/WS assignment.",
    capabilities: ["Onboard incoming personnel", "Generate join transaction to command", "Assign BIC", "Assign Co/Plt/WS", "Report to MCTFS"],
    userTypes: ["Individual Members", "Unit Leaders"],
  },
  "mol-jepes-module": {
    title: "Junior Enlisted Performance Evaluation System (JEPES)",
    description: "Provides members and authorized unit leaders the means by which Marines in the grades Private through Corporal are evaluated for promotion and retention. The Marine Reported On (MRO) is evaluated by their reporting chain through the assignment of Command Input Marks in the areas of Individual Character, MOS and/or Mission Accomplishment, and Leadership. Final Command Input Marks and changes to promotion recommendation status for each reporting occasion are recorded in the MCTFS upon approval by the Commanding Officer.",
    capabilities: ["Evaluate Pvt-Cpl Marines", "Assign Command Input Marks", "Evaluate Individual Character", "Evaluate MOS/Mission Accomplishment", "Evaluate Leadership", "Update promotion recommendations", "Report to MCTFS"],
    userTypes: ["Individual Members", "Unit Leaders", "Commanding Officers"],
  },
  "mol-travel-voucher": {
    title: "Travel Voucher (TVI/FTV)",
    description: "Provides individual members the ability to submit a travel claim directly to the disbursing office for settlement upon separation from service.",
    capabilities: ["Submit travel claims", "Direct submission to disbursing", "Settlement upon separation"],
    userTypes: ["Individual Members"],
  },
  "mol-leave-liberty-module": {
    title: "Leave/Liberty Module",
    description: "Provides authorized members and unit leaders the ability to route and execute absence requests generating transactional updates to the MCTFS. Check-out/in actions are immediately applied to the member's duty status within the Unit Management Status Report (UMSR). Marine members who have lost leave in the previous Fiscal Year may have all or a portion of their leave balance restored as Special Leave Accrual (SLA).",
    capabilities: ["Route absence requests", "Execute leave/liberty requests", "Immediate UMSR duty status updates", "Special Leave Accrual (SLA) restoration", "Report to MCTFS"],
    userTypes: ["Individual Members", "Unit Leaders"],
  },
  "mol-ompf-module": {
    title: "Official Military Personnel File (OMPF)",
    description: "Provides individual members access to view their own electronic Official Military Personnel File (OMPF), Master Brief Sheets (MBS), and RS/RO Profiles. Digital report content is managed by MMRP-20 and replicated locally to the MCEITS hosting facility. Authorized unit leaders may access OMPF report content on members assigned within their scope. Additionally, global viewer access permissions exist for administrative personnel.",
    capabilities: ["View electronic OMPF", "View Master Brief Sheets (MBS)", "View RS/RO Profiles", "Unit leaders access subordinate records", "Global viewer access for admin personnel"],
    userTypes: ["Individual Members", "Unit Leaders", "Administrative Personnel"],
  },
  "mol-organization-management": {
    title: "Organization Management",
    description: "Provides authorized functional managers and unit leaders the ability to manage organizations and hierarchical associations. Organizational information is the backbone of all permissions assignment, routing, and workflows throughout the suite of MOL services.",
    capabilities: ["Manage organizations", "Manage hierarchical associations", "Support permissions assignment", "Support routing workflows"],
    userTypes: ["Functional Managers", "Unit Leaders"],
  },
  "mol-outbound-interview": {
    title: "Outbound Interview",
    description: "Provides individual members and authorized unit leaders the ability to input Permanent Change of Assignment (PCA), Permanent Change of Station (PCS), and Separations (SEPS) related travel plans for authorization of travel entitlements and advances.",
    capabilities: ["Input PCA travel plans", "Input PCS travel plans", "Input separation travel plans", "Authorize travel entitlements", "Process travel advances"],
    userTypes: ["Individual Members", "Unit Leaders"],
  },
  "mol-permissions-management": {
    title: "Permissions Management",
    description: "Provides authorized unit leaders and functional managers the ability to manage application roles and permissions within the delegated organizational scope.",
    capabilities: ["Manage application roles", "Assign permissions", "Scope to organizational hierarchy", "Delegate access"],
    userTypes: ["Unit Leaders", "Functional Managers"],
  },
  // ============================================
  // MOL ELECTRONIC RECORDS - Individual Pages
  // ============================================
  "mol-arcr": {
    title: "Annual Retirement Credit Report (ARCR)",
    description: "The Annual Retirement Credit Report is your 'scoreboard' for reserve retirement. If you are a Reservist or Career Recruiter, this report tracks the points you have earned each anniversary year to show how close you are to qualifying for a reserve pension. It is crucial to verify this data regularly because errors can cost you years of credited service.",
    capabilities: ["View retirement points by anniversary year", "Track active duty and inactive duty points", "Monitor progress toward 20-year retirement", "Print report for records", "Verify point accuracy", "Identify good years vs. bad years"],
    userTypes: ["Reserve Marines", "Individual Reserve Component Members", "Career Recruiters"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Your Financial Future",
            details: [
              "Reserve retirement requires 20 'good years' of service, each with at least 50 points",
              "A single bad year (less than 50 points) does not count toward your 20-year requirement",
              "Errors in point recording can delay or reduce your retirement benefits",
              "The ARCR is your proof of service for retirement eligibility disputes",
            ],
          },
          {
            step: "What Counts as a Point",
            details: [
              "Active Duty Points: 1 point per day of active duty (AT, ADT, mobilization)",
              "Inactive Duty Points: 1 point per drill period (typically 4 per weekend)",
              "Membership Points: 15 free points per anniversary year just for being in the reserves",
              "Education Points: Correspondence courses, online training (max 130 inactive points per year)",
            ],
          },
        ],
      },
      {
        title: "How to View and Print Your ARCR",
        steps: [
          {
            step: "Step 1: Access the Report",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Annual Retirement Credit Report (ARCR)",
              "The year currently displayed appears in parentheses in the heading - e.g., 'Annual Retirement Credit Record (2025)'",
            ],
          },
          {
            step: "Step 2: Switch Between Years",
            details: [
              "Look for the 'Actions' line under the heading",
              "Click 'Prior Year ARCR' to see previous year's points",
              "Click 'Current Year ARCR' to switch back to the current year",
              "Use this to compare points across multiple anniversary years",
            ],
          },
          {
            step: "Step 3: Review Each Anniversary Year",
            details: [
              "Your anniversary year runs from your PEBD (Pay Entry Base Date), NOT January 1st",
              "Check the total points column for each year",
              "Anything 50 or above is a 'good year' that counts toward retirement",
              "Years with less than 50 points are 'bad years' and do not count toward your 20-year requirement",
            ],
          },
          {
            step: "Step 4: Print for Your Records",
            details: [
              "Click 'Printer-Friendly View' - a new window opens with a formatted report",
              "Click 'Print' to send to a printer or 'Save as PDF'",
              "Always save a digital copy before closing the window",
              "Do NOT just press Ctrl+P on the main MOL page - it will look messy. Always use the Printer-Friendly View link",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "Confusing Anniversary Year with Calendar Year",
            details: [
              "Your 'Anniversary Year' starts on the day you entered the Marine Corps (PEBD), not January 1st",
              "Make sure you are looking at the correct window of time",
              "A common mistake is thinking you have until December to earn 50 points when your anniversary is actually in March",
            ],
          },
          {
            step: "Missing Correspondence Courses",
            details: [
              "Points from MarineNet or other schools can take a while to reflect",
              "If you finished a course and don't see the points, wait one full update cycle before calling IPAC",
              "Keep completion certificates as proof in case manual entry is needed",
            ],
          },
          {
            step: "The 50-Point Rule",
            details: [
              "You generally need 50 points in an anniversary year for it to be a 'satisfactory year' for retirement",
              "If you see you're at 48 points, you need to get a drill in before your anniversary date hits",
              "Points from orders or drills may take 30-60 days to post - plan ahead",
            ],
          },
          {
            step: "Printing the Screen vs. the Report",
            details: [
              "Don't just hit Ctrl+P on the main MOL page - it will look messy",
              "Always use the 'Printer-Friendly View' link to get the formal document",
              "This creates a properly formatted report suitable for official records",
            ],
          },
        ],
      },
      {
        title: "What to Do If Points Are Missing",
        steps: [
          {
            step: "Gather Documentation",
            details: [
              "Collect copies of orders, drill schedules, or course completion certificates",
              "Check your LES (Leave and Earnings Statement) for corresponding pay periods",
              "Look for any paper records from that time period",
            ],
          },
          {
            step: "Submit a Correction Request",
            details: [
              "Contact your unit's Personnel Admin (S-1) with your documentation",
              "For IRR Marines, contact Marine Forces Reserve (MARFORRES)",
              "Submit an EPAR through MOL if appropriate",
              "Be persistent - point corrections can take months but are worth fighting for",
            ],
          },
        ],
      },
    ],
  },
  "mol-acip": {
    title: "Aviation Career Incentive Pay (ACIP/AVIP)",
    description: "Aviation Career Incentive Pay (ACIP) and Aviation Incentive Pay (AVIP) are monthly bonuses for pilots, naval flight officers, and enlisted aircrew who maintain flight status. This report shows your eligibility status, current pay gate, and flight hour requirements. Understanding this data protects your pay and helps you plan your aviation career.",
    capabilities: ["View ACIP/AVIP eligibility status", "Check aviation bonus information", "Monitor flight pay gates", "Track operational flying duty credit", "Verify flight hour requirements", "Review aviation service dates"],
    userTypes: ["Naval Aviators", "Naval Flight Officers", "Enlisted Aircrew", "Aviation Personnel"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Significant Monthly Income",
            details: [
              "ACIP/AVIP can add $150-$1,000+ per month to your pay depending on your gate",
              "Losing flight status means losing this pay immediately",
              "Understanding the gate system helps you maximize your aviation career earnings",
              "Knowing your status prevents surprise pay losses",
            ],
          },
          {
            step: "The Gate System Explained",
            details: [
              "Gate 1: 2 years of aviation service - entry level flight pay",
              "Gate 2: 6 years of aviation service - increased rate",
              "Gate 3: 10 years of aviation service - further increase",
              "Gate 4: 14 years of aviation service - maximum rate achieved",
              "Gate 5: 22 years of aviation service - maintained at maximum",
              "Each gate requires you to be on operational flying duty or have a valid waiver",
            ],
          },
        ],
      },
      {
        title: "How to Check Your ACIP/AVIP Status",
        steps: [
          {
            step: "Step 1: Access the Report",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Aviation Incentive Pay-Aviation Bonus",
              "The report shows your current aviation pay status and bonus information",
            ],
          },
          {
            step: "Step 2: Review Your AVIP",
            details: [
              "Look at the Monthly Rate - this is determined by your 'Years of Aviation Service' (YAS)",
              "Check your Flight Gate status - 'Continuous' means you're actively flying, 'Conditional' means at risk",
              "If you haven't met flight hour requirements, AVIP could transition from Continuous to Conditional",
              "YAS starts when you begin flight training, NOT when you joined the Marine Corps",
            ],
          },
          {
            step: "Step 3: Review Your AVB (Aviation Bonus)",
            details: [
              "If you signed a bonus contract (e.g., 48 or 72-month extension), scheduled payment dates and amounts are listed here",
              "New bonus contracts take up to 8 weeks for MMOA-2 to process before showing as 'Scheduled'",
              "The AVB amount shown is the GROSS amount - your deposit will be less after federal and state taxes",
            ],
          },
          {
            step: "Step 4: Print for Your Records",
            details: [
              "Click the 'Printer Friendly' link at the top - a new window opens",
              "Click 'Print' to send to a printer or save as PDF",
              "Click 'Close' to return to your main MOL portal",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "YAS vs. PEBD Confusion",
            details: [
              "Your 'Years of Aviation Service' (YAS) starts when you begin flight training, NOT when you joined the Marine Corps",
              "Don't be surprised if your YAS is lower than your total time in service",
              "YAS determines your pay rate, not your overall time in the Marine Corps",
            ],
          },
          {
            step: "Medical Status Disconnect",
            details: [
              "If your flight physical expires, your AVIP can be suspended",
              "This report might show a 'Stop Pay' note if your medical data hasn't hit MCTFS",
              "Keep your flight physical current - an expired up-chit means no flight pay",
            ],
          },
          {
            step: "The 8-Week Wait for Bonuses",
            details: [
              "Aviation Bonuses are manually processed by MMOA-2",
              "It can take up to 8 weeks for a signed contract to show up as 'Scheduled' on this page",
              "Don't panic if your new bonus doesn't appear immediately",
            ],
          },
          {
            step: "Taxes on AVB",
            details: [
              "Remember that the AVB amount shown is the GROSS amount",
              "Your actual deposit will be significantly less after federal and state taxes are withheld",
              "Plan your finances around the net amount, not the gross",
            ],
          },
        ],
      },
      {
        title: "What to Do If Something Is Wrong",
        steps: [
          {
            step: "Document the Discrepancy",
            details: [
              "Print your current ACIP report from MOL",
              "Gather supporting documents: flight school completion, designation letters, orders",
              "Note exactly what data is incorrect",
            ],
          },
          {
            step: "Contact Your Aviation Personnel Officer",
            details: [
              "Your squadron or group has an aviation admin who handles flight pay issues",
              "They can submit corrections to MMOA (Manpower Management Officer Assignments)",
              "Aviation pay corrections may also require coordination with DFAS",
            ],
          },
          {
            step: "Follow Up Regularly",
            details: [
              "Aviation pay corrections can take 60-90 days to process",
              "Check your LES each pay period to verify changes took effect",
              "If back pay is owed, ensure it is properly calculated and paid",
            ],
          },
        ],
      },
    ],
  },
  "mol-awards": {
    title: "Awards",
    description: "Your Awards record is your official history of recognition for service and achievement. This is not just about wearing the right ribbons - it is your documented proof of what you have done in your career. Missing or incorrect awards can affect promotion boards, reenlistment, and your legacy as a Marine.",
    capabilities: ["View personal decorations", "View service medals", "View campaign ribbons", "View unit awards", "Print awards summary", "Verify award accuracy", "Check order of precedence"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "JEPES Points Impact",
            details: [
              "Awards aren't just for your 'stack' - they carry JEPES points for Sergeants and below",
              "For Staff NCOs and Officers, awards look favorable on Promotion Boards",
              "If a Sea Service Deployment Ribbon or NAM is missing, you are literally losing points toward your next rank",
            ],
          },
          {
            step: "Official Documentation",
            details: [
              "If it's not in MOL, it's not in your OMPF (Official Military Personnel File)",
              "If it's not in your OMPF, you aren't authorized to wear it",
              "This record follows you into veteran status and is difficult to reconstruct later",
            ],
          },
        ],
      },
      {
        title: "How to Review Your Awards",
        steps: [
          {
            step: "Step 1: Access Your Record",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Award Information",
              "The page opens in Summary View by default",
            ],
          },
          {
            step: "Step 2: Summary View (Default)",
            details: [
              "This is your 'Quick Look' showing award code, description, and Quantity",
              "If you have a '2' next to National Defense Service Medal, the system thinks you've earned it twice",
              "Summary View is good for a quick check but lacks details",
            ],
          },
          {
            step: "Step 3: Full List View",
            details: [
              "Click the 'Full List View' link at the top of the table",
              "This shows the Effective Date (when the award was earned) and Device Description (Bronze Star, Oak Leaf Cluster, etc.)",
              "Use this view to verify dates and devices are correct",
            ],
          },
          {
            step: "Step 4: Check Award Precedence (Ribbon Rack Order)",
            details: [
              "While in Full List View, click the 'Award Precedence Display' link",
              "A new window opens showing your ribbons in the exact order they should be worn on your uniform",
              "Use this when going to the PX to get a new ribbon rack built",
            ],
          },
          {
            step: "Step 5: Print for Reference",
            details: [
              "Use the 'Print' button to generate a clean copy",
              "Standard browser printing usually cuts off ribbon images - use the formatted Print link",
              "Keep this with your personal copies of award certificates",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "Missing Devices",
            details: [
              "You might see the medal listed, but the 'Device' column is blank",
              "If you've been on three deployments but your Sea Service ribbon shows quantity of '1' with no stars, you need to get that corrected",
              "Devices (stars, oak leaf clusters) must be added separately",
            ],
          },
          {
            step: "Effective Date Errors",
            details: [
              "If the date listed is years off, it can cause issues with your cutting score calculations",
              "Verify dates against your actual award certificates",
            ],
          },
          {
            step: "The 'Unit Award' Lag",
            details: [
              "Ribbons like the Meritorious Unit Commendation (MUC) are often awarded to an entire unit",
              "It can take months for these to trickle down to your individual MOL record",
              "Check MARADMIN messages for unit award announcements to verify eligibility",
            ],
          },
          {
            step: "Printing the Screen",
            details: [
              "Don't just use standard browser printing - it usually cuts off the images of the ribbons",
              "Always use the formatted 'Print' link to get the proper document",
            ],
          },
        ],
      },
      {
        title: "How to Fix Missing or Incorrect Awards",
        steps: [
          {
            step: "The Paper Trail Requirement",
            details: [
              "If an award is missing, you cannot just tell your NCO - you need the Award Citation or the signed 1650 form",
              "Without physical proof, S-1 cannot run the entry",
              "Keep copies of all award certificates in a safe place",
            ],
          },
          {
            step: "S-1 / IPAC Run",
            details: [
              "Take your physical proof (the certificate or citation) to your S-1",
              "They will run the entry in MCTFS",
              "Once S-1 runs the entry, it usually takes 24-72 hours to show up in MOL",
            ],
          },
          {
            step: "Final Check",
            details: [
              "Check back in MOL after 24-72 hours to ensure the 'Quantity' or 'Device' updated correctly",
              "Verify the Effective Date is accurate",
              "If still incorrect, follow up with S-1",
            ],
          },
          {
            step: "Alternative: Submit an EPAR",
            details: [
              "Your admin section can help navigate the correction process",
              "They can verify unit award eligibility through official channels",
              "Complex cases may require coordination with HQMC Awards Branch",
            ],
          },
        ],
      },
    ],
  },
  "mol-bir": {
    title: "Basic Individual Record (BIR)",
    description: "The BIR is arguably the most important page in MOL—the 'Master Cheat Sheet' of your entire Marine Corps career. Think of it as your digital DNA. It pulls data directly from the Central Master File (CMF), combining your service dates, rank, MOS, contract status, and dependent information into one consolidated view. This is often the first document staff and boards look at when evaluating you, so accuracy is critical.",
    capabilities: ["View service data", "View contract information", "View dependent data", "View administrative information", "Print BIR for records", "Verify key dates", "Check MOS assignments"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Your Official Identity",
            details: [
              "The BIR is often the first document reviewed in any administrative action",
              "Boards, career planners, and monitors use this to make decisions about you",
              "Incorrect data here can affect assignments, pay, and eligibility for schools or billets",
            ],
          },
          {
            step: "Critical Dates That Drive Your Career",
            details: [
              "PEBD (Pay Entry Base Date): Determines pay longevity and retirement eligibility",
              "EAS (End of Active Service): Your contract end date - affects reenlistment windows",
              "Date of Rank: Determines time-in-grade for promotion eligibility",
              "TAFMS (Total Active Federal Military Service): Used for retirement calculations",
            ],
          },
          {
            step: "Dependent Data Affects Pay",
            details: [
              "BAH (Basic Allowance for Housing) rate depends on dependency status",
              "DEERS enrollment for dependents requires accurate BIR data",
              "Incorrect dependent info can cause pay issues or loss of benefits",
            ],
          },
        ],
      },
      {
        title: "How to Review Your BIR",
        steps: [
          {
            step: "Step 1: Access the Record",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Basic Individual Record",
              "The BIR loads as a single consolidated view",
              "Note: The 'Printer Friendly' view opens in a new window—ensure pop-ups are allowed in your browser",
            ],
          },
          {
            step: "Step 2: Review the Three Main Pillars",
            details: [
              "Service Information: Your rank, MOS, PEBD, EAS, and critical service dates",
              "Contract Information: Your current enlistment/reenlistment details",
              "Dependent Information: Spouse, children, and anyone else the Marine Corps recognizes as your dependent",
            ],
          },
          {
            step: "Step 3: Verify Service Data",
            details: [
              "Check your current rank and date of rank are correct",
              "Verify your PMOS (Primary MOS) is accurate",
              "Confirm AMOS and NMOS if applicable",
              "Check PEBD matches your original enlistment or commission date",
              "Verify EAS reflects your current contract",
            ],
          },
          {
            step: "Step 4: Review Personal Data",
            details: [
              "Confirm name spelling matches your ID card exactly",
              "Verify blood type is recorded correctly (important for emergencies)",
              "Check marital status is current",
              "Verify Home of Record if relevant for state tax purposes",
            ],
          },
          {
            step: "Step 5: Check Dependent Information",
            details: [
              "Verify all dependents are listed with correct names and dates of birth",
              "Confirm dependency status (spouse, child, etc.) is correct",
              "Ensure no former dependents are incorrectly still listed",
            ],
          },
          {
            step: "Step 6: Print for Reference",
            details: [
              "Print or save the BIR as a PDF",
              "Keep a copy in your personal records",
              "Bring a copy to career planning and reenlistment appointments",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "Wrong PEBD",
            details: [
              "This affects your pay longevity steps and retirement date",
              "If you had prior service (another branch, broken service), verify PEBD is adjusted correctly",
              "Wrong PEBD can cost you money every paycheck",
            ],
          },
          {
            step: "The PEBD vs. AFADBD Confusion",
            details: [
              "Marines often confuse their PEBD (Pay Entry Base Date—when you signed the contract) with their AFADBD (Active Federal Active Duty Begin Date—the day you actually left for boot camp)",
              "For most Marines, these are different dates",
              "PEBD drives pay longevity; AFADBD is used in other calculations",
            ],
          },
          {
            step: "Outdated Marital Status",
            details: [
              "Divorce or marriage not updated can cause BAH issues",
              "You could be overpaid (and owe money back) or underpaid",
              "Update within 30 days of any change with proper documentation",
            ],
          },
          {
            step: "Outdated Dependents",
            details: [
              "If you get divorced or have a child and don't update this record, your pay will be incorrect",
              "This usually results in the Marine Corps taking money back from you later (a 'debt to the government')",
              "Always update dependent information within 30 days of any life event",
            ],
          },
          {
            step: "Missing or Incorrect MOS",
            details: [
              "If you completed a lateral move or earned an AMOS, verify it shows on your BIR",
              "Missing MOS qualifications can affect assignment eligibility",
              "Check after completing any MOS-producing school",
            ],
          },
          {
            step: "Not Checking After Major Life Events",
            details: [
              "Always review your BIR after: marriage, divorce, birth of a child, reenlistment, promotion, PCS",
              "Changes take time to process - give it 30-60 days then verify",
            ],
          },
        ],
      },
      {
        title: "How to Fix Errors",
        steps: [
          {
            step: "Gather Supporting Documents",
            details: [
              "Marriage/divorce certificates for dependent changes",
              "DD-214 or enlistment documents for PEBD issues",
              "School completion certificates for MOS issues",
              "Promotion warrant for date of rank issues",
            ],
          },
          {
            step: "Submit Corrections",
            details: [
              "Use EPAR for most administrative corrections",
              "Work with your S-1/Admin shop for complex issues",
              "Some changes (like PEBD corrections) may require HQMC action",
              "Keep copies of everything you submit",
            ],
          },
        ],
      },
    ],
  },
  "mol-btr": {
    title: "Basic Training Record (BTR)",
    description: "The Basic Training Record is your complete professional development history and the engine behind your JEPES (Junior Enlisted Performance Evaluation System) Mental Agility score for E-1 to E-4. It documents every school, course, and qualification you have earned from boot camp through your current rank. This record directly affects your competitiveness for promotion, special duty assignments, and reenlistment.",
    capabilities: ["View training history", "View education records", "View MOS qualifications", "View PME completion", "Print training record", "Verify school completions", "Check language scores"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Promotion Board Review",
            details: [
              "Boards look at your BTR to see your professional development",
              "PME completion is often a prerequisite for promotion",
              "Missing schools or qualifications make you less competitive",
              "The BTR tells the story of how you have invested in your career",
            ],
          },
          {
            step: "Assignment Eligibility",
            details: [
              "Many billets require specific schools or qualifications",
              "Career monitors check BTRs when matching Marines to assignments",
              "Missing a required course can disqualify you from a desired billet",
              "Special duty assignments (DI, Recruiter, MSG) require BTR verification",
            ],
          },
          {
            step: "Bonus and Incentive Eligibility",
            details: [
              "Some reenlistment bonuses require specific school completions",
              "FLPB (Foreign Language Proficiency Bonus) requires DLPT scores on record",
              "Certain incentive pays are tied to qualifications shown in your BTR",
            ],
          },
        ],
      },
      {
        title: "How to Review Your BTR",
        steps: [
          {
            step: "Step 1: Access the Record",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Basic Training Record",
              "The BTR shows your complete training history chronologically",
            ],
          },
          {
            step: "Step 2: Verify Formal Schools",
            details: [
              "Confirm recruit training (boot camp, OCS, etc.) is recorded",
              "Check that your MOS school is listed with correct completion date",
              "Verify any advanced MOS schools or functional courses",
              "Look for Joint courses, sister service schools, or civilian courses",
            ],
          },
          {
            step: "Step 3: Check PME Status",
            details: [
              "Verify your required PME is recorded: Corporals Course, Sergeants Course, etc.",
              "Check resident vs. non-resident status is correct",
              "Confirm completion dates are accurate",
              "Look for any missing PME that you completed",
            ],
          },
          {
            step: "Step 4: Review Additional Qualifications",
            details: [
              "AMOS (Additional MOS) from lateral moves or schools",
              "NMOS (Necessary MOS) from specialized training",
              "Language proficiency (DLPT scores)",
              "Special qualifications: Airborne, Combatant Diver, etc.",
            ],
          },
          {
            step: "Step 5: Print for Reference",
            details: [
              "Print or save as PDF for your personal records",
              "Bring to career planning and reenlistment sessions",
              "Use when applying for special duty assignments",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "Missing PME",
            details: [
              "Just because you completed the course does not mean it was recorded",
              "MarineNet courses may not automatically post to your BTR",
              "Resident PME from schoolhouses should post within 30-60 days",
              "If missing after 90 days, submit a correction request",
            ],
          },
          {
            step: "MCI/MarineNet Lag",
            details: [
              "MCIs (Marine Corps Institute courses) and MarineNet completions can take weeks to appear in your BTR",
              "If you completed an online course and don't see it after 30 days, contact S-3 or the MarineNet help desk",
              "Keep your course completion certificates as proof until the entry appears",
            ],
          },
          {
            step: "Duplicate Entries",
            details: [
              "Sometimes schools or courses appear twice on your BTR",
              "This can happen when both the schoolhouse and your S-3 both enter the same course",
              "Duplicate entries can confuse boards and auditors—report them to S-3 for correction",
            ],
          },
          {
            step: "Rifle Range 'Ghost Scores'",
            details: [
              "Occasionally, rifle qualification scores from the range don't transmit correctly to MCTFS",
              "You may see an old score, no score, or the wrong qualification (Marksman vs. Expert)",
              "If your range score is missing or wrong, bring your scorebook to S-3 for manual entry",
            ],
          },
          {
            step: "Outdated DLPT Scores",
            details: [
              "DLPT scores expire and must be retested periodically",
              "Expired scores may drop from your record or show as outdated",
              "If you receive FLPB, ensure your current scores are posted",
            ],
          },
          {
            step: "Not Checking After Each School",
            details: [
              "Always verify your BTR 60-90 days after completing any course",
              "This includes unit-level schools, MTTs, and mobile training",
              "Keep certificates as backup documentation",
            ],
          },
          {
            step: "Assuming S-3 Updated It",
            details: [
              "Training sections are busy and errors happen",
              "You are ultimately responsible for your own record accuracy",
              "Verify; do not assume",
            ],
          },
        ],
      },
      {
        title: "How to Fix Missing Training",
        steps: [
          {
            step: "Gather Documentation",
            details: [
              "School completion certificates",
              "Training orders or TAD orders to the school",
              "MarineNet course completion screenshots",
              "DLPT score sheets from testing center",
            ],
          },
          {
            step: "Contact the Right Section",
            details: [
              "For formal schools: Contact your S-3/Training with certificates",
              "For PME: Contact the schoolhouse that ran the course",
              "For DLPT: Contact the testing center or language program manager",
              "For MOL-based courses: May need to work through MCTIMS",
            ],
          },
          {
            step: "Submit EPAR If Needed",
            details: [
              "Some training corrections require an EPAR",
              "Attach all supporting documentation",
              "Provide course name, location, and completion date",
              "Be specific about what is missing or incorrect",
            ],
          },
          {
            step: "Follow Up",
            details: [
              "Training corrections can take 30-90 days to process",
              "Check your BTR monthly until the correction appears",
              "Escalate to your chain of command if stuck in the system",
            ],
          },
        ],
      },
    ],
  },
  "mol-brs-tsp": {
    title: "BRS/TSP Information",
    description: "This is your command center for tracking your retirement savings and mid-career bonuses. The Marine Corps moved away from the 'all or nothing' legacy retirement. With BRS, even if you don't stay for 20 years, you walk away with a retirement account that the government has helped fund.",
    capabilities: ["View TSP contributions", "View BRS election status", "Decline TSP auto-enrollment", "View continuation pay info", "View lump sum election", "Check government matching status", "Monitor contribution percentages"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Your Retirement Money",
            details: [
              "BRS provides portable retirement savings even if you leave before 20 years",
              "Government matches up to 5% of your base pay - that's FREE money",
              "If you aren't contributing at least 5%, you are literally throwing away free money",
              "This page helps you verify your elections and catch issues before they cost you",
            ],
          },
          {
            step: "Continuation Pay Bonus",
            details: [
              "If you have between 8 and 12 years of service, you may be eligible for BRS Continuation Pay",
              "This is a one-time cash bonus in exchange for additional service commitment",
              "You CANNOT request it after your 12th year anniversary - the bonus is gone forever if you miss the deadline",
            ],
          },
        ],
      },
      {
        title: "How to Manage Your BRS/TSP",
        steps: [
          {
            step: "Step 1: Access the Report",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > BRS/TSP Information",
              "Review your current TSP contribution rates and BRS status",
            ],
          },
          {
            step: "Step 2: Verify Your Elections",
            details: [
              "Traditional vs. Roth: Traditional is pre-tax (pay taxes later); Roth is after-tax (withdraw tax-free later)",
              "Check what percentage of your Base Pay, Incentive Pay, and Bonuses are being saved",
              "Ensure you are contributing at least 5% to get the full government match",
            ],
          },
          {
            step: "Step 3: Check Continuation Pay Eligibility",
            details: [
              "If you have between 8 and 12 years of service, check the BRS-CP section",
              "If eligible, you must submit a Statement of Understanding (SOU) via EPAR in MOL before your 12th year",
              "The bonus usually hits your bank account within 30 days of your 12th year anniversary",
            ],
          },
          {
            step: "Step 4: Decline Auto Re-Enrollment (If Needed)",
            details: [
              "If you stopped contributions but don't want the system to restart them automatically on January 1st",
              "Click the 'Decline TSP Re-Enrollment' button in MOL during the month of December",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "The December Reset",
            details: [
              "If you stop your TSP contributions during the year, the system will automatically restart them at 5% on January 1st",
              "You must manually decline it in MOL during December to prevent this",
            ],
          },
          {
            step: "Missing the 5% Match",
            details: [
              "If you aren't contributing at least 5% of your own pay, you are losing free money",
              "The government only matches up to 5% - contributing less means leaving money on the table",
            ],
          },
          {
            step: "The Continuation Pay Deadline",
            details: [
              "You CANNOT request Continuation Pay once you hit your 12-year anniversary (PEBD)",
              "If you wait until 12 years and 1 day, the bonus is gone forever",
              "Set a reminder to submit your SOU before your 12th year",
            ],
          },
          {
            step: "MOL vs. myPay Confusion",
            details: [
              "MOL is for VIEWING your status",
              "myPay (https://mypay.dfas.mil) is for CHANGING your contribution percentage",
              "You cannot change your contribution percentage inside MOL",
            ],
          },
        ],
      },
      {
        title: "What to Do After Checking",
        steps: [
          {
            step: "Changing Contributions",
            details: [
              "Go to myPay, select 'Thrift Savings Plan,' and update your percentages",
              "Changes usually take 1-2 pay cycles to reflect on your LES",
            ],
          },
          {
            step: "Allocating Your Funds",
            details: [
              "Log in to TSP.gov to choose where your money is invested",
              "Options include C-Fund (stocks), G-Fund (government bonds), and others",
              "If you don't choose, it defaults to a Lifecycle (L) Fund based on your expected retirement year",
            ],
          },
          {
            step: "Print for Records",
            details: [
              "Click 'Printer Friendly' at the top, then click 'Print' in the new window",
              "Keep a copy for your personal records",
            ],
          },
        ],
      },
    ],
  },
  "mol-cei": {
    title: "Civilian Employment Information (CEI)",
    description: "This is a mandatory requirement for all Reservists (SMCR, IMA, and IRR) to ensure the Department of Defense understands your civilian career and skillsets. Reporting your CEI is required by federal law (Title 10 U.S.C.).",
    capabilities: ["View civilian employment record", "Update employer information", "Complete employment questionnaire", "Report employment status changes", "Report first responder status", "Track critical skills"],
    userTypes: ["Reserve Marines", "Individual Reserve Component Members", "IRR Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "National Safety",
            details: [
              "Ensures the military doesn't mobilize so many first responders from one city that it leaves the community unprotected",
              "Helps DoD understand the civilian skill base of the reserve force",
            ],
          },
          {
            step: "Your Rights (USERRA)",
            details: [
              "Allows the DoD to inform your employer of their legal obligations to hold your job under USERRA if you are activated",
              "Provides documentation of your civilian employment for legal protections",
            ],
          },
          {
            step: "Skill Tracking",
            details: [
              "If you are a cyber security expert or heavy equipment mechanic in the civilian world, the Marine Corps wants to know",
              "Critical skills can be utilized during mobilization for specialized roles",
            ],
          },
        ],
      },
      {
        title: "How to Update the Questionnaire",
        steps: [
          {
            step: "Step 1: Access the Page",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Civilian Employment Information",
            ],
          },
          {
            step: "Step 2: Start the Update",
            details: [
              "Click the 'Edit' link to open the questionnaire, then click 'Continue'",
            ],
          },
          {
            step: "Step 3: Enter Employment Status",
            details: [
              "Select your current status:",
              "A: Full-Time",
              "B: Part-Time",
              "C: Voluntary Service",
              "D: Student",
              "E: Unemployed",
            ],
          },
          {
            step: "Step 4: Employer Details",
            details: [
              "Enter the Name and Physical Address (not a PO Box)",
            ],
          },
          {
            step: "Step 5: Job Title & Date",
            details: [
              "Type your official position title and the date you started (Format: 01 JAN 2026)",
            ],
          },
          {
            step: "Step 6: Find Your SOC Code",
            details: [
              "Use the tree-view to find your Standard Occupational Classification (SOC)",
              "Click the plus (+) signs to expand categories until you find the job that best matches your daily duties",
            ],
          },
          {
            step: "Step 7: Final Questions",
            details: [
              "Select Yes or No for: Self-employment status",
              "First Responder status (Police, Fire, EMT)",
              "Consent: Whether you allow Commanders to see this to help with billet/deployment selection",
            ],
          },
          {
            step: "Step 8: Submit",
            details: [
              "Click 'Submit', then click 'Confirm'",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "The Orders Block",
            details: [
              "If your CEI is expired, the MROWS system will physically block your S-1 from authenticating your orders for Annual Training (AT) or a mobilization",
              "Don't wait until you need orders to update this",
            ],
          },
          {
            step: "Student Status",
            details: [
              "If you are a full-time student, you are still required to report",
              "Use your University as the employer and 'Student' as the position",
            ],
          },
          {
            step: "Vague Titles",
            details: [
              "Avoid using generic titles like 'Staff' or 'Manager'",
              "Use the SOC tree to find a specific match so your skills are searchable",
            ],
          },
          {
            step: "Address Errors",
            details: [
              "Ensure the Zip Code is the full 9 digits if possible",
              "The system sends this data to the Defense Manpower Data Center (DMDC), and it must be accurate for mailing USERRA notices",
            ],
          },
          {
            step: "Annual Verification",
            details: [
              "You must update or verify this during your CRCR anniversary month",
              "Even if nothing changed, you must still click Submit",
            ],
          },
        ],
      },
      {
        title: "What Happens After You Finish",
        steps: [
          {
            step: "Data Transfer",
            details: [
              "Your info is sent to the DMDC archive, which catalogues the history of all personnel for healthcare and administrative needs",
            ],
          },
          {
            step: "CRCR Sync",
            details: [
              "Once submitted, your CEI status will show as 'Verified' on your Career Retirement Credit Report (CRCR)",
            ],
          },
          {
            step: "Readiness Status",
            details: [
              "Your 'CEI Compliance' will flip to Green on your unit's readiness tracker",
            ],
          },
          {
            step: "Annual Requirement",
            details: [
              "Mark your calendar - you will need to 'Re-Certify' this information every year, even if your job hasn't changed",
            ],
          },
        ],
      },
    ],
  },
  "mol-chro": {
    title: "Chronological Record (CHRO)",
    description: "This is the modern, digital version of the old 'Page 3' from the paper Service Record Book (SRB). It documents every major event in your career in order—from when you joined a unit, to your deployments, and even specific duties you've performed. If there is a gap or a deployment isn't listed, it can look like unexplained 'missing time' to a promotion board.",
    capabilities: ["View career timeline", "View duty station history", "View deployment history", "View special assignments", "Print chronological record", "Verify service dates", "Audit career sequence"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Your Official Timeline",
            details: [
              "The Chronological Record documents every major event in your career in sequential order",
              "It is the primary way the Marine Corps verifies where you were and what you were doing at any given time",
              "Promotion boards look for a continuous, logical flow of duty from the day you stepped on the yellow footprints to today",
            ],
          },
          {
            step: "Gaps Look Bad",
            details: [
              "If there is a gap in your timeline, it looks like you have unexplained 'missing time'",
              "If a deployment isn't listed, you may not get credit for that time in combat or overseas",
              "Incomplete records can affect VA claims, retirement, and promotion competitiveness",
            ],
          },
        ],
      },
      {
        title: "How to View Your Timeline",
        steps: [
          {
            step: "Step 1: Access the Record",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Chronological Record",
            ],
          },
          {
            step: "Step 2: Audit the Sequence",
            details: [
              "Look at the entries from top to bottom",
              "Each line should have: Date (when the event happened), Event/Duty (a brief code or description like 'JOINED,' 'TAD,' 'PROMOTED'), and Unit/RUC (the unit where the event took place)",
            ],
          },
          {
            step: "Step 3: Cross-Reference",
            details: [
              "Compare this list to your BIR (Basic Individual Record)",
              "If your BIR says you joined your current unit on the 10th, but your Chronological Record says the 15th, one of them is wrong",
            ],
          },
          {
            step: "Step 4: Print/Save",
            details: [
              "Click 'Printer-Friendly View' - a new window will open",
              "Click 'Print' to save as a PDF for your records, then close the new window or tab to return to MOL",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "Missing TAD/Deployments",
            details: [
              "This is the most common error",
              "If you went on a 7-month deployment but don't see an entry for it, your record is incomplete",
            ],
          },
          {
            step: "Overlapping Dates",
            details: [
              "Sometimes S-1 runs an entry that accidentally overlaps with a previous one",
              "This creates a 'double-entry' for the same time period and can flag your record for an audit",
            ],
          },
          {
            step: "Code Confusion",
            details: [
              "You will see abbreviations like 'FR' (From) or 'TR' (To)",
              "Don't ignore these—make sure the 'To' and 'From' units match your actual movements",
            ],
          },
          {
            step: "Assuming It's Done",
            details: [
              "Just because you have a set of orders doesn't mean the event hit your Chronological Record",
              "Always check this page about a week after you check into a new unit",
            ],
          },
        ],
      },
      {
        title: "What to Do After You Review",
        steps: [
          {
            step: "Fixing Errors",
            details: [
              "If you find a gap or mistake, take your Original Orders (with the 'Reporting/Detaching' endorsements) to your S-1",
              "They are the only ones who can fix the 'Page 3' entries in MCTFS",
            ],
          },
          {
            step: "Board Readiness",
            details: [
              "If you are within a year of a promotion board, ensure this record is seamless",
              "Boards look for a continuous, logical flow from day one to today",
            ],
          },
          {
            step: "Record Integrity",
            details: [
              "Once S-1 makes a correction, it typically takes 24-48 hours for the new entry to appear on this page in MOL",
            ],
          },
        ],
      },
    ],
  },
  "mol-education": {
    title: "Education",
    description: "This is the official list of every school, course, and degree you have completed since joining the Marine Corps. The Education report is the engine behind your JEPES Mental Agility score (for E-1 to E-4) and your Master Brief Sheet (for E-5 and above). If your off-duty college courses or MarineNet CEUs aren't listed here, you are leaving promotion points on the table.",
    capabilities: ["View civilian education", "View military education", "View MCI course completions", "View professional certifications", "Check JEPES education points", "Verify degree status"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Promotion Points",
            details: [
              "In 2026, the Marine Corps weights 'Self-Education' and 'Degrees' heavily",
              "The Education report directly feeds your JEPES Mental Agility score",
              "Missing courses or degrees means you are losing promotion points every single month",
            ],
          },
          {
            step: "Board Competitiveness",
            details: [
              "For E-5 and above, education appears on your Master Brief Sheet",
              "Boards see your civilian degrees and military education history",
              "A complete education record shows you invest in your professional development",
            ],
          },
        ],
      },
      {
        title: "How to Review Your Education",
        steps: [
          {
            step: "Step 1: Access the Page",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Education",
            ],
          },
          {
            step: "Step 2: Review the Sections",
            details: [
              "Service Schools: MOS schools, PME (like Career School or Leading Marines), and formal military training",
              "MarineNet/MCI: Every course you finish with a CEU value should appear here",
              "Off-Duty Education: Civilian college credits and degrees (Associate, Bachelor, etc.)",
              "Academic Tests: ASVAB scores and DLAB/DLPT (language) results",
            ],
          },
          {
            step: "Step 3: Print/Save",
            details: [
              "Click 'Printer Friendly' - a new window will open",
              "Click 'Print' (Save as PDF) to keep a copy for your records",
              "Click 'Close' to return to the main Education page",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "The MarineNet Lag",
            details: [
              "Just because you got a certificate on MarineNet doesn't mean it's in MOL",
              "It can take 48-72 hours for the systems to sync",
            ],
          },
          {
            step: "Civilian Transcript Ghosting",
            details: [
              "Civilian degrees do NOT update automatically",
              "You must have your college send an official transcript to your S-1 or the Joint Services Transcript (JST) operations center",
            ],
          },
          {
            step: "Duplicate Entries",
            details: [
              "Sometimes the same course will be listed twice with different dates",
              "This can glitch your JEPES points - notify your S-1 if you see duplicates",
            ],
          },
          {
            step: "Proctor Codes",
            details: [
              "Many Marines finish a course but forget that it requires a proctored exam to actually 'count' for credit",
              "Check that the course status says 'Completed' and not just 'Enrolled'",
            ],
          },
        ],
      },
      {
        title: "What to Do After Review",
        steps: [
          {
            step: "Verify JEPES Points",
            details: [
              "Once a course appears on this page, check your JEPES dashboard",
              "Under 'Mental Agility,' you should see your score increase based on new 'Self-Education' credits",
            ],
          },
          {
            step: "Updating Civilian Education",
            details: [
              "If your college degree is missing, request an official transcript",
              "Most units require you to bring a sealed copy (or have an e-script sent) to the Education Center or S-1",
            ],
          },
          {
            step: "Quarterly Audit",
            details: [
              "Check this page every three months",
              "As you complete more training, ensure the 'Service Schools' section stays updated so you are always board ready",
            ],
          },
        ],
      },
    ],
  },
  "mol-fcp": {
    title: "Family Care Plan (FCP)",
    description: "The Family Care Plan record shows your dependent care arrangements required for deployment readiness. Single parents and dual-military couples must maintain current FCPs.",
    capabilities: ["View FCP status", "View care provider information", "Check FCP expiration", "Print FCP documentation"],
    userTypes: ["All Marines", "Single Parents", "Dual-Military Couples"],
    guide: [
      {
        title: "Accessing Your FCP",
        steps: [
          { step: "Log in to MOL at https://mol.tfs.usmc.mil/" },
          { step: "Navigate to Personal Info > Family Care Plan" },
          { step: "Review your current FCP status and information" },
        ],
      },
      {
        title: "FCP Requirements",
        steps: [
          {
            step: "Who Needs an FCP",
            details: [
              "Single parents with custody of minor children",
              "Dual-military couples with minor children",
              "Marines with adult dependents requiring care",
              "Marines with special needs family members",
            ],
          },
          {
            step: "FCP Components",
            details: [
              "Short-term care provider (immediate deployment)",
              "Long-term care provider (extended deployment)",
              "Financial arrangements",
              "Medical/legal powers of attorney",
              "Transportation arrangements",
            ],
          },
        ],
      },
      {
        title: "Maintaining Your FCP",
        steps: [
          { step: "FCPs must be reviewed and updated annually" },
          { step: "Update whenever care providers change" },
          { step: "Ensure care providers have signed consent forms" },
          { step: "Verify all contact information is current" },
          { step: "Submit updates through your unit's Family Readiness Officer" },
        ],
      },
    ],
  },
  "mol-grade-report": {
    title: "Grade Report",
    description: "Your official 'promotion eligibility' sheet. While other pages show what you've done, this page shows where you stand in the eyes of the Marine Corps promotion system. It tracks Time in Grade (TIG), Time in Service (TIS), and whether you've completed your required PME. If this page has an error—like a 'Promotion Restriction' code that shouldn't be there—you will be passed over even if your JEPES score is high.",
    capabilities: ["View promotion eligibility", "Check TIG/TIS status", "Verify PME completion", "View restriction codes", "Check selection status", "Print grade report"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "The Final Word on Promotion",
            details: [
              "This report is the final word on whether or not you are eligible to pick up the next rank",
              "Even if you are the best Marine in the shop, an error here can block your promotion",
              "Boards and promotion systems pull data directly from this report",
            ],
          },
          {
            step: "What It Tracks",
            details: [
              "Time in Grade (TIG): How long you have been at your current rank",
              "Time in Service (TIS): Your total time in the Marine Corps",
              "PME Completion: Whether you have finished required Professional Military Education",
              "Restriction Codes: Any administrative holds that block promotion",
            ],
          },
        ],
      },
      {
        title: "How to Navigate the Grade Report",
        steps: [
          {
            step: "Step 1: Access the Report",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Grade Report",
            ],
          },
          {
            step: "Step 2: Verify Key Data Elements",
            details: [
              "Current Grade/Date of Rank: Ensure your actual rank and the day you pinned it on match the system",
              "Promotion Eligibility: Look for your 'Eligibility Date' - the earliest date the system says you can move up",
              "Selection Status: If you are E-5 or above, this will show if you have been 'Selected' by a board",
              "Mandatory Requirements: Check the section for 'PME Completion' - it should say YES for your current grade",
            ],
          },
          {
            step: "Step 3: Check for Restrictions",
            details: [
              "Look for any 'Non-recommendation' or 'Restriction' codes",
              "If you aren't on legal hold or under a weight control program, this section should be clear",
              "Common restriction codes: Legal Hold, BCP (Body Composition Program), Medical Hold",
            ],
          },
          {
            step: "Step 4: Print/Save",
            details: [
              "Click 'Printer Friendly' - a new window opens with a clean, formatted document",
              "Click 'Print' (or Save as PDF)",
              "Click 'Close' to return to the standard Grade Report page",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "The PME Gap",
            details: [
              "You finished the course on MarineNet, but the Grade Report still says NO for requirement completion",
              "This usually means the data hasn't migrated from the Education folder to the Grade folder",
              "It can take 48-72 hours for systems to sync - check back after a few days",
            ],
          },
          {
            step: "Incorrect TIG/TIS",
            details: [
              "If you had a 'broken service' period (left and came back) or a reduction in rank, these dates can get scrambled",
              "Always verify your PEBD and Date of Rank are accurate",
            ],
          },
          {
            step: "Ignoring Restriction Codes",
            details: [
              "Sometimes a 'Pro-Pay' or 'Legal' restriction code stays on your record long after the issue is resolved",
              "If you see a code you don't recognize, ask your S-1 immediately",
              "These codes can silently block your promotion without you realizing it",
            ],
          },
          {
            step: "The Selection Link",
            details: [
              "For those waiting on board results, don't just look at the MOL homepage",
              "The Grade Report is often the first place the 'Selected' status appears officially",
            ],
          },
        ],
      },
      {
        title: "What to Do After Review",
        steps: [
          {
            step: "Fixing Eligibility",
            details: [
              "If you meet the score and PME but the report says 'Ineligible,' take a printout of this report and your BTR to your Company Clerk or S-1",
              "They can investigate and submit corrections to MCTFS",
            ],
          },
          {
            step: "Monthly JEPES Cycle",
            details: [
              "For Sergeants and below, ensure this report is 'Green' before the cutoff date (usually the 20th of the month)",
              "This ensures you are in the running for the next month's promotion",
            ],
          },
          {
            step: "Board Preparation",
            details: [
              "If you are E-5 or above, this report must be 100% accurate before your Digital Photo and OMPF are sent to the promotion board",
              "Errors here will be seen by every board member reviewing your record",
            ],
          },
        ],
      },
    ],
  },
  "mol-imr": {
    title: "Individual Medical Readiness (IMR)",
    description: "Your 'medical scoreboard' that determines if you are deployable or if you'll be spending your morning at the BAS catching up on shots. Medical readiness is a go/no-go criteria for deployments, schools, and even leave in some units. This page helps you track your PHA, dental class, and immunizations so you can fix issues BEFORE your name shows up on the 'Hit List' at morning formation.",
    capabilities: ["View medical readiness status", "Check immunization status", "View dental readiness", "Check deployment eligibility", "View PHA due date", "Track HIV testing currency"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Deployability",
            details: [
              "If you are 'Red' on your IMR, you are considered non-deployable",
              "Your name will appear on the command's non-deployment list",
              "You may be barred from schools, TAD, or certain opportunities until you are green",
            ],
          },
          {
            step: "HIPAA Protection",
            details: [
              "Your medical data is protected by HIPAA",
              "Only you and authorized medical personnel can see the specifics of your record",
            ],
          },
        ],
      },
      {
        title: "How to Check Your Status",
        steps: [
          {
            step: "Step 1: Access the Page",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Individual Medical Readiness (IMR)",
            ],
          },
          {
            step: "Step 2: Check Your Overall Status",
            details: [
              "Fully Medically Ready (1FMR): You are green across the board",
              "Partially Medically Ready (2PMR): You're missing something small, like a flu shot or booster",
              "Not Medically Ready (3NMR): You have a condition (like Light/Limited Duty) that prevents deployment",
              "Medical Readiness Indeterminate (4MRI): You are overdue for your big annual requirements (PHA or Dental)",
            ],
          },
          {
            step: "Step 3: Review the Details",
            details: [
              "PHA: Must be done every 365 days",
              "Dental: You must be Class 1 or 2. Class 3 means you need urgent work; Class 4 means you're overdue for an exam",
              "Immunizations: Check for 'Overdue' status on things like Tetanus or the annual Flu shot",
              "Labs: Ensure your HIV draw (required every 2 years) and DNA are on file",
            ],
          },
          {
            step: "Step 4: Print/Save",
            details: [
              "Click 'Printer Friendly' - a new window will open",
              "Click 'Print' to save as a PDF (keep this in your 'I Love Me' folder, especially before checking into a new unit)",
              "Click 'Close' to return to MOL",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "The 3-Month Overdue Rule",
            details: [
              "A PHA or Dental exam is technically 'overdue' if not finished within 3 months of your due month",
              "Don't wait until the last day",
            ],
          },
          {
            step: "MOL vs. Reality",
            details: [
              "If you just got a shot at a civilian pharmacy (like CVS) or a different base, it won't show up here automatically",
              "You must bring the documentation to your BAS or Medical Clinic to have them manually update the MRRS system",
            ],
          },
          {
            step: "HIV Draw Delays",
            details: [
              "Results for HIV tests can take 1-2 weeks to reflect in the system",
              "Don't wait until the day before a deployment to get your blood drawn",
            ],
          },
          {
            step: "Dental Class 3",
            details: [
              "If you are Dental Class 3, you are 'Red' even if you had your exam",
              "You aren't 'Green' until the actual dental work (like a cavity fill) is completed and signed off",
            ],
          },
        ],
      },
      {
        title: "What to Do After Review",
        steps: [
          {
            step: "Correcting Errors",
            details: [
              "If you see something 'Red' that you know you finished, take your yellow shot card or dental paperwork to Medical/Dental Admin",
              "They update the MRRS database, which then 'talks' to MOL",
            ],
          },
          {
            step: "Scheduling the PHA",
            details: [
              "If your PHA is overdue, complete the online Periodic Health Assessment Questionnaire (PHAQ) before calling for an appointment",
            ],
          },
          {
            step: "24-72 Hour Sync",
            details: [
              "After Medical updates your record, it usually takes 1 to 3 days for the status to flip to 'Green' on your MOL homepage",
            ],
          },
        ],
      },
    ],
  },
  "mol-pay-leave": {
    title: "Pay and Leave Summary",
    description: "Your personal dashboard for tracking your money and your 'days off' (leave). While the LES is your monthly receipt, this MOL report shows your career-long history and specific specialized leave balances. Leave is a right, but tracking it is your responsibility.",
    capabilities: ["View current pay", "View leave balances", "View earnings breakdown", "View deductions", "Track leave accrual", "View combat leave balance", "Check respite leave"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Your Leave Balance",
            details: [
              "If the Marine Corps thinks you have 0 days of leave when you actually have 30, you won't be able to take that vacation you planned",
              "Leave balances directly affect your ability to take time off",
            ],
          },
          {
            step: "Combat Leave Tax Benefits",
            details: [
              "If you've been in a combat zone, you earn Combat Leave which has massive tax benefits",
              "When you use Combat Leave days, they are tax-exempt",
              "If you don't ensure that leave is coded correctly, you could end up paying taxes on money that should be tax-free",
            ],
          },
        ],
      },
      {
        title: "How to Check Your Balances",
        steps: [
          {
            step: "Step 1: Access the Report",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Pay and Leave Summary Report",
            ],
          },
          {
            step: "Step 2: Audit Your Leave Types",
            details: [
              "Current Leave Balance: This is your 'Annual Leave.' Check your End Balance—this is what you have available to use right now",
              "Combat Leave: If you deployed to a Combat Zone Tax Exclusion (CZTE) area, check this balance. When you use these days, they are tax-exempt",
              "Respite Leave: If you've been deployed beyond normal rotation thresholds, check here for 'administrative absence' days (extra days off that don't count against your annual balance)",
            ],
          },
          {
            step: "Step 3: Review Leave Period History",
            details: [
              "Look at the From/To dates for every time you've been on leave",
              "If you see a period where you stayed home but leave was deducted, or vice-versa, flag it",
            ],
          },
          {
            step: "Step 4: Print/Save",
            details: [
              "Click 'Printer-Friendly View'",
              "Click 'Print' (or 'Save as PDF') - great document to bring to checkout if you are about to go on Terminal Leave",
              "Click 'Close' to return to the main portal",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "The Use/Lose Trap",
            details: [
              "You can only carry over 60 days of leave into the next fiscal year (October 1st)",
              "Check this report in August—if you have 70 days, you need to take 10 days of leave or you will lose them",
            ],
          },
          {
            step: "Combat Leave vs. Annual Leave",
            details: [
              "When you submit a leave request, ensure you specify if you are using Combat Leave",
              "If you don't, the system will pull from your regular Annual Leave first, and you'll miss the tax break",
            ],
          },
          {
            step: "Accrual Errors",
            details: [
              "You earn 2.5 days of leave per month",
              "If your balance hasn't gone up in three months, your pay record is likely glitched in MCTFS",
            ],
          },
          {
            step: "Pending Requests",
            details: [
              "This report shows processed leave only",
              "If you have a leave request currently sitting in your OIC's inbox, those days won't be deducted from your balance yet",
            ],
          },
        ],
      },
      {
        title: "What to Do After Review",
        steps: [
          {
            step: "Correcting the Balance",
            details: [
              "If your leave balance is wrong (e.g., you were charged twice for the same trip), take a printout of this report and your Approved Leave Request from MOL to your S-1",
            ],
          },
          {
            step: "Selling Back Leave",
            details: [
              "If you are at the end of your enlistment and want to 'sell' your leave, this report tells you exactly how many days you can cash out (up to 60 days over a career)",
            ],
          },
          {
            step: "Submit a Request",
            details: [
              "Now that you know your balance, you can go to the Leave/Lib tab in MOL to actually request your next period of absence",
            ],
          },
        ],
      },
    ],
  },
  "mol-pers-tempo": {
    title: "Pers-Tempo",
    description: "Your official record of how much time you've spent away from your home station. In the Marine Corps, we track every day you aren't in your own bed, whether you're in a fighting hole in another country or just at a training exercise a few hours away. Congress mandates this tracking to prevent burnout and ensure Marines aren't deployed excessively without compensation.",
    capabilities: ["View deployment history", "Track time deployed", "View Pers-Tempo points", "Monitor deployment tempo", "Check HDP-T eligibility", "Track dwell time"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Pay Eligibility",
            details: [
              "If your PersTempo exceeds certain thresholds (like being deployed for more than 220 consecutive days), you may become eligible for Hardship Duty Pay – Tempo (HDP-T)",
              "HDP-T is paid at a monthly rate set by the DoD - check the latest official pay tables for the current amount",
            ],
          },
          {
            step: "Family Benefits",
            details: [
              "These records are often used to verify eligibility for Family Separation Allowance (FSA)",
            ],
          },
          {
            step: "Dwell Time",
            details: [
              "It helps the Marine Corps calculate your 'Dwell Time'—the amount of time you should stay home before being sent out again",
              "This affects future deployment decisions and assignment planning",
            ],
          },
        ],
      },
      {
        title: "How to View Your Pace",
        steps: [
          {
            step: "Step 1: Access the Report",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > PersTempo Report",
            ],
          },
          {
            step: "Step 2: Understand the Codes",
            details: [
              "Look for the Type Code (a 3-character identifier)",
              "WAO: Forward Presence Operations (standard deployment)",
              "WAA: Deployment (often triggers FSA)",
              "WBJ: Joint or Combined Exercise",
            ],
          },
          {
            step: "Step 3: Audit Your Dates",
            details: [
              "Ensure the 'Start Date' and 'End Date' match your actual travel dates",
              "Even a one-day error can affect your total count toward high-tempo pay",
            ],
          },
          {
            step: "Step 4: Print/Save",
            details: [
              "Click 'Printer-Friendly View'",
              "Click 'Print' (Save as PDF) - vital proof if you ever need to claim back-pay for a deployment",
              "Click 'Close' to return to the PersTempo page",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "Open Events",
            details: [
              "If a deployment ended months ago but the report shows no 'End Date,' you are still 'clocking' PersTempo in the system",
              "This can block you from being joined to new orders later",
            ],
          },
          {
            step: "Training vs. Deployment",
            details: [
              "Not all time away is a 'Deployment'",
              "Exercises (like ITX or MWX) are tracked as Non-Deployment events",
              "They still count toward your total PersTempo, but they don't count toward certain 'deployment-only' pays",
            ],
          },
          {
            step: "The 220-Day Mark",
            details: [
              "If you are approaching 220 days away, check this report daily",
              "If it isn't accurate, your HDP-T pay won't trigger automatically",
            ],
          },
          {
            step: "Leave Within Deployment",
            details: [
              "If you take 'Rest and Recuperation' (R&R) leave for more than 30 days, your consecutive day counter might reset to zero",
            ],
          },
        ],
      },
      {
        title: "What to Do After Review",
        steps: [
          {
            step: "Identify Gaps",
            details: [
              "If a major training exercise or deployment is missing, grab your TAD Orders or Voucher and go to your S-1",
              "They must run a 'PersTempo Entry' in MCTFS",
            ],
          },
          {
            step: "Watch Your LES",
            details: [
              "If your PersTempo shows you've hit a high-threshold, keep an eye on your Leave and Earnings Statement for a new line item under 'Entitlements'",
            ],
          },
          {
            step: "Check Dwell Time",
            details: [
              "Use your total days away to talk to your Career Planner about your 'Dwell' status before you volunteer for another TAD or deployment",
            ],
          },
        ],
      },
    ],
  },
  "mol-psmc": {
    title: "Personal Statement of Military Compensation (PSMC)",
    description: "One of the most eye-opening documents you can pull from MOL. While your LES shows what you take home, the PSMC shows the actual value of your service in 'civilian dollars.' Most Marines look at their base pay and think they aren't making much, but because a huge chunk of your pay (BAH and BAS) is tax-free, your actual purchasing power is much higher.",
    capabilities: ["View total compensation", "View tax advantage calculations", "View benefits value", "Print compensation statement", "Calculate grossed-up income", "Compare to civilian salary"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Buying a House",
            details: [
              "When you apply for a mortgage, a bank might only look at your taxable income (W-2)",
              "The PSMC proves your 'grossed-up' income, helping you qualify for a larger loan",
            ],
          },
          {
            step: "Civilian Job Hunting",
            details: [
              "If you are thinking about getting out, you shouldn't accept a civilian job that pays 'the same as your base pay'",
              "You need to find a job that pays what your PSMC says, or you will actually be taking a pay cut",
            ],
          },
        ],
      },
      {
        title: "How to View and Print Your PSMC",
        steps: [
          {
            step: "Step 1: Access the Report",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Personal Statement of Military Compensation",
            ],
          },
          {
            step: "Step 2: Summary View (Default)",
            details: [
              "This gives you the big-picture numbers: Basic Pay, Allowances, and the 'Tax Advantage'",
              "The Tax Advantage shows how much money you saved by not paying taxes on BAH/BAS",
            ],
          },
          {
            step: "Step 3: Detailed View",
            details: [
              "Click the 'Detailed PSMC' link at the top",
              "This breaks down 'Indirect Compensation' like the value of your medical/dental coverage (Tricare)",
              "It also shows the estimated value of using the Commissary/Exchange",
            ],
          },
          {
            step: "Step 4: Print/Save",
            details: [
              "Click 'Printer Friendly' link",
              "Click 'Print' - if the watermark or background colors don't show up, enable 'Print Background Colors and Images' in your browser settings",
              "Choose 'Save as PDF' to keep this for your mortgage lender or transition binder",
              "Click 'Close' to return to the main portal",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "Assuming It's 100% Exact",
            details: [
              "The PSMC is an estimate",
              "It doesn't always account for specific state tax laws or sudden changes in special pays (like Jump Pay or Dive Pay)",
            ],
          },
          {
            step: "The Tax Advantage Confusion",
            details: [
              "Marines often overlook the 'Federal Tax Advantage' line",
              "This represents the amount of extra gross salary a civilian would have to earn to have the same 'take-home' pay as you",
            ],
          },
          {
            step: "Browser Issues",
            details: [
              "If you are using Chrome or Edge and the report looks weird or won't print, try enabling 'Background Graphics' in your browser's print menu",
            ],
          },
          {
            step: "Ignoring Indirect Benefits",
            details: [
              "Don't ignore the 'Medical/Dental' value",
              "In the civilian world, a family health plan can cost $1,500+ a month",
              "The PSMC adds this value so you can see your true worth",
            ],
          },
        ],
      },
      {
        title: "What to Do After Review",
        steps: [
          {
            step: "Transition Planning",
            details: [
              "If you are within 18 months of EAS, bring this report to your TRS (Transition Readiness Seminar)",
              "It will help you build a realistic budget for civilian life",
            ],
          },
          {
            step: "Loan Applications",
            details: [
              "If you are applying for a car or home loan, provide the PSMC alongside your LES",
              "It gives the lender a more accurate picture of your ability to pay",
            ],
          },
          {
            step: "Financial Health Check",
            details: [
              "Compare your PSMC with your BRS/TSP Information page",
              "If your 'Total Compensation' is high but your TSP contributions are low, it might be time to increase your savings",
            ],
          },
        ],
      },
    ],
  },
  "mol-red": {
    title: "Record of Emergency Data (RED)",
    description: "The most important administrative document you will ever sign. Also known as the DD Form 93, this is the official 'In Case of Emergency' document the Marine Corps uses to notify your family if something happens to you. If you are injured or killed, the Marine Corps uses this exact page to find your next of kin.",
    capabilities: ["View emergency contacts", "Update beneficiaries", "Certify RED", "Update next of kin", "Manage death gratuity ($100K)", "Designate PADD", "Manage family addresses", "Update spouse preferred language", "Support NEO planning", "Manage parent information", "Designate pay arrears beneficiaries", "Configure do not notify", "Track private insurance policies", "Provide NOK directions", "Set MIA notification contacts", "Manage 100% rule distributions"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Notification",
            details: [
              "Lists who the Casualty Assistance Program should contact first if you are injured or killed",
              "Physical addresses are required - the Marine Corps sends a Casualty Assistance Calls Officer (CACO) in person",
            ],
          },
          {
            step: "Death Gratuity",
            details: [
              "Designates who receives the immediate $100,000 tax-free payment to cover funeral and travel costs",
              "This is separate from your SGLI life insurance",
            ],
          },
          {
            step: "Unpaid Pay",
            details: [
              "Ensures your final paycheck and unused leave go to the person you choose",
              "Without this designation, pay goes to the next person in line by law (which may not be who you want)",
            ],
          },
        ],
      },
      {
        title: "RED Sections Overview",
        steps: [
          {
            step: "Family Information",
            details: [
              "Spouse and children addresses for emergency notification",
              "Spouse preferred language for CACO communication",
              "NEO planning data for OCONUS Marines",
            ],
          },
          {
            step: "Parents Information",
            details: [
              "Secondary Next of Kin contact information",
              "Parents are notified even if you are married",
            ],
          },
          {
            step: "Next of Kin (NOK)",
            details: [
              "Primary and secondary emergency contacts",
              "Directions to help CACOs locate addresses",
            ],
          },
          {
            step: "Death Gratuity",
            details: [
              "$100,000 tax-free payment to designated beneficiaries",
              "Percentages must total exactly 100%",
            ],
          },
          {
            step: "PADD",
            details: [
              "Person Authorized to Direct Disposition of your remains",
              "Decides burial location, cremation vs. burial, funeral arrangements",
            ],
          },
          {
            step: "Pay Arrears",
            details: [
              "Designates who receives unpaid pay, leave, and allowances",
              "Separate from Death Gratuity and SGLI",
            ],
          },
          {
            step: "Insurance Information",
            details: [
              "Record private insurance policies for family reference",
              "SGLI is managed separately via milConnect",
            ],
          },
          {
            step: "Do Not Notify",
            details: [
              "Protect vulnerable family members from direct notification",
              "For those with health conditions that make sudden notification dangerous",
            ],
          },
          {
            step: "MIA Notification",
            details: [
              "Designate contacts for Missing in Action status",
              "Different from standard casualty notification",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "The SGLI Trap",
            details: [
              "Updating your RED does NOT update your SGLI (Life Insurance)",
              "You must go to milConnect (SOES) to change your life insurance beneficiaries",
              "These are two separate systems - update BOTH",
            ],
          },
          {
            step: "PO Boxes",
            details: [
              "Do NOT use a PO Box for emergency notification addresses",
              "The Marine Corps needs a physical address where a CACO can find your family",
            ],
          },
          {
            step: "The Ex-Spouse Error",
            details: [
              "If you get divorced and don't update this page, your $100,000 death gratuity will legally go to your ex-spouse",
              "This is true regardless of what your will says",
              "Update immediately after any change in marital status",
            ],
          },
          {
            step: "Pending vs. Posted",
            details: [
              "Changes take 24-48 hours to process through MCTFS",
              "Do not re-submit the same change if you see it in bold - it's already in the queue",
              "Bold text returning to normal means the change has posted",
            ],
          },
        ],
      },
      {
        title: "Annual Certification",
        steps: [
          {
            step: "When to Certify",
            details: [
              "Annually at minimum",
              "Before deployment",
              "After major life events (marriage, divorce, birth of child)",
              "After PCS moves",
            ],
          },
          {
            step: "Certification Process",
            details: [
              "Review all sections for accuracy",
              "If everything is correct, click the 'Certify' button",
              "Certification is required for deployment readiness",
            ],
          },
        ],
      },
    ],
  },
  "mol-red-family": {
    title: "RED Family Information",
    description: "Update spouse and dependent information in your Record of Emergency Data. This section ensures the Marine Corps can locate and notify your family members in case of emergency, and properly manage benefits and evacuation planning.",
    capabilities: ["Update spouse information", "Add/edit dependent children", "Manage family addresses", "Set spouse preferred language", "Update contact numbers", "Support NEO planning"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why Family Data Matters",
        steps: [
          {
            step: "Emergency Notification",
            details: [
              "Your spouse is typically the Primary Next of Kin (PNOK) and will be contacted first in any emergency",
              "Physical addresses are required - the Marine Corps sends a Casualty Assistance Calls Officer (CACO) in person",
              "Outdated addresses delay critical notifications to your family",
            ],
          },
          {
            step: "Deployment and NEO Planning",
            details: [
              "If you are deployed or in a training environment, your command must know exactly where your spouse and children are",
              "In a worst-case scenario, the Marine Corps needs the current address of your family for casualty notification",
              "For Marines stationed OCONUS (like Okinawa or Iwakuni), this data is used for Non-combatant Evacuation Operations (NEO)",
              "The 'Spouse Preferred Language' field ensures translators are available if needed during emergency contact",
            ],
          },
          {
            step: "Understanding Status Indicators",
            details: [
              "Bold text means a change is pending and hasn't posted to MCTFS yet",
              "Red text means a record is marked for removal",
              "Normal text means the data is current and certified",
            ],
          },
        ],
      },
      {
        title: "Managing Family Addresses",
        steps: [
          {
            step: "Mailing Address",
            details: [
              "Click 'Edit Address' under Mailing Address to change where you receive mail",
              "If the link is missing, go to the Personal Contact Information page in MOL",
            ],
          },
          {
            step: "Spouse/Child Address (Separate Locations)",
            details: [
              "If your family does not live with you (e.g., you are on a Geobachelor tour), click 'Edit Address' next to their name",
              "Provide their specific physical location - not just 'same as mine'",
              "This is critical for casualty notification and evacuation planning",
            ],
          },
          {
            step: "Syncing Addresses",
            details: [
              "If a child moves back in with your spouse, click 'Use Spouse Address' to quickly sync the child's record",
              "This prevents having to re-enter the same address multiple times",
            ],
          },
          {
            step: "Transaction Details",
            details: [
              "If you see a bold entry and can't remember what you changed, click 'Details'",
              "This shows a side-by-side comparison of old vs. new data",
            ],
          },
        ],
      },
      {
        title: "Editing U.S. Addresses",
        steps: [
          {
            step: "Step 1: Format Selection",
            details: [
              "Click 'Reformat This Address' if the boxes don't match a standard U.S. street address",
            ],
          },
          {
            step: "Step 2: Street Address",
            details: [
              "Type the physical street address - avoid PO Boxes for family physical locations",
            ],
          },
          {
            step: "Step 3: State/City/County Sequence (Critical)",
            details: [
              "Select the State first - this 'unlocks' the City list",
              "Select the City from the dropdown",
              "Once the city is selected, the County field will populate",
              "If a city spans multiple counties (like Dallas, TX), you must select the correct one",
              "County selection is important for local emergency services and legal jurisdiction",
            ],
          },
          {
            step: "Step 4: Zip Code",
            details: [
              "Enter the 5 or 9-digit Zip Code",
              "Click 'Submit Changes', then 'Apply Changes'",
            ],
          },
        ],
      },
      {
        title: "Editing Foreign Addresses",
        steps: [
          {
            step: "Step 1: Select Foreign Format",
            details: [
              "Click the 'Foreign (Non-APO/FPO Address)' link",
              "This is for family members living overseas not at a military installation",
            ],
          },
          {
            step: "Step 2: Location Selection",
            details: [
              "Select the Country first to populate the City list",
              "Select the appropriate City from the dropdown",
            ],
          },
          {
            step: "Step 3: Address Details",
            details: [
              "Type the full foreign address in the boxes provided",
              "Follow that country's local format for best results",
              "Click 'Submit Changes', then 'Apply Changes'",
            ],
          },
        ],
      },
      {
        title: "Spouse and Child Data",
        steps: [
          {
            step: "Preferred Language",
            details: [
              "If your spouse speaks a language other than English as their primary language, click 'Add/Edit Spouse Preferred Language'",
              "This is critical for casualty or emergency notifications",
              "The Marine Corps can send a representative who speaks their language or provide a translator",
            ],
          },
          {
            step: "Removing Records",
            details: [
              "Click 'Remove Child' or 'Remove Spouse' only in the event of legal changes (divorce or loss of dependency)",
              "For Marines, adding a spouse or child must be done through IPAC/S-1 with legal documentation (marriage/birth certificates)",
              "Address updates can be done here by the individual Marine",
            ],
          },
          {
            step: "Canceling Changes",
            details: [
              "If you made a mistake, click 'Cancel Pending Transaction' before the change posts to MCTFS",
              "If a record is marked in red for removal, click 'Cancel Removal' to stop the deletion",
            ],
          },
        ],
      },
      {
        title: "Spouse Preferred Language",
        steps: [
          {
            step: "Why This Setting Matters",
            details: [
              "If a Casualty Assistance Calls Officer (CACO) is dispatched to your home, the Marine Corps uses this data to ensure they have a translator or can communicate in your spouse's primary language",
              "During natural disasters or NEO evacuations, your command needs to provide instructions your spouse can understand immediately",
              "This helps the Marine Corps honor your family's background by ensuring they aren't left in the dark due to a language barrier",
            ],
          },
          {
            step: "How to Set the Language",
            details: [
              "On the RED Family Information page, click 'Add Spouse Preferred Language' or 'Edit Spouse Preferred Language'",
              "Select the correct language from the Preferred Language dropdown menu",
              "Click 'Submit Changes'",
              "Review the selection and click 'Apply Changes' to save",
              "If you made a mistake, click 'Cancel' to return without saving",
            ],
          },
          {
            step: "Spouse Language Pitfalls",
            details: [
              "Many Marines leave this blank assuming English is 'fine' - if your spouse is more comfortable in their native tongue for complex or emotional matters, list that language",
              "After applying changes, the language appears in bold (Pending) for 24-48 hours while MCTFS processes",
              "This is for your spouse - your own language skills are tracked in Self-Professed Language Skills or Operational Cultural Information",
            ],
          },
          {
            step: "After Setting the Language",
            details: [
              "Once bold text turns normal, your spouse's preferred language is officially part of your certified RED",
              "If your spouse's language is rare, mention this to your Unit's Family Readiness Officer (FRO)",
              "Check if you have also listed that language in your Operational Cultural Information Report if you speak it",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls",
        steps: [
          {
            step: "PO Boxes",
            details: [
              "Do NOT use a PO Box for emergency notification addresses",
              "The Marine Corps needs a physical address where a CACO can find your family",
            ],
          },
          {
            step: "The Geobachelor Gap",
            details: [
              "Many Marines forget to update their family's address when they go on Unaccompanied orders",
              "Ensure your spouse's actual physical location is listed, not just your current barracks",
              "Do not assume your spouse's address is updated just because yours is",
            ],
          },
          {
            step: "Pending vs. Posted",
            details: [
              "Changes take 24-48 hours to process through MCTFS",
              "Do not re-submit the same change if you see it in bold - it's already in the queue",
              "Bold text returning to normal means the change has posted",
            ],
          },
          {
            step: "Remove vs. Edit",
            details: [
              "Do not 'Remove' a spouse because they moved - use 'Edit Address' instead",
              "'Remove' should only be used if the person is no longer your legal dependent (divorce, age-out)",
            ],
          },
          {
            step: "The City First Mistake",
            details: [
              "You cannot type a city name and expect the state to appear",
              "You must select the State first for the system to filter the correct cities",
            ],
          },
          {
            step: "County Confusion",
            details: [
              "Many Marines ignore the County field or leave the default",
              "If your family lives in an area where the city is in two counties, choosing the wrong one can cause administrative delays during a crisis",
            ],
          },
          {
            step: "Browser Timeouts",
            details: [
              "If you take too long to find an address, MOL may time out",
              "Have all your family's zip codes and county names ready before you start",
            ],
          },
        ],
      },
    ],
  },
  "mol-red-parents": {
    title: "RED Parents Information",
    description: "Update parent contact and beneficiary details in your Record of Emergency Data. Parents are Secondary Next of Kin and entitled to official notification even if you are married.",
    capabilities: ["Update parent addresses", "Mark parent as deceased", "Edit contact information", "Manage step-parent records", "Update international addresses"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why Parent Data Matters",
        steps: [
          {
            step: "Notification Rights",
            details: [
              "While a spouse is typically the Primary Next of Kin (PNOK), parents are Secondary Next of Kin and still entitled to official notification",
              "For deceased or missing Marines, a uniformed CACO is dispatched to the parents' address",
              "If the address is outdated, the Marine Corps may be forced to search for them or deliver news telephonically - not the standard of care your family deserves",
              "Even if married, your parents are often assigned their own CACO if they live in a different state",
            ],
          },
          {
            step: "Parent Status Indicators",
            details: [
              "Normal Text: Active record",
              "Bold Text: Recent change (Pending)",
              "'D' Indicator: Parent is officially listed as deceased in MCTFS",
            ],
          },
        ],
      },
      {
        title: "Managing Parent Records",
        steps: [
          { step: "Log in to MOL and navigate to RED > Parents Information" },
          { step: "Click 'Edit' next to a parent's name to update their physical address or phone number" },
          { step: "Click 'Remove This Address' if a parent has moved and you don't have their new location yet" },
          {
            step: "Understanding Remove vs. Cancel",
            details: [
              "Removing the address does not remove the parent from your record - it only clears the address field",
              "Click 'Cancel Removal' if you accidentally marked an address for removal",
            ],
          },
        ],
      },
      {
        title: "Updating a Deceased Parent",
        steps: [
          { step: "Check the 'Deceased' box next to the parent's name" },
          { step: "Click 'Submit Changes' - the system automatically removes any existing address records" },
          { step: "This prevents the Marine Corps from attempting to locate them during a crisis" },
        ],
      },
      {
        title: "U.S. Parent Address",
        steps: [
          {
            step: "Format Selection",
            details: [
              "Click 'Reformat This Address' if the boxes don't match a standard U.S. address format",
            ],
          },
          {
            step: "Street Address Entry",
            details: [
              "Type the street address - do not use any punctuation (commas, periods, or dashes)",
              "If using a PO Box or Rural Route, you must also provide physical directions on the Next of Kin Directions page",
            ],
          },
          {
            step: "City, State, and Zip",
            details: [
              "Type the city, two-letter state initials, and 5 or 9-digit Zip Code",
            ],
          },
        ],
      },
      {
        title: "International Parent Address",
        steps: [
          {
            step: "Foreign Address Setup",
            details: [
              "Click 'Reformat This Address' to configure boxes for foreign (non APO/FPO) listing",
              "Type the full address as it appears in that country - no punctuation",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls",
        steps: [
          {
            step: "Unknown Parent Location",
            details: [
              "If you are estranged or don't know a parent's location, type 'Unknown' in the address field - do not leave it blank",
            ],
          },
          {
            step: "Step-Parents",
            details: [
              "Ensure you distinguish between Parent One, Parent Two, and Step-Parents - CACO prioritizes biological/adoptive parents unless you specify otherwise in the Remarks section",
            ],
          },
          {
            step: "Health Concerns",
            details: [
              "If a parent is in extremely poor health (dementia, heart condition), use the 'Do Not Notify' section to prevent stressful notification",
            ],
          },
          {
            step: "Punctuation Errors",
            details: [
              "MCTFS often rejects entries with punctuation - type '123 Main St Apt 4' not '123 Main St., Apt. #4'",
            ],
          },
        ],
      },
    ],
  },
  "mol-red-nok": {
    title: "RED Next of Kin (NOK)",
    description: "Designate your emergency notification contacts and provide detailed directions to help Casualty Assistance officers locate your family members.",
    capabilities: ["Set Primary NOK", "Set Secondary NOK", "Provide address directions", "Add special instructions", "Update contact preferences"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why NOK Data Is Critical",
        steps: [
          {
            step: "In-Person Notification",
            details: [
              "The Marine Corps has a strict 8-hour goal to notify your family in person after a casualty",
              "Primary Next of Kin (PNOK): First person contacted - spouse if married, parents if single",
              "Secondary Next of Kin (SNOK): Other relatives or close friends who should be notified",
              "For deaths, a uniformed CACO is sent to the address you provide - wrong address means delayed notification",
              "Wrong addresses often lead to families hearing news through social media first - a situation the Marine Corps works to avoid",
            ],
          },
        ],
      },
      {
        title: "Managing NOK Records",
        steps: [
          {
            step: "Adding or Editing NOK (Up to 3)",
            details: [
              "Click 'Add Next of Kin Record' (up to three) or 'Edit' an existing one",
              "Ensure your PNOK is listed first",
              "Provide a valid physical address and 24-hour phone number",
              "Click 'Remove' to delete someone (divorce, estrangement) - text turns red until processed",
              "Click 'Apply Changes' to send update to MCTFS",
            ],
          },
        ],
      },
      {
        title: "Phone Number Formatting",
        steps: [
          {
            step: "U.S. Phone Numbers",
            details: [
              "Click 'reformat this phone' to toggle between U.S. and Overseas formats",
              "U.S. Format: 10 digits (Area Code + Number)",
              "Provide a 24-hour contact number",
              "Include extension in the extension box only for office extensions (e.g., x102)",
            ],
          },
          {
            step: "Overseas Phone Numbers",
            details: [
              "Overseas Format: Up to 15 digits (Country Code + City Code + Number)",
              "For foreign numbers, verify correct prefix at countrycallingcodes.com",
            ],
          },
        ],
      },
      {
        title: "Relationship Hierarchy",
        steps: [
          {
            step: "Selecting the Right Relationship",
            details: [
              "The 'Relationship' you select defines the legal order of notification",
              "Select accurately: Spouse, Mother, Father, Sibling, etc.",
              "Spouse is Primary Next of Kin (PNOK) for married Marines",
              "Parents are usually PNOK for single Marines",
            ],
          },
        ],
      },
      {
        title: "Next of Kin Directions (The CACO Map)",
        steps: [
          {
            step: "Why Directions Matter",
            details: [
              "A CACO's mission is to deliver news in person with dignity and speed - they don't want to be stuck at a locked gate",
              "The Marine Corps cannot deliver notification to a PO Box - directions are the ONLY way they'll know which house is your family's",
              "GPS often fails in rural 'back-country' areas - landmarks are more reliable than digital maps",
              "A CACO may arrive at 02:00 in a city they don't know - your directions prevent wasted time when minutes count",
            ],
          },
          {
            step: "Writing Effective Directions (5 Boxes, 35 Characters Each)",
            details: [
              "Don't waste space with directions from the interstate - start from nearest major landmark or neighborhood entrance",
              "Do not use special characters like &, #, or @ - MCTFS often crashes on these",
              "Example: 'Gatcode 1234 Apt 2B back of bldg'",
              "For PO Box/Rural: Describe physical house - 'White house with red door on Rt 9'",
              "For Overseas: Include local phone number in direction boxes as backup",
            ],
          },
          {
            step: "Specific Scenarios",
            details: [
              "Gated Community: Provide gate code or call box instructions",
              "Rural Area: Use landmarks - 'Turn left at the red barn, third house on right with gravel driveway'",
              "Apartment Complex: 'Gate code is 1234, Apartment 4B is in back left corner of complex'",
              "PO Box Users: MUST provide physical location description here",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls",
        steps: [
          {
            step: "Address and Phone Errors",
            details: [
              "Update this every time you move or your family moves - avoid the 'Social Media Risk'",
              "Don't use periods or commas in addresses - use '123 Main St Apt 4' not '123 Main St., Apt. 4'",
              "Don't put last four digits of phone in extension box - that's only for office extensions",
              "Ensure phone here matches number in RED Family Information section",
            ],
          },
          {
            step: "Direction Mistakes",
            details: [
              "Using symbols like & or % can cause MCTFS to reject - use 'and' or omit",
              "'Third house on the left' is vague at night - use 'Third house on left, brown fence'",
              "Don't think a phone number is enough - the goal is IN-PERSON notification",
              "Bold text appears for 24-48 hours while syncing",
            ],
          },
        ],
      },
      {
        title: "After Updating NOK",
        steps: [
          {
            step: "Verification Steps",
            details: [
              "Audit your PADD to ensure correct person handles funeral honors",
              "If NOK is a spouse who recently moved, update DEERS via local ID card office",
              "Review 'Do Not Notify' list if any NOK has severe health issues",
              "Check BTR in two days to verify relationship and phone migrated correctly",
            ],
          },
          {
            step: "Direction Verification",
            details: [
              "Test: Read your 175 characters to a friend - if they can't visualize it, rewrite for clarity",
              "Verify on BTR in two days that NOK Directions section reflects your input",
              "If the person is also your PADD, you've secured the most critical part of your emergency data",
            ],
          },
        ],
      },
    ],
  },
  "mol-red-insurance": {
    title: "RED Insurance Information",
    description: "View and update SGLI and other insurance beneficiary designations. Track private insurance policies for your family's awareness.",
    capabilities: ["View SGLI status", "Track FSGLI coverage", "Record private policies", "Update beneficiaries", "Review coverage amounts"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why Private Insurance Matters",
        steps: [
          {
            step: "CACO Assistance",
            details: [
              "When a CACO sits down with your family, they use this list to help identify which insurance companies to call",
              "If a policy isn't listed here, your family might not know it exists - leaving thousands unclaimed",
              "This consolidates USAA, Navy Federal, civilian employer policies, etc. into one official military record",
              "Having policy numbers pre-loaded allows the CACO to help start claims within days",
              "This is SEPARATE from SGLI - do NOT list your SGLI here (that's managed via milConnect SOES)",
            ],
          },
        ],
      },
      {
        title: "Managing Insurance Records",
        steps: [
          {
            step: "Adding and Managing Policies (Up to 5)",
            details: [
              "Click 'Add New Insurance Record'",
              "Provide: Insurance Company Name, Policy Number, Company Address and Phone Number",
              "Click 'Edit' to update if coverage amount changes or company merges/changes name",
              "Click 'Remove' to delete an expired or cancelled policy",
              "Click 'Cancel Removal' before the 24-48 hour sync window closes if you made a mistake",
            ],
          },
        ],
      },
      {
        title: "The 25-Character Constraint",
        steps: [
          {
            step: "Working Within the Limit",
            details: [
              "MOL limits this field to a maximum of 25 characters",
              "Prioritize the Policy Number - company names are easy to guess, policy numbers are unique and vital",
              "Abbreviate heavily: 'Northwestern Mutual 555-1234' becomes 'NW Mut5551234'",
              "Example: 'State Farm Insurance 987654' becomes 'StateFrm987654'",
              "Keep at least 4-5 letters of company name so it's recognizable",
              "Avoid using #, -, or . as they take up valuable character spaces",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls",
        steps: [
          {
            step: "The SGLI Trap",
            details: [
              "Updating your RED does NOT update your SGLI (Life Insurance)",
              "You must go to milConnect (SOES) to change your life insurance beneficiaries",
              "These are two separate systems - update BOTH",
            ],
          },
          {
            step: "Policy Details",
            details: [
              "Don't just write 'MetLife' - specify the branch or policy type if possible",
              "If you renew a term-life policy and get a new number, you must update it here",
              "An incorrect policy number can delay a claim for months",
              "This information is viewable by S-1 and command leadership - include only what's necessary for claims",
            ],
          },
        ],
      },
      {
        title: "After Updating Insurance",
        steps: [
          {
            step: "Verification Steps",
            details: [
              "Check SGLI/SOES on milConnect to ensure military insurance beneficiaries are also current",
              "Inform your beneficiaries where you keep original hard-copy documents - MOL is the 'pointer' but they'll need actual papers",
              "Verify on BIR in 48 hours that carriers are listed in the Insurance section",
              "Make sure your PADD knows these policies exist",
            ],
          },
        ],
      },
    ],
  },
  "mol-red-death-gratuity": {
    title: "RED Death Gratuity",
    description: "Designate who receives the immediate $100,000 tax-free death gratuity payment. This is separate from SGLI life insurance.",
    capabilities: ["Designate beneficiaries", "Set percentage splits", "Update designations", "View current elections", "Understand the 100% rule"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Purpose of the Death Gratuity",
        steps: [
          {
            step: "Immediate Financial Support",
            details: [
              "A $100,000 tax-free payment made by DoD to your survivors within days of death",
              "Unlike SGLI (which can take weeks), this is designed as immediate cash injection for your family",
              "Covers travel for funeral, housing costs, and urgent expenses before other benefits kick in",
              "By law, automatically directed to surviving spouse or children unless you designate Additional Beneficiaries",
            ],
          },
        ],
      },
      {
        title: "Managing Death Gratuity Beneficiaries",
        steps: [
          {
            step: "How to Update",
            details: [
              "Check the main RED page to see who is currently listed",
              "You generally cannot edit a spouse's info here - that must be done via DEERS/IPAC",
              "Click 'Add Additional Death Gratuity Record' to add beneficiaries",
              "Provide full legal name, relationship, and specific percentage (e.g., 50% Mom, 50% Dad)",
              "Click 'Edit' if an additional beneficiary has moved or changed phone number",
              "Click 'Remove' to delete - turns red to show marked for deletion",
              "Click 'Cancel Removal' if you made a mistake",
            ],
          },
        ],
      },
      {
        title: "The 100% Rule and By-Law Distribution",
        steps: [
          {
            step: "Understanding the Rule",
            details: [
              "Total percentages among additional beneficiaries must equal exactly 100%",
              "If designations don't total 100%, system reverts remainder to 'By-Law' status",
              "'By-Law' means government decides based on standard line of succession - not your choice",
              "You can list up to 10 additional beneficiaries",
            ],
          },
          {
            step: "Spouse Notification Requirement",
            details: [
              "If you're married and designate anyone other than spouse, system triggers official notification to your command",
              "Your CO will then be required to inform your spouse of your decision",
            ],
          },
        ],
      },
      {
        title: "Address and Phone Formatting",
        steps: [
          {
            step: "Address Entry",
            details: [
              "Use 'Reformat This Address' to switch between U.S. and Foreign layouts",
              "Do not use periods or commas - type '123 Main St Apt 4' not '123 Main St., Apt. #4'",
              "U.S.: Street, city, 2-letter state initials, Zip Code",
              "Foreign: Type address as it appears locally, include Country Code and City Code for phone",
            ],
          },
          {
            step: "Phone Entry",
            details: [
              "Phone must be 24-hour contact - Area Code-Prefix-Suffix format for U.S.",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls",
        steps: [
          {
            step: "SGLI Confusion",
            details: [
              "Don't confuse with SGLI - SGLI is up to $500,000 (you pay for it), Death Gratuity is flat $100,000 (government provides)",
            ],
          },
          {
            step: "Percentage Errors",
            details: [
              "Updates appear in bold for 24-48 hours while MCTFS processes",
              "If beneficiaries add up to 99%, the remaining 1% triggers By-Law distribution - complicates entire payout",
            ],
          },
          {
            step: "Minor Children",
            details: [
              "For minor children, money may be held in trust or require legal guardian - delays 'immediate' nature",
            ],
          },
          {
            step: "Outdated Information",
            details: [
              "Outdated phone numbers mean money stays in government account instead of family's hands",
              "MCTFS rejects entries with dashes in phone or periods in address",
            ],
          },
        ],
      },
      {
        title: "After Updating Death Gratuity",
        steps: [
          {
            step: "Verification Steps",
            details: [
              "Double-check that percentages equal exactly 100%",
              "Review PADD section - person receiving $100,000 is often best person to handle funeral arrangements",
              "Death Gratuity provides cash for funeral, so coordinate PADD and beneficiary designations",
              "Verify on BIR in two days that Death Gratuity section reflects your designations",
            ],
          },
        ],
      },
    ],
  },
  "mol-red-padd": {
    title: "RED Person Authorized to Direct Disposition (PADD)",
    description: "Designate the person authorized to make decisions about the disposition of your remains. This is one of the most personal decisions in your RED.",
    capabilities: ["Designate PADD", "Set priority order", "Provide contact information", "Add special instructions", "Update designations"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why PADD Is Your Most Important Legal Designation",
        steps: [
          {
            step: "Legal Authority",
            details: [
              "The PADD is the ONLY person legally authorized by DoD to make decisions regarding your remains",
              "Without a designated PADD, funeral arrangements can be delayed by weeks if family members disagree",
              "Your PADD decides: level of military honors, type of headstone, final resting place (private vs Arlington)",
              "Marine Corps provides PADD with specific allowances and a CACO to navigate funeral logistics",
            ],
          },
        ],
      },
      {
        title: "The Default Order of Precedence",
        steps: [
          {
            step: "If You Leave PADD Blank",
            details: [
              "1. Unremarried Surviving Spouse",
              "2. Children (in order of seniority)",
              "3. Parents (in order of seniority)",
              "4. Siblings (in order of seniority)",
              "5. Grandparents / Other Relatives",
              "By designating a PADD, you choose exactly who takes charge regardless of their position in this list",
            ],
          },
        ],
      },
      {
        title: "Designating Your PADD",
        steps: [
          {
            step: "How to Update",
            details: [
              "Locate the PADD section on your RED",
              "Click the 'Edit' link to open the Update RED PADD page",
              "Most Marines choose their Primary Next of Kin (Spouse or Parent), but you can designate any adult",
              "The person must be legally competent and reachable",
              "PADD must be at least 18 years old - enter their DOB in DD MMM YYYY format (e.g., 04 JUL 1990)",
              "Ensure name, address, and 24-hour phone number are 100% accurate",
              "Click 'Submit Changes' and then 'Apply Changes'",
            ],
          },
        ],
      },
      {
        title: "Address Format Requirements",
        steps: [
          {
            step: "U.S. Address",
            details: [
              "Use 'Reformat This Address' to switch between U.S., APO/FPO, and Foreign layouts",
              "Use 2-letter state initials and Zip+4 code (9 digits)",
              "If you don't know Zip+4, look it up on USPS website - system often requires full 9 digits",
              "No punctuation - type '123 Main St Apt 4' not '123 Main St., Apt. #4'",
            ],
          },
          {
            step: "APO/FPO Address",
            details: [
              "Enter PSC/Box or Unit/UIC, select correct region (AA, AE, or AP)",
            ],
          },
          {
            step: "Foreign Address",
            details: [
              "Provide full address as formatted in that country",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls",
        steps: [
          {
            step: "Single PADD Only",
            details: [
              "You can only name ONE PADD - you cannot name 'My Mom and Dad'",
              "If you don't choose, law follows strict order of precedence which may not match your family dynamic",
            ],
          },
          {
            step: "Address Matching",
            details: [
              "If PADD is same as Primary Next of Kin, ensure addresses match exactly in both sections",
            ],
          },
          {
            step: "DOB Format",
            details: [
              "DOB format matters - type '02 JAN 1980' not '01/02/1980' or system may reject",
            ],
          },
          {
            step: "System Behavior",
            details: [
              "After 'Apply Changes', system returns to MOL Home Page - this is normal",
              "PADD appears in bold until certified (24-48 hours) - not legally valid until bold disappears",
              "Click 'Details' link to verify exactly what was submitted",
            ],
          },
        ],
      },
      {
        title: "After Designating PADD",
        steps: [
          {
            step: "Have 'The Talk'",
            details: [
              "Ensure the person KNOWS they are PADD and discuss your burial vs cremation wishes",
              "Discuss your preferred location for final honors",
            ],
          },
          {
            step: "Financial Coordination",
            details: [
              "Coordinate finances - PADD handles funeral costs (Marine Corps reimburses later)",
              "Ensure PADD is also listed in Death Gratuity or Pay Arrears for immediate funds",
            ],
          },
          {
            step: "Verification",
            details: [
              "Confirm PADD is comfortable with responsibility and has valid ID to access military installations",
              "Verify on BTR in two business days that PADD section is no longer 'Pending'",
              "Final RED Review - once PADD is set, review entire RED for any other bold (pending) text",
            ],
          },
        ],
      },
    ],
  },
  "mol-red-pay-arrears": {
    title: "RED Pay Arrears (Unpaid Pay/Allowances)",
    description: "Designate who receives any unpaid pay and allowances in the event of your death. This includes your final paycheck, unused leave, and outstanding allowances.",
    capabilities: ["Designate beneficiary", "Set percentage splits", "View current designation", "Understand what's included", "Update elections"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "What Pay Arrears Includes",
        steps: [
          {
            step: "Components of Pay Arrears",
            details: [
              "Unpaid Salary: Any base pay earned but not yet deposited",
              "Unused Leave: Payment for accrued leave days (up to 60 days)",
              "Allowances: Unpaid BAH, BAS, or specialized pays (Jump Pay, Sea Pay, etc.)",
              "Travel Reimbursements: Any pending travel claims from PCS or TAD",
              "This is NOT your life insurance (SGLI) - that is handled separately via milConnect",
            ],
          },
        ],
      },
      {
        title: "The 100% Rule",
        steps: [
          {
            step: "Understanding the Requirement",
            details: [
              "The total of all beneficiaries must equal exactly 100%",
              "If you have one person at 50% and no one else listed, the remaining 50% is distributed by law, not your preference",
              "You cannot save a new beneficiary if your current list already totals 100%",
              "You must first edit an existing person (e.g., change 100% to 50%) to free up percentage points",
            ],
          },
        ],
      },
      {
        title: "Adding or Editing a Beneficiary",
        steps: [
          {
            step: "How to Update",
            details: [
              "Locate the 'Beneficiary(ies) Unpaid Pay/Allowances' section on your RED",
              "Click 'Add New Pay Arrears Record'",
              "Enter the beneficiary's full legal name, relationship, address, and percentage",
              "Click 'Submit' and then 'Apply Changes'",
            ],
          },
        ],
      },
      {
        title: "Address Formatting",
        steps: [
          {
            step: "No Punctuation Rule",
            details: [
              "Type '123 Main St Apt 4' instead of '123 Main St., Apt. #4'",
              "Use two-letter state initials (CA, NC)",
              "If using a PO Box, you must also provide physical directions on the Next of Kin Directions page",
              "For foreign addresses, click 'Reformat This Address' and type without punctuation",
            ],
          },
        ],
      },
      {
        title: "Removing or Canceling",
        steps: [
          {
            step: "How Removal Works",
            details: [
              "Click 'Remove' next to a beneficiary - the name turns red with strikethrough",
              "Click 'Cancel Removal' before the transaction processes to restore the record",
              "Click 'Remove This Address' to clear an address while keeping the beneficiary valid",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls",
        steps: [
          {
            step: "Address Changes",
            details: [
              "If your beneficiary moves and you don't update, the check is mailed to the old address - significant delays for your family",
            ],
          },
          {
            step: "System Confusion",
            details: [
              "Don't confuse Pay Arrears with Death Gratuity ($100,000) or SGLI (Life Insurance) - these are three separate systems",
              "Bold text means pending (24-48 hours), red text means it's about to be deleted",
              "If your Pay Arrears beneficiary is the same as your PADD, ensure addresses match exactly in both sections",
            ],
          },
        ],
      },
      {
        title: "After Updating Pay Arrears",
        steps: [
          {
            step: "Verification Steps",
            details: [
              "Verify your percentages add up to exactly 100% on the main RED page",
              "Check Death Gratuity designation for the larger $100,000 sum",
              "Audit annually - check this page every time you have a life event (marriage, birth, divorce)",
              "Verify on your Basic Individual Record (BIR) in two days that changes are reflected",
            ],
          },
        ],
      },
    ],
  },
  "mol-red-do-not-notify": {
    title: "RED Do Not Notify",
    description: "Specify persons who should NOT be notified in case of emergency or death. Use this to protect family members who shouldn't receive traumatic news.",
    capabilities: ["Add do not notify entries", "Provide reasoning", "Protect vulnerable family members", "Update list as needed"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Feature Exists",
        steps: [
          {
            step: "Protecting Vulnerable Family",
            details: [
              "Protects vulnerable family members from the sudden shock of casualty notification",
              "If a parent has severe heart condition, advanced dementia, or is hospitalized, a sudden CACO visit could cause a medical crisis",
              "Allows you to tell the Marine Corps: 'Do not go to this person directly - go to this other person first so they can break the news gently'",
              "This does not mean the person will never find out - it ensures they are told by a loved one rather than a stranger in uniform",
            ],
          },
        ],
      },
      {
        title: "Adding a Do Not Notify Record",
        steps: [
          {
            step: "How to Add",
            details: [
              "Click 'Add New Do Not Notify Record'",
              "Provide the name of the person who should NOT be notified directly",
              "Provide the reason (e.g., 'Heart condition', 'Advanced age/Dementia')",
              "Provide the name and contact info of the person who SHOULD be contacted to handle the notification",
            ],
          },
        ],
      },
      {
        title: "Managing Records",
        steps: [
          {
            step: "Editing and Removing",
            details: [
              "Click 'Details' to see the full context of a record",
              "Click 'Edit' to update a phone number for the intermediary contact",
              "Click 'Remove' if a family member's health improves - text turns red with strikethrough",
              "Click 'Cancel Removal' if you accidentally clicked remove (within 24-48 hours)",
            ],
          },
        ],
      },
      {
        title: "Address Formatting",
        steps: [
          {
            step: "Entry Rules",
            details: [
              "Click 'Reformat This Address' to toggle between U.S. and Foreign address structures",
              "Do not use periods, commas, or dashes - type '123 Main St Apt 4' not '123 Main St., Apt. #4'",
              "Enter Street, City, State (initials only), and Zip Code for U.S. addresses",
            ],
          },
        ],
      },
      {
        title: "Who Should Be on This List",
        steps: [
          {
            step: "Appropriate Candidates",
            details: [
              "Medical Frailty: Grandparent or parent with history of heart failure or stroke",
              "Mental Health: Family member currently in psychiatric facility or severe mental health crisis",
              "Dementia/Alzheimer's: Relative who would not understand and might become dangerously agitated",
              "This is NOT primarily for people you are estranged from - it's for medical safety",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls",
        steps: [
          {
            step: "Incomplete Setup",
            details: [
              "Simply putting someone on this list is only half the job - you must identify who SHOULD break the news in your NOK or PADD section",
              "Even though you're requesting 'No Notification,' the Marine Corps still needs their address for complete family records",
              "Clicking 'Remove This Address' only deletes the location, not the instruction - use 'Remove' to clear the whole instruction",
              "Changes appear in bold for 24-48 hours while pending",
            ],
          },
        ],
      },
      {
        title: "After Adding Do Not Notify",
        steps: [
          {
            step: "Next Steps",
            details: [
              "Inform the intermediary that they are listed on your RED and what their role would be",
              "Check the 'Directions' section if the notify-instead person lives in a rural or hard-to-find area",
              "Audit annually - if a parent recovers, remove them so they can receive direct notification with honor",
            ],
          },
        ],
      },
    ],
  },
  "mol-red-mia": {
    title: "RED MIA (Missing in Action) Notification",
    description: "Designate who should be notified if you are declared Missing in Action. MIA notification has unique considerations separate from casualty notification.",
    capabilities: ["Designate MIA notification contacts", "Set notification preferences", "Provide special instructions", "Update designations"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why MIA Designation Is Different",
        steps: [
          {
            step: "Unique Nature of MIA Status",
            details: [
              "Missing in Action status involves long-term uncertainty, legal shifts in pay status, and media interest",
              "A dedicated CACO is assigned who specializes in long-term cases as official liaison between family and DoD",
              "This designated person is authorized to receive sensitive updates regarding search and recovery efforts",
              "Your pay continues to accrue during MIA status - this person handles administrative issues",
            ],
          },
        ],
      },
      {
        title: "Managing MIA Records",
        steps: [
          {
            step: "How to Update",
            details: [
              "Click 'Add New MIA Notify Record'",
              "Provide full legal name, relationship, 24-hour phone number, and physical directions to residence",
              "Click 'Edit' if your designated person moves or changes their number",
              "Click 'Remove' to designate a different person",
              "Changes appear in bold for 24-48 hours while pending",
            ],
          },
        ],
      },
      {
        title: "Required Information",
        steps: [
          {
            step: "Contact Details",
            details: [
              "Name: Full legal name (First, Middle Initial, Last)",
              "Directions: 5 lines of 35 characters each for physical location",
              "If PO Box/Rural: Describe physical house (e.g., '3rd house past grain silo, green mailbox')",
              "If Overseas: Include international phone number in direction boxes as backup",
            ],
          },
          {
            step: "Phone Numbers",
            details: [
              "Provide TWO different numbers if possible (Cell + Work, or Cell + Home)",
              "Include area code for all U.S. numbers",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls",
        steps: [
          {
            step: "Incomplete Information",
            details: [
              "Don't leave this blank assuming NOK section covers it - systems pull from this specific field for MIA cases",
              "Don't type 'Same as Next of Kin' in directions - automated systems may not read that instruction",
            ],
          },
          {
            step: "Format Errors",
            details: [
              "Avoid periods and commas - use 'Apt 4' not 'Apt. #4'",
              "Don't leave second phone box blank if there's any other way to reach family",
            ],
          },
          {
            step: "Contact Selection",
            details: [
              "Ensure the person you list can handle potential media scrutiny - MIA cases attract public attention",
            ],
          },
        ],
      },
      {
        title: "After Updating MIA",
        steps: [
          {
            step: "Verification Steps",
            details: [
              "Inform the contact that they are your MIA Notify person and would receive official DoD updates",
              "Coordinate with your PADD - often the same person for both roles",
              "Review Pay Arrears section since pay continues during MIA status",
              "Verify on BTR in two business days that MIA section is populated correctly",
            ],
          },
        ],
      },
    ],
  },
  "mol-reserve-drill": {
    title: "Reserve Drill Summary",
    description: "Your official record of attendance for Inactive Duty Training (IDT). If you are an SMCR or IMA Marine, this page is where you verify that you are being credited—and paid—for your time. For a Reservist, your drill points are your 'currency.'",
    capabilities: ["View drill attendance", "Track missed drills", "View rescheduled drills", "Monitor participation status", "Verify drill pay", "Check retirement points"],
    userTypes: ["Reserve Marines", "Individual Reserve Component Members", "IMA Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Pay",
            details: [
              "Every drill period (4 hours) equals 1/30th of your monthly base pay",
              "If a drill is missed or not recorded, your paycheck will be short",
            ],
          },
          {
            step: "Retirement Points",
            details: [
              "Each drill counts as one point toward retirement",
              "You need 50 points in an anniversary year for a 'satisfactory year'",
            ],
          },
          {
            step: "Career Readiness",
            details: [
              "If you have too many 'Unexcused Absences' (UA), you can be processed for administrative separation",
              "This report allows you to catch administrative errors before they affect your career",
            ],
          },
        ],
      },
      {
        title: "How to Navigate the Summary",
        steps: [
          {
            step: "Step 1: Access the Report",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Reserve Drill Summary",
            ],
          },
          {
            step: "Step 2: Review the Drill Status",
            details: [
              "Satisfactory (SAT): You attended and were mustered",
              "Rescheduled (RS): You moved a drill to a different date with prior approval",
              "Excused Absence (EA): You were cleared to miss the drill but won't be paid/receive points",
              "Unexcused Absence (UA): You missed drill without approval - FIX THIS IMMEDIATELY",
            ],
          },
          {
            step: "Step 3: Identify Drill Types",
            details: [
              "Regular (Reg): Your standard 48 drills per year",
              "ATP (Additional Training Period): Extra drills for specific training or prep",
              "RMP (Readiness Management Period): Drills used for medical, admin, or unit prep",
            ],
          },
          {
            step: "Step 4: Print/Save",
            details: [
              "Click 'Printer Friendly View'",
              "Click 'Print' (Save as PDF) - vital document if there is a pay discrepancy",
              "Click 'Close' to return to the main page",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "The Muster Delay",
            details: [
              "It often takes 3-5 days after a drill weekend for the S-1 to finish the 'Muster' process",
              "Don't panic if your Saturday drill isn't showing as 'SAT' on Sunday evening",
            ],
          },
          {
            step: "Double Drills",
            details: [
              "One calendar day can have a maximum of two drill periods",
              "If you worked 12 hours but only see two drills, that is normal",
            ],
          },
          {
            step: "Fiscal Year vs. Anniversary Year",
            details: [
              "Your 48 paid drills are tied to the Fiscal Year (Oct-Sept)",
              "But your retirement points are tied to your Anniversary Year",
              "Make sure you are checking the right window",
            ],
          },
          {
            step: "Ghost Drills",
            details: [
              "If you see 'Scheduled' drills from months ago that were never updated to 'SAT' or 'EA', notify your Platoon Sergeant",
              "These 'hanging' drills can prevent you from getting paid for future drills",
            ],
          },
        ],
      },
      {
        title: "What to Do After Review",
        steps: [
          {
            step: "Fixing a UA",
            details: [
              "If you were present but are marked 'UA', provide your Muster Sheet (the paper you signed at drill) to your S-1 or I&I Staff",
            ],
          },
          {
            step: "Verify Pay",
            details: [
              "Once a drill shows as 'SAT', check your myPay account about a week later",
              "You should see a 'Net Pay' entry for that specific drill period",
            ],
          },
          {
            step: "Update Your CRCR",
            details: [
              "Every 'SAT' drill on this summary should eventually migrate to your Career Retirement Credit Report (CRCR)",
              "Check your CRCR once a month to ensure the totals match",
            ],
          },
        ],
      },
    ],
  },
  "mol-ros": {
    title: "Record of Service (ROS)",
    description: "The primary report for enlisted Marines (Sergeant and below) to track their promotion metrics. It serves as the bridge between your past performance and your current standing in the Junior Enlisted Performance Evaluation System (JEPES). In the 2026 Marine Corps, your promotion is almost entirely data-driven, and the ROS is where you verify the 'Command Input' part of your score.",
    capabilities: ["View proficiency marks", "View conduct marks", "View composite scores", "Track performance history", "View JEPES command input", "Check average in grade"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Promotion Score",
            details: [
              "The ROS is where you verify the 'Command Input' (the subjective part of your score)",
              "This includes Character, MOS/Mission, and Leadership marks",
              "If your command marks aren't being reported or are lower than expected, your JEPES score will stay stagnant",
            ],
          },
          {
            step: "Historical Record",
            details: [
              "Shows your historical Proficiency and Conduct marks",
              "If you were in the Corps before 2021, old Pro/Con marks have been converted to the JEPES scale",
              "Your total career 'average in grade' is calculated here",
            ],
          },
        ],
      },
      {
        title: "How to Navigate Your ROS",
        steps: [
          {
            step: "Step 1: Access the Report",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Record of Service",
            ],
          },
          {
            step: "Step 2: Review Command Marks (JEPES)",
            details: [
              "Look for the three pillars: Individual Character, MOS/Mission Accomplishment, and Leadership",
              "These are scored on a scale of 0.0 to 5.0",
              "2.0-3.0 means you 'meet expectations'",
              "3.0-4.0 means you are 'above average'",
              "4.0-5.0 is reserved for exceptional 'Water Walkers'",
            ],
          },
          {
            step: "Step 3: Check Composite/JEPES Score",
            details: [
              "Verify your total points",
              "This report shows how your marks contribute to the 250 points available in the 'Command Input' category of JEPES",
            ],
          },
          {
            step: "Step 4: Historical Pro/Con",
            details: [
              "If you were in the Corps before 2021, you will see your old Proficiency and Conduct marks",
              "These have been converted into the JEPES scale",
            ],
          },
          {
            step: "Step 5: Print/Save",
            details: [
              "Click 'Printer-Friendly View'",
              "Click 'Print' (Save as PDF) - keep this copy for remedial promotion requests",
              "Click 'Close' to return to the main ROS page",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "The N/A Trap",
            details: [
              "If your ROS shows 'N/A' for recent marks, your command hasn't run an 'occasion' (like a Semi-Annual or Transfer) for you",
              "Without these marks, your JEPES score is incomplete",
            ],
          },
          {
            step: "Comparing to the Old System",
            details: [
              "Don't confuse a 4.5 in the old system with a 4.5 now",
              "A 4.5 in JEPES is extremely rare and requires high-level approval",
              "It was common in the old Pro/Con system",
            ],
          },
          {
            step: "Cutoff Dates",
            details: [
              "The Marine Corps pulls data for promotions around the 20th of each month",
              "If your ROS updates on the 25th, it won't affect your rank until the following month",
            ],
          },
          {
            step: "Missing Averages",
            details: [
              "Ensure your 'Average in Grade' is calculated",
              "If the math looks wrong, it usually means a historical entry is missing a 'Date To' or 'Date From'",
            ],
          },
        ],
      },
      {
        title: "What to Do After Review",
        steps: [
          {
            step: "Verify on JEPES Dashboard",
            details: [
              "Once you see new marks on your ROS, head over to the JEPES Marine Dashboard in MOL",
              "You should see your 'Command Input' score update within 24 hours",
            ],
          },
          {
            step: "Address Low Marks",
            details: [
              "If your marks are below a 2.0, your command is required to provide you with counseling and documentation",
              "Use this report as a talking point with your NCOs to find out how to improve",
            ],
          },
          {
            step: "Monitor Cutting Scores",
            details: [
              "Compare the score on your ROS to the monthly Cutting Scores posted on the Manpower & Reserve Affairs website",
              "If you are above the score and PME complete, you're in the window for promotion",
            ],
          },
        ],
      },
    ],
  },
  "mol-cultural-info": {
    title: "Operational Cultural Information Report",
    description: "This page tracks your specific 'human intelligence' assets: the languages you speak and your experience in foreign countries. The Marine Corps is an expeditionary force, and when a unit is preparing for deployment to a specific region, the command needs to know who already understands the local language or culture. If you speak Arabic, Tagalog, or Mandarin—even from growing up in a bilingual home—you are a high-value asset.",
    capabilities: ["View language skills", "Self-profess language abilities", "Track foreign travel history", "Verify DLPT scores", "Check FLPB eligibility", "Update cultural experience"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Mission Asset",
            details: [
              "When a unit is preparing for a deployment to a specific region, command needs to know who understands the local language or culture",
              "Your language skills and cultural experience make you a candidate for unique missions or billets",
              "This includes Foreign Area Officer (FAO) and Civil Affairs Marine opportunities",
            ],
          },
          {
            step: "Extra Pay (FLPB)",
            details: [
              "Keeping this report updated ensures you are eligible for Foreign Language Proficiency Bonus (FLPB)",
              "FLPB provides extra pay for maintaining language skills in strategic languages",
            ],
          },
        ],
      },
      {
        title: "How to Manage Your Cultural Data",
        steps: [
          {
            step: "Step 1: Access the Report",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Operational Cultural Information Report",
            ],
          },
          {
            step: "Step 2: Verify Formal Skills",
            details: [
              "Look at the 'Survival Level Language Training' section",
              "This pulls from MarineNet or formal schoolhouses (like the Defense Language Institute)",
            ],
          },
          {
            step: "Step 3: Self-Profess Your Skills",
            details: [
              "If you are fluent in a language but haven't taken a test, ensure it's listed under 'Self-Professed Language Skills'",
              "Go into the 'Self-Service' or 'Edit' portion of your profile to add a new language",
            ],
          },
          {
            step: "Step 4: Audit Foreign Travel",
            details: [
              "Look at the list of foreign travel periods",
              "This should include both official deployments and personal leave taken out of the country",
            ],
          },
          {
            step: "Step 5: Print/Save",
            details: [
              "Click 'Printer Friendly View'",
              "Click 'Print' (Save as PDF)",
              "Click 'Close' to return to the main portal",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "The Self-Professed Cap",
            details: [
              "Just listing a language as 'Self-Professed' doesn't automatically trigger extra pay",
              "You must take the DLPT (Defense Language Proficiency Test) and score at least 1+/1+ or 2/2 (depending on the language) to get FLPB",
            ],
          },
          {
            step: "Missing Leave Travel",
            details: [
              "Many Marines forget to report personal travel",
              "If you took leave to visit family in Mexico or Japan, that counts as cultural experience and should be documented",
            ],
          },
          {
            step: "Perishable Skills",
            details: [
              "If you haven't spoken a language in five years, don't list yourself as 'Fluent'",
              "Be honest about your actual proficiency level (Elementary, Intermediate, or Professional)",
            ],
          },
          {
            step: "Browser Blocks",
            details: [
              "This report often opens in a pop-up window",
              "If nothing happens when you click 'Printer Friendly,' check your browser's address bar for a 'Pop-up Blocked' icon",
            ],
          },
        ],
      },
      {
        title: "What to Do After Review",
        steps: [
          {
            step: "Schedule a DLPT",
            details: [
              "If you see a language on your report that you are good at, contact your Unit Training NCO or Education Center to schedule a proctored DLPT",
            ],
          },
          {
            step: "Verify Pay",
            details: [
              "Once you pass a DLPT, check your LES for the 'FLPB' entitlement",
              "It may take 1-2 pay cycles to appear after your score posts",
            ],
          },
          {
            step: "Update Your S-1",
            details: [
              "If your travel history is missing a major deployment, take your orders to S-1 to ensure the dates in MCTFS match your actual time in country",
            ],
          },
        ],
      },
    ],
  },
  "mol-rank-mos": {
    title: "Rank/MOS Report",
    description: "Your 'scouting report' that allows you to see exactly where you stand compared to every other Marine in your rank and MOS across the entire Marine Corps. Promotions are competitive—you aren't just trying to be 'good,' you are competing for a limited number of promotion slots. This report is vital for career planning.",
    capabilities: ["View peer comparison", "Check TIG standings", "Analyze MOS strength", "Research lateral move options", "Sort by date of rank", "Filter by component"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "For Sergeants and Below",
            details: [
              "It helps you understand if your MOS is 'fast-moving' or 'stagnant' by looking at the Time in Grade (TIG) of your peers",
              "You can see how many Marines are ahead of or behind you in seniority",
            ],
          },
          {
            step: "For SNCOs and Officers",
            details: [
              "It allows you to see the lineal standing of your peers",
              "This is critical when preparing for a promotion board",
            ],
          },
        ],
      },
      {
        title: "How to Research Your Peers",
        steps: [
          {
            step: "Step 1: Access the Report",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Rank/MOS Report",
            ],
          },
          {
            step: "Step 2: Adjust the Criteria",
            details: [
              "By default, MOL shows Marines who match your exact Rank, MOS, and Component (Active/Reserve)",
              "To look at a different field (for example, if you are considering a Lateral Move), select a new Rank, MOS, or Component from the dropdown menus",
              "Click the 'Go' button to refresh the list",
            ],
          },
          {
            step: "Step 3: Analyze the Data",
            details: [
              "Sort the List: Click any column heading (like 'Date of Rank') to sort. Click it again to reverse the order",
              "This helps you see who the 'senior' and 'junior' Marines are in your specific peer group",
              "Use 'Next Page' or 'Previous Page' buttons, or type a page number and hit 'Go' to navigate large lists",
            ],
          },
          {
            step: "Step 4: Print/Save",
            details: [
              "Click 'Printer-Friendly View'",
              "Click 'Print' (Save as PDF)",
              "Click 'Close' to return to the main report page",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "Comparing Apples to Oranges",
            details: [
              "Ensure you have the correct Component selected",
              "Active duty promotion timelines are very different from the Reserves",
            ],
          },
          {
            step: "Outdated Data",
            details: [
              "This report is a snapshot",
              "If a peer was promoted yesterday, it might take 24-48 hours to reflect their new rank on this list",
            ],
          },
          {
            step: "Privacy and PII",
            details: [
              "While you can see names and ranks, never share or post this report publicly",
              "It is for your official career planning use only",
            ],
          },
          {
            step: "The Lateral Move Trap",
            details: [
              "Just because an MOS has very few people in it doesn't mean it's easy to promote into",
              "It might be a 'closed' MOS",
              "Always talk to a Career Planner before making decisions based on this report",
            ],
          },
        ],
      },
      {
        title: "What to Do After Review",
        steps: [
          {
            step: "Identify Your Standing",
            details: [
              "See where you fall in the 'Lineal Rank'",
              "If you are at the bottom of the list for TIG, you know you have time to focus on PME and extra qualifications",
            ],
          },
          {
            step: "Consult a Career Planner",
            details: [
              "If you notice that your MOS is extremely crowded (over-strength) or has very slow promotion timelines, take a copy of this report to your Career Planner",
              "Discuss Lateral Move (LatMove) opportunities",
            ],
          },
          {
            step: "Board Preparation",
            details: [
              "If you are in-zone for promotion, use this list to ensure your record (PFT, CFT, Rifle) is statistically higher than the 'average' peer on this list",
            ],
          },
        ],
      },
    ],
  },
  "mol-slate": {
    title: "Slate Report",
    description: "Your window into the future of your unit and your MOS. It allows you to see the 'movement' of your peers and helps you predict when you—or the person in the billet you want—might be rotating to a new duty station. Knowing your Estimated Rotation Date (ERD) is critical for life planning: weddings, buying a house, or timing your next school.",
    capabilities: ["View ERD dates", "Research MOS rotations", "Plan career moves", "Check peer rotations", "Monitor billet openings", "Update duty preferences"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Life Planning",
            details: [
              "Whether you are planning a wedding, looking to buy a house, or trying to time your next school, the Slate Report tells you when the Marine Corps expects you to move",
              "Your ERD is the starting point for all major life decisions",
            ],
          },
          {
            step: "Career Opportunities",
            details: [
              "It allows you to see the 'gaps' in your MOS",
              "If you see that 50% of the Sergeants in your MOS are rotating out in June, you know there's a high chance for promotion or a prime billet opening up",
            ],
          },
        ],
      },
      {
        title: "How to View Rotation Dates",
        steps: [
          {
            step: "Step 1: Access the Report",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Slate Report",
            ],
          },
          {
            step: "Step 2: Verify the Defaults",
            details: [
              "By default, the page displays your current Rank and MOS",
            ],
          },
          {
            step: "Step 3: Change the Criteria",
            details: [
              "To research a different MOS (perhaps for a LatMove) or a different Rank, type the four-digit MOS in the MOS box",
              "Select a different Rank from the dropdown menu",
              "Click the 'Go' button to refresh the list",
            ],
          },
          {
            step: "Step 4: Analyze the Data",
            details: [
              "Look for the ERD (Estimated Rotation Date) column - this is the 'best guess' date for when a Marine is scheduled to leave their current station",
              "Sort the List: Click any column heading (like 'Name' or 'ERD') to sort. Click it again to reverse the order",
              "This helps you see who is leaving the earliest",
            ],
          },
          {
            step: "Step 5: Print/Save",
            details: [
              "Click 'Printer-Friendly View'",
              "Click 'Print' (Save as PDF)",
              "Click 'Close' to return to the Slate Report page",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "The 'Estimated' Part",
            details: [
              "The 'E' in ERD stands for Estimated - it is not a guarantee",
              "Orders can be extended or cut short based on the 'Needs of the Marine Corps'",
            ],
          },
          {
            step: "Confusing ERD with EAS",
            details: [
              "Your ERD is when you move to a new unit",
              "Your EAS (End of Active Service) is when you leave the Marine Corps",
              "These are often different dates",
            ],
          },
          {
            step: "MOL vs. Web Orders",
            details: [
              "Just because a date changes in the Slate Report doesn't mean you have orders yet",
              "Official moves are only confirmed when you see Web Orders in the 'Orders' section of MOL",
            ],
          },
          {
            step: "Glossary Check",
            details: [
              "If you don't understand an abbreviation (like MCC or RUC), scroll to the Glossary at the bottom of the Slate Report page for definitions",
            ],
          },
        ],
      },
      {
        title: "What to Do After Review",
        steps: [
          {
            step: "Monitor the Monitor",
            details: [
              "If your ERD is within the next 6-9 months, start checking your Web Orders daily",
              "Talk to your Career Planner or Monitor about your preferences",
            ],
          },
          {
            step: "Update Your Preferences",
            details: [
              "Now that you know your rotation window, go to the Standard Letter section in MOL to update your 'Duty Station Preferences'",
              "This ensures the Monitor knows where you want to go",
            ],
          },
          {
            step: "Plan Your Move",
            details: [
              "Use the ERD as a baseline to start researching your next potential duty station's housing and school options",
            ],
          },
        ],
      },
    ],
  },
  "mol-w2": {
    title: "W2 Tax Statements",
    description: "The official record of your earnings and the taxes withheld by the government, which you need to file your taxes every year. Your W-2 is the 'source of truth' for the IRS. If you don't download it, you can't file your taxes, which can lead to late fees or missed refunds.",
    capabilities: ["View W-2 statements", "Download W-2 PDFs", "Manage delivery preferences", "Access prior year W-2s", "View W-2C corrections", "Set electronic delivery"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Tax Filing Requirement",
            details: [
              "Your W-2 is the source of truth for the IRS",
              "You cannot file your taxes without it",
              "Late filing can lead to penalties and missed refunds",
            ],
          },
          {
            step: "Delivery Method Security",
            details: [
              "Keeping your delivery method updated ensures your sensitive financial info isn't mailed to an old barracks room",
              "Electronic delivery is faster and more secure",
            ],
          },
        ],
      },
      {
        title: "How to Get Your W-2",
        steps: [
          {
            step: "Step 1: Access the Page",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Tax Statements (W-2)",
            ],
          },
          {
            step: "Step 2: Check Delivery Method",
            details: [
              "If you see 'Electronic Only', you are good to go",
              "If it says 'Hard Copy' or 'None', click the link to change it to 'Electronic Only'",
              "You must set electronic delivery BEFORE the year's W-2 will appear in the dropdown menu",
            ],
          },
          {
            step: "Step 3: Download the Form",
            details: [
              "Select the year you need from the 'Available W-2s' drop-down list",
              "Click 'Submit'",
              "The PDF will generate - save this file to a secure location (encrypted thumb drive or password-protected folder)",
            ],
          },
          {
            step: "Step 4: Verify Information",
            details: [
              "Look at the address on the W-2",
              "If it is wrong, go to the Personal Contact Information page in MOL and update it immediately",
              "This ensures next year's form is correct",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "The Restricted Message",
            details: [
              "If the screen says the option is restricted, it's because you haven't opted into electronic delivery yet",
              "Click the 'Hard Copy' or 'None' link to flip it to 'Electronic Only'",
            ],
          },
          {
            step: "Separated/Retired Status",
            details: [
              "If you have already left the Marine Corps, you only have ONE YEAR to grab your W-2 from MOL",
              "After that, you'll have to deal with DFAS directly, which is a much slower process",
            ],
          },
          {
            step: "The W-2C",
            details: [
              "If you see a 'W-2C' in the list, that means your original W-2 was corrected",
              "ALWAYS use the W-2C for your taxes as it contains the most accurate, updated info",
            ],
          },
          {
            step: "System Timeouts",
            details: [
              "If you get a 'Web service failed' message, don't panic",
              "The servers are usually slammed in late January/early February",
              "Close your browser and try again during off-peak hours (late at night or early morning)",
            ],
          },
        ],
      },
      {
        title: "What to Do After You Get It",
        steps: [
          {
            step: "File Your Taxes",
            details: [
              "Use the data from your W-2 to file via MilTax (available through Military OneSource) or another tax service",
            ],
          },
          {
            step: "Check myPay",
            details: [
              "If MOL is giving you errors, you can always go directly to myPay (https://mypay.dfas.mil) to find your tax statements",
              "They are usually posted there a few days before they hit MOL",
            ],
          },
          {
            step: "Audit Your Address",
            details: [
              "While you're in the tax mindset, double-check your State of Legal Residence on your LES",
              "If you moved and didn't update your state, you might be paying taxes to a state you no longer live in",
            ],
          },
        ],
      },
    ],
  },
  // ============================================
  // MOL SELF-CERTIFIED TRANSACTIONS
  // ============================================
  "mol-brs-opt-in": {
    title: "Blended Retirement Opt-In/Out",
    description: "The Blended Retirement System (BRS) Opt-In/Out transaction allows eligible service members to elect into the Blended Retirement System or decline enrollment. This is a one-time, irrevocable decision.",
    capabilities: ["Elect BRS enrollment", "View BRS election status", "Complete required training", "Understand retirement options"],
    userTypes: ["All Marines", "Eligible Service Members"],
    guide: [
      {
        title: "Eligibility Requirements",
        steps: [
          {
            step: "Who Can Opt-In",
            details: [
              "Members with a DIEMS (Date of Initial Entry to Military Service) before January 1, 2018",
              "Must have less than 12 years of service as of December 31, 2017",
              "Grandfathered members under the legacy (High-3) retirement system",
            ],
          },
          {
            step: "New Accessions",
            details: [
              "Members with DIEMS on or after January 1, 2018 are automatically enrolled in BRS",
              "No opt-in decision required for new accessions",
            ],
          },
        ],
      },
      {
        title: "Required Training",
        steps: [
          { step: "Complete the mandatory BRS Opt-In Course on MarineNet before making your election" },
          { step: "Training covers retirement benefits comparison, TSP matching, and continuation pay" },
          { step: "You cannot make an election until training is complete" },
        ],
      },
      {
        title: "Making Your Election",
        steps: [
          { step: "Log in to MOL at https://mol.tfs.usmc.mil/" },
          { step: "Navigate to Personal Info > BRS/TSP Information" },
          { step: "Click 'BRS Election' to access the election form" },
          { step: "Review the terms and conditions carefully" },
          { step: "Select 'Opt-In' to enroll in BRS or remain in legacy system" },
          { step: "Confirm your election - THIS DECISION IS IRREVOCABLE" },
        ],
      },
      {
        title: "Important Considerations",
        steps: [
          {
            step: "BRS Benefits",
            details: [
              "Government TSP matching up to 5% of base pay",
              "Continuation pay at 12 years of service",
              "Lump sum option at retirement",
              "Reduced pension multiplier (2.0% vs 2.5%)",
            ],
          },
          {
            step: "Legacy System Benefits",
            details: [
              "Higher pension multiplier (2.5% per year)",
              "No TSP matching contribution",
              "No continuation pay",
              "Full pension after 20 years",
            ],
          },
        ],
      },
    ],
  },
  "mol-acknowledgements": {
    title: "Acknowledgements",
    description: "The Acknowledgment Record is your digital paper trail. When you click 'Acknowledge,' you are legally stating that you have been informed of a specific requirement. Keeping this clear ensures your record stays 'Green' and prevents leadership from having to track you down for missing signatures.",
    capabilities: ["View pending acknowledgements", "Complete required acknowledgements", "View acknowledgement history", "Print acknowledgement records", "Maintain record integrity"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Legal Documentation",
            details: [
              "The Acknowledgment Record is your digital paper trail",
              "When you click 'Acknowledge,' you are legally stating you have been informed of a specific requirement",
              "Examples include new policies on Montgomery GI Bill benefits or changes in MOS status",
              "Keeping this clear ensures your record stays 'Green'",
              "Prevents your leadership from having to hunt you down for missing signatures",
            ],
          },
        ],
      },
      {
        title: "How to Clear Your Pending List",
        steps: [
          {
            step: "Step 1: Access the Record",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Information section",
              "Select Acknowledgment Record",
            ],
          },
          {
            step: "Step 2: Identify the Task",
            details: [
              "Look at the Pending Acknowledgments section",
              "If you see a link that says 'Acknowledge' - that is your To-Do list",
              "If you see '(Pending)' in parentheses - you've already done your part, it's waiting for MCTFS to finish processing",
            ],
          },
          {
            step: "Step 3: Read the Description",
            details: [
              "Before clicking, read the Description column",
              "This tells you exactly what you are signing for",
              "Make sure you understand the policy or requirement",
            ],
          },
          {
            step: "Step 4: The Digital Signature",
            details: [
              "Click the 'Acknowledge' link",
              "A pop-up or new page will appear with the full text of the statement",
              "Scroll to the bottom and confirm your acknowledgement",
            ],
          },
          {
            step: "Step 5: Verify History",
            details: [
              "Once processed, the item moves from 'Pending' to 'Historical Acknowledgments'",
              "This is your proof that you completed it",
              "You can reference this at any time in your career",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "The 'Printer-Friendly' Trap",
            details: [
              "Some Marines think they need to print and sign these - you don't",
              "The digital click IS your signature",
              "Only use 'Printer-Friendly View' if your S-1 specifically asks for a hard copy for a package",
            ],
          },
          {
            step: "Walking Away Too Early",
            details: [
              "If you click 'Acknowledge' but don't hit the final 'Confirm' or 'Submit,' the status won't change",
              "Always refresh the page to make sure the link is gone",
              "Verify the item moved to Historical Acknowledgments",
            ],
          },
          {
            step: "Ignoring the Dates",
            details: [
              "If an item stays in '(Pending)' for more than a week, it might have glitched in MCTFS",
              "If it doesn't move to 'Historical' after a few days, let your NCO know",
              "They can check your record in 3270/MCTFS to troubleshoot",
            ],
          },
        ],
      },
      {
        title: "What Happens After You Click",
        steps: [
          {
            step: "System Update",
            details: [
              "The change is sent to the Marine Corps Total Force System (MCTFS)",
              "Processing typically takes a few minutes to a few days",
            ],
          },
          {
            step: "MOL Homepage Notification",
            details: [
              "Once the system fully processes the entry, you'll see a notification on your main MOL dashboard",
              "This confirms the update was successful",
            ],
          },
          {
            step: "Record Integrity",
            details: [
              "The item is permanently stored in your Historical Acknowledgments",
              "You can look back at this at any time in your career",
              "Use this to prove you were briefed on a certain topic if ever questioned",
            ],
          },
        ],
      },
    ],
  },
  "mol-career-designation": {
    title: "Career Designation (Officer)",
    description: "The Career Designation transaction allows eligible officers to indicate their intent to remain on active duty as a career officer. This is a significant career milestone for commissioned officers.",
    capabilities: ["Submit career designation", "View designation status", "Understand career implications"],
    userTypes: ["Commissioned Officers", "Warrant Officers"],
    guide: [
      {
        title: "Career Designation Overview",
        steps: [
          {
            step: "What is Career Designation",
            details: [
              "Formal declaration of intent to serve as a career officer",
              "Typically occurs between 5-10 years of commissioned service",
              "Demonstrates commitment to long-term military service",
              "May affect assignment and promotion considerations",
            ],
          },
        ],
      },
      {
        title: "Eligibility",
        steps: [
          {
            step: "Requirements",
            details: [
              "Must be a commissioned or warrant officer",
              "Must meet time-in-service requirements",
              "Must be recommended by commanding officer",
              "Must meet performance standards",
            ],
          },
        ],
      },
      {
        title: "Submitting Career Designation",
        steps: [
          { step: "Log in to MOL at https://mol.tfs.usmc.mil/" },
          { step: "Navigate to Personal Info > Career Designation" },
          { step: "Review your eligibility status" },
          { step: "Complete the career designation form" },
          { step: "Submit for command review and approval" },
        ],
      },
      {
        title: "After Designation",
        steps: [
          { step: "Career designation is recorded in your official record" },
          { step: "May affect future assignment opportunities" },
          { step: "Demonstrates commitment for promotion boards" },
        ],
      },
    ],
  },
  "mol-career-retirement-cert": {
    title: "Career Retirement Certification",
    description: "The Career Retirement Certification allows eligible reserve Marines to certify their Career Retirement Credit Report (CRCR) for retirement point accounting purposes. This is your official statement that your retirement points are accurate—certifying with errors can cause major problems when you actually try to retire.",
    capabilities: ["View CRCR", "Certify retirement credits", "Print certification", "Track retirement eligibility"],
    userTypes: ["Reserve Marines", "Individual Reserve Component Members"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Your Retirement Depends on It",
            details: [
              "You need 20 'good years' (50+ points each) to qualify for reserve retirement",
              "Once you certify a year, you are attesting that the points are accurate",
              "Errors discovered later are much harder to fix after certification",
            ],
          },
          {
            step: "The 50-Point Rule",
            details: [
              "Each anniversary year must have at least 50 points to count as a 'good year'",
              "15 membership points are automatic just for being in the Selected Reserve",
              "The remaining 35+ points must come from drills, AT, schools, or correspondence courses",
            ],
          },
        ],
      },
      {
        title: "How to Audit Before Certifying",
        steps: [
          {
            step: "Step 1: Access the CRCR",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Career Retirement Credit Report",
            ],
          },
          {
            step: "Step 2: Review Each Anniversary Year",
            details: [
              "Your anniversary year runs from your AFABD (Active Federal Active Duty Begin Date), NOT the calendar year",
              "Check that each year shows at least 50 points",
              "Look for any years with 0 or very low points—these may indicate missing data",
            ],
          },
          {
            step: "Step 3: Cross-Reference with Drill Attendance",
            details: [
              "Compare your point totals to your actual drill attendance records",
              "If you attended AT (Annual Training) that year, verify the points are credited",
              "Check that any schools or correspondence courses show up",
            ],
          },
          {
            step: "Step 4: Verify Dates and Totals",
            details: [
              "Ensure the 'Current Anniversary Date' is correct (not zeros or expired)",
              "Confirm the 'Date Entered Armed Forces' (DEAF) is NOT later than your AFABD",
              "If 'Member Points' shows more than 15, there may be an error",
            ],
          },
        ],
      },
      {
        title: "When NOT to Certify",
        steps: [
          {
            step: "Do NOT certify your CRCR if",
            details: [
              "There are mistakes in the report",
              "Current Anniversary Date has expired or displays as zeroes",
              "Current Year CRCR information is missing or more than a year old",
              "Date Entered Armed Forces (DEAF) is later than AFABD",
              "Current Year Member Points score is greater than 15",
            ],
          },
          { step: "If errors exist, click 'Users Manual' link for correction procedures" },
        ],
      },
      {
        title: "Certifying Your CRCR",
        steps: [
          { step: "Review all retirement points for accuracy" },
          { step: "Verify anniversary year dates are correct" },
          { step: "Confirm total points per year are accurate" },
          { step: "Click 'Certify CRCR' link" },
          { step: "Confirm certification when prompted" },
        ],
      },
      {
        title: "Understanding Retirement Points",
        steps: [
          {
            step: "Point Categories",
            details: [
              "Active Duty Points - From active duty periods",
              "Inactive Duty Points - From drills and training",
              "Membership Points - 15 points per year for participation",
              "Minimum 50 points per year for a 'good year'",
              "20 good years required for reserve retirement",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "Blind Certification",
            details: [
              "NEVER certify your CRCR without thoroughly reviewing it first",
              "Once certified, you are stating that the data is accurate",
              "If errors are found after certification, the correction process is much more difficult",
            ],
          },
          {
            step: "Missing a 'Good Year'",
            details: [
              "If a year shows fewer than 50 points, that year does NOT count toward your 20-year requirement",
              "Before certifying, make sure any missing drills, AT, or schools are added",
              "It is much easier to fix a 'bad year' before certification than after",
            ],
          },
          {
            step: "Confusing Anniversary Year with Calendar Year",
            details: [
              "Your anniversary year runs from your AFABD, not January 1st",
              "Points earned in December might count toward a different anniversary year than you expect",
              "Always check the date ranges for each year before certifying",
            ],
          },
        ],
      },
    ],
  },
  "mol-contact-info": {
    title: "Contact Information",
    description: "Keeping your Personal Contact Information up to date is a mandatory part of being 'Green' in the Marine Corps. It is how your command finds you during a recall, how the system knows where to send your W-2, and how the Marine Corps accounts for you during a natural disaster or crisis.",
    capabilities: ["Update mailing address", "Update phone numbers", "Update email address", "Manage contact preferences", "Update physical address", "Set APO/FPO/DPO address"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Safety & Accountability",
            details: [
              "If a hurricane, earthquake, or major incident hits, the Marine Corps uses your Physical Address to see who was in the affected area",
              "If your address is old, the unit can't verify that you're safe",
            ],
          },
          {
            step: "Family Readiness",
            details: [
              "Your unit's Family Readiness Officer (FRO) uses this data to keep your family in the loop",
            ],
          },
          {
            step: "Pay & Mail",
            details: [
              "Your Mailing Address is where tax documents (W-2s) and other official correspondence are sent",
              "If this is outdated, you could miss critical deadlines or have your PII sent to an old address",
            ],
          },
        ],
      },
      {
        title: "How to Update (U.S. Address)",
        steps: [
          {
            step: "Step 1: Access the Page",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Personal Contact Information",
            ],
          },
          {
            step: "Step 2: Select U.S. Address Format",
            details: [
              "Click the 'U.S. Address' link if it isn't already the default",
            ],
          },
          {
            step: "Step 3: Update Mailing Address",
            details: [
              "Enter your street address",
              "Type your five-digit Zip Code and click 'Lookup Zip' to auto-fill the City and State",
            ],
          },
          {
            step: "Step 4: Update Physical Address",
            details: [
              "Enter the street address of where you ACTUALLY live (Barracks, apartment, house)",
              "Do NOT use a PO Box here",
            ],
          },
          {
            step: "Step 5: Phone & Email",
            details: [
              "Update your Home, Work, and Cell numbers",
              "Ensure your Personal Email is one you check regularly (not just .mil)",
            ],
          },
          {
            step: "Step 6: Submit",
            details: [
              "Click 'Submit Changes', then click 'Apply Changes' to confirm",
            ],
          },
        ],
      },
      {
        title: "How to Update (APO/FPO/DPO Address)",
        steps: [
          {
            step: "Step 1: Select Format",
            details: [
              "Click the 'APO/FPO/DPO address' link",
            ],
          },
          {
            step: "Step 2: Enter Mailing Details",
            details: [
              "In the PSC/Box or Unit/UIC box, enter your specific unit info",
            ],
          },
          {
            step: "Step 3: City/State",
            details: [
              "For City, select APO, FPO, or DPO",
              "For State, select AA (Americas), AE (Europe/Africa), or AP (Pacific)",
            ],
          },
          {
            step: "Step 4: Physical Address",
            details: [
              "Even while deployed, enter your physical location (e.g., Camp Hansen, MCAS Iwakuni)",
            ],
          },
          {
            step: "Step 5: Submit",
            details: [
              "Click 'Submit Changes' and then 'Apply Changes'",
            ],
          },
        ],
      },
      {
        title: "How to Update (Foreign Address)",
        steps: [
          {
            step: "Step 1: Select Format",
            details: [
              "Click the 'foreign address' link",
            ],
          },
          {
            step: "Step 2: Enter Details",
            details: [
              "Enter the Street, City, and Country",
            ],
          },
          {
            step: "Step 3: Phone Format",
            details: [
              "Click 'change format to a foreign phone number' to allow for international country codes",
              "Use countrycallingcodes.com if you aren't sure of the code",
            ],
          },
          {
            step: "Step 4: Submit",
            details: [
              "Click 'Submit Changes' and then 'Apply Changes'",
            ],
          },
        ],
      },
      {
        title: "Adding or Removing Info",
        steps: [
          {
            step: "To Add/Edit",
            details: [
              "Click the 'Add' or 'Edit' link next to an address, email, or phone number",
              "Enter the updated info - new info will appear in Bold type until MCTFS finishes processing",
            ],
          },
          {
            step: "To Remove Old Info",
            details: [
              "Click the 'Remove' link next to an old number or address",
              "The item will turn Red with a strike-through",
              "Click 'Apply Changes' to confirm (or 'Cancel Removal' if you change your mind)",
            ],
          },
          {
            step: "Check Pending Changes",
            details: [
              "If you see a 'Details' link at the top, click it to see what you submitted vs. what is currently in the master record",
              "This is a great way to catch a typo before it sticks",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "Physical vs. Mailing",
            details: [
              "Don't put your parent's house in the 'Physical Address' section if you live in the barracks",
              "Your Physical Address must be where you actually sleep so you can be accounted for during a disaster",
            ],
          },
          {
            step: "BOLD Means PENDING",
            details: [
              "If you see bold text, don't keep editing it over and over",
              "It just means the change hasn't hit the main database (MCTFS) yet - wait 24-48 hours",
            ],
          },
          {
            step: "The Email Requirement",
            details: [
              "Every Marine should have a valid personal email listed",
              "If you only use your .mil account, you won't be able to access your records if you are on leave or if the network goes down",
            ],
          },
          {
            step: "PO Box Error",
            details: [
              "Never put a PO Box in the Physical Address field",
              "The Marine Corps needs to know your actual location for emergency accountability",
            ],
          },
          {
            step: "Mailing vs. Home of Record",
            details: [
              "Updating your mailing address in MOL does NOT change your 'Home of Record' or 'State of Legal Residence' for taxes",
              "Those must be changed via an EPAR or at your S-1",
            ],
          },
          {
            step: "Forgetting RED",
            details: [
              "Marines often update this page but forget to update their RED (Record of Emergency Data)",
              "You must do BOTH to stay compliant",
            ],
          },
        ],
      },
      {
        title: "What Happens After You Update",
        steps: [
          {
            step: "MCTFS Processing",
            details: [
              "Your changes are sent to the Marine Corps Total Force System",
              "It takes about 1 to 2 business days for the bold or red strike-through text to normalize",
            ],
          },
          {
            step: "Unit Recall Roster",
            details: [
              "Your new phone number will automatically feed into the unit's digital recall roster",
            ],
          },
          {
            step: "Verify on BIR",
            details: [
              "After 48 hours, check your Basic Individual Record (BIR) to ensure the changes are reflected",
            ],
          },
        ],
      },
    ],
  },
  "mol-foreign-travel": {
    title: "Foreign Travel",
    description: "Your official log of time spent outside the United States. Whether you are going on a 96-hour liberty to Mexico or a 7-month deployment to Okinawa, this record must be accurate to ensure your security clearance and pay remain intact. Foreign travel is a 'reportable activity' under SEAD 3 for anyone with a security clearance.",
    capabilities: ["Add foreign travel entries", "View travel history", "Edit travel records", "Support security clearance", "Track security compliance", "Document CZTE eligibility"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Security Clearance",
            details: [
              "Gaps in your travel history can trigger a 'red flag' during your background reinvestigation",
              "If you have a Secret or TS/SCI clearance, investigators WILL cross-reference your MOL travel history with your passport and flight records",
              "Gaps or 'forgotten' trips can lead to your clearance being suspended",
            ],
          },
          {
            step: "Medical Readiness",
            details: [
              "If you travel to an area with endemic diseases (like malaria), having this on your record helps Medical provide the right care if you get sick later",
            ],
          },
          {
            step: "Anti-Terrorism (AT)",
            details: [
              "The Marine Corps needs to know where you are to provide theater-specific threat briefings",
              "Ensures you aren't traveling to restricted areas",
            ],
          },
          {
            step: "Pay & Benefits",
            details: [
              "This record cross-references with your PersTempo and Pay/Leave summaries",
              "Ensures you receive the correct combat zone tax exclusions or family separation allowances",
              "Serves as supporting evidence if you ever have to prove you were in a specific country for CZTE",
            ],
          },
        ],
      },
      {
        title: "How to Add a New Entry",
        steps: [
          {
            step: "Step 1: Access the Page",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Foreign Travel",
              "Click the 'Add Foreign Travel' link at the top",
            ],
          },
          {
            step: "Step 2: Select the Country",
            details: [
              "In the 'Country Visited' dropdown, select the destination",
              "Note: If you visited multiple countries on one trip (like a cruise), enter each one as a separate entry",
            ],
          },
          {
            step: "Step 3: Choose the Purpose",
            details: [
              "Select the most accurate reason from the list (e.g., Annual Leave, Official Business/Orders, Liberty)",
            ],
          },
          {
            step: "Step 4: Enter the Dates",
            details: [
              "Click the Calendar button to select the Start Date (the day you left the U.S.)",
              "Click the Calendar button to select the Stop Date (the day you returned to the U.S.)",
              "Ensure your Stop Date is not before your Start Date",
            ],
          },
          {
            step: "Step 5: Submit and Confirm",
            details: [
              "Click 'Submit Changes'",
              "A confirmation prompt will appear - click 'Apply Changes' to finalize",
              "If you made a mistake, click 'Cancel' to start over",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "The Bold Delay",
            details: [
              "Don't panic if your new entry stays bold for a few days",
              "It takes 24-48 hours for the system to finalize the entry",
            ],
          },
          {
            step: "Skipping the Brief",
            details: [
              "Simply adding travel to MOL does NOT count as 'reporting'",
              "You still must receive a Terrorist Threat Brief from your S-2 and potentially submit an APACS (Aircraft and Personnel Automated Clearance System) request BEFORE you travel",
            ],
          },
          {
            step: "The One Entry Mistake",
            details: [
              "If you went on an 'Island Hopping' tour, don't just list one country",
              "List every country you stepped foot in",
            ],
          },
          {
            step: "Cruise Ship Confusion",
            details: [
              "If you go on a cruise, you must list EVERY country where the ship docks, not just the departure port",
            ],
          },
          {
            step: "Ignoring Mexico/Canada",
            details: [
              "Many Marines think 'driving across the border' doesn't count - it does",
              "Any time you leave the U.S., it must be in this report",
            ],
          },
          {
            step: "MOL vs. APACS",
            details: [
              "Adding travel to MOL after the fact is for your record",
              "You are still required to submit an APACS or IATP (Individual Anti-Terrorism Plan) request through your S-2 BEFORE you leave",
            ],
          },
        ],
      },
      {
        title: "What to Do After Submitting",
        steps: [
          {
            step: "Verification",
            details: [
              "Check back in 48 hours - once the text is no longer bold, the entry has successfully posted to MCTFS",
            ],
          },
          {
            step: "S-2 Check-in",
            details: [
              "If this was high-threat travel or you have a high-level clearance, tell your S-2 it's in MOL so they can update your security file",
            ],
          },
          {
            step: "Post-Travel Debrief",
            details: [
              "In some cases, you may be required to complete a post-travel questionnaire in MOL or with your S-2",
              "Report any 'suspicious foreign contacts' you encountered",
            ],
          },
          {
            step: "Passport Check",
            details: [
              "If you used your Official (No-Fee) Passport, ensure you returned it to the S-1/Logistics office now that your travel is complete",
            ],
          },
          {
            step: "Verify History",
            details: [
              "Review the existing list to ensure past deployments or vacations are correctly logged",
              "If a country is missing, add it now",
            ],
          },
        ],
      },
    ],
  },
  "mol-gas-mask-helmet": {
    title: "Gas Mask and Helmet Information",
    description: "A small task that has a huge impact on your gear issues and combat readiness. When you deploy or head to a large-scale exercise, the Logistics (S-4) and NBC (CBRN) sections pull reports from MOL to determine how many masks and helmets of each size they need to have in stock.",
    capabilities: ["Update gas mask size", "Update helmet size", "Update mask type", "Support supply readiness", "Ensure proper equipment fit", "Support CIF/IIF preparation"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Safety",
            details: [
              "If your record says 'Small' but you actually wear a 'Large,' you might be issued gear that doesn't provide a proper seal",
              "This is a life-threatening issue in a CBRN environment",
            ],
          },
          {
            step: "Supply Chain",
            details: [
              "Keeping this updated ensures the right gear is waiting for you at the window",
              "Prevents delays for your entire platoon during gear draws",
            ],
          },
        ],
      },
      {
        title: "How to Update Your Gear Sizes",
        steps: [
          {
            step: "Step 1: Check Your Actual Gear First",
            details: [
              "Don't guess - go look at your gear first",
              "Gas Mask size is stenciled on the inside of your mask's facepiece",
              "Helmet size is stenciled on the inside of the helmet shell (usually under the padding)",
            ],
          },
          {
            step: "Step 2: Access the Page",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Gas Mask and Helmet Information",
            ],
          },
          {
            step: "Step 3: Update Gas Mask Info",
            details: [
              "Size: Select the size (Small, Medium, Large, etc.) stenciled on your mask",
              "Type: Select the type (e.g., M50). If you aren't sure, check with your unit CBRN (NBC) NCO",
            ],
          },
          {
            step: "Step 4: Update Helmet Size",
            details: [
              "Look for the size stenciled on the inside of the helmet shell",
              "Select the corresponding size in the dropdown",
            ],
          },
          {
            step: "Step 5: Submit Changes",
            details: [
              "Click 'Submit Changes'",
              "When prompted, click 'Apply Changes' to finalize the update",
            ],
          },
          {
            step: "Step 6: View Pending",
            details: [
              "If you see a 'Details' link, click it to see your 'Pending' vs. 'Current' values",
              "You can print this summary if your CBRN NCO needs a hard copy for your training folder",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "Guessing the Fit",
            details: [
              "Just because you have a 'large' head doesn't mean you wear a 'large' mask",
              "The mask size is determined by your face seal during a fit test (gas chamber)",
              "Use the size that was verified during your last chamber hit",
            ],
          },
          {
            step: "Ignoring the Type",
            details: [
              "The Marine Corps transitioned to the M50 mask years ago, but some specialized units use different types",
              "Ensure the Type matches exactly what is in your gear bag",
            ],
          },
          {
            step: "The Bold Status",
            details: [
              "After you click apply, the new size will appear in bold",
              "This means it is 'Pending' in the system - it usually takes 24-48 hours to process",
              "Don't submit it multiple times",
            ],
          },
          {
            step: "Incorrect Helmet Sizing",
            details: [
              "If you use an aftermarket suspension system or pads, ensure you are still reporting the size of the actual helmet shell, not the pad size",
            ],
          },
        ],
      },
      {
        title: "What Happens After You Finish",
        steps: [
          {
            step: "CBRN Verification",
            details: [
              "Your unit's CBRN NCO will see this update on their readiness roster",
            ],
          },
          {
            step: "IIF/CIF Prep",
            details: [
              "The next time you go to the Consolidated Issue Facility (CIF) for a swap or new issue, their system should reflect these sizes",
              "This makes the process faster",
            ],
          },
          {
            step: "Check Your BTR",
            details: [
              "After 48 hours, verify that these sizes have migrated to your Basic Training Record (BTR)",
              "This ensures your technical data is consistent across your entire file",
            ],
          },
        ],
      },
    ],
  },
  "mol-race-ethnic": {
    title: "Race and Ethnic Information",
    description: "While this might seem like a simple administrative task, this data is used at the highest levels of the Marine Corps to track the health and diversity of the force. The Marine Corps uses this data to ensure that recruiting and promotion systems are fair and representative.",
    capabilities: ["Update race aggregate code", "Update race code", "Update ethnic code", "Self-certify demographic data", "Support EO compliance"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Force Health",
            details: [
              "Allows Manpower and Reserve Affairs (M&RA) to see if certain groups are being promoted or retained at different rates",
              "Can lead to policy changes to fix disparities",
            ],
          },
          {
            step: "Equal Opportunity",
            details: [
              "This data is vital for Equal Opportunity (EO) programs to monitor the 'Command Climate' of the Corps",
            ],
          },
          {
            step: "Legal Requirements",
            details: [
              "The Department of Defense is required by federal law to report these demographics to Congress annually",
            ],
          },
        ],
      },
      {
        title: "How to Update Your Codes",
        steps: [
          {
            step: "Step 1: Access the Page",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Race and Ethnic Information",
            ],
          },
          {
            step: "Step 2: Race Aggregate Code",
            details: [
              "This allows you to select multiple boxes if you come from a multi-racial background",
              "Note: For DoD military personnel, you CANNOT select 'Decline to make an Election' - a selection is required",
            ],
          },
          {
            step: "Step 3: Race Code",
            details: [
              "Select the primary single code that best represents your heritage",
            ],
          },
          {
            step: "Step 4: Ethnic Code",
            details: [
              "This is where you specify if you are of Hispanic or Latino origin",
              "You can select a specific group (e.g., Mexican, Puerto Rican) or select 'Declined to Respond'",
            ],
          },
          {
            step: "Step 5: Submit and Confirm",
            details: [
              "Click 'Submit Changes'",
              "Review the summary of your changes",
              "Click 'Apply Changes' to finalize or 'Cancel' to go back",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "Pending Status",
            details: [
              "After you click 'Apply Changes,' you won't see the update immediately",
              "It will be 'Pending' in the system for 24-48 hours",
              "Use the 'View Details' link to see what you submitted",
            ],
          },
          {
            step: "Multiple Races",
            details: [
              "If you are biracial, ensure you use the Aggregate section to check all boxes that apply",
              "Don't feel forced to pick just one",
            ],
          },
          {
            step: "Declining to Respond",
            details: [
              "While the 'Ethnic' code allows you to decline, the military requires a 'Race' selection for your official file",
              "This is required to comply with MCTFS reporting standards",
            ],
          },
        ],
      },
      {
        title: "What Happens After You Finish",
        steps: [
          {
            step: "Verify on BIR",
            details: [
              "Once the 'Pending' status clears, check your Basic Individual Record (BIR)",
              "This is the document used by promotion boards, so ensure your race/ethnic codes are correctly displayed there",
            ],
          },
          {
            step: "Check Your OMPF",
            details: [
              "If you recently changed your information to reflect a heritage you hadn't declared before",
              "Ensure your Official Military Personnel File (OMPF) reflects any language or cultural skills associated with that background",
            ],
          },
        ],
      },
    ],
  },
  "mol-religion": {
    title: "Religion Information",
    description: "The religious preference you select on this page is pulled into several critical areas of your service—from your dog tags to chaplain support and even your final arrangements. Taking a few minutes to ensure this data is correct can have a lasting impact on how you are supported throughout your career.",
    capabilities: ["Update religious preference", "Self-certify religion data", "Support chaplain services", "Inform dog tag embossing", "Support dietary accommodations", "Guide burial honors"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Dog Tags",
            details: [
              "Your religious preference is one of the five lines embossed on your ID tags",
              "In a mass-casualty event, this is how medical and chaplain staff quickly identify how to support you",
            ],
          },
          {
            step: "Chaplain Services",
            details: [
              "When you seek counseling or spiritual support, the Chaplain Corps uses this data to assign you to a chaplain of a similar faith—or to find one if needed",
              "This also informs the unit religious program fund, which buys items like prayer rugs, rosaries, or Buddhist meditation supplies",
            ],
          },
          {
            step: "Dietary Needs",
            details: [
              "In field operations, your religion data can trigger the provision of Halal or Kosher MREs if you need them",
              "In garrison, the mess hall can accommodate religious dietary laws if you request it through your chain of command",
            ],
          },
          {
            step: "Burial Honors",
            details: [
              "In the event of your death, the Casualty Assistance Calls Officer (CACO) will use this data to ensure appropriate religious rites are observed at your funeral",
              "This can include a specific clergy member, religious symbols on your headstone, or ceremonial burial customs",
            ],
          },
        ],
      },
      {
        title: "How to Update Your Religious Preference",
        steps: [
          {
            step: "Step 1: Access MOL",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Religion",
            ],
          },
          {
            step: "Step 2: View Current Data",
            details: [
              "Your current recorded preference will be displayed",
              "If no preference is listed, this is what will appear on your dog tags and records",
            ],
          },
          {
            step: "Step 3: Update Your Preference",
            details: [
              "Select from the dropdown list of available religions",
              "Major world religions are listed (Christianity, Islam, Judaism, Buddhism, Hinduism, Sikhism, etc.)",
              "Various Christian denominations are available for more specific designation",
              "'No Religious Preference' is a valid option",
              "If your religion is not listed, contact your Chaplain for guidance on proper coding",
            ],
          },
          {
            step: "Step 4: Submit",
            details: [
              "Click 'Submit' to save your change",
              "Changes typically process within 24-48 hours through MCTFS",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "Assuming 'No Preference' Means Atheist",
            details: [
              "'No Religious Preference' is not the same as 'Atheist' or 'Agnostic'",
              "If you actively identify as one of these, look for the specific option in the dropdown",
              "'No Religious Preference' simply means you decline to specify",
            ],
          },
          {
            step: "Forgetting to Update After Conversion",
            details: [
              "If you convert to a new faith during your service, your old religion will remain on record until you change it",
              "This affects everything from dog tags to burial rights",
            ],
          },
          {
            step: "Not Knowing the Dog Tag Impact",
            details: [
              "New dog tags are issued at supply—if your religion changed, you need to request new tags",
              "MOL updates the master record, but you still need to physically obtain new tags from your unit supply",
            ],
          },
        ],
      },
      {
        title: "What Happens After You Update",
        steps: [
          {
            step: "MCTFS Processing",
            details: [
              "Your change will be 'Pending' (bold text) until MCTFS processes it within 24-48 hours",
            ],
          },
          {
            step: "Notify Your Chaplain",
            details: [
              "If you need immediate religious accommodations (dietary, holy day observance), speak with your unit Chaplain directly",
              "They can advocate for accommodations while the system updates",
            ],
          },
          {
            step: "Request New Dog Tags",
            details: [
              "If your religion changed, visit your unit supply section to request new ID tags with the updated preference",
            ],
          },
          {
            step: "Review Your RED",
            details: [
              "Your religious preference is connected to your Record of Emergency Data",
              "Ensure your PADD and beneficiaries align with any changes in your spiritual life",
            ],
          },
        ],
      },
    ],
  },
  "mol-language-skills": {
    title: "Self-Professed Language Skills",
    description: "This page allows you to self-report any language skills beyond English. While this data is 'self-professed' (not officially tested), it feeds into the Marine Corps manpower database and can directly influence your assignment and eligibility for special billets. If you speak a second language—whether learned at home or in school—this is where you let the Corps know.",
    capabilities: ["Add language skills", "Rate proficiency levels", "Support assignment planning", "Track language abilities", "Identify interpreter candidates", "Support Foreign Language Proficiency Bonus eligibility"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Billet Identification",
            details: [
              "HQMC Manpower Management uses this data to identify Marines with language skills for special billets",
              "This includes assignments to Foreign Area Officer (FAO) programs, Security Cooperation roles, and Embassies",
            ],
          },
          {
            step: "Deployment Needs",
            details: [
              "Deploying units often need Marines who can communicate with local populations",
              "Your self-reported skill could result in you being selected as a 'provisional interpreter' or cultural liaison",
            ],
          },
          {
            step: "Pathway to Pay",
            details: [
              "While self-professed skills don't qualify you for Foreign Language Proficiency Bonus (FLPB) directly, they can flag you as a candidate for official testing (DLPT)",
              "If you test well on the DLPT, you can earn between $100-$500/month in extra pay depending on the language and your score",
            ],
          },
        ],
      },
      {
        title: "Understanding Proficiency Levels (ILR Scale)",
        steps: [
          {
            step: "Level Reference Guide",
            details: [
              "When selecting your level, use the Interagency Language Roundtable (ILR) scale as a mental guide:",
              "0 (None): No practical ability in the language",
              "0+ (Memorized): Can use memorized phrases (ordering food, basic greetings)",
              "1 (Elementary): Can handle routine travel needs, ask/answer simple questions",
              "1+ (Elementary+): Can handle limited work requirements with frequent errors",
              "2 (Limited Working): Can handle routine social/work situations, discuss current events",
              "2+ (Limited Working+): Can handle most complex situations with some difficulty",
              "3 (General Professional): Can discuss abstract topics, provide counsel, and understand most speech",
              "3+ (General Professional+): Occasional non-native error, broad vocabulary",
              "4 (Advanced Professional): Near-native fluency, can interpret and translate",
              "5 (Native/Bilingual): Native-level fluency in all contexts",
            ],
          },
          {
            step: "Honest Self-Assessment",
            details: [
              "Be honest - the Corps may test you to verify your claim",
              "Overestimating can lead to being placed in a role you can't handle",
              "Underestimating means you miss opportunities",
            ],
          },
        ],
      },
      {
        title: "How to Add or Update Language Skills",
        steps: [
          {
            step: "Step 1: Access MOL",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Self-Professed Language Skills",
            ],
          },
          {
            step: "Step 2: Review Current Data",
            details: [
              "View any languages you have previously reported",
              "Check if your proficiency levels are still accurate",
            ],
          },
          {
            step: "Step 3: Add a Language",
            details: [
              "Click 'Add Language'",
              "Select the language from the dropdown list",
              "Rate your proficiency in each skill area: Reading, Writing, Speaking, Listening",
              "Click 'Submit'",
            ],
          },
          {
            step: "Step 4: Edit Existing Language",
            details: [
              "Click on an existing language entry to modify your proficiency rating",
              "Update the skill levels as appropriate",
              "Submit your changes",
            ],
          },
        ],
      },
      {
        title: "DLPT vs Self-Professed",
        steps: [
          {
            step: "The Difference",
            details: [
              "Self-Professed: Your own estimate of your ability—not officially tested",
              "DLPT (Defense Language Proficiency Test): The official DoD test that determines language pay",
            ],
          },
          {
            step: "Why Both Exist",
            details: [
              "Not every language has a DLPT available",
              "Self-professed data helps the Corps identify 'hidden' language talent",
              "If you score well on the DLPT, your self-professed entry becomes validated",
            ],
          },
          {
            step: "Foreign Language Proficiency Bonus (FLPB)",
            details: [
              "Only DLPT scores qualify you for FLPB pay",
              "FLPB ranges from $100-$500/month depending on language and proficiency",
              "Self-professed skills can get you noticed for testing opportunities",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "Overestimating to Get a Billet",
            details: [
              "If you claim 'High' proficiency and are selected for an interpreter role you can't handle, you will be replaced and flagged",
              "Be accurate—there will be opportunities to improve and test",
            ],
          },
          {
            step: "Forgetting Heritage Languages",
            details: [
              "Many Marines grew up speaking Spanish, Tagalog, Vietnamese, or other languages at home",
              "Even if you never studied it formally, you may have 'Limited Working' proficiency worth reporting",
            ],
          },
          {
            step: "Not Knowing DLPT Availability",
            details: [
              "Before assuming you can't get tested, check with your Education Center or S-3",
              "Many common languages (Arabic, Chinese, Korean, Spanish, Russian, etc.) have DLPTs available",
            ],
          },
        ],
      },
      {
        title: "What Happens After You Update",
        steps: [
          {
            step: "Data Flows to MCTFS",
            details: [
              "Your self-professed language skills are recorded in the Marine Corps Total Force System",
              "This data is visible to manpower planners at HQMC",
            ],
          },
          {
            step: "Potential DLPT Scheduling",
            details: [
              "If you report a skill in a 'strategic' language, your unit may be notified that you should be scheduled for official testing",
            ],
          },
          {
            step: "Assignment Consideration",
            details: [
              "Future monitors and assignment officers can see your language skills when making billet decisions",
              "This can influence PCS orders, deployment taskings, and special duty assignments",
            ],
          },
        ],
      },
    ],
  },
  "mol-red-certification": {
    title: "RED Certification",
    description: "The RED Certification transaction allows Marines to electronically certify that their Record of Emergency Data (RED) is current and accurate. RED certification is required for deployment readiness.",
    capabilities: ["Certify RED accuracy", "View RED status", "Support deployment readiness"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "How to Update and Certify Your RED",
        steps: [
          {
            step: "Step 1: Access the Page",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personal Info > Record of Emergency Data (RED)",
            ],
          },
          {
            step: "Step 2: Verify the Data",
            details: [
              "Check your spouse, children, and parents",
              "Ensure addresses and phone numbers are current",
              "Verify beneficiary designations are correct",
            ],
          },
          {
            step: "Step 3: To Update (Edit)",
            details: [
              "Click the 'Edit' link next to the section you need to change (e.g., 'Emergency Contact' or 'Beneficiary')",
              "Enter the new information",
              "Saving an edit automatically 'certifies' that section",
            ],
          },
          {
            step: "Step 4: To Certify (No Changes)",
            details: [
              "If everything is correct, click the 'Certify' button at the bottom",
              "Click 'Confirm' on the pop-up",
              "The 'Certification Date' will update once the system (MCTFS) processes it",
            ],
          },
          {
            step: "Step 5: Print/Save",
            details: [
              "Click 'Printer-Friendly View'",
              "Click 'Print' (Save as PDF) - this is a required document for every pre-deployment 'shred' or 'audit'",
            ],
          },
        ],
      },
      {
        title: "Sections to Review Before Certifying",
        steps: [
          {
            step: "Complete Review Checklist",
            details: [
              "Family Information - Spouse and children addresses",
              "Parents - Parent contact information",
              "Pay Arrears - Beneficiaries for unpaid compensation",
              "Next of Kin - Emergency contacts",
              "Death Gratuity - Beneficiary designations",
              "PADD - Person Authorized to Direct Disposition",
              "Insurance - SGLI and other coverage",
              "Do Not Notify - Vulnerable family members",
              "MIA Notification - Missing in Action contacts",
            ],
          },
        ],
      },
      {
        title: "When to Certify",
        steps: [
          {
            step: "Required Certification Times",
            details: [
              "Annually at minimum",
              "Before deployment",
              "After major life events (marriage, divorce, birth of child)",
              "After PCS moves",
              "When directed by command",
            ],
          },
        ],
      },
      {
        title: "What Happens After You Finish",
        steps: [
          {
            step: "MCTFS Processing",
            details: [
              "It usually takes 24-48 hours for your certification to post",
              "Once it does, the red 'Out of Date' flag on your MOL homepage will disappear",
              "Check that bold text has returned to normal to confirm processing",
            ],
          },
          {
            step: "Verify the PADD",
            details: [
              "Navigate to the PADD (Person Authorized to Direct Disposition) section",
              "Ensure the correct person is designated to handle final arrangements",
              "This is the person you trust to make your funeral decisions",
            ],
          },
          {
            step: "Audit Your SGLI",
            details: [
              "Go to milConnect and check your SGLI Online Enrollment System (SOES)",
              "Ensure your life insurance beneficiaries match your current family status",
              "Your SGLV 8286 should align with your RED designations",
            ],
          },
        ],
      },
      {
        title: "Deployment Readiness Requirements",
        steps: [
          {
            step: "RED and Deployment",
            details: [
              "A certified RED is required for deployment readiness",
              "Uncertified RED may affect your deployability status",
              "CMC Casualty view shows pending changes and certification status",
            ],
          },
        ],
      },
    ],
  },
  "mol-w2-electronic": {
    title: "W2/W2C Electronic Delivery",
    description: "The W2/W2C Electronic Delivery transaction allows Marines to opt in or out of electronic delivery for W-2 tax statements. Electronic delivery provides faster access to tax documents.",
    capabilities: ["Opt in to electronic W-2", "Opt out to paper delivery", "Manage delivery preferences"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Accessing W2 Delivery Settings",
        steps: [
          { step: "Log in to MOL at https://mol.tfs.usmc.mil/" },
          { step: "Navigate to Personal Info > W2 Tax Statements" },
          { step: "View your current delivery preference" },
        ],
      },
      {
        title: "Opting In to Electronic Delivery",
        steps: [
          { step: "Click to change your delivery preference" },
          { step: "Select 'Electronic Delivery'" },
          { step: "Confirm your email address for notifications" },
          { step: "Submit your preference change" },
        ],
      },
      {
        title: "Benefits of Electronic Delivery",
        steps: [
          {
            step: "Advantages",
            details: [
              "Faster access - available as soon as released",
              "No lost mail - always accessible in MOL",
              "Environmentally friendly",
              "Can print multiple copies as needed",
              "Access prior year W-2s easily",
            ],
          },
        ],
      },
      {
        title: "Opting Out to Paper Delivery",
        steps: [
          { step: "Select 'Hard Copy' or paper delivery option" },
          { step: "W-2 will be mailed to your address of record" },
          { step: "Ensure your mailing address is current" },
          { step: "Paper delivery takes longer to receive" },
        ],
      },
      {
        title: "Important Notes",
        steps: [
          { step: "Separated/Retired Marines cannot change delivery method" },
          { step: "W-2s are typically available by late January" },
          { step: "Keep your contact information current for delivery notifications" },
        ],
      },
    ],
  },
  "mol-personal-information": {
    title: "Personal Information (PI)",
    description: "Provides individual members access to view their own personnel records as recorded within the MCTFS or interfacing application. Self-Certified transactional reporting capabilities are provided to users for select data elements not requiring two-factor review. Reports are generated using a combination of local database queries (MED) and service calls directly to the MCTFS (SOA APIs).",
    capabilities: ["View personnel records", "Self-certified transactions", "Access electronic records (ARCR, ACIP, BIR, BTR, etc.)", "Update contact information", "Manage emergency data", "View W2 statements"],
    userTypes: ["Individual Members"],
    guide: [
      {
        title: "Accessing Personal Information",
        steps: [
          { step: "Log in to MOL at https://mol.tfs.usmc.mil/" },
          { step: "Navigate to the \"Personal Info\" menu item on the main navigation bar" },
          { step: "Select the desired report or update category from the available options" },
        ],
      },
      {
        title: "Personal Reports Overview",
        steps: [
          {
            step: "Available Reports",
            details: [
              "Annual Retirement Credit Report (ARCR) - Retirement point summary for reserve Marines",
              "Aviation Career Incentive Pay (ACIP) - Flight pay eligibility and status",
              "Awards - View decorations, medals, and unit awards",
              "Basic Individual Record (BIR) - Comprehensive personnel snapshot",
              "Basic Training Record (BTR) - Training history and qualifications",
              "BRS/TSP - Blended Retirement System and Thrift Savings Plan info",
              "Chronological Record (CHRO) - Timeline of significant career events",
              "Education - Civilian and military education records",
              "Family Care Plan (FCP) - Dependent care arrangements",
              "Individual Medical Readiness (IMR) - Medical readiness status",
              "Pay and Leave Summary - Current pay and leave balances",
              "Pers-Tempo - Personnel tempo tracking",
              "Personal Statement of Military Compensation (PSMC) - Total compensation breakdown",
              "Record of Emergency Data (RED) - Emergency contacts and beneficiaries",
              "Reserve Drill Summary - Drill attendance for reservists",
              "Record of Service (ROS) - Complete service record",
              "W2 Tax Statements - Annual tax documents",
            ],
          },
        ],
      },
      {
        title: "Civilian Employment Information (CEI)",
        steps: [
          {
            step: "Overview",
            details: [
              "Required for Reserve Component members to track civilian employment",
              "Information may be used by the DoD to contact employers in case of mobilization",
            ],
          },
          {
            step: "Required Information",
            details: [
              "Date: Effective date of the employment record",
              "Employer Name: Name of your current civilian employer",
              "Street Address: Employer's street address",
              "City, State, and Zip Code: Employer's location",
              "Phone Number: Employer's contact phone",
              "Email Address: Employer's contact email",
              "Occupation: Your job title or role",
              "Full Time/Part Time: Employment status indicator",
            ],
          },
          {
            step: "Employment Status Questionnaire",
            details: [
              "Specify if you are a federal civil service employee",
              "Indicate if the position is vital to national defense",
              "Answer if you are a union member or self-employed",
              "Note if you have pre-mobilization orders or permission to mobilize",
              "Identify any employer restrictions on your availability",
            ],
          },
        ],
      },
      {
        title: "Personal Contact Information",
        steps: [
          {
            step: "Address Types",
            details: [
              "US Address: Standard domestic address format (Street, City, State, ZIP)",
              "APO/FPO/DPO: Military postal address format for overseas locations",
              "Foreign Address: International address with country code",
            ],
          },
          {
            step: "Update Process",
            details: [
              "Navigate to Personal Info > Contact Information",
              "Select the appropriate address type (US, APO/FPO/DPO, or Foreign)",
              "Enter all required address fields",
              "Add phone numbers: Primary, Secondary, Work, and Cell",
              "Enter email addresses for official correspondence",
              "Review and submit the update",
            ],
          },
          {
            step: "US Address Fields",
            details: [
              "Effective Date: When the address change takes effect",
              "Street Address: Street number and name (up to 50 characters)",
              "Apartment/Unit: Optional additional address line",
              "City: City or town name",
              "State: Two-letter state abbreviation",
              "ZIP Code: 5-digit or 9-digit ZIP code",
            ],
          },
          {
            step: "APO/FPO/DPO Address Fields",
            details: [
              "Unit/Box Number: Military unit or box designation",
              "APO/FPO/DPO: Select the appropriate military post office type",
              "ZIP Code: Military postal ZIP code",
            ],
          },
          {
            step: "Phone Number Fields",
            details: [
              "Primary Phone: Main contact number (required)",
              "Secondary Phone: Backup contact number",
              "Work Phone: Office or duty station number",
              "Cell Phone: Mobile phone number",
              "Include area codes for all phone numbers",
            ],
          },
        ],
      },
      {
        title: "Foreign Travel",
        steps: [
          {
            step: "Overview",
            details: [
              "Record foreign travel history for security and personnel tracking",
              "Required for certain clearance levels and positions",
            ],
          },
          {
            step: "Adding a Foreign Travel Entry",
            details: [
              "Navigate to Personal Info > Foreign Travel",
              "Click \"Add Foreign Travel\" to create a new entry",
              "Enter the Country visited from the dropdown list",
              "Provide Departure Date (when you left the US)",
              "Provide Return Date (when you returned to the US)",
              "Enter Purpose of Travel (official duty, leave, emergency, etc.)",
              "Add any additional notes or details",
              "Submit the entry for recording",
            ],
          },
        ],
      },
      {
        title: "Gas Mask and Helmet Information",
        steps: [
          {
            step: "Overview",
            details: [
              "Self-report protective equipment sizing for supply and readiness purposes",
              "Ensures correct equipment is available during deployments",
            ],
          },
          {
            step: "Gas Mask Information",
            details: [
              "Navigate to Personal Info > Gas Mask and Helmet",
              "Select your Gas Mask Size from available options (XS, S, M, L, XL)",
              "Confirm the mask type if prompted",
              "Submit to update your record",
            ],
          },
          {
            step: "Helmet Information",
            details: [
              "Select your Helmet Size from available options",
              "Common sizes: Small, Medium, Large, X-Large",
              "Verify the helmet type matches your issued equipment",
              "Submit to update your record",
            ],
          },
        ],
      },
      {
        title: "Personnel Accountability Information",
        steps: [
          {
            step: "Overview",
            details: [
              "Self-report status during disaster declarations and emergencies",
              "Report location, contact information, and dependent status",
              "See the Personnel Accountability (PA) module for detailed disaster response procedures",
            ],
          },
          {
            step: "Reporting Your Status",
            details: [
              "Log into MOL when a disaster is declared",
              "Navigate to Personal Info > Personnel Accountability",
              "Select your current status: Accounted For, Injured, Evacuated, etc.",
              "Update your current location if different from recorded address",
              "Provide a contact phone number where you can be reached",
              "Report the status of your dependents",
              "Submit to notify your chain of command",
            ],
          },
        ],
      },
      {
        title: "Race and Ethnic Information",
        steps: [
          {
            step: "Overview",
            details: [
              "Self-certify race and ethnicity data for personnel records",
              "Used for demographic reporting and equal opportunity compliance",
            ],
          },
          {
            step: "Updating Race/Ethnic Information",
            details: [
              "Navigate to Personal Info > Race/Ethnic",
              "Select your Ethnicity: Hispanic or Latino, or Not Hispanic or Latino",
              "Select one or more Race categories",
              "Race options: American Indian/Alaska Native, Asian, Black/African American, Native Hawaiian/Pacific Islander, White",
              "You may select multiple race categories if applicable",
              "Submit to update your record",
            ],
          },
        ],
      },
      {
        title: "Religion Information",
        steps: [
          {
            step: "Overview",
            details: [
              "Self-certify religious preference for personnel records",
              "Used for chaplain support, dietary considerations, and casualty notification",
            ],
          },
          {
            step: "Updating Religion Preference",
            details: [
              "Navigate to Personal Info > Religion",
              "Select your religious preference from the available list",
              "Options include major world religions and 'No Religious Preference'",
              "Submit to update your record",
              "Changes are reflected in your personnel file and RED",
            ],
          },
        ],
      },
      {
        title: "Self-Professed Language Skills",
        steps: [
          {
            step: "Overview",
            details: [
              "Report language skills beyond your primary language",
              "May be used for assignment considerations and special duty selection",
            ],
          },
          {
            step: "Adding a Language",
            details: [
              "Navigate to Personal Info > Self-Professed Language Skills",
              "Click \"Add Language\" to enter a new skill",
              "Select the Language from the dropdown list",
              "Rate your Reading proficiency (None, Low, Medium, High, Native)",
              "Rate your Writing proficiency (None, Low, Medium, High, Native)",
              "Rate your Speaking proficiency (None, Low, Medium, High, Native)",
              "Rate your Listening proficiency (None, Low, Medium, High, Native)",
              "Submit to add the language to your record",
            ],
          },
          {
            step: "DLPT Scores",
            details: [
              "If you have taken the Defense Language Proficiency Test (DLPT), official scores are recorded separately",
              "Self-professed skills are for languages not formally tested",
              "Contact your S-1/Admin for DLPT score discrepancies",
            ],
          },
        ],
      },
      {
        title: "W2/W2C Electronic Delivery",
        steps: [
          {
            step: "Overview",
            details: [
              "Opt in to receive W2 tax statements electronically",
              "Provides faster access to tax documents",
            ],
          },
          {
            step: "Enrollment",
            details: [
              "Navigate to Personal Info > W2 Electronic Delivery",
              "Select \"Opt In\" to receive electronic W2 statements",
              "Confirm your email address for notifications",
              "W2 forms will be available in MOL when released each tax year",
              "You can opt out at any time to return to paper delivery",
            ],
          },
        ],
      },
    ],
  },
  "mol-promotion-recs": {
    title: "Promotion Recs",
    description: "Provides authorized unit leaders the ability to make monthly/quarterly promotion recommendations for Marines (Private - Corporal) within their organizational scope. Final Rec/Non-Rec recommendations generate transactional updates to the MCTFS upon approval by the Commanding Officer. If a Marine is selected for promotion through the automated MCTFS promotion selection process, the Commanding Officer may choose to remove the selection status from the MCTFS through this module. Additionally, unit administrative personnel may generate Promotion Warrants in PDF format for Marines selected for promotion.",
    capabilities: ["Monthly/quarterly promotion recommendations", "Rec/Non-Rec submissions", "Remove promotion selection status", "Generate Promotion Warrants (PDF)", "Report to MCTFS"],
    userTypes: ["Unit Leaders", "Commanding Officers", "Administrative Personnel"],
  },
  "mol-trouble-ticket-system": {
    title: "Trouble Ticket System (TTS)",
    description: "Provides individual members and authorized unit leaders the ability to submit system issues to their jurisdictional Manpower Information System Support Office (MISSO). Tickets can be initiated by the member or unit leader within MOL. Tickets can be initiated by Installation Personnel Admin Centers or stand-alone Reporting Units through the Unit Diary / Marine Integrated Personnel Service (UD/MIPS).",
    capabilities: ["Submit system issues", "Route to jurisdictional MISSO", "Initiate from MOL", "Initiate from UD/MIPS", "Track ticket status"],
    userTypes: ["Individual Members", "Unit Leaders", "IPACs", "Reporting Units"],
    guide: [
      {
        title: "Access and Navigation",
        steps: [
          { step: "Log in to MOL at https://mol.tfs.usmc.mil/" },
          { step: "Click the \"Trouble Tickets\" menu item on the main navigation bar" },
          { step: "Select \"New Trouble Ticket\" at the top of the screen" },
        ],
      },
      {
        title: "Define the Issue",
        steps: [
          {
            step: "Verify your information",
            details: ["The page will prepopulate your basic details", "Ensure your Work Email and Work Phone are correct"],
          },
          {
            step: "Select Application",
            details: ["Click the \"Application\" dropdown menu", "Choose the relevant category (e.g., Marine Online, COGNOS, MCTFS)"],
          },
          { step: "Select Subject from the next dropdown menu after picking an application" },
          {
            step: "Check Instructions",
            details: ["If applicable, an \"Instructions and Forms\" tab will appear", "Review any special requirements for your selected category"],
          },
        ],
      },
      {
        title: "Add Details and Documentation",
        steps: [
          {
            step: "Provide Notes",
            details: ["Use the \"Notes\" tab to describe the requested action and any source documentation", "Click \"Add Note\" when finished"],
          },
          {
            step: "Upload Files",
            details: ["Use the \"Files\" tab to upload supporting documentation", "Add a description for each file if uploading more than one", "Click \"Add File\" when done"],
          },
          { step: "Review History - use the \"History\" tab to view all recorded actions on the ticket" },
        ],
      },
      {
        title: "Submission",
        steps: [
          { step: "Double-check your work and click \"Submit Ticket\"" },
          {
            step: "Draft option",
            details: ["If you are not ready to submit, click \"Save Changes\" to return to the ticket later"],
          },
        ],
      },
      {
        title: "What Happens After Submission",
        steps: [
          { step: "Your ticket will be reviewed by Command personnel in your unit" },
          { step: "Command personnel will determine the necessary action and route to MISSO if needed" },
        ],
      },
    ],
    useCases: [
      "Technical Issues: Problems with specific MOL modules (Awards, Leave/Absence, EPAR, etc.)",
      "System Errors: Application or system-level issues within MOL, COGNOS, or MCTFS",
      "Access Requests: Requesting specific permissions or access levels through your chain of command",
      "Administrative Appointments: Actions like Assumption of Command or new Commanding Officer appointments",
    ],
  },
  "mol-umsr": {
    title: "Unit Management Status Report (UMSR)",
    description: "Provides authorized unit leaders the ability to execute daily muster of personnel (morning report) including gains/losses, duty status changes, and discrepancy reports. Summary and Detail personnel reports are available at the battalion unit level as well as roll-up to higher-headquarter organizations. Organizational changes to the Company, Platoon, and/or Work Station assignment trigger transactional updates to the MCTFS. Drop (loss) actions on Non-Marines additionally generate transactional updates on the member resulting in the separation being recorded within the MCTFS. Business processes are implemented to ensure changes to a member's unit assignment are pushed to other applications that may be impacted such as Leave & Liberty, Permissions Management, and JEPES. Nightly reconciliation occurs to ensure that UMSR organizational associations are in sync with MCTFS external reporting activities.",
    capabilities: ["Daily muster (morning report)", "Track gains/losses", "Duty status changes", "Discrepancy reports", "Summary and detail reports", "Roll-up to higher HQ", "Co/Plt/WS assignment changes", "Non-Marine separation processing", "Nightly MCTFS reconciliation"],
    userTypes: ["Unit Leaders"],
  },
  "mol-unit-reports-cognos": {
    title: "Unit Reports (Cognos)",
    description: "Provides authorized users ad hoc and canned reporting capabilities on enterprise pay and personnel records, and application data.",
    capabilities: ["Ad hoc reporting", "Canned reports", "Pay records reporting", "Personnel records reporting", "Application data reporting"],
    userTypes: ["Authorized Users", "Unit Leaders", "Administrative Personnel"],
  },
  "mol-user-management": {
    title: "User Management",
    description: "Provides authorized command representatives the ability to manage user accounts within their organizational scope. Additionally, transaction reporting capability exists for establishing and maintaining Non-Marine records within the MCTFS.",
    capabilities: ["Manage user accounts", "Scope to organization", "Establish Non-Marine records", "Maintain Non-Marine records", "Report to MCTFS"],
    userTypes: ["Command Representatives"],
  },
  "mol-view-reports": {
    title: "View Reports",
    description: "Provides authorized command representatives the ability to view individual member personnel records as recorded within the MCTFS. (See Personal Information module for full details)",
    capabilities: ["View member personnel records", "Access MCTFS data", "Scoped to organizational hierarchy"],
    userTypes: ["Command Representatives"],
  },
  "mol-login-cac-setup": {
    title: "MOL Login & CAC Setup",
    description: "Uniformed Marines can gain access to Marine Online (MOL) through a self-registration process. This guide walks you through the complete registration process and CAC association.",
    capabilities: ["Self-registration for MOL access", "CAC association", "Password creation", "Account setup"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Step 1: Access the Registration Page",
        steps: [
          { step: "Go to the MOL website at https://mol.tfs.usmc.mil/" },
          { step: "Under the \"Need Help?\" section, click the link that says \"Don't have an account? Register here!\"" },
        ],
      },
      {
        title: "Step 2: Enter Personal Identification",
        steps: [
          { step: "Name: Enter your First Name and Last Name (include any suffixes in the last name field)" },
          { step: "Social Security Number: Enter your 9-digit SSN without any dashes or spaces" },
          { step: "Date of Birth: Enter your birth date using the format dd Mon yyyy (e.g., 01 Jan 2000)" },
        ],
      },
      {
        title: "Step 3: Enter Military and Contact Data",
        steps: [
          {
            step: "PEBD: Enter your Pay Entry Base Date in the dd Mon yyyy format",
            details: ["If you are unsure of this date, it can be found in section 8 of your Leave and Earnings Statement (LES)"],
          },
          {
            step: "Primary MOS: Enter your four-digit Primary MOS",
            details: [
              "If you have finished recruit training but not MOS school, use 8011",
              "If you have started MOS school, use your intended general field (e.g., 0300 for Infantry or 0100 for Admin)",
            ],
          },
          { step: "Contact Phone: Enter your primary phone number, including the area code, DSN prefix, or country code" },
        ],
      },
      {
        title: "Step 4: Security and Account Creation",
        steps: [
          {
            step: "Create Password: Enter and confirm a password that meets the following requirements",
            details: [
              "Between 15 and 50 characters",
              "At least two uppercase and two lowercase letters",
              "At least two numbers",
              "At least two special characters (Valid: !@#$%&*?()+{}_|-=)",
            ],
          },
          { step: "Submit: Click \"Submit\"" },
        ],
      },
      {
        title: "Step 5: Completion and Login",
        steps: [
          { step: "Record your Username: The system will display your new Login Name (e.g., JAMARINE123)" },
          { step: "Initial Login: Click \"Login\" to return to the main page and enter your new credentials" },
        ],
      },
      {
        title: "What Happens Next",
        steps: [
          { step: "Once your account is active, you can associate your Common Access Card (CAC) by logging in while the card is inserted into a reader" },
          { step: "CAC association is required to access certain applications like Cognos (Reports)" },
        ],
      },
    ],
  },
  "mol-password-pin-reset": {
    title: "Password & PIN Reset",
    description: "Configuring an email password reset for your Single Sign-On (SSO) account allows you to regain access to Marine Online (MOL) without waiting for a Help Desk call back. You can associate up to two email addresses with your account.",
    capabilities: ["Email recovery setup", "Password reset", "Account recovery", "Secondary email configuration"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Step 1: Navigate to Security Settings",
        steps: [
          { step: "Log in: Access MOL at https://mol.tfs.usmc.mil/" },
          { step: "Select My Account: Click the \"My Account\" menu item on the main navigation bar" },
          { step: "Change Password: On the left side of the screen, click \"Change Password\"" },
        ],
      },
      {
        title: "Step 2: Add Recovery Email",
        steps: [
          { step: "Access Recovery Options: Under the \"Account Recovery options\" section, click \"Add\" next to Recovery Email" },
          { step: "Enter Address: Type in your primary email address and click \"Add Email\"" },
        ],
      },
      {
        title: "Step 3: Verify the Email Address",
        steps: [
          {
            step: "Wait for Code: Check your email for a Verification Code; it may take 3–5 minutes to arrive",
            details: ["If using a commercial email address, check your junk or spam folders"],
          },
          {
            step: "Input Code: Enter the 8-digit code from the email into the \"Verify Email\" screen on MOL",
            details: ["The code expires 60 minutes after the email is sent"],
          },
          { step: "Complete: Click \"Verify\"" },
        ],
      },
      {
        title: "Step 4: Confirmation",
        steps: [
          { step: "Check Status: The application will return to the Account Security Information page, where your verified email will be displayed with a validation icon" },
          { step: "Secondary Email (Optional): You can repeat this process to add a second recovery email address" },
        ],
      },
      {
        title: "What Happens Next",
        steps: [
          { step: "If you forget your password in the future, go to the MOL login page" },
          { step: "Click \"Forgot your Password? Click here!\" and enter your verified email to receive a reset code" },
        ],
      },
    ],
  },
  "mol-view-permissions": {
    title: "View Your Permissions",
    description: "The My Permissions feature in Marine Online (MOL) allows you to see all permissions currently assigned to you within the Marine Online Family of Services (FoS). This includes permissions assigned to you as an individual or via a template.",
    capabilities: ["View assigned permissions", "Understand authority levels", "Self-revoke permissions", "Audit your access"],
    userTypes: ["All Marines", "Administrators", "Unit Leaders"],
    guide: [
      {
        title: "How to Access and View Permissions",
        steps: [
          { step: "Log in: Access MOL at https://mol.tfs.usmc.mil/" },
          { step: "Navigate: Click the \"My Permissions\" menu item in the navigation bar" },
          { step: "Understand the Layout: Permissions are organized by their unit scope (e.g., Battalion > Company > Platoon > Work Section)" },
          { step: "View Template Details: To see specific permissions inside a template (like \"Commanding Officer\"), click the \"View\" link next to that template. When finished, click \"Return to My Permissions\"" },
        ],
      },
      {
        title: "Understanding Authority Levels",
        steps: [
          { step: "Execution: You can use/execute the permission for the specified unit scope" },
          { step: "Delegate: You can grant this permission to other users at or below your unit scope" },
          { step: "Grant Delegate: You can authorize another user to delegate the permission to others" },
        ],
      },
      {
        title: "Managing and Revoking Permissions",
        steps: [
          { step: "Self-Audit: It is recommended to perform an occasional \"self-audit\" of your permissions, particularly after a Permanent Change of Station (PCS) or change in work assignment" },
          { step: "Rule of Thumb: If you have the same permission at both a higher and lower unit level, you should self-revoke the lower unit level permission" },
          {
            step: "How to Revoke",
            details: [
              "Individually: Check the box next to a specific permission or template and click \"Revoke Selected Permissions\"",
              "Bulk: Check the \"Revoke All Permissions\" box for an entire unit scope to remove them at once",
            ],
          },
          {
            step: "Restrictions",
            details: [
              "Some templates (like \"Commanding Officer\" or \"Officer of the Day\") cannot be self-revoked and must be managed through specific application functions",
              "Some external permissions (like UD/MIPS or CLA) are managed outside of this screen",
            ],
          },
        ],
      },
    ],
  },
  "mol-two-factor-auth": {
    title: "Two Factor Authentication (2FA)",
    description: "Two Factor Authentication (2FA) adds an extra layer of security to your Marine Online account by requiring a second form of verification in addition to your password.",
    capabilities: ["Enhanced account security", "Secondary verification", "Authentication app setup", "Recovery options"],
    userTypes: ["All Marines"],
    guide: [
      {
        title: "Overview",
        steps: [
          { step: "Two Factor Authentication provides additional security for your MOL account" },
          { step: "When enabled, you will need both your password and a verification code to log in" },
          { step: "Contact your local MISSO for 2FA setup assistance and requirements" },
        ],
      },
    ],
  },
  "mol-personnel-accountability": {
    title: "Personnel Accountability (PA)",
    description: "When disaster strikes—hurricanes, earthquakes, wildfires, or other emergencies—the Marine Corps needs to know where you are and whether you and your family are safe. This page is how you 'check in' electronically and let your command know your status. For leaders, this is how you track your Marines and report to higher headquarters.",
    capabilities: ["Self-report disaster status", "Report dependent status", "Track subordinate accountability", "Generate unit accountability reports", "Support HQMC disaster response", "Enable search and rescue prioritization"],
    userTypes: ["All Marines", "Leaders", "Administrators", "Commanders"],
    guide: [
      {
        title: "Why This Matters",
        steps: [
          {
            step: "Life Safety",
            details: [
              "In a disaster, the Marine Corps needs to know if you are injured, missing, or safe",
              "Your status directly affects search and rescue resource allocation",
              "If you don't check in, you may be listed as 'Unaccounted' which triggers emergency response protocols",
            ],
          },
          {
            step: "Family Accountability",
            details: [
              "The system also tracks your dependents—spouse and children",
              "If you are deployed and your family is in a disaster area, your command needs to know their status",
              "This helps the Marine Corps provide family assistance and coordinate evacuations",
            ],
          },
          {
            step: "Mission Readiness",
            details: [
              "Commanders need accurate personnel counts to determine unit readiness",
              "This affects recall operations and mobilization planning",
              "Higher headquarters (HQMC) uses this data to coordinate DoD-wide response efforts",
            ],
          },
        ],
      },
      {
        title: "How to Check In (Individual Marines)",
        steps: [
          {
            step: "Step 1: Access MOL",
            details: [
              "Log in to MOL at https://mol.tfs.usmc.mil/",
              "Navigate to Personnel Accountability (PA) module",
              "During active disaster declarations, you may see a prompt immediately upon login",
            ],
          },
          {
            step: "Step 2: Report Your Status",
            details: [
              "Select your current status from the available options:",
              "• Accounted For - You are safe and uninjured",
              "• Injured - You have sustained injuries (triggers additional follow-up)",
              "• Evacuated - You have left the disaster area",
              "• Sheltering in Place - You are safe but remaining in the area",
            ],
          },
          {
            step: "Step 3: Report Dependent Status",
            details: [
              "If you have dependents (spouse, children), report their status as well",
              "Even if they are not with you, indicate their current situation",
              "If you cannot reach them, report 'Unable to Contact'",
            ],
          },
          {
            step: "Step 4: Provide Contact Information",
            details: [
              "Confirm or update your current phone number where you can be reached",
              "Provide your temporary location if you have evacuated",
              "This helps your command contact you for follow-up",
            ],
          },
        ],
      },
      {
        title: "Backup Methods (If MOL is Unavailable)",
        steps: [
          {
            step: "Phone Tree",
            details: [
              "If you cannot access MOL, call your immediate supervisor",
              "If they don't answer, proceed up the chain of command",
              "Your command should have an offline recall roster with multiple contact methods",
            ],
          },
          {
            step: "HQMC Hotline",
            details: [
              "During major disasters, HQMC activates a toll-free accountability hotline",
              "Listen for announcements via official Marine Corps channels",
              "This is a backup if local communications are down",
            ],
          },
          {
            step: "Physical Muster",
            details: [
              "Report to your unit's designated rally point if possible",
              "In-person accountability overrides electronic check-in",
            ],
          },
        ],
      },
      {
        title: "Leader Responsibilities",
        steps: [
          {
            step: "Preparation Before Disasters",
            details: [
              "Verify all subordinates have active MOL accounts with Email Password Reset configured",
              "Direct Marines to conduct a 'self-audit' of their contact information quarterly",
              "Maintain an offline roster with personal cell phones, home addresses, and emergency contacts",
              "Conduct periodic accountability drills to test recall procedures",
            ],
          },
          {
            step: "Active Accountability Monitoring",
            details: [
              "Access the PA module to view real-time list of who has self-reported",
              "Focus contact efforts on Marines who have not checked in electronically",
              "Use work phone, personal phone, email, text message, and emergency contacts",
              "Document all attempts to reach 'Unaccounted' personnel",
            ],
          },
          {
            step: "Updating Status for Others",
            details: [
              "If you contact a Marine by phone, you can update their status in the PA module",
              "Include notes about their situation and location",
              "Escalate 'Unaccounted For' personnel to Command Admin or Commander",
            ],
          },
        ],
      },
      {
        title: "Admin Responsibilities",
        steps: [
          {
            step: "System Configuration",
            details: [
              "Ensure unit organizational hierarchy (Battalion > Company > Platoon > Work Section) is correctly mapped in MOL",
              "Grant correct 'Execution' or 'Delegate' authorities to leaders for PA module access",
              "Verify that all Marines are correctly assigned to the right organizational unit",
            ],
          },
          {
            step: "Reporting to Higher Headquarters",
            details: [
              "Generate master reports showing percentage of command accounted for",
              "Act as primary point of contact for reporting to HQMC Personnel Accountability cell",
              "Submit accountability reports on the required timeline (usually every 4-6 hours during active events)",
            ],
          },
        ],
      },
      {
        title: "Commander Responsibilities",
        steps: [
          {
            step: "Establishing Command Intent",
            details: [
              "Establish clear SOP for accountability (e.g., 'All Marines must check into MOL within 4 hours of a disaster declaration')",
              "Define thresholds for escalating 'Unaccounted' status to higher headquarters",
              "Ensure family readiness programs include disaster preparedness briefings",
            ],
          },
          {
            step: "Decision Making",
            details: [
              "Review data from Admin and Leaders to assess unit readiness and disaster impact",
              "Decide when to deploy Search and Recovery efforts for 'Unaccounted' personnel",
              "Coordinate with installation resources (PMO, Medical, Chaplain) for affected Marines",
              "Provide final verification to higher headquarters that accountability is complete",
            ],
          },
        ],
      },
      {
        title: "Common Pitfalls to Avoid",
        steps: [
          {
            step: "Not Keeping MOL Contact Info Current",
            details: [
              "If your phone number or address is outdated, your command cannot reach you",
              "Update your Personal Contact Information in MOL proactively, not during a disaster",
            ],
          },
          {
            step: "Assuming Someone Else Will Report for You",
            details: [
              "You are responsible for your own accountability",
              "Don't assume your spouse, roommate, or friend will notify your command",
            ],
          },
          {
            step: "Forgetting Dependents",
            details: [
              "Your family members are part of the Marine Corps family",
              "If they are in a disaster area, report their status even if you are not affected",
            ],
          },
          {
            step: "Waiting for Perfect Information",
            details: [
              "Report your status as soon as possible, even if incomplete",
              "You can update your status as the situation evolves",
              "'Something' is better than nothing—silence is interpreted as 'Unaccounted'",
            ],
          },
        ],
      },
      {
        title: "What Happens After You Check In",
        steps: [
          {
            step: "Your Status is Visible to Your Chain of Command",
            details: [
              "Your leader, Admin, and Commander can see that you have reported",
              "This removes you from the 'Unaccounted' list and allows them to focus on others",
            ],
          },
          {
            step: "Follow-Up if Needed",
            details: [
              "If you reported 'Injured' or 'Evacuated,' expect a follow-up call from your command",
              "They may provide assistance resources or coordinate support",
            ],
          },
          {
            step: "Update as Situation Changes",
            details: [
              "If your status changes (e.g., you evacuate after initially sheltering), update your report",
              "Keep your command informed throughout the disaster event",
            ],
          },
        ],
      },
    ],
  },
};
