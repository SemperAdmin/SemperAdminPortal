import Link from "next/link";
import {
  Heart,
  Baby,
  Plane,
  GraduationCap,
  Home,
  FileText,
  Shield,
  ArrowRight,
} from "lucide-react";

const LIFE_EVENTS = [
  {
    slug: "getting-married",
    title: "Getting Married",
    description: "Add your spouse to DEERS, update BAH, and complete all required documentation",
    icon: Heart,
    color: "rose",
    steps: 6,
    time: "2-3 weeks",
  },
  {
    slug: "having-a-baby",
    title: "Having a Baby",
    description: "Register your child, update DEERS and SGLI, and claim all entitled benefits",
    icon: Baby,
    color: "sky",
    steps: 8,
    time: "30 days",
  },
  {
    slug: "pcs-move",
    title: "PCS Move",
    description: "Complete checkout, arrange household goods shipment, and check in at new duty station",
    icon: Plane,
    color: "amber",
    steps: 12,
    time: "60-90 days",
  },
  {
    slug: "deploying",
    title: "Deploying",
    description: "Verify readiness, update legal documents, and ensure family is prepared",
    icon: Shield,
    color: "emerald",
    steps: 10,
    time: "30-60 days",
    comingSoon: true,
  },
  {
    slug: "getting-out",
    title: "Getting Out (EAS)",
    description: "Complete TAPS, final checkout, and transition to civilian life",
    icon: GraduationCap,
    color: "purple",
    steps: 15,
    time: "12 months",
    comingSoon: true,
  },
  {
    slug: "buying-a-home",
    title: "Buying a Home",
    description: "Use VA loan benefits, navigate BAH considerations, and complete the purchase",
    icon: Home,
    color: "teal",
    steps: 8,
    time: "60-90 days",
    comingSoon: true,
  },
];

const COLOR_CLASSES = {
  rose: {
    bg: "bg-rose-100 dark:bg-rose-900/30",
    text: "text-rose-700 dark:text-rose-400",
    border: "border-rose-200 dark:border-rose-800",
    hover: "hover:border-rose-300 dark:hover:border-rose-700",
  },
  sky: {
    bg: "bg-sky-100 dark:bg-sky-900/30",
    text: "text-sky-700 dark:text-sky-400",
    border: "border-sky-200 dark:border-sky-800",
    hover: "hover:border-sky-300 dark:hover:border-sky-700",
  },
  amber: {
    bg: "bg-amber-100 dark:bg-amber-900/30",
    text: "text-amber-700 dark:text-amber-400",
    border: "border-amber-200 dark:border-amber-800",
    hover: "hover:border-amber-300 dark:hover:border-amber-700",
  },
  emerald: {
    bg: "bg-emerald-100 dark:bg-emerald-900/30",
    text: "text-emerald-700 dark:text-emerald-400",
    border: "border-emerald-200 dark:border-emerald-800",
    hover: "hover:border-emerald-300 dark:hover:border-emerald-700",
  },
  purple: {
    bg: "bg-purple-100 dark:bg-purple-900/30",
    text: "text-purple-700 dark:text-purple-400",
    border: "border-purple-200 dark:border-purple-800",
    hover: "hover:border-purple-300 dark:hover:border-purple-700",
  },
  teal: {
    bg: "bg-teal-100 dark:bg-teal-900/30",
    text: "text-teal-700 dark:text-teal-400",
    border: "border-teal-200 dark:border-teal-800",
    hover: "hover:border-teal-300 dark:hover:border-teal-700",
  },
};

export default function LifeEventsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          Life Events Guide
        </h1>
        <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
          Step-by-step checklists for major life events. Know exactly what to do and when.
        </p>
      </div>

      {/* Info Banner */}
      <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
        <div className="flex items-start gap-3">
          <FileText className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
          <div>
            <h3 className="font-medium text-blue-900 dark:text-blue-200">
              Don&apos;t know where to start?
            </h3>
            <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
              Select a life event below to get a complete checklist with timelines, required documents,
              and links to everything you need. Each guide walks you through the process step by step.
            </p>
          </div>
        </div>
      </div>

      {/* Life Events Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {LIFE_EVENTS.map((event) => {
          const Icon = event.icon;
          const colors = COLOR_CLASSES[event.color as keyof typeof COLOR_CLASSES];
          const isComingSoon = event.comingSoon;

          const content = (
            <div
              className={`group relative rounded-xl border bg-white p-6 shadow-sm transition dark:bg-black/40 ${
                colors.border
              } ${isComingSoon ? "opacity-60" : colors.hover}`}
            >
              {isComingSoon && (
                <span className="absolute right-3 top-3 rounded-full bg-zinc-200 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400">
                  Coming Soon
                </span>
              )}

              <div className={`inline-flex rounded-lg p-3 ${colors.bg}`}>
                <Icon className={`h-6 w-6 ${colors.text}`} />
              </div>

              <h2 className="mt-4 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
                {event.title}
              </h2>

              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {event.description}
              </p>

              <div className="mt-4 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-500">
                <span>{event.steps} steps</span>
                <span>~{event.time}</span>
              </div>

              {!isComingSoon && (
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-[var(--sa-red)] group-hover:gap-2 transition-all">
                  <span>Start guide</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              )}
            </div>
          );

          if (isComingSoon) {
            return <div key={event.slug}>{content}</div>;
          }

          return (
            <Link key={event.slug} href={`/life-events/${event.slug}`} prefetch={false}>
              {content}
            </Link>
          );
        })}
      </div>

      {/* Quick Links */}
      <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
        <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
          Need something else?
        </h3>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/roles/marines"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-700 transition hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            Browse All Topics
          </Link>
          <Link
            href="/roles/leaders"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-700 transition hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            Leader Resources
          </Link>
          <Link
            href="/links"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-700 transition hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            Important Links
          </Link>
        </div>
      </div>
    </div>
  );
}
