import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;

  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    if (item.name === 'node_modules' || item.name === '.next' || item.name === 'dist') continue;

    const full = path.join(dir, item.name);

    if (item.isDirectory()) {
      walk(full, out);
    } else if (item.name === 'schema.prisma') {
      out.push(full);
    }
  }

  return out;
}

const schemas = walk(root);

let foundField = '';

for (const schemaPath of schemas) {
  const schema = fs.readFileSync(schemaPath, 'utf8');
  const match = schema.match(/model\s+ErpPurchaseLine\s+\{[\s\S]*?\n\}/);

  if (!match) continue;

  const block = match[0];
  const relationLine = block
    .split(/\r?\n/)
    .find((line) => line.includes('ErpPurchaseDocument') && line.includes('fields:'));

  if (!relationLine) {
    console.log('ErpPurchaseLine model found, but relation field not found in:', schemaPath);
    console.log(block);
    continue;
  }

  const fieldsMatch = relationLine.match(/fields:\s*\[([^\]]+)\]/);

  if (!fieldsMatch) {
    console.log('Relation line found but fields[] not parsed:', relationLine);
    continue;
  }

  foundField = fieldsMatch[1].split(',')[0].trim();
  console.log('Detected purchase line document field:', foundField);
  break;
}

if (!foundField) {
  throw new Error('لم أستطع معرفة اسم حقل ربط ErpPurchaseLine بفاتورة الشراء. أرسل لي model ErpPurchaseLine من schema.prisma');
}

const controllerPath = path.join(root, 'apps', 'api', 'src', 'erp', 'erp-purchases.controller.ts');

let controller = fs.readFileSync(controllerPath, 'utf8');

controller = controller.replaceAll('purchaseDocId: doc.id', `${foundField}: doc.id`);
controller = controller.replaceAll('purchaseDocId: document.id', `${foundField}: document.id`);

fs.writeFileSync(controllerPath, controller, 'utf8');

console.log('DONE: replaced purchaseDocId with', foundField);