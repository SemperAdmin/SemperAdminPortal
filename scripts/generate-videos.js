#!/usr/bin/env node

const fs = require("fs/promises");
const path = require("path");

const projectRoot = path.join(__dirname, "..");

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

      yamlLines.push(`lastVerified: "2026-06-02"`);

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

    console.log(`✓ Generated ${created} video MDX files`);
    if (skipped > 0) {
      console.log(`⚠ Skipped ${skipped} videos`);
    }
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
}

generateVideos();
