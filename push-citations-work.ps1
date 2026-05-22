# Push citations work to GitHub
# Run from PowerShell in D:\Coding\SemperAdminPortal

Set-Location D:\Coding\SemperAdminPortal

Write-Host "=== Step 1: Clear any stale index lock ==="
if (Test-Path .git\index.lock) {
    Remove-Item -Force .git\index.lock
    Write-Host "Lock removed"
} else {
    Write-Host "No lock file present"
}

Write-Host ""
Write-Host "=== Step 2: Restore 14 infrastructure files that were staged for deletion ==="
git reset HEAD -- `
    src/lib/directives/ssic.ts `
    src/lib/directives/units.ts `
    src/lib/inspections/resolve-reference.ts `
    src/lib/leader-categories.ts `
    src/lib/marines-categories.ts `
    src/lib/navigation.ts `
    src/lib/references/resolve.ts `
    src/lib/role-trees.ts `
    src/lib/roles.ts `
    src/lib/security/audit-log.ts `
    src/lib/security/cac-auth.ts `
    src/lib/store/role-store.ts `
    src/lib/utils.ts `
    tsconfig.json

Write-Host ""
Write-Host "=== Step 3: Verify no infrastructure files still staged for deletion ==="
$stagedDeletes = git status -s | Select-String "^D " | Where-Object { $_ -match "^D\s+src/lib|^D\s+tsconfig" }
if ($stagedDeletes) {
    Write-Host "ABORT: still have staged infrastructure deletions:" -ForegroundColor Red
    $stagedDeletes
    exit 1
}
Write-Host "Clean. No infrastructure files staged for deletion."

Write-Host ""
Write-Host "=== Step 4: Stage all content and citation changes ==="
git add content/citations/
git add content/admin/ content/marines/ content/leader/ content/commander/
git add content/inspections/igmc/ content/inspections/mcaat/
git add audit/
git add src/generated/

Write-Host ""
Write-Host "=== Step 5: Status summary ==="
git status -s | Measure-Object -Line | ForEach-Object { Write-Host "Total tracked changes: $($_.Lines)" }
git diff --cached --stat | Select-Object -Last 1

Write-Host ""
Write-Host "=== Step 6: Commit ==="
$msg = @"
citations: orphan triage, SGLI fix, FMR alias sweep, MCM and UCMJ parents

Coverage 80.6 to 83.9 percent across the session.

- Authored 29 new citations and expanded 8 existing ones.
- Cleared 39 orphan citations through wiring, redirect stubs, and hidden flags.
- Wired 10 unused citations into target page references arrays.
- Authored MCO 5231.4, MCO 1770.1, MCO 7220.65 stub, MCO 1100.79 stub, MCO P6320.13 stub.
- Authored DD Form 2701, DD Form 2704, expanded DD Form 577.
- Authored NAVMC 3000.1 USMC AI Implementation Plan.
- Authored MARADMIN 190/26 ECDP extension and expanded MARADMIN 076/25 ECDP pilot body.
- Authored DODI 1341.14 SGLI SOES, DODI 1341.13 GI Bill TEB, DODI 6025.19 IMR.
- Authored DoDD 4500.09 transportation, SECNAVINST 5730.5K congressional affairs.
- Authored CJCSI 3401.02B force readiness reporting, CJCSM 3150.01B stub.
- Authored DTMO Per Diem Lookup, Understanding a Travel Debt, Travel-Incurred Debt Guide.
- Authored Public Law 105-264 TTRA 1998 and 5 USC 5701.
- Authored USPS Domestic Mail Manual.
- Authored 2025 USMC Warfighter Mental Readiness Playbook V3.
- Authored UCMJ parent at 10 USC Chapter 47 with 34 article aliases.
- Expanded DoDFMR Vol 5, 7A, 7B, 8, 9, 16 with descriptive-suffix aliases.
- Expanded MCM with RCM and Part V variant aliases.
- Corrected DODI 1341.13 SGLI mis-tag across 4 admin pages to DODI 1341.14.
- Deleted 7 generic MARADMIN updates placeholder strings.
- Wired DODI 6055.07, SECNAVINST 5430.57H, MARADMIN 537/24, 628/23, 199/25, 655/23, 014/25, 074/21, 388/25 into target pages.
- Marked 25 historical or superseded MARADMINs and MARADMIN 022/25 cancellation as hidden.

Registry state: 388 citations, 1548 aliases, 3039 page-citation links.
"@
git commit -m $msg

Write-Host ""
Write-Host "=== Step 7: Push ==="
git push origin main

Write-Host ""
Write-Host "=== Done ==="
git log --oneline -3
