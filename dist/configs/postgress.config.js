"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostgresConfig = void 0;
const getPostgresConfig = async (configService) => {
    return {
        type: 'postgres',
        host: configService.get('DATABASE_HOST'),
        port: parseInt(configService.get('DATABASE_PORT')),
        username: configService.get('DATABASE_USERNAME'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        synchronize: configService.get('DATABASE_SYNCHRONIZE') === 'true',
        autoLoadEntities: true,
    };
};
exports.getPostgresConfig = getPostgresConfig;
//# sourceMappingURL=postgress.config.js.map