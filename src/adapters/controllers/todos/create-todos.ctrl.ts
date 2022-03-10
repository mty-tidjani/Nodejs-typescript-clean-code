import { TInfractructure } from "@libs/types";
import {IController, IUseCase} from "@libs/interfaces";
import { THttpRequest, THttpResponse } from "@libs/types/http";

export default class CreateTodoController implements IController {
   

    constructor(private getTodoUseCase: IUseCase) {}

    async make({ body }: THttpRequest, infra: TInfractructure): Promise<THttpResponse> {
        try {
            const todo = await this.getTodoUseCase.execute(body, infra)

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