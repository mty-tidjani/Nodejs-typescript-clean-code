import { TInfractructure } from "src/domain/typings/types";
import { IController, IUseCase } from "../../../domain/typings/interfaces";
import { THttpRequest, THttpResponse } from "../../../domain/typings/types/http";

export default class GetTodoController implements IController {
    private getTodoUseCase: IUseCase

    constructor(getTodoUseCase: IUseCase) {
        this.getTodoUseCase = getTodoUseCase
    }

    async make({ body }: THttpRequest, infra: TInfractructure): Promise<THttpResponse> {
        try {
            const todos = await this.getTodoUseCase.run(body, infra)

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