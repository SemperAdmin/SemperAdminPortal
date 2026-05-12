@echo off
setlocal
title Semper Admin Portal - Production preview

cd /d "%~dp0"

echo.
echo ============================================================
echo   Semper Admin Portal - Production preview
echo ============================================================
echo Builds the static export and serves it under the GitHub Pages base path.
echo URL after build completes: http://localhost:4173/SemperAdminPortal/
echo.

if not exist "node_modules\" (
  echo Installing dependencies first.
  call npm install
  if errorlevel 1 (
    pause
    exit /b 1
  )
)

echo Running production build. 30-60 seconds.
echo.
call npm run build
if errorlevel 1 (
  echo.
  echo [ERROR] Build failed.
  pause
  exit /b 1
)

echo.
echo [OK] Build complete. Starting preview server on port 4173.
echo URL: http://localhost:4173/SemperAdminPortal/
echo Press Ctrl+C to stop.
echo.

start "" cmd /c "timeout /t 3 /nobreak >nul && start http://localhost:4173/SemperAdminPortal/"

node scripts/serve-prod.mjs

echo.
echo Preview server stopped.
pause
