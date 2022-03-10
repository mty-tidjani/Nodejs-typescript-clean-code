import { TInfractructure } from "@libs/types";
import { IController, IUseCase } from "@libs/interfaces";
import { THttpRequest, THttpResponse } from "@libs/types/http";

export default class UpdateTodoController implements IController {
    private updateTodouseCase: IUseCase

    constructor(updateTodouseCase: IUseCase) {
        this.updateTodouseCase = updateTodouseCase
    }

    async make({ body }: THttpRequest, infra: TInfractructure): Promise<THttpResponse> {
        try {
            // Preprocess data

            const todos = await this.updateTodouseCase.execute(body, infra)

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