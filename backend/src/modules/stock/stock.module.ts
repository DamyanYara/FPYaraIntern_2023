import { Module } from '@nestjs/common';
import { StockService } from './stock.service';
import { stockProviders } from './stock.providers';

@Module({
  providers: [StockService, ...stockProviders],
  exports: [StockService],
})
export class StockModule {}
