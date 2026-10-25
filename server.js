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

// 1. Parse _redirects for internal path redirects (supporting exact and trailing-slash variants)
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

// 2. Parse _headers for global security & path-specific caching policies
const headerRules = [];
const headersPath = path.join(__dirname, '_headers');
if (fs.existsSync(headersPath)) {
  const lines = fs.readFileSync(headersPath, 'utf-8').split('\n');
  let currentRule = null;
  for (const rawLine of lines) {
    if (!rawLine.trim() || rawLine.trim().startsWith('#')) continue;
    if (!rawLine.startsWith(' ') && !rawLine.startsWith('\t')) {
      const pattern = rawLine.trim();
      const prefix = pattern.endsWith('/*') ? pattern.slice(0, -1) : pattern;
      currentRule = { pattern, prefix, isWildcard: pattern.endsWith('/*'), headers: [] };
      headerRules.push(currentRule);
    } else if (currentRule && rawLine.includes(':')) {
      const idx = rawLine.indexOf(':');
      const key = rawLine.slice(0, idx).trim();
      const val = rawLine.slice(idx + 1).trim();
      if (key && val) currentRule.headers.push([key, val]);
    }
  }
}

// 3. Deterministic HTML -> Clinical Markdown Converter for AI Search Crawlers (AEO / GEO)
function htmlToClinicalMarkdown(html, canonicalUrl) {
  const cleanEntities = (s) =>
    s
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&bull;|&#8226;/g, '•')
      .replace(/&rarr;/g, '->')
      .replace(/&ge;/g, '>=')
      .replace(/&le;/g, '<=')
      .replace(/&deg;/g, '°')
      .replace(/&#x27;|&#039;|&rsquo;/g, "'")
      .replace(/&quot;|&ldquo;|&rdquo;/g, '"')
      .replace(/<[^>]+>/g, '')
      .replace(/\s+/g, ' ')
      .trim();

  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const descMatch =
    html.match(/<meta\s+name="description"\s+content="([^"]+)"/i) ||
    html.match(/<meta\s+content="([^"]+)"\s+name="description"/i);
  const title = h1Match ? cleanEntities(h1Match[1]) : 'Babie Blue Clinical Protocol';
  const desc = descMatch ? cleanEntities(descMatch[1]) : '';

  const mainIdx = html.indexOf('<main');
  const footerIdx = html.indexOf('<footer');
  let body = mainIdx !== -1 ? html.slice(mainIdx, footerIdx !== -1 ? footerIdx : undefined) : html;

  body = body
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<nav[\s\S]*?<\/nav>/gi, '')
    .replace(/<div class="ad-slot-wrapper[\s\S]*?<\/div>/gi, '')
    .replace(/<h1[^>]*>[\s\S]*?<\/h1>/gi, '')
    .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, (_, t) => `\n\n## ${cleanEntities(t)}\n\n`)
    .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, (_, t) => `\n\n### ${cleanEntities(t)}\n\n`)
    .replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, (_, t) => `\n\n#### ${cleanEntities(t)}\n\n`)
    .replace(/<dt[^>]*>([\s\S]*?)<\/dt>/gi, (_, t) => `\n- **${cleanEntities(t)}** `)
    .replace(/<dd[^>]*>([\s\S]*?)<\/dd>/gi, (_, t) => `${cleanEntities(t)}\n`)
    .replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_, t) => `- ${cleanEntities(t)}\n`)
    .replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (_, t) => `\n${cleanEntities(t)}\n`)
    .replace(/<[^>]+>/g, ' ')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  return [
    `# ${title}`,
    ``,
    `> **Canonical Clinical Reference:** ${canonicalUrl}`,
    `> **Written by:** Madhuri B, Lead Healthcare Content Specialist`,
    `> **Medically Reviewed by:** Dr. Mangala Devi K.R., MBBS, MS (OBG), MBA & Dr. Anagha Nawal, MBBS, DGO, MD, MCE, FRM`,
    `> **Evidence Standards:** ACOG, AAP, WHO & CDC Clinical Guidelines`,
    desc ? `> **Executive Summary:** ${desc}` : '',
    ``,
    `---`,
    ``,
    cleanEntities(body).length > 100 ? body : desc
  ]
    .filter(Boolean)
    .join('\n');
}

// 4. In-memory LRU-bounded compression cache for static HTML, CSS, JS, JSON, XML, TXT, and SVG
const COMPRESSIBLE_EXT = /\.(html|css|js|json|xml|svg|txt|xsl|md)$/i;
const MIME_MAP = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.xsl': 'text/xsl; charset=utf-8',
  '.svg': 'image/svg+xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8'
};

const compressedCache = new Map();
const MAX_CACHE_ENTRIES = 450;

function getCompressedEntry(absPath, stat) {
  const cached = compressedCache.get(absPath);
  if (cached && cached.mtimeMs === stat.mtimeMs) {
    return cached;
  }
  const raw = fs.readFileSync(absPath);
  const gzipBuf = raw.length > 512
    ? zlib.gzipSync(raw, { level: zlib.constants.Z_DEFAULT_COMPRESSION })
    : null;
  const brBuf = raw.length > 512
    ? zlib.brotliCompressSync(raw, {
        params: { [zlib.constants.BROTLI_PARAM_QUALITY]: 5 }
      })
    : null;

  const entry = {
    mtimeMs: stat.mtimeMs,
    etag: `W/"${stat.size.toString(16)}-${Math.floor(stat.mtimeMs).toString(16)}"`,
    raw,
    gzip: gzipBuf,
    br: brBuf
  };

  if (compressedCache.size >= MAX_CACHE_ENTRIES) {
    const firstKey = compressedCache.keys().next().value;
    compressedCache.delete(firstKey);
  }
  compressedCache.set(absPath, entry);
  return entry;
}

// 5. Global Security Headers & _headers Policy Middleware
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');

  for (const rule of headerRules) {
    const match =
      rule.pattern === '/*' ||
      req.path === rule.pattern ||
      (rule.isWildcard && req.path.startsWith(rule.prefix));
    if (match) {
      for (const [k, v] of rule.headers) {
        res.setHeader(k, v);
      }
    }
  }
  next();
});

// 6. Redirect Middleware (_redirects)
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

// 7. Dynamic Per-Article Markdown Mirror (/.../index.md or Accept: text/markdown) for AI Agents
app.use((req, res, next) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') return next();
  const isMdPath = req.path.endsWith('/index.md') || (req.path.endsWith('.md') && !fs.existsSync(path.join(__dirname, req.path)));
  const wantsMarkdown = (req.headers['accept'] || '').includes('text/markdown');
  if (!isMdPath && !wantsMarkdown) return next();

  let targetDir = req.path.replace(/\/index\.md$/i, '/').replace(/\.md$/i, '/');
  let htmlCandidate = path.join(__dirname, targetDir, 'index.html');
  if (!fs.existsSync(htmlCandidate)) return next();

  try {
    const html = fs.readFileSync(htmlCandidate, 'utf-8');
    const canonicalUrl = `https://babieblue.com${targetDir.endsWith('/') ? targetDir : targetDir + '/'}`;
    const md = htmlToClinicalMarkdown(html, canonicalUrl);
    res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.setHeader('X-Robots-Tag', 'index, follow');
    return res.status(200).send(md);
  } catch {
    return next();
  }
});

// 8. High-Performance Pre-Compressed Static Resolver (Brotli / Gzip) for Text Assets
app.use((req, res, next) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') return next();

  let relPath = decodeURIComponent(req.path);
  if (relPath.includes('\0') || relPath.includes('..')) return next();

  let candidate = path.join(__dirname, relPath);
  try {
    if (fs.existsSync(candidate) && fs.statSync(candidate).isDirectory()) {
      candidate = path.join(candidate, 'index.html');
    } else if (!path.extname(candidate) && fs.existsSync(candidate + '.html')) {
      candidate = candidate + '.html';
    }

    const ext = path.extname(candidate).toLowerCase();
    if (!COMPRESSIBLE_EXT.test(ext) || !fs.existsSync(candidate)) {
      return next();
    }

    const stat = fs.statSync(candidate);
    if (!stat.isFile()) return next();

    const entry = getCompressedEntry(candidate, stat);
    res.setHeader('ETag', entry.etag);
    res.setHeader('Vary', 'Accept-Encoding');
    if (MIME_MAP[ext]) {
      res.setHeader('Content-Type', MIME_MAP[ext]);
    }

    if (ext === '.html') {
      res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
    } else if (!res.getHeader('Cache-Control')) {
      res.setHeader('Cache-Control', 'public, max-age=604800, stale-while-revalidate=86400');
    }

    if (req.headers['if-none-match'] === entry.etag) {
      return res.status(304).end();
    }

    const acceptEncoding = req.headers['accept-encoding'] || '';
    if (entry.br && /\bbr\b/.test(acceptEncoding)) {
      res.setHeader('Content-Encoding', 'br');
      res.setHeader('Content-Length', entry.br.length);
      return res.status(200).end(req.method === 'HEAD' ? undefined : entry.br);
    }
    if (entry.gzip && /\bgzip\b/.test(acceptEncoding)) {
      res.setHeader('Content-Encoding', 'gzip');
      res.setHeader('Content-Length', entry.gzip.length);
      return res.status(200).end(req.method === 'HEAD' ? undefined : entry.gzip);
    }

    res.setHeader('Content-Length', entry.raw.length);
    return res.status(200).end(req.method === 'HEAD' ? undefined : entry.raw);
  } catch {
    return next();
  }
});

// 9. Fallback static file server for binary images/fonts (PNG, JPG, WebP, WOFF2)
app.use(
  express.static(__dirname, {
    extensions: ['html'],
    etag: true,
    lastModified: true,
    setHeaders: (res, filePath) => {
      if (/\.(png|jpg|jpeg|webp|gif|ico|woff2?)$/i.test(filePath)) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      }
    }
  })
);

// 10. 404 Handler
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
