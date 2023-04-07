import { Controller, Body, Post } from '@nestjs/common';
import { WarehouseDto } from './dto/warehouse.dto';
import { WarehouseService } from './warehouse.service';

@Controller('warehouse')
export class WarehouseController {
  constructor(private warehouseService: WarehouseService) {}

  @Post('create')
  async create(@Body() warehouse: WarehouseDto) {
    return await this.warehouseService.create(warehouse);
  }
}
