import { CreateTodosUseCase } from "../../../application/usecases/create-todos";
import IController from "../../../shared/controller";
import { THttpRequest, THttpResponse } from "../../../shared/types/http";
import TodoRepository from "../../Repositories/TodoRepository";

export default class CreateTodoController implements IController {
    private getTodoUseCase: CreateTodosUseCase

    constructor() {
        this.getTodoUseCase = new CreateTodosUseCase(new TodoRepository())
    }

    async make(data: THttpRequest): Promise<THttpResponse> {
        try {
            const todo = await this.getTodoUseCase.run(data)

            return {
                body: { result: todo, statusCode: 201, success: true },
                statusCode: 201,
            }
        } catch (error) {
            return {
                body: { result: {}, statusCode: 400, success: true, message: error.message },
                statusCode: 400,
            }
        }

    }
}