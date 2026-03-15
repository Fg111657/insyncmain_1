/**
 * setup-assets.js
 *
 * Creates a symlink from /public/assets → /assets so that Next.js can serve
 * clinic photos and badge logos as static files at /assets/...
 *
 * Run once before `npm run dev` or `npm run build`:
 *   node scripts/setup-assets.js
 */

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const publicDir = path.join(root, 'public');
const symlinkTarget = path.join(publicDir, 'assets');
const assetsSource = path.join(root, 'assets');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

if (fs.existsSync(symlinkTarget)) {
  console.log('✓ /public/assets already exists — skipping setup.');
  process.exit(0);
}

try {
  fs.symlinkSync(assetsSource, symlinkTarget, 'dir');
  console.log('✓ Symlink created: /public/assets → /assets');
} catch (err) {
  console.error('✗ Could not create symlink:', err.message);
  console.error('  Try running: ln -sf $(pwd)/assets public/assets');
  process.exit(1);
}
