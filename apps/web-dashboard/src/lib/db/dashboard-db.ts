import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

export type DashboardStatus =
  | 'new'
  | 'active'
  | 'draft'
  | 'published'
  | 'review'
  | 'archived'
  | 'deleted';

export type DashboardEntity =
  | 'lead'
  | 'visitor'
  | 'customer'
  | 'quote'
  | 'project'
  | 'payment'
  | 'service'
  | 'package'
  | 'content'
  | 'user'
  | 'role'
  | 'audit'
  | 'trash'
  | 'command'
  | 'portfolio';

export type BaseRecord = {
  id: string;
  title: string;
  status: DashboardStatus;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
};

export type LeadRecord = BaseRecord & {
  name: string;
  phone: string;
  email?: string;
  source: string;
  message: string;
};

export type VisitorRecord = BaseRecord & {
  path: string;
  source: string;
  visits: number;
};

export type CustomerRecord = BaseRecord & {
  name: string;
  sector: string;
  phone: string;
  email?: string;
};

export type QuoteRecord = BaseRecord & {
  customerName: string;
  amount: number;
  currency: 'EGP' | 'USD';
};

export type ProjectRecord = BaseRecord & {
  customerName: string;
  stage: string;
  progress: number;
};

export type PaymentRecord = BaseRecord & {
  customerName: string;
  projectName: string;
  paid: number;
  remaining: number;
  currency: 'EGP' | 'USD';
};

export type ServiceRecord = BaseRecord & {
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
};

export type PackageRecord = BaseRecord & {
  name: string;
  priceLabelAr: string;
  priceLabelEn: string;
  descriptionAr: string;
  descriptionEn: string;
};

export type ContentRecord = BaseRecord & {
  page: string;
  key: string;
  ar: string;
  en: string;
};

export type UserRecord = BaseRecord & {
  name: string;
  email: string;
  role: string;
};

export type RoleRecord = BaseRecord & {
  name: string;
  permissions: string[];
};

export type AuditRecord = BaseRecord & {
  actor: string;
  action: string;
  entity: DashboardEntity;
  entityId?: string;
};

export type CommandRecord = BaseRecord & {
  command: string;
  allowed: boolean;
  result: string;
};

export type PortfolioRecord = BaseRecord & {
  slug: string;
  titleAr: string;
  titleEn: string;
  client: string;
  categoryAr: string;
  categoryEn: string;
  descriptionAr: string;
  descriptionEn: string;
  projectUrl?: string;
  logoUrl?: string;
  coverUrl?: string;
  technologies: string[];
  featured: boolean;
};

export type DashboardDB = {
  leads: LeadRecord[];
  visitors: VisitorRecord[];
  customers: CustomerRecord[];
  quotes: QuoteRecord[];
  projects: ProjectRecord[];
  payments: PaymentRecord[];
  services: ServiceRecord[];
  packages: PackageRecord[];
  contents: ContentRecord[];
  users: UserRecord[];
  roles: RoleRecord[];
  audits: AuditRecord[];
  commands: CommandRecord[];
  portfolio: PortfolioRecord[];
};

const DB_PATH = join(process.cwd(), 'data', 'dashboard-db.json');

function now() {
  return new Date().toISOString();
}

function id(prefix: string) {
  return `${prefix}_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

const emptyDB: DashboardDB = {
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
  audits: [],
  commands: [],
  portfolio: [],
};

export function ensureDashboardDB() {
  if (!existsSync(DB_PATH)) {
    mkdirSync(dirname(DB_PATH), { recursive: true });
    writeFileSync(DB_PATH, JSON.stringify(emptyDB, null, 2), 'utf8');
  }
}

export function readDashboardDB(): DashboardDB {
  ensureDashboardDB();

  const raw = readFileSync(DB_PATH, 'utf8');
  const parsed = JSON.parse(raw) as Partial<DashboardDB>;

  return {
    ...emptyDB,
    ...parsed,
  };
}

export function writeDashboardDB(db: DashboardDB) {
  mkdirSync(dirname(DB_PATH), { recursive: true });
  writeFileSync(DB_PATH, JSON.stringify(db, null, 2), 'utf8');
}

export function createAudit(
  db: DashboardDB,
  input: {
    actor?: string;
    action: string;
    entity: DashboardEntity;
    entityId?: string;
  },
) {
  const audit: AuditRecord = {
    id: id('audit'),
    title: input.action,
    status: 'published',
    actor: input.actor ?? 'Owner',
    action: input.action,
    entity: input.entity,
    entityId: input.entityId,
    createdAt: now(),
    updatedAt: now(),
    deletedAt: null,
  };

  db.audits.unshift(audit);
}

export function createPortfolioProject(
  input: Omit<PortfolioRecord, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>,
) {
  const db = readDashboardDB();

  const project: PortfolioRecord = {
    ...input,
    id: id('portfolio'),
    createdAt: now(),
    updatedAt: now(),
    deletedAt: null,
  };

  db.portfolio.unshift(project);

  createAudit(db, {
    action: `Created portfolio project: ${project.titleEn}`,
    entity: 'portfolio',
    entityId: project.id,
  });

  writeDashboardDB(db);

  return project;
}

export function updatePortfolioProject(
  projectId: string,
  input: Partial<Omit<PortfolioRecord, 'id' | 'createdAt'>>,
) {
  const db = readDashboardDB();

  const index = db.portfolio.findIndex((item) => item.id === projectId);

  if (index === -1) {
    return null;
  }

  const updated: PortfolioRecord = {
    ...db.portfolio[index],
    ...input,
    updatedAt: now(),
  };

  db.portfolio[index] = updated;

  createAudit(db, {
    action: `Updated portfolio project: ${updated.titleEn}`,
    entity: 'portfolio',
    entityId: updated.id,
  });

  writeDashboardDB(db);

  return updated;
}

export function softDeletePortfolioProject(projectId: string) {
  const db = readDashboardDB();

  const index = db.portfolio.findIndex((item) => item.id === projectId);

  if (index === -1) {
    return null;
  }

  const updated: PortfolioRecord = {
    ...db.portfolio[index],
    status: 'deleted',
    deletedAt: now(),
    updatedAt: now(),
  };

  db.portfolio[index] = updated;

  createAudit(db, {
    action: `Soft deleted portfolio project: ${updated.titleEn}`,
    entity: 'portfolio',
    entityId: updated.id,
  });

  writeDashboardDB(db);

  return updated;
}

export function seedRealDashboardIfEmpty() {
  const db = readDashboardDB();

  if (db.portfolio.length > 0 || db.users.length > 0 || db.roles.length > 0) {
    return db;
  }

  const createdAt = now();

  db.roles.push({
    id: id('role'),
    title: 'Owner',
    name: 'Owner',
    permissions: ['*'],
    status: 'active',
    createdAt,
    updatedAt: createdAt,
    deletedAt: null,
  });

  db.users.push({
    id: id('user'),
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
      id: id('portfolio'),
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
      id: id('portfolio'),
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

  createAudit(db, {
    action: 'Seeded real dashboard database',
    entity: 'audit',
  });

  writeDashboardDB(db);

  return db;
}