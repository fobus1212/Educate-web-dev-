import { CategoryEntity } from 'src/category/entities/category.entity';
import { CartEntity } from 'src/cart/entities/cart.entity';
export declare class ProductEntity {
    id: number;
    image: string;
    name: string;
    prices: number[];
    category: CategoryEntity;
    carts: CartEntity[];
}
