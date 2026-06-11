import type { Metadata } from "next";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pill } from "@/components/ui/pill";
import { StatusPill } from "@/components/ui/status-pill";
import { Skeleton, SkeletonText } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { RoleChip } from "@/components/domain/role-chip";
import { PolicyBadge } from "@/components/domain/policy-badge";
import { SourceCitation } from "@/components/domain/source-citation";
import { LastVerified } from "@/components/domain/last-verified";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { ROLES } from "@/lib/roles";
import { Info, AlertTriangle, ShieldAlert, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Style guide v1.2",
  description:
    "Semper Admin Portal design system v1.2 reference. Tokens, components, states.",
};

const BRAND_SWATCHES = [
  { name: "USMC scarlet", token: "--color-usmc-scarlet", hex: "#B82230" },
  { name: "Scarlet 700", token: "--color-usmc-scarlet-700", hex: "#971826" },
  { name: "Scarlet 300", token: "--color-usmc-scarlet-300", hex: "#D14150" },
  { name: "Marine blue", token: "--color-marine-blue", hex: "#0F1F3D" },
  { name: "Marine 700", token: "--color-marine-blue-700", hex: "#0A1424" },
  { name: "Marine 300", token: "--color-marine-blue-300", hex: "#2A3D60" },
  { name: "Parchment", token: "--color-parchment", hex: "#F2E5BE" },
  { name: "Parchment 700", token: "--color-parchment-700", hex: "#D9C994" },
  { name: "Brass", token: "--color-brass", hex: "#B89042" },
  { name: "Brass 700", token: "--color-brass-700", hex: "#8E6E2E" },
  { name: "Brass 300", token: "--color-brass-300", hex: "#D4AF67" },
];

const STATUS_SWATCHES = [
  { name: "Status fresh", token: "--color-status-fresh", hex: "#2F8F5C" },
  { name: "Status aging", token: "--color-status-aging", hex: "#C97D1F" },
  { name: "Status stale", token: "--color-status-stale", hex: "#B83232" },
  { name: "Status info", token: "--color-status-info", hex: "#2F5FA8" },
];

const NEUTRALS = [
  ["50", "#F8F4E8"],
  ["100", "#F2EBD4"],
  ["200", "#E7DFC2"],
  ["300", "#C9BD96"],
  ["400", "#A89A72"],
  ["500", "#8A7E63"],
  ["600", "#5C5340"],
  ["700", "#3A3328"],
  ["800", "#26221A"],
  ["900", "#181410"],
  ["950", "#0F0C09"],
] as const;

const INKS = [
  ["50", "#F2E5BE"],
  ["100", "#B5A988"],
  ["200", "#8A7F66"],
  ["300", "#34507A"],
  ["400", "#233A5C"],
  ["500", "#1F345C"],
  ["600", "#182A4D"],
  ["700", "#11203F"],
  ["800", "#0A1424"],
  ["900", "#060E1A"],
] as const;

const TYPE_SCALE = [
  { token: "text-6xl (display)", className: "font-display text-6xl tracking-wide", sample: "SEMPER ADMIN" },
  { token: "text-4xl (page h1)", className: "text-4xl font-bold", sample: "Page heading" },
  { token: "text-3xl (h1)", className: "text-3xl font-bold", sample: "Section heading" },
  { token: "text-2xl (h2)", className: "text-2xl font-bold", sample: "Subsection heading" },
  { token: "text-lg (h3)", className: "text-lg font-semibold", sample: "Inline heading" },
  { token: "text-md (body-md)", className: "text-md", sample: "Long-form policy body. 16px." },
  { token: "text-base (body)", className: "text-base", sample: "Default body. 15px." },
  { token: "text-sm (UI)", className: "text-sm", sample: "UI controls. 13px." },
  { token: "text-xs (eyebrow)", className: "text-xs uppercase tracking-widest font-bold", sample: "EYEBROW LABEL" },
];

const SPACING = [
  { px: 4, name: "4 / xs" },
  { px: 8, name: "8 / sm" },
  { px: 12, name: "12 / md" },
  { px: 16, name: "16 / base" },
  { px: 24, name: "24 / lg" },
  { px: 32, name: "32 / xl" },
  { px: 48, name: "48 / 2xl" },
  { px: 64, name: "64 / 3xl" },
];

export default function StyleguidePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <header className="mb-8 flex flex-wrap items-end justify-between gap-4 ambient-bloom">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-usmc-scarlet)]">
            v1.2 Design System
          </p>
          <h1 className="mt-2 font-display text-5xl tracking-wide">
            STYLE <span className="gradient-accent">GUIDE</span>
          </h1>
          <p className="mt-2 text-md text-[var(--color-muted-foreground)] max-w-prose">
            Logo-derived parchment-and-navy palette. Compact-balanced density.
            Toggle theme to verify dark mode.
          </p>
        </div>
        <ThemeToggle />
      </header>

      <Separator className="my-8" />

      <Section title="Brand colors" id="brand-colors" eyebrow="Section 5.1">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {BRAND_SWATCHES.map((s) => (
            <Swatch key={s.token} name={s.name} token={s.token} hex={s.hex} />
          ))}
        </div>
      </Section>

      <Section title="Status colors" id="status-colors" eyebrow="Section 5.1">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {STATUS_SWATCHES.map((s) => (
            <Swatch key={s.token} name={s.name} token={s.token} hex={s.hex} />
          ))}
        </div>
      </Section>

      <Section title="Neutral ramp (parchment-tinted)" id="neutral-ramp">
        <div className="grid grid-cols-6 gap-2 md:grid-cols-11">
          {NEUTRALS.map(([step, hex]) => (
            <RampStep key={step} step={step} hex={hex} />
          ))}
        </div>
      </Section>

      <Section title="Ink ramp (deep navy for dark)" id="ink-ramp">
        <div className="grid grid-cols-5 gap-2 md:grid-cols-10">
          {INKS.map(([step, hex]) => (
            <RampStep key={step} step={step} hex={hex} dark />
          ))}
        </div>
      </Section>

      <Section title="Typography" id="typography" eyebrow="Section 5.2">
        <div className="space-y-3">
          {TYPE_SCALE.map((t) => (
            <div
              key={t.token}
              className="flex items-baseline justify-between gap-4 border-b border-[var(--color-border)] pb-2"
            >
              <p className={t.className}>{t.sample}</p>
              <code className="text-xs text-[var(--color-muted-foreground)]">
                {t.token}
              </code>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Spacing scale" id="spacing" eyebrow="Section 5.3">
        <div className="space-y-2">
          {SPACING.map((s) => (
            <div key={s.px} className="flex items-center gap-3 text-sm">
              <code className="w-20 font-mono text-xs text-[var(--color-muted-foreground)]">
                {s.name}
              </code>
              <div
                className="h-4 rounded-sm bg-[var(--color-primary)]"
                style={{ width: `${s.px}px` }}
                aria-hidden="true"
              />
              <span className="font-mono text-xs text-[var(--color-muted-foreground)]">{s.px}px</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Radii and shadows" id="radii" eyebrow="Section 5.4">
        <div className="flex flex-wrap items-end gap-6">
          {[
            { name: "xs (3)", radius: "var(--radius-xs)" },
            { name: "sm (6)", radius: "var(--radius-sm)" },
            { name: "md (8) - card", radius: "var(--radius-md)" },
            { name: "lg (12) - chrome", radius: "var(--radius-lg)" },
            { name: "pill", radius: "var(--radius-chip)" },
          ].map((r) => (
            <div key={r.name} className="text-center">
              <div
                className="size-16 bg-[var(--color-secondary)]"
                style={{ borderRadius: r.radius }}
                aria-hidden="true"
              />
              <div className="mt-1 text-xs">{r.name}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          <div className="rounded-md bg-[var(--color-card)] p-4 text-sm shadow-[var(--shadow-sm)]">shadow-sm</div>
          <div className="rounded-md bg-[var(--color-card)] p-4 text-sm shadow-[var(--shadow-md)]">shadow-md</div>
          <div className="rounded-md bg-[var(--color-card)] p-4 text-sm shadow-[var(--shadow-lg)]">shadow-lg</div>
        </div>
      </Section>

      <Section title="Buttons" id="buttons">
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="brass">Brass</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="icon" variant="outline" aria-label="Search"><Search /></Button>
          <Button disabled>Disabled</Button>
        </div>
      </Section>

      <Section title="Pills (replaces Badge)" id="pills">
        <div className="space-y-3">
          <div>
            <p className="mb-2 text-xs uppercase tracking-widest text-[var(--color-subtle-foreground)] font-bold">Role</p>
            <div className="flex flex-wrap gap-2">
              <Pill variant="marine">Marine</Pill>
              <Pill variant="leader">Leader</Pill>
              <Pill variant="commander">Commander</Pill>
              <Pill variant="admin">Admin</Pill>
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs uppercase tracking-widest text-[var(--color-subtle-foreground)] font-bold">Status</p>
            <div className="flex flex-wrap gap-2">
              <Pill variant="success">Verified</Pill>
              <Pill variant="warning">Aging</Pill>
              <Pill variant="danger">Stale</Pill>
              <Pill variant="info">Info</Pill>
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs uppercase tracking-widest text-[var(--color-subtle-foreground)] font-bold">Neutral and accent</p>
            <div className="flex flex-wrap gap-2">
              <Pill variant="neutral">Neutral</Pill>
              <Pill variant="outline">Outline</Pill>
              <Pill variant="accent">Accent</Pill>
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs uppercase tracking-widest text-[var(--color-subtle-foreground)] font-bold">Sizes</p>
            <div className="flex flex-wrap items-center gap-2">
              <Pill variant="marine" size="xs">XS</Pill>
              <Pill variant="marine" size="sm">SM</Pill>
              <Pill variant="marine" size="md">MD</Pill>
            </div>
          </div>
        </div>
      </Section>

      <Section title="StatusPill (verified content)" id="status-pills">
        <div className="flex flex-wrap gap-2">
          <StatusPill status="fresh" label="Verified Apr 14, 2026" />
          <StatusPill status="aging" label="Aging - review soon" />
          <StatusPill status="stale" label="Stale - verify before use" />
          <StatusPill status="info" label="Build v1.4.0" />
        </div>
      </Section>

      <Section title="Skeleton (loading states)" id="skeleton">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-3">
            <Skeleton className="h-8 w-2/3" />
            <SkeletonText lines={4} />
          </div>
          <div className="space-y-3">
            <Skeleton className="h-32 w-full" />
            <div className="flex gap-2">
              <Skeleton className="h-6 w-16" />
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-6 w-14" />
            </div>
          </div>
        </div>
      </Section>

      <Section title="Cards" id="cards">
        <div className="grid gap-3 md:grid-cols-3">
          <Card elevation="hover">
            <CardHeader>
              <CardTitle>Quick reference</CardTitle>
              <CardDescription>Three-bullet summary of a topic.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-1 pl-5 text-sm">
                <li>Punchy fact one</li>
                <li>Punchy fact two</li>
                <li>Punchy fact three</li>
              </ul>
            </CardContent>
            <CardFooter>
              <SourceCitation
                title="MARADMIN 022/25"
                publisher="HQMC"
                url="https://www.marines.mil"
              />
            </CardFooter>
          </Card>
          <Card elevation="hover">
            <CardHeader>
              <CardTitle>Policy clarification</CardTitle>
              <CardDescription>Plain-language breakdown.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm">
              Card variant for policy content. Body uses Inter.
            </CardContent>
          </Card>
          <Card elevation="hover">
            <CardHeader>
              <CardTitle>Tool</CardTitle>
              <CardDescription>Interactive surface preview.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm">
              Tools index uses StatusPill plus FileText icon.
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section title="Role chips (uses Pill internally)" id="role-chips">
        <div className="flex flex-wrap gap-2">
          {ROLES.map((r) => (
            <RoleChip key={r} role={r} />
          ))}
        </div>
        <p className="mt-3 mb-2 text-xs uppercase tracking-widest text-[var(--color-subtle-foreground)] font-bold">Selected</p>
        <div className="flex flex-wrap gap-2">
          {ROLES.map((r) => (
            <RoleChip key={`s-${r}`} role={r} selected />
          ))}
        </div>
      </Section>

      <Section title="Policy badges (mono, color-mix tints)" id="policy-badges">
        <div className="flex flex-wrap gap-2">
          <PolicyBadge kind="MARADMIN" number="022/25" />
          <PolicyBadge kind="MCO" number="1900.16" />
          <PolicyBadge kind="ALMAR" number="008/25" />
          <PolicyBadge kind="NAVMC" number="11000" />
          <PolicyBadge kind="DODI" number="1322.29" />
        </div>
      </Section>

      <Section title="Source citation and Last verified" id="source-citation">
        <div className="flex flex-col gap-3">
          <SourceCitation
            title="MARADMIN 022/25 Pay Entitlement Update"
            publisher="HQMC"
            url="https://www.marines.mil"
          />
          <div className="flex flex-wrap gap-2">
            <LastVerified date="2026-01-15" />
            <LastVerified date="2025-04-10" />
            <LastVerified date="2023-11-01" />
          </div>
        </div>
      </Section>

      <Section title="Alerts" id="alerts">
        <div className="grid gap-3 md:grid-cols-2">
          <Alert>
            <Info />
            <AlertTitle>Default alert</AlertTitle>
            <AlertDescription>
              Use for general messages with no severity.
            </AlertDescription>
          </Alert>
          <Alert variant="info">
            <Info />
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>
              Marine blue framing. For policy context and references.
            </AlertDescription>
          </Alert>
          <Alert variant="warning">
            <AlertTriangle />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
              Use for stale content and process risk.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <ShieldAlert />
            <AlertTitle>Destructive</AlertTitle>
            <AlertDescription>
              Use for blocking errors, never for stylistic emphasis.
            </AlertDescription>
          </Alert>
        </div>
      </Section>

      <Section title="Premium polish utilities" id="polish" eyebrow="Section 5.5">
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-md border border-[var(--color-border)] bg-[var(--color-card)] p-6 ambient-bloom">
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-[var(--color-usmc-scarlet)]">.ambient-bloom</p>
            <p className="text-sm text-[var(--color-muted-foreground)]">
              Radial gradient bloom shows above this card in dark mode. Toggle theme to verify.
            </p>
          </div>
          <div className="rounded-md border border-[var(--color-border)] bg-[var(--color-card)] p-6">
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-[var(--color-usmc-scarlet)]">.gradient-accent</p>
            <p className="font-display text-3xl">
              <span className="gradient-accent">PORTAL</span>
            </p>
            <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
              Gradient text. One word per page maximum.
            </p>
          </div>
          <div className="rounded-md border border-[var(--color-border)] bg-[var(--color-card)] p-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[var(--color-usmc-scarlet)]">.chrome-floating</p>
            <div className="chrome-floating flex h-12 items-center px-4">
              <span className="text-sm">Floating pill chrome example</span>
            </div>
          </div>
          <div className="rounded-md border border-[var(--color-border)] bg-[var(--color-card)] p-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[var(--color-usmc-scarlet)]">Brand stripe accent</p>
            <div className="relative h-1 w-20 bg-[var(--color-usmc-scarlet)] rounded-sm" />
            <p className="mt-3 text-sm text-[var(--color-muted-foreground)]">
              Used as the topbar underline accent.
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}

function Section({
  title,
  id,
  eyebrow,
  children,
}: {
  title: string;
  id: string;
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="mb-12">
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-subtle-foreground)] mb-1">
          {eyebrow}
        </p>
      )}
      <h2
        id={`${id}-h`}
        className="mb-4 text-2xl font-bold tracking-tight"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

function Swatch({ name, token, hex }: { name: string; token: string; hex: string }) {
  return (
    <div className="overflow-hidden rounded-md border border-[var(--color-border)] bg-[var(--color-card)]">
      <div
        className="h-16"
        style={{ background: `var(${token})` }}
        aria-hidden="true"
      />
      <div className="p-2.5 text-sm">
        <div className="font-semibold leading-tight">{name}</div>
        <div className="mt-0.5 font-mono text-[10px] text-[var(--color-muted-foreground)] truncate">
          {token}
        </div>
        <div className="font-mono text-[11px]">{hex}</div>
      </div>
    </div>
  );
}

function RampStep({ step, hex, dark }: { step: string; hex: string; dark?: boolean }) {
  return (
    <div className="overflow-hidden rounded-[var(--radius-xs)] border border-[var(--color-border)] text-center">
      <div className="h-10" style={{ background: hex }} aria-hidden="true" />
      <div className={`p-1 font-mono text-[10px] ${dark ? "" : ""}`}>{step}</div>
    </div>
  );
}
