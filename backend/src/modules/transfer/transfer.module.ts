import { Module } from '@nestjs/common';
import { ProductModule } from '../product/product.module';
import { TransferController } from './transfer.controller';
import { transferProviders } from './transfer.providers';
import { TransferService } from './transfer.service';

@Module({
  imports: [ProductModule],
  providers: [TransferService, ...transferProviders],
  exports: [TransferService],
  controllers: [TransferController],
})
export class TransferModule {}
