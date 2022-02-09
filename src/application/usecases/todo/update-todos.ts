
import { Todo } from "../../../domain/entities/Todo";
import IRepository from "../../../shared/Repository";
import IUseCase from "../../../shared/UseCase";


export class CreateTodosUseCase implements IUseCase {
    private todoRepository: IRepository

    constructor(todoRepository: IRepository) {
        this.todoRepository = todoRepository
    }

    async run(data: any): Promise<any> {
        const todo = new Todo(data.body)

        return await this.todoRepository.save({
            title: todo.getTitle(),
            description: todo.getDescription(),
            state: todo.getState()
        })
    }
}