// Cloud.gov build wrapper. Sets DEPLOY_TARGET=cloudgov for the full npm
// build lifecycle (prebuild content sync, next build, postbuild sitemap and
// pagefind), then stages deploy/Staticfile into out/. This replaces the
// manual env var step, which uses different syntax in PowerShell and cmd
// and silently falls back to the GitHub Pages base path when skipped.
import { spawnSync } from "node:child_process";
import { copyFileSync } from "node:fs";

const result = spawnSync("npm", ["run", "build"], {
  stdio: "inherit",
  env: { ...process.env, DEPLOY_TARGET: "cloudgov" },
  shell: process.platform === "win32",
});

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

copyFileSync("deploy/Staticfile", "out/Staticfile");
console.log("Cloud.gov build staged in out/. Deploy with cf push.");
