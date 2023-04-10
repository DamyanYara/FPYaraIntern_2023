import { Injectable, Inject } from '@nestjs/common';
import { Warehouse } from './warehouse.entity';
import { WarehouseDto } from './dto/warehouse.dto';
import { WAREHOUSE_REPOSITORY } from 'src/core/constants';
import { User } from '../users/user.entity';

@Injectable()
export class WarehouseService {
  constructor(
    @Inject(WAREHOUSE_REPOSITORY)
    private readonly warehouseRepository: typeof Warehouse,
  ) {}

  async create(warehouse: WarehouseDto, userId): Promise<Warehouse> {
    return await this.warehouseRepository.create<Warehouse>({
      ...warehouse,
      userId,
    });
  }
  async findAll(userId: number): Promise<Warehouse[]> {
    return await this.warehouseRepository.findAll({
      where: { userId },
    });
  }

  async delete(id, userId) {
    return await this.warehouseRepository.destroy({ where: { id, userId } });
  }
  //TODO DELETE And EDDIT
}
