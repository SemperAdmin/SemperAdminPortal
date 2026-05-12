#Requires -Version 5.1
$ErrorActionPreference = "Stop"
Set-Location -Path $PSScriptRoot

Write-Host ""
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host "  Semper Admin Portal - Production preview" -ForegroundColor Cyan
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host "Builds the static export and serves under the GitHub Pages base path."
Write-Host ""

if (-not (Test-Path "node_modules")) {
    Write-Host "Installing dependencies first." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) { Read-Host "Press Enter"; exit 1 }
}

Write-Host "Running production build. 30-60 seconds." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "[ERROR] Build failed." -ForegroundColor Red
    Read-Host "Press Enter"
    exit 1
}

$url = "http://localhost:4173/SemperAdminPortal/"
Write-Host ""
Write-Host "[OK] Build complete. Starting preview server on port 4173." -ForegroundColor Green
Write-Host "URL: $url"
Write-Host "Press Ctrl+C to stop."
Write-Host ""

Start-Job -ScriptBlock { Start-Sleep 3; Start-Process $using:url } | Out-Null
node scripts/serve-prod.mjs
