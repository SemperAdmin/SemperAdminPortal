import type { Metadata } from "next";
import { ClientSearch } from "@/components/domain/client-search";
import { PageHeader } from "@/components/domain/page-header";
import { StatusPill } from "@/components/ui/status-pill";

export const metadata: Metadata = {
  title: "Search",
  description:
    "Search Marine Corps admin content by title, topic, T&R event code, source policy, and references.",
};

export default function SearchPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <PageHeader
        eyebrow="Reference"
        tags={<StatusPill status="info" label="Pagefind static index" />}
        title="SEARCH"
        summary="Find content by title, topic, T&R event code, source policy, or reference. Results are filtered by your active role when one is selected."
      />
      <ClientSearch />
    </div>
  );
}
