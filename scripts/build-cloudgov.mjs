// Cloud.gov build wrapper. Sets DEPLOY_TARGET=cloudgov for the full npm build
// lifecycle (prebuild content sync, next build, postbuild sitemap and pagefind),
// then assembles out/ as the cf deploy bundle.
//
// Layout produced in out/:
//   out/public/      the exported site (served content; Staticfile root: public)
//   out/nginx/       nginx config dir (conf/includes/redirect.conf)
//   out/Staticfile   buildpack config (root: public, location_include)
//
// public/ is required because the staticfile buildpack honors location_include
// only with an alternative root. The include sets absolute_redirect off so the
// trailing-slash directory redirect stays relative and preserves https behind
// cloud.gov's TLS-terminating router. See cloudfoundry/staticfile-buildpack #137.
import { spawnSync } from "node:child_process";
import { cpSync, mkdirSync, readdirSync, renameSync, rmSync } from "node:fs";
import path from "node:path";

const result = spawnSync("npm", ["run", "build"], {
  stdio: "inherit",
  env: { ...process.env, DEPLOY_TARGET: "cloudgov" },
  shell: process.platform === "win32",
});

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

const OUT = "out";
const PUBLIC = path.join(OUT, "public");
// Entries belonging at the app root, not under public/.
const RESERVED = new Set(["public", "nginx", "Staticfile"]);

// Move the exported site into out/public. The app root then holds the nginx
// config dir location_include needs.
rmSync(PUBLIC, { recursive: true, force: true });
mkdirSync(PUBLIC, { recursive: true });
for (const entry of readdirSync(OUT)) {
  if (RESERVED.has(entry)) continue;
  renameSync(path.join(OUT, entry), path.join(PUBLIC, entry));
}

// Stage nginx config and Staticfile at the app root.
rmSync(path.join(OUT, "nginx"), { recursive: true, force: true });
cpSync("deploy/nginx", path.join(OUT, "nginx"), { recursive: true });
cpSync("deploy/Staticfile", path.join(OUT, "Staticfile"));

console.log(
  "Cloud.gov build staged in out/ (site under out/public, nginx config at out/nginx). Deploy with cf push."
);
