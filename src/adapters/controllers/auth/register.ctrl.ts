import { THttpRequest, THttpResponse } from "src/domain/typings/types/http";
import {IController, IUseCase} from "../../../domain/typings/interfaces";

export class RegisterController implements IController {
    private registerUseCase: IUseCase;
    
    constructor(registerUseCase: IUseCase) {
        this.registerUseCase = registerUseCase
    }

    async make(data: THttpRequest): Promise<THttpResponse> {
       try {
            const result = await this.registerUseCase.run(data.body)

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