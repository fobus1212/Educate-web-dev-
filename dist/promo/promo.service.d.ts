/// <reference types="multer" />
import { DeleteResult, Repository } from 'typeorm';
import { CreatePromoDto } from './dto/create-promo.dto';
import { UpdatePromoDto } from './dto/update-promo.dto';
import { PromoEntity } from './entities/promo.entity';
export declare class PromoService {
    private repository;
    constructor(repository: Repository<PromoEntity>);
    create(dto: CreatePromoDto, image: Express.Multer.File): Promise<PromoEntity>;
    findAll(): Promise<PromoEntity[]>;
    findOne(id: number): Promise<PromoEntity>;
    update(id: number, dto: UpdatePromoDto, image: Express.Multer.File): Promise<PromoEntity>;
    delete(id: number): Promise<DeleteResult>;
}
