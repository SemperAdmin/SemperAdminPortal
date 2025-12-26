import { type Role, catalogGroups, reportGroups, type CatalogGroup } from "../../../../data/links";
import Link from "next/link";
import CatalogGrid from "../../../../components/CatalogGrid";

const BP = process.env.NEXT_PUBLIC_BASE_PATH || "";

type Params = { role: Role; section: string };

const SECTIONS: Record<string, { title: string; intro?: string; groups?: { title: string; items: { title: string; slug?: string; desc: string }[] }[] }> = {
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
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Actions</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
          </section>

          {/* Battle Rhythm Section */}
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Battle Rhythm</h2>
            <div className="mt-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${BP}${key === "pac-personnel-admin-center" ? "/PAC-Battle-Rhythm.png" : "/S-1-Battle-Rhythm.png"}`}
                alt={key === "pac-personnel-admin-center" ? "PAC Battle Rhythm" : "S-1 Battle Rhythm"}
                className="w-full h-auto rounded-lg border border-black/10 dark:border-white/10"
              />
              <div className="mt-4 flex gap-3">
                <a
                  href={key === "pac-personnel-admin-center"
                    ? "https://usmc.sharepoint-mil.us/:w:/r/sites/DCMRA_mra_SemperAdmin/Template%20Toolbox/Battle%20Rhythms%20PAC.docx?d=w38a97bcabfeb4878b9124a7ccb46e4e5&csf=1&web=1&e=PqVdao"
                    : "https://usmc.sharepoint-mil.us/:w:/r/sites/DCMRA_mra_SemperAdmin/Template%20Toolbox/Battle%20Rhythms%20S-1.docx?d=we95586cde4be4d50a3c39994d2035bd4&csf=1&web=1&e=HxdR4y"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-[var(--sa-navy)] px-4 py-2 text-[var(--sa-cream)] shadow-sm transition hover:bg-[var(--sa-navy-hover)] dark:hover:bg-[var(--sa-red)]/60"
                >
                  Live Document
                </a>
                <a
                  href={key === "pac-personnel-admin-center"
                    ? "https://youtu.be/T14cDRxZnt8"
                    : "https://youtu.be/Fji5rH5zmqg"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-[var(--sa-red)] px-4 py-2 text-[var(--sa-cream)] shadow-sm transition hover:bg-[var(--sa-red)]/80"
                >
                  Video
                </a>
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
