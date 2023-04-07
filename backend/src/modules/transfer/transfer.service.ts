import { Inject, Injectable } from '@nestjs/common';
import { Transfer } from './transfer.entity';
import { TransfertDto } from './dto/transfer.dto';
import { TRANSFER_REPOSITORY } from 'src/core/constants';

@Injectable()
export class TransferService {
  constructor(
    @Inject(TRANSFER_REPOSITORY)
    private readonly transferRepository: typeof Transfer,
  ) {}

  async create(transfer: TransfertDto): Promise<Transfer> {
    return await this.transferRepository.create<Transfer>(transfer);
  }
}
