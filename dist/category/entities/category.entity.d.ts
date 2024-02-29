import { ProductEntity } from 'src/product/entities/product.entity';
export declare class CategoryEntity {
    id: number;
    name: string;
    createdAt: Date;
    products: ProductEntity[];
}
