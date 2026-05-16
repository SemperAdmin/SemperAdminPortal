"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

/**
 * Phase 2 stub. In-memory checklist with progress.
 * Phase 9 expands with persistence, export, and printable formats.
 */
export interface ChecklistItem {
  id: string;
  label: string;
  description?: string;
}

export interface ChecklistToolProps {
  title: string;
  items: ChecklistItem[];
  className?: string;
}

export function ChecklistTool({ title, items, className }: ChecklistToolProps) {
  const [checked, setChecked] = React.useState<Set<string>>(new Set());
  const toggle = (id: string) =>
    setChecked((s) => {
      const next = new Set(s);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  const list: ChecklistItem[] = Array.isArray(items) ? items : [];
  const pct = list.length === 0 ? 0 : (checked.size / list.length) * 100;
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <div
          className="h-2 w-full overflow-hidden rounded-full bg-[var(--color-muted)]"
          role="progressbar"
          aria-valuenow={Math.round(pct)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${title} progress`}
        >
          <div
            className="h-full bg-[var(--color-primary)] transition-[width]"
            style={{ width: `${pct}%` }}
          />
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {list.map((it) => {
            const isChecked = checked.has(it.id);
            return (
              <li key={it.id}>
                <label
                  className={cn(
                    "flex cursor-pointer items-start gap-3 rounded-[var(--radius-button)] border border-[var(--color-border)] p-3 transition-colors",
                    isChecked && "bg-[var(--color-muted)]"
                  )}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggle(it.id)}
                    className="sr-only"
                  />
                  <span
                    aria-hidden="true"
                    className={cn(
                      "mt-0.5 grid size-5 place-items-center rounded-sm border",
                      isChecked
                        ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--color-primary-foreground)]"
                        : "border-[var(--color-border)] bg-[var(--color-background)]"
                    )}
                  >
                    {isChecked && <Check className="size-3.5" />}
                  </span>
                  <span className="text-sm">
                    <span className="font-medium">{it.label}</span>
                    {it.description && (
                      <span className="mt-0.5 block text-xs text-[var(--color-muted-foreground)]">
                        {it.description}
                      </span>
                    )}
                  </span>
                </label>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
}
