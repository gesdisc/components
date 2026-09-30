import { createServer } from 'node:http';
import { existsSync, createReadStream, statSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';

const HOST = '127.0.0.1';
const PORT = 4310;
const ROOT = join(process.cwd(), '_site');
const DIST = join(process.cwd(), 'dist');

const CONTENT_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.ico': 'image/x-icon',
};

const safePath = (pathname) => {
  const decoded = decodeURIComponent(pathname.split('?')[0]);
  const normalized = normalize(decoded).replace(/^([.][.][/\\])+/, '');
  return normalized.startsWith('/') || normalized.startsWith('\\')
    ? normalized.slice(1)
    : normalized;
};

const resolveFilePath = (pathname) => {
  const requestPath = safePath(pathname);
  const routePath = requestPath.replace(/\\/g, '/');
  const isFile = (filePath) => existsSync(filePath) && statSync(filePath).isFile();

  if (routePath.startsWith('dist/')) {
    const distPath = join(DIST, routePath.slice('dist/'.length));
    if (isFile(distPath)) {
      return distPath;
    }
  }

  const directPath = join(ROOT, routePath || 'index.html');
  if (isFile(directPath)) {
    return directPath;
  }

  const indexPath = join(ROOT, routePath, 'index.html');
  if (isFile(indexPath)) {
    return indexPath;
  }

  return join(ROOT, '404.html');
};

createServer((req, res) => {
  const filePath = resolveFilePath(req.url || '/');
  const extension = extname(filePath);
  const contentType = CONTENT_TYPES[extension] || 'application/octet-stream';

  res.writeHead(filePath.endsWith('404.html') ? 404 : 200, {
    'Content-Type': contentType,
    'Cache-Control': 'no-store',
  });

  createReadStream(filePath).pipe(res);
}).listen(PORT, HOST, () => {
  process.stdout.write(`Serving docs from ${ROOT} and dist assets from ${DIST} at http://${HOST}:${PORT}\n`);
});
