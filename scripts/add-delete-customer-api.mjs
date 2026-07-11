import fs from 'node:fs';
import path from 'node:path';

const file = path.join(process.cwd(), 'apps', 'api', 'src', 'erp', 'erp-sales.controller.ts');

let code = fs.readFileSync(file, 'utf8');

code = code.replace(
  "import { BadRequestException, Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';",
  "import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';",
);

if (!code.includes("@Delete('parties/:id')")) {
  const marker = `  @Post('documents')
  async createDocument`;

  const deleteMethod = `  @Delete('parties/:id')
  async deleteParty(@CurrentUser() user: JwtPayload, @Param('id') id: string) {
    const company = await this.ctx.requireCompany(user);

    const party = await this.prisma.erpParty.findFirst({
      where: {
        id,
        companyId: company.id,
        deletedAt: null,
        type: { in: ['customer', 'both'] },
      },
    });

    if (!party) {
      throw new BadRequestException('العميل غير موجود');
    }

    const [salesDocuments, receivables] = await Promise.all([
      this.prisma.erpSalesDocument.count({
        where: { companyId: company.id, partyId: id },
      }),
      this.prisma.erpReceivable.count({
        where: { companyId: company.id, partyId: id },
      }),
    ]);

    if (salesDocuments > 0 || receivables > 0) {
      throw new BadRequestException('لا يمكن حذف عميل عليه فواتير أو مديونيات');
    }

    if (party.type === 'both') {
      const data = await this.prisma.erpParty.update({
        where: { id: party.id },
        data: { type: 'supplier' },
      });

      return { ok: true, data };
    }

    const data = await this.prisma.erpParty.update({
      where: { id: party.id },
      data: { deletedAt: new Date() },
    });

    return { ok: true, data };
  }

`;

  code = code.replace(marker, deleteMethod + marker);
}

fs.writeFileSync(file, code, 'utf8');

console.log('DONE: DELETE /erp/sales/parties/:id added');
