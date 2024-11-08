import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>
  ){}


  create(createProductDto: CreateProductDto) {
    const product = this.productRepository.save(createProductDto);
    return product
  }

  findAll() {
    return this.productRepository.find({
      relations: {
        provider: true
      }
    });
  }

  findOne(id: string) {
    const product = this.productRepository.findOne({
      where: {productId: id},
      relations: {
        provider: true
      }
    })
    if(!product) throw new NotFoundException();
    //const product = this.products.filter((product) => product.productId ==id) [0];
    return product;
  }

  findByProvider(Id: string){
    return this.productRepository.findBy({
      provider: {
        providerId: Id
      }
    })
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const productU = await this.productRepository.preload({
      productId: id,
      ...updateProductDto
    })
    if (!productU) throw new NotFoundException()
    this.productRepository.save(productU);
    return productU;
    
  }

  remove(id: string) {
    this.findOne(id)
    this.productRepository.delete({
      productId: id
    })
    return {
      mesage: `Objeto con id ${id} eliminado correctamente`
    }
  }
}
