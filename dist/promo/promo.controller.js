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
exports.PromoController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
const promo_service_1 = require("./promo.service");
const storage_1 = require("./storage");
const create_promo_dto_1 = require("./dto/create-promo.dto");
const update_promo_dto_1 = require("./dto/update-promo.dto");
let PromoController = class PromoController {
    constructor(promoService) {
        this.promoService = promoService;
    }
    create(dto, image) {
        return this.promoService.create(dto, image);
    }
    findAll() {
        return this.promoService.findAll();
    }
    download(path, response) {
        return response.sendFile(path, { root: './X_images/promo' });
    }
    findOne(id) {
        return this.promoService.findOne(+id);
    }
    update(id, dto, image) {
        return this.promoService.update(+id, dto, image);
    }
    remove(id) {
        return this.promoService.delete(+id);
    }
};
exports.PromoController = PromoController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', { storage: storage_1.fileStorage })),
    openapi.ApiResponse({ status: 201, type: require("./entities/promo.entity").PromoEntity }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_promo_dto_1.CreatePromoDto, Object]),
    __metadata("design:returntype", Promise)
], PromoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("./entities/promo.entity").PromoEntity] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PromoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/image/:path'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('path')),
    __param(1, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PromoController.prototype, "download", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/promo.entity").PromoEntity }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PromoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', { storage: storage_1.fileStorage })),
    openapi.ApiResponse({ status: 200, type: require("./entities/promo.entity").PromoEntity }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_promo_dto_1.UpdatePromoDto, Object]),
    __metadata("design:returntype", Promise)
], PromoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PromoController.prototype, "remove", null);
exports.PromoController = PromoController = __decorate([
    (0, swagger_1.ApiTags)('promo'),
    (0, common_1.Controller)('promo'),
    __metadata("design:paramtypes", [promo_service_1.PromoService])
], PromoController);
//# sourceMappingURL=promo.controller.js.map