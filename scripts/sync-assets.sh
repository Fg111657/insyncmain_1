#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# sync-assets.sh
#
# Rsyncs clinic photos and videos to the DigitalOcean server.
# Run this AFTER `git push` whenever new photo/video assets are added.
#
# Usage:
#   chmod +x scripts/sync-assets.sh
#   ./scripts/sync-assets.sh
#
# Requires SSH access to the server (your SSH key must be added to the droplet).
# ─────────────────────────────────────────────────────────────────────────────

SERVER_USER="root"
SERVER_IP="137.184.31.84"
REMOTE_ASSETS="/var/www/insync/assets/hassan-pt"
LOCAL_ASSETS="./assets/hassan-pt"

echo "→ Syncing clinic photos to ${SERVER_USER}@${SERVER_IP}:${REMOTE_ASSETS}"
echo "  This may take a few minutes on first run (1.1GB of photos)."
echo ""

rsync -avz --progress \
  --exclude="videos/" \
  "${LOCAL_ASSETS}/" \
  "${SERVER_USER}@${SERVER_IP}:${REMOTE_ASSETS}/"

echo ""
echo "✓ Asset sync complete."
echo "  Photos are now available at /var/www/insync/assets/hassan-pt/ on the server."
