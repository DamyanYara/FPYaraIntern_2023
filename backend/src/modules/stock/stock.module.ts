import { Module } from '@nestjs/common';
import { StockService } from './stock.service';
import { stockProviders } from './stock.providers';
import { StockController } from './stock.controller';

@Module({
  providers: [StockService, ...stockProviders],
  exports: [StockService],
  controllers: [StockController],
})
export class StockModule {}
