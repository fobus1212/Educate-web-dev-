import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CartEntity } from './entities/cart.entity';
import { ProductEntity } from '../product/entities/product.entity'; 

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartEntity)
    private readonly cartRepository: Repository<CartEntity>,
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async addToCart(productId: number, quantity: number, userId: number) { 
}
  async getUserCart(userId: number) {
}

  async updateCartItemQuantity(cartItemId: number, quantity: number, userId: number) {
    
  }

  async removeFromCart(cartItemId: number) {
    
  }
}

