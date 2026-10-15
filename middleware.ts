import { NextResponse } from 'next/server';

const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>404 | Payment Required</title>
<style>
  html, body { margin: 0; height: 100%; }
  body {
    display: flex; align-items: center; justify-content: center;
    background: #00262A; color: #fff; padding: 0 16px;
    font-family: system-ui, -apple-system, sans-serif; text-align: center;
  }
  h1 { font-size: 4rem; margin: 0 0 8px; font-weight: 800; letter-spacing: -0.02em; }
  h2 { font-size: 1.25rem; margin: 0 0 16px; font-weight: 600; color: #F63700; }
  p  { margin: 0; color: rgba(255,255,255,0.7); line-height: 1.6; max-width: 420px; }
</style>
</head>
<body>
  <main>
    <h1>404</h1>
    <h2>Payment Required</h2>
    <p>This site is temporarily unavailable. Payment required to restore service.</p>
  </main>
</body>
</html>`;

export function middleware() {
  return new NextResponse(HTML, {
    status: 404,
    headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' },
  });
}

export const config = {
  matcher: '/:path*',
};
