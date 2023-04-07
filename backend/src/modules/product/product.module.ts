import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { productProviders } from './product.providers';
import { ProductService } from './product.service';

@Module({
  providers: [ProductService, ...productProviders],
  exports: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
