import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartItemDto } from './dto/create-cart-item.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post(':productId')
  addToCart(@Param('productId') productId: number, @Body() createCartItemDto: CreateCartItemDto) {
    return this.cartService.addToCart(productId, createCartItemDto.quantity, createCartItemDto.userId);
  }

  @Get(':userId')
  getUserCart(@Param('userId') userId: number) {
    return this.cartService.getUserCart(userId);
  }

  @Patch(':cartItemId')
  updateCartItem(@Param('cartItemId') cartItemId: number, @Body() updateCartItemDto: UpdateCartItemDto) {
    return this.cartService.updateCartItemQuantity(cartItemId, updateCartItemDto.quantity, updateCartItemDto.userId);
  }

  @Delete(':cartItemId')
  removeFromCart(@Param('cartItemId') cartItemId: number) {
    return this.cartService.removeFromCart(cartItemId);
  }
}
