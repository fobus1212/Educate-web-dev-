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
exports.PromoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const fs = require("fs");
const promo_entity_1 = require("./entities/promo.entity");
let PromoService = class PromoService {
    constructor(repository) {
        this.repository = repository;
    }
    async create(dto, image) {
        return this.repository.save({
            image: image.filename,
            title: dto.promotion_type,
            text: dto.text,
        });
    }
    async findAll() {
        return this.repository.find();
    }
    async findOne(id) {
        return this.repository.findOneBy({ id });
    }
    async update(id, dto, image) {
        const toUpdate = await this.repository.findOneBy({ id });
        if (!toUpdate) {
            throw new common_1.BadRequestException(`Записи с id=${id} не найдено`);
        }
        if (dto.text) {
            toUpdate.text = dto.text;
        }
        if (dto.promotion_type) {
            toUpdate.title = dto.promotion_type;
        }
        if (image) {
            if (toUpdate.image !== image.filename) {
                fs.unlink(`X_images/promo/${toUpdate.image}`, (err) => {
                    if (err) {
                        console.error(err);
                    }
                });
            }
            toUpdate.image = image.filename;
        }
        return this.repository.save(toUpdate);
    }
    async delete(id) {
        return this.repository.delete(id);
    }
};
exports.PromoService = PromoService;
exports.PromoService = PromoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(promo_entity_1.PromoEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], PromoService);
//# sourceMappingURL=promo.service.js.map