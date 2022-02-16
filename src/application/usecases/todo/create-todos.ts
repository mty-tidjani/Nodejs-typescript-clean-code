
import { Todo } from "../../../domain/entities/Todo";
import { IRepository, IUseCase } from "../../../shared/interfaces";


export class CreateTodosUseCase implements IUseCase {
    private todoRepository: IRepository;

    constructor(todoRepository: IRepository) {
        this.todoRepository = todoRepository;
    }

    async run(data: any): Promise<any> {
        const todo = new Todo(data.body);

        return await this.todoRepository.insert({
            title: todo.getTitle(),
            description: todo.getDescription(),
            state: todo.getState()
        })
    }
}