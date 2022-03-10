import { TInfractructure } from "@libs/types/common";
import { THttpRequest, THttpResponse } from "@libs/types/http";
import { IController, IUseCase } from "@libs/interfaces";

export class LoginController implements IController {

    constructor(private loginUseCase: IUseCase) { }

    async make(data: THttpRequest, infrastructure: TInfractructure): Promise<THttpResponse> {
        try {
            const result = await this.loginUseCase.execute(data.body, infrastructure)

            return {
                body: { result, statusCode: 200, success: true },
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