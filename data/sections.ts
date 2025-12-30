export type SectionItem = {
  title: string;
  slug?: string;
  desc: string;
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
        title: "Personnel Records",
        items: [
          { title: "Official Military Personnel File (OMPF) Management", slug: "ompf-management", desc: "Understanding and managing your official personnel file" },
          { title: "Page 11 Entries (Administrative Remarks)", slug: "page-11-entries", desc: "Administrative remarks and counseling documentation" },
          { title: "Service Record Book (SRB) Corrections", slug: "srb-corrections", desc: "Correcting errors in your service record book" },
          { title: "Awards and Decorations", slug: "awards-decorations", desc: "Processing and documenting military awards" },
          { title: "Medical Records", slug: "medical-records", desc: "Maintaining and accessing medical documentation" },
          { title: "Training Jackets", slug: "training-jackets", desc: "Training records and professional military education" },
        ],
      },
    ],
  },
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
          { title: "Foreign Language Proficiency Bonus (FLPB)", slug: "foreign-language-proficiency-pay", desc: "Bonus for foreign language proficiency" },
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
          { title: "Family Separation Allowance", slug: "family-separation-allowance", desc: "$250/month when separated from dependents 30+ days" },
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
          { title: "State Tax Relief", slug: "state-tax-relief", desc: "Exemption from state income tax based on legal residence" },
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
          { title: "Storage", slug: "pcs-storage", desc: "Short-term and long-term storage options during PCS" },
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
          { title: "Defense Travel System (DTS) Authorization", slug: "dts-authorization", desc: "Creating and routing travel authorizations in DTS" },
        ],
      },
      {
        title: "Transportation Entitlements",
        items: [
          { title: "Government Travel Charge Card (GTCC)", slug: "government-travel-charge-card", desc: "Mandatory card for official travel expenses" },
          { title: "Mileage Reimbursement", slug: "mileage-reimbursement", desc: "POV mileage rates and reimbursement procedures" },
          { title: "Advance Travel Pay", slug: "advance-travel-pay", desc: "Request advance funds before official travel" },
          { title: "Leave En Route Travel", slug: "leave-en-route-travel", desc: "Taking authorized leave during PCS travel" },
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
          { title: "TIG Corrections", slug: "tig-corrections", desc: "Correcting Time in Grade calculation errors" },
          { title: "Date of Rank Corrections", slug: "date-of-rank-corrections", desc: "Correcting errors in Date of Rank records" },
          { title: "Frocking", slug: "frocking", desc: "Wearing rank before promotion effective date" },
          { title: "Rank Reduction", slug: "rank-reduction", desc: "Administrative and punitive reduction in rank procedures" },
        ],
      },
      {
        title: "Performance Evaluations",
        items: [
          { title: "Fitness Reports", slug: "fitness-reports", desc: "Understanding and reviewing fitness reports for SNCOs" },
          { title: "Performance Evaluation Appeals", slug: "performance-evaluation-appeals", desc: "Appealing adverse performance evaluations" },
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
          { title: "Family Care Plan Validation", slug: "family-care-plan-validation", desc: "Ensure your dependent care plan is current and validated" },
          { title: "Power of Attorney", slug: "power-of-attorney", desc: "Grant legal authority to someone while deployed" },
          { title: "SGLI Beneficiary Updates", slug: "sgli-beneficiary-updates", desc: "Ensure your life insurance beneficiaries are current" },
          { title: "Will Preparation", slug: "will-preparation", desc: "Create or update your will before deployment" },
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
          { title: "Combat-Related Special Compensation", slug: "crsc", desc: "Tax-free compensation for combat-related disabilities" },
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
          { title: "EFMP Medical Screening", slug: "efmp-medical-screening", desc: "Enroll family members with special needs in EFMP" },
          { title: "Dental Coverage (FEDVIP)", slug: "dental-coverage-fedvip", desc: "Dental insurance for family members through FEDVIP" },
          { title: "Vision Coverage", slug: "vision-coverage", desc: "Vision insurance through FEDVIP for eye exams and eyewear" },
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
        ],
      },
      {
        title: "Legal Support",
        items: [
          { title: "Court-Martial Support", slug: "court-martial-support", desc: "Unit-level administrative support for judicial proceedings" },
          { title: "Legal Assistance", slug: "legal-assistance", desc: "Free legal services for personal civil matters" },
          { title: "Victim Witness Assistance (VWAP)", slug: "vwap", desc: "Victim and Witness Assistance Program support" },
          { title: "Military Protective Orders", slug: "military-protective-orders", desc: "MPO processing and NCIC registration" },
          { title: "IG Complaints", slug: "ig-complaints", desc: "Inspector General complaint procedures" },
        ],
      },
    ],
  },
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
};

/** Set of section keys that are only accessible by administrators */
export const ADMIN_ONLY_SECTIONS = new Set([
  "s1-g1-administration",
  "pac-personnel-admin-center",
  "ii-i-staff-administration",
]);
