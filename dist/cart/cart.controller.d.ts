import { CartService } from './cart.service';
import { CreateCartItemDto } from './dto/create-cart-item.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    addToCart(productId: number, createCartItemDto: CreateCartItemDto): Promise<void>;
    getUserCart(userId: number): Promise<void>;
    updateCartItem(cartItemId: number, updateCartItemDto: UpdateCartItemDto): Promise<void>;
    removeFromCart(cartItemId: number): Promise<void>;
}
