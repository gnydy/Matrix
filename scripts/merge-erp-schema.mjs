/**
 * دمج erp-models.prisma مع مخطط SQLite/Postgres
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const prismaDir = path.join(root, 'packages', 'database', 'prisma');
const erpMarker = '// ─── ERP Core ───────────────────────────────────────────────';

function merge(baseName, outName) {
  const basePath = path.join(prismaDir, baseName);
  const erpPath = path.join(prismaDir, 'erp-models.prisma');
  const outPath = path.join(prismaDir, outName);

  let base = fs.readFileSync(basePath, 'utf8');
  if (base.includes(erpMarker)) {
    base = base.slice(0, base.indexOf(erpMarker)).trimEnd();
  }

  const erp = fs.readFileSync(erpPath, 'utf8');
  fs.writeFileSync(outPath, `${base}\n\n${erp}\n`, 'utf8');
  console.log('دمج ERP:', outName);
}

merge('schema.sqlite.prisma', 'schema.sqlite.merged.prisma');
merge('schema.prisma', 'schema.merged.prisma');
