# Runbook: Mirror a GitHub repo into web.git.mil GitLab

Mirror direction is one-way. GitHub stays the source of truth. GitLab holds a force-pushed copy, refreshed on a schedule. Use this for any repo you keep on GitHub and need backed onto the DoD network.

## Why a scheduled CI job, not a native mirror

The `web.git.mil` instance does not expose Pull mirroring. The Mirror direction control locks to Push, which sends GitLab outward and does the wrong thing. Pull mirroring needs Premium or Ultimate, and this instance does not offer it. So a scheduled GitLab CI job pulls GitHub and force-pushes into the same GitLab project.

Hard dependency: the GitLab runner must reach `github.com` outbound. The first scheduled run proves it. If the clone step times out, move the same logic to a Windows Task Scheduler job on a machine that reaches both networks.

## Placeholders

- `<GITHUB_URL>`: for example `https://github.com/SemperAdmin/<REPO>.git`
- `<GITLAB_HOST_PATH>`: for example `web.git.mil/semper_admin/<REPO>.git`

## One-time setup

### 1. Add the sync job to the GitHub repo

Commit this as `.gitlab-ci.yml` at the repo root on GitHub. It lives in GitHub so it survives each overwrite and flows down on every sync.

```yaml
sync-from-github:
  stage: .pre
  image: alpine/git:latest
  variables:
    GIT_STRATEGY: none
    GITHUB_REPO: "<GITHUB_URL>"
    GITLAB_HOST_PATH: "<GITLAB_HOST_PATH>"
  rules:
    - if: '$CI_PIPELINE_SOURCE == "schedule"'
  script:
    - git clone --bare "$GITHUB_REPO" mirror.git
    - cd mirror.git
    - git push --prune "https://sync:${GITLAB_SYNC_TOKEN}@${GITLAB_HOST_PATH}" "+refs/heads/*:refs/heads/*" "+refs/tags/*:refs/tags/*" -o ci.skip
```

Push it to GitHub:

```
git add .gitlab-ci.yml
git commit -m "Add GitHub to GitLab CI mirror"
git push origin main
```

### 2. Create a GitLab Project Access Token

GitLab project, Settings, Access Tokens, Add new token.

- Role: Maintainer. A Guest or Reporter token cannot push, even with the right scope. Maintainer pushes to a protected `main`.
- Scope: `write_repository` only. Least privilege.
- Expiration: note the date and rotate before it lapses.

Copy the value once.

### 3. Store the token in GitLab, not GitHub

GitLab project, Settings, CI/CD, Variables, Add variable.

- Key: `GITLAB_SYNC_TOKEN`. Letters and underscores only. Pasting the token into the Key field fails, since tokens contain periods.
- Value: the token string.
- Masked: on.
- Protected: on, only if `main` is a protected branch.

The job runs on the GitLab runner and reads this GitLab variable. A token placed in GitHub Actions variables does nothing here and exposes the secret in plaintext.

### 4. Confirm branch protection matches the variable

A Protected variable injects only into pipelines on a protected branch. Your schedule targets `main`. Check Settings, Repository, Protected branches. If `main` is not protected, either protect it or turn the variable Protected flag off. A mismatch hands the job an empty token and the push fails.

### 5. Seed GitLab once

This puts `.gitlab-ci.yml` into GitLab so the schedule has something to run, and proves your workstation reaches `web.git.mil`. Replace `FULL_TOKEN`.

```
git push "https://sync:FULL_TOKEN@<GITLAB_HOST_PATH>" +refs/heads/main:refs/heads/main
```

### 6. Create the schedule

GitLab project, Build, Pipeline schedules, New schedule. Schedules live under Build, not Settings.

- Interval pattern: Custom, `0 * * * *` for hourly. The instance worker runs every 10 minutes, so `3-59/10 * * * *` is the tightest allowed.
- Target branch: `main`.
- Variables: leave empty. The project variable already injects the token. Typing it here exposes it in plaintext.
- Activated: on.

Save, then use the run action on the schedule row to fire it now.

### 7. Verify

Build, Pipelines, open the run, open the `sync-from-github` job.

- Clone succeeds, push reports up to date or refs updated: the mirror is live.
- Clone fails on a network or DNS error: runner egress to GitHub is blocked. Switch to the Windows fallback below.

## Windows fallback if runner egress is blocked

Run the seed-push logic on a schedule from a machine that reaches both networks.

```
git clone --mirror <GITHUB_URL> repo.git
cd repo.git
git remote set-url --push origin "https://sync:FULL_TOKEN@<GITLAB_HOST_PATH>"
git fetch -p origin
git push --mirror "https://sync:FULL_TOKEN@<GITLAB_HOST_PATH>"
```

Wrap those in a `.bat` or `.ps1` and register a Windows Task Scheduler trigger, hourly.

## Rules to hold

- One direction only. Never commit directly to the GitLab copy. The next sync force-pushes GitHub over it and discards local GitLab changes.
- Rotate the token before expiry and after any exposure. Update the GitLab CI/CD variable with the new value.
- Keep the token out of chat, screenshots, and GitHub. It belongs in the GitLab CI/CD variable, masked.
