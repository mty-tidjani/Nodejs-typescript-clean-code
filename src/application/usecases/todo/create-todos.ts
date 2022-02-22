
import { THttpRequest, TInfractructure } from "src/domain/typings/types";
import { Todo } from "../../../domain/entities/Todo";
import { IRepository, IUseCase } from "../../../domain/typings/interfaces";


export class CreateTodosUseCase implements IUseCase {
    private todoRepository: IRepository;

    constructor(todoRepository: IRepository) {
        this.todoRepository = todoRepository;
    }

    async run(data: THttpRequest, _infra: TInfractructure): Promise<any> {
        const todo = new Todo(data.body);

        return await this.todoRepository.create([{
            title: todo.getTitle(),
            description: todo.getDescription(),
            state: todo.getState()
        }])
    }
}