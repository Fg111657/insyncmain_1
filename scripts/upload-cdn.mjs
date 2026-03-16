/**
 * upload-cdn.mjs
 *
 * Uploads all compressed clinic photos + location stock photos to
 * DigitalOcean Spaces (S3-compatible) with public-read ACL.
 *
 * Bucket: insync-assets (nyc3 region)
 * CDN:    https://insync-assets.nyc3.cdn.digitaloceanspaces.com
 *
 * Usage:
 *   node scripts/upload-cdn.mjs
 *
 * Requires env vars (or edit the constants below):
 *   DO_SPACES_KEY    — Spaces access key
 *   DO_SPACES_SECRET — Spaces secret key
 */

import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { readdir, readFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const MIME_MAP = {
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png':  'image/png',
  '.webp': 'image/webp',
  '.gif':  'image/gif',
  '.svg':  'image/svg+xml',
};
const lookup = (filename) => MIME_MAP[path.extname(filename).toLowerCase()] ?? 'application/octet-stream';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT      = path.join(__dirname, '..');

// ── Spaces credentials ────────────────────────────────────────────────────────
const ACCESS_KEY = process.env.DO_SPACES_KEY    || 'DO00RUFQLKDLBCTTAJ4K';
const SECRET_KEY = process.env.DO_SPACES_SECRET || 'vwrqkQCaZuvYu+ksnT/L0oxYktE4RiqCiYgCq9V0+28';
const BUCKET     = 'insync-assets';
const REGION     = 'nyc3';

const s3 = new S3Client({
  endpoint:        `https://${REGION}.digitaloceanspaces.com`,
  region:          REGION,
  credentials:     { accessKeyId: ACCESS_KEY, secretAccessKey: SECRET_KEY },
  forcePathStyle:  false,
});

// ── Upload folders ────────────────────────────────────────────────────────────
// [ localDir, remotePrefix ]
const UPLOAD_SETS = [
  [
    path.join(ROOT, 'public', 'assets', 'hassan-pt', 'photos-compressed'),
    'assets/hassan-pt/photos',
  ],
  [
    path.join(ROOT, 'public', 'assets', 'locations'),
    'assets/locations',
  ],
];

let uploaded = 0;
let errors   = 0;

async function uploadDir(localDir, remotePrefix) {
  if (!existsSync(localDir)) {
    console.warn(`  ⚠ Skipping (not found): ${localDir}`);
    return;
  }

  const entries = await readdir(localDir, { withFileTypes: true });

  for (const entry of entries) {
    const localPath  = path.join(localDir, entry.name);
    const remoteKey  = `${remotePrefix}/${entry.name}`;

    if (entry.isDirectory()) {
      await uploadDir(localPath, remoteKey);
      continue;
    }

    const ext = path.extname(entry.name).toLowerCase();
    if (!['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'].includes(ext)) continue;

    try {
      const body        = await readFile(localPath);
      const contentType = lookup(entry.name) || 'application/octet-stream';

      await s3.send(new PutObjectCommand({
        Bucket:      BUCKET,
        Key:         remoteKey,
        Body:        body,
        ContentType: contentType,
        ACL:         'public-read',
        CacheControl: 'public, max-age=31536000, immutable',
      }));

      console.log(`  ✓ ${remoteKey}`);
      uploaded++;
    } catch (err) {
      console.error(`  ✗ ${entry.name}: ${err.message}`);
      errors++;
    }
  }
}

console.log(`Uploading to DO Spaces bucket: ${BUCKET}\n`);
for (const [localDir, remotePrefix] of UPLOAD_SETS) {
  console.log(`\n── ${remotePrefix} ──`);
  await uploadDir(localDir, remotePrefix);
}

console.log(`\n✅ Done. ${uploaded} files uploaded, ${errors} errors.`);
console.log(`CDN base: https://${BUCKET}.${REGION}.cdn.digitaloceanspaces.com`);
