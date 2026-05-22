#!/usr/bin/env node
// Local static server that mirrors the GitHub Pages base path.
// Serves the contents of `out/` at http://localhost:4173/SemperAdminPortal/
// Uses only Node built-ins, no extra deps.
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..", "out");
const BASE = "/SemperAdminPortal";
const PORT = Number(process.env.PORT) || 4173;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".webmanifest": "application/manifest+json",
};

async function tryRead(filePath) {
  // Direct readFile sidesteps the TOCTOU window between stat() and readFile()
  // that CodeQL flags. EISDIR means the path resolved to a directory, which
  // we handle by falling through to index.html. ENOENT and EISDIR are the
  // only expected error codes here. Anything else propagates.
  try {
    return await readFile(filePath);
  } catch (err) {
    if (err.code === "ENOENT") return null;
    if (err.code !== "EISDIR") throw err;
  }
  try {
    return await readFile(path.join(filePath, "index.html"));
  } catch (err) {
    if (err.code === "ENOENT" || err.code === "EISDIR") return null;
    throw err;
  }
}

const server = createServer(async (req, res) => {
  let url = decodeURI(req.url ?? "/");
  url = url.split("?")[0].split("#")[0];

  // Redirect bare root to the base path
  if (url === "/" || url === "") {
    res.writeHead(302, { Location: BASE + "/" });
    res.end();
    return;
  }

  // Strip the base path for filesystem mapping
  let rel;
  if (url.startsWith(BASE + "/")) rel = url.slice(BASE.length + 1);
  else if (url === BASE) {
    res.writeHead(302, { Location: BASE + "/" });
    res.end();
    return;
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end(`Not found. Try ${BASE}/`);
    return;
  }
  if (rel === "" || rel.endsWith("/")) rel += "index.html";

  // Block path traversal
  const filePath = path.join(ROOT, rel);
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403, { "Content-Type": "text/plain" });
    res.end("Forbidden");
    return;
  }

  let body = await tryRead(filePath);
  // Try .html extension fallback for clean URLs
  if (!body && !path.extname(filePath)) {
    body = await tryRead(filePath + ".html");
  }
  // 404 page fallback
  if (!body) {
    body = await tryRead(path.join(ROOT, "404.html"));
    if (body) {
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      res.end(body);
      return;
    }
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not found");
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const type = MIME[ext] ?? "application/octet-stream";
  res.writeHead(200, { "Content-Type": type, "Cache-Control": "no-store" });
  res.end(body);
});

server.listen(PORT, () => {
  const url = `http://localhost:${PORT}${BASE}/`;
  console.log("=".repeat(60));
  console.log(" Semper Admin Portal - Production preview");
  console.log("=".repeat(60));
  console.log(` Serving: ${ROOT}`);
  console.log(` URL    : ${url}`);
  console.log(" Press Ctrl+C to stop.");
});
