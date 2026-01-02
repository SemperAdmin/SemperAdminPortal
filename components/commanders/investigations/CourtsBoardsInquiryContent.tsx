"use client";

import { TabbedContentLayout } from "../../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "court-vs-board", label: "Court vs. Board" },
  { id: "convening-authority", label: "Convening Authority" },
  { id: "subpoena-power", label: "Subpoena Power" },
  { id: "party-rights", label: "Party Rights" },
  { id: "hearing-procedures", label: "Hearing Procedures" },
  { id: "commander-actions", label: "Commander Actions" },
  { id: "special-situations", label: "Special Situations" },
  { id: "references", label: "References", type: "references" as const },
];

export function CourtsBoardsInquiryContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">What are Courts and Boards of Inquiry?</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Courts and boards of inquiry (Type Three) are formal administrative investigations that
            use a hearing procedure. They are reserved for major incidents or serious events requiring
            formal proceedings with party rights.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Key Characteristics</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Formal hearing procedure</li>
            <li>• Multiple members (board composition)</li>
            <li>• Party rights for those whose conduct is subject to inquiry</li>
            <li>• Counsel appointed</li>
            <li>• Verbatim recording of testimony</li>
            <li>• More time and resources required</li>
          </ul>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Authority:</strong> JAGMAN Section 0211, JAGINST 5830.1
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">When to Use</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Major incidents</li>
            <li>• Serious or significant events</li>
            <li>• When party rights are needed</li>
            <li>• When hearing procedure is required</li>
            <li>• When subpoena power is needed (Court of Inquiry only)</li>
          </ul>
        </div>
      </section>
    ),
    "court-vs-board": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Court of Inquiry</h2>
          <h4 className="mt-3 font-semibold text-zinc-700 dark:text-zinc-300">Convening Authority:</h4>
          <ul className="mt-1 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• GCMCA or person designated by SECNAV</li>
          </ul>
          <h4 className="mt-3 font-semibold text-zinc-700 dark:text-zinc-300">Composition:</h4>
          <ul className="mt-1 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• At least three commissioned officers</li>
            <li>• Legal counsel appointed for the court</li>
          </ul>
          <h4 className="mt-3 font-semibold text-zinc-700 dark:text-zinc-300">Powers:</h4>
          <ul className="mt-1 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Subpoena power for civilian witnesses</li>
            <li>• Can order military personnel to appear and testify</li>
            <li>• Article 47 UCMJ provides prosecution for civilian non-compliance</li>
          </ul>
          <h4 className="mt-3 font-semibold text-zinc-700 dark:text-zinc-300">Party Designation:</h4>
          <ul className="mt-1 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Must designate as parties: UCMJ-subject persons whose conduct is subject to inquiry</li>
            <li>• Must designate: Those with direct interest who request</li>
          </ul>
          <h4 className="mt-3 font-semibold text-zinc-700 dark:text-zinc-300">Use When:</h4>
          <ul className="mt-1 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Subpoena power is needed</li>
            <li>• Most serious matters</li>
            <li>• Can substitute for Article 32 hearing</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Board of Inquiry</h2>
          <h4 className="mt-3 font-semibold text-zinc-700 dark:text-zinc-300">Convening Authority:</h4>
          <ul className="mt-1 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• GCMCA</li>
          </ul>
          <h4 className="mt-3 font-semibold text-zinc-700 dark:text-zinc-300">Composition:</h4>
          <ul className="mt-1 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• One or more commissioned officers</li>
            <li>• Legal counsel appointed for the board</li>
          </ul>
          <h4 className="mt-3 font-semibold text-zinc-700 dark:text-zinc-300">Powers:</h4>
          <ul className="mt-1 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Can order military personnel to appear and testify</li>
            <li>• NO subpoena power for civilian witnesses (unless convened under Article 135)</li>
          </ul>
          <h4 className="mt-3 font-semibold text-zinc-700 dark:text-zinc-300">Party Designation:</h4>
          <ul className="mt-1 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• May designate parties (not mandatory)</li>
            <li>• CA can authorize board to designate during proceedings</li>
          </ul>
          <h4 className="mt-3 font-semibold text-zinc-700 dark:text-zinc-300">Use When:</h4>
          <ul className="mt-1 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Major incident</li>
            <li>• Formal procedure needed</li>
            <li>• Subpoena power not required</li>
          </ul>
        </div>
      </section>
    ),
    "convening-authority": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Who Can Convene</h2>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Court of Inquiry</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• General Court-Martial Convening Authority (GCMCA)</li>
            <li>• Person designated by Secretary of the Navy</li>
            <li>• Must be O-7 or above for major incidents</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Board of Inquiry</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• General Court-Martial Convening Authority (GCMCA)</li>
            <li>• Typically O-7 or above</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Major Incident Responsibility</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The GCMCA over the command most involved, if a flag/general officer, takes cognizance
            over the case as CA. If the GCMCA is not a flag/general officer, the first flag/general
            officer in the chain of command takes cognizance.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Multiple Commands Involved</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Single investigation shall be conducted</li>
            <li>• Common superior commander convenes</li>
            <li>• Unless that commander&apos;s conduct may be subject to inquiry (then next superior convenes)</li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>If You Cannot Convene:</strong> Request through your chain of command that an
            officer with appropriate authority convene the investigation.
          </p>
        </div>
      </section>
    ),
    "subpoena-power": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Court of Inquiry Subpoena Power</h2>
          <h4 className="mt-3 font-semibold text-zinc-700 dark:text-zinc-300">Authority:</h4>
          <ul className="mt-1 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Courts of inquiry have power to subpoena civilian witnesses</li>
            <li>• To appear, testify, and produce evidence</li>
            <li>• Article 47, UCMJ provides for prosecution of non-compliant civilians in U.S. district court</li>
          </ul>
          <h4 className="mt-3 font-semibold text-zinc-700 dark:text-zinc-300">Use of Subpoena Power:</h4>
          <ul className="mt-1 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Issue subpoena to civilian witness</li>
            <li>• If civilian fails to appear, testify, or produce evidence</li>
            <li>• May be prosecuted in federal court</li>
          </ul>
          <h4 className="mt-3 font-semibold text-zinc-700 dark:text-zinc-300">Limitation:</h4>
          <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
            Generally not advisable to subpoena witnesses from non-federal vessel in collision cases
            (makes record discoverable).
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Board of Inquiry Subpoena Power</h2>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• NO subpoena power for civilian witnesses</li>
            <li>• Unless convened under Article 135, UCMJ</li>
            <li>• Can order military personnel to appear and testify</li>
          </ul>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>If Subpoena Power is Needed:</strong> Must use Court of Inquiry.
            Board of Inquiry will not suffice.
          </p>
        </div>
      </section>
    ),
    "party-rights": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Who is a Party?</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            A party is someone properly designated whose:
          </p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Conduct is subject to inquiry, OR</li>
            <li>• Has direct interest in the subject</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">&quot;Subject to Inquiry&quot;</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Person is involved such that:
          </p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Disciplinary action may follow</li>
            <li>• Rights or privileges may be adversely affected</li>
            <li>• Reputation or professional standing may be jeopardized</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">&quot;Direct Interest&quot;</h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Findings may reflect questionable conduct</li>
            <li>• Findings may relate to matter over which person has duty to control</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Party Rights Include</h3>
          <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
            <li>Notice of designation as party</li>
            <li>Presence during proceedings (not during deliberations)</li>
            <li>Representation by counsel</li>
            <li>Examine and object to evidence</li>
            <li>Object to and cross-examine witnesses</li>
            <li>Introduce evidence</li>
            <li>Testify as witness</li>
            <li>Refuse to incriminate self (Article 31 rights if accused)</li>
            <li>Make voluntary statement</li>
            <li>Make argument at conclusion</li>
            <li>Privacy Act advisement</li>
            <li>Challenge members</li>
          </ol>
        </div>
      </section>
    ),
    "hearing-procedures": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Hearing Procedure Elements</h2>
          <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
            <li><strong>Written Appointing Order</strong> - Direct verbatim recording; direct testimony under oath</li>
            <li><strong>Counsel</strong> - Legal counsel appointed for court/board; parties entitled to counsel</li>
            <li><strong>Oaths</strong> - All testimony under oath; standard witness oath administered</li>
            <li><strong>Verbatim Record</strong> - All open proceedings recorded verbatim (except counsel&apos;s argument)</li>
            <li><strong>Evidence Presentation</strong> - Formal presentation of evidence; parties may examine and object</li>
            <li><strong>Party Participation</strong> - Parties present during proceedings; cross-examination; introduction of evidence</li>
            <li><strong>Deliberations</strong> - Closed to parties; members deliberate on findings</li>
            <li><strong>Report</strong> - Findings of fact, opinions, recommendations</li>
          </ol>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Additional Members</h3>
          <h4 className="mt-3 font-semibold text-zinc-700 dark:text-zinc-300">Advisors:</h4>
          <ul className="mt-1 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• CA may appoint advisors for technical expertise</li>
            <li>• Subject to challenge like members</li>
            <li>• May suggest courses of inquiry</li>
          </ul>
          <h4 className="mt-3 font-semibold text-zinc-700 dark:text-zinc-300">Non-Voting Members:</h4>
          <ul className="mt-1 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• CA may appoint (e.g., allied nation representative)</li>
            <li>• Level of participation determined by CA</li>
          </ul>
        </div>
      </section>
    ),
    "commander-actions": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Before Convening</h2>
          <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
            <li><strong>Determine Appropriate Forum</strong>
              <ul className="mt-1 ml-4 list-disc">
                <li>Is this a major incident?</li>
                <li>Are party rights needed?</li>
                <li>Is subpoena power needed?</li>
                <li>Is hearing procedure warranted?</li>
              </ul>
            </li>
            <li><strong>Consult Legal</strong>
              <ul className="mt-1 ml-4 list-disc">
                <li>Get JA guidance on type of investigation</li>
                <li>Review JAGINST 5830.1 requirements</li>
              </ul>
            </li>
            <li><strong>Issue Convening Order</strong>
              <ul className="mt-1 ml-4 list-disc">
                <li>Per JAGINST 5830.1 requirements</li>
                <li>Appoint members</li>
                <li>Appoint counsel</li>
                <li>Set timeline based on complexity</li>
              </ul>
            </li>
          </ol>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">During Investigation</h2>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li><strong>Grant Extensions</strong> - In writing; include in report as enclosures</li>
            <li><strong>Receive Reports</strong> - IO/Board may report emerging issues; provide guidance as needed</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">After Completion</h2>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li><strong>Review Report</strong> - Findings of fact, opinions, recommendations</li>
            <li><strong>Take Action</strong> - CA takes action on report; may approve/disapprove/modify; forward as required</li>
            <li><strong>Release Considerations</strong> - Death investigations releasable to NOK; other release considerations apply</li>
          </ul>
        </div>
      </section>
    ),
    "special-situations": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Death Cases and Courts/Boards</h2>
          <h4 className="mt-3 font-semibold text-zinc-700 dark:text-zinc-300">Major Incident Deaths:</h4>
          <ul className="mt-1 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Court or board of inquiry should be convened</li>
            <li>• When death meets major incident definition</li>
          </ul>
          <h4 className="mt-3 font-semibold text-zinc-700 dark:text-zinc-300">Deceased Contributing to Incident:</h4>
          <ul className="mt-1 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• If deceased&apos;s acts may have caused incident</li>
            <li>• Notify OJAG Code 13 or HQMC (JAR)</li>
            <li>• Additional measures may be needed for fair hearing</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Non-Parties in Proceedings</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Generally only parties participate, but CA may permit:
          </p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• Individuals with interest in subject</li>
            <li>• Organizations with interest (e.g., FAA in aircraft crash)</li>
            <li>• Specify limits on participation in advance</li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Aviation Mishaps</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Class A aviation mishaps have specific requirements:
          </p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
            <li>• See JAGMAN Appendix A-2-n for statutory membership qualifications</li>
            <li>• Coordinate with Naval Safety Center</li>
          </ul>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} content={content} data={data} />;
}
