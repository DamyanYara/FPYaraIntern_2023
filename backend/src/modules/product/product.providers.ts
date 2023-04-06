import { Product } from './product.entity';
import { PRODUCT_REPOSITORY } from 'src/core/constants';

export const productProviders = [
  {
    provide: PRODUCT_REPOSITORY,
    useValue: Product,
  },
];
