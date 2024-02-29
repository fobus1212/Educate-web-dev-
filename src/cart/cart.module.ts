import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { CartEntity } from './entities/cart.entity';
import { ProductEntity } from '../product/entities/product.entity'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([CartEntity, ProductEntity]), 
  ],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}

