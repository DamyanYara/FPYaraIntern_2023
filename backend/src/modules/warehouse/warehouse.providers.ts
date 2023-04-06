import { Warehouse } from './warehouse.entity';
import { WAREHOUSE_REPOSITORY } from 'src/core/constants';

export const warehouseProviders = [
  {
    provide: WAREHOUSE_REPOSITORY,
    useValue: Warehouse,
  },
];
