import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import type { JwtPayload } from '../auth/jwt.strategy';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ErpContextService {
  constructor(private readonly prisma: PrismaService) {}

  async requireTenant(user: JwtPayload) {
    if (!user.tenantId) {
      throw new BadRequestException('المستخدم غير مرتبط بمستأجر');
    }
    return user.tenantId;
  }

  async requireCompany(user: JwtPayload) {
    const tenantId = await this.requireTenant(user);
    const company = await this.prisma.erpCompany.findFirst({
      where: { tenantId, status: 'active', deletedAt: null },
      orderBy: { createdAt: 'asc' },
    });
    if (!company) {
      throw new NotFoundException('لا توجد شركة ERP — شغّل seed ERP');
    }
    return company;
  }

  nextRef(prefix: string) {
    const stamp = Date.now().toString(36).toUpperCase();
    return `${prefix}-${stamp}`;
  }
}
