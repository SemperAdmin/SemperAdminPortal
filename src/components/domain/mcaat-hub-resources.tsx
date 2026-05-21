import * as React from "react";
import Link from "next/link";
import {
  BookOpen,
  ExternalLink,
  GraduationCap,
  Lock,
  Mail,
  Network,
  type LucideIcon,
} from "lucide-react";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const RES = require("@/generated/mcaat-resources.json") as Resources;

interface LinkRef { title: string; url: string; requiresCac?: boolean }
interface PolicyRef { number: string; title: string; url: string }

interface Resources {
  lastUpdated: string;
  mra: LinkRef;
  policy: PolicyRef;
  email: string;
  sharepoint: LinkRef;
  training: LinkRef;
}

/**
 * MCAAT hub resources card. Surfaces the authoritative MCAAT references in
 * one block at the top of the hub page. Renders five rows:
 *   - M&RA site (public)
 *   - MCO 7220.13H (public)
 *   - Contact email (mailto)
 *   - FMF MCAAT SharePoint (CAC required)
 *   - Admin Training Classes (CAC required)
 *
 * Items behind CAC carry a small lock pill so users on non-MilNet hosts know
 * the link will not resolve outside the enclave.
 */
export function McaatHubResources() {
  return (
    <section
      aria-label="MCAAT resources"
      className="mt-6 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-2)] p-5"
    >
      <header className="mb-4 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Network
            className="size-4 text-[var(--color-marine-blue)] dark:text-[#B5C4DC]"
            aria-hidden="true"
          />
          <h2 className="text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--color-foreground)]">
            MCAAT resources
          </h2>
        </div>
        <span className="font-mono text-[11px] text-[var(--color-subtle-foreground)]">
          Updated {formatShortDate(RES.lastUpdated)}
        </span>
      </header>

      <div className="grid gap-2 md:grid-cols-2">
        <ResourceLink
          icon={Network}
          eyebrow="M&RA site"
          title={RES.mra.title}
          url={RES.mra.url}
        />
        <ResourceLink
          icon={BookOpen}
          eyebrow={RES.policy.number}
          title={RES.policy.title}
          url={RES.policy.url}
        />
        <a
          href={`mailto:${RES.email}`}
          className="group flex items-start gap-2 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-3 transition-colors hover:border-[var(--color-marine-blue)]"
        >
          <Mail className="mt-0.5 size-4 shrink-0 text-[var(--color-marine-blue)] dark:text-[#B5C4DC]" aria-hidden="true" />
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[var(--color-subtle-foreground)]">
              Contact
            </p>
            <p className="mt-0.5 font-mono text-[13px] text-[var(--color-foreground)] group-hover:text-[var(--color-marine-blue)]">
              {RES.email}
            </p>
          </div>
        </a>
        <ResourceLink
          icon={Network}
          eyebrow="FMF SharePoint"
          title={RES.sharepoint.title}
          url={RES.sharepoint.url}
          requiresCac={RES.sharepoint.requiresCac}
        />
        <ResourceLink
          icon={GraduationCap}
          eyebrow="Training"
          title={RES.training.title}
          url={RES.training.url}
          requiresCac={RES.training.requiresCac}
        />
      </div>

      <p className="mt-4 text-[11px] text-[var(--color-subtle-foreground)]">
        Authoritative checklists live on the M&RA lookup tables. The portal mirrors them for offline reading and audience-tagged filtering. For corrections, contact the MCAAT inbox above or open an issue against the portal repo.
      </p>
    </section>
  );
}

interface ResourceLinkProps {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  url: string;
  requiresCac?: boolean;
}

function ResourceLink({ icon: Icon, eyebrow, title, url, requiresCac }: ResourceLinkProps) {
  const External = url.startsWith("http");
  const inner = (
    <>
      <Icon className="mt-0.5 size-4 shrink-0 text-[var(--color-marine-blue)] dark:text-[#B5C4DC]" aria-hidden="true" />
      <div className="min-w-0 flex-1">
        <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.08em] text-[var(--color-subtle-foreground)]">
          {eyebrow}
          {requiresCac && (
            <span className="inline-flex items-center gap-0.5 rounded-[var(--radius-xs)] border border-[color-mix(in_srgb,var(--color-status-aging)_30%,transparent)] bg-[color-mix(in_srgb,var(--color-status-aging)_10%,transparent)] px-1 py-0.5 text-[9px] font-bold uppercase tracking-[0.08em] text-[#8A4F12] dark:text-[var(--color-brass-300)]">
              <Lock className="size-2.5" aria-hidden="true" />
              CAC
            </span>
          )}
        </p>
        <p className="mt-0.5 text-[13px] font-semibold leading-snug text-[var(--color-foreground)] group-hover:text-[var(--color-marine-blue)] dark:group-hover:text-[#B5C4DC]">
          {title}
        </p>
      </div>
      {External && (
        <ExternalLink className="mt-0.5 size-3 shrink-0 text-[var(--color-muted-foreground)] group-hover:text-[var(--color-marine-blue)]" aria-hidden="true" />
      )}
    </>
  );
  const cls = "group flex items-start gap-2 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-3 transition-colors hover:border-[var(--color-marine-blue)]";
  return External ? (
    <a href={url} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={url} className={cls}>
      {inner}
    </Link>
  );
}

function formatShortDate(iso: string): string {
  return new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
