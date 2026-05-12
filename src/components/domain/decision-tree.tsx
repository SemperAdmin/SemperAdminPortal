"use client";

import * as React from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

/**
 * Phase 2 stub. Pure client-side decision walker.
 * Phase 4-5 will source nodes from the situations content collection.
 */
export interface DecisionNode {
  id: string;
  prompt: string;
  options?: { label: string; nextId: string }[];
  outcome?: string;
}

export interface DecisionTreeProps {
  rootId: string;
  nodes: Record<string, DecisionNode>;
  className?: string;
}

export function DecisionTree({ rootId, nodes, className }: DecisionTreeProps) {
  const [path, setPath] = React.useState<string[]>([rootId]);
  const currentId = path[path.length - 1] ?? rootId;
  const current = nodes[currentId];
  if (!current) return null;
  const reset = () => setPath([rootId]);
  const back = () => setPath((p) => (p.length > 1 ? p.slice(0, -1) : p));

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Decision tree</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-sm font-medium">{current.prompt}</p>
        {current.outcome ? (
          <div className="rounded-[var(--radius-button)] border border-[var(--color-border)] bg-[var(--color-muted)] p-3 text-sm">
            <strong className="block text-xs uppercase tracking-wider text-[var(--color-muted-foreground)]">
              Outcome
            </strong>
            <p className="mt-1">{current.outcome}</p>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {current.options?.map((opt) => (
              <Button
                key={opt.nextId}
                variant="outline"
                className="justify-between"
                onClick={() => setPath((p) => [...p, opt.nextId])}
              >
                <span>{opt.label}</span>
                <ChevronRight className="size-4" aria-hidden="true" />
              </Button>
            ))}
          </div>
        )}
        <div className={cn("mt-4 flex gap-2", path.length === 1 && "hidden")}>
          <Button variant="ghost" size="sm" onClick={back}>
            Back
          </Button>
          <Button variant="ghost" size="sm" onClick={reset}>
            Restart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
