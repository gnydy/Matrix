import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email().max(255),
  password: z.string().min(6).max(128),
});

export const createLeadSchema = z.object({
  sessionId: z.string().max(64).nullable().optional(),
  source: z.enum(['request', 'contact', 'calculator', 'whatsapp']).optional(),
  name: z.string().trim().min(1).max(200),
  company: z.string().trim().max(200).nullable().optional(),
  phone: z.string().trim().max(50).nullable().optional(),
  email: z.string().email().max(255).nullable().optional().or(z.literal('')),
  requestType: z.string().max(50).nullable().optional(),
  planId: z.string().max(50).nullable().optional(),
  modules: z.array(z.string().max(50)).max(20).optional(),
  message: z.string().trim().max(5000).nullable().optional(),
});

export const createUserSchema = z.object({
  email: z.string().email().max(255),
  name: z.string().trim().min(1).max(200),
  password: z.string().min(8).max(128),
  roleSlug: z.string().max(50).optional(),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type CreateLeadInputValidated = z.infer<typeof createLeadSchema>;
