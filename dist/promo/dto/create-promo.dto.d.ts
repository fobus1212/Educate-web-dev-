/// <reference types="multer" />
export declare class CreatePromoDto {
    image: Express.Multer.File;
    promotion_type: string;
    text: string;
}
