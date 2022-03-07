import { AuthUserEntity } from "../Entities/AuthUser";

export default interface IAuthUserRepository {
    getByEmail(email: string): Promise<AuthUserEntity | null>
    create(data: AuthUserEntity): Promise<AuthUserEntity | null>
    update(data: Partial<AuthUserEntity>): Promise<AuthUserEntity | null>
} 