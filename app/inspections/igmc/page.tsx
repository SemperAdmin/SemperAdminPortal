import CatalogGrid from "../../../components/CatalogGrid";
import type { CatalogGroup } from "../../../data/links";

export default function IGMCPage() {
  const IGMC_SP = "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/DCMRA_mra_SemperAdmin/SitePages/Inspector%20General%20of%20the%20Marine%20Corps.aspx";
  const groups: CatalogGroup[] = [
    {
      name: "Command Inspector General of the Marine Corps Tools",
      items: [
        { title: "Inspections Division", href: IGMC_SP },
        { title: "Grading Criteria", href: IGMC_SP },
        { title: "IGMC MCO", href: IGMC_SP },
        { title: "Functional Area Checklists (FACs)", href: IGMC_SP },
        { title: "CIP Management Toolkit V1", href: IGMC_SP },
        { title: "CDRL POAM FY24 - ADMIN", href: IGMC_SP },
      ],
    },
    {
      name: "Functional Area Checklists (FACs)",
      items: [
        { title: "Career Planning Program", href: IGMC_SP },
        { title: "Casualty Affairs", href: IGMC_SP },
        { title: "Defense Travel System (DTS)", href: IGMC_SP },
        { title: "Directives Management", href: IGMC_SP },
        { title: "Government Travel Charge Card (GTCC)", href: IGMC_SP },
        { title: "Law, Liberty and Administrative", href: IGMC_SP },
        { title: "Legal Administration", href: IGMC_SP },
        { title: "Marine Corps Sponsorship Program", href: IGMC_SP },
        { title: "Military Awards", href: IGMC_SP },
        { title: "Performance Evaluation System (PES)", href: IGMC_SP },
        { title: "Records Management", href: IGMC_SP },
        { title: "Reports Management", href: IGMC_SP },
        { title: "Separation, Retirement and Leave", href: IGMC_SP },
        { title: "Transition Readiness Program (TRP)", href: IGMC_SP },
      ],
    },
  ];
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Inspector General of the Marine Corps</h1>
      <p className="text-zinc-700 dark:text-zinc-300">Command IG tools and Functional Area Checklists mirrored from the IGMC SharePoint page.</p>
      <CatalogGrid groups={groups} />
    </div>
  );
}

