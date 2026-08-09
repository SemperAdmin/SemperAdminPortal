#!/usr/bin/env node

const fs = require("fs/promises");
const path = require("path");

const projectRoot = path.join(__dirname, "..");

// Slugs written by the previous run. Pruning is scoped to this list so the
// generator never removes a page it did not create. Pages outside the catalog,
// such as hand-authored entries pending a decision, are left alone.
const MANIFEST_PATH = path.join(
  projectRoot,
  "src",
  "generated",
  "videos-manifest.json"
);

async function readManifest() {
  try {
    const raw = await fs.readFile(MANIFEST_PATH, "utf-8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function generateVideos() {
  const videoDataPath = path.join(projectRoot, "data", "videos-marinenet.json");
  const outputDir = path.join(projectRoot, "content", "videos");

  try {
    const rawData = await fs.readFile(videoDataPath, "utf-8");
    const videos = JSON.parse(rawData);

    console.log(`Generating MDX files for ${videos.length} videos...`);

    await fs.mkdir(outputDir, { recursive: true });

    let created = 0;
    let skipped = 0;

    const escapeYaml = (str) => {
      return str.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
    };

    for (const video of videos) {
      if (!video.slug || !video.title) {
        console.warn(`Skipping video: ${video.slug}`);
        skipped++;
        continue;
      }

      let summary = (video.summary || "").trim();
      if (summary.length < 10) {
        summary = `Training on ${video.title}`;
      }
      if (summary.length > 160) {
        summary = summary.substring(0, 157) + "...";
      }

      const source = video.source || {};

      const yamlLines = [
        `title: "${escapeYaml(video.title)}"`,
        `slug: "${video.slug}"`,
        `summary: "${escapeYaml(summary)}"`,
        `roles: [${(video.roles || ["leader"]).map((r) => `"${r}"`).join(", ")}]`,
        `durationSeconds: ${video.durationSeconds || 0}`,
        `videoUrl: "${escapeYaml(video.videoUrl)}"`,
      ];

      if (video.mceleUrl) {
        yamlLines.push(`mceleUrl: "${video.mceleUrl}"`);
      }

      yamlLines.push(
        "source:",
        `  title: "${escapeYaml(source.title || "MCeLE Training")}"`,
        '  publisher: "MCeLE"'
      );

      if (source.url) {
        yamlLines.push(`  url: "${escapeYaml(source.url)}"`);
      }

      yamlLines.push(`lastVerified: "${video.lastVerified || "2026-06-02"}"`);

      const yaml = yamlLines.join("\n");

      const mdxContent =
        `---\n${yaml}\n---\n\n` +
        `## Overview\n\n` +
        `Watch this training video to learn about ${video.title.toLowerCase()}.\n\n` +
        `## View on MCeLE\n\n` +
        `Access this training on the MCeLE platform (formerly MarineNet):\n\n` +
        `- **Video Portal:** [${video.title}](${video.videoUrl})\n` +
        (video.mceleUrl ? `- **Direct Link:** [${video.title}](${video.mceleUrl})\n` : "") +
        `\n## More resources\n\n` +
        `Explore related training and reference materials in Semper Admin Portal.\n`;

      const filePath = path.join(outputDir, video.slug + ".mdx");
      await fs.writeFile(filePath, mdxContent, "utf-8");
      created++;
    }

    // Drop pages whose slug left the catalog. Scoped to the previous manifest.
    const previous = await readManifest();
    const current = new Set(videos.map((v) => v.slug).filter(Boolean));
    let pruned = 0;
    const stranded = [];
    for (const slug of previous) {
      if (current.has(slug)) continue;
      try {
        await fs.unlink(path.join(outputDir, slug + ".mdx"));
        console.log(`  pruned ${slug}.mdx`);
        pruned++;
      } catch (err) {
        if (err.code === "ENOENT") continue;
        // A locked or read-only checkout should not abort the whole sync.
        // Name the file and let the run finish.
        console.warn(
          `  ⚠ could not remove ${slug}.mdx (${err.code}). Delete it by hand.`
        );
        stranded.push(slug);
      }
    }
    await fs.mkdir(path.dirname(MANIFEST_PATH), { recursive: true });
    await fs.writeFile(
      MANIFEST_PATH,
      JSON.stringify([...new Set([...current, ...stranded])].sort(), null, 2) + "\n",
      "utf-8"
    );

    console.log(`✓ Generated ${created} video MDX files`);
    if (pruned > 0) {
      console.log(`✓ Pruned ${pruned} pages dropped from the catalog`);
    }
    if (skipped > 0) {
      console.log(`⚠ Skipped ${skipped} videos`);
    }
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
}

generateVideos();
