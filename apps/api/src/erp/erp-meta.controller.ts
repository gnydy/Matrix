import { Controller, Get, Param, Query } from '@nestjs/common';
import { ERP_MODULES } from '@allinall/erp';
import type { ErpOk } from './erp-response';
import { PrismaService } from '../prisma/prisma.service';

@Controller('erp')
export class ErpMetaController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('modules')
  modules(): ErpOk {
    return { ok: true, data: ERP_MODULES };
  }

  @Get('faq/:module')
  async faq(@Param('module') module: string, @Query('locale') locale = 'ar'): Promise<ErpOk> {
    const items = await this.prisma.erpModuleFaq.findMany({
      where: { module: module as never, locale, isActive: true },
      orderBy: { sortOrder: 'asc' },
    });
    return { ok: true, data: items };
  }

  @Get('workflow/steps')
  async workflowSteps(): Promise<ErpOk> {
    const steps = await this.prisma.erpWorkflowStep.findMany({
      where: { isActive: true },
      orderBy: { sortOrder: 'asc' },
    });
    return { ok: true, data: steps };
  }
}
