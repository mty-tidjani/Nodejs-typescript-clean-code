import { AuthUserEntity } from "src/domain/Auth/Entities/AuthUser";
import IAuthUserRepository from "src/domain/Auth/Port/IAuthRepository";
import { AuthUserModel } from "../model";

export default class AuthUserRepository implements IAuthUserRepository {
    private Model = AuthUserModel

    async getByEmail(email: string): Promise<AuthUserEntity | null> {
        return await this.Model.findOne({ email })
    }

    async create(data: AuthUserEntity): Promise<AuthUserEntity | null> {
        const authUser = new this.Model(data)
        await authUser.save()

        // Todo
        return authUser.toObject() as any
    }

    async update(filter: any, data: Partial<AuthUserEntity>): Promise<AuthUserEntity | null> {
        return await this.Model.findOneAndUpdate(filter, data)
    }
}