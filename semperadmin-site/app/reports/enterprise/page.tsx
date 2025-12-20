import CatalogGrid from "../../../components/CatalogGrid";
import { reportGroups, type CatalogGroup } from "../../../data/links";

export default function ReportsEnterprisePage() {
  const enterprise = reportGroups.find((g) => g.name === "Enterprise Reports") as CatalogGroup | undefined;
  const byName = (n: string) => reportGroups.find((g) => g.name === n) as CatalogGroup | undefined;
  const common = [
    byName("Portals"),
    byName("Non Routine"),
    byName("Promotions"),
    byName("Training"),
    byName("Mondays"),
    byName("1st of the Month"),
    byName("15th of the Month"),
    byName("U&E"),
  ].filter(Boolean) as CatalogGroup[];
  const groups = ([enterprise, ...common].filter(Boolean) as CatalogGroup[]);
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Enterprise Reports</h1>
      <p className="text-zinc-700 dark:text-zinc-300">For multiple units/RUCs.</p>
      <CatalogGrid groups={groups} />
    </div>
  );
}

