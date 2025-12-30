"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";

interface Reference {
  title: string;
  url: string;
  isQuickLink?: boolean;
}

interface Props {
  data: { references: Reference[] };
}

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "organizations", label: "Organizations" },
  { id: "financial", label: "Financial" },
  { id: "emergency", label: "Emergency" },
  { id: "preparing", label: "Preparing Family" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const KEY_RESOURCES = [
  { element: "Primary Resource", description: "Marine Corps Family Team Building (MCFTB)" },
  { element: "Financial Assistance", description: "Navy-Marine Corps Relief Society (NMCRS)" },
  { element: "Counseling", description: "Military OneSource, MFLC" },
  { element: "Legal", description: "Legal Assistance Office" },
  { element: "Emergency", description: "American Red Cross" },
];

const SUPPORT_ORGANIZATIONS = [
  { org: "Marine Corps Family Team Building", services: "Readiness programs, deployment support", contact: "Installation MCFTB" },
  { org: "Navy-Marine Corps Relief Society", services: "Financial assistance, loans, grants", contact: "Installation NMCRS" },
  { org: "Military OneSource", services: "Counseling, resources, information", contact: "1-800-342-9647" },
  { org: "American Red Cross", services: "Emergency communication, assistance", contact: "1-877-272-7337" },
  { org: "Military Family Life Counselor", services: "Free confidential counseling", contact: "Installation MFLC" },
  { org: "Chaplain", services: "Spiritual support, counseling", contact: "Unit/Installation Chaplain" },
];

const NMCRS_ASSISTANCE = [
  { type: "Interest-free loans", description: "Emergency needs" },
  { type: "Grants", description: "Qualifying emergencies" },
  { type: "Budget counseling", description: "Financial planning" },
  { type: "Visiting nurse", description: "Newborn care" },
];

const COMMON_NEEDS = [
  "Emergency travel",
  "Funeral expenses",
  "Food/rent assistance",
  "Medical/dental bills",
  "Car repairs",
  "Utility bills",
];

const RED_CROSS_WHEN = [
  "Death in family",
  "Serious illness",
  "Birth complications",
  "Other family emergencies",
];

const RED_CROSS_PROCESS = [
  "Family contacts Red Cross",
  "Red Cross verifies emergency",
  "Red Cross notifies command",
  "Command contacts service member",
  "Emergency leave processed if approved",
];

const COUNSELING_RESOURCES = [
  { resource: "Military OneSource", description: "Free, confidential counseling. 12 sessions per issue. In-person, phone, or video. 1-800-342-9647" },
  { resource: "Military Family Life Counselors (MFLC)", description: "Free, confidential, no records. Short-term counseling. Located on installations. No appointment needed." },
  { resource: "Chaplain Services", description: "Confidential counseling. Spiritual support. Marriage/family counseling. Grief support." },
];

const SCRA_PROTECTIONS = [
  "Interest rate reduction (6% max)",
  "Lease termination rights",
  "Protection from default judgments",
  "Eviction protection",
];

const PREPARING_FAMILY = [
  "Provide emergency contact information",
  "Register with Family Readiness Program",
  "Brief family on available resources",
  "Establish communication plan",
  "Set up financial accounts/allotments",
  "Prepare emergency fund",
];

const KEY_CONTACTS_FOR_FAMILY = [
  "Unit FRO name and number",
  "Rear party command contact",
  "Red Cross number",
  "NMCRS location",
  "Installation emergency numbers",
];

const PREDEP_CHECKLIST = [
  "Register family with FRO",
  "Attend family readiness brief",
  "Provide emergency contacts to family",
  "Brief family on Red Cross procedures",
  "Establish communication plan",
  "Review SCRA protections",
  "Set up allotments if needed",
];

const FAMILY_INFO = [
  "FRO contact information",
  "Red Cross number (1-877-272-7337)",
  "Military OneSource (1-800-342-9647)",
  "NMCRS location and hours",
  "Installation emergency numbers",
];

export function DependentSupportServicesContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Dependent Support Services Overview
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Multiple support services exist to assist your dependents while you are deployed. These programs
            provide financial assistance, counseling, legal help, and community support. Connecting your
            family with these resources before and during deployment reduces stress and ensures they
            receive help when needed.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Resources
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Element</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {KEY_RESOURCES.map((item) => (
                  <tr key={item.element}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.element}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </>
    ),

    organizations: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Support Organizations
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Organization</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Services</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Contact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {SUPPORT_ORGANIZATIONS.map((item) => (
                  <tr key={item.org}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.org}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.services}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.contact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Counseling Services
          </h3>
          <div className="mt-4 space-y-4">
            {COUNSELING_RESOURCES.map((item) => (
              <div key={item.resource} className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">{item.resource}</h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </>
    ),

    financial: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Financial Assistance
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Navy-Marine Corps Relief Society provides financial assistance to families in need.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            NMCRS Assistance Types
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Assistance Type</th>
                  <th className="pb-3 text-left font-semibold text-zinc-900 dark:text-zinc-100">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {NMCRS_ASSISTANCE.map((item) => (
                  <tr key={item.type}>
                    <td className="py-3 font-medium text-zinc-900 dark:text-zinc-100">{item.type}</td>
                    <td className="py-3 text-zinc-700 dark:text-zinc-300">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common Needs Covered
          </h3>
          <ul className="mt-4 space-y-2">
            {COMMON_NEEDS.map((need) => (
              <li key={need} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {need}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Servicemembers Civil Relief Act (SCRA)
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Protections for deployed service members:
          </p>
          <ul className="mt-4 space-y-2">
            {SCRA_PROTECTIONS.map((protection) => (
              <li key={protection} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                {protection}
              </li>
            ))}
          </ul>
        </section>
      </>
    ),

    emergency: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Emergency Communication
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The American Red Cross provides 24/7 emergency communication between deployed service members
            and their families.
          </p>
          <p className="mt-4 text-lg font-bold text-[var(--sa-red)]">
            Red Cross Contact: 1-877-272-7337
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            When to Use Red Cross
          </h3>
          <ul className="mt-4 space-y-2">
            {RED_CROSS_WHEN.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Red Cross Process
          </h3>
          <ol className="mt-4 space-y-2">
            {RED_CROSS_PROCESS.map((step, index) => (
              <li key={step} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </section>
      </>
    ),

    preparing: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Preparing Your Family
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Before Deployment:</p>
          <ol className="mt-4 space-y-2">
            {PREPARING_FAMILY.map((step, index) => (
              <li key={step} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Contacts to Provide Family
          </h3>
          <ul className="mt-4 space-y-2">
            {KEY_CONTACTS_FOR_FAMILY.map((contact) => (
              <li key={contact} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
                {contact}
              </li>
            ))}
          </ul>
        </section>
      </>
    ),

    checklist: (
      <>
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Pre-Deployment Checklist
          </h2>
          <div className="mt-4 space-y-2">
            {PREDEP_CHECKLIST.map((item) => (
              <label key={item} className="flex items-start gap-3 rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-zinc-300 text-[var(--sa-red)] focus:ring-[var(--sa-red)]"
                />
                <span className="text-sm text-zinc-700 dark:text-zinc-300">{item}</span>
              </label>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            For Your Family
          </h2>
          <div className="mt-4 space-y-2">
            {FAMILY_INFO.map((item) => (
              <label key={item} className="flex items-start gap-3 rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-zinc-300 text-[var(--sa-red)] focus:ring-[var(--sa-red)]"
                />
                <span className="text-sm text-zinc-700 dark:text-zinc-300">{item}</span>
              </label>
            ))}
          </div>
        </section>
      </>
    ),
  };

  return <TabbedContentLayout tabs={TABS} content={content} data={data} />;
}
