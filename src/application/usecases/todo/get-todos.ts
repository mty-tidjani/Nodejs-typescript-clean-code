
import { IRepository, IUseCase } from "../../../shared/interfaces";

type TUseCaseResult = {

};

export class GetTodosUseCase implements IUseCase {
    private todoRepository: IRepository

    constructor(todoRepository: IRepository) {
        this.todoRepository = todoRepository;
    }

    async run(data: any): Promise<TUseCaseResult> {
        // Todo Heavy logic if needed here

        return await this.todoRepository.getAll();
    }
}