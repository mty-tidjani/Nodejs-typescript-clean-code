
import { THttpRequest, TInfractructure } from "src/domain/typings/types";
import { IRepository, IUseCase } from "../../../domain/typings/interfaces";

type TUseCaseResult = {

};

export class GetTodosUseCase implements IUseCase {
    private todoRepository: IRepository

    constructor(todoRepository: IRepository) {
        this.todoRepository = todoRepository;
    }

    async execute(data: THttpRequest, _infra: TInfractructure): Promise<TUseCaseResult> {
        // Todo Heavy logic if needed here

        return await this.todoRepository.find({});
    }
}