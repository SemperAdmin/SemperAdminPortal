import { NextRequest, NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";

function contentType(filePath: string): string {
  const ext = path.extname(filePath).toLowerCase();
  switch (ext) {
    case ".html":
      return "text/html; charset=utf-8";
    case ".css":
      return "text/css; charset=utf-8";
    case ".js":
      return "application/javascript; charset=utf-8";
    case ".json":
      return "application/json; charset=utf-8";
    case ".svg":
      return "image/svg+xml";
    case ".png":
      return "image/png";
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".ico":
      return "image/x-icon";
    default:
      return "application/octet-stream";
  }
}

export async function GET(req: NextRequest, { params }: { params: Promise<{ asset: string[] }> }) {
  const p = await params;
  const rel = p.asset.join("/");
  const filePath = path.join(process.cwd(), "app", "knowledge", "KnowladgeApp", rel);
  try {
    const data = await fs.readFile(filePath);
    return new NextResponse(data, { headers: { "content-type": contentType(filePath) } });
  } catch {
    return new NextResponse("Not Found", { status: 404 });
  }
}
