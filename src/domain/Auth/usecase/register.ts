
import * as Joi from "joi";
import { IUseCase } from "@libs/interfaces";
import { TInfractructure, THttpRequest } from "@libs/types";
import { AuthUserEntity } from "../Entities/AuthUser";
import IAuthUserRepository from "../Port/IAuthRepository";

export class RegisterUseCase implements IUseCase {

    constructor(private authUserRepository: IAuthUserRepository) { }

    async execute({ body }: THttpRequest, { encrypt }: TInfractructure) {
        const userData = this.vaildate(body)

        const existingUser = await this.authUserRepository.getByEmail(userData.email)

        if (existingUser) throw new Error('Email already taken')

        const passwordHash = encrypt.hash(userData.password)

        const emailToken = encrypt.hash(userData.email)
        
        // Todo send verification email to user

        return await this.authUserRepository.create({ ...userData, password: passwordHash, emailToken })

    }

    private vaildate(data: AuthUserEntity) {
        const schema = Joi.object({
            email: Joi.string().email().min(10).max(100).required(),
            password: Joi.string().min(6).required(),
            userId: Joi.string().required(),
        }).required()

        const result = schema.validate(data)

        if (result.error) {
            throw new Error(result.error.message)
        }

        return data
    }
}