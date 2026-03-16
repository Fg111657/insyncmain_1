/**
 * Upload compressed images to DigitalOcean Spaces (insync-assets bucket)
 * Run: node scripts/upload-to-spaces.mjs
 */

import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { readFileSync, readdirSync, statSync } from 'fs';
import { join, relative, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ── Config ────────────────────────────────────────────────────────────────────
const SPACES_KEY    = 'DO00RUFQLKDLBCTTAJ4K';
const SPACES_SECRET = 'vwrqkQCaZuvYu+ksnT/L0oxYktE4RiqCiYgCq9V0+28';
const BUCKET        = 'insync-assets';
const REGION        = 'nyc3';
const ENDPOINT      = `https://${REGION}.digitaloceanspaces.com`;

// Local source dir (relative to project root)
const LOCAL_DIR  = join(__dirname, '..', 'public', 'assets', 'hassan-pt', 'photos-compressed');
// Remote prefix in the bucket
const REMOTE_PREFIX = 'assets/hassan-pt/photos';

const MIME_MAP = {
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png':  'image/png',
  '.webp': 'image/webp',
  '.gif':  'image/gif',
  '.svg':  'image/svg+xml',
};

// ── S3 Client ─────────────────────────────────────────────────────────────────
const client = new S3Client({
  region:   REGION,
  endpoint: ENDPOINT,
  credentials: {
    accessKeyId:     SPACES_KEY,
    secretAccessKey: SPACES_SECRET,
  },
  forcePathStyle: false,
});

// ── Helpers ───────────────────────────────────────────────────────────────────
function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      walk(full, files);
    } else {
      files.push(full);
    }
  }
  return files;
}

// ── Upload ────────────────────────────────────────────────────────────────────
async function upload() {
  const files = walk(LOCAL_DIR);
  console.log(`\nUploading ${files.length} files to s3://${BUCKET}/${REMOTE_PREFIX}/\n`);

  let ok = 0;
  let fail = 0;

  for (const filePath of files) {
    const rel       = relative(LOCAL_DIR, filePath);   // e.g. office/photo.jpg
    const key       = `${REMOTE_PREFIX}/${rel}`.replace(/\\/g, '/');
    const ext       = extname(filePath).toLowerCase();
    const mime      = MIME_MAP[ext] ?? 'application/octet-stream';
    const body      = readFileSync(filePath);

    try {
      await client.send(new PutObjectCommand({
        Bucket:       BUCKET,
        Key:          key,
        Body:         body,
        ContentType:  mime,
        ACL:          'public-read',
        CacheControl: 'public, max-age=31536000, immutable',
      }));
      console.log(`  ✓  ${key}`);
      ok++;
    } catch (err) {
      console.error(`  ✗  ${key}  →  ${err.message}`);
      fail++;
    }
  }

  console.log(`\n── Done: ${ok} uploaded, ${fail} failed ──`);
  if (fail === 0) {
    console.log(`\nCDN base: https://${BUCKET}.${REGION}.cdn.digitaloceanspaces.com`);
    console.log(`Set in .env.local: NEXT_PUBLIC_CDN_BASE=https://${BUCKET}.${REGION}.cdn.digitaloceanspaces.com`);
  }
}

upload().catch(err => { console.error(err); process.exit(1); });
