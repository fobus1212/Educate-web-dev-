"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCartItemDto = void 0;
const openapi = require("@nestjs/swagger");
class UpdateCartItemDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { quantity: { required: true, type: () => Number }, userId: { required: true, type: () => Number } };
    }
}
exports.UpdateCartItemDto = UpdateCartItemDto;
//# sourceMappingURL=update-cart-item.dto.js.map