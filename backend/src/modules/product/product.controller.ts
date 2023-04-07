import { Controller, Body, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './dto/product.dto';

@Controller('product')
export class ProductController {
  constructor(private prodService: ProductService) {}

  @Post('create')
  async create(@Body() product: ProductDto) {
    return await this.prodService.create(product);
  }
}
