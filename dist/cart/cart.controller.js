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
exports.CartController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const cart_service_1 = require("./cart.service");
const create_cart_item_dto_1 = require("./dto/create-cart-item.dto");
const update_cart_item_dto_1 = require("./dto/update-cart-item.dto");
let CartController = class CartController {
    constructor(cartService) {
        this.cartService = cartService;
    }
    addToCart(productId, createCartItemDto) {
        return this.cartService.addToCart(productId, createCartItemDto.quantity, createCartItemDto.userId);
    }
    getUserCart(userId) {
        return this.cartService.getUserCart(userId);
    }
    updateCartItem(cartItemId, updateCartItemDto) {
        return this.cartService.updateCartItemQuantity(cartItemId, updateCartItemDto.quantity, updateCartItemDto.userId);
    }
    removeFromCart(cartItemId) {
        return this.cartService.removeFromCart(cartItemId);
    }
};
exports.CartController = CartController;
__decorate([
    (0, common_1.Post)(':productId'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Param)('productId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_cart_item_dto_1.CreateCartItemDto]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "addToCart", null);
__decorate([
    (0, common_1.Get)(':userId'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "getUserCart", null);
__decorate([
    (0, common_1.Patch)(':cartItemId'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('cartItemId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_cart_item_dto_1.UpdateCartItemDto]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "updateCartItem", null);
__decorate([
    (0, common_1.Delete)(':cartItemId'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('cartItemId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "removeFromCart", null);
exports.CartController = CartController = __decorate([
    (0, common_1.Controller)('cart'),
    __metadata("design:paramtypes", [cart_service_1.CartService])
], CartController);
//# sourceMappingURL=cart.controller.js.map