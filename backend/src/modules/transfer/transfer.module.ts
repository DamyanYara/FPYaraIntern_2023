import { Module } from '@nestjs/common';
import { TransferController } from './transfer.controller';
import { transferProviders } from './transfer.providers';
import { TransferService } from './transfer.service';

@Module({
  providers: [TransferService, ...transferProviders],
  exports: [TransferService],
  controllers: [TransferController],
})
export class TransferModule {}
