import { type Role } from "../../../../../data/links";
import Link from "next/link";
import { notFound } from "next/navigation";
import BASContent from "../../../../../components/BASContent";
import HostileFirePayContent from "../../../../../components/HostileFirePayContent";
import ImminentDangerPayContent from "../../../../../components/ImminentDangerPayContent";
import FSAContent from "../../../../../components/FSAContent";
import BAHContent from "../../../../../components/BAHContent";
import COLAContent from "../../../../../components/COLAContent";
import OHAContent from "../../../../../components/OHAContent";
import HDIPContent from "../../../../../components/HDIPContent";
import DivePayContent from "../../../../../components/DivePayContent";
import ExperimentalStressContent from "../../../../../components/ExperimentalStressContent";
import FlightDeckContent from "../../../../../components/FlightDeckContent";
import ParachuteContent from "../../../../../components/ParachuteContent";
import VBSSContent from "../../../../../components/VBSSContent";
import SpecialOperationsContent from "../../../../../components/SpecialOperationsContent";
import ToxicMaterialsContent from "../../../../../components/ToxicMaterialsContent";
import HDPContent from "../../../../../components/HDPContent";
import AviationCareerIncentivePayContent from "../../../../../components/AviationCareerIncentivePayContent";
import ForeignLanguageProficiencyPayContent from "../../../../../components/ForeignLanguageProficiencyPayContent";
import SDAPContent from "../../../../../components/SDAPContent";
import SDPContent from "../../../../../components/SDPContent";
import BRSContent from "../../../../../components/BRSContent";
import ContinuationPayContent from "../../../../../components/ContinuationPayContent";
import High3Content from "../../../../../components/High3Content";
import TEBContent from "../../../../../components/TEBContent";
import TSPContent from "../../../../../components/TSPContent";
import CZTEContent from "../../../../../components/CZTEContent";
import FlexibleSpendingAccountsContent from "../../../../../components/FlexibleSpendingAccountsContent";
import MilitaryStateTaxReliefContent from "../../../../../components/MilitaryStateTaxReliefContent";
import AllotmentsContent from "../../../../../components/AllotmentsContent";
import BasicNeedsAllowanceContent from "../../../../../components/BasicNeedsAllowanceContent";
import DebtManagementContent from "../../../../../components/DebtManagementContent";
import FinancialHardshipAssistanceContent from "../../../../../components/FinancialHardshipAssistanceContent";
import OverpaymentRepaymentPlansContent from "../../../../../components/OverpaymentRepaymentPlansContent";
import PCSOrdersProcessingContent from "../../../../../components/PCSOrdersProcessingContent";
import HouseholdGoodsShipmentContent from "../../../../../components/HouseholdGoodsShipmentContent";
import PersonallyProcuredMoveContent from "../../../../../components/PersonallyProcuredMoveContent";
import PCSStorageContent from "../../../../../components/PCSStorageContent";
import DislocationAllowanceContent from "../../../../../components/DislocationAllowanceContent";
import TemporaryLodgingExpenseContent from "../../../../../components/TemporaryLodgingExpenseContent";
import VehicleProcessingStorageContent from "../../../../../components/VehicleProcessingStorageContent";
import TADOrdersContent from "../../../../../components/TADOrdersContent";
import PerDiemRatesContent from "../../../../../components/PerDiemRatesContent";
import TravelVoucherSubmissionContent from "../../../../../components/TravelVoucherSubmissionContent";
import DTSAuthorizationContent from "../../../../../components/DTSAuthorizationContent";
import GovernmentTravelChargeCardContent from "../../../../../components/GovernmentTravelChargeCardContent";
import MileageReimbursementContent from "../../../../../components/MileageReimbursementContent";
import AdvanceTravelPayContent from "../../../../../components/AdvanceTravelPayContent";
import LeaveEnRouteTravelContent from "../../../../../components/LeaveEnRouteTravelContent";

type Params = { role: Role; section: string; item: string };

const BAS_DATA = {
  rates: { 2024: { enlisted: 460.25, officer: 316.98 }, 2025: { enlisted: 465.77, officer: 320.78 } },
  codes: [
    { fid: "BAS", type: "Entitlement", desc: "Cash allowance for meals." },
    { fid: "DN", type: "Deduction", desc: "Meal card / chow hall collection." },
    { fid: "BAS II", type: "Special", desc: "Double BAS in unique quarters situations." },
  ],
  references: [
    { title: "DoD FMR Vol 7A, Ch 25", desc: "Subsistence allowance policy.", url: "https://comptroller.defense.gov/Portals/45/documents/fmr/current/07a/07a_25.pdf", type: "Policy" },
    { title: "MCO 10110.47A", desc: "Marine Corps Order on BAS management.", url: "https://www.marines.mil/Portals/1/MCO%2010110.47A.pdf", type: "Order" },
    { title: "NAVMC 10522", desc: "Commuted Rations (BAS) action form.", url: "#", type: "Form" },
    { title: "DFAS BAS Overview", desc: "DFAS landing page for BAS.", url: "https://www.dfas.mil/militarymembers/payentitlements/bas/", type: "Website" },
  ],
};

const BAH_DATA = {
  examples: [
    { zip: "28547", location: "Camp Lejeune, NC", rates: { "E-4 without dependents": 1374, "E-4 with dependents": 1632, "E-7 with dependents": 2187 } },
    { zip: "92055", location: "Camp Pendleton, CA", rates: { "E-4 without dependents": 2445, "E-4 with dependents": 2946, "E-7 with dependents": 3618 } },
  ],
  references: [
    { title: "DFAS Pay Entitlements", desc: "BAH overview and pay entitlement guidance.", url: "https://www.dfas.mil/militarymembers/payentitlements/", type: "Website" },
    { title: "DoD BAH Calculator", desc: "Official BAH rates by ZIP and dependency.", url: "https://militarypay.defense.gov/Pay/Basic-Allowance-for-Housing/BAH-Calculator/", type: "Website" },
    { title: "DTMO BAH Rate Lookup", desc: "Official rates by ZIP, pay grade, and year.", url: "https://www.travel.dod.mil/Allowances/Basic-Allowance-for-Housing/BAH-Rate-Lookup/", type: "Website" },
  ],
};

const FSA_DATA = {
  references: [
    { title: "37 U.S.C. § 427", desc: "Statutory authority for Family Separation Allowance.", url: "https://www.law.cornell.edu/uscode/text/37/427", type: "Statute" },
    { title: "DoD FMR Vol. 7A, Ch. 27", desc: "Policy volume covering FSA types, eligibility, and computation.", url: "https://comptroller.defense.gov/Portals/45/documents/fmr/current/07a/07a_27.pdf", type: "Policy" },
    { title: "DoDI 1340.24", desc: "Instruction implementing special and incentive pays including FSA (unified categories).", url: "https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodi/134024p.pdf", type: "Policy" },
    { title: "DD Form 1561", desc: "Statement to Substantiate Payment of Family Separation Allowance.", url: "https://www.esd.whs.mil/Portals/54/Documents/DD/forms/dd/dd1561.pdf", type: "Form" },
    { title: "DFAS Pay Entitlements", desc: "DFAS overview of pay entitlements and allowances.", url: "https://www.dfas.mil/militarymembers/payentitlements/", type: "Website" },
  ],
};

const HFP_DATA = {
  references: [
    { title: "37 U.S.C. § 310", desc: "Hostile Fire and Imminent Danger Pay statutory authority.", url: "https://www.law.cornell.edu/uscode/text/37/310", type: "Statute" },
    { title: "DoD FMR Vol. 7A, Ch. 10", desc: "Policy for Hostile Fire and Imminent Danger Pay.", url: "https://comptroller.defense.gov/Portals/45/documents/fmr/current/07a/07a_10.pdf", type: "Policy" },
    { title: "DoDI 1340.09", desc: "DoD Instruction for Special and Incentive Pays framework.", url: "https://www.esd.whs.mil/Directives/issuances/dodi/", type: "Policy" },
    { title: "DFAS Pay Entitlements", desc: "DFAS overview of pay entitlements including HFP.", url: "https://www.dfas.mil/militarymembers/payentitlements/", type: "Website" },
    { title: "Joint Publication 1-0", desc: "Personnel Support to Joint Operations; commander-level determination context.", url: "https://www.jcs.mil/Doctrine/Joint-Doctrine-Pubs/", type: "Policy" },
  ],
};

const IDP_DATA = {
  references: [
    { title: "37 U.S.C. § 351", desc: "Legal authority for Imminent Danger Pay.", url: "https://uscode.house.gov/", type: "Statute" },
    { title: "DoD FMR Vol. 7A, Ch. 10", desc: "IDP/HFP policy; Table 10‑1 area list and footnotes.", url: "https://comptroller.defense.gov/Portals/45/documents/fmr/current/07a/07a_10.pdf", type: "Policy" },
    { title: "IRS Publication 3", desc: "Combat Zone Tax Exclusion rules for Armed Forces.", url: "https://www.irs.gov/publications/p3", type: "Policy" },
    { title: "DFAS Pay Entitlements", desc: "DFAS overview including IDP/HFP.", url: "https://www.dfas.mil/militarymembers/payentitlements/", type: "Website" },
  ],
};

const SDP_DATA = {
  references: [
    { title: "10 U.S.C. § 1035", desc: "Statutory authority establishing the Savings Deposit Program.", url: "https://uscode.house.gov/", type: "Statute" },
    { title: "DoD FMR Vol. 7A, Ch. 44", desc: "Savings Deposit Program policy and computation rules.", url: "https://comptroller.defense.gov/Portals/45/documents/fmr/current/07a/07a_44.pdf", type: "Policy" },
    { title: "DFAS: DoD Savings Deposit Program", desc: "Official SDP guidance, eligibility, and deposit rules.", url: "https://www.dfas.mil/MilitaryMembers/sdp/", type: "Website" },
    { title: "IRS Publication 3", desc: "Interest is gross income; principal often CZTE‑protected.", url: "https://www.irs.gov/publications/p3", type: "Policy" },
  ],
};

const COLA_DATA = {
  examples: [
    { loc: "San Diego, CA", rate: "$200 - $400", type: "CONUS" },
    { loc: "Okinawa, Japan", rate: "$500 - $800", type: "OCONUS" },
    { loc: "New York City", rate: "$300 - $600", type: "CONUS" },
  ],
  history: [
    { month: "Q1 (Jan)", trend: "up", val: "+4%", reason: "Annual Cost Survey" },
    { month: "Q2 (Apr)", trend: "down", val: "-2%", reason: "Currency Exchange (Yen)" },
    { month: "Q3 (Jul)", trend: "up", val: "+5%", reason: "Local Inflation" },
    { month: "Q4 (Oct)", trend: "stable", val: "0%", reason: "Stable Index" },
  ],
  docs: [
    { name: "PCS Orders", detail: "Must show duty station in a COLA-eligible area." },
    { name: "NAVMC 10922", detail: "Required to receive the higher With Dependent rate." },
    { name: "DD Form 1561", detail: "Required for Geographic Bachelors (dependents living elsewhere)." },
  ],
  references: [
    { title: "DTMO COLA", desc: "Official COLA overview and lookup.", url: "https://www.travel.dod.mil/Allowances/Cost-of-Living-Allowance/", type: "Website" },
    { title: "DFAS Pay Entitlements", desc: "Overview of pay entitlements and allowances.", url: "https://www.dfas.mil/militarymembers/payentitlements/", type: "Website" },
    { title: "DoD Travel Allowances", desc: "Allowances portfolio including BAH, OHA, COLA.", url: "https://www.travel.dod.mil/Allowances/Cost-of-Living-Allowance/", type: "Website" },
  ],
};

const OHA_DATA = {
  factors: [
    { name: "Location (OCONUS)", detail: "Eligible only when stationed outside CONUS." },
    { name: "Actual Rent", detail: "Reimbursed up to the local ceiling for your grade." },
    { name: "Utility Allowance", detail: "Fixed monthly amount based on station." },
    { name: "Currency", detail: "Lease currency affects calculation and reimbursement." },
    { name: "Exchange Rate", detail: "Monthly DTMO rate adjusts your reimbursement." },
    { name: "Dependency Status", detail: "With vs Without Dependent rate changes ceilings." },
  ],
  authorized: [
    "Stationed OCONUS with a private lease",
    "Command‑authorized to live off‑base",
    "With dependents after submitting NAVMC 10922",
    "Dual‑military households when one claims With Dependent",
  ],
  notAuthorized: [
    "Assigned government quarters",
    "No valid lease or insufficient documentation",
    "Unauthorized off‑base housing without command memo",
  ],
  docs: [
    { name: "PCS Orders (OCONUS)", detail: "Show duty station and reporting dates." },
    { name: "Lease Agreement", detail: "Monthly rent amount, currency, address, landlord details." },
    { name: "Proof of Payment", detail: "Receipts or bank statement for rent." },
    { name: "NAVMC 10922", detail: "Needed to receive With Dependent rate." },
  ],
  steps: [
    { title: "Meet Housing Office", detail: "Get local guidance, ceilings, and lease best practices." },
    { title: "Sign Lease", detail: "Ensure rent and currency are clearly stated and keep copies." },
    { title: "Submit to S‑1/IPAC", detail: "Turn in lease, orders, and supporting docs for OHA input." },
    { title: "Monitor LES", detail: "Verify OHA and utility allowance; exchange rate may change monthly." },
  ],
  issues: [
    { title: "Checked in but don\'t see OHA", bullets: ["Verify station is OHA‑eligible", "Provide signed lease to S‑1/IPAC", "Allow 1–2 pay periods after submission"] },
    { title: "Wrong OHA amount", bullets: ["Exchange rate changed this month", "Rent exceeds ceiling and is capped", "Update address or rent changes with documentation"] },
    { title: "With Dependent rate missing", bullets: ["Submit NAVMC 10922", "Confirm dependents in DEERS", "Processing time is typically 5–10 business days"] },
  ],
  references: [
    { title: "DTMO OHA Rate Lookup", desc: "Official OHA ceilings and exchange rates.", url: "https://www.travel.dod.mil/Allowances/Overseas-Housing-Allowance/OHA-Rate-Lookup/", type: "Website" },
    { title: "DTMO OHA Overview", desc: "Program details and policy links.", url: "https://www.travel.dod.mil/Allowances/Overseas-Housing-Allowance/", type: "Website" },
    { title: "DFAS Pay Entitlements", desc: "Overview of allowances and pay codes.", url: "https://www.dfas.mil/militarymembers/payentitlements/", type: "Website" },
  ],
};

const HDIP_DATA = {
  factors: [
    { title: "Primary Duty", desc: "Assigned to demolition duty by competent orders." },
    { title: "Live Explosives", desc: "Qualifying duties must use live explosives; inert does not count." },
    { title: "Monthly Performance", desc: "Not continuous. Must perform duties each month to be paid." },
  ],
  rules: [
    { title: "$150 Flat Rate", desc: "Paid monthly in addition to basic pay and other allowances." },
    { title: "Combat Zone Tax", desc: "When earned in a designated combat zone, HDIP is tax‑free." },
    { title: "One HDIP", desc: "Receive only one type of HDIP per month." },
  ],
  docs: {
    start: [
      { name: "Competent Orders", detail: "PCS/PCA orders for EOD (MOS 2336) or CO memo for others." },
      { name: "MOS Qualification", detail: "Proof of MOS 2305/2336 or graduation certificate from EOD school." },
      { name: "Authority", detail: "If applicable, MARADMIN or command authority for billet." },
    ],
    maintenance: [
      { name: "Monthly Authorization Letter", detail: "CO letter certifying live demolition performed that month." },
      { name: "Unit Diary Entry", detail: "S‑1 processes monthly certification into MCTFS." },
    ],
  },
  qa: [
    { q: "EOD‑qualified but assigned to a desk job", a: "Not eligible. Must be assigned to an authorized billet to receive HDIP." },
    { q: "Didn&#39;t perform demo last month", a: "No HDIP for that month. Payment is performance‑based." },
    { q: "Qualified for Dive and Demo", a: "You must choose one. Only one $150 HDIP entitlement per month." },
    { q: "Trained with dummy rounds", a: "No payment. Performance requires live explosives to qualify for HDIP." },
  ],
  references: [
    { title: "DFAS Pay Entitlements", desc: "Overview of entitlements and special pays.", url: "https://www.dfas.mil/militarymembers/payentitlements/", type: "Website" },
    { title: "Special & Incentive Pays", desc: "DoD overview of special pays, including HDIP.", url: "https://militarypay.defense.gov/Pay/Special-and-Incentive-Pays/", type: "Website" },
    { title: "DoD FMR Vol 7A", desc: "Policy volume covering military pay and allowances.", url: "https://comptroller.defense.gov/FMR/Volume_7a.aspx", type: "Policy" },
  ],
};

const HDP_DATA = {
  intro: "Monthly special pay for unusually difficult living conditions or excessive physical hardship at designated stations or missions.",
  factors: [
    { title: "Type", desc: "HDP‑Location (station‑based) and HDP‑Mission (assignment‑based)." },
    { title: "Severity Levels", desc: "HDP‑Location levels: $50, $100, $150 per month based on conditions." },
    { title: "Designation", desc: "Location must be on HDP‑L list; missions must be certified by command." },
  ],
  rules: [
    { title: "HDP‑L vs HDP‑M", desc: "HDP‑L and HDP‑M are exclusive for the same period; the system pays the higher eligible rate." },
    { title: "HDP‑Tempo", desc: "May be paid concurrently when eligible; threshold is 220+ days away from home station in 365." },
    { title: "Total Monthly Cap", desc: "Combined HDP across types is capped at $1,500 per month." },
    { title: "TDY 30‑Day Rule", desc: "TDY to HDP‑L location becomes entitled after 30 consecutive days, paying retro to day 1." },
    { title: "Tax Status", desc: "Taxable in normal duty; excluded in designated combat zones." },
    { title: "Proration", desc: "Prorated for partial months based on days at location or on mission." },
  ],
  docs: {
    start: [
      { name: "HDP‑L: PCS Orders to HDP Location", detail: "Orders assigning to a station designated for HDP‑Location." },
      { name: "HDP‑L: Unit Diary Entry", detail: "S‑1 processes HDP‑L in MCTFS; payment begins after check‑in." },
      { name: "HDP‑L: Government Quarters Status", detail: "Housing assignment may reduce HDP‑L at some locations." },
      { name: "HDP‑M: Commanding Officer Orders", detail: "Written orders assigning to a qualifying hardship mission with duration." },
      { name: "HDP‑M: CO Certification Memo", detail: "Memo certifying mission hardship and rate; many designated missions pay $150 flat." },
      { name: "HDP‑M: Unit Diary Entry", detail: "S‑1 processes HDP‑M start with effective date and rate." },
    ],
    maintenance: [
      { name: "HDP‑L: Continued Assignment", detail: "No monthly recertification; continues while stationed at HDP location." },
      { name: "HDP‑M: Periodic Recertification", detail: "Extended missions may require periodic CO recertification." },
    ],
    stop: [
      { name: "PCS Orders (HDP‑L)", detail: "Transfer from HDP location; HDP‑L terminates on departure." },
      { name: "Mission Completion (HDP‑M)", detail: "End of mission; CO notification; HDP‑M terminates on mission end date." },
      { name: "Unit Diary Stop", detail: "S‑1 processes termination with effective date." },
    ],
  },
  steps: [
    { title: "Receive Orders", detail: "PCS to HDP‑L location or orders to HDP‑M mission." },
    { title: "Check In / Assignment", detail: "Report to unit or commence mission per orders." },
    { title: "Certification", detail: "For HDP‑M, CO certifies hardship conditions and rate." },
    { title: "Unit Diary Start", detail: "S‑1 starts HDP with effective date; HDP‑L auto‑recognized by station." },
    { title: "LES Appearance", detail: "Shows as HDP‑L or HDP‑M within 1–2 pay periods." },
  ],
  qa: [
    { q: "Overseas but no HDP", a: "Not all OCONUS stations qualify. Verify the official HDP‑L list." },
    { q: "Lower than expected amount", a: "Confirm location’s level and whether government quarters reduce HDP‑L." },
    { q: "TDY to HDP‑L location", a: "Entitled after 30 consecutive days; pays retroactively to day 1 starting on day 31." },
    { q: "Qualify for both HDP‑L and HDP‑M", a: "You receive only one HDP; the system pays the higher rate." },
    { q: "HDP stopped mid‑tour", a: "Check for location removal, quarters change, or admin error; contact S‑1." },
  ],
  references: [
    { title: "Defense.gov Hardship Duty Pay", desc: "Official overview of HDP types and rates.", url: "https://militarypay.defense.gov/Pay/Special-and-Incentive-Pays/", type: "Website" },
    { title: "DoD FMR Vol 7A, Ch. 17", desc: "Hardship Duty Pay policy including HDP‑Tempo.", url: "https://comptroller.defense.gov/Portals/45/documents/fmr/current/07a/07a_17.pdf", type: "Policy" },
    { title: "37 U.S.C. § 305", desc: "Statutory authority for Hardship Duty Pay.", url: "https://uscode.house.gov/", type: "Statute" },
    { title: "HDP‑Location Designations", desc: "USD(P&R)/SecDef annual designation list.", url: "https://militarypay.defense.gov/Pay/Special-and-Incentive-Pays/", type: "Memo" },
    { title: "DFAS Pay Entitlements", desc: "DFAS overview of special pays including HDP.", url: "https://www.dfas.mil/militarymembers/payentitlements/", type: "Website" },
  ],
  tempo: {
    intro: "Compensates for excessive time away from home station due to high operational tempo.",
    rate: "$495/month ($16.50/day)",
    rules: [
      { title: "220‑Day Threshold", desc: "Eligible once away from home station exceeds 220 days in the previous 365." },
      { title: "Daily Proration", desc: "Pays $16.50 for each qualifying day past the threshold." },
      { title: "Orders Based", desc: "Deployment, exercises, and ordered absences count; personal leave does not." },
    ],
    checklist: [
      { item: "Count days away using orders and vouchers" },
      { item: "Start payment on day 221 at $16.50/day" },
      { item: "Verify LES shows HDP‑T" },
      { item: "Retain documentation for audits" },
    ],
    scenarios: [
      { name: "Fleet Deployment", counts: true },
      { name: "ITX / 29 Palms field exercise", counts: true },
      { name: "Annual Leave", counts: false },
      { name: "Medical transit from qualifying mission", counts: true },
    ],
  },
};

const SDAP_DATA = {
  intro: "Monthly incentive pay for enlisted members assigned to designated special duty assignments that are extremely difficult, involve unusual responsibility, or require exceptional technical competence.",
  factors: [
    { title: "Assignment Level", desc: "Designated SDAP level 1–6 drives the monthly rate." },
    { title: "Technical Expertise", desc: "Specialized skills or certifications required for the billet." },
    { title: "Responsibility", desc: "Duties exceed normal scope for grade and MOS." },
    { title: "Difficulty", desc: "Challenging assignment conditions and expectations." },
    { title: "Mission Criticality", desc: "Billets essential to mission success and readiness." },
    { title: "Availability", desc: "Shortage of qualified personnel may affect designation." },
  ],
  rules: [
    { title: "Enlisted Only", desc: "SDAP applies to enlisted personnel; officers are not eligible." },
    { title: "Authorized Billet", desc: "Must be assigned to a billet on the current SDAP authorization list." },
    { title: "BIC‑Driven Entitlement", desc: "Triggered by MCTFS Billet Identification Code. CO must certify the Marine is actually performing SDA duties; non‑performance in an SDA‑coded BIC is improper." },
    { title: "90‑Day Rule", desc: "SDAP continues during TDY, hospitalization, or authorized leave for up to 90 days. Terminate on the 91st consecutive day away from the SDA billet." },
    { title: "One SDAP", desc: "Only one SDAP payment per month; the higher eligible rate applies." },
    { title: "Rate Variations", desc: "Marine Corps uses monthly installment variations for SDA billets (e.g., Recruiters/DI may shift between Levels 4–5 based on role)." },
    { title: "Tax", desc: "Taxable in normal duty; excluded when earned in a designated combat zone." },
    { title: "Assignment Based", desc: "MOS alone does not qualify; assignment to the billet is required." },
    { title: "Authorization Changes", desc: "Billets may be added or removed based on reviews and policy updates." },
  ],
  levels: [
    { level: 1, amount: 75 },
    { level: 2, amount: 150 },
    { level: 3, amount: 225 },
    { level: 4, amount: 300 },
    { level: 5, amount: 375 },
    { level: 6, amount: 450 },
  ],
  docs: {
    start: [
      { name: "Orders to SDAP Billet", detail: "PCS or special orders assigning to an authorized SDAP position." },
      { name: "SDAP Authorization", detail: "Current MARADMIN or regulation listing the billet and level." },
      { name: "Qualifications", detail: "Evidence of MOS, rank, training, or other required credentials." },
      { name: "Unit Diary Start", detail: "S‑1 processes start in MCTFS with SDAP level and effective date." },
    ],
    stop: [
      { name: "Termination Orders", detail: "PCS or relief from SDAP duties with effective date." },
      { name: "Unit Diary Stop", detail: "S‑1 processes stop in MCTFS with termination date." },
    ],
  },
  steps: [
    { title: "Receive Orders", detail: "Assignment to an SDAP‑authorized billet per competent orders." },
    { title: "Check In", detail: "Report to unit and commence the special duty assignment." },
    { title: "Verify Authorization", detail: "Confirm billet appears on current SDAP authorization list and level." },
    { title: "Start in MCTFS", detail: "S‑1 inputs start action with level and effective date." },
    { title: "LES Appearance", detail: "SDAP shows within 1–2 pay periods after processing." },
  ],
  qa: [
    { q: "Assigned to recruiter duty but SDAP hasn’t started", a: "Verify orders show an SDAP‑authorized billet, confirm current authorization list, and ensure S‑1 processed the start." },
    { q: "SDAP amount doesn’t match expectations", a: "Confirm the assignment’s designated SDAP level and consult the current rate table." },
    { q: "SDAP stopped during TDY", a: "Extended TDY away from duties may suspend payment; resume when returning to the billet." },
    { q: "Drill Instructor not receiving SDAP", a: "Confirm assignment to an SDAP‑authorized DI billet and submit supporting documentation to S‑1." },
    { q: "Assignment removed from list", a: "SDAP authorizations change periodically; payment terminates when billets are removed." },
    { q: "Two SDAP billets at once", a: "Only one payment is authorized; typically the higher eligible rate applies." },
    { q: "SDAP stopped mid‑tour", a: "Verify continued performance, authorization status, and MCTFS entries; contact S‑1." },
    { q: "Officer assigned to recruiter duty", a: "Officers are not eligible for SDAP; check other special pays instead." },
    { q: "I’m an 8002 JTAC and not receiving SDAP", a: "SDAP is assignment‑based. You must be filling an SDAP‑coded BIC on the T/O. JTAC skill alone does not entitle SDAP unless the billet is authorized." },
  ],
  references: [
    { title: "37 U.S.C. § 352", desc: "Statutory authority for Assignment Pay (SDAP)", url: "https://uscode.house.gov/", type: "Statute" },
    { title: "DoD FMR Vol 7A, Ch 8", desc: "Special Duty Assignment Pay (SDAP)", url: "https://comptroller.defense.gov/Portals/45/documents/fmr/current/07a/07a_08.pdf", type: "Policy" },
    { title: "MCO 7220.12R", desc: "Marine Corps SDAP Program", url: "https://www.marines.mil/", type: "Order" },
    { title: "Current FY MARADMIN (e.g., 231/24)", desc: "Authorized SDAP billets and BICs", url: "https://www.marines.mil/News/Messages/", type: "Announcement" },
    { title: "DFAS Pay Entitlements", desc: "Overview of special pays and entitlements.", url: "https://www.dfas.mil/militarymembers/payentitlements/", type: "Website" },
    { title: "Special & Incentive Pays", desc: "DoD overview of special pays including SDAP.", url: "https://militarypay.defense.gov/Pay/Special-and-Incentive-Pays/", type: "Website" },
  ],
};

const DIVE_DATA = {
  factors: [
    { title: "Primary Duty", desc: "Assigned to diving duty by competent orders." },
    { title: "Medical Clearance", desc: "Must maintain a current diving physical; pay stops if expired." },
    { title: "Performance", desc: "Meet minimum diving operations requirements per policy." },
  ],
  rules: [
    { title: "$150 Flat Rate", desc: "Paid monthly, prorated for partial months on orders." },
    { title: "Tax Status", desc: "Taxable in CONUS; non‑taxable in designated combat zones." },
    { title: "One HDIP", desc: "Cannot stack with other HDIP types in the same month." },
  ],
  docs: {
    start: [
      { name: "Written Orders", detail: "CO orders specifying diving duty as primary assignment." },
      { name: "Dive Qualification", detail: "Graduation certificate and current certifications." },
      { name: "Medical Clearance", detail: "Current diving physical and clearance from medical authority." },
    ],
    stop: [
      { name: "Termination Orders", detail: "Memo documenting end of diving assignment." },
      { name: "Medical Decertification", detail: "Documentation of permanent diving disqualification." },
    ],
  },
  qa: [
    { q: "Dive school grad but in a desk job", a: "Not eligible. Must be in a designated diving billet with orders." },
    { q: "Diving physical expired", a: "Pay stops the day clearance expires. Resume only after re‑qualification." },
    { q: "Temporarily injured (no misconduct)", a: "May continue to receive HDIP up to 6 months, potentially 12, per policy." },
    { q: "Qualified for Dive and Jump pay", a: "Only one $150 HDIP per month is generally paid. Choose one." },
  ],
  references: [
    { title: "Special & Incentive Pays", desc: "DoD overview of special pays including HDIP.", url: "https://militarypay.defense.gov/Pay/Special-and-Incentive-Pays/", type: "Website" },
    { title: "DFAS Pay Entitlements", desc: "Overview of entitlements and special pays.", url: "https://www.dfas.mil/militarymembers/payentitlements/", type: "Website" },
    { title: "DoD FMR Vol 7A", desc: "Policy volume covering military pay and allowances.", url: "https://comptroller.defense.gov/FMR/Volume_7a.aspx", type: "Policy" },
  ],
};

const STRESS_DATA = {
  factors: [
    { title: "Human Test Subject", desc: "Required by competent orders to perform duty as a human test subject in approved protocols." },
    { title: "Research vs Operations", desc: "Applies to research and development; routine operational decompression or training does not qualify." },
    { title: "Performance Based", desc: "Authorized only for months where experimental stress duty is actually performed." },
  ],
  types: [
    { title: "Acceleration", desc: "Testing G‑forces and rapid speed changes using experimental devices." },
    { title: "Thermal Stress", desc: "Testing effects of extreme heat or cold on the human body." },
    { title: "Low Pressure", desc: "Altitude chamber testing for high‑altitude/low‑pressure environments." },
    { title: "High Pressure", desc: "Hyperbaric or recompression chamber protocols for research or treatment." },
  ],
  rules: [
    { title: "$150 Flat Rate", desc: "Paid monthly in addition to basic pay; performance‑based." },
    { title: "One Payment Per Month", desc: "Only one HDIP may be received per month, even if multiple experiment types are performed." },
    { title: "Non‑Qualifying Duties", desc: "Operational decompression, patient treatment, maintenance, and training/proficiency tests do not qualify." },
  ],
  docs: {
    start: [
      { name: "Experimental Orders", detail: "Written orders from an authorized commander specifying the stress duty type." },
      { name: "Protocol Approval", detail: "Documentation of participation in an approved research/evaluation protocol." },
      { name: "Medical Clearance", detail: "Specialized medical clearance for high‑risk human subject testing." },
    ],
    maintenance: [
      { name: "Performance Log", detail: "Facility record verifying participation on specific test dates." },
      { name: "Unit Diary Entry", detail: "S‑1 administrative action to trigger the $150 monthly payment." },
    ],
  },
  qa: [
    { q: "Diver using the chamber but no pay", a: "Routine surface decompression after a normal dive is operational and does not qualify for Experimental Stress HDIP." },
    { q: "Did acceleration and thermal tests in one month", a: "Only one $150 payment is authorized per month regardless of types performed." },
    { q: "Training to be a chamber operator", a: "Instructional or trainee status generally does not qualify; must be the test subject or designated observer in a protocol." },
    { q: "Protocol ended mid‑month", a: "Pay may be prorated (1/30 per day) based on orders duration and participation dates." },
  ],
  references: [
    { title: "DoD Instruction 1340.09", desc: "Policy guidance for Special and Incentive Pays, including experimental stress duty.", url: "https://www.esd.whs.mil/Directives/issuances/dodi/", type: "Policy" },
    { title: "DoD FMR Vol 7A, Ch 11", desc: "Hazardous Duty Incentive Pays policy volume.", url: "https://comptroller.defense.gov/Portals/45/documents/fmr/current/07a/07a_11.pdf", type: "Policy" },
    { title: "Special & Incentive Pays", desc: "DoD overview of special pays, including HDIP.", url: "https://militarypay.defense.gov/Pay/Special-and-Incentive-Pays/", type: "Website" },
    { title: "DFAS Pay Entitlements", desc: "Overview of entitlements and special pays.", url: "https://www.dfas.mil/militarymembers/payentitlements/", type: "Website" },
  ],
};

const FDHD_DATA = {
  factors: [
    { title: "FDHD Billet", desc: "You must be assigned to a designated Flight Deck Hazardous Duty (FDHD) billet per orders." },
    { title: "Certified Ship", desc: "Ship must be flight-deck certified by the CNO to launch/land aircraft." },
    { title: "Performance Rule", desc: "Requires 4 days of flight ops participation (or class-specific equivalent) per month." },
  ],
  rules: [
    { title: "$150 Flat Rate", desc: "Monthly special pay added to basic pay. Prorated if starting/ending mid-month." },
    { title: "Tax Status", desc: "Non-taxable only if received while in a designated combat zone." },
    { title: "No Stacking", desc: "Cannot receive FDHDIP if receiving another HDIP (Jump/Dive/Demo) for the same period." },
  ],
  docs: {
    start: [
      { name: "FDHD Billet Orders", detail: "PCS/Assignment orders specifying frequent and regular flight deck participation." },
      { name: "Participation Record", detail: "Command-tracked flight deck log or roster verifying your presence during ops." },
      { name: "Unit Diary Entry", detail: "S-1 administrative action to link your billet and orders to the pay system." },
    ],
    stop: [
      { name: "Termination Orders", detail: "PCS orders or reassignment to a non-FDHD division/billet." },
      { name: "Revocation Memo", detail: "Orders revoking FDHD status due to medical or administrative relief." },
    ],
  },
  qa: [
    { q: "I work on the deck but don't get paid.", a: "Simply working on the deck isn't enough. You must be in a designated FDHD billet (per OPNAVINST 7220.4) to be eligible." },
    { q: "Ship has been in port for 2 months.", a: "FDHDIP stops if you cannot meet the 4-day performance requirement due to lack of flight operations. It resumes when ops resume." },
    { q: "I was on watch below decks during ops.", a: "Time on watch below decks does not count. You must be physically present at your assigned station on the flight deck." },
    { q: "I got injured during flight ops.", a: "If injured during duty (not misconduct), FDHDIP can continue for up to 6 months while you recover and are unable to perform." },
  ],
  references: [
    { title: "OPNAVINST 7220.4", desc: "Flight Deck Hazardous Duty policy guidance.", url: "https://www.secnav.navy.mil/doni/manuals-opnav.aspx", type: "Policy" },
    { title: "DoD FMR Vol 7A Ch 11", desc: "Hazardous Duty Incentive Pays policy volume.", url: "https://comptroller.defense.gov/Portals/45/documents/fmr/current/07a/07a_11.pdf", type: "Policy" },
    { title: "Special & Incentive Pays", desc: "DoD overview of special pays, including FDHDIP.", url: "https://militarypay.defense.gov/Pay/Special-and-Incentive-Pays/", type: "Website" },
    { title: "DFAS Pay Entitlements", desc: "Overview of entitlements and special pays.", url: "https://www.dfas.mil/militarymembers/payentitlements/", type: "Website" },
  ],
};

const PARACHUTE_DATA = {
  factors: [
    { title: "Jump Billet", desc: "Assigned by competent orders to a designated parachute duty billet." },
    { title: "Qualification & Currency", desc: "Hold Basic/MFF qualification and maintain currency per policy." },
    { title: "Monthly Performance", desc: "Perform qualifying parachute operations and command certification monthly." },
  ],
  rules: [
    { title: "Standard Rate", desc: "$150 per month for parachute duty." },
    { title: "MFF/HALO Rate", desc: "$225 per month for Military Free Fall (HALO)." },
    { title: "One HDIP", desc: "Only one type of HDIP may be received per month." },
  ],
  docs: {
    start: [
      { name: "Parachute Duty Orders", detail: "Written orders assigning parachute duty as primary duty (Basic or MFF/HALO)." },
      { name: "Qualification Certificate", detail: "Proof of Basic/MFF qualification and training completion." },
      { name: "Jump Log / Currency", detail: "Record of recent jumps and currency status." },
    ],
    stop: [
      { name: "Termination Orders", detail: "PCS or reassignment out of parachute duty billet." },
      { name: "Decertification", detail: "Loss of qualification or currency beyond policy limits." },
    ],
  },
  qa: [
    { q: "Qualified but not in a jump billet", a: "Not eligible. You must be assigned to a designated parachute duty billet and meet monthly requirements." },
    { q: "No jumps this month due to operations", a: "If unable to perform for reasons not due to misconduct, pay may continue for a limited period per policy." },
    { q: "Receiving another HDIP", a: "Only one HDIP may be paid per month. Choose the applicable duty type." },
  ],
  references: [
    { title: "DoD FMR Vol 7A, Ch 11", desc: "Hazardous Duty Incentive Pays policy volume.", url: "https://comptroller.defense.gov/Portals/45/documents/fmr/current/07a/07a_11.pdf", type: "Policy" },
    { title: "Special & Incentive Pays", desc: "DoD overview, including parachute duty pay and MFF.", url: "https://militarypay.defense.gov/Pay/Special-and-Incentive-Pays/", type: "Website" },
    { title: "DFAS Pay Entitlements", desc: "Overview of entitlements and special pays.", url: "https://www.dfas.mil/militarymembers/payentitlements/", type: "Website" },
  ],
};

const VBSS_DATA = {
  factors: [
    { title: "Competent Orders", desc: "Required by competent orders to perform VBSS duty." },
    { title: "VBSS Billet", desc: "Assigned to a billet requiring frequent and regular VBSS participation." },
    { title: "Frequent Participation", desc: "Regular member of VBSS team with frequent operations." },
    { title: "Maritime Interdiction", desc: "Operations aboard vessels in support of maritime interdiction." },
  ],
  rules: [
    { title: "Monthly Rate", desc: "$150 per month for VBSS duty." },
    { title: "Tax", desc: "Not taxable when earned in a designated combat zone." },
    { title: "Multiple HDIP", desc: "May be combined with other HDIP types when independently qualified, up to three per month." },
  ],
  docs: {
    start: [
      { name: "Orders to VBSS Assignment", detail: "PCS or assignment orders to a designated VBSS billet." },
      { name: "VBSS Qualification", detail: "Completion of VBSS course, team qualification, and required weapons/small boat quals." },
      { name: "Team Assignment", detail: "Documentation of assignment to VBSS team; roster or billet designation." },
      { name: "Unit Diary Start", detail: "Diary action to start VBSS HDIP in MCTFS; effective on VBSS order date." },
      { name: "Participation Log", detail: "VBSS operations log or training currency record tracked by command." },
    ],
    stop: [
      { name: "Termination Orders", detail: "PCS or reassignment to a non‑VBSS billet; relief from VBSS duties." },
      { name: "Unit Diary Stop", detail: "Diary action to stop VBSS HDIP with effective termination date." },
      { name: "Loss of Qualification", detail: "CO memorandum documenting loss of VBSS qualification or medical disqualification." },
    ],
  },
  qa: [
    { q: "Assigned to ship but not receiving HDIP", a: "Must be assigned to a designated VBSS billet and be a regular team member; verify billet designation and orders." },
    { q: "Single VBSS op this deployment — where is HDIP?", a: "Occasional participation does not qualify. Eligibility requires frequent and regular participation as a VBSS team member." },
    { q: "VBSS training expired and HDIP stopped", a: "Maintain current VBSS qualifications and weapons/small boat currency. HDIP resumes when qualifications are renewed." },
    { q: "No operations for months", a: "Training and readiness exercises count. Extended periods without operations or training may affect eligibility per command." },
    { q: "Pier‑side inspections", a: "Not VBSS. VBSS requires boarding vessels at sea during maritime interdiction operations." },
    { q: "VBSS and Dive HDIP simultaneously?", a: "Yes, if independently qualified and assigned to both billets with performance; maximum three HDIP payments per month." },
  ],
  references: [
    { title: "DoD Instruction 1340.09", desc: "Special and Incentive Pays policy, including hazardous duties.", url: "https://www.esd.whs.mil/Directives/issuances/dodi/", type: "Policy" },
    { title: "DoD FMR Vol 7A, Ch 11", desc: "Hazardous Duty Incentive Pays policy volume.", url: "https://comptroller.defense.gov/Portals/45/documents/fmr/current/07a/07a_11.pdf", type: "Policy" },
    { title: "Special & Incentive Pays", desc: "Official overview and rates for hazardous duty pays.", url: "https://militarypay.defense.gov/Pay/Special-and-Incentive-Pays/", type: "Website" },
    { title: "DFAS Pay Entitlements", desc: "DFAS overview for pay entitlements and HDIP.", url: "https://www.dfas.mil/militarymembers/payentitlements/", type: "Website" },
  ],
};

const SO_DATA = {
  factors: [
    { title: "Polar Ground Ops", desc: "Ski‑equipped aircraft ground operations in Antarctica or the Arctic Ice‑Pack under competent orders." },
    { title: "Polar Environment", desc: "Extreme cold, remote locations, operations on snow/ice surfaces; not established runways." },
    { title: "WMDCS Team (RC)", desc: "Reserve Component only; assignment to designated 22‑member civil support team with CBRNE qualifications." },
    { title: "Performance & Currency", desc: "Documented participation in operations/training; maintain required qualifications and readiness." },
  ],
  rules: [
    { title: "Monthly Rate", desc: "$150 per month per qualifying duty." },
    { title: "Tax", desc: "Not taxable when earned in a designated combat zone." },
    { title: "Multiple HDIP", desc: "May be combined with other HDIP types when independently qualified, up to three per month." },
  ],
  docs: {
    polarStart: [
      { name: "Orders to Polar Operations", detail: "PCS/TDY orders to Antarctica or Arctic Ice‑Pack operations specifying ski‑equipped aircraft ground operations." },
      { name: "Polar Training & Qualification", detail: "Cold weather survival, polar procedures; ski‑equipped aircraft qualifications if applicable." },
      { name: "Unit Diary Start", detail: "Diary action to start HDIP in MCTFS; link orders to pay system with effective date." },
      { name: "Operations Log", detail: "Log verifying ground operations participation on snow/ice; command‑tracked." },
    ],
    polarStop: [
      { name: "Orders Terminating Polar Ops", detail: "Completion of deployment/TDY or PCS away from polar operations." },
      { name: "Unit Diary Stop", detail: "Diary action to stop HDIP with documented termination date." },
    ],
    wmdcsStart: [
      { name: "Orders to WMDCS Team", detail: "Reserve Component orders assigning to designated WMDCS team unit and position." },
      { name: "WMDCS Training & CBRNE", detail: "Completion of team training, CBRNE qualifications, and specialty certifications." },
      { name: "Unit Diary Start", detail: "Diary action to start WMDCS HDIP in MCTFS; effective date documented." },
      { name: "Participation Records", detail: "Team training/readiness exercises and drill participation records for RC members." },
    ],
    wmdcsStop: [
      { name: "Relief from WMDCS Team", detail: "Orders relieving from team assignment or transfer out of designated unit." },
      { name: "Unit Diary Stop", detail: "Diary action to stop HDIP with effective termination date." },
      { name: "Loss of Qualification", detail: "CO memo documenting loss of required qualifications or medical disqualification." },
    ],
  },
  qa: [
    { q: "Flew over Antarctica but no ground ops — eligible?", a: "No. Polar HDIP requires ground operations with ski‑equipped aircraft on snow/ice; overflight alone does not qualify." },
    { q: "Stationed at McMurdo — automatically eligible?", a: "Not automatically. Eligibility depends on performing ski‑equipped aircraft ground operations on snow/ice." },
    { q: "Runway landings count?", a: "Established groomed runways generally do not qualify. Unprepared snow/ice with ski‑equipped aircraft is required; confirm with S‑1." },
    { q: "Active duty in CBRNE — WMDCS HDIP?", a: "No. WMDCS HDIP applies only to Reserve Component members assigned to designated WMDCS teams." },
    { q: "National Guard CBRNE without HDIP", a: "Verify assignment to a designated WMDCS team. Not all CBRNE units are WMDCS teams." },
    { q: "RC payment seems low", a: "RC payments may be prorated for drill periods; full monthly rate applies when on active duty orders 30+ days." },
    { q: "Combine Polar and Parachute HDIP?", a: "Yes, if independently qualified and performing both; maximum three HDIP payments per month." },
  ],
  references: [
    { title: "DoD Instruction 1340.09", desc: "Special and Incentive Pays policy, including hazardous duties.", url: "https://www.esd.whs.mil/Directives/issuances/dodi/", type: "Policy" },
    { title: "DoD FMR Vol 7A, Ch 11", desc: "Hazardous Duty Incentive Pays policy volume.", url: "https://comptroller.defense.gov/Portals/45/documents/fmr/current/07a/07a_11.pdf", type: "Policy" },
    { title: "Special & Incentive Pays", desc: "Official overview and rates for hazardous duty pays.", url: "https://militarypay.defense.gov/Pay/Special-and-Incentive-Pays/", type: "Website" },
    { title: "DFAS Pay Entitlements", desc: "DFAS overview for pay entitlements and HDIP.", url: "https://www.dfas.mil/militarymembers/payentitlements/", type: "Website" },
  ],
};

const TM_DATA = {
  intro: "Hazardous Duty Incentive Pay for handling toxic substances as a primary duty assignment. Applies to toxic fuels/propellants, toxic pesticides, dangerous viruses/bacteria (laboratory duty), and chemical munitions.",
  categories: [
    { title: "Toxic Fuels or Propellants", desc: "Servicing or testing aircraft/missile systems using highly toxic fuels/propellants as a primary duty." },
    { title: "Toxic Pesticides", desc: "Preventive medicine, pest management, or entomology assignments involving highly toxic pesticides for 30+ consecutive days." },
    { title: "Dangerous Viruses or Bacteria (Laboratory)", desc: "Laboratory duty with live dangerous agents; BSL-2/3/4 as applicable; not inactivated specimens." },
    { title: "Chemical Munitions", desc: "Handling munitions containing toxic chemical agents; distinct from standard explosives/demolition duty." },
  ],
  factors: [
    { title: "Primary Duty", desc: "Toxic materials work is the primary duty; regular and frequent involvement is required." },
    { title: "Competent Orders", desc: "Orders designate toxic materials duty and specific category." },
    { title: "Performance", desc: "Actual performance documented; meets policy standards." },
    { title: "Medical Clearance", desc: "Baseline and current medical clearance required; monitoring may be ongoing." },
    { title: "Pesticides 30-Day Minimum", desc: "Assigned to qualifying function for 30 consecutive days or more." },
    { title: "Multiple HDIPs", desc: "Independently qualify for multiple categories; maximum three HDIP payments per month in total." },
  ],
  rules: [
    { title: "$150 Monthly Rate", desc: "$150 per month per qualifying toxic materials duty." },
    { title: "Tax Status", desc: "Taxable in normal duty; non-taxable in designated combat zones." },
    { title: "Full Month vs Prorated", desc: "Full month when on orders entire month; otherwise prorated at 1/30 per qualifying day." },
    { title: "Reserve Component", desc: "RC members on active duty receive HDIP; payments may be prorated based on days of participation." },
    { title: "Potential vs Actual Exposure", desc: "Authorization based on potential for accidental/inadvertent exposure; not proof of actual exposure." },
    { title: "Safety Compliance", desc: "Follow protocols and PPE; loss of medical clearance suspends or terminates HDIP." },
  ],
  docs: {
    start: [
      { name: "Orders to Toxic Materials Duty", detail: "Written orders assigning toxic materials duty; specify category and primary duty." },
      { name: "Qualification Documentation", detail: "Training/certifications for toxic handling, lab biosafety, or chemical munitions." },
      { name: "Medical Clearance", detail: "Medical examination and baseline evaluation documented prior to duty." },
      { name: "Assignment to Qualifying Function", detail: "Pesticides: preventive medicine/pest management/entomology assignment for 30+ consecutive days." },
      { name: "Unit Diary Entry", detail: "S‑1 processes MCTFS HDIP start; effective date documented." },
      { name: "Performance Documentation", detail: "Logs/records verifying toxic materials duty performance maintained by command." },
    ],
    stop: [
      { name: "Orders Terminating Duty", detail: "Relief from toxic materials duty or PCS to non‑toxic assignment." },
      { name: "Unit Diary Stop", detail: "MCTFS action to stop HDIP with effective termination date." },
      { name: "Medical Disqualification", detail: "Temporary or permanent disqualification documented by medical authority." },
      { name: "Reassignment Memo", detail: "Orders or memo documenting reassignment to duties not involving toxic materials." },
    ],
  },
  qa: [
    { q: "Occasional refueling but no toxic fuels HDIP", a: "Must be primary duty with regular and frequent servicing or testing using highly toxic fuels; occasional exposure does not qualify." },
    { q: "Pest management without HDIP", a: "Requires assignment for 30 consecutive days with frequent exposure to highly toxic pesticides; shorter assignments do not qualify." },
    { q: "Medical lab work but no virus/bacteria HDIP", a: "Must work with live dangerous agents as a primary duty; inactivated or non-dangerous specimens do not qualify." },
    { q: "Exposed to toxic fuel — health concerns?", a: "Receiving HDIP does not indicate actual exposure occurred. Report any suspected exposure to medical and follow protocols." },
    { q: "Handle ammunition/explosives — chemical munitions HDIP?", a: "Standard explosives are demolition duty. Chemical munitions HDIP applies only when handling munitions with toxic chemical agents." },
    { q: "Pest management for 3 weeks — when does HDIP start?", a: "Begins after completing 30 consecutive days; payment may be processed retroactive once the threshold is met." },
    { q: "HDIP stopped after reassignment", a: "Correct when new duties do not involve toxic materials. HDIP resumes upon reassignment to qualifying duties." },
    { q: "Receive HDIP for fuels and chemical munitions?", a: "Yes, if independently qualified and both are primary duties, subject to the maximum of three HDIPs total per month." },
    { q: "Medical clearance expired", a: "Cannot perform toxic materials duties without current clearance; HDIP stops until renewed and duties resume." },
  ],
  references: [
    { title: "DoD Instruction 1340.09", desc: "Policy guidance for Special and Incentive Pays, including toxic materials duty.", url: "https://www.esd.whs.mil/Directives/issuances/dodi/", type: "Policy" },
    { title: "DoD FMR Vol 7A, Ch 11", desc: "Hazardous Duty Incentive Pays policy volume.", url: "https://comptroller.defense.gov/Portals/45/documents/fmr/current/07a/07a_11.pdf", type: "Policy" },
    { title: "Special & Incentive Pays", desc: "Official overview and rates for special pays.", url: "https://militarypay.defense.gov/Pay/Special-and-Incentive-Pays/", type: "Website" },
    { title: "DFAS Pay Entitlements", desc: "DFAS overview for pay entitlements and HDIP.", url: "https://www.dfas.mil/militarymembers/payentitlements/", type: "Website" },
  ],
};

const ACIP_DATA = {
  intro: "Monthly incentive pay for aeronautically designated officers performing operational flying duty. Post‑FY17 policy uses ASED‑based gates to determine Continuous vs Conditional pay, with YAS‑based monthly rates.",
  factors: [
    { title: "Aeronautical Designation", desc: "Officer is aeronautically designated and awarded wings." },
    { title: "Operational Flying Duty", desc: "Assigned to a DIFOT flying billet under current orders." },
    { title: "Current Flight Orders", desc: "Valid flight orders issued and on file." },
    { title: "Medical Qualification", desc: "Current flight physical and medical clearance maintained." },
    { title: "ASED & YAS", desc: "Gates measured from ASED; monthly rates vary by YAS." },
  ],
  rules: [
    { title: "Continuous vs Conditional", desc: "Meeting gates grants continuous pay in non‑flying tours; missing gates requires monthly flight to be paid." },
    { title: "Gate Checks", desc: "ASED‑based gates at 12 and 18 years determine continuous eligibility windows." },
    { title: "4.0 Hour Minimum", desc: "Conditional status requires 4.0 flight hours per month; banking allowed." },
    { title: "Tax in CZTE", desc: "ACIP is excluded from tax when earned in designated combat zones." },
    { title: "Stop Conditions", desc: "ACIP stops when flight orders terminate or medical disqualification occurs." },
  ],
  systems: [
    { title: "Legacy System (Pre‑FY17)", points: ["Based on checks at 12 and 18 YAS", "Required meeting flight hour milestones or pay became conditional/stopped"] },
    { title: "Modern System (Post‑FY17)", points: ["Established by FY17 NDAA", "Simplified tiers; increased Operational Flying requirements for continuous pay"] },
  ],
  milestones: [
    { checkpoint: "At 12 Years (ASED)", requirement: "At least 6 Years of Operational Flying", result: "Continuous Pay through Year 18" },
    { checkpoint: "At 18 Years (ASED)", requirement: "At least 9 Years of Operational Flying", result: "Continuous Pay through Year 22" },
    { checkpoint: "At 18 Years (ASED)", requirement: "At least 11 Years of Operational Flying", result: "Continuous Pay through Year 25" },
  ],
  docs: {
    start: [
      { name: "Aeronautical Designation", detail: "Orders or certificate awarding wings and aeronautical status." },
      { name: "Flight Physical", detail: "Current flight physical and medical clearance documentation." },
      { name: "Flight Orders", detail: "Command-issued flight orders assigning operational flying duty." },
      { name: "Billet Assignment", detail: "Assignment to operational flying billet or platform." },
      { name: "Unit Diary Start", detail: "Administrative action to start ACIP in MCTFS." },
    ],
    stop: [
      { name: "Terminate Flight Orders", detail: "Orders or memo terminating flight status or reassignment." },
      { name: "Medical Disqualification", detail: "Documentation of temporary or permanent flight disqualification." },
      { name: "Non-Flying Assignment", detail: "Reassignment to non-operational duties exceeding policy limits." },
      { name: "Unit Diary Stop", detail: "Administrative action to stop ACIP with effective date." },
    ],
  },
  definitions: [
    { term: "ASED", desc: "Aviation Service Entry Date; usually the date you first reported to flight school. Starts the 12/18‑year gate clock." },
    { term: "YAS", desc: "Years of Aviation Service since ASED; determines monthly ACIP rate tiers." },
    { term: "DIFOT", desc: "Duty Involving Flying Operational Training; assigned to a flying slot." },
    { term: "DIFDEN", desc: "Duty Involving Flying Denied; in a ground slot. ACIP continues only if you have met your gates or meet conditional requirements." },
  ],
  conditional: [
    { title: "Conditional Pay Requirements", bullets: ["Minimum 4.0 flight hours per month while conditional", "Bank excess hours to cover short months (up to 5‑month look‑back)", "Failing to meet monthly minimum suspends ACIP until requirements are met"] },
  ],
  qa: [
    { q: "Missed a gate — now what?", a: "Your pay becomes conditional. You must fly 4.0 hours per month or use banked hours to receive ACIP." },
    { q: "Banking hours rules", a: "You can bank hours above 4.0 to cover a low‑flight month, using a 5‑month look‑back window." },
    { q: "Wrong ACIP rate on LES", a: "Rates depend on YAS tiers. Verify ASED and YAS with admin to ensure correct gate/rate." },
    { q: "DIFDEN tour eligibility", a: "If you met gates, ACIP is continuous during DIFDEN tours. If not, conditional requirements apply." },
    { q: "ACIP with HDIP", a: "ACIP may be received in addition to HDIP when independently eligible and assigned." },
    { q: "Flight orders expired", a: "Renew orders and medical. ACIP stops when orders or medical qualifications lapse and resumes when restored." },
    { q: "Combat zone tax status", a: "ACIP earned in designated combat zones is excluded from federal income tax." },
  ],
  references: [
    { title: "DoD FMR Vol. 7A, Ch 22 §2.0 (AvIP)", desc: "Aviation Incentive Pay policy and gate framework.", url: "https://comptroller.defense.gov/FMR/Volume_7a.aspx", type: "Policy" },
    { title: "MCO 7220.52F", desc: "Marine Corps Aviation Incentive Pay Program.", url: "https://www.marines.mil/", type: "Order" },
    { title: "37 U.S.C. § 334", desc: "Statutory authority for aviation incentive pay structures.", url: "https://uscode.house.gov/", type: "Statute" },
    { title: "Special & Incentive Pays", desc: "Official overview and rates.", url: "https://militarypay.defense.gov/Pay/Special-and-Incentive-Pays/", type: "Website" },
    { title: "DFAS Pay Entitlements", desc: "Overview of entitlements and incentive pays.", url: "https://www.dfas.mil/militarymembers/payentitlements/", type: "Website" },
  ],
};

const FLPP_DATA = {
  intro: "Monthly bonus for service members who demonstrate foreign language proficiency. FLPB pays based on proficiency and language priority, with duty vs investment distinctions.",
  factors: [
    { title: "Language Proficiency", desc: "DLPT or approved tests in listening and reading; OPI speaking may be required for top tiers." },
    { title: "Language Priority", desc: "Categories (A/B/C) or strategic priority determine investment vs required rules." },
    { title: "Duty vs Investment", desc: "Required/Enduring languages need a coded billet; Investment/Priority languages may pay regardless of billet." },
    { title: "Multiple Languages", desc: "Payment authorized for up to two languages simultaneously (combined cap applies)." },
  ],
  tiers: [
    { title: "1/1–2/2", desc: "Entry/professional working proficiency; rates vary by priority." },
    { title: "2+/2+–3/3", desc: "Professional/dominant proficiency; higher rates for priority languages." },
    { title: "3/3/3 (OPI)", desc: "Top tier requires OPI speaking where applicable." },
  ],
  rules: [
    { title: "$1,000 Monthly Cap", desc: "Maximum $1,000/month for a single language and combined across languages." },
    { title: "$12,000 Annual Cap", desc: "Maximum $12,000/year total regardless of number of languages." },
    { title: "OPI Requirement", desc: "OPI speaking may be required to reach top tiers or for languages lacking L/R tests." },
    { title: "Investment vs Required", desc: "Investment (priority) languages may pay without billet; required languages need language‑coded billets." },
    { title: "Tax in CZTE", desc: "Excluded from tax when earned in designated combat zones." },
    { title: "Certification Validity", desc: "DLPT/OPI must be within validity period; retest before expiration to maintain payment." },
  ],
  docs: {
    start: [
      { name: "NAVMC 11324 / DA 330", detail: "Official score report documenting DLPT and OPI (if required)." },
      { name: "Annual Certification Memo", detail: "States Language Required billet vs Language Independent (priority)." },
      { name: "MCTFS/DEERS LIC Update", detail: "Update Language Identification Code in personnel systems prior to pay action." },
      { name: "Unit Diary Entry", detail: "Administrative action to start FLPB in MCTFS with effective date." },
    ],
    maintenance: [
      { name: "Current DLPT/OPI", detail: "Retest before expiration; submit updated scores to admin." },
      { name: "Annual CO Recertification", detail: "Command annually certifies language status (required vs independent)." },
    ],
    stop: [
      { name: "Score Expiration", detail: "FLPB terminates when certification expires; resumes after new test." },
      { name: "CO Termination Memo", detail: "Language no longer qualifies (e.g., billet change for required languages)." },
      { name: "Unit Diary Stop", detail: "Administrative action to stop FLPB with effective date." },
    ],
  },
  steps: [
    { title: "DLPT/OPI Testing", detail: "Complete required tests for listening, reading, and speaking (OPI)." },
    { title: "Meet Minimums", detail: "Meet proficiency thresholds; verify language priority/category." },
    { title: "Certification Memo", detail: "CO memo noting Required (coded billet) vs Investment (priority/independent)." },
    { title: "Update LIC", detail: "Ensure LIC is updated in MCTFS/DEERS before submission." },
    { title: "Unit Diary Start", detail: "Admin starts FLPB and calculates payment within statutory caps." },
    { title: "LES Verification", detail: "Appears within 1–2 pay periods under Foreign Language Proficiency Bonus." },
  ],
  qa: [
    { q: "Passed DLPT but not in a coded billet", a: "Required/Enduring languages need language‑coded billets; Investment languages may pay without billet." },
    { q: "DLPT/OPI expired and FLPB stopped", a: "Retest and submit new certifications; payment resumes from new test date." },
    { q: "3/3 on L/R but missing OPI", a: "Top tiers may require OPI; schedule OPI to reach higher payment bands." },
    { q: "Paid more than $1,000 this month", a: "Statutory cap is $1,000/month total; adjust expectations and verify categories." },
    { q: "Language categories vs SLL", a: "Many services use A/B/C categories; confirm your service’s current prioritization system." },
    { q: "Add a second language", a: "Submit scores and memo for the second language; combined monthly cap still applies." },
    { q: "Amount doesn't match bands", a: "Verify L/R/S scores and priority category; contact IPAC with documentation." },
    { q: "Wrong dialect test", a: "Retest in the required dialect; previous scores may not qualify." },
    { q: "Annual memo overdue", a: "Request memo update; payment may suspend until recertified." },
    { q: "Failed retest", a: "Payment terminates if minimums are not met; prepare and retest to requalify." },
  ],
  references: [
    { title: "DoDI 1340.27", desc: "Military Foreign Language Skill Proficiency Bonuses.", url: "https://www.esd.whs.mil/Directives/issuances/dodi/", type: "Policy" },
    { title: "DoD FMR Vol 7A, Ch 19", desc: "Foreign Language Proficiency Bonus policy and rates framework.", url: "https://comptroller.defense.gov/FMR/Volume_7a.aspx", type: "Policy" },
    { title: "MCO 7220.52", desc: "Marine Corps Foreign Language Proficiency Bonus program.", url: "https://www.marines.mil/", type: "Order" },
    { title: "37 U.S.C. § 353(b)", desc: "Statutory monthly and annual caps for FLPB.", url: "https://uscode.house.gov/", type: "Statute" },
    { title: "Special & Incentive Pays", desc: "DoD overview including language bonus and pay policies.", url: "https://militarypay.defense.gov/Pay/Special-and-Incentive-Pays/", type: "Website" },
    { title: "DFAS Pay Entitlements", desc: "DFAS overview of pay entitlements and language pay program.", url: "https://www.dfas.mil/militarymembers/payentitlements/", type: "Website" },
  ],
};

// Travel & Transportation Data Objects
const PCS_ORDERS_DATA = {
  references: [
    { title: "Joint Travel Regulations (JTR)", desc: "Official travel policy for PCS moves.", url: "https://www.travel.dod.mil/Policy-Regulations/Joint-Travel-Regulations/", type: "Policy" },
    { title: "MCO 1320.12", desc: "Marine Corps PCS Order Administration.", url: "https://www.marines.mil/", type: "Order" },
    { title: "DFAS Travel Pay", desc: "Travel pay and allowances overview.", url: "https://www.dfas.mil/militarymembers/travelpay/", type: "Website" },
  ],
};

const HHG_DATA = {
  weightAllowances: [
    { rank: "O-6 and above", withDependents: 18000, withoutDependents: 18000 },
    { rank: "O-5 / W-5", withDependents: 17500, withoutDependents: 16000 },
    { rank: "O-4 / W-4", withDependents: 17000, withoutDependents: 14000 },
    { rank: "O-3 / W-3", withDependents: 14500, withoutDependents: 13000 },
    { rank: "O-2 / W-2", withDependents: 13500, withoutDependents: 12500 },
    { rank: "O-1 / W-1", withDependents: 12000, withoutDependents: 10000 },
    { rank: "E-9", withDependents: 15000, withoutDependents: 13000 },
    { rank: "E-8", withDependents: 14000, withoutDependents: 12000 },
    { rank: "E-7", withDependents: 13000, withoutDependents: 11000 },
    { rank: "E-6", withDependents: 11000, withoutDependents: 8000 },
    { rank: "E-5", withDependents: 9000, withoutDependents: 7000 },
    { rank: "E-4", withDependents: 8000, withoutDependents: 7000 },
    { rank: "E-3 and below", withDependents: 8000, withoutDependents: 5000 },
  ],
  references: [
    { title: "MCO 4600.39", desc: "Marine Corps Personal Property Manual (19 Aug 2016).", url: "https://www.marines.mil/", type: "Policy" },
    { title: "MARADMIN 208/25", desc: "FY25 Personal Property Peak Season guidance.", url: "https://www.marines.mil/News/Messages/", type: "Policy" },
    { title: "JTR Chapter 5 Part D", desc: "Joint Travel Regulations - HHG shipping entitlements.", url: "https://www.travel.dod.mil/Policy-Regulations/Joint-Travel-Regulations/", type: "Policy" },
    { title: "DPS Landing Page", desc: "Defense Personal Property System - Start your move here.", url: "https://dps.move.mil", type: "Website" },
    { title: "Move.mil", desc: "Official DoD moving portal for HHG shipments.", url: "https://www.move.mil/", type: "Website" },
  ],
};

const PPM_DATA = {
  references: [
    { title: "JTR Chapter 5", desc: "Permanent Duty Travel - PPM entitlements, GCC calculation, and reimbursement.", url: "https://www.defensetravel.dod.mil/site/travelreg.cfm", type: "Policy" },
    { title: "MCO 4600.39", desc: "Marine Corps Personal Property Manual - PPM procedures and requirements.", url: "https://www.marines.mil/", type: "Policy" },
    { title: "DTR Part IV Appendix K-1", desc: "Defense Transportation Regulation - PPM weight and expense documentation.", url: "https://www.ustranscom.mil/dtr/", type: "Policy" },
    { title: "MilMove Portal", desc: "Create PPM shipments, request AOA, and submit claims.", url: "https://my.move.mil/", type: "Website" },
    { title: "LOGCOM TVCB", desc: "Travel Voucher Certification Branch - PPM claim processing.", url: "https://www.logcom.marines.mil/", type: "Website" },
  ],
};

const PCS_STORAGE_DATA = {
  references: [
    { title: "JTR Chapter 5", desc: "Storage entitlements - SIT, NTS time limits, and extension requirements.", url: "https://www.defensetravel.dod.mil/Docs/perdiem/JTR.pdf", type: "Policy" },
    { title: "MCO 4600.39", desc: "Marine Corps Personal Property Manual - storage procedures.", url: "https://www.marines.mil/", type: "Policy" },
    { title: "DTR Part IV Ch 406", desc: "Defense Transportation Regulation - storage program administration.", url: "https://www.ustranscom.mil/dtr/dtrp4.cfm", type: "Policy" },
    { title: "MilMove Portal", desc: "DPS/MilMove for storage requests and tracking.", url: "https://www.move.mil/", type: "Website" },
    { title: "PCSmyPOV.com", desc: "POV shipping and storage for OCONUS moves.", url: "https://www.pcsmypov.com/", type: "Website" },
    { title: "Military OneSource", desc: "Moving and storage resources and guidance.", url: "https://www.militaryonesource.mil/moving-pcs/", type: "Website" },
  ],
};

const DLA_DATA = {
  rates: [
    { rank: "E-1 to E-5", withDependents: 2386.26, withoutDependents: 1680.22 },
    { rank: "E-6", withDependents: 2818.06, withoutDependents: 1971.82 },
    { rank: "E-7 to E-9", withDependents: 2973.13, withoutDependents: 2188.09 },
    { rank: "W-1 to W-2", withDependents: 2973.13, withoutDependents: 2188.09 },
    { rank: "W-3 to W-5", withDependents: 3396.58, withoutDependents: 2573.00 },
    { rank: "O-1 to O-2", withDependents: 2973.13, withoutDependents: 2188.09 },
    { rank: "O-3", withDependents: 3396.58, withoutDependents: 2573.00 },
    { rank: "O-4 to O-5", withDependents: 3626.43, withoutDependents: 2798.53 },
    { rank: "O-6+", withDependents: 4064.93, withoutDependents: 3150.30 },
  ],
  references: [
    { title: "Joint Travel Regulations Ch 5", desc: "DLA entitlement and calculation.", url: "https://www.travel.dod.mil/Policy-Regulations/Joint-Travel-Regulations/", type: "Policy" },
    { title: "DFAS DLA Info", desc: "DLA payment processing.", url: "https://www.dfas.mil/militarymembers/travelpay/", type: "Website" },
  ],
};

const TLE_DATA = {
  references: [
    { title: "Joint Travel Regulations Ch 5", desc: "TLE entitlement and limits.", url: "https://www.travel.dod.mil/Policy-Regulations/Joint-Travel-Regulations/", type: "Policy" },
    { title: "DTMO TLE Rates", desc: "TLE per diem rate lookup.", url: "https://www.travel.dod.mil/Allowances/Temporary-Lodging-Expense/", type: "Website" },
    { title: "DFAS Travel Pay", desc: "TLE reimbursement procedures.", url: "https://www.dfas.mil/militarymembers/travelpay/", type: "Website" },
  ],
};

const VEHICLE_DATA = {
  references: [
    { title: "Joint Travel Regulations Ch 5", desc: "POV shipment and storage entitlements.", url: "https://www.travel.dod.mil/Policy-Regulations/Joint-Travel-Regulations/", type: "Policy" },
    { title: "USTRANSCOM POV", desc: "Vehicle Coordination Office info.", url: "https://www.ustranscom.mil/", type: "Website" },
    { title: "PCSmyPOV", desc: "Official POV shipping portal.", url: "https://www.pcsmypov.com/", type: "Website" },
  ],
};

const TAD_DATA = {
  references: [
    { title: "Joint Travel Regulations Ch 2", desc: "TAD/TDY travel policy and entitlements.", url: "https://www.travel.dod.mil/Policy-Regulations/Joint-Travel-Regulations/", type: "Policy" },
    { title: "Defense Travel System", desc: "Official DTS portal.", url: "https://www.defensetravel.dod.mil/", type: "Website" },
    { title: "DFAS Travel Pay", desc: "TAD reimbursement processing.", url: "https://www.dfas.mil/militarymembers/travelpay/", type: "Website" },
  ],
};

const PER_DIEM_DATA = {
  perDiemRates: [
    { location: "CONUS Standard", lodging: "$110", mie: "$64", total: "$174" },
    { location: "Washington DC", lodging: "$267", mie: "$79", total: "$346" },
    { location: "San Diego, CA", lodging: "$225", mie: "$79", total: "$304" },
    { location: "New York City", lodging: "$343", mie: "$79", total: "$422" },
  ],
  references: [
    { title: "GSA Per Diem Rates", desc: "Official CONUS per diem rates.", url: "https://www.gsa.gov/travel/plan-book/per-diem-rates", type: "Website" },
    { title: "DTMO Per Diem", desc: "OCONUS per diem rate lookup.", url: "https://www.travel.dod.mil/Allowances/Per-Diem/", type: "Website" },
    { title: "Joint Travel Regulations Ch 2", desc: "Per diem policy and computation.", url: "https://www.travel.dod.mil/Policy-Regulations/Joint-Travel-Regulations/", type: "Policy" },
  ],
};

const VOUCHER_DATA = {
  references: [
    { title: "Defense Travel System", desc: "DTS voucher submission portal.", url: "https://www.defensetravel.dod.mil/", type: "Website" },
    { title: "Joint Travel Regulations Ch 2", desc: "Voucher requirements and deadlines.", url: "https://www.travel.dod.mil/Policy-Regulations/Joint-Travel-Regulations/", type: "Policy" },
    { title: "DFAS Travel Pay", desc: "Voucher processing and payment.", url: "https://www.dfas.mil/militarymembers/travelpay/", type: "Website" },
  ],
};

const DTS_DATA = {
  references: [
    { title: "Defense Travel System", desc: "Official DTS login and resources.", url: "https://www.defensetravel.dod.mil/", type: "Website" },
    { title: "DTS Training", desc: "DTS user training modules.", url: "https://www.defensetravel.dod.mil/Training/", type: "Website" },
    { title: "Joint Travel Regulations", desc: "Travel policy underlying DTS.", url: "https://www.travel.dod.mil/Policy-Regulations/Joint-Travel-Regulations/", type: "Policy" },
  ],
};

const GTCC_DATA = {
  references: [
    { title: "DoD Travel Card Program", desc: "GTCC program overview and policies.", url: "https://www.defensetravel.dod.mil/site/govtravelcard.cfm", type: "Policy" },
    { title: "Citibank GTCC", desc: "Cardholder account management.", url: "https://www.citimanager.com/", type: "Website" },
    { title: "Joint Travel Regulations App A", desc: "GTCC policy and usage requirements.", url: "https://www.travel.dod.mil/Policy-Regulations/Joint-Travel-Regulations/", type: "Policy" },
  ],
};

const MILEAGE_DATA = {
  mileageRates: [
    { year: "2025", rate: "$0.70/mile", effective: "January 1, 2025" },
    { year: "2024", rate: "$0.67/mile", effective: "January 1, 2024" },
    { year: "2023", rate: "$0.655/mile", effective: "January 1, 2023" },
  ],
  references: [
    { title: "GSA Mileage Rates", desc: "Official POC mileage reimbursement rates.", url: "https://www.gsa.gov/travel/plan-book/transportation-airfare-pov-etc/privately-owned-vehicle-pov-mileage-reimbursement", type: "Website" },
    { title: "Joint Travel Regulations Ch 2", desc: "POC authorization and mileage policy.", url: "https://www.travel.dod.mil/Policy-Regulations/Joint-Travel-Regulations/", type: "Policy" },
    { title: "DTOD", desc: "Defense Table of Official Distances.", url: "https://dtod.sddc.army.mil/", type: "Website" },
  ],
};

const ADVANCE_PAY_DATA = {
  references: [
    { title: "Joint Travel Regulations Ch 2", desc: "Travel advance policies and limits.", url: "https://www.travel.dod.mil/Policy-Regulations/Joint-Travel-Regulations/", type: "Policy" },
    { title: "Defense Travel System", desc: "Advance request through DTS.", url: "https://www.defensetravel.dod.mil/", type: "Website" },
    { title: "DFAS Travel Pay", desc: "Advance payment processing.", url: "https://www.dfas.mil/militarymembers/travelpay/", type: "Website" },
  ],
};

const LEAVE_ENROUTE_DATA = {
  references: [
    { title: "Joint Travel Regulations Ch 5", desc: "Leave en route during PCS.", url: "https://www.travel.dod.mil/Policy-Regulations/Joint-Travel-Regulations/", type: "Policy" },
    { title: "MCO 1050.3J", desc: "Marine Corps leave and liberty policy.", url: "https://www.marines.mil/", type: "Order" },
    { title: "DFAS Travel Pay", desc: "Per diem computation with leave.", url: "https://www.dfas.mil/militarymembers/travelpay/", type: "Website" },
  ],
};

function toTitle(slug: string) {
  const t = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return t
    .replace(/\bSdap\b/g, "SDAP")
    .replace(/\bVbss\b/g, "VBSS")
    .replace(/\bPcs\b/g, "PCS")
    .replace(/\bHhg\b/g, "HHG")
    .replace(/\bPpm\b/g, "PPM")
    .replace(/\bDla\b/g, "DLA")
    .replace(/\bTle\b/g, "TLE")
    .replace(/\bTad\b/g, "TAD")
    .replace(/\bDts\b/g, "DTS")
    .replace(/\bGtcc\b/g, "GTCC")
    .replace(/Foreign Language Proficiency Pay/i, "Foreign Language Proficiency Bonus");
}

export default async function RoleItemPage({ params }: { params: Promise<Params> }) {
  const p = await params;
  const safeRole = p.role ?? "marines";
  const safeSection = p.section ?? "unknown";
  const itemSlug = p.item ?? "item";
  const itemTitle = toTitle(itemSlug);
  if (itemSlug === "pay-corrections") return notFound();

  const isBAH = itemSlug === "basic-allowance-for-housing";
  const isBAS = itemSlug === "basic-allowance-for-subsistence";
  const isCOLA = itemSlug === "cost-of-living-allowance";
  const isOHA = itemSlug === "overseas-housing-allowance";
  const isFSA = itemSlug === "family-separation-allowance";
  const isHFP = itemSlug === "hostile-fire-pay";
  const isIDP = itemSlug === "imminent-danger-pay";
  const isHDIP = itemSlug === "demolition-pay";
  const isHDP = itemSlug === "hardship-duty-pay";
  const isDIVE = itemSlug === "dive-pay";
  const isSTRESS = itemSlug === "experimental-stress-duty";
  const isFDHD = itemSlug === "flight-deck-duty";
  const isPARACHUTE = itemSlug === "parachute-duty-pay";
  const isVBSS = itemSlug === "maritime-vbss-duty";
  const isSO = itemSlug === "special-operations-pay";
  const isTOXIC = itemSlug === "toxic-materials-duty";
  const isACIP = itemSlug === "aviation-career-incentive-pay";
  const isFLPP = itemSlug === "foreign-language-proficiency-pay";
  const isFLPB = itemSlug === "foreign-language-proficiency-bonus";
  const isSDAP = itemSlug === "sdap";
  const isSDP = itemSlug === "savings-deposit-program";
  const isBRS = itemSlug === "blended-retirement-system";
  const isHIGH3 = itemSlug === "legacy-high-3-retirement-system";
  const isCP = itemSlug === "continuation-pay";
  const isTEB = itemSlug === "transfer-of-educational-benefits";
  const isTSP = itemSlug === "thrift-savings-plan";
  const isCZTE = itemSlug === "combat-zone-tax-exclusion";
  const isFLEXFSA = itemSlug === "flexible-spending-accounts";
  const isStateTax = itemSlug === "military-state-tax-relief" || itemSlug === "state-tax-relief";
  const isALLOTMENTS = itemSlug === "allotments";
  const isBNA = itemSlug === "basic-needs-allowance";
  const isDEBT = itemSlug === "debt-management";
  const isFHA = itemSlug === "financial-hardship-assistance";
  const isOVERPAY = itemSlug === "overpayment-repayment-plans";
  // Travel & Transportation
  const isPCSOrders = itemSlug === "pcs-orders-processing";
  const isHHG = itemSlug === "household-goods-shipment";
  const isPPM = itemSlug === "personally-procured-move";
  const isPCSStorage = itemSlug === "pcs-storage-entitlements";
  const isDLA = itemSlug === "dislocation-allowance";
  const isTLE = itemSlug === "temporary-lodging-expense";
  const isVehicle = itemSlug === "vehicle-processing-storage";
  const isTAD = itemSlug === "tad-orders";
  const isPerDiem = itemSlug === "per-diem-rates";
  const isVoucher = itemSlug === "travel-voucher-submission";
  const isDTS = itemSlug === "dts-authorization";
  const isGTCC = itemSlug === "government-travel-charge-card";
  const isMileage = itemSlug === "mileage-reimbursement";
  const isAdvancePay = itemSlug === "advance-travel-pay";
  const isLeaveEnRoute = itemSlug === "leave-en-route-travel";
  const displayTitle = isSDAP ? "Special Duty Assignment Pay (SDAP)" : itemTitle;

  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{displayTitle}</h1>
          <p className="text-zinc-700 dark:text-zinc-300">Detailed guidance, rates, and references.</p>
        </div>
        <Link prefetch={false} href={`/roles/${safeRole}/${safeSection}`} className="inline-flex items-center justify-center rounded-md border border-black/10 bg-white px-4 py-2 text-[var(--sa-navy)] shadow-sm transition hover:bg-[var(--sa-cream)]/60 dark:border-white/15 dark:bg-black/60 dark:text-[var(--sa-cream)] dark:hover:bg-white/10">Back</Link>
      </div>

      {isBAH ? <BAHContent bahData={BAH_DATA} /> : isBAS ? <BASContent basData={BAS_DATA} /> : isCOLA ? <COLAContent colaData={COLA_DATA} /> : isOHA ? <OHAContent ohaData={OHA_DATA} /> : isFSA ? <FSAContent fsaData={FSA_DATA} /> : isHFP ? <HostileFirePayContent hfpData={HFP_DATA} /> : isIDP ? <ImminentDangerPayContent idpData={IDP_DATA} /> : isHDIP ? <HDIPContent hdipData={HDIP_DATA} /> : isHDP ? <HDPContent hdpData={HDP_DATA} /> : isSDAP ? <SDAPContent sdapData={SDAP_DATA} /> : isSDP ? <SDPContent sdpData={SDP_DATA} /> : isHIGH3 ? <High3Content /> : isBRS ? <BRSContent /> : isCP ? <ContinuationPayContent /> : isTEB ? <TEBContent /> : isTSP ? <TSPContent /> : isCZTE ? <CZTEContent /> : isStateTax ? <MilitaryStateTaxReliefContent /> : isFLEXFSA ? <FlexibleSpendingAccountsContent /> : isALLOTMENTS ? <AllotmentsContent /> : isBNA ? <BasicNeedsAllowanceContent /> : isDEBT ? <DebtManagementContent /> : isFHA ? <FinancialHardshipAssistanceContent /> : isOVERPAY ? <OverpaymentRepaymentPlansContent /> : isDIVE ? <DivePayContent diveData={DIVE_DATA} /> : isSTRESS ? <ExperimentalStressContent stressData={STRESS_DATA} /> : isFDHD ? <FlightDeckContent fdhdData={FDHD_DATA} /> : isPARACHUTE ? <ParachuteContent parachuteData={PARACHUTE_DATA} /> : isVBSS ? <VBSSContent vbssData={VBSS_DATA} /> : isSO ? <SpecialOperationsContent soData={SO_DATA} /> : isTOXIC ? <ToxicMaterialsContent tmData={TM_DATA} /> : isACIP ? <AviationCareerIncentivePayContent acipData={ACIP_DATA} /> : (isFLPP || isFLPB) ? <ForeignLanguageProficiencyPayContent flppData={FLPP_DATA} /> : isPCSOrders ? <PCSOrdersProcessingContent data={PCS_ORDERS_DATA} /> : isHHG ? <HouseholdGoodsShipmentContent data={HHG_DATA} /> : isPPM ? <PersonallyProcuredMoveContent data={PPM_DATA} /> : isPCSStorage ? <PCSStorageContent data={PCS_STORAGE_DATA} /> : isDLA ? <DislocationAllowanceContent data={DLA_DATA} /> : isTLE ? <TemporaryLodgingExpenseContent data={TLE_DATA} /> : isVehicle ? <VehicleProcessingStorageContent data={VEHICLE_DATA} /> : isTAD ? <TADOrdersContent data={TAD_DATA} /> : isPerDiem ? <PerDiemRatesContent data={PER_DIEM_DATA} /> : isVoucher ? <TravelVoucherSubmissionContent data={VOUCHER_DATA} /> : isDTS ? <DTSAuthorizationContent data={DTS_DATA} /> : isGTCC ? <GovernmentTravelChargeCardContent data={GTCC_DATA} /> : isMileage ? <MileageReimbursementContent data={MILEAGE_DATA} /> : isAdvancePay ? <AdvanceTravelPayContent data={ADVANCE_PAY_DATA} /> : isLeaveEnRoute ? <LeaveEnRouteTravelContent data={LEAVE_ENROUTE_DATA} /> : <GenericContent title={itemTitle} />}
    </div>
  );
}

export function generateStaticParams(): { role: Role; section: string; item: string }[] {
  const roles: Role[] = ["marines", "administrators", "leaders", "commanders"];
  const payAllowancesSection = "pay-allowances";
  const payAllowancesSlugs = [
    "legacy-high-3-retirement-system",
    "blended-retirement-system",
    "continuation-pay",
    "transfer-of-educational-benefits",
    "thrift-savings-plan",
    "combat-zone-tax-exclusion",
    "military-state-tax-relief",
    "state-tax-relief",
    "allotments",
    "basic-needs-allowance",
    "debt-management",
    "financial-hardship-assistance",
    "overpayment-repayment-plans",
    "flexible-spending-accounts",
    "basic-allowance-for-housing",
    "basic-allowance-for-subsistence",
    "cost-of-living-allowance",
    "overseas-housing-allowance",
    "demolition-pay",
    "dive-pay",
    "experimental-stress-duty",
    "aviation-career-incentive-pay",
    "flight-deck-duty",
    "foreign-language-proficiency-pay",
    "hardship-duty-pay",
    "parachute-duty-pay",
    "maritime-vbss-duty",
    "sdap",
    "special-operations-pay",
    "toxic-materials-duty",
    "family-separation-allowance",
    "hostile-fire-pay",
    "imminent-danger-pay",
    "savings-deposit-program",
  ];
  const travelSection = "travel-transportation";
  const travelSlugs = [
    "pcs-orders-processing",
    "household-goods-shipment",
    "personally-procured-move",
    "pcs-storage-entitlements",
    "dislocation-allowance",
    "temporary-lodging-expense",
    "vehicle-processing-storage",
    "tad-orders",
    "per-diem-rates",
    "travel-voucher-submission",
    "dts-authorization",
    "government-travel-charge-card",
    "mileage-reimbursement",
    "advance-travel-pay",
    "leave-en-route-travel",
  ];
  const params: { role: Role; section: string; item: string }[] = [];
  for (const role of roles) {
    for (const item of payAllowancesSlugs) params.push({ role, section: payAllowancesSection, item });
    for (const item of travelSlugs) params.push({ role, section: travelSection, item });
  }
  return params;
}

function GenericContent({ title }: { title: string }) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Overview</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Content coming soon for {title}. In the meantime, use official references and your unit admin for specific actions.</p>
        </section>
      </div>
      <aside className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">References</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.dfas.mil/militarymembers/payentitlements/" target="_blank" rel="noopener noreferrer">DFAS Pay Entitlements</a></li>
            <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.travel.dod.mil/Allowances/" target="_blank" rel="noopener noreferrer">DoD Travel Allowances</a></li>
          </ul>
        </section>
      </aside>
    </div>
  );
}


