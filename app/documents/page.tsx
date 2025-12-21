import LinkGrid from "../../components/LinkGrid";
import { linkGroups } from "../../data/links";

export default function DocumentsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Documents</h1>
      <p className="text-zinc-700 dark:text-zinc-300">Curated links to SharePoint portals, libraries, and lists.</p>
      <LinkGrid groups={linkGroups} />
    </div>
  );
}
