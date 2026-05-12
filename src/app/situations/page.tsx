import type { Metadata } from "next";
import { getSituations } from "@/lib/content/loader";
import { ContentGrid } from "@/components/domain/content-grid";

export const metadata: Metadata = {
  title: "Situations",
  description: "Scenario-based how-tos with decision trees.",
};

export default function SituationsIndex() {
  const situations = getSituations();
  const items = situations.map((s) => ({
    slug: s.frontmatter.slug,
    href: `/situations/${s.frontmatter.slug}`,
    title: s.frontmatter.title,
    summary: s.frontmatter.summary,
    roles: s.frontmatter.roles,
    lastVerified: s.frontmatter.lastVerified,
    source: s.frontmatter.source,
  }));
  return (
    <div>
      <header className="mb-6">
        <h1 className="text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          Situations
        </h1>
        <p className="text-[var(--color-muted-foreground)]">
          Concept snippets organized by scenario. Walk a decision tree, hit the next step.
        </p>
      </header>
      <ContentGrid items={items} />
    </div>
  );
}
