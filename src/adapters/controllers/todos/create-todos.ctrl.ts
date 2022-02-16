import {IController, IUseCase} from "../../../shared/interfaces";
import { THttpRequest, THttpResponse } from "../../../shared/types/http";

export default class CreateTodoController implements IController {
    private getTodoUseCase: IUseCase

    constructor(getTodoUseCase: IUseCase) {
        this.getTodoUseCase = getTodoUseCase
    }

    async make({ body }: THttpRequest): Promise<THttpResponse> {
        try {
            const todo = await this.getTodoUseCase.run(body)

            return {
                body: { result: todo, statusCode: 201, success: true },
                statusCode: 201,
            }
        } catch (error: any) {
            return {
                body: { statusCode: 400, success: true, message: error.message },
                statusCode: 400,
            }
        }
    }
}