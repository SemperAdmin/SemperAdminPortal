#Requires -Version 5.1
<#
.SYNOPSIS
    Local launcher for Semper Admin Portal.
.DESCRIPTION
    Verifies Node, installs dependencies on first run, syncs content catalogs,
    starts the Next.js dev server, and opens the browser at the right base path.
.EXAMPLE
    PS> .\launch.ps1
#>

$ErrorActionPreference = "Stop"
Set-Location -Path $PSScriptRoot

$Cyan   = "Cyan"
$Green  = "Green"
$Yellow = "Yellow"
$Red    = "Red"

Write-Host ""
Write-Host "============================================================" -ForegroundColor $Cyan
Write-Host "  Semper Admin Portal - Local launcher" -ForegroundColor $Cyan
Write-Host "============================================================" -ForegroundColor $Cyan
Write-Host "Working directory: $PWD"
Write-Host ""

# Verify Node
try {
    $nodeVersion = (node --version) 2>$null
    if ([string]::IsNullOrWhiteSpace($nodeVersion)) { throw "node empty" }
    Write-Host "Node detected: $nodeVersion" -ForegroundColor $Green
} catch {
    Write-Host "[ERROR] Node not found on PATH." -ForegroundColor $Red
    Write-Host "Install Node 22 LTS from https://nodejs.org/en/download and re-run."
    Read-Host "Press Enter to exit"
    exit 1
}
Write-Host ""

# Install dependencies on first run
if (-not (Test-Path "node_modules")) {
    Write-Host "[INFO] node_modules not found. Running npm install. First run takes 1-3 minutes." -ForegroundColor $Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "[ERROR] npm install failed." -ForegroundColor $Red
        Read-Host "Press Enter to exit"
        exit 1
    }
    Write-Host "[OK] Dependencies installed." -ForegroundColor $Green
} else {
    Write-Host "[OK] Dependencies present. Skipping install." -ForegroundColor $Green
}
Write-Host ""

# Sync content catalogs
if (Test-Path "scripts/sync-content.mjs") {
    Write-Host "Syncing content catalogs."
    node scripts/sync-content.mjs
    Write-Host ""
}

$url = "http://localhost:3000/SemperAdminPortal/"
Write-Host "Starting Next.js dev server." -ForegroundColor $Cyan
Write-Host "URL: $url"
Write-Host "Press Ctrl+C to stop the server."
Write-Host ""

# Open the browser after a short delay so the server is ready
Start-Job -ScriptBlock {
    Start-Sleep -Seconds 5
    Start-Process $using:url
} | Out-Null

npm run dev
