import { NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "app", "knowledge", "KnowladgeApp", "index.html");
    const html = await fs.readFile(filePath, { encoding: "utf-8" });
    return new NextResponse(html, { headers: { "content-type": "text/html; charset=utf-8" } });
  } catch {
    return new NextResponse("Not Found", { status: 404 });
  }
}

