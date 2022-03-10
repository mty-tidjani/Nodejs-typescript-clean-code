
import { THttpRequest, TInfractructure } from "@libs/types";

import { IUseCase } from "@libs/interfaces";
import { Todo } from "../Entities/Todo";
import ITodoRepository from "../Port/ITodoRepository";


export class CreateTodosUseCase implements IUseCase {

    constructor(private todoRepository: ITodoRepository) {
    }

    async execute(data: THttpRequest, _infra: TInfractructure): Promise<any> {
        const todo = new Todo(data.body);

        return await this.todoRepository.create({
            title: todo.title,
            description: todo.description,
            state: todo.state
        });
    }
}