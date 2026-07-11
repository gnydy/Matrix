import { Module } from '@nestjs/common';
import { ErpContextService } from './erp-context.service';
import { ErpMetaController } from './erp-meta.controller';
import { ErpCoreController } from './erp-core.controller';
import { ErpInventoryController } from './erp-inventory.controller';
import { ErpSalesController } from './erp-sales.controller';
import { ErpPurchasesController } from './erp-purchases.controller';
import { ErpAccountingController } from './erp-accounting.controller';
import { ErpHrController } from './erp-hr.controller';
import { ErpDebtsController } from './erp-debts.controller';
import { ErpWorkflowController } from './erp-workflow.controller';
import { ErpReportsController } from './erp-reports.controller';

@Module({
  controllers: [
    ErpMetaController,
    ErpCoreController,
    ErpInventoryController,
    ErpSalesController,
    ErpPurchasesController,
    ErpAccountingController,
    ErpHrController,
    ErpDebtsController,
    ErpWorkflowController,
    ErpReportsController,
  ],
  providers: [ErpContextService],
})
export class ErpModule {}
