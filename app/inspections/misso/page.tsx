import Link from "next/link";
import { missoCategories, missoLinks, trainingEventCodes, getTotalChecklistItems } from "../../../data/missoChecklist";

// Icon components
function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function TerminalIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function TrendingUpIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function FileTextIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

function HelpCircleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

function MapIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
      <line x1="8" y1="2" x2="8" y2="18" />
      <line x1="16" y1="6" x2="16" y2="22" />
    </svg>
  );
}

function ClipboardListIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <line x1="8" y1="10" x2="8" y2="10.01" />
      <line x1="12" y1="10" x2="16" y2="10" />
      <line x1="8" y1="14" x2="8" y2="14.01" />
      <line x1="12" y1="14" x2="16" y2="14" />
      <line x1="8" y1="18" x2="8" y2="18.01" />
      <line x1="12" y1="18" x2="16" y2="18" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <line x1="9" y1="6" x2="9" y2="6.01" />
      <line x1="15" y1="6" x2="15" y2="6.01" />
      <line x1="9" y1="10" x2="9" y2="10.01" />
      <line x1="15" y1="10" x2="15" y2="10.01" />
      <line x1="9" y1="14" x2="9" y2="14.01" />
      <line x1="15" y1="14" x2="15" y2="14.01" />
      <line x1="9" y1="18" x2="15" y2="18" />
    </svg>
  );
}

function BarChartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  );
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function CACIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="CAC Required">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <rect x="4" y="6" width="5" height="5" rx="0.5" fill="currentColor" opacity="0.3" />
      <circle cx="6.5" cy="8" r="1.5" fill="currentColor" />
      <rect x="11" y="6" width="9" height="1.5" rx="0.5" fill="currentColor" opacity="0.5" />
      <rect x="11" y="9" width="6" height="1.5" rx="0.5" fill="currentColor" opacity="0.5" />
      <rect x="4" y="13" width="16" height="4" rx="0.5" fill="currentColor" opacity="0.2" />
    </svg>
  );
}

// Icon mapping
const iconMap: Record<string, React.ReactNode> = {
  globe: <GlobeIcon className="h-5 w-5" />,
  terminal: <TerminalIcon className="h-5 w-5" />,
  users: <UsersIcon className="h-5 w-5" />,
  calendar: <CalendarIcon className="h-5 w-5" />,
  "trending-up": <TrendingUpIcon className="h-5 w-5" />,
  briefcase: <BriefcaseIcon className="h-5 w-5" />,
  "file-text": <FileTextIcon className="h-5 w-5" />,
  "help-circle": <HelpCircleIcon className="h-5 w-5" />,
  map: <MapIcon className="h-5 w-5" />,
  "clipboard-list": <ClipboardListIcon className="h-5 w-5" />,
  shield: <ShieldIcon className="h-5 w-5" />,
  home: <HomeIcon className="h-5 w-5" />,
  star: <StarIcon className="h-5 w-5" />,
  building: <BuildingIcon className="h-5 w-5" />,
  "bar-chart": <BarChartIcon className="h-5 w-5" />,
};

function QuickLinkCard({ title, href, icon, requiresCAC }: { title: string; href: string; icon: React.ReactNode; requiresCAC?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-lg border border-black/5 bg-white p-3 shadow-sm transition-all hover:border-[var(--sa-red)]/20 hover:shadow-md hover:-translate-y-0.5 dark:border-white/10 dark:bg-black/30 dark:hover:border-[var(--sa-red)]/30"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--sa-red)]/10 text-[var(--sa-red)]">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <span className="font-medium text-[var(--sa-navy)] group-hover:text-[var(--sa-red)] dark:text-[var(--sa-cream)] text-sm">
          {title}
        </span>
      </div>
      <div className="flex items-center gap-1">
        {requiresCAC && <CACIcon className="h-4 w-4 shrink-0 text-[var(--sa-gold)]" />}
        <ExternalLinkIcon className="h-4 w-4 shrink-0 text-zinc-400 opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
    </a>
  );
}

export default function MISSOPage() {
  const totalItems = getTotalChecklistItems();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <Link
          href="/inspections"
          className="mb-2 inline-flex items-center gap-1 text-sm text-zinc-600 transition hover:text-[var(--sa-navy)] dark:text-zinc-400 dark:hover:text-[var(--sa-cream)]"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back to Inspections
        </Link>
        <h1 className="text-3xl font-bold tracking-tight text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          Manpower Information Systems Support Office (MISSO)
        </h1>
        <p className="mt-2 text-zinc-700 dark:text-zinc-300">
          Technical training and system support resources for administrative personnel to improve data accuracy and personnel reporting.
        </p>
      </div>

      {/* Key Links Section */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
        <div className="flex items-center gap-2 mb-4">
          <GlobeIcon className="h-5 w-5 text-[var(--sa-red)]" />
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            MISSO Key Links
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <QuickLinkCard title="MISSA/MISSO Portal" href={missoLinks.portal} icon={<HomeIcon className="h-5 w-5" />} requiresCAC />
          <QuickLinkCard title="DISA Portal (MCTFS)" href={missoLinks.disa} icon={<TerminalIcon className="h-5 w-5" />} requiresCAC />
          <QuickLinkCard title="TFSMS (T/O Access)" href={missoLinks.tfsms} icon={<BriefcaseIcon className="h-5 w-5" />} requiresCAC />
          <QuickLinkCard title="Command Profile" href={missoLinks.commandProfile} icon={<BuildingIcon className="h-5 w-5" />} requiresCAC />
          <QuickLinkCard title="Marine Online (MOL)" href={missoLinks.mol} icon={<UsersIcon className="h-5 w-5" />} requiresCAC />
        </div>
      </section>

      {/* Training Event Codes */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <StarIcon className="h-5 w-5 text-[var(--sa-gold)]" />
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Training Event Codes
            </h2>
          </div>
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            Request training via TTS
          </span>
        </div>
        <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {trainingEventCodes.map((code) => (
            <div
              key={code.code}
              className="flex items-center gap-3 rounded-lg border border-black/5 bg-[var(--sa-cream)]/30 p-3 dark:border-white/10 dark:bg-white/5"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded bg-[var(--sa-navy)] text-xs font-bold text-white">
                {code.code}
              </span>
              <span className="text-sm text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                {code.module}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Site Visit Checklist Categories */}
      <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Site Visit Checklist Categories
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              MISSO Field Support Team evaluation areas
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-[var(--sa-red)]/10 px-3 py-1.5">
            <ClipboardListIcon className="h-4 w-4 text-[var(--sa-red)]" />
            <span className="text-sm font-semibold text-[var(--sa-red)]">
              {totalItems} Total Items
            </span>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {missoCategories.map((category) => (
            <Link
              key={category.id}
              href={`/inspections/misso/${category.id}`}
              className="group flex flex-col rounded-lg border border-black/5 bg-[var(--sa-cream)]/20 p-4 transition hover:border-[var(--sa-red)]/20 hover:bg-[var(--sa-cream)]/40 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:border-[var(--sa-red)]/30 dark:hover:bg-white/10"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--sa-red)]/10 text-[var(--sa-red)]">
                    {iconMap[category.icon] || <FileTextIcon className="h-5 w-5" />}
                  </div>
                  <div>
                    <h3 className="font-medium text-[var(--sa-navy)] group-hover:text-[var(--sa-red)] dark:text-[var(--sa-cream)]">
                      {category.name}
                    </h3>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">
                      {category.shortName}
                    </span>
                  </div>
                </div>
                <span className="shrink-0 rounded-full bg-[var(--sa-red)]/10 px-2 py-0.5 text-xs font-bold text-[var(--sa-red)]">
                  {category.items.length}
                </span>
              </div>
              <p className="mt-3 line-clamp-2 text-xs text-zinc-600 dark:text-zinc-400">
                {category.description}
              </p>
              <div className="mt-3 flex items-center gap-1 text-xs text-[var(--sa-navy)]/60 group-hover:text-[var(--sa-red)] dark:text-[var(--sa-cream)]/60">
                <span>View checklist items</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3 transition group-hover:translate-x-0.5">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Info Box */}
      <div className="rounded-xl border border-[var(--sa-red)]/10 bg-[var(--sa-red)]/5 p-4 dark:border-[var(--sa-red)]/20 dark:bg-[var(--sa-red)]/5">
        <div className="flex gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--sa-red)]/10">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-[var(--sa-red)]">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              About MISSO Site Visits
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              MISSO Field Support Teams conduct site visits to provide technical training and system support to administrative personnel. Use this checklist to prepare your command for a visit and ensure compliance with MOL, MCTFS, and related systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
