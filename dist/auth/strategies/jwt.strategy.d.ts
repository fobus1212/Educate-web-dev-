import { UsersService } from '../../users/users.service';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userService;
    constructor(userService: UsersService);
    validate(payload: {
        id: string;
    }): Promise<{
        id: number;
    }>;
}
export {};
