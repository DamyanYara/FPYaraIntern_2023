import { Injectable, Inject } from '@nestjs/common';
import { Product } from './product.entity';
import { ProductDto } from './dto/product.dto';
import { PRODUCT_REPOSITORY } from 'src/core/constants';

@Injectable()
export class ProductService {
  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private readonly productRepository: typeof Product,
  ) {}
  // Creating the Product Table in DB
  async create(product: ProductDto): Promise<Product> {
    return await this.productRepository.create<Product>(product);
  }
  // Find Product By ID
  async findOneById(id: number): Promise<Product> {
    return await this.productRepository.findOne<Product>({ where: { id } });
  }
}
