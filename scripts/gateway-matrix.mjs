/**
 * بوابة Matrix — الموقع على الشبكة، Control Center على localhost فقط
 */
import http from 'node:http';
import os from 'node:os';

const HOST = process.env.MATRIX_GATEWAY_HOST ?? '0.0.0.0';
const PORT = Number(process.env.MATRIX_GATEWAY_PORT ?? 8080);
const MARKETING = process.env.MATRIX_MARKETING_URL ?? 'http://127.0.0.1:3010';
const PLATFORM = process.env.MATRIX_PLATFORM_URL ?? 'http://127.0.0.1:3001';
const ERP = process.env.MATRIX_ERP_URL ?? 'http://127.0.0.1:3002';

function lanUrls(port) {
  const urls = new Set([`http://127.0.0.1:${port}`, `http://localhost:${port}`]);
  for (const ifaces of Object.values(os.networkInterfaces())) {
    for (const iface of ifaces ?? []) {
      if (iface.family === 'IPv4' && !iface.internal) {
        urls.add(`http://${iface.address}:${port}`);
      }
    }
  }
  return [...urls];
}

function isLocalAddress(req) {
  const ip = req.socket.remoteAddress ?? '';
  return ip === '127.0.0.1' || ip === '::1' || ip === '::ffff:127.0.0.1';
}

function proxy(targetBase, req, res) {
  const url = new URL(req.url ?? '/', `http://localhost:${PORT}`);
  const target = new URL(url.pathname + url.search, targetBase);
  const headers = { ...req.headers, host: target.host };
  delete headers['proxy-connection'];

  const upstream = http.request(target, { method: req.method, headers }, (upstreamRes) => {
    res.writeHead(upstreamRes.statusCode ?? 502, upstreamRes.headers);
    upstreamRes.pipe(res);
  });

  upstream.on('error', () => {
    if (!res.headersSent) {
      res.writeHead(502, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('الخدمة غير جاهزة — انتظر ثم حدّث الصفحة.');
    }
  });

  req.pipe(upstream);
}

const server = http.createServer((req, res) => {
  const path = req.url ?? '/';

  if (path === '/control' || path.startsWith('/control/')) {
    if (!isLocalAddress(req)) {
      res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Control Center — localhost فقط.');
      return;
    }
    proxy(PLATFORM, req, res);
    return;
  }

  if (path === '/erp' || path.startsWith('/erp/')) {
    if (!isLocalAddress(req)) {
      res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('ERP — localhost فقط.');
      return;
    }
    proxy(ERP, req, res);
    return;
  }

  proxy(MARKETING, req, res);
});

server.on('upgrade', (req, socket, head) => {
  const path = req.url ?? '/';
  const targetBase = path.startsWith('/control')
    ? PLATFORM
    : path.startsWith('/erp')
      ? ERP
      : MARKETING;
  if (path.startsWith('/control') && !isLocalAddress(req)) {
    socket.destroy();
    return;
  }
  if (path.startsWith('/erp') && !isLocalAddress(req)) {
    socket.destroy();
    return;
  }

  const url = new URL(path, `http://localhost:${PORT}`);
  const target = new URL(url.pathname + url.search, targetBase);
  const proxyReq = http.request({
    hostname: target.hostname,
    port: target.port,
    path: target.pathname + target.search,
    method: req.method,
    headers: { ...req.headers, host: target.host },
  });

  proxyReq.on('upgrade', (proxyRes, proxySocket, proxyHead) => {
    socket.write(
      `HTTP/1.1 ${proxyRes.statusCode} ${proxyRes.statusMessage}\r\n` +
        Object.entries(proxyRes.headers)
          .filter(([, v]) => v != null)
          .map(([k, v]) => `${k}: ${v}`)
          .join('\r\n') +
        '\r\n\r\n',
    );
    if (proxyHead.length) proxySocket.write(proxyHead);
    proxySocket.pipe(socket);
    socket.pipe(proxySocket);
  });

  proxyReq.on('error', () => socket.destroy());
  proxyReq.end(head);
});

server.listen(PORT, HOST, () => {
  const urls = lanUrls(PORT);
  console.log(`البوابة جاهزة على المنفذ ${PORT}`);
  console.log('الموقع — من أي جهاز على نفس الشبكة:');
  for (const u of urls) console.log(`  ${u}/`);
  console.log('Control Center — من هذا الجهاز فقط:');
  console.log(`  http://127.0.0.1:${PORT}/control`);
  console.log('ERP — من هذا الجهاز فقط:');
  console.log(`  http://127.0.0.1:${PORT}/erp`);
});

server.on('error', (err) => {
  if ((err.code === 'EACCES' || err.code === 'EADDRINUSE') && PORT === 80) {
    const fallback = 8080;
    console.error(`تعذّر فتح المنفذ 80: ${err.message}`);
    console.error(`المحاولة على المنفذ ${fallback}...`);
    server.listen(fallback, HOST);
    return;
  }
  console.error(`تعذّر فتح المنفذ ${PORT}: ${err.message}`);
  process.exit(1);
});
