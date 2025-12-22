import CatalogGrid from "../../../components/CatalogGrid";
import type { CatalogGroup } from "../../../data/links";

export default function MCAATPage() {
  const MCAAT_SP = "https://usmc.sharepoint-mil.us.mcas-gov.us/sites/DCMRA_mra_SemperAdmin/SitePages/Marine-Corps-Administrative-Analysis-Team-(MCAAT).aspx";
  const groups: CatalogGroup[] = [
    {
      name: "MCAAT Top Links",
      items: [
        { title: "MCAAT POAM", href: MCAAT_SP },
        { title: "FNF MCAAT SharePoint", href: MCAAT_SP },
        { title: "MCAAT Marines.mil", href: MCAAT_SP },
      ],
    },
    {
      name: "MCAAT Tools",
      items: [
        { title: "MCAAT Analysis Statistics (AS)", href: MCAAT_SP },
        { title: "MCAAT Process Audit Case Overview (PACO)", href: MCAAT_SP },
        { title: "MCAAT Process Audit Results Overview (PAR)", href: MCAAT_SP },
        { title: "MCAAT RUC Unit Results", href: MCAAT_SP },
        { title: "MCAAT Marine Focused Unit Data Results (UFDR)", href: MCAAT_SP },
        { title: "MCAAT Shared Unit Data Results (SU DR)", href: MCAAT_SP },
        { title: "MCAAT Team Analysis Results (TAR)", href: MCAAT_SP },
        { title: "MCAAT Admin POC / POCN COMPLIANCE", href: MCAAT_SP },
        { title: "MCAAT Admin Schedule", href: MCAAT_SP },
      ],
    },
    {
      name: "MCAAT Admin Checklist",
      items: [
        { title: "Audit", href: MCAAT_SP },
        { title: "Defense Travel System (DTS)", href: MCAAT_SP },
        { title: "Deployments / Deferments Operations", href: MCAAT_SP },
        { title: "Inbound Management", href: MCAAT_SP },
        { title: "Legal", href: MCAAT_SP },
        { title: "Milpay", href: MCAAT_SP },
        { title: "MOL", href: MCAAT_SP },
        { title: "Promotions", href: MCAAT_SP },
        { title: "Punitive", href: MCAAT_SP },
        { title: "Recruiting", href: MCAAT_SP },
        { title: "Special And Hazardous Duty Incentive Pay", href: MCAAT_SP },
        { title: "Systems Management", href: MCAAT_SP },
        { title: "Training", href: MCAAT_SP },
        { title: "Travel", href: MCAAT_SP },
      ],
    },
    {
      name: "MCAAT Finance Checklist",
      items: [
        { title: "Administrative Management", href: MCAAT_SP },
        { title: "Fiscal Processes", href: MCAAT_SP },
        { title: "Internal Audit Processes", href: MCAAT_SP },
        { title: "Pay Processes", href: MCAAT_SP },
        { title: "Separation Processes", href: MCAAT_SP },
        { title: "Travel Processes", href: MCAAT_SP },
      ],
    },
  ];
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Marine Corps Administrative Analysis Team (MCAAT)</h1>
      <p className="text-zinc-700 dark:text-zinc-300">Top links, tools, and checklists aligned with the MCAAT SharePoint page.</p>
      <CatalogGrid groups={groups} columns stackTitles />
    </div>
  );
}
