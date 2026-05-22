# Push the small follow-up batch.
# Hide 4 clarification stubs and wire Understanding a Travel Debt into 4 admin pages.

Set-Location D:\Coding\SemperAdminPortal

Write-Host "=== Step 1: Clear any stale index lock ==="
if (Test-Path .git\index.lock) {
    Remove-Item -Force .git\index.lock
    Write-Host "Lock removed"
} else {
    Write-Host "No lock file present"
}

Write-Host ""
Write-Host "=== Step 2: Stage only the touched files ==="
git add content/citations/mco-1100-79.mdx
git add content/citations/mco-7220-65.mdx
git add content/citations/mco-p6320-13.mdx
git add content/citations/cjcsm-3150-01b.mdx
git add content/admin/s1g1-dts-debt-management-and-collection.mdx
git add content/admin/s1g1-dts-overview.mdx
git add content/admin/s1g1-travel-entitlements-mileage-claims-overview.mdx
git add content/admin/s1g1-travel-entitlements-mileage-claims-processing-travel-claims-and-vouchers.mdx

Write-Host ""
Write-Host "=== Step 3: Staged changes ==="
git diff --cached --stat

Write-Host ""
Write-Host "=== Step 4: Commit ==="
$msg = @"
citations: hide 4 clarification stubs, wire Understanding a Travel Debt

- Mark mco-1100-79, mco-7220-65, mco-p6320-13, cjcsm-3150-01b as hidden.
  These citations document non-existent orders. They still resolve chips
  through aliases but no longer appear in the public citations index.

- Wire dtmo-understanding-travel-debt into 4 admin travel-debt pages
  alongside the comprehensive Travel-Incurred Debt Guide.

Coverage 83.9 to 84.0 percent.
"@
git commit -m $msg

Write-Host ""
Write-Host "=== Step 5: Push ==="
git push origin main

Write-Host ""
Write-Host "=== Done ==="
git log --oneline -3
