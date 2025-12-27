import { type Role, catalogGroups, reportGroups, type CatalogGroup } from "../../../../data/links";
import Link from "next/link";
import CatalogGrid from "../../../../components/CatalogGrid";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

type Params = { role: Role; section: string };

const SECTIONS: Record<string, { title: string; intro?: string; groups?: { title: string; items: { title: string; slug?: string; desc: string }[] }[] }> = {
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
  "inbound-processing": {
    title: "Inbound Processing",
    intro: "Complete guidance for check-in procedures and initial administrative requirements when reporting to a new duty station. Ensure a smooth transition with proper documentation and timely completion of all inbound requirements.",
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
    ],
  },
  "outbound-processing": {
    title: "Outbound Processing",
    intro: "Comprehensive procedures for properly checking out of your current command. Complete all required actions to ensure seamless transition and final pay settlement.",
    groups: [
      {
        title: "Outbound Processing",
        items: [
          { title: "Checkout Procedures", slug: "checkout-procedures", desc: "Complete checkout requirements before departing command" },
          { title: "Final Pay Settlement", slug: "final-pay-settlement", desc: "Ensure accurate final pay and entitlements" },
          { title: "Records Transfer", slug: "records-transfer", desc: "Transfer service records to gaining command or archive" },
          { title: "Leave Settlement", slug: "leave-settlement", desc: "Settle leave balance and terminal leave processing" },
        ],
      },
    ],
  },
  "personnel-records": {
    title: "Personnel Records",
    intro: "Guidance for maintaining, updating, and correcting official military personnel records. Ensure accuracy and completeness of your service record throughout your career.",
    groups: [
      {
        title: "Official Records",
        items: [
          { title: "Official Military Personnel File (OMPF) Management", slug: "ompf-management", desc: "Understanding and managing your official personnel file" },
          { title: "Page 11 Entries (Administrative Remarks)", slug: "page-11-entries", desc: "Administrative remarks and counseling documentation" },
          { title: "Service Record Book (SRB) Corrections", slug: "srb-corrections", desc: "Correcting errors in your service record book" },
        ],
      },
      {
        title: "Supporting Records",
        items: [
          { title: "Awards and Decorations", slug: "awards-decorations", desc: "Processing and documenting military awards" },
          { title: "Medical Records", slug: "medical-records", desc: "Maintaining and accessing medical documentation" },
          { title: "Training Jackets", slug: "training-jackets", desc: "Training records and professional military education" },
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

export default async function RoleSectionPage({ params }: { params: Promise<Params> }) {
  const p = await params;
  const key = p.section ?? "unknown";
  const safeRole = p.role ?? "marines";
  const section = SECTIONS[key] ?? { title: key.replace(/-/g, " "), intro: "Content coming soon." };
  const isAdminSection = key === "s1-g1-administration" || key === "pac-personnel-admin-center" || key === "ii-i-staff-administration";
  const isPac = key === "pac-personnel-admin-center";
  const imageSrc = isPac ? "/PAC-Battle-Rhythm.png" : "/S-1-Battle-Rhythm.png";
  const imageAlt = isPac ? "PAC Battle Rhythm" : "S-1 Battle Rhythm";
  const liveDocUrl = isPac
    ? "https://usmc.sharepoint-mil.us/:w:/r/sites/DCMRA_mra_SemperAdmin/Template%20Toolbox/Battle%20Rhythms%20PAC.docx?d=w38a97bcabfeb4878b9124a7ccb46e4e5&csf=1&web=1&e=PqVdao"
    : "https://usmc.sharepoint-mil.us/:w:/r/sites/DCMRA_mra_SemperAdmin/Template%20Toolbox/Battle%20Rhythms%20S-1.docx?d=we95586cde4be4d50a3c39994d2035bd4&csf=1&web=1&e=HxdR4y";
  const videoUrl = isPac ? "https://youtu.be/T14cDRxZnt8" : "https://youtu.be/Fji5rH5zmqg";
  const byName = (n: string) => catalogGroups.find((g) => g.name === n) as CatalogGroup | undefined;
  const coreNames = [
    "Semper Admin Links",
    "System Links",
    "Reference Links",
    "AI Links",
    "Teams Channels",
    "SharePoints",
    "More Great Links",
  ];
  const coreGroups = (coreNames.map(byName).filter(Boolean) as CatalogGroup[]).map((g) => ({ name: g.name, items: g.items.filter((i) => !i.roles || i.roles.includes("administrators")) }));
  const rByName = (n: string) => reportGroups.find((g) => g.name === n) as CatalogGroup | undefined;
  const reportNames = [
    "Enterprise Reports",
    "Portals",
    "Non Routine",
    "Promotions",
    "Training",
    "Mondays",
    "SBP",
    "1st of the Month",
    "15th of the Month",
    "U&E",
  ];
  const reports = (reportNames.map(rByName).filter(Boolean) as CatalogGroup[]);
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{section.title}</h1>
      {section.intro && (
        <p className="text-zinc-700 dark:text-zinc-300">{section.intro}</p>
      )}
      {isAdminSection ? (
        <div className="space-y-8">
          {/* Battle Rhythm + Quick Actions Side by Side */}
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <div className="flex flex-col gap-6 md:flex-row">
              {/* Battle Rhythm - Left Side */}
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Battle Rhythm</h2>
                <div className="mt-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${basePath}${imageSrc}`}
                    alt={imageAlt}
                    className="w-full h-auto rounded-lg border border-black/10 dark:border-white/10"
                  />
                  <div className="mt-4 flex gap-3">
                    <a
                      href={liveDocUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md bg-[var(--sa-navy)] px-4 py-2 text-[var(--sa-cream)] shadow-sm transition hover:bg-[var(--sa-navy-hover)] dark:hover:bg-[var(--sa-red)]/60"
                    >
                      Live Document
                    </a>
                    <a
                      href={videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md bg-[var(--sa-red)] px-4 py-2 text-[var(--sa-cream)] shadow-sm transition hover:bg-[var(--sa-red)]/80"
                    >
                      Video
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Actions - Right Side */}
              <div className="w-full md:w-64 shrink-0">
                <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Actions</h2>
                <div className="mt-4 flex flex-col gap-3">
                  {key === "s1-g1-administration" || key === "ii-i-staff-administration" ? (
                    <>
                      <Link prefetch={false} href="/announcements" className="inline-flex items-center justify-center rounded-md bg-[var(--sa-navy)] px-4 py-2 text-[var(--sa-cream)] shadow-sm transition hover:bg-[var(--sa-navy-hover)] dark:hover:bg-[var(--sa-red)]/60">Announcements</Link>
                      <Link prefetch={false} href="/inspections" className="inline-flex items-center justify-center rounded-md bg-[var(--sa-navy)] px-4 py-2 text-[var(--sa-cream)] shadow-sm transition hover:bg-[var(--sa-navy-hover)] dark:hover:bg-[var(--sa-red)]/60">Inspections</Link>
                      <Link prefetch={false} href="/reports" className="inline-flex items-center justify-center rounded-md bg-[var(--sa-navy)] px-4 py-2 text-[var(--sa-cream)] shadow-sm transition hover:bg-[var(--sa-navy-hover)] dark:hover:bg-[var(--sa-red)]/60">Reports</Link>
                      <Link prefetch={false} href="https://usmc.sharepoint-mil.us.mcas-gov.us/sites/DCMRA_mra_SemperAdmin/SitePages/TemplateToolBox.aspx" className="inline-flex items-center justify-center rounded-md bg-[var(--sa-navy)] px-4 py-2 text-[var(--sa-cream)] shadow-sm transition hover:bg-[var(--sa-navy-hover)] dark:hover:bg-[var(--sa-red)]/60">Template Toolbox</Link>
                    </>
                  ) : (
                    <>
                      <Link prefetch={false} href="/reports/unit-user" className="inline-flex items-center justify-center rounded-md bg-[var(--sa-navy)] px-4 py-2 text-[var(--sa-cream)] shadow-sm transition hover:bg-[var(--sa-navy-hover)] dark:hover:bg-[var(--sa-red)]/60">Unit User Reports</Link>
                      <Link prefetch={false} href="/reports/enterprise" className="inline-flex items-center justify-center rounded-md bg-[var(--sa-navy)] px-4 py-2 text-[var(--sa-cream)] shadow-sm transition hover:bg-[var(--sa-navy-hover)] dark:hover:bg-[var(--sa-red)]/60">Enterprise Reports</Link>
                      <Link prefetch={false} href="/links" className="inline-flex items-center justify-center rounded-md bg-[var(--sa-navy)] px-4 py-2 text-[var(--sa-cream)] shadow-sm transition hover:bg-[var(--sa-navy-hover)] dark:hover:bg-[var(--sa-red)]/60">Important Links</Link>
                      <Link prefetch={false} href="/documents" className="inline-flex items-center justify-center rounded-md bg-[var(--sa-navy)] px-4 py-2 text-[var(--sa-cream)] shadow-sm transition hover:bg-[var(--sa-navy-hover)] dark:hover:bg-[var(--sa-red)]/60">Documents</Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Core Resources</h2>
            <div className="mt-4">
              <CatalogGrid groups={coreGroups} />
            </div>
          </section>
          {key !== "s1-g1-administration" && key !== "ii-i-staff-administration" && (
            <section>
              <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Reports & Dashboards</h2>
              <div className="mt-4">
                <CatalogGrid groups={reports} />
              </div>
            </section>
          )}
        </div>
      ) : section.groups ? (
        <div className="space-y-6">
          {section.groups.map((g) => (
            <section key={g.title} className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
              <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{g.title}</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {g.items.map((i) => (
                  <li key={i.title} className="rounded-md border border-black/5 bg-white p-3 text-sm shadow-sm transition hover:bg-[var(--sa-cream)]/60 dark:border-white/15 dark:bg-black/60 dark:hover:bg-white/10">
                    {i.slug ? (
                      <Link prefetch={false} href={`/roles/${safeRole}/${key}/${i.slug}`} className="block">
                        <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{i.title}</div>
                        <div className="mt-1 text-xs text-zinc-700 dark:text-zinc-300">{i.desc}</div>
                      </Link>
                    ) : (
                      <div className="block">
                        <div className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">{i.title}</div>
                        <div className="mt-1 text-xs text-zinc-700 dark:text-zinc-300">{i.desc}</div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-black/5 bg-white p-6 text-zinc-700 shadow-sm dark:border-white/15 dark:bg-black/40 dark:text-zinc-300">Content coming soon.</div>
      )}
      <div className="flex gap-3">
        <Link prefetch={false} href={`/roles/${safeRole}`} className="inline-flex items-center justify-center rounded-md border border-black/10 bg-white px-4 py-2 text-[var(--sa-navy)] shadow-sm transition hover:bg-[var(--sa-cream)]/60 dark:border-white/15 dark:bg-black/60 dark:text-[var(--sa-cream)] dark:hover:bg-white/10">Back to {safeRole === "marines" ? "All Marines" : safeRole[0].toUpperCase() + safeRole.slice(1)} Home</Link>
      </div>
    </div>
  );
}

export function generateStaticParams(): { role: Role; section: string }[] {
  const roles: Role[] = ["marines", "administrators", "leaders", "commanders"];
  const sections = Object.keys(SECTIONS);
  const adminOnly = new Set(["s1-g1-administration", "pac-personnel-admin-center", "ii-i-staff-administration"]);
  const params: { role: Role; section: string }[] = [];
  for (const role of roles) {
    for (const section of sections) {
      if (adminOnly.has(section) && role !== "administrators") continue;
      params.push({ role, section });
    }
  }
  return params;
}
