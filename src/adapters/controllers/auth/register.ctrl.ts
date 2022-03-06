import { IController, IUseCase } from "@typings/interfaces";
import { THttpRequest, THttpResponse, TInfractructure } from "@typings/types";


export class RegisterController implements IController {
    private registerUseCase: IUseCase;

    constructor(registerUseCase: IUseCase) {
        this.registerUseCase = registerUseCase
    }

    async make(data: THttpRequest, infra: TInfractructure): Promise<THttpResponse> {
        try {
            const result = await this.registerUseCase.execute(data.body, infra)

            // Todo Send Email Here

            return {
                body: { result, statusCode: 201, success: true },
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