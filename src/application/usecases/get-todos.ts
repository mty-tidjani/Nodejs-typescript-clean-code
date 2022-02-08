
import IRepository, { TRepository } from "../../shared/Repository";
import { THttpRequest } from "../../shared/types/http";
import IUseCase from "../../shared/UseCase";

type TUseCaseResult = {

}

export class GetTodosUseCase implements IUseCase<THttpRequest, Promise<TUseCaseResult>>{
    todoRepository: TRepository

    constructor(todoRepository: IRepository) {
        this.todoRepository = todoRepository.getRepository()
    }

    async run(data: THttpRequest): Promise<TUseCaseResult> {
        // Todo Heavy logic if needed here

        return await this.todoRepository.getAll()
    }
}