/// <reference types="multer" />
import { DeleteResult } from 'typeorm';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductEntity } from './entities/product.entity';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(dto: CreateProductDto, image: Express.Multer.File): Promise<ProductEntity>;
    findAll(categoryId: number): Promise<ProductEntity[]>;
    download(path: string, response: any): any;
    findOne(id: string): Promise<ProductEntity>;
    update(id: string, dto: UpdateProductDto, image: Express.Multer.File): Promise<ProductEntity>;
    delete(id: string): Promise<DeleteResult>;
}
