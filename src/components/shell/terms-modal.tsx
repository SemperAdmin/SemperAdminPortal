"use client";

import * as React from "react";
import Link from "next/link";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

/**
 * TermsModal - first-visit acknowledgment of the disclaimer and terms.
 *
 * This is a notice, not an access gate. The portal is a static export, so
 * every page ships fully rendered before this component mounts. A reader
 * with scripting disabled, a crawler, or anyone reading view-source never
 * meets the dialog. Treat it as a documented acknowledgment on top of the
 * DisclaimerBanner, the footer posture line, and the two legal pages.
 *
 * The dialog has one exit. No decline button, no escape key, no backdrop
 * click, no corner close. The in-modal links open a new tab rather than
 * dismissing the acknowledgment out from under the reader.
 *
 * Acceptance records a version alongside the timestamp. Revise the legal
 * content, bump TERMS_VERSION, and every prior visitor sees the dialog
 * again against the new text. Without the version a terms revision leaves
 * everyone silently accepted on wording they never read.
 *
 * State reads through useSyncExternalStore rather than an effect. The hook
 * is the React 19 idiom for external state and avoids the
 * react-hooks/set-state-in-effect warning simpler patterns trigger.
 *
 * Storage shape at semper-admin-terms-accepted:
 *   { "version": "2026-09-11", "acceptedAt": "2026-09-11T14:02:11.418Z" }
 *
 * Documented for readers at /legal/privacy-policy and
 * /legal/cookies-and-storage. Change the key or the shape in those two
 * files in the same commit.
 */

const STORAGE_KEY = "semper-admin-terms-accepted";

/**
 * Bump on any substantive revision to content/legal/terms.mdx or
 * content/legal/disclaimer.mdx, and to the summary text below. Use the ISO
 * date of the revision.
 */
const TERMS_VERSION = "2026-09-11";

function subscribe(callback: () => void): () => void {
  // The native storage event fires cross-tab only. handleAcknowledge
  // dispatches a synthetic event for the accepting tab.
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

/**
 * True when this browser holds an acknowledgment matching the current
 * terms version. A stored acknowledgment against an older version reads
 * as false, so the dialog returns after a revision.
 */
function getSnapshot(): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const parsed: unknown = JSON.parse(raw);
    return (
      typeof parsed === "object" &&
      parsed !== null &&
      (parsed as { version?: unknown }).version === TERMS_VERSION
    );
  } catch {
    // Storage blocked or holding malformed JSON. Show the dialog, which is
    // the safer failure mode for a legal notice.
    return false;
  }
}

function getServerSnapshot(): boolean {
  // Render nothing during the server pass. The client decides after
  // hydration, once localStorage is readable.
  return true;
}

export function TermsModal() {
  const acknowledged = React.useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );
  // Fallback for a browser refusing localStorage, private mode among the
  // causes. The click still clears the dialog for this page session. The
  // reader meets it again on a hard reload, which beats a button with no
  // effect trapping them on the page.
  const [clearedThisSession, setClearedThisSession] = React.useState(false);

  if (acknowledged || clearedThisSession) return null;

  const handleAcknowledge = () => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          version: TERMS_VERSION,
          acceptedAt: new Date().toISOString(),
        })
      );
      window.dispatchEvent(new StorageEvent("storage", { key: STORAGE_KEY }));
    } catch {
      // Nothing to persist. clearedThisSession below carries the dismissal.
    }
    setClearedThisSession(true);
  };

  return (
    <Dialog open>
      <DialogContent
        className="max-w-2xl max-h-[80vh] overflow-y-auto"
        showClose={false}
        onEscapeKeyDown={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
        onPointerDownOutside={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle>Disclaimer and Terms of Use</DialogTitle>
          <DialogDescription>
            Read the disclaimer and terms before using Semper Admin Portal.
            Acknowledge below to continue.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="disclaimer" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="disclaimer">Disclaimer</TabsTrigger>
            <TabsTrigger value="terms">Terms of Use</TabsTrigger>
          </TabsList>

          <TabsContent value="disclaimer" className="max-h-[50vh] overflow-y-auto space-y-4 py-4">
            <div className="space-y-3 text-sm">
              <div>
                <h3 className="font-semibold mb-2">Proof of Concept Status</h3>
                <p className="text-muted-foreground">
                  This Semper Admin Portal is a proof of concept and experimental system. It is not an official product of the United States Marine Corps, the Department of Defense, or any other U.S. government agency. This system is provided as-is for reference, training, and educational purposes only.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">No Official Endorsement</h3>
                <p className="text-muted-foreground">
                  Nothing on this site represents official USMC or DoD policy, guidance, or direction. This portal is an unofficial, private reference tool created by a subject-matter specialist. It is not endorsed by, affiliated with, or authorized by the Marine Corps, the Department of Defense, or any official command.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Verification Is Your Responsibility</h3>
                <p className="text-muted-foreground">
                  All policy summaries, procedures, and guidance on this site are drawn from official sources and are cited in full. You remain solely responsible for verifying the accuracy, completeness, and current applicability of any information before relying on it for decisions, submissions, or actions.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">No Liability</h3>
                <p className="text-muted-foreground">
                  You access and use this site at your own risk. The author, the USMC, the DoD, and the U.S. government assume no liability for any loss or damage arising from reliance on information from this site.
                </p>
              </div>

              <p className="text-xs text-muted-foreground italic">
                For the complete disclaimer, open the{" "}
                <Link
                  href="/legal/disclaimer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground"
                >
                  full disclaimer page
                </Link>{" "}
                in a new tab.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="terms" className="max-h-[50vh] overflow-y-auto space-y-4 py-4">
            <div className="space-y-3 text-sm">
              <div>
                <h3 className="font-semibold mb-2">Acceptable Use</h3>
                <p className="text-muted-foreground">
                  You access and use this site for lawful purposes only. Acceptable uses include reference, training, educational use, coaching, and sharing with fellow service members. Unacceptable uses include republishing without attribution, commercial use, or misrepresenting this as official guidance.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Your Responsibility to Verify</h3>
                <p className="text-muted-foreground">
                  Before taking action based on information from this site, you must confirm it against the cited official source document, check the source is current, and consult your chain of command or S-1 if unsure.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Content License</h3>
                <p className="text-muted-foreground">
                  Content is provided under a non-exclusive, non-transferable, revocable license for your personal, non-commercial, educational use. You are free to read, reference, and share content with attribution. You are not free to republish verbatim, sell access, or modify and present it as your own.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">No Warranty</h3>
                <p className="text-muted-foreground">
                  This site is provided as-is without warranty of any kind. The author does not warrant accuracy, completeness, availability, or correction of defects.
                </p>
              </div>

              <p className="text-xs text-muted-foreground italic">
                For the complete terms, open the{" "}
                <Link
                  href="/legal/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground"
                >
                  full terms page
                </Link>{" "}
                in a new tab.
              </p>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex flex-col gap-3 border-t pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            Acknowledging records the date and the terms version in this
            browser. Nothing is sent to a server.
          </p>
          <Button
            onClick={handleAcknowledge}
            className="shrink-0 bg-[var(--color-usmc-scarlet)] hover:bg-[var(--color-usmc-scarlet)]/90"
          >
            I Understand
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
