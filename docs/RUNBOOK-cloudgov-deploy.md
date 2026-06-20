# Runbook: Deploy a static Next.js export to Cloud.gov

For any Next.js app built with `output: "export"`. Cloud.gov serves the static files through the staticfile buildpack, the same role GitHub Pages plays. GitHub Pages and Cloud.gov both stay live.

## Quick Start (SemperAdminPortal)

**Automatic deployment is enabled.** Just push to `main` and GitHub Actions handles the rest.

```bash
# Make your changes
git add .
git commit -m "your message"
git push origin main
```

The `.github/workflows/deploy-cloudgov.yml` workflow automatically:
- Builds with `DEPLOY_TARGET=cloudgov`
- Copies the Staticfile
- Authenticates to Cloud.gov
- Runs `cf push`
- Deployment completes in ~5 minutes

**No manual `cf push` needed.** Just commit and push.

## Placeholders

- `<APP_NAME>`: the Cloud Foundry app name, for example `semper-admin-portal`
- `<ORG>`: your Cloud.gov org, for example `sandbox-usmc`
- `<SPACE>`: your space, for example `stephen.shorter`
- `<PROJECT_SLUG>`: the GitHub Pages path segment, for example `SemperAdminPortal`

## Prerequisites

### For Automatic Deployment (CI/CD)

- Cloud.gov account with org and space
- GitHub Secrets configured (one-time setup):
  - `CF_USERNAME` - Your Cloud.gov login email
  - `CF_PASSWORD` - Your Cloud.gov password
  - `CF_ORG` - Organization name (e.g., `sandbox-usmc`)
  - `CF_SPACE` - Space name (e.g., `stephen.shorter`)

To add secrets: GitHub repo → Settings → Secrets and variables → Actions → New repository secret

### For Manual Deployment (if needed)

- `cf` CLI v8 installed. Verify with `cf --version`.
- A Cloud.gov account with an org and a space, and the Space Developer role. Developer is required for `cf push`.
- The app builds locally with `npm run build`.

Sandbox caution: a sandbox space wipes every 90 days with a 5-day email warning. Use a non-sandbox org for a permanent host.

## One-time project files

### 1. Conditional base path

GitHub Pages serves under `/<PROJECT_SLUG>`. Cloud.gov serves at the host root. Make the base path switch on a build flag in `next.config.mjs`.

```js
const IS_CLOUD_GOV = process.env.DEPLOY_TARGET === "cloudgov";
const BASE_PATH = IS_CLOUD_GOV ? "" : "/<PROJECT_SLUG>";

const nextConfig = {
  output: "export",
  ...(BASE_PATH ? { basePath: BASE_PATH, assetPrefix: BASE_PATH } : {}),
  env: { NEXT_PUBLIC_BASE_PATH: BASE_PATH },
  trailingSlash: true,
  images: { unoptimized: true },
};
```

Default build keeps the Pages path. `DEPLOY_TARGET=cloudgov` drops it so assets resolve at root.

### 2. manifest.yml at repo root

Size `disk_quota` above the unpacked `out/` size. Measure first.

```
du -sh out
```

Set `disk_quota` to roughly three times that, with headroom for the droplet copy. The build that measured 583M ran on 2G.

```yaml
---
applications:
  - name: <APP_NAME>
    memory: 128M
    disk_quota: 2G
    instances: 1
    path: out
    buildpacks:
      - staticfile_buildpack
```

Memory stays low. Static serving uses almost none. Disk is the constraint, since the container holds the unpacked site.

### 3. deploy/Staticfile

A minimal file, copied into `out/` at deploy time.

```
# Staticfile for the staticfile buildpack.
# Export uses trailingSlash, so every route is a folder with index.html.
```

## Manual Trigger (Force Deployment)

If you need to redeploy the current main branch without changes:

1. Go to GitHub repo → Actions tab
2. Select "Deploy to Cloud.gov" workflow
3. Click "Run workflow" → "Run workflow"

The deployment will run immediately.

---

## Deploy Sequence (Manual, for Reference or Other Projects) (Windows PowerShell)

### 1. Log in, passcode visible

Get a fresh code at `https://login.fr.cloud.gov/passcode`, then pass it on the command line. This avoids the hidden prompt, where pasted input shows nothing and reused codes fail.

```
cf login -a api.fr.cloud.gov --sso-passcode FRESHCODE
```

A passcode works once and expires in about 5 minutes. Get a new one per attempt.

### 2. Target the org and space

```
cf target -o <ORG> -s <SPACE>
```

### 3. Build the Cloud.gov target and stage the Staticfile

```
cd <REPO_ROOT>
$env:DEPLOY_TARGET="cloudgov"
npm run build
Copy-Item deploy\Staticfile out\Staticfile -Force
```

Set the env var in the same shell session before `npm run build`, or the build keeps the base path and assets 404.

### 4. Push

```
cf push
```

It reads `manifest.yml`, sends `out/` through the staticfile buildpack, and assigns `<APP_NAME>.app.cloud.gov` by default.

### 5. Read the route and reset the env

```
cf app <APP_NAME>
Remove-Item Env:\DEPLOY_TARGET
```

The `routes` line shows the live URL.

## Failure points and fixes

- `No space left on device` during droplet copy, instance crashes: `disk_quota` is below the unpacked site size. Raise it in the manifest and `cf push` again. No rebuild needed.
- Route in use on push: rerun `cf push --random-route`, or add a `routes` block to the manifest.
- Assets 404 after the page loads: the build kept the base path. Confirm `$env:DEPLOY_TARGET` read `cloudgov` in the same session before `npm run build`.
- Invalid passcode: the code was reused, expired, or submitted empty. Get a fresh one and use `--sso-passcode`.

## Verify

Open the route, click into a deep page like `/<some-section>/`, and confirm styling and search load. Static export with `trailingSlash` serves deep routes as `folder/index.html`, so direct links work.

---

## CI/CD Workflow (`.github/workflows/deploy-cloudgov.yml`)

The automated deployment workflow:
- **Triggers:** Every push to `main` or manual dispatch
- **Build:** Sets `DEPLOY_TARGET=cloudgov` for root-level asset resolution
- **Authenticate:** Uses GitHub Secrets for Cloud.gov credentials
- **Deploy:** Runs `cf push` with no human interaction
- **Verify:** Reports app status after deployment

View logs: GitHub repo → Actions → "Deploy to Cloud.gov" → Latest run

### When to Use Manual Deployment

Manual deployment is rarely needed but useful for:
- Deploying to a different org/space
- Testing on a fresh Cloud.gov account
- Troubleshooting deployment issues
- Deploying other projects without automated workflows

### Workflow Debugging

If deployment fails:
1. Check GitHub Actions logs (repo → Actions tab)
2. Look for cf CLI errors or authentication issues
3. Verify Cloud.gov secrets are set correctly
4. Check disk quota hasn't been exceeded (`du -sh out/`)
5. Confirm app state isn't in a stuck state (`cf app semper-admin-portal`)
