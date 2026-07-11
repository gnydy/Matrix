import { randomUUID } from 'node:crypto';
import { prisma } from '@allinall/database';
import { getResourceDefinition, type FieldDefinition } from './resource-definitions';

export function getDelegate(resource: string): { definition: NonNullable<ReturnType<typeof getResourceDefinition>>; delegate: any } | null {
  const definition = getResourceDefinition(resource);
  if (!definition) return null;
  const delegate = (prisma as unknown as Record<string, any>)[definition.model];
  if (!delegate) return null;
  return { definition, delegate };
}

function parseField(field: FieldDefinition, value: unknown) {
  if (value === '' || value === undefined) return null;
  if (field.type === 'number') {
    const numberValue = Number(value);
    if (!Number.isFinite(numberValue)) throw new Error(`${field.label}: قيمة رقمية غير صحيحة`);
    return Math.trunc(numberValue);
  }
  if (field.type === 'money') {
    const numberValue = Number(value);
    if (!Number.isFinite(numberValue)) throw new Error(`${field.label}: قيمة مالية غير صحيحة`);
    return numberValue.toFixed(2);
  }
  if (field.type === 'boolean') return value === true || value === 'true' || value === 1 || value === '1';
  if (field.type === 'date' || field.type === 'datetime') {
    const date = new Date(String(value));
    if (Number.isNaN(date.getTime())) throw new Error(`${field.label}: تاريخ غير صحيح`);
    return date;
  }
  if (field.type === 'json') {
    if (typeof value === 'object') return value;
    try { return JSON.parse(String(value)); } catch { throw new Error(`${field.label}: يجب إدخال JSON صحيح`); }
  }
  const text = String(value).trim();
  if (field.type === 'select' && field.options && !field.options.some((option) => option.value === text)) throw new Error(`${field.label}: اختيار غير مسموح`);
  if (field.type === 'email' && text && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) throw new Error(`${field.label}: بريد غير صحيح`);
  return text.slice(0, field.type === 'textarea' ? 20_000 : 2_000);
}

export function sanitizePayload(resource: string, body: Record<string, unknown>, partial = false) {
  const definition = getResourceDefinition(resource);
  if (!definition) throw new Error('Unknown resource');
  const output: Record<string, unknown> = {};
  for (const field of definition.fields) {
    if (field.readOnly || !(field.key in body)) continue;
    const parsed = parseField(field, body[field.key]);
    if (!partial && field.required && (parsed === null || parsed === '')) throw new Error(`${field.label}: مطلوب`);
    output[field.key] = parsed;
  }
  if (!partial) {
    for (const field of definition.fields) {
      if (field.required && !(field.key in output)) throw new Error(`${field.label}: مطلوب`);
    }
  }
  if (definition.codeField && !partial) {
    const stamp = new Date().toISOString().slice(0, 10).replaceAll('-', '');
    output[definition.codeField] = `MX-${definition.codePrefix}-${stamp}-${randomUUID().slice(0, 6).toUpperCase()}`;
  }
  return output;
}

export function buildSearchWhere(resource: string, search: string, includeDeleted: boolean) {
  const definition = getResourceDefinition(resource);
  if (!definition) return {};
  const where: Record<string, unknown> = {};
  if (definition.softDelete && !includeDeleted) where.deletedAt = null;
  if (search) where.OR = definition.searchable.map((key) => ({ [key]: { contains: search.slice(0, 100), mode: 'insensitive' } }));
  return where;
}

export async function listOptions(resource: string) {
  if (resource === 'users') {
    const users = await prisma.matrixAdminUser.findMany({ where: { deletedAt: null, status: 'active' }, select: { id: true, email: true, name: true }, take: 500, orderBy: { updatedAt: 'desc' } });
    return users.map((item) => ({ value: item.id, label: `${item.name} — ${item.email}` }));
  }
  const target = getDelegate(resource);
  if (!target) return [];
  const selectByResource: Record<string, Record<string, true>> = {
    customers: { id:true, customerCode:true, name:true }, leads:{id:true,leadNumber:true,name:true}, projects:{id:true,projectNumber:true,name:true}, quotes:{id:true,quoteNumber:true,title:true}, payments:{id:true,reference:true}, users:{id:true,email:true,name:true},
  };
  const select = selectByResource[resource] || { id:true };
  const items = await target.delegate.findMany({ where: target.definition.softDelete ? { deletedAt:null } : undefined, select, take: 500, orderBy: { updatedAt:'desc' } }).catch(async () => target.delegate.findMany({ select, take:500 }));
  return items.map((item: any) => ({ value:item.id, label:item.name || item.title || item.customerCode || item.leadNumber || item.projectNumber || item.quoteNumber || item.reference || item.email || item.id }));
}
