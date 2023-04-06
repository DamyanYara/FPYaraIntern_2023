import { Stock } from './stock.entity';
import { STOCK_REPOSITORY } from 'src/core/constants';

export const stockProviders = [
  {
    provide: STOCK_REPOSITORY,
    useValue: Stock,
  },
];
