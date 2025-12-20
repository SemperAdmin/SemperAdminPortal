import CatalogGrid from "../../../components/CatalogGrid";
import { reportGroups, type CatalogGroup } from "../../../data/links";

export default function ReportsUnitUserPage() {
  const unitUserItem = reportGroups.find((g) => g.name === "Portals")?.items.find((i) => i.title === "Unit User Reports");
  const unitUserGroup: CatalogGroup = {
    name: "Unit User Reports",
    items: unitUserItem ? [unitUserItem] : [],
  };
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
  const groups = ([unitUserGroup, ...common].filter(Boolean) as CatalogGroup[]);
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Unit User Reports</h1>
      <p className="text-zinc-700 dark:text-zinc-300">For a single MOL/RUC.</p>
      <CatalogGrid groups={groups} />
    </div>
  );
}

