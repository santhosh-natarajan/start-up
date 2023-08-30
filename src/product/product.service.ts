/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entity/product.entity';
import { Repository } from 'typeorm';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  async createProduct(newProductData: ProductDto) {
    await this.productRepository.save(newProductData);
  }

  async find(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async findOne(id: number): Promise<Product> {
    return await this.productRepository.findOne({ where: { id } });
  }

  async update(
    productId: number,
    updatedProductDto: ProductDto,
  ): Promise<Product> {
    await this.productRepository.update(productId, updatedProductDto);
    return this.productRepository.findOne({ where: { id: productId } });
  }

  async remove(productId: number) {
    return await this.productRepository.softDelete(productId);
  }
}
