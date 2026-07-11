import fs from 'node:fs';
import path from 'node:path';

const file = path.join(process.cwd(), 'apps', 'api', 'src', 'erp', 'erp-purchases.controller.ts');

let code = fs.readFileSync(file, 'utf8');

code = code.replace(
  `include: {
        payable: true,
      },`,
  `include: {
        payable: true,
        lines: { select: { id: true } },
      },`,
);

code = code.replace(
  `    await this.prisma.erpPurchaseLine.deleteMany({
      where: {
        purchaseDocId: doc.id,
      },
    });`,
  `    const lineIds = doc.lines.map((line: { id: string }) => line.id);

    if (lineIds.length > 0) {
      await this.prisma.erpPurchaseLine.deleteMany({
        where: {
          id: { in: lineIds },
        },
      });
    }`,
);

fs.writeFileSync(file, code, 'utf8');

console.log('DONE: purchase document delete now removes lines by line ids');