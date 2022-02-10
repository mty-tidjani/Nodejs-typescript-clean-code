import IController from "../../../shared/controller";
import { THttpRequest, THttpResponse } from "../../../shared/types/http";
import IUseCase from "../../../shared/UseCase";

export default class GetTodoController implements IController {
    private getTodoUseCase: IUseCase

    constructor(getTodoUseCase: IUseCase) {
        this.getTodoUseCase = getTodoUseCase
    }

    async make({ body }: THttpRequest): Promise<THttpResponse> {
        try {
            const todos = await this.getTodoUseCase.run(body)

            return {
                body: { result: todos, statusCode: 200, success: true },
                statusCode: 200,
            }
        } catch (error: any) {
            return {
                body: { statusCode: 400, success: true, message: error.message },
                statusCode: 400,
            }
        }
    }
}