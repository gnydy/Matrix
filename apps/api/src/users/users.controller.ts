import { Controller, Get } from '@nestjs/common';
import { Permissions } from '../auth/auth.guard';
import { PrismaService } from '../prisma/prisma.service';

@Controller('users')
export class UsersController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  @Permissions('users:read')
  async list() {
    const users = await this.prisma.user.findMany({
      where: { deletedAt: null },
      orderBy: { createdAt: 'asc' },
      select: {
        id: true,
        email: true,
        name: true,
        status: true,
        tenantId: true,
        createdAt: true,
        roles: { include: { role: { select: { slug: true, name: true } } } },
      },
    });
    return { ok: true, data: users };
  }
}
