import { Injectable, Inject } from '@nestjs/common';
import { Warehouse } from './warehouse.entity';
import { WarehouseDto } from './dto/warehouse.dto';
import { WAREHOUSE_REPOSITORY } from 'src/core/constants';

@Injectable()
export class WarehouseService {
  constructor(
    @Inject(WAREHOUSE_REPOSITORY)
    private readonly warehouseRepository: typeof Warehouse,
  ) {}

  async create(warehouse: WarehouseDto): Promise<Warehouse> {
    return await this.warehouseRepository.create<Warehouse>(warehouse);
  }
  async findById(id: number): Promise<Warehouse> {
    return await this.warehouseRepository.findOne<Warehouse>({ where: { id } });
  }
  //TODO remove
}
