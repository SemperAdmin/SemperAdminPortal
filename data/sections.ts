export type SectionItem = {
  title: string;
  slug?: string;
  desc: string;
  isRef?: boolean; // Cross-reference to primary location
};

export type SectionGroup = {
  title: string;
  items: SectionItem[];
};

export type Section = {
  title: string;
  intro?: string;
  groups?: SectionGroup[];
};

export const SECTIONS: Record<string, Section> = {
  // ============================================
  // MAIN SECTIONS (Alphabetical Order)
  // ============================================

  "dependency-management": {
    title: "Dependency Management",
    intro: "Comprehensive guidance for managing dependent status changes throughout your Marine Corps career. From adding new dependents to updating records and navigating special programs, find step-by-step procedures and required documentation.",
    groups: [
      {
        title: "Adding Dependents",
        items: [
          { title: "Marriage Documentation", slug: "marriage-documentation", desc: "Register your marriage and add your spouse to DEERS" },
          { title: "Birth/Adoption of Children", slug: "birth-adoption-of-children", desc: "Add newborn or adopted children to your records" },
          { title: "Stepchildren Addition", slug: "stepchildren-addition", desc: "Add stepchildren to DEERS and update benefits" },
          { title: "Secondary Dependents", slug: "secondary-dependents", desc: "Add parents or other eligible secondary dependents" },
        ],
      },
      {
        title: "Removing/Changing Dependents",
        items: [
          { title: "Divorce/Legal Separation", slug: "divorce-legal-separation", desc: "Update records after divorce or legal separation" },
          { title: "Death of Dependents", slug: "death-of-dependents", desc: "Process dependent death and update records" },
          { title: "Adult Children (Age 21+)", slug: "adult-children-age-21", desc: "Manage dependent status when children reach adulthood" },
        ],
      },
      {
        title: "Special Programs & Updates",
        items: [
          { title: "Family Care Plan (FCP)", slug: "family-care-plan", desc: "Establish care plans for single parents and dual-military" },
          { title: "Exceptional Family Member Program", slug: "efmp", desc: "Enrollment and support for special needs dependents" },
          { title: "Emergency Contact Updates", slug: "emergency-contact-updates", desc: "Update DD 93, SGLI, and emergency contacts" },
          { title: "Dependent ID Card Updates", slug: "dependent-id-card-updates", desc: "Renew or replace dependent ID cards" },
          { title: "Command Sponsorship (OCONUS)", slug: "command-sponsorship-oconus", desc: "Request command sponsorship for overseas assignments" },
        ],
      },
    ],
  },

  "deployment-support": {
    title: "Deployment Support",
    intro: "Comprehensive guidance for all administrative actions required before, during, and after operational deployments. Proper preparation ensures you and your family are protected, your pay and entitlements are correct, and your transition back home goes smoothly.",
    groups: [
      {
        title: "Pre-Deployment",
        items: [
          { title: "Deployment Orders", slug: "deployment-orders", desc: "Verify your deployment orders are accurate" },
          { title: "Medical Readiness", slug: "medical-readiness", desc: "Meet all medical requirements for deployment" },
          { title: "Dental Readiness", slug: "dental-readiness", desc: "Achieve deployable dental status (Class 1 or 2)" },
          { title: "Family Care Plan Validation", slug: "family-care-plan-validation", desc: "Ensure your dependent care plan is current and validated", isRef: true },
          { title: "Power of Attorney", slug: "power-of-attorney", desc: "Grant legal authority to someone while deployed", isRef: true },
          { title: "SGLI Beneficiary Updates", slug: "sgli-beneficiary-updates", desc: "Ensure your life insurance beneficiaries are current", isRef: true },
          { title: "Will Preparation", slug: "will-preparation", desc: "Create or update your will before deployment", isRef: true },
        ],
      },
      {
        title: "During Deployment",
        items: [
          { title: "HFP/IDP Verification", slug: "hfp-idp-verification", desc: "Verify Hostile Fire and Imminent Danger Pay on your LES" },
          { title: "FSA Processing", slug: "fsa-processing", desc: "Receive FSA when separated from dependents over 30 days" },
          { title: "Dependent Support Services", slug: "dependent-support-services", desc: "Connect your family with support during deployment" },
          { title: "Emergency Leave Requests", slug: "emergency-leave-requests", desc: "Return home for family emergencies during deployment" },
        ],
      },
      {
        title: "Post-Deployment",
        items: [
          { title: "Reintegration Processing", slug: "reintegration-processing", desc: "Complete required actions when returning from deployment" },
          { title: "Pay Entitlement Verification", slug: "pay-entitlement-verification", desc: "Verify your pay is correct after returning" },
          { title: "Leave Accrual Review", slug: "leave-accrual-review", desc: "Check your leave balance after deployment" },
        ],
      },
    ],
  },

  "education-training": {
    title: "Education & Training",
    intro: "Education and training opportunities enhance your military effectiveness and prepare you for career advancement. The Marine Corps invests in your professional development through military schools, tuition assistance, and credentialing programs. Taking advantage of these programs improves your promotion competitiveness, expands your skills, and prepares you for post-military success.",
    groups: [
      {
        title: "Military Education",
        items: [
          { title: "Professional Military Education (PME)", slug: "pme", desc: "Complete required PME for promotion eligibility" },
          { title: "Resident and Non-Resident Schools", slug: "resident-non-resident-schools", desc: "Military education delivery formats and school options" },
          { title: "Command and Staff College", slug: "command-staff-college", desc: "Intermediate-level PME for field grade officers and senior enlisted" },
          { title: "War College", slug: "war-college", desc: "Senior-level PME for strategic leadership development" },
          { title: "MOS-Specific Training", slug: "mos-specific-training", desc: "Technical proficiency training for your occupational specialty" },
        ],
      },
      {
        title: "Civilian Education",
        items: [
          { title: "Tuition Assistance (TA)", slug: "tuition-assistance", desc: "Fund college courses while on active duty" },
          { title: "GI Bill Benefits", slug: "gi-bill-benefits", desc: "Post-9/11 and Montgomery GI Bill education benefits" },
          { title: "Post-9/11 GI Bill Transfer", slug: "gi-bill-transfer", desc: "Transfer education benefits to spouse or children" },
          { title: "Joint Services Transcript (JST)", slug: "jst", desc: "Convert military training to college credit" },
          { title: "College Credit for Military Training", slug: "college-credit-military", desc: "Maximize credit through CLEP, DSST, and portfolio assessment" },
        ],
      },
      {
        title: "Professional Development",
        items: [
          { title: "Credentialing Programs", slug: "credentialing-programs", desc: "Obtain civilian certifications through Marine Corps COOL" },
          { title: "Certification Reimbursement", slug: "certification-reimbursement", desc: "Get reimbursed for professional certification costs" },
          { title: "Language Training (DLPT)", slug: "language-training-dlpt", desc: "Develop language proficiency and earn FLPP" },
          { title: "Technical Certifications", slug: "technical-certifications", desc: "Industry certifications in IT, aviation, automotive, and more" },
        ],
      },
      {
        title: "Training Records",
        items: [
          { title: "Training Record Updates", slug: "training-record-updates", desc: "Update and maintain training documentation" },
          { title: "Education Records", slug: "education-records", desc: "Manage education documentation in your official record" },
        ],
      },
    ],
  },

  "life-events": {
    title: "Life Events",
    intro: "Major life events require specific administrative actions within set timelines. These step-by-step guides walk you through everything you need to do, when to do it, and what documents you'll need. Complete each checklist to ensure you receive all entitled benefits.",
    groups: [
      {
        title: "Family Changes",
        items: [
          { title: "Getting Married", slug: "getting-married", desc: "Add your spouse to DEERS, update BAH, and complete all required documentation" },
          { title: "Having a Baby", slug: "having-a-baby", desc: "Register your child, update DEERS and SGLI, and claim all entitled benefits" },
        ],
      },
      {
        title: "Moves & Assignments",
        items: [
          { title: "PCS Move", slug: "pcs-move", desc: "Complete checkout, arrange household goods shipment, and check in at new duty station" },
          { title: "Deploying", slug: "deploying", desc: "Verify readiness, update legal documents, and ensure family is prepared" },
        ],
      },
      {
        title: "Career Transitions",
        items: [
          { title: "Getting Out (EAS)", slug: "getting-out", desc: "Complete TAPS, final checkout, and transition to civilian life" },
          { title: "Buying a Home", slug: "buying-a-home", desc: "Use VA loan benefits, navigate BAH considerations, and complete the purchase" },
        ],
      },
    ],
  },

  "insurance-healthcare": {
    title: "Insurance & Healthcare",
    intro: "Insurance and healthcare benefits protect you and your family from financial hardship due to death, injury, or medical expenses. Understanding your coverage options ensures you have adequate protection and can make informed decisions about optional benefits.",
    groups: [
      {
        title: "Life Insurance",
        items: [
          { title: "SGLI (Servicemembers' Group Life Insurance)", slug: "sgli", desc: "Low-cost group life insurance up to $500,000" },
          { title: "FSGLI (Family SGLI)", slug: "fsgli", desc: "Life insurance for spouse and dependent children" },
          { title: "TSGLI (Traumatic Injury)", slug: "tsgli", desc: "Payment for traumatic injuries resulting in qualifying losses" },
          { title: "VGLI (Veterans' Group Life Insurance)", slug: "vgli", desc: "Convert SGLI to veteran life insurance after separation" },
          { title: "Beneficiary Updates", slug: "beneficiary-updates", desc: "Keep your life insurance beneficiaries current" },
        ],
      },
      {
        title: "Healthcare Benefits",
        items: [
          { title: "TRICARE Enrollment", slug: "tricare-enrollment", desc: "Enroll dependents in TRICARE healthcare coverage" },
          { title: "Healthcare FSA (HCFSA)", slug: "hcfsa", desc: "Pre-tax dollars for eligible medical expenses" },
          { title: "EFMP Medical Screening", slug: "efmp-medical-screening", desc: "Medical screening for Exceptional Family Member Program", isRef: true },
          { title: "Dental Coverage (FEDVIP)", slug: "dental-coverage-fedvip", desc: "Dental insurance for family members through FEDVIP" },
          { title: "Vision Coverage", slug: "vision-coverage", desc: "Vision insurance through FEDVIP for eye exams and eyewear" },
        ],
      },
    ],
  },

  "legal-disciplinary": {
    title: "Legal & Disciplinary",
    intro: "Legal and disciplinary administration for commanders and administrative personnel. Covers non-judicial punishment processing, administrative investigations, court-martial support, legal assistance programs, and victim witness assistance. Ensures proper documentation of disciplinary actions while protecting due process rights.",
    groups: [
      {
        title: "Administrative Actions",
        items: [
          { title: "NJP / Article 15", slug: "njp-article-15", desc: "Non-Judicial Punishment processing and Unit Punishment Book" },
          { title: "Punitive Letters of Reprimand", slug: "punitive-letters-reprimand", desc: "PLOR drafting and filing determinations" },
          { title: "Page 11 Counseling", slug: "page-11-counseling", desc: "Administrative Remarks entry requirements" },
          { title: "Administrative Investigations", slug: "administrative-investigations", desc: "Command investigation support and documentation" },
          { title: "Rank Reduction", slug: "rank-reduction", desc: "Administrative and punitive reduction in rank procedures" },
        ],
      },
      {
        title: "Legal Support",
        items: [
          { title: "Court-Martial Support", slug: "court-martial-support", desc: "Unit-level administrative support for judicial proceedings" },
          { title: "Legal Assistance", slug: "legal-assistance", desc: "Free legal services for personal civil matters" },
          { title: "Power of Attorney", slug: "power-of-attorney", desc: "Grant legal authority to act on your behalf" },
          { title: "Will Preparation", slug: "will-preparation", desc: "Create or update your legal will" },
          { title: "Victim Witness Assistance (VWAP)", slug: "vwap", desc: "Victim and Witness Assistance Program support" },
          { title: "Military Protective Orders", slug: "military-protective-orders", desc: "MPO processing and NCIC registration" },
          { title: "IG Complaints", slug: "ig-complaints", desc: "Inspector General complaint procedures" },
        ],
      },
    ],
  },

  "pay-allowances": {
    title: "Pay & Allowances",
    intro: "Your pay supports your mission and your family. This page explains each type of pay and allowance, what documents you need to provide, and how to take action.",
    groups: [
      {
        title: "Basic Allowances",
        items: [
          { title: "Basic Allowance for Housing", slug: "basic-allowance-for-housing", desc: "Pay for off-base housing based on rank, location, and dependents" },
          { title: "Basic Allowance for Subsistence", slug: "basic-allowance-for-subsistence", desc: "Monthly food allowance for all Marines" },
          { title: "Cost of Living Allowance", slug: "cost-of-living-allowance", desc: "Additional pay for high-cost duty locations" },
          { title: "Overseas Housing Allowance", slug: "overseas-housing-allowance", desc: "Housing allowance for OCONUS assignments" },
        ],
      },
      {
        title: "Special & Incentive Pay",
        items: [
          { title: "Demolition Pay", slug: "demolition-pay", desc: "Pay for explosive ordnance disposal" },
          { title: "Dive Pay", slug: "dive-pay", desc: "Compensation for diving duties" },
          { title: "Experimental Stress Duty", slug: "experimental-stress-duty", desc: "Rate: $150/month. Covers human test subject operations." },
          { title: "Flight Pay (ACIP)", slug: "aviation-career-incentive-pay", desc: "Monthly pay for aviators" },
          { title: "Flight Deck Duty", slug: "flight-deck-duty", desc: "Operations on aircraft carriers and air-capable ships. Rate: $150/month." },
          { title: "Foreign Language Proficiency Bonus (FLPB)", slug: "foreign-language-proficiency-bonus", desc: "Bonus for foreign language proficiency" },
          { title: "Hardship Duty Pay (HDP)", slug: "hardship-duty-pay", desc: "$50–$150/month for difficult living conditions at duty station" },
          { title: "Parachute Duty", slug: "parachute-duty-pay", desc: "$150/month. Military Free Fall (MFF/HALO): $225/month." },
          { title: "Maritime VBSS Duty", slug: "maritime-vbss-duty", desc: "Rate: $150/month. Visit, Board, Search, and Seizure operations." },
          { title: "Special Duty Assignment Pay (SDAP)", slug: "sdap", desc: "Pay for challenging billets" },
          { title: "Special Operations", slug: "special-operations-pay", desc: "Rate: $150/month. Specialized high-risk operations." },
          { title: "Toxic Materials Duty", slug: "toxic-materials-duty", desc: "Rate: $150/month per duty type. Handling toxic materials." },
        ],
      },
      {
        title: "Deployment & Hardship Pay",
        items: [
          { title: "Family Separation Allowance", slug: "family-separation-allowance", desc: "$300/month when separated from dependents 30+ days" },
          { title: "Hostile Fire Pay", slug: "hostile-fire-pay", desc: "$225/month for exposure to hostile fire or mine explosions" },
          { title: "Imminent Danger Pay", slug: "imminent-danger-pay", desc: "$7.50/day up to $225/month; designated danger areas" },
          { title: "Savings Deposit Program (SDP)", slug: "savings-deposit-program", desc: "Earn 10% interest on deployment savings up to $10,000" },
        ],
      },
      {
        title: "Retirement & Career Incentives",
        items: [
          { title: "Blended Retirement System", slug: "blended-retirement-system", desc: "Modern retirement combining pension and TSP matching" },
          { title: "Continuation Pay", slug: "continuation-pay", desc: "One-time mid-career bonus at 8–12 years for 4-year commitment" },
          { title: "Legacy High-3 Traditional Plan", slug: "legacy-high-3-retirement-system", desc: "Pre-2018 retirement at 2.5% per year of service" },
          { title: "Thrift Savings Plan", slug: "thrift-savings-plan", desc: "Military 401k with automatic 1% plus up to 4% matching" },
          { title: "Transfer of Educational Benefits", slug: "transfer-of-educational-benefits", desc: "Transfer your GI Bill benefits to spouse or dependents" },
        ],
      },
      {
        title: "Tax Benefits & Flexible Spending",
        items: [
          { title: "Combat Zone Tax Exclusion", slug: "combat-zone-tax-exclusion", desc: "Tax-free pay while serving in designated combat zones" },
          { title: "Flexible Spending Accounts", slug: "flexible-spending-accounts", desc: "Save up to $2,850 pre-tax for healthcare and childcare" },
          { title: "State Tax Relief", slug: "military-state-tax-relief", desc: "Exemption from state income tax based on legal residence" },
        ],
      },
      {
        title: "Financial Management & Pay Problems",
        items: [
          { title: "Allotments", slug: "allotments", desc: "Set up automatic payments" },
          { title: "Basic Needs Allowance (BNA)", slug: "basic-needs-allowance", desc: "Support for low-income families" },
          { title: "Debt Management", slug: "debt-management", desc: "Repay military debts" },
          { title: "Financial Hardship Assistance", slug: "financial-hardship-assistance", desc: "Get help during emergencies" },
          { title: "Overpayment Repayment Plans", slug: "overpayment-repayment-plans", desc: "Set up payment arrangements" },
        ],
      },
    ],
  },

  "personnel-administration": {
    title: "Personnel Administration",
    intro: "Comprehensive guidance for all personnel administration actions throughout your Marine Corps career. From check-in procedures to records management, find step-by-step procedures and required documentation.",
    groups: [
      {
        title: "Inbound Processing",
        items: [
          { title: "Check-In Procedures", slug: "check-in-procedures", desc: "Step-by-step guide for reporting to your new command" },
          { title: "Sponsorship Programs", slug: "sponsorship-programs", desc: "Unit sponsorship program requirements and responsibilities" },
          { title: "Initial BAH/BAS Verification", slug: "initial-bah-bas-verification", desc: "Verify and establish housing and subsistence allowances" },
          { title: "Records Review", slug: "records-review", desc: "Review and update personnel records upon check-in" },
          { title: "Security Clearance Transfer", slug: "security-clearance-transfer", desc: "Transfer and verify security clearance to new command" },
        ],
      },
      {
        title: "Outbound Processing",
        items: [
          { title: "Checkout Procedures", slug: "checkout-procedures", desc: "Complete checkout requirements before departing command" },
          { title: "Final Pay Settlement", slug: "final-pay-settlement", desc: "Ensure accurate final pay and entitlements" },
          { title: "Records Transfer", slug: "records-transfer", desc: "Transfer service records to gaining command or archive" },
          { title: "Leave Settlement", slug: "leave-settlement", desc: "Settle leave balance and terminal leave processing" },
        ],
      },
      {
        title: "Awards & Recognition",
        items: [
          { title: "Awards and Decorations", slug: "awards-decorations", desc: "Processing and documenting military awards" },
        ],
      },
    ],
  },

  "promotions-career-progression": {
    title: "Promotions & Career Progression",
    intro: "Comprehensive guidance for promotions, evaluations, and career progression within the Marine Corps. From JEPES scores to selection boards, find step-by-step procedures for advancement and MOS management.",
    groups: [
      {
        title: "Promotion System",
        items: [
          { title: "Promotion Documentation", slug: "promotion-documentation", desc: "Required documentation for promotion eligibility and processing" },
          { title: "EPME Requirements", slug: "epme-requirements", desc: "Know your required and recommended Professional Military Education by grade" },
          { title: "JEPES (Performance Evaluation)", slug: "jepes", desc: "Understanding the JEPES evaluation system and scores" },
          { title: "Cutting Score Verification", slug: "cutting-score-verification", desc: "Verify composite scores and cutting score requirements" },
          { title: "Promotion Warrants", slug: "promotion-warrants", desc: "Processing and documenting promotion warrants" },
          { title: "Meritorious Promotions", slug: "meritorious-promotions", desc: "Commander-initiated promotion programs and requirements" },
        ],
      },
      {
        title: "Time in Grade & Rank",
        items: [
          { title: "TIG Corrections", slug: "tig-corrections", desc: "Correcting Time in Grade calculation errors", isRef: true },
          { title: "Date of Rank Corrections", slug: "date-of-rank-corrections", desc: "Correcting errors in Date of Rank records", isRef: true },
          { title: "Frocking", slug: "frocking", desc: "Wearing rank before promotion effective date" },
        ],
      },
      {
        title: "Performance Evaluations",
        items: [
          { title: "Fitness Reports", slug: "fitness-reports", desc: "Understanding and reviewing fitness reports for SNCOs" },
          { title: "PERB (Fitness Report Appeals)", slug: "perb", desc: "Appeal fitness reports through the Performance Evaluation Review Board" },
        ],
      },
      {
        title: "MOS Management",
        items: [
          { title: "MOS Changes (Lateral Moves)", slug: "mos-changes-lateral-moves", desc: "Voluntary MOS changes through lateral move programs" },
          { title: "MOS Reclassification", slug: "mos-reclassification", desc: "Involuntary MOS changes due to force shaping" },
          { title: "Additional MOS Assignment", slug: "additional-mos-assignment", desc: "Adding additional MOSs through training or experience" },
          { title: "Primary MOS Changes", slug: "primary-mos-changes", desc: "Changing your primary MOS designation" },
        ],
      },
    ],
  },

  "records-corrections": {
    title: "Records & Corrections",
    intro: "Official military records document your entire career and affect pay, benefits, promotions, and veteran status. Maintaining accurate records and correcting errors promptly protects your entitlements and ensures your service is properly documented. This section covers official record management and correction procedures through administrative and board processes.",
    groups: [
      {
        title: "Official Records",
        items: [
          { title: "Official Military Personnel File (OMPF)", slug: "ompf-management", desc: "Understanding and managing your official personnel file" },
          { title: "Service Record Book (SRB) Corrections", slug: "srb-corrections", desc: "Correcting errors in your service record book" },
          { title: "Medical Records", slug: "medical-records", desc: "Maintaining and accessing medical documentation" },
          { title: "Training Jackets", slug: "training-jackets", desc: "Training records and professional military education documentation" },
        ],
      },
      {
        title: "Record Corrections",
        items: [
          { title: "TIG Corrections", slug: "tig-corrections", desc: "Correcting Time in Grade calculation errors" },
          { title: "Date of Rank Corrections", slug: "date-of-rank-corrections", desc: "Correcting errors in Date of Rank records" },
          { title: "Page 11 Entries (Administrative Remarks)", slug: "page-11-entries", desc: "Administrative remarks and counseling documentation" },
        ],
      },
      {
        title: "Correction Boards",
        items: [
          { title: "Board for Correction of Naval Records (BCNR)", slug: "bcnr", desc: "Request correction of military records through formal board process" },
          { title: "PERB (Performance Evaluation Review Board)", slug: "perb", desc: "Appeal fitness reports through PERB", isRef: true },
        ],
      },
    ],
  },

  "reserve-mobilization": {
    title: "Reserve & Mobilization",
    intro: "Reserve administration and mobilization guidance for Selected Marine Corps Reserve (SMCR), Individual Mobilization Augmentees (IMA), Individual Ready Reserve (IRR), and Active Reserve (AR) Marines. Understand duty status categories, training requirements, retirement points, and activation procedures to effectively manage your Reserve career and meet readiness requirements.",
    groups: [
      {
        title: "Reserve Administration",
        items: [
          { title: "Reserve Duty Status", slug: "reserve-duty-status", desc: "Understand your assignment category within the Marine Corps Reserve" },
          { title: "Inactive Duty for Training (IDT) Pay", slug: "idt-pay", desc: "Earn pay and retirement points during scheduled drill periods" },
          { title: "Annual Training (AT) Orders", slug: "annual-training-orders", desc: "Complete your mandatory annual active duty training requirement" },
          { title: "Retirement Points", slug: "retirement-points", desc: "Track points to qualify for Reserve retirement" },
          { title: "Reserve Promotion System", slug: "reserve-promotion-system", desc: "Advance through cutting scores, selection boards, and meritorious promotions" },
        ],
      },
      {
        title: "Mobilization/Activation",
        items: [
          { title: "Mobilization Orders", slug: "mobilization-orders", desc: "Involuntary activation authorities and processing requirements" },
          { title: "Active Duty for Operational Support (ADOS)", slug: "ados", desc: "Volunteer for active duty tours supporting AC or RC missions" },
          { title: "Active Duty for Special Work (ADSW)", slug: "adsw", desc: "Specialized duty beyond normal training requirements" },
          { title: "Active Duty for Training (ADT)", slug: "adt", desc: "Complete required training on active duty orders" },
          { title: "Demobilization Processing", slug: "demobilization-processing", desc: "Transition from mobilization back to Reserve status" },
        ],
      },
    ],
  },

  "separations-transitions": {
    title: "Separations & Transitions",
    intro: "Separations and transitions mark the end of active duty service and the beginning of civilian or retired life. Proper planning and completion of required actions ensures you receive all earned benefits, maintain eligibility for VA services, and successfully transition to your next chapter. Start transition planning early to maximize opportunities and avoid delays.",
    groups: [
      {
        title: "Voluntary Separation",
        items: [
          { title: "End of Active Service (EAS)", slug: "eas", desc: "Plan your separation at contract expiration" },
          { title: "Voluntary Early Release", slug: "voluntary-early-release", desc: "Separate before EAS for education, employment, or hardship" },
          { title: "Resignation (Officers)", slug: "resignation-officers", desc: "Officer resignation process and service obligations" },
        ],
      },
      {
        title: "Involuntary Separation",
        items: [
          { title: "Administrative Separation", slug: "administrative-separation", desc: "Involuntary separation proceedings and due process" },
          { title: "Medical Separation/Retirement", slug: "medical-separation", desc: "IDES process for medical conditions" },
          { title: "Failure to Meet Standards", slug: "failure-to-meet-standards", desc: "Separation for fitness, weight, or performance failures" },
          { title: "Entry-Level Separation", slug: "entry-level-separation", desc: "Separation within first 180 days of service" },
        ],
      },
      {
        title: "Retirement",
        items: [
          { title: "Active Duty Retirement", slug: "active-duty-retirement", desc: "Retire after 20+ years of active service" },
          { title: "Reserve Retirement", slug: "reserve-retirement", desc: "Retire after 20 qualifying years of reserve service" },
          { title: "Medical Retirement", slug: "medical-retirement", desc: "Retire due to disability rating of 30% or higher" },
          { title: "Temporary Disability Retired List (TDRL)", slug: "tdrl", desc: "Temporary retirement for unstable conditions" },
          { title: "Survivor Benefit Plan (SBP) Elections", slug: "sbp-elections", desc: "Protect your family with SBP coverage at retirement" },
          { title: "Combat-Related Special Compensation (CRSC)", slug: "crsc", desc: "Tax-free compensation for combat-related disabilities" },
        ],
      },
      {
        title: "Transition Programs",
        items: [
          { title: "Transition Assistance Program (TAP)", slug: "tap", desc: "Complete mandatory transition workshops" },
          { title: "Veterans Affairs (VA) Benefits", slug: "va-benefits", desc: "Access earned veterans benefits" },
          { title: "Employment Assistance", slug: "employment-assistance", desc: "Find civilian employment after service" },
          { title: "Education Benefits Transfer", slug: "education-benefits-transfer", desc: "Transfer GI Bill to family before separating" },
          { title: "SkillBridge Program", slug: "skillbridge", desc: "Gain civilian work experience before separation" },
        ],
      },
    ],
  },

  "travel-transportation": {
    title: "Travel & Transportation",
    intro: "This page covers all travel entitlements and transportation support for Marines. Whether you are moving to a new duty station, going on temporary duty, or need to understand your travel benefits, you will find guidance and resources here.",
    groups: [
      {
        title: "Permanent Change of Station (PCS)",
        items: [
          { title: "PCS Orders Processing", slug: "pcs-orders-processing", desc: "How to receive, review, and execute your PCS orders" },
          { title: "Household Goods (HHG) Shipment", slug: "household-goods-shipment", desc: "Government-arranged shipping of your belongings to new duty station" },
          { title: "Personally Procured Move (PPM/DITY)", slug: "personally-procured-move", desc: "Move yourself and get reimbursed for authorized expenses" },
          { title: "Storage", slug: "pcs-storage-entitlements", desc: "Short-term and long-term storage options during PCS" },
          { title: "Dislocation Allowance (DLA)", slug: "dislocation-allowance", desc: "One-time payment to offset moving costs based on rank and dependents" },
          { title: "Temporary Lodging Expense (TLE)", slug: "temporary-lodging-expense", desc: "Reimbursement for lodging during PCS transition periods" },
          { title: "Vehicle Processing and Storage", slug: "vehicle-processing-storage", desc: "Ship or store your POV during OCONUS assignments" },
        ],
      },
      {
        title: "Temporary Duty (TAD/TDY)",
        items: [
          { title: "TAD Orders", slug: "tad-orders", desc: "Temporary additional duty orders for training, missions, or assignments" },
          { title: "Per Diem Rates", slug: "per-diem-rates", desc: "Daily allowance for lodging, meals, and incidentals while traveling" },
          { title: "Travel Voucher Submission (DD 1351-2)", slug: "travel-voucher-submission", desc: "How to complete and submit your travel claim for reimbursement" },
          { title: "Defense Travel System (DTS)", slug: "dts-authorization", desc: "Creating and routing travel authorizations in DTS", isRef: true },
        ],
      },
      {
        title: "Transportation Entitlements",
        items: [
          { title: "Government Travel Charge Card (GTCC)", slug: "government-travel-charge-card", desc: "Mandatory card for official travel expenses", isRef: true },
          { title: "Mileage Reimbursement", slug: "mileage-reimbursement", desc: "POV mileage rates and reimbursement procedures" },
          { title: "Advance Travel Pay", slug: "advance-travel-pay", desc: "Request advance funds before official travel" },
          { title: "Leave En Route Travel", slug: "leave-en-route-travel", desc: "Taking authorized leave during PCS travel" },
        ],
      },
    ],
  },

  "marine-online": {
    title: "Marine Online (MOL)",
    intro: "Marine Online is the primary self-service web portal for all Marines. Access your personnel records, submit leave requests, view LES, update personal information, and manage administrative actions. MOL is your gateway to managing your Marine Corps career.",
    groups: [
      {
        title: "Account Access",
        items: [
          { title: "MOL Login & CAC Setup", slug: "mol-login-cac-setup", desc: "Access MOL using your CAC and troubleshoot login issues" },
          { title: "Password & PIN Reset", slug: "mol-password-pin-reset", desc: "Reset your MOL password or CAC PIN" },
        ],
      },
      {
        title: "Personnel Records",
        items: [
          { title: "View Your OMPF", slug: "mol-view-ompf", desc: "Access your Official Military Personnel File" },
          { title: "Update Personal Information", slug: "mol-update-personal-info", desc: "Change address, phone, emergency contacts, and other personal data" },
        ],
      },
      {
        title: "Leave Management",
        items: [
          { title: "Submit Leave Request", slug: "mol-submit-leave", desc: "Request annual, emergency, or special leave through MOL" },
          { title: "Check Leave Balance", slug: "mol-leave-balance", desc: "View your current leave balance and projected earnings" },
          { title: "Cancel Leave Request", slug: "mol-cancel-leave", desc: "Cancel or modify a pending leave request" },
        ],
      },
      {
        title: "Administrative Actions",
        items: [
          { title: "Submit an EPAR", slug: "mol-epar", desc: "Submit personnel and administrative requests through your chain of command" },
          { title: "Submit a Trouble Ticket", slug: "mol-trouble-ticket-system", desc: "Report system issues or request access through the Trouble Ticket System" },
          { title: "Dependency Updates", slug: "mol-dependency-updates", desc: "Add, remove, or update dependent information" },
          { title: "Address Changes", slug: "mol-address-changes", desc: "Update your home of record and mailing address" },
        ],
      },
      {
        title: "Administration & Reference",
        items: [
          { title: "Functional Modules", slug: "mol-functional-modules", desc: "Complete reference of all MOL functional modules with capabilities and authorized users" },
          { title: "Battalion Organization Permissions", slug: "mol-battalion-permissions", desc: "Complete reference for battalion-level MOL permissions and system templates" },
        ],
      },
    ],
  },

  // ============================================
  // ADMIN-ONLY SECTIONS
  // ============================================

  "s1-g1-administration": {
    title: "S-1 / G-1 Administration",
    intro: "S-1 / G-1 (Administration Section) Handles all personnel administration and manpower functions. Manages pay, leave, promotions, awards, and official correspondence. Maintains service records and ensures compliance with personnel policies and reporting requirements. Serves as the command's administrative hub and liaison with higher headquarters for manpower actions.",
  },

  "pac-personnel-admin-center": {
    title: "PAC (Personnel Admin Center)",
    intro: "PAC-specific resources for personnel administration centers supporting commands and units.",
  },

  "ii-i-staff-administration": {
    title: "I&I Staff Administration",
    intro: "Inspector-Instructor staff administration resources for supporting reserve units.",
  },

  // ============================================
  // LEADER-SPECIFIC SECTIONS
  // ============================================

  "leaders-accountability-discipline": {
    title: "Accountability & Discipline",
    intro: "This section helps SNCOs, Warrant Officers, and Company/Field Grade Officers manage accountability and disciplinary processes. Understand your authority levels, documentation requirements, and legal responsibilities to ensure fair and consistent treatment of Marines while protecting their rights.",
    groups: [
      {
        title: "Non-Judicial Punishment",
        items: [
          { title: "Understanding NJP Authority Levels", slug: "njp-authority-levels", desc: "Know what NJP authority you have based on your billet and rank" },
          { title: "Leader Role in NJP Recommendation", slug: "njp-recommendation-documentation", desc: "How to recommend and document NJP actions" },
          { title: "Article 31(b) Rights and Responsibilities", slug: "article-31b-rights", desc: "Understanding rights advisement and leader responsibilities" },
          { title: "Progressive Discipline Framework", slug: "progressive-discipline", desc: "Escalating corrective actions before formal punishment" },
        ],
      },
      {
        title: "Disciplinary Documentation",
        items: [
          { title: "Page 11 vs 6105 Decision Guide", slug: "page11-vs-6105-decision-guide", desc: "When to use Page 11 entries vs 6105 counseling warnings" },
          { title: "Counseling Refusal Procedures", slug: "counseling-refusal-procedures", desc: "How to handle Marines who refuse to sign documents" },
        ],
      },
      {
        title: "Accountability Actions",
        items: [
          { title: "UA and Desertion Reporting", slug: "ua-desertion-reporting", desc: "Timelines and procedures for unauthorized absence reporting" },
          { title: "Administrative Separation Overview", slug: "adsep-overview", desc: "Understanding the ADSEP process and leader involvement" },
          { title: "Legal Hold and Investigation Support", slug: "legal-hold-investigations", desc: "Supporting legal holds and command investigations" },
          { title: "Hazing and Harassment Reporting", slug: "hazing-harassment-reporting", desc: "Recognizing, reporting, and preventing hazing and harassment" },
        ],
      },
    ],
  },

  "leaders-awards-recognition": {
    title: "Awards & Recognition",
    intro: "Recognizing Marines for their achievements is a critical leadership responsibility. This section covers how to write effective award recommendations, navigate the approval process, and avoid common errors that delay or derail recognition.",
    groups: [
      {
        title: "Writing Awards",
        items: [
          { title: "Writing Effective Award Recommendations", slug: "writing-award-recommendations", desc: "Crafting compelling narratives that justify the award level" },
          { title: "Citation Format Requirements", slug: "citation-format-requirements", desc: "Format standards by award type and approval authority" },
          { title: "Common Award Package Errors", slug: "common-award-errors", desc: "Avoid mistakes that delay or reject award packages" },
        ],
      },
      {
        title: "Processing Awards",
        items: [
          { title: "iAPS Submission Process", slug: "iaps-submission", desc: "Step-by-step guidance for submitting awards in iAPS" },
          { title: "Award Routing and Approval Authority", slug: "award-routing-approval", desc: "Understanding the chain of approval for different award levels" },
          { title: "Timeline Management", slug: "award-timeline-management", desc: "Planning ahead for PCS, retirement, and end-of-tour awards" },
          { title: "Award Troubleshooting (Stuck Awards)", slug: "award-troubleshooting", desc: "Identifying and resolving common issues with delayed awards" },
        ],
      },
    ],
  },

  "leaders-career-development": {
    title: "Career Development",
    intro: "This section helps line leaders understand your role in developing subordinates' careers. You do not make retention decisions or approve commissioning packages. You identify talent, mentor Marines on career options, prepare them for boards and programs, and ensure they meet administrative prerequisites.",
    groups: [
      {
        title: "Reenlistment & Retention",
        items: [
          { title: "Supporting Reenlistment Decisions", slug: "supporting-reenlistment-decisions", desc: "FTAP/STAP processes, JEPES, boatspaces, and leader responsibilities" },
          { title: "Lateral Move Guidance", slug: "lateral-move-guidance", desc: "When and how Marines can change their PMOS" },
        ],
      },
      {
        title: "Education & Advancement",
        items: [
          { title: "PME Tracking and Completion", slug: "pme-tracking-completion", desc: "DEP and resident course requirements by grade" },
          { title: "Meritorious Promotion Preparation", slug: "meritorious-promotion-preparation", desc: "Quarterly boards, quotas, and preparing Marines to compete" },
        ],
      },
      {
        title: "Special Duty & Programs",
        items: [
          { title: "Special Duty Assignment Screening", slug: "special-duty-assignment-screening", desc: "HSST screening, SDAs, and RE-3O consequences" },
          { title: "Enlisted Commissioning Programs", slug: "enlisted-commissioning-programs", desc: "ECP, MECEP, and MCP pathways to becoming an officer" },
          { title: "Warrant Officer Program Support", slug: "warrant-officer-program-support", desc: "Application process and technical qualification requirements" },
        ],
      },
    ],
  },

  "leaders-counseling-documentation": {
    title: "Counseling & Documentation",
    intro: "MCO 1500.61 establishes the Marine Leader Development framework. This section covers the Six Functional Areas, SMART goals, counseling fundamentals, and documentation practices that help leaders develop their Marines holistically.",
    groups: [
      {
        title: "Marine Leader Development Framework",
        items: [
          { title: "The Six Functional Areas", slug: "six-functional-areas", desc: "Fidelity, Fighter, Fitness, Family, Finances, and Future" },
          { title: "SMART Goals and How They Apply", slug: "smart-goals", desc: "Setting Specific, Measurable, Achievable, Relevant, Time-Bound goals" },
        ],
      },
      {
        title: "Counseling Fundamentals",
        items: [
          { title: "Counseling Fundamentals", slug: "counseling-fundamentals", desc: "Types and process of counseling per NAVMC 2795" },
          { title: "Required Counseling Occasions", slug: "required-counseling-occasions", desc: "Mandatory and recommended occasions for formal counseling" },
        ],
      },
      {
        title: "Conducting Counseling Sessions",
        items: [
          { title: "Conducting an Initial Counseling Session", slug: "initial-counseling-session", desc: "Objectives, topics, and best practices for the ICS" },
          { title: "Conducting Follow-On Counseling Sessions", slug: "follow-on-counseling-sessions", desc: "Purpose, process, and frequency of follow-on sessions" },
        ],
      },
      {
        title: "Documentation",
        items: [
          { title: "Marine Leader Notebooks", slug: "marine-leader-notebooks", desc: "What to document and guidelines from NAVMC 2795" },
        ],
      },
    ],
  },

  "leaders-deployment-readiness": {
    title: "Deployment & Readiness",
    intro: "Individual readiness is a commander's program. You execute it at the small unit level by tracking requirements, identifying deficiencies, and ensuring Marines are prepared to deploy on time. This section covers UPFRP, individual readiness, and deployment preparation.",
    groups: [
      {
        title: "Family Readiness Program",
        items: [
          { title: "UPFRP Overview", slug: "upfrp-overview", desc: "Unit, Personal and Family Readiness Program fundamentals" },
          { title: "Deployment Training Events", slug: "deployment-training-events", desc: "Pre, mid, return/reunion, and post-deployment briefs" },
        ],
      },
      {
        title: "Individual Readiness",
        items: [
          { title: "Individual Readiness Requirements", slug: "individual-readiness-requirements", desc: "Medical, dental, training, administrative, and legal readiness" },
          { title: "Family Care Plan Requirements", slug: "family-care-plan-requirements", desc: "Requirements for single parents and dual-military couples" },
          { title: "Obligated Service for Deployment", slug: "obligated-service-deployment", desc: "Extensions, RE-3O consequences, and Career Planner coordination" },
          { title: "Physical Fitness Readiness", slug: "physical-fitness-readiness", desc: "PFT/CFT requirements and failure consequences" },
        ],
      },
      {
        title: "Deployment Preparation",
        items: [
          { title: "Pre-Deployment Checklist", slug: "pre-deployment-checklist", desc: "Administrative, medical, training, and family readiness checklists" },
          { title: "Supporting IAs and TAD Marines", slug: "supporting-ias-and-tad", desc: "Parent and gaining command responsibilities for individual augmentees" },
        ],
      },
    ],
  },

  "leaders-performance-evaluation": {
    title: "Performance Evaluation",
    intro: "Performance evaluations directly impact Marine careers. This section covers JEPES for junior Marines (E-1 through E-4), fitness reports for SNCOs, reporting chain responsibilities, and how to write accurate evaluations that serve both Marines and the institution.",
    groups: [
      {
        title: "JEPES Fundamentals",
        items: [
          { title: "JEPES Overview", slug: "jepes-overview", desc: "Understanding the four pillars, scoring, and key concepts" },
          { title: "JEPES Reporting Chain and Roles", slug: "jepes-reporting-chain", desc: "MRO, FLS, Evaluator, SER, Reviewer, and Approver responsibilities" },
          { title: "JEPES Reporting Occasions", slug: "jepes-reporting-occasions", desc: "When evaluations are required and occasion codes" },
        ],
      },
      {
        title: "JEPES Evaluation",
        items: [
          { title: "Command Input Evaluation Metrics", slug: "jepes-command-input-metrics", desc: "Individual Character, MOS/Mission, Leadership marking guidelines" },
          { title: "NOT REC (Not Recommended)", slug: "not-rec", desc: "When and how to indicate not recommended for promotion" },
          { title: "NOT REC Appeal Process", slug: "not-rec-appeal-process", desc: "How to correct erroneous NOT REC and appeal through PERB/BCNR" },
          { title: "Objective Scores and Verification", slug: "jepes-objective-scores", desc: "Warfighting, Physical Toughness, Mental Agility verification" },
        ],
      },
      {
        title: "JEPES Administration",
        items: [
          { title: "Debriefing Marines", slug: "jepes-debriefing", desc: "How to conduct effective evaluation debriefs" },
          { title: "Billet Accomplishments", slug: "billet-accomplishments", desc: "Writing specific, quantifiable accomplishments" },
          { title: "Corrective Procedures", slug: "jepes-corrective-procedures", desc: "Late-run scores and command input corrections" },
        ],
      },
      {
        title: "Fitness Reports",
        items: [
          { title: "Fitness Reports (E-5 and Above)", slug: "fitness-reports-leaders", desc: "Key differences from JEPES and RS/RO responsibilities" },
          { title: "Performance Evaluation Appeals", slug: "performance-evaluation-appeals", desc: "PERB and BCNR appeal process for FitReps and JEPES" },
        ],
      },
    ],
  },

  "leaders-personnel-accountability": {
    title: "Personnel Accountability",
    intro: "Personnel accountability is a fundamental leader responsibility. You must know the status and location of every Marine assigned to your unit at all times. This section covers daily accountability, gains and losses, leave and liberty management, UA procedures, TAD tracking, musters, and record keeping.",
    groups: [
      {
        title: "Accountability Fundamentals",
        items: [
          { title: "Daily Accountability Fundamentals", slug: "daily-accountability-fundamentals", desc: "Knowing the status and location of every Marine at all times" },
          { title: "Gains and Losses Processing", slug: "gains-losses-processing", desc: "Check-in/check-out procedures and Unit Diary reporting" },
        ],
      },
      {
        title: "Leave, Liberty, and UA",
        items: [
          { title: "Leave and Liberty Management", slug: "leave-liberty-management", desc: "Types of leave, liberty limits, and tracking procedures" },
          { title: "Unauthorized Absence (UA) Procedures", slug: "ua-procedures", desc: "Immediate actions, reporting, and consequences of UA" },
        ],
      },
      {
        title: "Tracking and Documentation",
        items: [
          { title: "TAD and Detachment Tracking", slug: "tad-detachment-tracking", desc: "Tracking Marines on temporary additional duty" },
          { title: "Muster and Formation Procedures", slug: "muster-formation-procedures", desc: "Conducting formations and reporting accountability" },
          { title: "Record Keeping and Documentation", slug: "record-keeping-documentation", desc: "MCTFS, Unit Diary, SRB/OMPF, and internal records" },
        ],
      },
    ],
  },

  "leaders-administrative-systems": {
    title: "Administrative Systems",
    intro: "Understanding Marine Corps administrative systems helps you verify Marine records, track requirements, and ensure administrative actions are properly processed. This section provides an overview of key systems including MCTFS, MOL, JEPES, TFRS, Unit Diary, and training information systems.",
    groups: [
      {
        title: "Core Personnel Systems",
        items: [
          { title: "MCTFS Overview", slug: "mctfs-overview", desc: "Marine Corps Total Force System - authoritative pay and personnel data" },
          { title: "MOL Navigation", slug: "mol-navigation", desc: "Marine Online portal for personnel access and requests" },
          { title: "JEPES System Navigation", slug: "jepes-system-navigation", desc: "Junior Enlisted Performance Evaluation System in MOL" },
        ],
      },
      {
        title: "Retention and Reporting",
        items: [
          { title: "TFRS Overview", slug: "tfrs-overview", desc: "Total Force Retention System for reenlistment and extensions" },
          { title: "Unit Diary Reporting", slug: "unit-diary-reporting", desc: "Personnel transaction reporting to update MCTFS" },
          { title: "Training Information Systems", slug: "training-information-systems", desc: "MCTIMS, MarineNet, and training record systems" },
        ],
      },
      {
        title: "Quick Reference",
        items: [
          { title: "MCO Quick Reference Table", slug: "mco-quick-reference", desc: "Quick access to frequently used Marine Corps Orders by topic" },
        ],
      },
    ],
  },

  "leaders-conducting-investigations": {
    title: "Conducting Administrative Investigations",
    intro: "As an investigating officer (IO), you are responsible for searching out, discovering, collecting, and preserving evidence to document a matter of official interest to your command. This section provides step-by-step guidance on conducting investigations correctly by type, from preliminary inquiries to command investigations.",
    groups: [
      {
        title: "Before You Start",
        items: [
          { title: "Review Your Convening Order", slug: "review-convening-order", desc: "Understanding your roadmap: scope, issues, format, and due date" },
          { title: "Contact a Judge Advocate", slug: "contact-judge-advocate", desc: "Getting legal guidance before beginning your investigation" },
          { title: "Coordinate With Other Investigations", slug: "coordinate-other-investigations", desc: "Checking for NCIS, safety, or IG investigations" },
        ],
      },
      {
        title: "Conducting Investigations",
        items: [
          { title: "Preliminary Inquiry", slug: "preliminary-inquiry-io", desc: "3-day timeline to determine if formal investigation is warranted" },
          { title: "Command Investigation", slug: "command-investigation-io", desc: "Planning, evidence collection, witness interviews, and report writing" },
          { title: "Litigation-Report Investigation", slug: "litigation-report-io", desc: "Investigations conducted under judge advocate supervision" },
        ],
      },
      {
        title: "Evidence and Witnesses",
        items: [
          { title: "Collecting Evidence", slug: "collecting-evidence", desc: "Documentary, physical, and photographic evidence handling" },
          { title: "Interviewing Witnesses", slug: "interviewing-witnesses", desc: "Procedures for witnesses and Article 31 warnings for suspects" },
          { title: "Standards of Proof", slug: "standards-of-proof-io", desc: "Preponderance of evidence and drawing reasonable inferences" },
        ],
      },
      {
        title: "Writing Your Report",
        items: [
          { title: "Report Format", slug: "investigation-report-format-io", desc: "Preliminary statement, findings, opinions, recommendations, enclosures" },
          { title: "LOD/Misconduct Determinations", slug: "lod-misconduct-determinations", desc: "Line of duty findings and misconduct standards" },
          { title: "Death Case Procedures", slug: "death-case-procedures-io", desc: "Special requirements for death investigations" },
          { title: "Common Mistakes to Avoid", slug: "common-investigation-mistakes", desc: "Top 10 errors and how to prevent them" },
        ],
      },
    ],
  },
  // ============================================
  // COMMANDER-SPECIFIC SECTIONS
  // ============================================

  // GROUP A: COMMAND AUTHORITY
  "commanders-authority-legal": {
    title: "Command Authority & Legal Responsibilities",
    intro: "Command authority carries legal responsibilities under the UCMJ, Navy Regulations, and Marine Corps Orders. Understanding your authority levels, limitations, and procedural requirements is essential for fair and lawful command. This section covers NJP, court-martial convening authority, administrative separation, religious accommodation, and request mast.",
    groups: [
      {
        title: "Non-Judicial Punishment",
        items: [
          { title: "NJP Authority (Article 15)", slug: "njp-authority", desc: "Who has NJP authority and delegation requirements" },
          { title: "Punishment Limits by Grade", slug: "njp-punishment-limits", desc: "Maximum punishments authorized by commander grade" },
          { title: "NJP Process Requirements", slug: "njp-process", desc: "Procedural steps from report to imposition" },
          { title: "NJP Appeal Procedures", slug: "njp-appeals", desc: "Marine's right to appeal and commander's review authority" },
        ],
      },
      {
        title: "Court-Martial Authority",
        items: [
          { title: "Summary Court-Martial", slug: "summary-court-martial", desc: "Convening authority and procedural requirements" },
          { title: "Special Court-Martial", slug: "special-court-martial", desc: "SPCM convening and referral procedures" },
          { title: "General Court-Martial", slug: "general-court-martial", desc: "GCM process and commander's role" },
          { title: "Disposition Options", slug: "disposition-options", desc: "Alternatives to court-martial and decision factors" },
        ],
      },
      {
        title: "Administrative Actions",
        items: [
          { title: "Administrative Separation Authority", slug: "adsep-authority", desc: "Separation authority levels and board requirements" },
          { title: "Characterization of Service", slug: "service-characterization", desc: "Honorable, General, OTH determination factors" },
          { title: "Religious Accommodation", slug: "religious-accommodation", desc: "Adjudication levels and compelling interest standard" },
          { title: "Request Mast Procedures", slug: "request-mast", desc: "Marine's right to request mast and commander response" },
        ],
      },
    ],
  },

  "commanders-personnel-career": {
    title: "Personnel Administration & Career Management",
    intro: "Commanders are responsible for the career development and administrative management of all assigned Marines. This includes fitness reports, proficiency marks, promotion recommendations, reenlistment decisions, and administrative documentation that affects Marines' careers.",
    groups: [
      {
        title: "Performance Evaluation",
        items: [
          { title: "Fitness Report Responsibilities", slug: "fitrep-responsibilities", desc: "Reporting Senior and Reviewing Officer duties" },
          { title: "Adverse Fitness Reports", slug: "adverse-fitreps", desc: "Requirements for adverse comments and due process" },
          { title: "JEPES Commander Role", slug: "jepes-commander", desc: "Commander involvement in junior enlisted evaluations" },
        ],
      },
      {
        title: "Promotion & Retention",
        items: [
          { title: "NOT REC Authority", slug: "not-rec-authority", desc: "Authority to recommend against promotion" },
          { title: "Meritorious Promotion", slug: "meritorious-promotion-authority", desc: "Commander's meritorious promotion authority" },
          { title: "Reenlistment Authority", slug: "reenlistment-authority", desc: "Approval, disapproval, and waiver authority" },
          { title: "Transition Readiness Oversight", slug: "transition-oversight", desc: "Commander responsibilities for separating Marines" },
        ],
      },
      {
        title: "Administrative Documentation",
        items: [
          { title: "Page 11 Entries", slug: "page-11-commander", desc: "When and how to document administrative remarks" },
          { title: "6105 Counseling Entries", slug: "6105-entries", desc: "Counseling warning requirements and procedures" },
          { title: "Letters of Caution/Admonition/Reprimand", slug: "adverse-letters", desc: "Levels of adverse administrative letters" },
        ],
      },
    ],
  },

  // GROUP B: COMMAND CLIMATE AND WELFARE
  "commanders-climate-culture": {
    title: "Command Climate & Culture Programs",
    intro: "Command climate directly impacts mission readiness, retention, and Marine welfare. Commanders are responsible for establishing and maintaining a positive command climate through assessment, policy, training, and personal leadership. Required programs include DEOCS, policy statements, and prohibited activities prevention.",
    groups: [
      {
        title: "Climate Assessment",
        items: [
          { title: "DEOCS Requirements", slug: "deocs-requirements", desc: "Timeline, administration, and using survey results" },
          { title: "Command Climate Surveys", slug: "climate-surveys", desc: "Aviation safety surveys (CSA, MCAS, ASPA) and safety climate surveys" },
          { title: "Command Team Training", slug: "command-team-training", desc: "Required training for command teams within 30 days" },
        ],
      },
      {
        title: "Required Policy Statements",
        items: [
          { title: "Safety Policy (30 Days)", slug: "safety-policy-statement", desc: "Commander's safety policy statement requirement" },
          { title: "SAPR Policy (60/90 Days)", slug: "sapr-policy-statement", desc: "Sexual assault prevention and response policy" },
          { title: "UPFRP SOP (60 Days)", slug: "upfrp-sop-requirement", desc: "Unit Personal and Family Readiness Program SOP" },
          { title: "PAC Policy (90 Days)", slug: "pac-policy-statement", desc: "Prohibited Activities and Conduct policy statement" },
        ],
      },
      {
        title: "Prohibited Activities Program",
        items: [
          { title: "PAC Program Overview", slug: "pac-program-overview", desc: "Discrimination, harassment, hazing, and retaliation prevention" },
          { title: "Hazing Prevention", slug: "hazing-prevention", desc: "Definitions, indicators, and command response" },
          { title: "Harassment Response", slug: "harassment-response", desc: "Reporting, investigation, and corrective action" },
          { title: "Retaliation Prevention", slug: "retaliation-prevention", desc: "Protecting reporters and witnesses from retaliation" },
        ],
      },
    ],
  },

  "commanders-sapr": {
    title: "Sexual Assault Prevention & Response",
    intro: "Commanders are responsible for preventing sexual assault and ensuring appropriate response when incidents occur. This includes appointing qualified SAPR VAs, understanding reporting options, participating in Case Management Groups, and preventing retaliation against victims and witnesses.",
    groups: [
      {
        title: "Program Management",
        items: [
          { title: "SAPR VA Appointment", slug: "sapr-va-appointment", desc: "Selection criteria, minimum requirements, and oversight" },
          { title: "SARC Coordination", slug: "sarc-coordination", desc: "Working with the Sexual Assault Response Coordinator" },
          { title: "SAPR Policy Posting", slug: "sapr-policy-posting", desc: "Required posting locations and content" },
        ],
      },
      {
        title: "Reporting & Response",
        items: [
          { title: "Reporting Types", slug: "sapr-reporting-types", desc: "Restricted vs unrestricted reporting and conversion" },
          { title: "8-Day Incident Report", slug: "8-day-report", desc: "Commander's reporting requirements and timeline" },
          { title: "Case Management Group", slug: "cmg-participation", desc: "Commander participation and CMG functions" },
          { title: "High Risk Response Team", slug: "hrrt", desc: "When activated and commander's role" },
        ],
      },
      {
        title: "Victim Support",
        items: [
          { title: "Expedited Transfer Authority", slug: "expedited-transfer", desc: "Authority to approve victim transfer requests" },
          { title: "Military Protective Orders", slug: "mpo-sapr", desc: "Issuing MPOs in sexual assault cases" },
          { title: "Retaliation Prevention", slug: "sapr-retaliation", desc: "Monitoring and preventing victim retaliation" },
        ],
      },
    ],
  },

  "commanders-suicide-prevention": {
    title: "Suicide Prevention & Force Preservation",
    intro: "Force preservation is a commander's program. Preventing suicide requires understanding risk factors, maintaining awareness through CIRRAS, convening Force Preservation Councils, and ensuring Marines have access to embedded mental health resources. Early intervention saves lives.",
    groups: [
      {
        title: "Program Structure",
        items: [
          { title: "SPPO Appointment", slug: "sppo-appointment", desc: "Suicide Prevention Program Officer selection and duties" },
          { title: "Force Preservation Council", slug: "force-preservation-council", desc: "Meeting frequency, attendees, and required actions" },
          { title: "Postvention Procedures", slug: "postvention", desc: "Command response after a suicide or attempt" },
        ],
      },
      {
        title: "Risk Awareness",
        items: [
          { title: "CIRRAS Oversight", slug: "cirras-oversight", desc: "What gets entered, update requirements, PCS warm handoffs" },
          { title: "Critical Stressors", slug: "critical-stressors", desc: "First 90 days post-NJP, relationship distress, financial problems" },
          { title: "Lethal Means Safety", slug: "lethal-means-safety", desc: "Voluntary firearms storage and safety planning" },
        ],
      },
      {
        title: "Embedded Resources",
        items: [
          { title: "MFLC Program", slug: "mflc-program", desc: "Military and Family Life Counselor availability" },
          { title: "Chaplain Support", slug: "chaplain-support", desc: "Privileged communication and spiritual support" },
          { title: "Combat Operational Stress Control", slug: "cosc-oscar", desc: "CCP and OSCAR team integration" },
        ],
      },
    ],
  },

  "commanders-family-readiness": {
    title: "Family Readiness & Casualty Affairs",
    intro: "Family readiness is mission readiness. Commanders oversee the Unit Personal and Family Readiness Program, respond to family advocacy matters, and ensure proper casualty notification and survivor support. Strong family programs reduce distractions and improve unit cohesion.",
    groups: [
      {
        title: "Family Readiness Program",
        items: [
          { title: "UPFRP SOP Requirements", slug: "upfrp-sop", desc: "Developing and implementing the family readiness SOP" },
          { title: "Command Team Roles", slug: "upfrp-command-roles", desc: "Commander, XO, SgtMaj, and FRO responsibilities" },
          { title: "Deployment Readiness Coordinator", slug: "drc-oversight", desc: "DRC appointment and deployment support" },
        ],
      },
      {
        title: "Family Advocacy",
        items: [
          { title: "FAP Overview", slug: "fap-overview", desc: "Family Advocacy Program and commander's role" },
          { title: "Child Abuse Response", slug: "child-abuse-response", desc: "Reporting requirements and protective actions" },
          { title: "Domestic Abuse Response", slug: "domestic-abuse-response", desc: "MPO issuance and victim safety planning" },
        ],
      },
      {
        title: "Casualty Affairs",
        items: [
          { title: "CACO Oversight", slug: "caco-oversight", desc: "Casualty Assistance Calls Officer supervision" },
          { title: "Personnel Casualty Reports", slug: "pcr-reporting", desc: "PCR submission requirements and timelines" },
          { title: "Next of Kin Notification", slug: "nok-notification", desc: "Notification procedures and restrictions" },
        ],
      },
      {
        title: "Wounded Warrior Support",
        items: [
          { title: "LIMDU Coordinator", slug: "limdu-coordinator", desc: "Designating and overseeing the LIMDU coordinator" },
          { title: "Invitational Travel Orders", slug: "ito-authority", desc: "ITO approval for family of seriously ill/injured" },
          { title: "Recovery Care Coordinator", slug: "rcc-referral", desc: "Connecting Marines to Wounded Warrior resources" },
          { title: "Benefits Coordination", slug: "ww-benefits", desc: "TSGLI, PAC, and SCAADL coordination" },
        ],
      },
    ],
  },

  "commanders-substance-abuse": {
    title: "Substance Abuse & Urinalysis",
    intro: "Commanders are responsible for preventing substance abuse and maintaining unit readiness through effective drug testing programs. This includes urinalysis administration, drug rehabilitation referrals, and administrative separation for drug offenses.",
    groups: [
      {
        title: "Urinalysis Program",
        items: [
          { title: "Unit Urinalysis Coordinator", slug: "uuc-appointment", desc: "Appointing and training the UUC" },
          { title: "Testing Requirements", slug: "testing-requirements", desc: "Random, command-directed, and probable cause testing" },
          { title: "Inspection Testing", slug: "inspection-testing", desc: "Health and welfare inspection requirements" },
        ],
      },
      {
        title: "Positive Results",
        items: [
          { title: "Positive Result Procedures", slug: "positive-result-procedures", desc: "Actions upon confirmed positive results" },
          { title: "Administrative Actions", slug: "substance-admin-actions", desc: "NJP, ADSEP, and career implications" },
          { title: "Treatment Referral", slug: "treatment-referral", desc: "SACO and treatment program referrals" },
        ],
      },
    ],
  },

  "commanders-equal-opportunity": {
    title: "Equal Opportunity",
    intro: "Commanders ensure equal opportunity through policy, training, and complaint resolution. EO programs prevent discrimination based on race, color, religion, sex, national origin, and other protected categories. Understanding complaint processes and climate assessment is essential.",
    groups: [
      {
        title: "EO Program",
        items: [
          { title: "EO Representative Appointment", slug: "eor-appointment", desc: "Selecting and training unit EO Representatives" },
          { title: "EO Policy Statement", slug: "eo-policy", desc: "Commander's equal opportunity policy" },
          { title: "Climate Assessment", slug: "eo-climate-assessment", desc: "Monitoring unit climate through DEOCS and observation" },
        ],
      },
      {
        title: "Complaint Resolution",
        items: [
          { title: "EO Complaint Process", slug: "eo-complaint-process", desc: "Formal and informal complaint resolution" },
          { title: "Investigation Requirements", slug: "eo-investigation", desc: "When investigations are required and procedures" },
          { title: "Retaliation Prevention", slug: "eo-retaliation-prevention", desc: "Protecting complainants from retaliation" },
        ],
      },
    ],
  },

  "commanders-legal-discipline": {
    title: "Legal & Discipline",
    intro: "Commanders exercise legal authority through NJP, administrative separation, and courts-martial. Understanding the UCMJ, due process requirements, and the range of disciplinary options ensures fair and effective command discipline.",
    groups: [
      {
        title: "Non-Judicial Punishment",
        items: [
          { title: "NJP Procedures", slug: "njp-procedures", desc: "Article 15 processing requirements" },
          { title: "Punishment Limits", slug: "punishment-limits", desc: "Maximum authorized punishments by grade" },
          { title: "Appeal Rights", slug: "appeal-rights", desc: "Marine's right to appeal NJP decisions" },
        ],
      },
      {
        title: "Administrative Separation",
        items: [
          { title: "ADSEP Authority", slug: "adsep-commander-authority", desc: "Separation authority and board requirements" },
          { title: "Separation Bases", slug: "separation-bases", desc: "Grounds for administrative separation" },
          { title: "Due Process", slug: "adsep-due-process", desc: "Ensuring Marine's rights are protected" },
        ],
      },
    ],
  },

  "commanders-admin-investigations": {
    title: "Administrative Investigations",
    intro: "Administrative investigations are a critical commander responsibility. JAGMAN Chapter II sets forth principles governing the convening, conduct, review, and storage of administrative investigations conducted in or by the Department of the Navy. Commanders are responsible for initiating investigations into incidents occurring within, or involving personnel of, the command.",
    groups: [
      {
        title: "Types of Investigations",
        items: [
          { title: "Preliminary Inquiry", slug: "preliminary-inquiry", desc: "Analytical tool to determine if investigation is warranted (3-day timeline)" },
          { title: "Command Investigations", slug: "command-investigations", desc: "Type One - Most common, for internal command matters" },
          { title: "Litigation-Report Investigations", slug: "litigation-report-investigations", desc: "Type Two - For potential claims or litigation" },
          { title: "Courts and Boards of Inquiry", slug: "courts-boards-inquiry", desc: "Type Three - For major incidents requiring subpoena power or hearings" },
        ],
      },
      {
        title: "Investigation Procedures",
        items: [
          { title: "Convening Orders", slug: "convening-orders", desc: "Requirements for directing and memorializing investigations" },
          { title: "Standards of Proof", slug: "standards-of-proof", desc: "Preponderance of evidence and evidence handling" },
          { title: "Witness Procedures", slug: "witness-procedures", desc: "Interviewing witnesses and Article 31 warnings" },
          { title: "Report Format", slug: "investigation-report-format", desc: "Findings of fact, opinions, and recommendations" },
        ],
      },
      {
        title: "Special Determinations",
        items: [
          { title: "Line of Duty Determinations", slug: "line-of-duty", desc: "LOD/misconduct determinations and their impact on benefits" },
          { title: "Death Case Procedures", slug: "death-case-procedures", desc: "Special considerations and notification requirements" },
          { title: "Coordination Requirements", slug: "investigation-coordination", desc: "Coordination with NCIS, safety investigations, and other entities" },
        ],
      },
    ],
  },

  // GROUP C: READINESS AND RESOURCES
  "commanders-training-readiness": {
    title: "Training & Readiness",
    intro: "Training is the commander's business. Effective training management ensures unit readiness through METL-focused training, T&R compliance, DRRS-MC reporting, and accurate readiness assessments. Commanders establish training philosophy and ensure resources are allocated to priority training requirements.",
    groups: [
      {
        title: "DRRS-MC Reporting",
        items: [
          { title: "DRRS-MC Overview", slug: "drrs-mc-overview", desc: "Defense Readiness Reporting System - Marine Corps" },
          { title: "C-Level & A-Level Assessments", slug: "c-level-assessment", desc: "Overall and individual MET capability ratings" },
          { title: "Commander's Override", slug: "commanders-override", desc: "When authorized and documentation requirements" },
          { title: "Readiness Board Requirements", slug: "readiness-board", desc: "Conducting readiness reviews and briefings" },
        ],
      },
      {
        title: "Resource Levels",
        items: [
          { title: "P-Level (Personnel)", slug: "p-level-reporting", desc: "Personnel readiness measurement and reporting" },
          { title: "S-Level (Supply/Equipment)", slug: "s-level-reporting", desc: "Equipment on-hand status reporting" },
          { title: "R-Level (Equipment Readiness)", slug: "r-level-reporting", desc: "Equipment operational status reporting" },
          { title: "T-Level (Training)", slug: "t-level-reporting", desc: "Training readiness assessment and reporting" },
        ],
      },
      {
        title: "METL Management",
        items: [
          { title: "METL Development", slug: "metl-development", desc: "Developing Mission Essential Task Lists" },
          { title: "METL Assessment", slug: "metl-assessment", desc: "Assessing task proficiency levels" },
          { title: "Annual METL Review", slug: "metl-annual-review", desc: "30-day and annual review requirements" },
        ],
      },
    ],
  },

  "commanders-fiscal-property": {
    title: "Fiscal & Property Accountability",
    intro: "Commanders are accountable officers responsible for proper use of government funds and property. This includes budget development, fund control, preventing unauthorized commitments, and maintaining property accountability. Fiscal responsibility is a command responsibility.",
    groups: [
      {
        title: "Fiscal Accountability",
        items: [
          { title: "Accountable Officer Responsibilities", slug: "accountable-officer", desc: "Commander's fiscal accountability and liability" },
          { title: "Budget Development & Execution", slug: "budget-execution", desc: "Annual training plan integration and quarterly budgets" },
          { title: "Status of Funds Briefings", slug: "status-of-funds", desc: "Regular financial status reviews" },
          { title: "Fund Control Training", slug: "fund-control-training", desc: "Appropriations law and DON budget execution" },
        ],
      },
      {
        title: "Financial Controls",
        items: [
          { title: "Unauthorized Commitment Prevention", slug: "uac-prevention", desc: "Preventing and addressing unauthorized commitments" },
          { title: "Unliquidated Orders Validation", slug: "ulo-validation", desc: "ULO review and certification requirements" },
          { title: "GTCC Program Oversight", slug: "gtcc-oversight", desc: "Government Travel Charge Card program management" },
        ],
      },
      {
        title: "Property Accountability",
        items: [
          { title: "Certificate of Relief", slug: "certificate-of-relief", desc: "Property accountability transfer at change of command" },
          { title: "Supply Officer Appointment", slug: "supply-officer-appointment", desc: "Appointing and supervising the supply officer" },
          { title: "Annual Inventory Requirements", slug: "annual-inventory", desc: "Wall-to-wall inventory and support equipment" },
        ],
      },
    ],
  },

  "commanders-mol-management": {
    title: "MOL Management",
    intro: "As a Commander, managing your unit's administrative authority within Marine Online (MOL) is a non-delegable responsibility that ensures legal and administrative actions, such as Promotion Recommendations, are processed correctly.",
  },


  // GROUP D: COMPLIANCE AND SECURITY
  "commanders-safety-risk": {
    title: "Safety & Risk Management",
    intro: "Safety is a command responsibility. Commanders establish the safety culture through policy, assessment, and integration of Operational Risk Management into all activities. This includes ground safety, aviation safety (where applicable), mishap reporting, and motor vehicle safety programs.",
    groups: [
      {
        title: "Safety Program",
        items: [
          { title: "Safety Policy Statement", slug: "safety-policy", desc: "30-day requirement for commander's safety policy" },
          { title: "Safety Climate Survey", slug: "safety-climate-survey", desc: "O-5/O-6 survey requirement within 90 days" },
          { title: "Ground Safety Program", slug: "ground-safety", desc: "Ground safety program elements and oversight" },
          { title: "ORM Integration", slug: "orm-integration", desc: "Integrating ORM into planning and operations" },
        ],
      },
      {
        title: "Aviation Safety",
        items: [
          { title: "DOSS Relationship", slug: "doss-relationship", desc: "Director of Safety and Standardization coordination" },
          { title: "Flight Schedule Approval", slug: "flight-schedule-approval", desc: "Commander's role in flight operations" },
          { title: "Pre-Mishap Drills", slug: "pre-mishap-drills", desc: "Required drill frequency and elements" },
        ],
      },
      {
        title: "Mishap Management",
        items: [
          { title: "Mishap Reporting", slug: "mishap-reporting", desc: "Class A, B, C definitions and reporting requirements" },
          { title: "Investigation Requirements", slug: "mishap-investigation", desc: "When investigations are required and commander's role" },
          { title: "Motor Vehicle Safety", slug: "motor-vehicle-safety", desc: "POV and motorcycle safety programs" },
        ],
      },
    ],
  },

  "commanders-inspector-general": {
    title: "Inspector General & Inspections",
    intro: "Inspections ensure compliance with regulations and identify areas for improvement. Commanders maintain internal inspection programs, prepare for external inspections, and track corrective actions. Understanding IGMC functional areas, FSMAO analysis, and POA&M management is essential for compliance.",
    groups: [
      {
        title: "Command Inspection Program",
        items: [
          { title: "CIP Overview", slug: "cip-overview", desc: "Command Inspection Program structure and requirements" },
          { title: "IGMC Functional Areas", slug: "igmc-functional-areas", desc: "CoRE and CoRE+ functional area checklists" },
          { title: "Internal Inspections", slug: "internal-inspections", desc: "MMIIP and supply inspection programs" },
        ],
      },
      {
        title: "External Inspections",
        items: [
          { title: "FSMAO Analysis", slug: "fsmao-analysis", desc: "Fiscal and supply management analysis" },
          { title: "CGIP Preparation", slug: "cgip-preparation", desc: "Commanding General's Inspection Program" },
          { title: "SMAT Inspections", slug: "smat-inspections", desc: "Supply Management Assistance Team visits" },
        ],
      },
      {
        title: "Corrective Actions",
        items: [
          { title: "POA&M Management", slug: "poam-management", desc: "Plan of Action and Milestones tracking" },
          { title: "Pre-Inspection Preparation", slug: "pre-inspection-prep", desc: "Preparing the command for inspections" },
          { title: "Corrective Action Tracking", slug: "corrective-action-tracking", desc: "Tracking and closing inspection findings" },
        ],
      },
    ],
  },

  "commanders-public-affairs": {
    title: "Public Affairs & Media Relations",
    intro: "Public affairs is a command responsibility. Commanders engage with media, manage crisis communications, and ensure OPSEC in public statements. Understanding casualty information release procedures and social media policy protects Marines, families, and the mission.",
    groups: [
      {
        title: "Media Engagement",
        items: [
          { title: "Media Engagement", slug: "media-engagement", desc: "Interacting with news media and journalists" },
          { title: "Crisis Communication", slug: "crisis-communication", desc: "Managing communications during crises" },
          { title: "OPSEC in Public Statements", slug: "opsec-public-statements", desc: "Protecting sensitive information" },
        ],
      },
      {
        title: "Information Release",
        items: [
          { title: "Casualty Information Release", slug: "casualty-info-release", desc: "PNOK notification plus 24-hour rule" },
          { title: "Releasable Information", slug: "releasable-info", desc: "What can and cannot be released publicly" },
        ],
      },
      {
        title: "Digital Presence",
        items: [
          { title: "Social Media Policy", slug: "social-media-policy", desc: "Command social media guidelines and oversight" },
          { title: "Command Climate Messaging", slug: "climate-messaging", desc: "Internal and external command messaging" },
        ],
      },
    ],
  },

  "commanders-transition-command": {
    title: "Transition of Command",
    intro: "Change of command involves numerous timeline-driven requirements. This section consolidates all actions required before assuming command, within specific timeframes after taking command, annual requirements, and actions before relinquishing command. Use this as your comprehensive checklist.",
    groups: [
      {
        title: "Prior to Assuming Command",
        items: [
          { title: "Cornerstone Attendance", slug: "cornerstone-attendance", desc: "Complete Cornerstone Course before assuming command" },
          { title: "Certificate of Relief", slug: "cor-incoming", desc: "Property accountability transfer procedures" },
          { title: "Status of Command Letter", slug: "status-command-letter", desc: "Receiving the outgoing commander's assessment" },
          { title: "Aviation Refresher", slug: "aviation-refresher", desc: "Required refresher training for aviation commands" },
        ],
      },
      {
        title: "Within 30 Days",
        items: [
          { title: "Safety Policy Statement", slug: "30-day-safety", desc: "Publish commander's safety policy" },
          { title: "Command Team Training", slug: "30-day-ctt", desc: "Complete required command team training" },
          { title: "SARC Brief", slug: "30-day-sarc", desc: "Receive SARC brief on program status" },
          { title: "METL Review", slug: "30-day-metl", desc: "Review and validate Mission Essential Task List" },
          { title: "Fund Control Training", slug: "30-day-fund-control", desc: "Begin appropriations law training" },
          { title: "Aviation Surveys", slug: "30-day-aviation", desc: "CSA, MCAS, ASPA for aviation commands" },
        ],
      },
      {
        title: "Within 60-90 Days",
        items: [
          { title: "SAPR Policy (60 Days)", slug: "60-day-sapr", desc: "Publish SAPR policy statement" },
          { title: "UPFRP SOP (60 Days)", slug: "60-day-upfrp", desc: "Publish family readiness SOP" },
          { title: "Command Philosophy (60 Days)", slug: "60-day-philosophy", desc: "Publish commander's philosophy" },
          { title: "PAC Policy (90 Days)", slug: "90-day-pac", desc: "Publish Prohibited Activities and Conduct policy" },
          { title: "Safety Climate Survey (90 Days)", slug: "90-day-safety-survey", desc: "O-5/O-6 safety climate survey" },
          { title: "DEOCS Initiation (90 Days)", slug: "90-day-deocs", desc: "Initiate command climate survey" },
          { title: "FAP Training (90 Days)", slug: "90-day-fap", desc: "Complete child/domestic abuse training" },
        ],
      },
      {
        title: "Annual Requirements",
        items: [
          { title: "Annual DEOCS", slug: "annual-deocs", desc: "Conduct annual command climate survey" },
          { title: "Annual Safety Survey", slug: "annual-safety-survey", desc: "Annual safety climate assessment" },
          { title: "Annual T/E Review", slug: "annual-te-review", desc: "Table of Equipment annual review" },
          { title: "Annual Inventory", slug: "annual-inventory", desc: "Wall-to-wall property inventory" },
          { title: "Annual METL Review", slug: "annual-metl-review", desc: "Annual Mission Essential Task List review" },
        ],
      },
      {
        title: "Prior to Relinquishing Command",
        items: [
          { title: "Outgoing DEOCS", slug: "outgoing-deocs", desc: "Initiate climate survey before departing" },
          { title: "Turnover Documentation", slug: "turnover-documentation", desc: "Prepare comprehensive turnover package" },
          { title: "Certificate of Relief", slug: "cor-outgoing", desc: "Complete property accountability transfer" },
        ],
      },
    ],
  },
};

/** Set of section keys that are only accessible by administrators */
export const ADMIN_ONLY_SECTIONS = new Set([
  "s1-g1-administration",
  "pac-personnel-admin-center",
  "ii-i-staff-administration",
]);

/** Set of section keys that are specific to the leaders role */
export const LEADER_SECTIONS = new Set([
  "leaders-accountability-discipline",
  "leaders-administrative-systems",
  "leaders-awards-recognition",
  "leaders-career-development",
  "leaders-conducting-investigations",
  "leaders-counseling-documentation",
  "leaders-deployment-readiness",
  "leaders-performance-evaluation",
  "leaders-personnel-accountability",
]);

/** Set of section keys that are specific to the commanders role */
export const COMMANDER_SECTIONS = new Set([
  // Group A: Command Authority
  "commanders-authority-legal",
  "commanders-personnel-career",
  // Group B: Command Climate and Welfare
  "commanders-climate-culture",
  "commanders-sapr",
  "commanders-suicide-prevention",
  "commanders-family-readiness",
  "commanders-substance-abuse",
  "commanders-equal-opportunity",
  "commanders-legal-discipline",
  "commanders-admin-investigations",
  // Group C: Readiness and Resources
  "commanders-training-readiness",
  "commanders-fiscal-property",
  "commanders-mol-management",
  // Group D: Compliance and Security
  "commanders-safety-risk",
  "commanders-inspector-general",
  "commanders-public-affairs",
  "commanders-transition-command",
]);
