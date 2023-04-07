import { Controller, Body, Post } from '@nestjs/common';
import { StockService } from './stock.service';
import { StocktDto } from './dto/stock.dto';

@Controller('stock')
export class StockController {
  constructor(private stockService: StockService) {}

  @Post('create')
  async createStock(@Body() stock: StocktDto) {
    return await this.stockService.create(stock);
  }
}
