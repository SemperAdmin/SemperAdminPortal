import { type Role } from "../../../../../data/links";
import Link from "next/link";
import BASContent from "../../../../../components/BASContent";
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
import AviationCareerIncentivePayContent from "../../../../../components/AviationCareerIncentivePayContent";
import ForeignLanguageProficiencyPayContent from "../../../../../components/ForeignLanguageProficiencyPayContent";

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

function toTitle(slug: string) {
  const t = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return t.replace(/\bVbss\b/g, "VBSS").replace(/Foreign Language Proficiency Pay/i, "Foreign Language Proficiency Bonus");
}

export default async function ItemPage({ params }: { params: Promise<Params> }) {
  const p = await params;
  const safeRole = p.role ?? "marines";
  const safeSection = p.section ?? "unknown";
  const itemSlug = p.item ?? "item";
  const itemTitle = toTitle(itemSlug);

  const isBAH = itemSlug === "basic-allowance-for-housing";
  const isBAS = itemSlug === "basic-allowance-for-subsistence";
  const isCOLA = itemSlug === "cost-of-living-allowance";
  const isOHA = itemSlug === "overseas-housing-allowance";
  const isHDIP = itemSlug === "demolition-pay";
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

  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{itemTitle}</h1>
          <p className="text-zinc-700 dark:text-zinc-300">Detailed guidance, rates, and references.</p>
        </div>
        <Link href={`/roles/${safeRole}/${safeSection}`} className="inline-flex items-center justify-center rounded-md border border-black/10 bg-white px-4 py-2 text-[var(--sa-navy)] shadow-sm transition hover:bg-[var(--sa-cream)]/60 dark:border-white/15 dark:bg-black/60 dark:text-[var(--sa-cream)] dark:hover:bg-white/10">Back</Link>
      </div>

      {isBAH ? <BAHContent bahData={BAH_DATA} /> : isBAS ? <BASContent basData={BAS_DATA} /> : isCOLA ? <COLAContent colaData={COLA_DATA} /> : isOHA ? <OHAContent ohaData={OHA_DATA} /> : isHDIP ? <HDIPContent hdipData={HDIP_DATA} /> : isDIVE ? <DivePayContent diveData={DIVE_DATA} /> : isSTRESS ? <ExperimentalStressContent stressData={STRESS_DATA} /> : isFDHD ? <FlightDeckContent fdhdData={FDHD_DATA} /> : isPARACHUTE ? <ParachuteContent parachuteData={PARACHUTE_DATA} /> : isVBSS ? <VBSSContent vbssData={VBSS_DATA} /> : isSO ? <SpecialOperationsContent soData={SO_DATA} /> : isTOXIC ? <ToxicMaterialsContent tmData={TM_DATA} /> : isACIP ? <AviationCareerIncentivePayContent acipData={ACIP_DATA} /> : (isFLPP || isFLPB) ? <ForeignLanguageProficiencyPayContent flppData={FLPP_DATA} /> : <GenericContent title={itemTitle} />}
    </div>
  );
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

