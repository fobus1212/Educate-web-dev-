/// <reference types="multer" />
export declare class CreateProductDto {
    image: Express.Multer.File;
    name: string;
    prices: string;
    categoryId: number;
}
