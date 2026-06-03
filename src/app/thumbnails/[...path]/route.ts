import { readFile } from "fs/promises";
import { join } from "path";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  try {
    const filePath = params.path.join("/");
    const absolutePath = join(process.cwd(), "public", "thumbnails", filePath);

    console.log("[thumbnails] Request:", request.nextUrl.pathname);
    console.log("[thumbnails] Params:", params.path);
    console.log("[thumbnails] Looking for:", absolutePath);

    // Security: prevent directory traversal
    if (!absolutePath.includes("thumbnails")) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const fileContent = await readFile(absolutePath);

    // Determine MIME type
    let mimeType = "image/jpeg";
    if (filePath.endsWith(".png")) {
      mimeType = "image/png";
    } else if (filePath.endsWith(".gif")) {
      mimeType = "image/gif";
    } else if (filePath.endsWith(".webp")) {
      mimeType = "image/webp";
    }

    return new NextResponse(fileContent, {
      headers: {
        "Content-Type": mimeType,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}
