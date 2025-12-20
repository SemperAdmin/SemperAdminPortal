import { NextRequest } from "next/server";
import fs from "fs/promises";
import path from "path";

type CategoryKey = "announcements" | "general" | "ideas" | "qa" | "templates" | "fixes" | "training" | "policy" | "issues" | "success" | "best_practice" | "needs_clarification" | "needs_feedback";
type CommunityKey = "marines" | "administrators" | "leaders" | "commanders";

type Post = {
  id: string;
  title: string;
  body: string;
  category: CategoryKey;
  community: CommunityKey;
  votes: number;
  createdAt: number;
  author: string;
};

const allowedCategories: CategoryKey[] = [
  "announcements",
  "general",
  "ideas",
  "qa",
  "templates",
  "fixes",
  "training",
  "policy",
  "issues",
  "success",
  "best_practice",
  "needs_clarification",
  "needs_feedback",
];

const allowedCommunities: CommunityKey[] = ["marines", "administrators", "leaders", "commanders"];

const filePath = path.join(process.cwd(), "data", "community.json");

async function readPosts(): Promise<Post[]> {
  try {
    const buf = await fs.readFile(filePath);
    const data = JSON.parse(buf.toString());
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

async function writePosts(posts: Post[]) {
  const json = JSON.stringify(posts, null, 2);
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, json);
}

export async function GET() {
  const posts = await readPosts();
  return new Response(JSON.stringify({ posts }), { headers: { "content-type": "application/json" } });
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body) return new Response(JSON.stringify({ error: "invalid_json" }), { status: 400 });
  const title = String(body.title || "").trim();
  const text = String(body.body || "").trim();
  const category = String(body.category || "") as CategoryKey;
  const community = String(body.community || "") as CommunityKey;
  const author = String(body.author || "Anonymous");
  if (!title || !text) return new Response(JSON.stringify({ error: "missing_fields" }), { status: 400 });
  if (!allowedCategories.includes(category)) return new Response(JSON.stringify({ error: "invalid_category" }), { status: 400 });
  if (!allowedCommunities.includes(community)) return new Response(JSON.stringify({ error: "invalid_community" }), { status: 400 });
  const posts = await readPosts();
  const id = Math.random().toString(36).slice(2);
  const createdAt = Date.now();
  const post: Post = { id, title, body: text, category, community, votes: 0, createdAt, author };
  await writePosts([post, ...posts]);
  return new Response(JSON.stringify({ post }), { status: 201, headers: { "content-type": "application/json" } });
}

export async function PATCH(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body) return new Response(JSON.stringify({ error: "invalid_json" }), { status: 400 });
  const id = String(body.id || "");
  const delta = Number(body.delta || 0);
  if (!id) return new Response(JSON.stringify({ error: "missing_id" }), { status: 400 });
  const posts = await readPosts();
  const idx = posts.findIndex((p) => p.id === id);
  if (idx === -1) return new Response(JSON.stringify({ error: "not_found" }), { status: 404 });
  posts[idx] = { ...posts[idx], votes: posts[idx].votes + delta };
  await writePosts(posts);
  return new Response(JSON.stringify({ post: posts[idx] }), { headers: { "content-type": "application/json" } });
}
