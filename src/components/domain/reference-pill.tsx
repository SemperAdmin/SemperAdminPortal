import { FileText, ExternalLink } from "lucide-react";
import { Pill } from "@/components/ui/pill";
import { resolveReference } from "@/lib/references/resolve";
import { resolveReference as resolveLegacyReferenceUrl } from "@/lib/inspections/resolve-reference";

export interface ReferencePillProps {
  reference: string;
}

/**
 * Renders an inspection reference. Wraps the pill in an anchor when a URL
 * resolves, otherwise renders a plain pill.
 *
 * Resolution order. Phase 2 layers the new citations registry over the
 * legacy 68k-alias manifest.
 *   1. Citations registry hit with externalUrl. The author-curated source.
 *   2. Legacy reference-links manifest URL. Covers the 99 percent of
 *      inspection references not yet imported into the registry.
 *   3. No URL. Plain pill.
 *
 * Phase 4 lands the bulk import. As citation MDX entries cover more
 * documents, step 1 grows and step 2 shrinks. Phase 5 deprecates the manifest.
 */
export function ReferencePill({ reference }: ReferencePillProps) {
  const entry = resolveReference(reference);
  const url = entry?.externalUrl ?? resolveLegacyReferenceUrl(reference);
  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block underline-offset-2 hover:underline"
        title={entry?.title}
      >
        <Pill variant="outline" size="xs">
          <FileText className="size-2.5" aria-hidden="true" />
          {reference}
          <ExternalLink className="size-2.5 opacity-70" aria-hidden="true" />
        </Pill>
      </a>
    );
  }
  return (
    <Pill variant="outline" size="xs">
      <FileText className="size-2.5" aria-hidden="true" />
      {reference}
    </Pill>
  );
}
