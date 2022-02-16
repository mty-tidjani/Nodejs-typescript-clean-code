import { IRepository, IUseCase } from "src/shared/interfaces";
import { THttpRequest } from "src/shared/types/http";

export class RegisterUseCase implements IUseCase {
    private userRepository: IRepository

    constructor(userRepository: IRepository) {
        this.userRepository = userRepository
    }

    run(data: THttpRequest) {

        throw new Error("Method not implemented.");
    }
}