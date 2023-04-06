import { Module } from '@nestjs/common';
import { warehouseProviders } from './warehouse.providers';
import { WarehouseService } from './warehouse.service';

@Module({
  providers: [WarehouseService, ...warehouseProviders],
  exports: [WarehouseService],
})
export class WarehouseModule {}
