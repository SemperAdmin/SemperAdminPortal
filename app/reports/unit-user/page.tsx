import CatalogGrid from "../../../components/CatalogGrid";
import { unitUserReportGroups, type CatalogGroup } from "../../../data/links";

export default function ReportsUnitUserPage() {
  const unitUser = unitUserReportGroups.find((g) => g.name === "Unit User Reports") as CatalogGroup | undefined;
  const byName = (n: string) => unitUserReportGroups.find((g) => g.name === n) as CatalogGroup | undefined;
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
  const groups = ([unitUser, ...common].filter(Boolean) as CatalogGroup[]);
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Unit User Reports</h1>
      <p className="text-zinc-700 dark:text-zinc-300">For a single MOL/RUC.</p>
      <CatalogGrid groups={groups} />
    </div>
  );
}
