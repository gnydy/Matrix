/**
 * تشغيل Matrix محلياً — موقع + Control Center + بوابة
 */
import { spawn } from 'node:child_process';
import http from 'node:http';
import os from 'node:os';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const isWin = process.platform === 'win32';
const npm = isWin ? 'npm.cmd' : 'npm';
const pnpm = isWin ? 'pnpm.cmd' : 'pnpm';
const gatewayPort = process.env.MATRIX_GATEWAY_PORT ?? '8080';
const marketingPort = process.env.MATRIX_MARKETING_PORT ?? '3010';
const platformPort = process.env.MATRIX_PLATFORM_PORT ?? '3001';
const erpPort = process.env.MATRIX_ERP_PORT ?? '3002';
const marketingUrl = `http://127.0.0.1:${marketingPort}`;
const platformUrl = `http://127.0.0.1:${platformPort}`;
const erpUrl = `http://127.0.0.1:${erpPort}`;
const publicBase =
  gatewayPort === '80' ? 'http://matrixall' : `http://matrixall:${gatewayPort}`;

const children = [];

function run(cmd, args, opts = {}) {
  const child = spawn(cmd, args, {
    cwd: root,
    stdio: opts.stdio ?? 'inherit',
    shell: opts.shell ?? false,
    env: {
      ...process.env,
      NEXT_PUBLIC_SITE_URL: publicBase,
      MATRIX_MARKETING_URL: marketingUrl,
      MATRIX_PLATFORM_URL: platformUrl,
      MATRIX_ERP_URL: erpUrl,
      DATABASE_URL: process.env.DATABASE_URL ?? `file:${path.join(root, 'data', 'matrix.db').replace(/\\/g, '/')}`,
      JWT_SECRET: process.env.JWT_SECRET ?? process.env.SESSION_SECRET ?? 'matrix_dev_jwt_change_me',
      SESSION_SECRET: process.env.SESSION_SECRET ?? 'matrix_dev_jwt_change_me',
      API_PORT: '4000',
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL ?? 'http://127.0.0.1:4000',
      MATRIX_API_URL: process.env.MATRIX_API_URL ?? 'http://127.0.0.1:4000',
      ...opts.env,
    },
    ...opts,
  });
  children.push(child);
  return child;
}

function runNodeScript(relativePath, extraEnv = {}) {
  return run(process.execPath, [path.join(root, relativePath)], {
    shell: false,
    env: { ...process.env, ...extraEnv },
  });
}

function waitForPortFree(port, attempts = 60) {
  return new Promise((resolve, reject) => {
    let left = attempts;
    const tryListen = () => {
      const srv = http.createServer();
      srv.once('error', () => {
        left -= 1;
        if (left <= 0) reject(new Error(`port ${port} busy`));
        else setTimeout(tryListen, 1000);
      });
      srv.once('listening', () => {
        srv.close(() => resolve());
      });
      srv.listen(port, '127.0.0.1');
    };
    tryListen();
  });
}

  return new Promise((resolve, reject) => {
    let left = attempts;
    const tick = () => {
      const req = http.get(url, (res) => {
        res.resume();
        if (res.statusCode && res.statusCode < 500) resolve();
        else retry();
      });
      req.on('error', retry);
      req.setTimeout(4000, () => {
        req.destroy();
        retry();
      });
    };
    const retry = () => {
      left -= 1;
      if (left <= 0) reject(new Error(url));
      else setTimeout(tick, 1000);
    };
    tick();
  });
}

async function tryDb() {
  const dbFile = path.join(root, 'data', 'matrix.db');
  const databaseUrl = `file:${dbFile.replace(/\\/g, '/')}`;

  console.log('إعداد قاعدة SQLite المحلية (بدون Docker)...');
  try {
    await new Promise((resolve, reject) => {
      const child = run(process.execPath, [path.join(root, 'scripts', 'setup-sqlite-db.mjs')], {
        shell: false,
        stdio: 'inherit',
      });
      child.on('close', (code) => (code === 0 ? resolve() : reject(new Error('sqlite setup failed'))));
    });
    process.env.DATABASE_URL = databaseUrl;
    console.log('قاعدة البيانات جاهزة:', dbFile);
  } catch {
    console.log('تحذير: تعذّر إعداد SQLite — الداشبورد بدون بيانات.');
  }
}

function shutdown() {
  console.log('\nإيقاف Matrix...');
  for (const child of children) {
    try {
      if (isWin) spawn('taskkill', ['/pid', String(child.pid), '/f', '/t'], { stdio: 'ignore' });
      else child.kill('SIGTERM');
    } catch {
      /* ignore */
    }
  }
  process.exit(0);
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

console.log('إيقاف العمليات القديمة...');
await new Promise((resolve) => {
  run(npm, ['run', 'stack:kill'], { shell: isWin }).on('close', () => resolve());
});

await new Promise((r) => setTimeout(r, 3000));

await new Promise((resolve) => {
  run(npm, ['run', 'prod:hosts'], { shell: isWin }).on('close', () => resolve());
});

await tryDb();

console.log('بناء الحزم المشتركة...');
await new Promise((resolve, reject) => {
  const child = run(
    pnpm,
    ['--filter', '@allinall/security', '--filter', '@allinall/config', '--filter', '@allinall/database', 'build'],
    { shell: isWin },
  );
  child.on('close', (code) => (code === 0 ? resolve() : reject(new Error('package build failed'))));
});

console.log('بناء Matrix API...');
await new Promise((resolve, reject) => {
  const child = run(pnpm, ['--filter', '@allinall/api', 'build'], { shell: isWin });
  child.on('close', (code) => (code === 0 ? resolve() : reject(new Error('api build failed'))));
});

console.log('تشغيل Matrix API (منفذ 4000)...');
await waitForPortFree(4000);
run(pnpm, ['--filter', '@allinall/api', 'start'], { shell: isWin });

console.log(`تشغيل الموقع (منفذ ${marketingPort})...`);
run(
  pnpm,
  ['--filter', '@allinall/web-marketing', 'exec', 'next', 'dev', '--port', marketingPort, '--hostname', '127.0.0.1'],
  { shell: isWin },
);

console.log(`تشغيل Control Center (منفذ ${platformPort})...`);
run(
  pnpm,
  ['--filter', '@allinall/web-platform', 'exec', 'next', 'dev', '--port', platformPort, '--hostname', '127.0.0.1'],
  { shell: isWin },
);

console.log(`تشغيل AllInAll ERP (منفذ ${erpPort})...`);
run(
  pnpm,
  ['--filter', '@allinall/web-erp', 'exec', 'next', 'dev', '--port', erpPort, '--hostname', '127.0.0.1'],
  { shell: isWin },
);

console.log('انتظار جاهزية الخدمات...');
try {
  await waitFor('http://127.0.0.1:4000/api/v1/health');
} catch {
  console.log('API ما زال يُحمّل — انتظر ثم حدّث الصفحة');
}

try {
  await waitFor(`${marketingUrl}/`);
} catch {
  console.log('الموقع ما زال يُحمّل — انتظر ثم حدّث الصفحة');
}

try {
  await waitFor(`${platformUrl}/control/login`);
} catch {
  console.log('الداشبورد ما زال يُحمّل — انتظر ثم افتح /control');
}

try {
  await waitFor(`${erpUrl}/erp`);
} catch {
  console.log('ERP ما زال يُحمّل — انتظر ثم افتح /erp');
}

console.log(`تشغيل البوابة (منفذ ${gatewayPort})...`);
runNodeScript('scripts/gateway-matrix.mjs', {
  MATRIX_GATEWAY_PORT: gatewayPort,
  MATRIX_GATEWAY_HOST: '0.0.0.0',
  MATRIX_MARKETING_URL: marketingUrl,
  MATRIX_PLATFORM_URL: platformUrl,
  MATRIX_ERP_URL: erpUrl,
});

await new Promise((r) => setTimeout(r, 2000));

function printLanUrls(port) {
  const urls = new Set([`http://127.0.0.1:${port}`]);
  for (const ifaces of Object.values(os.networkInterfaces())) {
    for (const iface of ifaces ?? []) {
      if (iface.family === 'IPv4' && !iface.internal) {
        urls.add(`http://${iface.address}:${port}`);
      }
    }
  }
  return [...urls];
}

const lan = printLanUrls(gatewayPort);

console.log('');
console.log('══════════════════════════════════════════');
console.log('  الموقع — أي متصفح / أي جهاز على الشبكة:');
for (const u of lan) console.log(`    ${u}/`);
console.log('');
console.log('  Control Center — هذا الجهاز فقط:');
console.log(`    http://127.0.0.1:${gatewayPort}/control`);
console.log('');
console.log('  AllInAll ERP — هذا الجهاز فقط:');
console.log(`    http://127.0.0.1:${gatewayPort}/erp`);
console.log('');
console.log('  الدخول: admin@matrix.local / matrix_admin_change_me');
console.log('══════════════════════════════════════════');
console.log('اترك هذه النافذة مفتوحة. Ctrl+C للإيقاف.');

await new Promise(() => {});
