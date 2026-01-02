"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";
import { InfoCard } from "../ui/InfoCard";
import { ClipboardList, AlertTriangle, Clock, MapPin } from "lucide-react";

interface Reference {
  title: string;
  url: string;
  isQuickLink?: boolean;
}

interface Props {
  data: {
    references: Reference[];
  };
}

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "requirements", label: "Requirements" },
  { id: "process", label: "Process" },
  { id: "issues", label: "Common Issues" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_POINTS = [
  { label: "Required Items", value: "The Commander's SAPR Policy Statement, SARC/VA contact information, and the DoD Safe Helpline number" },
  { label: "Locations", value: "Must be posted in high-traffic areas (Workspaces, Barracks, Galley, Unit Command Boards)" },
  { label: "Bilingual Requirement", value: "In certain OCONUS locations, posters may need to be in the host nation language as well" },
];

const REQUIRED_CONTENT = [
  { item: "Commander's SAPR Policy Statement", description: "Signed statement outlining unit's commitment to SAPR" },
  { item: "SARC Contact Information", description: "Name and 24/7 phone number for the Sexual Assault Response Coordinator" },
  { item: "Victim Advocate Contact", description: "Name and phone number for unit Victim Advocates" },
  { item: "DoD Safe Helpline", description: "1-877-995-5247 (anonymous, confidential support)" },
  { item: "Reporting Options", description: "Information on Restricted vs Unrestricted reporting" },
];

const POSTING_LOCATIONS = [
  { location: "Workspaces", examples: "Offices, shops, hangars, motorpools" },
  { location: "Barracks", examples: "Common areas, duty huts, laundry rooms" },
  { location: "Galley/Chow Hall", examples: "Entrance, bulletin boards" },
  { location: "Command Boards", examples: "Unit headquarters, company offices" },
  { location: "Gym/Recreation", examples: "Fitness centers, recreation areas" },
];

const PROCESS_STEPS = [
  "Update Contact Info: Ensure all phone numbers for the SARC and VAs are current and functional",
  "Draft Policy: CO signs the unit-specific SAPR policy statement",
  "Inspection: Regularly inspect common areas to ensure posters are not defaced or removed",
];

const TIMELINE_REQUIREMENTS = [
  { requirement: "Within 90 Days", action: "The policy must be updated and posted following a Change of Command" },
  { requirement: "Quarterly", action: "Inspect all posting locations to ensure materials are current and visible" },
];

const COMMON_ISSUES = [
  { issue: "Outdated Contact Information", solution: "Phone numbers or names change but posters are not updated. Build poster review into your monthly command inspection checklist." },
  { issue: "Defaced or Missing Posters", solution: "Posters removed or vandalized. Conduct regular inspections and replace immediately. Consider protective covers in high-traffic areas." },
];

export function SAPRPolicyPostingContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <InfoCard icon={ClipboardList} title="SAPR Policy Posting" variant="info">
          Federal law and Marine Corps order require commanders to post specific SAPR information in prominent locations. This ensures all Marines have 24/7 access to help resources.
        </InfoCard>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key Points</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <tbody>
                {KEY_POINTS.map((point) => (
                  <tr key={point.label} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{point.label}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{point.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            <Clock className="h-5 w-5" />Timeline Requirements
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <tbody>
                {TIMELINE_REQUIREMENTS.map((item) => (
                  <tr key={item.requirement} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{item.requirement}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{item.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    ),
    requirements: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Required Posting Content</h2>
          <div className="mt-4 space-y-3">
            {REQUIRED_CONTENT.map((item) => (
              <div key={item.item} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.item}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            <MapPin className="h-5 w-5" />Required Posting Locations
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-3 pr-4 text-left font-medium text-zinc-900 dark:text-zinc-100">Location</th>
                  <th className="py-3 text-left font-medium text-zinc-900 dark:text-zinc-100">Examples</th>
                </tr>
              </thead>
              <tbody>
                {POSTING_LOCATIONS.map((loc) => (
                  <tr key={loc.location} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-3 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{loc.location}</td>
                    <td className="py-3 text-zinc-600 dark:text-zinc-400">{loc.examples}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    ),
    process: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Policy Posting Process</h2>
          <div className="mt-6 space-y-4">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-sm font-bold text-white">{index + 1}</span>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{step}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Inspection Checklist</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>&bull; All required content is present and legible</li>
            <li>&bull; Contact information is current and accurate</li>
            <li>&bull; Posters are not defaced, faded, or obscured</li>
            <li>&bull; Locations are accessible 24/7</li>
            <li>&bull; OCONUS locations have bilingual materials (if required)</li>
          </ul>
        </section>
      </div>
    ),
    issues: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Problems &amp; Solutions</h2>
          <div className="mt-4 space-y-4">
            {COMMON_ISSUES.map((item) => (
              <div key={item.issue} className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-900/20">
                <h4 className="font-medium text-amber-800 dark:text-amber-200">Problem: {item.issue}</h4>
                <p className="mt-2 text-sm text-amber-700 dark:text-amber-300"><strong>Solution:</strong> {item.solution}</p>
              </div>
            ))}
          </div>
        </section>
        <InfoCard icon={AlertTriangle} title="Update Within 90 Days of Change of Command" variant="warning">
          When you take command, the SAPR policy statement must be updated with <strong>your signature</strong> within 90 days. Add this to your turnover checklist.
        </InfoCard>
      </div>
    ),
  };
  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
