#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# upload-to-spaces.sh
# Upload compressed clinic photos to DigitalOcean Spaces
#
# Prerequisites:
#   1. Install AWS CLI:  brew install awscli
#   2. Configure DO Spaces credentials:
#        aws configure --profile do-spaces
#        AWS Access Key ID:      <your DO Spaces access key>
#        AWS Secret Access Key:  <your DO Spaces secret>
#        Default region:         us-east-1   (doesn't matter for Spaces)
#        Default output format:  json
#
#   3. Run image compression first:
#        node scripts/compress-images.mjs
#
# Usage:
#   chmod +x scripts/upload-to-spaces.sh
#   ./scripts/upload-to-spaces.sh
# ─────────────────────────────────────────────────────────────────────────────

set -euo pipefail

# ── Config — update these to match your Spaces bucket ────────────────────────
BUCKET_NAME="insync-assets"
SPACES_REGION="nyc3"                              # change if you pick sfo3, ams3, etc.
ENDPOINT="https://${SPACES_REGION}.digitaloceanspaces.com"
CDN_DOMAIN="https://${BUCKET_NAME}.${SPACES_REGION}.cdn.digitaloceanspaces.com"
AWS_PROFILE="do-spaces"

# ── Source — compressed photos output by compress-images.mjs ─────────────────
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"
SOURCE_DIR="${ROOT_DIR}/public/assets/hassan-pt/photos-compressed"

# ── Validate source exists ────────────────────────────────────────────────────
if [ ! -d "$SOURCE_DIR" ]; then
  echo "ERROR: Compressed photos not found at ${SOURCE_DIR}"
  echo "Run first:  node scripts/compress-images.mjs"
  exit 1
fi

echo ""
echo "Uploading to DigitalOcean Spaces"
echo "  Bucket:  s3://${BUCKET_NAME}"
echo "  Region:  ${SPACES_REGION}"
echo "  Source:  ${SOURCE_DIR}"
echo ""

# ── Upload with public-read ACL so CDN can serve images ──────────────────────
aws s3 sync \
  "$SOURCE_DIR" \
  "s3://${BUCKET_NAME}/assets/hassan-pt/photos" \
  --endpoint-url "$ENDPOINT" \
  --profile "$AWS_PROFILE" \
  --acl public-read \
  --cache-control "public, max-age=31536000, immutable" \
  --exclude ".DS_Store" \
  --delete \
  --progress

echo ""
echo "Upload complete."
echo ""
echo "CDN base URL:"
echo "  ${CDN_DOMAIN}"
echo ""
echo "Next steps:"
echo "  1. Set NEXT_PUBLIC_CDN_BASE=${CDN_DOMAIN} on your server"
echo "     (DigitalOcean App Platform → Environment Variables, or .env.local)"
echo "  2. pm2 restart insync"
echo "  3. Verify: curl -I ${CDN_DOMAIN}/assets/hassan-pt/photos/provider-hassan/dr-hassan-seated-cervical-mobility-assessment-male-patient-03.jpg"
