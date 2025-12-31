"use client";

import { TabbedContentLayout } from "../ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "unit-level", label: "Unit Level Correction" },
  { id: "perb-appeal", label: "PERB Appeal" },
  { id: "bcnr", label: "BCNR" },
  { id: "leader-role", label: "Leader Role" },
  { id: "references", label: "References", type: "references" as const },
];

export function NOTRECAppealProcessContent({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">NOT REC Appeal Process</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            In JEPES, commanders have the authority to mark a Marine as "NOT REC" (Not Recommended for Promotion).
            This designation prevents the Marine from competing for promotion during that period. Marines who believe
            a NOT REC was issued incorrectly have options to address it.
          </p>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Key Point</h4>
          <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
            Per MCO 1616.1, a NOT REC is in effect either until the next reporting occasion or when lifted by the commander.
            Unless the commander approves a NOT REC, the MRO is by default recommended for promotion.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">When NOT REC Occurs</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Per MCO 1616.1 Chapter 2:</p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Commanders have the ability to NOT REC an MRO at any reporting occasion</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>NOT RECs occur with every reporting occasion and remain in effect until the next occasion or when lifted</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Marking a 0.0 in any command input category automatically triggers NOT REC</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Commander marks NOT REC with a directed justified comment</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Adverse Material Requiring NOT REC</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Per MCO 1616.1 Chapter 2, Paragraph 3c:</p>
          <ol className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">1</span>
              <span>Pending or completed legal action</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">2</span>
              <span>Notification of separation proceedings</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">3</span>
              <span>Assignment to Body Composition Program (BCP) or Military Appearance Program (MAP)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">4</span>
              <span>PFT/CFT failure</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">5</span>
              <span>Training failure</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">6</span>
              <span>Subject of a Competency Review Board (CRB)</span>
            </li>
          </ol>
        </div>
      </section>
    ),
    "unit-level": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Correcting NOT REC at Unit Level</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            If a Marine believes the NOT REC was issued in error, the first step is to address it at the unit level
            with the commander.
          </p>
        </div>
        <ol className="space-y-3">
          <li className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">1</span>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Request Commander Review</h4>
                <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>• Request mast with your commander through your chain of command</li>
                  <li>• Provide specific facts showing why the NOT REC is incorrect</li>
                  <li>• Reference the specific adverse material criteria in MCO 1616.1</li>
                </ul>
              </div>
            </div>
          </li>
          <li className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">2</span>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">Commander Lifts NOT REC</h4>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                  Per MCO 1616.1, the commander has authority to lift the NOT REC and recommend the Marine for promotion
                  at any time. If the commander agrees the NOT REC was in error, they lift it in JEPES and the Marine
                  becomes eligible for promotion competition immediately.
                </p>
              </div>
            </div>
          </li>
          <li className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/15 dark:bg-black/40">
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">3</span>
              <div>
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">If Commander Upholds NOT REC</h4>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                  If the commander believes the NOT REC is appropriate, the Marine remains NOT REC until the next
                  reporting occasion. The Marine must address the underlying issue (pass PFT, exit BCP, resolve legal
                  action, etc.). At the next occasion, the commander reevaluates.
                </p>
              </div>
            </div>
          </li>
        </ol>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Correcting Erroneous Command Input Marks</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Per MCO 1616.1 Chapter 2, Paragraph 4:</p>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">If Current Approver Is Still in Reporting Chain</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• The Approver directly corrects command input markings</li>
                <li>• Or returns the occasion to a member of the reporting chain to re-evaluate</li>
                <li>• If returned, the occasion is delinquent until final marks are approved</li>
              </ul>
            </div>
            <div className="rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/50">
              <h4 className="font-medium text-zinc-900 dark:text-zinc-100">If Original Approver Is No Longer in Reporting Chain</h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <li>• Current Approver deletes erroneous command input marks</li>
                <li>• Removes them from the MRO's average in grade</li>
                <li>• With supporting documentation, appropriate marks are replaced</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">Example</h4>
          <p className="mt-2 text-sm text-blue-700 dark:text-blue-300">
            MRO's NJP from two years ago is overturned. Command input marks during that occasion are deleted.
            Previous Evaluator provides appropriate recommended marks which are routed to current Approver.
          </p>
        </div>
      </section>
    ),
    "perb-appeal": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Performance Evaluation Review Board (PERB)</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            For Marines E-5 and above receiving adverse fitness reports with NOT REC for promotion, the PERB is
            the first agency responsible for substantive corrections to fitness reports. Per MCO 1610.7B Chapter 10.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Filing a PERB Appeal</h3>
          <ol className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">1</span>
              <span>Complete DD Form 149 (Application for Correction of Military Record)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">2</span>
              <span>Submit electronically via eBenefits.va.gov or BCNR portal</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--sa-navy)] text-xs font-bold text-white dark:bg-[var(--sa-cream)] dark:text-[var(--sa-navy)]">3</span>
              <span>Or mail to: CMC (MMRP-13), 2008 Elliot Road, Quantico, VA 22134-5030</span>
            </li>
          </ol>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Supporting Evidence Required</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Per MCO 1610.7B:</p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>The burden of proof rests with the petitioner</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Must produce evidence of probable material error, substantive inaccuracy, or injustice</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Examples: travel orders, Unit Diary extracts, hospital records, leave records, investigation results</span></li>
          </ul>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-black/5 bg-white p-5 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Timeliness</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>File within three years of discovery date</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Late appeals must explain why the board should consider them</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Indicate urgency on DD 149 (mandatory separation pending, promotion consideration imminent)</span></li>
            </ul>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-5 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">PERB Process</h3>
            <ol className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li>1. MMRP-13 screens for completeness</li>
              <li>2. Advisory opinions obtained from PES, JPL, Career Counseling</li>
              <li>3. Board reviews and votes (simple majority)</li>
              <li>4. If approved, record is corrected</li>
              <li>5. If denied, forwarded to BCNR</li>
            </ol>
          </div>
        </div>
        <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <h4 className="font-semibold text-red-800 dark:text-red-200">What PERB Will Not Consider</h4>
          <p className="mt-2 text-sm text-red-700 dark:text-red-300">Per MCO 1610.7B:</p>
          <ul className="mt-2 space-y-2 text-sm text-red-700 dark:text-red-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>A report is not unjust solely because RV or comparative assessment is lower than other reports</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>Personality conflicts do not automatically constitute grounds for relief</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" /><span>Statements attacking reporting officials' motives may be referred to those individuals</span></li>
          </ul>
        </div>
      </section>
    ),
    bcnr: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Board for Correction of Naval Records (BCNR)</h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            If PERB denies the appeal, it automatically forwards to BCNR for final determination. BCNR is the
            final authority for substantive corrections to military records.
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">BCNR Authority</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Final authority for substantive corrections per 10 U.S.C. 1552</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Reviews PERB recommendation and Marine Corps position statement</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Makes final determination on fitness report corrections</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Resubmitting Denied Petitions</h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Per MCO 1610.7B:</p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Only if substantial, relevant, verifiable new evidence is submitted</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Must state case was previously considered</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Submit directly to BCNR (not PERB)</span></li>
          </ul>
        </div>
        <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200">BCNR Address</h4>
          <p className="mt-2 font-mono text-sm text-blue-700 dark:text-blue-300">
            Board for Correction of Naval Records<br />
            701 S. Courthouse Road<br />
            Building 12, Suite BE140<br />
            Arlington, VA 22204-2490
          </p>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Timeline Summary</h3>
          <table className="mt-4 min-w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-zinc-700">
                <th className="py-2 pr-4 text-left font-semibold text-zinc-900 dark:text-zinc-100">Action</th>
                <th className="py-2 text-left font-semibold text-zinc-900 dark:text-zinc-100">Timeline</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              <tr>
                <td className="py-2 pr-4 text-zinc-700 dark:text-zinc-300">NOT REC in effect</td>
                <td className="py-2 text-zinc-700 dark:text-zinc-300">Until next reporting occasion or lifted by commander</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 text-zinc-700 dark:text-zinc-300">Commander lifts NOT REC</td>
                <td className="py-2 text-zinc-700 dark:text-zinc-300">At any time</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 text-zinc-700 dark:text-zinc-300">PERB appeal filing</td>
                <td className="py-2 text-zinc-700 dark:text-zinc-300">Within 3 years of discovery</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 text-zinc-700 dark:text-zinc-300">MRO statement on adverse report</td>
                <td className="py-2 text-zinc-700 dark:text-zinc-300">5 working days</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 text-zinc-700 dark:text-zinc-300">PERB processing</td>
                <td className="py-2 text-zinc-700 dark:text-zinc-300">Order received, varies based on urgency</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    ),
    "leader-role": (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Leader Responsibilities</h2>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Before Issuing NOT REC</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Ensure adverse material meets criteria in MCO 1616.1</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Provide justified directed comment explaining basis</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Counsel Marine on the NOT REC and reason</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">If Marine Disputes NOT REC</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Review the facts objectively</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Consult with SJA if legal action is involved</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Lift NOT REC if issued in error</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Document your decision</span></li>
          </ul>
        </div>
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Supporting Marine Appeals</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Provide accurate copies of evaluations</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Do not obstruct legitimate appeal efforts</span></li>
            <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" /><span>Ensure Marine knows their options</span></li>
          </ul>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200">Key Point</h4>
          <p className="mt-2 text-sm text-amber-700 dark:text-amber-300">
            NOT REC is a serious action that affects a Marine's career progression. Before issuing, ensure you have
            valid grounds per MCO 1616.1 and that you have counseled the Marine. If the Marine disputes it, review
            the facts objectively and be willing to lift it if issued in error.
          </p>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
