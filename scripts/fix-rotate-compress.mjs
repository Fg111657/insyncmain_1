/**
 * fix-rotate-compress.mjs
 *
 * Re-compresses all clinic photos with correct EXIF auto-rotation.
 * Outputs to public/assets/hassan-pt/photos-compressed/
 *
 * Fix: .rotate() is called FIRST (before any resize) so sharp reads
 * EXIF orientation, rotates pixels correctly, then strips the tag.
 * Without this, sharp strips EXIF but leaves pixels in their original
 * orientation — causing 90° rotated images on the live site.
 *
 * Usage:
 *   node scripts/fix-rotate-compress.mjs
 */

import sharp from 'sharp';
import { readdir, mkdir, rm } from 'fs/promises';
import { existsSync, statSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT      = path.join(__dirname, '..');

const INPUT_BASE  = path.join(ROOT, 'public', 'assets', 'hassan-pt', 'photos');
const OUTPUT_BASE = path.join(ROOT, 'public', 'assets', 'hassan-pt', 'photos-compressed');

const JPEG_QUALITY = 82;
const MAX_WIDTH    = 1600;

let total = 0;
let saved = 0;
let count = 0;

// Wipe old compressed output so we start fresh
if (existsSync(OUTPUT_BASE)) {
  console.log('Removing old photos-compressed/ ...');
  await rm(OUTPUT_BASE, { recursive: true, force: true });
}

async function processDir(inputDir, outputDir) {
  await mkdir(outputDir, { recursive: true });

  const entries = await readdir(inputDir, { withFileTypes: true });

  for (const entry of entries) {
    const inputPath  = path.join(inputDir, entry.name);
    const outputPath = path.join(outputDir, entry.name);

    if (entry.isDirectory()) {
      await processDir(inputPath, outputPath);
      continue;
    }

    const ext = path.extname(entry.name).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;

    const outFile = outputPath.replace(/\.(png|jpeg)$/i, '.jpg');

    try {
      // .rotate() MUST be called first — reads EXIF orientation, applies
      // the pixel rotation, then strips EXIF so downstream clients see
      // correct orientation without relying on EXIF support.
      const image = sharp(inputPath).rotate();
      const meta  = await image.metadata();

      const inputSizeKB = statSync(inputPath).size / 1024;

      await image
        .resize({ width: Math.min(meta.width ?? MAX_WIDTH, MAX_WIDTH), withoutEnlargement: true })
        .jpeg({ quality: JPEG_QUALITY, progressive: true, mozjpeg: true })
        .toFile(outFile);

      const outputSizeKB = statSync(outFile).size / 1024;
      const reduction    = Math.round((1 - outputSizeKB / inputSizeKB) * 100);

      console.log(`  ✓ ${entry.name.padEnd(72)} ${Math.round(inputSizeKB)}kb → ${Math.round(outputSizeKB)}kb  (${reduction}% smaller)`);

      total += inputSizeKB;
      saved += (inputSizeKB - outputSizeKB);
      count++;
    } catch (err) {
      console.error(`  ✗ ${entry.name}: ${err.message}`);
    }
  }
}

console.log('Re-compressing clinic photos with EXIF rotation fix...\n');
await processDir(INPUT_BASE, OUTPUT_BASE);
console.log(`\nDone. ${count} photos processed.`);
console.log(`Total: ${Math.round(total / 1024)}MB → saved ${Math.round(saved / 1024)}MB`);
console.log(`Output: ${OUTPUT_BASE}`);
console.log(`\nNext: node scripts/upload-cdn.mjs`);
