# Code.gov Auto-Sync Setup Guide

This document explains how to set up automatic synchronization of your project metadata with [code.gov](https://code.gov), the federal government's open-source project registry.

## Overview

code.gov uses a **pull-based harvesting model**. You host a `code.json` metadata file at your project's root, and code.gov's harvester periodically fetches it to keep your project information current.

This setup automates that process: every time you push to `main` or create a release, a GitHub Actions workflow regenerates `code.json` and commits it back to the repository.

## How It Works

1. **GitHub Actions Trigger**: Workflow runs on every push to `main` and on release creation
2. **Generate**: `scripts/generate-code-json.mjs` reads `package.json` and git metadata
3. **Commit**: If `code.json` changed, workflow auto-commits and pushes the update
4. **Harvest**: code.gov's harvester periodically fetches your updated `code.json`

## Files in This Setup

- `.github/workflows/code-gov-sync.yml` - GitHub Actions workflow
- `scripts/generate-code-json.mjs` - Node.js script that generates `code.json`
- `code.json` - Generated metadata file (auto-updated, committed to repo)
- `package.json` - Added `code:json` npm script for manual runs

## For This Project (SemperAdminPortal)

The workflow is already configured and active. To verify:

```bash
# Generate code.json manually
npm run code:json

# Check output
cat code.json

# Run the full workflow locally (simulate GitHub Actions)
node scripts/generate-code-json.mjs
```

Current metadata is populated with:
- **Organization**: SemperAdmin
- **Description**: Authoritative, sourced USMC administrative reference portal
- **Repository**: https://github.com/semperadmin/semperadminportal
- **Live Site**: https://semperadmin.github.io/SemperAdminPortal/
- **Contact**: mcesgrosters@gmail.com

Auto-updated on each run:
- `lastModified` - from latest git commit date
- `metadataLastUpdated` - current date
- `version` - from package.json

## Setting Up Code.gov Auto-Sync for Other Apps

### Prerequisites

- Node.js 22+ (recommended, matches your GitHub Actions runner)
- Git repository with GitHub Pages or other domain hosting
- `package.json` in project root

### Step 1: Create the Generation Script

Create `scripts/generate-code-json.mjs` in your project:

```javascript
import fs from 'fs';
import { execSync } from 'child_process';

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

// Get last commit date
const lastModified = execSync('git log -1 --format=%cI', {
  encoding: 'utf8',
}).trim().split('T')[0];

// Get current date
const now = new Date().toISOString().split('T')[0];

const codeJson = {
  name: pkg.name,
  organization: 'YourOrganization',  // ← CUSTOMIZE
  description: 'Your project description',  // ← CUSTOMIZE
  version: pkg.version,
  status: 'Active Development',
  permissions: {
    usageType: 'openSource',  // or 'governmentWIP' for in-development
    licenses: [{
      name: 'MIT',  // ← UPDATE IF DIFFERENT
      URL: 'https://github.com/youruser/yourrepo/blob/main/LICENSE'
    }],
  },
  homepageURL: 'https://your-live-site.com',  // ← UPDATE
  downloadURL: 'https://github.com/youruser/yourrepo',
  repositoryURL: 'https://github.com/youruser/yourrepo',
  repositoryURLType: 'git',
  bugsURL: 'https://github.com/youruser/yourrepo/issues',
  screenshotURLs: [],
  languages: ['TypeScript', 'React'],  // ← UPDATE
  contact: {
    name: 'Your Name',
    email: 'your@email.com',
    URL: 'https://github.com/youruser/yourrepo',
  },
  date: {
    metadataLastUpdated: now,
    lastModified: lastModified,
    released: '2024-01-01',  // ← SET TO ACTUAL RELEASE DATE
  },
  laborHours: 0,
  tags: [
    'your-tag-1',
    'your-tag-2',
    'open-source',
  ],
  disclaimers: 'Optional disclaimer text here.',
  reusability: 'Yes',
  targetOperatingSystems: [
    'Linux',
    'macOS',
    'Windows',
    'Web Browser',  // if applicable
  ],
  developmentStatus: 'Active',
};

fs.writeFileSync('./code.json', JSON.stringify(codeJson, null, 2) + '\n');
console.log('✓ code.json generated successfully');
```

### Step 2: Create the GitHub Actions Workflow

Create `.github/workflows/code-gov-sync.yml`:

```yaml
name: Sync code.json with code.gov

on:
  push:
    branches: [main]
  release:
    types: [published, created]
  workflow_dispatch:

permissions:
  contents: write

jobs:
  sync:
    name: Generate and Commit code.json
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v6
        with:
          fetch-depth: 0

      - name: Setup Node
        uses: actions/setup-node@v6
        with:
          node-version: 22

      - name: Generate code.json
        run: node scripts/generate-code-json.mjs

      - name: Check if code.json changed
        id: check
        run: |
          if git diff --quiet code.json; then
            echo "changed=false" >> $GITHUB_OUTPUT
          else
            echo "changed=true" >> $GITHUB_OUTPUT
          fi

      - name: Commit and push code.json
        if: steps.check.outputs.changed == 'true'
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
          git add code.json
          git commit -m "chore: update code.json for code.gov sync"
          git push
```

### Step 3: Add npm Script

In `package.json`, add to the `scripts` section:

```json
"scripts": {
  ...
  "code:json": "node scripts/generate-code-json.mjs"
}
```

### Step 4: Test Locally

```bash
# Generate code.json
npm run code:json

# Verify the output
cat code.json

# Check git status
git status
```

The generated file should contain valid JSON with all required fields.

### Step 5: Commit and Push

```bash
git add scripts/generate-code-json.mjs .github/workflows/code-gov-sync.yml package.json code.json
git commit -m "feat: add code.gov auto-sync"
git push
```

The workflow will trigger automatically on the next push to `main`.

### Step 6: Register with code.gov

Once your `code.json` is live and committed to the repository:

1. Go to [code.gov](https://code.gov)
2. Look for "Agency" or "Submit Code" link
3. Provide your `code.json` URL:
   - **GitHub Pages**: `https://youruser.github.io/yourrepo/code.json`
   - **Custom domain**: `https://your-domain.com/code.json`
4. code.gov will verify the URL and begin periodic harvesting

## Customization Reference

| Metadata Field | Script Location | Example | Notes |
|---|---|---|---|
| `name` | script top | `my-awesome-app` | Auto-read from `package.json` |
| `organization` | script top | `YourOrg` | Required; identifies owner |
| `description` | script top | One or two sentences | Keep concise |
| `homepageURL` | script top | `https://live-site.com` | Where users go |
| `repositoryURL` | script top | GitHub or GitLab URL | Required |
| `languages` | script top | `['TypeScript', 'React']` | Your tech stack |
| `contact.email` | script top | Your email | code.gov uses for updates |
| `contact.name` | script top | Your name | Contact person |
| `released` | script top | `2024-03-15` | Initial release date |
| `tags` | script top | Searchable keywords | Help discoverability |
| `usageType` | script top | `openSource` or `governmentWIP` | License type |
| `targetOperatingSystems` | script top | Platforms your app runs on | `Web Browser` if SPA |
| `licenses[].name` | script top | `MIT`, `Apache-2.0`, etc. | Must match your LICENSE |
| `licenses[].URL` | script top | Link to LICENSE file | For verification |
| `lastModified` | Auto-generated | YYYY-MM-DD | From latest git commit |
| `metadataLastUpdated` | Auto-generated | YYYY-MM-DD | Current date when run |
| `version` | Auto-generated | From `package.json` | No manual change needed |

## Troubleshooting

### Workflow Not Running

1. Check `.github/workflows/code-gov-sync.yml` is in the repo
2. Verify it's on the `main` branch
3. Check GitHub Actions is enabled for your repo (Settings → Actions)
4. Look at the "Actions" tab to see workflow history

### code.json Not Updating

1. Verify workflow ran successfully (check Actions tab for logs)
2. Confirm you're pushing to `main` (not a feature branch)
3. Check git has commits (`git log` should show recent commits)
4. Run `npm run code:json` locally to verify script works

### code.gov Not Harvesting

1. Verify your `code.json` is publicly accessible
2. Test the URL in your browser: `https://your-domain.com/code.json`
3. Validate JSON format: use [JSONLint](https://jsonlint.com/)
4. Wait 24-48 hours for code.gov's harvest cycle
5. Contact code.gov support: code@gsa.gov

### Invalid JSON Generated

1. Check for special characters in your description or tags
2. Ensure email addresses are valid format
3. Verify URLs are complete and valid
4. Test locally: `npm run code:json && cat code.json | node -e "console.log(JSON.parse(require('fs').readFileSync(0, 'utf8')))"`

## Code.gov Metadata Schema

This setup uses **Metadata Schema 2.0.0**. Full specification at:
- https://code.gov/about/compliance/inventory-code

Required fields (enforced by schema):
- `name`
- `description`
- `repositoryURL`
- `permissions.usageType`
- `contact.email`
- `date.lastModified`
- `languages`

Optional but recommended:
- `downloadURL` (where users download/view)
- `homepageURL` (live site)
- `tags` (search keywords)
- `disclaimers` (if applicable)
- `relatedCode` (links to upstream or dependent projects)

## Resources

- **code.gov**: https://code.gov
- **Schema Spec**: https://code.gov/about/compliance/inventory-code
- **GitHub Repo**: https://github.com/GSA/code-gov
- **Harvester**: https://github.com/GSA/code-gov-harvester
- **Support**: code@gsa.gov

## Related Reading

- [CLAUDE.md](../CLAUDE.md) - Project instructions and working guidelines
- [GSA Code Inventory Best Practices](https://github.com/GSA/code-gov/wiki/Agency-Compliance)
