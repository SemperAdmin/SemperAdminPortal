/**
 * MCOLink - A shared component for linking to Marine Corps Order documents
 * Used across various content pages to provide consistent styling and behavior
 */

interface MCOLinkProps {
  mco: string;
  url: string;
}

export function MCOLink({ mco, url }: MCOLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-[var(--sa-navy)] underline decoration-1 underline-offset-2 hover:text-[var(--sa-gold)] dark:text-[var(--sa-cream)] dark:hover:text-[var(--sa-gold)]"
    >
      {mco}
    </a>
  );
}

/**
 * KeyPoint - Interface for key points displayed in content pages
 * Supports optional URL linking for MCO references
 */
export interface KeyPoint {
  label: string;
  value: string;
  url?: string;
}

/**
 * KeyPointLink - Interface for multiple links within a single key point
 * Used when a key point has multiple MCO references
 */
export interface KeyPointLink {
  text: string;
  url: string;
}

/**
 * KeyPointWithLinks - Interface for key points with multiple links
 * Used in pages like FailureToMeetStandardsContent
 */
export interface KeyPointWithLinks {
  label: string;
  value: string;
  links?: KeyPointLink[];
}
