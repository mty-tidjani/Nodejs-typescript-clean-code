
import { Todo } from "../../domain/entities/Todo";
import IRepository, { TRepository } from "../../shared/Repository";
import { THttpRequest } from "../../shared/types/http";
import IUseCase from "../../shared/UseCase";


export class CreateTodosUseCase implements IUseCase<THttpRequest, Promise<any>>{
    todoRepository: TRepository

    constructor(todoRepository: IRepository) {
        this.todoRepository = todoRepository.getRepository()
    }

    async run(data: THttpRequest): Promise<any> {
        const todo = new Todo(data.body)

        return await this.todoRepository.save({
            title: todo.getTitle(),
            description: todo.getDescription(),
            state: todo.getState()
        })
    }
}