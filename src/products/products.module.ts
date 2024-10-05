import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { AuthModule } from '../auth/auth.module'; // Ajusta la ruta según tu estructura de proyecto

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    AuthModule, // Importa AuthModule
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}