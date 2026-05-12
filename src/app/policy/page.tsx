import type { Metadata } from "next";
import { getPolicies } from "@/lib/content/loader";
import { ContentGrid } from "@/components/domain/content-grid";

export const metadata: Metadata = {
  title: "Policy",
  description:
    "Plain-language breakdowns of MARADMINs, MCOs, ALMARs, and DODIs.",
};

export default function PolicyIndex() {
  const policies = getPolicies();
  const items = policies.map((p) => ({
    slug: p.frontmatter.slug,
    href: `/policy/${p.frontmatter.slug}`,
    title: p.frontmatter.title,
    summary: p.frontmatter.summary,
    roles: p.frontmatter.roles,
    lastVerified: p.frontmatter.lastVerified,
    source: p.frontmatter.source,
    policyBadge: { kind: p.frontmatter.kind, number: p.frontmatter.number },
  }));
  return (
    <div>
      <header className="mb-6">
        <h1 className="text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          Policy
        </h1>
        <p className="text-[var(--color-muted-foreground)]">
          Plain-language breakdowns of MARADMINs, MCOs, ALMARs, NAVMC instructions, and DODIs.
        </p>
      </header>
      <ContentGrid items={items} />
    </div>
  );
}
