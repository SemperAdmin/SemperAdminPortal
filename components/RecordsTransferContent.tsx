"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";

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

const KEY_POINTS = [
  { label: "Electronic Records", value: "Transfer via MCTFS automatically" },
  { label: "SRB/OQR", value: "Transfer via mail or hand-carry" },
  { label: "Medical Records", value: "Hand-carry or transfer via medical" },
  { label: "Dental Records", value: "Hand-carry or transfer via dental" },
  { label: "OMPF", value: "Maintained at HQMC, accessible via MOL" },
  { label: "Authority", value: "MCO P1070.12K (IRAM)" },
];

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "srb", label: "SRB/OQR Transfer" },
  { id: "medical", label: "Medical & Dental" },
  { id: "mctfs", label: "MCTFS & OMPF" },
  { id: "checklist", label: "Checklist" },
  { id: "references", label: "References", type: "references" as const },
];

const ELECTRONIC_RECORDS = [
  "Basic Individual Record (BIR)",
  "Basic Training Record (BTR)",
  "Record of Service",
  "Pay data",
  "Assignment data",
];

const PHYSICAL_RECORDS = [
  { record: "SRB/OQR", method: "Mail or registered mail between IPACs" },
  { record: "Medical Records", method: "Hand-carry or medical channels" },
  { record: "Dental Records", method: "Hand-carry or dental channels" },
  { record: "Training Certificates", method: "Hand-carry copies" },
];

const SRB_CONTENTS = [
  "Current fitness reports/evaluations",
  "All awards and decorations",
  "Training certificates",
  "Page 11 entries",
  "Correct personal data",
];

const COMMON_ISSUES = [
  { issue: "Missing awards", resolution: "Submit award documentation to S-1" },
  { issue: "Incorrect data", resolution: "Request correction through S-1" },
  { issue: "Missing training", resolution: "Provide certificates to S-1 for entry" },
  { issue: "Fitness report gap", resolution: "Verify with reporting senior" },
];

const OCONUS_REQUIREMENTS = [
  "Medical screening required",
  "Dental clearance required",
  "Dependent medical records (if accompanied)",
  "Immunization records current",
  "Overseas suitability screening",
];

const OCONUS_SECURITY = [
  "Do not pack records in HHG shipment",
  "Hand-carry all records",
  "Keep records in carry-on luggage (air travel)",
  "Deliver immediately upon arrival",
];

const MCTFS_VERIFY = [
  "Correct duty station",
  "Correct unit assignment",
  "Pay data transferred",
  "Training records current",
];

const OMPF_REVIEW = [
  "Access OMPF via MOL",
  "Review all documents for accuracy",
  "Verify awards and decorations documented",
  "Check fitness report continuity",
  "Submit corrections via ORMA if needed",
];

const CHECKLIST_BEFORE = [
  "Review OMPF via MOL for accuracy",
  "Verify SRB/OQR is complete",
  "Complete PCS physical",
  "Obtain dental clearance",
  "Submit ORMA corrections if needed",
  "Confirm records transfer method with S-1",
];

const CHECKLIST_DURING = [
  "Hand-carry sealed records (if authorized)",
  "Keep records in carry-on luggage",
  "Do not open sealed records",
];

const CHECKLIST_ARRIVAL = [
  "Deliver records to appropriate offices",
  "Obtain receipts for delivered records",
  "Verify MCTFS data with S-1",
  "Register with medical and dental",
  "Check OMPF access at new location",
];

export function RecordsTransferContent({ data }: Props) {
  const content: Record<string, React.ReactNode> = {
    overview: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Records Transfer Overview
          </h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Records transfer ensures your official personnel records move correctly from your current command
            to your gaining command during PCS. Your Service Record Book (SRB) or Officer Qualification
            Record (OQR) and medical/dental records must be properly prepared for transfer or hand-carry.
            MCTFS data transfers electronically, but physical documents require coordination to prevent
            loss and ensure continuity.
          </p>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Key Requirements
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Element</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Requirement</th>
                </tr>
              </thead>
              <tbody>
                {KEY_POINTS.map((point) => (
                  <tr key={point.label} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{point.label}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{point.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Electronic Records (MCTFS)
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Transferred automatically when check-in processed:
            </p>
            <ul className="mt-4 space-y-1">
              {ELECTRONIC_RECORDS.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <span className="text-green-600 mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
              Physical Records
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Require manual transfer:
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-200 dark:border-zinc-700">
                    <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Record</th>
                    <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Transfer Method</th>
                  </tr>
                </thead>
                <tbody>
                  {PHYSICAL_RECORDS.map((row) => (
                    <tr key={row.record} className="border-b border-zinc-100 dark:border-zinc-800">
                      <td className="py-2 pr-4 font-medium text-zinc-700 dark:text-zinc-300">{row.record}</td>
                      <td className="py-2 text-zinc-600 dark:text-zinc-400">{row.method}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    ),

    srb: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            SRB/OQR Transfer Process
          </h3>
          <ol className="mt-4 space-y-2">
            {[
              "S-1 prepares SRB/OQR for transfer",
              "Records audited for completeness",
              "Mailed via registered mail to gaining IPAC",
              "Or hand-carried by Marine (command discretion)",
            ].map((step, index) => (
              <li key={step} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white">
                  {index + 1}
                </span>
                <span className="text-sm text-zinc-700 dark:text-zinc-300">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Before Transfer - Verify Contents
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Verify your SRB/OQR contains:
          </p>
          <ul className="mt-4 space-y-1">
            {SRB_CONTENTS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <span className="text-[var(--sa-red)] mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Hand-Carry Option</h4>
          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            If authorized to hand-carry:
          </p>
          <ul className="mt-2 space-y-1 text-sm text-blue-600 dark:text-blue-400">
            <li>• Records sealed by S-1</li>
            <li>• Do not open sealed records</li>
            <li>• Deliver to gaining S-1 upon check-in</li>
            <li>• Obtain receipt for delivery</li>
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Common Issues
          </h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-700">
                  <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Issue</th>
                  <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Resolution</th>
                </tr>
              </thead>
              <tbody>
                {COMMON_ISSUES.map((row) => (
                  <tr key={row.issue} className="border-b border-zinc-100 dark:border-zinc-800">
                    <td className="py-2 pr-4 font-medium text-red-700 dark:text-red-400">{row.issue}</td>
                    <td className="py-2 text-zinc-600 dark:text-zinc-400">{row.resolution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    ),

    medical: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Medical Records Transfer
          </h3>
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Standard Transfer</h4>
              <ol className="mt-2 space-y-1 list-decimal list-inside text-sm text-zinc-700 dark:text-zinc-300">
                <li>Complete separation physical (DD 2807-1/2808) before PCS</li>
                <li>Medical records prepared by Medical Treatment Facility (MTF)</li>
                <li>Hand-carry to gaining MTF or transfer via medical channels</li>
              </ol>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Hand-Carry Procedures</h4>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">If hand-carrying medical records:</p>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Records sealed by current MTF</li>
                <li>• Do not open sealed envelope</li>
                <li>• Deliver to gaining MTF at check-in</li>
                <li>• Obtain receipt for delivery</li>
              </ul>
            </div>
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <h4 className="font-medium text-green-800 dark:text-green-200">AHLTA Records</h4>
              <p className="mt-1 text-sm text-green-700 dark:text-green-300">
                Electronic health records in AHLTA:
              </p>
              <ul className="mt-2 space-y-1 text-sm text-green-700 dark:text-green-300">
                <li>• Transfer automatically between MTFs</li>
                <li>• Verify access at gaining MTF</li>
                <li>• Report any missing records</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Dental Records Transfer
          </h3>
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Transfer Process</h4>
              <ol className="mt-2 space-y-1 list-decimal list-inside text-sm text-zinc-700 dark:text-zinc-300">
                <li>Complete dental clearance before PCS</li>
                <li>Records prepared by Dental Treatment Facility</li>
                <li>Hand-carry or transfer via dental channels</li>
              </ol>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Hand-Carry Procedures</h4>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Same as medical records:</p>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Records sealed by dental clinic</li>
                <li>• Do not open</li>
                <li>• Deliver to gaining dental clinic</li>
                <li>• Obtain receipt</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            OCONUS Transfer Considerations
          </h3>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Additional Requirements</h4>
              <ul className="mt-2 space-y-1">
                {OCONUS_REQUIREMENTS.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="text-[var(--sa-red)] mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Records Security</h4>
              <ul className="mt-2 space-y-1">
                {OCONUS_SECURITY.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="text-amber-600 mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    ),

    mctfs: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            MCTFS Data Transfer
          </h3>
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Automatic Transfer</h4>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">When you check out and check in:</p>
              <ol className="mt-2 space-y-1 list-decimal list-inside text-sm text-zinc-700 dark:text-zinc-300">
                <li>Losing command processes detachment in MCTFS</li>
                <li>Gaining command processes join in MCTFS</li>
                <li>Data transfers electronically</li>
                <li>Verify accuracy at new command</li>
              </ol>
            </div>
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <h4 className="font-medium text-green-800 dark:text-green-200">Verify Upon Arrival</h4>
              <p className="mt-1 text-sm text-green-700 dark:text-green-300">Check with S-1 to verify:</p>
              <ul className="mt-2 space-y-1 text-sm text-green-700 dark:text-green-300">
                {MCTFS_VERIFY.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            OMPF (Official Military Personnel File)
          </h3>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Your OMPF</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Maintained at HQMC</li>
                <li>• Accessible via MOL OMPF Viewer</li>
                <li>• Updates via ORMA</li>
                <li>• Does not physically transfer</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Records Audit Before PCS</h4>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Before departing, review your records:</p>
              <ol className="mt-2 space-y-1 list-decimal list-inside text-sm text-zinc-700 dark:text-zinc-300">
                {OMPF_REVIEW.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Resources
          </h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Unit S-1/Admin", purpose: "SRB/OQR transfer" },
              { name: "IPAC", purpose: "MCTFS data, records processing" },
              { name: "Medical Treatment Facility", purpose: "Medical records" },
              { name: "Dental Clinic", purpose: "Dental records" },
              { name: "MOL OMPF Viewer", purpose: "Review official record" },
              { name: "ORMA", purpose: "Submit record corrections" },
            ].map((res) => (
              <div key={res.name} className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/50">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">{res.name}</h4>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{res.purpose}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    ),

    checklist: (
      <div className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Before Departure
          </h3>
          <ul className="mt-4 space-y-2">
            {CHECKLIST_BEFORE.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            During PCS
          </h3>
          <ul className="mt-4 space-y-2">
            {CHECKLIST_DURING.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Upon Arrival
          </h3>
          <ul className="mt-4 space-y-2">
            {CHECKLIST_ARRIVAL.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-zinc-300" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
