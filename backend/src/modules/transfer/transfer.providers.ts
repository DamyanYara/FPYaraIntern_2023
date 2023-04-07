import { Transfer } from './transfer.entity';
import { TRANSFER_REPOSITORY } from 'src/core/constants';

export const transferProviders = [
  {
    provide: TRANSFER_REPOSITORY,
    useValue: Transfer,
  },
];
