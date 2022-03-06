
import { THttpRequest, TInfractructure } from "src/domain/typings/types";

import { IRepository, IUseCase } from "../../typings/interfaces";
import { Todo } from "../Entities/Todo";


export class CreateTodosUseCase implements IUseCase {
    private todoRepository: IRepository;

    constructor(todoRepository: IRepository) {
        this.todoRepository = todoRepository;
    }

    async execute(data: THttpRequest, _infra: TInfractructure): Promise<any> {
        const todo = new Todo(data.body);

        return await this.todoRepository.insert({
            title: todo.title,
            description: todo.description,
            state: todo.state
        });
    }
}