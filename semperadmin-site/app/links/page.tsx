import CatalogGrid from "../../components/CatalogGrid";
import { catalogGroups } from "../../data/links";

export default function ImportantLinksPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Important Links</h1>
      <p className="text-zinc-700 dark:text-zinc-300">Curated external resources organized by category. Items without links are placeholders to be completed.</p>
      <CatalogGrid groups={catalogGroups} />
    </div>
  );
}
