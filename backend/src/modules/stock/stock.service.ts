import { Injectable, Inject } from '@nestjs/common';
import { StocktDto } from './dto/stock.dto';
import { Stock } from './stock.entity';
import { STOCK_REPOSITORY } from 'src/core/constants';
import { ProductService } from '../product/product.service';

@Injectable()
export class StockService {
  constructor(
    @Inject(STOCK_REPOSITORY) private readonly stockRepository: typeof Stock,
  ) {}
  async create(stock: StocktDto): Promise<Stock> {
    return await this.stockRepository.create<Stock>(stock);
  }
  /*
  async findAll(check: StocktDto): Promise<Stock[]> {
    return await this.stockRepository.findAll();
  }
  **/
}
