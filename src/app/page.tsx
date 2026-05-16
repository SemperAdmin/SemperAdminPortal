import Link from "next/link";
import {
  Building2,
  Shield,
  Award,
  Star,
  Search,
  BookOpen,
  ArrowRight,
  FileText,
  Wrench,
  ShieldCheck,
} from "lucide-react";
import {
  getAdminContent,
  getMarinesContent,
  getCommanderContent,
  getLeaderContent,
  getTools,
} from "@/lib/content/loader";
import { Button } from "@/components/ui/button";
import { Pill } from "@/components/ui/pill";
import { StatTile } from "@/components/domain/stat-tile";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const citations = require("@/generated/citations.json") as {
  byId: Record<string, { type: string }>;
};

type RoleKey = "marine" | "leader" | "commander" | "admin";

interface RoleCardSpec {
  href: string;
  role: RoleKey;
  icon: typeof Shield;
  pillLabel: string;
  tag: string;
  title: string;
  body: string;
  count: number;
  accentVar: string;
}

interface RecentEntry {
  href: string;
  eyebrow: string;
  title: string;
  summary: string;
  lastVerified: string;
}

const ROLE_LABEL: Record<RoleKey, string> = {
  marine: "Marines",
  leader: "Leader",
  commander: "Commander",
  admin: "Admin",
};

function humanizeSegment(segment: string): string {
  return segment
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function formatVerified(date: string): string {
  const d = new Date(date);
  if (isNaN(d.getTime())) return date;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function HomePage() {
  const adminContent = getAdminContent();
  const marinesContent = getMarinesContent();
  const commanderContent = getCommanderContent();
  const leaderContent = getLeaderContent();

  const adminCount = adminContent.length;
  const marinesCount = marinesContent.length;
  const commanderCount = commanderContent.length;
  const leaderCount = leaderContent.length;
  const totalCount = adminCount + marinesCount + commanderCount + leaderCount;
  const toolsCount = getTools().length;

  // Citation breakdown from the registry
  const citationItems = Object.values(citations.byId);
  const citationsTotal = citationItems.length;
  const citationByType = citationItems.reduce<Record<string, number>>(
    (acc, c) => {
      acc[c.type] = (acc[c.type] ?? 0) + 1;
      return acc;
    },
    {}
  );
  const mcoCount = citationByType.MCO ?? 0;
  const maradminCount = citationByType.MARADMIN ?? 0;
  const navmcCount = citationByType.NAVMC ?? 0;
  const dodiCount = citationByType.DODI ?? 0;
  const dodFmrCount = citationByType.DODFMR ?? 0;
  const uscCount = citationByType.USC ?? 0;

  // Verified-fresh percentage (last 12 months) across all role content
  const allRoleContent = [
    ...marinesContent,
    ...leaderContent,
    ...commanderContent,
    ...adminContent,
  ];
  const now = Date.now();
  const TWELVE_MONTHS_MS = 1000 * 60 * 60 * 24 * 30 * 12;
  const freshCount = allRoleContent.filter(
    (e) => now - new Date(e.frontmatter.lastVerified).getTime() < TWELVE_MONTHS_MS
  ).length;
  const verifiedPct =
    allRoleContent.length > 0
      ? Math.round((freshCount / allRoleContent.length) * 100)
      : 0;

  // Latest updated: pull from every role catalog, sort by lastVerified, take top 6
  const latestUpdated: RecentEntry[] = [
    ...marinesContent.map((e) => ({
      href: `/marines/${e.frontmatter.topic}/${e.frontmatter.slug}`,
      eyebrow: `Marines / ${humanizeSegment(e.frontmatter.topic)}`,
      title: e.frontmatter.title,
      summary: e.frontmatter.summary,
      lastVerified: e.frontmatter.lastVerified,
    })),
    ...leaderContent.map((e) => ({
      href: `/leader/${e.frontmatter.topic}/${e.frontmatter.slug}`,
      eyebrow: `Leader / ${humanizeSegment(e.frontmatter.topic)}`,
      title: e.frontmatter.title,
      summary: e.frontmatter.summary,
      lastVerified: e.frontmatter.lastVerified,
    })),
    ...commanderContent.map((e) => ({
      href: `/commander/${e.frontmatter.topic}/${e.frontmatter.slug}`,
      eyebrow: `Commander / ${humanizeSegment(e.frontmatter.topic)}`,
      title: e.frontmatter.title,
      summary: e.frontmatter.summary,
      lastVerified: e.frontmatter.lastVerified,
    })),
    ...adminContent.map((e) => ({
      href: `/admin/${e.frontmatter.unitType}/${e.frontmatter.topic}/${e.frontmatter.slug}`,
      eyebrow: `Admin / ${humanizeSegment(e.frontmatter.unitType)}`,
      title: e.frontmatter.title,
      summary: e.frontmatter.summary,
      lastVerified: e.frontmatter.lastVerified,
    })),
  ]
    .sort(
      (a, b) =>
        new Date(b.lastVerified).getTime() - new Date(a.lastVerified).getTime()
    )
    .slice(0, 6);

  const roleCards: RoleCardSpec[] = [
    {
      href: "/marines",
      role: "marine",
      icon: Shield,
      pillLabel: "All Marines",
      tag: "Service member",
      title: "MARINES",
      body: "Pay, records, life events. Per MCO 5000.14D you own 13 specific responsibilities for record accuracy.",
      count: marinesCount,
      accentVar: "var(--color-role-marine)",
    },
    {
      href: "/leader",
      role: "leader",
      icon: Star,
      pillLabel: "NCO / SNCO / Officer",
      tag: "Direct leadership",
      title: "LEADER",
      body: "Coach Marines, verify records, run section readiness, bridge members to S-1 and PAC processes.",
      count: leaderCount,
      accentVar: "var(--color-role-leader)",
    },
    {
      href: "/commander",
      role: "commander",
      icon: Award,
      pillLabel: "XO / CoS / CO",
      tag: "Command authority",
      title: "COMMANDER",
      body: "Personnel decisions, discipline, IPAC relationships. Per MCO 5000.14D Encl 3 you own 19 responsibilities.",
      count: commanderCount,
      accentVar: "var(--color-role-commander)",
    },
    {
      href: "/admin",
      role: "admin",
      icon: Building2,
      pillLabel: "0102 / 0111 / 0170",
      tag: "T&R aligned",
      title: "ADMIN",
      body: "Content for S-1/G-1, I&I, and PAC admin work. Tagged by unit type, MCAP function, MOS, and grade.",
      count: adminCount,
      accentVar: "var(--color-role-admin)",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl">
      {/* HERO */}
      <section className="ambient-bloom mb-10 pb-2">
        <p className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--color-usmc-scarlet)]">
          <span
            aria-hidden="true"
            className="h-0.5 w-5 bg-[var(--color-usmc-scarlet)]"
          />
          USMC Administrative Reference
        </p>
        <h1
          className="font-display text-5xl tracking-wide leading-[1.02] sm:text-6xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          SEMPER ADMIN <span className="gradient-accent">PORTAL</span>
        </h1>
        <p className="mt-4 max-w-prose text-md text-[var(--color-muted-foreground)]">
          Marine Corps admin reference for Marines, leaders, commanders, and admin
          specialists. {totalCount} pages backed by {citationsTotal} sourced
          authorities including {mcoCount} MCO, {maradminCount} MARADMIN,{" "}
          {navmcCount} NAVMC, {dodiCount} DODI, {dodFmrCount} DOD FMR, and{" "}
          {uscCount} U.S. Code references.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild variant="primary" size="lg">
            <Link href="/search">
              <Search className="size-4" aria-hidden="true" />
              Search the portal
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/citations">
              <BookOpen className="size-4" aria-hidden="true" />
              Citations index
            </Link>
          </Button>
        </div>
      </section>

      {/* STAT STRIP */}
      <section className="mb-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <StatTile
          icon={FileText}
          value={totalCount}
          label="Pages"
          meta="Across 4 roles"
        />
        <StatTile
          icon={BookOpen}
          value={citationsTotal}
          label="Source citations"
          meta={`${mcoCount} MCO, ${maradminCount} MARADMIN, more`}
        />
        <StatTile
          icon={Wrench}
          value={toolsCount}
          label="Tools"
          meta="PDF, DOCX, calculators"
        />
        <StatTile
          icon={ShieldCheck}
          value={`${verifiedPct}%`}
          label="Verified"
          meta="Within last 12 months"
        />
      </section>

      {/* ROLE GRID */}
      <section className="mb-14">
        <div className="mb-5 flex items-baseline justify-between gap-3">
          <h2
            className="font-display text-3xl tracking-wide"
            style={{ fontFamily: "var(--font-display)" }}
          >
            PICK YOUR ROLE
          </h2>
          <span className="font-mono text-xs text-[var(--color-subtle-foreground)]">
            4 roles
          </span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {roleCards.map((card) => (
            <RoleCard key={card.href} card={card} />
          ))}
        </div>
      </section>

      {/* LATEST UPDATED */}
      {latestUpdated.length > 0 && (
        <section className="mb-14">
          <div className="mb-5 flex items-baseline justify-between gap-3">
            <h2
              className="font-display text-3xl tracking-wide"
              style={{ fontFamily: "var(--font-display)" }}
            >
              LATEST UPDATED
            </h2>
            <span className="font-mono text-xs text-[var(--color-subtle-foreground)]">
              {latestUpdated.length} of {allRoleContent.length}
            </span>
          </div>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {latestUpdated.map((entry) => (
              <EntryCard
                key={entry.href}
                href={entry.href}
                eyebrow={entry.eyebrow}
                title={entry.title}
                body={entry.summary}
                lastVerified={entry.lastVerified}
              />
            ))}
          </div>
        </section>
      )}

      {/* ORGANIZATION NOTE */}
      <section className="mb-10 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-2)] p-6">
        <h2 className="text-base font-bold">How content is organized</h2>
        <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
          Same topic, different role. A Marine sees BAH eligibility. A leader
          sees how to coach Marines on BAH errors. Admin sees BAH processing
          procedures. Commander sees BAH approval authority and audit posture.
          Cross-links surface other role views on every page.
        </p>
        <p className="mt-3 text-sm text-[var(--color-muted-foreground)]">
          Every page cites source policy with chapter and section. Search and
          Citations Index let you find content by policy reference.
        </p>
      </section>
    </div>
  );
}

function RoleCard({ card }: { card: RoleCardSpec }) {
  const Icon = card.icon;
  return (
    <Link
      href={card.href}
      className="group relative flex flex-col overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-card)] p-6 transition-all hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-md)]"
    >
      {/* Edge accent */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-1 opacity-0 transition-opacity group-hover:opacity-100"
        style={{ backgroundColor: card.accentVar }}
      />
      <div className="mb-3 flex items-center justify-between gap-2">
        <span
          className="grid size-10 place-items-center rounded-[var(--radius-sm)]"
          style={{
            backgroundColor: `color-mix(in srgb, ${card.accentVar} 14%, transparent)`,
            color: card.accentVar,
          }}
          aria-hidden="true"
        >
          <Icon className="size-5" />
        </span>
        <Pill variant={card.role}>{card.pillLabel}</Pill>
      </div>
      <p
        className="text-[10px] font-bold uppercase tracking-[0.1em]"
        style={{ color: card.accentVar }}
      >
        {card.tag}
      </p>
      <h3
        className="mt-1 font-display text-3xl tracking-wide leading-tight"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {card.title}
      </h3>
      <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
        {card.body}
      </p>
      <div className="mt-4 flex items-center justify-between border-t border-[var(--color-border)] pt-3 text-xs">
        <span className="text-[var(--color-muted-foreground)]">
          {card.count} pages
        </span>
        <span
          className="inline-flex items-center gap-1 text-xs font-semibold"
          style={{ color: card.accentVar }}
        >
          Open
          <ArrowRight className="size-3" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}

function EntryCard({
  href,
  eyebrow,
  title,
  body,
  lastVerified,
}: {
  href: string;
  eyebrow: string;
  title: string;
  body: string;
  lastVerified?: string;
}) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-card)] p-4 transition-colors hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-2)]"
    >
      <p className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.08em] text-[var(--color-subtle-foreground)]">
        <span
          aria-hidden="true"
          className="size-1 rounded-full bg-[var(--color-usmc-scarlet)]"
        />
        {eyebrow}
      </p>
      <h4 className="mt-1 text-sm font-semibold tracking-tight">{title}</h4>
      <p className="mt-1 flex-1 text-xs text-[var(--color-muted-foreground)] leading-snug">
        {body}
      </p>
      {lastVerified && (
        <p className="mt-2 font-mono text-[10px] text-[var(--color-subtle-foreground)]">
          Updated {formatVerified(lastVerified)}
        </p>
      )}
    </Link>
  );
}
