import type { Metadata } from "next";
import { PageHeader } from "@/components/domain/page-header";
import { MetaRow } from "@/components/domain/meta-row";
import { Pill } from "@/components/ui/pill";
import { StatusPill } from "@/components/ui/status-pill";
import { ComplianceDashboard } from "@/components/domain/compliance-dashboard";
import { OBLIGATIONS, nonDelegableCount } from "@/lib/commander-obligations";

export const metadata: Metadata = {
  title: "Commander Compliance Dashboard",
  description:
    "Recurring command obligations indexed by cadence. Monthly, quarterly, annual, multi-year, and event-driven items with authority, deep links, and next-deadline indicators.",
};

export default function CommanderDashboard() {
  // Static dashboard. Today is recomputed on each server render so the
  // calendar-aware deadlines stay current without per-user state.
  const today = new Date();

  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader
        eyebrow="Commander dashboard"
        tags={
          <>
            <Pill variant="commander">Compliance reference</Pill>
            <StatusPill status="fresh" label="Calendar-aware" />
          </>
        }
        title="COMPLIANCE DASHBOARD"
        summary="Every recurring obligation a Battalion or Squadron Commander carries, indexed by cadence. Calendar-aware deadlines for items with fixed annual windows. Click any card to open the deep page."
      >
        <MetaRow
          items={[
            { label: "Obligations", value: OBLIGATIONS.length },
            { label: "Non-delegable", value: nonDelegableCount() },
            { label: "Cadences", value: 5 },
            {
              label: "As of",
              value: today.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              }),
              mono: false,
            },
          ]}
        />
      </PageHeader>

      <ComplianceDashboard today={today} />
    </div>
  );
}
