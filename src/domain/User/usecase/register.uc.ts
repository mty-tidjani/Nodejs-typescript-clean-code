
import { IRepository, IUseCase } from "src/domain/typings/interfaces";
import { TInfractructure, THttpRequest } from "src/domain/typings/types";
import { UserEntity } from "../Entities/AuthUser";

export class RegisterUseCase implements IUseCase {
    private userRepository: IRepository

    constructor(userRepository: IRepository) {
        this.userRepository = userRepository
    }

    async execute({ body }: THttpRequest, { encrypt }: TInfractructure) {
        const userData = new UserEntity(body).getFields()

        const passwordHash = encrypt.hash(userData.password)

        const existingUser = await this.userRepository.findOne({ email: userData.email })

        if (existingUser) throw new Error('Email already taken')

        // Todo send verification email to user

        return await this.userRepository.insert({ ...userData, password: passwordHash })

    }
}