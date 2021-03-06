import { TInfractructure } from "@libs/types";
import { IController, IUseCase } from "@libs/interfaces";
import { THttpRequest, THttpResponse } from "@libs/types/http";

export default class GetTodoController implements IController {
    private getTodoUseCase: IUseCase

    constructor(getTodoUseCase: IUseCase) {
        this.getTodoUseCase = getTodoUseCase
    }

    async make({ body }: THttpRequest, infra: TInfractructure): Promise<THttpResponse> {
        try {
            const todos = await this.getTodoUseCase.execute(body, infra)

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