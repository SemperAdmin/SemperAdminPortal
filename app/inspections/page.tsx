import Link from "next/link";

// Icon components
function ShieldCheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function ClipboardCheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <path d="M9 14l2 2 4-4" />
    </svg>
  );
}

function EyeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

type InspectionCardProps = {
  title: string;
  abbreviation: string;
  conductedBy: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  color: "navy" | "gold" | "red";
  available: boolean;
};

function InspectionCard({
  title,
  abbreviation,
  conductedBy,
  description,
  href,
  icon,
  color,
  available,
}: InspectionCardProps) {
  const colorClasses = {
    navy: {
      card: available
        ? "border-[var(--sa-navy)]/20 hover:border-[var(--sa-navy)]/40 hover:shadow-lg"
        : "border-black/5 dark:border-white/10",
      icon: "bg-[var(--sa-navy)] text-white",
      badge: "bg-[var(--sa-navy)]/10 text-[var(--sa-navy)] dark:bg-[var(--sa-gold)]/20 dark:text-[var(--sa-gold)]",
      title: "text-[var(--sa-navy)] dark:text-[var(--sa-cream)]",
      link: "text-[var(--sa-navy)] group-hover:text-[var(--sa-red)] dark:text-[var(--sa-gold)] dark:group-hover:text-[var(--sa-cream)]",
    },
    gold: {
      card: available
        ? "border-[var(--sa-gold)]/30 hover:border-[var(--sa-gold)]/50 hover:shadow-lg"
        : "border-black/5 dark:border-white/10",
      icon: "bg-[var(--sa-gold)] text-[var(--sa-navy)]",
      badge: "bg-[var(--sa-gold)]/20 text-[var(--sa-gold)]",
      title: "text-[var(--sa-navy)] dark:text-[var(--sa-cream)]",
      link: "text-[var(--sa-gold)] group-hover:text-[var(--sa-red)] dark:group-hover:text-[var(--sa-cream)]",
    },
    red: {
      card: available
        ? "border-[var(--sa-red)]/20 hover:border-[var(--sa-red)]/40 hover:shadow-lg"
        : "border-black/5 dark:border-white/10",
      icon: "bg-[var(--sa-red)] text-white",
      badge: "bg-[var(--sa-red)]/10 text-[var(--sa-red)]",
      title: "text-[var(--sa-navy)] dark:text-[var(--sa-cream)]",
      link: "text-[var(--sa-red)] group-hover:text-[var(--sa-navy)] dark:group-hover:text-[var(--sa-cream)]",
    },
  };

  const styles = colorClasses[color];

  const CardWrapper = available ? Link : "div";
  const cardProps = available ? { href } : {};

  return (
    <CardWrapper
      {...cardProps}
      className={`group relative flex flex-col rounded-xl border bg-white p-6 shadow-sm transition-all duration-200 dark:bg-black/40 ${styles.card} ${available ? "cursor-pointer hover:-translate-y-1" : "opacity-60"}`}
    >
      {/* Header with icon and badge */}
      <div className="flex items-start justify-between gap-4">
        <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${styles.icon}`}>
          {icon}
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-bold ${styles.badge}`}>
          {abbreviation}
        </span>
      </div>

      {/* Title and conducted by */}
      <h2 className={`mt-4 text-xl font-bold ${styles.title}`}>
        {title}
      </h2>
      <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
        Conducted by <span className="font-medium">{conductedBy}</span>
      </p>

      {/* Description */}
      <p className="mt-3 flex-1 text-sm text-zinc-600 dark:text-zinc-300">
        {description}
      </p>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between">
        {available ? (
          <span className={`flex items-center gap-1.5 text-sm font-medium ${styles.link}`}>
            View inspection resources
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        ) : (
          <span className="text-sm text-zinc-400 dark:text-zinc-500">
            Coming soon
          </span>
        )}
      </div>
    </CardWrapper>
  );
}

const inspections: InspectionCardProps[] = [
  {
    title: "Inspector General of the Marine Corps",
    abbreviation: "IGMC",
    conductedBy: "IGMC",
    description:
      "Command inspection program using Functional Area Checklists (FACs) to evaluate unit readiness across CoRE, Non-CoRE, and CoRE+ areas.",
    href: "/inspections/igmc",
    icon: <ShieldCheckIcon className="h-7 w-7" />,
    color: "navy",
    available: true,
  },
  {
    title: "Marine Corps Administrative Analysis Team",
    abbreviation: "MCAAT",
    conductedBy: "MX (Manpower)",
    description:
      "Administrative inspections evaluating personnel administration accuracy, finance operations, and compliance with Marine Corps policies.",
    href: "/inspections/mcaat",
    icon: <ClipboardCheckIcon className="h-7 w-7" />,
    color: "gold",
    available: true,
  },
  {
    title: "Marine Corps Information Security Self-Assessment",
    abbreviation: "MISSO",
    conductedBy: "MI (Marine Corps Intelligence)",
    description:
      "Information security inspections assessing command security posture, classification management, and intelligence oversight compliance.",
    href: "/inspections/misso",
    icon: <EyeIcon className="h-7 w-7" />,
    color: "red",
    available: false,
  },
];

export default function InspectionsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          Inspections
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Prepare for Marine Corps inspections with checklists, tools, and resources organized by inspection type.
        </p>
      </div>

      {/* Inspection Cards Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {inspections.map((inspection) => (
          <InspectionCard key={inspection.abbreviation} {...inspection} />
        ))}
      </div>

      {/* Info Box */}
      <div className="rounded-xl border border-[var(--sa-navy)]/10 bg-[var(--sa-navy)]/5 p-4 dark:border-[var(--sa-gold)]/20 dark:bg-[var(--sa-gold)]/5">
        <div className="flex gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--sa-navy)]/10 dark:bg-[var(--sa-gold)]/20">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-[var(--sa-navy)] dark:text-[var(--sa-gold)]">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              About Inspections
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Each inspection program has specific requirements and evaluation criteria. Use the resources provided to understand expectations, prepare your command, and track compliance with applicable orders and directives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
