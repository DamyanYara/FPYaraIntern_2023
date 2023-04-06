import { Module } from '@nestjs/common';
import { productProviders } from './product.providers';
import { ProductService } from './product.service';

@Module({
  providers: [ProductService, ...productProviders],
  exports: [ProductService],
})
export class ProductModule {}
