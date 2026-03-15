#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# deploy.sh  — Run ON THE SERVER at /var/www/insync/
#
# Pulls latest code, installs deps, builds, and restarts via PM2.
#
# Usage (on server):
#   cd /var/www/insync && bash scripts/deploy.sh
# ─────────────────────────────────────────────────────────────────────────────

set -e  # Exit immediately on any error

APP_DIR="/var/www/insync"
APP_NAME="insync"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  InSync PT — Deploy Script"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

cd "$APP_DIR"

# 1. Pull latest code
echo "→ Pulling latest from GitHub (main branch)..."
git pull origin main

# 2. Set up asset symlink
echo "→ Setting up asset symlink..."
node scripts/setup-assets.js

# 3. Install dependencies
echo "→ Installing dependencies..."
npm ci --prefer-offline 2>/dev/null || npm install

# 4. Build
echo "→ Building Next.js app..."
npm run build

# 5. Restart / start with PM2
echo "→ Restarting app with PM2..."
if pm2 describe "$APP_NAME" > /dev/null 2>&1; then
  pm2 restart "$APP_NAME"
else
  pm2 start npm --name "$APP_NAME" -- start
  pm2 save
fi

echo ""
echo "✓ Deploy complete! App is running at http://localhost:3000"
echo "  Check status: pm2 status"
echo "  Check logs:   pm2 logs insync"
