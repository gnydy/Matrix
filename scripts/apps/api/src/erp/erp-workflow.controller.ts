import type { Prisma } from '@allinall/database';
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { updateWorkflowInstanceSchema, workflowInstanceSchema } from '@allinall/erp';
import { CurrentUser } from '../auth/auth.decorators';
import type { JwtPayload } from '../auth/jwt.strategy';
import { PrismaService } from '../prisma/prisma.service';
import { ErpContextService } from './erp-context.service';

@Controller('erp/workflow')
export class ErpWorkflowController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly ctx: ErpContextService,
  ) {}

  @Get('instances')
  async instances(@CurrentUser() user: JwtPayload) {
    const company = await this.ctx.requireCompany(user);
    const data = await this.prisma.erpWorkflowInstance.findMany({ where: { companyId: company.id }, orderBy: { updatedAt: 'desc' }, take: 200 });
    return { ok: true, data };
  }

  @Post('instances')
  async create(@CurrentUser() user: JwtPayload, @Body() body: unknown) {
    const company = await this.ctx.requireCompany(user);
    const input = workflowInstanceSchema.parse(body);
    const data = await this.prisma.erpWorkflowInstance.create({
      data: { companyId: company.id, ...input, metadata: (input.metadata ?? {}) as Prisma.InputJsonValue },
    });
    return { ok: true, data };
  }

  @Patch('instances/:id')
  async update(@CurrentUser() user: JwtPayload, @Param('id') id: string, @Body() body: unknown) {
    const company = await this.ctx.requireCompany(user);
    const input = updateWorkflowInstanceSchema.parse(body);
    const data = await this.prisma.erpWorkflowInstance.updateMany({
      where: { id, companyId: company.id },
      data: { currentStep: input.currentStep, status: input.status, metadata: input.metadata as Prisma.InputJsonValue | undefined },
    });
    return { ok: true, data };
  }
}
