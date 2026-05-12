#!/usr/bin/env bash
# Local launcher for Semper Admin Portal.
# Usage: ./launch.sh
set -e

cd "$(dirname "$0")"

CYAN="\033[0;36m"
GREEN="\033[0;32m"
YELLOW="\033[0;33m"
RED="\033[0;31m"
RESET="\033[0m"

echo
echo -e "${CYAN}============================================================${RESET}"
echo -e "${CYAN}  Semper Admin Portal - Local launcher${RESET}"
echo -e "${CYAN}============================================================${RESET}"
echo "Working directory: $PWD"
echo

if ! command -v node >/dev/null 2>&1; then
  echo -e "${RED}[ERROR] Node not found on PATH.${RESET}"
  echo "Install Node 22 LTS from https://nodejs.org/en/download and re-run."
  exit 1
fi
echo -e "${GREEN}Node detected: $(node --version)${RESET}"
echo

if [ ! -d node_modules ]; then
  echo -e "${YELLOW}[INFO] Running npm install. First run takes 1-3 minutes.${RESET}"
  npm install
  echo -e "${GREEN}[OK] Dependencies installed.${RESET}"
else
  echo -e "${GREEN}[OK] Dependencies present. Skipping install.${RESET}"
fi
echo

if [ -f scripts/sync-content.mjs ]; then
  echo "Syncing content catalogs."
  node scripts/sync-content.mjs
  echo
fi

URL="http://localhost:3000/SemperAdminPortal/"
echo -e "${CYAN}Starting Next.js dev server.${RESET}"
echo "URL: $URL"
echo "Press Ctrl+C to stop the server."
echo

# Open browser after a short delay
(
  sleep 5
  if command -v xdg-open >/dev/null 2>&1; then xdg-open "$URL"
  elif command -v open >/dev/null 2>&1; then open "$URL"
  elif command -v start >/dev/null 2>&1; then start "$URL"
  fi
) &

npm run dev
