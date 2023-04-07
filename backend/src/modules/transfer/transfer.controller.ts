import { Controller, Body, Post } from '@nestjs/common';
import { TransfertDto } from './dto/transfer.dto';
import { TransferService } from './transfer.service';

@Controller('transfer')
export class TransferController {
  constructor(private transferService: TransferService) {}

  @Post('create')
  async create(@Body() transfer: TransfertDto) {
    return await this.transferService.create(transfer);
  }
}
