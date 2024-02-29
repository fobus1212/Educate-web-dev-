"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const fs = require("fs");
const product_entity_1 = require("./entities/product.entity");
const category_entity_1 = require("../category/entities/category.entity");
let ProductService = class ProductService {
    constructor(productRepository, categoryRepository) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
    }
    async create(dto, image) {
        const product = new product_entity_1.ProductEntity();
        product.image = image.filename;
        product.name = dto.name;
        product.prices = dto.prices.split(',').map((x) => +x);
        const newProduct = await this.productRepository.save(product);
        const category = await this.categoryRepository.findOne({
            where: { id: dto.categoryId },
            relations: ['products'],
        });
        category.products.push(product);
        await this.categoryRepository.save(category);
        return newProduct;
    }
    async findAll() {
        return this.productRepository.find();
    }
    async findOne(id) {
        return this.productRepository.findOneBy({ id });
    }
    async findByCategoryId(categoryId) {
        return this.productRepository
            .createQueryBuilder('product')
            .leftJoinAndSelect('product.category', 'category')
            .where('product.categoryId = :categoryId', { categoryId })
            .getMany();
    }
    async update(id, dto, image) {
        const toUpdate = await this.productRepository.findOneBy({ id });
        if (!toUpdate) {
            throw new common_1.BadRequestException(`Записи с id=${id} не найдено`);
        }
        if (dto.name)
            toUpdate.name = dto.name;
        if (dto.prices)
            toUpdate.prices = dto.prices.split(',').map((x) => +x);
        if (dto.categoryId) {
            const category = await this.categoryRepository.findOne({
                where: { id: dto.categoryId },
                relations: ['products'],
            });
            toUpdate.category = category;
        }
        if (image) {
            if (toUpdate.image !== image.filename) {
                fs.unlink(`db_images/product/${toUpdate.image}`, (err) => {
                    if (err) {
                        console.error(err);
                    }
                });
            }
            toUpdate.image = image.filename;
        }
        return this.productRepository.save(toUpdate);
    }
    async delete(id) {
        return this.productRepository.delete(id);
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(product_entity_1.ProductEntity)),
    __param(1, (0, typeorm_2.InjectRepository)(category_entity_1.CategoryEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], ProductService);
//# sourceMappingURL=product.service.js.map