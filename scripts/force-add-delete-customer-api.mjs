import fs from 'node:fs';
import path from 'node:path';

const file = path.join(process.cwd(), 'apps', 'api', 'src', 'erp', 'erp-sales.controller.ts');

let code = fs.readFileSync(file, 'utf8');

if (!code.includes(' Delete,')) {
  code = code.replace(
    "import { BadRequestException, Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';",
    "import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';",
  );
}

if (!code.includes("@Delete('parties/:id')")) {
  const insertBefore = code.indexOf("  @Post('documents')");

  if (insertBefore === -1) {
    throw new Error("لم أجد @Post('documents') داخل erp-sales.controller.ts");
  }

  const deleteMethod = `
  @Delete('parties/:id')
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
        where: {
          companyId: company.id,
          partyId: id,
        },
      }),
      this.prisma.erpReceivable.count({
        where: {
          companyId: company.id,
          partyId: id,
        },
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

  code = code.slice(0, insertBefore) + deleteMethod + code.slice(insertBefore);
}

fs.writeFileSync(file, code, 'utf8');

console.log('DONE: forced DELETE /erp/sales/parties/:id');
