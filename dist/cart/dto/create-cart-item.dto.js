"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCartItemDto = void 0;
const openapi = require("@nestjs/swagger");
class CreateCartItemDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { productId: { required: true, type: () => Number }, quantity: { required: true, type: () => Number }, userId: { required: true, type: () => Number } };
    }
}
exports.CreateCartItemDto = CreateCartItemDto;
//# sourceMappingURL=create-cart-item.dto.js.map