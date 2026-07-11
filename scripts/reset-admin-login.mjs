import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { createRequire } from 'node:module';

process.env.DATABASE_URL ||= 'file:E:/Matrix/data/matrix.db';

const apiRequire = createRequire(path.join(process.cwd(), 'apps', 'api', 'package.json'));

const EMAIL = 'admin@matrix.local';
const PASSWORD = 'Admin@2030';

const { PrismaClient, Prisma } = apiRequire('@prisma/client');

const prisma = new PrismaClient();

function delegateName(modelName) {
  return modelName.charAt(0).toLowerCase() + modelName.slice(1);
}

function enumChoice(enumName, preferred) {
  const item = Prisma.dmmf.datamodel.enums.find((e) => e.name === enumName);
  const values = item?.values?.map((v) => v.name) ?? [];

  for (const wanted of preferred) {
    const found = values.find((v) => v.toLowerCase() === wanted.toLowerCase());
    if (found) return found;
  }

  return values[0];
}

async function makeHash(password) {
  const authDir = path.join(process.cwd(), 'apps', 'api', 'src', 'auth');
  let authText = '';

  if (fs.existsSync(authDir)) {
    for (const file of fs.readdirSync(authDir)) {
      if (file.endsWith('.ts')) {
        authText += '\n' + fs.readFileSync(path.join(authDir, file), 'utf8');
      }
    }
  }

  if (/argon2/i.test(authText)) {
    try {
      const argon2 = apiRequire('argon2');
      return await argon2.hash(password);
    } catch {}
  }

  try {
    const bcryptjs = apiRequire('bcryptjs');
    return await bcryptjs.hash(password, 10);
  } catch {}

  try {
    const bcrypt = apiRequire('bcrypt');
    return await bcrypt.hash(password, 10);
  } catch {}

  try {
    const bcrypt = apiRequire('@node-rs/bcrypt');
    return await bcrypt.hash(password, 10);
  } catch {}

  throw new Error('لم أجد مكتبة تشفير باسورد. أرسل package.json الخاص بالـ API.');
}

const models = Prisma.dmmf.datamodel.models;

const userModel = models.find((model) => {
  const names = model.fields.map((field) => field.name);
  const hasEmail = names.includes('email');
  const hasPassword =
    names.includes('passwordHash') ||
    names.includes('hashedPassword') ||
    names.includes('password');

  return hasEmail && hasPassword;
});

if (!userModel) {
  throw new Error('لم أجد موديل المستخدم الذي يحتوي email و passwordHash/password.');
}

const passwordField =
  userModel.fields.find((field) => field.name === 'passwordHash')?.name ||
  userModel.fields.find((field) => field.name === 'hashedPassword')?.name ||
  userModel.fields.find((field) => field.name === 'password')?.name;

const userDelegate = prisma[delegateName(userModel.name)];

if (!userDelegate) {
  throw new Error('لم أستطع الوصول إلى Prisma delegate للمستخدم: ' + userModel.name);
}

async function ensureCompanyLikeId(fieldName) {
  const companyModel =
    models.find((m) => m.name.toLowerCase() === 'company') ||
    models.find((m) => m.name.toLowerCase().includes('company')) ||
    models.find((m) => m.name.toLowerCase().includes('tenant')) ||
    models.find((m) => m.name.toLowerCase().includes('organization'));

  if (!companyModel) {
    throw new Error('المستخدم يحتاج ' + fieldName + ' لكن لا يوجد Company/Tenant model واضح.');
  }

  const delegate = prisma[delegateName(companyModel.name)];
  const existing = await delegate.findFirst();

  if (existing?.id) return existing.id;

  const data = {};

  for (const field of companyModel.fields) {
    if (field.kind !== 'scalar') continue;
    if (!field.isRequired || field.hasDefaultValue) continue;

    if (field.name === 'id') data[field.name] = crypto.randomUUID();
    else if (field.name.toLowerCase().includes('name')) data[field.name] = 'Matrix';
    else if (field.name.toLowerCase().includes('slug')) data[field.name] = 'matrix';
    else if (field.name.toLowerCase().includes('code')) data[field.name] = 'MATRIX';
    else if (field.name.toLowerCase().includes('email')) data[field.name] = 'admin@matrix.local';
    else if (field.type === 'Boolean') data[field.name] = true;
    else if (field.type === 'DateTime') data[field.name] = new Date();
    else if (field.type === 'Int' || field.type === 'Float' || field.type === 'Decimal') data[field.name] = 0;
    else if (field.kind === 'enum') data[field.name] = enumChoice(field.type, ['active', 'ACTIVE']);
    else data[field.name] = field.name.toLowerCase().includes('status') ? 'active' : 'matrix';
  }

  const created = await delegate.create({ data });

  return created.id;
}

function setSafeRequiredScalar(data, field) {
  if (field.name in data) return;

  if (field.name === 'id') data[field.name] = crypto.randomUUID();
  else if (field.name === 'email') data[field.name] = EMAIL;
  else if (field.name === passwordField) data[field.name] = data[passwordField];
  else if (field.name.toLowerCase().includes('name')) data[field.name] = 'Admin';
  else if (field.name.toLowerCase().includes('phone')) data[field.name] = null;
  else if (field.name.toLowerCase().includes('status')) {
    data[field.name] = field.kind === 'enum'
      ? enumChoice(field.type, ['active', 'ACTIVE', 'enabled', 'ENABLED'])
      : 'active';
  } else if (field.name.toLowerCase().includes('role')) {
    data[field.name] = field.kind === 'enum'
      ? enumChoice(field.type, ['owner', 'OWNER', 'admin', 'ADMIN', 'super_admin', 'SUPER_ADMIN'])
      : 'owner';
  } else if (field.type === 'Boolean') data[field.name] = true;
  else if (field.type === 'DateTime') data[field.name] = new Date();
  else if (field.type === 'Int' || field.type === 'Float' || field.type === 'Decimal') data[field.name] = 0;
  else if (field.kind === 'enum') data[field.name] = enumChoice(field.type, ['active', 'ACTIVE', 'owner', 'OWNER', 'admin', 'ADMIN']);
  else data[field.name] = 'system';
}

try {
  const hash = await makeHash(PASSWORD);

  const existing = await userDelegate.findFirst({
    where: { email: EMAIL },
  });

  if (existing) {
    const data = {
      [passwordField]: hash,
    };

    if ('isActive' in existing) data.isActive = true;
    if ('status' in existing && !existing.status) data.status = 'active';

    await userDelegate.update({
      where: { id: existing.id },
      data,
    });

    console.log('DONE: admin password reset');
    console.log('email:', EMAIL);
    console.log('password:', PASSWORD);
  } else {
    const data = {
      email: EMAIL,
      [passwordField]: hash,
    };

    for (const field of userModel.fields) {
      if (field.kind !== 'scalar') continue;

      if (
        field.name.toLowerCase().endsWith('companyid') ||
        field.name.toLowerCase().endsWith('tenantid') ||
        field.name.toLowerCase().endsWith('organizationid')
      ) {
        data[field.name] = await ensureCompanyLikeId(field.name);
      }
    }

    for (const field of userModel.fields) {
      if (field.kind !== 'scalar') continue;
      if (!field.isRequired || field.hasDefaultValue) continue;
      setSafeRequiredScalar(data, field);
    }

    await userDelegate.create({ data });

    console.log('DONE: admin user created');
    console.log('email:', EMAIL);
    console.log('password:', PASSWORD);
  }
} finally {
  await prisma.$disconnect();
}