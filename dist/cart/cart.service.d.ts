import { Repository } from 'typeorm';
import { CartEntity } from './entities/cart.entity';
import { ProductEntity } from '../product/entities/product.entity';
export declare class CartService {
    private readonly cartRepository;
    private readonly productRepository;
    constructor(cartRepository: Repository<CartEntity>, productRepository: Repository<ProductEntity>);
    addToCart(productId: number, quantity: number, userId: number): Promise<void>;
    getUserCart(userId: number): Promise<void>;
    updateCartItemQuantity(cartItemId: number, quantity: number, userId: number): Promise<void>;
    removeFromCart(cartItemId: number): Promise<void>;
}
