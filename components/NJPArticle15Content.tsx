"use client";

import { TabbedContentLayout } from "./ui/TabbedContentLayout";

type Reference = { title: string; url: string; isQuickLink?: boolean };
type Props = { data: { references: Reference[] } };

const TABS = [
  { id: "overview", label: "Your Rights" },
  { id: "process", label: "What to Expect" },
  { id: "options", label: "Your Options" },
  { id: "appeal", label: "How to Appeal" },
  { id: "punishments", label: "Possible Punishments" },
  { id: "references", label: "References", type: "references" as const },
];

export function NJPArticle15Content({ data }: Props) {
  const content = {
    overview: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Your Rights at NJP (Office Hours)
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            If you've been notified of Non-Judicial Punishment (NJP), also called "Office Hours," you have important rights. Understanding these rights helps you make informed decisions about how to proceed.
          </p>
          <div className="mt-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
              You have the right to consult with a military lawyer (free of charge) before making any decisions.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Your Rights Before NJP
          </h3>
          <ul className="mt-3 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
              <span><strong>Right to be informed:</strong> You must receive written notice of the alleged offense and the evidence against you</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
              <span><strong>Right to consult a lawyer:</strong> You can speak with a military defense attorney at no cost before deciding to accept or refuse NJP</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
              <span><strong>Right to refuse NJP:</strong> You can demand trial by court-martial instead (understand the consequences first)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
              <span><strong>Right to examine evidence:</strong> You can review all evidence the command intends to use against you</span>
            </li>
          </ul>
        </div>

        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Your Rights During NJP
          </h3>
          <ul className="mt-3 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
              <span><strong>Right to be present:</strong> You must be present at your NJP hearing</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
              <span><strong>Right to remain silent:</strong> You don't have to say anything that might incriminate you</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
              <span><strong>Right to speak:</strong> You can present your side of the story, including evidence and witnesses</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
              <span><strong>Right to a spokesperson:</strong> You may have someone speak on your behalf (not an attorney, but could be an SNCO, mentor, etc.)</span>
            </li>
          </ul>
        </div>

        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Your Rights After NJP
          </h3>
          <ul className="mt-3 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
              <span><strong>Right to appeal:</strong> You have 5 calendar days to submit an appeal if you believe the punishment was unjust or too severe</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
              <span><strong>Right to a copy:</strong> You must receive a copy of the completed NJP paperwork</span>
            </li>
          </ul>
        </div>
      </section>
    ),
    process: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            What Happens During NJP
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Here's what you can expect if you've been notified of NJP. Understanding the process helps you prepare.
          </p>
        </div>

        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Step 1: You Receive Written Notice
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            You'll receive a "Notice of Intent to Impose NJP" that tells you:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>What offense you're accused of</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>The evidence against you</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Your rights (including the right to refuse and demand court-martial)</span>
            </li>
          </ul>
          <div className="mt-4 rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>Action Required:</strong> Sign acknowledging you received the notice (this doesn't mean you agree with the charges). Then schedule an appointment with Legal Assistance.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Step 2: You Consult with a Lawyer
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Before your NJP hearing, go to Legal Assistance to speak with a military attorney. This is free and confidential. They will:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Explain the charges and possible punishments</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Help you understand your options (accept NJP vs. demand court-martial)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Advise you on what to say (or not say) at the hearing</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Help you prepare any evidence or witnesses in your favor</span>
            </li>
          </ul>
        </div>

        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Step 3: You Decide to Accept or Refuse
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            You must decide whether to accept NJP or demand trial by court-martial. Your lawyer can help you weigh this decision. (See "Your Options" tab for more details.)
          </p>
        </div>

        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Step 4: The NJP Hearing ("Office Hours")
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            If you accept NJP, you'll appear before your Commanding Officer. Here's what happens:
          </p>
          <ol className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300 list-decimal list-inside">
            <li>The CO states the alleged offense</li>
            <li>Evidence against you is presented</li>
            <li>You can present your side, call witnesses, or present evidence</li>
            <li>The CO decides if you committed the offense</li>
            <li>If found to have committed the offense, the CO announces punishment</li>
          </ol>
          <div className="mt-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>Tip:</strong> You can bring a spokesperson (a mentor, SNCO, or someone who can speak to your character) to Office Hours. They can speak on your behalf.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Step 5: After the Hearing
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            After punishment is announced, you'll receive a copy of the NJP paperwork. You then have <strong>5 calendar days</strong> to file an appeal if you believe the punishment was unjust or too severe.
          </p>
        </div>
      </section>
    ),
    options: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Your Options When Facing NJP
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            When you receive notice of NJP, you have a critical decision to make: accept NJP or demand trial by court-martial. Talk to a lawyer before deciding.
          </p>
        </div>

        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Option 1: Accept NJP
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <h4 className="font-medium text-green-800 dark:text-green-200">Pros</h4>
              <ul className="mt-2 space-y-1 text-sm text-green-700 dark:text-green-300">
                <li>• Maximum punishments are limited</li>
                <li>• Usually faster resolution</li>
                <li>• No federal criminal conviction</li>
                <li>• Can appeal the punishment</li>
                <li>• Less formal than court-martial</li>
              </ul>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-medium text-red-800 dark:text-red-200">Cons</h4>
              <ul className="mt-2 space-y-1 text-sm text-red-700 dark:text-red-300">
                <li>• CO decides guilt and punishment</li>
                <li>• Less formal rules of evidence</li>
                <li>• Can still result in reduction, forfeitures</li>
                <li>• Becomes part of your record</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Option 2: Demand Court-Martial
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <h4 className="font-medium text-green-800 dark:text-green-200">Pros</h4>
              <ul className="mt-2 space-y-1 text-sm text-green-700 dark:text-green-300">
                <li>• Formal rules of evidence apply</li>
                <li>• Higher burden of proof for conviction</li>
                <li>• You get a military defense attorney</li>
                <li>• May result in case dismissal</li>
                <li>• Jury trial option (Special/General CM)</li>
              </ul>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-medium text-red-800 dark:text-red-200">Cons</h4>
              <ul className="mt-2 space-y-1 text-sm text-red-700 dark:text-red-300">
                <li>• Potentially more severe punishments</li>
                <li>• Federal criminal conviction if found guilty</li>
                <li>• Longer process</li>
                <li>• Command may pursue the case anyway</li>
                <li>• More stressful and public</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>Important:</strong> If you refuse NJP, the command can still pursue court-martial charges, dismiss the case, or take other administrative action. Refusing NJP does NOT guarantee the case goes away.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Questions to Ask Your Lawyer
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>How strong is the evidence against me?</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>What are the likely punishments if I accept NJP vs. court-martial?</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>How will this affect my career (promotions, reenlistment, clearance)?</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Is there any evidence or witnesses I should gather?</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>What should I say (or not say) at the hearing?</span>
            </li>
          </ul>
        </div>
      </section>
    ),
    appeal: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            How to Appeal Your NJP
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            If you believe your NJP punishment was unjust or too severe, you have the right to appeal. Here's what you need to know.
          </p>
          <div className="mt-4 rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <p className="text-sm font-medium text-red-800 dark:text-red-200">
              <strong>Deadline:</strong> You must submit your appeal within 5 calendar days of when punishment was imposed. Don't miss this deadline!
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Grounds for Appeal
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            You can appeal based on:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Injustice:</strong> You didn't commit the offense, or there's new evidence showing you're not guilty</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Disproportionate punishment:</strong> The punishment was too severe for the offense</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Procedural error:</strong> Your rights were violated during the process</span>
            </li>
          </ul>
        </div>

        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            How to Submit Your Appeal
          </h3>
          <ol className="mt-3 space-y-3 text-sm text-zinc-700 dark:text-zinc-300 list-decimal list-inside">
            <li><strong>Write your appeal</strong> explaining why the NJP was unjust or punishment too severe</li>
            <li><strong>Include any supporting evidence</strong> (documents, statements from witnesses, etc.)</li>
            <li><strong>Submit to your Commanding Officer</strong> within 5 calendar days</li>
            <li><strong>The CO forwards your appeal</strong> to the next superior commander for review</li>
          </ol>
          <div className="mt-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>Tip:</strong> Go to Legal Assistance for help writing your appeal. They can help you present the strongest case.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            What Happens Next
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Your appeal goes to the next superior commander in the chain of command</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>They review all the evidence and your appeal</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>Decision is usually made within 30 days</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span>The reviewing authority can: uphold the NJP, reduce the punishment, or set aside the NJP entirely</span>
            </li>
          </ul>
        </div>

        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            During the Appeal
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            <strong>Important:</strong> Filing an appeal does NOT automatically stop punishment from being carried out. Forfeitures, extra duty, and restriction typically begin immediately. However, if your appeal is successful, any punishment already served may be restored (money returned, etc.).
          </p>
        </div>
      </section>
    ),
    punishments: (
      <section className="space-y-6">
        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h2 className="text-xl font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Possible Punishments at NJP
          </h2>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The punishments your CO can impose depend on their rank and your rank. Here's what you could face:
          </p>
        </div>

        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Types of Punishment
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Reduction in Grade</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Your pay grade is reduced. For E-4 and below, CO can reduce by 1 grade. For E-5 and above, reduction is limited.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Forfeiture of Pay</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Part of your pay is taken. Maximum is typically half of one month's pay for up to 2 months.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Extra Duty</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Additional work duties outside your normal hours. Maximum is typically 45 days.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Restriction</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                Limited to a specific area (usually base). Maximum is typically 60 days. You must still perform your duties.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Correctional Custody</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                For E-3 and below only. Confinement to a specific facility with hard labor. Maximum 30 days.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
              <h4 className="font-medium text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">Reprimand</h4>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                An official admonishment that becomes part of your record.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Suspended Punishment
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            The CO may "suspend" all or part of your punishment. This means:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
              <span>The suspended portion is NOT carried out immediately</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
              <span>If you have no further misconduct for 6 months, the suspended portion goes away completely</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
              <span>If you get in trouble again within 6 months, the suspended punishment can be "vacated" (put into effect)</span>
            </li>
          </ul>
        </div>

        <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black/40">
          <h3 className="text-lg font-semibold text-[var(--sa-navy)] dark:text-[var(--sa-cream)]">
            Career Impacts
          </h3>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
            Beyond the immediate punishment, NJP can affect your career:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Promotions:</strong> NJP is considered when evaluating promotion eligibility</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Reenlistment:</strong> NJP may affect reenlistment eligibility</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Security Clearance:</strong> NJP is reported and may affect clearance renewal</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--sa-red)]" />
              <span><strong>Special Duty:</strong> NJP may disqualify you from special assignments</span>
            </li>
          </ul>
        </div>
      </section>
    ),
  };

  return <TabbedContentLayout tabs={TABS} data={data} content={content} />;
}
