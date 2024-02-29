/// <reference types="multer" />
import { PromoService } from './promo.service';
import { CreatePromoDto } from './dto/create-promo.dto';
import { UpdatePromoDto } from './dto/update-promo.dto';
import { PromoEntity } from './entities/promo.entity';
import { DeleteResult } from 'typeorm';
export declare class PromoController {
    private readonly promoService;
    constructor(promoService: PromoService);
    create(dto: CreatePromoDto, image: Express.Multer.File): Promise<PromoEntity>;
    findAll(): Promise<PromoEntity[]>;
    download(path: string, response: any): any;
    findOne(id: string): Promise<PromoEntity>;
    update(id: string, dto: UpdatePromoDto, image: Express.Multer.File): Promise<PromoEntity>;
    remove(id: string): Promise<DeleteResult>;
}
