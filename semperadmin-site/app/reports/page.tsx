import CatalogGrid from "../../components/CatalogGrid";
import { reportGroups, type CatalogGroup } from "../../data/links";
import Image from "next/image";
import Link from "next/link";

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Reports</h1>
      <p className="text-zinc-700 dark:text-zinc-300">Ensure you are logged into the Reports portal before opening links. This page organizes report categories for quick access.</p>
      <div className="mx-auto max-w-3xl rounded-xl border border-black/5 bg-white shadow-sm dark:border-white/15 dark:bg-black/40">
        <div className="relative h-40 sm:h-52 md:h-64">
          <Image
            src="/Reports MOL login.png"
            alt="Reports login instructions"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain p-2"
          />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Enterprise Reports</h2>
          <p className="mt-2 text-zinc-700 dark:text-zinc-300">For multiple units/RUCs.</p>
          <div className="mt-4">
            <Link href="/reports/enterprise" className="inline-flex items-center justify-center rounded-full bg-[var(--sa-navy)] px-4 py-2 text-[var(--sa-cream)] shadow-sm transition hover:bg-[#0a1623] dark:hover:bg-[var(--sa-red)]/60">Open Enterprise Reports</Link>
          </div>
        </section>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Unit User Reports</h2>
          <p className="mt-2 text-zinc-700 dark:text-zinc-300">For a single MOL/RUC.</p>
          <div className="mt-4">
            <Link href="/reports/unit-user" className="inline-flex items-center justify-center rounded-full bg-[var(--sa-navy)] px-4 py-2 text-[var(--sa-cream)] shadow-sm transition hover:bg-[#0a1623] dark:hover:bg-[var(--sa-red)]/60">Open Unit User Reports</Link>
          </div>
        </section>
      </div>
      {(() => {
        const enterprise = reportGroups.find((g) => g.name === "Enterprise Reports") as CatalogGroup | undefined;
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
        const leftGroups = ([enterprise, ...common].filter(Boolean) as CatalogGroup[]);
        const rightGroups = ([unitUserGroup, ...common].filter(Boolean) as CatalogGroup[]);
        return (
          <div className="grid gap-6 md:grid-cols-2">
            <div id="enterprise">
              <CatalogGrid groups={leftGroups} />
            </div>
            <div id="unit-user">
              <CatalogGrid groups={rightGroups} />
            </div>
          </div>
        );
      })()}
    </div>
  );
}
