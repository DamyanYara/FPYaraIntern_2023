import { Module } from '@nestjs/common';
import { WarehouseController } from './warehouse.controller';
import { warehouseProviders } from './warehouse.providers';
import { WarehouseService } from './warehouse.service';

@Module({
  providers: [WarehouseService, ...warehouseProviders],
  exports: [WarehouseService],
  controllers: [WarehouseController],
})
export class WarehouseModule {}
