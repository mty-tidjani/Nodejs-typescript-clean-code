import { UserEntity } from "src/domain/entities/User";
import { IRepository, IUseCase, IEncryptor } from "src/shared/interfaces";
import { THttpRequest } from "src/shared/types/http";

export class RegisterUseCase implements IUseCase {
    private userRepository: IRepository
    private encryptor: IEncryptor

    constructor(userRepository: IRepository, encryptor: IEncryptor) {
        this.userRepository = userRepository
        this.encryptor = encryptor
    }

    async run({ body }: THttpRequest) {
        const userData = new UserEntity(body).getFields()
        
        const passwordHash = this.encryptor.hash(userData.password)

        const check1 = await this.userRepository.findOne({ email: userData.email })

        if (check1) throw new Error('Email already taken')

        return await this.userRepository.insert({ ...userData, password: passwordHash })

    }
}