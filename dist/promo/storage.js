"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileStorage = void 0;
const multer_1 = require("multer");
const fileName = (req, file, callback) => {
    callback(null, file.originalname);
};
exports.fileStorage = (0, multer_1.diskStorage)({
    destination: './X_images/promo',
    filename: fileName,
});
//# sourceMappingURL=storage.js.map