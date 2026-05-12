import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Mission, sources, update cadence, contributors.",
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl">
      <h1 className="text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
        About Semper Admin
      </h1>
      <p className="mt-2 text-[var(--color-muted-foreground)]">
        An educational reference for the United States Marine Corps administrative community.
      </p>

      <Alert variant="info" className="mt-6">
        <Info />
        <AlertTitle>Not an official publication</AlertTitle>
        <AlertDescription>
          This portal organizes and clarifies public Marine Corps administrative material. Always verify with the source order before action.
        </AlertDescription>
      </Alert>

      <h2 className="mt-8 text-2xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
        Mission
      </h2>
      <p className="mt-2">
        Cut the time between a Marine asking an admin question and getting an answer with a sourced citation. Tag every page by role. Every fact carries a verified date and a source.
      </p>

      <h2 className="mt-8 text-2xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
        Update cadence
      </h2>
      <Card className="mt-3">
        <CardContent className="space-y-2 p-6 text-sm">
          <p>
            <strong>Verified</strong> entries are within 12 months of last review.
          </p>
          <p>
            <strong>Aging</strong> entries are 12 to 24 months old. Review and re-publish soon.
          </p>
          <p>
            <strong>Stale</strong> entries are over 24 months old. Verify before action.
          </p>
        </CardContent>
      </Card>

      <h2 className="mt-8 text-2xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
        Sources
      </h2>
      <ul className="mt-2 list-disc pl-5 text-sm">
        <li>HQMC published MARADMINs, ALMARs, MCOs, NAVMC instructions.</li>
        <li>Department of Defense instructions where they govern Marine Corps process.</li>
        <li>Defense Travel Management Office for pay and entitlement reference data.</li>
        <li>Verified subject-matter expert review for plain-language clarifications.</li>
      </ul>

      <h2 className="mt-8 text-2xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
        Contributing
      </h2>
      <p className="mt-2 text-sm">
        See the CONTRIBUTING guide in the repository for the role-tagged content workflow, MDX schema, and the verification checklist before merge.
      </p>
    </article>
  );
}
