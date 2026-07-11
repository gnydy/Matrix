import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

export const resources = [
  'leads',
  'visitors',
  'customers',
  'quotes',
  'projects',
  'payments',
  'services',
  'packages',
  'contents',
  'users',
  'roles',
  'auditLogs',
  'commands',
  'portfolio',
] as const;

export type ResourceName = (typeof resources)[number];

export type ControlRecord = {
  id: string;
  title: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  [key: string]: unknown;
};

export type ControlDB = Record<ResourceName, ControlRecord[]>;

const dbPath = join(process.cwd(), 'data', 'control-db.json');

function now() {
  return new Date().toISOString();
}

function makeId(prefix: string) {
  return `${prefix}_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

function emptyDB(): ControlDB {
  return {
    leads: [],
    visitors: [],
    customers: [],
    quotes: [],
    projects: [],
    payments: [],
    services: [],
    packages: [],
    contents: [],
    users: [],
    roles: [],
    auditLogs: [],
    commands: [],
    portfolio: [],
  };
}

export function isResource(value: string): value is ResourceName {
  return (resources as readonly string[]).includes(value);
}

export function ensureDB() {
  if (!existsSync(dbPath)) {
    mkdirSync(dirname(dbPath), { recursive: true });
    writeFileSync(dbPath, JSON.stringify(emptyDB(), null, 2), 'utf8');
  }
}

export function readDB(): ControlDB {
  ensureDB();

  const raw = readFileSync(dbPath, 'utf8').replace(/^\uFEFF/, '').trim();
  const parsed = raw ? (JSON.parse(raw) as Partial<ControlDB>) : {};

  return {
    ...emptyDB(),
    ...parsed,
  };
}

export function writeDB(db: ControlDB) {
  mkdirSync(dirname(dbPath), { recursive: true });
  writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
}

export function addAudit(
  db: ControlDB,
  input: {
    action: string;
    resource: string;
    recordId?: string;
    actor?: string;
  },
) {
  const audit: ControlRecord = {
    id: makeId('audit'),
    title: input.action,
    action: input.action,
    resource: input.resource,
    recordId: input.recordId ?? '',
    actor: input.actor ?? 'Owner',
    status: 'published',
    createdAt: now(),
    updatedAt: now(),
    deletedAt: null,
  };

  db.auditLogs.unshift(audit);
}

export function seedDB() {
  const db = readDB();

  const hasRealData =
    db.users.length > 0 ||
    db.roles.length > 0 ||
    db.portfolio.length > 0;

  if (hasRealData) {
    return db;
  }

  const createdAt = now();

  db.roles.push({
    id: makeId('role'),
    title: 'Owner',
    name: 'Owner',
    permissions: ['*'],
    status: 'active',
    createdAt,
    updatedAt: createdAt,
    deletedAt: null,
  });

  db.users.push({
    id: makeId('user'),
    title: 'Owner',
    name: 'Owner',
    email: 'owner@matrixall.com',
    role: 'Owner',
    status: 'active',
    createdAt,
    updatedAt: createdAt,
    deletedAt: null,
  });

  db.portfolio.push(
    {
      id: makeId('portfolio'),
      title: 'Time Zone Watches',
      slug: 'time-zone-watches',
      titleAr: 'Time Zone Watches',
      titleEn: 'Time Zone Watches',
      client: 'Time Zone',
      categoryAr: 'متجر ساعات فاخر',
      categoryEn: 'Luxury Watch Store',
      descriptionAr:
        'متجر ساعات فاخر يعرض المنتجات بصورة احترافية، مع تجربة داكنة راقية وربط مباشر بطلبات العملاء عبر واتساب.',
      descriptionEn:
        'A premium watch-store experience with refined product presentation, dark luxury direction, and direct WhatsApp customer requests.',
      projectUrl: '',
      logoUrl: '',
      coverUrl: '',
      technologies: ['Next.js', 'React', 'SEO', 'WhatsApp'],
      featured: true,
      status: 'published',
      createdAt,
      updatedAt: createdAt,
      deletedAt: null,
    },
    {
      id: makeId('portfolio'),
      title: 'Rafiq',
      slug: 'rafiq',
      titleAr: 'Rafiq',
      titleEn: 'Rafiq',
      client: 'Rafiq',
      categoryAr: 'منصة خدمات',
      categoryEn: 'Services Platform',
      descriptionAr:
        'واجهة رقمية لعرض خدمات Rafiq بشكل منظم، بناء الثقة، وتسهيل وصول العميل إلى الخدمة المناسبة.',
      descriptionEn:
        'A digital interface for presenting Rafiq services clearly, building trust, and helping users reach the right service faster.',
      projectUrl: '',
      logoUrl: '',
      coverUrl: '',
      technologies: ['Next.js', 'UI/UX', 'SEO'],
      featured: true,
      status: 'published',
      createdAt,
      updatedAt: createdAt,
      deletedAt: null,
    },
  );

  addAudit(db, {
    action: 'Seeded real dashboard database',
    resource: 'system',
  });

  writeDB(db);

  return db;
}

export function listRecords(resource: ResourceName) {
  seedDB();

  const db = readDB();

  return db[resource].filter((record) => !record.deletedAt);
}

export function listTrash() {
  seedDB();

  const db = readDB();

  return resources.flatMap((resource) =>
    db[resource]
      .filter((record) => Boolean(record.deletedAt))
      .map((record) => ({
        ...record,
        resource,
      })),
  );
}

export function createRecord(resource: ResourceName, input: Record<string, unknown>) {
  const db = readDB();

  const title =
    String(input.title ?? input.name ?? input.titleAr ?? input.titleEn ?? input.slug ?? 'Untitled');

  const record: ControlRecord = {
    ...input,
    id: makeId(resource),
    title,
    status: String(input.status ?? 'draft'),
    createdAt: now(),
    updatedAt: now(),
    deletedAt: null,
  };

  db[resource].unshift(record);

  addAudit(db, {
    action: `Created ${resource}: ${title}`,
    resource,
    recordId: record.id,
  });

  writeDB(db);

  return record;
}

export function updateRecord(
  resource: ResourceName,
  recordId: string,
  input: Record<string, unknown>,
) {
  const db = readDB();

  const index = db[resource].findIndex((record) => record.id === recordId);

  if (index === -1) {
    return null;
  }

  const updated: ControlRecord = {
    ...db[resource][index],
    ...input,
    updatedAt: now(),
  };

  db[resource][index] = updated;

  addAudit(db, {
    action: `Updated ${resource}: ${updated.title}`,
    resource,
    recordId: updated.id,
  });

  writeDB(db);

  return updated;
}

export function softDeleteRecord(resource: ResourceName, recordId: string) {
  const db = readDB();

  const index = db[resource].findIndex((record) => record.id === recordId);

  if (index === -1) {
    return null;
  }

  const deleted: ControlRecord = {
    ...db[resource][index],
    status: 'deleted',
    deletedAt: now(),
    updatedAt: now(),
  };

  db[resource][index] = deleted;

  addAudit(db, {
    action: `Soft deleted ${resource}: ${deleted.title}`,
    resource,
    recordId: deleted.id,
  });

  writeDB(db);

  return deleted;
}

export function dashboardSummary() {
  seedDB();

  const db = readDB();

  const counts = Object.fromEntries(
    resources.map((resource) => [
      resource,
      db[resource].filter((record) => !record.deletedAt).length,
    ]),
  );

  return {
    counts,
    recentAudits: db.auditLogs.slice(0, 10),
  };
}