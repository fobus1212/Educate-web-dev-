import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export declare const getPostgresConfig: (configService: ConfigService) => Promise<TypeOrmModuleOptions>;
