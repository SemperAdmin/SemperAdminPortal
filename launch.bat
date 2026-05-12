@echo off
setlocal enabledelayedexpansion
title Semper Admin Portal

REM Move to the script's own directory
cd /d "%~dp0"

echo.
echo ============================================================
echo   Semper Admin Portal - Local launcher
echo ============================================================
echo Working directory: %CD%
echo.

REM Check Node is on PATH
where node >nul 2>nul
if errorlevel 1 (
  echo [ERROR] Node not found on PATH.
  echo Install Node 22 LTS from https://nodejs.org/en/download and try again.
  echo.
  pause
  exit /b 1
)
for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo Node detected: %NODE_VERSION%
echo.

REM Install dependencies on first run
if not exist "node_modules\" (
  echo [INFO] node_modules not found. Running npm install. First run takes 1-3 minutes.
  echo.
  call npm install
  if errorlevel 1 (
    echo.
    echo [ERROR] npm install failed.
    pause
    exit /b 1
  )
  echo.
  echo [OK] Dependencies installed.
) else (
  echo [OK] Dependencies present. Skipping install.
)
echo.

REM Pre-build content catalogs so client components have data
if exist "scripts\sync-content.mjs" (
  echo Syncing content catalogs.
  node scripts/sync-content.mjs
  echo.
)

set URL=http://localhost:3000/SemperAdminPortal/
echo Starting Next.js dev server.
echo URL: %URL%
echo Press Ctrl+C in this window to stop the server.
echo.

REM Open the browser shortly after the server starts
start "" cmd /c "timeout /t 5 /nobreak >nul && start %URL%"

REM Run the dev server in the foreground
call npm run dev

echo.
echo Dev server stopped.
pause
endlocal
