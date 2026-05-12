import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getVideos, findBySlug } from "@/lib/content/loader";
import { VideoEmbed } from "@/components/domain/video-embed";
import { LastVerified } from "@/components/domain/last-verified";
import { SourceCitation } from "@/components/domain/source-citation";
import { RoleChip } from "@/components/domain/role-chip";
import { MdxContent } from "@/components/domain/mdx-content";
import { PageHeader } from "@/components/domain/page-header";
import { MetaRow } from "@/components/domain/meta-row";
import { TableOfContents } from "@/components/domain/toc";
import { Pill } from "@/components/ui/pill";

export async function generateStaticParams() {
  return getVideos().map((v) => ({ slug: v.frontmatter.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = findBySlug(getVideos(), slug);
  if (!entry) return { title: "Video" };
  return {
    title: entry.frontmatter.title,
    description: entry.frontmatter.summary,
  };
}

function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}m ${s.toString().padStart(2, "0")}s`;
}

export default async function VideoDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = findBySlug(getVideos(), slug);
  if (!entry) notFound();
  const fm = entry.frontmatter;

  return (
    <div className="flex gap-10 xl:gap-14">
      <article className="min-w-0 max-w-3xl flex-1">
        <PageHeader
          compact
          tags={
            <>
              <Pill variant="info">Video</Pill>
              {fm.roles.map((r) => (
                <RoleChip key={r} role={r} size="sm" />
              ))}
              <LastVerified date={fm.lastVerified} />
            </>
          }
          title={fm.title}
          summary={fm.summary}
        >
          <MetaRow
            items={[
              { label: "Duration", value: formatDuration(fm.durationSeconds) },
              { label: "Chapters", value: fm.chapters.length },
            ]}
          />
        </PageHeader>

        <div className="mb-6">
          <VideoEmbed
            title={fm.title}
            description={fm.summary}
            durationSeconds={fm.durationSeconds}
            videoUrl={fm.videoUrl}
            posterUrl={fm.posterUrl}
            chapters={fm.chapters}
          />
        </div>

        <MdxContent source={entry.body} />

        <div className="mt-10 border-t border-[var(--color-border)] pt-5">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--color-subtle-foreground)]">
            Source
          </p>
          <SourceCitation
            title={fm.source.title}
            publisher={fm.source.publisher}
            url={fm.source.url}
          />
        </div>
      </article>

      <TableOfContents containerSelector="article" minHeadings={3} />
    </div>
  );
}
