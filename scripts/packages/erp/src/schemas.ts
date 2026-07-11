import { z } from 'zod';

export const erpModuleKeySchema = z.enum([
  'core',
  'inventory',
  'sales',
  'purchases',
  'accounting',
  'hr',
  'debts',
  'workflow',
]);

export const createBranchSchema = z.object({
  name: z.string().trim().min(1).max(200),
  code: z.string().trim().max(32).optional(),
  address: z.string().trim().max(500).optional(),
});

export const createDepartmentSchema = z.object({
  branchId: z.string().min(1),
  name: z.string().trim().min(1).max(200),
});

export const createFiscalYearSchema = z.object({
  name: z.string().trim().min(1).max(32),
  startsOn: z.coerce.date(),
  endsOn: z.coerce.date(),
});

export const createProductSchema = z.object({
  sku: z.string().trim().min(1).max(64),
  name: z.string().trim().min(1).max(200),
  unit: z.string().trim().max(32).default('pcs'),
  type: z.enum(['stock', 'service']).default('stock'),
  costPrice: z.coerce.number().min(0).default(0),
  salePrice: z.coerce.number().min(0).default(0),
  minStock: z.coerce.number().min(0).default(0),
  warehouseId: z.string().optional(),
  initialStock: z.coerce.number().min(0).default(0),
});

export const createWarehouseSchema = z.object({
  name: z.string().trim().min(1).max(200),
  code: z.string().trim().max(32).optional(),
  branchId: z.string().optional(),
});

export const stockMovementSchema = z.object({
  productId: z.string().min(1),
  warehouseId: z.string().min(1),
  type: z.enum(['in', 'out', 'adjust']),
  quantity: z.coerce.number().positive(),
  note: z.string().max(1000).optional(),
});

export const createStockAuditSchema = z.object({
  warehouseId: z.string().min(1),
  note: z.string().max(2000).optional(),
});

export const stockAuditLineSchema = z.object({
  productId: z.string().min(1),
  countedQty: z.coerce.number().min(0),
  note: z.string().max(500).optional(),
});

export const updateStockAuditLinesSchema = z.object({
  lines: z.array(stockAuditLineSchema).min(1),
});

export const createPartySchema = z.object({
  type: z.enum(['customer', 'supplier', 'both']).default('customer'),
  name: z.string().trim().min(1).max(200),
  phone: z.string().max(50).optional(),
  email: z.string().email().max(255).optional().or(z.literal('')),
  taxId: z.string().max(64).optional(),
  creditLimit: z.coerce.number().min(0).default(0),
});

const salesLineSchema = z.object({
  productId: z.string().optional(),
  description: z.string().trim().min(1).max(500),
  quantity: z.coerce.number().positive(),
  unitPrice: z.coerce.number().min(0),
});

export const createSalesDocSchema = z.object({
  partyId: z.string().min(1),
  type: z.enum(['quote', 'order', 'invoice']).default('invoice'),
  ref: z.string().trim().min(1).max(64).optional(),
  note: z.string().max(2000).optional(),
  lines: z.array(salesLineSchema).min(1),
});

export const createPurchaseDocSchema = z.object({
  partyId: z.string().min(1),
  type: z.enum(['order', 'invoice']).default('invoice'),
  ref: z.string().trim().min(1).max(64).optional(),
  note: z.string().max(2000).optional(),
  lines: z.array(salesLineSchema).min(1),
});

export const postDocumentSchema = z.object({
  warehouseId: z.string().optional(),
});

export const createAccountSchema = z.object({
  code: z.string().trim().min(1).max(64),
  name: z.string().trim().min(1).max(200),
  type: z.enum(['asset', 'liability', 'equity', 'revenue', 'expense']),
  parentId: z.string().optional(),
});

export const createJournalEntrySchema = z.object({
  ref: z.string().trim().min(1).max(64).optional(),
  memo: z.string().max(2000).optional(),
  lines: z
    .array(
      z.object({
        accountId: z.string().min(1),
        debit: z.coerce.number().min(0).default(0),
        credit: z.coerce.number().min(0).default(0),
        memo: z.string().max(500).optional(),
      }),
    )
    .min(2),
});

export const createEmployeeSchema = z.object({
  employeeNo: z.string().trim().min(1).max(64),
  name: z.string().trim().min(1).max(200),
  email: z.string().email().optional().or(z.literal('')),
  phone: z.string().max(50).optional(),
  jobTitle: z.string().max(100).optional(),
  departmentId: z.string().optional(),
  hireDate: z.coerce.date().optional(),
});

export const createAttendanceSchema = z.object({
  employeeId: z.string().min(1),
  workDate: z.coerce.date(),
  checkIn: z.coerce.date().optional(),
  checkOut: z.coerce.date().optional(),
  note: z.string().max(500).optional(),
});

export const createLeaveRequestSchema = z.object({
  employeeId: z.string().min(1),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  reason: z.string().max(1000).optional(),
});

export const updateLeaveStatusSchema = z.object({
  status: z.enum(['pending', 'approved', 'rejected', 'cancelled']),
});

export const payDebtSchema = z.object({
  amount: z.coerce.number().positive(),
  note: z.string().max(500).optional(),
});

export const workflowInstanceSchema = z.object({
  module: erpModuleKeySchema,
  entityType: z.string().trim().min(1).max(100),
  entityId: z.string().trim().min(1).max(200),
  currentStep: z.string().trim().min(1).max(100),
  status: z.string().trim().max(100).default('active'),
  metadata: z.record(z.unknown()).optional(),
});

export const updateWorkflowInstanceSchema = z.object({
  currentStep: z.string().trim().min(1).max(100).optional(),
  status: z.string().trim().max(100).optional(),
  metadata: z.record(z.unknown()).optional(),
});

export type CreateProductInput = z.infer<typeof createProductSchema>;
export type CreateStockAuditInput = z.infer<typeof createStockAuditSchema>;
