"use client";
import { useState } from "react";

export default function TEBContent() {
  const [tab, setTab] = useState<
    | "overview"
    | "eligibility"
    | "recipients"
    | "process"
    | "important"
    | "situations"
    | "problems"
    | "videos"
    | "references"
  >("overview");

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center gap-2 overflow-x-auto [&>button]:whitespace-nowrap [&>button]:shrink-0">
          <button onClick={() => setTab("overview")} className={`rounded-md px-3 py-2 text-sm ${tab === "overview" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Overview</button>
          <button onClick={() => setTab("eligibility")} className={`rounded-md px-3 py-2 text-sm ${tab === "eligibility" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Eligibility</button>
          <button onClick={() => setTab("recipients")} className={`rounded-md px-3 py-2 text-sm ${tab === "recipients" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Who Can Receive</button>
          <button onClick={() => setTab("process")} className={`rounded-md px-3 py-2 text-sm ${tab === "process" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>How To Transfer</button>
          <button onClick={() => setTab("important")} className={`rounded-md px-3 py-2 text-sm ${tab === "important" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Important Rules</button>
          <button onClick={() => setTab("situations")} className={`rounded-md px-3 py-2 text-sm ${tab === "situations" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Special Situations</button>
          <button onClick={() => setTab("problems")} className={`rounded-md px-3 py-2 text-sm ${tab === "problems" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Problems & Solutions</button>
          <button onClick={() => setTab("videos")} className={`rounded-md px-3 py-2 text-sm ${tab === "videos" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>Videos</button>
          <button onClick={() => setTab("references")} className={`rounded-md px-3 py-2 text-sm ${tab === "references" ? "bg-[var(--sa-red)] text-[var(--sa-cream)]" : "bg-[var(--sa-cream)]/60 text-[var(--sa-navy)] dark:bg-white/10 dark:text-[var(--sa-cream)]"}`}>References</button>
        </div>

        {tab === "overview" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Transfer Your Post‑9/11 GI Bill Benefits</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Transferring education benefits turns your Post‑9/11 GI Bill (Chapter 33) into a family legacy. DoD approves the transfer to eligible dependents; VA pays benefits after approval.</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Core Idea</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                  <li>Allocate up to 36 months to spouse/children</li>
                  <li>Must be in active/Selected Reserve at request</li>
                </ul>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">BLUF</div>
                <p className="mt-1 text-sm">Request early, verify DEERS, and plan to meet the 4‑year obligation to avoid VA recoupment.</p>
              </div>
            </div>
          </section>
        )}

        {tab === "eligibility" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Eligibility</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Eligible while serving on active duty or in the Selected Reserve.</p>
            <div className="mt-3">
              <div className="text-sm font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Standard Requirements</div>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                <li>6 years of service completed at election</li>
                <li>Agree to serve 4 additional years from request date</li>
                <li>Retainability for the obligation; not barred by policy/statute</li>
                <li>Dependent must be in DEERS</li>
              </ul>
              <div className="mt-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800 dark:border-white/15 dark:bg-white/10 dark:text-[var(--sa-cream)]">
                <div className="text-xs font-semibold">Purple Heart Exception</div>
                <div className="mt-1 text-xs">If Purple Heart and still serving, you may transfer regardless of years served or ability to complete the obligation.</div>
              </div>
            </div>
          </section>
        )}

        {tab === "recipients" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Who Can Receive</h2>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Divide up to 36 months among spouse, children, or a mix.</p>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Spouses</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Eligible to use after approval and 6‑year service requirement</li>
                  <li>No age limit; BAH stipend not payable while sponsor is on active duty</li>
                </ul>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Children</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Use until 26th birthday</li>
                  <li>Age 21–22: full‑time student requirement for new transfers</li>
                  <li>May begin using only after sponsor completes 10 years of service</li>
                  <li>Secondary school diploma or equivalency required</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "process" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">How To Transfer</h2>
            <div className="mt-3 space-y-4">
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 1: milConnect (Sponsor)</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Sign in to milConnect → Transfer of Education Benefits (TEB)</li>
                  <li>Select Post‑9/11 GI Bill (Chapter 33)</li>
                  <li>Allocate whole months to dependents (up to 36)</li>
                  <li>Check acknowledgments and submit in active/Selected Reserve status</li>
                </ul>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 2: Approval Status</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Submitted → Request Approved when your Service validates</li>
                  <li>Green: obligation fulfilled</li>
                  <li>Yellow: obligation not yet fulfilled; stay until OED</li>
                  <li>Red: at risk or failed to complete commitment</li>
                </ul>
              </div>
              <div className="rounded-md border border-black/10 bg-white p-4 dark:border-white/15 dark:bg-black/60">
                <div className="text-sm font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Step 3: VA Application (Dependent)</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Submit VA Form 22‑1990E online or by mail after approval</li>
                  <li>Dependents must use their own VA accounts</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "important" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Important Rules</h2>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Irrevocable: electing Post‑9/11 to transfer cannot be undone</li>
              <li>Must initiate and be approved before separation/retirement</li>
              <li>After separation: only reallocate months already transferred while in service</li>
              <li>Failure to complete 4‑year obligation can trigger VA recoupment</li>
              <li>Active‑duty sponsor: spouse books/supplies stipend only; children may receive BAH and books</li>
            </ul>
          </section>
        )}

        {tab === "situations" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Special Situations</h2>
            <div className="mt-4 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Purple Heart</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Waives both 6‑year service and 4‑year additional obligation while still serving.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Colmery Act</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Provides protections for dependents when a sponsor passes away; check VA guidance for survivor use and reallocation.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Career Intermission & IRR</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">Program participation or IRR time can affect the obligation clock and eligibility; ensure status remains eligible and avoid IRR breaks that jeopardize obligation.</p>
              </div>
            </div>
          </section>
        )}

        {tab === "problems" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Common Problems & Solutions</h2>
            <div className="mt-3 space-y-4">
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Missed Transfer Before Separation</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Solution: Initiate and gain approval while still in service; after separation you may only reallocate months already transferred.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Obligation Not Completed</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Risk: VA recoupment of tuition/stipends if 4‑year obligation fails.</li>
                  <li>Solution: Verify OED in milConnect; avoid status changes that break retainability.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-4 text-left shadow-sm dark:border-white/15 dark:bg-black/60">
                <h3 className="font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Dependent Ineligible In DEERS</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                  <li>Cause: Incorrect DEERS data or expired status blocks benefit use.</li>
                  <li>Solution: Update DEERS at ID card facility before submitting VA Form 22‑1990E.</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {tab === "videos" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Semper Admin Video Tutorials</h2>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://youtu.be/ySe403cNWQw" target="_blank" rel="noopener noreferrer">TEB Overview: What You Need to Know NOW</a></li>
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://youtu.be/yGYtwOQVmZI" target="_blank" rel="noopener noreferrer">Am I Eligible? Understanding TEB Requirements</a></li>
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://youtu.be/7DOhQfMSBfI" target="_blank" rel="noopener noreferrer">Who Can Receive Your Benefits? Dependent Eligibility</a></li>
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://youtu.be/K1pFn0r_BBA" target="_blank" rel="noopener noreferrer">Your Service Obligation: The 48‑Month Commitment</a></li>
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://youtu.be/GtSio3FH5HU" target="_blank" rel="noopener noreferrer">After Approval: Managing and Modifying Benefits</a></li>
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://youtu.be/a_o_ILbMp30" target="_blank" rel="noopener noreferrer">Common Mistakes That Cost Marines Their TEB Benefits</a></li>
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://youtu.be/fISj9qcLQyA" target="_blank" rel="noopener noreferrer">Special Situations: Purple Heart, Colmery Act, and More</a></li>
            </ul>
            <div className="mt-3 text-sm">
              <a href="https://linktr.ee/semperadmin" target="_blank" rel="noopener noreferrer" className="text-[var(--sa-red)] hover:underline">Semper Admin Linktree</a>
            </div>
          </section>
        )}

        {tab === "references" && (
          <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
            <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">References</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://milconnect.dmdc.osd.mil/milconnect/" target="_blank" rel="noopener noreferrer">milConnect: Transfer of Education Benefits (TEB)</a></li>
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.va.gov/education/survivor-dependent-benefits/transfer-post-9-11-gi-bill-benefits/" target="_blank" rel="noopener noreferrer">VA: Transfer Post‑9/11 GI Bill benefits</a></li>
              <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.va.gov/find-forms/about-form-22-1990e/" target="_blank" rel="noopener noreferrer">VA Form 22‑1990E (Apply for transferred benefits)</a></li>
            </ul>
          </section>
        )}
      </div>

      <aside className="space-y-6">
        <section className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="text-[var(--sa-red)] hover:underline" href="https://milconnect.dmdc.osd.mil/milconnect/help/assets/docs/teb_beneficiary_guide.pdf" target="_blank" rel="noopener noreferrer">TEB Beneficiary Guide (PDF)</a></li>
            <li><a className="text-[var(--sa-red)] hover:underline" href="https://www.va.gov/education/transfer-post-9-11-gi-bill-benefits/" target="_blank" rel="noopener noreferrer">VA: Transfer Your Post‑9/11 GI Bill Benefits</a></li>
          </ul>
        </section>
      </aside>
    </div>
  );
}
