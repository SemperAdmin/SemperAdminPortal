import fs from "fs/promises";
import path from "path";
export const dynamic = "force-static";

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
