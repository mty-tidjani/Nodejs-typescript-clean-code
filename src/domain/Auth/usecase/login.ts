
import * as Joi from "joi";
import { IUseCase } from "@libs/interfaces";
import { TInfractructure, THttpRequest } from "@libs/types";
import IAuthUserRepository from "../Port/IAuthRepository";

export class LoginUseCase implements IUseCase {

    constructor(private authUserRepository: IAuthUserRepository) { }

    async execute({ body }: THttpRequest, { encrypt }: TInfractructure) {
        const userData = this.vaildate(body)

        const user = await this.authUserRepository.getByEmail(userData.email)

        if (user) {
            const isMatch = encrypt.compare(userData.password, user.password)

            if (isMatch) {
                return user
            }
        }

        throw new Error('User not found')
    }

    private vaildate(data: { email: string, password: string }) {
        const schema = Joi.object({
            email: Joi.string().email().min(10).max(100).required(),
            password: Joi.string().min(6).required(),
        }).required()

        const result = schema.validate(data)

        if (result.error) {
            throw new Error(result.error.message)
        }

        return data
    }
}