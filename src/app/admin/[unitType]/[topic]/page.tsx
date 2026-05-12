import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import {
  getAdminByUnitAndTopic,
  getAdminContent
} from "@/lib/content/loader";
import { UNIT_TYPES, type UnitType } from "@/lib/content/schemas";

const UNIT_LABELS: Record<UnitType, string> = {
  "s1-g1": "S-1 / G-1",
  "i-and-i": "I&I Staff",
  pac: "PAC (IPAC)"
};

export async function generateStaticParams() {
  const all = getAdminContent();
  const seen = new Set<string>();
  const params: { unitType: string; topic: string }[] = [];
  for (const entry of all) {
    const key = `${entry.frontmatter.unitType}/${entry.frontmatter.topic}`;
    if (seen.has(key)) continue;
    seen.add(key);
    params.push({
      unitType: entry.frontmatter.unitType,
      topic: entry.frontmatter.topic
});
  }
  return params;
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ unitType: string; topic: string }>;
}): Promise<Metadata> {
  const { unitType, topic } = await params;
  return {
    title: `${topic.replace(/-/g, " ")} - ${unitType.toUpperCase()}`,
    description: `Admin content for ${topic} under ${unitType}.`
};
}

export default async function TopicIndex({
  params
}: {
  params: Promise<{ unitType: string; topic: string }>;
}) {
  const { unitType, topic } = await params;
  if (!UNIT_TYPES.includes(unitType as UnitType)) notFound();
  const ut = unitType as UnitType;
  const entries = getAdminByUnitAndTopic(ut, topic);
  if (entries.length === 0) notFound();

  // Overview page first, then strictly alphabetical by title
  const sortedEntries = [...entries].sort((a, b) => {
    const aFm = a.frontmatter;
    const bFm = b.frontmatter;
    const aOverview =
      aFm.slug.toLowerCase().includes("overview") ||
      aFm.title.toLowerCase().includes("overview");
    const bOverview =
      bFm.slug.toLowerCase().includes("overview") ||
      bFm.title.toLowerCase().includes("overview");
    if (aOverview && !bOverview) return -1;
    if (!aOverview && bOverview) return 1;
    return aFm.title.localeCompare(bFm.title);
  });

  const TOPIC_LABEL_OVERRIDES: Record<string, string> = {
    dts: "Defense Travel System",
    gtccp: "Government Travel Charge Card Program",
    gtcc: "Government Travel Charge Card",
    pes: "Performance Evaluation System",
    iram: "Individual Records Administration Manual",
    jagman: "JAGMAN",
    pcs: "Permanent Change of Station",
    tad: "TAD and TDY Travel",
    les: "Leave and Earnings Statement",
    bah: "Basic Allowance for Housing",
    bas: "Basic Allowance for Subsistence",
    "separation-retirement": "Separation and Retirement",
    "limited-duty": "Limited Duty",
  };
  const topicLabel =
    TOPIC_LABEL_OVERRIDES[topic.toLowerCase()] ??
    topic
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

  return (
    <div className="mx-auto max-w-5xl">
            <header className="mb-6">
        <h1
          className="text-3xl font-bold tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {topicLabel}
        </h1>
        <p className="mt-1 text-sm text-[var(--color-muted-foreground)]">
          {UNIT_LABELS[ut]} content tagged for {topicLabel}.
        </p>
      </header>

      <ul className="space-y-2">
        {sortedEntries.map((entry) => {
          const fm = entry.frontmatter;
          return (
            <li key={fm.slug}>
              <Link
                href={`/admin/${ut}/${topic}/${fm.slug}`}
                className="group flex items-start justify-between gap-3 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-card)] p-4 transition-colors hover:border-[var(--color-primary)] hover:bg-[var(--color-muted)]/40"
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-sm bg-[var(--color-primary)]/10 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--color-primary)]">
                      {fm.function}
                    </span>
                    <span className="rounded-sm bg-[var(--color-muted)] px-1.5 py-0.5 text-[10px] font-semibold text-[var(--color-muted-foreground)]">
                      {fm.skillLevel}-level
                    </span>
                    <span className="font-mono text-[10px] text-[var(--color-muted-foreground)]">
                      {fm.trEventCode}
                    </span>
                    <span className="text-[10px] text-[var(--color-muted-foreground)]">
                      MOS {fm.mosPerforming.join(", ")}
                    </span>
                  </div>
                  <p className="mt-1.5 font-semibold">{fm.title}</p>
                  <p className="mt-1 text-sm text-[var(--color-muted-foreground)]">
                    {fm.summary}
                  </p>
                </div>
                <ChevronRight
                  className="mt-1 size-4 shrink-0 opacity-40 transition-opacity group-hover:opacity-100"
                  aria-hidden="true"
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
