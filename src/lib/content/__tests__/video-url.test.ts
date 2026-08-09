import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { describe, expect, it } from "vitest";
import { videoSchema } from "@/lib/content/schemas";

const VIDEOS_DIR = path.join(process.cwd(), "content", "videos");

function loadFrontmatter() {
  return fs
    .readdirSync(VIDEOS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(VIDEOS_DIR, file), "utf8");
      const parsed = matter(raw);
      return {
        file,
        data: {
          ...parsed.data,
          slug:
            (parsed.data as { slug?: string }).slug ??
            file.replace(/\.mdx$/, ""),
        },
      };
    });
}

describe("video frontmatter", () => {
  const entries = loadFrontmatter();

  it("finds video pages to check", () => {
    expect(entries.length).toBeGreaterThan(300);
  });

  it("passes videoSchema on every page", () => {
    const failures = entries
      .map(({ file, data }) => {
        const result = videoSchema.safeParse(data);
        return result.success
          ? null
          : `${file}: ${result.error.issues.map((i) => i.message).join(", ")}`;
      })
      .filter(Boolean);
    expect(failures).toEqual([]);
  });

  it("rejects a placeholder host", () => {
    const sample = entries.find(
      (entry) => videoSchema.safeParse(entry.data).success
    );
    expect(sample).toBeDefined();
    const result = videoSchema.safeParse({
      ...sample!.data,
      slug: "a-brand-new-page-not-in-quarantine",
      videoUrl: "https://example.com/placeholder.mp4",
      mceleUrl: undefined,
    });
    expect(result.success).toBe(false);
  });

  it("rejects a value that is not a URL", () => {
    const sample = entries.find(
      (entry) => videoSchema.safeParse(entry.data).success
    );
    const result = videoSchema.safeParse({
      ...sample!.data,
      slug: "another-brand-new-page",
      videoUrl: "Video Outdated",
      mceleUrl: undefined,
    });
    expect(result.success).toBe(false);
  });

  it("rejects the dead marinenet.marines.mil host", () => {
    const sample = entries.find(
      (entry) => videoSchema.safeParse(entry.data).success
    );
    const result = videoSchema.safeParse({
      ...sample!.data,
      slug: "a-third-brand-new-page",
      videoUrl: "https://marinenet.marines.mil/manpower/some-slug",
      mceleUrl: undefined,
    });
    expect(result.success).toBe(false);
  });

  it("accepts the canonical MCeLE media URL", () => {
    const sample = entries.find(
      (entry) => videoSchema.safeParse(entry.data).success
    );
    const url =
      "https://portal.mcele.usmc.mil/content/mcele-portal/en/media/detail.html?Id=957526B3CA84";
    const result = videoSchema.safeParse({
      ...sample!.data,
      slug: "a-fourth-brand-new-page",
      videoUrl: url,
      mceleUrl: url,
    });
    expect(result.success).toBe(true);
  });
});
