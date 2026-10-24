import express from 'express';
import path from 'path';
import fs from 'fs';
import zlib from 'zlib';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.disable('x-powered-by');

// Parse _redirects if present for internal path redirects (supporting both exact and trailing-slash variants)
const redirectMap = new Map();
const redirectsPath = path.join(__dirname, '_redirects');
if (fs.existsSync(redirectsPath)) {
  const lines = fs.readFileSync(redirectsPath, 'utf-8').split('\n');
  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const parts = line.split(/\s+/);
    if (parts.length >= 2) {
      const [from, to, codeStr] = parts;
      if (from.startsWith('/') && !from.includes('*') && !from.includes(':')) {
        const status = codeStr ? parseInt(codeStr, 10) : 301;
        redirectMap.set(from, { to, status });
        if (from.endsWith('/') && from.length > 1) {
          redirectMap.set(from.slice(0, -1), { to, status });
        } else if (!from.endsWith('/')) {
          redirectMap.set(from + '/', { to, status });
        }
      }
    }
  }
}

// Fast Gzip compression middleware for HTML, CSS, JS, JSON, XML, and SVG responses
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

  const acceptEncoding = req.headers['accept-encoding'] || '';
  if (!acceptEncoding.includes('gzip') || req.method !== 'GET') {
    return next();
  }

  const origSend = res.send.bind(res);
  res.send = function (body) {
    const contentType = String(res.getHeader('Content-Type') || '');
    if (
      body &&
      !res.getHeader('Content-Encoding') &&
      /(text\/html|text\/css|application\/javascript|text\/javascript|application\/json|application\/xml|image\/svg\+xml)/i.test(contentType)
    ) {
      const buf = Buffer.isBuffer(body) ? body : Buffer.from(String(body), 'utf-8');
      if (buf.length > 1024) {
        const compressed = zlib.gzipSync(buf, { level: zlib.constants.Z_BEST_SPEED });
        res.setHeader('Content-Encoding', 'gzip');
        res.setHeader('Vary', 'Accept-Encoding');
        res.setHeader('Content-Length', compressed.length);
        return origSend(compressed);
      }
    }
    return origSend(body);
  };
  next();
});

// Redirect middleware
app.use((req, res, next) => {
  const hit = redirectMap.get(req.path);
  if (hit && hit.to !== req.path) {
    if (hit.status === 410) {
      res.status(410);
      const gone404 = path.join(__dirname, '404.html');
      if (fs.existsSync(gone404)) {
        return res.sendFile(gone404);
      }
      return res.send('410 Gone');
    }
    return res.redirect(hit.status, hit.to);
  }
  next();
});

// Serve static assets with strong caching for CSS/JS/SVG and revalidation for HTML
app.use(
  express.static(__dirname, {
    extensions: ['html'],
    etag: true,
    lastModified: true,
    setHeaders: (res, filePath) => {
      if (/\.(css|js|svg|png|jpg|jpeg|webp|woff2?)$/i.test(filePath)) {
        res.setHeader('Cache-Control', 'public, max-age=604800, stale-while-revalidate=86400');
      } else if (/\.html$/i.test(filePath)) {
        res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
      }
    }
  })
);

// 404 handler
app.use((req, res) => {
  const notFoundPage = path.join(__dirname, '404.html');
  if (fs.existsSync(notFoundPage)) {
    res.status(404).sendFile(notFoundPage);
  } else {
    res.status(404).send('Not Found');
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});
