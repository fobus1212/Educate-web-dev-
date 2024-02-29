/// <reference types="multer" />
import { DeleteResult, Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductEntity } from './entities/product.entity';
import { CategoryEntity } from 'src/category/entities/category.entity';
export declare class ProductService {
    private productRepository;
    private categoryRepository;
    constructor(productRepository: Repository<ProductEntity>, categoryRepository: Repository<CategoryEntity>);
    create(dto: CreateProductDto, image: Express.Multer.File): Promise<ProductEntity>;
    findAll(): Promise<ProductEntity[]>;
    findOne(id: number): Promise<ProductEntity>;
    findByCategoryId(categoryId: number): Promise<ProductEntity[]>;
    update(id: number, dto: UpdateProductDto, image: Express.Multer.File): Promise<ProductEntity>;
    delete(id: number): Promise<DeleteResult>;
}
