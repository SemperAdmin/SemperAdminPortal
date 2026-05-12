"use client";

import { ChecklistTool } from "@/components/domain/checklist-tool";

const ITEMS = [
  { id: "tap", label: "Complete TAP curriculum", description: "Verify certificate posts in record." },
  { id: "med", label: "Medical and dental clearance" },
  { id: "sgli", label: "Update SGLI elections" },
  { id: "tsp", label: "Confirm TSP allocation" },
  { id: "navmc", label: "Submit final NAVMC 11000" },
  { id: "gear", label: "Return all issued gear" },
  { id: "pay", label: "Final pay audit" },
  { id: "dd214", label: "Receive DD-214" },
];

export default function SeparationChecklistPage() {
  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
        Separation checklist
      </h1>
      <p className="mt-1 text-[var(--color-muted-foreground)]">
        Run the full end-of-active-service checklist with progress tracking.
      </p>
      <div className="mt-6">
        <ChecklistTool title="EAS to DD-214" items={ITEMS} />
      </div>
    </div>
  );
}
