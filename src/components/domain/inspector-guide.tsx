"use client";

import * as React from "react";
import {
  BookOpen,
  Search,
  MessagesSquare,
  ClipboardCheck,
  AlertTriangle,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { InspectorGuideItem } from "@/lib/content/schemas";

type SectionKey = "regulatory" | "howToInspect" | "questionsToAsk" | "verification";

interface IconSpec {
  key: SectionKey;
  Icon: LucideIcon;
  label: string;
  isPopulated: (guide: InspectorGuideItem) => boolean;
}

const ICONS: IconSpec[] = [
  {
    key: "regulatory",
    Icon: BookOpen,
    label: "Regulatory requirement",
    isPopulated: (g) =>
      g.regulatory.quotes.length > 0 || g.regulatory.summary.trim().length > 0,
  },
  {
    key: "howToInspect",
    Icon: Search,
    label: "How to inspect",
    isPopulated: (g) => g.howToInspect.length > 0,
  },
  {
    key: "questionsToAsk",
    Icon: MessagesSquare,
    label: "Inspector questions to ask",
    isPopulated: (g) => g.questionsToAsk.length > 0,
  },
  {
    key: "verification",
    Icon: ClipboardCheck,
    label: "Verification checklist",
    isPopulated: (g) => g.verification.length > 0,
  },
];

export interface InspectorGuideProps {
  guide: InspectorGuideItem | undefined;
  faNumber: string;
  itemCode: string;
}

export function InspectorGuide({ guide, faNumber, itemCode }: InspectorGuideProps) {
  const [activeKey, setActiveKey] = React.useState<SectionKey | null>(null);

  if (!guide) return null;

  const populated = ICONS.filter((spec) => spec.isPopulated(guide));
  if (populated.length === 0) return null;

  const activeSpec =
    activeKey !== null ? populated.find((s) => s.key === activeKey) ?? null : null;

  return (
    <div className="mt-3">
      <div className="flex flex-wrap items-center gap-2">
        {populated.map(({ key, Icon, label }) => {
          const active = activeKey === key;
          return (
            <button
              key={key}
              type="button"
              aria-label={label}
              aria-pressed={active}
              title={label}
              onClick={() => setActiveKey(active ? null : key)}
              className={cn(
                "inline-flex size-8 items-center justify-center rounded-[var(--radius-sm)] border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)]",
                active
                  ? "border-[var(--color-usmc-scarlet)] bg-[color-mix(in_srgb,var(--color-usmc-scarlet)_14%,transparent)] text-[var(--color-usmc-scarlet)]"
                  : "border-[var(--color-border-strong)] bg-[var(--color-surface-2)] text-[var(--color-muted-foreground)] hover:border-[var(--color-brass-300)] hover:text-[var(--color-foreground)]"
              )}
            >
              <Icon className="size-4" aria-hidden="true" />
            </button>
          );
        })}

        {!guide.verified && (
          <span className="inline-flex items-center gap-1.5 rounded-[var(--radius-xs)] border border-[color-mix(in_srgb,var(--color-status-aging)_32%,transparent)] bg-[color-mix(in_srgb,var(--color-status-aging)_10%,transparent)] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--color-status-aging-700)] dark:text-[var(--color-brass-300)]">
            <AlertTriangle className="size-3" aria-hidden="true" />
            LLM-assisted, pending source-text walk
          </span>
        )}
      </div>

      {activeSpec && (
        <section
          aria-label={`${activeSpec.label} for item ${itemCode}`}
          className="mt-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-2)] p-4"
        >
          <header className="mb-3 flex items-center gap-2">
            <activeSpec.Icon
              className="size-4 text-[var(--color-usmc-scarlet)]"
              aria-hidden="true"
            />
            <h4 className="text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--color-foreground)]">
              {activeSpec.label}
            </h4>
          </header>
          <GuideSectionBody
            section={activeSpec.key}
            guide={guide}
            faNumber={faNumber}
            itemCode={itemCode}
          />
        </section>
      )}
    </div>
  );
}

function GuideSectionBody({
  section,
  guide,
  faNumber,
  itemCode,
}: {
  section: SectionKey;
  guide: InspectorGuideItem;
  faNumber: string;
  itemCode: string;
}) {
  if (section === "regulatory") {
    return (
      <div className="space-y-3">
        {guide.regulatory.quotes.map((q, i) => (
          <blockquote
            key={i}
            className="rounded-[var(--radius-sm)] border-l-2 border-[var(--color-usmc-scarlet)] bg-[var(--color-bg-elev)] px-3 py-2"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[var(--color-subtle-foreground)]">
              {q.citation}
            </p>
            <p className="mt-1 text-sm leading-snug text-[var(--color-foreground)]">
              &ldquo;{q.text}&rdquo;
            </p>
          </blockquote>
        ))}
        {guide.regulatory.summary.trim().length > 0 && (
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[var(--color-subtle-foreground)]">
              Summary
            </p>
            <p className="mt-1 text-sm leading-snug text-[var(--color-foreground)]">
              {guide.regulatory.summary}
            </p>
          </div>
        )}
      </div>
    );
  }

  if (section === "howToInspect") {
    return (
      <ol className="space-y-3 text-sm">
        {guide.howToInspect.map((step, i) => (
          <li key={i} className="rounded-[var(--radius-sm)] bg-[var(--color-bg-elev)] p-3">
            <p className="font-semibold text-[var(--color-foreground)]">
              {i + 1}. {step.step}
            </p>
            {step.actions.length > 0 && (
              <ul className="mt-1.5 list-disc space-y-1 pl-5 text-[var(--color-muted-foreground)]">
                {step.actions.map((a, j) => (
                  <li key={j}>{a}</li>
                ))}
              </ul>
            )}
            {step.callout && (
              <CalloutChip callout={step.callout} severity={step.severity} />
            )}
          </li>
        ))}
      </ol>
    );
  }

  if (section === "questionsToAsk") {
    return (
      <ul className="space-y-2 text-sm">
        {guide.questionsToAsk.map((q, i) => (
          <li
            key={i}
            className="rounded-[var(--radius-sm)] bg-[var(--color-bg-elev)] p-3 text-[var(--color-foreground)]"
          >
            &ldquo;{q}&rdquo;
          </li>
        ))}
      </ul>
    );
  }

  if (section === "verification") {
    return (
      <VerificationChecklist
        lines={guide.verification}
        storageKey={`semperadmin:guide:${faNumber}:${itemCode}`}
      />
    );
  }

  return null;
}

function VerificationChecklist({
  lines,
  storageKey,
}: {
  lines: string[];
  storageKey: string;
}) {
  const [checked, setChecked] = React.useState<boolean[]>(() =>
    new Array(lines.length).fill(false)
  );
  const [hydrated, setHydrated] = React.useState(false);

  React.useEffect(() => {
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          const next = new Array(lines.length).fill(false);
          for (let i = 0; i < lines.length; i++) {
            next[i] = Boolean(parsed[i]);
          }
          setChecked(next);
        }
      }
    } catch {
      // Ignore storage errors. Default state stays unchecked.
    }
    setHydrated(true);
  }, [storageKey, lines.length]);

  React.useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(checked));
    } catch {
      // Quota or private mode. Ignore.
    }
  }, [checked, hydrated, storageKey]);

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  };

  const reset = () => setChecked(new Array(lines.length).fill(false));
  const doneCount = checked.filter(Boolean).length;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-[11px] text-[var(--color-subtle-foreground)]">
        <span>
          {doneCount} of {lines.length} verified
        </span>
        {doneCount > 0 && (
          <button
            type="button"
            onClick={reset}
            className="font-semibold text-[var(--color-muted-foreground)] underline-offset-2 hover:text-[var(--color-foreground)] hover:underline"
          >
            Reset
          </button>
        )}
      </div>
      <ul className="space-y-1.5 text-sm">
        {lines.map((line, i) => {
          const isChecked = checked[i] ?? false;
          return (
            <li key={i}>
              <label className="flex cursor-pointer items-start gap-2 rounded-[var(--radius-sm)] p-1.5 transition-colors hover:bg-[var(--color-bg-elev)]">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggle(i)}
                  className="mt-0.5 size-4 shrink-0 cursor-pointer accent-[var(--color-usmc-scarlet)]"
                  aria-label={`Verify: ${line}`}
                />
                <span
                  className={cn(
                    "text-[var(--color-foreground)]",
                    isChecked &&
                      "text-[var(--color-muted-foreground)] line-through decoration-1"
                  )}
                >
                  {line}
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/**
 * Renders a single inspector callout chip with severity-driven color.
 * Mirrors the IGMC three-state grading vocabulary:
 *   compliant   - green (status-fresh)
 *   discrepancy - amber (status-aging)
 *   finding     - red   (status-stale)
 * Missing severity defaults to discrepancy so legacy entries stay readable.
 */
function CalloutChip({
  callout,
  severity,
}: {
  callout: string;
  severity?: "compliant" | "discrepancy" | "finding";
}) {
  const sev = severity ?? "discrepancy";
  const tone =
    sev === "finding"
      ? "border-[color-mix(in_srgb,var(--color-status-stale)_30%,transparent)] bg-[color-mix(in_srgb,var(--color-status-stale)_10%,transparent)] text-[var(--color-status-stale-700)] dark:text-[var(--color-status-stale-300)]"
      : sev === "compliant"
      ? "border-[color-mix(in_srgb,var(--color-status-fresh)_30%,transparent)] bg-[color-mix(in_srgb,var(--color-status-fresh)_10%,transparent)] text-[var(--color-status-fresh-700)] dark:text-[var(--color-status-fresh-300)]"
      : "border-[color-mix(in_srgb,var(--color-status-aging)_30%,transparent)] bg-[color-mix(in_srgb,var(--color-status-aging)_10%,transparent)] text-[var(--color-status-aging-700)] dark:text-[var(--color-brass-300)]";
  const label = sev === "finding" ? "FINDING" : sev === "compliant" ? "COMPLIANT" : "DISCREPANCY";
  return (
    <p
      className={cn(
        "mt-2 inline-flex items-center gap-1.5 rounded-[var(--radius-xs)] border px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em]",
        tone
      )}
    >
      <span>{label}</span>
      <span aria-hidden="true" className="opacity-50">-</span>
      <span>{callout}</span>
    </p>
  );
}
