import { GetTodosUseCase } from "../../../3_application/usecases/get-todos";
import IController from "../../../shared/controller";
import { THttpRequest, THttpResponse } from "../../../shared/types/http";
import TodoRepository from "../../Repositories/TodoRepository";

export default class GetTodoController implements IController {
    private getTodoUseCase: GetTodosUseCase

    constructor() {
        this.getTodoUseCase = new GetTodosUseCase(new TodoRepository())
    }

    async make(data: THttpRequest): Promise<THttpResponse> {
        // throw new Error("Method not implemented.");
        try {
            const todos = await this.getTodoUseCase.run(data)

            return {
                body: { result: todos, statusCode: 200, success: true },
                statusCode: 200,
                headers: {},
            }
        } catch (error) {
            return {
                body: { result: {}, statusCode: 200, success: true },
                statusCode: 200,
                headers: {},
            }
        }

    }
}